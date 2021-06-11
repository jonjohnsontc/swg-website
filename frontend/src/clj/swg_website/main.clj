(ns swg-website.main
 (:require [io.pedestal.http :as http]
           [io.pedestal.http.route :as route]
           [swg-website.server :as server]))

(defn hi [request]
  {:status 200 :body "hello world!"})

(def routes
  (route/expand-routes
   #{["/greet" :get hi :route-name :greet]}))

(defn create-server []
  (http/create-server
   {::http/routes routes
    ::http/type :jetty
    ::http/port 8890}))

(defn -main []
  (server/start-server))