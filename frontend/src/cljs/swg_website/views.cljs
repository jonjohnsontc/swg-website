(ns swg-website.views
  (:require
   [clojure.string :refer [trim]]
   [re-frame.core :as re-frame]
   [swg-website.events :as events]
   [swg-website.subs :as subs]
   [swg-website.utils :refer [make-search-term]]))

(def gh-address
  "https://github.com/jonjohnsontc/songwriter-graph")

;; Event Handlers(??)
(defn update-search-term [term]
  (re-frame/dispatch [::events/save-name :search-term term]))

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

(defn footer []
  [:div])

(defn ellipsis [] ;; Not sure what `sr-only` is referring to
  [:div [:div.lds-ellipsis [:div] [:div] [:div] [:div] [:span.sr-only "Loading..."]]])

(defn nav-button
  "The links to the right of the logo and sometimes search bar up top"
  [name on-click]
  (if (nil? on-click)
    [:div.is-inline-flex.is-clickable.navbar-item.level-item [:a] name]
    [:div.is-inline-flex.is-clickable.navbar-item.level-item
     [:a {:on-click #(re-frame/dispatch [on-click %])}] name]))

(defn go-button
  "Typically displayed next to the search bar. Initiates search for writer"
  []
  (let [term @(re-frame/subscribe [::subs/search-term])]
   [:button.button.is-primary.is-inline-flex.column.is-2.is-rounded
   {:on-click #(re-frame/dispatch [::events/push-state :routes/search {:term (make-search-term term)}])} 
    "Go"]))

;; TODO: Link should show router url e.g., /neighbors/1234
;;                             (cljs e.g., (str "/neighbors/" (:wid writer-map)))
(defn writer-result
  "A single writer search result link"
  [writer-map]
  [:li.writer-result
   [:a {:href ""
        :on-click #(re-frame/dispatch [::events/get-neighbors writer-map])}
    (trim (:writer_name writer-map))]])

;; https://stackoverflow.com/questions/37164091/how-do-i-loop-through-a-subscribed-collection-in-re-frame-and-display-the-data-a/37186230#37186230
(defn results-listing []
  (let [results (:values @(re-frame/subscribe [::subs/current-search]))]
    [:div.info-content.column.is-7
     [:div.subtitle.is-2 "Search Results"]
     [:div.content   ;; 'content' class to show bullet points
      (into [:ul] (map writer-result results))]]))

(defn neighbors-result-listing
  "List of nearest neighbors per writer"
  []
  (let [neighbors @(re-frame/subscribe [::subs/writer-matches])]
    [:div
     [:div "Closest Matches"]
     [:div.content   ;; 'content' class to show numbered list
      (into [:ol] (map writer-result neighbors))]]))

;; TODO: Wanna get a nice search bar animation for focus / clicking on it
(defn search-bar 
  "Search bar for the website. The one and only"
  []
  (let [term @(re-frame/subscribe [::subs/search-term])
        loading? @(re-frame/subscribe [::subs/loading])
        focus @(re-frame/subscribe [::subs/search-bar-focus])]
    [:div.columns.search-bar {
                              ;; Commented out until I deal with search bar focus
                              ;; :tabindex 1
                              ;; :on-click #(re-frame/dispatch [::events/toggle-search-bar-focus])
                              }
     [:input.input.column.is-10.is-rounded
      {:type "text"
       :value term
       :class [(when (true? loading?) "is-loading")]
       :on-change #(update-search-term (-> %  .-target .-value))}]
     [go-button]]))

(defn writer-body []
  (let [writer @(re-frame/subscribe [::subs/current-writer])]
    [:div [:div.display-circle]
     [:div [:div (:writer_name writer)]]
     [:div [:div (str "IPI: " (:ipi writer))]]
     [neighbors-result-listing]]))

(defn header
  "The header for the website. Does not include the search bar"
  []
  [:div.header.level
   [:div.columns.level-left
    [:div.column [swg-logo]]
    [:div.column.is-1 [nav-button "About" nil]]
    [:div.column.is-narrow]
    [:div.column.is-1  [nav-button "GitHub" nil]]]])

;; TODO: Finish
(defn header-w-args
  "The header for the website. Does not include the search bar"
  []
  (let [toggle @(re-frame/subscribe [::subs/burger-menu])]
    [:nav.navbar.is-white.is-spaced.is-tab.header 
     {:role "navigation" :aria-label "main navigation"}
     [:div.navbar-brand
      [swg-logo]
      [:a.navbar-burger {:role "button" :aria-label "menu" :aria-expanded "false"
                         :class (when (= true toggle) "is-active")
                         :on-click #(re-frame/dispatch [::events/toggle-burger-menu])}
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]]]
     [:div.navbar-menu {:class (when (= true toggle) "is-active")}
      [nav-button "About" nil]
      [nav-button "GitHub" nil]
      [:div.navbar-end]]]))

(defn header-w-search-bar
  "The header for the website, including search bar"
  []
  (let [toggle @(re-frame/subscribe [::subs/burger-menu])]
    [:nav.navbar.is-white.is-spaced.is-tab.header
     {:role "navigation" :aria-label "main navigation"}
     [:div.navbar-brand
      [swg-logo]
      [:a.navbar-burger {:role "button" :aria-label "menu" :aria-expanded "false"
                         :class (when (= true toggle) "is-active")
                         :on-click #(re-frame/dispatch [::events/toggle-burger-menu])}
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]
       [:span {:aria-hidden "true"}]]]
     [:div.navbar-menu.level {:class (when (= true toggle) "is-active")}
      [:div.navbar-start]
      [:div.navbar-item.level-item [search-bar]]
      [nav-button "About" nil]
      [nav-button "GitHub" nil]
      [:div.navbar-end]]]))


(defn home-content
  "The main content within the landing page of the app"
  [prompt]
  [:div.home-content
   [:div.columns [:div.column.is-1]
    [:div.column.is-7 [:h2.subtitle.is-2 prompt]
     [:div.column.is-full.my-5] 
     [:div.columns.is-mobile 
      [:div.column.is-two-thirds [search-bar]]]]]])

;; Panels
;; The main "frames" of the website
(defn home []
  [:div.app
   [header-w-args]
   [home-content "Search for a writer here"]])

(defn results-panel []
  [:div.app
   [header-w-search-bar]
   [:div.columns 
    [:div.column.is-1]
    [results-listing]]
   [footer]])

(defn writer-panel []
  [:div.app
   [header-w-search-bar]
   [:div.info-content
    [writer-body]]
   [footer]])