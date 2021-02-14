goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__55762 = arguments.length;
switch (G__55762) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55764 = (function (f,blockable,meta55765){
this.f = f;
this.blockable = blockable;
this.meta55765 = meta55765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55766,meta55765__$1){
var self__ = this;
var _55766__$1 = this;
return (new cljs.core.async.t_cljs$core$async55764(self__.f,self__.blockable,meta55765__$1));
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55766){
var self__ = this;
var _55766__$1 = this;
return self__.meta55765;
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async55764.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async55764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta55765","meta55765",1179326375,null)], null);
}));

(cljs.core.async.t_cljs$core$async55764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55764");

(cljs.core.async.t_cljs$core$async55764.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async55764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55764.
 */
cljs.core.async.__GT_t_cljs$core$async55764 = (function cljs$core$async$__GT_t_cljs$core$async55764(f__$1,blockable__$1,meta55765){
return (new cljs.core.async.t_cljs$core$async55764(f__$1,blockable__$1,meta55765));
});

}

return (new cljs.core.async.t_cljs$core$async55764(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__55803 = arguments.length;
switch (G__55803) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__55828 = arguments.length;
switch (G__55828) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__55862 = arguments.length;
switch (G__55862) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_59388 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59388) : fn1.call(null,val_59388));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_59388) : fn1.call(null,val_59388));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__55896 = arguments.length;
switch (G__55896) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___59409 = n;
var x_59410 = (0);
while(true){
if((x_59410 < n__4613__auto___59409)){
(a[x_59410] = x_59410);

var G__59412 = (x_59410 + (1));
x_59410 = G__59412;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55932 = (function (flag,meta55933){
this.flag = flag;
this.meta55933 = meta55933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55934,meta55933__$1){
var self__ = this;
var _55934__$1 = this;
return (new cljs.core.async.t_cljs$core$async55932(self__.flag,meta55933__$1));
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55934){
var self__ = this;
var _55934__$1 = this;
return self__.meta55933;
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async55932.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta55933","meta55933",-574734888,null)], null);
}));

(cljs.core.async.t_cljs$core$async55932.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55932");

(cljs.core.async.t_cljs$core$async55932.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async55932");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55932.
 */
cljs.core.async.__GT_t_cljs$core$async55932 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async55932(flag__$1,meta55933){
return (new cljs.core.async.t_cljs$core$async55932(flag__$1,meta55933));
});

}

return (new cljs.core.async.t_cljs$core$async55932(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async55962 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async55962 = (function (flag,cb,meta55963){
this.flag = flag;
this.cb = cb;
this.meta55963 = meta55963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async55962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55964,meta55963__$1){
var self__ = this;
var _55964__$1 = this;
return (new cljs.core.async.t_cljs$core$async55962(self__.flag,self__.cb,meta55963__$1));
}));

(cljs.core.async.t_cljs$core$async55962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55964){
var self__ = this;
var _55964__$1 = this;
return self__.meta55963;
}));

(cljs.core.async.t_cljs$core$async55962.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async55962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async55962.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async55962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async55962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta55963","meta55963",-894509261,null)], null);
}));

(cljs.core.async.t_cljs$core$async55962.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async55962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async55962");

(cljs.core.async.t_cljs$core$async55962.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async55962");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async55962.
 */
cljs.core.async.__GT_t_cljs$core$async55962 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async55962(flag__$1,cb__$1,meta55963){
return (new cljs.core.async.t_cljs$core$async55962(flag__$1,cb__$1,meta55963));
});

}

