(ns swg-website.server
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]))

(defn get-writer [request]
  (let [wid (get-in request [:path-params :wid])]
    {:status 200 :body (str "Hi, this is " wid)}))

(def routes
  #{
    ;; ["/api/neighbors/:wid" :get [:insert-handler-here] :route-name "neighbors" :constraints {:wid #"[0-9]+"}]
    ;; ["/api/writers/name_search/:name" :get [:insert-handler-here] :route-name "writers by name"]
    ["/api/serwriters/wid/:wid" :get get-writer :route-name :writers-by-wid :constraints {:wid #"[0-9]+"}]
    ;; ["/api/writers/random" :get [:insert-handler-here] :route-name "random writer"]
    })

(def service-map
  "Options map to pass to `create-server`"
  {::http/routes (route/expand-routes routes)
   ::http/type :jetty
   ::http/port 8890})

(defn start-server []
  (-> service-map
   (http/create-server)
   (http/start)))