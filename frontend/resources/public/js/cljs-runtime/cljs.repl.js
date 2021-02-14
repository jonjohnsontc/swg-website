goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66352){
var map__66353 = p__66352;
var map__66353__$1 = (((((!((map__66353 == null))))?(((((map__66353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66353):map__66353);
var m = map__66353__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66353__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66388_66631 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66389_66632 = null;
var count__66390_66633 = (0);
var i__66391_66634 = (0);
while(true){
if((i__66391_66634 < count__66390_66633)){
var f_66640 = chunk__66389_66632.cljs$core$IIndexed$_nth$arity$2(null,i__66391_66634);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66640], 0));


var G__66641 = seq__66388_66631;
var G__66642 = chunk__66389_66632;
var G__66643 = count__66390_66633;
var G__66644 = (i__66391_66634 + (1));
seq__66388_66631 = G__66641;
chunk__66389_66632 = G__66642;
count__66390_66633 = G__66643;
i__66391_66634 = G__66644;
continue;
} else {
var temp__5735__auto___66646 = cljs.core.seq(seq__66388_66631);
if(temp__5735__auto___66646){
var seq__66388_66647__$1 = temp__5735__auto___66646;
if(cljs.core.chunked_seq_QMARK_(seq__66388_66647__$1)){
var c__4556__auto___66648 = cljs.core.chunk_first(seq__66388_66647__$1);
var G__66649 = cljs.core.chunk_rest(seq__66388_66647__$1);
var G__66650 = c__4556__auto___66648;
var G__66651 = cljs.core.count(c__4556__auto___66648);
var G__66652 = (0);
seq__66388_66631 = G__66649;
chunk__66389_66632 = G__66650;
count__66390_66633 = G__66651;
i__66391_66634 = G__66652;
continue;
} else {
var f_66653 = cljs.core.first(seq__66388_66647__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_66653], 0));


var G__66655 = cljs.core.next(seq__66388_66647__$1);
var G__66656 = null;
var G__66657 = (0);
var G__66658 = (0);
seq__66388_66631 = G__66655;
chunk__66389_66632 = G__66656;
count__66390_66633 = G__66657;
i__66391_66634 = G__66658;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66664 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_66664], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_66664)))?cljs.core.second(arglists_66664):arglists_66664)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__66416_66665 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66417_66666 = null;
var count__66418_66667 = (0);
var i__66419_66668 = (0);
while(true){
if((i__66419_66668 < count__66418_66667)){
var vec__66439_66669 = chunk__66417_66666.cljs$core$IIndexed$_nth$arity$2(null,i__66419_66668);
var name_66670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66439_66669,(0),null);
var map__66442_66671 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66439_66669,(1),null);
var map__66442_66672__$1 = (((((!((map__66442_66671 == null))))?(((((map__66442_66671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66442_66671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66442_66671):map__66442_66671);
var doc_66673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66442_66672__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66442_66672__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66670], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66674], 0));

if(cljs.core.truth_(doc_66673)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66673], 0));
} else {
}


var G__66675 = seq__66416_66665;
var G__66676 = chunk__66417_66666;
var G__66677 = count__66418_66667;
var G__66678 = (i__66419_66668 + (1));
seq__66416_66665 = G__66675;
chunk__66417_66666 = G__66676;
count__66418_66667 = G__66677;
i__66419_66668 = G__66678;
continue;
} else {
var temp__5735__auto___66679 = cljs.core.seq(seq__66416_66665);
if(temp__5735__auto___66679){
var seq__66416_66680__$1 = temp__5735__auto___66679;
if(cljs.core.chunked_seq_QMARK_(seq__66416_66680__$1)){
var c__4556__auto___66682 = cljs.core.chunk_first(seq__66416_66680__$1);
var G__66683 = cljs.core.chunk_rest(seq__66416_66680__$1);
var G__66684 = c__4556__auto___66682;
var G__66685 = cljs.core.count(c__4556__auto___66682);
var G__66686 = (0);
seq__66416_66665 = G__66683;
chunk__66417_66666 = G__66684;
count__66418_66667 = G__66685;
i__66419_66668 = G__66686;
continue;
} else {
var vec__66450_66687 = cljs.core.first(seq__66416_66680__$1);
var name_66688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450_66687,(0),null);
var map__66453_66689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66450_66687,(1),null);
var map__66453_66690__$1 = (((((!((map__66453_66689 == null))))?(((((map__66453_66689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66453_66689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66453_66689):map__66453_66689);
var doc_66691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66453_66690__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66453_66690__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_66688], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_66692], 0));

if(cljs.core.truth_(doc_66691)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_66691], 0));
} else {
}


var G__66695 = cljs.core.next(seq__66416_66680__$1);
var G__66696 = null;
var G__66697 = (0);
var G__66698 = (0);
seq__66416_66665 = G__66695;
chunk__66417_66666 = G__66696;
count__66418_66667 = G__66697;
i__66419_66668 = G__66698;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__66456 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66457 = null;
var count__66458 = (0);
var i__66459 = (0);
while(true){
if((i__66459 < count__66458)){
var role = chunk__66457.cljs$core$IIndexed$_nth$arity$2(null,i__66459);
var temp__5735__auto___66702__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66702__$1)){
var spec_66703 = temp__5735__auto___66702__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66703)], 0));
} else {
}


