(this["webpackJsonp@clrfund-deployer/web3"]=this["webpackJsonp@clrfund-deployer/web3"]||[]).push([[24],{1172:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return _}));var r=n(1),o=n.n(r),i=n(12),s=n(5),a=n(7),u=n(15),c=n(8),p=n(9),f=n(1173),l=n(1176),d=n(1177),h=n(432);function v(e,t,n){var r=new h.c(t,n);return r.originalError=e,r}var g=function(e){return e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")};function m(t,n,r,o){var i=function(t,n){for(var r=e.alloc(t.length),o=0;o<t.length;o++)r[o]=t[o]^n[o%n.length];return r}(t,r),s=e.from("0000000000000000000000000000000000000000000000000000000000000000","hex"),a={version:"U2F_V2",keyHandle:g(i.toString("base64")),challenge:g(s.toString("base64")),appId:location.origin};return Object(d.a)("apdu","=> "+t.toString("hex")),Object(f.sign)(a,n/1e3).then((function(t){var n,r=t.signatureData;if("string"===typeof r){var i,s=e.from((n=r).replace(/-/g,"+").replace(/_/g,"/")+"==".substring(0,3*n.length%4),"base64");return i=o?s.slice(5):s,Object(d.a)("apdu","<= "+i.toString("hex")),i}throw t}))}var E=[];var _=function(t){Object(c.a)(r,t);var n=Object(p.a)(r);function r(){var e;return Object(s.a)(this,r),(e=n.call(this)).scrambleKey=void 0,e.unwrap=!0,E.push(Object(u.a)(e)),e}return Object(a.a)(r,[{key:"exchange",value:function(){var e=Object(i.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(t,this.exchangeTimeout,this.scrambleKey,this.unwrap);case 3:return e.abrupt("return",e.sent);case 6:if(e.prev=6,e.t0=e.catch(0),!("object"===typeof e.t0.metaData)){e.next=14;break}throw 5===e.t0.metaData.code&&(E.forEach((function(e){return e.emit("disconnect")})),E=[]),v(e.t0,"Failed to sign with Ledger device: U2F "+e.t0.metaData.type,"U2F_"+e.t0.metaData.code);case 14:throw e.t0;case 15:case"end":return e.stop()}}),e,this,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setScrambleKey",value:function(t){this.scrambleKey=e.from(t,"ascii")}},{key:"setUnwrap",value:function(e){this.unwrap=e}},{key:"close",value:function(){return Promise.resolve()}}],[{key:"open",value:function(){var e=Object(i.a)(o.a.mark((function e(t){var n=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>1&&void 0!==n[1]?n[1]:5e3,e.abrupt("return",new r);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(l.a);_.isSupported=f.isSupported,_.list=function(){return Object(f.isSupported)().then((function(e){return e?[null]:[]}))},_.listen=function(e){var t=!1;return Object(f.isSupported)().then((function(n){t||(n?(e.next({type:"add",descriptor:null}),e.complete()):e.error(new h.c("U2F browser support is needed for Ledger. Please use Chrome, Opera or Firefox with a U2F extension. Also make sure you're on an HTTPS connection","U2FNotSupported")))})),{unsubscribe:function(){t=!0}}}}.call(this,n(239).Buffer)},1173:function(e,t,n){"use strict";e.exports=n(1174)},1174:function(e,t,n){"use strict";(function(t){e.exports=c;var r=n(1175),o="undefined"!==typeof navigator&&!!navigator.userAgent,i=o&&navigator.userAgent.match(/Safari\//)&&!navigator.userAgent.match(/Chrome\//),s=o&&navigator.userAgent.match(/Edge\/1[2345]/),a=null;function u(e){return a||(a=new e((function(e,t){function n(){e({u2f:null,native:!0})}return o?i?n():("undefined"!==typeof window.u2f&&"function"===typeof window.u2f.sign&&e({u2f:window.u2f,native:!0}),s||"http:"===location.protocol||"undefined"===typeof MessageChannel?n():void r.isSupported((function(t){t?e({u2f:r,native:!1}):n()}))):n()}))),a}function c(e){return{isSupported:l.bind(e),ensureSupport:h.bind(e),register:v.bind(e),sign:g.bind(e),ErrorCodes:c.ErrorCodes,ErrorNames:c.ErrorNames}}function p(e,t){var n=null!=t?t.errorCode:1,r=c.ErrorNames[""+n],o=new Error(e);return o.metaData={type:r,code:n},o}function f(e,t){var n={};return n.promise=new e((function(e,r){n.resolve=e,n.reject=r,t.then(e,r)})),n.promise.cancel=function(t,r){u(e).then((function(e){r&&!e.native&&e.u2f.disconnect(),n.reject(p(t,{errorCode:-1}))}))},n}function l(){return u(this).then((function(e){return!!e.u2f}))}function d(e){if(!e.u2f){if("http:"===location.protocol)throw new Error("U2F isn't supported over http, only https");throw new Error("U2F not supported")}}function h(){return u(this).then(d)}function v(e,t,n){var r=this;return Array.isArray(e)||(e=[e]),"number"===typeof t&&"undefined"===typeof n&&(n=t,t=null),t||(t=[]),f(r,u(r).then((function(o){d(o);var i=o.native,s=o.u2f;return new r((function(r,o){if(i){var a=e[0].appId;s.register(a,e,t,(function(e){e.errorCode?o(p("Registration failed",e)):(delete e.errorCode,r(e))}),n)}else s.register(e,t,(function(e,t){e?o(e):t.errorCode?o(p("Registration failed",t)):r(t)}),n)}))}))).promise}function g(e,t){var n=this;return Array.isArray(e)||(e=[e]),f(n,u(n).then((function(r){d(r);var o=r.native,i=r.u2f;return new n((function(n,r){if(o){var s=e[0].appId,a=e[0].challenge;i.sign(s,a,e,(function(e){e.errorCode?r(p("Sign failed",e)):(delete e.errorCode,n(e))}),t)}else i.sign(e,(function(e,t){e?r(e):t.errorCode?r(p("Sign failed",t)):n(t)}),t)}))}))).promise}function m(e){c[e]=function(){if(!t.Promise)throw new Error("The platform doesn't natively support promises");var n=[].slice.call(arguments);return c(t.Promise)[e].apply(null,n)}}c.ErrorCodes={CANCELLED:-1,OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},c.ErrorNames={"-1":"CANCELLED",0:"OK",1:"OTHER_ERROR",2:"BAD_REQUEST",3:"CONFIGURATION_UNSUPPORTED",4:"DEVICE_INELIGIBLE",5:"TIMEOUT"},m("isSupported"),m("ensureSupport"),m("register"),m("sign")}).call(this,n(56))},1175:function(e,t,n){"use strict";var r=r||{};e.exports=r,r.EXTENSION_ID="kmendfapggjehodndflmmgagdbamhnfd",r.MessageTypes={U2F_REGISTER_REQUEST:"u2f_register_request",U2F_SIGN_REQUEST:"u2f_sign_request",U2F_REGISTER_RESPONSE:"u2f_register_response",U2F_SIGN_RESPONSE:"u2f_sign_response"},r.ErrorCodes={OK:0,OTHER_ERROR:1,BAD_REQUEST:2,CONFIGURATION_UNSUPPORTED:3,DEVICE_INELIGIBLE:4,TIMEOUT:5},r.Request,r.Response,r.Error,r.SignRequest,r.SignResponse,r.RegisterRequest,r.RegisterResponse,r.disconnect=function(){r.port_&&r.port_.port_&&(r.port_.port_.disconnect(),r.port_=null)},r.getMessagePort=function(e){if("undefined"!=typeof chrome&&chrome.runtime){var t={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:[]};chrome.runtime.sendMessage(r.EXTENSION_ID,t,(function(){chrome.runtime.lastError?r.getIframePort_(e):r.getChromeRuntimePort_(e)}))}else r.getIframePort_(e)},r.getChromeRuntimePort_=function(e){var t=chrome.runtime.connect(r.EXTENSION_ID,{includeTlsChannelId:!0});setTimeout((function(){e(null,new r.WrappedChromeRuntimePort_(t))}),0)},r.WrappedChromeRuntimePort_=function(e){this.port_=e},r.WrappedChromeRuntimePort_.prototype.postMessage=function(e){this.port_.postMessage(e)},r.WrappedChromeRuntimePort_.prototype.addEventListener=function(e,t){var n=e.toLowerCase();"message"==n||"onmessage"==n?this.port_.onMessage.addListener((function(e){t({data:e})})):console.error("WrappedChromeRuntimePort only supports onMessage")},r.getIframePort_=function(e){var t="chrome-extension://"+r.EXTENSION_ID,n=document.createElement("iframe");n.src=t+"/u2f-comms.html",n.setAttribute("style","display:none"),document.body.appendChild(n);var o=!1,i=new MessageChannel;i.port1.addEventListener("message",(function t(n){"ready"==n.data?(i.port1.removeEventListener("message",t),o||(o=!0,e(null,i.port1))):console.error('First event on iframe port was not "ready"')})),i.port1.start(),n.addEventListener("load",(function(){n.contentWindow.postMessage("init",t,[i.port2])})),setTimeout((function(){o||(o=!0,e(new Error("IFrame extension not supported")))}),200)},r.EXTENSION_TIMEOUT_SEC=30,r.port_=null,r.waitingForPort_=[],r.reqCounter_=0,r.callbackMap_={},r.getPortSingleton_=function(e){r.port_?e(null,r.port_):(0==r.waitingForPort_.length&&r.getMessagePort((function(e,t){for(e||(r.port_=t,r.port_.addEventListener("message",r.responseHandler_));r.waitingForPort_.length;)r.waitingForPort_.shift()(e,t)})),r.waitingForPort_.push(e))},r.responseHandler_=function(e){var t=e.data,n=t.requestId;if(n&&r.callbackMap_[n]){var o=r.callbackMap_[n];delete r.callbackMap_[n],o(null,t.responseData)}else console.error("Unknown or missing requestId in response.")},r.isSupported=function(e){r.getPortSingleton_((function(t,n){e(!t)}))},r.sign=function(e,t,n){r.getPortSingleton_((function(o,i){if(o)return t(o);var s=++r.reqCounter_;r.callbackMap_[s]=t;var a={type:r.MessageTypes.U2F_SIGN_REQUEST,signRequests:e,timeoutSeconds:"undefined"!==typeof n?n:r.EXTENSION_TIMEOUT_SEC,requestId:s};i.postMessage(a)}))},r.register=function(e,t,n,o){r.getPortSingleton_((function(i,s){if(i)return n(i);var a=++r.reqCounter_;r.callbackMap_[a]=n;var u={type:r.MessageTypes.U2F_REGISTER_REQUEST,signRequests:t,registerRequests:e,timeoutSeconds:"undefined"!==typeof o?o:r.EXTENSION_TIMEOUT_SEC,requestId:a};s.postMessage(u)}))}},1176:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return l}));var r=n(38),o=n(1),i=n.n(o),s=n(12),a=n(5),u=n(7),c=n(250),p=n.n(c),f=n(432),l=function(){function t(){var n=this;Object(a.a)(this,t),this.exchangeTimeout=3e4,this.unresponsiveTimeout=15e3,this.deviceModel=null,this._events=new p.a,this.send=function(){var t=Object(s.a)(i.a.mark((function t(r,o,s,a){var u,c,p,l,d=arguments;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=d.length>4&&void 0!==d[4]?d[4]:e.alloc(0),c=d.length>5&&void 0!==d[5]?d[5]:[f.b.OK],!(u.length>=256)){t.next=4;break}throw new f.c("data.length exceed 256 bytes limit. Got: "+u.length,"DataLengthTooBig");case 4:return t.next=6,n.exchange(e.concat([e.from([r,o,s,a]),e.from([u.length]),u]));case 6:if(p=t.sent,l=p.readUInt16BE(p.length-2),c.some((function(e){return e===l}))){t.next=10;break}throw new f.e(l);case 10:return t.abrupt("return",p);case 11:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}(),this.exchangeBusyPromise=void 0,this.exchangeAtomicImpl=function(){var e=Object(s.a)(i.a.mark((function e(t){var r,o,s,a,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.exchangeBusyPromise){e.next=2;break}throw new f.d("An action was already pending on the Ledger device. Please deny or reconnect.");case 2:return o=new Promise((function(e){r=e})),n.exchangeBusyPromise=o,s=!1,a=setTimeout((function(){s=!0,n.emit("unresponsive")}),n.unresponsiveTimeout),e.prev=6,e.next=9,t();case 9:return u=e.sent,s&&n.emit("responsive"),e.abrupt("return",u);case 12:return e.prev=12,clearTimeout(a),r&&r(),n.exchangeBusyPromise=null,e.finish(12);case 17:case"end":return e.stop()}}),e,null,[[6,,12,17]])})));return function(t){return e.apply(this,arguments)}}(),this._appAPIlock=null}return Object(u.a)(t,[{key:"exchange",value:function(e){throw new Error("exchange not implemented")}},{key:"setScrambleKey",value:function(e){}},{key:"close",value:function(){return Promise.resolve()}},{key:"on",value:function(e,t){this._events.on(e,t)}},{key:"off",value:function(e,t){this._events.removeListener(e,t)}},{key:"emit",value:function(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(t=this._events).emit.apply(t,[e].concat(r))}},{key:"setDebugMode",value:function(){console.warn("setDebugMode is deprecated. use @ledgerhq/logs instead. No logs are emitted in this anymore.")}},{key:"setExchangeTimeout",value:function(e){this.exchangeTimeout=e}},{key:"setExchangeUnresponsiveTimeout",value:function(e){this.unresponsiveTimeout=e}},{key:"decorateAppAPIMethods",value:function(e,t,n){var o,i=Object(r.a)(t);try{for(i.s();!(o=i.n()).done;){var s=o.value;e[s]=this.decorateAppAPIMethod(s,e[s],e,n)}}catch(a){i.e(a)}finally{i.f()}}},{key:"decorateAppAPIMethod",value:function(e,t,n,r){var o=this;return Object(s.a)(i.a.mark((function s(){var a,u,c,p,l=arguments;return i.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!(a=o._appAPIlock)){i.next=3;break}return i.abrupt("return",Promise.reject(new f.c("Ledger Device is busy (lock "+a+")","TransportLocked")));case 3:for(i.prev=3,o._appAPIlock=e,o.setScrambleKey(r),u=l.length,c=new Array(u),p=0;p<u;p++)c[p]=l[p];return i.next=9,t.apply(n,c);case 9:return i.abrupt("return",i.sent);case 10:return i.prev=10,o._appAPIlock=null,i.finish(10);case 13:case"end":return i.stop()}}),s,null,[[3,,10,13]])})))}}],[{key:"create",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(r,o){var i=!1,s=e.listen({next:function(n){i=!0,s&&s.unsubscribe(),a&&clearTimeout(a),e.open(n.descriptor,t).then(r,o)},error:function(e){a&&clearTimeout(a),o(e)},complete:function(){a&&clearTimeout(a),i||o(new f.c(e.ErrorMessage_NoDeviceFound,"NoDeviceFound"))}}),a=n?setTimeout((function(){s.unsubscribe(),o(new f.c(e.ErrorMessage_ListenTimeout,"ListenTimeout"))}),n):null}))}}]),t}();l.isSupported=void 0,l.list=void 0,l.listen=void 0,l.open=void 0,l.ErrorMessage_ListenTimeout="No Ledger device found (timeout)",l.ErrorMessage_NoDeviceFound="No Ledger device found"}).call(this,n(239).Buffer)},1177:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=0,o=[],i=function(e,t,n){var i={type:e,id:String(++r),date:new Date};t&&(i.message=t),n&&(i.data=n),function(e){for(var t=0;t<o.length;t++)try{o[t](e)}catch(n){console.error(n)}}(i)};"undefined"!==typeof window&&(window.__ledgerLogsListen=function(e){return o.push(e),function(){var t=o.indexOf(e);-1!==t&&(o[t]=o[o.length-1],o.pop())}})},250:function(e,t,n){"use strict";var r,o="object"===typeof Reflect?Reflect:null,i=o&&"function"===typeof o.apply?o.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=o&&"function"===typeof o.ownKeys?o.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var s=Number.isNaN||function(e){return e!==e};function a(){a.init.call(this)}e.exports=a,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"===typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}m(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&m(e,"error",t,n)}(e,o,{once:!0})}))},a.EventEmitter=a,a.prototype._events=void 0,a.prototype._eventsCount=0,a.prototype._maxListeners=void 0;var u=10;function c(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function p(e){return void 0===e._maxListeners?a.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var o,i,s,a;if(c(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"===typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=p(e))>0&&s.length>o&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,a=u,console&&console.warn&&console.warn(a)}return e}function l(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=l.bind(r);return o.listener=n,r.wrapFn=o,o}function h(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):g(o,o.length)}function v(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function g(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function m(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(a,"defaultMaxListeners",{enumerable:!0,get:function(){return u},set:function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");u=e}}),a.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},a.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||s(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},a.prototype.getMaxListeners=function(){return p(this)},a.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var u=o[e];if(void 0===u)return!1;if("function"===typeof u)i(u,this,t);else{var c=u.length,p=g(u,c);for(n=0;n<c;++n)i(p[n],this,t)}return!0},a.prototype.addListener=function(e,t){return f(this,e,t,!1)},a.prototype.on=a.prototype.addListener,a.prototype.prependListener=function(e,t){return f(this,e,t,!0)},a.prototype.once=function(e,t){return c(t),this.on(e,d(this,e,t)),this},a.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,d(this,e,t)),this},a.prototype.removeListener=function(e,t){var n,r,o,i,s;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},a.prototype.off=a.prototype.removeListener,a.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},a.prototype.listeners=function(e){return h(this,e,!0)},a.prototype.rawListeners=function(e){return h(this,e,!1)},a.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):v.call(e,t)},a.prototype.listenerCount=v,a.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},432:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return f}));var r={},o={},i=function(e,t){o[e]=t},s=function(e){var t=function(t,n){Object.assign(this,n),this.name=e,this.message=t||e,this.stack=(new Error).stack};return t.prototype=new Error,r[e]=t,t};s("AccountNameRequired"),s("AccountNotSupported"),s("AmountRequired"),s("BluetoothRequired"),s("BtcUnmatchedApp"),s("CantOpenDevice"),s("CashAddrNotSupported"),s("CurrencyNotSupported"),s("DeviceAppVerifyNotSupported"),s("DeviceGenuineSocketEarlyClose"),s("DeviceNotGenuine"),s("DeviceOnDashboardExpected"),s("DeviceOnDashboardUnexpected"),s("DeviceInOSUExpected"),s("DeviceHalted"),s("DeviceNameInvalid"),s("DeviceSocketFail"),s("DeviceSocketNoBulkStatus"),s("DisconnectedDevice"),s("DisconnectedDeviceDuringOperation"),s("EnpointConfig");var a=s("EthAppPleaseEnableContractData"),u=(s("FeeEstimationFailed"),s("FirmwareNotRecognized"),s("HardResetFail"),s("InvalidXRPTag"),s("InvalidAddress"),s("InvalidAddressBecauseDestinationIsAlsoSource"),s("LatestMCUInstalledError"),s("UnknownMCU"),s("LedgerAPIError"),s("LedgerAPIErrorWithMessage"),s("LedgerAPINotAvailable"),s("ManagerAppAlreadyInstalled"),s("ManagerAppRelyOnBTC"),s("ManagerAppDepInstallRequired"),s("ManagerAppDepUninstallRequired"),s("ManagerDeviceLocked"),s("ManagerFirmwareNotEnoughSpace"),s("ManagerNotEnoughSpace"),s("ManagerUninstallBTCDep"),s("NetworkDown"),s("NoAddressesFound"),s("NotEnoughBalance"),s("NotEnoughBalanceToDelegate"),s("NotEnoughBalanceInParentAccount"),s("NotEnoughSpendableBalance"),s("NotEnoughBalanceBecauseDestinationNotCreated"),s("NoAccessToCamera"),s("NotEnoughGas"),s("NotSupportedLegacyAddress"),s("GasLessThanEstimate"),s("PasswordsDontMatch"),s("PasswordIncorrect"),s("RecommendSubAccountsToEmpty"),s("RecommendUndelegation"),s("TimeoutTagged"),s("UnexpectedBootloader"),s("MCUNotGenuineToDashboard"),s("RecipientRequired"),s("UnavailableTezosOriginatedAccountReceive"),s("UnavailableTezosOriginatedAccountSend"),s("UpdateFetchFileFail"),s("UpdateIncorrectHash"),s("UpdateIncorrectSig"),s("UpdateYourApp"),s("UserRefusedDeviceNameChange"),s("UserRefusedAddress"),s("UserRefusedFirmwareUpdate"),s("UserRefusedAllowManager"),s("UserRefusedOnDevice"),s("TransportOpenUserCancelled"),s("TransportInterfaceNotAvailable"),s("TransportRaceCondition"));s("TransportWebUSBGestureRequired"),s("DeviceShouldStayInApp"),s("WebsocketConnectionError"),s("WebsocketConnectionFailed"),s("WrongDeviceForAccount"),s("WrongAppForCurrency"),s("ETHAddressNonEIP"),s("CantScanQRCode"),s("FeeNotLoaded"),s("FeeRequired"),s("FeeTooHigh"),s("SyncError"),s("PairingFailed"),s("GenuineCheckFailed"),s("LedgerAPI4xx"),s("LedgerAPI5xx"),s("FirmwareOrAppUpdateRequired"),s("NoDBPathGiven"),s("DBWrongPassword"),s("DBNotReset");function c(e,t){this.name="TransportError",this.message=e,this.stack=(new Error).stack,this.id=t}c.prototype=new Error,i("TransportError",(function(e){return new c(e.message,e.id)}));var p={PIN_REMAINING_ATTEMPTS:25536,INCORRECT_LENGTH:26368,MISSING_CRITICAL_PARAMETER:26624,COMMAND_INCOMPATIBLE_FILE_STRUCTURE:27009,SECURITY_STATUS_NOT_SATISFIED:27010,CONDITIONS_OF_USE_NOT_SATISFIED:27013,INCORRECT_DATA:27264,NOT_ENOUGH_MEMORY_SPACE:27268,REFERENCED_DATA_NOT_FOUND:27272,FILE_ALREADY_EXISTS:27273,INCORRECT_P1_P2:27392,INS_NOT_SUPPORTED:27904,CLA_NOT_SUPPORTED:28160,TECHNICAL_PROBLEM:28416,OK:36864,MEMORY_PROBLEM:37440,NO_EF_SELECTED:37888,INVALID_OFFSET:37890,FILE_NOT_FOUND:37892,INCONSISTENT_FILE:37896,ALGORITHM_NOT_SUPPORTED:38020,INVALID_KCV:38021,CODE_NOT_INITIALIZED:38914,ACCESS_CONDITION_NOT_FULFILLED:38916,CONTRADICTION_SECRET_CODE_STATUS:38920,CONTRADICTION_INVALIDATION:38928,CODE_BLOCKED:38976,MAX_VALUE_REACHED:38992,GP_AUTH_FAILED:25344,LICENSING:28482,HALTED:28586};function f(e){this.name="TransportStatusError";var t=Object.keys(p).find((function(t){return p[t]===e}))||"UNKNOWN_ERROR",n=function(e){switch(e){case 26368:return"Incorrect length";case 26624:return"Missing critical parameter";case 27010:return"Security not satisfied (dongle locked or have invalid access rights)";case 27013:return"Condition of use not satisfied (denied by the user?)";case 27264:return"Invalid data received";case 27392:return"Invalid parameter received"}if(28416<=e&&e<=28671)return"Internal error, please report"}(e)||t,r=e.toString(16);this.message="Ledger device: "+n+" (0x"+r+")",this.stack=(new Error).stack,this.statusCode=e,this.statusText=t}f.prototype=new Error,i("TransportStatusError",(function(e){return new f(e.statusCode)}))}}]);
//# sourceMappingURL=24.2268a39c.chunk.js.map