(ns swg-website.events
  (:require
   [ajax.core :as ajax]
   [clojure.string :refer [lower-case]]
   [cljs-http.client :as http]
   [re-frame.core :as re-frame]
   [day8.re-frame.http-fx]
   [reitit.core :as r]
   [reitit.frontend.controllers :as rfc]
   [reitit.frontend.easy :as rfe]
   [swg-website.config :refer [debug?]]
   [swg-website.db :as db]
   [swg-website.queries :as q]))

;; Effect Registrations
;; 

;; Triggering nav from events
(re-frame/reg-fx
 :push-state
 (fn [route]
   (apply rfe/push-state route)))

;; Event Registrations
;; single effects or pretty simple
;; 
(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::save-name
 (fn [db [_ id name]]
    (assoc db id name)))

(re-frame/reg-event-db
 ::clear-search
 (fn [db [_]]
   (assoc db :cs nil)))

(re-frame/reg-event-db
 ::clear-current-writer
 (fn [db [_]]
   (-> db
       (assoc :current-writer nil)
       (assoc :writer-matches nil))))

(re-frame/reg-event-db
 ::prev-page
 (fn [db [_]]
   (let [pg-number (get-in db [:cs :results-page-number])]
     (assoc-in db [:cs :results-page-number] (dec pg-number)))))

(re-frame/reg-event-db
 ::next-page
 (fn [db [_]]
   (let [pg-number (get-in db [:cs :results-page-number])]
     (assoc-in db [:cs :results-page-number] (inc pg-number)))))

(re-frame/reg-cofx
 ::current-url
 (fn [cofx]
   (let [loc (.-location js/document)]
     (assoc cofx ::current-url {:full  (str loc)
                                :path  (.-pathname loc)
                                :query (.-search loc)
                                :hash  (.-hash loc)}))))

(re-frame/reg-event-db
 ::toggle-burger-menu
 (fn [db [_]]
   (let [burger-status (:burger-menu db)]
     (assoc db :burger-menu (not burger-status)))))

(re-frame/reg-event-db
 ::toggle-search-bar-focus
 (fn [db [_]]
   (let [focus (:search-bar-focus db)]
     (if (= true focus)
       (assoc db :search-bar-focus false)
       (assoc db :search-bar-focus true)))))

(re-frame/reg-event-fx
 ::init-router 
 [(re-frame/inject-cofx  ::current-url)]
 (fn [cofx [_ router]]
   (let [path  (lower-case (:path (::current-url cofx)))
         match (r/match-by-path router path)]
     (if (= match nil)
       {:db (assoc (:db cofx)
                   :active-route (r/match-by-path router "/404"))}
       {:db (assoc (:db cofx)
                 :active-route (r/match-by-path router path))}))))

;; The event used to navigate to a another route
(re-frame/reg-event-fx
 ::push-state
 (fn [db [_ & route]]
   {:push-state route}))

;; TODO: Figure out what's happening here
(re-frame/reg-event-db
 ::navigated
 (fn
  [db [_ new-match]]
  (let [old-match (:active-route db)
        controllers (rfc/apply-controllers (:controllers old-match) new-match)]
    (-> db
        (assoc :active-route (assoc new-match :controllers controllers))
        (assoc :burger-menu false)))))

;; TODO: clear writer and neighbor listings as well
;; TODO: should this just re-initialize the default app-db?
(re-frame/reg-event-fx
 ::clear-search-and-go-home
 (fn [{db :db} [_]]
   {:db (assoc db :search-term nil)
    :dispatch [::push-state :routes/home]}))

(re-frame/reg-event-fx
 ::clear-search-and-load-writer
 (fn [{db :db} [_ writer-map]]
   {:db (assoc db :search-term nil)
    :dispatch [::push-state :routes/writer {:wid (:wid writer-map)}]}))

(re-frame/reg-event-fx
 ::save-name-and-search
 (fn [{db :db} [_ term]]
   {:db (assoc db :search-term term)
    :dispatch [::push-state :routes/search term]}))

;; HTTP Request Related Events 
;; 
(re-frame/reg-event-fx
 ::get-neighbors
 (fn   
  [{db :db} [_ writer-map]]     ;; <-- 1st argument is coeffect, from which we extract db
  (let [uri (if debug? "http://localhost:5000/neighbors/" "/neighbors/")]
    
    ;; We set the title for a writer result page here. All others are done in `core/routes`
    (set! (.-title js/document) (str (:writer_name writer-map) " - Songwriter Graph"))
    
    {:http-xhrio {:method          :get
                 :uri             (str uri (:wid writer-map))
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::neighbors-response (:wid writer-map)]
                 :on-failure      [::bad-response]}
    :db  (-> db
             (assoc :loading? true)
             (assoc :current-writer writer-map))})))

(re-frame/reg-event-fx
 ::get-writer
 (fn
   [{db :db} [_ wid]]
   (let [uri (if (= debug? true) "http://localhost:5000/writers/wid/" "/writers/wid/")]
     {:http-xhrio {:method          :get
                   :uri             (str uri wid)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [::writer-response]
                   :on-failure      [::bad-response]}
      :db  (-> db
               (assoc :loading? true))})))

(re-frame/reg-event-fx
 ::get-random-writer
 (fn
   [{db :db} [_]]
   (let [uri (if (= debug? true) "http://localhost:5000/writers/random" "/writers/random")]
     {:http-xhrio {:method          :get
                   :uri             uri
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [::writer-response]
                   :on-failure      [::bad-response]}
      :db  (-> db
               (assoc :loading? true))})))

(re-frame/reg-event-fx
 ::get-writers
 (fn
   [{db :db} [_ term]]
   (let [split-term (clojure.string/replace term #"-" " ")
         term-str   (apply str split-term)
         uri        (if (= debug? true)
                      "http://localhost:5000/writers/name_search/"
                      "/writers/name_search/")]
     {:http-xhrio {:method          :get
                   :uri             (str uri term-str)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [::writers-response]
                   :on-failure      [::bad-response]}
      :db  (-> db 
               (assoc :loading? true)
               (assoc :search-term term-str))})))

(re-frame/reg-event-fx
 ::get-post
 (fn
   [{db :db} [_ id blog?]]
   (let [uri (if (= debug? true) "http://localhost:5000/posts/" "/posts/")]
     {:http-xhrio {:method          :get
                   :uri             (str uri id)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [::post-response blog?]
                   :on-failure      [::bad-response]}
      :db  (-> db
               (assoc :loading? true))})))

(re-frame/reg-event-fx
 ::writers-response
 (fn
  [{db :db} [_ response]]
  {:db   (-> db
             (q/set-loading-state false)
             (q/set-search-results response))}))

(re-frame/reg-event-fx
 ::writer-response
 (fn
   [{db :db} [_ response]]
   {:db   (-> db
              (q/set-loading-state false))
    :dispatch [::get-neighbors response]}))


(re-frame/reg-event-fx
 ::neighbors-response
 (fn
  [{db :db} [_ wid response]]
  {:db   (-> db
             (q/set-loading-state false)
             (q/set-neighbors response))}))

(re-frame/reg-event-fx
 ::post-response
 (fn
   [{db :db} [_ blog? response]]
   (if blog?
     {:db   (-> db
                (q/set-loading-state false)
                ;; Eventually, this will assoc blog posts
                ;; to the blog page
                (comment (assoc db :blog response)))}
     {:db   (-> db
                (q/set-loading-state false)
                (assoc :about-page response))})))


(re-frame/reg-event-db
 ::bad-response
 (fn
   [db [_ response]] 
   (-> db
       (q/set-loading-state false)
       (q/set-error-message response))))
