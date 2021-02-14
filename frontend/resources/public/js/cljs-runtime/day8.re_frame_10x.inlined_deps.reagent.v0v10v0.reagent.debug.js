goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42530__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42530 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42531__i = 0, G__42531__a = new Array(arguments.length -  0);
while (G__42531__i < G__42531__a.length) {G__42531__a[G__42531__i] = arguments[G__42531__i + 0]; ++G__42531__i;}
  args = new cljs.core.IndexedSeq(G__42531__a,0,null);
} 
return G__42530__delegate.call(this,args);};
G__42530.cljs$lang$maxFixedArity = 0;
G__42530.cljs$lang$applyTo = (function (arglist__42532){
var args = cljs.core.seq(arglist__42532);
return G__42530__delegate(args);
});
G__42530.cljs$core$IFn$_invoke$arity$variadic = G__42530__delegate;
return G__42530;
})()
);

(o.error = (function() { 
var G__42534__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42534 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42535__i = 0, G__42535__a = new Array(arguments.length -  0);
while (G__42535__i < G__42535__a.length) {G__42535__a[G__42535__i] = arguments[G__42535__i + 0]; ++G__42535__i;}
  args = new cljs.core.IndexedSeq(G__42535__a,0,null);
} 
return G__42534__delegate.call(this,args);};
G__42534.cljs$lang$maxFixedArity = 0;
G__42534.cljs$lang$applyTo = (function (arglist__42536){
var args = cljs.core.seq(arglist__42536);
return G__42534__delegate(args);
});
G__42534.cljs$core$IFn$_invoke$arity$variadic = G__42534__delegate;
return G__42534;
})()
);

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$debug$track_warnings(f){
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = true);

cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings);
cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.warnings,null);

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.debug.js.map
