(ns swg-website.core
  (:require
   [reagent.dom :as rdom]
   [re-frame.core :as re-frame]
   [reitit.coercion.spec :as rss]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [swg-website.events :as events]
   [swg-website.subs :as subs]
   [swg-website.views :as views]
   [swg-website.config :as config]))

(defn href
  "Return relative url for given route. Url can be used in HTML links."
  ([k]
   (href k nil nil))
  ([k params]
   (href k params nil))
  ([k params query]
   (rfe/href k params query)))

;; If I don't namespace the route names, it will assume it's within
;; the namespace of whatever code is being executed :shrug: - not sure why
(def routes
  ["/"
   [""
    {:name      :routes/home
     :view      views/main-panel
     :link-text "Home"
     :controllers
     [{;; Do whatever initialization needed for home page
       ;; I.e (re-frame/dispatch [::events/load-something-with-ajax])
       :start (fn [& params] (js/console.log "Entering home page"))
       ;; Teardown can be done here.
       :stop  (fn [& params] (js/console.log "Leaving home page"))}]}]
   ["search"
    {:name      :routes/search
     :view      views/results-panel
     :link-text "Search"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering search"))
       :stop  (fn [& params] (js/console.log "Leaving search"))}]}]
   ["writer"
    {:name      :routes/writer
     :view      views/writer-panel
     :link-text "Writer"
     :controllers
     [{:start (fn [& params] (js/console.log "Entering writer page"))
       :stop  (fn [& params] (js/console.log "Leaving writer page"))}]}]])

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
  ;; '/#/' in your url
   {:use-fragment false}))

(defn nav []
  (let [active-route @(re-frame/subscribe [::subs/active-route])]
     (when active-route
       [(-> active-route :data :view)])))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [nav {:router router}] root-el)))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (init-routes!)
  (mount-root))
