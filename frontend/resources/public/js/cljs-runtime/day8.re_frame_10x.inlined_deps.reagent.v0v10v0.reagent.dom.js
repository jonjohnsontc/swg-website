goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__47806 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__47807 = true;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__47807);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__47809 = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__47810 = false;
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__47810);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__47809);
}}));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__47806);
}});
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$render(var_args){
var G__47814 = arguments.length;
switch (G__47814) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v10v0$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.ratom.flush_BANG_();

var seq__47821_47844 = cljs.core.seq(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.roots)));
var chunk__47822_47845 = null;
var count__47823_47846 = (0);
var i__47824_47847 = (0);
while(true){
if((i__47824_47847 < count__47823_47846)){
var v_47848 = chunk__47822_47845.cljs$core$IIndexed$_nth$arity$2(null,i__47824_47847);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component,v_47848);


var G__47849 = seq__47821_47844;
var G__47850 = chunk__47822_47845;
var G__47851 = count__47823_47846;
var G__47852 = (i__47824_47847 + (1));
seq__47821_47844 = G__47849;
chunk__47822_47845 = G__47850;
count__47823_47846 = G__47851;
i__47824_47847 = G__47852;
continue;
} else {
var temp__5735__auto___47853 = cljs.core.seq(seq__47821_47844);
if(temp__5735__auto___47853){
var seq__47821_47854__$1 = temp__5735__auto___47853;
if(cljs.core.chunked_seq_QMARK_(seq__47821_47854__$1)){
var c__4556__auto___47855 = cljs.core.chunk_first(seq__47821_47854__$1);
var G__47856 = cljs.core.chunk_rest(seq__47821_47854__$1);
var G__47857 = c__4556__auto___47855;
var G__47858 = cljs.core.count(c__4556__auto___47855);
var G__47859 = (0);
seq__47821_47844 = G__47856;
chunk__47822_47845 = G__47857;
count__47823_47846 = G__47858;
i__47824_47847 = G__47859;
continue;
} else {
var v_47860 = cljs.core.first(seq__47821_47854__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.re_render_component,v_47860);


var G__47861 = cljs.core.next(seq__47821_47854__$1);
var G__47862 = null;
var G__47863 = (0);
var G__47864 = (0);
seq__47821_47844 = G__47861;
chunk__47822_47845 = G__47862;
count__47823_47846 = G__47863;
i__47824_47847 = G__47864;
continue;
}
} else {
}
}
break;
}

return day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v10v0.reagent.dom.js.map
