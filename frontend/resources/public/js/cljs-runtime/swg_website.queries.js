goog.provide('swg_website.queries');
swg_website.queries.get_current_writer = (function swg_website$queries$get_current_writer(db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cs","cs",-1757555990),new cljs.core.Keyword(null,"wid","wid",-742032838)], null));
});
swg_website.queries.set_loading_state = (function swg_website$queries$set_loading_state(db,val){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading-state","loading-state",-1170324532)], null),val);
});
swg_website.queries.set_id_val = (function swg_website$queries$set_id_val(db,id,val){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,id,val);
});
swg_website.queries.get_search_term = (function swg_website$queries$get_search_term(db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"search-term","search-term",356193544));
});
swg_website.queries.set_search_results = (function swg_website$queries$set_search_results(db,results){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cs","cs",-1757555990),new cljs.core.Keyword(null,"values","values",372645556)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results));
});
swg_website.queries.set_neighbors = (function swg_website$queries$set_neighbors(db,results){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"writer-matches","writer-matches",1845018985)], null),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results));
});
swg_website.queries.set_error_message = (function swg_website$queries$set_error_message(db,response){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),response);
});

//# sourceMappingURL=swg_website.queries.js.map
