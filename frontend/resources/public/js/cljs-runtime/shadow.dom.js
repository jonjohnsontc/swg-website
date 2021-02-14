goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_60231 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_60231(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_60235 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_60235(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__59441 = coll;
var G__59442 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__59441,G__59442) : shadow.dom.lazy_native_coll_seq.call(null,G__59441,G__59442));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__59468 = arguments.length;
switch (G__59468) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__59477 = arguments.length;
switch (G__59477) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__59481 = arguments.length;
switch (G__59481) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__59489 = arguments.length;
switch (G__59489) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__59501 = arguments.length;
switch (G__59501) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__59510 = arguments.length;
switch (G__59510) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e59521){if((e59521 instanceof Object)){
var e = e59521;
return console.log("didnt support attachEvent",el,e);
} else {
throw e59521;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__59530 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__59531 = null;
var count__59532 = (0);
var i__59533 = (0);
while(true){
if((i__59533 < count__59532)){
var el = chunk__59531.cljs$core$IIndexed$_nth$arity$2(null,i__59533);
var handler_60274__$1 = ((function (seq__59530,chunk__59531,count__59532,i__59533,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59530,chunk__59531,count__59532,i__59533,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60274__$1);


var G__60277 = seq__59530;
var G__60278 = chunk__59531;
var G__60279 = count__59532;
var G__60280 = (i__59533 + (1));
seq__59530 = G__60277;
chunk__59531 = G__60278;
count__59532 = G__60279;
i__59533 = G__60280;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59530);
if(temp__5735__auto__){
var seq__59530__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59530__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59530__$1);
var G__60282 = cljs.core.chunk_rest(seq__59530__$1);
var G__60283 = c__4556__auto__;
var G__60284 = cljs.core.count(c__4556__auto__);
var G__60285 = (0);
seq__59530 = G__60282;
chunk__59531 = G__60283;
count__59532 = G__60284;
i__59533 = G__60285;
continue;
} else {
var el = cljs.core.first(seq__59530__$1);
var handler_60287__$1 = ((function (seq__59530,chunk__59531,count__59532,i__59533,el,seq__59530__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__59530,chunk__59531,count__59532,i__59533,el,seq__59530__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_60287__$1);


var G__60289 = cljs.core.next(seq__59530__$1);
var G__60290 = null;
var G__60291 = (0);
var G__60292 = (0);
seq__59530 = G__60289;
chunk__59531 = G__60290;
count__59532 = G__60291;
i__59533 = G__60292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__59550 = arguments.length;
switch (G__59550) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__59568 = cljs.core.seq(events);
var chunk__59569 = null;
var count__59570 = (0);
var i__59571 = (0);
while(true){
if((i__59571 < count__59570)){
var vec__59589 = chunk__59569.cljs$core$IIndexed$_nth$arity$2(null,i__59571);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59589,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60309 = seq__59568;
var G__60310 = chunk__59569;
var G__60311 = count__59570;
var G__60312 = (i__59571 + (1));
seq__59568 = G__60309;
chunk__59569 = G__60310;
count__59570 = G__60311;
i__59571 = G__60312;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59568);
if(temp__5735__auto__){
var seq__59568__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59568__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59568__$1);
var G__60314 = cljs.core.chunk_rest(seq__59568__$1);
var G__60315 = c__4556__auto__;
var G__60316 = cljs.core.count(c__4556__auto__);
var G__60317 = (0);
seq__59568 = G__60314;
chunk__59569 = G__60315;
count__59570 = G__60316;
i__59571 = G__60317;
continue;
} else {
var vec__59596 = cljs.core.first(seq__59568__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59596,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__60320 = cljs.core.next(seq__59568__$1);
var G__60321 = null;
var G__60322 = (0);
var G__60323 = (0);
seq__59568 = G__60320;
chunk__59569 = G__60321;
count__59570 = G__60322;
i__59571 = G__60323;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__59603 = cljs.core.seq(styles);
var chunk__59604 = null;
var count__59605 = (0);
var i__59606 = (0);
while(true){
if((i__59606 < count__59605)){
var vec__59618 = chunk__59604.cljs$core$IIndexed$_nth$arity$2(null,i__59606);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59618,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59618,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60325 = seq__59603;
var G__60326 = chunk__59604;
var G__60327 = count__59605;
var G__60328 = (i__59606 + (1));
seq__59603 = G__60325;
chunk__59604 = G__60326;
count__59605 = G__60327;
i__59606 = G__60328;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59603);
if(temp__5735__auto__){
var seq__59603__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59603__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59603__$1);
var G__60329 = cljs.core.chunk_rest(seq__59603__$1);
var G__60330 = c__4556__auto__;
var G__60331 = cljs.core.count(c__4556__auto__);
var G__60332 = (0);
seq__59603 = G__60329;
chunk__59604 = G__60330;
count__59605 = G__60331;
i__59606 = G__60332;
continue;
} else {
var vec__59626 = cljs.core.first(seq__59603__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59626,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59626,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__60336 = cljs.core.next(seq__59603__$1);
var G__60337 = null;
var G__60338 = (0);
var G__60339 = (0);
seq__59603 = G__60336;
chunk__59604 = G__60337;
count__59605 = G__60338;
i__59606 = G__60339;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__59634_60342 = key;
var G__59634_60343__$1 = (((G__59634_60342 instanceof cljs.core.Keyword))?G__59634_60342.fqn:null);
switch (G__59634_60343__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_60351 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_60351,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_60351,"aria-");
}
})())){
el.setAttribute(ks_60351,value);
} else {
(el[ks_60351] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__59661){
var map__59662 = p__59661;
var map__59662__$1 = (((((!((map__59662 == null))))?(((((map__59662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__59662):map__59662);
var props = map__59662__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59662__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__59666 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59666,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__59674 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__59674,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__59674;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__59677 = arguments.length;
switch (G__59677) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__59683){
var vec__59685 = p__59683;
var seq__59686 = cljs.core.seq(vec__59685);
var first__59687 = cljs.core.first(seq__59686);
var seq__59686__$1 = cljs.core.next(seq__59686);
var nn = first__59687;
var first__59687__$1 = cljs.core.first(seq__59686__$1);
var seq__59686__$2 = cljs.core.next(seq__59686__$1);
var np = first__59687__$1;
var nc = seq__59686__$2;
var node = vec__59685;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59690 = nn;
var G__59691 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59690,G__59691) : create_fn.call(null,G__59690,G__59691));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__59693 = nn;
var G__59694 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__59693,G__59694) : create_fn.call(null,G__59693,G__59694));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__59696 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59696,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59696,(1),null);
var seq__59699_60394 = cljs.core.seq(node_children);
var chunk__59700_60395 = null;
var count__59701_60396 = (0);
var i__59702_60397 = (0);
while(true){
if((i__59702_60397 < count__59701_60396)){
var child_struct_60400 = chunk__59700_60395.cljs$core$IIndexed$_nth$arity$2(null,i__59702_60397);
var children_60401 = shadow.dom.dom_node(child_struct_60400);
if(cljs.core.seq_QMARK_(children_60401)){
var seq__59744_60402 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60401));
var chunk__59746_60403 = null;
var count__59747_60404 = (0);
var i__59748_60405 = (0);
while(true){
if((i__59748_60405 < count__59747_60404)){
var child_60407 = chunk__59746_60403.cljs$core$IIndexed$_nth$arity$2(null,i__59748_60405);
if(cljs.core.truth_(child_60407)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60407);


var G__60409 = seq__59744_60402;
var G__60410 = chunk__59746_60403;
var G__60411 = count__59747_60404;
var G__60412 = (i__59748_60405 + (1));
seq__59744_60402 = G__60409;
chunk__59746_60403 = G__60410;
count__59747_60404 = G__60411;
i__59748_60405 = G__60412;
continue;
} else {
var G__60413 = seq__59744_60402;
var G__60414 = chunk__59746_60403;
var G__60415 = count__59747_60404;
var G__60416 = (i__59748_60405 + (1));
seq__59744_60402 = G__60413;
chunk__59746_60403 = G__60414;
count__59747_60404 = G__60415;
i__59748_60405 = G__60416;
continue;
}
} else {
var temp__5735__auto___60418 = cljs.core.seq(seq__59744_60402);
if(temp__5735__auto___60418){
var seq__59744_60419__$1 = temp__5735__auto___60418;
if(cljs.core.chunked_seq_QMARK_(seq__59744_60419__$1)){
var c__4556__auto___60422 = cljs.core.chunk_first(seq__59744_60419__$1);
var G__60423 = cljs.core.chunk_rest(seq__59744_60419__$1);
var G__60424 = c__4556__auto___60422;
var G__60425 = cljs.core.count(c__4556__auto___60422);
var G__60426 = (0);
seq__59744_60402 = G__60423;
chunk__59746_60403 = G__60424;
count__59747_60404 = G__60425;
i__59748_60405 = G__60426;
continue;
} else {
var child_60427 = cljs.core.first(seq__59744_60419__$1);
if(cljs.core.truth_(child_60427)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60427);


var G__60429 = cljs.core.next(seq__59744_60419__$1);
var G__60430 = null;
var G__60431 = (0);
var G__60432 = (0);
seq__59744_60402 = G__60429;
chunk__59746_60403 = G__60430;
count__59747_60404 = G__60431;
i__59748_60405 = G__60432;
continue;
} else {
var G__60435 = cljs.core.next(seq__59744_60419__$1);
var G__60436 = null;
var G__60437 = (0);
var G__60438 = (0);
seq__59744_60402 = G__60435;
chunk__59746_60403 = G__60436;
count__59747_60404 = G__60437;
i__59748_60405 = G__60438;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60401);
}


var G__60439 = seq__59699_60394;
var G__60440 = chunk__59700_60395;
var G__60441 = count__59701_60396;
var G__60442 = (i__59702_60397 + (1));
seq__59699_60394 = G__60439;
chunk__59700_60395 = G__60440;
count__59701_60396 = G__60441;
i__59702_60397 = G__60442;
continue;
} else {
var temp__5735__auto___60443 = cljs.core.seq(seq__59699_60394);
if(temp__5735__auto___60443){
var seq__59699_60444__$1 = temp__5735__auto___60443;
if(cljs.core.chunked_seq_QMARK_(seq__59699_60444__$1)){
var c__4556__auto___60445 = cljs.core.chunk_first(seq__59699_60444__$1);
var G__60446 = cljs.core.chunk_rest(seq__59699_60444__$1);
var G__60447 = c__4556__auto___60445;
var G__60448 = cljs.core.count(c__4556__auto___60445);
var G__60449 = (0);
seq__59699_60394 = G__60446;
chunk__59700_60395 = G__60447;
count__59701_60396 = G__60448;
i__59702_60397 = G__60449;
continue;
} else {
var child_struct_60450 = cljs.core.first(seq__59699_60444__$1);
var children_60452 = shadow.dom.dom_node(child_struct_60450);
if(cljs.core.seq_QMARK_(children_60452)){
var seq__59759_60453 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_60452));
var chunk__59761_60454 = null;
var count__59762_60455 = (0);
var i__59763_60456 = (0);
while(true){
if((i__59763_60456 < count__59762_60455)){
var child_60461 = chunk__59761_60454.cljs$core$IIndexed$_nth$arity$2(null,i__59763_60456);
if(cljs.core.truth_(child_60461)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60461);


var G__60462 = seq__59759_60453;
var G__60463 = chunk__59761_60454;
var G__60464 = count__59762_60455;
var G__60465 = (i__59763_60456 + (1));
seq__59759_60453 = G__60462;
chunk__59761_60454 = G__60463;
count__59762_60455 = G__60464;
i__59763_60456 = G__60465;
continue;
} else {
var G__60466 = seq__59759_60453;
var G__60467 = chunk__59761_60454;
var G__60468 = count__59762_60455;
var G__60469 = (i__59763_60456 + (1));
seq__59759_60453 = G__60466;
chunk__59761_60454 = G__60467;
count__59762_60455 = G__60468;
i__59763_60456 = G__60469;
continue;
}
} else {
var temp__5735__auto___60472__$1 = cljs.core.seq(seq__59759_60453);
if(temp__5735__auto___60472__$1){
var seq__59759_60473__$1 = temp__5735__auto___60472__$1;
if(cljs.core.chunked_seq_QMARK_(seq__59759_60473__$1)){
var c__4556__auto___60476 = cljs.core.chunk_first(seq__59759_60473__$1);
var G__60477 = cljs.core.chunk_rest(seq__59759_60473__$1);
var G__60478 = c__4556__auto___60476;
var G__60479 = cljs.core.count(c__4556__auto___60476);
var G__60480 = (0);
seq__59759_60453 = G__60477;
chunk__59761_60454 = G__60478;
count__59762_60455 = G__60479;
i__59763_60456 = G__60480;
continue;
} else {
var child_60482 = cljs.core.first(seq__59759_60473__$1);
if(cljs.core.truth_(child_60482)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_60482);


var G__60485 = cljs.core.next(seq__59759_60473__$1);
var G__60486 = null;
var G__60487 = (0);
var G__60488 = (0);
seq__59759_60453 = G__60485;
chunk__59761_60454 = G__60486;
count__59762_60455 = G__60487;
i__59763_60456 = G__60488;
continue;
} else {
var G__60492 = cljs.core.next(seq__59759_60473__$1);
var G__60493 = null;
var G__60494 = (0);
var G__60495 = (0);
seq__59759_60453 = G__60492;
chunk__59761_60454 = G__60493;
count__59762_60455 = G__60494;
i__59763_60456 = G__60495;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_60452);
}


var G__60497 = cljs.core.next(seq__59699_60444__$1);
var G__60498 = null;
var G__60499 = (0);
var G__60500 = (0);
seq__59699_60394 = G__60497;
chunk__59700_60395 = G__60498;
count__59701_60396 = G__60499;
i__59702_60397 = G__60500;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__59786 = cljs.core.seq(node);
var chunk__59787 = null;
var count__59788 = (0);
var i__59789 = (0);
while(true){
if((i__59789 < count__59788)){
var n = chunk__59787.cljs$core$IIndexed$_nth$arity$2(null,i__59789);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60513 = seq__59786;
var G__60514 = chunk__59787;
var G__60515 = count__59788;
var G__60516 = (i__59789 + (1));
seq__59786 = G__60513;
chunk__59787 = G__60514;
count__59788 = G__60515;
i__59789 = G__60516;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59786);
if(temp__5735__auto__){
var seq__59786__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59786__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59786__$1);
var G__60518 = cljs.core.chunk_rest(seq__59786__$1);
var G__60519 = c__4556__auto__;
var G__60520 = cljs.core.count(c__4556__auto__);
var G__60521 = (0);
seq__59786 = G__60518;
chunk__59787 = G__60519;
count__59788 = G__60520;
i__59789 = G__60521;
continue;
} else {
var n = cljs.core.first(seq__59786__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__60528 = cljs.core.next(seq__59786__$1);
var G__60529 = null;
var G__60530 = (0);
var G__60531 = (0);
seq__59786 = G__60528;
chunk__59787 = G__60529;
count__59788 = G__60530;
i__59789 = G__60531;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__59806 = arguments.length;
switch (G__59806) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__59813 = arguments.length;
switch (G__59813) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__59829 = arguments.length;
switch (G__59829) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60559 = arguments.length;
var i__4737__auto___60560 = (0);
while(true){
if((i__4737__auto___60560 < len__4736__auto___60559)){
args__4742__auto__.push((arguments[i__4737__auto___60560]));

var G__60562 = (i__4737__auto___60560 + (1));
i__4737__auto___60560 = G__60562;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__59851_60563 = cljs.core.seq(nodes);
var chunk__59852_60564 = null;
var count__59853_60565 = (0);
var i__59854_60566 = (0);
while(true){
if((i__59854_60566 < count__59853_60565)){
var node_60567 = chunk__59852_60564.cljs$core$IIndexed$_nth$arity$2(null,i__59854_60566);
fragment.appendChild(shadow.dom._to_dom(node_60567));


var G__60571 = seq__59851_60563;
var G__60572 = chunk__59852_60564;
var G__60573 = count__59853_60565;
var G__60574 = (i__59854_60566 + (1));
seq__59851_60563 = G__60571;
chunk__59852_60564 = G__60572;
count__59853_60565 = G__60573;
i__59854_60566 = G__60574;
continue;
} else {
var temp__5735__auto___60575 = cljs.core.seq(seq__59851_60563);
if(temp__5735__auto___60575){
var seq__59851_60577__$1 = temp__5735__auto___60575;
if(cljs.core.chunked_seq_QMARK_(seq__59851_60577__$1)){
var c__4556__auto___60579 = cljs.core.chunk_first(seq__59851_60577__$1);
var G__60580 = cljs.core.chunk_rest(seq__59851_60577__$1);
var G__60581 = c__4556__auto___60579;
var G__60582 = cljs.core.count(c__4556__auto___60579);
var G__60583 = (0);
seq__59851_60563 = G__60580;
chunk__59852_60564 = G__60581;
count__59853_60565 = G__60582;
i__59854_60566 = G__60583;
continue;
} else {
var node_60584 = cljs.core.first(seq__59851_60577__$1);
fragment.appendChild(shadow.dom._to_dom(node_60584));


var G__60588 = cljs.core.next(seq__59851_60577__$1);
var G__60589 = null;
var G__60590 = (0);
var G__60591 = (0);
seq__59851_60563 = G__60588;
chunk__59852_60564 = G__60589;
count__59853_60565 = G__60590;
i__59854_60566 = G__60591;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq59848){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq59848));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__59863_60594 = cljs.core.seq(scripts);
var chunk__59864_60595 = null;
var count__59865_60596 = (0);
var i__59866_60597 = (0);
while(true){
if((i__59866_60597 < count__59865_60596)){
var vec__59877_60599 = chunk__59864_60595.cljs$core$IIndexed$_nth$arity$2(null,i__59866_60597);
var script_tag_60600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59877_60599,(0),null);
var script_body_60601 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59877_60599,(1),null);
eval(script_body_60601);


var G__60606 = seq__59863_60594;
var G__60607 = chunk__59864_60595;
var G__60608 = count__59865_60596;
var G__60609 = (i__59866_60597 + (1));
seq__59863_60594 = G__60606;
chunk__59864_60595 = G__60607;
count__59865_60596 = G__60608;
i__59866_60597 = G__60609;
continue;
} else {
var temp__5735__auto___60610 = cljs.core.seq(seq__59863_60594);
if(temp__5735__auto___60610){
var seq__59863_60611__$1 = temp__5735__auto___60610;
if(cljs.core.chunked_seq_QMARK_(seq__59863_60611__$1)){
var c__4556__auto___60612 = cljs.core.chunk_first(seq__59863_60611__$1);
var G__60617 = cljs.core.chunk_rest(seq__59863_60611__$1);
var G__60618 = c__4556__auto___60612;
var G__60619 = cljs.core.count(c__4556__auto___60612);
var G__60620 = (0);
seq__59863_60594 = G__60617;
chunk__59864_60595 = G__60618;
count__59865_60596 = G__60619;
i__59866_60597 = G__60620;
continue;
} else {
var vec__59880_60621 = cljs.core.first(seq__59863_60611__$1);
var script_tag_60622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59880_60621,(0),null);
var script_body_60623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59880_60621,(1),null);
eval(script_body_60623);


var G__60625 = cljs.core.next(seq__59863_60611__$1);
var G__60626 = null;
var G__60627 = (0);
var G__60628 = (0);
seq__59863_60594 = G__60625;
chunk__59864_60595 = G__60626;
count__59865_60596 = G__60627;
i__59866_60597 = G__60628;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__59884){
var vec__59885 = p__59884;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59885,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59885,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__59895 = arguments.length;
switch (G__59895) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__59896 = cljs.core.seq(style_keys);
var chunk__59897 = null;
var count__59898 = (0);
var i__59899 = (0);
while(true){
if((i__59899 < count__59898)){
var it = chunk__59897.cljs$core$IIndexed$_nth$arity$2(null,i__59899);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60644 = seq__59896;
var G__60645 = chunk__59897;
var G__60646 = count__59898;
var G__60647 = (i__59899 + (1));
seq__59896 = G__60644;
chunk__59897 = G__60645;
count__59898 = G__60646;
i__59899 = G__60647;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59896);
if(temp__5735__auto__){
var seq__59896__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59896__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__59896__$1);
var G__60648 = cljs.core.chunk_rest(seq__59896__$1);
var G__60649 = c__4556__auto__;
var G__60650 = cljs.core.count(c__4556__auto__);
var G__60651 = (0);
seq__59896 = G__60648;
chunk__59897 = G__60649;
count__59898 = G__60650;
i__59899 = G__60651;
continue;
} else {
var it = cljs.core.first(seq__59896__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__60652 = cljs.core.next(seq__59896__$1);
var G__60653 = null;
var G__60654 = (0);
var G__60655 = (0);
seq__59896 = G__60652;
chunk__59897 = G__60653;
count__59898 = G__60654;
i__59899 = G__60655;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k59905,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__59922 = k59905;
var G__59922__$1 = (((G__59922 instanceof cljs.core.Keyword))?G__59922.fqn:null);
switch (G__59922__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59905,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__59924){
var vec__59926 = p__59924;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59926,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59926,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59904){
var self__ = this;
var G__59904__$1 = this;
return (new cljs.core.RecordIter((0),G__59904__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59906,other59907){
var self__ = this;
var this59906__$1 = this;
return (((!((other59907 == null)))) && ((this59906__$1.constructor === other59907.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59906__$1.x,other59907.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59906__$1.y,other59907.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59906__$1.__extmap,other59907.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__59904){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__59949 = cljs.core.keyword_identical_QMARK_;
var expr__59950 = k__4388__auto__;
if(cljs.core.truth_((pred__59949.cljs$core$IFn$_invoke$arity$2 ? pred__59949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__59950) : pred__59949.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__59950)))){
return (new shadow.dom.Coordinate(G__59904,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__59949.cljs$core$IFn$_invoke$arity$2 ? pred__59949.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__59950) : pred__59949.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__59950)))){
return (new shadow.dom.Coordinate(self__.x,G__59904,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__59904),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__59904){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__59904,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__59910){
var extmap__4419__auto__ = (function (){var G__59967 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59910,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__59910)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__59967);
} else {
return G__59967;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__59910),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__59910),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k59976,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__59986 = k59976;
var G__59986__$1 = (((G__59986 instanceof cljs.core.Keyword))?G__59986.fqn:null);
switch (G__59986__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k59976,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__59989){
var vec__59990 = p__59989;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59990,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59990,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__59975){
var self__ = this;
var G__59975__$1 = this;
return (new cljs.core.RecordIter((0),G__59975__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this59977,other59978){
var self__ = this;
var this59977__$1 = this;
return (((!((other59978 == null)))) && ((this59977__$1.constructor === other59978.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59977__$1.w,other59978.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59977__$1.h,other59978.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this59977__$1.__extmap,other59978.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__59975){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__60003 = cljs.core.keyword_identical_QMARK_;
var expr__60004 = k__4388__auto__;
if(cljs.core.truth_((pred__60003.cljs$core$IFn$_invoke$arity$2 ? pred__60003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__60004) : pred__60003.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__60004)))){
return (new shadow.dom.Size(G__59975,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__60003.cljs$core$IFn$_invoke$arity$2 ? pred__60003.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__60004) : pred__60003.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__60004)))){
return (new shadow.dom.Size(self__.w,G__59975,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__59975),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__59975){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__59975,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__59979){
var extmap__4419__auto__ = (function (){var G__60009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__59979,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__59979)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__60009);
} else {
return G__60009;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__59979),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__59979),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__60692 = (i + (1));
var G__60693 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__60692;
ret = G__60693;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60031){
var vec__60033 = p__60031;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60033,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__60039 = arguments.length;
switch (G__60039) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__60705 = ps;
var G__60706 = (i + (1));
el__$1 = G__60705;
i = G__60706;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__60059 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60059,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60059,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60059,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__60064_60710 = cljs.core.seq(props);
var chunk__60065_60711 = null;
var count__60066_60712 = (0);
var i__60067_60713 = (0);
while(true){
if((i__60067_60713 < count__60066_60712)){
var vec__60084_60718 = chunk__60065_60711.cljs$core$IIndexed$_nth$arity$2(null,i__60067_60713);
var k_60719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60084_60718,(0),null);
var v_60720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60084_60718,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_60719);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60719),v_60720);


var G__60721 = seq__60064_60710;
var G__60722 = chunk__60065_60711;
var G__60723 = count__60066_60712;
var G__60724 = (i__60067_60713 + (1));
seq__60064_60710 = G__60721;
chunk__60065_60711 = G__60722;
count__60066_60712 = G__60723;
i__60067_60713 = G__60724;
continue;
} else {
var temp__5735__auto___60725 = cljs.core.seq(seq__60064_60710);
if(temp__5735__auto___60725){
var seq__60064_60726__$1 = temp__5735__auto___60725;
if(cljs.core.chunked_seq_QMARK_(seq__60064_60726__$1)){
var c__4556__auto___60729 = cljs.core.chunk_first(seq__60064_60726__$1);
var G__60730 = cljs.core.chunk_rest(seq__60064_60726__$1);
var G__60731 = c__4556__auto___60729;
var G__60732 = cljs.core.count(c__4556__auto___60729);
var G__60733 = (0);
seq__60064_60710 = G__60730;
chunk__60065_60711 = G__60731;
count__60066_60712 = G__60732;
i__60067_60713 = G__60733;
continue;
} else {
var vec__60093_60734 = cljs.core.first(seq__60064_60726__$1);
var k_60735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093_60734,(0),null);
var v_60736 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60093_60734,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_60735);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_60735),v_60736);


var G__60739 = cljs.core.next(seq__60064_60726__$1);
var G__60740 = null;
var G__60741 = (0);
var G__60742 = (0);
seq__60064_60710 = G__60739;
chunk__60065_60711 = G__60740;
count__60066_60712 = G__60741;
i__60067_60713 = G__60742;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__60100 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60100,(1),null);
var seq__60108_60747 = cljs.core.seq(node_children);
var chunk__60110_60748 = null;
var count__60111_60749 = (0);
var i__60112_60750 = (0);
while(true){
if((i__60112_60750 < count__60111_60749)){
var child_struct_60751 = chunk__60110_60748.cljs$core$IIndexed$_nth$arity$2(null,i__60112_60750);
if((!((child_struct_60751 == null)))){
if(typeof child_struct_60751 === 'string'){
var text_60752 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60752),child_struct_60751].join(''));
} else {
var children_60753 = shadow.dom.svg_node(child_struct_60751);
if(cljs.core.seq_QMARK_(children_60753)){
var seq__60142_60754 = cljs.core.seq(children_60753);
var chunk__60144_60755 = null;
var count__60145_60756 = (0);
var i__60146_60757 = (0);
while(true){
if((i__60146_60757 < count__60145_60756)){
var child_60758 = chunk__60144_60755.cljs$core$IIndexed$_nth$arity$2(null,i__60146_60757);
if(cljs.core.truth_(child_60758)){
node.appendChild(child_60758);


var G__60759 = seq__60142_60754;
var G__60760 = chunk__60144_60755;
var G__60761 = count__60145_60756;
var G__60762 = (i__60146_60757 + (1));
seq__60142_60754 = G__60759;
chunk__60144_60755 = G__60760;
count__60145_60756 = G__60761;
i__60146_60757 = G__60762;
continue;
} else {
var G__60763 = seq__60142_60754;
var G__60764 = chunk__60144_60755;
var G__60765 = count__60145_60756;
var G__60766 = (i__60146_60757 + (1));
seq__60142_60754 = G__60763;
chunk__60144_60755 = G__60764;
count__60145_60756 = G__60765;
i__60146_60757 = G__60766;
continue;
}
} else {
var temp__5735__auto___60769 = cljs.core.seq(seq__60142_60754);
if(temp__5735__auto___60769){
var seq__60142_60770__$1 = temp__5735__auto___60769;
if(cljs.core.chunked_seq_QMARK_(seq__60142_60770__$1)){
var c__4556__auto___60771 = cljs.core.chunk_first(seq__60142_60770__$1);
var G__60772 = cljs.core.chunk_rest(seq__60142_60770__$1);
var G__60773 = c__4556__auto___60771;
var G__60774 = cljs.core.count(c__4556__auto___60771);
var G__60775 = (0);
seq__60142_60754 = G__60772;
chunk__60144_60755 = G__60773;
count__60145_60756 = G__60774;
i__60146_60757 = G__60775;
continue;
} else {
var child_60776 = cljs.core.first(seq__60142_60770__$1);
if(cljs.core.truth_(child_60776)){
node.appendChild(child_60776);


var G__60777 = cljs.core.next(seq__60142_60770__$1);
var G__60778 = null;
var G__60779 = (0);
var G__60780 = (0);
seq__60142_60754 = G__60777;
chunk__60144_60755 = G__60778;
count__60145_60756 = G__60779;
i__60146_60757 = G__60780;
continue;
} else {
var G__60781 = cljs.core.next(seq__60142_60770__$1);
var G__60782 = null;
var G__60783 = (0);
var G__60784 = (0);
seq__60142_60754 = G__60781;
chunk__60144_60755 = G__60782;
count__60145_60756 = G__60783;
i__60146_60757 = G__60784;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60753);
}
}


var G__60785 = seq__60108_60747;
var G__60786 = chunk__60110_60748;
var G__60787 = count__60111_60749;
var G__60788 = (i__60112_60750 + (1));
seq__60108_60747 = G__60785;
chunk__60110_60748 = G__60786;
count__60111_60749 = G__60787;
i__60112_60750 = G__60788;
continue;
} else {
var G__60791 = seq__60108_60747;
var G__60792 = chunk__60110_60748;
var G__60793 = count__60111_60749;
var G__60794 = (i__60112_60750 + (1));
seq__60108_60747 = G__60791;
chunk__60110_60748 = G__60792;
count__60111_60749 = G__60793;
i__60112_60750 = G__60794;
continue;
}
} else {
var temp__5735__auto___60795 = cljs.core.seq(seq__60108_60747);
if(temp__5735__auto___60795){
var seq__60108_60796__$1 = temp__5735__auto___60795;
if(cljs.core.chunked_seq_QMARK_(seq__60108_60796__$1)){
var c__4556__auto___60797 = cljs.core.chunk_first(seq__60108_60796__$1);
var G__60798 = cljs.core.chunk_rest(seq__60108_60796__$1);
var G__60799 = c__4556__auto___60797;
var G__60800 = cljs.core.count(c__4556__auto___60797);
var G__60801 = (0);
seq__60108_60747 = G__60798;
chunk__60110_60748 = G__60799;
count__60111_60749 = G__60800;
i__60112_60750 = G__60801;
continue;
} else {
var child_struct_60802 = cljs.core.first(seq__60108_60796__$1);
if((!((child_struct_60802 == null)))){
if(typeof child_struct_60802 === 'string'){
var text_60803 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_60803),child_struct_60802].join(''));
} else {
var children_60804 = shadow.dom.svg_node(child_struct_60802);
if(cljs.core.seq_QMARK_(children_60804)){
var seq__60155_60805 = cljs.core.seq(children_60804);
var chunk__60157_60806 = null;
var count__60158_60807 = (0);
var i__60159_60808 = (0);
while(true){
if((i__60159_60808 < count__60158_60807)){
var child_60809 = chunk__60157_60806.cljs$core$IIndexed$_nth$arity$2(null,i__60159_60808);
if(cljs.core.truth_(child_60809)){
node.appendChild(child_60809);


var G__60810 = seq__60155_60805;
var G__60811 = chunk__60157_60806;
var G__60812 = count__60158_60807;
var G__60813 = (i__60159_60808 + (1));
seq__60155_60805 = G__60810;
chunk__60157_60806 = G__60811;
count__60158_60807 = G__60812;
i__60159_60808 = G__60813;
continue;
} else {
var G__60814 = seq__60155_60805;
var G__60815 = chunk__60157_60806;
var G__60816 = count__60158_60807;
var G__60817 = (i__60159_60808 + (1));
seq__60155_60805 = G__60814;
chunk__60157_60806 = G__60815;
count__60158_60807 = G__60816;
i__60159_60808 = G__60817;
continue;
}
} else {
var temp__5735__auto___60820__$1 = cljs.core.seq(seq__60155_60805);
if(temp__5735__auto___60820__$1){
var seq__60155_60823__$1 = temp__5735__auto___60820__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60155_60823__$1)){
var c__4556__auto___60830 = cljs.core.chunk_first(seq__60155_60823__$1);
var G__60831 = cljs.core.chunk_rest(seq__60155_60823__$1);
var G__60832 = c__4556__auto___60830;
var G__60833 = cljs.core.count(c__4556__auto___60830);
var G__60834 = (0);
seq__60155_60805 = G__60831;
chunk__60157_60806 = G__60832;
count__60158_60807 = G__60833;
i__60159_60808 = G__60834;
continue;
} else {
var child_60835 = cljs.core.first(seq__60155_60823__$1);
if(cljs.core.truth_(child_60835)){
node.appendChild(child_60835);


var G__60836 = cljs.core.next(seq__60155_60823__$1);
var G__60837 = null;
var G__60838 = (0);
var G__60839 = (0);
seq__60155_60805 = G__60836;
chunk__60157_60806 = G__60837;
count__60158_60807 = G__60838;
i__60159_60808 = G__60839;
continue;
} else {
var G__60840 = cljs.core.next(seq__60155_60823__$1);
var G__60841 = null;
var G__60842 = (0);
var G__60843 = (0);
seq__60155_60805 = G__60840;
chunk__60157_60806 = G__60841;
count__60158_60807 = G__60842;
i__60159_60808 = G__60843;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_60804);
}
}


var G__60844 = cljs.core.next(seq__60108_60796__$1);
var G__60845 = null;
var G__60846 = (0);
var G__60847 = (0);
seq__60108_60747 = G__60844;
chunk__60110_60748 = G__60845;
count__60111_60749 = G__60846;
i__60112_60750 = G__60847;
continue;
} else {
var G__60848 = cljs.core.next(seq__60108_60796__$1);
var G__60849 = null;
var G__60850 = (0);
var G__60851 = (0);
seq__60108_60747 = G__60848;
chunk__60110_60748 = G__60849;
count__60111_60749 = G__60850;
i__60112_60750 = G__60851;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___60855 = arguments.length;
var i__4737__auto___60856 = (0);
while(true){
if((i__4737__auto___60856 < len__4736__auto___60855)){
args__4742__auto__.push((arguments[i__4737__auto___60856]));

var G__60857 = (i__4737__auto___60856 + (1));
i__4737__auto___60856 = G__60857;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq60175){
var G__60176 = cljs.core.first(seq60175);
var seq60175__$1 = cljs.core.next(seq60175);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60176,seq60175__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__60184 = arguments.length;
switch (G__60184) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__55696__auto___60863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_60192){
var state_val_60193 = (state_60192[(1)]);
if((state_val_60193 === (1))){
var state_60192__$1 = state_60192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_60192__$1,(2),once_or_cleanup);
} else {
if((state_val_60193 === (2))){
var inst_60189 = (state_60192[(2)]);
var inst_60190 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_60192__$1 = (function (){var statearr_60196 = state_60192;
(statearr_60196[(7)] = inst_60189);

return statearr_60196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_60192__$1,inst_60190);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__55477__auto__ = null;
var shadow$dom$state_machine__55477__auto____0 = (function (){
var statearr_60197 = [null,null,null,null,null,null,null,null];
(statearr_60197[(0)] = shadow$dom$state_machine__55477__auto__);

(statearr_60197[(1)] = (1));

return statearr_60197;
});
var shadow$dom$state_machine__55477__auto____1 = (function (state_60192){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_60192);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e60198){var ex__55480__auto__ = e60198;
var statearr_60199_60865 = state_60192;
(statearr_60199_60865[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_60192[(4)]))){
var statearr_60200_60866 = state_60192;
(statearr_60200_60866[(1)] = cljs.core.first((state_60192[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60868 = state_60192;
state_60192 = G__60868;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
shadow$dom$state_machine__55477__auto__ = function(state_60192){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__55477__auto____0.call(this);
case 1:
return shadow$dom$state_machine__55477__auto____1.call(this,state_60192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__55477__auto____0;
shadow$dom$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__55477__auto____1;
return shadow$dom$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_60202 = f__55697__auto__();
(statearr_60202[(6)] = c__55696__auto___60863);

return statearr_60202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