return (new cljs.core.async.t_cljs$core$async55962(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55991_SHARP_){
var G__56008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55991_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56008) : fret.call(null,G__56008));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__55992_SHARP_){
var G__56009 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__55992_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56009) : fret.call(null,G__56009));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__59436 = (i + (1));
i = G__59436;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59438 = arguments.length;
var i__4737__auto___59439 = (0);
while(true){
if((i__4737__auto___59439 < len__4736__auto___59438)){
args__4742__auto__.push((arguments[i__4737__auto___59439]));

var G__59440 = (i__4737__auto___59439 + (1));
i__4737__auto___59439 = G__59440;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56041){
var map__56046 = p__56041;
var map__56046__$1 = (((((!((map__56046 == null))))?(((((map__56046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56046):map__56046);
var opts = map__56046__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56030){
var G__56032 = cljs.core.first(seq56030);
var seq56030__$1 = cljs.core.next(seq56030);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56032,seq56030__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__56076 = arguments.length;
switch (G__56076) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__55696__auto___59447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_56159){
var state_val_56160 = (state_56159[(1)]);
if((state_val_56160 === (7))){
var inst_56149 = (state_56159[(2)]);
var state_56159__$1 = state_56159;
var statearr_56178_59448 = state_56159__$1;
(statearr_56178_59448[(2)] = inst_56149);

(statearr_56178_59448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (1))){
var state_56159__$1 = state_56159;
var statearr_56184_59449 = state_56159__$1;
(statearr_56184_59449[(2)] = null);

(statearr_56184_59449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (4))){
var inst_56109 = (state_56159[(7)]);
var inst_56109__$1 = (state_56159[(2)]);
var inst_56118 = (inst_56109__$1 == null);
var state_56159__$1 = (function (){var statearr_56192 = state_56159;
(statearr_56192[(7)] = inst_56109__$1);

return statearr_56192;
})();
if(cljs.core.truth_(inst_56118)){
var statearr_56197_59450 = state_56159__$1;
(statearr_56197_59450[(1)] = (5));

} else {
var statearr_56198_59452 = state_56159__$1;
(statearr_56198_59452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (13))){
var state_56159__$1 = state_56159;
var statearr_56207_59455 = state_56159__$1;
(statearr_56207_59455[(2)] = null);

(statearr_56207_59455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (6))){
var inst_56109 = (state_56159[(7)]);
var state_56159__$1 = state_56159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56159__$1,(11),to,inst_56109);
} else {
if((state_val_56160 === (3))){
var inst_56151 = (state_56159[(2)]);
var state_56159__$1 = state_56159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56159__$1,inst_56151);
} else {
if((state_val_56160 === (12))){
var state_56159__$1 = state_56159;
var statearr_56210_59456 = state_56159__$1;
(statearr_56210_59456[(2)] = null);

(statearr_56210_59456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (2))){
var state_56159__$1 = state_56159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56159__$1,(4),from);
} else {
if((state_val_56160 === (11))){
var inst_56138 = (state_56159[(2)]);
var state_56159__$1 = state_56159;
if(cljs.core.truth_(inst_56138)){
var statearr_56211_59457 = state_56159__$1;
(statearr_56211_59457[(1)] = (12));

} else {
var statearr_56212_59459 = state_56159__$1;
(statearr_56212_59459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (9))){
var state_56159__$1 = state_56159;
var statearr_56213_59461 = state_56159__$1;
(statearr_56213_59461[(2)] = null);

(statearr_56213_59461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (5))){
var state_56159__$1 = state_56159;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56215_59463 = state_56159__$1;
(statearr_56215_59463[(1)] = (8));

} else {
var statearr_56216_59464 = state_56159__$1;
(statearr_56216_59464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (14))){
var inst_56147 = (state_56159[(2)]);
var state_56159__$1 = state_56159;
var statearr_56217_59465 = state_56159__$1;
(statearr_56217_59465[(2)] = inst_56147);

(statearr_56217_59465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (10))){
var inst_56134 = (state_56159[(2)]);
var state_56159__$1 = state_56159;
var statearr_56218_59467 = state_56159__$1;
(statearr_56218_59467[(2)] = inst_56134);

(statearr_56218_59467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56160 === (8))){
var inst_56127 = cljs.core.async.close_BANG_(to);
var state_56159__$1 = state_56159;
var statearr_56222_59469 = state_56159__$1;
(statearr_56222_59469[(2)] = inst_56127);

(statearr_56222_59469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_56224 = [null,null,null,null,null,null,null,null];
(statearr_56224[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_56224[(1)] = (1));

return statearr_56224;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_56159){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56159);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56226){var ex__55480__auto__ = e56226;
var statearr_56227_59471 = state_56159;
(statearr_56227_59471[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56159[(4)]))){
var statearr_56228_59473 = state_56159;
(statearr_56228_59473[(1)] = cljs.core.first((state_56159[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59475 = state_56159;
state_56159 = G__59475;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_56159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_56159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_56229 = f__55697__auto__();
(statearr_56229[(6)] = c__55696__auto___59447);

return statearr_56229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__56231){
var vec__56233 = p__56231;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56233,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56233,(1),null);
var job = vec__56233;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__55696__auto___59478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_56240){
var state_val_56241 = (state_56240[(1)]);
if((state_val_56241 === (1))){
var state_56240__$1 = state_56240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56240__$1,(2),res,v);
} else {
if((state_val_56241 === (2))){
var inst_56237 = (state_56240[(2)]);
var inst_56238 = cljs.core.async.close_BANG_(res);
var state_56240__$1 = (function (){var statearr_56248 = state_56240;
(statearr_56248[(7)] = inst_56237);

return statearr_56248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56240__$1,inst_56238);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0 = (function (){
var statearr_56250 = [null,null,null,null,null,null,null,null];
(statearr_56250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__);

(statearr_56250[(1)] = (1));

return statearr_56250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1 = (function (state_56240){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56240);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56251){var ex__55480__auto__ = e56251;
var statearr_56252_59482 = state_56240;
(statearr_56252_59482[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56240[(4)]))){
var statearr_56253_59484 = state_56240;
(statearr_56253_59484[(1)] = cljs.core.first((state_56240[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59485 = state_56240;
state_56240 = G__59485;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = function(state_56240){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1.call(this,state_56240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_56254 = f__55697__auto__();
(statearr_56254[(6)] = c__55696__auto___59478);

return statearr_56254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56261){
var vec__56262 = p__56261;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56262,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56262,(1),null);
var job = vec__56262;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___59487 = n;
var __59488 = (0);
while(true){
if((__59488 < n__4613__auto___59487)){
var G__56265_59490 = type;
var G__56265_59491__$1 = (((G__56265_59490 instanceof cljs.core.Keyword))?G__56265_59490.fqn:null);
switch (G__56265_59491__$1) {
case "compute":
var c__55696__auto___59493 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59488,c__55696__auto___59493,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async){
return (function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = ((function (__59488,c__55696__auto___59493,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async){
return (function (state_56278){
var state_val_56279 = (state_56278[(1)]);
if((state_val_56279 === (1))){
var state_56278__$1 = state_56278;
var statearr_56280_59494 = state_56278__$1;
(statearr_56280_59494[(2)] = null);

(statearr_56280_59494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56279 === (2))){
var state_56278__$1 = state_56278;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56278__$1,(4),jobs);
} else {
if((state_val_56279 === (3))){
var inst_56276 = (state_56278[(2)]);
var state_56278__$1 = state_56278;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56278__$1,inst_56276);
} else {
if((state_val_56279 === (4))){
var inst_56268 = (state_56278[(2)]);
var inst_56269 = process(inst_56268);
var state_56278__$1 = state_56278;
if(cljs.core.truth_(inst_56269)){
var statearr_56281_59495 = state_56278__$1;
(statearr_56281_59495[(1)] = (5));

} else {
var statearr_56283_59496 = state_56278__$1;
(statearr_56283_59496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56279 === (5))){
var state_56278__$1 = state_56278;
var statearr_56284_59497 = state_56278__$1;
(statearr_56284_59497[(2)] = null);

(statearr_56284_59497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56279 === (6))){
var state_56278__$1 = state_56278;
var statearr_56285_59498 = state_56278__$1;
(statearr_56285_59498[(2)] = null);

(statearr_56285_59498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56279 === (7))){
var inst_56274 = (state_56278[(2)]);
var state_56278__$1 = state_56278;
var statearr_56287_59499 = state_56278__$1;
(statearr_56287_59499[(2)] = inst_56274);

(statearr_56287_59499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59488,c__55696__auto___59493,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async))
;
return ((function (__59488,switch__55476__auto__,c__55696__auto___59493,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0 = (function (){
var statearr_56289 = [null,null,null,null,null,null,null];
(statearr_56289[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__);

(statearr_56289[(1)] = (1));

return statearr_56289;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1 = (function (state_56278){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56278);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56291){var ex__55480__auto__ = e56291;
var statearr_56292_59502 = state_56278;
(statearr_56292_59502[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56278[(4)]))){
var statearr_56293_59503 = state_56278;
(statearr_56293_59503[(1)] = cljs.core.first((state_56278[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59504 = state_56278;
state_56278 = G__59504;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = function(state_56278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1.call(this,state_56278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__;
})()
;})(__59488,switch__55476__auto__,c__55696__auto___59493,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async))
})();
var state__55698__auto__ = (function (){var statearr_56294 = f__55697__auto__();
(statearr_56294[(6)] = c__55696__auto___59493);

return statearr_56294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
});})(__59488,c__55696__auto___59493,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async))
);


break;
case "async":
var c__55696__auto___59505 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__59488,c__55696__auto___59505,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async){
return (function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = ((function (__59488,c__55696__auto___59505,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async){
return (function (state_56307){
var state_val_56308 = (state_56307[(1)]);
if((state_val_56308 === (1))){
var state_56307__$1 = state_56307;
var statearr_56312_59506 = state_56307__$1;
(statearr_56312_59506[(2)] = null);

(statearr_56312_59506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56308 === (2))){
var state_56307__$1 = state_56307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56307__$1,(4),jobs);
} else {
if((state_val_56308 === (3))){
var inst_56305 = (state_56307[(2)]);
var state_56307__$1 = state_56307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56307__$1,inst_56305);
} else {
if((state_val_56308 === (4))){
var inst_56297 = (state_56307[(2)]);
var inst_56298 = async(inst_56297);
var state_56307__$1 = state_56307;
if(cljs.core.truth_(inst_56298)){
var statearr_56315_59507 = state_56307__$1;
(statearr_56315_59507[(1)] = (5));

} else {
var statearr_56323_59509 = state_56307__$1;
(statearr_56323_59509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56308 === (5))){
var state_56307__$1 = state_56307;
var statearr_56324_59511 = state_56307__$1;
(statearr_56324_59511[(2)] = null);

(statearr_56324_59511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56308 === (6))){
var state_56307__$1 = state_56307;
var statearr_56326_59512 = state_56307__$1;
(statearr_56326_59512[(2)] = null);

(statearr_56326_59512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56308 === (7))){
var inst_56303 = (state_56307[(2)]);
var state_56307__$1 = state_56307;
var statearr_56328_59513 = state_56307__$1;
(statearr_56328_59513[(2)] = inst_56303);

(statearr_56328_59513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__59488,c__55696__auto___59505,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async))
;
return ((function (__59488,switch__55476__auto__,c__55696__auto___59505,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0 = (function (){
var statearr_56334 = [null,null,null,null,null,null,null];
(statearr_56334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__);

(statearr_56334[(1)] = (1));

return statearr_56334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1 = (function (state_56307){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56307);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56339){var ex__55480__auto__ = e56339;
var statearr_56340_59518 = state_56307;
(statearr_56340_59518[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56307[(4)]))){
var statearr_56348_59519 = state_56307;
(statearr_56348_59519[(1)] = cljs.core.first((state_56307[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59520 = state_56307;
state_56307 = G__59520;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = function(state_56307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1.call(this,state_56307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__;
})()
;})(__59488,switch__55476__auto__,c__55696__auto___59505,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async))
})();
var state__55698__auto__ = (function (){var statearr_56357 = f__55697__auto__();
(statearr_56357[(6)] = c__55696__auto___59505);

return statearr_56357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
});})(__59488,c__55696__auto___59505,G__56265_59490,G__56265_59491__$1,n__4613__auto___59487,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56265_59491__$1)].join('')));

}

var G__59522 = (__59488 + (1));
__59488 = G__59522;
continue;
} else {
}
break;
}

var c__55696__auto___59523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_56404){
var state_val_56406 = (state_56404[(1)]);
if((state_val_56406 === (7))){
var inst_56399 = (state_56404[(2)]);
var state_56404__$1 = state_56404;
var statearr_56415_59524 = state_56404__$1;
(statearr_56415_59524[(2)] = inst_56399);

(statearr_56415_59524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (1))){
var state_56404__$1 = state_56404;
var statearr_56422_59525 = state_56404__$1;
(statearr_56422_59525[(2)] = null);

(statearr_56422_59525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (4))){
var inst_56365 = (state_56404[(7)]);
var inst_56365__$1 = (state_56404[(2)]);
var inst_56376 = (inst_56365__$1 == null);
var state_56404__$1 = (function (){var statearr_56429 = state_56404;
(statearr_56429[(7)] = inst_56365__$1);

return statearr_56429;
})();
if(cljs.core.truth_(inst_56376)){
var statearr_56430_59526 = state_56404__$1;
(statearr_56430_59526[(1)] = (5));

} else {
var statearr_56436_59527 = state_56404__$1;
(statearr_56436_59527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (6))){
var inst_56365 = (state_56404[(7)]);
var inst_56381 = (state_56404[(8)]);
var inst_56381__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_56388 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_56390 = [inst_56365,inst_56381__$1];
var inst_56391 = (new cljs.core.PersistentVector(null,2,(5),inst_56388,inst_56390,null));
var state_56404__$1 = (function (){var statearr_56443 = state_56404;
(statearr_56443[(8)] = inst_56381__$1);

return statearr_56443;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56404__$1,(8),jobs,inst_56391);
} else {
if((state_val_56406 === (3))){
var inst_56401 = (state_56404[(2)]);
var state_56404__$1 = state_56404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56404__$1,inst_56401);
} else {
if((state_val_56406 === (2))){
var state_56404__$1 = state_56404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56404__$1,(4),from);
} else {
if((state_val_56406 === (9))){
var inst_56396 = (state_56404[(2)]);
var state_56404__$1 = (function (){var statearr_56456 = state_56404;
(statearr_56456[(9)] = inst_56396);

return statearr_56456;
})();
var statearr_56457_59534 = state_56404__$1;
(statearr_56457_59534[(2)] = null);

(statearr_56457_59534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (5))){
var inst_56378 = cljs.core.async.close_BANG_(jobs);
var state_56404__$1 = state_56404;
var statearr_56462_59535 = state_56404__$1;
(statearr_56462_59535[(2)] = inst_56378);

(statearr_56462_59535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56406 === (8))){
var inst_56381 = (state_56404[(8)]);
var inst_56393 = (state_56404[(2)]);
var state_56404__$1 = (function (){var statearr_56467 = state_56404;
(statearr_56467[(10)] = inst_56393);

return statearr_56467;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56404__$1,(9),results,inst_56381);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0 = (function (){
var statearr_56471 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56471[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__);

(statearr_56471[(1)] = (1));

return statearr_56471;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1 = (function (state_56404){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56404);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56477){var ex__55480__auto__ = e56477;
var statearr_56478_59536 = state_56404;
(statearr_56478_59536[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56404[(4)]))){
var statearr_56480_59537 = state_56404;
(statearr_56480_59537[(1)] = cljs.core.first((state_56404[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59538 = state_56404;
state_56404 = G__59538;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = function(state_56404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1.call(this,state_56404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_56483 = f__55697__auto__();
(statearr_56483[(6)] = c__55696__auto___59523);

return statearr_56483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


var c__55696__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_56540){
var state_val_56545 = (state_56540[(1)]);
if((state_val_56545 === (7))){
var inst_56531 = (state_56540[(2)]);
var state_56540__$1 = state_56540;
var statearr_56551_59540 = state_56540__$1;
(statearr_56551_59540[(2)] = inst_56531);

(statearr_56551_59540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (20))){
var state_56540__$1 = state_56540;
var statearr_56556_59541 = state_56540__$1;
(statearr_56556_59541[(2)] = null);

(statearr_56556_59541[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (1))){
var state_56540__$1 = state_56540;
var statearr_56561_59545 = state_56540__$1;
(statearr_56561_59545[(2)] = null);

(statearr_56561_59545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (4))){
var inst_56486 = (state_56540[(7)]);
var inst_56486__$1 = (state_56540[(2)]);
var inst_56491 = (inst_56486__$1 == null);
var state_56540__$1 = (function (){var statearr_56562 = state_56540;
(statearr_56562[(7)] = inst_56486__$1);

return statearr_56562;
})();
if(cljs.core.truth_(inst_56491)){
var statearr_56563_59546 = state_56540__$1;
(statearr_56563_59546[(1)] = (5));

} else {
var statearr_56566_59547 = state_56540__$1;
(statearr_56566_59547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (15))){
var inst_56509 = (state_56540[(8)]);
var state_56540__$1 = state_56540;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56540__$1,(18),to,inst_56509);
} else {
if((state_val_56545 === (21))){
var inst_56526 = (state_56540[(2)]);
var state_56540__$1 = state_56540;
var statearr_56567_59549 = state_56540__$1;
(statearr_56567_59549[(2)] = inst_56526);

(statearr_56567_59549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (13))){
var inst_56528 = (state_56540[(2)]);
var state_56540__$1 = (function (){var statearr_56574 = state_56540;
(statearr_56574[(9)] = inst_56528);

return statearr_56574;
})();
var statearr_56576_59552 = state_56540__$1;
(statearr_56576_59552[(2)] = null);

(statearr_56576_59552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (6))){
var inst_56486 = (state_56540[(7)]);
var state_56540__$1 = state_56540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56540__$1,(11),inst_56486);
} else {
if((state_val_56545 === (17))){
var inst_56521 = (state_56540[(2)]);
var state_56540__$1 = state_56540;
if(cljs.core.truth_(inst_56521)){
var statearr_56582_59555 = state_56540__$1;
(statearr_56582_59555[(1)] = (19));

} else {
var statearr_56583_59556 = state_56540__$1;
(statearr_56583_59556[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (3))){
var inst_56533 = (state_56540[(2)]);
var state_56540__$1 = state_56540;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56540__$1,inst_56533);
} else {
if((state_val_56545 === (12))){
var inst_56501 = (state_56540[(10)]);
var state_56540__$1 = state_56540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56540__$1,(14),inst_56501);
} else {
if((state_val_56545 === (2))){
var state_56540__$1 = state_56540;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56540__$1,(4),results);
} else {
if((state_val_56545 === (19))){
var state_56540__$1 = state_56540;
var statearr_56590_59560 = state_56540__$1;
(statearr_56590_59560[(2)] = null);

(statearr_56590_59560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (11))){
var inst_56501 = (state_56540[(2)]);
var state_56540__$1 = (function (){var statearr_56595 = state_56540;
(statearr_56595[(10)] = inst_56501);

return statearr_56595;
})();
var statearr_56596_59561 = state_56540__$1;
(statearr_56596_59561[(2)] = null);

(statearr_56596_59561[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (9))){
var state_56540__$1 = state_56540;
var statearr_56599_59562 = state_56540__$1;
(statearr_56599_59562[(2)] = null);

(statearr_56599_59562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (5))){
var state_56540__$1 = state_56540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56600_59565 = state_56540__$1;
(statearr_56600_59565[(1)] = (8));

} else {
var statearr_56601_59567 = state_56540__$1;
(statearr_56601_59567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (14))){
var inst_56509 = (state_56540[(8)]);
var inst_56509__$1 = (state_56540[(2)]);
var inst_56514 = (inst_56509__$1 == null);
var inst_56515 = cljs.core.not(inst_56514);
var state_56540__$1 = (function (){var statearr_56602 = state_56540;
(statearr_56602[(8)] = inst_56509__$1);

return statearr_56602;
})();
if(inst_56515){
var statearr_56603_59572 = state_56540__$1;
(statearr_56603_59572[(1)] = (15));

} else {
var statearr_56606_59576 = state_56540__$1;
(statearr_56606_59576[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (16))){
var state_56540__$1 = state_56540;
var statearr_56611_59577 = state_56540__$1;
(statearr_56611_59577[(2)] = false);

(statearr_56611_59577[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (10))){
var inst_56497 = (state_56540[(2)]);
var state_56540__$1 = state_56540;
var statearr_56612_59581 = state_56540__$1;
(statearr_56612_59581[(2)] = inst_56497);

(statearr_56612_59581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (18))){
var inst_56518 = (state_56540[(2)]);
var state_56540__$1 = state_56540;
var statearr_56617_59582 = state_56540__$1;
(statearr_56617_59582[(2)] = inst_56518);

(statearr_56617_59582[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56545 === (8))){
var inst_56494 = cljs.core.async.close_BANG_(to);
var state_56540__$1 = state_56540;
var statearr_56618_59586 = state_56540__$1;
(statearr_56618_59586[(2)] = inst_56494);

(statearr_56618_59586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0 = (function (){
var statearr_56624 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56624[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__);

(statearr_56624[(1)] = (1));

return statearr_56624;
});
var cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1 = (function (state_56540){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56540);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56632){var ex__55480__auto__ = e56632;
var statearr_56633_59593 = state_56540;
(statearr_56633_59593[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56540[(4)]))){
var statearr_56634_59594 = state_56540;
(statearr_56634_59594[(1)] = cljs.core.first((state_56540[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59595 = state_56540;
state_56540 = G__59595;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__ = function(state_56540){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1.call(this,state_56540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__55477__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_56644 = f__55697__auto__();
(statearr_56644[(6)] = c__55696__auto__);

return statearr_56644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));

return c__55696__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__56658 = arguments.length;
switch (G__56658) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__56690 = arguments.length;
switch (G__56690) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__56708 = arguments.length;
switch (G__56708) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__55696__auto___59624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_56750){
var state_val_56751 = (state_56750[(1)]);
if((state_val_56751 === (7))){
var inst_56742 = (state_56750[(2)]);
var state_56750__$1 = state_56750;
var statearr_56756_59630 = state_56750__$1;
(statearr_56756_59630[(2)] = inst_56742);

(statearr_56756_59630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (1))){
var state_56750__$1 = state_56750;
var statearr_56765_59631 = state_56750__$1;
(statearr_56765_59631[(2)] = null);

(statearr_56765_59631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (4))){
var inst_56721 = (state_56750[(7)]);
var inst_56721__$1 = (state_56750[(2)]);
var inst_56724 = (inst_56721__$1 == null);
var state_56750__$1 = (function (){var statearr_56766 = state_56750;
(statearr_56766[(7)] = inst_56721__$1);

return statearr_56766;
})();
if(cljs.core.truth_(inst_56724)){
var statearr_56767_59632 = state_56750__$1;
(statearr_56767_59632[(1)] = (5));

} else {
var statearr_56768_59633 = state_56750__$1;
(statearr_56768_59633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (13))){
var state_56750__$1 = state_56750;
var statearr_56770_59635 = state_56750__$1;
(statearr_56770_59635[(2)] = null);

(statearr_56770_59635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (6))){
var inst_56721 = (state_56750[(7)]);
var inst_56729 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_56721) : p.call(null,inst_56721));
var state_56750__$1 = state_56750;
if(cljs.core.truth_(inst_56729)){
var statearr_56779_59636 = state_56750__$1;
(statearr_56779_59636[(1)] = (9));

} else {
var statearr_56780_59637 = state_56750__$1;
(statearr_56780_59637[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (3))){
var inst_56744 = (state_56750[(2)]);
var state_56750__$1 = state_56750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56750__$1,inst_56744);
} else {
if((state_val_56751 === (12))){
var state_56750__$1 = state_56750;
var statearr_56787_59638 = state_56750__$1;
(statearr_56787_59638[(2)] = null);

(statearr_56787_59638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (2))){
var state_56750__$1 = state_56750;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56750__$1,(4),ch);
} else {
if((state_val_56751 === (11))){
var inst_56721 = (state_56750[(7)]);
var inst_56733 = (state_56750[(2)]);
var state_56750__$1 = state_56750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56750__$1,(8),inst_56733,inst_56721);
} else {
if((state_val_56751 === (9))){
var state_56750__$1 = state_56750;
var statearr_56800_59639 = state_56750__$1;
(statearr_56800_59639[(2)] = tc);

(statearr_56800_59639[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (5))){
var inst_56726 = cljs.core.async.close_BANG_(tc);
var inst_56727 = cljs.core.async.close_BANG_(fc);
var state_56750__$1 = (function (){var statearr_56803 = state_56750;
(statearr_56803[(8)] = inst_56726);

return statearr_56803;
})();
var statearr_56805_59641 = state_56750__$1;
(statearr_56805_59641[(2)] = inst_56727);

(statearr_56805_59641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (14))){
var inst_56740 = (state_56750[(2)]);
var state_56750__$1 = state_56750;
var statearr_56810_59642 = state_56750__$1;
(statearr_56810_59642[(2)] = inst_56740);

(statearr_56810_59642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (10))){
var state_56750__$1 = state_56750;
var statearr_56826_59643 = state_56750__$1;
(statearr_56826_59643[(2)] = fc);

(statearr_56826_59643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56751 === (8))){
var inst_56735 = (state_56750[(2)]);
var state_56750__$1 = state_56750;
if(cljs.core.truth_(inst_56735)){
var statearr_56828_59644 = state_56750__$1;
(statearr_56828_59644[(1)] = (12));

} else {
var statearr_56829_59645 = state_56750__$1;
(statearr_56829_59645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_56834 = [null,null,null,null,null,null,null,null,null];
(statearr_56834[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_56834[(1)] = (1));

return statearr_56834;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_56750){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56750);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56840){var ex__55480__auto__ = e56840;
var statearr_56841_59646 = state_56750;
(statearr_56841_59646[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56750[(4)]))){
var statearr_56842_59647 = state_56750;
(statearr_56842_59647[(1)] = cljs.core.first((state_56750[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59648 = state_56750;
state_56750 = G__59648;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_56750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_56750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_56847 = f__55697__auto__();
(statearr_56847[(6)] = c__55696__auto___59624);

return statearr_56847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__55696__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_56891){
var state_val_56892 = (state_56891[(1)]);
if((state_val_56892 === (7))){
var inst_56887 = (state_56891[(2)]);
var state_56891__$1 = state_56891;
var statearr_56902_59651 = state_56891__$1;
(statearr_56902_59651[(2)] = inst_56887);

(statearr_56902_59651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56892 === (1))){
var inst_56861 = init;
var inst_56866 = inst_56861;
var state_56891__$1 = (function (){var statearr_56909 = state_56891;
(statearr_56909[(7)] = inst_56866);

return statearr_56909;
})();
var statearr_56910_59652 = state_56891__$1;
(statearr_56910_59652[(2)] = null);

(statearr_56910_59652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56892 === (4))){
var inst_56869 = (state_56891[(8)]);
var inst_56869__$1 = (state_56891[(2)]);
var inst_56871 = (inst_56869__$1 == null);
var state_56891__$1 = (function (){var statearr_56912 = state_56891;
(statearr_56912[(8)] = inst_56869__$1);

return statearr_56912;
})();
if(cljs.core.truth_(inst_56871)){
var statearr_56913_59654 = state_56891__$1;
(statearr_56913_59654[(1)] = (5));

} else {
var statearr_56920_59655 = state_56891__$1;
(statearr_56920_59655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56892 === (6))){
var inst_56869 = (state_56891[(8)]);
var inst_56878 = (state_56891[(9)]);
var inst_56866 = (state_56891[(7)]);
var inst_56878__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_56866,inst_56869) : f.call(null,inst_56866,inst_56869));
var inst_56879 = cljs.core.reduced_QMARK_(inst_56878__$1);
var state_56891__$1 = (function (){var statearr_56921 = state_56891;
(statearr_56921[(9)] = inst_56878__$1);

return statearr_56921;
})();
if(inst_56879){
var statearr_56922_59659 = state_56891__$1;
(statearr_56922_59659[(1)] = (8));

} else {
var statearr_56927_59660 = state_56891__$1;
(statearr_56927_59660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56892 === (3))){
var inst_56889 = (state_56891[(2)]);
var state_56891__$1 = state_56891;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56891__$1,inst_56889);
} else {
if((state_val_56892 === (2))){
var state_56891__$1 = state_56891;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56891__$1,(4),ch);
} else {
if((state_val_56892 === (9))){
var inst_56878 = (state_56891[(9)]);
var inst_56866 = inst_56878;
var state_56891__$1 = (function (){var statearr_56937 = state_56891;
(statearr_56937[(7)] = inst_56866);

return statearr_56937;
})();
var statearr_56938_59665 = state_56891__$1;
(statearr_56938_59665[(2)] = null);

(statearr_56938_59665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56892 === (5))){
var inst_56866 = (state_56891[(7)]);
var state_56891__$1 = state_56891;
var statearr_56941_59669 = state_56891__$1;
(statearr_56941_59669[(2)] = inst_56866);

(statearr_56941_59669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56892 === (10))){
var inst_56885 = (state_56891[(2)]);
var state_56891__$1 = state_56891;
var statearr_56944_59673 = state_56891__$1;
(statearr_56944_59673[(2)] = inst_56885);

(statearr_56944_59673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56892 === (8))){
var inst_56878 = (state_56891[(9)]);
var inst_56881 = cljs.core.deref(inst_56878);
var state_56891__$1 = state_56891;
var statearr_56945_59675 = state_56891__$1;
(statearr_56945_59675[(2)] = inst_56881);

(statearr_56945_59675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__55477__auto__ = null;
var cljs$core$async$reduce_$_state_machine__55477__auto____0 = (function (){
var statearr_56952 = [null,null,null,null,null,null,null,null,null,null];
(statearr_56952[(0)] = cljs$core$async$reduce_$_state_machine__55477__auto__);

(statearr_56952[(1)] = (1));

return statearr_56952;
});
var cljs$core$async$reduce_$_state_machine__55477__auto____1 = (function (state_56891){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56891);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56953){var ex__55480__auto__ = e56953;
var statearr_56954_59678 = state_56891;
(statearr_56954_59678[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56891[(4)]))){
var statearr_56955_59679 = state_56891;
(statearr_56955_59679[(1)] = cljs.core.first((state_56891[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59680 = state_56891;
state_56891 = G__59680;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__55477__auto__ = function(state_56891){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__55477__auto____1.call(this,state_56891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__55477__auto____0;
cljs$core$async$reduce_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__55477__auto____1;
return cljs$core$async$reduce_$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_56956 = f__55697__auto__();
(statearr_56956[(6)] = c__55696__auto__);

return statearr_56956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));

return c__55696__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__55696__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_56969){
var state_val_56970 = (state_56969[(1)]);
if((state_val_56970 === (1))){
var inst_56961 = cljs.core.async.reduce(f__$1,init,ch);
var state_56969__$1 = state_56969;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56969__$1,(2),inst_56961);
} else {
if((state_val_56970 === (2))){
var inst_56963 = (state_56969[(2)]);
var inst_56964 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_56963) : f__$1.call(null,inst_56963));
var state_56969__$1 = state_56969;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56969__$1,inst_56964);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__55477__auto__ = null;
var cljs$core$async$transduce_$_state_machine__55477__auto____0 = (function (){
var statearr_56977 = [null,null,null,null,null,null,null];
(statearr_56977[(0)] = cljs$core$async$transduce_$_state_machine__55477__auto__);

(statearr_56977[(1)] = (1));

return statearr_56977;
});
var cljs$core$async$transduce_$_state_machine__55477__auto____1 = (function (state_56969){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_56969);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e56978){var ex__55480__auto__ = e56978;
var statearr_56979_59684 = state_56969;
(statearr_56979_59684[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_56969[(4)]))){
var statearr_56980_59688 = state_56969;
(statearr_56980_59688[(1)] = cljs.core.first((state_56969[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59689 = state_56969;
state_56969 = G__59689;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__55477__auto__ = function(state_56969){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__55477__auto____1.call(this,state_56969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__55477__auto____0;
cljs$core$async$transduce_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__55477__auto____1;
return cljs$core$async$transduce_$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_56990 = f__55697__auto__();
(statearr_56990[(6)] = c__55696__auto__);

return statearr_56990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));

return c__55696__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__57002 = arguments.length;
switch (G__57002) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__55696__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_57053){
var state_val_57054 = (state_57053[(1)]);
if((state_val_57054 === (7))){
var inst_57026 = (state_57053[(2)]);
var state_57053__$1 = state_57053;
var statearr_57064_59695 = state_57053__$1;
(statearr_57064_59695[(2)] = inst_57026);

(statearr_57064_59695[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (1))){
var inst_57020 = cljs.core.seq(coll);
var inst_57021 = inst_57020;
var state_57053__$1 = (function (){var statearr_57068 = state_57053;
(statearr_57068[(7)] = inst_57021);

return statearr_57068;
})();
var statearr_57069_59703 = state_57053__$1;
(statearr_57069_59703[(2)] = null);

(statearr_57069_59703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (4))){
var inst_57021 = (state_57053[(7)]);
var inst_57024 = cljs.core.first(inst_57021);
var state_57053__$1 = state_57053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57053__$1,(7),ch,inst_57024);
} else {
if((state_val_57054 === (13))){
var inst_57044 = (state_57053[(2)]);
var state_57053__$1 = state_57053;
var statearr_57070_59710 = state_57053__$1;
(statearr_57070_59710[(2)] = inst_57044);

(statearr_57070_59710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (6))){
var inst_57029 = (state_57053[(2)]);
var state_57053__$1 = state_57053;
if(cljs.core.truth_(inst_57029)){
var statearr_57071_59711 = state_57053__$1;
(statearr_57071_59711[(1)] = (8));

} else {
var statearr_57072_59712 = state_57053__$1;
(statearr_57072_59712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (3))){
var inst_57048 = (state_57053[(2)]);
var state_57053__$1 = state_57053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57053__$1,inst_57048);
} else {
if((state_val_57054 === (12))){
var state_57053__$1 = state_57053;
var statearr_57075_59713 = state_57053__$1;
(statearr_57075_59713[(2)] = null);

(statearr_57075_59713[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (2))){
var inst_57021 = (state_57053[(7)]);
var state_57053__$1 = state_57053;
if(cljs.core.truth_(inst_57021)){
var statearr_57076_59716 = state_57053__$1;
(statearr_57076_59716[(1)] = (4));

} else {
var statearr_57077_59717 = state_57053__$1;
(statearr_57077_59717[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (11))){
var inst_57041 = cljs.core.async.close_BANG_(ch);
var state_57053__$1 = state_57053;
var statearr_57078_59718 = state_57053__$1;
(statearr_57078_59718[(2)] = inst_57041);

(statearr_57078_59718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (9))){
var state_57053__$1 = state_57053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57082_59719 = state_57053__$1;
(statearr_57082_59719[(1)] = (11));

} else {
var statearr_57083_59720 = state_57053__$1;
(statearr_57083_59720[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (5))){
var inst_57021 = (state_57053[(7)]);
var state_57053__$1 = state_57053;
var statearr_57084_59721 = state_57053__$1;
(statearr_57084_59721[(2)] = inst_57021);

(statearr_57084_59721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (10))){
var inst_57046 = (state_57053[(2)]);
var state_57053__$1 = state_57053;
var statearr_57085_59722 = state_57053__$1;
(statearr_57085_59722[(2)] = inst_57046);

(statearr_57085_59722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57054 === (8))){
var inst_57021 = (state_57053[(7)]);
var inst_57031 = cljs.core.next(inst_57021);
var inst_57021__$1 = inst_57031;
var state_57053__$1 = (function (){var statearr_57086 = state_57053;
(statearr_57086[(7)] = inst_57021__$1);

return statearr_57086;
})();
var statearr_57087_59723 = state_57053__$1;
(statearr_57087_59723[(2)] = null);

(statearr_57087_59723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_57092 = [null,null,null,null,null,null,null,null];
(statearr_57092[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_57092[(1)] = (1));

return statearr_57092;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_57053){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_57053);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e57093){var ex__55480__auto__ = e57093;
var statearr_57094_59734 = state_57053;
(statearr_57094_59734[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_57053[(4)]))){
var statearr_57096_59735 = state_57053;
(statearr_57096_59735[(1)] = cljs.core.first((state_57053[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59740 = state_57053;
state_57053 = G__59740;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_57053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_57053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_57097 = f__55697__auto__();
(statearr_57097[(6)] = c__55696__auto__);

return statearr_57097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));

return c__55696__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__57099 = arguments.length;
switch (G__57099) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_59743 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_59743(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_59750 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_59750(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_59754 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_59754(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_59757 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_59757(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57164 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57164 = (function (ch,cs,meta57165){
this.ch = ch;
this.cs = cs;
this.meta57165 = meta57165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57166,meta57165__$1){
var self__ = this;
var _57166__$1 = this;
return (new cljs.core.async.t_cljs$core$async57164(self__.ch,self__.cs,meta57165__$1));
}));

(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57166){
var self__ = this;
var _57166__$1 = this;
return self__.meta57165;
}));

(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57164.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57165","meta57165",188155248,null)], null);
}));

(cljs.core.async.t_cljs$core$async57164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57164");

(cljs.core.async.t_cljs$core$async57164.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57164.
 */
cljs.core.async.__GT_t_cljs$core$async57164 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57164(ch__$1,cs__$1,meta57165){
return (new cljs.core.async.t_cljs$core$async57164(ch__$1,cs__$1,meta57165));
});

}

return (new cljs.core.async.t_cljs$core$async57164(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__55696__auto___59769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_57412){
var state_val_57413 = (state_57412[(1)]);
if((state_val_57413 === (7))){
var inst_57404 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57422_59770 = state_57412__$1;
(statearr_57422_59770[(2)] = inst_57404);

(statearr_57422_59770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (20))){
var inst_57269 = (state_57412[(7)]);
var inst_57288 = cljs.core.first(inst_57269);
var inst_57289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57288,(0),null);
var inst_57290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57288,(1),null);
var state_57412__$1 = (function (){var statearr_57435 = state_57412;
(statearr_57435[(8)] = inst_57289);

return statearr_57435;
})();
if(cljs.core.truth_(inst_57290)){
var statearr_57440_59771 = state_57412__$1;
(statearr_57440_59771[(1)] = (22));

} else {
var statearr_57446_59772 = state_57412__$1;
(statearr_57446_59772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (27))){
var inst_57331 = (state_57412[(9)]);
var inst_57333 = (state_57412[(10)]);
var inst_57207 = (state_57412[(11)]);
var inst_57342 = (state_57412[(12)]);
var inst_57342__$1 = cljs.core._nth(inst_57331,inst_57333);
var inst_57343 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57342__$1,inst_57207,done);
var state_57412__$1 = (function (){var statearr_57447 = state_57412;
(statearr_57447[(12)] = inst_57342__$1);

return statearr_57447;
})();
if(cljs.core.truth_(inst_57343)){
var statearr_57448_59773 = state_57412__$1;
(statearr_57448_59773[(1)] = (30));

} else {
var statearr_57449_59774 = state_57412__$1;
(statearr_57449_59774[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (1))){
var state_57412__$1 = state_57412;
var statearr_57454_59775 = state_57412__$1;
(statearr_57454_59775[(2)] = null);

(statearr_57454_59775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (24))){
var inst_57269 = (state_57412[(7)]);
var inst_57302 = (state_57412[(2)]);
var inst_57303 = cljs.core.next(inst_57269);
var inst_57222 = inst_57303;
var inst_57223 = null;
var inst_57224 = (0);
var inst_57225 = (0);
var state_57412__$1 = (function (){var statearr_57468 = state_57412;
(statearr_57468[(13)] = inst_57225);

(statearr_57468[(14)] = inst_57302);

(statearr_57468[(15)] = inst_57222);

(statearr_57468[(16)] = inst_57223);

(statearr_57468[(17)] = inst_57224);

return statearr_57468;
})();
var statearr_57477_59777 = state_57412__$1;
(statearr_57477_59777[(2)] = null);

(statearr_57477_59777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (39))){
var state_57412__$1 = state_57412;
var statearr_57488_59778 = state_57412__$1;
(statearr_57488_59778[(2)] = null);

(statearr_57488_59778[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (4))){
var inst_57207 = (state_57412[(11)]);
var inst_57207__$1 = (state_57412[(2)]);
var inst_57211 = (inst_57207__$1 == null);
var state_57412__$1 = (function (){var statearr_57496 = state_57412;
(statearr_57496[(11)] = inst_57207__$1);

return statearr_57496;
})();
if(cljs.core.truth_(inst_57211)){
var statearr_57502_59779 = state_57412__$1;
(statearr_57502_59779[(1)] = (5));

} else {
var statearr_57508_59780 = state_57412__$1;
(statearr_57508_59780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (15))){
var inst_57225 = (state_57412[(13)]);
var inst_57222 = (state_57412[(15)]);
var inst_57223 = (state_57412[(16)]);
var inst_57224 = (state_57412[(17)]);
var inst_57259 = (state_57412[(2)]);
var inst_57262 = (inst_57225 + (1));
var tmp57478 = inst_57222;
var tmp57479 = inst_57223;
var tmp57480 = inst_57224;
var inst_57222__$1 = tmp57478;
var inst_57223__$1 = tmp57479;
var inst_57224__$1 = tmp57480;
var inst_57225__$1 = inst_57262;
var state_57412__$1 = (function (){var statearr_57516 = state_57412;
(statearr_57516[(18)] = inst_57259);

(statearr_57516[(13)] = inst_57225__$1);

(statearr_57516[(15)] = inst_57222__$1);

(statearr_57516[(16)] = inst_57223__$1);

(statearr_57516[(17)] = inst_57224__$1);

return statearr_57516;
})();
var statearr_57517_59784 = state_57412__$1;
(statearr_57517_59784[(2)] = null);

(statearr_57517_59784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (21))){
var inst_57306 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57521_59785 = state_57412__$1;
(statearr_57521_59785[(2)] = inst_57306);

(statearr_57521_59785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (31))){
var inst_57342 = (state_57412[(12)]);
var inst_57347 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57342);
var state_57412__$1 = state_57412;
var statearr_57528_59790 = state_57412__$1;
(statearr_57528_59790[(2)] = inst_57347);

(statearr_57528_59790[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (32))){
var inst_57331 = (state_57412[(9)]);
var inst_57333 = (state_57412[(10)]);
var inst_57330 = (state_57412[(19)]);
var inst_57332 = (state_57412[(20)]);
var inst_57349 = (state_57412[(2)]);
var inst_57352 = (inst_57333 + (1));
var tmp57518 = inst_57331;
var tmp57519 = inst_57330;
var tmp57520 = inst_57332;
var inst_57330__$1 = tmp57519;
var inst_57331__$1 = tmp57518;
var inst_57332__$1 = tmp57520;
var inst_57333__$1 = inst_57352;
var state_57412__$1 = (function (){var statearr_57530 = state_57412;
(statearr_57530[(9)] = inst_57331__$1);

(statearr_57530[(10)] = inst_57333__$1);

(statearr_57530[(19)] = inst_57330__$1);

(statearr_57530[(21)] = inst_57349);

(statearr_57530[(20)] = inst_57332__$1);

return statearr_57530;
})();
var statearr_57533_59791 = state_57412__$1;
(statearr_57533_59791[(2)] = null);

(statearr_57533_59791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (40))){
var inst_57373 = (state_57412[(22)]);
var inst_57378 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57373);
var state_57412__$1 = state_57412;
var statearr_57537_59792 = state_57412__$1;
(statearr_57537_59792[(2)] = inst_57378);

(statearr_57537_59792[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (33))){
var inst_57355 = (state_57412[(23)]);
var inst_57361 = cljs.core.chunked_seq_QMARK_(inst_57355);
var state_57412__$1 = state_57412;
if(inst_57361){
var statearr_57542_59794 = state_57412__$1;
(statearr_57542_59794[(1)] = (36));

} else {
var statearr_57543_59795 = state_57412__$1;
(statearr_57543_59795[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (13))){
var inst_57244 = (state_57412[(24)]);
var inst_57256 = cljs.core.async.close_BANG_(inst_57244);
var state_57412__$1 = state_57412;
var statearr_57544_59797 = state_57412__$1;
(statearr_57544_59797[(2)] = inst_57256);

(statearr_57544_59797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (22))){
var inst_57289 = (state_57412[(8)]);
var inst_57299 = cljs.core.async.close_BANG_(inst_57289);
var state_57412__$1 = state_57412;
var statearr_57550_59798 = state_57412__$1;
(statearr_57550_59798[(2)] = inst_57299);

(statearr_57550_59798[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (36))){
var inst_57355 = (state_57412[(23)]);
var inst_57364 = cljs.core.chunk_first(inst_57355);
var inst_57365 = cljs.core.chunk_rest(inst_57355);
var inst_57366 = cljs.core.count(inst_57364);
var inst_57330 = inst_57365;
var inst_57331 = inst_57364;
var inst_57332 = inst_57366;
var inst_57333 = (0);
var state_57412__$1 = (function (){var statearr_57557 = state_57412;
(statearr_57557[(9)] = inst_57331);

(statearr_57557[(10)] = inst_57333);

(statearr_57557[(19)] = inst_57330);

(statearr_57557[(20)] = inst_57332);

return statearr_57557;
})();
var statearr_57563_59799 = state_57412__$1;
(statearr_57563_59799[(2)] = null);

(statearr_57563_59799[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (41))){
var inst_57355 = (state_57412[(23)]);
var inst_57380 = (state_57412[(2)]);
var inst_57384 = cljs.core.next(inst_57355);
var inst_57330 = inst_57384;
var inst_57331 = null;
var inst_57332 = (0);
var inst_57333 = (0);
var state_57412__$1 = (function (){var statearr_57571 = state_57412;
(statearr_57571[(9)] = inst_57331);

(statearr_57571[(25)] = inst_57380);

(statearr_57571[(10)] = inst_57333);

(statearr_57571[(19)] = inst_57330);

(statearr_57571[(20)] = inst_57332);

return statearr_57571;
})();
var statearr_57573_59800 = state_57412__$1;
(statearr_57573_59800[(2)] = null);

(statearr_57573_59800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (43))){
var state_57412__$1 = state_57412;
var statearr_57578_59801 = state_57412__$1;
(statearr_57578_59801[(2)] = null);

(statearr_57578_59801[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (29))){
var inst_57392 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57583_59803 = state_57412__$1;
(statearr_57583_59803[(2)] = inst_57392);

(statearr_57583_59803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (44))){
var inst_57401 = (state_57412[(2)]);
var state_57412__$1 = (function (){var statearr_57585 = state_57412;
(statearr_57585[(26)] = inst_57401);

return statearr_57585;
})();
var statearr_57587_59805 = state_57412__$1;
(statearr_57587_59805[(2)] = null);

(statearr_57587_59805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (6))){
var inst_57316 = (state_57412[(27)]);
var inst_57315 = cljs.core.deref(cs);
var inst_57316__$1 = cljs.core.keys(inst_57315);
var inst_57317 = cljs.core.count(inst_57316__$1);
var inst_57318 = cljs.core.reset_BANG_(dctr,inst_57317);
var inst_57326 = cljs.core.seq(inst_57316__$1);
var inst_57330 = inst_57326;
var inst_57331 = null;
var inst_57332 = (0);
var inst_57333 = (0);
var state_57412__$1 = (function (){var statearr_57592 = state_57412;
(statearr_57592[(9)] = inst_57331);

(statearr_57592[(28)] = inst_57318);

(statearr_57592[(27)] = inst_57316__$1);

(statearr_57592[(10)] = inst_57333);

(statearr_57592[(19)] = inst_57330);

(statearr_57592[(20)] = inst_57332);

return statearr_57592;
})();
var statearr_57593_59807 = state_57412__$1;
(statearr_57593_59807[(2)] = null);

(statearr_57593_59807[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (28))){
var inst_57355 = (state_57412[(23)]);
var inst_57330 = (state_57412[(19)]);
var inst_57355__$1 = cljs.core.seq(inst_57330);
var state_57412__$1 = (function (){var statearr_57594 = state_57412;
(statearr_57594[(23)] = inst_57355__$1);

return statearr_57594;
})();
if(inst_57355__$1){
var statearr_57595_59811 = state_57412__$1;
(statearr_57595_59811[(1)] = (33));

} else {
var statearr_57596_59812 = state_57412__$1;
(statearr_57596_59812[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (25))){
var inst_57333 = (state_57412[(10)]);
var inst_57332 = (state_57412[(20)]);
var inst_57338 = (inst_57333 < inst_57332);
var inst_57340 = inst_57338;
var state_57412__$1 = state_57412;
if(cljs.core.truth_(inst_57340)){
var statearr_57597_59814 = state_57412__$1;
(statearr_57597_59814[(1)] = (27));

} else {
var statearr_57599_59815 = state_57412__$1;
(statearr_57599_59815[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (34))){
var state_57412__$1 = state_57412;
var statearr_57600_59816 = state_57412__$1;
(statearr_57600_59816[(2)] = null);

(statearr_57600_59816[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (17))){
var state_57412__$1 = state_57412;
var statearr_57602_59817 = state_57412__$1;
(statearr_57602_59817[(2)] = null);

(statearr_57602_59817[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (3))){
var inst_57406 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57412__$1,inst_57406);
} else {
if((state_val_57413 === (12))){
var inst_57311 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57605_59818 = state_57412__$1;
(statearr_57605_59818[(2)] = inst_57311);

(statearr_57605_59818[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (2))){
var state_57412__$1 = state_57412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57412__$1,(4),ch);
} else {
if((state_val_57413 === (23))){
var state_57412__$1 = state_57412;
var statearr_57606_59819 = state_57412__$1;
(statearr_57606_59819[(2)] = null);

(statearr_57606_59819[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (35))){
var inst_57390 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57608_59820 = state_57412__$1;
(statearr_57608_59820[(2)] = inst_57390);

(statearr_57608_59820[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (19))){
var inst_57269 = (state_57412[(7)]);
var inst_57277 = cljs.core.chunk_first(inst_57269);
var inst_57278 = cljs.core.chunk_rest(inst_57269);
var inst_57279 = cljs.core.count(inst_57277);
var inst_57222 = inst_57278;
var inst_57223 = inst_57277;
var inst_57224 = inst_57279;
var inst_57225 = (0);
var state_57412__$1 = (function (){var statearr_57610 = state_57412;
(statearr_57610[(13)] = inst_57225);

(statearr_57610[(15)] = inst_57222);

(statearr_57610[(16)] = inst_57223);

(statearr_57610[(17)] = inst_57224);

return statearr_57610;
})();
var statearr_57611_59825 = state_57412__$1;
(statearr_57611_59825[(2)] = null);

(statearr_57611_59825[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (11))){
var inst_57222 = (state_57412[(15)]);
var inst_57269 = (state_57412[(7)]);
var inst_57269__$1 = cljs.core.seq(inst_57222);
var state_57412__$1 = (function (){var statearr_57613 = state_57412;
(statearr_57613[(7)] = inst_57269__$1);

return statearr_57613;
})();
if(inst_57269__$1){
var statearr_57614_59826 = state_57412__$1;
(statearr_57614_59826[(1)] = (16));

} else {
var statearr_57615_59827 = state_57412__$1;
(statearr_57615_59827[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (9))){
var inst_57313 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57618_59830 = state_57412__$1;
(statearr_57618_59830[(2)] = inst_57313);

(statearr_57618_59830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (5))){
var inst_57219 = cljs.core.deref(cs);
var inst_57220 = cljs.core.seq(inst_57219);
var inst_57222 = inst_57220;
var inst_57223 = null;
var inst_57224 = (0);
var inst_57225 = (0);
var state_57412__$1 = (function (){var statearr_57622 = state_57412;
(statearr_57622[(13)] = inst_57225);

(statearr_57622[(15)] = inst_57222);

(statearr_57622[(16)] = inst_57223);

(statearr_57622[(17)] = inst_57224);

return statearr_57622;
})();
var statearr_57623_59832 = state_57412__$1;
(statearr_57623_59832[(2)] = null);

(statearr_57623_59832[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (14))){
var state_57412__$1 = state_57412;
var statearr_57624_59833 = state_57412__$1;
(statearr_57624_59833[(2)] = null);

(statearr_57624_59833[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (45))){
var inst_57398 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57625_59834 = state_57412__$1;
(statearr_57625_59834[(2)] = inst_57398);

(statearr_57625_59834[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (26))){
var inst_57316 = (state_57412[(27)]);
var inst_57394 = (state_57412[(2)]);
var inst_57395 = cljs.core.seq(inst_57316);
var state_57412__$1 = (function (){var statearr_57626 = state_57412;
(statearr_57626[(29)] = inst_57394);

return statearr_57626;
})();
if(inst_57395){
var statearr_57627_59835 = state_57412__$1;
(statearr_57627_59835[(1)] = (42));

} else {
var statearr_57628_59836 = state_57412__$1;
(statearr_57628_59836[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (16))){
var inst_57269 = (state_57412[(7)]);
var inst_57275 = cljs.core.chunked_seq_QMARK_(inst_57269);
var state_57412__$1 = state_57412;
if(inst_57275){
var statearr_57629_59837 = state_57412__$1;
(statearr_57629_59837[(1)] = (19));

} else {
var statearr_57630_59838 = state_57412__$1;
(statearr_57630_59838[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (38))){
var inst_57387 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57631_59839 = state_57412__$1;
(statearr_57631_59839[(2)] = inst_57387);

(statearr_57631_59839[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (30))){
var state_57412__$1 = state_57412;
var statearr_57632_59840 = state_57412__$1;
(statearr_57632_59840[(2)] = null);

(statearr_57632_59840[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (10))){
var inst_57225 = (state_57412[(13)]);
var inst_57223 = (state_57412[(16)]);
var inst_57242 = cljs.core._nth(inst_57223,inst_57225);
var inst_57244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57242,(0),null);
var inst_57246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57242,(1),null);
var state_57412__$1 = (function (){var statearr_57638 = state_57412;
(statearr_57638[(24)] = inst_57244);

return statearr_57638;
})();
if(cljs.core.truth_(inst_57246)){
var statearr_57639_59843 = state_57412__$1;
(statearr_57639_59843[(1)] = (13));

} else {
var statearr_57641_59844 = state_57412__$1;
(statearr_57641_59844[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (18))){
var inst_57309 = (state_57412[(2)]);
var state_57412__$1 = state_57412;
var statearr_57645_59845 = state_57412__$1;
(statearr_57645_59845[(2)] = inst_57309);

(statearr_57645_59845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (42))){
var state_57412__$1 = state_57412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57412__$1,(45),dchan);
} else {
if((state_val_57413 === (37))){
var inst_57355 = (state_57412[(23)]);
var inst_57207 = (state_57412[(11)]);
var inst_57373 = (state_57412[(22)]);
var inst_57373__$1 = cljs.core.first(inst_57355);
var inst_57374 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57373__$1,inst_57207,done);
var state_57412__$1 = (function (){var statearr_57651 = state_57412;
(statearr_57651[(22)] = inst_57373__$1);

return statearr_57651;
})();
if(cljs.core.truth_(inst_57374)){
var statearr_57653_59846 = state_57412__$1;
(statearr_57653_59846[(1)] = (39));

} else {
var statearr_57658_59847 = state_57412__$1;
(statearr_57658_59847[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57413 === (8))){
var inst_57225 = (state_57412[(13)]);
var inst_57224 = (state_57412[(17)]);
var inst_57231 = (inst_57225 < inst_57224);
var inst_57232 = inst_57231;
var state_57412__$1 = state_57412;
if(cljs.core.truth_(inst_57232)){
var statearr_57660_59849 = state_57412__$1;
(statearr_57660_59849[(1)] = (10));

} else {
var statearr_57661_59850 = state_57412__$1;
(statearr_57661_59850[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__55477__auto__ = null;
var cljs$core$async$mult_$_state_machine__55477__auto____0 = (function (){
var statearr_57666 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57666[(0)] = cljs$core$async$mult_$_state_machine__55477__auto__);

(statearr_57666[(1)] = (1));

return statearr_57666;
});
var cljs$core$async$mult_$_state_machine__55477__auto____1 = (function (state_57412){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_57412);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e57668){var ex__55480__auto__ = e57668;
var statearr_57669_59855 = state_57412;
(statearr_57669_59855[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_57412[(4)]))){
var statearr_57674_59856 = state_57412;
(statearr_57674_59856[(1)] = cljs.core.first((state_57412[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59857 = state_57412;
state_57412 = G__59857;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__55477__auto__ = function(state_57412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__55477__auto____1.call(this,state_57412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__55477__auto____0;
cljs$core$async$mult_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__55477__auto____1;
return cljs$core$async$mult_$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_57676 = f__55697__auto__();
(statearr_57676[(6)] = c__55696__auto___59769);

return statearr_57676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__57678 = arguments.length;
switch (G__57678) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_59861 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_59861(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_59862 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_59862(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_59872 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_59872(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_59876 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_59876(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_59883 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_59883(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___59888 = arguments.length;
var i__4737__auto___59889 = (0);
while(true){
if((i__4737__auto___59889 < len__4736__auto___59888)){
args__4742__auto__.push((arguments[i__4737__auto___59889]));

var G__59890 = (i__4737__auto___59889 + (1));
i__4737__auto___59889 = G__59890;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57815){
var map__57816 = p__57815;
var map__57816__$1 = (((((!((map__57816 == null))))?(((((map__57816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__57816):map__57816);
var opts = map__57816__$1;
var statearr_57821_59891 = state;
(statearr_57821_59891[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57823_59892 = state;
(statearr_57823_59892[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57832_59893 = state;
(statearr_57832_59893[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57806){
var G__57807 = cljs.core.first(seq57806);
var seq57806__$1 = cljs.core.next(seq57806);
var G__57808 = cljs.core.first(seq57806__$1);
var seq57806__$2 = cljs.core.next(seq57806__$1);
var G__57809 = cljs.core.first(seq57806__$2);
var seq57806__$3 = cljs.core.next(seq57806__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57807,G__57808,G__57809,seq57806__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57867 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57868){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57868 = meta57868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57869,meta57868__$1){
var self__ = this;
var _57869__$1 = this;
return (new cljs.core.async.t_cljs$core$async57867(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57868__$1));
}));

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57869){
var self__ = this;
var _57869__$1 = this;
return self__.meta57868;
}));

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57867.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57868","meta57868",-1889947331,null)], null);
}));

(cljs.core.async.t_cljs$core$async57867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57867");

(cljs.core.async.t_cljs$core$async57867.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async57867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57867.
 */
cljs.core.async.__GT_t_cljs$core$async57867 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57867(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57868){
return (new cljs.core.async.t_cljs$core$async57867(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57868));
});

}

return (new cljs.core.async.t_cljs$core$async57867(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55696__auto___59900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_58021){
var state_val_58022 = (state_58021[(1)]);
if((state_val_58022 === (7))){
var inst_57923 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
var statearr_58024_59901 = state_58021__$1;
(statearr_58024_59901[(2)] = inst_57923);

(statearr_58024_59901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (20))){
var inst_57935 = (state_58021[(7)]);
var state_58021__$1 = state_58021;
var statearr_58025_59902 = state_58021__$1;
(statearr_58025_59902[(2)] = inst_57935);

(statearr_58025_59902[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (27))){
var state_58021__$1 = state_58021;
var statearr_58026_59903 = state_58021__$1;
(statearr_58026_59903[(2)] = null);

(statearr_58026_59903[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (1))){
var inst_57910 = (state_58021[(8)]);
var inst_57910__$1 = calc_state();
var inst_57912 = (inst_57910__$1 == null);
var inst_57913 = cljs.core.not(inst_57912);
var state_58021__$1 = (function (){var statearr_58034 = state_58021;
(statearr_58034[(8)] = inst_57910__$1);

return statearr_58034;
})();
if(inst_57913){
var statearr_58036_59908 = state_58021__$1;
(statearr_58036_59908[(1)] = (2));

} else {
var statearr_58037_59909 = state_58021__$1;
(statearr_58037_59909[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (24))){
var inst_57973 = (state_58021[(9)]);
var inst_57964 = (state_58021[(10)]);
var inst_57990 = (state_58021[(11)]);
var inst_57990__$1 = (inst_57964.cljs$core$IFn$_invoke$arity$1 ? inst_57964.cljs$core$IFn$_invoke$arity$1(inst_57973) : inst_57964.call(null,inst_57973));
var state_58021__$1 = (function (){var statearr_58038 = state_58021;
(statearr_58038[(11)] = inst_57990__$1);

return statearr_58038;
})();
if(cljs.core.truth_(inst_57990__$1)){
var statearr_58039_59911 = state_58021__$1;
(statearr_58039_59911[(1)] = (29));

} else {
var statearr_58042_59912 = state_58021__$1;
(statearr_58042_59912[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (4))){
var inst_57926 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
if(cljs.core.truth_(inst_57926)){
var statearr_58043_59913 = state_58021__$1;
(statearr_58043_59913[(1)] = (8));

} else {
var statearr_58045_59914 = state_58021__$1;
(statearr_58045_59914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (15))){
var inst_57957 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
if(cljs.core.truth_(inst_57957)){
var statearr_58051_59919 = state_58021__$1;
(statearr_58051_59919[(1)] = (19));

} else {
var statearr_58052_59921 = state_58021__$1;
(statearr_58052_59921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (21))){
var inst_57963 = (state_58021[(12)]);
var inst_57963__$1 = (state_58021[(2)]);
var inst_57964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57963__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57963__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57966 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57963__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_58021__$1 = (function (){var statearr_58054 = state_58021;
(statearr_58054[(13)] = inst_57965);

(statearr_58054[(10)] = inst_57964);

(statearr_58054[(12)] = inst_57963__$1);

return statearr_58054;
})();
return cljs.core.async.ioc_alts_BANG_(state_58021__$1,(22),inst_57966);
} else {
if((state_val_58022 === (31))){
var inst_57998 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
if(cljs.core.truth_(inst_57998)){
var statearr_58056_59923 = state_58021__$1;
(statearr_58056_59923[(1)] = (32));

} else {
var statearr_58057_59925 = state_58021__$1;
(statearr_58057_59925[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (32))){
var inst_57972 = (state_58021[(14)]);
var state_58021__$1 = state_58021;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58021__$1,(35),out,inst_57972);
} else {
if((state_val_58022 === (33))){
var inst_57963 = (state_58021[(12)]);
var inst_57935 = inst_57963;
var state_58021__$1 = (function (){var statearr_58062 = state_58021;
(statearr_58062[(7)] = inst_57935);

return statearr_58062;
})();
var statearr_58063_59929 = state_58021__$1;
(statearr_58063_59929[(2)] = null);

(statearr_58063_59929[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (13))){
var inst_57935 = (state_58021[(7)]);
var inst_57945 = inst_57935.cljs$lang$protocol_mask$partition0$;
var inst_57947 = (inst_57945 & (64));
var inst_57948 = inst_57935.cljs$core$ISeq$;
var inst_57949 = (cljs.core.PROTOCOL_SENTINEL === inst_57948);
var inst_57950 = ((inst_57947) || (inst_57949));
var state_58021__$1 = state_58021;
if(cljs.core.truth_(inst_57950)){
var statearr_58064_59930 = state_58021__$1;
(statearr_58064_59930[(1)] = (16));

} else {
var statearr_58065_59931 = state_58021__$1;
(statearr_58065_59931[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (22))){
var inst_57972 = (state_58021[(14)]);
var inst_57973 = (state_58021[(9)]);
var inst_57971 = (state_58021[(2)]);
var inst_57972__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57971,(0),null);
var inst_57973__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57971,(1),null);
var inst_57974 = (inst_57972__$1 == null);
var inst_57975 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57973__$1,change);
var inst_57976 = ((inst_57974) || (inst_57975));
var state_58021__$1 = (function (){var statearr_58067 = state_58021;
(statearr_58067[(14)] = inst_57972__$1);

(statearr_58067[(9)] = inst_57973__$1);

return statearr_58067;
})();
if(cljs.core.truth_(inst_57976)){
var statearr_58068_59932 = state_58021__$1;
(statearr_58068_59932[(1)] = (23));

} else {
var statearr_58070_59933 = state_58021__$1;
(statearr_58070_59933[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (36))){
var inst_57963 = (state_58021[(12)]);
var inst_57935 = inst_57963;
var state_58021__$1 = (function (){var statearr_58074 = state_58021;
(statearr_58074[(7)] = inst_57935);

return statearr_58074;
})();
var statearr_58075_59934 = state_58021__$1;
(statearr_58075_59934[(2)] = null);

(statearr_58075_59934[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (29))){
var inst_57990 = (state_58021[(11)]);
var state_58021__$1 = state_58021;
var statearr_58076_59936 = state_58021__$1;
(statearr_58076_59936[(2)] = inst_57990);

(statearr_58076_59936[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (6))){
var state_58021__$1 = state_58021;
var statearr_58078_59938 = state_58021__$1;
(statearr_58078_59938[(2)] = false);

(statearr_58078_59938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (28))){
var inst_57984 = (state_58021[(2)]);
var inst_57986 = calc_state();
var inst_57935 = inst_57986;
var state_58021__$1 = (function (){var statearr_58092 = state_58021;
(statearr_58092[(7)] = inst_57935);

(statearr_58092[(15)] = inst_57984);

return statearr_58092;
})();
var statearr_58094_59939 = state_58021__$1;
(statearr_58094_59939[(2)] = null);

(statearr_58094_59939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (25))){
var inst_58012 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
var statearr_58095_59940 = state_58021__$1;
(statearr_58095_59940[(2)] = inst_58012);

(statearr_58095_59940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (34))){
var inst_58010 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
var statearr_58097_59941 = state_58021__$1;
(statearr_58097_59941[(2)] = inst_58010);

(statearr_58097_59941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (17))){
var state_58021__$1 = state_58021;
var statearr_58098_59942 = state_58021__$1;
(statearr_58098_59942[(2)] = false);

(statearr_58098_59942[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (3))){
var state_58021__$1 = state_58021;
var statearr_58100_59943 = state_58021__$1;
(statearr_58100_59943[(2)] = false);

(statearr_58100_59943[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (12))){
var inst_58014 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58021__$1,inst_58014);
} else {
if((state_val_58022 === (2))){
var inst_57910 = (state_58021[(8)]);
var inst_57915 = inst_57910.cljs$lang$protocol_mask$partition0$;
var inst_57916 = (inst_57915 & (64));
var inst_57917 = inst_57910.cljs$core$ISeq$;
var inst_57918 = (cljs.core.PROTOCOL_SENTINEL === inst_57917);
var inst_57919 = ((inst_57916) || (inst_57918));
var state_58021__$1 = state_58021;
if(cljs.core.truth_(inst_57919)){
var statearr_58110_59947 = state_58021__$1;
(statearr_58110_59947[(1)] = (5));

} else {
var statearr_58115_59948 = state_58021__$1;
(statearr_58115_59948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (23))){
var inst_57972 = (state_58021[(14)]);
var inst_57978 = (inst_57972 == null);
var state_58021__$1 = state_58021;
if(cljs.core.truth_(inst_57978)){
var statearr_58125_59952 = state_58021__$1;
(statearr_58125_59952[(1)] = (26));

} else {
var statearr_58130_59953 = state_58021__$1;
(statearr_58130_59953[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (35))){
var inst_58001 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
if(cljs.core.truth_(inst_58001)){
var statearr_58131_59954 = state_58021__$1;
(statearr_58131_59954[(1)] = (36));

} else {
var statearr_58132_59955 = state_58021__$1;
(statearr_58132_59955[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (19))){
var inst_57935 = (state_58021[(7)]);
var inst_57960 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57935);
var state_58021__$1 = state_58021;
var statearr_58133_59956 = state_58021__$1;
(statearr_58133_59956[(2)] = inst_57960);

(statearr_58133_59956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (11))){
var inst_57935 = (state_58021[(7)]);
var inst_57940 = (inst_57935 == null);
var inst_57941 = cljs.core.not(inst_57940);
var state_58021__$1 = state_58021;
if(inst_57941){
var statearr_58139_59958 = state_58021__$1;
(statearr_58139_59958[(1)] = (13));

} else {
var statearr_58140_59960 = state_58021__$1;
(statearr_58140_59960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (9))){
var inst_57910 = (state_58021[(8)]);
var state_58021__$1 = state_58021;
var statearr_58142_59961 = state_58021__$1;
(statearr_58142_59961[(2)] = inst_57910);

(statearr_58142_59961[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (5))){
var state_58021__$1 = state_58021;
var statearr_58147_59962 = state_58021__$1;
(statearr_58147_59962[(2)] = true);

(statearr_58147_59962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (14))){
var state_58021__$1 = state_58021;
var statearr_58149_59963 = state_58021__$1;
(statearr_58149_59963[(2)] = false);

(statearr_58149_59963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (26))){
var inst_57973 = (state_58021[(9)]);
var inst_57981 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57973);
var state_58021__$1 = state_58021;
var statearr_58154_59964 = state_58021__$1;
(statearr_58154_59964[(2)] = inst_57981);

(statearr_58154_59964[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (16))){
var state_58021__$1 = state_58021;
var statearr_58155_59965 = state_58021__$1;
(statearr_58155_59965[(2)] = true);

(statearr_58155_59965[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (38))){
var inst_58006 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
var statearr_58158_59966 = state_58021__$1;
(statearr_58158_59966[(2)] = inst_58006);

(statearr_58158_59966[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (30))){
var inst_57965 = (state_58021[(13)]);
var inst_57973 = (state_58021[(9)]);
var inst_57964 = (state_58021[(10)]);
var inst_57993 = cljs.core.empty_QMARK_(inst_57964);
var inst_57994 = (inst_57965.cljs$core$IFn$_invoke$arity$1 ? inst_57965.cljs$core$IFn$_invoke$arity$1(inst_57973) : inst_57965.call(null,inst_57973));
var inst_57995 = cljs.core.not(inst_57994);
var inst_57996 = ((inst_57993) && (inst_57995));
var state_58021__$1 = state_58021;
var statearr_58166_59968 = state_58021__$1;
(statearr_58166_59968[(2)] = inst_57996);

(statearr_58166_59968[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (10))){
var inst_57910 = (state_58021[(8)]);
var inst_57931 = (state_58021[(2)]);
var inst_57932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57931,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57931,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57931,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57935 = inst_57910;
var state_58021__$1 = (function (){var statearr_58171 = state_58021;
(statearr_58171[(7)] = inst_57935);

(statearr_58171[(16)] = inst_57932);

(statearr_58171[(17)] = inst_57933);

(statearr_58171[(18)] = inst_57934);

return statearr_58171;
})();
var statearr_58173_59969 = state_58021__$1;
(statearr_58173_59969[(2)] = null);

(statearr_58173_59969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (18))){
var inst_57954 = (state_58021[(2)]);
var state_58021__$1 = state_58021;
var statearr_58178_59971 = state_58021__$1;
(statearr_58178_59971[(2)] = inst_57954);

(statearr_58178_59971[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (37))){
var state_58021__$1 = state_58021;
var statearr_58179_59973 = state_58021__$1;
(statearr_58179_59973[(2)] = null);

(statearr_58179_59973[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58022 === (8))){
var inst_57910 = (state_58021[(8)]);
var inst_57928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_57910);
var state_58021__$1 = state_58021;
var statearr_58181_59974 = state_58021__$1;
(statearr_58181_59974[(2)] = inst_57928);

(statearr_58181_59974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__55477__auto__ = null;
var cljs$core$async$mix_$_state_machine__55477__auto____0 = (function (){
var statearr_58189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58189[(0)] = cljs$core$async$mix_$_state_machine__55477__auto__);

(statearr_58189[(1)] = (1));

return statearr_58189;
});
var cljs$core$async$mix_$_state_machine__55477__auto____1 = (function (state_58021){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_58021);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e58193){var ex__55480__auto__ = e58193;
var statearr_58194_59980 = state_58021;
(statearr_58194_59980[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_58021[(4)]))){
var statearr_58196_59981 = state_58021;
(statearr_58196_59981[(1)] = cljs.core.first((state_58021[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59982 = state_58021;
state_58021 = G__59982;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__55477__auto__ = function(state_58021){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__55477__auto____1.call(this,state_58021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__55477__auto____0;
cljs$core$async$mix_$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__55477__auto____1;
return cljs$core$async$mix_$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_58201 = f__55697__auto__();
(statearr_58201[(6)] = c__55696__auto___59900);

return statearr_58201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_59988 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_59988(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_59993 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_59993(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_59994 = (function() {
var G__59995 = null;
var G__59995__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__59995__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__59995 = function(p,v){
switch(arguments.length){
case 1:
return G__59995__1.call(this,p);
case 2:
return G__59995__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__59995.cljs$core$IFn$_invoke$arity$1 = G__59995__1;
G__59995.cljs$core$IFn$_invoke$arity$2 = G__59995__2;
return G__59995;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__58259 = arguments.length;
switch (G__58259) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59994(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_59994(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__58267 = arguments.length;
switch (G__58267) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__58263_SHARP_){
if(cljs.core.truth_((p1__58263_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__58263_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__58263_SHARP_.call(null,topic)))){
return p1__58263_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__58263_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58271 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta58272){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta58272 = meta58272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58273,meta58272__$1){
var self__ = this;
var _58273__$1 = this;
return (new cljs.core.async.t_cljs$core$async58271(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta58272__$1));
}));

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58273){
var self__ = this;
var _58273__$1 = this;
return self__.meta58272;
}));

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async58271.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async58271.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta58272","meta58272",-1140690200,null)], null);
}));

(cljs.core.async.t_cljs$core$async58271.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58271.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58271");

(cljs.core.async.t_cljs$core$async58271.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58271");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58271.
 */
cljs.core.async.__GT_t_cljs$core$async58271 = (function cljs$core$async$__GT_t_cljs$core$async58271(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58272){
return (new cljs.core.async.t_cljs$core$async58271(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta58272));
});

}

return (new cljs.core.async.t_cljs$core$async58271(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__55696__auto___60008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_58368){
var state_val_58369 = (state_58368[(1)]);
if((state_val_58369 === (7))){
var inst_58364 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58374_60010 = state_58368__$1;
(statearr_58374_60010[(2)] = inst_58364);

(statearr_58374_60010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (20))){
var state_58368__$1 = state_58368;
var statearr_58375_60011 = state_58368__$1;
(statearr_58375_60011[(2)] = null);

(statearr_58375_60011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (1))){
var state_58368__$1 = state_58368;
var statearr_58379_60012 = state_58368__$1;
(statearr_58379_60012[(2)] = null);

(statearr_58379_60012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (24))){
var inst_58344 = (state_58368[(7)]);
var inst_58356 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_58344);
var state_58368__$1 = state_58368;
var statearr_58380_60013 = state_58368__$1;
(statearr_58380_60013[(2)] = inst_58356);

(statearr_58380_60013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (4))){
var inst_58288 = (state_58368[(8)]);
var inst_58288__$1 = (state_58368[(2)]);
var inst_58289 = (inst_58288__$1 == null);
var state_58368__$1 = (function (){var statearr_58386 = state_58368;
(statearr_58386[(8)] = inst_58288__$1);

return statearr_58386;
})();
if(cljs.core.truth_(inst_58289)){
var statearr_58387_60014 = state_58368__$1;
(statearr_58387_60014[(1)] = (5));

} else {
var statearr_58388_60015 = state_58368__$1;
(statearr_58388_60015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (15))){
var inst_58338 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58389_60016 = state_58368__$1;
(statearr_58389_60016[(2)] = inst_58338);

(statearr_58389_60016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (21))){
var inst_58361 = (state_58368[(2)]);
var state_58368__$1 = (function (){var statearr_58390 = state_58368;
(statearr_58390[(9)] = inst_58361);

return statearr_58390;
})();
var statearr_58391_60017 = state_58368__$1;
(statearr_58391_60017[(2)] = null);

(statearr_58391_60017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (13))){
var inst_58318 = (state_58368[(10)]);
var inst_58321 = cljs.core.chunked_seq_QMARK_(inst_58318);
var state_58368__$1 = state_58368;
if(inst_58321){
var statearr_58392_60018 = state_58368__$1;
(statearr_58392_60018[(1)] = (16));

} else {
var statearr_58393_60019 = state_58368__$1;
(statearr_58393_60019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (22))){
var inst_58352 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
if(cljs.core.truth_(inst_58352)){
var statearr_58394_60020 = state_58368__$1;
(statearr_58394_60020[(1)] = (23));

} else {
var statearr_58395_60021 = state_58368__$1;
(statearr_58395_60021[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (6))){
var inst_58344 = (state_58368[(7)]);
var inst_58288 = (state_58368[(8)]);
var inst_58346 = (state_58368[(11)]);
var inst_58344__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_58288) : topic_fn.call(null,inst_58288));
var inst_58345 = cljs.core.deref(mults);
var inst_58346__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_58345,inst_58344__$1);
var state_58368__$1 = (function (){var statearr_58396 = state_58368;
(statearr_58396[(7)] = inst_58344__$1);

(statearr_58396[(11)] = inst_58346__$1);

return statearr_58396;
})();
if(cljs.core.truth_(inst_58346__$1)){
var statearr_58397_60022 = state_58368__$1;
(statearr_58397_60022[(1)] = (19));

} else {
var statearr_58398_60023 = state_58368__$1;
(statearr_58398_60023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (25))){
var inst_58358 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58399_60024 = state_58368__$1;
(statearr_58399_60024[(2)] = inst_58358);

(statearr_58399_60024[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (17))){
var inst_58318 = (state_58368[(10)]);
var inst_58328 = cljs.core.first(inst_58318);
var inst_58329 = cljs.core.async.muxch_STAR_(inst_58328);
var inst_58330 = cljs.core.async.close_BANG_(inst_58329);
var inst_58331 = cljs.core.next(inst_58318);
var inst_58298 = inst_58331;
var inst_58299 = null;
var inst_58300 = (0);
var inst_58301 = (0);
var state_58368__$1 = (function (){var statearr_58402 = state_58368;
(statearr_58402[(12)] = inst_58299);

(statearr_58402[(13)] = inst_58300);

(statearr_58402[(14)] = inst_58330);

(statearr_58402[(15)] = inst_58301);

(statearr_58402[(16)] = inst_58298);

return statearr_58402;
})();
var statearr_58404_60025 = state_58368__$1;
(statearr_58404_60025[(2)] = null);

(statearr_58404_60025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (3))){
var inst_58366 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58368__$1,inst_58366);
} else {
if((state_val_58369 === (12))){
var inst_58340 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58405_60030 = state_58368__$1;
(statearr_58405_60030[(2)] = inst_58340);

(statearr_58405_60030[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (2))){
var state_58368__$1 = state_58368;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58368__$1,(4),ch);
} else {
if((state_val_58369 === (23))){
var state_58368__$1 = state_58368;
var statearr_58406_60032 = state_58368__$1;
(statearr_58406_60032[(2)] = null);

(statearr_58406_60032[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (19))){
var inst_58288 = (state_58368[(8)]);
var inst_58346 = (state_58368[(11)]);
var inst_58349 = cljs.core.async.muxch_STAR_(inst_58346);
var state_58368__$1 = state_58368;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58368__$1,(22),inst_58349,inst_58288);
} else {
if((state_val_58369 === (11))){
var inst_58318 = (state_58368[(10)]);
var inst_58298 = (state_58368[(16)]);
var inst_58318__$1 = cljs.core.seq(inst_58298);
var state_58368__$1 = (function (){var statearr_58409 = state_58368;
(statearr_58409[(10)] = inst_58318__$1);

return statearr_58409;
})();
if(inst_58318__$1){
var statearr_58410_60036 = state_58368__$1;
(statearr_58410_60036[(1)] = (13));

} else {
var statearr_58411_60038 = state_58368__$1;
(statearr_58411_60038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (9))){
var inst_58342 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58412_60040 = state_58368__$1;
(statearr_58412_60040[(2)] = inst_58342);

(statearr_58412_60040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (5))){
var inst_58295 = cljs.core.deref(mults);
var inst_58296 = cljs.core.vals(inst_58295);
var inst_58297 = cljs.core.seq(inst_58296);
var inst_58298 = inst_58297;
var inst_58299 = null;
var inst_58300 = (0);
var inst_58301 = (0);
var state_58368__$1 = (function (){var statearr_58413 = state_58368;
(statearr_58413[(12)] = inst_58299);

(statearr_58413[(13)] = inst_58300);

(statearr_58413[(15)] = inst_58301);

(statearr_58413[(16)] = inst_58298);

return statearr_58413;
})();
var statearr_58414_60042 = state_58368__$1;
(statearr_58414_60042[(2)] = null);

(statearr_58414_60042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (14))){
var state_58368__$1 = state_58368;
var statearr_58418_60043 = state_58368__$1;
(statearr_58418_60043[(2)] = null);

(statearr_58418_60043[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (16))){
var inst_58318 = (state_58368[(10)]);
var inst_58323 = cljs.core.chunk_first(inst_58318);
var inst_58324 = cljs.core.chunk_rest(inst_58318);
var inst_58325 = cljs.core.count(inst_58323);
var inst_58298 = inst_58324;
var inst_58299 = inst_58323;
var inst_58300 = inst_58325;
var inst_58301 = (0);
var state_58368__$1 = (function (){var statearr_58419 = state_58368;
(statearr_58419[(12)] = inst_58299);

(statearr_58419[(13)] = inst_58300);

(statearr_58419[(15)] = inst_58301);

(statearr_58419[(16)] = inst_58298);

return statearr_58419;
})();
var statearr_58420_60044 = state_58368__$1;
(statearr_58420_60044[(2)] = null);

(statearr_58420_60044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (10))){
var inst_58299 = (state_58368[(12)]);
var inst_58300 = (state_58368[(13)]);
var inst_58301 = (state_58368[(15)]);
var inst_58298 = (state_58368[(16)]);
var inst_58309 = cljs.core._nth(inst_58299,inst_58301);
var inst_58310 = cljs.core.async.muxch_STAR_(inst_58309);
var inst_58311 = cljs.core.async.close_BANG_(inst_58310);
var inst_58312 = (inst_58301 + (1));
var tmp58415 = inst_58299;
var tmp58416 = inst_58300;
var tmp58417 = inst_58298;
var inst_58298__$1 = tmp58417;
var inst_58299__$1 = tmp58415;
var inst_58300__$1 = tmp58416;
var inst_58301__$1 = inst_58312;
var state_58368__$1 = (function (){var statearr_58421 = state_58368;
(statearr_58421[(12)] = inst_58299__$1);

(statearr_58421[(13)] = inst_58300__$1);

(statearr_58421[(15)] = inst_58301__$1);

(statearr_58421[(16)] = inst_58298__$1);

(statearr_58421[(17)] = inst_58311);

return statearr_58421;
})();
var statearr_58422_60046 = state_58368__$1;
(statearr_58422_60046[(2)] = null);

(statearr_58422_60046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (18))){
var inst_58335 = (state_58368[(2)]);
var state_58368__$1 = state_58368;
var statearr_58423_60047 = state_58368__$1;
(statearr_58423_60047[(2)] = inst_58335);

(statearr_58423_60047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58369 === (8))){
var inst_58300 = (state_58368[(13)]);
var inst_58301 = (state_58368[(15)]);
var inst_58304 = (inst_58301 < inst_58300);
var inst_58305 = inst_58304;
var state_58368__$1 = state_58368;
if(cljs.core.truth_(inst_58305)){
var statearr_58424_60048 = state_58368__$1;
(statearr_58424_60048[(1)] = (10));

} else {
var statearr_58425_60049 = state_58368__$1;
(statearr_58425_60049[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_58428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58428[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_58428[(1)] = (1));

return statearr_58428;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_58368){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_58368);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e58430){var ex__55480__auto__ = e58430;
var statearr_58431_60052 = state_58368;
(statearr_58431_60052[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_58368[(4)]))){
var statearr_58432_60053 = state_58368;
(statearr_58432_60053[(1)] = cljs.core.first((state_58368[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60054 = state_58368;
state_58368 = G__60054;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_58368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_58368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_58433 = f__55697__auto__();
(statearr_58433[(6)] = c__55696__auto___60008);

return statearr_58433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__58440 = arguments.length;
switch (G__58440) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__58448 = arguments.length;
switch (G__58448) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__58458 = arguments.length;
switch (G__58458) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__55696__auto___60058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_58527){
var state_val_58528 = (state_58527[(1)]);
if((state_val_58528 === (7))){
var state_58527__$1 = state_58527;
var statearr_58533_60062 = state_58527__$1;
(statearr_58533_60062[(2)] = null);

(statearr_58533_60062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (1))){
var state_58527__$1 = state_58527;
var statearr_58534_60063 = state_58527__$1;
(statearr_58534_60063[(2)] = null);

(statearr_58534_60063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (4))){
var inst_58480 = (state_58527[(7)]);
var inst_58479 = (state_58527[(8)]);
var inst_58482 = (inst_58480 < inst_58479);
var state_58527__$1 = state_58527;
if(cljs.core.truth_(inst_58482)){
var statearr_58541_60071 = state_58527__$1;
(statearr_58541_60071[(1)] = (6));

} else {
var statearr_58542_60072 = state_58527__$1;
(statearr_58542_60072[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (15))){
var inst_58512 = (state_58527[(9)]);
var inst_58518 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_58512);
var state_58527__$1 = state_58527;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58527__$1,(17),out,inst_58518);
} else {
if((state_val_58528 === (13))){
var inst_58512 = (state_58527[(9)]);
var inst_58512__$1 = (state_58527[(2)]);
var inst_58514 = cljs.core.some(cljs.core.nil_QMARK_,inst_58512__$1);
var state_58527__$1 = (function (){var statearr_58545 = state_58527;
(statearr_58545[(9)] = inst_58512__$1);

return statearr_58545;
})();
if(cljs.core.truth_(inst_58514)){
var statearr_58546_60076 = state_58527__$1;
(statearr_58546_60076[(1)] = (14));

} else {
var statearr_58547_60077 = state_58527__$1;
(statearr_58547_60077[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (6))){
var state_58527__$1 = state_58527;
var statearr_58548_60078 = state_58527__$1;
(statearr_58548_60078[(2)] = null);

(statearr_58548_60078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (17))){
var inst_58520 = (state_58527[(2)]);
var state_58527__$1 = (function (){var statearr_58555 = state_58527;
(statearr_58555[(10)] = inst_58520);

return statearr_58555;
})();
var statearr_58557_60082 = state_58527__$1;
(statearr_58557_60082[(2)] = null);

(statearr_58557_60082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (3))){
var inst_58525 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58527__$1,inst_58525);
} else {
if((state_val_58528 === (12))){
var _ = (function (){var statearr_58558 = state_58527;
(statearr_58558[(4)] = cljs.core.rest((state_58527[(4)])));

return statearr_58558;
})();
var state_58527__$1 = state_58527;
var ex58554 = (state_58527__$1[(2)]);
var statearr_58559_60083 = state_58527__$1;
(statearr_58559_60083[(5)] = ex58554);


if((ex58554 instanceof Object)){
var statearr_58565_60087 = state_58527__$1;
(statearr_58565_60087[(1)] = (11));

(statearr_58565_60087[(5)] = null);

} else {
throw ex58554;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (2))){
var inst_58472 = cljs.core.reset_BANG_(dctr,cnt);
var inst_58479 = cnt;
var inst_58480 = (0);
var state_58527__$1 = (function (){var statearr_58568 = state_58527;
(statearr_58568[(7)] = inst_58480);

(statearr_58568[(11)] = inst_58472);

(statearr_58568[(8)] = inst_58479);

return statearr_58568;
})();
var statearr_58571_60088 = state_58527__$1;
(statearr_58571_60088[(2)] = null);

(statearr_58571_60088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (11))){
var inst_58486 = (state_58527[(2)]);
var inst_58487 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_58527__$1 = (function (){var statearr_58573 = state_58527;
(statearr_58573[(12)] = inst_58486);

return statearr_58573;
})();
var statearr_58574_60092 = state_58527__$1;
(statearr_58574_60092[(2)] = inst_58487);

(statearr_58574_60092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (9))){
var inst_58480 = (state_58527[(7)]);
var _ = (function (){var statearr_58575 = state_58527;
(statearr_58575[(4)] = cljs.core.cons((12),(state_58527[(4)])));

return statearr_58575;
})();
var inst_58498 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_58480) : chs__$1.call(null,inst_58480));
var inst_58499 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_58480) : done.call(null,inst_58480));
var inst_58500 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_58498,inst_58499);
var ___$1 = (function (){var statearr_58577 = state_58527;
(statearr_58577[(4)] = cljs.core.rest((state_58527[(4)])));

return statearr_58577;
})();
var state_58527__$1 = state_58527;
var statearr_58578_60096 = state_58527__$1;
(statearr_58578_60096[(2)] = inst_58500);

(statearr_58578_60096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (5))){
var inst_58510 = (state_58527[(2)]);
var state_58527__$1 = (function (){var statearr_58579 = state_58527;
(statearr_58579[(13)] = inst_58510);

return statearr_58579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58527__$1,(13),dchan);
} else {
if((state_val_58528 === (14))){
var inst_58516 = cljs.core.async.close_BANG_(out);
var state_58527__$1 = state_58527;
var statearr_58585_60098 = state_58527__$1;
(statearr_58585_60098[(2)] = inst_58516);

(statearr_58585_60098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (16))){
var inst_58523 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
var statearr_58586_60099 = state_58527__$1;
(statearr_58586_60099[(2)] = inst_58523);

(statearr_58586_60099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (10))){
var inst_58480 = (state_58527[(7)]);
var inst_58503 = (state_58527[(2)]);
var inst_58504 = (inst_58480 + (1));
var inst_58480__$1 = inst_58504;
var state_58527__$1 = (function (){var statearr_58587 = state_58527;
(statearr_58587[(7)] = inst_58480__$1);

(statearr_58587[(14)] = inst_58503);

return statearr_58587;
})();
var statearr_58588_60103 = state_58527__$1;
(statearr_58588_60103[(2)] = null);

(statearr_58588_60103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58528 === (8))){
var inst_58508 = (state_58527[(2)]);
var state_58527__$1 = state_58527;
var statearr_58589_60114 = state_58527__$1;
(statearr_58589_60114[(2)] = inst_58508);

(statearr_58589_60114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_58593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58593[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_58593[(1)] = (1));

return statearr_58593;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_58527){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_58527);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e58594){var ex__55480__auto__ = e58594;
var statearr_58596_60121 = state_58527;
(statearr_58596_60121[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_58527[(4)]))){
var statearr_58597_60122 = state_58527;
(statearr_58597_60122[(1)] = cljs.core.first((state_58527[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60123 = state_58527;
state_58527 = G__60123;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_58527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_58527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_58598 = f__55697__auto__();
(statearr_58598[(6)] = c__55696__auto___60058);

return statearr_58598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__58606 = arguments.length;
switch (G__58606) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55696__auto___60125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_58645){
var state_val_58646 = (state_58645[(1)]);
if((state_val_58646 === (7))){
var inst_58622 = (state_58645[(7)]);
var inst_58621 = (state_58645[(8)]);
var inst_58621__$1 = (state_58645[(2)]);
var inst_58622__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58621__$1,(0),null);
var inst_58623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_58621__$1,(1),null);
var inst_58624 = (inst_58622__$1 == null);
var state_58645__$1 = (function (){var statearr_58652 = state_58645;
(statearr_58652[(7)] = inst_58622__$1);

(statearr_58652[(9)] = inst_58623);

(statearr_58652[(8)] = inst_58621__$1);

return statearr_58652;
})();
if(cljs.core.truth_(inst_58624)){
var statearr_58655_60126 = state_58645__$1;
(statearr_58655_60126[(1)] = (8));

} else {
var statearr_58656_60127 = state_58645__$1;
(statearr_58656_60127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58646 === (1))){
var inst_58611 = cljs.core.vec(chs);
var inst_58612 = inst_58611;
var state_58645__$1 = (function (){var statearr_58659 = state_58645;
(statearr_58659[(10)] = inst_58612);

return statearr_58659;
})();
var statearr_58660_60128 = state_58645__$1;
(statearr_58660_60128[(2)] = null);

(statearr_58660_60128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58646 === (4))){
var inst_58612 = (state_58645[(10)]);
var state_58645__$1 = state_58645;
return cljs.core.async.ioc_alts_BANG_(state_58645__$1,(7),inst_58612);
} else {
if((state_val_58646 === (6))){
var inst_58641 = (state_58645[(2)]);
var state_58645__$1 = state_58645;
var statearr_58665_60135 = state_58645__$1;
(statearr_58665_60135[(2)] = inst_58641);

(statearr_58665_60135[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58646 === (3))){
var inst_58643 = (state_58645[(2)]);
var state_58645__$1 = state_58645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58645__$1,inst_58643);
} else {
if((state_val_58646 === (2))){
var inst_58612 = (state_58645[(10)]);
var inst_58614 = cljs.core.count(inst_58612);
var inst_58615 = (inst_58614 > (0));
var state_58645__$1 = state_58645;
if(cljs.core.truth_(inst_58615)){
var statearr_58676_60136 = state_58645__$1;
(statearr_58676_60136[(1)] = (4));

} else {
var statearr_58677_60137 = state_58645__$1;
(statearr_58677_60137[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58646 === (11))){
var inst_58612 = (state_58645[(10)]);
var inst_58634 = (state_58645[(2)]);
var tmp58668 = inst_58612;
var inst_58612__$1 = tmp58668;
var state_58645__$1 = (function (){var statearr_58679 = state_58645;
(statearr_58679[(11)] = inst_58634);

(statearr_58679[(10)] = inst_58612__$1);

return statearr_58679;
})();
var statearr_58680_60138 = state_58645__$1;
(statearr_58680_60138[(2)] = null);

(statearr_58680_60138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58646 === (9))){
var inst_58622 = (state_58645[(7)]);
var state_58645__$1 = state_58645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58645__$1,(11),out,inst_58622);
} else {
if((state_val_58646 === (5))){
var inst_58639 = cljs.core.async.close_BANG_(out);
var state_58645__$1 = state_58645;
var statearr_58696_60139 = state_58645__$1;
(statearr_58696_60139[(2)] = inst_58639);

(statearr_58696_60139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58646 === (10))){
var inst_58637 = (state_58645[(2)]);
var state_58645__$1 = state_58645;
var statearr_58701_60140 = state_58645__$1;
(statearr_58701_60140[(2)] = inst_58637);

(statearr_58701_60140[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58646 === (8))){
var inst_58622 = (state_58645[(7)]);
var inst_58623 = (state_58645[(9)]);
var inst_58621 = (state_58645[(8)]);
var inst_58612 = (state_58645[(10)]);
var inst_58629 = (function (){var cs = inst_58612;
var vec__58617 = inst_58621;
var v = inst_58622;
var c = inst_58623;
return (function (p1__58601_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__58601_SHARP_);
});
})();
var inst_58630 = cljs.core.filterv(inst_58629,inst_58612);
var inst_58612__$1 = inst_58630;
var state_58645__$1 = (function (){var statearr_58712 = state_58645;
(statearr_58712[(10)] = inst_58612__$1);

return statearr_58712;
})();
var statearr_58713_60141 = state_58645__$1;
(statearr_58713_60141[(2)] = null);

(statearr_58713_60141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_58717 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58717[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_58717[(1)] = (1));

return statearr_58717;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_58645){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_58645);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e58720){var ex__55480__auto__ = e58720;
var statearr_58723_60148 = state_58645;
(statearr_58723_60148[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_58645[(4)]))){
var statearr_58724_60149 = state_58645;
(statearr_58724_60149[(1)] = cljs.core.first((state_58645[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60150 = state_58645;
state_58645 = G__60150;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_58645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_58645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_58731 = f__55697__auto__();
(statearr_58731[(6)] = c__55696__auto___60125);

return statearr_58731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__58749 = arguments.length;
switch (G__58749) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55696__auto___60152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_58788){
var state_val_58789 = (state_58788[(1)]);
if((state_val_58789 === (7))){
var inst_58765 = (state_58788[(7)]);
var inst_58765__$1 = (state_58788[(2)]);
var inst_58768 = (inst_58765__$1 == null);
var inst_58769 = cljs.core.not(inst_58768);
var state_58788__$1 = (function (){var statearr_58790 = state_58788;
(statearr_58790[(7)] = inst_58765__$1);

return statearr_58790;
})();
if(inst_58769){
var statearr_58791_60153 = state_58788__$1;
(statearr_58791_60153[(1)] = (8));

} else {
var statearr_58792_60154 = state_58788__$1;
(statearr_58792_60154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (1))){
var inst_58759 = (0);
var state_58788__$1 = (function (){var statearr_58793 = state_58788;
(statearr_58793[(8)] = inst_58759);

return statearr_58793;
})();
var statearr_58794_60161 = state_58788__$1;
(statearr_58794_60161[(2)] = null);

(statearr_58794_60161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (4))){
var state_58788__$1 = state_58788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58788__$1,(7),ch);
} else {
if((state_val_58789 === (6))){
var inst_58780 = (state_58788[(2)]);
var state_58788__$1 = state_58788;
var statearr_58796_60162 = state_58788__$1;
(statearr_58796_60162[(2)] = inst_58780);

(statearr_58796_60162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (3))){
var inst_58782 = (state_58788[(2)]);
var inst_58784 = cljs.core.async.close_BANG_(out);
var state_58788__$1 = (function (){var statearr_58797 = state_58788;
(statearr_58797[(9)] = inst_58782);

return statearr_58797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58788__$1,inst_58784);
} else {
if((state_val_58789 === (2))){
var inst_58759 = (state_58788[(8)]);
var inst_58761 = (inst_58759 < n);
var state_58788__$1 = state_58788;
if(cljs.core.truth_(inst_58761)){
var statearr_58798_60163 = state_58788__$1;
(statearr_58798_60163[(1)] = (4));

} else {
var statearr_58799_60164 = state_58788__$1;
(statearr_58799_60164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (11))){
var inst_58759 = (state_58788[(8)]);
var inst_58772 = (state_58788[(2)]);
var inst_58773 = (inst_58759 + (1));
var inst_58759__$1 = inst_58773;
var state_58788__$1 = (function (){var statearr_58800 = state_58788;
(statearr_58800[(8)] = inst_58759__$1);

(statearr_58800[(10)] = inst_58772);

return statearr_58800;
})();
var statearr_58801_60165 = state_58788__$1;
(statearr_58801_60165[(2)] = null);

(statearr_58801_60165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (9))){
var state_58788__$1 = state_58788;
var statearr_58802_60166 = state_58788__$1;
(statearr_58802_60166[(2)] = null);

(statearr_58802_60166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (5))){
var state_58788__$1 = state_58788;
var statearr_58803_60167 = state_58788__$1;
(statearr_58803_60167[(2)] = null);

(statearr_58803_60167[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (10))){
var inst_58777 = (state_58788[(2)]);
var state_58788__$1 = state_58788;
var statearr_58804_60168 = state_58788__$1;
(statearr_58804_60168[(2)] = inst_58777);

(statearr_58804_60168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58789 === (8))){
var inst_58765 = (state_58788[(7)]);
var state_58788__$1 = state_58788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58788__$1,(11),out,inst_58765);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_58805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58805[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_58805[(1)] = (1));

return statearr_58805;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_58788){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_58788);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e58806){var ex__55480__auto__ = e58806;
var statearr_58807_60169 = state_58788;
(statearr_58807_60169[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_58788[(4)]))){
var statearr_58808_60172 = state_58788;
(statearr_58808_60172[(1)] = cljs.core.first((state_58788[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60174 = state_58788;
state_58788 = G__60174;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_58788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_58788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_58809 = f__55697__auto__();
(statearr_58809[(6)] = c__55696__auto___60152);

return statearr_58809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58815 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58815 = (function (f,ch,meta58816){
this.f = f;
this.ch = ch;
this.meta58816 = meta58816;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58817,meta58816__$1){
var self__ = this;
var _58817__$1 = this;
return (new cljs.core.async.t_cljs$core$async58815(self__.f,self__.ch,meta58816__$1));
}));

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58817){
var self__ = this;
var _58817__$1 = this;
return self__.meta58816;
}));

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58829 = (function (f,ch,meta58816,_,fn1,meta58830){
this.f = f;
this.ch = ch;
this.meta58816 = meta58816;
this._ = _;
this.fn1 = fn1;
this.meta58830 = meta58830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58831,meta58830__$1){
var self__ = this;
var _58831__$1 = this;
return (new cljs.core.async.t_cljs$core$async58829(self__.f,self__.ch,self__.meta58816,self__._,self__.fn1,meta58830__$1));
}));

(cljs.core.async.t_cljs$core$async58829.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58831){
var self__ = this;
var _58831__$1 = this;
return self__.meta58830;
}));

(cljs.core.async.t_cljs$core$async58829.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58829.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async58829.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async58829.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__58810_SHARP_){
var G__58832 = (((p1__58810_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__58810_SHARP_) : self__.f.call(null,p1__58810_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__58832) : f1.call(null,G__58832));
});
}));

(cljs.core.async.t_cljs$core$async58829.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58816","meta58816",2111516315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async58815","cljs.core.async/t_cljs$core$async58815",-158666417,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta58830","meta58830",-523897106,null)], null);
}));

(cljs.core.async.t_cljs$core$async58829.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58829");

(cljs.core.async.t_cljs$core$async58829.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58829");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58829.
 */
cljs.core.async.__GT_t_cljs$core$async58829 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58829(f__$1,ch__$1,meta58816__$1,___$2,fn1__$1,meta58830){
return (new cljs.core.async.t_cljs$core$async58829(f__$1,ch__$1,meta58816__$1,___$2,fn1__$1,meta58830));
});

}

return (new cljs.core.async.t_cljs$core$async58829(self__.f,self__.ch,self__.meta58816,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__58833 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__58833) : self__.f.call(null,G__58833));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58815.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async58815.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58816","meta58816",2111516315,null)], null);
}));

(cljs.core.async.t_cljs$core$async58815.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58815.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58815");

(cljs.core.async.t_cljs$core$async58815.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58815");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58815.
 */
cljs.core.async.__GT_t_cljs$core$async58815 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async58815(f__$1,ch__$1,meta58816){
return (new cljs.core.async.t_cljs$core$async58815(f__$1,ch__$1,meta58816));
});

}

return (new cljs.core.async.t_cljs$core$async58815(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58834 = (function (f,ch,meta58835){
this.f = f;
this.ch = ch;
this.meta58835 = meta58835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58836,meta58835__$1){
var self__ = this;
var _58836__$1 = this;
return (new cljs.core.async.t_cljs$core$async58834(self__.f,self__.ch,meta58835__$1));
}));

(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58836){
var self__ = this;
var _58836__$1 = this;
return self__.meta58835;
}));

(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async58834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58835","meta58835",802976195,null)], null);
}));

(cljs.core.async.t_cljs$core$async58834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58834");

(cljs.core.async.t_cljs$core$async58834.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58834.
 */
cljs.core.async.__GT_t_cljs$core$async58834 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async58834(f__$1,ch__$1,meta58835){
return (new cljs.core.async.t_cljs$core$async58834(f__$1,ch__$1,meta58835));
});

}

return (new cljs.core.async.t_cljs$core$async58834(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async58837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async58837 = (function (p,ch,meta58838){
this.p = p;
this.ch = ch;
this.meta58838 = meta58838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58839,meta58838__$1){
var self__ = this;
var _58839__$1 = this;
return (new cljs.core.async.t_cljs$core$async58837(self__.p,self__.ch,meta58838__$1));
}));

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58839){
var self__ = this;
var _58839__$1 = this;
return self__.meta58838;
}));

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async58837.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async58837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta58838","meta58838",-1095480421,null)], null);
}));

(cljs.core.async.t_cljs$core$async58837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async58837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async58837");

(cljs.core.async.t_cljs$core$async58837.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async58837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async58837.
 */
cljs.core.async.__GT_t_cljs$core$async58837 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async58837(p__$1,ch__$1,meta58838){
return (new cljs.core.async.t_cljs$core$async58837(p__$1,ch__$1,meta58838));
});

}

return (new cljs.core.async.t_cljs$core$async58837(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__58847 = arguments.length;
switch (G__58847) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55696__auto___60219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_58870){
var state_val_58871 = (state_58870[(1)]);
if((state_val_58871 === (7))){
var inst_58866 = (state_58870[(2)]);
var state_58870__$1 = state_58870;
var statearr_58874_60220 = state_58870__$1;
(statearr_58874_60220[(2)] = inst_58866);

(statearr_58874_60220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (1))){
var state_58870__$1 = state_58870;
var statearr_58875_60221 = state_58870__$1;
(statearr_58875_60221[(2)] = null);

(statearr_58875_60221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (4))){
var inst_58852 = (state_58870[(7)]);
var inst_58852__$1 = (state_58870[(2)]);
var inst_58853 = (inst_58852__$1 == null);
var state_58870__$1 = (function (){var statearr_58876 = state_58870;
(statearr_58876[(7)] = inst_58852__$1);

return statearr_58876;
})();
if(cljs.core.truth_(inst_58853)){
var statearr_58877_60223 = state_58870__$1;
(statearr_58877_60223[(1)] = (5));

} else {
var statearr_58878_60224 = state_58870__$1;
(statearr_58878_60224[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (6))){
var inst_58852 = (state_58870[(7)]);
var inst_58857 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_58852) : p.call(null,inst_58852));
var state_58870__$1 = state_58870;
if(cljs.core.truth_(inst_58857)){
var statearr_58879_60227 = state_58870__$1;
(statearr_58879_60227[(1)] = (8));

} else {
var statearr_58880_60228 = state_58870__$1;
(statearr_58880_60228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (3))){
var inst_58868 = (state_58870[(2)]);
var state_58870__$1 = state_58870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58870__$1,inst_58868);
} else {
if((state_val_58871 === (2))){
var state_58870__$1 = state_58870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58870__$1,(4),ch);
} else {
if((state_val_58871 === (11))){
var inst_58860 = (state_58870[(2)]);
var state_58870__$1 = state_58870;
var statearr_58881_60232 = state_58870__$1;
(statearr_58881_60232[(2)] = inst_58860);

(statearr_58881_60232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (9))){
var state_58870__$1 = state_58870;
var statearr_58882_60233 = state_58870__$1;
(statearr_58882_60233[(2)] = null);

(statearr_58882_60233[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (5))){
var inst_58855 = cljs.core.async.close_BANG_(out);
var state_58870__$1 = state_58870;
var statearr_58885_60234 = state_58870__$1;
(statearr_58885_60234[(2)] = inst_58855);

(statearr_58885_60234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (10))){
var inst_58863 = (state_58870[(2)]);
var state_58870__$1 = (function (){var statearr_58886 = state_58870;
(statearr_58886[(8)] = inst_58863);

return statearr_58886;
})();
var statearr_58887_60236 = state_58870__$1;
(statearr_58887_60236[(2)] = null);

(statearr_58887_60236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58871 === (8))){
var inst_58852 = (state_58870[(7)]);
var state_58870__$1 = state_58870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58870__$1,(11),out,inst_58852);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_58890 = [null,null,null,null,null,null,null,null,null];
(statearr_58890[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_58890[(1)] = (1));

return statearr_58890;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_58870){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_58870);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e58891){var ex__55480__auto__ = e58891;
var statearr_58892_60237 = state_58870;
(statearr_58892_60237[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_58870[(4)]))){
var statearr_58893_60238 = state_58870;
(statearr_58893_60238[(1)] = cljs.core.first((state_58870[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60239 = state_58870;
state_58870 = G__60239;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_58870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_58870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_58895 = f__55697__auto__();
(statearr_58895[(6)] = c__55696__auto___60219);

return statearr_58895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__58902 = arguments.length;
switch (G__58902) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__55696__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_58976){
var state_val_58977 = (state_58976[(1)]);
if((state_val_58977 === (7))){
var inst_58971 = (state_58976[(2)]);
var state_58976__$1 = state_58976;
var statearr_58980_60243 = state_58976__$1;
(statearr_58980_60243[(2)] = inst_58971);

(statearr_58980_60243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (20))){
var inst_58940 = (state_58976[(7)]);
var inst_58952 = (state_58976[(2)]);
var inst_58953 = cljs.core.next(inst_58940);
var inst_58921 = inst_58953;
var inst_58922 = null;
var inst_58923 = (0);
var inst_58924 = (0);
var state_58976__$1 = (function (){var statearr_58983 = state_58976;
(statearr_58983[(8)] = inst_58923);

(statearr_58983[(9)] = inst_58952);

(statearr_58983[(10)] = inst_58921);

(statearr_58983[(11)] = inst_58922);

(statearr_58983[(12)] = inst_58924);

return statearr_58983;
})();
var statearr_58984_60248 = state_58976__$1;
(statearr_58984_60248[(2)] = null);

(statearr_58984_60248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (1))){
var state_58976__$1 = state_58976;
var statearr_58985_60249 = state_58976__$1;
(statearr_58985_60249[(2)] = null);

(statearr_58985_60249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (4))){
var inst_58909 = (state_58976[(13)]);
var inst_58909__$1 = (state_58976[(2)]);
var inst_58910 = (inst_58909__$1 == null);
var state_58976__$1 = (function (){var statearr_58987 = state_58976;
(statearr_58987[(13)] = inst_58909__$1);

return statearr_58987;
})();
if(cljs.core.truth_(inst_58910)){
var statearr_58989_60251 = state_58976__$1;
(statearr_58989_60251[(1)] = (5));

} else {
var statearr_58990_60253 = state_58976__$1;
(statearr_58990_60253[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (15))){
var state_58976__$1 = state_58976;
var statearr_58995_60257 = state_58976__$1;
(statearr_58995_60257[(2)] = null);

(statearr_58995_60257[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (21))){
var state_58976__$1 = state_58976;
var statearr_58996_60259 = state_58976__$1;
(statearr_58996_60259[(2)] = null);

(statearr_58996_60259[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (13))){
var inst_58923 = (state_58976[(8)]);
var inst_58921 = (state_58976[(10)]);
var inst_58922 = (state_58976[(11)]);
var inst_58924 = (state_58976[(12)]);
var inst_58931 = (state_58976[(2)]);
var inst_58934 = (inst_58924 + (1));
var tmp58992 = inst_58923;
var tmp58993 = inst_58921;
var tmp58994 = inst_58922;
var inst_58921__$1 = tmp58993;
var inst_58922__$1 = tmp58994;
var inst_58923__$1 = tmp58992;
var inst_58924__$1 = inst_58934;
var state_58976__$1 = (function (){var statearr_59000 = state_58976;
(statearr_59000[(14)] = inst_58931);

(statearr_59000[(8)] = inst_58923__$1);

(statearr_59000[(10)] = inst_58921__$1);

(statearr_59000[(11)] = inst_58922__$1);

(statearr_59000[(12)] = inst_58924__$1);

return statearr_59000;
})();
var statearr_59001_60260 = state_58976__$1;
(statearr_59001_60260[(2)] = null);

(statearr_59001_60260[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (22))){
var state_58976__$1 = state_58976;
var statearr_59004_60262 = state_58976__$1;
(statearr_59004_60262[(2)] = null);

(statearr_59004_60262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (6))){
var inst_58909 = (state_58976[(13)]);
var inst_58919 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58909) : f.call(null,inst_58909));
var inst_58920 = cljs.core.seq(inst_58919);
var inst_58921 = inst_58920;
var inst_58922 = null;
var inst_58923 = (0);
var inst_58924 = (0);
var state_58976__$1 = (function (){var statearr_59006 = state_58976;
(statearr_59006[(8)] = inst_58923);

(statearr_59006[(10)] = inst_58921);

(statearr_59006[(11)] = inst_58922);

(statearr_59006[(12)] = inst_58924);

return statearr_59006;
})();
var statearr_59009_60263 = state_58976__$1;
(statearr_59009_60263[(2)] = null);

(statearr_59009_60263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (17))){
var inst_58940 = (state_58976[(7)]);
var inst_58944 = cljs.core.chunk_first(inst_58940);
var inst_58945 = cljs.core.chunk_rest(inst_58940);
var inst_58946 = cljs.core.count(inst_58944);
var inst_58921 = inst_58945;
var inst_58922 = inst_58944;
var inst_58923 = inst_58946;
var inst_58924 = (0);
var state_58976__$1 = (function (){var statearr_59011 = state_58976;
(statearr_59011[(8)] = inst_58923);

(statearr_59011[(10)] = inst_58921);

(statearr_59011[(11)] = inst_58922);

(statearr_59011[(12)] = inst_58924);

return statearr_59011;
})();
var statearr_59012_60267 = state_58976__$1;
(statearr_59012_60267[(2)] = null);

(statearr_59012_60267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (3))){
var inst_58973 = (state_58976[(2)]);
var state_58976__$1 = state_58976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58976__$1,inst_58973);
} else {
if((state_val_58977 === (12))){
var inst_58961 = (state_58976[(2)]);
var state_58976__$1 = state_58976;
var statearr_59013_60270 = state_58976__$1;
(statearr_59013_60270[(2)] = inst_58961);

(statearr_59013_60270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (2))){
var state_58976__$1 = state_58976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58976__$1,(4),in$);
} else {
if((state_val_58977 === (23))){
var inst_58969 = (state_58976[(2)]);
var state_58976__$1 = state_58976;
var statearr_59017_60272 = state_58976__$1;
(statearr_59017_60272[(2)] = inst_58969);

(statearr_59017_60272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (19))){
var inst_58956 = (state_58976[(2)]);
var state_58976__$1 = state_58976;
var statearr_59018_60273 = state_58976__$1;
(statearr_59018_60273[(2)] = inst_58956);

(statearr_59018_60273[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (11))){
var inst_58940 = (state_58976[(7)]);
var inst_58921 = (state_58976[(10)]);
var inst_58940__$1 = cljs.core.seq(inst_58921);
var state_58976__$1 = (function (){var statearr_59019 = state_58976;
(statearr_59019[(7)] = inst_58940__$1);

return statearr_59019;
})();
if(inst_58940__$1){
var statearr_59020_60275 = state_58976__$1;
(statearr_59020_60275[(1)] = (14));

} else {
var statearr_59021_60276 = state_58976__$1;
(statearr_59021_60276[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (9))){
var inst_58963 = (state_58976[(2)]);
var inst_58964 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_58976__$1 = (function (){var statearr_59022 = state_58976;
(statearr_59022[(15)] = inst_58963);

return statearr_59022;
})();
if(cljs.core.truth_(inst_58964)){
var statearr_59023_60281 = state_58976__$1;
(statearr_59023_60281[(1)] = (21));

} else {
var statearr_59024_60286 = state_58976__$1;
(statearr_59024_60286[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (5))){
var inst_58912 = cljs.core.async.close_BANG_(out);
var state_58976__$1 = state_58976;
var statearr_59029_60288 = state_58976__$1;
(statearr_59029_60288[(2)] = inst_58912);

(statearr_59029_60288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (14))){
var inst_58940 = (state_58976[(7)]);
var inst_58942 = cljs.core.chunked_seq_QMARK_(inst_58940);
var state_58976__$1 = state_58976;
if(inst_58942){
var statearr_59031_60295 = state_58976__$1;
(statearr_59031_60295[(1)] = (17));

} else {
var statearr_59032_60296 = state_58976__$1;
(statearr_59032_60296[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (16))){
var inst_58959 = (state_58976[(2)]);
var state_58976__$1 = state_58976;
var statearr_59033_60300 = state_58976__$1;
(statearr_59033_60300[(2)] = inst_58959);

(statearr_59033_60300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58977 === (10))){
var inst_58922 = (state_58976[(11)]);
var inst_58924 = (state_58976[(12)]);
var inst_58929 = cljs.core._nth(inst_58922,inst_58924);
var state_58976__$1 = state_58976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58976__$1,(13),out,inst_58929);
} else {
if((state_val_58977 === (18))){
var inst_58940 = (state_58976[(7)]);
var inst_58949 = cljs.core.first(inst_58940);
var state_58976__$1 = state_58976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58976__$1,(20),out,inst_58949);
} else {
if((state_val_58977 === (8))){
var inst_58923 = (state_58976[(8)]);
var inst_58924 = (state_58976[(12)]);
var inst_58926 = (inst_58924 < inst_58923);
var inst_58927 = inst_58926;
var state_58976__$1 = state_58976;
if(cljs.core.truth_(inst_58927)){
var statearr_59034_60305 = state_58976__$1;
(statearr_59034_60305[(1)] = (10));

} else {
var statearr_59035_60306 = state_58976__$1;
(statearr_59035_60306[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__55477__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__55477__auto____0 = (function (){
var statearr_59038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59038[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__55477__auto__);

(statearr_59038[(1)] = (1));

return statearr_59038;
});
var cljs$core$async$mapcat_STAR__$_state_machine__55477__auto____1 = (function (state_58976){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_58976);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e59039){var ex__55480__auto__ = e59039;
var statearr_59040_60313 = state_58976;
(statearr_59040_60313[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_58976[(4)]))){
var statearr_59041_60318 = state_58976;
(statearr_59041_60318[(1)] = cljs.core.first((state_58976[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60319 = state_58976;
state_58976 = G__60319;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__55477__auto__ = function(state_58976){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__55477__auto____1.call(this,state_58976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__55477__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__55477__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_59042 = f__55697__auto__();
(statearr_59042[(6)] = c__55696__auto__);

return statearr_59042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));

return c__55696__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__59046 = arguments.length;
switch (G__59046) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__59049 = arguments.length;
switch (G__59049) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__59055 = arguments.length;
switch (G__59055) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55696__auto___60346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_59079){
var state_val_59080 = (state_59079[(1)]);
if((state_val_59080 === (7))){
var inst_59074 = (state_59079[(2)]);
var state_59079__$1 = state_59079;
var statearr_59081_60347 = state_59079__$1;
(statearr_59081_60347[(2)] = inst_59074);

(statearr_59081_60347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (1))){
var inst_59056 = null;
var state_59079__$1 = (function (){var statearr_59082 = state_59079;
(statearr_59082[(7)] = inst_59056);

return statearr_59082;
})();
var statearr_59083_60352 = state_59079__$1;
(statearr_59083_60352[(2)] = null);

(statearr_59083_60352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (4))){
var inst_59059 = (state_59079[(8)]);
var inst_59059__$1 = (state_59079[(2)]);
var inst_59060 = (inst_59059__$1 == null);
var inst_59061 = cljs.core.not(inst_59060);
var state_59079__$1 = (function (){var statearr_59084 = state_59079;
(statearr_59084[(8)] = inst_59059__$1);

return statearr_59084;
})();
if(inst_59061){
var statearr_59085_60354 = state_59079__$1;
(statearr_59085_60354[(1)] = (5));

} else {
var statearr_59086_60355 = state_59079__$1;
(statearr_59086_60355[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (6))){
var state_59079__$1 = state_59079;
var statearr_59089_60356 = state_59079__$1;
(statearr_59089_60356[(2)] = null);

(statearr_59089_60356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (3))){
var inst_59076 = (state_59079[(2)]);
var inst_59077 = cljs.core.async.close_BANG_(out);
var state_59079__$1 = (function (){var statearr_59091 = state_59079;
(statearr_59091[(9)] = inst_59076);

return statearr_59091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_59079__$1,inst_59077);
} else {
if((state_val_59080 === (2))){
var state_59079__$1 = state_59079;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59079__$1,(4),ch);
} else {
if((state_val_59080 === (11))){
var inst_59059 = (state_59079[(8)]);
var inst_59068 = (state_59079[(2)]);
var inst_59056 = inst_59059;
var state_59079__$1 = (function (){var statearr_59096 = state_59079;
(statearr_59096[(7)] = inst_59056);

(statearr_59096[(10)] = inst_59068);

return statearr_59096;
})();
var statearr_59097_60361 = state_59079__$1;
(statearr_59097_60361[(2)] = null);

(statearr_59097_60361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (9))){
var inst_59059 = (state_59079[(8)]);
var state_59079__$1 = state_59079;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59079__$1,(11),out,inst_59059);
} else {
if((state_val_59080 === (5))){
var inst_59059 = (state_59079[(8)]);
var inst_59056 = (state_59079[(7)]);
var inst_59063 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59059,inst_59056);
var state_59079__$1 = state_59079;
if(inst_59063){
var statearr_59101_60365 = state_59079__$1;
(statearr_59101_60365[(1)] = (8));

} else {
var statearr_59103_60367 = state_59079__$1;
(statearr_59103_60367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (10))){
var inst_59071 = (state_59079[(2)]);
var state_59079__$1 = state_59079;
var statearr_59105_60370 = state_59079__$1;
(statearr_59105_60370[(2)] = inst_59071);

(statearr_59105_60370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59080 === (8))){
var inst_59056 = (state_59079[(7)]);
var tmp59099 = inst_59056;
var inst_59056__$1 = tmp59099;
var state_59079__$1 = (function (){var statearr_59106 = state_59079;
(statearr_59106[(7)] = inst_59056__$1);

return statearr_59106;
})();
var statearr_59107_60375 = state_59079__$1;
(statearr_59107_60375[(2)] = null);

(statearr_59107_60375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_59112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_59112[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_59112[(1)] = (1));

return statearr_59112;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_59079){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_59079);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e59113){var ex__55480__auto__ = e59113;
var statearr_59114_60381 = state_59079;
(statearr_59114_60381[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_59079[(4)]))){
var statearr_59117_60382 = state_59079;
(statearr_59117_60382[(1)] = cljs.core.first((state_59079[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60383 = state_59079;
state_59079 = G__60383;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_59079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_59079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_59119 = f__55697__auto__();
(statearr_59119[(6)] = c__55696__auto___60346);

return statearr_59119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__59128 = arguments.length;
switch (G__59128) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55696__auto___60389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_59176){
var state_val_59177 = (state_59176[(1)]);
if((state_val_59177 === (7))){
var inst_59172 = (state_59176[(2)]);
var state_59176__$1 = state_59176;
var statearr_59182_60392 = state_59176__$1;
(statearr_59182_60392[(2)] = inst_59172);

(statearr_59182_60392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (1))){
var inst_59135 = (new Array(n));
var inst_59136 = inst_59135;
var inst_59137 = (0);
var state_59176__$1 = (function (){var statearr_59183 = state_59176;
(statearr_59183[(7)] = inst_59136);

(statearr_59183[(8)] = inst_59137);

return statearr_59183;
})();
var statearr_59184_60398 = state_59176__$1;
(statearr_59184_60398[(2)] = null);

(statearr_59184_60398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (4))){
var inst_59142 = (state_59176[(9)]);
var inst_59142__$1 = (state_59176[(2)]);
var inst_59143 = (inst_59142__$1 == null);
var inst_59144 = cljs.core.not(inst_59143);
var state_59176__$1 = (function (){var statearr_59186 = state_59176;
(statearr_59186[(9)] = inst_59142__$1);

return statearr_59186;
})();
if(inst_59144){
var statearr_59190_60406 = state_59176__$1;
(statearr_59190_60406[(1)] = (5));

} else {
var statearr_59191_60408 = state_59176__$1;
(statearr_59191_60408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (15))){
var inst_59165 = (state_59176[(2)]);
var state_59176__$1 = state_59176;
var statearr_59193_60417 = state_59176__$1;
(statearr_59193_60417[(2)] = inst_59165);

(statearr_59193_60417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (13))){
var state_59176__$1 = state_59176;
var statearr_59194_60420 = state_59176__$1;
(statearr_59194_60420[(2)] = null);

(statearr_59194_60420[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (6))){
var inst_59137 = (state_59176[(8)]);
var inst_59160 = (inst_59137 > (0));
var state_59176__$1 = state_59176;
if(cljs.core.truth_(inst_59160)){
var statearr_59195_60428 = state_59176__$1;
(statearr_59195_60428[(1)] = (12));

} else {
var statearr_59197_60433 = state_59176__$1;
(statearr_59197_60433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (3))){
var inst_59174 = (state_59176[(2)]);
var state_59176__$1 = state_59176;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59176__$1,inst_59174);
} else {
if((state_val_59177 === (12))){
var inst_59136 = (state_59176[(7)]);
var inst_59162 = cljs.core.vec(inst_59136);
var state_59176__$1 = state_59176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59176__$1,(15),out,inst_59162);
} else {
if((state_val_59177 === (2))){
var state_59176__$1 = state_59176;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59176__$1,(4),ch);
} else {
if((state_val_59177 === (11))){
var inst_59154 = (state_59176[(2)]);
var inst_59155 = (new Array(n));
var inst_59136 = inst_59155;
var inst_59137 = (0);
var state_59176__$1 = (function (){var statearr_59208 = state_59176;
(statearr_59208[(7)] = inst_59136);

(statearr_59208[(10)] = inst_59154);

(statearr_59208[(8)] = inst_59137);

return statearr_59208;
})();
var statearr_59209_60460 = state_59176__$1;
(statearr_59209_60460[(2)] = null);

(statearr_59209_60460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (9))){
var inst_59136 = (state_59176[(7)]);
var inst_59152 = cljs.core.vec(inst_59136);
var state_59176__$1 = state_59176;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59176__$1,(11),out,inst_59152);
} else {
if((state_val_59177 === (5))){
var inst_59136 = (state_59176[(7)]);
var inst_59147 = (state_59176[(11)]);
var inst_59137 = (state_59176[(8)]);
var inst_59142 = (state_59176[(9)]);
var inst_59146 = (inst_59136[inst_59137] = inst_59142);
var inst_59147__$1 = (inst_59137 + (1));
var inst_59148 = (inst_59147__$1 < n);
var state_59176__$1 = (function (){var statearr_59217 = state_59176;
(statearr_59217[(11)] = inst_59147__$1);

(statearr_59217[(12)] = inst_59146);

return statearr_59217;
})();
if(cljs.core.truth_(inst_59148)){
var statearr_59218_60481 = state_59176__$1;
(statearr_59218_60481[(1)] = (8));

} else {
var statearr_59221_60483 = state_59176__$1;
(statearr_59221_60483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (14))){
var inst_59168 = (state_59176[(2)]);
var inst_59170 = cljs.core.async.close_BANG_(out);
var state_59176__$1 = (function (){var statearr_59225 = state_59176;
(statearr_59225[(13)] = inst_59168);

return statearr_59225;
})();
var statearr_59227_60496 = state_59176__$1;
(statearr_59227_60496[(2)] = inst_59170);

(statearr_59227_60496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (10))){
var inst_59158 = (state_59176[(2)]);
var state_59176__$1 = state_59176;
var statearr_59229_60502 = state_59176__$1;
(statearr_59229_60502[(2)] = inst_59158);

(statearr_59229_60502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59177 === (8))){
var inst_59136 = (state_59176[(7)]);
var inst_59147 = (state_59176[(11)]);
var tmp59224 = inst_59136;
var inst_59136__$1 = tmp59224;
var inst_59137 = inst_59147;
var state_59176__$1 = (function (){var statearr_59230 = state_59176;
(statearr_59230[(7)] = inst_59136__$1);

(statearr_59230[(8)] = inst_59137);

return statearr_59230;
})();
var statearr_59233_60503 = state_59176__$1;
(statearr_59233_60503[(2)] = null);

(statearr_59233_60503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_59237 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59237[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_59237[(1)] = (1));

return statearr_59237;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_59176){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_59176);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e59238){var ex__55480__auto__ = e59238;
var statearr_59239_60511 = state_59176;
(statearr_59239_60511[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_59176[(4)]))){
var statearr_59240_60512 = state_59176;
(statearr_59240_60512[(1)] = cljs.core.first((state_59176[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60517 = state_59176;
state_59176 = G__60517;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_59176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_59176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_59245 = f__55697__auto__();
(statearr_59245[(6)] = c__55696__auto___60389);

return statearr_59245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__59254 = arguments.length;
switch (G__59254) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__55696__auto___60533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__55697__auto__ = (function (){var switch__55476__auto__ = (function (state_59305){
var state_val_59306 = (state_59305[(1)]);
if((state_val_59306 === (7))){
var inst_59301 = (state_59305[(2)]);
var state_59305__$1 = state_59305;
var statearr_59311_60534 = state_59305__$1;
(statearr_59311_60534[(2)] = inst_59301);

(statearr_59311_60534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (1))){
var inst_59260 = [];
var inst_59261 = inst_59260;
var inst_59262 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_59305__$1 = (function (){var statearr_59312 = state_59305;
(statearr_59312[(7)] = inst_59261);

(statearr_59312[(8)] = inst_59262);

return statearr_59312;
})();
var statearr_59313_60539 = state_59305__$1;
(statearr_59313_60539[(2)] = null);

(statearr_59313_60539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (4))){
var inst_59266 = (state_59305[(9)]);
var inst_59266__$1 = (state_59305[(2)]);
var inst_59269 = (inst_59266__$1 == null);
var inst_59270 = cljs.core.not(inst_59269);
var state_59305__$1 = (function (){var statearr_59315 = state_59305;
(statearr_59315[(9)] = inst_59266__$1);

return statearr_59315;
})();
if(inst_59270){
var statearr_59318_60544 = state_59305__$1;
(statearr_59318_60544[(1)] = (5));

} else {
var statearr_59319_60545 = state_59305__$1;
(statearr_59319_60545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (15))){
var inst_59295 = (state_59305[(2)]);
var state_59305__$1 = state_59305;
var statearr_59325_60547 = state_59305__$1;
(statearr_59325_60547[(2)] = inst_59295);

(statearr_59325_60547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (13))){
var state_59305__$1 = state_59305;
var statearr_59326_60550 = state_59305__$1;
(statearr_59326_60550[(2)] = null);

(statearr_59326_60550[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (6))){
var inst_59261 = (state_59305[(7)]);
var inst_59289 = inst_59261.length;
var inst_59290 = (inst_59289 > (0));
var state_59305__$1 = state_59305;
if(cljs.core.truth_(inst_59290)){
var statearr_59329_60552 = state_59305__$1;
(statearr_59329_60552[(1)] = (12));

} else {
var statearr_59332_60554 = state_59305__$1;
(statearr_59332_60554[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (3))){
var inst_59303 = (state_59305[(2)]);
var state_59305__$1 = state_59305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_59305__$1,inst_59303);
} else {
if((state_val_59306 === (12))){
var inst_59261 = (state_59305[(7)]);
var inst_59293 = cljs.core.vec(inst_59261);
var state_59305__$1 = state_59305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59305__$1,(15),out,inst_59293);
} else {
if((state_val_59306 === (2))){
var state_59305__$1 = state_59305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_59305__$1,(4),ch);
} else {
if((state_val_59306 === (11))){
var inst_59266 = (state_59305[(9)]);
var inst_59272 = (state_59305[(10)]);
var inst_59282 = (state_59305[(2)]);
var inst_59283 = [];
var inst_59284 = inst_59283.push(inst_59266);
var inst_59261 = inst_59283;
var inst_59262 = inst_59272;
var state_59305__$1 = (function (){var statearr_59340 = state_59305;
(statearr_59340[(11)] = inst_59282);

(statearr_59340[(12)] = inst_59284);

(statearr_59340[(7)] = inst_59261);

(statearr_59340[(8)] = inst_59262);

return statearr_59340;
})();
var statearr_59341_60561 = state_59305__$1;
(statearr_59341_60561[(2)] = null);

(statearr_59341_60561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (9))){
var inst_59261 = (state_59305[(7)]);
var inst_59280 = cljs.core.vec(inst_59261);
var state_59305__$1 = state_59305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_59305__$1,(11),out,inst_59280);
} else {
if((state_val_59306 === (5))){
var inst_59266 = (state_59305[(9)]);
var inst_59272 = (state_59305[(10)]);
var inst_59262 = (state_59305[(8)]);
var inst_59272__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_59266) : f.call(null,inst_59266));
var inst_59273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_59272__$1,inst_59262);
var inst_59274 = cljs.core.keyword_identical_QMARK_(inst_59262,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_59275 = ((inst_59273) || (inst_59274));
var state_59305__$1 = (function (){var statearr_59345 = state_59305;
(statearr_59345[(10)] = inst_59272__$1);

return statearr_59345;
})();
if(cljs.core.truth_(inst_59275)){
var statearr_59346_60576 = state_59305__$1;
(statearr_59346_60576[(1)] = (8));

} else {
var statearr_59347_60578 = state_59305__$1;
(statearr_59347_60578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (14))){
var inst_59298 = (state_59305[(2)]);
var inst_59299 = cljs.core.async.close_BANG_(out);
var state_59305__$1 = (function (){var statearr_59349 = state_59305;
(statearr_59349[(13)] = inst_59298);

return statearr_59349;
})();
var statearr_59350_60586 = state_59305__$1;
(statearr_59350_60586[(2)] = inst_59299);

(statearr_59350_60586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (10))){
var inst_59287 = (state_59305[(2)]);
var state_59305__$1 = state_59305;
var statearr_59351_60593 = state_59305__$1;
(statearr_59351_60593[(2)] = inst_59287);

(statearr_59351_60593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59306 === (8))){
var inst_59266 = (state_59305[(9)]);
var inst_59272 = (state_59305[(10)]);
var inst_59261 = (state_59305[(7)]);
var inst_59277 = inst_59261.push(inst_59266);
var tmp59348 = inst_59261;
var inst_59261__$1 = tmp59348;
var inst_59262 = inst_59272;
var state_59305__$1 = (function (){var statearr_59352 = state_59305;
(statearr_59352[(14)] = inst_59277);

(statearr_59352[(7)] = inst_59261__$1);

(statearr_59352[(8)] = inst_59262);

return statearr_59352;
})();
var statearr_59353_60605 = state_59305__$1;
(statearr_59353_60605[(2)] = null);

(statearr_59353_60605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__55477__auto__ = null;
var cljs$core$async$state_machine__55477__auto____0 = (function (){
var statearr_59354 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59354[(0)] = cljs$core$async$state_machine__55477__auto__);

(statearr_59354[(1)] = (1));

return statearr_59354;
});
var cljs$core$async$state_machine__55477__auto____1 = (function (state_59305){
while(true){
var ret_value__55478__auto__ = (function (){try{while(true){
var result__55479__auto__ = switch__55476__auto__(state_59305);
if(cljs.core.keyword_identical_QMARK_(result__55479__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__55479__auto__;
}
break;
}
}catch (e59355){var ex__55480__auto__ = e59355;
var statearr_59356_60624 = state_59305;
(statearr_59356_60624[(2)] = ex__55480__auto__);


if(cljs.core.seq((state_59305[(4)]))){
var statearr_59357_60629 = state_59305;
(statearr_59357_60629[(1)] = cljs.core.first((state_59305[(4)])));

} else {
throw ex__55480__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__55478__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60630 = state_59305;
state_59305 = G__60630;
continue;
} else {
return ret_value__55478__auto__;
}
break;
}
});
cljs$core$async$state_machine__55477__auto__ = function(state_59305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__55477__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__55477__auto____1.call(this,state_59305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__55477__auto____0;
cljs$core$async$state_machine__55477__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__55477__auto____1;
return cljs$core$async$state_machine__55477__auto__;
})()
})();
var state__55698__auto__ = (function (){var statearr_59361 = f__55697__auto__();
(statearr_59361[(6)] = c__55696__auto___60533);

return statearr_59361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__55698__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
