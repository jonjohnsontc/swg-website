goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__50927__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__50927 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50928__i = 0, G__50928__a = new Array(arguments.length -  0);
while (G__50928__i < G__50928__a.length) {G__50928__a[G__50928__i] = arguments[G__50928__i + 0]; ++G__50928__i;}
  args = new cljs.core.IndexedSeq(G__50928__a,0,null);
} 
return G__50927__delegate.call(this,args);};
G__50927.cljs$lang$maxFixedArity = 0;
G__50927.cljs$lang$applyTo = (function (arglist__50933){
var args = cljs.core.seq(arglist__50933);
return G__50927__delegate(args);
});
G__50927.cljs$core$IFn$_invoke$arity$variadic = G__50927__delegate;
return G__50927;
})()
);

(o.error = (function() { 
var G__50934__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__50934 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50936__i = 0, G__50936__a = new Array(arguments.length -  0);
while (G__50936__i < G__50936__a.length) {G__50936__a[G__50936__i] = arguments[G__50936__i + 0]; ++G__50936__i;}
  args = new cljs.core.IndexedSeq(G__50936__a,0,null);
} 
return G__50934__delegate.call(this,args);};
G__50934.cljs$lang$maxFixedArity = 0;
G__50934.cljs$lang$applyTo = (function (arglist__50937){
var args = cljs.core.seq(arglist__50937);
return G__50934__delegate(args);
});
G__50934.cljs$core$IFn$_invoke$arity$variadic = G__50934__delegate;
return G__50934;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
