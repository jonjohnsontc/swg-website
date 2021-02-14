goog.provide('swg_website.core');
/**
 * Return relative url for given route. Url can be used in HTML links.
 */
swg_website.core.href = (function swg_website$core$href(var_args){
var G__60898 = arguments.length;
switch (G__60898) {
case 1:
return swg_website.core.href.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return swg_website.core.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return swg_website.core.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(swg_website.core.href.cljs$core$IFn$_invoke$arity$1 = (function (k){
return swg_website.core.href.cljs$core$IFn$_invoke$arity$3(k,null,null);
}));

(swg_website.core.href.cljs$core$IFn$_invoke$arity$2 = (function (k,params){
return swg_website.core.href.cljs$core$IFn$_invoke$arity$3(k,params,null);
}));

(swg_website.core.href.cljs$core$IFn$_invoke$arity$3 = (function (k,params,query){
return reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$3(k,params,query);
}));

(swg_website.core.href.cljs$lang$maxFixedArity = 3);

swg_website.core.routes = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("routes","home","routes/home",-1297486007),new cljs.core.Keyword(null,"view","view",1247994814),swg_website.views.home,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__60900__delegate = function (params){
return console.log("Entering home page");
};
var G__60900 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__60901__i = 0, G__60901__a = new Array(arguments.length -  0);
while (G__60901__i < G__60901__a.length) {G__60901__a[G__60901__i] = arguments[G__60901__i + 0]; ++G__60901__i;}
  params = new cljs.core.IndexedSeq(G__60901__a,0,null);
} 
return G__60900__delegate.call(this,params);};
G__60900.cljs$lang$maxFixedArity = 0;
G__60900.cljs$lang$applyTo = (function (arglist__60902){
var params = cljs.core.seq(arglist__60902);
return G__60900__delegate(params);
});
G__60900.cljs$core$IFn$_invoke$arity$variadic = G__60900__delegate;
return G__60900;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__60903__delegate = function (params){
return console.log("Leaving home page");
};
var G__60903 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__60904__i = 0, G__60904__a = new Array(arguments.length -  0);
while (G__60904__i < G__60904__a.length) {G__60904__a[G__60904__i] = arguments[G__60904__i + 0]; ++G__60904__i;}
  params = new cljs.core.IndexedSeq(G__60904__a,0,null);
} 
return G__60903__delegate.call(this,params);};
G__60903.cljs$lang$maxFixedArity = 0;
G__60903.cljs$lang$applyTo = (function (arglist__60905){
var params = cljs.core.seq(arglist__60905);
return G__60903__delegate(params);
});
G__60903.cljs$core$IFn$_invoke$arity$variadic = G__60903__delegate;
return G__60903;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search/q=:term",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("routes","search","routes/search",308997852),new cljs.core.Keyword(null,"view","view",1247994814),swg_website.views.results_panel,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Search",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","get-writers","swg-website.events/get-writers",-666004154),new cljs.core.Keyword(null,"term","term",-1817390416)], null));
}),new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__60906__delegate = function (params){
return console.log("Leaving search");
};
var G__60906 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__60907__i = 0, G__60907__a = new Array(arguments.length -  0);
while (G__60907__i < G__60907__a.length) {G__60907__a[G__60907__i] = arguments[G__60907__i + 0]; ++G__60907__i;}
  params = new cljs.core.IndexedSeq(G__60907__a,0,null);
} 
return G__60906__delegate.call(this,params);};
G__60906.cljs$lang$maxFixedArity = 0;
G__60906.cljs$lang$applyTo = (function (arglist__60908){
var params = cljs.core.seq(arglist__60908);
return G__60906__delegate(params);
});
G__60906.cljs$core$IFn$_invoke$arity$variadic = G__60906__delegate;
return G__60906;
})()
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["writer/:wid",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("routes","writer","routes/writer",71904602),new cljs.core.Keyword(null,"view","view",1247994814),swg_website.views.writer_panel,new cljs.core.Keyword(null,"link-text","link-text",224432076),"Writer",new cljs.core.Keyword(null,"controllers","controllers",-1120410624),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(function() { 
var G__60909__delegate = function (params){
return console.log("Entering writer page");
};
var G__60909 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__60910__i = 0, G__60910__a = new Array(arguments.length -  0);
while (G__60910__i < G__60910__a.length) {G__60910__a[G__60910__i] = arguments[G__60910__i + 0]; ++G__60910__i;}
  params = new cljs.core.IndexedSeq(G__60910__a,0,null);
} 
return G__60909__delegate.call(this,params);};
G__60909.cljs$lang$maxFixedArity = 0;
G__60909.cljs$lang$applyTo = (function (arglist__60911){
var params = cljs.core.seq(arglist__60911);
return G__60909__delegate(params);
});
G__60909.cljs$core$IFn$_invoke$arity$variadic = G__60909__delegate;
return G__60909;
})()
,new cljs.core.Keyword(null,"stop","stop",-2140911342),(function() { 
var G__60912__delegate = function (params){
return console.log("Leaving writer page");
};
var G__60912 = function (var_args){
var params = null;
if (arguments.length > 0) {
var G__60913__i = 0, G__60913__a = new Array(arguments.length -  0);
while (G__60913__i < G__60913__a.length) {G__60913__a[G__60913__i] = arguments[G__60913__i + 0]; ++G__60913__i;}
  params = new cljs.core.IndexedSeq(G__60913__a,0,null);
} 
return G__60912__delegate.call(this,params);};
G__60912.cljs$lang$maxFixedArity = 0;
G__60912.cljs$lang$applyTo = (function (arglist__60914){
var params = cljs.core.seq(arglist__60914);
return G__60912__delegate(params);
});
G__60912.cljs$core$IFn$_invoke$arity$variadic = G__60912__delegate;
return G__60912;
})()
], null)], null)], null)], null)], null);
swg_website.core.on_navigate = (function swg_website$core$on_navigate(new_match){
if(cljs.core.truth_(new_match)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","navigated","swg-website.events/navigated",2011491426),new_match], null));
} else {
return null;
}
});
swg_website.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$2(swg_website.core.routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coercion","coercion",904067157),reitit.coercion.spec.coercion], null)], null));
swg_website.core.init_routes_BANG_ = (function swg_website$core$init_routes_BANG_(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","init-router","swg-website.events/init-router",1498748527),swg_website.core.router], null));

return reitit.frontend.easy.start_BANG_(swg_website.core.router,swg_website.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));
});
swg_website.core.nav = (function swg_website$core$nav(){
var active_route = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.subs","active-route","swg-website.subs/active-route",-1549830561)], null)));
if(cljs.core.truth_(active_route)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(active_route))], null);
} else {
return null;
}
});
swg_website.core.dev_setup = (function swg_website$core$dev_setup(){
if(swg_website.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
swg_website.core.mount_root = (function swg_website$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swg_website.core.nav,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"router","router",1091916230),swg_website.core.router], null)], null),root_el);
});
swg_website.core.init = (function swg_website$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("swg-website.events","initialize-db","swg-website.events/initialize-db",-195213834)], null));

swg_website.core.dev_setup();

swg_website.core.init_routes_BANG_();

return swg_website.core.mount_root();
});

//# sourceMappingURL=swg_website.core.js.map
