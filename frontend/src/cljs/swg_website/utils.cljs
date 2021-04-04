(ns swg-website.utils
  (:require
   [clojure.string :rename  {replace sreplace} :refer [includes?]]
   [cljs.reader :refer [read-string]]
   [goog.html.textExtractor :refer [extractTextContent]]
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

(defn parse-hiccup-string
  "Hopefully does what it says"
  [hiccup-str]
  (let [t-hic (includes? (extractTextContent hiccup-str) "]")
        [tag _ text] (read-string hiccup-str)]
   (if t-hic
   [tag text]
    hiccup-str)))

(comment
  (defn verify-mkdown
    "Verifies that markdown is good and has no malicious html"
    [mkdown-str]
    (-> mkdown-str
        (:TODO Finish))))