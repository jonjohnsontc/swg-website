goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__66761){
var vec__66763 = p__66761;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66763,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__66778){
var map__66779 = p__66778;
var map__66779__$1 = (((((!((map__66779 == null))))?(((((map__66779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66779):map__66779);
var request = map__66779__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66779__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66779__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__66775_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__66775_SHARP_));
}),(function (p1__66776_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__66776_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5733__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5733__auto__)){
var on_request = temp__5733__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__66794 = cljs.core.seq(seq_request_maps);
var chunk__66795 = null;
var count__66796 = (0);
var i__66797 = (0);
while(true){
if((i__66797 < count__66796)){
var request__$1 = chunk__66795.cljs$core$IIndexed$_nth$arity$2(null,i__66797);
var xhrio_66834 = (function (){var G__66808 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__66808) : ajax.core.ajax_request.call(null,G__66808));
})();
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_66834);


var G__66838 = seq__66794;
var G__66839 = chunk__66795;
var G__66840 = count__66796;
var G__66841 = (i__66797 + (1));
seq__66794 = G__66838;
chunk__66795 = G__66839;
count__66796 = G__66840;
i__66797 = G__66841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__66794);
if(temp__5735__auto__){
var seq__66794__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__66794__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66794__$1);
var G__66845 = cljs.core.chunk_rest(seq__66794__$1);
var G__66846 = c__4556__auto__;
var G__66847 = cljs.core.count(c__4556__auto__);
var G__66848 = (0);
seq__66794 = G__66845;
chunk__66795 = G__66846;
count__66796 = G__66847;
i__66797 = G__66848;
continue;
} else {
var request__$1 = cljs.core.first(seq__66794__$1);
var xhrio_66849 = (function (){var G__66812 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
return (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__66812) : ajax.core.ajax_request.call(null,G__66812));
})();
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_66849);


var G__66850 = cljs.core.next(seq__66794__$1);
var G__66851 = null;
var G__66852 = (0);
var G__66853 = (0);
seq__66794 = G__66850;
chunk__66795 = G__66851;
count__66796 = G__66852;
i__66797 = G__66853;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
