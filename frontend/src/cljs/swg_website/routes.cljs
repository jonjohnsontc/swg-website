(ns swg-website.routes
  (:require
   [re-frame/core :as re-frame]
   [reitit.core :as r]
   [reitit.coercion.spec :as rss]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [swg-website.events :as events]
   [swg-website.views :as views]))

(defn href
  "Return relative url for given route. Url can be used in HTML links."
  ([k]
   (href k nil nil))
  ([k params]
   (href k params nil))
  ([k params query]
   (rfe/href k params query)))

(def routes
  ["/"
   [""
    {:name      ::home
     :view      views/main-panel-box-layout
     :link-text "Home"
     :controllers
     [{;; Do whatever initialization needed for home page
       ;; I.e (re-frame/dispatch [::events/load-something-with-ajax])
       :start (fn [& params] (js/console.log "Entering home page"))
       ;; Teardown can be done here.
       :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]
   ["search"
    {:name      ::search
     :view      views/results-panel
     :link-text "Search"
     :controllers 
     [{:start (fn [& params] (js/console.log "Entering search"))
       :stop  (fn [& params] (js/console.log "Leaving search"))}]}]])

(defn on-navigate [new-match]
  (when new-match
    (re-frame/dispatch [::events/navigated new-match])))

(def router
  (rf/router
   routes
   {:data {:coercion rss/coercion}}))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfe/start!
   router
   on-navigate
   {:use-fragment true}))

(defn nav [{:keys [router active-route]}]
  [:ul
   (for [route-name (r/route-names router)
         :let        [route (r/match-by-name router route-name)
                      text  (-> route :data :link-text)]]
     [:li {:key route-name}
      (when (= route-name (-> route :data :name))
        ">")
      [:a {:href (href route-name)} text]])])

(defn router-component [{:keys [router]}]
  (let [active-route @(re-frame/subscribe [::active-route])]
    [:div
     [nav {:router router :active-route active-route}]
     (when active-route
       [(-> active-route :data :view)])]))