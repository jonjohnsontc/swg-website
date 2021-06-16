(ns swg-website.db)

(def default-db
  {:name "Songwriter Graph"
   :cs {:values nil}
   :current-writer nil
   :writer-matches nil
   :search-term ""
  ;;  :burger-menu false
   :search-bar-focus false
   :loading? false
   :error-msg nil})
