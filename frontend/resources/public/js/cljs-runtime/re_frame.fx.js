goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52867 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52868 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52868);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53029 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53029)){
var new_db_53030 = temp__5735__auto___53029;
var fexpr__52872_53031 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52872_53031.cljs$core$IFn$_invoke$arity$1 ? fexpr__52872_53031.cljs$core$IFn$_invoke$arity$1(new_db_53030) : fexpr__52872_53031.call(null,new_db_53030));
} else {
}

var seq__52873 = cljs.core.seq(effects_without_db);
var chunk__52874 = null;
var count__52875 = (0);
var i__52876 = (0);
while(true){
if((i__52876 < count__52875)){
var vec__52892 = chunk__52874.cljs$core$IIndexed$_nth$arity$2(null,i__52876);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52892,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52892,(1),null);
var temp__5733__auto___53038 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53038)){
var effect_fn_53039 = temp__5733__auto___53038;
(effect_fn_53039.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53039.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53039.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53044 = seq__52873;
var G__53045 = chunk__52874;
var G__53046 = count__52875;
var G__53047 = (i__52876 + (1));
seq__52873 = G__53044;
chunk__52874 = G__53045;
count__52875 = G__53046;
i__52876 = G__53047;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52873);
if(temp__5735__auto__){
var seq__52873__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52873__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52873__$1);
var G__53054 = cljs.core.chunk_rest(seq__52873__$1);
var G__53055 = c__4556__auto__;
var G__53056 = cljs.core.count(c__4556__auto__);
var G__53057 = (0);
seq__52873 = G__53054;
chunk__52874 = G__53055;
count__52875 = G__53056;
i__52876 = G__53057;
continue;
} else {
var vec__52898 = cljs.core.first(seq__52873__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52898,(1),null);
var temp__5733__auto___53059 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53059)){
var effect_fn_53061 = temp__5733__auto___53059;
(effect_fn_53061.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53061.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53061.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53065 = cljs.core.next(seq__52873__$1);
var G__53066 = null;
var G__53067 = (0);
var G__53068 = (0);
seq__52873 = G__53065;
chunk__52874 = G__53066;
count__52875 = G__53067;
i__52876 = G__53068;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52335__auto___53071 = re_frame.interop.now();
var duration__52336__auto___53072 = (end__52335__auto___53071 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52336__auto___53072,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52335__auto___53071);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52867);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53075 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53075)){
var new_db_53076 = temp__5735__auto___53075;
var fexpr__52904_53078 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52904_53078.cljs$core$IFn$_invoke$arity$1 ? fexpr__52904_53078.cljs$core$IFn$_invoke$arity$1(new_db_53076) : fexpr__52904_53078.call(null,new_db_53076));
} else {
}

