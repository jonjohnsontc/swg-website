(ns swg-website.core
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [swg-website.events :as events]
   [swg-website.subs :as subs]
   [swg-website.views :as views]
   [swg-website.config :as config]
   [reitit.core :as r]
   [reitit.coercion.spec :as rss]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]))

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
   ["home"
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

(defn alt-nav [{:keys [router active-route]}]
  )

(defn nav [{:keys [router active-route]}]
  [:ul
   (for [route-name (r/route-names router)
         :let        [route (r/match-by-name router route-name)
                      text  (-> route :data :link-text)]]
     [:li {:key route-name}
      (when (= route-name (-> route :data :name))
        ">")
      [:a {:href (href route-name)} text]])])

(defn router-component [
                        ;; {:keys [router]}
                        ]
  (let [active-route @(re-frame/subscribe [::subs/active-route])]
    ;; [:div
    ;;  [nav {:router router :active-route active-route}]
     (when active-route
       [(-> active-route :data :view)])
    ;; ]
  ))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [router-component {:router router}] root-el)))

(defn init []
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (init-routes!)
  (mount-root))
