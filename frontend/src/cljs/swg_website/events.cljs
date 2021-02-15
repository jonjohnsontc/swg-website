(ns  swg-website.events
  (:require
   [ajax.core :as ajax]
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
   (assoc db :search-term nil)))

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
     (assoc cofx ::current-url {:path  (.-pathname loc)
                                :query (.-search loc)
                                :hash  (.-hash loc)}))))

(re-frame/reg-event-db
 ::toggle-burger-menu
 (fn [db [_]]
   (let [burger-status (:burger-menu db)]
     (if (= true burger-status)
       (assoc db :burger-menu false)
       (assoc db :burger-menu true)))))

(re-frame/reg-event-db
 ::toggle-search-bar-focus
 (fn [db [_]]
   (let [focus (:search-bar-focus db)]
     (if (= true focus)
       (assoc db :search-bar-focus false)
       (assoc db :search-bar-focus true)))))

(re-frame/reg-event-fx
 ::init-router 
 ^{:doc "Initializes the router and points the app at the proper route"}
 [(re-frame/inject-cofx  ::current-url)]
 (fn [cofx [_ router]]
   (let [path (:path (::current-url cofx))]
     {:db (assoc (:db cofx)
                 :active-route (r/match-by-path router path))})))

(re-frame/reg-event-fx
 ::push-state
 ^{:doc "The event used to navigate to a another route"}
 (fn [db [_ & route]]
   {:push-state route}))

;; TODO: Figure out what's happening here
(re-frame/reg-event-db
 ::navigated
 (fn
  [db [_ new-match]]
  (let [old-match (:active-route db)
        controllers (rfc/apply-controllers (:controllers old-match) new-match)]
    (assoc db :active-route (assoc new-match :controllers controllers)))))

(re-frame/reg-event-fx
 ::clear-search-and-go-home
 (fn [{db :db} [_]]
   {:db (assoc db :search-term nil)
    :dispatch [::push-state :routes/home]}))

;; HTTP Request Related Events 
;; 
(re-frame/reg-event-fx
 ::get-neighbors
 (fn   
  [{db :db} [_ writer-map]]     ;; <-- 1st argument is coeffect, from which we extract db
  (let [uri (if (= debug? true) "http://localhost:5000/neighbors/" "/neighbors/")]
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
 ::get-writers
 (fn [{db :db} _]
   (let [term (get-in db [:search-term])
         uri (if (= debug? true) "http://localhost:5000/writers/name_search/" "/writers/name_search/")]
     {:http-xhrio {:method          :get
                   :uri             (str uri term)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [::writers-response] 
                   :on-failure      [::bad-response]}
      :db  (assoc db :loading? true)})))

(re-frame/reg-event-fx
 ::writers-response
  ^{:doc "Takes writer search results as response, and tosses it in the app-db. 
    It also associates a number of stats about the results to the app-db 
    to compute pagination"}
 (fn [{db :db} [_ response]]
  (let [res-count (count (js->clj response))
        pg-count (int (+ (/ res-count 10) 1))] 
   {:db   (-> db
              (assoc-in [:cs :results-page-number] 1)
              (assoc-in [:cs :results-count] res-count)
              (assoc-in [:cs :results-pages] pg-count)
              (q/set-loading-state false)
              (q/set-search-results response))})))

(re-frame/reg-event-fx
 ::neighbors-response
 (fn
  [{db :db} [_ wid response]]
  {:db   (-> db
             (q/set-loading-state false)
             (q/set-neighbors response))
   :dispatch [::push-state :routes/writer {:wid wid}]}))

(re-frame/reg-event-db
 ::bad-response
 (fn
   [db [_ response]] 
   (-> db
       (q/set-loading-state false)
       (q/set-error-message response))))


