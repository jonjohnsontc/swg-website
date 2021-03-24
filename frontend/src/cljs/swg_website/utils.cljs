(ns swg-website.utils
  (:require
   [clojure.string :rename  {replace sreplace}]
   [markdown.core :refer [md->html]]
   [reagent-hickory.sweet :refer [html->hiccup]]))

(defn make-search-term [string]
  (-> string
      (sreplace " " "-")))

(defn read-mkdown
  "Takes a markdown string and returns hiccup"
  [mkdown-str]
  (-> mkdown-str
      (str)
      (md->html)
      (html->hiccup)))
