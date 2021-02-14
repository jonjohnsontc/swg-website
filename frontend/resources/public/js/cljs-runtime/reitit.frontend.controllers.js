goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__66217,match){
var map__66218 = p__66217;
var map__66218__$1 = (((((!((map__66218 == null))))?(((((map__66218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66218):map__66218);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66218__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66218__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66218__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4115__auto__ = identity;
if(cljs.core.truth_(and__4115__auto__)){
return parameters;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__66230(s__66231){
return (new cljs.core.LazySeq(null,(function (){
var s__66231__$1 = s__66231;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66231__$1);
if(temp__5735__auto__){
var s__66231__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66231__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66231__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66233 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66232 = (0);
while(true){
if((i__66232 < size__4528__auto__)){
var vec__66246 = cljs.core._nth(c__4527__auto__,i__66232);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66246,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66246,(1),null);
cljs.core.chunk_append(b__66233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__66342 = (i__66232 + (1));
i__66232 = G__66342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66233),reitit$frontend$controllers$get_identity_$_iter__66230(cljs.core.chunk_rest(s__66231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66233),null);
}
} else {
var vec__66254 = cljs.core.first(s__66231__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66254,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66254,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__66230(cljs.core.rest(s__66231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__66267 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__66267) : f.call(null,G__66267));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__66283_66348 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__66284_66349 = null;
var count__66285_66350 = (0);
var i__66286_66351 = (0);
while(true){
if((i__66286_66351 < count__66285_66350)){
var controller_66354 = chunk__66284_66349.cljs$core$IIndexed$_nth$arity$2(null,i__66286_66351);
reitit.frontend.controllers.apply_controller(controller_66354,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__66356 = seq__66283_66348;
var G__66357 = chunk__66284_66349;
var G__66358 = count__66285_66350;
var G__66359 = (i__66286_66351 + (1));
seq__66283_66348 = G__66356;
chunk__66284_66349 = G__66357;
count__66285_66350 = G__66358;
i__66286_66351 = G__66359;
continue;
} else {
var temp__5735__auto___66361 = cljs.core.seq(seq__66283_66348);
if(temp__5735__auto___66361){
var seq__66283_66363__$1 = temp__5735__auto___66361;
if(cljs.core.chunked_seq_QMARK_(seq__66283_66363__$1)){
var c__4556__auto___66364 = cljs.core.chunk_first(seq__66283_66363__$1);
var G__66365 = cljs.core.chunk_rest(seq__66283_66363__$1);
var G__66366 = c__4556__auto___66364;
var G__66367 = cljs.core.count(c__4556__auto___66364);
var G__66368 = (0);
seq__66283_66348 = G__66365;
chunk__66284_66349 = G__66366;
count__66285_66350 = G__66367;
i__66286_66351 = G__66368;
continue;
} else {
var controller_66369 = cljs.core.first(seq__66283_66363__$1);
reitit.frontend.controllers.apply_controller(controller_66369,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__66374 = cljs.core.next(seq__66283_66363__$1);
var G__66375 = null;
var G__66376 = (0);
var G__66377 = (0);
seq__66283_66348 = G__66374;
chunk__66284_66349 = G__66375;
count__66285_66350 = G__66376;
i__66286_66351 = G__66377;
continue;
}
} else {
}
}
break;
}

var seq__66312_66378 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__66313_66379 = null;
var count__66314_66380 = (0);
var i__66315_66381 = (0);
while(true){
if((i__66315_66381 < count__66314_66380)){
var controller_66383 = chunk__66313_66379.cljs$core$IIndexed$_nth$arity$2(null,i__66315_66381);
reitit.frontend.controllers.apply_controller(controller_66383,new cljs.core.Keyword(null,"start","start",-355208981));


var G__66384 = seq__66312_66378;
var G__66385 = chunk__66313_66379;
var G__66386 = count__66314_66380;
var G__66387 = (i__66315_66381 + (1));
seq__66312_66378 = G__66384;
chunk__66313_66379 = G__66385;
count__66314_66380 = G__66386;
i__66315_66381 = G__66387;
continue;
} else {
var temp__5735__auto___66392 = cljs.core.seq(seq__66312_66378);
if(temp__5735__auto___66392){
var seq__66312_66393__$1 = temp__5735__auto___66392;
if(cljs.core.chunked_seq_QMARK_(seq__66312_66393__$1)){
var c__4556__auto___66394 = cljs.core.chunk_first(seq__66312_66393__$1);
var G__66395 = cljs.core.chunk_rest(seq__66312_66393__$1);
var G__66396 = c__4556__auto___66394;
var G__66397 = cljs.core.count(c__4556__auto___66394);
var G__66398 = (0);
seq__66312_66378 = G__66395;
chunk__66313_66379 = G__66396;
count__66314_66380 = G__66397;
i__66315_66381 = G__66398;
continue;
} else {
var controller_66399 = cljs.core.first(seq__66312_66393__$1);
reitit.frontend.controllers.apply_controller(controller_66399,new cljs.core.Keyword(null,"start","start",-355208981));


var G__66400 = cljs.core.next(seq__66312_66393__$1);
var G__66401 = null;
var G__66402 = (0);
var G__66403 = (0);
seq__66312_66378 = G__66400;
chunk__66313_66379 = G__66401;
count__66314_66380 = G__66402;
i__66315_66381 = G__66403;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
