(ns swg-website.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::current-writer
 (fn [db]
   (:current-writer db)))

(re-frame/reg-sub
 ::search-term
 (fn [db]
   (:search-term db)))
