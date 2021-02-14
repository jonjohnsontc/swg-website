goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___62556 = arguments.length;
var i__4737__auto___62557 = (0);
while(true){
if((i__4737__auto___62557 < len__4736__auto___62556)){
args__4742__auto__.push((arguments[i__4737__auto___62557]));

var G__62559 = (i__4737__auto___62557 + (1));
i__4737__auto___62557 = G__62559;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq62203){
var G__62204 = cljs.core.first(seq62203);
var seq62203__$1 = cljs.core.next(seq62203);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__62204,seq62203__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__62210 = cljs.core.seq(sources);
var chunk__62211 = null;
var count__62212 = (0);
var i__62213 = (0);
while(true){
if((i__62213 < count__62212)){
var map__62227 = chunk__62211.cljs$core$IIndexed$_nth$arity$2(null,i__62213);
var map__62227__$1 = (((((!((map__62227 == null))))?(((((map__62227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62227):map__62227);
var src = map__62227__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62227__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62230){var e_62571 = e62230;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62571);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62571.message)].join('')));
}

var G__62573 = seq__62210;
var G__62574 = chunk__62211;
var G__62575 = count__62212;
var G__62576 = (i__62213 + (1));
seq__62210 = G__62573;
chunk__62211 = G__62574;
count__62212 = G__62575;
i__62213 = G__62576;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62210);
if(temp__5735__auto__){
var seq__62210__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62210__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62210__$1);
var G__62577 = cljs.core.chunk_rest(seq__62210__$1);
var G__62578 = c__4556__auto__;
var G__62579 = cljs.core.count(c__4556__auto__);
var G__62580 = (0);
seq__62210 = G__62577;
chunk__62211 = G__62578;
count__62212 = G__62579;
i__62213 = G__62580;
continue;
} else {
var map__62231 = cljs.core.first(seq__62210__$1);
var map__62231__$1 = (((((!((map__62231 == null))))?(((((map__62231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62231):map__62231);
var src = map__62231__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62231__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e62233){var e_62584 = e62233;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_62584);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_62584.message)].join('')));
}

var G__62586 = cljs.core.next(seq__62210__$1);
var G__62587 = null;
var G__62588 = (0);
var G__62589 = (0);
seq__62210 = G__62586;
chunk__62211 = G__62587;
count__62212 = G__62588;
i__62213 = G__62589;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__62237 = cljs.core.seq(js_requires);
var chunk__62238 = null;
var count__62239 = (0);
var i__62240 = (0);
while(true){
if((i__62240 < count__62239)){
var js_ns = chunk__62238.cljs$core$IIndexed$_nth$arity$2(null,i__62240);
var require_str_62593 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62593);


var G__62594 = seq__62237;
var G__62595 = chunk__62238;
var G__62596 = count__62239;
var G__62597 = (i__62240 + (1));
seq__62237 = G__62594;
chunk__62238 = G__62595;
count__62239 = G__62596;
i__62240 = G__62597;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62237);
if(temp__5735__auto__){
var seq__62237__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62237__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62237__$1);
var G__62599 = cljs.core.chunk_rest(seq__62237__$1);
var G__62600 = c__4556__auto__;
var G__62601 = cljs.core.count(c__4556__auto__);
var G__62602 = (0);
seq__62237 = G__62599;
chunk__62238 = G__62600;
count__62239 = G__62601;
i__62240 = G__62602;
continue;
} else {
var js_ns = cljs.core.first(seq__62237__$1);
var require_str_62603 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_62603);


var G__62608 = cljs.core.next(seq__62237__$1);
var G__62609 = null;
var G__62610 = (0);
var G__62611 = (0);
seq__62237 = G__62608;
chunk__62238 = G__62609;
count__62239 = G__62610;
i__62240 = G__62611;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__62243){
var map__62244 = p__62243;
var map__62244__$1 = (((((!((map__62244 == null))))?(((((map__62244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62244):map__62244);
var msg = map__62244__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62244__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62244__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62246(s__62247){
return (new cljs.core.LazySeq(null,(function (){
var s__62247__$1 = s__62247;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__62247__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__62252 = cljs.core.first(xs__6292__auto__);
var map__62252__$1 = (((((!((map__62252 == null))))?(((((map__62252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62252):map__62252);
var src = map__62252__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62252__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62252__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__62247__$1,map__62252,map__62252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62244,map__62244__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62246_$_iter__62248(s__62249){
return (new cljs.core.LazySeq(null,((function (s__62247__$1,map__62252,map__62252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62244,map__62244__$1,msg,info,reload_info){
return (function (){
var s__62249__$1 = s__62249;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__62249__$1);
if(temp__5735__auto____$1){
var s__62249__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__62249__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__62249__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__62251 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__62250 = (0);
while(true){
if((i__62250 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__62250);
cljs.core.chunk_append(b__62251,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__62622 = (i__62250 + (1));
i__62250 = G__62622;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__62251),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62246_$_iter__62248(cljs.core.chunk_rest(s__62249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__62251),null);
}
} else {
var warning = cljs.core.first(s__62249__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62246_$_iter__62248(cljs.core.rest(s__62249__$2)));
}
} else {
return null;
}
break;
}
});})(s__62247__$1,map__62252,map__62252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62244,map__62244__$1,msg,info,reload_info))
,null,null));
});})(s__62247__$1,map__62252,map__62252__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__62244,map__62244__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__62246(cljs.core.rest(s__62247__$1)));
} else {
var G__62626 = cljs.core.rest(s__62247__$1);
s__62247__$1 = G__62626;
continue;
}
} else {
var G__62627 = cljs.core.rest(s__62247__$1);
s__62247__$1 = G__62627;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__62256_62628 = cljs.core.seq(warnings);
var chunk__62257_62629 = null;
var count__62258_62630 = (0);
var i__62259_62631 = (0);
while(true){
if((i__62259_62631 < count__62258_62630)){
var map__62278_62632 = chunk__62257_62629.cljs$core$IIndexed$_nth$arity$2(null,i__62259_62631);
var map__62278_62633__$1 = (((((!((map__62278_62632 == null))))?(((((map__62278_62632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62278_62632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62278_62632):map__62278_62632);
var w_62634 = map__62278_62633__$1;
var msg_62635__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62633__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62633__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62633__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62278_62633__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62638)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62636),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62637),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62635__$1)].join(''));


var G__62642 = seq__62256_62628;
var G__62643 = chunk__62257_62629;
var G__62644 = count__62258_62630;
var G__62645 = (i__62259_62631 + (1));
seq__62256_62628 = G__62642;
chunk__62257_62629 = G__62643;
count__62258_62630 = G__62644;
i__62259_62631 = G__62645;
continue;
} else {
var temp__5735__auto___62646 = cljs.core.seq(seq__62256_62628);
if(temp__5735__auto___62646){
var seq__62256_62647__$1 = temp__5735__auto___62646;
if(cljs.core.chunked_seq_QMARK_(seq__62256_62647__$1)){
var c__4556__auto___62648 = cljs.core.chunk_first(seq__62256_62647__$1);
var G__62653 = cljs.core.chunk_rest(seq__62256_62647__$1);
var G__62654 = c__4556__auto___62648;
var G__62655 = cljs.core.count(c__4556__auto___62648);
var G__62656 = (0);
seq__62256_62628 = G__62653;
chunk__62257_62629 = G__62654;
count__62258_62630 = G__62655;
i__62259_62631 = G__62656;
continue;
} else {
var map__62280_62657 = cljs.core.first(seq__62256_62647__$1);
var map__62280_62658__$1 = (((((!((map__62280_62657 == null))))?(((((map__62280_62657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62280_62657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62280_62657):map__62280_62657);
var w_62659 = map__62280_62658__$1;
var msg_62660__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62280_62658__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_62661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62280_62658__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_62662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62280_62658__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_62663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62280_62658__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_62663)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_62661),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_62662),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_62660__$1)].join(''));


var G__62664 = cljs.core.next(seq__62256_62647__$1);
var G__62665 = null;
var G__62666 = (0);
var G__62667 = (0);
seq__62256_62628 = G__62664;
chunk__62257_62629 = G__62665;
count__62258_62630 = G__62666;
i__62259_62631 = G__62667;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__62242_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__62242_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__62303){
var map__62305 = p__62303;
var map__62305__$1 = (((((!((map__62305 == null))))?(((((map__62305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62305):map__62305);
var msg = map__62305__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62305__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__62307 = cljs.core.seq(updates);
var chunk__62309 = null;
var count__62310 = (0);
var i__62311 = (0);
while(true){
if((i__62311 < count__62310)){
var path = chunk__62309.cljs$core$IIndexed$_nth$arity$2(null,i__62311);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62425_62676 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62429_62677 = null;
var count__62430_62678 = (0);
var i__62431_62679 = (0);
while(true){
if((i__62431_62679 < count__62430_62678)){
var node_62680 = chunk__62429_62677.cljs$core$IIndexed$_nth$arity$2(null,i__62431_62679);
if(cljs.core.not(node_62680.shadow$old)){
var path_match_62681 = shadow.cljs.devtools.client.browser.match_paths(node_62680.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62681)){
var new_link_62682 = (function (){var G__62447 = node_62680.cloneNode(true);
G__62447.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62681),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62447;
})();
(node_62680.shadow$old = true);

(new_link_62682.onload = ((function (seq__62425_62676,chunk__62429_62677,count__62430_62678,i__62431_62679,seq__62307,chunk__62309,count__62310,i__62311,new_link_62682,path_match_62681,node_62680,path,map__62305,map__62305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62680);
});})(seq__62425_62676,chunk__62429_62677,count__62430_62678,i__62431_62679,seq__62307,chunk__62309,count__62310,i__62311,new_link_62682,path_match_62681,node_62680,path,map__62305,map__62305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62681], 0));

goog.dom.insertSiblingAfter(new_link_62682,node_62680);


var G__62686 = seq__62425_62676;
var G__62687 = chunk__62429_62677;
var G__62688 = count__62430_62678;
var G__62689 = (i__62431_62679 + (1));
seq__62425_62676 = G__62686;
chunk__62429_62677 = G__62687;
count__62430_62678 = G__62688;
i__62431_62679 = G__62689;
continue;
} else {
var G__62691 = seq__62425_62676;
var G__62692 = chunk__62429_62677;
var G__62693 = count__62430_62678;
var G__62694 = (i__62431_62679 + (1));
seq__62425_62676 = G__62691;
chunk__62429_62677 = G__62692;
count__62430_62678 = G__62693;
i__62431_62679 = G__62694;
continue;
}
} else {
var G__62695 = seq__62425_62676;
var G__62696 = chunk__62429_62677;
var G__62697 = count__62430_62678;
var G__62698 = (i__62431_62679 + (1));
seq__62425_62676 = G__62695;
chunk__62429_62677 = G__62696;
count__62430_62678 = G__62697;
i__62431_62679 = G__62698;
continue;
}
} else {
var temp__5735__auto___62699 = cljs.core.seq(seq__62425_62676);
if(temp__5735__auto___62699){
var seq__62425_62700__$1 = temp__5735__auto___62699;
if(cljs.core.chunked_seq_QMARK_(seq__62425_62700__$1)){
var c__4556__auto___62701 = cljs.core.chunk_first(seq__62425_62700__$1);
var G__62702 = cljs.core.chunk_rest(seq__62425_62700__$1);
var G__62703 = c__4556__auto___62701;
var G__62704 = cljs.core.count(c__4556__auto___62701);
var G__62705 = (0);
seq__62425_62676 = G__62702;
chunk__62429_62677 = G__62703;
count__62430_62678 = G__62704;
i__62431_62679 = G__62705;
continue;
} else {
var node_62706 = cljs.core.first(seq__62425_62700__$1);
if(cljs.core.not(node_62706.shadow$old)){
var path_match_62707 = shadow.cljs.devtools.client.browser.match_paths(node_62706.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62707)){
var new_link_62708 = (function (){var G__62455 = node_62706.cloneNode(true);
G__62455.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62707),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62455;
})();
(node_62706.shadow$old = true);

(new_link_62708.onload = ((function (seq__62425_62676,chunk__62429_62677,count__62430_62678,i__62431_62679,seq__62307,chunk__62309,count__62310,i__62311,new_link_62708,path_match_62707,node_62706,seq__62425_62700__$1,temp__5735__auto___62699,path,map__62305,map__62305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62706);
});})(seq__62425_62676,chunk__62429_62677,count__62430_62678,i__62431_62679,seq__62307,chunk__62309,count__62310,i__62311,new_link_62708,path_match_62707,node_62706,seq__62425_62700__$1,temp__5735__auto___62699,path,map__62305,map__62305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62707], 0));

goog.dom.insertSiblingAfter(new_link_62708,node_62706);


var G__62709 = cljs.core.next(seq__62425_62700__$1);
var G__62710 = null;
var G__62711 = (0);
var G__62712 = (0);
seq__62425_62676 = G__62709;
chunk__62429_62677 = G__62710;
count__62430_62678 = G__62711;
i__62431_62679 = G__62712;
continue;
} else {
var G__62713 = cljs.core.next(seq__62425_62700__$1);
var G__62714 = null;
var G__62715 = (0);
var G__62716 = (0);
seq__62425_62676 = G__62713;
chunk__62429_62677 = G__62714;
count__62430_62678 = G__62715;
i__62431_62679 = G__62716;
continue;
}
} else {
var G__62717 = cljs.core.next(seq__62425_62700__$1);
var G__62718 = null;
var G__62719 = (0);
var G__62720 = (0);
seq__62425_62676 = G__62717;
chunk__62429_62677 = G__62718;
count__62430_62678 = G__62719;
i__62431_62679 = G__62720;
continue;
}
}
} else {
}
}
break;
}


var G__62721 = seq__62307;
var G__62722 = chunk__62309;
var G__62723 = count__62310;
var G__62724 = (i__62311 + (1));
seq__62307 = G__62721;
chunk__62309 = G__62722;
count__62310 = G__62723;
i__62311 = G__62724;
continue;
} else {
var G__62725 = seq__62307;
var G__62726 = chunk__62309;
var G__62727 = count__62310;
var G__62728 = (i__62311 + (1));
seq__62307 = G__62725;
chunk__62309 = G__62726;
count__62310 = G__62727;
i__62311 = G__62728;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__62307);
if(temp__5735__auto__){
var seq__62307__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__62307__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__62307__$1);
var G__62729 = cljs.core.chunk_rest(seq__62307__$1);
var G__62730 = c__4556__auto__;
var G__62731 = cljs.core.count(c__4556__auto__);
var G__62732 = (0);
seq__62307 = G__62729;
chunk__62309 = G__62730;
count__62310 = G__62731;
i__62311 = G__62732;
continue;
} else {
var path = cljs.core.first(seq__62307__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__62456_62733 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__62460_62734 = null;
var count__62461_62735 = (0);
var i__62462_62736 = (0);
while(true){
if((i__62462_62736 < count__62461_62735)){
var node_62738 = chunk__62460_62734.cljs$core$IIndexed$_nth$arity$2(null,i__62462_62736);
if(cljs.core.not(node_62738.shadow$old)){
var path_match_62739 = shadow.cljs.devtools.client.browser.match_paths(node_62738.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62739)){
var new_link_62740 = (function (){var G__62476 = node_62738.cloneNode(true);
G__62476.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62739),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62476;
})();
(node_62738.shadow$old = true);

(new_link_62740.onload = ((function (seq__62456_62733,chunk__62460_62734,count__62461_62735,i__62462_62736,seq__62307,chunk__62309,count__62310,i__62311,new_link_62740,path_match_62739,node_62738,path,seq__62307__$1,temp__5735__auto__,map__62305,map__62305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62738);
});})(seq__62456_62733,chunk__62460_62734,count__62461_62735,i__62462_62736,seq__62307,chunk__62309,count__62310,i__62311,new_link_62740,path_match_62739,node_62738,path,seq__62307__$1,temp__5735__auto__,map__62305,map__62305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62739], 0));

goog.dom.insertSiblingAfter(new_link_62740,node_62738);


var G__62741 = seq__62456_62733;
var G__62742 = chunk__62460_62734;
var G__62743 = count__62461_62735;
var G__62744 = (i__62462_62736 + (1));
seq__62456_62733 = G__62741;
chunk__62460_62734 = G__62742;
count__62461_62735 = G__62743;
i__62462_62736 = G__62744;
continue;
} else {
var G__62745 = seq__62456_62733;
var G__62746 = chunk__62460_62734;
var G__62747 = count__62461_62735;
var G__62748 = (i__62462_62736 + (1));
seq__62456_62733 = G__62745;
chunk__62460_62734 = G__62746;
count__62461_62735 = G__62747;
i__62462_62736 = G__62748;
continue;
}
} else {
var G__62749 = seq__62456_62733;
var G__62750 = chunk__62460_62734;
var G__62751 = count__62461_62735;
var G__62752 = (i__62462_62736 + (1));
seq__62456_62733 = G__62749;
chunk__62460_62734 = G__62750;
count__62461_62735 = G__62751;
i__62462_62736 = G__62752;
continue;
}
} else {
var temp__5735__auto___62753__$1 = cljs.core.seq(seq__62456_62733);
if(temp__5735__auto___62753__$1){
var seq__62456_62755__$1 = temp__5735__auto___62753__$1;
if(cljs.core.chunked_seq_QMARK_(seq__62456_62755__$1)){
var c__4556__auto___62756 = cljs.core.chunk_first(seq__62456_62755__$1);
var G__62757 = cljs.core.chunk_rest(seq__62456_62755__$1);
var G__62758 = c__4556__auto___62756;
var G__62759 = cljs.core.count(c__4556__auto___62756);
var G__62760 = (0);
seq__62456_62733 = G__62757;
chunk__62460_62734 = G__62758;
count__62461_62735 = G__62759;
i__62462_62736 = G__62760;
continue;
} else {
var node_62762 = cljs.core.first(seq__62456_62755__$1);
if(cljs.core.not(node_62762.shadow$old)){
var path_match_62763 = shadow.cljs.devtools.client.browser.match_paths(node_62762.getAttribute("href"),path);
if(cljs.core.truth_(path_match_62763)){
var new_link_62764 = (function (){var G__62485 = node_62762.cloneNode(true);
G__62485.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_62763),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__62485;
})();
(node_62762.shadow$old = true);

(new_link_62764.onload = ((function (seq__62456_62733,chunk__62460_62734,count__62461_62735,i__62462_62736,seq__62307,chunk__62309,count__62310,i__62311,new_link_62764,path_match_62763,node_62762,seq__62456_62755__$1,temp__5735__auto___62753__$1,path,seq__62307__$1,temp__5735__auto__,map__62305,map__62305__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_62762);
});})(seq__62456_62733,chunk__62460_62734,count__62461_62735,i__62462_62736,seq__62307,chunk__62309,count__62310,i__62311,new_link_62764,path_match_62763,node_62762,seq__62456_62755__$1,temp__5735__auto___62753__$1,path,seq__62307__$1,temp__5735__auto__,map__62305,map__62305__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_62763], 0));

goog.dom.insertSiblingAfter(new_link_62764,node_62762);


var G__62765 = cljs.core.next(seq__62456_62755__$1);
var G__62766 = null;
var G__62767 = (0);
var G__62768 = (0);
seq__62456_62733 = G__62765;
chunk__62460_62734 = G__62766;
count__62461_62735 = G__62767;
i__62462_62736 = G__62768;
continue;
} else {
var G__62771 = cljs.core.next(seq__62456_62755__$1);
var G__62772 = null;
var G__62773 = (0);
var G__62774 = (0);
seq__62456_62733 = G__62771;
chunk__62460_62734 = G__62772;
count__62461_62735 = G__62773;
i__62462_62736 = G__62774;
continue;
}
} else {
var G__62775 = cljs.core.next(seq__62456_62755__$1);
var G__62776 = null;
var G__62777 = (0);
var G__62778 = (0);
seq__62456_62733 = G__62775;
chunk__62460_62734 = G__62776;
count__62461_62735 = G__62777;
i__62462_62736 = G__62778;
continue;
}
}
} else {
}
}
break;
}


var G__62780 = cljs.core.next(seq__62307__$1);
var G__62781 = null;
var G__62782 = (0);
var G__62783 = (0);
seq__62307 = G__62780;
chunk__62309 = G__62781;
count__62310 = G__62782;
i__62311 = G__62783;
continue;
} else {
var G__62784 = cljs.core.next(seq__62307__$1);
var G__62785 = null;
var G__62786 = (0);
var G__62787 = (0);
seq__62307 = G__62784;
chunk__62309 = G__62785;
count__62310 = G__62786;
i__62311 = G__62787;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__62493){
var map__62495 = p__62493;
var map__62495__$1 = (((((!((map__62495 == null))))?(((((map__62495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62495):map__62495);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62495__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__62503){
var map__62504 = p__62503;
var map__62504__$1 = (((((!((map__62504 == null))))?(((((map__62504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62504):map__62504);
var _ = map__62504__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62504__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__62508,done,error){
var map__62509 = p__62508;
var map__62509__$1 = (((((!((map__62509 == null))))?(((((map__62509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62509):map__62509);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62509__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__62513,done,error){
var map__62514 = p__62513;
var map__62514__$1 = (((((!((map__62514 == null))))?(((((map__62514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62514):map__62514);
var msg = map__62514__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62514__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62514__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62514__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__62521){
var map__62522 = p__62521;
var map__62522__$1 = (((((!((map__62522 == null))))?(((((map__62522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62522):map__62522);
var src = map__62522__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62522__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__62524 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__62524) : done.call(null,G__62524));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__62525){
var map__62526 = p__62525;
var map__62526__$1 = (((((!((map__62526 == null))))?(((((map__62526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62526):map__62526);
var msg__$1 = map__62526__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62526__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e62528){var ex = e62528;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__62529){
var map__62530 = p__62529;
var map__62530__$1 = (((((!((map__62530 == null))))?(((((map__62530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62530):map__62530);
var env = map__62530__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62530__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__62532){
var map__62533 = p__62532;
var map__62533__$1 = (((((!((map__62533 == null))))?(((((map__62533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62533):map__62533);
var msg = map__62533__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62533__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__62539){
var map__62540 = p__62539;
var map__62540__$1 = (((((!((map__62540 == null))))?(((((map__62540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62540):map__62540);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62540__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62540__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__62546){
var map__62547 = p__62546;
var map__62547__$1 = (((((!((map__62547 == null))))?(((((map__62547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__62547):map__62547);
var svc = map__62547__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62547__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
