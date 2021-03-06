(ns swg-website.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::active-route
 (fn [db]
   (:active-route db)))

(re-frame/reg-sub
 ::name
 (fn [db]
   (:name db)))

(re-frame/reg-sub
 ::current-writer
 (fn [db]
   (:current-writer db)))

(re-frame/reg-sub
 ::writer-matches
 (fn [db]
   (:writer-matches db)))

(re-frame/reg-sub
 ::search-term
 (fn [db]
   (:search-term db)))

(re-frame/reg-sub
 ::current-search
 (fn [db]
   (:cs db)))

(re-frame/reg-sub
 ::loading
 (fn [db]
   (:loading? db)))

(re-frame/reg-sub
 ::burger-menu
 (fn [db]
   (:burger-menu db)))

(re-frame/reg-sub
 ::search-bar-focus
 (fn [db]
   (:search-bar-focus db)))

(re-frame/reg-sub
 ::results-page-number
 (fn [db]
   (get-in db [:cs :results-page-number])))

(re-frame/reg-sub
 ::results-count
 (fn [db]
   (get-in db [:cs :results-count])))

(re-frame/reg-sub
 ::results-pages
 (fn [db]
   (get-in db [:cs :results-pages])))

(re-frame/reg-sub
 ::about-page
 (fn [db]
   (get db :about-page)))