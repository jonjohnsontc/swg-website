goog.provide('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__52795 = arguments.length;
switch (G__52795) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__52800 = cljs.core.seq(Object.keys(localStorage));
var chunk__52801 = null;
var count__52802 = (0);
var i__52803 = (0);
while(true){
if((i__52803 < count__52802)){
var k = chunk__52801.cljs$core$IIndexed$_nth$arity$2(null,i__52803);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52821 = seq__52800;
var G__52822 = chunk__52801;
var G__52823 = count__52802;
var G__52824 = (i__52803 + (1));
seq__52800 = G__52821;
chunk__52801 = G__52822;
count__52802 = G__52823;
i__52803 = G__52824;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52800);
if(temp__5735__auto__){
var seq__52800__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52800__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52800__$1);
var G__52835 = cljs.core.chunk_rest(seq__52800__$1);
var G__52836 = c__4556__auto__;
var G__52837 = cljs.core.count(c__4556__auto__);
var G__52838 = (0);
seq__52800 = G__52835;
chunk__52801 = G__52836;
count__52802 = G__52837;
i__52803 = G__52838;
continue;
} else {
var k = cljs.core.first(seq__52800__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__52839 = cljs.core.next(seq__52800__$1);
var G__52840 = null;
var G__52841 = (0);
var G__52842 = (0);
seq__52800 = G__52839;
chunk__52801 = G__52840;
count__52802 = G__52841;
i__52803 = G__52842;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
