(ns swg-website.db)

(def default-db
  {:name "Songwriter Graph"
   :cs {:wid nil :writer-name nil :neighbors []}
   :ps {:wid nil :writer-name nil :neighbors []}
   :search-term ""
   :loading? false
   :error-msg nil})
