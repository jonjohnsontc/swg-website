goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.debug !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.debug = false;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.generation !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.generation = (0);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._running !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.reactive_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$reactive_QMARK_(){
return (!((day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.running = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$running(){
return (cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._running));
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.arr_len = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.arr_eq = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$arr_eq(x,y){
var len = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.arr_len(x);
if((len === day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.arr_len(y))){
var i = (0);
while(true){
var or__4126__auto__ = (i === len);
if(or__4126__auto__){
return or__4126__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__43151 = (i + (1));
i = G__43151;
continue;
} else {
return false;
}
}
break;
}
} else {
return false;
}
});
/**
 * When f is executed, if (f) derefs any ratoms, they are then added to 'obj.captured'(*ratom-context*).
 * 
 *   See function notify-deref-watcher! to know how *ratom-context* is updated
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.in_context = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__42844 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__42845 = obj;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__42845);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__42844);
}});
/**
 * Returns `(in-context f r)`.  Calls `_update-watching` on r with any
 *   `deref`ed atoms captured during `in-context`, if any differ from the
 *   `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 *   Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 *   the reaction is also added to the list of watches on each ratoms f derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.deref_capture = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.generation = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.generation + (1))));


var res = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.in_context(r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_deref_watcher_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5739__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5739__auto__ == null)){
return null;
} else {
var r = temp__5739__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.check_watches = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$check_watches(old,new$){
if(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f)));

return (this$.watchesArr = null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.remove_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key)));

return (this$.watchesArr = null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv((function (p1__42864_SHARP_,p2__42865_SHARP_,p3__42866_SHARP_){
var G__42869 = p1__42864_SHARP_;
G__42869.push(p2__42865_SHARP_);

G__42869.push(p3__42866_SHARP_);

return G__42869;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_43158 = (a[i]);
var f_43159 = (a[(i + (1))]);
(f_43159.cljs$core$IFn$_invoke$arity$4 ? f_43159.cljs$core$IFn$_invoke$arity$4(k_43158,this$,old,new$) : f_43159.call(null,k_43158,this$,old,new$));

var G__43168 = ((2) + i);
i = G__43168;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.pr_atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__42871 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__42873 = null;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__42873);

try{return cljs.core._deref(a);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__42871);
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_queue = null;
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_enqueue = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$rea_enqueue(r){
if((day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_queue == null)){
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_queue = []);

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.schedule();
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_queue.push(r);
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$flush_BANG_(){
while(true){
var q = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_queue = null);

var n__4613__auto___43174 = q.length;
var i_43175 = (0);
while(true){
if((i_43175 < n__4613__auto___43174)){
(q[i_43175])._queued_run();

var G__43177 = (i_43175 + (1));
i_43175 = G__43177;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.ratom_flush = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_);

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/RAtom");

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/RAtom");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/RAtom.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_RAtom = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$atom(var_args){
var G__42895 = arguments.length;
switch (G__42895) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___43190 = arguments.length;
var i__4737__auto___43191 = (0);
while(true){
if((i__4737__auto___43191 < len__4736__auto___43190)){
args_arr__4757__auto__.push((arguments[i__4737__auto___43191]));

var G__43195 = (i__4737__auto___43191 + (1));
i__4737__auto___43191 = G__43195;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4758__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_RAtom(x,null,null,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__42896){
var map__42897 = p__42896;
var map__42897__$1 = (((((!((map__42897 == null))))?(((((map__42897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42897):map__42897);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq42890){
var G__42891 = cljs.core.first(seq42890);
var seq42890__$1 = cljs.core.next(seq42890);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42891,seq42890__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.cached_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__42899 = f;
var G__42900 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__42901 = (function (x){
if(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __43203 = o.reagReactionCache;
var __43204__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__43203,k);
(o.reagReactionCache = __43204__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});
return (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__42899,G__42900,G__42901) : day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.call(null,G__42899,G__42900,G__42901));
})();
var v = cljs.core._deref(r__$1);
(o.reagReactionCache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.cached_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Track");

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Track");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Track.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_Track = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track(f,args,reaction));
});

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_track = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$make_track(f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Track(f,args,null));
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$make_track_BANG_(f,args){
var t = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__42916 = (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});
var G__42917 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__42918 = true;
return (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__42916,G__42917,G__42918) : day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.call(null,G__42916,G__42917,G__42918));
})();
cljs.core.deref(r);

return r;
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$track(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43219 = arguments.length;
var i__4737__auto___43220 = (0);
while(true){
if((i__4737__auto___43220 < len__4736__auto___43219)){
args__4742__auto__.push((arguments[i__4737__auto___43220]));

var G__43221 = (i__4737__auto___43220 + (1));
i__4737__auto___43220 = G__43221;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_track(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq42922){
var G__42923 = cljs.core.first(seq42922);
var seq42922__$1 = cljs.core.next(seq42922);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42923,seq42922__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$track_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43222 = arguments.length;
var i__4737__auto___43223 = (0);
while(true){
if((i__4737__auto___43223 < len__4736__auto___43222)){
args__4742__auto__.push((arguments[i__4737__auto___43223]));

var G__43225 = (i__4737__auto___43223 + (1));
i__4737__auto___43223 = G__43225;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_track_BANG_(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq42925){
var G__42926 = cljs.core.first(seq42925);
var seq42925__$1 = cljs.core.next(seq42925);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42926,seq42925__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__42947 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__42948 = null;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__42948);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__42947);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__42958 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42958) : f.call(null,G__42958));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__42959 = a__$1._peek();
var G__42960 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__42959,G__42960) : f.call(null,G__42959,G__42960));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__42962 = a__$1._peek();
var G__42963 = x;
var G__42964 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__42962,G__42963,G__42964) : f.call(null,G__42962,G__42963,G__42964));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5737__auto__ = self__.reaction;
if((temp__5737__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
}):(function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
}));
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5737__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/RCursor");

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/RCursor");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/RCursor.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_RCursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$cursor(src,path){
if((function (){var or__4126__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IReactiveAtom,src));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))," while attempting to get path: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.with_let_destroy = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$with_let_destroy(v){
var temp__5739__auto__ = v.destroy;
if((temp__5739__auto__ == null)){
return null;
} else {
var f = temp__5739__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.with_let_values = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$with_let_values(key){
var temp__5737__auto__ = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5737__auto__ == null)){
return [];
} else {
var c = temp__5737__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IDisposable = function(){};

var day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_43298 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_43298(this$);
}
});

var day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_43309 = (function (this$,f){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4429__auto__.call(null,this$,f));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4426__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_on_dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_43309(this$,f);
}
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IRunnable = function(){};

var day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IRunnable$run$dyn_43313 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.run[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.run["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.run = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IRunnable$run$dyn_43313(this$);
}
});

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.handle_reaction_change = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.ISwap}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IRunnable}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__43015 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__43016 = null;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__43016);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__43015);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
(self__.watching = derefed);

var seq__43019_43323 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__43020_43324 = null;
var count__43021_43325 = (0);
var i__43022_43326 = (0);
while(true){
if((i__43022_43326 < count__43021_43325)){
var w_43327 = chunk__43020_43324.cljs$core$IIndexed$_nth$arity$2(null,i__43022_43326);
cljs.core._add_watch(w_43327,this$,day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.handle_reaction_change);


var G__43328 = seq__43019_43323;
var G__43329 = chunk__43020_43324;
var G__43330 = count__43021_43325;
var G__43331 = (i__43022_43326 + (1));
seq__43019_43323 = G__43328;
chunk__43020_43324 = G__43329;
count__43021_43325 = G__43330;
i__43022_43326 = G__43331;
continue;
} else {
var temp__5735__auto___43332 = cljs.core.seq(seq__43019_43323);
if(temp__5735__auto___43332){
var seq__43019_43333__$1 = temp__5735__auto___43332;
if(cljs.core.chunked_seq_QMARK_(seq__43019_43333__$1)){
var c__4556__auto___43335 = cljs.core.chunk_first(seq__43019_43333__$1);
var G__43336 = cljs.core.chunk_rest(seq__43019_43333__$1);
var G__43337 = c__4556__auto___43335;
var G__43338 = cljs.core.count(c__4556__auto___43335);
var G__43339 = (0);
seq__43019_43323 = G__43336;
chunk__43020_43324 = G__43337;
count__43021_43325 = G__43338;
i__43022_43326 = G__43339;
continue;
} else {
var w_43342 = cljs.core.first(seq__43019_43333__$1);
cljs.core._add_watch(w_43342,this$,day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.handle_reaction_change);


var G__43344 = cljs.core.next(seq__43019_43333__$1);
var G__43345 = null;
var G__43346 = (0);
var G__43347 = (0);
seq__43019_43323 = G__43344;
chunk__43020_43324 = G__43345;
count__43021_43325 = G__43346;
i__43022_43326 = G__43347;
continue;
}
} else {
}
}
break;
}

var seq__43027 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__43028 = null;
var count__43029 = (0);
var i__43030 = (0);
while(true){
if((i__43030 < count__43029)){
var w = chunk__43028.cljs$core$IIndexed$_nth$arity$2(null,i__43030);
cljs.core._remove_watch(w,this$);


var G__43350 = seq__43027;
var G__43351 = chunk__43028;
var G__43352 = count__43029;
var G__43353 = (i__43030 + (1));
seq__43027 = G__43350;
chunk__43028 = G__43351;
count__43029 = G__43352;
i__43030 = G__43353;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__43027);
if(temp__5735__auto__){
var seq__43027__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43027__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__43027__$1);
var G__43354 = cljs.core.chunk_rest(seq__43027__$1);
var G__43355 = c__4556__auto__;
var G__43356 = cljs.core.count(c__4556__auto__);
var G__43357 = (0);
seq__43027 = G__43354;
chunk__43028 = G__43355;
count__43029 = G__43356;
i__43030 = G__43357;
continue;
} else {
var w = cljs.core.first(seq__43027__$1);
cljs.core._remove_watch(w,this$);


var G__43358 = cljs.core.next(seq__43027__$1);
var G__43359 = null;
var G__43360 = (0);
var G__43361 = (0);
seq__43027 = G__43358;
chunk__43028 = G__43359;
count__43029 = G__43360;
i__43030 = G__43361;
continue;
}
} else {
return null;
}
}
break;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e43040){var e = e43040;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__43043){
var self__ = this;
var map__43044 = p__43043;
var map__43044__$1 = (((((!((map__43044 == null))))?(((((map__43044.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43044.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43044):map__43044);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43044__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43044__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43044__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43044__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__43046_43376 = cljs.core.seq(cljs.core.set(wg));
var chunk__43047_43377 = null;
var count__43048_43378 = (0);
var i__43049_43379 = (0);
while(true){
if((i__43049_43379 < count__43048_43378)){
var w_43380 = chunk__43047_43377.cljs$core$IIndexed$_nth$arity$2(null,i__43049_43379);
cljs.core._remove_watch(w_43380,this$__$1);


var G__43381 = seq__43046_43376;
var G__43382 = chunk__43047_43377;
var G__43383 = count__43048_43378;
var G__43384 = (i__43049_43379 + (1));
seq__43046_43376 = G__43381;
chunk__43047_43377 = G__43382;
count__43048_43378 = G__43383;
i__43049_43379 = G__43384;
continue;
} else {
var temp__5735__auto___43385 = cljs.core.seq(seq__43046_43376);
if(temp__5735__auto___43385){
var seq__43046_43386__$1 = temp__5735__auto___43385;
if(cljs.core.chunked_seq_QMARK_(seq__43046_43386__$1)){
var c__4556__auto___43387 = cljs.core.chunk_first(seq__43046_43386__$1);
var G__43388 = cljs.core.chunk_rest(seq__43046_43386__$1);
var G__43389 = c__4556__auto___43387;
var G__43390 = cljs.core.count(c__4556__auto___43387);
var G__43391 = (0);
seq__43046_43376 = G__43388;
chunk__43047_43377 = G__43389;
count__43048_43378 = G__43390;
i__43049_43379 = G__43391;
continue;
} else {
var w_43392 = cljs.core.first(seq__43046_43386__$1);
cljs.core._remove_watch(w_43392,this$__$1);


var G__43393 = cljs.core.next(seq__43046_43386__$1);
var G__43394 = null;
var G__43395 = (0);
var G__43396 = (0);
seq__43046_43376 = G__43393;
chunk__43047_43377 = G__43394;
count__43048_43378 = G__43395;
i__43049_43379 = G__43396;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5739__auto__ = this$__$1.on_dispose_arr;
if((temp__5739__auto__ == null)){
return null;
} else {
var a = temp__5739__auto__;
var n__4613__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4613__auto__)){
var fexpr__43053_43408 = (a[i]);
(fexpr__43053_43408.cljs$core$IFn$_invoke$arity$1 ? fexpr__43053_43408.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__43053_43408.call(null,this$__$1));

var G__43410 = (i + (1));
i = G__43410;
continue;
} else {
return null;
}
break;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5737__auto__ = this$__$1.on_dispose_arr;
if((temp__5737__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5737__auto__;
return a.push(f__$1);
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__43054 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__43054) : f__$1.call(null,G__43054));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__43058 = a__$1._peek_at();
var G__43059 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__43058,G__43059) : f__$1.call(null,G__43058,G__43059));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__43062 = a__$1._peek_at();
var G__43063 = x;
var G__43064 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__43062,G__43063,G__43064) : f__$1.call(null,G__43062,G__43063,G__43064));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();

return this$__$1._run(false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_w(this$__$1,key,f__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5739__auto___43419 = self__.caught;
if((temp__5739__auto___43419 == null)){
} else {
var e_43421 = temp__5739__auto___43419;
throw e_43421;
}

var non_reactive_43422 = (day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_43422){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_43422) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_43423 = self__.state;
(self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null)));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_43423,self__.state)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$__$1,oldstate_43423,self__.state);
}
} else {
}
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Reaction");

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Reaction");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Reaction.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_Reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$make_reaction(var_args){
var args__4742__auto__ = [];
var len__4736__auto___43438 = arguments.length;
var i__4737__auto___43439 = (0);
while(true){
if((i__4737__auto___43439 < len__4736__auto___43438)){
args__4742__auto__.push((arguments[i__4737__auto___43439]));

var G__43444 = (i__4737__auto___43439 + (1));
i__4737__auto___43439 = G__43444;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__43077){
var map__43078 = p__43077;
var map__43078__$1 = (((((!((map__43078 == null))))?(((((map__43078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43078):map__43078);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43078__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43078__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43078__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq43072){
var G__43073 = cljs.core.first(seq43072);
var seq43072__$1 = cljs.core.next(seq43072);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43073,seq43072__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction(null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.run_in_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.temp_reaction;
var res = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_reaction(null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
}));

goog.object.set(obj,key,r);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.check_derefs = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Wrapper");

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v0v10v0.reagent.ratom/Wrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_Wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.make_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.__GT_Wrapper(value,day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.js.map
