goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$format(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44160 = arguments.length;
var i__4737__auto___44161 = (0);
while(true){
if((i__4737__auto___44161 < len__4736__auto___44160)){
args__4742__auto__.push((arguments[i__4737__auto___44161]));

var G__44162 = (i__4737__auto___44161 + (1));
i__4737__auto___44161 = G__44162;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.format.cljs$lang$applyTo = (function (seq44006){
var G__44007 = cljs.core.first(seq44006);
var seq44006__$1 = cljs.core.next(seq44006);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44007,seq44006__$1);
}));


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString = function(){};

var day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$dyn_44172 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
});
/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$dyn_44172(this$);
}
});

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
}));

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.ToString,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$as_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44182 = arguments.length;
var i__4737__auto___44183 = (0);
while(true){
if((i__4737__auto___44183 < len__4736__auto___44182)){
args__4742__auto__.push((arguments[i__4737__auto___44183]));

var G__44186 = (i__4737__auto___44183 + (1));
i__4737__auto___44183 = G__44186;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,args));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.as_str.cljs$lang$applyTo = (function (seq44024){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44024));
}));

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$string__GT_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44189 = arguments.length;
var i__4737__auto___44191 = (0);
while(true){
if((i__4737__auto___44191 < len__4736__auto___44189)){
args__4742__auto__.push((arguments[i__4737__auto___44191]));

var G__44192 = (i__4737__auto___44191 + (1));
i__4737__auto___44191 = G__44192;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__44033){
var vec__44034 = p__44033;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44034,(0),null);
var radix__$1 = (function (){var or__4126__auto__ = radix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq44031){
var G__44032 = cljs.core.first(seq44031);
var seq44031__$1 = cljs.core.next(seq44031);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44032,seq44031__$1);
}));

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$int__GT_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44197 = arguments.length;
var i__4737__auto___44198 = (0);
while(true){
if((i__4737__auto___44198 < len__4736__auto___44197)){
args__4742__auto__.push((arguments[i__4737__auto___44198]));

var G__44202 = (i__4737__auto___44198 + (1));
i__4737__auto___44198 = G__44202;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__44047){
var vec__44048 = p__44047;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44048,(0),null);
var radix__$1 = (function (){var or__4126__auto__ = radix;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq44040){
var G__44042 = cljs.core.first(seq44040);
var seq44040__$1 = cljs.core.next(seq44040);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44042,seq44040__$1);
}));

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join(xs){
var ys = (function (){var iter__4529__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__44056(s__44057){
return (new cljs.core.LazySeq(null,(function (){
var s__44057__$1 = s__44057;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44057__$1);
if(temp__5735__auto__){
var s__44057__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44057__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__44057__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__44059 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__44058 = (0);
while(true){
if((i__44058 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__44058);
cljs.core.chunk_append(b__44059,((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(x)));

var G__44214 = (i__44058 + (1));
i__44058 = G__44214;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44059),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__44056(cljs.core.chunk_rest(s__44057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44059),null);
}
} else {
var x = cljs.core.first(s__44057__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.space_join(x):day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(x)),day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$comma_join_$_iter__44056(cljs.core.rest(s__44057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && ((!(cljs.core.record_QMARK_(x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@supports` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_supports_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_supports_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"feature","feature",27242652))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.at_rule_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix(p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.prefix(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4217__auto__ = a;
var y__4218__auto__ = b;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var top = (function (){var x__4214__auto__ = a;
var y__4215__auto__ = b;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$clip(a,b,n){
var vec__44098 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44098,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44098,(1),null);
var x__4214__auto__ = a__$1;
var y__4215__auto__ = (function (){var x__4217__auto__ = b__$1;
var y__4218__auto__ = n;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$average(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44237 = arguments.length;
var i__4737__auto___44238 = (0);
while(true){
if((i__4737__auto___44238 < len__4736__auto___44237)){
args__4742__auto__.push((arguments[i__4737__auto___44238]));

var G__44240 = (i__4737__auto___44238 + (1));
i__4737__auto___44238 = G__44240;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.average.cljs$lang$applyTo = (function (seq44102){
var G__44104 = cljs.core.first(seq44102);
var seq44102__$1 = cljs.core.next(seq44102);
var G__44105 = cljs.core.first(seq44102__$1);
var seq44102__$2 = cljs.core.next(seq44102__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44104,G__44105,seq44102__$2);
}));

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$cartesian_product(var_args){
var args__4742__auto__ = [];
var len__4736__auto___44246 = arguments.length;
var i__4737__auto___44247 = (0);
while(true){
if((i__4737__auto___44247 < len__4736__auto___44246)){
args__4742__auto__.push((arguments[i__4737__auto___44247]));

var G__44249 = (i__4737__auto___44247 + (1));
i__4737__auto___44247 = G__44249;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__44254 = (i - (1));
var G__44255 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__44254;
v_seqs__$2 = G__44255;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v9$garden$util$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq44123){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44123));
}));


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v9.garden.util.js.map