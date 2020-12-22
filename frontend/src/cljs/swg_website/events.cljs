(ns swg-website.events
  (:require
   [ajax.core :as ajax]
   [re-frame.core :as re-frame]
   [re-frame-fx.dispatch]
   [reitit.frontend.controllers :as rfc]
   [reitit.frontend.easy :as rfe]
   [swg-website.db :as db]
   [swg-website.queries :as q]
   [day8.re-frame.tracing :refer-macros [fn-traced]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::save-name
 (fn-traced [db [_ id name]]
    (assoc db id name)))

;; TODO: Figure out what's happening here
(re-frame/reg-event-db
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

;; Effect - Triggering nav from events ;;
(re-frame/reg-fx
 :push-state
 (fn [route]
   (apply rfe/push-state route)))

(re-frame/reg-event-fx
 ::get-neighbors
 (fn    
   [{db :db} _]     ;; <-- 1st argument is coeffect, from which we extract db 
    (let [wid (get-in db [:cs :wid])] ;TODO: Will probably have to grab wid from a sub to the search bar
      {:http-xhrio {:method          :get
                    :uri             (str "http://localhost:5000/neighbors/" wid)
                    :format          (ajax/json-request-format)
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success      [:process-response]
                    :on-failure      [:bad-response]}
     :db  (assoc db :loading? true)})))

(re-frame/reg-event-fx
 ::get-writers
 (fn
   [{db :db} _]
   (let [name (get-in db [:search-term])] ;TODO: Will probably have to grab name from a sub to the search bar
     {:http-xhrio {:method          :get
                   :uri             (str "http://localhost:5000/writers/name_search/" name)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [:writers-response]
                   :on-failure      [:bad-response]}
      :db  (assoc db :loading? true)})))

(re-frame/reg-event-db
 ::writers-response
 (fn
   [db [_ response]]
   (-> db
       (q/set-loading-state false)
       (q/set-search-results response))))

(re-frame/reg-event-db
 ::bad-response
 (fn
   [db [_ response]] 
   (-> db
       (q/set-loading-state false)
       (q/set-error-message response))))


