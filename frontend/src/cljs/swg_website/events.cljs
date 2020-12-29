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
 (fn-traced [db [_ id name]]
    (assoc db id name)))

;; The event used to navigate to a another route
(re-frame/reg-event-fx
 ::push-state
 (fn [db [_ & route]]
   {:push-state route}))

;; TODO: Figure out what's happening here
(re-frame/reg-event-db
 ::navigated
 (fn [db [_ new-match]]
   (let [old-match (:active-route db)
         controllers (rfc/apply-controllers (:controllers old-match) new-match)]
     (assoc db :active-route (assoc new-match :controllers controllers)))))

;; HTTP Request Related Events 
;; 
(re-frame/reg-event-fx
 ::get-neighbors
 (fn-traced    
  [{db :db} [_ wid]]     ;; <-- 1st argument is coeffect, from which we extract db
  {:http-xhrio {:method          :get
                :uri             (str "/neighbors/" wid)
                :format          (ajax/json-request-format)
                :response-format (ajax/json-response-format {:keywords? true})
                :on-success      [::neighbors-response]
                :on-failure      [::bad-response]}
   :db  (assoc db :loading? true)}))

(re-frame/reg-event-fx
 ::get-writers
 (fn
   [{db :db} _]
   (let [term (get-in db [:search-term])] ;TODO: Will probably have to grab name from a sub to the search bar
     {:http-xhrio {:method          :get
                   :uri             (str "/writers/name_search/" term)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [::writers-response]
                   :on-failure      [::bad-response]}
      :db  (assoc db :loading? true)})))

(re-frame/reg-event-fx
 ::writers-response
 (fn-traced
  [{db :db} [_ response]]
  {:db   (-> db
             (q/set-loading-state false)
             (q/set-search-results response))
   :dispatch [::push-state :routes/search]}))

(re-frame/reg-event-fx
 ::neighbors-response
 (fn-traced
  [{db :db} [_ response]]
  {:db   (-> db
             (q/set-loading-state false)
             (q/set-neighbors response))
   :dispatch [::push-state :routes/writer]}))

(re-frame/reg-event-db
 ::bad-response
 (fn
   [db [_ response]] 
   (-> db
       (q/set-loading-state false)
       (q/set-error-message response))))


