goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v12v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__49119 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49120 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49120);

try{try{var seq__49122 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49123 = null;
var count__49124 = (0);
var i__49125 = (0);
while(true){
if((i__49125 < count__49124)){
var vec__49143 = chunk__49123.cljs$core$IIndexed$_nth$arity$2(null,i__49125);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49143,(1),null);
var temp__5733__auto___49224 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49224)){
var effect_fn_49225 = temp__5733__auto___49224;
(effect_fn_49225.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49225.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49225.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49226 = seq__49122;
var G__49227 = chunk__49123;
var G__49228 = count__49124;
var G__49229 = (i__49125 + (1));
seq__49122 = G__49226;
chunk__49123 = G__49227;
count__49124 = G__49228;
i__49125 = G__49229;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49122);
if(temp__5735__auto__){
var seq__49122__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49122__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49122__$1);
var G__49230 = cljs.core.chunk_rest(seq__49122__$1);
var G__49231 = c__4556__auto__;
var G__49232 = cljs.core.count(c__4556__auto__);
var G__49233 = (0);
seq__49122 = G__49230;
chunk__49123 = G__49231;
count__49124 = G__49232;
i__49125 = G__49233;
continue;
} else {
var vec__49149 = cljs.core.first(seq__49122__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49149,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49149,(1),null);
var temp__5733__auto___49234 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49234)){
var effect_fn_49235 = temp__5733__auto___49234;
(effect_fn_49235.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49235.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49235.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49237 = cljs.core.next(seq__49122__$1);
var G__49238 = null;
var G__49239 = (0);
var G__49240 = (0);
seq__49122 = G__49237;
chunk__49123 = G__49238;
count__49124 = G__49239;
i__49125 = G__49240;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__48652__auto___49241 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now();
var duration__48653__auto___49242 = (end__48652__auto___49241 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48653__auto___49242,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace.run_tracing_callbacks_BANG_(end__48652__auto___49241);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49119);
}} else {
var seq__49153 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__49154 = null;
var count__49155 = (0);
var i__49156 = (0);
while(true){
if((i__49156 < count__49155)){
var vec__49171 = chunk__49154.cljs$core$IIndexed$_nth$arity$2(null,i__49156);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49171,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49171,(1),null);
var temp__5733__auto___49243 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49243)){
var effect_fn_49244 = temp__5733__auto___49243;
(effect_fn_49244.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49244.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49244.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49245 = seq__49153;
var G__49246 = chunk__49154;
var G__49247 = count__49155;
var G__49248 = (i__49156 + (1));
seq__49153 = G__49245;
chunk__49154 = G__49246;
count__49155 = G__49247;
i__49156 = G__49248;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49153);
if(temp__5735__auto__){
var seq__49153__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49153__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49153__$1);
var G__49249 = cljs.core.chunk_rest(seq__49153__$1);
var G__49250 = c__4556__auto__;
var G__49251 = cljs.core.count(c__4556__auto__);
var G__49252 = (0);
seq__49153 = G__49249;
chunk__49154 = G__49250;
count__49155 = G__49251;
i__49156 = G__49252;
continue;
} else {
var vec__49174 = cljs.core.first(seq__49153__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49174,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49174,(1),null);
var temp__5733__auto___49254 = day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49254)){
var effect_fn_49255 = temp__5733__auto___49254;
(effect_fn_49255.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49255.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49255.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49256 = cljs.core.next(seq__49153__$1);
var G__49257 = null;
var G__49258 = (0);
var G__49259 = (0);
seq__49153 = G__49256;
chunk__49154 = G__49257;
count__49155 = G__49258;
i__49156 = G__49259;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__49178 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49179 = null;
var count__49180 = (0);
var i__49181 = (0);
while(true){
if((i__49181 < count__49180)){
var map__49193 = chunk__49179.cljs$core$IIndexed$_nth$arity$2(null,i__49181);
var map__49193__$1 = (((((!((map__49193 == null))))?(((((map__49193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49193):map__49193);
var effect = map__49193__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49193__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49193__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__49178,chunk__49179,count__49180,i__49181,map__49193,map__49193__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__49178,chunk__49179,count__49180,i__49181,map__49193,map__49193__$1,effect,ms,dispatch))
,ms);
}


var G__49260 = seq__49178;
var G__49261 = chunk__49179;
var G__49262 = count__49180;
var G__49263 = (i__49181 + (1));
seq__49178 = G__49260;
chunk__49179 = G__49261;
count__49180 = G__49262;
i__49181 = G__49263;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49178);
if(temp__5735__auto__){
var seq__49178__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49178__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49178__$1);
var G__49265 = cljs.core.chunk_rest(seq__49178__$1);
var G__49266 = c__4556__auto__;
var G__49267 = cljs.core.count(c__4556__auto__);
var G__49268 = (0);
seq__49178 = G__49265;
chunk__49179 = G__49266;
count__49180 = G__49267;
i__49181 = G__49268;
continue;
} else {
var map__49196 = cljs.core.first(seq__49178__$1);
var map__49196__$1 = (((((!((map__49196 == null))))?(((((map__49196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49196.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49196):map__49196);
var effect = map__49196__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49196__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49196__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.interop.set_timeout_BANG_(((function (seq__49178,chunk__49179,count__49180,i__49181,map__49196,map__49196__$1,effect,ms,dispatch,seq__49178__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(dispatch);
});})(seq__49178,chunk__49179,count__49180,i__49181,map__49196,map__49196__$1,effect,ms,dispatch,seq__49178__$1,temp__5735__auto__))
,ms);
}


var G__49273 = cljs.core.next(seq__49178__$1);
var G__49274 = null;
var G__49275 = (0);
var G__49276 = (0);
seq__49178 = G__49273;
chunk__49179 = G__49274;
count__49180 = G__49275;
i__49181 = G__49276;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49200 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49201 = null;
var count__49202 = (0);
var i__49203 = (0);
while(true){
if((i__49203 < count__49202)){
var event = chunk__49201.cljs$core$IIndexed$_nth$arity$2(null,i__49203);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49284 = seq__49200;
var G__49285 = chunk__49201;
var G__49286 = count__49202;
var G__49287 = (i__49203 + (1));
seq__49200 = G__49284;
chunk__49201 = G__49285;
count__49202 = G__49286;
i__49203 = G__49287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49200);
if(temp__5735__auto__){
var seq__49200__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49200__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49200__$1);
var G__49288 = cljs.core.chunk_rest(seq__49200__$1);
var G__49289 = c__4556__auto__;
var G__49290 = cljs.core.count(c__4556__auto__);
var G__49291 = (0);
seq__49200 = G__49288;
chunk__49201 = G__49289;
count__49202 = G__49290;
i__49203 = G__49291;
continue;
} else {
var event = cljs.core.first(seq__49200__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.router.dispatch(event);


var G__49293 = cljs.core.next(seq__49200__$1);
var G__49294 = null;
var G__49295 = (0);
var G__49296 = (0);
seq__49200 = G__49293;
chunk__49201 = G__49294;
count__49202 = G__49295;
i__49203 = G__49296;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49214 = cljs.core.seq(value);
var chunk__49215 = null;
var count__49216 = (0);
var i__49217 = (0);
while(true){
if((i__49217 < count__49216)){
var event = chunk__49215.cljs$core$IIndexed$_nth$arity$2(null,i__49217);
clear_event(event);


var G__49300 = seq__49214;
var G__49301 = chunk__49215;
var G__49302 = count__49216;
var G__49303 = (i__49217 + (1));
seq__49214 = G__49300;
chunk__49215 = G__49301;
count__49216 = G__49302;
i__49217 = G__49303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49214);
if(temp__5735__auto__){
var seq__49214__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49214__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49214__$1);
var G__49304 = cljs.core.chunk_rest(seq__49214__$1);
var G__49305 = c__4556__auto__;
var G__49306 = cljs.core.count(c__4556__auto__);
var G__49307 = (0);
seq__49214 = G__49304;
chunk__49215 = G__49305;
count__49216 = G__49306;
i__49217 = G__49307;
continue;
} else {
var event = cljs.core.first(seq__49214__$1);
clear_event(event);


var G__49313 = cljs.core.next(seq__49214__$1);
var G__49314 = null;
var G__49315 = (0);
var G__49316 = (0);
seq__49214 = G__49313;
chunk__49215 = G__49314;
count__49216 = G__49315;
i__49217 = G__49316;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v12v0.re_frame.fx.js.map
