(ns swg-website.views
  (:require
   [clojure.string :refer [trim]]
   [re-frame.core :as re-frame]
   [re-com.box :refer [box h-box v-box scroller]]
   [re-com.buttons :rename {md-circle-icon-button icon}
                   :refer [button hyperlink]]
   [re-com.misc :refer [input-text]]
   [re-com.text :refer [label title]]
   [swg-website.events :as events]
   [swg-website.subs :as subs]))

(def gh-address
  "https://github.com/jonjohnsontc/songwriter-graph")

;; Event Handlers(??)
(defn update-search-term [term]
  (re-frame/dispatch [::events/save-name :search-term term]))

(defn search-for-writer []
  (re-frame/dispatch [::events/get-writers]))

(defn search-for-neighbors [wid]
  (re-frame/dispatch [::events/get-neighbors wid]))

;; Sub-panels
(defn footer []
  [box
   :class "footer"
   :child "Copyright 2020 Jon Johnson"])

(defn writer-link
  "Links to page corresponding to the wid of result"
  [text]
  [:a {:href (str "/neighbors/" text)} text])

;; TODO: on-click isn't giving the text a link to click on
;; TODO: styles don't make this look like how it should yet
(defn logo []
  (let [name @(re-frame/subscribe [::subs/name])]
    [label 
      :class "welcome"
      :label name
      :on-click #(re-frame/dispatch [::events/push-state :routes/home])]))

(defn nav-button [name on-change]
  [hyperlink
   :label name
   :on-change #(re-frame/dispatch [on-change %])
   :class (str name "-button")])

(defn results-listing []
  (let [results (:values @(re-frame/subscribe [::subs/current-search]))]
    [:div
     [:div.sub-heading "Search Results"]
     [:div
     (into [:ul] (map #(vector :li.writer-result
                               [hyperlink :label (trim (:writer_name %))]
                               [:div (:wid %)])
                      results))]]))

(defn search-bar []
  (let [term @(re-frame/subscribe [::subs/search-term])]
    [input-text
     :attr {:id "box"}
     :change-on-blur? false
     :model term
     :on-change #(re-frame/dispatch [::events/save-name :search-term %])]))

(defn writer-body []
  (let [writer @(re-frame/subscribe [::subs/current-writer])
        writer-matches @(re-frame/subscribe [::subs/writer-matches])]
    [v-box
     :children [[box :child [:div.writer-name (:writer-name writer)]]
                [box :child [:div.ipi (:ipi writer)]]
                [box :child [:div.sub-heading "Closest Matches"]]
                [box :child 
                 [:div.writer-matches 
                  (into [:ul] (map #(vector :li.writer-result
                                            [hyperlink
                                             :label (:writer_name %)
                                            ;;  Don't know if this will work yet
                                             :on-click (search-for-neighbors %)])
                                              writer-matches))]]]
     ]))

;; TODO: Doesn't work - fix
(defn header 
  "The header for the website. Including elements will shimmy them in-between the logo
   and About/GitHub links"
  ([]
  [h-box
   :class "header"
   :children [:class "header"
              :gap "5px"
              :children
              [[:h1.welcome @name]
               [:div "About"]
               [:div {:a "GitHub" :ref "https://github.com/jonjohnsontc/songwriter-graph"}]]]])
  ([& elements]
   [h-box
    :class "header"
    :children [:class "header"
               :gap "5px"
               :children
               [[:h1.welcome @name]
                (map #(vector %) (list elements))
              ;;  [search-bar]
              ;;  [button :label "Go" :class "search-button"]
                [:div "About"]
                [:div {:a "GitHub" :ref "https://github.com/jonjohnsontc/songwriter-graph"}]]]]))

;; Panels
(defn main-panel []
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
                                        :class "search-button"
                                        :on-click #(re-frame/dispatch [::events/push-state :routes/search])]]]]]
               [footer]]]))

(defn results-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [v-box
     :class "app"
     :children [[h-box
                 :class "header"
                 :gap "5px"
                 :children 
                 [[:h1.welcome @name]
                  [search-bar]
                  [button :label "Go" :class "search-button"]
                  [:div "About"]
                  [:div {:a "GitHub" :ref "https://github.com/jonjohnsontc/songwriter-graph"}]]]
                [scroller
                 :class "home-area"
                 :child [results-listing]]
                [footer]]]))

(defn writer-panel []
  (let [writer @(re-frame/subscribe [::subs/current-writer])]
    [v-box
     :class "app"
     :children [[h-box
                 :class "header"
                 :gap "5px"
                 :children
                 [[:h1.welcome @name]
                  [search-bar]
                  [button :label "Go" :class "search-button"]
                  [:div "About"]
                  [:div {:a "GitHub" :ref "https://github.com/jonjohnsontc/songwriter-graph"}]]]
                [scroller
                 :child [writer-body]]
                [footer]]]))