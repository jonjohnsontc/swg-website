(ns  swg-website.events
  (:require
   [ajax.core :as ajax]
   [re-frame.core :as re-frame]
   [day8.re-frame.http-fx]
   [reitit.frontend.controllers :as rfc]
   [reitit.frontend.easy :as rfe]
   [swg-website.db :as db]
   [swg-website.queries :as q]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

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
  {:http-xhrio {:method          :get
                :uri             (str "/neighbors/" (:wid writer-map))
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::neighbors-response (:wid writer-map)]
                :on-failure      [::bad-response]}
   :db  (-> db 
            (assoc :loading? true)
            (assoc :current-writer writer-map))}))

(re-frame/reg-event-fx
 ::get-writers
 (fn
   [{db :db} _]
   (let [term (get-in db [:search-term])]
     {:http-xhrio {:method          :get
                   :uri             (str "/writers/name_search/" term)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   ; We pass on the search term to the router,
                   ; which hasn't yet loaded the page
                   :on-success      [::writers-response term] 
                   :on-failure      [::bad-response]}
      :db  (assoc db :loading? true)})))

(re-frame/reg-event-fx
 ::writers-response
 (fn
  [{db :db} [_ term response]]
  {:db   (-> db
             (q/set-loading-state false)
             (q/set-search-results response))
   :dispatch [::push-state :routes/search {:term term}]}))

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


