(ns swg-website.views
  (:require
   [clojure.string :refer [join lower-case replace split trim includes? blank?]]
   [reagent.core :as r]
   [re-frame.core :as re-frame]
   [swg-website.events :as events]
   [swg-website.subs :as subs]
   [swg-website.utils :refer [make-search-term read-mkdown]]
   [swg-website.ui :as ui]
   [goog.html.textExtractor :refer [extractTextContent]]))

(def gh-address
  "https://github.com/jonjohnsontc/songwriter-graph")

(def key-map
  "The map that maps int pitch class 'key' values from the api to 
   it's tonal counterpart
   
   https://en.wikipedia.org/wiki/Pitch_class"
  {"0" "C"
   "1" "C \u266F / B \u266D"
   "2" "D"
   "3" "D \u266F / E \u266D"
   "4" "E"
   "5" "F"
   "6" "F \u266F / G \u266D"
   "7" "G"
   "8" "G \u266F / A \u266D"
   "9" "A"
   "10" "A \u266F / B \u266D"
   "11" "B"})

(defn get-tonal-key
  "Grabs the tonal keys from the key-map based on the numbers in the key vec
   and concats them together with a comma and space
   
   e.g.,
   
   C, C ♯ / B ♭"
  [key-vec key-map]
  ;; TODO: interpose might be good to use here
  ;; trim and drop-last are used to remove an additional comma and space that
  ;;   comes with this method e.g., 'C, C ♯ / B ♭, '
  (join "" (drop-last (trim (reduce #(str %1 (get key-map %2) ", ") "" key-vec))))) 

(defn key-num->letter
  ;; TODO: revise doctsring
  "Helper function to map multiple key values to the key-map if writer
   has more than one most common key.
   
   The API retuns a sequence of keys like a clj list e.g.,
   
   \"(1, 2)\"
   
   Returns key or keys as vector"
  [key-val]
  (if (> (count key-val) 2)
    (-> key-val
        (replace #"[()]" "")
        (split #",")
        (get-tonal-key key-map))
    (get key-map key-val)))

;; Event Handlers(??)
(defn update-search-term [term]
  (re-frame/dispatch [::events/save-name :search-term term]))

(defn make-search
  [e term]
  (.preventDefault e)
  (re-frame/dispatch [::events/push-state :routes/search {:term (make-search-term term)}]))

;; Sub-panels
(defn swg-logo []
  [:div.is-inline-flex.navbar-item
   [:a {:href "/" :on-click #(re-frame/dispatch [::events/clear-search-and-go-home])}
    [:svg {:fill "none" :viewBox "0 0 367 50" :height "50" :width "367"}
     [:path
      {:fill "black"
       :d
       "M13.0156 20.7891C9.15625 19.6797 6.34375 18.3203 4.57812 16.7109C2.82812 15.0859 1.95312 13.0859 1.95312 10.7109C1.95312 8.02344 3.02344 5.80469 5.16406 4.05469C7.32031 2.28906 10.1172 1.40625 13.5547 1.40625C15.8984 1.40625 17.9844 1.85937 19.8125 2.76562C21.6562 3.67188 23.0781 4.92188 24.0781 6.51562C25.0938 8.10938 25.6016 9.85156 25.6016 11.7422H21.0781C21.0781 9.67969 20.4219 8.0625 19.1094 6.89062C17.7969 5.70312 15.9453 5.10938 13.5547 5.10938C11.3359 5.10938 9.60156 5.60156 8.35156 6.58594C7.11719 7.55469 6.5 8.90625 6.5 10.6406C6.5 12.0312 7.08594 13.2109 8.25781 14.1797C9.44531 15.1328 11.4531 16.0078 14.2812 16.8047C17.125 17.6016 19.3438 18.4844 20.9375 19.4531C22.5469 20.4062 23.7344 21.5234 24.5 22.8047C25.2812 24.0859 25.6719 25.5938 25.6719 27.3281C25.6719 30.0938 24.5938 32.3125 22.4375 33.9844C20.2812 35.6406 17.3984 36.4688 13.7891 36.4688C11.4453 36.4688 9.25781 36.0234 7.22656 35.1328C5.19531 34.2266 3.625 32.9922 2.51562 31.4297C1.42188 29.8672 0.875 28.0938 0.875 26.1094H5.39844C5.39844 28.1719 6.15625 29.8047 7.67188 31.0078C9.20312 32.1953 11.2422 32.7891 13.7891 32.7891C16.1641 32.7891 17.9844 32.3047 19.25 31.3359C20.5156 30.3672 21.1484 29.0469 21.1484 27.375C21.1484 25.7031 20.5625 24.4141 19.3906 23.5078C18.2188 22.5859 16.0938 21.6797 13.0156 20.7891ZM29.6328 23.0859C29.6328 20.6016 30.1172 18.3672 31.0859 16.3828C32.0703 14.3984 33.4297 12.8672 35.1641 11.7891C36.9141 10.7109 38.9062 10.1719 41.1406 10.1719C44.5938 10.1719 47.3828 11.3672 49.5078 13.7578C51.6484 16.1484 52.7188 19.3281 52.7188 23.2969V23.6016C52.7188 26.0703 52.2422 28.2891 51.2891 30.2578C50.3516 32.2109 49 33.7344 47.2344 34.8281C45.4844 35.9219 43.4688 36.4688 41.1875 36.4688C37.75 36.4688 34.9609 35.2734 32.8203 32.8828C30.6953 30.4922 29.6328 27.3281 29.6328 23.3906V23.0859ZM33.9922 23.6016C33.9922 26.4141 34.6406 28.6719 35.9375 30.375C37.25 32.0781 39 32.9297 41.1875 32.9297C43.3906 32.9297 45.1406 32.0703 46.4375 30.3516C47.7344 28.6172 48.3828 26.1953 48.3828 23.0859C48.3828 20.3047 47.7188 18.0547 46.3906 16.3359C45.0781 14.6016 43.3281 13.7344 41.1406 13.7344C39 13.7344 37.2734 14.5859 35.9609 16.2891C34.6484 17.9922 33.9922 20.4297 33.9922 23.6016ZM62.2578 10.6406L62.3984 13.8281C64.3359 11.3906 66.8672 10.1719 69.9922 10.1719C75.3516 10.1719 78.0547 13.1953 78.1016 19.2422V36H73.7656V19.2188C73.75 17.3906 73.3281 16.0391 72.5 15.1641C71.6875 14.2891 70.4141 13.8516 68.6797 13.8516C67.2734 13.8516 66.0391 14.2266 64.9766 14.9766C63.9141 15.7266 63.0859 16.7109 62.4922 17.9297V36H58.1562V10.6406H62.2578ZM83.6094 23.1094C83.6094 19.1562 84.5234 16.0156 86.3516 13.6875C88.1797 11.3438 90.6016 10.1719 93.6172 10.1719C96.7109 10.1719 99.125 11.2656 100.859 13.4531L101.07 10.6406H105.031V35.3906C105.031 38.6719 104.055 41.2578 102.102 43.1484C100.164 45.0391 97.5547 45.9844 94.2734 45.9844C92.4453 45.9844 90.6562 45.5938 88.9062 44.8125C87.1562 44.0312 85.8203 42.9609 84.8984 41.6016L87.1484 39C89.0078 41.2969 91.2812 42.4453 93.9688 42.4453C96.0781 42.4453 97.7188 41.8516 98.8906 40.6641C100.078 39.4766 100.672 37.8047 100.672 35.6484V33.4688C98.9375 35.4688 96.5703 36.4688 93.5703 36.4688C90.6016 36.4688 88.1953 35.2734 86.3516 32.8828C84.5234 30.4922 83.6094 27.2344 83.6094 23.1094ZM87.9688 23.6016C87.9688 26.4609 88.5547 28.7109 89.7266 30.3516C90.8984 31.9766 92.5391 32.7891 94.6484 32.7891C97.3828 32.7891 99.3906 31.5469 100.672 29.0625V17.4844C99.3438 15.0625 97.3516 13.8516 94.6953 13.8516C92.5859 13.8516 90.9375 14.6719 89.75 16.3125C88.5625 17.9531 87.9688 20.3828 87.9688 23.6016ZM134.047 30.0234L138.922 10.6406H143.258L135.875 36H132.359L126.195 16.7812L120.195 36H116.68L109.32 10.6406H113.633L118.625 29.625L124.531 10.6406H128.023L134.047 30.0234ZM159.945 14.5312C159.289 14.4219 158.578 14.3672 157.812 14.3672C154.969 14.3672 153.039 15.5781 152.023 18V36H147.688V10.6406H151.906L151.977 13.5703C153.398 11.3047 155.414 10.1719 158.023 10.1719C158.867 10.1719 159.508 10.2812 159.945 10.5V14.5312ZM168.664 36H164.328V10.6406H168.664V36ZM163.977 3.91406C163.977 3.21094 164.188 2.61719 164.609 2.13281C165.047 1.64844 165.688 1.40625 166.531 1.40625C167.375 1.40625 168.016 1.64844 168.453 2.13281C168.891 2.61719 169.109 3.21094 169.109 3.91406C169.109 4.61719 168.891 5.20312 168.453 5.67188C168.016 6.14062 167.375 6.375 166.531 6.375C165.688 6.375 165.047 6.14062 164.609 5.67188C164.188 5.20312 163.977 4.61719 163.977 3.91406ZM181.508 4.5V10.6406H186.242V13.9922H181.508V29.7188C181.508 30.7344 181.719 31.5 182.141 32.0156C182.562 32.5156 183.281 32.7656 184.297 32.7656C184.797 32.7656 185.484 32.6719 186.359 32.4844V36C185.219 36.3125 184.109 36.4688 183.031 36.4688C181.094 36.4688 179.633 35.8828 178.648 34.7109C177.664 33.5391 177.172 31.875 177.172 29.7188V13.9922H172.555V10.6406H177.172V4.5H181.508ZM201.852 36.4688C198.414 36.4688 195.617 35.3438 193.461 33.0938C191.305 30.8281 190.227 27.8047 190.227 24.0234V23.2266C190.227 20.7109 190.703 18.4688 191.656 16.5C192.625 14.5156 193.969 12.9688 195.688 11.8594C197.422 10.7344 199.297 10.1719 201.312 10.1719C204.609 10.1719 207.172 11.2578 209 13.4297C210.828 15.6016 211.742 18.7109 211.742 22.7578V24.5625H194.562C194.625 27.0625 195.352 29.0859 196.742 30.6328C198.148 32.1641 199.93 32.9297 202.086 32.9297C203.617 32.9297 204.914 32.6172 205.977 31.9922C207.039 31.3672 207.969 30.5391 208.766 29.5078L211.414 31.5703C209.289 34.8359 206.102 36.4688 201.852 36.4688ZM201.312 13.7344C199.562 13.7344 198.094 14.375 196.906 15.6562C195.719 16.9219 194.984 18.7031 194.703 21H207.406V20.6719C207.281 18.4688 206.688 16.7656 205.625 15.5625C204.562 14.3438 203.125 13.7344 201.312 13.7344ZM229.039 14.5312C228.383 14.4219 227.672 14.3672 226.906 14.3672C224.062 14.3672 222.133 15.5781 221.117 18V36H216.781V10.6406H221L221.07 13.5703C222.492 11.3047 224.508 10.1719 227.117 10.1719C227.961 10.1719 228.602 10.2812 229.039 10.5V14.5312ZM270.828 31.5234C269.672 33.1797 268.055 34.4219 265.977 35.25C263.914 36.0625 261.508 36.4688 258.758 36.4688C255.977 36.4688 253.508 35.8203 251.352 34.5234C249.195 33.2109 247.523 31.3516 246.336 28.9453C245.164 26.5391 244.562 23.75 244.531 20.5781V17.6016C244.531 12.4609 245.727 8.47656 248.117 5.64844C250.523 2.82031 253.898 1.40625 258.242 1.40625C261.805 1.40625 264.672 2.32031 266.844 4.14844C269.016 5.96094 270.344 8.53906 270.828 11.8828H266.328C265.484 7.36719 262.797 5.10938 258.266 5.10938C255.25 5.10938 252.961 6.17187 251.398 8.29688C249.852 10.4062 249.07 13.4688 249.055 17.4844V20.2734C249.055 24.1016 249.93 27.1484 251.68 29.4141C253.43 31.6641 255.797 32.7891 258.781 32.7891C260.469 32.7891 261.945 32.6016 263.211 32.2266C264.477 31.8516 265.523 31.2188 266.352 30.3281V22.6641H258.453V19.0078H270.828V31.5234ZM289.93 14.5312C289.273 14.4219 288.562 14.3672 287.797 14.3672C284.953 14.3672 283.023 15.5781 282.008 18V36H277.672V10.6406H281.891L281.961 13.5703C283.383 11.3047 285.398 10.1719 288.008 10.1719C288.852 10.1719 289.492 10.2812 289.93 10.5V14.5312ZM308.656 36C308.406 35.5 308.203 34.6094 308.047 33.3281C306.031 35.4219 303.625 36.4688 300.828 36.4688C298.328 36.4688 296.273 35.7656 294.664 34.3594C293.07 32.9375 292.273 31.1406 292.273 28.9688C292.273 26.3281 293.273 24.2812 295.273 22.8281C297.289 21.3594 300.117 20.625 303.758 20.625H307.977V18.6328C307.977 17.1172 307.523 15.9141 306.617 15.0234C305.711 14.1172 304.375 13.6641 302.609 13.6641C301.062 13.6641 299.766 14.0547 298.719 14.8359C297.672 15.6172 297.148 16.5625 297.148 17.6719H292.789C292.789 16.4062 293.234 15.1875 294.125 14.0156C295.031 12.8281 296.25 11.8906 297.781 11.2031C299.328 10.5156 301.023 10.1719 302.867 10.1719C305.789 10.1719 308.078 10.9062 309.734 12.375C311.391 13.8281 312.25 15.8359 312.312 18.3984V30.0703C312.312 32.3984 312.609 34.25 313.203 35.625V36H308.656ZM301.461 32.6953C302.82 32.6953 304.109 32.3438 305.328 31.6406C306.547 30.9375 307.43 30.0234 307.977 28.8984V23.6953H304.578C299.266 23.6953 296.609 25.25 296.609 28.3594C296.609 29.7188 297.062 30.7812 297.969 31.5469C298.875 32.3125 300.039 32.6953 301.461 32.6953ZM340.531 23.6016C340.531 27.4609 339.648 30.5703 337.883 32.9297C336.117 35.2891 333.727 36.4688 330.711 36.4688C327.633 36.4688 325.211 35.4922 323.445 33.5391V45.75H319.109V10.6406H323.07L323.281 13.4531C325.047 11.2656 327.5 10.1719 330.641 10.1719C333.688 10.1719 336.094 11.3203 337.859 13.6172C339.641 15.9141 340.531 19.1094 340.531 23.2031V23.6016ZM336.195 23.1094C336.195 20.25 335.586 17.9922 334.367 16.3359C333.148 14.6797 331.477 13.8516 329.352 13.8516C326.727 13.8516 324.758 15.0156 323.445 17.3438V29.4609C324.742 31.7734 326.727 32.9297 329.398 32.9297C331.477 32.9297 333.125 32.1094 334.344 30.4688C335.578 28.8125 336.195 26.3594 336.195 23.1094ZM350.398 13.7109C352.32 11.3516 354.82 10.1719 357.898 10.1719C363.258 10.1719 365.961 13.1953 366.008 19.2422V36H361.672V19.2188C361.656 17.3906 361.234 16.0391 360.406 15.1641C359.594 14.2891 358.32 13.8516 356.586 13.8516C355.18 13.8516 353.945 14.2266 352.883 14.9766C351.82 15.7266 350.992 16.7109 350.398 17.9297V36H346.062V0H350.398V13.7109Z"}]
     [:circle {:fill "#6FCF97" :r "5" :cy "45" :cx "25"}]
     [:circle {:fill "#BB6BD9" :r "5" :cy "45" :cx "15"}]
     [:circle {:fill "#F2994A" :r "5" :cy "45" :cx "5"}]]]])

(defn new-logo []
  [:div.is-inline-flex.navbar-item.logo
   [:a {:href "/" :on-click #(re-frame/dispatch [::events/clear-search-and-go-home])}
    [:svg {:width "150", :height "80", :viewBox "0 0 150 80", :fill "none", :xmlns "http://www.w3.org/2000/svg"}
     [:path {:d "M14.516 30.348C16.108 30.348 17.356 30 18.26 29.304C19.172 28.6 19.628 27.636 19.628 26.412C19.628 25.74 19.484 25.176 19.196 24.72C18.916 24.264 18.432 23.868 17.744 23.532C17.064 23.196 16.128 22.876 14.936 22.572C13.92 22.316 13.136 22.08 12.584 21.864C12.04 21.648 11.664 21.42 11.456 21.18C11.248 20.932 11.144 20.636 11.144 20.292C11.144 19.676 11.432 19.184 12.008 18.816C12.584 18.448 13.332 18.272 14.252 18.288C15.228 18.304 16.032 18.536 16.664 18.984C17.296 19.424 17.676 20.024 17.804 20.784L19.604 20.46C19.516 19.708 19.236 19.048 18.764 18.48C18.292 17.912 17.668 17.472 16.892 17.16C16.124 16.84 15.252 16.68 14.276 16.68C13.3 16.68 12.44 16.836 11.696 17.148C10.96 17.452 10.384 17.884 9.968 18.444C9.56 18.996 9.356 19.64 9.356 20.376C9.356 20.976 9.492 21.488 9.764 21.912C10.044 22.328 10.52 22.7 11.192 23.028C11.864 23.348 12.784 23.668 13.952 23.988C15.048 24.284 15.868 24.54 16.412 24.756C16.964 24.972 17.332 25.208 17.516 25.464C17.7 25.712 17.792 26.036 17.792 26.436C17.792 27.14 17.508 27.7 16.94 28.116C16.372 28.532 15.596 28.74 14.612 28.74C13.604 28.74 12.756 28.524 12.068 28.092C11.38 27.652 10.944 27.064 10.76 26.328L8.96 26.628C9.184 27.796 9.784 28.708 10.76 29.364C11.744 30.02 12.996 30.348 14.516 30.348ZM27.7014 30.36C28.9814 30.36 30.0774 30.072 30.9894 29.496C31.9094 28.92 32.6134 28.12 33.1014 27.096C33.5974 26.064 33.8454 24.868 33.8454 23.508C33.8454 22.172 33.6014 20.992 33.1134 19.968C32.6334 18.936 31.9334 18.132 31.0134 17.556C30.1014 16.972 28.9974 16.68 27.7014 16.68C26.4374 16.68 25.3454 16.968 24.4254 17.544C23.5134 18.112 22.8094 18.908 22.3134 19.932C21.8174 20.956 21.5694 22.148 21.5694 23.508C21.5694 24.844 21.8094 26.028 22.2894 27.06C22.7774 28.092 23.4774 28.9 24.3894 29.484C25.3094 30.068 26.4134 30.36 27.7014 30.36ZM27.7014 28.668C26.3014 28.668 25.2414 28.2 24.5214 27.264C23.8014 26.32 23.4414 25.068 23.4414 23.508C23.4414 21.996 23.7894 20.764 24.4854 19.812C25.1814 18.852 26.2534 18.372 27.7014 18.372C29.1334 18.372 30.2014 18.84 30.9054 19.776C31.6174 20.704 31.9734 21.948 31.9734 23.508C31.9734 25.036 31.6214 26.28 30.9174 27.24C30.2134 28.192 29.1414 28.668 27.7014 28.668ZM36.4805 30H38.2565V23.088C38.2565 21.624 38.5845 20.476 39.2405 19.644C39.8965 18.812 40.8485 18.396 42.0965 18.396C43.0005 18.396 43.7285 18.616 44.2805 19.056C44.8325 19.488 45.2325 20.08 45.4805 20.832C45.7285 21.584 45.8525 22.436 45.8525 23.388V30H47.6285V22.872C47.6285 22.144 47.5365 21.416 47.3525 20.688C47.1765 19.96 46.8885 19.296 46.4885 18.696C46.0885 18.096 45.5565 17.616 44.8925 17.256C44.2285 16.896 43.4085 16.716 42.4325 16.716C41.5045 16.716 40.6645 16.896 39.9125 17.256C39.1685 17.608 38.5565 18.136 38.0765 18.84V17.04H36.4805V30ZM55.7705 30.36C56.6425 30.36 57.4185 30.192 58.0985 29.856C58.7785 29.52 59.3505 29.056 59.8145 28.464V29.796C59.8225 31.316 59.5225 32.464 58.9145 33.24C58.3065 34.016 57.2985 34.404 55.8905 34.404C55.2105 34.404 54.5425 34.244 53.8865 33.924C53.2305 33.612 52.7265 33.096 52.3745 32.376L50.7785 33.264C51.3305 34.272 52.0705 35 52.9985 35.448C53.9345 35.896 54.8985 36.12 55.8905 36.12C57.4745 36.12 58.7385 35.776 59.6825 35.088C60.6265 34.4 61.2145 33.332 61.4465 31.884C61.5025 31.556 61.5385 31.22 61.5545 30.876C61.5785 30.54 61.5905 30.188 61.5905 29.82V17.04H60.0185V18.828C59.5465 18.156 58.9465 17.632 58.2185 17.256C57.4985 16.872 56.6585 16.68 55.6985 16.68C54.5145 16.68 53.4985 16.98 52.6505 17.58C51.8025 18.18 51.1505 18.996 50.6945 20.028C50.2465 21.06 50.0225 22.22 50.0225 23.508C50.0225 24.804 50.2465 25.968 50.6945 27C51.1505 28.032 51.8065 28.852 52.6625 29.46C53.5265 30.06 54.5625 30.36 55.7705 30.36ZM55.9505 28.716C55.0545 28.716 54.3025 28.488 53.6945 28.032C53.0945 27.568 52.6425 26.944 52.3385 26.16C52.0425 25.376 51.8945 24.492 51.8945 23.508C51.8945 22.532 52.0425 21.652 52.3385 20.868C52.6345 20.084 53.0825 19.464 53.6825 19.008C54.2905 18.552 55.0585 18.324 55.9865 18.324C57.3385 18.324 58.3465 18.808 59.0105 19.776C59.6825 20.736 60.0185 21.98 60.0185 23.508C60.0185 24.508 59.8705 25.4 59.5745 26.184C59.2785 26.968 58.8305 27.588 58.2305 28.044C57.6305 28.492 56.8705 28.716 55.9505 28.716ZM67.7056 30H69.2416L72.4696 19.68L75.7096 30H77.2456L81.2056 17.04H79.4536L76.3576 27.108L73.2736 17.04H71.6656L68.5816 27.108L65.5096 17.04L63.7456 17.028L67.7056 30ZM83.3675 30H85.1315V23.532C85.1315 22.756 85.2195 21.984 85.3955 21.216C85.5795 20.44 85.9955 19.796 86.6435 19.284C87.1155 18.9 87.6275 18.68 88.1795 18.624C88.7395 18.56 89.2595 18.584 89.7395 18.696V17.04C89.1715 16.896 88.5275 16.892 87.8075 17.028C87.0875 17.156 86.4715 17.444 85.9595 17.892C85.5755 18.18 85.2395 18.58 84.9515 19.092V17.04H83.3675V30ZM92.2559 14.58H94.0199V12.6H92.2559V14.58ZM92.2559 30H94.0199V17.04H92.2559V30ZM104.674 30V28.452C103.746 28.604 102.966 28.628 102.334 28.524C101.71 28.42 101.254 28.1 100.966 27.564C100.814 27.284 100.73 26.964 100.714 26.604C100.706 26.236 100.702 25.78 100.702 25.236V18.552H104.674V17.04H100.702V13.44H98.9495V17.04H96.1775V18.552H98.9495V25.308C98.9495 25.94 98.9575 26.504 98.9735 27C98.9975 27.496 99.1255 27.98 99.3575 28.452C99.6455 29.028 100.066 29.452 100.618 29.724C101.178 29.996 101.81 30.148 102.514 30.18C103.226 30.212 103.946 30.152 104.674 30ZM112.242 30.36C113.498 30.36 114.622 30.052 115.614 29.436C116.614 28.82 117.37 27.944 117.882 26.808L116.238 26.172C115.414 27.836 114.058 28.668 112.17 28.668C110.874 28.668 109.858 28.264 109.122 27.456C108.394 26.648 107.994 25.5 107.922 24.012H118.134C118.198 21.724 117.698 19.932 116.634 18.636C115.578 17.332 114.09 16.68 112.17 16.68C110.922 16.68 109.838 16.96 108.918 17.52C108.006 18.08 107.298 18.876 106.794 19.908C106.29 20.94 106.038 22.164 106.038 23.58C106.038 24.948 106.29 26.14 106.794 27.156C107.306 28.172 108.026 28.96 108.954 29.52C109.89 30.08 110.986 30.36 112.242 30.36ZM112.218 18.3C114.658 18.3 116.014 19.712 116.286 22.536H107.958C108.094 21.168 108.526 20.12 109.254 19.392C109.982 18.664 110.97 18.3 112.218 18.3ZM120.797 30H122.561V23.532C122.561 22.756 122.649 21.984 122.825 21.216C123.009 20.44 123.425 19.796 124.073 19.284C124.545 18.9 125.057 18.68 125.609 18.624C126.169 18.56 126.689 18.584 127.169 18.696V17.04C126.601 16.896 125.957 16.892 125.237 17.028C124.517 17.156 123.901 17.444 123.389 17.892C123.005 18.18 122.669 18.58 122.381 19.092V17.04H120.797V30ZM14.708 63.36C15.58 63.36 16.356 63.192 17.036 62.856C17.716 62.52 18.288 62.056 18.752 61.464V62.796C18.76 64.316 18.46 65.464 17.852 66.24C17.244 67.016 16.236 67.404 14.828 67.404C14.148 67.404 13.48 67.244 12.824 66.924C12.168 66.612 11.664 66.096 11.312 65.376L9.716 66.264C10.268 67.272 11.008 68 11.936 68.448C12.872 68.896 13.836 69.12 14.828 69.12C16.412 69.12 17.676 68.776 18.62 68.088C19.564 67.4 20.152 66.332 20.384 64.884C20.44 64.556 20.476 64.22 20.492 63.876C20.516 63.54 20.528 63.188 20.528 62.82V50.04H18.956V51.828C18.484 51.156 17.884 50.632 17.156 50.256C16.436 49.872 15.596 49.68 14.636 49.68C13.452 49.68 12.436 49.98 11.588 50.58C10.74 51.18 10.088 51.996 9.632 53.028C9.184 54.06 8.96 55.22 8.96 56.508C8.96 57.804 9.184 58.968 9.632 60C10.088 61.032 10.744 61.852 11.6 62.46C12.464 63.06 13.5 63.36 14.708 63.36ZM14.888 61.716C13.992 61.716 13.24 61.488 12.632 61.032C12.032 60.568 11.58 59.944 11.276 59.16C10.98 58.376 10.832 57.492 10.832 56.508C10.832 55.532 10.98 54.652 11.276 53.868C11.572 53.084 12.02 52.464 12.62 52.008C13.228 51.552 13.996 51.324 14.924 51.324C16.276 51.324 17.284 51.808 17.948 52.776C18.62 53.736 18.956 54.98 18.956 56.508C18.956 57.508 18.808 58.4 18.512 59.184C18.216 59.968 17.768 60.588 17.168 61.044C16.568 61.492 15.808 61.716 14.888 61.716ZM23.8831 63H25.6471V56.532C25.6471 55.756 25.7351 54.984 25.9111 54.216C26.0951 53.44 26.5111 52.796 27.1591 52.284C27.6311 51.9 28.1431 51.68 28.6951 51.624C29.2551 51.56 29.7751 51.584 30.2551 51.696V50.04C29.6871 49.896 29.0431 49.892 28.3231 50.028C27.6031 50.156 26.9871 50.444 26.4751 50.892C26.0911 51.18 25.7551 51.58 25.4671 52.092V50.04H23.8831V63ZM35.7708 63.36C38.0348 63.36 39.6788 62.524 40.7028 60.852V63H42.2748V54.948C42.2748 54.468 42.2508 53.996 42.2028 53.532C42.1548 53.068 42.0508 52.648 41.8908 52.272C41.5468 51.432 40.9588 50.792 40.1268 50.352C39.3028 49.904 38.2988 49.68 37.1148 49.68C35.6908 49.68 34.5308 50 33.6348 50.64C32.7388 51.28 32.1388 52.18 31.8348 53.34L33.5508 53.844C33.7988 52.98 34.2268 52.348 34.8348 51.948C35.4508 51.548 36.2028 51.348 37.0908 51.348C38.3228 51.348 39.2028 51.636 39.7308 52.212C40.2588 52.78 40.5308 53.648 40.5468 54.816C39.9708 54.896 39.3348 54.98 38.6388 55.068C37.9508 55.156 37.2588 55.256 36.5628 55.368C35.8668 55.48 35.2268 55.608 34.6428 55.752C33.6748 56.008 32.8828 56.436 32.2668 57.036C31.6508 57.628 31.3428 58.456 31.3428 59.52C31.3428 60.208 31.5068 60.844 31.8348 61.428C32.1628 62.012 32.6548 62.48 33.3108 62.832C33.9748 63.184 34.7948 63.36 35.7708 63.36ZM35.9748 61.836C35.2788 61.836 34.7188 61.724 34.2948 61.5C33.8788 61.268 33.5748 60.976 33.3828 60.624C33.1988 60.264 33.1068 59.896 33.1068 59.52C33.1068 58.816 33.3428 58.288 33.8148 57.936C34.2868 57.584 34.7988 57.328 35.3508 57.168C36.0628 56.976 36.8908 56.82 37.8348 56.7C38.7788 56.58 39.6748 56.468 40.5228 56.364C40.5228 56.66 40.5108 57 40.4868 57.384C40.4708 57.76 40.4268 58.108 40.3548 58.428C40.1868 59.404 39.7228 60.216 38.9628 60.864C38.2108 61.512 37.2148 61.836 35.9748 61.836ZM45.3868 68.76H47.1628V61.452C47.6268 62.044 48.1988 62.512 48.8788 62.856C49.5588 63.192 50.3388 63.36 51.2188 63.36C52.4348 63.36 53.4708 63.06 54.3268 62.46C55.1828 61.852 55.8348 61.032 56.2828 60C56.7388 58.968 56.9668 57.804 56.9668 56.508C56.9668 55.22 56.7388 54.06 56.2828 53.028C55.8348 51.996 55.1868 51.18 54.3388 50.58C53.4908 49.98 52.4748 49.68 51.2908 49.68C50.3308 49.68 49.4868 49.872 48.7588 50.256C48.0388 50.632 47.4428 51.156 46.9708 51.828V50.04H45.3868V68.76ZM51.0388 61.716C50.1188 61.716 49.3588 61.492 48.7588 61.044C48.1588 60.588 47.7108 59.968 47.4148 59.184C47.1188 58.4 46.9708 57.508 46.9708 56.508C46.9708 54.98 47.3028 53.736 47.9668 52.776C48.6388 51.808 49.6508 51.324 51.0028 51.324C51.9308 51.324 52.6948 51.552 53.2948 52.008C53.9028 52.464 54.3548 53.084 54.6508 53.868C54.9468 54.652 55.0948 55.532 55.0948 56.508C55.0948 57.492 54.9428 58.376 54.6388 59.16C54.3428 59.944 53.8948 60.568 53.2948 61.032C52.6948 61.488 51.9428 61.716 51.0388 61.716ZM59.5899 63H61.3659V56.088C61.3659 54.624 61.6939 53.476 62.3499 52.644C63.0059 51.812 63.9579 51.396 65.2059 51.396C66.1099 51.396 66.8379 51.616 67.3899 52.056C67.9419 52.488 68.3419 53.08 68.5899 53.832C68.8379 54.584 68.9619 55.436 68.9619 56.388V63H70.7379V55.872C70.7379 55.144 70.6459 54.416 70.4619 53.688C70.2859 52.96 69.9979 52.296 69.5979 51.696C69.1979 51.096 68.6659 50.616 68.0019 50.256C67.3379 49.896 66.5179 49.716 65.5419 49.716C64.6139 49.716 63.7739 49.896 63.0219 50.256C62.2779 50.608 61.6659 51.136 61.1859 51.84V45.72H59.5899V63Z", :fill "black", :fill-opacity "0.76"}]
     [:ellipse {:cx "122.5", :cy "52", :rx "9.5", :ry "9", :fill "#6FCF97"}]
     [:path {:d "M113 52C113 56.9706 109.194 61 104.5 61C99.8056 61 96 56.9706 96 52C96 47.0294 99.8056 43 104.5 43C109.194 43 113 47.0294 113 52Z", :fill "#F2994A"}]
     [:ellipse {:cx "86.5", :cy "52", :rx "9.5", :ry "9", :fill "#BB6BD9"}]]]])

(defn footer []
  [:footer.footer.has-text-centered "Made with 💜 by "
   [:a {:href "http://jonj.io"} "Jon Johnson"]])

(defn ellipsis [] ;; Not sure what `sr-only` is referring to
  [:div [:div.lds-ellipsis [:div] [:div] [:div] [:div] [:span.sr-only "Loading..."]]])

(defn loading-indicator []
  [:div.columns.is-centered.is-mobile
   [:div.column.tile.is-ancestor.is-full-mobile.is-three-quarters-tablet.is-half-fullhd
    [ellipsis]]])

(defn nav-button
  "The links to the right of the logo and sometimes search bar up top"
  [name on-click]
  (cond 
    (nil? on-click)
    [:div.is-clickable.is-size-2.px-3.pb-2 [:a.navbar-item.pb-2] name]
    (coll? on-click)
    [:div.is-size-2
     [:a.navbar-item.is-2.mt-2 {:href (str "/" (lower-case name)) :on-click #(re-frame/dispatch on-click)} name]]
    (string? on-click)
    [:div.is-size-2
     [:a.navbar-item.is-2.mt-2 {:href on-click} name]]))

;; TODO: Link should show router url e.g., /neighbors/1234
;;                             (cljs e.g., (str "/neighbors/" (:wid writer-map)))
(defn writer-result
  "A single writer search result link"
  [writer-map]
  [:li.writer-result
   [:a {:href ""
        :on-click #(re-frame/dispatch [::events/push-state :routes/writer {:wid (:wid writer-map)}])}
    (trim (:writer_name writer-map))]])

(defn neighbor-result
  "A single writer search result link"
  [writer-map]
  [:li.writer-result.is-size-4
   [:a {:href ""
        :on-click #(re-frame/dispatch [::events/clear-search-and-load-writer writer-map])}
    (trim (:writer_name writer-map))]])

(defn par
  "A block of text used in the about page & blog posts.
   Reads markdown thru utility func and parses it into html tags and content"
  [content]
  (let [[tag _ text] (read-mkdown content)
        cln-text (extractTextContent text)]
    
    ;; If our extracted text content looks like hiccup then we render the
    ;;     regular text instead
    ;; TODO: Think of a better way to detect & parse nested hiccup?
    (if (includes? cln-text "]")
      [tag text]
      [tag cln-text])))

(defn results-pagination
  "Navigation for search results when there are greater than 10.
    If results are less than 10 - it's just an empty div"
  []
  (let [length @(re-frame/subscribe [::subs/results-count])
        cur-pg @(re-frame/subscribe [::subs/results-page-number])
        res-pg @(re-frame/subscribe [::subs/results-pages])
        beginning? (if (= 1 cur-pg) true false)
        end? (if (= res-pg cur-pg) true false)]
    (if (> length 10)
      [:nav.pagination.is-rounded.mt-6 {:role "navigation" :aria-label "navigation"}
       [:a.pagination-previous
        {:on-click (when (not= beginning? true) #(re-frame/dispatch [::events/prev-page]))
         :disabled (when (= beginning? true) ":disabled")}
        "Previous"]
       [:a.pagination-next
        {:on-click (when (not= end? true) #(re-frame/dispatch [::events/next-page]))
         :disabled (when (= end? true) ":disabled")}
        "Next"]]
      [:div])))

;; https://stackoverflow.com/questions/37164091/how-do-i-loop-through-a-subscribed-collection-in-re-frame-and-display-the-data-a/37186230#37186230
;; TODO: Should prolly combine full-results and results-listing
(defn results-listing
  "The div that contains the search results listing"
  [results]
  (let [length (count (:values @(re-frame/subscribe [::subs/current-search])))
        res @(re-frame/subscribe [::subs/current-search])]
    (if (nil? res)
      [:div.column.info-content.is-offset-1
       [ellipsis]]
      [:div.column.info-content.is-offset-1.is-7
       [:div.subtitle.is-2 (str length " Search Results")]
       [:div.content   ;; 'content' class to show bullet points
        (into [:ul] (map writer-result results))]
       [results-pagination]])))

(defn full-results
  "Shows search results on page"
  []
  (let [results (:values @(re-frame/subscribe [::subs/current-search]))
        page-no (dec @(re-frame/subscribe [::subs/results-page-number]))]
    [:<>
     [results-listing  (take 10 (nthrest results (* 10 page-no)))]]))

(defn neighbors-result-listing
  "List of nearest neighbors per writer"
  []
  (let [neighbors @(re-frame/subscribe [::subs/writer-matches])]
    [:div.columns.is-mobile.is-centered.pt-4
     [:article.tile.is-vertical.is-8.is-primary
      [:div.is-size-4.has-text-centered.is-primary "Most Similar"]
      [:div
       [:div.content  ;; 'content' class to show numbered list
        (into [:ol] (map neighbor-result neighbors))]]]]))

;; TODO: Wanna get a nice search bar animation for focus / clicking on it
(defn search-bar
  "Search bar for the website. The one and only"
  []
  (let [term @(re-frame/subscribe [::subs/search-term])
        loading? @(re-frame/subscribe [::subs/loading])
        focus @(re-frame/subscribe [::subs/search-bar-focus])]
    [:form.field.has-addons
     [:div.control.has-icons-left.is-expanded
      [:input.input.is-rounded
       {:type "text"
        :value term
        :class (when (true? loading?) "is-loading")
        :on-change #(update-search-term (-> %  .-target .-value))
        :placeholder "Search for a writer here"}]
      [:div.icon.is-left [ui/music-icon]]] ;TODO: figure out if you wanna keep this
     [:div.control
      [:input.button.is-primary.is-rounded
      {:type "submit"
       :on-click (fn [e] (make-search e term))
       :value "Go"}]]]))

(defn about-body
  "Main content in the About page.
   Stylized like a blog post"
  []
  (let [post (:0 @(re-frame/subscribe [::subs/about-page]))
        [title & content] (split post #"\n\n")
        html-title (read-mkdown title)]
    [:div.columns.is-centered
     [:div.column.is-6.is-8-desktop.is-8-touch
      [:article.content
       [:p.title.is-2 html-title]
       (into [:div] (map par content))]]]))

;; TODO: This doesn't feel idiomatic
(defn stat-box
  "Displays some high level stat about a writer.
   - 'stat' is some deref'd subscription to a writer stat
   - 'prompt' is some string to display above the stat
   - 'icon' is some reagent component representing an icon" 
  [stat prompt icon]
  [:div.tile.is-4-desktop.is-3-tablet.is-parent
   [:article.tile.is-child.stat-box
    [:h1.title.is-size-4.is-size-6-tablet.stat-line.has-text-centered prompt]
    [:p.subtitle.is-size-2.is-size-5-tablet.is-size-5-mobile.stat.has-text-centered stat]
    [:div.columns.is-mobile.is-centered.mb-3
     [icon]]]])


;; TODO: Finish
(defn header-w-args
  "The header for the website. Does not include the search bar"
  []
  (let [toggle @(re-frame/subscribe [::subs/burger-menu])]
    [:nav.navbar.is-tab.header
     {:role "navigation" :aria-label "main navigation"}
     [:div.navbar-brand
      [new-logo]
      [:a.navbar-burger {:role "button" :aria-label "menu" :aria-expanded "false"
                         :class (when (true? toggle) "is-active")
                         :on-click #(re-frame/dispatch [::events/toggle-burger-menu])}
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]]]
     [:div.navbar-menu {:class (when (true? toggle) "is-active")}
      [:div.navbar-start
       [nav-button "about" [::events/push-state :routes/about]]
       [nav-button "github" gh-address]]
      [:div.navbar-end]]]))

(defn header-w-search-bar
  "The header for the website, including search bar"
  []
  (let [toggle @(re-frame/subscribe [::subs/burger-menu])]
    [:nav.navbar.is-tab.header
     {:role "navigation" :aria-label "main navigation"}
     [:div.navbar-brand
      [new-logo]
      [:a.navbar-burger {:role "button" :aria-label "menu" :aria-expanded "false"
                         :class (when (= true toggle) "is-active")
                         :on-click #(re-frame/dispatch [::events/toggle-burger-menu])}
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]]]
     [:div.navbar-menu {:class (when (= true toggle) "is-active")}
      [:div.navbar-start
       [:div.navbar-item [search-bar]]]
      [:div.navbar-end
       [nav-button "about" [::events/push-state :routes/about]]
       [nav-button "github" gh-address]]]]))

(defn for-o-for
  "The error page"
  [prompt]
  [:div.columns
   [:div.column.is-3]
   [:div.column.is-6.py-6.px-6 
    [:p.has-text-centered prompt]]])

(defn site-prompt
  [prompt]
  [:<>
   [:h2.title.has-text-centered.is-size-1-mobile prompt]])

(defn home-content
  "The main content within the landing page of the app"
  [prompt]
  [:div.home-content
   [:div.columns.is-centered
    [:div.column.is-one-third-widescreen.is-half-full-hd.is-three-quarters
     [site-prompt prompt]]]
   [:div.column.is-full.my-5]
   [:div.columns.is-centered
    [:div.column.is-narrow.is-one-quarter-widescreen.is-one-quarter-fullhd.is-one-third-desktop
     [search-bar]]]
   [:div.columns.is-centered
    [:div.column.is-half
     [:hr]]]
   [:h2.has-text-centered "Don't know where to start? Try a "
    [:a {:on-click #(re-frame/dispatch [::events/push-state :routes/rand])} "random match"]]])

(defn writer-body 
  "All the info about a writer is displayed in here"
  []
  (let [writer  @(re-frame/subscribe [::subs/current-writer])
        
        ;; I'd like to render fonts dynamically, based on whether
        ;; any part of the name could be broken up because of the 
        ;; user's device. This could be really overengineered though
        ;; Perhaps sticking to bulma `is-<size>` in plain hiccup is
        ;; better.
        ;; Potential way:
        ;; name-length (count (:writer_name writer))
        ;; whtspace (js/console.log (count (filter blank? (:writer_name writer))))
        ;; size (/ name-length whtspace)
      
        neighbors @(re-frame/subscribe [::subs/writer-matches])
        key     (key-num->letter (:mode_key writer))
        tempo   (:mean_tempo writer)]
    (if (nil? neighbors)
      [loading-indicator]
      [:div.columns.is-centered.is-mobile
       [:div.column.tile.is-ancestor.is-5-widescreen.is-half-desktop.is-full-mobile.is-three-quarters-tablet.writer-card
        [:div.tile.is-vertical.is-parent
         [:article.box.tile.is-child.pb-6.notification.is-primary
          [:div.columns.is-mobile.is-vcentered
           [:h1.title.is-size-4-mobile.is-size-2-tablet.column.is-two-thirds 
            (:writer_name writer)
            [:p.subtitle.is-2.is-size-3-tablet.is-size-4-mobile (str "IPI: " (:ipi writer))]]
           [ui/music-circle-icon {:size "33%" :class "column is-one-third"}]]
          [:hr]
          [:div.columns.is-mobile.is-centered.stat-panel.pt-3
           [stat-box key "Primary Key(s)" ui/treble-clef-icon]
           [:div.column.is-1]
           [stat-box tempo "Avg Tempo" ui/tempo-icon]]
          [:hr]
          [neighbors-result-listing]]]]])))

;; Panels
;; The main "frames" of the website
(defn home []
  [:div.app
   [header-w-args]
   [home-content "Discover Thousands of Songwriters"]
   [:div {:style {:height "5rem"}}]])

(defn results-panel []
  [:div.app
   [header-w-search-bar]
   [:div.columns
    [full-results]]])

(defn writer-panel []
  [:div.app
   [header-w-search-bar]
   [:div.info-content
    [writer-body]]])

(defn about-panel []
  [:div.app
   [header-w-search-bar]
   [:div.info-content
    [about-body]]
   [footer]])

(defn error-panel []
  [:div.app
   [header-w-search-bar]
   [:div.info-content
    [for-o-for "404 - Sorry the page your looking for cannot be found"]]])