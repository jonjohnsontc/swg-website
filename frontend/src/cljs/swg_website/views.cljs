(ns swg-website.views
  (:require
   [re-frame.core :as re-frame]
   [swg-website.events :as events]
   [swg-website.subs :as subs]))

(defn update-search-term [term]
  (re-frame/dispatch [::events/save-name :search-term term]))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        term (re-frame/subscribe [::subs/search-term])]
    [:div [:h1 "Welcome to " @name]]
    [:div [:h2 "Search for a writer here"] 
     [:input {:type "text"
              :value @term
              :on-change #(update-search-term (-> %  .-target .-value))}]]))