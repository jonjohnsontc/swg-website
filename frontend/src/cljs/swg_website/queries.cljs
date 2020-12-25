(ns swg-website.queries)

(defn get-current-writer [db]
  (get-in db [:cs :wid]))

(defn set-loading-state [db val]
  (assoc-in db [:loading-state] val))

(defn set-id-val [db id val]
  (assoc db id val))

(defn set-search-results [db results]
  (assoc-in db [:cs :values] (js->clj results)))

(defn set-error-message [db response]
  (assoc db :error-msg response))