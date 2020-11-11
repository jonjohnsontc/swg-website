(ns swg-website.events
  (:require
   [ajax.core :as ajax]
   [re-frame.core :as re-frame]
   [re-frame-fx.dispatch]
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

(re-frame/reg-event-db
 ::search-input
 (fn [db [_ term]]
   (assoc db :search-term term)))

(comment                                        ;; I think this needs at least one more effect before this does anything
  (re-frame/reg-event-fx                           ;; note the trailing -fx
    ::issue-debounce                ;; usage:  (dispatch [:handler-with-debounce])
    (fn [fx [_ value]]                    ;; the first param will be "world"
      {:dispatch-debounce {:key :search
                           :event [:search value]
                           :delay 250}})))

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
   (let [name (get-in db [:cs :wid])] ;TODO: Will probably have to grab name from a sub to the search bar
     {:http-xhrio {:method          :get
                   :uri             (str "http://localhost:5000/writers/name_search/" name)
                   :format          (ajax/json-request-format)
                   :response-format (ajax/json-response-format {:keywords? true})
                   :on-success      [:process-response]
                   :on-failure      [:bad-response]}
      :db  (assoc db :loading? true)})))

(re-frame/reg-event-db
 ::bad-response
 (fn
   [db [_ response]] 
   (-> db
       (q/set-loading-state false)
       (q/set-error-message response))))


