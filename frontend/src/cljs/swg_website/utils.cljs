(ns swg-website.utils
  (:require [clojure.string :rename  {replace sreplace}]))

(defn make-search-term [string]
  (-> string
      (sreplace " " "-")))
