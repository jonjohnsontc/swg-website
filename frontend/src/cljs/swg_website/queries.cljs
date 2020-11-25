(ns swg-website.queries
  (:require
   [re-frame.core :as re-frame]))

(defn get-current-writer [db]
  (get-in db [:cs :wid]))

(defn set-loading-state [db val]
  (assoc-in db [:loading-state] val))

(defn set-id-val [db id val]
  (assoc db id val))

(defn set-search-results [db results]
  (assoc db :search-results results))
