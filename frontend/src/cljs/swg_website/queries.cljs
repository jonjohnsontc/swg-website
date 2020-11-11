(ns swg-website.queries
  (:require
   [re-frame.core :as re-frame]))

(defn get-current-writer
  [db]
  (get-in db [:cs :wid]))

(defn set-id-val [db id val]
  (assoc db id val))
