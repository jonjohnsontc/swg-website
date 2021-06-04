(ns swg-website.ui
  (:require 
   ["@mdi/react" :refer [Icon]]
   ["@mdi/js" :refer [mdiInformationOutline
                      mdiMusicNote
                      mdiMagnify
                      mdiMetronome
                      mdiMusicCircleOutline
                      mdiMusicClefTreble]]))

(defn info-icon
  []
  [:> Icon {:path mdiInformationOutline :size "0.5rem" }])

(defn music-icon
  []
  [:> Icon {:path mdiMusicNote :size "1.5rem"}])

(defn search-icon
  []
  [:> Icon {:path mdiMagnify :size "1.5rem"}])

(defn tempo-icon
  []
  [:> Icon {:path mdiMetronome :size "1.5rem"}])

(defn music-circle-icon
  "This is the standin for a writer photo"
  [{:keys [class size]}]
  [:> Icon {:path mdiMusicCircleOutline :size size
            :class (str class)
            :style {:position "relative"
                    :right "5%"}}])

(defn treble-clef-icon
  []
  [:> Icon {:path mdiMusicClefTreble :size "1.5rem"}])