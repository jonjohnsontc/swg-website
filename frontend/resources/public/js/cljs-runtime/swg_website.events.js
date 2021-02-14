goog.provide('swg_website.events');
re_frame.core.reg_fx(new cljs.core.Keyword(null,"push-state","push-state",-1409397210),(function (route){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reitit.frontend.easy.push_state,route);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","initialize-db","swg-website.events/initialize-db",-195213834),(function (_,___$1){
return swg_website.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","save-name","swg-website.events/save-name",-324427427),(function (db,p__60832){
var vec__60833 = p__60832;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60833,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60833,(1),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60833,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,id,name);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","clear-search","swg-website.events/clear-search",-843605878),(function (db,p__60836){
var vec__60837 = p__60836;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60837,(0),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"search-term","search-term",356193544),null);
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("swg-website.events","current-url","swg-website.events/current-url",2142777684),(function (cofx){
var loc = document.location;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword("swg-website.events","current-url","swg-website.events/current-url",2142777684),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),loc.pathname,new cljs.core.Keyword(null,"query","query",-1288509510),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","toggle-burger-menu","swg-website.events/toggle-burger-menu",1702404695),(function (db,p__60840){
var vec__60841 = p__60840;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60841,(0),null);
var burger_status = new cljs.core.Keyword(null,"burger-menu","burger-menu",2097990522).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,burger_status)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"burger-menu","burger-menu",2097990522),false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"burger-menu","burger-menu",2097990522),true);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","toggle-search-bar-focus","swg-website.events/toggle-search-bar-focus",-682581552),(function (db,p__60844){
var vec__60845 = p__60844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60845,(0),null);
var focus = new cljs.core.Keyword(null,"search-bar-focus","search-bar-focus",2069261864).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,focus)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"search-bar-focus","search-bar-focus",2069261864),false);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"search-bar-focus","search-bar-focus",2069261864),true);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("swg-website.events","init-router","swg-website.events/init-router",1498748527),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("swg-website.events","current-url","swg-website.events/current-url",2142777684))], null),(function (cofx,p__60848){
var vec__60849 = p__60848;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60849,(0),null);
var router = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60849,(1),null);
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("swg-website.events","current-url","swg-website.events/current-url",2142777684).cljs$core$IFn$_invoke$arity$1(cofx));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cofx),new cljs.core.Keyword(null,"active-route","active-route",-1914333809),reitit.core.match_by_path(router,path))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","push-state","swg-website.events/push-state",-1008413292),(function (db,p__60852){
var vec__60853 = p__60852;
var seq__60854 = cljs.core.seq(vec__60853);
var first__60855 = cljs.core.first(seq__60854);
var seq__60854__$1 = cljs.core.next(seq__60854);
var _ = first__60855;
var route = seq__60854__$1;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"push-state","push-state",-1409397210),route], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","navigated","swg-website.events/navigated",2011491426),(function (db,p__60856){
var vec__60857 = p__60856;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60857,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60857,(1),null);
var old_match = new cljs.core.Keyword(null,"active-route","active-route",-1914333809).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-route","active-route",-1914333809),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","clear-search-and-go-home","swg-website.events/clear-search-and-go-home",-698327698),(function (p__60860,p__60861){
var map__60862 = p__60860;
var map__60862__$1 = (((((!((map__60862 == null))))?(((((map__60862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60862):map__60862);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60862__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60863 = p__60861;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60863,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"search-term","search-term",356193544),null),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","push-state","swg-website.events/push-state",-1008413292),new cljs.core.Keyword("routes","home","routes/home",-1297486007)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","get-neighbors","swg-website.events/get-neighbors",-2022865502),(function (p__60867,p__60868){
var map__60869 = p__60867;
var map__60869__$1 = (((((!((map__60869 == null))))?(((((map__60869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60869):map__60869);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60869__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60870 = p__60868;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60870,(0),null);
var writer_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60870,(1),null);
var uri = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(swg_website.config.debug_QMARK_,true))?"http://localhost:5000/neighbors/":"/neighbors/");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[uri,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wid","wid",-742032838).cljs$core$IFn$_invoke$arity$1(writer_map))].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","neighbors-response","swg-website.events/neighbors-response",-1971828566),new cljs.core.Keyword(null,"wid","wid",-742032838).cljs$core$IFn$_invoke$arity$1(writer_map)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","bad-response","swg-website.events/bad-response",1482026304)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"current-writer","current-writer",-2032400582),writer_map)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","get-writers","swg-website.events/get-writers",-666004154),(function (p__60874,_){
var map__60875 = p__60874;
var map__60875__$1 = (((((!((map__60875 == null))))?(((((map__60875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60875):map__60875);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword(null,"db","db",993250759));
var term = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-term","search-term",356193544)], null));
var uri = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(swg_website.config.debug_QMARK_,true))?"http://localhost:5000/writers/name_search/":"/writers/name_search/");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[uri,cljs.core.str.cljs$core$IFn$_invoke$arity$1(term)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","writers-response","swg-website.events/writers-response",-1898703242),term], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","bad-response","swg-website.events/bad-response",1482026304)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","writers-response","swg-website.events/writers-response",-1898703242),(function (p__60877,p__60878){
var map__60879 = p__60877;
var map__60879__$1 = (((((!((map__60879 == null))))?(((((map__60879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60879):map__60879);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60879__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60880 = p__60878;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(0),null);
var term = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60880,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),swg_website.queries.set_search_results(swg_website.queries.set_loading_state(db,false),response)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","neighbors-response","swg-website.events/neighbors-response",-1971828566),(function (p__60884,p__60885){
var map__60886 = p__60884;
var map__60886__$1 = (((((!((map__60886 == null))))?(((((map__60886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__60886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__60886):map__60886);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60886__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__60887 = p__60885;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60887,(0),null);
var wid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60887,(1),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60887,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),swg_website.queries.set_neighbors(swg_website.queries.set_loading_state(db,false),response),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","push-state","swg-website.events/push-state",-1008413292),new cljs.core.Keyword("routes","writer","routes/writer",71904602),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wid","wid",-742032838),wid], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("swg-website.events","bad-response","swg-website.events/bad-response",1482026304),(function (db,p__60891){
var vec__60892 = p__60891;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60892,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60892,(1),null);
return swg_website.queries.set_error_message(swg_website.queries.set_loading_state(db,false),response);
}));

//# sourceMappingURL=swg_website.events.js.map
