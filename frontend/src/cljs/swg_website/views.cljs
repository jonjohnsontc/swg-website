(ns swg-website.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.box :refer [box h-box v-box scroller]]
   [re-com.buttons :rename {md-circle-icon-button icon}
                   :refer [button]]
   [re-com.misc :refer [input-text]]
   [re-com.text :refer [label]]
   [swg-website.events :as events]
   [swg-website.subs :as subs]))

(def gh-address
  "https://github.com/jonjohnsontc/songwriter-graph")

;; Event Handlers(??)
(defn update-search-term [term]
  (re-frame/dispatch [::events/save-name :search-term term]))

(defn search-for-writer []
  (re-frame/dispatch [::events/get-writers]))

;; Sub-panels
(defn footer []
  [box
   :class "footer"
   :child "Copyright 2020 Jon Johnson"])

(defn nav-button [name on-change]
  [label
   :label name
   :on-change #(re-frame/dispatch [on-change %])
   :class (str name "-button")])

(defn results-listing []
  (let [results @(re-frame/subscribe [::subs/current-search])]
    [box
     :child results]))

(defn search-bar []
  (let [term @(re-frame/subscribe [::subs/search-term])]
    [input-text
     :attr {:id "box"}
     :change-on-blur? false
     :model term
     :on-change #(re-frame/dispatch [::events/save-name :search-term %])]))

;; Panels
(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        term (re-frame/subscribe [::subs/search-term])]
    [[:header
     [:h1.welcome @name] [:div.options
                          [:div "About"] [:div "Blog"]]]
    [:article.search-box [:h2 "Search for a writer here:"]
     [:input 
      {:type "text"
       :value @term
       :on-change #(update-search-term (-> %  .-target .-value))}]
     [:button "Go"]]]))

(defn main-panel-box-layout []
  (let [name (re-frame/subscribe [::subs/name])
        term (re-frame/subscribe [::subs/search-term])]
   [v-box
    :class "app"
    :children [[h-box
                :class "header"
                :children [[:h1.welcome @name]
                           [:div.options 
                            [:div "About"] 
                            [label :label "Github" :attr {:href gh-address}]]]]
               [v-box
                :class "home-area"
                :children [[:h2.prompt "Search for a writer here:"]
                           [h-box 
                            :class "search-area"
                            :gap "5px"
                            :children [[search-bar]
                                       [button 
                                        :label "Go" 
                                        :class "search-button"]]]]]
               [footer]]]))

(defn results-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [v-box
     :class "app"
     :children [[h-box
                 :class "header"
                 :gap "5px"
                 :children [[:h1.welcome @name][search-bar][button :label "Go" :class "search-button"][:div "About"][:div {:a "GitHub" :ref "https://github.com/jonjohnsontc/songwriter-graph"}]]]
                [box
                 :class "home-area"
                 :child [results-listing]]
                [footer]]]))


