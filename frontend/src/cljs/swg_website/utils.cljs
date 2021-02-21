(ns swg-website.utils)

(defn make-search-term [string]
  (-> string
      (clojure.string/replace " " "-")))