var G__66704 = seq__66456;
var G__66705 = chunk__66457;
var G__66706 = count__66458;
var G__66707 = (i__66459 + (1));
seq__66456 = G__66704;
chunk__66457 = G__66705;
count__66458 = G__66706;
i__66459 = G__66707;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__66456);
if(temp__5735__auto____$1){
var seq__66456__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__66456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__66456__$1);
var G__66711 = cljs.core.chunk_rest(seq__66456__$1);
var G__66712 = c__4556__auto__;
var G__66713 = cljs.core.count(c__4556__auto__);
var G__66714 = (0);
seq__66456 = G__66711;
chunk__66457 = G__66712;
count__66458 = G__66713;
i__66459 = G__66714;
continue;
} else {
var role = cljs.core.first(seq__66456__$1);
var temp__5735__auto___66715__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___66715__$2)){
var spec_66716 = temp__5735__auto___66715__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_66716)], 0));
} else {
}


var G__66719 = cljs.core.next(seq__66456__$1);
var G__66720 = null;
var G__66721 = (0);
var G__66722 = (0);
seq__66456 = G__66719;
chunk__66457 = G__66720;
count__66458 = G__66721;
i__66459 = G__66722;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__66728 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__66729 = cljs.core.ex_cause(t);
via = G__66728;
t = G__66729;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__66466 = datafied_throwable;
var map__66466__$1 = (((((!((map__66466 == null))))?(((((map__66466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66466):map__66466);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66466__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66466__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66466__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__66467 = cljs.core.last(via);
var map__66467__$1 = (((((!((map__66467 == null))))?(((((map__66467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66467):map__66467);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66467__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66467__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66467__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__66468 = data;
var map__66468__$1 = (((((!((map__66468 == null))))?(((((map__66468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66468):map__66468);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66468__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66468__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66468__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__66469 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__66469__$1 = (((((!((map__66469 == null))))?(((((map__66469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66469):map__66469);
var top_data = map__66469__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__66483 = phase;
var G__66483__$1 = (((G__66483 instanceof cljs.core.Keyword))?G__66483.fqn:null);
switch (G__66483__$1) {
case "read-source":
var map__66484 = data;
var map__66484__$1 = (((((!((map__66484 == null))))?(((((map__66484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66484):map__66484);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66484__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66484__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__66486 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__66486__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66486,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66486);
var G__66486__$2 = (cljs.core.truth_((function (){var fexpr__66490 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66490.cljs$core$IFn$_invoke$arity$1 ? fexpr__66490.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66490.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66486__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66486__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66486__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66486__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__66491 = top_data;
var G__66491__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66491,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__66491);
var G__66491__$2 = (cljs.core.truth_((function (){var fexpr__66492 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66492.cljs$core$IFn$_invoke$arity$1 ? fexpr__66492.cljs$core$IFn$_invoke$arity$1(source) : fexpr__66492.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66491__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__66491__$1);
var G__66491__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66491__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66491__$2);
var G__66491__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66491__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66491__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66491__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66491__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__66499 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66499,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66499,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66499,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66499,(3),null);
var G__66502 = top_data;
var G__66502__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66502,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__66502);
var G__66502__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66502__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__66502__$1);
var G__66502__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66502__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__66502__$2);
var G__66502__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66502__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__66502__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66502__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__66502__$4;
}

break;
case "execution":
var vec__66509 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66509,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66509,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66509,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66509,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66465_SHARP_){
var or__4126__auto__ = (p1__66465_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__66518 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__66518.cljs$core$IFn$_invoke$arity$1 ? fexpr__66518.cljs$core$IFn$_invoke$arity$1(p1__66465_SHARP_) : fexpr__66518.call(null,p1__66465_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__66519 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__66519__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66519,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__66519);
var G__66519__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66519__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__66519__$1);
var G__66519__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66519__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__66519__$2);
var G__66519__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66519__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__66519__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66519__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__66519__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66483__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__66538){
var map__66539 = p__66538;
var map__66539__$1 = (((((!((map__66539 == null))))?(((((map__66539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66539):map__66539);
var triage_data = map__66539__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66539__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__66553 = phase;
var G__66553__$1 = (((G__66553 instanceof cljs.core.Keyword))?G__66553.fqn:null);
switch (G__66553__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__66554 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__66555 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66556 = loc;
var G__66557 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66560_66803 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66561_66804 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66562_66805 = true;
var _STAR_print_fn_STAR__temp_val__66563_66806 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66562_66805);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66563_66806);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66535_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66535_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66561_66804);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66560_66803);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66554,G__66555,G__66556,G__66557) : format.call(null,G__66554,G__66555,G__66556,G__66557));

break;
case "macroexpansion":
var G__66570 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__66571 = cause_type;
var G__66572 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66573 = loc;
var G__66574 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66570,G__66571,G__66572,G__66573,G__66574) : format.call(null,G__66570,G__66571,G__66572,G__66573,G__66574));

break;
case "compile-syntax-check":
var G__66575 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__66576 = cause_type;
var G__66577 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66578 = loc;
var G__66579 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66575,G__66576,G__66577,G__66578,G__66579) : format.call(null,G__66575,G__66576,G__66577,G__66578,G__66579));

break;
case "compilation":
var G__66580 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__66581 = cause_type;
var G__66582 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66583 = loc;
var G__66584 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66580,G__66581,G__66582,G__66583,G__66584) : format.call(null,G__66580,G__66581,G__66582,G__66583,G__66584));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__66587 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__66588 = symbol;
var G__66589 = loc;
var G__66590 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__66596_66820 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__66597_66821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__66598_66822 = true;
var _STAR_print_fn_STAR__temp_val__66599_66823 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__66598_66822);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__66599_66823);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66537_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66537_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__66597_66821);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__66596_66820);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__66587,G__66588,G__66589,G__66590) : format.call(null,G__66587,G__66588,G__66589,G__66590));
} else {
var G__66605 = "Execution error%s at %s(%s).\n%s\n";
var G__66606 = cause_type;
var G__66607 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__66608 = loc;
var G__66609 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__66605,G__66606,G__66607,G__66608,G__66609) : format.call(null,G__66605,G__66606,G__66607,G__66608,G__66609));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66553__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
