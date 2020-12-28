(ns swg-website.db)

(def default-db
  {:name "Songwriter Graph"
   :cs {:values nil}
   :current-writer nil
   :writer-matches nil
   :search-term ""
   :loading? false
   :error-msg nil})