var seq__52905 = cljs.core.seq(effects_without_db);
var chunk__52906 = null;
var count__52907 = (0);
var i__52908 = (0);
while(true){
if((i__52908 < count__52907)){
var vec__52916 = chunk__52906.cljs$core$IIndexed$_nth$arity$2(null,i__52908);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52916,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52916,(1),null);
var temp__5733__auto___53083 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53083)){
var effect_fn_53085 = temp__5733__auto___53083;
(effect_fn_53085.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53085.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53085.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53087 = seq__52905;
var G__53088 = chunk__52906;
var G__53089 = count__52907;
var G__53090 = (i__52908 + (1));
seq__52905 = G__53087;
chunk__52906 = G__53088;
count__52907 = G__53089;
i__52908 = G__53090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52905);
if(temp__5735__auto__){
var seq__52905__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52905__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52905__$1);
var G__53092 = cljs.core.chunk_rest(seq__52905__$1);
var G__53093 = c__4556__auto__;
var G__53094 = cljs.core.count(c__4556__auto__);
var G__53095 = (0);
seq__52905 = G__53092;
chunk__52906 = G__53093;
count__52907 = G__53094;
i__52908 = G__53095;
continue;
} else {
var vec__52925 = cljs.core.first(seq__52905__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52925,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52925,(1),null);
var temp__5733__auto___53099 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53099)){
var effect_fn_53100 = temp__5733__auto___53099;
(effect_fn_53100.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53100.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53100.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53101 = cljs.core.next(seq__52905__$1);
var G__53102 = null;
var G__53103 = (0);
var G__53104 = (0);
seq__52905 = G__53101;
chunk__52906 = G__53102;
count__52907 = G__53103;
i__52908 = G__53104;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__52937){
var map__52940 = p__52937;
var map__52940__$1 = (((((!((map__52940 == null))))?(((((map__52940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52940):map__52940);
var effect = map__52940__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52940__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52940__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__52946 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52947 = null;
var count__52948 = (0);
var i__52949 = (0);
while(true){
if((i__52949 < count__52948)){
var effect = chunk__52947.cljs$core$IIndexed$_nth$arity$2(null,i__52949);
re_frame.fx.dispatch_later(effect);


var G__53110 = seq__52946;
var G__53111 = chunk__52947;
var G__53112 = count__52948;
var G__53113 = (i__52949 + (1));
seq__52946 = G__53110;
chunk__52947 = G__53111;
count__52948 = G__53112;
i__52949 = G__53113;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52946);
if(temp__5735__auto__){
var seq__52946__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52946__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52946__$1);
var G__53114 = cljs.core.chunk_rest(seq__52946__$1);
var G__53115 = c__4556__auto__;
var G__53116 = cljs.core.count(c__4556__auto__);
var G__53117 = (0);
seq__52946 = G__53114;
chunk__52947 = G__53115;
count__52948 = G__53116;
i__52949 = G__53117;
continue;
} else {
var effect = cljs.core.first(seq__52946__$1);
re_frame.fx.dispatch_later(effect);


var G__53118 = cljs.core.next(seq__52946__$1);
var G__53119 = null;
var G__53120 = (0);
var G__53121 = (0);
seq__52946 = G__53118;
chunk__52947 = G__53119;
count__52948 = G__53120;
i__52949 = G__53121;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__52958 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52959 = null;
var count__52960 = (0);
var i__52961 = (0);
while(true){
if((i__52961 < count__52960)){
var vec__52985 = chunk__52959.cljs$core$IIndexed$_nth$arity$2(null,i__52961);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52985,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52985,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53127 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53127)){
var effect_fn_53128 = temp__5733__auto___53127;
(effect_fn_53128.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53128.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53128.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53129 = seq__52958;
var G__53130 = chunk__52959;
var G__53131 = count__52960;
var G__53132 = (i__52961 + (1));
seq__52958 = G__53129;
chunk__52959 = G__53130;
count__52960 = G__53131;
i__52961 = G__53132;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52958);
if(temp__5735__auto__){
var seq__52958__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52958__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52958__$1);
var G__53138 = cljs.core.chunk_rest(seq__52958__$1);
var G__53139 = c__4556__auto__;
var G__53140 = cljs.core.count(c__4556__auto__);
var G__53141 = (0);
seq__52958 = G__53138;
chunk__52959 = G__53139;
count__52960 = G__53140;
i__52961 = G__53141;
continue;
} else {
var vec__52993 = cljs.core.first(seq__52958__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52993,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52993,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53145 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53145)){
var effect_fn_53146 = temp__5733__auto___53145;
(effect_fn_53146.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53146.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53146.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53150 = cljs.core.next(seq__52958__$1);
var G__53151 = null;
var G__53152 = (0);
var G__53153 = (0);
seq__52958 = G__53150;
chunk__52959 = G__53151;
count__52960 = G__53152;
i__52961 = G__53153;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52996 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52997 = null;
var count__52998 = (0);
var i__52999 = (0);
while(true){
if((i__52999 < count__52998)){
var event = chunk__52997.cljs$core$IIndexed$_nth$arity$2(null,i__52999);
re_frame.router.dispatch(event);


var G__53162 = seq__52996;
var G__53163 = chunk__52997;
var G__53164 = count__52998;
var G__53165 = (i__52999 + (1));
seq__52996 = G__53162;
chunk__52997 = G__53163;
count__52998 = G__53164;
i__52999 = G__53165;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52996);
if(temp__5735__auto__){
var seq__52996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52996__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52996__$1);
var G__53170 = cljs.core.chunk_rest(seq__52996__$1);
var G__53171 = c__4556__auto__;
var G__53172 = cljs.core.count(c__4556__auto__);
var G__53173 = (0);
seq__52996 = G__53170;
chunk__52997 = G__53171;
count__52998 = G__53172;
i__52999 = G__53173;
continue;
} else {
var event = cljs.core.first(seq__52996__$1);
re_frame.router.dispatch(event);


var G__53174 = cljs.core.next(seq__52996__$1);
var G__53175 = null;
var G__53176 = (0);
var G__53177 = (0);
seq__52996 = G__53174;
chunk__52997 = G__53175;
count__52998 = G__53176;
i__52999 = G__53177;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53011 = cljs.core.seq(value);
var chunk__53012 = null;
var count__53013 = (0);
var i__53014 = (0);
while(true){
if((i__53014 < count__53013)){
var event = chunk__53012.cljs$core$IIndexed$_nth$arity$2(null,i__53014);
clear_event(event);


var G__53184 = seq__53011;
var G__53185 = chunk__53012;
var G__53186 = count__53013;
var G__53187 = (i__53014 + (1));
seq__53011 = G__53184;
chunk__53012 = G__53185;
count__53013 = G__53186;
i__53014 = G__53187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53011);
if(temp__5735__auto__){
var seq__53011__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53011__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__53011__$1);
var G__53188 = cljs.core.chunk_rest(seq__53011__$1);
var G__53189 = c__4556__auto__;
var G__53190 = cljs.core.count(c__4556__auto__);
var G__53191 = (0);
seq__53011 = G__53188;
chunk__53012 = G__53189;
count__53013 = G__53190;
i__53014 = G__53191;
continue;
} else {
var event = cljs.core.first(seq__53011__$1);
clear_event(event);


var G__53192 = cljs.core.next(seq__53011__$1);
var G__53193 = null;
var G__53194 = (0);
var G__53195 = (0);
seq__53011 = G__53192;
chunk__53012 = G__53193;
count__53013 = G__53194;
i__53014 = G__53195;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
