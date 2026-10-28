(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function xu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sl={exports:{}},ua={},il={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),Su=Symbol.for("react.portal"),Cu=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),Au=Symbol.for("react.profiler"),Eu=Symbol.for("react.provider"),zu=Symbol.for("react.context"),Nu=Symbol.for("react.forward_ref"),Pu=Symbol.for("react.suspense"),Mu=Symbol.for("react.memo"),Hu=Symbol.for("react.lazy"),qi=Symbol.iterator;function Lu(e){return e===null||typeof e!="object"?null:(e=qi&&e[qi]||e["@@iterator"],typeof e=="function"?e:null)}var rl={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ll=Object.assign,hl={};function rn(e,t,n){this.props=e,this.context=t,this.refs=hl,this.updater=n||rl}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ul(){}ul.prototype=rn.prototype;function Ys(e,t,n){this.props=e,this.context=t,this.refs=hl,this.updater=n||rl}var Ks=Ys.prototype=new ul;Ks.constructor=Ys;ll(Ks,rn.prototype);Ks.isPureReactComponent=!0;var Yi=Array.isArray,dl=Object.prototype.hasOwnProperty,$s={current:null},cl={key:!0,ref:!0,__self:!0,__source:!0};function ml(e,t,n){var o,a={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)dl.call(t,o)&&!cl.hasOwnProperty(o)&&(a[o]=t[o]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var h=Array(l),d=0;d<l;d++)h[d]=arguments[d+2];a.children=h}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)a[o]===void 0&&(a[o]=l[o]);return{$$typeof:Xn,type:e,key:s,ref:i,props:a,_owner:$s.current}}function Du(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function Ru(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ki=/\/+/g;function za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ru(""+e.key):t.toString(36)}function So(e,t,n,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Xn:case Su:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+za(i,0):o,Yi(a)?(n="",e!=null&&(n=e.replace(Ki,"$&/")+"/"),So(a,t,n,"",function(d){return d})):a!=null&&(Qs(a)&&(a=Du(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(Ki,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",Yi(e))for(var l=0;l<e.length;l++){s=e[l];var h=o+za(s,l);i+=So(s,t,n,h,a)}else if(h=Lu(e),typeof h=="function")for(e=h.call(e),l=0;!(s=e.next()).done;)s=s.value,h=o+za(s,l++),i+=So(s,t,n,h,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function io(e,t,n){if(e==null)return e;var o=[],a=0;return So(e,o,"","",function(s){return t.call(n,s,a++)}),o}function Fu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var le={current:null},Co={transition:null},Uu={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:Co,ReactCurrentOwner:$s};function gl(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Qs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=rn;z.Fragment=Cu;z.Profiler=Au;z.PureComponent=Ys;z.StrictMode=Tu;z.Suspense=Pu;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uu;z.act=gl;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=ll({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=$s.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in t)dl.call(t,h)&&!cl.hasOwnProperty(h)&&(o[h]=t[h]===void 0&&l!==void 0?l[h]:t[h])}var h=arguments.length-2;if(h===1)o.children=n;else if(1<h){l=Array(h);for(var d=0;d<h;d++)l[d]=arguments[d+2];o.children=l}return{$$typeof:Xn,type:e.type,key:a,ref:s,props:o,_owner:i}};z.createContext=function(e){return e={$$typeof:zu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Eu,_context:e},e.Consumer=e};z.createElement=ml;z.createFactory=function(e){var t=ml.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:Nu,render:e}};z.isValidElement=Qs;z.lazy=function(e){return{$$typeof:Hu,_payload:{_status:-1,_result:e},_init:Fu}};z.memo=function(e,t){return{$$typeof:Mu,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Co.transition;Co.transition={};try{e()}finally{Co.transition=t}};z.unstable_act=gl;z.useCallback=function(e,t){return le.current.useCallback(e,t)};z.useContext=function(e){return le.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return le.current.useDeferredValue(e)};z.useEffect=function(e,t){return le.current.useEffect(e,t)};z.useId=function(){return le.current.useId()};z.useImperativeHandle=function(e,t,n){return le.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return le.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return le.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return le.current.useMemo(e,t)};z.useReducer=function(e,t,n){return le.current.useReducer(e,t,n)};z.useRef=function(e){return le.current.useRef(e)};z.useState=function(e){return le.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return le.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return le.current.useTransition()};z.version="18.3.1";il.exports=z;var Xs=il.exports;const D=xu(Xs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _u=Xs,Bu=Symbol.for("react.element"),Ou=Symbol.for("react.fragment"),Vu=Object.prototype.hasOwnProperty,Gu=_u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Wu={key:!0,ref:!0,__self:!0,__source:!0};function pl(e,t,n){var o,a={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Vu.call(t,o)&&!Wu.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:Bu,type:e,key:s,ref:i,props:a,_owner:Gu.current}}ua.Fragment=Ou;ua.jsx=pl;ua.jsxs=pl;sl.exports=ua;var r=sl.exports,fl={exports:{}},ve={},yl={exports:{}},wl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(x,A){var E=x.length;x.push(A);e:for(;0<E;){var W=E-1>>>1,$=x[W];if(0<a($,A))x[W]=A,x[E]=$,E=W;else break e}}function n(x){return x.length===0?null:x[0]}function o(x){if(x.length===0)return null;var A=x[0],E=x.pop();if(E!==A){x[0]=E;e:for(var W=0,$=x.length,ao=$>>>1;W<ao;){var yt=2*(W+1)-1,Ea=x[yt],wt=yt+1,so=x[wt];if(0>a(Ea,E))wt<$&&0>a(so,Ea)?(x[W]=so,x[wt]=E,W=wt):(x[W]=Ea,x[yt]=E,W=yt);else if(wt<$&&0>a(so,E))x[W]=so,x[wt]=E,W=wt;else break e}}return A}function a(x,A){var E=x.sortIndex-A.sortIndex;return E!==0?E:x.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var h=[],d=[],g=1,f=null,p=3,v=!1,k=!1,b=!1,F=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var A=n(d);A!==null;){if(A.callback===null)o(d);else if(A.startTime<=x)o(d),A.sortIndex=A.expirationTime,t(h,A);else break;A=n(d)}}function y(x){if(b=!1,m(x),!k)if(n(h)!==null)k=!0,Ta(I);else{var A=n(d);A!==null&&Aa(y,A.startTime-x)}}function I(x,A){k=!1,b&&(b=!1,c(T),T=-1),v=!0;var E=p;try{for(m(A),f=n(h);f!==null&&(!(f.expirationTime>A)||x&&!Te());){var W=f.callback;if(typeof W=="function"){f.callback=null,p=f.priorityLevel;var $=W(f.expirationTime<=A);A=e.unstable_now(),typeof $=="function"?f.callback=$:f===n(h)&&o(h),m(A)}else o(h);f=n(h)}if(f!==null)var ao=!0;else{var yt=n(d);yt!==null&&Aa(y,yt.startTime-A),ao=!1}return ao}finally{f=null,p=E,v=!1}}var S=!1,C=null,T=-1,G=5,N=-1;function Te(){return!(e.unstable_now()-N<G)}function un(){if(C!==null){var x=e.unstable_now();N=x;var A=!0;try{A=C(!0,x)}finally{A?dn():(S=!1,C=null)}}else S=!1}var dn;if(typeof u=="function")dn=function(){u(un)};else if(typeof MessageChannel<"u"){var Ji=new MessageChannel,Iu=Ji.port2;Ji.port1.onmessage=un,dn=function(){Iu.postMessage(null)}}else dn=function(){F(un,0)};function Ta(x){C=x,S||(S=!0,dn())}function Aa(x,A){T=F(function(){x(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,Ta(I))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(h)},e.unstable_next=function(x){switch(p){case 1:case 2:case 3:var A=3;break;default:A=p}var E=p;p=A;try{return x()}finally{p=E}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,A){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var E=p;p=x;try{return A()}finally{p=E}},e.unstable_scheduleCallback=function(x,A,E){var W=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?W+E:W):E=W,x){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=E+$,x={id:g++,callback:A,priorityLevel:x,startTime:E,expirationTime:$,sortIndex:-1},E>W?(x.sortIndex=E,t(d,x),n(h)===null&&x===n(d)&&(b?(c(T),T=-1):b=!0,Aa(y,E-W))):(x.sortIndex=$,t(h,x),k||v||(k=!0,Ta(I))),x},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(x){var A=p;return function(){var E=p;p=A;try{return x.apply(this,arguments)}finally{p=E}}}})(wl);yl.exports=wl;var Ju=yl.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qu=Xs,we=Ju;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vl=new Set,Ln={};function Pt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Ln[e]=t,e=0;e<t.length;e++)vl.add(t[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=Object.prototype.hasOwnProperty,Yu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$i={},Qi={};function Ku(e){return ns.call(Qi,e)?!0:ns.call($i,e)?!1:Yu.test(e)?Qi[e]=!0:($i[e]=!0,!1)}function $u(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qu(e,t,n,o){if(t===null||typeof t>"u"||$u(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function he(e,t,n,o,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new he(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];te[t]=new he(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new he(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new he(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new he(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new he(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new he(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new he(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new he(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zs=/[\-:]([a-z])/g;function ei(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zs,ei);te[t]=new he(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zs,ei);te[t]=new he(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zs,ei);te[t]=new he(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new he(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new he("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new he(e,1,!1,e.toLowerCase(),null,!0,!0)});function ti(e,t,n,o){var a=te.hasOwnProperty(t)?te[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qu(t,n,a,o)&&(n=null),o||a===null?Ku(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var $e=qu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),Lt=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),ni=Symbol.for("react.strict_mode"),os=Symbol.for("react.profiler"),kl=Symbol.for("react.provider"),bl=Symbol.for("react.context"),oi=Symbol.for("react.forward_ref"),as=Symbol.for("react.suspense"),ss=Symbol.for("react.suspense_list"),ai=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),jl=Symbol.for("react.offscreen"),Xi=Symbol.iterator;function cn(e){return e===null||typeof e!="object"?null:(e=Xi&&e[Xi]||e["@@iterator"],typeof e=="function"?e:null)}var O=Object.assign,Na;function bn(e){if(Na===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Na=t&&t[1]||""}return`
`+Na+e}var Pa=!1;function Ma(e,t){if(!e||Pa)return"";Pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var o=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){o=d}e.call(t.prototype)}else{try{throw Error()}catch(d){o=d}e()}}catch(d){if(d&&o&&typeof d.stack=="string"){for(var a=d.stack.split(`
`),s=o.stack.split(`
`),i=a.length-1,l=s.length-1;1<=i&&0<=l&&a[i]!==s[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==s[l]){if(i!==1||l!==1)do if(i--,l--,0>l||a[i]!==s[l]){var h=`
`+a[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=l);break}}}finally{Pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?bn(e):""}function Xu(e){switch(e.tag){case 5:return bn(e.type);case 16:return bn("Lazy");case 13:return bn("Suspense");case 19:return bn("SuspenseList");case 0:case 2:case 15:return e=Ma(e.type,!1),e;case 11:return e=Ma(e.type.render,!1),e;case 1:return e=Ma(e.type,!0),e;default:return""}}function is(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case Lt:return"Portal";case os:return"Profiler";case ni:return"StrictMode";case as:return"Suspense";case ss:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case bl:return(e.displayName||"Context")+".Consumer";case kl:return(e._context.displayName||"Context")+".Provider";case oi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ai:return t=e.displayName||null,t!==null?t:is(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return is(e(t))}catch{}}return null}function Zu(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return is(t);case 8:return t===ni?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ct(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Il(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ed(e){var t=Il(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lo(e){e._valueTracker||(e._valueTracker=ed(e))}function xl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Il(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Ro(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rs(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zi(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=ct(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sl(e,t){t=t.checked,t!=null&&ti(e,"checked",t,!1)}function ls(e,t){Sl(e,t);var n=ct(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hs(e,t.type,n):t.hasOwnProperty("defaultValue")&&hs(e,t.type,ct(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function er(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hs(e,t,n){(t!=="number"||Ro(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function qt(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function us(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(jn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ct(n)}}function Cl(e,t){var n=ct(t.value),o=ct(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function nr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,Al=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},td=["Webkit","ms","Moz","O"];Object.keys(Sn).forEach(function(e){td.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Sn[t]=Sn[e]})});function El(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Sn.hasOwnProperty(e)&&Sn[e]?(""+t).trim():t+"px"}function zl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=El(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var nd=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cs(e,t){if(t){if(nd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function ms(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gs=null;function si(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ps=null,Yt=null,Kt=null;function or(e){if(e=to(e)){if(typeof ps!="function")throw Error(w(280));var t=e.stateNode;t&&(t=pa(t),ps(e.stateNode,e.type,t))}}function Nl(e){Yt?Kt?Kt.push(e):Kt=[e]:Yt=e}function Pl(){if(Yt){var e=Yt,t=Kt;if(Kt=Yt=null,or(e),t)for(e=0;e<t.length;e++)or(t[e])}}function Ml(e,t){return e(t)}function Hl(){}var Ha=!1;function Ll(e,t,n){if(Ha)return e(t,n);Ha=!0;try{return Ml(e,t,n)}finally{Ha=!1,(Yt!==null||Kt!==null)&&(Hl(),Pl())}}function Rn(e,t){var n=e.stateNode;if(n===null)return null;var o=pa(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var fs=!1;if(Je)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){fs=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{fs=!1}function od(e,t,n,o,a,s,i,l,h){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var Cn=!1,Fo=null,Uo=!1,ys=null,ad={onError:function(e){Cn=!0,Fo=e}};function sd(e,t,n,o,a,s,i,l,h){Cn=!1,Fo=null,od.apply(ad,arguments)}function id(e,t,n,o,a,s,i,l,h){if(sd.apply(this,arguments),Cn){if(Cn){var d=Fo;Cn=!1,Fo=null}else throw Error(w(198));Uo||(Uo=!0,ys=d)}}function Mt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ar(e){if(Mt(e)!==e)throw Error(w(188))}function rd(e){var t=e.alternate;if(!t){if(t=Mt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return ar(a),e;if(s===o)return ar(a),t;s=s.sibling}throw Error(w(188))}if(n.return!==o.return)n=a,o=s;else{for(var i=!1,l=a.child;l;){if(l===n){i=!0,n=a,o=s;break}if(l===o){i=!0,o=a,n=s;break}l=l.sibling}if(!i){for(l=s.child;l;){if(l===n){i=!0,n=s,o=a;break}if(l===o){i=!0,o=s,n=a;break}l=l.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==o)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Rl(e){return e=rd(e),e!==null?Fl(e):null}function Fl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fl(e);if(t!==null)return t;e=e.sibling}return null}var Ul=we.unstable_scheduleCallback,sr=we.unstable_cancelCallback,ld=we.unstable_shouldYield,hd=we.unstable_requestPaint,J=we.unstable_now,ud=we.unstable_getCurrentPriorityLevel,ii=we.unstable_ImmediatePriority,_l=we.unstable_UserBlockingPriority,_o=we.unstable_NormalPriority,dd=we.unstable_LowPriority,Bl=we.unstable_IdlePriority,da=null,Ue=null;function cd(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(da,e,void 0,(e.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:pd,md=Math.log,gd=Math.LN2;function pd(e){return e>>>=0,e===0?32:31-(md(e)/gd|0)|0}var uo=64,co=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~a;l!==0?o=In(l):(s&=i,s!==0&&(o=In(s)))}else i=n&~a,i!==0?o=In(i):s!==0&&(o=In(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Pe(t),a=1<<n,o|=e[n],t&=~a;return o}function fd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yd(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Pe(s),l=1<<i,h=a[i];h===-1?(!(l&n)||l&o)&&(a[i]=fd(l,t)):h<=t&&(e.expiredLanes|=l),s&=~l}}function ws(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ol(){var e=uo;return uo<<=1,!(uo&4194240)&&(uo=64),e}function La(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pe(t),e[t]=n}function wd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Pe(n),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~s}}function ri(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Pe(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var M=0;function Vl(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gl,li,Wl,Jl,ql,vs=!1,mo=[],at=null,st=null,it=null,Fn=new Map,Un=new Map,et=[],vd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ir(e,t){switch(e){case"focusin":case"focusout":at=null;break;case"dragenter":case"dragleave":st=null;break;case"mouseover":case"mouseout":it=null;break;case"pointerover":case"pointerout":Fn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(t.pointerId)}}function gn(e,t,n,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=to(t),t!==null&&li(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function kd(e,t,n,o,a){switch(t){case"focusin":return at=gn(at,e,t,n,o,a),!0;case"dragenter":return st=gn(st,e,t,n,o,a),!0;case"mouseover":return it=gn(it,e,t,n,o,a),!0;case"pointerover":var s=a.pointerId;return Fn.set(s,gn(Fn.get(s)||null,e,t,n,o,a)),!0;case"gotpointercapture":return s=a.pointerId,Un.set(s,gn(Un.get(s)||null,e,t,n,o,a)),!0}return!1}function Yl(e){var t=bt(e.target);if(t!==null){var n=Mt(t);if(n!==null){if(t=n.tag,t===13){if(t=Dl(n),t!==null){e.blockedOn=t,ql(e.priority,function(){Wl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function To(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ks(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);gs=o,n.target.dispatchEvent(o),gs=null}else return t=to(n),t!==null&&li(t),e.blockedOn=n,!1;t.shift()}return!0}function rr(e,t,n){To(e)&&n.delete(t)}function bd(){vs=!1,at!==null&&To(at)&&(at=null),st!==null&&To(st)&&(st=null),it!==null&&To(it)&&(it=null),Fn.forEach(rr),Un.forEach(rr)}function pn(e,t){e.blockedOn===t&&(e.blockedOn=null,vs||(vs=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,bd)))}function _n(e){function t(a){return pn(a,e)}if(0<mo.length){pn(mo[0],e);for(var n=1;n<mo.length;n++){var o=mo[n];o.blockedOn===e&&(o.blockedOn=null)}}for(at!==null&&pn(at,e),st!==null&&pn(st,e),it!==null&&pn(it,e),Fn.forEach(t),Un.forEach(t),n=0;n<et.length;n++)o=et[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Yl(n),n.blockedOn===null&&et.shift()}var $t=$e.ReactCurrentBatchConfig,Oo=!0;function jd(e,t,n,o){var a=M,s=$t.transition;$t.transition=null;try{M=1,hi(e,t,n,o)}finally{M=a,$t.transition=s}}function Id(e,t,n,o){var a=M,s=$t.transition;$t.transition=null;try{M=4,hi(e,t,n,o)}finally{M=a,$t.transition=s}}function hi(e,t,n,o){if(Oo){var a=ks(e,t,n,o);if(a===null)Wa(e,t,o,Vo,n),ir(e,o);else if(kd(a,e,t,n,o))o.stopPropagation();else if(ir(e,o),t&4&&-1<vd.indexOf(e)){for(;a!==null;){var s=to(a);if(s!==null&&Gl(s),s=ks(e,t,n,o),s===null&&Wa(e,t,o,Vo,n),s===a)break;a=s}a!==null&&o.stopPropagation()}else Wa(e,t,o,null,n)}}var Vo=null;function ks(e,t,n,o){if(Vo=null,e=si(o),e=bt(e),e!==null)if(t=Mt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function Kl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ud()){case ii:return 1;case _l:return 4;case _o:case dd:return 16;case Bl:return 536870912;default:return 16}default:return 16}}var nt=null,ui=null,Ao=null;function $l(){if(Ao)return Ao;var e,t=ui,n=t.length,o,a="value"in nt?nt.value:nt.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===a[s-o];o++);return Ao=a.slice(e,1<o?1-o:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function lr(){return!1}function ke(e){function t(n,o,a,s,i){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?go:lr,this.isPropagationStopped=lr,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},di=ke(ln),eo=O({},ln,{view:0,detail:0}),xd=ke(eo),Da,Ra,fn,ca=O({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ci,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fn&&(fn&&e.type==="mousemove"?(Da=e.screenX-fn.screenX,Ra=e.screenY-fn.screenY):Ra=Da=0,fn=e),Da)},movementY:function(e){return"movementY"in e?e.movementY:Ra}}),hr=ke(ca),Sd=O({},ca,{dataTransfer:0}),Cd=ke(Sd),Td=O({},eo,{relatedTarget:0}),Fa=ke(Td),Ad=O({},ln,{animationName:0,elapsedTime:0,pseudoElement:0}),Ed=ke(Ad),zd=O({},ln,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Nd=ke(zd),Pd=O({},ln,{data:0}),ur=ke(Pd),Md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ld[e])?!!t[e]:!1}function ci(){return Dd}var Rd=O({},eo,{key:function(e){if(e.key){var t=Md[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Hd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ci,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fd=ke(Rd),Ud=O({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dr=ke(Ud),_d=O({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ci}),Bd=ke(_d),Od=O({},ln,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vd=ke(Od),Gd=O({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=ke(Gd),Jd=[9,13,27,32],mi=Je&&"CompositionEvent"in window,Tn=null;Je&&"documentMode"in document&&(Tn=document.documentMode);var qd=Je&&"TextEvent"in window&&!Tn,Ql=Je&&(!mi||Tn&&8<Tn&&11>=Tn),cr=" ",mr=!1;function Xl(e,t){switch(e){case"keyup":return Jd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rt=!1;function Yd(e,t){switch(e){case"compositionend":return Zl(t);case"keypress":return t.which!==32?null:(mr=!0,cr);case"textInput":return e=t.data,e===cr&&mr?null:e;default:return null}}function Kd(e,t){if(Rt)return e==="compositionend"||!mi&&Xl(e,t)?(e=$l(),Ao=ui=nt=null,Rt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ql&&t.locale!=="ko"?null:t.data;default:return null}}var $d={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$d[e.type]:t==="textarea"}function eh(e,t,n,o){Nl(o),t=Go(t,"onChange"),0<t.length&&(n=new di("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var An=null,Bn=null;function Qd(e){dh(e,0)}function ma(e){var t=_t(e);if(xl(t))return e}function Xd(e,t){if(e==="change")return t}var th=!1;if(Je){var Ua;if(Je){var _a="oninput"in document;if(!_a){var pr=document.createElement("div");pr.setAttribute("oninput","return;"),_a=typeof pr.oninput=="function"}Ua=_a}else Ua=!1;th=Ua&&(!document.documentMode||9<document.documentMode)}function fr(){An&&(An.detachEvent("onpropertychange",nh),Bn=An=null)}function nh(e){if(e.propertyName==="value"&&ma(Bn)){var t=[];eh(t,Bn,e,si(e)),Ll(Qd,t)}}function Zd(e,t,n){e==="focusin"?(fr(),An=t,Bn=n,An.attachEvent("onpropertychange",nh)):e==="focusout"&&fr()}function ec(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ma(Bn)}function tc(e,t){if(e==="click")return ma(t)}function nc(e,t){if(e==="input"||e==="change")return ma(t)}function oc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:oc;function On(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!ns.call(t,a)||!He(e[a],t[a]))return!1}return!0}function yr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=yr(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yr(n)}}function oh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?oh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ah(){for(var e=window,t=Ro();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ro(e.document)}return t}function gi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function ac(e){var t=ah(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&oh(n.ownerDocument.documentElement,n)){if(o!==null&&gi(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=wr(n,s);var i=wr(n,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var sc=Je&&"documentMode"in document&&11>=document.documentMode,Ft=null,bs=null,En=null,js=!1;function vr(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;js||Ft==null||Ft!==Ro(o)||(o=Ft,"selectionStart"in o&&gi(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),En&&On(En,o)||(En=o,o=Go(bs,"onSelect"),0<o.length&&(t=new di("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Ft)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Ba={},sh={};Je&&(sh=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function ga(e){if(Ba[e])return Ba[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sh)return Ba[e]=t[n];return e}var ih=ga("animationend"),rh=ga("animationiteration"),lh=ga("animationstart"),hh=ga("transitionend"),uh=new Map,kr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){uh.set(e,t),Pt(t,[e])}for(var Oa=0;Oa<kr.length;Oa++){var Va=kr[Oa],ic=Va.toLowerCase(),rc=Va[0].toUpperCase()+Va.slice(1);gt(ic,"on"+rc)}gt(ih,"onAnimationEnd");gt(rh,"onAnimationIteration");gt(lh,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(hh,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lc=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function br(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,id(o,t,void 0,e),e.currentTarget=null}function dh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var i=o.length-1;0<=i;i--){var l=o[i],h=l.instance,d=l.currentTarget;if(l=l.listener,h!==s&&a.isPropagationStopped())break e;br(a,l,d),s=h}else for(i=0;i<o.length;i++){if(l=o[i],h=l.instance,d=l.currentTarget,l=l.listener,h!==s&&a.isPropagationStopped())break e;br(a,l,d),s=h}}}if(Uo)throw e=ys,Uo=!1,ys=null,e}function L(e,t){var n=t[Ts];n===void 0&&(n=t[Ts]=new Set);var o=e+"__bubble";n.has(o)||(ch(t,e,2,!1),n.add(o))}function Ga(e,t,n){var o=0;t&&(o|=4),ch(n,e,o,t)}var fo="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[fo]){e[fo]=!0,vl.forEach(function(n){n!=="selectionchange"&&(lc.has(n)||Ga(n,!1,e),Ga(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fo]||(t[fo]=!0,Ga("selectionchange",!1,t))}}function ch(e,t,n,o){switch(Kl(t)){case 1:var a=jd;break;case 4:a=Id;break;default:a=hi}n=a.bind(null,t,n,e),a=void 0,!fs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wa(e,t,n,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var l=o.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var h=i.tag;if((h===3||h===4)&&(h=i.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;i=i.return}for(;l!==null;){if(i=bt(l),i===null)return;if(h=i.tag,h===5||h===6){o=s=i;continue e}l=l.parentNode}}o=o.return}Ll(function(){var d=s,g=si(n),f=[];e:{var p=uh.get(e);if(p!==void 0){var v=di,k=e;switch(e){case"keypress":if(Eo(n)===0)break e;case"keydown":case"keyup":v=Fd;break;case"focusin":k="focus",v=Fa;break;case"focusout":k="blur",v=Fa;break;case"beforeblur":case"afterblur":v=Fa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=hr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Bd;break;case ih:case rh:case lh:v=Ed;break;case hh:v=Vd;break;case"scroll":v=xd;break;case"wheel":v=Wd;break;case"copy":case"cut":case"paste":v=Nd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=dr}var b=(t&4)!==0,F=!b&&e==="scroll",c=b?p!==null?p+"Capture":null:p;b=[];for(var u=d,m;u!==null;){m=u;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,c!==null&&(y=Rn(u,c),y!=null&&b.push(Gn(u,y,m)))),F)break;u=u.return}0<b.length&&(p=new v(p,k,null,n,g),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==gs&&(k=n.relatedTarget||n.fromElement)&&(bt(k)||k[qe]))break e;if((v||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=d,k=k?bt(k):null,k!==null&&(F=Mt(k),k!==F||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=d),v!==k)){if(b=hr,y="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=dr,y="onPointerLeave",c="onPointerEnter",u="pointer"),F=v==null?p:_t(v),m=k==null?p:_t(k),p=new b(y,u+"leave",v,n,g),p.target=F,p.relatedTarget=m,y=null,bt(g)===d&&(b=new b(c,u+"enter",k,n,g),b.target=m,b.relatedTarget=F,y=b),F=y,v&&k)t:{for(b=v,c=k,u=0,m=b;m;m=Ht(m))u++;for(m=0,y=c;y;y=Ht(y))m++;for(;0<u-m;)b=Ht(b),u--;for(;0<m-u;)c=Ht(c),m--;for(;u--;){if(b===c||c!==null&&b===c.alternate)break t;b=Ht(b),c=Ht(c)}b=null}else b=null;v!==null&&jr(f,p,v,b,!1),k!==null&&F!==null&&jr(f,F,k,b,!0)}}e:{if(p=d?_t(d):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var I=Xd;else if(gr(p))if(th)I=nc;else{I=ec;var S=Zd}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(I=tc);if(I&&(I=I(e,d))){eh(f,I,n,g);break e}S&&S(e,p,d),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&hs(p,"number",p.value)}switch(S=d?_t(d):window,e){case"focusin":(gr(S)||S.contentEditable==="true")&&(Ft=S,bs=d,En=null);break;case"focusout":En=bs=Ft=null;break;case"mousedown":js=!0;break;case"contextmenu":case"mouseup":case"dragend":js=!1,vr(f,n,g);break;case"selectionchange":if(sc)break;case"keydown":case"keyup":vr(f,n,g)}var C;if(mi)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Rt?Xl(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Ql&&n.locale!=="ko"&&(Rt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Rt&&(C=$l()):(nt=g,ui="value"in nt?nt.value:nt.textContent,Rt=!0)),S=Go(d,T),0<S.length&&(T=new ur(T,e,null,n,g),f.push({event:T,listeners:S}),C?T.data=C:(C=Zl(n),C!==null&&(T.data=C)))),(C=qd?Yd(e,n):Kd(e,n))&&(d=Go(d,"onBeforeInput"),0<d.length&&(g=new ur("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:d}),g.data=C))}dh(f,t)})}function Gn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Rn(e,n),s!=null&&o.unshift(Gn(e,s,a)),s=Rn(e,t),s!=null&&o.push(Gn(e,s,a))),e=e.return}return o}function Ht(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jr(e,t,n,o,a){for(var s=t._reactName,i=[];n!==null&&n!==o;){var l=n,h=l.alternate,d=l.stateNode;if(h!==null&&h===o)break;l.tag===5&&d!==null&&(l=d,a?(h=Rn(n,s),h!=null&&i.unshift(Gn(n,h,l))):a||(h=Rn(n,s),h!=null&&i.push(Gn(n,h,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var hc=/\r\n?/g,uc=/\u0000|\uFFFD/g;function Ir(e){return(typeof e=="string"?e:""+e).replace(hc,`
`).replace(uc,"")}function yo(e,t,n){if(t=Ir(t),Ir(e)!==t&&n)throw Error(w(425))}function Wo(){}var Is=null,xs=null;function Ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Cs=typeof setTimeout=="function"?setTimeout:void 0,dc=typeof clearTimeout=="function"?clearTimeout:void 0,xr=typeof Promise=="function"?Promise:void 0,cc=typeof queueMicrotask=="function"?queueMicrotask:typeof xr<"u"?function(e){return xr.resolve(null).then(e).catch(mc)}:Cs;function mc(e){setTimeout(function(){throw e})}function Ja(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),_n(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);_n(t)}function rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Fe="__reactFiber$"+hn,Wn="__reactProps$"+hn,qe="__reactContainer$"+hn,Ts="__reactEvents$"+hn,gc="__reactListeners$"+hn,pc="__reactHandles$"+hn;function bt(e){var t=e[Fe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qe]||n[Fe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sr(e);e!==null;){if(n=e[Fe])return n;e=Sr(e)}return t}e=n,n=e.parentNode}return null}function to(e){return e=e[Fe]||e[qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function pa(e){return e[Wn]||null}var As=[],Bt=-1;function pt(e){return{current:e}}function R(e){0>Bt||(e.current=As[Bt],As[Bt]=null,Bt--)}function H(e,t){Bt++,As[Bt]=e.current,e.current=t}var mt={},se=pt(mt),ce=pt(!1),Tt=mt;function en(e,t){var n=e.type.contextTypes;if(!n)return mt;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function me(e){return e=e.childContextTypes,e!=null}function Jo(){R(ce),R(se)}function Cr(e,t,n){if(se.current!==mt)throw Error(w(168));H(se,t),H(ce,n)}function mh(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(w(108,Zu(e)||"Unknown",a));return O({},n,o)}function qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Tt=se.current,H(se,e),H(ce,ce.current),!0}function Tr(e,t,n){var o=e.stateNode;if(!o)throw Error(w(169));n?(e=mh(e,t,Tt),o.__reactInternalMemoizedMergedChildContext=e,R(ce),R(se),H(se,e)):R(ce),H(ce,n)}var Oe=null,fa=!1,qa=!1;function gh(e){Oe===null?Oe=[e]:Oe.push(e)}function fc(e){fa=!0,gh(e)}function ft(){if(!qa&&Oe!==null){qa=!0;var e=0,t=M;try{var n=Oe;for(M=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Oe=null,fa=!1}catch(a){throw Oe!==null&&(Oe=Oe.slice(e+1)),Ul(ii,ft),a}finally{M=t,qa=!1}}return null}var Ot=[],Vt=0,Yo=null,Ko=0,be=[],je=0,At=null,Ve=1,Ge="";function vt(e,t){Ot[Vt++]=Ko,Ot[Vt++]=Yo,Yo=e,Ko=t}function ph(e,t,n){be[je++]=Ve,be[je++]=Ge,be[je++]=At,At=e;var o=Ve;e=Ge;var a=32-Pe(o)-1;o&=~(1<<a),n+=1;var s=32-Pe(t)+a;if(30<s){var i=a-a%5;s=(o&(1<<i)-1).toString(32),o>>=i,a-=i,Ve=1<<32-Pe(t)+a|n<<a|o,Ge=s+e}else Ve=1<<s|n<<a|o,Ge=e}function pi(e){e.return!==null&&(vt(e,1),ph(e,1,0))}function fi(e){for(;e===Yo;)Yo=Ot[--Vt],Ot[Vt]=null,Ko=Ot[--Vt],Ot[Vt]=null;for(;e===At;)At=be[--je],be[je]=null,Ge=be[--je],be[je]=null,Ve=be[--je],be[je]=null}var ye=null,fe=null,U=!1,Ne=null;function fh(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ar(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,fe=rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=At!==null?{id:Ve,overflow:Ge}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,fe=null,!0):!1;default:return!1}}function Es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function zs(e){if(U){var t=fe;if(t){var n=t;if(!Ar(e,t)){if(Es(e))throw Error(w(418));t=rt(n.nextSibling);var o=ye;t&&Ar(e,t)?fh(o,n):(e.flags=e.flags&-4097|2,U=!1,ye=e)}}else{if(Es(e))throw Error(w(418));e.flags=e.flags&-4097|2,U=!1,ye=e}}}function Er(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function wo(e){if(e!==ye)return!1;if(!U)return Er(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ss(e.type,e.memoizedProps)),t&&(t=fe)){if(Es(e))throw yh(),Error(w(418));for(;t;)fh(e,t),t=rt(t.nextSibling)}if(Er(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){fe=rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}fe=null}}else fe=ye?rt(e.stateNode.nextSibling):null;return!0}function yh(){for(var e=fe;e;)e=rt(e.nextSibling)}function tn(){fe=ye=null,U=!1}function yi(e){Ne===null?Ne=[e]:Ne.push(e)}var yc=$e.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var o=n.stateNode}if(!o)throw Error(w(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var l=a.refs;i===null?delete l[s]:l[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function zr(e){var t=e._init;return t(e._payload)}function wh(e){function t(c,u){if(e){var m=c.deletions;m===null?(c.deletions=[u],c.flags|=16):m.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function o(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function a(c,u){return c=dt(c,u),c.index=0,c.sibling=null,c}function s(c,u,m){return c.index=m,e?(m=c.alternate,m!==null?(m=m.index,m<u?(c.flags|=2,u):m):(c.flags|=2,u)):(c.flags|=1048576,u)}function i(c){return e&&c.alternate===null&&(c.flags|=2),c}function l(c,u,m,y){return u===null||u.tag!==6?(u=es(m,c.mode,y),u.return=c,u):(u=a(u,m),u.return=c,u)}function h(c,u,m,y){var I=m.type;return I===Dt?g(c,u,m.props.children,y,m.key):u!==null&&(u.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Xe&&zr(I)===u.type)?(y=a(u,m.props),y.ref=yn(c,u,m),y.return=c,y):(y=Do(m.type,m.key,m.props,null,c.mode,y),y.ref=yn(c,u,m),y.return=c,y)}function d(c,u,m,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=ts(m,c.mode,y),u.return=c,u):(u=a(u,m.children||[]),u.return=c,u)}function g(c,u,m,y,I){return u===null||u.tag!==7?(u=St(m,c.mode,y,I),u.return=c,u):(u=a(u,m),u.return=c,u)}function f(c,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=es(""+u,c.mode,m),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ro:return m=Do(u.type,u.key,u.props,null,c.mode,m),m.ref=yn(c,null,u),m.return=c,m;case Lt:return u=ts(u,c.mode,m),u.return=c,u;case Xe:var y=u._init;return f(c,y(u._payload),m)}if(jn(u)||cn(u))return u=St(u,c.mode,m,null),u.return=c,u;vo(c,u)}return null}function p(c,u,m,y){var I=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:l(c,u,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ro:return m.key===I?h(c,u,m,y):null;case Lt:return m.key===I?d(c,u,m,y):null;case Xe:return I=m._init,p(c,u,I(m._payload),y)}if(jn(m)||cn(m))return I!==null?null:g(c,u,m,y,null);vo(c,m)}return null}function v(c,u,m,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(m)||null,l(u,c,""+y,I);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:return c=c.get(y.key===null?m:y.key)||null,h(u,c,y,I);case Lt:return c=c.get(y.key===null?m:y.key)||null,d(u,c,y,I);case Xe:var S=y._init;return v(c,u,m,S(y._payload),I)}if(jn(y)||cn(y))return c=c.get(m)||null,g(u,c,y,I,null);vo(u,y)}return null}function k(c,u,m,y){for(var I=null,S=null,C=u,T=u=0,G=null;C!==null&&T<m.length;T++){C.index>T?(G=C,C=null):G=C.sibling;var N=p(c,C,m[T],y);if(N===null){C===null&&(C=G);break}e&&C&&N.alternate===null&&t(c,C),u=s(N,u,T),S===null?I=N:S.sibling=N,S=N,C=G}if(T===m.length)return n(c,C),U&&vt(c,T),I;if(C===null){for(;T<m.length;T++)C=f(c,m[T],y),C!==null&&(u=s(C,u,T),S===null?I=C:S.sibling=C,S=C);return U&&vt(c,T),I}for(C=o(c,C);T<m.length;T++)G=v(C,c,T,m[T],y),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?T:G.key),u=s(G,u,T),S===null?I=G:S.sibling=G,S=G);return e&&C.forEach(function(Te){return t(c,Te)}),U&&vt(c,T),I}function b(c,u,m,y){var I=cn(m);if(typeof I!="function")throw Error(w(150));if(m=I.call(m),m==null)throw Error(w(151));for(var S=I=null,C=u,T=u=0,G=null,N=m.next();C!==null&&!N.done;T++,N=m.next()){C.index>T?(G=C,C=null):G=C.sibling;var Te=p(c,C,N.value,y);if(Te===null){C===null&&(C=G);break}e&&C&&Te.alternate===null&&t(c,C),u=s(Te,u,T),S===null?I=Te:S.sibling=Te,S=Te,C=G}if(N.done)return n(c,C),U&&vt(c,T),I;if(C===null){for(;!N.done;T++,N=m.next())N=f(c,N.value,y),N!==null&&(u=s(N,u,T),S===null?I=N:S.sibling=N,S=N);return U&&vt(c,T),I}for(C=o(c,C);!N.done;T++,N=m.next())N=v(C,c,T,N.value,y),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?T:N.key),u=s(N,u,T),S===null?I=N:S.sibling=N,S=N);return e&&C.forEach(function(un){return t(c,un)}),U&&vt(c,T),I}function F(c,u,m,y){if(typeof m=="object"&&m!==null&&m.type===Dt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ro:e:{for(var I=m.key,S=u;S!==null;){if(S.key===I){if(I=m.type,I===Dt){if(S.tag===7){n(c,S.sibling),u=a(S,m.props.children),u.return=c,c=u;break e}}else if(S.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Xe&&zr(I)===S.type){n(c,S.sibling),u=a(S,m.props),u.ref=yn(c,S,m),u.return=c,c=u;break e}n(c,S);break}else t(c,S);S=S.sibling}m.type===Dt?(u=St(m.props.children,c.mode,y,m.key),u.return=c,c=u):(y=Do(m.type,m.key,m.props,null,c.mode,y),y.ref=yn(c,u,m),y.return=c,c=y)}return i(c);case Lt:e:{for(S=m.key;u!==null;){if(u.key===S)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){n(c,u.sibling),u=a(u,m.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=ts(m,c.mode,y),u.return=c,c=u}return i(c);case Xe:return S=m._init,F(c,u,S(m._payload),y)}if(jn(m))return k(c,u,m,y);if(cn(m))return b(c,u,m,y);vo(c,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(n(c,u.sibling),u=a(u,m),u.return=c,c=u):(n(c,u),u=es(m,c.mode,y),u.return=c,c=u),i(c)):n(c,u)}return F}var nn=wh(!0),vh=wh(!1),$o=pt(null),Qo=null,Gt=null,wi=null;function vi(){wi=Gt=Qo=null}function ki(e){var t=$o.current;R($o),e._currentValue=t}function Ns(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Qt(e,t){Qo=e,wi=Gt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Se(e){var t=e._currentValue;if(wi!==e)if(e={context:e,memoizedValue:t,next:null},Gt===null){if(Qo===null)throw Error(w(308));Gt=e,Qo.dependencies={lanes:0,firstContext:e}}else Gt=Gt.next=e;return t}var jt=null;function bi(e){jt===null?jt=[e]:jt.push(e)}function kh(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,bi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ye(e,o)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ze=!1;function ji(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function lt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,P&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Ye(e,n)}return a=o.interleaved,a===null?(t.next=t,bi(o)):(t.next=a.next,a.next=t),o.interleaved=t,Ye(e,n)}function zo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ri(e,n)}}function Nr(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,o){var a=e.updateQueue;Ze=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var h=l,d=h.next;h.next=null,i===null?s=d:i.next=d,i=h;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==i&&(l===null?g.firstBaseUpdate=d:l.next=d,g.lastBaseUpdate=h))}if(s!==null){var f=a.baseState;i=0,g=d=h=null,l=s;do{var p=l.lane,v=l.eventTime;if((o&p)===p){g!==null&&(g=g.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,b=l;switch(p=t,v=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){f=k.call(v,f,p);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,p=typeof k=="function"?k.call(v,f,p):k,p==null)break e;f=O({},f,p);break e;case 2:Ze=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=a.effects,p===null?a.effects=[l]:p.push(l))}else v={eventTime:v,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(d=g=v,h=f):g=g.next=v,i|=p;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;p=l,l=p.next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}while(!0);if(g===null&&(h=f),a.baseState=h,a.firstBaseUpdate=d,a.lastBaseUpdate=g,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);zt|=i,e.lanes=i,e.memoizedState=f}}function Pr(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(w(191,a));a.call(o)}}}var no={},_e=pt(no),Jn=pt(no),qn=pt(no);function It(e){if(e===no)throw Error(w(174));return e}function Ii(e,t){switch(H(qn,t),H(Jn,e),H(_e,no),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ds(t,e)}R(_e),H(_e,t)}function on(){R(_e),R(Jn),R(qn)}function jh(e){It(qn.current);var t=It(_e.current),n=ds(t,e.type);t!==n&&(H(Jn,e),H(_e,n))}function xi(e){Jn.current===e&&(R(_e),R(Jn))}var _=pt(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ya=[];function Si(){for(var e=0;e<Ya.length;e++)Ya[e]._workInProgressVersionPrimary=null;Ya.length=0}var No=$e.ReactCurrentDispatcher,Ka=$e.ReactCurrentBatchConfig,Et=0,B=null,Y=null,Q=null,ea=!1,zn=!1,Yn=0,wc=0;function ne(){throw Error(w(321))}function Ci(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!He(e[n],t[n]))return!1;return!0}function Ti(e,t,n,o,a,s){if(Et=s,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?jc:Ic,e=n(o,a),zn){s=0;do{if(zn=!1,Yn=0,25<=s)throw Error(w(301));s+=1,Q=Y=null,t.updateQueue=null,No.current=xc,e=n(o,a)}while(zn)}if(No.current=ta,t=Y!==null&&Y.next!==null,Et=0,Q=Y=B=null,ea=!1,t)throw Error(w(300));return e}function Ai(){var e=Yn!==0;return Yn=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Q===null?B.memoizedState=Q=e:Q=Q.next=e,Q}function Ce(){if(Y===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=Q===null?B.memoizedState:Q.next;if(t!==null)Q=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},Q===null?B.memoizedState=Q=e:Q=Q.next=e}return Q}function Kn(e,t){return typeof t=="function"?t(e):t}function $a(e){var t=Ce(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var o=Y,a=o.baseQueue,s=n.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}o.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,o=o.baseState;var l=i=null,h=null,d=s;do{var g=d.lane;if((Et&g)===g)h!==null&&(h=h.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),o=d.hasEagerState?d.eagerState:e(o,d.action);else{var f={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};h===null?(l=h=f,i=o):h=h.next=f,B.lanes|=g,zt|=g}d=d.next}while(d!==null&&d!==s);h===null?i=o:h.next=l,He(o,t.memoizedState)||(de=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=h,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do s=a.lane,B.lanes|=s,zt|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Qa(e){var t=Ce(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);He(s,t.memoizedState)||(de=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function Ih(){}function xh(e,t){var n=B,o=Ce(),a=t(),s=!He(o.memoizedState,a);if(s&&(o.memoizedState=a,de=!0),o=o.queue,Ei(Th.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||Q!==null&&Q.memoizedState.tag&1){if(n.flags|=2048,$n(9,Ch.bind(null,n,o,a,t),void 0,null),X===null)throw Error(w(349));Et&30||Sh(n,t,a)}return a}function Sh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ch(e,t,n,o){t.value=n,t.getSnapshot=o,Ah(t)&&Eh(e)}function Th(e,t,n){return n(function(){Ah(t)&&Eh(e)})}function Ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!He(e,n)}catch{return!0}}function Eh(e){var t=Ye(e,1);t!==null&&Me(t,e,1,-1)}function Mr(e){var t=De();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=bc.bind(null,B,e),[t.memoizedState,e]}function $n(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function zh(){return Ce().memoizedState}function Po(e,t,n,o){var a=De();B.flags|=e,a.memoizedState=$n(1|t,n,void 0,o===void 0?null:o)}function ya(e,t,n,o){var a=Ce();o=o===void 0?null:o;var s=void 0;if(Y!==null){var i=Y.memoizedState;if(s=i.destroy,o!==null&&Ci(o,i.deps)){a.memoizedState=$n(t,n,s,o);return}}B.flags|=e,a.memoizedState=$n(1|t,n,s,o)}function Hr(e,t){return Po(8390656,8,e,t)}function Ei(e,t){return ya(2048,8,e,t)}function Nh(e,t){return ya(4,2,e,t)}function Ph(e,t){return ya(4,4,e,t)}function Mh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hh(e,t,n){return n=n!=null?n.concat([e]):null,ya(4,4,Mh.bind(null,t,e),n)}function zi(){}function Lh(e,t){var n=Ce();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ci(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function Dh(e,t){var n=Ce();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&Ci(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Rh(e,t,n){return Et&21?(He(n,t)||(n=Ol(),B.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function vc(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var o=Ka.transition;Ka.transition={};try{e(!1),t()}finally{M=n,Ka.transition=o}}function Fh(){return Ce().memoizedState}function kc(e,t,n){var o=ut(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Uh(e))_h(t,n);else if(n=kh(e,t,n,o),n!==null){var a=re();Me(n,e,o,a),Bh(n,t,o)}}function bc(e,t,n){var o=ut(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uh(e))_h(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,l=s(i,n);if(a.hasEagerState=!0,a.eagerState=l,He(l,i)){var h=t.interleaved;h===null?(a.next=a,bi(t)):(a.next=h.next,h.next=a),t.interleaved=a;return}}catch{}finally{}n=kh(e,t,a,o),n!==null&&(a=re(),Me(n,e,o,a),Bh(n,t,o))}}function Uh(e){var t=e.alternate;return e===B||t!==null&&t===B}function _h(e,t){zn=ea=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bh(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,ri(e,n)}}var ta={readContext:Se,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},jc={readContext:Se,useCallback:function(e,t){return De().memoizedState=[e,t===void 0?null:t],e},useContext:Se,useEffect:Hr,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,Mh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=De();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=De();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=kc.bind(null,B,e),[o.memoizedState,e]},useRef:function(e){var t=De();return e={current:e},t.memoizedState=e},useState:Mr,useDebugValue:zi,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Mr(!1),t=e[0];return e=vc.bind(null,e[1]),De().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=B,a=De();if(U){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),X===null)throw Error(w(349));Et&30||Sh(o,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Hr(Th.bind(null,o,s,e),[e]),o.flags|=2048,$n(9,Ch.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=De(),t=X.identifierPrefix;if(U){var n=Ge,o=Ve;n=(o&~(1<<32-Pe(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Yn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=wc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ic={readContext:Se,useCallback:Lh,useContext:Se,useEffect:Ei,useImperativeHandle:Hh,useInsertionEffect:Nh,useLayoutEffect:Ph,useMemo:Dh,useReducer:$a,useRef:zh,useState:function(){return $a(Kn)},useDebugValue:zi,useDeferredValue:function(e){var t=Ce();return Rh(t,Y.memoizedState,e)},useTransition:function(){var e=$a(Kn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:Ih,useSyncExternalStore:xh,useId:Fh,unstable_isNewReconciler:!1},xc={readContext:Se,useCallback:Lh,useContext:Se,useEffect:Ei,useImperativeHandle:Hh,useInsertionEffect:Nh,useLayoutEffect:Ph,useMemo:Dh,useReducer:Qa,useRef:zh,useState:function(){return Qa(Kn)},useDebugValue:zi,useDeferredValue:function(e){var t=Ce();return Y===null?t.memoizedState=e:Rh(t,Y.memoizedState,e)},useTransition:function(){var e=Qa(Kn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:Ih,useSyncExternalStore:xh,useId:Fh,unstable_isNewReconciler:!1};function Ee(e,t){if(e&&e.defaultProps){t=O({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ps(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:O({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternals)?Mt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=re(),a=ut(e),s=We(o,a);s.payload=t,n!=null&&(s.callback=n),t=lt(e,s,a),t!==null&&(Me(t,e,a,o),zo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=re(),a=ut(e),s=We(o,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=lt(e,s,a),t!==null&&(Me(t,e,a,o),zo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=re(),o=ut(e),a=We(n,o);a.tag=2,t!=null&&(a.callback=t),t=lt(e,a,o),t!==null&&(Me(t,e,o,n),zo(t,e,o))}};function Lr(e,t,n,o,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,i):t.prototype&&t.prototype.isPureReactComponent?!On(n,o)||!On(a,s):!0}function Oh(e,t,n){var o=!1,a=mt,s=t.contextType;return typeof s=="object"&&s!==null?s=Se(s):(a=me(t)?Tt:se.current,o=t.contextTypes,s=(o=o!=null)?en(e,a):mt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Dr(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function Ms(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},ji(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Se(s):(s=me(t)?Tt:se.current,a.context=en(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Ps(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&wa.enqueueReplaceState(a,a.state,null),Xo(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function an(e,t){try{var n="",o=t;do n+=Xu(o),o=o.return;while(o);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Xa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Sc=typeof WeakMap=="function"?WeakMap:Map;function Vh(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){oa||(oa=!0,Gs=o),Hs(e,t)},n}function Gh(e,t,n){n=We(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){Hs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Hs(e,t),typeof o!="function"&&(ht===null?ht=new Set([this]):ht.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Rr(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new Sc;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=Uc.bind(null,e,t,n),t.then(e,e))}function Fr(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ur(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,lt(n,t,1))),n.lanes|=1),e)}var Cc=$e.ReactCurrentOwner,de=!1;function ie(e,t,n,o){t.child=e===null?vh(t,null,n,o):nn(t,e.child,n,o)}function _r(e,t,n,o,a){n=n.render;var s=t.ref;return Qt(t,a),o=Ti(e,t,n,o,s,a),n=Ai(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ke(e,t,a)):(U&&n&&pi(t),t.flags|=1,ie(e,t,o,a),t.child)}function Br(e,t,n,o,a){if(e===null){var s=n.type;return typeof s=="function"&&!Fi(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Wh(e,t,s,o,a)):(e=Do(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:On,n(i,o)&&e.ref===t.ref)return Ke(e,t,a)}return t.flags|=1,e=dt(s,o),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,n,o,a){if(e!==null){var s=e.memoizedProps;if(On(s,o)&&e.ref===t.ref)if(de=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Ke(e,t,a)}return Ls(e,t,n,o,a)}function Jh(e,t,n){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},H(Jt,pe),pe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,H(Jt,pe),pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,H(Jt,pe),pe|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,H(Jt,pe),pe|=o;return ie(e,t,a,n),t.child}function qh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ls(e,t,n,o,a){var s=me(n)?Tt:se.current;return s=en(t,s),Qt(t,a),n=Ti(e,t,n,o,s,a),o=Ai(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ke(e,t,a)):(U&&o&&pi(t),t.flags|=1,ie(e,t,n,a),t.child)}function Or(e,t,n,o,a){if(me(n)){var s=!0;qo(t)}else s=!1;if(Qt(t,a),t.stateNode===null)Mo(e,t),Oh(t,n,o),Ms(t,n,o,a),o=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var h=i.context,d=n.contextType;typeof d=="object"&&d!==null?d=Se(d):(d=me(n)?Tt:se.current,d=en(t,d));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==o||h!==d)&&Dr(t,i,o,d),Ze=!1;var p=t.memoizedState;i.state=p,Xo(t,o,i,a),h=t.memoizedState,l!==o||p!==h||ce.current||Ze?(typeof g=="function"&&(Ps(t,n,g,o),h=t.memoizedState),(l=Ze||Lr(t,n,l,o,p,h,d))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=h),i.props=o,i.state=h,i.context=d,o=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,bh(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:Ee(t.type,l),i.props=d,f=t.pendingProps,p=i.context,h=n.contextType,typeof h=="object"&&h!==null?h=Se(h):(h=me(n)?Tt:se.current,h=en(t,h));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==f||p!==h)&&Dr(t,i,o,h),Ze=!1,p=t.memoizedState,i.state=p,Xo(t,o,i,a);var k=t.memoizedState;l!==f||p!==k||ce.current||Ze?(typeof v=="function"&&(Ps(t,n,v,o),k=t.memoizedState),(d=Ze||Lr(t,n,d,o,p,k,h)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,k,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,k,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=k),i.props=o,i.state=k,i.context=h,o=d):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),o=!1)}return Ds(e,t,n,o,s,a)}function Ds(e,t,n,o,a,s){qh(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&Tr(t,n,!1),Ke(e,t,s);o=t.stateNode,Cc.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=nn(t,e.child,null,s),t.child=nn(t,null,l,s)):ie(e,t,l,s),t.memoizedState=o.state,a&&Tr(t,n,!0),t.child}function Yh(e){var t=e.stateNode;t.pendingContext?Cr(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cr(e,t.context,!1),Ii(e,t.containerInfo)}function Vr(e,t,n,o,a){return tn(),yi(a),t.flags|=256,ie(e,t,n,o),t.child}var Rs={dehydrated:null,treeContext:null,retryLane:0};function Fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kh(e,t,n){var o=t.pendingProps,a=_.current,s=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),H(_,a&1),e===null)return zs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,s?(o=t.mode,s=t.child,i={mode:"hidden",children:i},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ba(i,o,0,null),e=St(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Fs(n),t.memoizedState=Rs,e):Ni(t,i));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return Tc(e,t,i,o,l,a,n);if(s){s=o.fallback,i=t.mode,a=e.child,l=a.sibling;var h={mode:"hidden",children:o.children};return!(i&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=h,t.deletions=null):(o=dt(a,h),o.subtreeFlags=a.subtreeFlags&14680064),l!==null?s=dt(l,s):(s=St(s,i,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,i=e.child.memoizedState,i=i===null?Fs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=Rs,o}return s=e.child,e=s.sibling,o=dt(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ni(e,t){return t=ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ko(e,t,n,o){return o!==null&&yi(o),nn(t,e.child,null,n),e=Ni(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n,o,a,s,i){if(n)return t.flags&256?(t.flags&=-257,o=Xa(Error(w(422))),ko(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=ba({mode:"visible",children:o.children},a,0,null),s=St(s,a,i,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&nn(t,e.child,null,i),t.child.memoizedState=Fs(i),t.memoizedState=Rs,s);if(!(t.mode&1))return ko(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var l=o.dgst;return o=l,s=Error(w(419)),o=Xa(s,o,void 0),ko(e,t,i,o)}if(l=(i&e.childLanes)!==0,de||l){if(o=X,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Ye(e,a),Me(o,e,a,-1))}return Ri(),o=Xa(Error(w(421))),ko(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=_c.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,fe=rt(a.nextSibling),ye=t,U=!0,Ne=null,e!==null&&(be[je++]=Ve,be[je++]=Ge,be[je++]=At,Ve=e.id,Ge=e.overflow,At=t),t=Ni(t,o.children),t.flags|=4096,t)}function Gr(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Ns(e.return,t,n)}function Za(e,t,n,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=a)}function $h(e,t,n){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(ie(e,t,o.children,n),o=_.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gr(e,n,t);else if(e.tag===19)Gr(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(H(_,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Za(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Zo(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Za(t,!0,n,null,s);break;case"together":Za(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Mo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ac(e,t,n){switch(t.tag){case 3:Yh(t),tn();break;case 5:jh(t);break;case 1:me(t.type)&&qo(t);break;case 4:Ii(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;H($o,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(H(_,_.current&1),t.flags|=128,null):n&t.child.childLanes?Kh(e,t,n):(H(_,_.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);H(_,_.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return $h(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),H(_,_.current),o)break;return null;case 22:case 23:return t.lanes=0,Jh(e,t,n)}return Ke(e,t,n)}var Qh,Us,Xh,Zh;Qh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Us=function(){};Xh=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,It(_e.current);var s=null;switch(n){case"input":a=rs(e,a),o=rs(e,o),s=[];break;case"select":a=O({},a,{value:void 0}),o=O({},o,{value:void 0}),s=[];break;case"textarea":a=us(e,a),o=us(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Wo)}cs(n,o);var i;n=null;for(d in a)if(!o.hasOwnProperty(d)&&a.hasOwnProperty(d)&&a[d]!=null)if(d==="style"){var l=a[d];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ln.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in o){var h=o[d];if(l=a!=null?a[d]:void 0,o.hasOwnProperty(d)&&h!==l&&(h!=null||l!=null))if(d==="style")if(l){for(i in l)!l.hasOwnProperty(i)||h&&h.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in h)h.hasOwnProperty(i)&&l[i]!==h[i]&&(n||(n={}),n[i]=h[i])}else n||(s||(s=[]),s.push(d,n)),n=h;else d==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,l=l?l.__html:void 0,h!=null&&l!==h&&(s=s||[]).push(d,h)):d==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(d,""+h):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ln.hasOwnProperty(d)?(h!=null&&d==="onScroll"&&L("scroll",e),s||l===h||(s=[])):(s=s||[]).push(d,h))}n&&(s=s||[]).push("style",n);var d=s;(t.updateQueue=d)&&(t.flags|=4)}};Zh=function(e,t,n,o){n!==o&&(t.flags|=4)};function wn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function Ec(e,t,n){var o=t.pendingProps;switch(fi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return me(t.type)&&Jo(),oe(t),null;case 3:return o=t.stateNode,on(),R(ce),R(se),Si(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ne!==null&&(qs(Ne),Ne=null))),Us(e,t),oe(t),null;case 5:xi(t);var a=It(qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Xh(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(w(166));return oe(t),null}if(e=It(_e.current),wo(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[Fe]=t,o[Wn]=s,e=(t.mode&1)!==0,n){case"dialog":L("cancel",o),L("close",o);break;case"iframe":case"object":case"embed":L("load",o);break;case"video":case"audio":for(a=0;a<xn.length;a++)L(xn[a],o);break;case"source":L("error",o);break;case"img":case"image":case"link":L("error",o),L("load",o);break;case"details":L("toggle",o);break;case"input":Zi(o,s),L("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},L("invalid",o);break;case"textarea":tr(o,s),L("invalid",o)}cs(n,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="children"?typeof l=="string"?o.textContent!==l&&(s.suppressHydrationWarning!==!0&&yo(o.textContent,l,e),a=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&yo(o.textContent,l,e),a=["children",""+l]):Ln.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&L("scroll",o)}switch(n){case"input":lo(o),er(o,s,!0);break;case"textarea":lo(o),nr(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Wo)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[Fe]=t,e[Wn]=o,Qh(e,t,!1,!1),t.stateNode=e;e:{switch(i=ms(n,o),n){case"dialog":L("cancel",e),L("close",e),a=o;break;case"iframe":case"object":case"embed":L("load",e),a=o;break;case"video":case"audio":for(a=0;a<xn.length;a++)L(xn[a],e);a=o;break;case"source":L("error",e),a=o;break;case"img":case"image":case"link":L("error",e),L("load",e),a=o;break;case"details":L("toggle",e),a=o;break;case"input":Zi(e,o),a=rs(e,o),L("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=O({},o,{value:void 0}),L("invalid",e);break;case"textarea":tr(e,o),a=us(e,o),L("invalid",e);break;default:a=o}cs(n,a),l=a;for(s in l)if(l.hasOwnProperty(s)){var h=l[s];s==="style"?zl(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&Al(e,h)):s==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Dn(e,h):typeof h=="number"&&Dn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ln.hasOwnProperty(s)?h!=null&&s==="onScroll"&&L("scroll",e):h!=null&&ti(e,s,h,i))}switch(n){case"input":lo(e),er(e,o,!1);break;case"textarea":lo(e),nr(e);break;case"option":o.value!=null&&e.setAttribute("value",""+ct(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?qt(e,!!o.multiple,s,!1):o.defaultValue!=null&&qt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Wo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Zh(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(w(166));if(n=It(qn.current),It(_e.current),wo(t)){if(o=t.stateNode,n=t.memoizedProps,o[Fe]=t,(s=o.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:yo(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&yo(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[Fe]=t,t.stateNode=o}return oe(t),null;case 13:if(R(_),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&fe!==null&&t.mode&1&&!(t.flags&128))yh(),tn(),t.flags|=98560,s=!1;else if(s=wo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Fe]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),s=!1}else Ne!==null&&(qs(Ne),Ne=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||_.current&1?K===0&&(K=3):Ri())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return on(),Us(e,t),e===null&&Vn(t.stateNode.containerInfo),oe(t),null;case 10:return ki(t.type._context),oe(t),null;case 17:return me(t.type)&&Jo(),oe(t),null;case 19:if(R(_),s=t.memoizedState,s===null)return oe(t),null;if(o=(t.flags&128)!==0,i=s.rendering,i===null)if(o)wn(s,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Zo(e),i!==null){for(t.flags|=128,wn(s,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return H(_,_.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>sn&&(t.flags|=128,o=!0,wn(s,!1),t.lanes=4194304)}else{if(!o)if(e=Zo(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!U)return oe(t),null}else 2*J()-s.renderingStartTime>sn&&n!==1073741824&&(t.flags|=128,o=!0,wn(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=_.current,H(_,o?n&1|2:n&1),t):(oe(t),null);case 22:case 23:return Di(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?pe&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function zc(e,t){switch(fi(t),t.tag){case 1:return me(t.type)&&Jo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),R(ce),R(se),Si(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xi(t),null;case 13:if(R(_),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(_),null;case 4:return on(),null;case 10:return ki(t.type._context),null;case 22:case 23:return Di(),null;case 24:return null;default:return null}}var bo=!1,ae=!1,Nc=typeof WeakSet=="function"?WeakSet:Set,j=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){V(e,t,o)}else n.current=null}function _s(e,t,n){try{n()}catch(o){V(e,t,o)}}var Wr=!1;function Pc(e,t){if(Is=Oo,e=ah(),gi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,l=-1,h=-1,d=0,g=0,f=e,p=null;t:for(;;){for(var v;f!==n||a!==0&&f.nodeType!==3||(l=i+a),f!==s||o!==0&&f.nodeType!==3||(h=i+o),f.nodeType===3&&(i+=f.nodeValue.length),(v=f.firstChild)!==null;)p=f,f=v;for(;;){if(f===e)break t;if(p===n&&++d===a&&(l=i),p===s&&++g===o&&(h=i),(v=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=v}n=l===-1||h===-1?null:{start:l,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(xs={focusedElem:e,selectionRange:n},Oo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,F=k.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ee(t.type,b),F);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){V(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return k=Wr,Wr=!1,k}function Nn(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&_s(t,n,s)}a=a.next}while(a!==o)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eu(e){var t=e.alternate;t!==null&&(e.alternate=null,eu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Fe],delete t[Wn],delete t[Ts],delete t[gc],delete t[pc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function tu(e){return e.tag===5||e.tag===3||e.tag===4}function Jr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||tu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Os(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wo));else if(o!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}function Vs(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Vs(e,t,n),e=e.sibling;e!==null;)Vs(e,t,n),e=e.sibling}var Z=null,ze=!1;function Qe(e,t,n){for(n=n.child;n!==null;)nu(e,t,n),n=n.sibling}function nu(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(da,n)}catch{}switch(n.tag){case 5:ae||Wt(n,t);case 6:var o=Z,a=ze;Z=null,Qe(e,t,n),Z=o,ze=a,Z!==null&&(ze?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(ze?(e=Z,n=n.stateNode,e.nodeType===8?Ja(e.parentNode,n):e.nodeType===1&&Ja(e,n),_n(e)):Ja(Z,n.stateNode));break;case 4:o=Z,a=ze,Z=n.stateNode.containerInfo,ze=!0,Qe(e,t,n),Z=o,ze=a;break;case 0:case 11:case 14:case 15:if(!ae&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&_s(n,t,i),a=a.next}while(a!==o)}Qe(e,t,n);break;case 1:if(!ae&&(Wt(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(l){V(n,t,l)}Qe(e,t,n);break;case 21:Qe(e,t,n);break;case 22:n.mode&1?(ae=(o=ae)||n.memoizedState!==null,Qe(e,t,n),ae=o):Qe(e,t,n);break;default:Qe(e,t,n)}}function qr(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Nc),t.forEach(function(o){var a=Bc.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Ae(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var s=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Z=l.stateNode,ze=!1;break e;case 3:Z=l.stateNode.containerInfo,ze=!0;break e;case 4:Z=l.stateNode.containerInfo,ze=!0;break e}l=l.return}if(Z===null)throw Error(w(160));nu(s,i,a),Z=null,ze=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(d){V(a,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ou(t,e),t=t.sibling}function ou(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ae(t,e),Le(e),o&4){try{Nn(3,e,e.return),va(3,e)}catch(b){V(e,e.return,b)}try{Nn(5,e,e.return)}catch(b){V(e,e.return,b)}}break;case 1:Ae(t,e),Le(e),o&512&&n!==null&&Wt(n,n.return);break;case 5:if(Ae(t,e),Le(e),o&512&&n!==null&&Wt(n,n.return),e.flags&32){var a=e.stateNode;try{Dn(a,"")}catch(b){V(e,e.return,b)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,l=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sl(a,s),ms(l,i);var d=ms(l,s);for(i=0;i<h.length;i+=2){var g=h[i],f=h[i+1];g==="style"?zl(a,f):g==="dangerouslySetInnerHTML"?Al(a,f):g==="children"?Dn(a,f):ti(a,g,f,d)}switch(l){case"input":ls(a,s);break;case"textarea":Cl(a,s);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?qt(a,!!s.multiple,v,!1):p!==!!s.multiple&&(s.defaultValue!=null?qt(a,!!s.multiple,s.defaultValue,!0):qt(a,!!s.multiple,s.multiple?[]:"",!1))}a[Wn]=s}catch(b){V(e,e.return,b)}}break;case 6:if(Ae(t,e),Le(e),o&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(b){V(e,e.return,b)}}break;case 3:if(Ae(t,e),Le(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{_n(t.containerInfo)}catch(b){V(e,e.return,b)}break;case 4:Ae(t,e),Le(e);break;case 13:Ae(t,e),Le(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(Hi=J())),o&4&&qr(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ae=(d=ae)||g,Ae(t,e),ae=d):Ae(t,e),Le(e),o&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(f=j=g;j!==null;){switch(p=j,v=p.child,p.tag){case 0:case 11:case 14:case 15:Nn(4,p,p.return);break;case 1:Wt(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){o=p,n=p.return;try{t=o,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){V(o,n,b)}}break;case 5:Wt(p,p.return);break;case 22:if(p.memoizedState!==null){Kr(f);continue}}v!==null?(v.return=p,j=v):Kr(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{a=f.stateNode,d?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,h=f.memoizedProps.style,i=h!=null&&h.hasOwnProperty("display")?h.display:null,l.style.display=El("display",i))}catch(b){V(e,e.return,b)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(b){V(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ae(t,e),Le(e),o&4&&qr(e);break;case 21:break;default:Ae(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(tu(n)){var o=n;break e}n=n.return}throw Error(w(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Dn(a,""),o.flags&=-33);var s=Jr(e);Vs(e,s,a);break;case 3:case 4:var i=o.stateNode.containerInfo,l=Jr(e);Os(e,l,i);break;default:throw Error(w(161))}}catch(h){V(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Mc(e,t,n){j=e,au(e)}function au(e,t,n){for(var o=(e.mode&1)!==0;j!==null;){var a=j,s=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||bo;if(!i){var l=a.alternate,h=l!==null&&l.memoizedState!==null||ae;l=bo;var d=ae;if(bo=i,(ae=h)&&!d)for(j=a;j!==null;)i=j,h=i.child,i.tag===22&&i.memoizedState!==null?$r(a):h!==null?(h.return=i,j=h):$r(a);for(;s!==null;)j=s,au(s),s=s.sibling;j=a,bo=l,ae=d}Yr(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,j=s):Yr(e)}}function Yr(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ae||va(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!ae)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ee(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Pr(t,s,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Pr(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&_n(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}ae||t.flags&512&&Bs(t)}catch(p){V(t,t.return,p)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Kr(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function $r(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(h){V(t,n,h)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(h){V(t,a,h)}}var s=t.return;try{Bs(t)}catch(h){V(t,s,h)}break;case 5:var i=t.return;try{Bs(t)}catch(h){V(t,i,h)}}}catch(h){V(t,t.return,h)}if(t===e){j=null;break}var l=t.sibling;if(l!==null){l.return=t.return,j=l;break}j=t.return}}var Hc=Math.ceil,na=$e.ReactCurrentDispatcher,Pi=$e.ReactCurrentOwner,xe=$e.ReactCurrentBatchConfig,P=0,X=null,q=null,ee=0,pe=0,Jt=pt(0),K=0,Qn=null,zt=0,ka=0,Mi=0,Pn=null,ue=null,Hi=0,sn=1/0,Be=null,oa=!1,Gs=null,ht=null,jo=!1,ot=null,aa=0,Mn=0,Ws=null,Ho=-1,Lo=0;function re(){return P&6?J():Ho!==-1?Ho:Ho=J()}function ut(e){return e.mode&1?P&2&&ee!==0?ee&-ee:yc.transition!==null?(Lo===0&&(Lo=Ol()),Lo):(e=M,e!==0||(e=window.event,e=e===void 0?16:Kl(e.type)),e):1}function Me(e,t,n,o){if(50<Mn)throw Mn=0,Ws=null,Error(w(185));Zn(e,n,o),(!(P&2)||e!==X)&&(e===X&&(!(P&2)&&(ka|=n),K===4&&tt(e,ee)),ge(e,o),n===1&&P===0&&!(t.mode&1)&&(sn=J()+500,fa&&ft()))}function ge(e,t){var n=e.callbackNode;yd(e,t);var o=Bo(e,e===X?ee:0);if(o===0)n!==null&&sr(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&sr(n),t===1)e.tag===0?fc(Qr.bind(null,e)):gh(Qr.bind(null,e)),cc(function(){!(P&6)&&ft()}),n=null;else{switch(Vl(o)){case 1:n=ii;break;case 4:n=_l;break;case 16:n=_o;break;case 536870912:n=Bl;break;default:n=_o}n=cu(n,su.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function su(e,t){if(Ho=-1,Lo=0,P&6)throw Error(w(327));var n=e.callbackNode;if(Xt()&&e.callbackNode!==n)return null;var o=Bo(e,e===X?ee:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=sa(e,o);else{t=o;var a=P;P|=2;var s=ru();(X!==e||ee!==t)&&(Be=null,sn=J()+500,xt(e,t));do try{Rc();break}catch(l){iu(e,l)}while(!0);vi(),na.current=s,P=a,q!==null?t=0:(X=null,ee=0,t=K)}if(t!==0){if(t===2&&(a=ws(e),a!==0&&(o=a,t=Js(e,a))),t===1)throw n=Qn,xt(e,0),tt(e,o),ge(e,J()),n;if(t===6)tt(e,o);else{if(a=e.current.alternate,!(o&30)&&!Lc(a)&&(t=sa(e,o),t===2&&(s=ws(e),s!==0&&(o=s,t=Js(e,s))),t===1))throw n=Qn,xt(e,0),tt(e,o),ge(e,J()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(w(345));case 2:kt(e,ue,Be);break;case 3:if(tt(e,o),(o&130023424)===o&&(t=Hi+500-J(),10<t)){if(Bo(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){re(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Cs(kt.bind(null,e,ue,Be),t);break}kt(e,ue,Be);break;case 4:if(tt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-Pe(o);s=1<<i,i=t[i],i>a&&(a=i),o&=~s}if(o=a,o=J()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*Hc(o/1960))-o,10<o){e.timeoutHandle=Cs(kt.bind(null,e,ue,Be),o);break}kt(e,ue,Be);break;case 5:kt(e,ue,Be);break;default:throw Error(w(329))}}}return ge(e,J()),e.callbackNode===n?su.bind(null,e):null}function Js(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(xt(e,t).flags|=256),e=sa(e,t),e!==2&&(t=ue,ue=n,t!==null&&qs(t)),e}function qs(e){ue===null?ue=e:ue.push.apply(ue,e)}function Lc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],s=a.getSnapshot;a=a.value;try{if(!He(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~Mi,t&=~ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pe(t),o=1<<n;e[n]=-1,t&=~o}}function Qr(e){if(P&6)throw Error(w(327));Xt();var t=Bo(e,0);if(!(t&1))return ge(e,J()),null;var n=sa(e,t);if(e.tag!==0&&n===2){var o=ws(e);o!==0&&(t=o,n=Js(e,o))}if(n===1)throw n=Qn,xt(e,0),tt(e,t),ge(e,J()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,ue,Be),ge(e,J()),null}function Li(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(sn=J()+500,fa&&ft())}}function Nt(e){ot!==null&&ot.tag===0&&!(P&6)&&Xt();var t=P;P|=1;var n=xe.transition,o=M;try{if(xe.transition=null,M=1,e)return e()}finally{M=o,xe.transition=n,P=t,!(P&6)&&ft()}}function Di(){pe=Jt.current,R(Jt)}function xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dc(n)),q!==null)for(n=q.return;n!==null;){var o=n;switch(fi(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Jo();break;case 3:on(),R(ce),R(se),Si();break;case 5:xi(o);break;case 4:on();break;case 13:R(_);break;case 19:R(_);break;case 10:ki(o.type._context);break;case 22:case 23:Di()}n=n.return}if(X=e,q=e=dt(e.current,null),ee=pe=t,K=0,Qn=null,Mi=ka=zt=0,ue=Pn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,s=n.pending;if(s!==null){var i=s.next;s.next=a,o.next=i}n.pending=o}jt=null}return e}function iu(e,t){do{var n=q;try{if(vi(),No.current=ta,ea){for(var o=B.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}ea=!1}if(Et=0,Q=Y=B=null,zn=!1,Yn=0,Pi.current=null,n===null||n.return===null){K=1,Qn=t,q=null;break}e:{var s=e,i=n.return,l=n,h=t;if(t=ee,l.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var d=h,g=l,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Fr(i);if(v!==null){v.flags&=-257,Ur(v,i,l,s,t),v.mode&1&&Rr(s,d,t),t=v,h=d;var k=t.updateQueue;if(k===null){var b=new Set;b.add(h),t.updateQueue=b}else k.add(h);break e}else{if(!(t&1)){Rr(s,d,t),Ri();break e}h=Error(w(426))}}else if(U&&l.mode&1){var F=Fr(i);if(F!==null){!(F.flags&65536)&&(F.flags|=256),Ur(F,i,l,s,t),yi(an(h,l));break e}}s=h=an(h,l),K!==4&&(K=2),Pn===null?Pn=[s]:Pn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var c=Vh(s,h,t);Nr(s,c);break e;case 1:l=h;var u=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(ht===null||!ht.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Gh(s,l,t);Nr(s,y);break e}}s=s.return}while(s!==null)}hu(n)}catch(I){t=I,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function ru(){var e=na.current;return na.current=ta,e===null?ta:e}function Ri(){(K===0||K===3||K===2)&&(K=4),X===null||!(zt&268435455)&&!(ka&268435455)||tt(X,ee)}function sa(e,t){var n=P;P|=2;var o=ru();(X!==e||ee!==t)&&(Be=null,xt(e,t));do try{Dc();break}catch(a){iu(e,a)}while(!0);if(vi(),P=n,na.current=o,q!==null)throw Error(w(261));return X=null,ee=0,K}function Dc(){for(;q!==null;)lu(q)}function Rc(){for(;q!==null&&!ld();)lu(q)}function lu(e){var t=du(e.alternate,e,pe);e.memoizedProps=e.pendingProps,t===null?hu(e):q=t,Pi.current=null}function hu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zc(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,q=null;return}}else if(n=Ec(n,t,pe),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);K===0&&(K=5)}function kt(e,t,n){var o=M,a=xe.transition;try{xe.transition=null,M=1,Fc(e,t,n,o)}finally{xe.transition=a,M=o}return null}function Fc(e,t,n,o){do Xt();while(ot!==null);if(P&6)throw Error(w(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(wd(e,s),e===X&&(q=X=null,ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,cu(_o,function(){return Xt(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=xe.transition,xe.transition=null;var i=M;M=1;var l=P;P|=4,Pi.current=null,Pc(e,n),ou(n,e),ac(xs),Oo=!!Is,xs=Is=null,e.current=n,Mc(n),hd(),P=l,M=i,xe.transition=s}else e.current=n;if(jo&&(jo=!1,ot=e,aa=a),s=e.pendingLanes,s===0&&(ht=null),cd(n.stateNode),ge(e,J()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(oa)throw oa=!1,e=Gs,Gs=null,e;return aa&1&&e.tag!==0&&Xt(),s=e.pendingLanes,s&1?e===Ws?Mn++:(Mn=0,Ws=e):Mn=0,ft(),null}function Xt(){if(ot!==null){var e=Vl(aa),t=xe.transition,n=M;try{if(xe.transition=null,M=16>e?16:e,ot===null)var o=!1;else{if(e=ot,ot=null,aa=0,P&6)throw Error(w(331));var a=P;for(P|=4,j=e.current;j!==null;){var s=j,i=s.child;if(j.flags&16){var l=s.deletions;if(l!==null){for(var h=0;h<l.length;h++){var d=l[h];for(j=d;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:Nn(8,g,s)}var f=g.child;if(f!==null)f.return=g,j=f;else for(;j!==null;){g=j;var p=g.sibling,v=g.return;if(eu(g),g===d){j=null;break}if(p!==null){p.return=v,j=p;break}j=v}}}var k=s.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var F=b.sibling;b.sibling=null,b=F}while(b!==null)}}j=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,j=i;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Nn(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,j=c;break e}j=s.return}}var u=e.current;for(j=u;j!==null;){i=j;var m=i.child;if(i.subtreeFlags&2064&&m!==null)m.return=i,j=m;else e:for(i=u;j!==null;){if(l=j,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:va(9,l)}}catch(I){V(l,l.return,I)}if(l===i){j=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,j=y;break e}j=l.return}}if(P=a,ft(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(da,e)}catch{}o=!0}return o}finally{M=n,xe.transition=t}}return!1}function Xr(e,t,n){t=an(n,t),t=Vh(e,t,1),e=lt(e,t,1),t=re(),e!==null&&(Zn(e,1,t),ge(e,t))}function V(e,t,n){if(e.tag===3)Xr(e,e,n);else for(;t!==null;){if(t.tag===3){Xr(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ht===null||!ht.has(o))){e=an(n,e),e=Gh(t,e,1),t=lt(t,e,1),e=re(),t!==null&&(Zn(t,1,e),ge(t,e));break}}t=t.return}}function Uc(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=re(),e.pingedLanes|=e.suspendedLanes&n,X===e&&(ee&n)===n&&(K===4||K===3&&(ee&130023424)===ee&&500>J()-Hi?xt(e,0):Mi|=n),ge(e,t)}function uu(e,t){t===0&&(e.mode&1?(t=co,co<<=1,!(co&130023424)&&(co=4194304)):t=1);var n=re();e=Ye(e,t),e!==null&&(Zn(e,t,n),ge(e,n))}function _c(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uu(e,n)}function Bc(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(w(314))}o!==null&&o.delete(t),uu(e,n)}var du;du=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ce.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,Ac(e,t,n);de=!!(e.flags&131072)}else de=!1,U&&t.flags&1048576&&ph(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Mo(e,t),e=t.pendingProps;var a=en(t,se.current);Qt(t,n),a=Ti(null,t,o,e,a,n);var s=Ai();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(o)?(s=!0,qo(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ji(t),a.updater=wa,t.stateNode=a,a._reactInternals=t,Ms(t,o,e,n),t=Ds(null,t,o,!0,s,n)):(t.tag=0,U&&s&&pi(t),ie(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(Mo(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Vc(o),e=Ee(o,e),a){case 0:t=Ls(null,t,o,e,n);break e;case 1:t=Or(null,t,o,e,n);break e;case 11:t=_r(null,t,o,e,n);break e;case 14:t=Br(null,t,o,Ee(o.type,e),n);break e}throw Error(w(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ee(o,a),Ls(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ee(o,a),Or(e,t,o,a,n);case 3:e:{if(Yh(t),e===null)throw Error(w(387));o=t.pendingProps,s=t.memoizedState,a=s.element,bh(e,t),Xo(t,o,null,n);var i=t.memoizedState;if(o=i.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=an(Error(w(423)),t),t=Vr(e,t,o,n,a);break e}else if(o!==a){a=an(Error(w(424)),t),t=Vr(e,t,o,n,a);break e}else for(fe=rt(t.stateNode.containerInfo.firstChild),ye=t,U=!0,Ne=null,n=vh(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),o===a){t=Ke(e,t,n);break e}ie(e,t,o,n)}t=t.child}return t;case 5:return jh(t),e===null&&zs(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,Ss(o,a)?i=null:s!==null&&Ss(o,s)&&(t.flags|=32),qh(e,t),ie(e,t,i,n),t.child;case 6:return e===null&&zs(t),null;case 13:return Kh(e,t,n);case 4:return Ii(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=nn(t,null,o,n):ie(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ee(o,a),_r(e,t,o,a,n);case 7:return ie(e,t,t.pendingProps,n),t.child;case 8:return ie(e,t,t.pendingProps.children,n),t.child;case 12:return ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,H($o,o._currentValue),o._currentValue=i,s!==null)if(He(s.value,i)){if(s.children===a.children&&!ce.current){t=Ke(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){i=s.child;for(var h=l.firstContext;h!==null;){if(h.context===o){if(s.tag===1){h=We(-1,n&-n),h.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?h.next=h:(h.next=g.next,g.next=h),d.pending=h}}s.lanes|=n,h=s.alternate,h!==null&&(h.lanes|=n),Ns(s.return,n,t),l.lanes|=n;break}h=h.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(w(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ns(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}ie(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,Qt(t,n),a=Se(a),o=o(a),t.flags|=1,ie(e,t,o,n),t.child;case 14:return o=t.type,a=Ee(o,t.pendingProps),a=Ee(o.type,a),Br(e,t,o,a,n);case 15:return Wh(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ee(o,a),Mo(e,t),t.tag=1,me(o)?(e=!0,qo(t)):e=!1,Qt(t,n),Oh(t,o,a),Ms(t,o,a,n),Ds(null,t,o,!0,e,n);case 19:return $h(e,t,n);case 22:return Jh(e,t,n)}throw Error(w(156,t.tag))};function cu(e,t){return Ul(e,t)}function Oc(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,o){return new Oc(e,t,n,o)}function Fi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vc(e){if(typeof e=="function")return Fi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===oi)return 11;if(e===ai)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Do(e,t,n,o,a,s){var i=2;if(o=e,typeof e=="function")Fi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Dt:return St(n.children,a,s,t);case ni:i=8,a|=8;break;case os:return e=Ie(12,n,t,a|2),e.elementType=os,e.lanes=s,e;case as:return e=Ie(13,n,t,a),e.elementType=as,e.lanes=s,e;case ss:return e=Ie(19,n,t,a),e.elementType=ss,e.lanes=s,e;case jl:return ba(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kl:i=10;break e;case bl:i=9;break e;case oi:i=11;break e;case ai:i=14;break e;case Xe:i=16,o=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ie(i,n,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function St(e,t,n,o){return e=Ie(7,e,o,t),e.lanes=n,e}function ba(e,t,n,o){return e=Ie(22,e,o,t),e.elementType=jl,e.lanes=n,e.stateNode={isHidden:!1},e}function es(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function ts(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Gc(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=La(0),this.expirationTimes=La(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=La(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ui(e,t,n,o,a,s,i,l,h){return e=new Gc(e,t,n,l,h),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ie(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ji(s),e}function Wc(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lt,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function mu(e){if(!e)return mt;e=e._reactInternals;e:{if(Mt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(me(n))return mh(e,n,t)}return t}function gu(e,t,n,o,a,s,i,l,h){return e=Ui(n,o,!0,e,a,s,i,l,h),e.context=mu(null),n=e.current,o=re(),a=ut(n),s=We(o,a),s.callback=t??null,lt(n,s,a),e.current.lanes=a,Zn(e,a,o),ge(e,o),e}function ja(e,t,n,o){var a=t.current,s=re(),i=ut(a);return n=mu(n),t.context===null?t.context=n:t.pendingContext=n,t=We(s,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=lt(a,t,i),e!==null&&(Me(e,a,i,s),zo(e,a,i)),i}function ia(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zr(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _i(e,t){Zr(e,t),(e=e.alternate)&&Zr(e,t)}function Jc(){return null}var pu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bi(e){this._internalRoot=e}Ia.prototype.render=Bi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));ja(e,t,null,null)};Ia.prototype.unmount=Bi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Nt(function(){ja(null,e,null,null)}),t[qe]=null}};function Ia(e){this._internalRoot=e}Ia.prototype.unstable_scheduleHydration=function(e){if(e){var t=Jl();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Yl(e)}};function Oi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function el(){}function qc(e,t,n,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var d=ia(i);s.call(d)}}var i=gu(t,o,e,0,null,!1,!1,"",el);return e._reactRootContainer=i,e[qe]=i.current,Vn(e.nodeType===8?e.parentNode:e),Nt(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var l=o;o=function(){var d=ia(h);l.call(d)}}var h=Ui(e,0,!1,null,null,!1,!1,"",el);return e._reactRootContainer=h,e[qe]=h.current,Vn(e.nodeType===8?e.parentNode:e),Nt(function(){ja(t,h,n,o)}),h}function Sa(e,t,n,o,a){var s=n._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var l=a;a=function(){var h=ia(i);l.call(h)}}ja(t,i,e,a)}else i=qc(n,t,e,a,o);return ia(i)}Gl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=In(t.pendingLanes);n!==0&&(ri(t,n|1),ge(t,J()),!(P&6)&&(sn=J()+500,ft()))}break;case 13:Nt(function(){var o=Ye(e,1);if(o!==null){var a=re();Me(o,e,1,a)}}),_i(e,1)}};li=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=re();Me(t,e,134217728,n)}_i(e,134217728)}};Wl=function(e){if(e.tag===13){var t=ut(e),n=Ye(e,t);if(n!==null){var o=re();Me(n,e,t,o)}_i(e,t)}};Jl=function(){return M};ql=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};ps=function(e,t,n){switch(t){case"input":if(ls(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=pa(o);if(!a)throw Error(w(90));xl(o),ls(o,a)}}}break;case"textarea":Cl(e,n);break;case"select":t=n.value,t!=null&&qt(e,!!n.multiple,t,!1)}};Ml=Li;Hl=Nt;var Yc={usingClientEntryPoint:!1,Events:[to,_t,pa,Nl,Pl,Li]},vn={findFiberByHostInstance:bt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kc={bundleType:vn.bundleType,version:vn.version,rendererPackageName:vn.rendererPackageName,rendererConfig:vn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rl(e),e===null?null:e.stateNode},findFiberByHostInstance:vn.findFiberByHostInstance||Jc,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{da=Io.inject(Kc),Ue=Io}catch{}}ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yc;ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oi(t))throw Error(w(200));return Wc(e,t,null,n)};ve.createRoot=function(e,t){if(!Oi(e))throw Error(w(299));var n=!1,o="",a=pu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ui(e,1,!1,null,null,n,!1,o,a),e[qe]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Bi(t)};ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Rl(t),e=e===null?null:e.stateNode,e};ve.flushSync=function(e){return Nt(e)};ve.hydrate=function(e,t,n){if(!xa(t))throw Error(w(200));return Sa(null,e,t,!0,n)};ve.hydrateRoot=function(e,t,n){if(!Oi(e))throw Error(w(405));var o=n!=null&&n.hydratedSources||null,a=!1,s="",i=pu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=gu(t,null,e,1,n??null,a,!1,s,i),e[qe]=t.current,Vn(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ia(t)};ve.render=function(e,t,n){if(!xa(t))throw Error(w(200));return Sa(null,e,t,!1,n)};ve.unmountComponentAtNode=function(e){if(!xa(e))throw Error(w(40));return e._reactRootContainer?(Nt(function(){Sa(null,null,e,!1,function(){e._reactRootContainer=null,e[qe]=null})}),!0):!1};ve.unstable_batchedUpdates=Li;ve.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!xa(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Sa(e,t,n,!1,o)};ve.version="18.3.1-next-f1338f8080-20240426";function fu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fu)}catch(e){console.error(e)}}fu(),fl.exports=ve;var $c=fl.exports,yu,tl=$c;yu=tl.createRoot,tl.hydrateRoot;function Qc(){const e=()=>{const o=window.location.hash.replace(/^#/,"");return o.startsWith("/")?o:"/"},[t,n]=D.useState(e);return D.useEffect(()=>{const o=()=>n(e());return window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]),t}const wu=D.createContext("/");function Xc({children:e}){const t=Qc();return r.jsx(wu.Provider,{value:t,children:e})}function Zc({children:e}){const t=D.useContext(wu);let n=null;return D.Children.forEach(e,o=>{if(!D.isValidElement(o))return;o.props.path===t&&(n=o)}),n||D.Children.forEach(e,o=>{!n&&D.isValidElement(o)&&o.props.path==="/"&&(n=o)}),n?n.props.element:null}function xo(e){return null}function Re({to:e,className:t,children:n}){return r.jsx("a",{className:t,href:"#"+e,children:n})}function em({children:e}){return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:".ifc-shell{max-width:1040px;margin:0 auto;padding:24px;}@media (min-width:768px){.ifc-shell{padding:36px;}}"}),r.jsx("div",{className:"ifc-shell",children:e})]})}const tm=[{date:"7/4/2026",name:"elizabeth wang",body:`After about 3 years of having this account, I figured it’s time to actually introduce myself!

I’m Elizabeth Wang, but you can call me Ellie! I just finished my first year of college, and I’m currently studying Management Information Systems at the University of Georgia - Terry College of Business.

I’ve sent over 150 cold DMs since junior year of high school and gotten some great responses back too! But I’ve always wanted to actually post instead of just DMing people behind the scenes.

I’ll be documenting my journey to actually see how much I grow along the way. Excited to get started!`,order:0,images:["src/photos/stories/7-4-2026-elizabeth-wang-0.jpg"]},{date:"7/5/2026",name:"ammar razzak",body:`Since starting to post here, I've been thinking a lot about the people who've shaped where I am, mostly people I first reached out to cold, with no real reason they should've responded.

I want to start telling some of those stories, one at a time.

One of my earliest mentors is Ammar Razzak.

I reached out to him during senior year of high school in December 2024 after searching on LinkedIn for Gates Foundation Scholars, right after I got the email that I'd made it to the semifinalist stage for the same scholarship. I asked if he had any advice for the second phase of the application.

I ended up not making it past the semifinalist round, but Ammar still continued to mentor me. He reviewed my college applications, gave me advice about school and life I still think back on, and helped me so much through the transition from high school to freshman year and beyond. He helped way beyond the original reason I first reached out to him.

He’s at Emory University now, about to start his senior year, studying chemistry and applied math, doing research in trauma neuroscience, and on the path to an MD/PhD. He’s spoken to me about his passion for shaping the path for future physicians and scientists, and that same passion is exactly why he showed up for me the way he did.

Looking back, this was one of the first times I learned that a cold message can turn into a mentorship that lasts years.

Very grateful for Ammar Razzak's mentorship and for every mentor since who's shown me the same thing: you just have to ask.`,order:1,images:["src/photos/stories/7-5-2026-ammar-razzak-0.jpg","src/photos/stories/7-5-2026-ammar-razzak-1.jpg","src/photos/stories/7-5-2026-ammar-razzak-2.jpg"]},{date:"7/6/2026",name:"omeir honda",body:`Many of the people who’ve shaped me, I first reached out to cold. I’m telling these stories here, one at a time!

I found Omeir Honda through the UGA Mentor Program in June 2025, right before college started. I felt so lost, having just graduated from high school and being unclear about my direction.

He was the very first person the program matched me with, back when I wasn't sure what I wanted. He told me something early on I haven’t forgotten. His freshman year, during the COVID-19 pandemic, he was on the brink of dropping out of The University of Georgia. Isolated in his dorm, he didn’t really want to be there at all, but he got through it by reaching out to people.

He’s a first-generation American; his parents immigrated from Mumbai, and his dad taught himself into a career in tech after starting over in a new country. Omeir told me that watching him shaped how he sees opportunity and why he believes so strongly in mentorship now.

A mentor helped him realize his true passions were in fashion and creative work rather than pure business or finance. He found a way to combine both, and it’s led him to where he is now, at KPMG US, in federal advisory. Every time we talk, without fail, he tells me the same thing: find mentorship.

Very grateful for Omeir Honda’s mentorship and for every mentor since who’s shown me the same thing: you just have to ask.`,order:2,images:["src/photos/stories/7-6-2026-omeir-honda-1.jpg","src/photos/stories/7-6-2026-omeir-honda-2.jpg","src/photos/stories/7-6-2026-omeir-honda-0.jpg","src/photos/stories/7-6-2026-omeir-honda-3.jpg"]},{date:"7/7/2026",name:"Ngozi F. Anachebe, PharmD, MD, FACOG",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a switched physics class.

In my senior year of high school, I was juggling college applications and a full course load, and for the first time, I switched down from AP Physics to an on-level physics course, just to complete the graduation requirement. I remember feeling a little ashamed about it at the time, like I was falling behind somehow. That decision landed me in a virtual lab for the physics course, proctored by Ms. Regina Okolie.

She often shared her own stories about mentorship and reminded us constantly that we were capable of more than we realized, and to take and create every opportunity we could.

At the time, I was already cold-DMing people, mostly getting silence back, maybe one response for every ten messages. I asked her for advice, because I just felt so lost. She immediately brought up her dear friend, Ngozi F. Anachebe, PharmD, MD, FACOG, and told me to reach out. I didn't need to be told twice.

I immediately found Dr. Anachebe on LinkedIn and sent a connection request. She messaged me before I even got the chance to reach out myself. She told me her own story: growing up in Nigeria, earning her PharmD at Mercer University - College of Pharmacy, then her MD at Morehouse School of Medicine, building an entire career in medicine and academic leadership from there. She encouraged me to keep going, to keep learning, and told me I had real potential.

I still think about how kind she was to a random high school student who wanted to talk to her out of nowhere.

Very grateful for my conversations with Ngozi F. Anachebe, PharmD, MD, FACOG; for Ms. Okolie, who pointed me toward her; and for every mentor who's shown me the same thing: you just have to ask!`,order:3,images:["src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-0.jpg","src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-2.jpg","src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-1.jpg"]},{date:"7/8/2026",name:"girish menon",body:`Three days ago, I got an email from the director of the study abroad program I'm in, James McClung. He told us our guest speaker this week would be Girish Menon, president of Lucy Cavendish College at the University of Cambridge, and someone with decades of experience in international development, including his time at UNICEF UK.

I looked him up on LinkedIn and reached out before he even arrived.

After his talk to a full auditorium of 154 students across three of The University of Georgia colleges two nights ago, I asked him who his first real mentor was. He told me it was one of his early bosses, someone who showed him the ropes early in his career.

I asked how he ended up where he is now, and he said not everything he did was part of some grand plan; he tried a lot of different things along the way. Then he gave me some advice of his own: find what actually brings you joy, whatever that looks like for you. He mentioned some people find that in something unique, like saving the elephants!

Very grateful for my conversation with Girish Menon and James McClung's email, and for every mentor who's shown me the same thing: you just have to ask!`,order:4,images:["src/photos/stories/7-8-2026-girish-menon-1.jpg","src/photos/stories/7-8-2026-girish-menon-0.jpg"]},{date:"7/9/2026",name:"will huber",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a rejection.

Omeir Honda, someone I emailed cold through the UGA Mentor Program, told me about the Magellan Program during our first meeting, a program that brings together 50-55 bright pre-University of Georgia - Terry College of Business freshmen each semester, with mentorship built in. I applied in the fall and made it to the interview round, but I was so nervous that my hands shook from underneath the table. I fumbled it completely.

I didn't get in the first time.

The next semester, I applied again. Before my interview, I just kept telling myself the first rejection doesn't define me, and I walked in calmer than I'd expected.

Almost 5 months after I got rejected, I got in on my second attempt.

Will Huber was one of the people who interviewed me, and when it came time to choose a mentor, I knew instantly he would be an amazing mentor for me. He mentors many other students in the Fall '25 and Spring '26 cohorts, and it shows in how he talks: genuinely invested, and always kind. I'd stay back after our weekly Wednesday meetings just to keep asking him questions, and he never once made me feel like I was asking too much.

Very grateful for Will Huber’s mentorship, and for every mentor since who's shown me the same thing: you just have to ask!`,order:5,images:["src/photos/stories/7-9-2026-will-huber-0.jpg","src/photos/stories/7-9-2026-will-huber-2.jpg","src/photos/stories/7-9-2026-will-huber-1.jpg"]},{date:"7/10/2026",name:"ellie fleming",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a club fair and two people who share a nickname!

I met Eleanor Fleming the third week of my freshman year, just walking around getting to as many tables as I could at The University of Georgia Engagement Fair held every semester. I saw her tabling for the UGA International Business Society and went up to introduce myself. We quickly realized we shared the same nickname, Ellie!

She told me all about the club. I immediately applied, interviewed, and got in as a committee member. I was thrilled! After meetings, I'd stay back and ask her questions, and she was always patient and generous with her answers.

At one point, I told her I'd failed my first financial accounting exam and needed help. She directed me to study resources she'd used to get an A in the class herself. I ended up scoring almost perfectly on the rest of the exams and finished the class with an A without needing to take the final!

Through the society, I also learned about study abroad opportunities and scholarships I originally hadn't known to look for, opportunities that ended up funding three separate study abroad experiences.

None of it would've happened if I hadn't just walked up and talked to her cold.

Very grateful for Eleanor Fleming's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:6,images:["src/photos/stories/7-10-2026-ellie-fleming-1.jpg","src/photos/stories/7-10-2026-ellie-fleming-0.png"]},{date:"7/11/2026",name:"robert anthony",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a failed exam and an accidental meeting.

My first semester of freshman year, I took MIST 2090 (Introduction to Information Systems) and completely failed the first exam. The spreadsheet material was brand new to me. I was paying attention in class but still felt lost. I started going to my professor, Dr. Karim Jetha's, office hours almost every week after that. He gave me a lot of advice, and slowly, my scores started improving.

One day, he posted something on our class page about an SMIS session, the Society for Management Information Systems - UGA. I misread it as a help session for the class and showed up, thinking I'd get exam support. I quickly realized it was something else entirely, but I stayed anyway.

That's where I met Robert H. Anthony. I told him how much I was struggling with the class, and he gave me real, specific advice on how to actually learn the material instead of just trying to memorize it. I ended the class with an A after really trying my hardest to nail almost every exam after that first one. That conversation changed things for me, even beyond my grades.

I then applied to and interviewed for SMIS's general committee and got in, and the opportunity introduced me to upperclassmen with so much advice to give me. Later, I shadowed Robert for the VP of Finance role. I eventually ran for that same position myself, and I was voted in by members of the society.

None of it would've happened if I hadn't failed the first MIST 2090 exam, shown up to the wrong meeting, and decided to stay anyway.

Very grateful for Robert H. Anthony’s mentorship, and for every mentor who's shown me the same thing: you just have to ask!`,order:7,images:["src/photos/stories/7-11-2026-robert-anthony-0.png","src/photos/stories/7-11-2026-robert-anthony-1.png"]},{date:"7/12/2026",name:"kush santosh",body:`Continuing to tell these mentorship stories, one at a time. This one starts with showing up early.

I met Kush Santosh, MSBA at my first Society for Management Information Systems - UGA General Committee meeting. I'd shown up five minutes early just to introduce myself to the executive board beforehand, just to get to know the people I'd be shadowing. Turns out we went to the same high school! He mentioned he liked my resume, and I asked him what he’d done since graduating.

He told me about case competitions; he was running a couple of them that semester and encouraged me to try. I went in knowing almost nothing, having no case competition experience, and barely understanding any of the jargon. In my second semester of freshman year, I competed in five case competitions, four of them with Anthony Wang. Some of the time, we didn’t fully understand the jargon behind what we were talking about in front of the judges. Even through all the uncertainty, we told ourselves it couldn't hurt to at least try.

By my fifth and final case competition of the semester, we walked away with 2nd place, and I certainly didn't come out of it an expert. But I definitely came out knowing a little more than I did before, and knowing I could stand in front of strangers and judges and figure it out.

None of it would’ve happened if I hadn’t shown up early to a meeting just to say hello.

Very grateful for Kush Santosh, MSBA’s mentorship, and for every mentor who’s shown me the same thing: you just have to ask!`,order:8,images:["src/photos/stories/7-12-2026-kush-santosh-0.jpg","src/photos/stories/7-12-2026-kush-santosh-1.jpg"]},{date:"7/13/2026",name:"alex zou",body:`Continuing to tell these mentorship stories, one at a time. This one starts with awkward icebreakers, spreadsheets, and internship trackers.

I met Alex Zou during my second week at The University of Georgia at a social event; we'd all been split into random groups to go around introducing ourselves. He mentioned he was studying finance, and I immediately asked him for advice.

The same day, he sent me an email: internship trackers, finance resources, coding platforms, case competitions, professional organizations, and an entire roadmap, essentially, for someone who had no idea where to start. I was still trying to figure out what I wanted, and his advice made the road ahead feel a little less unclear.

A few days later, Alex reached out again just to tell me applications for a hackathon he did the previous year had opened, one that covered accommodations, which made it feel like a real, once-in-a-while opportunity. I applied and got in, but I didn't go because I was scared of missing one day of my calculus class. Looking back, it was a pretty minor reason not to go.

The regret stuck with me enough that I looked into hackathons on campus instead. I competed in one solo and took 3rd place, along with a hat, a pencil sharpener, and some pencils. I also competed in UGAHacks with Anthony Wang and won nothing, other than some stickers and finding out the UGA Miller Learning Center is a great place to camp out for 10+ hours straight!

I didn't come out of either one an expert, or with the most polished idea in the room. But I learned just how far I could go even without much to start with, as long as I kept trying.

Very grateful for Alex Zou's guidance, and for every mentor who's shown me the same thing: you just have to ask.`,order:9,images:["src/photos/stories/7-13-2026-alex-zou-0.jpg","src/photos/stories/7-13-2026-alex-zou-1.jpg"]},{date:"7/14/2026",name:"catherine ling",body:`Continuing to tell these mentorship stories, one at a time. This one starts with trudging through a thunderstorm for a coffee chat.

Alex Zou, one of the first students studying finance I met at The University of Georgia, told me about Catherine Ling during my second week of freshman year. We were supposed to meet at a café downtown, and I walked there through an actual thunderstorm, only to find out once I got there that we were doing the call over Zoom instead!

When we finally got on call, one of the things she told me was: closed mouths don't get fed. I've thought about that more than she probably knows, because I started asking for more opportunities and more advice from people I looked up to.

Catherine kept checking in after that, not just once, but consistently, across an entire year. Every update I shared, a new club, an acceptance, or a decision I was nervous about, she met with the same genuine excitement and reminded me there was no rush to have my entire career figured out.

When I told Catherine I was heading to the same study abroad program she'd done, she already knew exactly what to expect. She told me which classes to consider, even which restaurants to try once I got there.

It was so reassuring seeing an Asian American girl like myself succeed at The University of Georgia the way Catherine has, and it has never failed to inspire me to keep going.

None of it would've happened if I hadn't shown up, drenched from a storm, ready for a conversation that turned out to happen over Zoom instead.

Very grateful for Catherine Ling's mentorship, for Alex Zou, who introduced me to her, and for every mentor who's shown me the same thing: you just have to ask!`,order:10,images:["src/photos/stories/7-14-2026-catherine-ling-1.jpg","src/photos/stories/7-14-2026-catherine-ling-0.png"]},{date:"7/15/2026",name:"michael mcginn",body:`Continuing to tell these mentorship stories, one at a time. This one starts in an interview room.

A month into my first semester of college, Michael McGinn interviewed me for the General Committee of the UGA International Business Society. Somewhere in that conversation, studying abroad came up. He told me how it shaped his view of the world and recommended it to me. I’d never really been outside the US before, aside from one quick cruise trip.

Months later, I got into the same program Michael told me about during that interview. He sent me an entire message full of advice, what the courseload was really like, which classes tend to be tougher, and one line that’s stuck with me since: say yes to things. Whether it’s a random tour, a walk, or a spontaneous exploration, time goes by faster than you’d think.

Michael also pointed me toward specific scholarships to apply for, ones that ended up funding the experiences. Every step after that, picking classes, figuring out logistics, he checked in, genuinely invested in how it turned out.

I’ve since had the opportunity to go to multiple study abroad experiences. None of them would’ve happened if I hadn’t walked into one interview and just talked to him.

Very grateful for Michael McGinn’s encouragement, and for every mentor who’s shown me the same thing: you just have to ask!`,order:11,images:["src/photos/stories/7-15-2026-michael-mcginn-1.jpg","src/photos/stories/7-15-2026-michael-mcginn-0.png"]},{date:"7/16/2026",name:"pranav rohit",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a language I didn't plan on learning.

I met Pranav Rohit at my first UGA International Business Society General Committee meeting. I asked him if he'd studied abroad before, and he said he did! He told me about a study abroad program he thought I'd be a good fit for and encouraged me to reach out to the program directors directly, so I did. He also told me about study abroad opportunities in Germany through The University of Georgia, so I applied. I ended up doing a spring break program in Germany, then a Maymester across Germany again, and Italy.

Somewhere in one of our conversations, he mentioned he wanted to live in Germany someday and had started learning German because of it. I started too, almost as an afterthought. I'm hundreds of days into Duolingo German now (give or take; my streak got a little scrambled in a recent app update), not fluent by any means, but I've been enjoying learning something new!

None of it would've happened if I hadn't shown up to one meeting and asked a stranger a few questions about studying abroad.

Very grateful for Pranav Rohit's encouragement, and for every mentor who's shown me the same thing: you just have to ask!`,order:12,images:["src/photos/stories/7-16-2026-pranav-rohit-0.jpg","src/photos/stories/7-16-2026-pranav-rohit-2.jpg","src/photos/stories/7-16-2026-pranav-rohit-1.jpg"]},{date:"7/17/2026",name:"thya gutta",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a rush event and a fig tree.

I met Saahithya Gutta (Thya for short) at a rush event for Alpha Sigma Rho Sorority, Inc., and she became my big sister in University of Georgia - Greek Life not long after. She graduated this spring from the UGA School of Public and International Affairs!

During one of our first conversations, I asked Thya for life advice. I was a freshman, she was a senior, and I figured she'd know things I didn't yet. She told me about the fig tree, from an analogy Sylvia Plath wrote, each fig on the branch a different life you could live. If you stand there too long trying to decide which one to pick, they all rot before you choose any of them.

Going into college, there were so many majors to choose from, and I was genuinely scared of picking the "wrong" one. But I decided to just choose one instead of freezing in front of all the options. I picked Management Information Systems, and so far, I've ended up really loving it.

Being in Alpha Sigma Rho Sorority, Inc. changed Thya too; she came out of her shell and got better at leaning on people, something high school never taught her. I think that's part of why she's been so generous with me; she knew what it's like to need someone to lean on.

Maybe none of it would've happened if I hadn't simply asked a senior in my sorority what she wished she'd known.

Very grateful for the mentorship of Saahithya Gutta, my Greek Life big sister, the support of Elyn Wadstein, my Greek Life twin sister, and for every mentor who's shown me the same thing: you just have to ask!`,order:13,images:["src/photos/stories/7-17-2026-thya-gutta-1.jpg","src/photos/stories/7-17-2026-thya-gutta-2.png","src/photos/stories/7-17-2026-thya-gutta-0.jpg"]},{date:"7/18/2026",name:"andrew mathis",body:`Continuing to tell these mentorship stories, one at a time. This one starts at an accounting dinner and ends over a game of pool.

I went to a dinner for ACCT 2101 students who'd done well on the last exam, with guest speakers, mostly professors from the University of Georgia - J.M. Tull School of Accounting. One speaker stood out to me, an undergraduate student, up there talking alongside all the professors. Afterward, during Q&A, I immediately went up to him and asked how he'd done it all.

That was Andrew Mathis. He emailed me a few days later, said he'd talked to more people than he expected that night, but still wanted to sit down and talk through what path might make sense for me.

One of our conversations happened at the pool tables in The University of Georgia’s Tate Student Center, him teaching me how to play as we talked through accounting, internships, and what to actually pay attention to. He told me his own approach had been the same as mine, him cold-emailing recruiters directly to ask what he should be doing before he even applied.

Maybe none of it would've happened if I hadn't walked straight up to a stranger after a dinner talk and asked him a question.

Very grateful for Andrew Mathis's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:14,images:["src/photos/stories/7-18-2026-andrew-mathis-0.png","src/photos/stories/7-18-2026-andrew-mathis-1.png"]},{date:"7/19/2026",name:"katherine perry",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a class I never meant to take.

My senior year of high school, I could've taken ENGL 1102 in the fall semester, but I hadn't sent in my AP exam scores in time; admittedly, kind of on me, college application season had me overwhelmed. So Georgia State's dual enrollment system wouldn't let me register, and I ended up taking ENGL 1101 instead.

That's how I met Dr. Katherine Perry, in a fully remote, asynchronous class, someone I only ever expected to know through a screen.

For one assignment, she gave us an essay prompt that went something like: write about a social issue that makes you feel angry or passionate. I chose food insecurity. The more I wrote, the more I felt antsy and wanted to actually do something about it.

Deep into senior year and in the trenches of college application season, I emailed Dr. Perry asking if she thought it'd be a good idea to try hosting food donations with my school. She encouraged me to go for it. I had a leadership role in my high school's National Beta chapter, so I made the most of it. I cold-emailed as many local universities as I could, asking if they needed food donations. Georgia State University and University of North Georgia both said yes. I organized food drives with both campuses, and got my whole chapter at school involved too. Together, we collected 150+ food and hygiene items to donate.

I was so burned out that year, but organizing and carrying out this service project genuinely fueled me in a way nothing else did. Looking back, I think it helped heal something in me too, giving me a place to put all that exhaustion besides just surviving until graduation.

When it came time to apply for the National Beta scholarship, this was the topic of one of my essays. Out of the many, many scholarship applications I sent into the void that year, it ended up being one of the only ones I won. I was just so happy to have given back to the community and create something of my own with real impact.

Dr. Perry also told me about the Georgia State University Research Conference (GSURC). I applied, got in, and drove up to Atlanta my senior year of high school to present, standing in front of undergraduate and graduate students and professors, presenting the contents of the same essay I'd written in her class. It was surreal and so exciting getting to finally be in the same room as her after a semester of only knowing her online.

I've kept in touch with her ever since. None of it would've happened if I'd sent in my AP scores on time.

Very grateful for Dr. Katherine Perry's mentorship, and for every mentor who's shown me the same thing: you just have to ask!`,order:15,images:["src/photos/stories/7-19-2026-katherine-perry-1.jpg","src/photos/stories/7-19-2026-katherine-perry-3.png","src/photos/stories/7-19-2026-katherine-perry-0.jpg","src/photos/stories/7-19-2026-katherine-perry-2.jpg"]},{date:"7/20/2026",name:"vincent nguyen",body:`Continuing to tell these mentorship stories, one at a time. This one starts with four torn pieces of paper, a coin flip, and a spinner app.

In December 2024, my senior year of high school during college application season, I reached out to Vincent Nguyen on LinkedIn after seeing he'd received a scholarship to one of the colleges I was really interested in. I wanted to know how anyone could possibly get it, and honestly, whether I even had a chance at the school myself.

Vincent took the time to read through my essays, gave me honest feedback, and stayed present through every twist of my process. In March, I got rejected from said school I was interested in, but I thanked him for his time anyway.

Months later, torn between four schools ranging from a full ride to years of overwhelming debt, I asked Vincent what to do. He didn't know either, he told me honestly. Instead, he gave me the advice that got him through his own difficult decision: he'd flipped a coin, and paid attention to which outcome he found himself hoping for.

My mom tore a piece of paper into four; wrote a school name on each, and with my eyes closed, I picked the piece that had UGA written on it. Then, following Vincent's advice, I flipped a coin (well, at the time I didn't have a coin on me, so I flipped my phone) between two schools; it landed on UGA. Then I used a spinner app for good measure; it landed on UGA too. All three landed on The University of Georgia.

After I committed to UGA, Vincent told me something I still think about: it's not the college that shapes your experience; it's you. He said he'd seen students at the same school have completely different experiences, some who made the most of it, others who didn't. The place only provides the door. Walking through it is up to you.

If the door was there, I figured I might as well walk through it. That's part of why I've tried to search for, take, and open up every opportunity I possibly could at UGA since: professional development organizations, upperclassmen with incredible advice, professors with decades of expertise, study abroad, all of it.

None of it would've happened if I hadn't sent one long, nervous message to someone I'd never met.

Very grateful for Vincent Nguyen's kindness and guidance during my college decisions, and for every mentor who's shown me the same thing: you just have to ask!
*  View image`,order:16,images:["src/photos/stories/7-20-2026-vincent-nguyen-1.jpg","src/photos/stories/7-20-2026-vincent-nguyen-3.jpg","src/photos/stories/7-20-2026-vincent-nguyen-0.jpg","src/photos/stories/7-20-2026-vincent-nguyen-2.jpg"]},{date:"7/21/2026",name:"marqee ivory",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an invite and a decision to introduce myself to one of the guest speakers in the room!

In February of this year, I saw a message in the Magellan Program GroupMe about a guest speaker session with UGA Alumni of a respected firm, so I went to the meeting where it was happening. I decided to introduce myself to as many of the guest speakers as I could that evening, and I eventually asked Marqee Ivory, CPA about what made him feel fulfilled in his role afterward. I asked him for a coffee chat, and he said yes!

When I asked him who his first real mentor was, he told me it was probably his aunt and uncle, both in business, his aunt an accountant. Watching them showed him what that world could actually look like, long before he ever applied to college as an intended business major.

Marqee's built his own career in specialized tax services since then, and one thing he told me has stuck with me: know your core values, know what's close to your heart, and let that be the foundation of your professional brand. I've since kept that close to my heart in deciding what's true to me!

Maybe none of it would've happened if I hadn't introduced myself to a room full of strangers.

Very grateful for Marqee Ivory, CPA's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:17,images:["src/photos/stories/7-21-2026-marqee-ivory-1.png","src/photos/stories/7-21-2026-marqee-ivory-2.jpg","src/photos/stories/7-21-2026-marqee-ivory-0.jpg"]},{date:"7/22/2026",name:"ashlee azizz",body:`Continuing to tell these mentorship stories, one at a time. This one starts with three concerns I confided in a mentor about, and three pieces of advice she gave me in return.

I found Ashlee Azziz through the UGA Mentor Program in June 2025 and cold messaged her on LinkedIn before I'd even started my freshman year. We've called over the phone four times since, before school started, first semester, winter break, and after this past semester ended.

When I told Ashlee I felt lost about what I wanted in life, she told me to figure out what I don't want. She said it's usually a much shorter list than you'd expect, and that's basically how she ended up where she is now.

When I admitted to her that I was scared of choosing something "wrong" for myself, she reminded me that she's on her second career. Instead of viewing restarting as failure, she talked about it like it was completely normal. Resiliency is something you build, day by day, and you don't have to be born with it.

When I brought up my worry about "bothering" too many people with my questions, she reassured me that she still asks around five questions a day at work. She told me the people she trusts the least are the ones who never ask anything.

All three of these have stuck with me more than I expected.

None of it would've happened if I hadn't sent that first cold message before I'd even set foot on campus.

Very grateful for Ashlee Azziz's mentorship, and for every mentor who's shown me the same thing: you just have to ask!`,order:18,images:["src/photos/stories/7-22-2026-ashlee-azizz-0.jpg","src/photos/stories/7-22-2026-ashlee-azizz-1.png"]},{date:"7/23/2026",name:"kennith lee",body:`Continuing to tell these mentorship stories, one at a time. This one goes all the way back to two days before I moved into my freshman year dorm.

I reached out to Kennith Lee on LinkedIn on August 5th, 2025, a week before starting college. We went to the same high school, and I wanted to know how the work ethic we both developed from there had shaped him since. He called me that week during move-in chaos and gave me advice that’s stuck with me since: stay grounded in who you are and join clubs to build real friendships. I tried my hardest to hold onto both.

A few weeks later, I got my first rejection in college, from the Magellan Program, which only accepted 50-55 pre-University of Georgia - Terry College of Business freshmen each semester. He helped me think of it as motivation, something to figure out and improve on, rather than just something to feel bad about. I started to search from within for what I wanted to do and what made me feel fulfilled and started acting on those passions. I applied again the following semester and got in, meeting some of the people I’m very grateful for now, Anthony Wang, Keira Smyth Gravina, Jenjen Lin, Aadit Shah, and Sai Shankar Sadhu among them.

Over the next year, I kept updating him about new organizations I joined, new commitments, and a referral into the Institute for Youth in Policy, where he was a senior advisor, eventually finishing that program as one of the outstanding proposal writers. Every single time, he responded, even through his own busy stretches, moving cities, and starting a new job.

But the thing I’m most grateful for isn’t any single piece of advice. Watching him build something real in content creation is honestly what gave me the push to start this very series. I’d always wanted to try it. Watching his success as someone who went to the same high school made it feel possible.

Maybe none of it would’ve happened if I hadn’t sent one cold DM a few days before I moved into my dorm.

Very grateful for Kennith Lee’s kindness, and for every mentor who’s shown me the same thing: you just have to ask!`,order:19,images:["src/photos/stories/7-23-2026-kennith-lee-2.png","src/photos/stories/7-23-2026-kennith-lee-1.png","src/photos/stories/7-23-2026-kennith-lee-0.jpg"]},{date:"7/24/2026",name:"bria smith",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a race to grab a meal together.

In October 2025, an upperclassman in my Alpha Sigma Rho Sorority, Inc. chapter mentioned the University of Georgia - Greek Life Emerging Greek Leaders Program as something we could look into, and I decided to go for it and apply. It’s a cohort-based leadership program for students in their first two years of fraternity or sorority membership, with biweekly Thursday meetings to build leadership skills and connections across UGA’s Greek community!

Once I got in, I checked the roster and realized I was the only person from the Multicultural Greek Council in the program, so I felt a bit out of place at the start. I was assigned to Bria Smith’s group, a soror of Alpha Kappa Alpha Sorority, Incorporated, part of the National Pan-Hellenic Council, Inc. (NPHC). She offered to grab a meal one-on-one with whoever found her first at the UGA Miller Learning Center. I happened to be there waiting for the elevator before a study session with friends, and when the doors opened, she was there!

Over that meal, I had so many questions, about Greek life, leadership, service, and how to actually make the most of my time in it. She answered every single one and never once made me feel like I was asking too much. She took me under her wing from that day on!

She was the very first person in the National Pan-Hellenic Council, Inc. I talked to, and she was incredible.

I loved having someone to look up to, someone I really admired for how confident and strong she was in her values and her commitment to service.

We kept crossing paths after that, when she invited me to the UGA NPHC’s yard show, and when she showed up to support at the UGA MGC strollcase I performed in, one my sorority’s performance chair had spent months preparing for!

Maybe none of it would’ve happened if I hadn’t looked twice at a message in a group chat and decided to apply!

Very grateful for Bria Smith’s mentorship, and for every mentor who’s shown me the same thing: you just have to ask!`,order:20,images:["src/photos/stories/7-24-2026-bria-smith-1.jpg","src/photos/stories/7-24-2026-bria-smith-0.png"]},{date:"7/25/2026",name:"ben aratame",body:`Continuing to tell these mentorship stories, one at a time. This one starts on a school bus!

I recognized Ben Aratame before I ever reached out to him; we rode the same school bus and lived in the same neighborhood growing up. Many years later, I saw his content online, growth, startups, and entrepreneurship, and it made me think that maybe I could be something bigger than I'd thought. I'd always wanted to create and build things of my own, but I wasn't exactly sure where to get started. I figured it couldn't hurt to ask him how he did it. I found his email through his website and reached out. My email was very, very raw, like I was trying to find some meaning to my life.

He got back to me and wanted to hear my whole story first. Then he told me his.

Ben told me he was a "bum" in high school until he met a mentor who introduced him to self-improvement, business, and personal finance. I actually talked to that same mentor a few times in high school myself, back when I was trying to practice public speaking for the first time. His own parents didn't think he'd make it. He started building his life anyway, posting content on TikTok, working on his physical health, and DMing and emailing every moderately successful person he could find, even leaving notes on nice cars in parking lots. I recognized I'd been doing the same thing, but over LinkedIn and cold emails, for the past few years, just too scared to start speaking more loudly and publicly about it.

That talk sparked something in me. If he could build the life he has, growing up in the same neighborhood and taking the same school bus as me, I started to wonder what I could build too. It took me 10 months since our first conversation, but I finally took the leap to be more public about my own story a few weeks ago.

Very grateful for Ben Aratame's advice, and for every mentor who's shown me the same thing: you just have to ask!`,order:21,images:["src/photos/stories/7-25-2026-ben-aratame-1.jpg","src/photos/stories/7-25-2026-ben-aratame-0.jpg","src/photos/stories/7-25-2026-ben-aratame-2.jpg"]},{date:"7/26/2026",name:"karishma pandit",body:`Continuing to tell these mentorship stories, one at a time. This one starts with shadowing a role I hoped to fill in for one day!

I'd spent a long time managing social media accounts for different organizations back in high school, but I really wanted to see how that translated into college, so I applied to shadow Karishma Pandit for the SVP of Student Relations role at Society for Management Information Systems - UGA. In March of this year, I found out I'd get to shadow her marketing responsibilities!

Karishma actually took the time to coach me, for example, on best posting times (mid-morning to early afternoon, it turns out, actually does produce good results; I'd just watch it happen from my phone notifications). Over time, she had me posting spotlight stories on Instagram of bright students in the General Committee of SMIS.

Beyond the social media side, I'd ask Karishma for her honest opinion on speeches I was giving and talk to her about the case competitions I was doing. She was always supportive and genuinely excited for me. It was so reassuring having such a kind, encouraging upperclassman to shadow!

Something about telling other people's stories publicly planted a seed in me too. What if I could share the stories of other people, but on my own platform? What if I started telling my own story too? That thought became the leap that led to me beginning to share my story on LinkedIn.

I ultimately ended up having the honor of being elected to a different role within SMIS, but I learned so much from her last semester!

It was so reassuring seeing an Asian American girl like me succeed at The University of Georgia the way Karishma has, and it’s kept inspiring me to keep going.

Very grateful for Karishma Pandit’s mentorship, and for every mentor who's shown me the same thing: you just have to ask!`,order:22,images:["src/photos/stories/7-26-2026-karishma-pandit-0.jpg","src/photos/stories/7-26-2026-karishma-pandit-1.jpg"]},{date:"7/27/2026",name:"jeff nguyen",body:`Continuing to tell these mentorship stories, one at a time. This one starts with feeling lost, even when things looked fine on paper.

A couple weeks ago, I asked jeff nguyen who his first mentor was. He told me about someone who gave him tons of advice during a messy stretch of his life and helped him separate corporate from his personal life. He called her the best "mama duck" he could've asked for!

But when I asked Jeff more broadly about what helped him the most, his answer was pretty unconventional. He said his most meaningful conversations were in singular moments: on a bathroom floor, sitting on a sidewalk, or staying in a car five extra minutes after dropping off a friend. People who showed up exactly when he needed them most, then let the conversation be enough.

Jeff told me he'd once felt completely lost, even after things started looking fine on paper. At 25 or 26, still unsure why he was even going to work in the mornings, a mentor sat him down and told him to slow down, forget the vanities of a job title, and just ask himself one honest question: what's the one thing in this life he wants to have done?

His answer became his identity. Jeff wanted to help students who felt like they had nowhere else to go. With his mentor's encouragement, he started a small coffee chat project for students navigating their careers and relationships. That project is now BobaTalks, a free, community-based mentorship platform, currently serving over 13,000 members worldwide, with 120+ mentors ("BobaMentors") and 35,000+ mentorship conversations ("BobaTalks") booked so far! It's so incredible to me just how many people's lives he's changed through that platform.

Speaking of "mama ducks," I couldn't help but think of my own. Jeff reminded me that being able to choose is a privilege in itself. It made me think of my mom, who came to America from Cambodia with next to nothing and worked her way through several careers, from tailoring suits to caring for people's health as a pharmacy technician and to raising the next generation as a Pre-K assistant teacher, all while taking care of me and my brother, Alan Wang. I want to make the most of the life and choices my mom worked so tirelessly to give me.

Jeff shared a line I haven't stopped thinking about: a ship in a harbor is safe, but that's not what ships are built for. For a while, I was scared of taking risks, so worried about making a fool out of myself. But I've taken the leap anyway, again and again, just reaching out to people asking for help or advice.

Maybe none of it would've happened if he hadn't let himself be found in those small, unplanned moments, on a bathroom floor, in a car, at a coffee chat, and if I hadn't just asked him the question in the first place!

Very grateful for jeff nguyen's honesty, and for every mentor who's shown me the same thing: you just have to ask!`,order:23,images:["src/photos/stories/7-27-2026-jeff-nguyen-2.png","src/photos/stories/7-27-2026-jeff-nguyen-0.jpg","src/photos/stories/7-27-2026-jeff-nguyen-1.jpg"]},{date:"7/28/2026",name:"dr. christina serrano",body:`Continuing to tell these mentorship stories, one at a time. This one starts with free food and an empty seat.

In August 2025, I walked out of MIST 2090 at 5pm one evening, saw a picnic-style event for University of Georgia - Terry College of Business students with food set out, and honestly, I was just hungry. I sat down at a random table. A professor sat down right next to me. That was Dr. Christina I. Serrano!

We talked for a bit over Mac 'n' Cheese, and afterward I got her email. A few weeks later, I went to her office to talk more. MIS was still so new to me at the time, and I felt genuinely lost about what I was even getting myself into. She gave me so much context I didn't have yet.

One thing Dr. Serrano told me has stayed with me since: good grades don't necessarily mean you've learned everything you need to. She talked about mistaking her own straight A's in undergrad for exceptionalism, thinking she'd already arrived. It took her years to learn how to be honest with herself first, and to take accountability if she made mistakes, even if others around her wouldn't do the same.

I'd been chasing perfection since high school, test scores, GPA, every metric I could find, treating all of it like part of my identity, the ultimate measure of whether I was "good enough." Coming into college, I was genuinely terrified whenever information didn't click as fast as I wanted it to. Hearing Dr. Serrano be so honest about her own journey helped me start unlearning that, learning to actually enjoy the process of learning something new, instead of just chasing a perfect outcome.

Dr. Serrano also pushed me to think beyond just solving problems logically, to get comfortable with divergent, exploratory thinking too. It's encouraged me to keep exploring new things ever since!

Maybe none of it would've happened if I hadn't been hungry enough to sit down at a random table.

Very grateful for Dr. Serrano's honesty and guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:24,images:["src/photos/stories/7-28-2026-dr-christina-serrano-0.jpg","src/photos/stories/7-28-2026-dr-christina-serrano-1.png"]},{date:"7/29/2026",name:"jacob frausto",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an office hours visit that turned into years of collaboration.

I asked Jacob Frausto who his first real mentor was, and he told me it was a professor from his undergraduate years. Jacob went to his office hours after a final project, just to ask why he'd made a certain decision on it. He didn't have a clean answer at the time, but that first conversation turned into another, and then another.

They started collaborating together, and that professor eventually wrote him a recommendation letter. Jacob said the relationship kept going, one conversation at a time, well after that first, slightly awkward office hours visit.

I saw a lot of myself in his story. I've gotten close with quite a few of my professors the same way, just showing up to office hours consistently, curious about their work, not necessarily needing help with an assignment. They've also eventually led to recommendation letters for me!

Jacob told me something I've been thinking about since: people love talking about what they work on. He almost didn't go, worried he'd be a burden. He wasn't. Most mentors, he said, are just waiting for someone to ask.

Maybe none of it would've happened if he hadn't shown up to office hours with just one honest question.

Very grateful for Jacob Frausto's honesty, and for every mentor who's shown me the same thing: you just have to ask!

P.S. Super grateful for the LinkedIn Premium free trial he sent over!`,order:25,images:["src/photos/stories/7-29-2026-jacob-frausto-0.jpg","src/photos/stories/7-29-2026-jacob-frausto-1.jpg"]},{date:"7/30/2026",name:"connie ma",body:`Continuing to tell these mentorship stories, one at a time. This one starts with someone reaching out to me first!

In January of this year, I saw one of Connie Ma's posts on LinkedIn and sent a connection request. As a career coach for students and early-career professionals, she messaged me before I even had the chance to reach out myself, curious about my perspective as a college freshman. I scheduled a free discovery call with her during winter break!

When we finally got on call, she told me nothing has to be permanent right now. I'd been so anxious about locking in the "right" path, but she reminded me I could still change my mind at even age 65, and beyond. I'd been really scared of choosing the "wrong" thing, or making a pivot into something completely new to me, but it was so grounding to hear that from an Asian American woman like me, with years of real expertise and experience behind her.

Later, reading through her own writing, I came across a phrase that captured something I hadn't been able to name myself. "Be curious, and you will find things." I really resonated with that, because I've been super curious and reached out to a whole lot of people since, and I've found so many things through that whole experience.

Maybe none of it would've happened if she hadn't reached out to a random college freshman, and if I hadn't said yes.

Very grateful for Connie Ma's guidance, and for every mentor who's shown me the same thing: you just have to ask.

If you'd like to talk with her yourself, you could do the same free 60-minute discovery call I had with her using this link: https://lnkd.in/eSAJdYc2`,order:26,images:["src/photos/stories/7-30-2026-connie-ma-1.png","src/photos/stories/7-30-2026-connie-ma-0.jpg"]},{date:"7/31/2026",name:"dr. irakli shalikashvili",body:`Continuing to tell these mentorship stories, one at a time. This one starts with my very first class in college.

Back in Fall 2025, Irakli Shalikashvili, Ph.D. taught my Intro to Macroeconomics class, first thing every Monday, Wednesday, and Friday at 9:10am. At first, I'd stay after his lectures just to ask questions about the content itself: midterms, homework, and the assignments.

Then I didn't get the grade I wanted on an early assessment, and that was the spark that made me want to start going to his office hours.

Once I was there, I started asking him about his own journey too. He pursued academia, researching monetary policy, labor markets, and inflationary expectations, really similar to the content he was teaching us in class. I watched how genuinely excited he got talking about it, and about teaching, when I asked him about it. It was his first year teaching at The University of Georgia, and it showed in the best way.

Getting to know Dr. Shalikashvili opened my mind to just how many possibilities were actually out there, an entire world I hadn't known existed as a freshman still finding my footing after a major pivot.

Thankfully, I finished the class feeling like I'd actually learned many things, even after switching into a subject that was completely unfamiliar to me.

None of it would've happened if I hadn't pushed myself to show up and ask for help understanding the content in his class!

Very grateful for Irakli Shalikashvili, Ph.D.'s guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:27,images:["src/photos/stories/7-31-2026-dr-irakli-shalikashvili-0.png","src/photos/stories/7-31-2026-dr-irakli-shalikashvili-1.png"]},{date:"8/1/2026",name:"nithya vembu",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a Circle of Success.

I met Nithya Vembu through a UGA Mentor Program Circle of Success, a small-group mentoring program matching students with alumni mentors. We had one group call together during the school year!

Coming on a study abroad program, somewhere I never thought I'd actually be, I wanted to make sure the people who'd helped me along the way knew I appreciated them. I reached out to all of the mentors who'd shaped me, and Ms. Vembu was one of them.

We caught up over another great call, and afterward, looking back at how we'd first connected through the UGA Mentor Program, I realized Bhaumi Nadella, someone I'd just met and clicked with here abroad, was in that exact same Circle of Success!

Funny enough, it was actually Bhaumi who helped give me that final push to start this whole series. On July 3rd, we were getting lunch, and I joked that I was so happy to be here that it made me want to start posting on LinkedIn. She looked at me and said, "wait, I think you should actually do it." The next day, on America's 250th birthday, we went to London together, and I posted for the very first time on this platform, albeit very nervously, standing in line for a photobooth, but so eager to finally start sharing my story.

Ms. Vembu's own path is really inspiring to me, over a decade in tech before pivoting specifically into higher-ed consulting, helping universities adopt technology that actually serves their students better. It reminded me that expertise doesn't have to stay in one lane. I've felt that myself in a bit of a different way, juggling a lot of different interests that don't fit neatly into one box, but enjoying the process along the way!

None of it would've happened if I hadn't reached out to say thank you, and if a mentor circle hadn't quietly connected all of us long before we realized it!

Very grateful for Nithya Vembu's mentorship, and for every mentor who's shown me the same thing: you just have to ask!`,order:28,images:["src/photos/stories/8-1-2026-nithya-vembu-3.png","src/photos/stories/8-1-2026-nithya-vembu-0.jpg","src/photos/stories/8-1-2026-nithya-vembu-1.jpg","src/photos/stories/8-1-2026-nithya-vembu-2.jpg"]},{date:"8/2/2026",name:"jay yang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with someone who quite literally proved his own thesis.

I've been following Jay Yang's content for a while, his "you can just do things" philosophy has echoed so much of what I've been doing myself, just cold-DMing and asking people for advice, again and again, since high school.

He talked about a Contact Quadrant, four real ways to get in front of decision-makers: cold outreach, referrals, content, and public pitches.

Reflecting on his framework, I realized I've been doing three of those pretty consistently, cold outreach whether through LinkedIn or email, referrals that just happened to happen as a result of that outreach, and content, building visibility, actually on here, so the right people can find you too.

Posting on here has helped get me talking with some of the most ambitious, inspirational, and kindest people I've ever met.

Public pitches, raising my hand in the open, though, is still new territory for me, and I hope to get started on that!

Something about his framework made me reflect on how the people who succeed are the ones who keep showing up, even past that first ask. It made me reflect on my current relationships with my mentors, continuing conversations well past a single cold message, and asking both for advice and what actually makes them happy and fulfilled, and I hope to continue that!

His book, You Can Just Do Things, is all about success through taking control instead of waiting for permission.

It's incredible to see someone who's living proof of his own thesis. Excited to check it out, and his upcoming book, Work With The Best!

Very grateful for Jay Yang's advice, and for every mentor who's shown me the same thing: you just have to ask!`,order:29,images:["src/photos/stories/8-2-2026-jay-yang-0.png","src/photos/stories/8-2-2026-jay-yang-1.png"]},{date:"8/3/2026",name:"gergana droumeva",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an email that laid out exactly what I needed this summer!

I was matched with Gergana Droumeva through a free career accelerator program in June! Her very first email set the tone for everything that followed: three sessions, clearly planned, but flexible around my schedule.

Our first call was about goals, story, and how to actually talk about my own interests and what brings me fulfillment.

In our second call, she went through my resume and cover letter line by line, catching things I'd never noticed myself, from simple things like moving my most recent experience up, to helping me reword things so they reflected my driving impact myself.

Our third call was a full mock interview, behavioral questions, then a case, followed by a debrief where we went back through every answer together, what worked, what I'd do differently next time.

Throughout three weeks and our three calls, there's one thing she told me that's stuck with me more than any resume tip.

It's okay to pause, and just listen to what your gut, and your heart, are actually telling you. Sometimes we hit "analysis paralysis," staring at pros and cons lists until we've exhausted ourselves, but the answer is often already there, quieter than the noise.

I've weighed so many different career options, and I was worried that I was in a rush to figure it all out. But taking the time to really sit with what actually made me happy and staying true to myself has helped me make decisions more than anything else.

It was truly such an honor to be paired with Gergana Droumeva, and for all her honesty and advice throughout each one of our calls.

Very grateful for Gergana Droumeva's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:30,images:["src/photos/stories/8-3-2026-gergana-droumeva-1.jpg","src/photos/stories/8-3-2026-gergana-droumeva-0.jpg"]},{date:"8/4/2026",name:"ava martinez",body:`Continuing to tell these mentorship stories, one at a time. This one starts with hours of frustration over trying CAD for the very first time.

I've been in the L'SPACE Program, a free, NASA-funded, virtual, workforce development program designed to train and educate students about the dynamic world of the space industry through hands-on learning, since January of this year. Something I'd always had my eye on was trying Siemens NX for the first time. It was completely new to me, and I'm currently on the programmatics subteam as a non-technical major. But I figured it couldn't hurt to try!

I finally got to it 6 months after I first started the program, in June.

I spent hours, sometimes five at a time, trudging through tutorials, trying to complete four assessments I wasn't technically required to do, but really determined to try anyway. I knew the L'SPACE Program is full of incredible mentors, so I reached out to Ava Martinez, who was holding NX office hours, after hours of being stuck on one specific problem.

She walked me through it incredibly patiently, constraints, extrusions, the unite tool, back and forth over messages until I finally hopped on a screenshare call with her.

Something I noticed through it all stuck with me: what I'd struggled with for hours, watching tutorials passively, got resolved so much more easily once I actually asked someone with real experience for help. It was also just super comforting having someone as supportive as Ava there cheering me on through that initial learning curve.

I ended up passing all four assessments for the academy's NX badge!

Maybe none of it would've happened if I hadn't finally asked for that call instead of continuing to struggle alone on something completely new to me.

Very grateful for Ava Martinez's patience and guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:31,images:["src/photos/stories/8-4-2026-ava-martinez-1.png","src/photos/stories/8-4-2026-ava-martinez-0.png"]},{date:"8/5/2026",name:"dennis chen",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a simple question: what would you do differently?

In January of this year, I reached out to Dennis Chen and asked him if he could share 1-2 things he'd do differently if he were starting college all over again. He gave me two pieces of advice that have genuinely stuck with me.

First, Dennis told me to try as many things as I could: different industries, roles, case competitions, student groups, actually experiencing everything college has to offer.

Since I was just starting out, I really wanted to follow his advice and go forth with it. I ended up trying five different case competitions last semester for the sake of learning as much as I possibly could, joining different student organizations on campus like Society for Management Information Systems - UGA and Alpha Sigma Rho Sorority, Inc. to meet as many new friends as I could, and exploring different fields entirely, space through L'SPACE Program and policy through the Institute for Youth in Policy!

Second, he told me he wished he'd started posting content earlier. He was scared in undergrad, worried about what people would say. But he told me the risk-to-reward ratio of putting yourself out there is massively skewed toward the reward side.

To be completely honest, I'd been really scared of making a fool out of myself by posting on here, worried about what other people might think of me. But I realized I genuinely wanted to put myself out there and share my story. As a result of that, I've actually gotten more opportunities to talk to incredible people!

The best time to start was probably seven months ago,  but the next best time was now. It took me that whole seven months to actually get there, later than I would've liked, but I finally did, because of what he told me.

Maybe none of it would've happened if I hadn't just asked him one honest question.

Very grateful for Dennis Chen's advice, and for every mentor who's shown me the same thing: you just have to ask!`,order:32,images:["src/photos/stories/8-5-2026-dennis-chen-0.jpg","src/photos/stories/8-5-2026-dennis-chen-1.png"]},{date:"8/6/2026",name:"eshani ram",body:`Continuing to tell these mentorship stories, one at a time. This one starts with the very first leadership role I got, in my freshman year of high school!

Back in May 2022, I applied and interviewed for the Creative Director role of my HOSA-Future Health Professionals chapter. I'd competed in the Medical Reading event the year before, a competition testing what I learned each year from 5 books on health and leadership. I really loved the mission behind the organization, so landing the role felt huge. It was my first ever leadership position, and I was so excited to soak up all the knowledge like a sponge and learn as much as I could from the responsibilities I was handed.

Eshani Ram had held that same role before me, and she showed me everything: how to design Instagram graphics with a curated theme (it was pink, yellow, and blue, if I remember correctly!), how to curate posts, giving me feedback and encouragement the whole way through. One of the graphics I curated during that time, a HOSA Happenings feature, actually went on to get state and international recognition.

She helped me all through sophomore year and was someone I looked up to for the rest of high school!

Years later, coming into college, I pivoted into MIS, and it turned out Eshani had experience with the exact same major at The University of Georgia, a year ahead of me.

I reached out again, this time asking about schedules, which professors to take, which organizations to join, even how to actually talk to upperclassmen. I was so scared going into college, and having someone I already trusted walk me through it made all the difference.

It's crazy to think Eshani was one of my very first mentors, and that I've now known her for a little over four years.

None of it would've happened if I hadn't applied for a Creative Director role in high school, or reached out again years later when I needed guidance all over again!

Very grateful for Eshani Ram's mentorship, then and now, and for every mentor who's shown me the same thing: you just have to ask!`,order:33,images:["src/photos/stories/8-6-2026-eshani-ram-1.png","src/photos/stories/8-6-2026-eshani-ram-0.png"]},{date:"8/7/2026",name:"gabriela aguilar castillo",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a newsletter link.

I attended a coffee chat Gabriela Aguilar Castillo held the other week, and she told us about how she found out about an online program connecting students to consulting firms through a newsletter. That same online program led her to the link to her first internship at a respected consulting firm!

Her persistence and following one thread to the next really inspired me.

Once Gabriela got in is when the real mentorship started for her. She was assigned an OBA, an onboarding advisor, who showed her who to know. That principal she met as an intern is still her mentor today, years later, now that she's a consultant herself!

She told me something that I've still been thinking about: it's the people that make the job fulfilling. Reaching out to people on LinkedIn, being genuinely curious about someone in an interview, staying in touch with the people who first opened doors for you, all works with the relationships underneath it.

Hearing her say that made me reflect about every person I've reached out to on this platform, and how much it's mattered to actually stay in touch and keep showing up for the people who've shown up for me. It's something I really hope to continue doing!

Maybe none of it would've happened if she hadn't clicked one link in a newsletter and kept saying yes to what came next!

Very grateful for Gabriela's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:34,images:["src/photos/stories/8-7-2026-gabriela-aguilar-castillo-0.png","src/photos/stories/8-7-2026-gabriela-aguilar-castillo-1.png"]},{date:"8/8/2026",name:"joaquin santander",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a message about Interface Control Documents.

Joaquin Santander reached out to me last month, and he wanted to hear how I approached writing effective ICDs! We're both in the L'SPACE Program, a free, NASA-funded, virtual workforce development program, but specifically on the Mission Concept Academy (MCA), a 15-week track where students collaborate with an interdisciplinary team to develop a preliminary NASA mission concept from the ground up. Joaquin serves as a Team Electrical Engineer!

Honestly, I wasn't the most sure on writing ICDs myself. But that conversation turned into what Vivin Sharma recently taught me to call a "frentor," friend and mentor rolled into one.

Since that first conversation, we've been sharing thoughts on Mission Definition Review (MDR) deliverables, System Requirements Review (SRR) feedback, and trying to get everything done for each deadline ever since, cheering each other on through the many milestones the program offers.

I think we both realized how grateful we were for the opportunity L'SPACE Program provides. Within the program, we get to hear talks with professionals who work with NASA, work with a full team of engineering, programmatics, and science subteams, Deputy Project Managers for Resources (DPMRs), Program Managers (PMs), and mentors. It's incredible that getting to learn all of this and these resources is completely free to us as students.

As Team Electrical Engineer, Joaquin is focused on the Electrical Power Subsystem (EPS) for his team's spacecraft mission concept, defining how power gets generated, stored, and distributed across the system!

None of this would've happened if he hadn't sent that first message asking about ICDs!

Very grateful for Joaquin's kindness, and for every mentor, and "frentor," who's shown me the same thing: you just have to ask!`,order:35,images:["src/photos/stories/8-8-2026-joaquin-santander-0.png","src/photos/stories/8-8-2026-joaquin-santander-1.jpg"]},{date:"8/9/2026",name:"amanda schultz",body:`Continuing to tell these mentorship stories, one at a time. This one starts at the end of May, with a mission concept and a team spread across the country!

Amanda Schultz is the Deputy Project Manager for Resources (DPMR) on Team 9 for the L'SPACE Program, a free, NASA-funded, virtual workforce development program, but specifically on the Mission Concept Academy (MCA), a 15-week track where students collaborate with an interdisciplinary team to develop a preliminary NASA mission concept from the ground up.

As a Program Analyst, she's essentially been my guide through the whole academy since May. From the very beginning, I was genuinely unsure how I'd even keep up, but she never once made me feel unqualified. Amanda just kept showing up, patiently, willing to help however I needed it, a quick text, hopping on a call, whatever it took to get me through something I didn't understand yet.

What's stuck with me most this whole summer is how open and consistent Amanda Schultz's always been with me. Whenever I was confused, even when I was still confused after asking once, or even three times, she never made me feel like a burden. She just kept helping me out.

Somewhere along the way, watching how present and connected she stayed with our team, all the way across the country and in different time zones, working on something completely new to both of us, it taught me just how much staying in touch and being transparent actually matters in a team. It made me want to show up that same way too, with her, and with everyone else on our team.

We're finishing up our last deliverable now, the Preliminary Design Review, and I genuinely can't imagine a better DPMR to have gone through this entire summer with.

Maybe none of it would've happened if I hadn't shown up to our meetings that first week, unsure of myself, and been guided by her anyway.

Very grateful for Amanda Schultz's kindness and guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:36,images:["src/photos/stories/8-9-2026-amanda-schultz-0.png","src/photos/stories/8-9-2026-amanda-schultz-1.png"]},{date:"8/10/2026",name:"anandhi bharadwaj",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a talk on digital disruption and AI.

During my time in The University of Georgia summer study abroad program at the University of Oxford, I had the opportunity to attend a guest talk by Dr. Anandhi Bharadwaj, the Goizueta Endowed Chair in E-Commerce at the Emory University - Goizueta Business School, on digital disruption and AI. Her perspective on platform shifts, the roughly once-a-decade moments when a completely new technology becomes the foundation everyone builds around, and why a lot of companies have to adapt quickly when that happens, really changed how I see all of these rapid changes in tech happening in the world!

When I asked Dr. Bharadwaj for advice in my own career afterward, she reminded me that a career path can be nonlinear. Her own journey was really inspiring to me: she started in systems work at a milk cooperative in India, then moved into systems roles at a larger tech company, before pursuing her PhD and eventually becoming one of the leading voices studying how technology reshapes entire industries.

There was a statistic Dr. Bharadwaj shared that made me really stop and think for a minute: according to McKinsey & Company's "The State of AI: Global Survey 2025" (November 2025), 88% of organizations regularly used AI in at least one business function, but only 39% reported a measurable financial impact from it. Something I took away from her talk is that understanding how to actually use something well takes real time and intention, and I hope to carry that with me as I go back into the school year.

Maybe I wouldn't have gotten that amazing advice if I didn't stay back after her talk to ask an honest question!

Very grateful for Dr. Anandhi Bharadwaj's time and honesty, and for every mentor who's shown me the same thing: you just have to ask!

P.S. Here's the source if you're interested in reading some more: https://lnkd.in/eVF5dh8W`,order:37,images:["src/photos/stories/8-10-2026-anandhi-bharadwaj-1.jpg","src/photos/stories/8-10-2026-anandhi-bharadwaj-0.jpg","src/photos/stories/8-10-2026-anandhi-bharadwaj-2.jpg"]},{date:"8/11/2026",name:"naman mehrotra",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a builder halfway across the world!

I was really curious about Naman Mehrotra’s role for a startup accelerator he’s helping build and scale across the US, India, and soon Australia. What was supposed to be a quick coffee chat turned into an hour of him walking me through everything, team structure, how they scaled to different countries using trusted ambassadors, how their decision-making process worked in their first cohort, even how to run a meeting efficiently with a shared agenda beforehand.

Something he said has really stuck with me since: keep reaching out to people, keep exploring, there’s always going to be something out there for you. I really hope to keep doing that, and I think in talking to so many people on LinkedIn doing great initiatives, I’m learning so much!

He really didn’t have to share any of it with that much detail or care, but it was incredibly kind of him to do so anyway, and inspiring to see someone scaling something in real time. That’s exactly what I’ve come to learn a “frentor” is, a friend and mentor rolled into one, showing up because they genuinely want to help.

Very grateful for Naman’s generosity, and for every mentor, and frentor, who’s shown me the same thing: you just have to ask!`,order:38,images:["src/photos/stories/8-11-2026-naman-mehrotra-0.jpg","src/photos/stories/8-11-2026-naman-mehrotra-1.jpg"]},{date:"8/12/2026",name:"matthew huang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a post-high school realization.

I recently had a chat with Matthew Huang the other day, and he told me the spark that changed things for him was a single realization: in high school, he'd spent years on traditional achievements, like good grades and clubs, achievements that are genuinely valuable in moderation, but without ever really knowing what he actually wanted. He spent 2-3 months reaching out to as many people in the startup space as he could, reading blogs, watching YouTube, before deciding the only real way to learn was by actually doing it.

That's how Daybreak, Matthew's first project, started, building a better morning routine, in public, on LinkedIn. As someone who described himself as pretty introverted, he pushed himself completely out of his comfort zone, walking up to random people at a cafe to pitch his product. I used to be really introverted too, scared to even talk in large groups of friends, and I've had to push myself out of my comfort zone over and over to get past that fear. I really respect him for cold-messaging founders and pitching something meaningful, even when it wasn't easy.

That same instinct to build in public eventually led him to a growing startup, he cold-messaged their founders, got no response, kept engaging with their community anyway, and eventually posted something on LinkedIn he built using their tool. That post turned into a real conversation, and eventually, a pretty cool internship.

I saw a lot of myself in his story. In high school, I chased good grades, clubs, every accomplishment I could find to feel like I was doing "enough." When I finally graduated, with cords, medals, and a golden stole I aimlessly overworked myself for in high school, it probably looked great on the surface, but I felt the most lost and scared I'd ever been. I had no idea where I was going in life either. I had my own version of that same rude awakening, and had to claw my way out of feeling lost, reaching out to as many people as I could, reading up on business and tech stories, trying to figure it out from scratch.

What also stuck with me most was his honesty about fear. He told me it never fully goes away, he's still deeply terrified to post on LinkedIn, still nervous walking into rooms to talk to people. It can be intimidating when I hit post here or walk into rooms full of incredible people I look up to, but I hope what I say resonates with at least one person, and I'll keep persisting because I genuinely love getting to talk to and learn from people like Matthew who have such cool experiences!

Very grateful for Matthew Huang's honesty, and for every mentor, and frentor, who's shown me the same thing: you just have to ask!`,order:39,images:["src/photos/stories/8-12-2026-matthew-huang-0.jpg","src/photos/stories/8-12-2026-matthew-huang-1.jpg"]},{date:"8/13/2026",name:"matthew foster",body:`Continuing to tell these mentorship stories, one at a time. This one starts with 13 role meetings, lots of confused questions, and a mentor who never once made me feel behind.

Matthew Foster has been both my Program Analyst mentor and team mentor for Team 9 since May as part of the L'SPACE Program, a free, NASA-funded, virtual workforce development program, but specifically on the Mission Concept Academy (MCA), a 15-week track where students collaborate with an interdisciplinary team to develop a preliminary NASA mission concept from the ground up.

He led weekly Program Analyst role meetings every Thursday alongside Rana Eyit and Aidan Piper, on top of general Team 9 meetings every Monday, without fail. We had our 13th and final role meeting last night, so it's been around over three months of the MCA program!

I came in pretty clueless but incredibly excited to learn, since space had always been something I was interested in since I was a kid. What made the whole experience so grounding was how consistently Matthew checked in on me. With each deliverable, the MDR, the SRR, the PDR, terms I didn't understand at all in the beginning, he'd always ask how it was going and if I was hitting any roadblocks.

He'd remind me to spread out my workload, take breaks, and take care of myself. When I caught a cold in July and was concerned about falling behind, he still gave me a clear roadmap forward, where to start, how to organize the numbers, and reminded me not to be afraid to take charge.

I would ask him questions on figuring out where to start when there seemed like so many tasks to do, Matthew reminded me: everyone's on the same boat here, don't be afraid to speak up, and your input helps the team. I was so inspired to keep going and to communicate!

He talked with me about professional development, about my own dreams, about leadership and communication, never once making me feel behind, even when our team was working together across different time zones. Last night during our last role meeting, us students, from all over the country, asked if we should stay in touch going forward, he was encouraging and said yes without hesitation.

Very grateful for Matthew Foster's mentorship the entirety of this summer, and for every mentor who's shown me the same thing: you just have to ask!`,order:40,images:["src/photos/stories/8-13-2026-matthew-foster-0.jpg","src/photos/stories/8-13-2026-matthew-foster-1.jpg","src/photos/stories/8-13-2026-matthew-foster-2.png"]},{date:"8/14/2026",name:"akosua opoku",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a nominating committee, and a rejection that turned into years of heart-to-heart calls I never expected.

Back in February 2024 during my junior year of high school, I made it to the nominating committee portion of an application for a leadership position. I was nervous, but so excited!

During that process, Akosua Opoku (Sua for short!) led a talk about leadership and being a good role model, and I was in awe of how smoothly she spoke, how she carried herself with confidence, and how incredible she was at speaking to us in such a kind and clear manner.

I didn't end up landing the position, the one she herself had held. To be completely honest, it was a rejection I took really hard at the time. But looking back, I'm really grateful that I got the opportunity to find something I definitely was not expecting: someone I genuinely looked up to so much. I kept in touch with her after that!

There was a summer program a few months later, in June, where I gave six speeches, terrified the whole time, but Sua was always cheering me on. A few weeks later, I also competed in an international competition, and I really, really wanted to win, thinking it would help me feel like I was "good enough." I was so stressed and so scared. I asked her if I could have a call with her about it, and she gave me so much reassurance. After I confided in her, she sent me a message I've thought about a lot since: "Relax, no stress. Be where your feet are."

Then, the summer right after I graduated high school, I was in a really difficult place, unsure of what career I wanted to pursue. I reached back out just hoping to have someone to talk to, and Sua told me she'd been thinking about me and my laptop case (of all things!) and hopped on a call with me right after her flight had landed. We caught up, and she gave me a much-needed pep talk!

Kind of funny, but I also reached out to Sua when I got my wisdom teeth pulled, and she was so sweet and such an incredible friend about it too. And on August 9th, 2025, two days after I'd just moved into college, right before school started, we called and she gave me so much advice for my freshman year! She reached back out again later that month just to ask how school was going.

Now, the night before moving into college again this year, I had another call with her, and it feels like such a full-circle moment getting to catch up with her once more!

I'd spent several years tying my own self-worth to competitions, grades, and titles. Sua reminded me, again and again, that none of that determined who I actually was.

None of it would've happened if I hadn't shown up to that nominating committee, even without landing the role.

Very grateful for Akosua Opoku's kindness and calls, and for every mentor who's shown me the same thing: you just have to ask!`,order:41,images:["src/photos/stories/8-14-2026-akosua-opoku-1.png","src/photos/stories/8-14-2026-akosua-opoku-0.png"]},{date:"8/15/2026",name:"sai shankar sadhu",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a dream job people told him not to pursue.

I met Sai Shankar Sadhu through the Magellan Program, and we clicked almost instantly! He was so incredibly friendly and always willing to talk whenever I had questions about the business degree we were both pursuing.

Sai grew up moving between California, London, and eventually settling in Cumming, Georgia. From a young age, he knew he wanted something hands-on and interactive, the opposite of a behind-the-desk job. Once he realized that meant Human Resources (HR) to him, he set his heart on it fully, even though it was hard to admit out loud.

HR is often undervalued, especially in business schools, often seen as less glamorous than finance or accounting. But as Sai told me, every single business, no matter what it is, needs HR. It's a vital part of any company that actually functions!

In pursuit of finding a community supporting students interested in HR at The University of Georgia, Sai has been actively involved with Society of Human Resource Management (SHRM) and was recently elected as VP of Programming his freshman year!

This summer, as a freshman at University of Georgia - Terry College of Business, he pursued an HR internship in Melbourne, Australia, six weeks learning Australian culture, employment law, and what it's like working in corporate in an international setting. Sai proved something real: choosing your passion over the "norm" is genuinely impactful. Even when people told him not to pursue HR, he did anyway, and landed an international internship in his very first year of college.

Outside of pursuing a career Sai loves, he's into cake decorating, interior design, culinary arts, and traveling!

Very grateful to know someone like Sai Shankar Sadhu, and for every person who's shown me the same thing: you just have to ask!`,order:42,images:["src/photos/stories/8-15-2026-sai-shankar-sadhu-0.jpg","src/photos/stories/8-15-2026-sai-shankar-sadhu-1.jpg","src/photos/stories/8-15-2026-sai-shankar-sadhu-2.jpg"]},{date:"8/16/2026",name:"Keira Smyth Gravina",body:`Continuing to tell these mentorship stories, one at a time. This one starts with the first meeting of the Magellan Program at The University of Georgia.

In February of this year, I was waiting outside in the hallway for the first meeting of the Magellan Program, a program that brings together 50-55 bright pre-University of Georgia - Terry College of Business freshmen each semester, with mentorship built in. I was nervous but so incredibly excited to meet as many bright minds in the cohort of 55 pre-University of Georgia - Terry College of Business students as I could. I looked around and saw another Asian girl, like me, and asked her for her name. That's how I met Keira Smyth Gravina! We both ended up having Will Huber as our mentor, and we clicked almost immediately, bonding over our shared love of piano growing up.

I had the honor of getting to hear Keira's story, and it was one of the most curious and wide-ranging one I've come across! She was adopted from China at 8 months old, lived in London until she was four years old before growing up in Marietta, Georgia, around a 40-minute drive from my hometown! That mix of places and cultures shaped a real curiosity about the world in her, and she expressed to me that as she's gotten older, she wanted to feel more connected to her Asian identity and community.

She came into The University of Georgia without one clear idea of what she wanted, studying Economics and Computer Science with a minor in Spanish, drawn to how people and markets make decisions on one side, and how to build and problem-solve on the other. She's become especially interested in where those fields intersect with AI, finance, and technology, still figuring out exactly where it'll all lead, but becoming comfortable in that uncertainty now.

Outside academics, she loves traveling, reading, piano, figure skating, and spending time with her friends, family, and dog. She's studied sustainability in Finland, computing in Silicon Valley, and is heading to Oxford through Terry this spring, every experience pushing her to meet new people and learn more about herself.

Something she told me has really stuck with me: you don't need to have everything figured out when you get to college. She used to think being interested in so many things meant she'd eventually have to narrow herself down. Instead, she's learned curiosity itself can be one of your biggest strengths!

Very grateful for Keira Smyth Gravina's friendship, and for every person who's shown me the same thing: you just have to ask!`,order:43,images:["src/photos/stories/8-16-2026-keira-smyth-gravina-1.png","src/photos/stories/8-16-2026-keira-smyth-gravina-0.png"]},{date:"8/17/2026",name:"syruis zhang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an Instagram reel I stumbled across as a scared incoming freshman.

I knew of Syruis Zhang before I ever met her in person. The summer before coming to college, I was scrolling through Instagram, nervous about coming to The University of Georgia. I came across content about the university and saw another Asian American girl, like me, sharing behind-the-scenes glimpses of campus life through Digital Dawgs (a.k.a. Digi Dawgs!), UGA's team of student social media ambassadors.

I remember thinking, "wow, she's able to speak so clearly and confidently to a crowd, even through a screen. I want to be able to speak like her!"

I peeked through her other posts and saw she was part of an organization on campus called Alpha Sigma Rho Sorority, Inc. (a.k.a. ASR), an Asian-interest (but not Asian-exclusive!) sorority, and I thought maybe I could learn a bit through her.

That's what first motivated me to consider rushing, watching her speak with that kind of confidence made me want to be proud of where I went to school too, and she's part of why I started creating content myself.

Last year, when I first joined the sorority, I was in awe of how she was so on top of things as Sergeant at Arms, always making us feel supported and valued. She's since been elected Chapter President, and she's an incredible leader I look up to!

Over the next few months of getting to know her, she told me bits and pieces of her story here and there, but I just finally got the opportunity to piece it all together.

Syruis is a first-generation college student from Americus, Georgia, studying International Business, Marketing, and Management. She came into college intending to study pre-med, thinking she knew exactly what she wanted, only to realize she really didn't know at all. Curating content on TikTok is actually what first sparked her real interest in marketing and business!

She joined Alpha Sigma Rho Sorority Inc. Alpha Chapter not knowing many people at UGA, and coming in from outside Atlanta felt intimidating as a freshman. Syruis told me that alongside the friendships and community she gained, she also recognized that a good chunk of her resume is ASR, real professional growth too.

Funny enough, she told me she's convinced at least one girl a semester to join ASR because of how much she believes in it. What Syruis might not have known before we really talked about it is that I'm actually one of those girls she convinced!

Maybe none of it would've happened if I hadn't stumbled across one video from a girl I hadn't even met yet.

Very grateful for Syruis Zhang, and for every person who's shown me the same thing: you just have to ask!`,order:44,images:["src/photos/stories/8-17-2026-syruis-zhang-1.png","src/photos/stories/8-17-2026-syruis-zhang-0.jpg"]},{date:"8/18/2026",name:"miffy wang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with taking the NYC public transport completely by myself for the first time!

Miffy Wang reached out to me last month after I made a post about jeff nguyen and his story behind BobaTalks! I loved her name; I've been seeing Miffy Collections plushies around for years and always thought they were so cute!

She told me she was in NYC and would love to meet up if I was ever in the area. Turns out I was heading there soon, so we found a time to meet up in person!

Getting there meant navigating NYC public transport completely on my own for the first time, because a cab would've been way too expensive for me. I missed the first train and showed up a little frazzled, but she was so kind about it, patient with me even though I was navigating it all for the first time!

Once we started talking, she told me her own path started in exploring consulting before she realized she genuinely loved product and design! She's now the founder of the first undergraduate product and design studio at her university, DFA Studio, and she's been so intentional about building real community around it, from Roblox nights to slime nights, making sure every workshop actually felt fun!

For one workshop, they even ordered fries from five different shops, ranked the best one, and built a whole website around it. Funny enough, we ended up getting fries together too when we met!

We'd just met in person for the first time, but we laughed so much, and she made the whole thing feel so easy and welcoming! She left me thinking a lot about what it actually means to build community intentionally, especially early on, and what you want that community to look and feel like, and I hope to create that just like she did in the near future!

Very grateful for Miffy Wang's kindness, and for every mentor who's shown me the same thing: you just have to ask!`,order:45,images:["src/photos/stories/8-18-2026-miffy-wang-0.png","src/photos/stories/8-18-2026-miffy-wang-1.jpg"]},{date:"8/19/2026",name:"zawadi pilipili",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a cold DM to someone I'd been following for a while.

Zawadi Pilipili, founder of Zappurtunity, has spent her time at the Georgia Institute of Technology building spaces to help other students access opportunities in tech, business, and creative fields. When I reached out to her, genuinely admiring what she'd built, she wrote back with more thoughtful advice than I expected, so much of it, I had to sit with it for a while.

She also talked about the kind of networking that actually sticks. It's amazing to meet someone once at an event and exchange names, but that could be forgettable. What she looks for is genuine, intentional connection, the kind where someone actually remembers who you are, what you value and care about, so that when an opportunity comes up later, they think of you specifically.

She told me it really is about "who you know, not just what you know," and being honest with yourself that you don't have to be the smartest person in every room. The more people she genuinely knows, the more resources and opportunities open up naturally, even through something as simple as walking into a professor's office hours.

She also gave me advice for going into my sophomore year of college, calling it the "midpoint of the college experience," a good time to build genuine connections with professors. She was honest that college has real challenges nobody talks about openly, and she wishes more students knew they weren't alone in facing them.

But she also reminded me to have fun along the way, and to make the most of every college experience you can get. Now that she's about to end her own undergraduate chapter, what she values most is the people she surrounded herself with and the experiences she actually let herself have.

She was honest about watching peers treat work and school sometimes at the cost of their own mental health. Setting boundaries, protecting time for friends, trying new things, none of that happens if you're always locked in your room. College is an experimental phase, she said, and there's real value in trying, in showing up messy, in not having it all figured out yet.

Very grateful for Zawadi Pilipili's generosity, and for every mentor who's shown me the same thing: you just have to ask!`,order:46,images:["src/photos/stories/8-19-2026-zawadi-pilipili-0.png","src/photos/stories/8-19-2026-zawadi-pilipili-1.png"]},{date:"8/20/2026",name:"patrick pickren",body:`Continuing to tell these mentorship stories, one at a time. This one starts with two Zoom meetings a week, for ten weeks straight.

I first became interested in policy after reading How the Other Half Eats by Dr. Priya Fielding-Singh for a healthcare competition in high school, a sociologist's deep dive into how income shapes what different families put on the table. I wanted to understand that world more, through policy.

I found out about the Institute for Youth in Policy (YIP) through Kennith Lee, a fellow alum from my high school who I reached out to before starting college, just to talk to someone successful who came from the same place I did. He gave me advice on applying, and I was accepted into the Winter 2026 cohort!

From January 17th to March 21st, Patrick Pickren led our fellowship meetings twice a week, Wednesdays from 8-9:30pm and Saturdays from 12-1:30pm. Logging into those meetings, I remember I was a bit concerned that I was too old for it, as most of the fellows were still in high school. But that feeling disappeared fast. I was having incredible conversations with students from all over the world about real social issues and policy I never could've imagined!

Patrick later updated me on the cohort that came after mine, and told me about a new mentorship program he helped lead, pulling 10 mentors from senior leadership. They held office hours, giving fellows one-on-one support, whether that meant reviewing a capstone or just talking through ideas!

I also finally got the opportunity to finally ask Patrick Pickren about his own path into policy. Growing up in Midtown Atlanta, he saw firsthand how redlining had divided his own school community, and that stuck with him. His first real policy experience was an internship with his state senator, working directly on education policy issues affecting Georgia students, a rare opportunity that most people don't get as their first exposure to policy work. That experience is part of what led him to YIP in the first place, where he knew of someone at his school who did it!

What he told me stuck with me the most: anyone could technically write a policy brief on their own, but being in a program like YIP gives you the real push to actually sit down and do it, and to be surrounded by a community that genuinely wants to see you follow through. I definitely felt the sense of community that's been cultivated by YIP through the Winter 2026 cohort!

Funny enough, during that program, I also got to hear where all the fellows were heading next, and found out Patrick was coming to The University of Georgia! A whole eight months after first getting to know him over Zoom, I finally got to meet him in person two days ago!

None of it would've happened if I hadn't reached out to Kennith Lee first, just to talk about what came next!

Very grateful for Patrick Pickren's dedication, and for every person who's shown me the same thing: you just have to ask.`,order:47,images:["src/photos/stories/8-20-2026-patrick-pickren-1.png","src/photos/stories/8-20-2026-patrick-pickren-2.jpg","src/photos/stories/8-20-2026-patrick-pickren-3.png","src/photos/stories/8-20-2026-patrick-pickren-0.jpg"]},{date:"8/21/2026",name:"solo",body:`For the past 49 days, I've been sharing other people’s stories. For Day 50, I think it's time I share a little bit about my own!

My mom grew up in Cambodia during a period of war as one of six siblings and came to the United States in search of a safer life. My dad grew up in Taiwan and immigrated here at 12 years old with his family in pursuit of the American Dream!

I've always known that I've had the privilege of asking myself a very different question: what do I actually want to do with my life?

The answer changed a lot, maybe too many times. Around kindergarten, I wanted to be a designer. In elementary school, a piano teacher. In middle school, a professional violinist, an engineer, or even an astronaut. By high school, I thought I had to have everything figured out, and that it was time to choose one path and stick to it, so I decided I'd pursue pre-med. I really loved getting to study the sciences and learn more about medicine and public health!

When I got to college, I realized I actually didn’t know exactly what I wanted to do with my life. I had spent many, many years chasing the next grade, competition, position, or accomplishment, but I was so lost on what I actually wanted my life to look like.

So instead of pretending I knew, I started asking!

I’ve reached out cold to people across industries, asking about their careers, what they'd do differently at my age, how they found opportunities, and a lot of the time, simply what made them feel happy and fulfilled.

Looking back, I think I’ve been asking a bigger question: what kinds of lives are even possible?

Something I've been thinking about lately is how our lives are finite, yet there are no limits to what we can dream of.

I've always dreamed of becoming so many different things, and talking with other people has helped me understand a little more about what I actually want.

Asking questions led to opportunities, one conversation became another, people led me to other people, and every answer gave me another question to ask.

50 days ago, on July 4th, 2026, America's 250th birthday, I started posting on LinkedIn every day, and those posts eventually became the mentorship stories I've been sharing here.

In a way, I think that’s become my own version of the American Dream.

Underneath them has been my own story, though! I didn't know what I wanted to do with my life, so I started asking other people from all over the world about theirs.

My parents both came to America searching for opportunity. I'm beyond grateful they worked so tirelessly to give me the opportunity and privilege to explore, change my mind, and choose what I want mine to look like.

I still don't have everything figured out, but I'm always open to learning from other people and their stories.

For 49 days, I've ended these stories with the same five words: you just have to ask.

I don't have all the answers, but asking is how I've been finding them, and I'll continue to do so!`,order:48,images:["src/photos/stories/8-21-2026-solo-1.jpg","src/photos/stories/8-21-2026-solo-0.jpg"]},{date:"8/22/2026",name:"subal kumar",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a cold DM at 18 years old.

Subal Kumar's journey into startups started when he was 18, cold-messaging founders just to break into the industry, before he even knew if he was qualified for anything. He told me his first real lesson was simple: you have to learn to shoot your shot, you're never really "ready" for these roles, you just have to ask anyway. He said it took him about a year to completely change his story, from being a student not earning money to working at YC-backed startups.

His path since has been really cool: an early-stage startup, then one with friends generating revenue, then a fellowship at Willow where he helped generate 10 million impressions, then Photon, where he was the first person they publicly featured for his work on X. He never expected that post, but it led directly to the founder of Lightreel AI reaching out to him, and now he runs their fellowship program himself!

He explained what Lightreel AI was to me and I thought it was pretty cool: as he put it, it "doomscrolls for you," analyzing TikTok and Instagram reels to catch content trends early, before they're already everywhere. He told me how the idea behind the product addresses a frustration so many people doing social media research run into: constantly doomscrolling for "market research" and trending sounds, and not actually getting real work done because of it.

I honestly have to catch myself doomscrolling for way too long sometimes just looking for inspiration, so I could immediately see how something like this could be useful! I tried it out for myself, and I was amazed by how many creators I found talking about challenges I'd faced myself. Seeing so many people sharing similar experiences was also a nice reminder that I was never really alone in them! I could see he was genuinely excited about how Y Combinator-backed startups have started using Lightreel to source undiscovered User Generated Content (UGC) creators, while creators can use it to understand what to try next!

What stuck with me most was his honest advice on breaking into startups: show hunger! Subal's advice was for me and also for anyone reading this who's trying to break in: post consistently, build in public, contribute to open source, and show founders real proof that you would make an impact through actual results. I've really been learning so much on LinkedIn by talking to people of various backgrounds every day!

Maybe none of it would've happened if he hadn't cold-messaged one founder at 18, just to see if they'd say yes!

Very grateful for Subal Kumar's honesty, and for every person who's shown me the same thing: you just have to ask!`,order:49,images:["src/photos/stories/8-22-2026-subal-kumar-1.jpg","src/photos/stories/8-22-2026-subal-kumar-0.jpg"]},{date:"8/23/2026",name:"anshi purohit",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a random team assignment for an international competition in March 2024, and someone from Maryland when I was in Georgia.

In my junior year of high school, I signed up completely on my own for a competition through the International Youth Neuroscience Association (IYNA), not knowing a single other person doing it. I got randomly paired into a team of four, and that's how I met Anshi Purohit.

We had one week to build a public health proposal on neurodegenerative disease prevention, looking at environmental exposures and legislative measures to minimize risk. We ended up placing third internationally!

After that week, life moved on, and Anshi and I didn't stay in touch.

Fast forward two years later to 2026, I completed a 10-week winter fellowship with the Institute for Youth in Policy, and then joined their education department. In April, I got paired with a someone to guide me through the beginning of it, someone named Anshi Purohit. I remember thinking, that sounds so familiar, and sure enough, it was the same Anshi I worked on the IYNA competition with.

To make it even more surreal, she told me she was heading to The University of Georgia too, the same school I'm attending!

We finally got to meet in person for the first time a few days ago, over two years after we first worked together as virtual strangers on a neuroscience competition. It felt like nothing had really changed, and I was just chatting with an old friend! She told me about her interests in medicine, regenerative bioscience (fun fact: it was a major I actually once tried to pursue myself!), and journalism, and how she found The University of Georgia and its regenerative bioscience major just from scrolling Instagram one day.

What are the odds, meeting randomly at 16 and 17 years old across the country through a neuroscience competition, only to end up at the same college years later.

Really, none of it would've happened if I hadn't signed up alone for something I knew nothing about back in high school.

Very grateful for this full-circle friendship with Anshi Purohit, and for every person who's shown me the same thing: you just have to ask!`,order:50,images:["src/photos/stories/8-23-2026-anshi-purohit-0.jpg","src/photos/stories/8-23-2026-anshi-purohit-3.jpg","src/photos/stories/8-23-2026-anshi-purohit-4.jpg","src/photos/stories/8-23-2026-anshi-purohit-2.png","src/photos/stories/8-23-2026-anshi-purohit-1.jpg"]},{date:"8/25/2026",name:"macy felton",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a reminder that you don't have to know exactly what you want, even in a field as technical as aerospace.

Macy Felton is a former student-athlete (cross country and track and field), and her path into aerospace has been anything but linear. She's worked as an assistant teacher, tutored K-12 students, and interned at Boeing in aerodynamics, all while trying to figure out exactly what she wants to specialize in: GNC (guidance, navigation, and control), propulsion, or aerofluids.

She told me something that reframed how I think about "having it figured out": you don't need to know exactly what you want right now. Macy spent her first year wanting to hone in immediately, but realized there's real time to explore, having a resume tailored to each path lets you stay open to different opportunities while still showing you're prepared for each one specifically.

Her honest reflection on why she chose aerospace stuck with me: growing up, she considered chemical engineering, architecture, even medicine, but ultimately wanted a career bigger than herself, something that helps her neighbors and the whole world.

Her practical advice for breaking into the field was that talking to people is everything. She talked to as many people as she could, stayed persistent, especially during August and September, when recruiters are actively looking to fill internships. She told me she keeps a running Google Sheet tracking every position she applied for and the date, a simple system that's helped her stay organized.

My favorite piece of advice she gave was to be as personable as possible. She said some of her friends at her internship bonded with recruiters over watches, Formula 1 (F1), completely unrelated things, because people would love to know if you're someone they'd actually want to be working alongside on projects.

I asked her where she sees herself in the future, and she told me she hopes to become an expert in her discipline and has a kind passion for eventually becoming a science teacher for high schoolers interested in aerospace, coming full circle from the teaching and tutoring roles that shaped her early on.

Very grateful for Macy Felton's honesty and advice, and for every person who's shown me the same thing: you just have to ask!`,order:51,images:["src/photos/stories/8-24-2026-macy-felton-0.png"]},{date:"8/26/2026",name:"francine tran",body:`Continuing to tell these mentorship stories, one at a time! This one starts with four core values and one we happened to share: community.

One of the first things I noticed about Francine Tran was the four pillars on her LinkedIn profile: tech, community, real estate, and growth & reflection.

That caught my attention because just a few days earlier, my big sister in Greek life, Saahithya Gutta, challenged me to come up with four core values of my own when we were catching up over dessert. I chose authenticity, curiosity, gratitude, and community.

So we had community in common! And after talking to Francine, I could definitely see why it's one of hers.

At one internship alone, she had 73 coffee chats! Francine told me she tries to meet the people around her, learn about what they do, and think about how she can support them too.

I really liked hearing that because "networking" at its core is really just talking to another person, learning about their life, and hopefully building a relationship that lasts beyond one coffee chat.

We also found out we're both ENFJs (extraverted, intuitive, feeling, judging) through the Myers-Briggs test, which started making more and more sense the longer we talked! Funny enough, I used to get the introverted version (INFJ) in high school.

Francine's career journey was just as interesting. She entered college thinking she might become an English teacher, explored finance and consulting, studied MIS, and eventually found herself interested in product and program management.

I asked her about MIS because, well, I'm studying it too!

Francine told me she wasn't someone who came into college particularly loving coding. She liked business, but also wanted to understand technology and be able to speak the technical language. That ability to connect the technical and business sides is a huge part of why she chose MIS, and it's something I'm increasingly appreciating about the field too!

Probably my favorite advice she gave me was to try things enough to figure out what you don't like. Make a list of what you enjoy, try things, get frustrated, and pay attention to why.

Francine changed her mind plenty of times throughout college, but each experience gave her more information about where she wanted to go next.

I think there's something comforting about realizing you don't have to know exactly where you're going before you start exploring.

Very grateful for Francine Tran's advice, and for every person who's shown me the same thing: you just have to ask!`,order:52,images:["src/photos/stories/8-25-2026-francine-tran-1.jpg","src/photos/stories/8-25-2026-francine-tran-0.jpg"]},{date:"8/27/2026",name:"rohan mistry",body:`Continuing to tell these mentorship stories, one at a time. This one starts in 2023 in my junior year of high school, long before The University of Georgia was even on my radar.

During my third year of high school, I landed the role of Public Relations (PR) officer for my high school's National Beta chapter with around 400+ members. Rohan Mistry was president at the time, and he taught me how to actually run it: writing hundreds of emails that reached the whole club, managing our social media (fun fact, I came up with the gold and brown theme for the Instagram: @nhs.beta, and I'm happy that the PR officers who've come after me have been keeping it up years later!), forming GroupMes, and hosting event after event.

But the skill he taught me that shaped me most was reaching out to volunteer coordinators cold, emailing complete strangers to ask if they needed help at their events. That's where I first learned how to ask questions to people I'd never met, and to not be afraid of the silence that sometimes followed. It's directly translated into me cold-DMing and emailing hundreds of the people I've looked up to!

In May 2025, right before graduating high school, I texted Rohan again, this time asking how his own path through UGA had gone. He told me to write down what I actually wanted out of my four years and not to stress about connecting the dots forward, rather focusing on building a good foundation first.

He was the first person I told about reaching out to my very first mentor from the UGA Mentor Program, Omeir Honda! Rohan pointed me toward the Magellan Program mentorship program, told me about the engagement fair, helped me build my class schedule, and talked me through my own career pivot. When I got overwhelmed trying to plan everything at once, he reminded me there's a difference between being thoughtful and overanalyzing!

He gave me resume tips and walked me through my first college organization interviews. He also told me to actually get to know my Magellan Program mentor, meet with them one-on-one, and to be curious about what they do. That ended up being Will Huber!

Maybe none of it would've happened if I hadn't landed a role in high school that put me in Rohan's path, and hadn't reached back out years later to ask him one more question.

Very grateful for Rohan Mistry's kindness, beginning in high school, and for every person who's shown me the same thing: you just have to ask!  View image`,order:53,images:["src/photos/stories/8-26-2026-rohan-mistry-0.jpg","src/photos/stories/8-26-2026-rohan-mistry-1.jpg"]},{date:"8/28/2026",name:"alyssa lee",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an email I had to read three times before I believed it.

When I found out I got into the AAAIM (Association of Asian American Investment Managers) Externship, an intensive, fully-funded 8-day program giving 30 undergraduate students direct access to hedge funds, investment banks, and private equity firms, as well as their network of professionals with decades of expertise, I genuinely didn’t believe it at first. I recognized that there were over 300 students who wished for this experience too, so I was motivated to keep going!

From August 3rd-7th, during my study abroad program at the University of Oxford, I completed the online portion over Zoom, at 11am-6pm EST, which was 4pm-11pm BST for me, long days of classes and traveling in the mornings and afternoons, then hopping on calls in the evening. Then from the 10th until the 12th was the in-person portion in New York City. I was so grateful to get to do all of it!

During one Zoom session, Alyssa Lee told us something I don't think I'll forget: she handpicked our cohort herself, and she saw real potential in each of us as individuals. I kept reminding myself of that throughout the program, and it helped push me to really make the most out of the opportunity.

I got the chance to ask how she ended up at AAAIM, and she told me it wasn't some grand plan. It was her second job out of college, mainly looking for something remote in finance, when she came across an Operations Manager position and applied, never having heard of AAAIM before. Alyssa's been there four and a half years now! But the real reason she knew it was the right fit traced back to her very first job, as a client associate at a wealth management firm in her hometown, where she noticed a lack of Asian representation and wanted to be part of changing that.

She also told me the story of how the program itself came to be, starting as pure research and brainstorming with just 2-3 people, Linda Choi was the one who first floated the idea of an externship. The first year was mostly curated through Alyssa's gut instinct. What's shaped it since is that Alyssa's participated in every single session, virtual and in-person, alongside students, watching what worked and what didn't. She was there at every single meeting, something I really came to appreciate throughout the whole program.

What stuck with me most was her reasoning for why she stays this involved: she wanted to build a place where people genuinely felt supported.

Funny enough, I actually found out about AAAIM through Alex Zou, an alum of last year's program, just being in the right place at the right time when I went to a UGA social event very impromptu, and he referred me to one of my mentors of around a year now, Catherine Ling!

Very grateful for Alyssa Lee's kindness and honesty throughout this whole process, and for every person who's shown me the same thing: you just have to ask!`,order:54,images:["src/photos/stories/8-27-2026-alyssa-lee-0.jpg","src/photos/stories/8-27-2026-alyssa-lee-1.jpg"]},{date:"8/29/2026",name:"lalo de armas",body:`Continuing to tell these mentorship stories, one at a time. This one starts with piano recordings instead of resume advice!

I found Leandro (Lalo) de Armas' profile on BobaTalks after talking with jeff nguyen! I was looking into case prep and really wanted to talk to someone about it because I was, and still am, figuring it out. But the first things we actually talked about weren't consulting at all, they were piano, music, and photography. He showed me some of his favorite piano recordings on YouTube and lo-fi artists on Spotify! We touched on consulting eventually, but we spent so much more time talking about journaling, taking care of yourself, and trying new things.

I told him about music growing up: wanting to be a piano teacher as a kid, then a professional violinist, things I ended up not necessarily pursuing now. I reflected on state orchestra in middle school and high school, competition after competition, until the orchestra I was in won first place on a national level. But underneath all of that, I was pretty exhausted. By the time I got to college, I hadn't touched piano much.

But while I was at the University of Oxford for my study abroad program through the The University of Georgia, I decided I'd try again. I saw another student, Jillian Loux, making music one day, talked to her in the line for dinner, and by the second-to-last day of the program, we figured out a way for me to accompany her on piano. It felt like I was coming back home to myself!

A few days ago, I had another call with Lalo, this time when I was back on UGA's campus. He told me he'd actually seen the video of me and Jillian making music together, completely by coincidence!

We ended up talking about casing again too, but what stuck with me most was agreeing on something simple: the arts matter, and they can make life feel even more beautiful!

Very grateful for Leandro (Lalo) de Armas's kindness and honesty, and for every person who's shown me the same thing: you just have to ask!

P.S. Here's his photography portfolio if you're curious, seriously cool stuff!! https://laloslens.com/`,order:55,images:["src/photos/stories/8-28-2026-lalo-de-armas-0.jpg","src/photos/stories/8-28-2026-lalo-de-armas-1.jpg"]},{date:"8/30/2026",name:"kolton rice",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a school assignment in 2015.

Kolton Rice made his first video, a social action campaign against bullying, using iMovie back in 2015. It placed in the top 25 nationally, won one of seven national awards, and got him an assembly at his school. That was the moment he realized video could genuinely change how someone feels, or even change their life.

He started his own company, OpenEye Studios, at 17, while still in school, learning everything through YouTube and running with it himself. He served as media director for his school's board office along the way, treating formal education as something to build on top of!

His path wasn't linear either. He was VP of a nonprofit for performing arts, worked as an exec assistant at Big Fish Local doing basic tasks before growing into a Digital Media Specialist role there, learning everything from websites to paid ad campaigns, before finally going full-time with OpenEye!

He told me something honest about running his own business: what actually drives him is building toward his own goals rather than someone else's. He told me he enjoys having full control over what he's creating and believing in!

This year, he built out real core values for OpenEye, landing specifically on strategy as their biggest differentiator, being both accessible and sustainable. Every video starts with a clear goal and strategy first, which takes the pressure off just "being creative" and lets the team actually focus on execution!

Most of their growth now comes from referrals, when someone's referred directly, it almost always closes. But he's also been doing consistent LinkedIn outreach and direct messaging (which is what brought him to me!) aiming for 15-25 meaningful conversations a month to land a handful of booked appointments, with a very a steady and patient approach to growth.

One of his favorite projects was a campaign for 7-Eleven and a local veterans' contact center, telling stories that ended up placed on Hulu and other streaming platforms, generating 10-15 new veterans reaching out for support each year. He told me that that's the kind of project that reminds him why he does this!

Very grateful for Kolton Rice telling me his story, and for every person who's shown me the same thing: you just have to ask!  View image`,order:56,images:["src/photos/stories/8-29-2026-kolton-rice-1.jpg","src/photos/stories/8-29-2026-kolton-rice-0.jpg"]},{date:"8/31/2026",name:"vivian lin",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a design class she almost didn't take!

I met Vivian Lin through the Lightreel AI fellowship; we're both in the same cohort!

Vivian came into UC San Diego with the intent of studying Computer Science, but got nervous about admissions and asked herself: was CS something she'd want to pursue no matter what school she got into? The answer was no, so she gave Data Science a try because of her love of math! Although the classes were challenging, the subject eventually clicked, and she ended up loving it.

It wasn't until her second year that design entered the picture, almost by accident, through a required data visualization course, focusing on human-computer interaction design. This led her to explore human-centered design, taking a class in interaction design. She loved the ideation side, seeing how something as simple as showing two versions of a design to see how the target audience responds to them (A/B testing) bridges the technical and human sides of building something. As a result, she ended up declaring a design minor!

Last spring, in a UX design class, she and her team redesigned BeReal. for a case study, imagining a version where, instead of a 2-minute window, you had the whole day to post, with optional journaling prompts to reflect on your day rather than just capture a snapshot of it. It’s a small change on paper, but it reframed the whole product: from chasing streaks of capturing random moments to a daily habit of reflection. Small, thoughtful reframes like that say a lot about how she thinks!

As for Lightreel AI itself, she's not a heavy user, but she has spent time on it trying out sample prompts, browsing the trending tab to see what's actually catching user attention on TikTok, and loving the overall experience of the product. Lightreel constantly updates creators on the newest trends and catches them before they go viral, essentially "doomscrolling" for you. She’s even started using it to get feedback on her LinkedIn posts before publishing them!

She talked briefly about being 21 with her whole life ahead of her: you don't have to have it all figured out right now. If something doesn't feel right, it's better to find that out early than to keep going out of momentum and being honest with herself about what she actually wanted her day-to-day to look like!

Outside of school, Vivian’s paddled on her school's dragon boat team since her third year, studied abroad in Hong Kong, and did a K-pop dance cover last quarter. Fun fact, we found out we shared that in common too, I was part of a dance team in my senior year of high school, and it made me happy to express myself through movement!

Talking with her was a good reminder that the "right" path isn't always the one you started on!

Very grateful for Vivian Lin sharing her story with me, and for every person who's shown me the same thing: you just have to ask!`,order:57,images:["src/photos/stories/8-30-2026-vivian-lin-1.jpg","src/photos/stories/8-30-2026-vivian-lin-0.jpg"]},{date:"9/1/2026",name:"subal kumar",body:`Continuing to tell these mentorship stories, one at a time. This one starts with something he disliked, and turned into a book!

Abdul Wahaj told me his whole journey traces back to his second year of high school. He got into listening to motivational speakers on YouTube to help break past self-doubt, and one idea stuck with him: taking something you dislike and finding a way to make it work in your favor. So he took writing, something he genuinely disliked, and kept doing it anyway, until he wrote a book. Funny enough, we found out we both listened to the same motivational speaker to break past self-doubt! That led to a meeting with his province's Ministry of Education, and gave him the push to start posting on LinkedIn.

What started as User Generated Content (UGC) content turned gradually into growth roles, then real conversations with hundreds of people, coffee chats, cold emails, and curiosity about others' work.

Abdul's path into VC and startups came almost entirely through cold outreach and relationship-building. Entrepreneurs First was his first real step into VC, which came from 21 cold emails, building an app, and following up 20 times about how he could help. A coffee chat with someone in product marketing led to a referral, Antler came from a cold email, and his path has also included working with a Y Combinator-backed startup along the way!

He was honest about a difficult season too, having a difficult period in his life, watching friends celebrate college acceptances while he faced rejection after rejection. Abdul described that month as feeling like the world was against him. He channeled that disappointment into motivation to push his limits and see how far he could go on his own terms. I could relate to that in a different way, in high school, so much of what I thought about revolved around college decisions too, but I've since come to terms with it and have been making the most out of and enjoying my time at The University of Georgia!

We both talked about this quote that really hit home for both of us: "You have to realize that life is coming from you, and not at you." Reflecting on both of our experiences with rejections, we realized we've both been doing the absolute best we could with what we have, and trust that we'll still come out stronger.

We also talked about our parents, and how much thought goes into honoring their sacrifices while still building a path that feels true to you. Abdul's parents left everything behind to move to Canada, missing major family events back home along the way. He shared something that stuck with me: staying in honest communication, even something as small as a weekly check-in, can go a long way in building trust as you navigate your own path forward!

Very grateful for Abdul Wahaj sharing his story with me, and for every person who's shown me the same thing: you just have to ask!  View image`,order:58,images:["src/photos/stories/8-31-2026-subal-kumar-1.jpg","src/photos/stories/8-31-2026-subal-kumar-0.jpg"]},{date:"9/2/2026",name:"jaron tan",body:`Continuing to tell these mentorship stories, one at a time. This one starts in the Philippines, moves through Singapore, and lands in New Jersey.

Jaron Tan grew up in the Philippines through 10th grade, then his family started exploring schools abroad, eventually landing him at an international school in Singapore for his last two years of high school, a stepping stone that helped prepare him for university in America. Even with the pandemic happening, he made it work, and used everything he learned there to get to Stevens Institute of Technology, right outside New York City!

He was honest with me about the culture shock of that transition, from a slower-paced life in the Philippines to the fast-paced urban energy of New York, New Jersey, and Singapore. He was fortunate to have relatives nearby who helped him adjust, and found real joy in small things, going on walks around Hoboken, trying out new foods, and exploring places around New Jersey with friends and family.

He joined Alpha Phi Omega National Service Fraternity, a community service fraternity, after connecting with members at recruitment events, which led him to meet several people he’s still close with today, including his Big. Jaron’s own history with service work actually started back in Singapore, volunteering at a food pantry, and it followed him all the way to college. He told me something that stuck with me: learning to do philanthropy and fundraising teaches transferable marketing and sales skills!

He also spent time as secretary of Stevens’ yearbook club, doing a bit of everything: photography, event organizing, coordinating faculty and club photos. He wanted to get better at photography but ended up growing into more of an editor’s role instead, and found real value in that shift too!

What moved me most was hearing him reflect on who he used to be. He described himself as really shy growing up, and while he’s still a bit soft-spoken, he’s become more outspoken since college, going to social events, and discovering a small music club at Stevens that took him to his very first concert ever! He doesn’t think he would’ve made nearly as many friends if he were still the same person he was before all of this.

His post-grad path hasn’t been a straight line either, an internship, months of searching, some volunteer digital marketing work, and eventually returning to the Philippines. But he told me he doesn’t feel pressure to rush back into the job search right away, and he’s using this time to learn web development and digital marketing on the side, with hopes of eventually helping run his family’s small business using everything he’s picked up along the way.

Very grateful for Jaron Tan sharing his story with me, and for every person who’s shown me the same thing: you just have to ask!`,order:59,images:["src/photos/stories/9-1-2026-jaron-tan-0.jpg"]},{date:"9/3/2026",name:"yash alluri",body:`Continuing to tell these mentorship stories, one at a time. This one starts with three suitcases and a decision to do the opposite of everyone around him.

Yash Alluri moved to America from India with just three suitcases and made a choice early on: while everyone around him chased internships, he doubled down on what he actually loved, hackathons, even when everyone else told him not to. He went to Cal Hacks, the biggest collegiate hackathon in the world, and won it two years in a row. After his third win, he stopped caring about winning entirely. He found the joy shifted to the process itself rather than the reward, and he eventually went on to win 7 hackathons.

I had to ask Yash how on earth he managed to do all of this. He told me something about choosing what to do to grow that stuck with me. As he put it, “if it’s not a h*ll yes, then it’s a no.” He learned that lesson the hard way, through various cofounder break-ups he had when he chose them based on the school and credentials rather than hunger to build something generational, so he ended up solo-founding for six months afterward. He called it the most isolating, most life-changing stretch of his life. It taught him that being his most authentic self meant being around people, rather than isolating himself and putting his head down to do the work alone.

He applied to Entrepreneurs First despite going to a school with no traditional VC pipeline, and instead of trying to compensate for that, he leaned all the way into what actually made him different, his hackathon wins, his connections, and his willingness to do things nobody else was doing. He got in, and within two months became one of their top-performing investment fellows and made three investments!

Now Yash is building 529 Labs, creating residencies for creators and curating community spaces for Gen Z builders and creatives, addressing something he noticed firsthand: the lack of third spaces for our generation. He also told me that originality and personal brand matters the most in the age of AI.

Very grateful for Yash Alluri sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:60,images:["src/photos/stories/9-2-2026-yash-alluri-0.jpg"]},{date:"9/4/2026",name:"alice lan",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a decade of fencing and a lesson about losing.

I met Alice Lan through the Lightreel AI fellowship! She's studying Human-Computer Interaction at UC San Diego, mostly focused on product design, but this summer she found her way into growth work by posting her sidequests. She was honest that it initially felt a little strange putting herself out there like that, but it worked!

Alice told me something that made me stop and think about fencing, a sport she competed in at the Division 1 (D1) level for a decade before stepping away this year. She told me that even the world's top-ranked fencers usually win by just 1-2 points, that's just part of the sport.

Being a fencer taught her how to handle not winning constantly, something she says a lot of people are quietly afraid of, avoiding trying at all because they don't want to be seen struggling. She's become comfortable with not being perfect at something right away, focusing one touch at a time, rather than the outcome.

Funny enough, I started fencing in January for the first time through the club team at The University of Georgia, just to try something new, and I went to two tournaments (I won one bout of the many others I tried)!

She was honest about arriving in San Francisco this summer and feeling the weight of being surrounded by people who felt impossibly accomplished, engineers who'd already exited companies, bosses who felt intimidatingly "stacked." But Alice told me that exposure ended up being clarifying rather than discouraging: seeing what's actually possible lowers the ceiling you didn't realize you'd built for yourself!

She talked about the pressure so many students feel to land the "right" internship or offer right away, and how her summer taught her there are so many different ways to build a life you're actually happy with. Her advice for people navigating internship hunting: put your work out there consistently. She's found that having a real online presence leads to lots of inbound opportunities, and that confidence, knowing you have something real to offer, changes how you show up in every application and interview afterward.

As for Lightreel AI itself, Alice uses it daily for her part-time content roles, writing and creating content across wildly different clients!

We both agreed on the fact that life isn't a zero-sum game. Just because someone else is winning doesn't mean you're losing, and there's enough room for everyone to do well together!

Very grateful for Alice Lan sharing her story with me, and for every person who's shown me the same thing: you just have to ask!
   *  View image    *  View image`,order:61,images:["src/photos/stories/9-3-2026-alice-lan-2.jpg","src/photos/stories/9-3-2026-alice-lan-0.jpg","src/photos/stories/9-3-2026-alice-lan-1.jpg"]},{date:"9/5/2026",name:"anthony wang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with me failing my first financial accounting exam and working on a hackathon project from 10pm until 6am.

I met Anthony Wang (Tony for short!) because I did so badly on my first financial accounting exam that I was genuinely shocked. During the session where we could go back and review our scores and answers on the exams, I ran into friends from high school and asked if I could study with them since I was so lost. They said of course, and Anthony happened to be in the study room too. We hung out as a group plenty of times after that. And don't worry, I ended the class with an A!

Tony grew up in Suwanee, Georgia, and started selling fountain pens back in 10th grade, which sparked his interest in business in the first place. Like me, he came into The University of Georgia not knowing what he wanted to do, just doing his best to figure it out.

One afternoon, around 5 or 6pm, we were both in the same room working solo on separate projects for UGAHacks for several hours. After hours of being stuck, confused, and frustrated on our own, around 10pm we had a realization: why don't we just work together? Tony and I ended up building something together from 10pm until 6am, our first time actually collaborating, completely sleep-deprived, but it was the first time we both realized how much we had to learn, and how much we actually had in common.

That one decision turned into doing four case competitions together, spending countless hours doing interview and case prep in the MLC.

When he's not building things, Tony loves pickleball, international travel (he's been to over 30 countries!), collecting fragrances, and learning more about start-ups!

Very grateful for Anthony Wang's supportive friendship, and for every person who's shown me the same thing: you just have to ask!`,order:62,images:["src/photos/stories/9-4-2026-anthony-wang-1.jpg","src/photos/stories/9-4-2026-anthony-wang-0.jpg"]},{date:"9/6/2026",name:"dior muankaew",body:`Continuing to tell these mentorship stories, one at a time. This one starts with curiosity about people’s experiences!

Deannery (Dior) Muankaew told me about her college journey, and it stuck with me in a way I didn’t expect.

In high school, she was deeply ambitious, with dreams of going to a well-known college, but life had a different way of things, so she started at community college first.

She was honest that people can carry a lot of stigma around that path, but her time there was genuinely humbling in the best way. She met people from every walk of life there, from veterans to single parents, and it broadened her perspective on people in a way she says she wouldn’t trade for anything.

From that, Dior talked about wanting to tell the younger generation going through the college admissions process something important: as it gets harder to get in, and the pressure and prestige around top schools keeps climbing, kids need to remember to be a good person despite it all. She reminded me that a school’s name can take you far, but ultimately you’re the one who makes the difference, you still have to take the initiative to network, show up to job fairs, and put yourself out there.

Dior also told me something very practical: she once pushed herself to nearly 100 hours of NASA - National Aeronautics and Space Administration coursework, listening to modules in the car, between classes, and sometimes before bed, trying to fully absorb it all.

Looking back, she said she wishes someone had told her to find some sort of balance earlier. Your brain needs the basics: eating, sleeping, and happiness to actually function and excel. She now prioritizes breaks, rest, and giving herself permission to slow down when she needs to.

It was honestly something I needed to hear too, as I’ve been actively improving on taking care of myself and getting more rest as well. There was a point this year where I was waking up at 5:30am every day to study and it eventually caught up with me physically, but I definitely learned my lesson!

What stuck with me most was her encouragement to go out, talk to people, and ask questions, even when it’s scary. She said it can be hard to tell where the line is between “is this awkward to ask” and “is this worth asking anyway,” but more people should be having that conversation openly.

Very grateful for Deannery (Dior) Muankaew sharing her story with me, and for every person who’s shown me the same thing: you just have to ask!`,order:63,images:["src/photos/stories/9-5-2026-dior-muankaew-1.jpg","src/photos/stories/9-5-2026-dior-muankaew-0.jpg"]},{date:"9/7/2026",name:"evan kong",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a $5 bet between two friends!

I had the privilege of getting permission to hear and help share a bit of Evan Kong's story the other day. He's genuinely one of the most resilient people I've talked to, and his drive is truly inspiring to me.

Evan was seven when his mother was diagnosed with cancer. Since he couldn't fix it, he stopped looking at it, and got very good at disappearing into video games instead.

When he was fourteen, his father had a stroke, and doctors found a brain tumor. Evan went further inward, stopped studying, picked up 40-hour weeks at Hungry Jack's, and played ranked games until 3am most nights.

At sixteen, he failed his first three Year 12 assessments. But that same year, Evan also got promoted to crew coach and started putting his paycheck into online courses.

He told me the real turning point came from something surprisingly simple: he and a friend made a deal, if either of them skipped the gym on a day they'd committed to, they owed the other $5.

Five years later, Evan hasn't missed a day, aside from being sick or traveling. He realized it was two things that made him consistent: putting something on the line, and having someone actually hold him accountable to it.

By seventeen, he'd started fixing his habits first, then his grades, and eventually got into his dream program, an accelerated engineering master's at Monash University.

Evan told me a huge part of what pulled him away from a more traditional path was social media, seeing people documenting ambitious things they were building. It opened his mind to a completely different route than the one he grew up expecting to follow.

This year alone, he chose software engineering and went all in: joined the Monash DeepNeuron team, built lockonAI solo to over 100 users and a school partnership, joined Edexia (YC W25) (a Y Combinator-backed startup), and got into Antler as an Entrepreneur in Residence, an accelerator that accepted just 82 people out of more than 3,350 who applied.

Evan told me he never had a real mentor figure growing up, most of what shaped him came from YouTube videos and people online. That's exactly why he's building textpip, an AI accountability partner that lives in your texts, the same $5 deal that changed his life, built into a product anyone can access.

He was honest that part of what drives him now is a strong personal value system, genuinely wanting to love and support people, even strangers who message him out of nowhere. He tries to respond to as many people as he can because it matters to him incredibly deeply.

Very grateful for Evan Kong sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:64,images:["src/photos/stories/9-6-2026-evan-kong-1.jpg","src/photos/stories/9-6-2026-evan-kong-0.jpg"]},{date:"9/8/2026",name:"rui maki",body:`Continuing to tell these mentorship stories, one at a time. This one starts from Scotland, to University of Oxford, to Barcelona, and finally to The University of Georgia!

I spent the past 8 weeks in Build Talent Labs with Rui Maki (rui. studio), meeting every Friday at 2pm EST from July 10th until August 21st.

I attended every single call, from a cafe in Scotland, to my study abroad program at University of Oxford, to a weekend trip to Barcelona with students in the program, to a plane flying from Oxford back to Georgia where I could only type and listen, to packing up clothes before heading back to school, to my very first Friday of classes as a sophomore. By my second Friday back, I was pitching an idea and slidedeck of what I'd only just started building this summer, Pitcher.

Every call, we'd present what we were working on and leave with actionable feedback, whether that meant reaching out to specific people in an industry I was curious about, or refining something I'd built that week.

Rui kept me accountable in a way that genuinely changed how I approached building something new. My life was changing so much during those 8 weeks, and she was such a grounding, comforting presence through all of it.

I recently read something Rui wrote about her own path, and it made me pause and reflect. She wanted to be a doctor since she was five, put band-aids on her siblings, was science club president.

She was on the pre-med track, but her education pulled her toward a bigger question: how do we create healthier societies?

That curiosity led her to fieldwork with the World Health Organization, and eventually to co-founding Truffle Health, using AI to catch errors and overcharges on medical bills.

But building Truffle led her somewhere even deeper. Rui started asking: what does it actually mean to be alive?

She realized health is curiosity, creativity, relationships, purpose, as much as it is the absence of disease. That question pulled her toward art and world-building, recreating a 17th-century Parisian salon, designing an enchanted forest dinner, building physical spaces that make people feel re-enchanted and alive.

Rui wrote something I keep thinking about: maybe the next frontier of healthcare is helping people feel more alive.

That's exactly the kind of mentor she was to me too, helping me feel like the process itself mattered, and I felt so alive through the challenges!

Very grateful for Rui Maki (rui. studio) sharing her story and her mentorship with me, and for every person who's shown me the same thing: you just have to ask!

If you would like to learn more about Build Talent Labs, check it out here! https://lnkd.in/eAraY7VF`,order:65,images:["src/photos/stories/9-7-2026-rui-maki-1.jpg","src/photos/stories/9-7-2026-rui-maki-0.jpg"]},{date:"9/9/2026",name:"zexi li",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a stolen bag right before school started.

Zexi Li was born in China and immigrated to Montreal very early on. He moved to Toronto for university, then found his way into New York, Hong Kong, Shenzhen, Singapore, Seoul, and Ottawa for his internships and studies!

He told me about a period he calls his own version of rock bottom.  

Following the highs of his exchange term at the National University of Singapore, Zexi landed in Toronto the weekend before his new semester at the University of Toronto when his bag got stolen on his very first day back. IDs, workbooks, laptop hosting his blood, sweat & tears...all gone in one moment.  

As if things couldn't already get worse, he was also low on funds from all his Asia travels, while all his roommates and friends had internships lined up and continued traveling together at every opportunity.

Looking back, that phase genuinely mattered to him. Zexi told himself if he could pull himself out of that and succeed, he could achieve anything. After a year of head-down recruiting while juggling internships and school full-time, he says his life has only gone up since his consulting internship at IBM.  

He doesn't wish that experience of the stolen bag on himself, nor anyone, again, but he's grateful for all the learnings through this arc.

How Zexi found his way into the Lightreel AI Fellowship was unexpected too. A comment on a Lightreel Fellow's post while living in New York, not expecting much, eventually led to his acceptance into his dream program days later! Lightreel's an awesome platform for anyone looking into content creation! 

I shared my interest in consulting, and he gave me some genuinely useful advice: master casing, talk with people at firms you're both genuinely interested in, and don't underestimate behavioral prep.  

His litmus test for whether consulting is right for someone: can you sustain constant face time with teams, clients, and leadership, and are you someone who adapts quickly? If so, he says it's one of the strongest corporate training grounds out there for building a foundation in business!

Now, following a growth internship at a Hong Kong-based unicorn (a private company worth more than $1 billion) that recently IPO'd (sold stock shares to the general public for the first time), building turned into a near-term option for him. He talked about how much he learned by owning end-to-end workstreams at a startup, and how real the friendships he formed were thanks to the shared passion and struggles.

Lately, he chose to rekindle with his childhood passion for cutting-edge technologies and deep dive into the tech and AI scene in all the cities he's lived in.

Very grateful to Zexi Li for sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:66,images:["src/photos/stories/9-8-2026-zexi-li-0.jpg","src/photos/stories/9-8-2026-zexi-li-1.png","src/photos/stories/9-8-2026-zexi-li-2.png","src/photos/stories/9-8-2026-zexi-li-3.png"]},{date:"9/10/2026",name:"ashutos jain",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a cold DM sent through Instagram.

Ashutos Jain told me his path into the fintech industry (financial technology) started when a chief technical officer (CTO) messaged him on Instagram looking for a UI/UX designer, UI (user interface) being how a product visually looks, and UX (user experience) being how it actually feels to use.

That single message led to him spending nearly two years working in fintech, an industry he'd been genuinely interested in but had never found a way into before that.

He shared his own honest pivot story: he studied IT in college and tried learning C, C++, and C# for development, but by his third year, he realized his real passion was pulling him in a different direction, toward design.

Around that same time, he started learning Korean, almost by coincidence, alongside discovering design through daily livestreams and Discord communities. That combination ended up being his real advantage, since his first-ever startup job was a US-based company founded by Korean founders.

Speaking Korean opened doors most other applicants didn't have access to, and he's continued working primarily with Korean-founded startups ever since, cold-messaging on LinkedIn and applying through Korean job portals.

Funny enough, we spent a long time exchanging a few Korean phrases with each other during our call, I'm still learning the language myself, so it was such a fun, unexpected part of our conversation!

Some of his favorite projects have been genuinely unexpected: designing over 20 watch faces for a small-screen product, learning entirely new scaling principles compared to typical app design, and working on a Vietnam-based project (with Korean founders) focused on closing the emotional gap between children and their parents.

He was honest with me that it's an ongoing process, but he stays occupied through hackathons, design articles, watching shows, and staying close with friends in Korea. One hackathon idea even outgrew the hackathon itself, he kept building on it long after the event ended, eventually bringing on a product designer to help refine the branding and UI, and they're still meeting weekly three months later.

Very grateful for Ashutos Jain sharing his story with me, and for every person who's shown me the same thing: you just have to ask!

P.S. He's part of a design club run by Yodi (요디님), a UI/UX designer based in London. She started the group this year, and each month gives out a theme, posters, illustrations, renders, anything design-related, where members support each other and share their work. July's theme was summer, which is where he got the idea for his game. He initially built a simple demo, but liked the concept enough to turn it into a full game. It's a really cool project, be sure to check it out! https://lnkd.in/epXV5yGM`,order:67,images:["src/photos/stories/9-9-2026-ashutos-jain-0.jpg","src/photos/stories/9-9-2026-ashutos-jain-1.jpg"]},{date:"9/11/2026",name:"rachel paiz",body:`Continuing to tell these mentorship stories, one at a time. This one starts with me asking someone to be a team Project Manager when I was a team Principal Investigator for the L'SPACE Program. 

I met Rachel Paiz through the L'SPACE Program's NASA Proposal Writing and Evaluation Experience (NPWEE) in January of this year, back when I first reached out asking if she'd be willing to serve as Project Manager (PM) for my orbital debris simulation quad chart. The L'SPACE Program is a free, NASA-funded, virtual workforce development program!

Rachel hesitated at first, since she'd been expecting to take on a smaller role, but she said yes.

She found L'SPACE Program through her honors program at community college, open to any degree, any interdisciplinary background. Space wasn't something she'd pictured for herself, but it seemed like a genuinely unique way to push out of her comfort zone.

Rachel applied while going to school full-time and juggling evening sessions on top of it, and told me she actually never expected to take on a leadership role. 

When our quad chart got selected, I was so happy at first that I literally jumped for joy! But then I got scared, because it was so out of this world and honestly overwhelmed me a bit. But we pushed through it together. 

Beyond L'SPACE's general Thursday calls and our regularly scheduled team meetings, Rachel and I would call to talk through the project, and we'd reach out to subject matter experts from all over the world like Dr. Phillip Anz-Meador and Dr. Koki Ho, emailing and calling people neither of us had ever met, figuring it out side by side.

We had to break down something as complex as orbital debris mitigation, clearing out space junk, into something we could understand ourselves first, then explain it to the engineers on our team. Working with a fully virtual team was a completely different experience too, neither of us had really worked that way before. 

Going through that process taught us both so much. Rachel told me it made her a more effective communicator, and that agreeing to take on the PM role was proof to herself that she was capable of things she never thought she could do.

Since then, she's finished her community college credits, transferred to Texas State University, and is now working as a Teaching Assistant while actively trying to land an internship in finance or accounting. 

We spent so many late nights on calls together, her often at a coffee shop between everything else going on, me usually in the dining hall, Miller Learning Center, or Casey Commons at The University of Georgia late at night, talking through next steps and figuring out how to speak to subject matter experts and engineering students.

Somehow, we've worked pretty well together and communicated so well, despite never actually meeting in person. 

Very grateful for Rachel Paiz's partnership, and for every person who's shown me the same thing: you just have to ask!`,order:68,images:["src/photos/stories/9-10-2026-rachel-paiz-1.jpg","src/photos/stories/9-10-2026-rachel-paiz-0.jpg"]},{date:"9/12/2026",name:"elisha kim",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a random post about Clash Royale!

Elisha Kim told me he originally planned on going into Investment Banking, inspired by a guy from his high school who landed a role at a top firm. He applied to his school's finance club during the year and got rejected, and that rejection pushed him to start spending more time on LinkedIn, exploring what else might be out there. Almost on a whim, he saw someone post about Clash Royale on LinkedIn and decided to post something himself. It did surprisingly well, around 10,000 impressions, and he thought, "maybe I should actually try this!"

He was honest that he's genuinely glad it worked out this way. Elisha realized early, back in 11th grade watching Shark Tank, that he wanted to build something of his own, but he'd lost sight of that once he actually got to business school. LinkedIn ended up being the thing that reconnected him to it, opening his eyes to career paths he didn't even know existed, working with athletes, creative director gigs, all from posting consistently.

He was candid about the messier parts too. He got into User Generated Content (UGC) content almost by accident, cold-reached out through a chain of people, and eventually landed his current role about four months into his search, a process that felt uncertain along the way.

One thing he was firm about: it's less about the specific role, and more about staying true to what genuinely fits who you are, even when settling feels easier. Staying true to yourself, believing in yourself, and taking that bet on yourself, that's what matters most.

He shared something that stuck with me about the unexpected parts of life, that it's not really about who you become when something difficult happens, it's about who you already are in that moment. Are you someone who can adapt and adjust? Or do you crumble under the pressure? That's the real test!

His advice for anyone exploring content: just post, get yourself out there. Then focus on providing real value or entertainment, solving an actual problem someone might have, whether that's needing something fun to read, or figuring out a part of college your own experience could genuinely help with.

Very grateful for Elisha Kim sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:69,images:["src/photos/stories/9-11-2026-elisha-kim-0.png"]},{date:"9/13/2026",name:"marko ciganovic",body:`Continuing to tell these mentorship stories, one at a time. This one starts with quitting streaming after seven months!

Marko Ciganović told me he used to stream, but after seven months, he decided he didn't want to go all-in halfway. He'd invested around $3,000 into his setup and didn't want to do it half-heartedly, so he made the call to pivot entirely into User Generated Content (UGC) content instead.

It wasn't an easy start. He was based in Croatia, having to figure things out from scratch with no shortcuts. But in his fourth month, one series finally broke through and went viral, and he iterated from there. He credited a mentor who coached him patiently twice a week until things clicked.

Marko was honest that the growth wasn't linear either, when he had to pause everything to focus on finals and his driving exam. But when he came back to content afterward, he leaned on conversations with friends already doing well in the space, and reminded himself the learning curve the second time around would be much shorter than starting from zero.

From there, he built what's now an in-house growth team, sourcing and managing hundreds of creators, generating hundreds of millions of views collectively. Marko told me his approach to breaking in was simple: provide real value before asking for anything.

Early on, he dedicated an intense stretch of focused work, sourcing 100 quality creators across three campaigns, because he wanted to prove what he could bring to the table before requesting a role!

Marko's advice on creative strategy: test as many formats as possible, then double down on whatever actually sticks. His first viral series took roughly 200 videos before anything really broke through!

What stuck with me most was his honesty about staying true to yourself. He told me that no matter how good an opportunity looks on paper, it's important to stick to your own values and only pursue the things that genuinely feel right to you.

Very grateful for Marko Ciganović sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:70,images:["src/photos/stories/9-12-2026-marko-ciganovic-0.jpg"]},{date:"9/14/2026",name:"jessica jones",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a pivot from studying arts management to a role in the FinTech industry.

I met Jessica Jones through my Principles of FinTech class, when my professor, Bob Trotter, invited her to speak specifically about FinTech Atlanta and the work they do in the FinTech (financial technology) community across the greater Atlanta area.

Jessica told us her story: she switched majors a few times, from English, to communications and business, before eventually graduating with a degree in arts management. She didn't study traditional finance in school and never expected to end up in payments, an industry she called a giant space. And honestly, she told me, she's still not fully "decided" on what she wants to do forever, to this day.

She told us there are so many different ways to plug into fintech, even if you come from a more "right-brained" background, more creative, intuitive thinking, rather than a strictly technical or analytical one. She started in operations, moved into marketing, worked at a bank until earlier this year, and has since transitioned into consulting and working with startups, alongside her part-time role with FinTech Atlanta.

She shared a piece of advice that stuck with me: if you're scared to step into a leadership role, step forward anyway and see what happens. She talked about building relationships within her bank to actually implement a real project, connecting students with professionals, seeing passion firsthand, and how you get out of an experience exactly what you put into it. She reminded us that access to that kind of knowledge and mentorship isn't something you can just buy.

What surprised me most was something we found we had in common: being really expressive, particularly in facial expressions. I'd once seen that as something I needed to keep in check, but Jessica saw it as something important rather than something to hide.

Feeling things deeply, and being able to empathize because of it, genuinely matters. She reminded me that being yourself and standing out is your greatest superpower, and the more you own it, the more you can connect with others!

Very grateful for Jessica Jones sharing her story with me, and for every person who's shown me the same thing: you just have to ask!`,order:71,images:["src/photos/stories/9-13-2026-jessica-jones-0.jpg","src/photos/stories/9-13-2026-jessica-jones-1.jpg"]},{date:"9/15/2026",name:"akshat kumar",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an unpaid internship that turned into scaling a community to 100,000 members.

Akshat Kumar entered college in India at 17, at a lesser-known university without a big name or alumni network behind him. Instead of letting that hold him back, he decided early on that where he went wasn't going to define his story.

He joined Geek Room, one of India's tech communities, working completely unpaid at first, just to learn. Within three months, he helped organize one of India's largest hackathons, bringing in sponsors like Grok and building relationships across Asia-Pacific. From there, GeekRoom scaled to over 100,000 members, collaborating with companies like Mastercard, Microsoft, Google, and even Formula 1.

Through those same connections, he landed a role at OmniDimension, pivoting from tech into marketing, something he discovered he genuinely loved, helping take the company to half a million in ARR (Annual Recurring Revenue, the predictable and recurring revenue a company expects to make from customer subscriptions over a 12-month period)!

He was honest about a difficult lesson with his own content: early on, he only posted his wins, one post would hit 200,000 reactions, then he'd go quiet for months while actually doing the work, and by the time he came back, his audience had gone cold, essentially starting from zero every time.

His fix was a mindset shift he calls the "machine gun theory," posting consistently rather than chasing one perfect, polished "sniper shot" post. Consistency beats perfection!

He also shared a fun fact: his favorite swimming strokes are butterfly and IM! Funny enough, I tried swim team myself back in middle school and didn't have the easiest time floating, so backstroke had quite the learning curve for me!

Very grateful for Akshat Kumar sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:72,images:["src/photos/stories/9-14-2026-akshat-kumar-0.jpg"]},{date:"9/16/2026",name:"ayanna varma",body:`Continuing to tell these mentorship stories, one at a time. This one starts with someone I bonded with over thriving through stress and hurdles!

Ayanna Varma told me that years of competitive tennis alongside school trained her to be built for pressure, and even now, if she's not stressed about something, it feels unfamiliar.

We actually bonded over that exact thing, both of us laughing about how our high schools basically trained us for eustress, that good, motivating kind of stress that pushes you forward and keeps you going. I told her about juggling three different dance teams at once back in high school, and leadership across three large organizations in my junior year, and she completely understood that instinct to just keep taking more on.

At her university (we're actually both in the same year!), she was honest about feeling the pull of the traditional path too, with being competitive. This past summer, she worked at a startup in San Francisco instead, and realized she's genuinely drawn to the tech and venture side of things. She told me the space feels uncertain, but the best way through that uncertainty is just to keep talking to people already in it.

That's part of why she writes on LinkedIn, to build a community around the things she's genuinely interested in, so that she has people paying attention who care about the same things she does.

She's also deeply interested in RAI (Responsible AI) policy, the intersection of technology and policy, and making sure any startup she eventually builds is guided by real values, not just growth for its own sake. She's taken tutorials at her school, a rare, intensive format where it's literally just her, one other student, and a professor each week, one student writes a paper, the other writes a rebuttal. She wrote about the extent to which cyber issues have reshaped international relations, which I think is so relevant today in an ever-changing world!

She was honest about something else too: she doesn't always know exactly what she wants to do next, and she's learned to be okay with that, and continuing to learn! Our values align in being super curious about the world!

She also told me her ambition sometimes gets ahead of her, especially with how much bigger the range of opportunities feels in college compared to high school, but even the overly ambitious stretches have set her up well. I honestly feel that way a lot too, when I first came to college, I went to The University of Georgia's engagement fair and walked up and down the entire building talking to as many people as I could, and joining as many orgs as I could. But it was also just as important to slow down and ask ourselves what made us feel happy and fulfilled through it all!

Very grateful for Ayanna Varma sharing her story with me, and for every person who's shown me the same thing: you just have to ask!`,order:73,images:["src/photos/stories/9-15-2026-ayanna-varma-0.jpg"]},{date:"9/17/2026",name:"shivansh rastogi",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a one-way ticket to a country he barely knew.

Shivansh Rastogi told me he came to the US with just $1,700 to his name, technically American on paper, but genuinely unfamiliar with the country itself. He used that money to get through his first four months, working odd jobs, before eventually landing a tax internship, work he genuinely loved.

His path into entrepreneurship started with a marketing agency he built sophomore year, running paid ads and social media management for local businesses. Then last August, almost by accident, he started building a product idea with no real market yet. Living in a college town of just 11,000 people, he started getting meetings with local businesses, and one of them happened to be an independent pharmacy, one of the oldest in the US. That random meeting became the foundation for everything he's built since.

Shivansh was honest that his first sales pitch script didn't work, so he scrapped it and just had natural conversations instead, genuinely listening to pain points. He told me sales is one of the most challenging things I can learn, but also one of the most important, since even a great product needs people to actually know it exists.

He shared something that stuck with me about building responsibly with AI: he specifically programs his AI voice agents to never give medical advice, keeping a human in the loop for anything sensitive, because getting that wrong could put an entire pharmacy at risk.

Shivansh was also honest about the cost of hustling without balance. He shared that comparing your pace to others online isn't sustainable, since you never really know what's behind someone else's highlight reel, and that taking care of your health and well-being has to come first, no matter how ambitious the goal is!

Very grateful for Shivansh Rastogi sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:74,images:["src/photos/stories/9-16-2026-shivansh-rastogi-0.jpg"]},{date:"9/18/2026",name:"jillian loux",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a kindergartener writing songs before she even knew how to spell!

I met Jillian Loux (Jill for short!) while standing next to each other in line waiting for dinner at the University of Oxford during our study abroad program with The University of Georgia!

I shared with her that I played piano and violin growing up, though I had taken a long hiatus following high school and only recently picked up piano again.

She pitched doing a collaboration, and I initially had some doubts since it had been so long.

On the day before the program ended, she sent over her demo to me.

We threw something together in 20 minutes right before a call, and in that moment, playing the piano reconnected me to a musical side of myself I had walked away from for so long! It reminded me just how much I missed it!

Jill told me she's been writing music since kindergarten, singing lyrics to her mom before she even knew how to write. That love never left!

In 9th grade, she and a friend recorded an EP in his basement and released it during lockdown. Not long after, an acting agent sent her an audition for a music documentary, and the managers who saw it wanted to sign her on the spot.  
She's been with the same management team since 10th grade, recording her EP all the way in Australia.

Jill was honest that navigating social media as part of her career has been a real learning curve, but her favorite part has always been simply being in the studio.

Her songwriting process has shifted over the years. She used to write mostly on guitar, drawing from whatever felt real in her life at the moment.

Now, most of Jill’s writing happens live in the studio, where a producer starts building a beat, and she writes melodies and lyrics on the spot, going back and forth until something clicks.

She also grew up surrounded by music!

Neither of her parents are musicians themselves, but they love it deeply and even met for the first time at a music festival!

She sang in choir from 2nd through 12th grade, working with different vocal coaches along the way.

Jill’s advice for anyone chasing something creative: if you see someone pursuing a dream, remember it's a process, try not to judge people for simply trying to do what they love!

So grateful to Jillian Loux for sharing her story and music with me, and to every person who's shown me the same thing: you just have to ask!

P.S. The song I accompanied her on piano for was "Butterflies," was released yesterday! She’s available on all streaming platforms: https://lnkd.in/eAn_37iV  View image 
      *  View image`,order:75,images:["src/photos/stories/9-17-2026-jillian-loux-1.jpg","src/photos/stories/9-17-2026-jillian-loux-2.jpg","src/photos/stories/9-17-2026-jillian-loux-0.jpg"]},{date:"9/19/2026",name:"phil-ho combatir",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a college research project that unexpectedly led him to NASA!

Phil-Ho Combatir told me he never directly envisioned himself working in aerospace, he just knew he wanted to do something in STEM.

During undergrad, a research project he built, using machine learning to help analyze and improve neighborhoods in New Jersey, ended up catching the attention of a NASA - National Aeronautics and Space Administration manager.

A single interview later, he had an offer to move to Huntsville, Alabama, as a Software Engineering Intern, despite having no formal aerospace background.

He's now pursuing his Master's in Engineering at Cornell University, working part-time at Apple as a Technical Specialist, a role he actually landed through cold applying.

He's also part of the Lightreel AI Fellowship alongside all of it (which is how we met!), a great way to get started with content creation, as it analyzes the current trends on various social media platforms like TikTok and Instagram!

He was honest about how passive his LinkedIn presence used to be, simple posts with barely any engagement, and a real fear that posting felt "cringey," wondering what a college sophomore could possibly have to offer.

That changed once he joined a growth fellowship and had to consistently generate ideas multiple times a week, eventually building real momentum and visibility.

He shared something that moved me: people from middle school he hadn't spoken to in over a decade started reaching out after seeing his growth online, and it was a nice reminder that putting yourself out there, even when it feels uncomfortable, is almost always worth it!

Phil was candid about his experience as a first-generation student too, navigating college admissions and career recruiting largely alone, not fully understanding how competitive the process was until it felt almost too late.

Despite that, he got into strong undergraduate programs and eventually his dream grad school, driven by two core values he holds onto: consistency and discipline.

He described planning his undergrad years around where he wanted to end up, treating each year as a deliberate step forward rather than leaving things to chance.

What struck me most was something he shared about his college years: after finishing his first year, he was hospitalized and had to attend classes over Zoom from the ER, at times navigating campus in a wheelchair.

He was told to consider dropping out. He didn't.

Between limited family financial support and real barriers like being unable to afford textbook access at first, he pushed through by finding small scholarships, advocating for himself directly with professors, and refusing to give up on the path he'd set for himself.

Very grateful for Phil-Ho Combatir sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:76,images:["src/photos/stories/9-18-2026-phil-ho-combatir-0.png"]},{date:"9/20/2026",name:"kennard liong",body:`Continuing to tell these mentorship stories, one at a time. This one starts with moving across the world at 15 and learning how to build business intuition!

Kennard Liong grew up in Jakarta, Indonesia and moved to Massachusetts at 15 for high school before doing pre-med research at Emory University and eventually transferring to Columbia University to study economics!

We had a deeply honest conversation about privilege, social inequality, and perspective.

Growing up in Indonesia surrounded by wealth gaps taught him early on to question his environment, recognize his advantages, and realize that true growth requires building your own agency and real-world skills.

Coming from a family business back home, his dad gave him invaluable advice early on: get real experience outside first in sales, marketing, or product, and climb your own ladder.

We also talked about building versus investing. After running a productivity app that reached over 15,000 monthly users, Kennard saw firsthand how challenging startup distribution, Meta ads, and unit economics can be.

Pitching to top investors sparked a deep passion for early-stage Venture Capital (VC), especially in the Asia-Pacific region, where investment models take a very different approach than in NYC or SF. To him, early VC is about betting on the founder and the idea!

Kennard also shared a lesson he's learned from practicing casing: it's easy to over-complicate problems with textbook supply chain frameworks when the answer really comes down to simple business logic and competitor pricing. Definitely something I'm still learning more about!

Very grateful to Kennard Liong for sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:77,images:["src/photos/stories/9-19-2026-kennard-liong-0.png"]},{date:"9/21/2026",name:"joe radest",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a company drawn on printer paper at a friend's breakfast bar!

Joe Radest told our Principles of FinTech class at The University of Georgia that he spent years climbing through roles at a major bank's payment tech division, thinking a corporate career was the path he was supposed to be on.

But at 43, he left it all behind to start his own firm.

He described entrepreneurship with a metaphor that stuck with me: imagine being asked to swim across a lake, except the lake is filled with quicksand instead of water.

It might take three years just to reach solid ground, and very few people are willing to take on that kind of challenge. That's what building something from nothing actually feels like.

He shared the origin story of one of his companies, which started as a drawing on printer paper at his friend and eventual business partner's breakfast bar, during a conversation on MLK Day in 2016.

He sketched out how the payment flow could work, brought it home on a two-hour flight, and was on the phone with a developer the very next day.

His advice on commitment was blunt: building a company in its early stages isn't a 40-50 hour a week job, it's closer to 90.

Joe talked about never losing sight of where you came from as you grow, and how your product is only ever as good as the service behind it.

He also shared a framework he uses: B.A.R. (Behavior, Activity, Results)

Behavior means waking up excited to tackle what's ahead!

Activity means putting in consistent effort, like an athlete practicing daily to get better.

Results are what naturally follow when you've shown up consistently for both!

He reminded us not to wish days away waiting for some future moment, but to make each individual day count.

When I went up to talk to him after class, genuinely in awe of how well he carried himself and spoke in front of our class, he also gave me helpful advice on public speaking: look left, right, and center in a room, once you can comfortably hold eye contact with a few individual faces, you can expand outward and speak confidently to a much larger group.

Joe also left me with one more piece of advice worth remembering well beyond graduation: a bad question is one that's never asked. The only way to actually learn is to seek out the information yourself!

Very grateful for Joe Radest sharing his story with our class, and for every person who's shown me the same thing: you just have to ask!`,order:78,images:["src/photos/stories/9-20-2026-joe-radest-1.png","src/photos/stories/9-20-2026-joe-radest-0.jpg"]},{date:"9/22/2026",name:"joe nedza",body:`Continuing to tell these mentorship stories, one at a time. This one starts with selling waffles out of his college apartment.

I met Joe Nedza at one of the UGA Society of Entrepreneurs Lunch and Learn events! I found out about it the morning of Professor Cali Brutz's 8:15am Introduction to Entrepreneurship class and signed up.

Joe told us he started working at 13 in restaurants, and by college, he was selling waffles out of his apartment in a scrappy, informal way, storing extra batter and ice cream in church freezers because he'd run out of space.

It wasn't exactly by the book, but it was the beginning of everything that came after!

He met his now-wife in Athens, kept running pop-up restaurants, and eventually opened his own place. Joe told us he wouldn't change any of it, because learning the hardest way possible taught him lessons he couldn't have gotten any other way.

Without outside financial support, he had to figure everything out himself, which forced a level of creativity and resourcefulness he says became foundational to his later success.

He shared a framework he uses constantly: seek waste, find waste, kill waste.

Joe walked us through how something as small as leaving a fryer on for two extra hours a day adds up.

Oil, gas, cleaning time, and electricity, and paying close attention to those small inefficiencies can save a business real money!

He also talked about studying Chick-fil-A Restaurants's business model for over 20 years, eventually building a real relationship with one of its founding leaders just by reaching out directly.

Joe's philosophy: measure yourself against the best in the world, and keep filling the gaps.

His advice on relationships stuck with me too! Joe told us he learned the power of genuine relationships out of necessity.

Joe had to build real trust with people directly, one conversation at a time!

Very grateful for Joe Nedza sharing his story with us, and for every person who's shown me the same thing: you just have to ask!`,order:79,images:["src/photos/stories/9-21-2026-joe-nedza-1.png","src/photos/stories/9-21-2026-joe-nedza-0.png"]},{date:"9/23/2026",name:"chloe hughes",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a scholarship application she almost gave up on halfway through.

Chloe Hughes told me she didn't fully realize how much financial planning college would actually take until she got to college. 

Back in high school, she was calculating net costs for the schools she was applying to, but scholarship applications felt like an entirely separate, exhausting task on top of an already overloaded schedule.

That's the exact problem she and her co-founder, Fatimah Hussain, are solving with Finnie AI, a platform tackling long, tedious onboarding forms and vague scholarship matches that make an already stressful process even harder. 

They're currently piloting the product with high schools, working to get counselors on board first, then approaching local banks to sponsor the platform's usage for those schools, tapping into the real financial incentive banks have to reinvest a percentage of their funds back into the communities they serve.

She built Finnie at a hackathon for female builders in San Francisco, and won!

She was honest about lessons learned from hackathons more broadly, like how presentation style matters just as much as the build itself, some judges want a full pitch, others want you to skip the slides entirely and just show them what you made.

Chloe also shared with me about how her coursework shaped her ability to build Finnie! 

Computer science gave her a theoretical foundation, but a lot of her actual technical fluency, tools like Supabase and Vercel, came from teaching herself outside the classroom. 

Her data science background specifically taught her how to think about collecting and optimizing data well, something that's proven directly useful in building Finnie's product!

She was candid about her career path too, a product marketing internship in fintech taught her to slow down and think through the "how" of building something, and she believes that experience shaped her instincts for Finnie more than almost anything else.

Chloe’s advice for students exploring opportunities like Venture Capital (VC) internships: it can come down to how socially connected you are on campus, since VCs can be deeply plugged into universities as a pipeline for the next generation of builders!

Very grateful for Chloe Hughes sharing her story with me, and for every person who's shown me the same thing: you just have to ask!`,order:80,images:["src/photos/stories/9-22-2026-chloe-hughes-0.jpg","src/photos/stories/9-22-2026-chloe-hughes-1.jpg"]},{date:"9/24/2026",name:"jibran khalil",body:`Continuing to tell these mentorship stories, one at a time. This one starts with someone who got tired of scrolling and decided to build the tool instead!

Jibran Khalil told me he spent years growing consumer apps to number 1 on the App Store, almost entirely through organic content.

He kept asking himself how to actually figure out what works, and his honest answer was just scrolling TikTok for hours, chasing trends, and hoping something landed.

He realized nothing genuinely existed to solve that problem well, so he founded Lightreel AI himself.

Lightreel plugs directly into AI tools through MCPs (Model Context Protocols, a standard that lets different AI tools securely connect to outside data and services), giving AI agents a nuanced cultural understanding in minutes, the kind of context an agent would otherwise be shooting in the dark trying to guess at!

Jibran told me he simply did not want to keep doomscrolling forever.

He wanted to know how creative AI agents could actually get, and whether they could genuinely match what a sharp human marketer already understands instinctively.

Jibran grew up between Illinois, Texas, and New York, and took everything he learned building and marketing his own apps over the years to engineer Lightreel into what it is today.

I actually met Jibran through the Lightreel AI Fellowship, curated by Subal Kumar, which has genuinely connected me with incredible people like Alice Lan, Vivian Lin, Phil-Ho Combatir, Jerry Zhu, and Zexi Li along the way.

Very grateful for Jibran Khalil sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:81,images:["src/photos/stories/9-23-2026-jibran-khalil-0.jpg"]},{date:"9/25/2026",name:"eric d'amico",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a single pitch that turned into 20 million views!

I met Eric D'Amico, now Growth Lead at Intern Insider, through the second cohort! He told me he started his own business during his first year of university.

It was a marketing agency for small businesses, contracting camera work and editing through his connections in the creative space.

He eventually exited the business entirely, selling his stake and moving on.

Eric later joined Dragonfruit Ventures as an analyst and venture intern, spending his first few months doing due diligence, the research process investors do to evaluate whether a company is actually worth investing in.

Everything shifted when he pitched the firm on a different idea entirely.

Their philosophy was that distribution, how effectively you get your message or brand in front of people, is the new moat, a lasting competitive advantage that's hard for others to copy.

So why not build real content around the firm itself, rather than staying shrouded in the usual mystique surrounding that space?

That single pitch turned into 20 million views in their first 4-5 months!

It eventually grew into an entire distribution agency, Dragonfruit Venture Labs, serving portfolio companies across dozens of startups and verticals, generating over 312 million views in total. Seriously so cool!

He was honest that eventually, being spread so fractionally across so many different startups started to wear on him.

He wanted more ownership over a single vision, both short-term execution and long-term strategy, rather than jumping between other people's companies.

He had already started a dialogue with Nicholas Low (Nick for short!) from Intern Insider about work and startups, when Nick recognized a video on Eric's account, saw his Instagram handle, and asked if he'd be down for an interview, which eventually led him to his current role there!

Very grateful for Eric D'Amico for sharing his story with me, and for every person who's shown me the same thing: you just have to ask! 
         *  View image          *  View image`,order:82,images:["src/photos/stories/9-24-2026-eric-d-amico-2.jpg","src/photos/stories/9-24-2026-eric-d-amico-1.jpg","src/photos/stories/9-24-2026-eric-d-amico-0.jpg"]},{date:"9/26/2026",name:"ezekiel wood & lemma post",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a team that almost didn't get funded, and a redo that changed everything.

Ezekiel Wood told me he first learned about the L'SPACE Program through a friend in high school, but life got in the way, and it wasn't until sophomore year that he finally applied, joining the NASA Proposal Writing and Evaluation Experience (NPWEE).

Genuinely such an incredible program I did in Spring 2026, while he did Spring 2025! We both gained hands-on experience in learning how to formulate a proposal to a specific solicitation and compete for a $10,000 team prize to help fund a team project.

His team's original proposal didn't go through, but when extra funding opened up unexpectedly, only 3 of the original 10 team members regrouped to resubmit.

It got funded in July 2025, and from there, he spent about two months building an entirely new team from scratch, pulling people from across the country.

Their project, SELENE, focuses on soft robotics for lunar exploration, drawing design inspiration directly from nature, gecko feet, octopus limbs, elephant trunks, translating how creatures move and adapt into robotic systems capable of navigating terrain traditional wheels can't handle, like steep inclines!

He was honest about the learning curve.

Managing a team full of freshmen and sophomores in engineering, navigating SME (subject matter expert) feedback sessions that led to major redesign after major redesign, and figuring out how to scale a project up or down all taught him more than he expected.

I remember myself and Rachel Paiz, my team's Project Manager (PM) last spring talking with SMEs while not knowing everything, but learning so much along the way!

He described genuinely humbling moments of impostor syndrome along the way, realizing there was so much he still didn't know, even after feeling confident going in.

He shared something that stuck with me: nearly every engineer he's talked to traces their love of the field back to playing with Legos as a kid, himself included, all the way back to building a robot for a Lego competition in 7th grade.

It reminded me of myself, when I played with Legos as a kid and made a mini robot in middle school!

Now graduating in spring, he's deep in the job search, studying for the Fundamentals of Engineering exam, and hoping to break into the aerospace robotics industry, ideally somewhere near LA, where the broader aerospace ecosystem lives.

He also shared something thoughtful about choosing his school: choosing the one offering him a debt-free path, a decision shaped by his parent's background in risk management, and one he says he'd make again without hesitation. It was also something I became really grateful for, attending a school where I was fortunate to worry about the finances less.

Very grateful for Ezekiel Wood sharing his story with me, and for every person who's shown me the same thing: you just have to ask!   

You don't have to set foot in San Francisco to know who's actually building the future!

Over the last few months, I've had the opportunity to get on calls with people building solutions in tech in SF.

Here are 5 people who changed how I look at it:

1) Tejas Gupta, Co-Founder @ Clean (YC F26)

When doors weren't opening for him in tech, Tejas built his own front door instead, referencing Attack on Titan as his own pursuit of freedom.

His team at Clean builds autonomous agents that clean, normalize, and execute across messy operational workflows.

Shoutout to Vincent Todd for connecting us!

2) Teagan Yuen, Founding Growth @ BOND (YC X25)

When I talked with Teagan the other week, I learned that every opportunity she's unlocked in SF has stemmed directly from putting her work and voice out there, with an ambition we bonded over!

Her team is building an AI Chief of Staff giving executives clear visibility into what their teams are prioritizing, without feeling like surveillance.

Shoutout to Abdul Wahaj for connecting us!

3) Dennis Chen, Founding Member of Technical Staff (MTS) @ Interfaze (YC P26)

When I reached out to Dennis cold in January asking for advice in my first year of college, he gave me the best advice: start creating and putting your voice out there.

On July 4th of this year, I finally started and haven't stopped since.

Dennis and his team are building a reliably correct AI model that outperforms other LLMs on deterministic tasks that require high accuracy!

4) Tristan Ly, Marketing @ Audora (YC F26)

Tristan told me he's always had a story playing somewhere in his life, a podcast on a walk, an audiobook while cooking, a show in the background while working.

Stories are how he recharges, and he believes everyone deserves that.

He expressed his concern that many people may lose touch with reading because life can get busy.

Tristan sees Audora (YC F26) as a way to give that back through audio!

5) Anvith Anand, Founder @ HYPRTRHY

Anvith's philosophy stuck with me: in an age full of fear about AI, he asks not what you can do for AI, but what AI can do for you, solving the busywork so people can actually go have fun outside.

He's building a fitness tracker on smart glasses so users can see results faster!

Shoutout, again, to Vincent Todd for connecting us!

Very grateful to every one of them for sharing their stories, and for every person who's shown me the same thing: you just have to ask!


P.S. Nominating them as guests for Lemma's Agent Economy Gala during TECH WEEK by a16z, these are definitely the people who should be in that room!

If I could choose anyone to come with me to SF, it would be Bhaumi Nadella (we're literally working on our project at a hackathon right now as I write this)!

Co-hosts: Lemma (Sarah Fan, Jerry Zhang) | LlamaIndex | TinyFish | Linq | Obvious

Sponsors: Cursor (acquired by SpaceX) | MongoDB | Daytona | Arceus | TECH WEEK by a16z 

            *             *  View image             *  View image`,order:83,images:["src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-0.png","src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-1.png","src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-2.jpg","src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-3.jpg","src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-4.png","src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-5.png","src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-6.png"]},{date:"9/27/2026",name:"fredrick okwudili",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a startup named after a stranger from Estonia!

Fredrick Okwudili (Fred for short!) told me that early on, before co-founding Cura Ai Labs, he started a multimedia agency for content creators. He was so excited, convinced it couldn't fail. Unfortunately, it did.

He had to go back and work for someone else, as a cold caller, at a tech company. He was honest that it was genuinely painful and something he struggled with at first, but it taught him more than he expected.

Fred shared advice a mentor gave him that same morning I called him: the first step to building a product is finding a problem that personally touches you. Nothing is more compelling than a founder's real story, because people can tell when that connection is genuine versus performed.

Cura wasn't his original idea; it started as a simple MVP (Minimum Viable Product, the earliest, most basic version of a product you can build to test an idea) he made for a friend from Estonia, in the health and wellness space, and he named the early version after her.

Fred told me successful founders aren't necessarily smarter, they're relentless researchers, pulling information most people don't bother to find.

He shared a metaphor from Spider-Man: Brand New Day, which I'd actually watched just the other month, comparing life to a movie where other people, doctors, mentors, even the people closest to you, come and go like side characters throughout different chapters.

It reframed how I think about the healthcare journey Cura is trying to build for!

He found his co-founders through a random content platform, connecting with someone in the Netherlands building something eerily similar, just from a different angle.

Rejections, he said, should be treated as data points. Fred shared he'd been rejected by top accelerators multiple times, and though it stung at first, he doesn't let it define the story.

He was honest about his own path through school too: it gave him room to fail without the same real-world consequences. At the same time, he supplemented what he wasn't taught with what he jokingly called "the University of YouTube!"

What stuck with me most Fred said: you're never ready. He shared some advice on telling yourself, "I'm doing this anyway. If I fail, I fail. If I succeed, I succeed!" Definitely a great growth mindset he has!

Very grateful for Fredrick Okwudili sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:84,images:["src/photos/stories/9-26-2026-fredrick-okwudili-0.png"]},{date:"9/28/2026",name:"manoj d",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a chance connection over a shared childhood dream of being an astronaut.

Manoj D told me he connected with Rutger Wiersma over a shared interest in space, after Rutger noticed Manoj's work mapping galaxies in a NASA dataset.

That connection eventually led Manoj to Fredrick Okwudili, and the three of them decided to build something together.

That something became Cura Ai Labs, a startup helping people build a continuous, complete picture of their own health over time. 

Manoj explained a problem so many people quietly struggle with, keeping track of symptoms, health history, and reports across years, while doctors often only get a small, isolated snapshot during a single consultation. 

He explained that they designed Cura to close that gap, giving patients an ongoing health diary, and giving doctors much more context to work with during appointments, potentially catching small, easily overlooked symptoms before they become serious.

They're currently pre-revenue, having built their MVP (minimum viable product, the most basic version of a new item or service that has only the core features needed to solve a problem and test an idea with real users) over the past two months. 

They're now pitching to investors, prepping a full pitch deck with a financial model after impressing an agency in an earlier call. 

Their long-term plan is to launch in Europe first, based out of the Netherlands, before eventually navigating the more complex regulatory landscape required to enter the U.S. market.

He was honest about the team's current challenges too, as they're technical builders without much sales experience, sending out significant volumes of outreach with limited response so far, and still learning how to translate a genuinely meaningful product into real traction.

What stuck with me most was something he said near the end of our conversation: even while working hard to build something meaningful, he reminded me that taking care of your own health has to come first, since it can be difficult to take care of others if you don't take care of yourself!

Very grateful for Manoj D sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:85,note:"source doc starts this story mid-way - opening is missing",images:["src/photos/stories/9-27-2026-manoj-d-0.jpg"]},{date:"9/29/2026",name:"jonathan pertchik",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a piece of advice to close your eyes and swing for the fences.

I met Jonathan Pertchik when he was a guest speaker for the Principles of FinTech class I'm taking at The University of Georgia with Bob Trotter.

He told us when he was younger, he didn't know what he wanted to do.

Jon went to law school, ended up in commercial real estate, and was first assigned to mentor someone early in his career, watching a young coworker take his advice, apply it, and actually succeed gave him a genuine sense of disbelief, realizing the things he'd learned were real, repeatable, and worth passing on.

His advice was to aim for the absolute highest version of whatever you're drawn to, figure out its highest form and set your sights there.

For Jon, that meant eventually becoming CEO of multiple private equity-backed companies, even when it sounded outlandish at first, before it actually happened.

He shared ten personal leadership lessons, but the one that stuck with me the most was the illusion of perfection: even Olympic skiers fall down constantly.

Perfection isn't the goal, growth requires falling, reviewing what went wrong honestly with your team, and adjusting.

I definitely have so much to learn here, growing up, I really wanted to be perfect but had multiple setbacks, and eventually just became okay with being uncomfortable through lots of different challenges!

Jon closed with something he called "close your eyes and swing for the fences."

He told me about that genuine sense you get when something feels within your capability, and how important it is to go all in on that one thing and trust yourself.

What meant the most to me personally was when I told him how important storytelling has felt to me since I was young, something I've always felt deeply drawn to, and what I've been doing here on LinkedIn.

When I first got started writing pieces here, I was genuinely scared, but I kept showing up anyway.

After doing this so many times now, I've found real strength in it and finding my own voice, something I never expected when I first began.

Jon didn't make me feel like that was silly or impractical at all, he genuinely took it seriously, and that surprised me in the best way!

Very grateful for Jonathan Pertchik sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:86,images:["src/photos/stories/9-28-2026-jonathan-pertchik-1.jpg","src/photos/stories/9-28-2026-jonathan-pertchik-0.png"]},{date:"9/30/2026",name:"dominick filipponi",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a kid who wanted to be an astronaut and never really stopped.

Dominick Filipponi told me he's always been fascinated by space, even as a kid, he didn't know exactly what he'd do there, he just knew he wanted to be part of it.

School was more difficult for him though, he's always learned better by putting his hands on something and figuring out how it worked.

That instinct eventually led him into diesel mechanics, working on trucks with his uncle starting at 14, and he's been doing it for almost 20 years since.

But the space part never went away.

Dominick started building ORW, short for Orbital Reflector Web, his own concept for redirecting sunlight from orbit, for power and other uses too, including lunar lighting applications he's exploring now.

That question sent him teaching himself optics, orbital mechanics, and physics completely from scratch, learning exactly what he needs, exactly when the problem demands it.

He was honest that the hardest part is figuring out what he doesn't know yet.

Dominick told me about running into a physics concept called étendue mid-project, essentially the limit on how much you can concentrate sunlight down using optics, there's a real physical boundary to how tightly you can focus it, no matter how much you try to squeeze the design down.

At one point, he genuinely thought he'd mathematically broken his entire concept, only to later realize he'd been wrong about why he thought he was "wrong."

Dominick shared something that genuinely moved me: he once commented on a NASA post admitting he wished he'd taken school more seriously as a kid.

A former NASA systems engineering supervisor replied, telling him not to write himself off, that his mechanical background had real applications, and simply said, "Go for it."

A few days later, Dominick saw a NASA opening and applied, something he says he never would've done before that comment.

We talked about how similar our journeys have felt, both of us convincing ourselves as kids that dreaming about space wasn't "realistic," only to find our way back to it as adults.

Dominick told me he doesn't know exactly where ORW ends, whether it becomes something real, whether the math eventually breaks it, or whether it leads him into aerospace through a completely different door.

But he's not stopping now!

Very grateful for Dominick Filipponi sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:87,images:["src/photos/stories/9-29-2026-dominick-filipponi-0.png"]},{date:"10/1/2026",name:"jerry zhu",body:`Continuing to tell these stories, one at a time. This one starts with 50 hackathons, and 20 wins.

Jerry Zhu told me winning hackathons came down to going in with a real idea already in mind, knowing what he's building before he even walked in, and understanding what the judges genuinely care about, whether that's sustainability, accessibility, or technical depth, to shape how he pitches a project.

He was honest about juggling an overwhelming number of commitments at once, sleeping at odd hours, missing meetings because his alarms didn't go off.

He's built an elaborate personal system to manage it all, calendar-linked alarms set, just to remember to follow up with people.

Jerry shared something I needed to hear about starting content creation, now that I'm 80+ days in.

He told me it "isn't for the weak," and how he's built real thick skin over time, hundreds of people who may dislike his content exist alongside thousands who genuinely enjoy it, and he's made peace with the fact that you can't have one without the other.

It was definitely something I needed to hear, especially since I've experienced some initial pushback firsthand, and Jerry's advice motivated me to keep going despite it!

What stood out most to me was his perspective on mentorship.

Coming from an environment where being mentored could sometimes be seen as a weakness, he's since realized mentorship worked for him when it came from people who genuinely understood his specific field and struggles.

He was also honest about something deeper: if you can find real happiness before chasing success, hold onto that.

It's been quite the journey, but I've found so much joy in hearing people's stories and the passion behind what they build!

Very grateful for Jerry sharing his story with me, and for every person who's shown me the same thing: you just have to ask!


P.S. I met Jerry through the Lightreel AI Fellowship, a great platform for anyone interested in creating content! A few weeks ago, we also found out we're both part of the second Intern Insider cohort, which is awesome for anyone looking into internships!`,order:88,images:["src/photos/stories/9-30-2026-jerry-zhu-0.jpg"]},{date:"10/2/2026",name:"nicholas low",body:`Continuing to tell these stories, one at a time. This one starts with elementary school videos that never went anywhere, and a creator who kept coming back to content anyway.

Nicholas Low (Nick for short!), now Creative Director & Growth at Intern Insider, told me he made goofy YouTube videos with friends back in elementary school!

Even though nothing ever came of them, he loved making them.

In high school he moved to TikTok, jumping on trends and comedy skits, and a few actually went viral, though he never saw it as anything more than fun.

He stopped posting entirely after high school when he went into the military, picked it back up a year in out of boredom, and noticed Singapore didn't have many big creators at the time.

He grew to 20,000 followers on TikTok within a year, still not thinking of it as a real path.

When Nick started at The University of British Columbia in Vancouver, he stopped again, even deleting Instagram off his phone entirely.

But the more he heard people talk about creators, the more he thought to himself it genuinely couldn't be that difficult.

In his third year, he started posting again, mostly just to prove to himself that he could!

That round actually took off, landing well in the comedy and student trends niche around UBC and Vancouver.

That visibility is what led Intern Insider's co-founder and then-Chief Marketing Officer (CMO), Kevin Hu, to reach out to him directly.

He worked part time making content through his final year, graduated this past May, and was offered a full time role doing social media and growth!

What stuck with me most was his advice on still continuing to explore.

Nick shared with me the belief that you could actually have more choice than you think, fit, culture, and the people you work with all matter, and it could be worth thinking about!

He also reminded me that you cannot control everything outside your own power, but if you keep putting yourself in positions where you can succeed, things tend to work out better than you originally imagined.

Very grateful for Nicholas Low sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,order:89,images:["src/photos/stories/10-1-2026-nicholas-low-0.jpg"]},{date:"10/3/2026",name:"dimas aryo",body:`Continuing to tell these stories, one at a time. This one starts with a musical he produced in high school!

Dimas Aryo told me he's always loved hosting events, back in high school, he put together everything from a musical to a full concert.

When he got to New York University, he wanted that same energy, and found it in PERMIAS New York City, the Indonesian student association, becoming Events Director during his sophomore year.

His approach was intentional: he believes events don't need to be overly formal to work, casual dinners, picnics, museum trips, and career-focused programming across common paths for Indonesian students (finance, consulting, design, tech, public sector) all matter just as much as big productions.

His real thesis: the people inside a community have to genuinely connect with each other first, that energy is what pulls people from outside in.

He shared the full story behind how he landed in GTM (go-to-market) work.

He started as a hospitality student, drawn to the space partly because Jakarta's VC scene has been shifting away from traditional startups toward hospitality investing.

But at NYU, his interest expanded toward startups more broadly, wanting to understand emerging tech and industries firsthand.

He landed his first internship after he DMed an Indonesian founder, landing the job after getting interviewed twice.

He spent six months learning tools like Clay and building outbound systems from scratch.

That connection led to his next opportunity, a summer internship doing outbound GTM work from zero leads, eventually scaling the lead pool to 17,000 contacts.

The work eventually balooned to many other things, such as internal tooling and automations.

This past summer, he cold-messaged a founder he'd previously worked with, landing an internship at a hospitality startup building hyper-personalized restaurant experiences, bringing his story full circle back to where he started.

He shared something genuinely useful about LinkedIn too: he sees it as fundamentally two-sided!

It brings inbound interest to you, while making your outbound outreach land better, since people you message have often already seen your posts and built some familiarity before you ever reach out.

It's been an incredible experiencing that myself ever since beginning on this platform!

He's now early into building something new during NY Startup Week, working with a small team to curate focused gatherings so founders and builders don't get lost in a sea of overlapping events!

Very grateful for Dimas Aryo sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:90,images:["src/photos/stories/10-2-2026-dimas-aryo-0.jpg","src/photos/stories/10-2-2026-dimas-aryo-1.jpg"]},{date:"10/5/2026",name:"abdulsaboor shaikh",body:`Continuing to tell these stories, one at a time. This one starts with gratitude journaling and a reminder that success looks different for everyone.

Abdulsaboor Shaikh told me he was born in Dallas and grew up in Houston, studying MIS initially because it felt like the popular, tech-adjacent choice for him!

We met through the Lightreel AI fellowship, an awesome platform for anyone looking into content creation!

Abdulsaboor didn't break into product management right away.

His first internship was as a business systems analyst, where his mentor happened to be a product manager, and he learned the role simply by shadowing her.

He was candid that he found genuine enjoyment in the process itself of cold outreach, coffee chats, and learning from as many people as he could.

Abdulsaboor called it almost like leveling up in a game!

But after reflecting and spending more time with his family post-grad, he realized everyone's definition of success is different, and that you have to find your own.

He shared two things that help him stay grounded: exercise, which he treats as an awesome form of grounding, and journaling, something he started two years ago that gives him real mental clarity!

What stuck with me most was his practice of gratitude.

Growing up as the child of immigrant parents without everything handed to him, he reminds himself daily how fortunate he is, even in small moments, and tries to let hard things become a source of light rather than something that breaks him down.

Very grateful for Abdulsaboor Shaikh sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:91,images:["src/photos/stories/10-3-2026-abdulsaboor-shaikh-0.jpg"]},{date:"10/6/2026",name:"duy nguyen",body:`Continuing to tell these stories, one at a time. This one starts with a handmade notebook!

Duy Nguyen told me that when he was 12, back in middle school, he ran a tiny business selling handmade notebooks to his friends, and kept one for himself to write down the thoughts tangled up in his head.

That habit of putting things on paper gave him a kind of mental clarity he still comes back to.

Duy left Vietnam at 14 for a boarding school in the US, one of the most diverse communities he has ever been part of.

He told me he went from being extremely extroverted to someone who chooses his conversations carefully, and that being between cultures is still something he is learning to let soak in.

He never planned to go into venture!

Duy started college in supply chain, but a slow-paced internship made him realize he wanted a faster environment where each person mattered more.

He built two startups in college, including a Reddit, Inc. and Twitter style platform for campus communities.

When his cofounders left, he was the nontechnical one, so he taught himself to code, which eventually led him to doorians lab, where he now works as a CTO for early stage founders.

Today, Duy is a Venture Fellow at Punch Capital, backing immigrant and international founders.

He told me it feels like a full circle moment, since two years ago he was the one reaching out to investors for advice.

He came to Michigan State University on a scholarship, and he knows firsthand how much harder raising money can feel when you're at a nontarget school.

His advice for building: keep doing side projects and talk to as many people as possible!

One can take off when you least expect it!

And on venture, Duy believes you should choose what's right for you.

Plenty of great companies, like Mailchimp, were built without raising venture funding at all.

Very grateful for Duy Nguyen sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,order:92,images:["src/photos/stories/10-4-2026-duy-nguyen-0.png"]},{date:"10/7/2026",name:"arthur park",body:`Continuing to tell these stories, one at a time. This one starts with hundreds of cold DMs sent just to validate an idea!

Arthur Park told me he started off building startups, and needed a way to actually market himself and get an online presence.

He began posting random videos on Instagram, eventually moving into talking-head content.

Through that, he made friends who were already running UGC (User Generated Content) campaigns, and that connection sparked the idea for what became Scouty.

Arthur had a hunch there was a real problem worth solving, so he set out to validate it the hard way.

He cold-DMed every person managing growth he could find on LinkedIn, sat through over 100 calls, and found a consistent pattern.

Many had difficulties sourcing creators, ghosting was rampant, the whole process was just a hassle.

So instead of asking companies to keep sourcing creators themselves, he built Scouty to source for them directly.

Arthur shared something genuinely useful about content strategy: it's easy to fall into the trap of finding one format that works, then burning out on it while feeling stuck.

His advice to me was to keep a consistent posting cadence, but give yourself room to experiment within it, treat some posts as an ongoing series, and use other days to test something completely new!

He also talked about the tradeoff between posting broad, widely engaging content versus more targeted, niche content.

Early on, Arthur's posts were untargeted and got him the bulk of his following.

Over time, he shifted toward speaking directly to the specific community he wanted to reach, engineers and growth people in the UGC and startup space, even if that meant lower total engagement!

What stuck with me most was Arthur's honesty about the early days.

His first post was something silly, and he was genuinely nervous making his accounts public.

People may call what you're doing cringe, he said, but you just have to keep going, because the entire point of starting is that you don't know where it leads until you actually begin!

It was really comforting to hear, especially since I've experienced some of that similar judgment firsthand, and his perspective motivated me to keep going despite it.

Very grateful for Arthur Park sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:93,images:["src/photos/stories/10-5-2026-arthur-park-0.jpg","src/photos/stories/10-5-2026-arthur-park-1.jpg"]},{date:"10/8/2026",name:"Jose Cruz-Lopez",body:`Continuing to tell these stories, one at a time. This one starts with 27 interviews before a single line of code!

Jose Cruz-Lopez grew up in Huachinango, Puebla, and his journey carried him through Miami to Boston, where he is a QuestBridge Scholar studying Computer Engineering at Boston University.

Today, he builds at the intersection of design, engineering, and growth.

Jose told me the two most overlooked things at hackathons are user research and staying visible to the judges.

At one, he interviewed 27 people before building anything, then opened his pitch with a short video of those interviews.

Anyone can build a solution, he said, but will people actually use it?

He also talks to judges before, during, and after building, so by the time judging starts, they already know his project and his journey.

He applies the same build in public mindset everywhere.

One day, he was scrolling through scholarships he did not want to apply to, so he built his own, the Cruzing Forward Scholarship, using his design skills and a bit of his own money.

After a handful of posts, it reached $1,000!

Jose would rather have 20 people who genuinely know him than a big audience of strangers, and he tries to reply to everyone.

His first step into venture was simply talking to people, starting with Vincent Todd.

One conversation led to another, and he has now talked with around 20 VCs.

Jose said that if someone offers an intro, he lets them offer it, and shows genuine interest in what they do.

I also appreciated how Jose thinks about commitments.

Before taking on a role, he asks himself whether he would be successful in it today and whether he truly wants to commit.

Every day, Jose asks himself whether he woke up happy.

If not, he asks what happened and adjusts. It was a great reminder for me too!

Very grateful for Jose Cruz-Lopez sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,order:94,images:["src/photos/stories/10-8-2026-jose-cruz-lopez-0.jpg"]},{date:"10/9/2026",name:"tracy huang",body:`Continuing to tell these stories, one at a time. This one starts with 300 coffee chats!

Tracy Huang told me that during banking and consulting recruiting she did around 300 coffee chats, and along with having the conversations, there was way more to it.

It was hours of finding people, their emails, and their LinkedIn profiles.

She figured there had to be an easier way, so she pitched a platform in her senior year entrepreneurship class that matches you with people to coffee chat based on your resume and the roles you want.

That became Interlink IQ!

Her goal is to hand manual work off to AI, and Tracy is now building it, working through the data and tech as she goes.

She started in finance and eventually ended up in banking at Silicon Valley Bank.

Talking to founders there, she said, it felt like a light switched on: this is where she wanted to be.

She got into venture in an unusual way, too.

Tracy wanted to raise money for her own startup, so she joined VC Labs, an intense accelerator with about 10 hours of classes every week, and that's where she shifted from "founder mode" into "VC mode."

Tracy shared with me that your surface area of luck increases by doing things you're passionate about and telling other people about them.

She also gave me advice that there's not always a direct line from effort to outcome, but if you stay consistent, it tends to work out!

Very grateful for Tracy Huang sharing her story with me, and for every person who's shown me the same thing: you just have to ask!`,order:95,images:["src/photos/stories/10-9-2026-tracy-huang-0.png"]},{date:"10/10/2026",name:"radin shahravan",body:`Continuing to tell these stories, one at a time. This one starts with a LinkedIn post that made the average doomscroller stop!

Radin Shahravan entered a content competition a while back, posted, and took 3rd place!

The monetary prize was $100, but the real prize was the messages that kept coming afterward about a fellowship.

A week later, he was in it, making content for a startup in San Francisco with fellows all over the world.

I met Radin through the Intern Insider fellowship, an incredible platform for anyone looking into recruiting!

We both shared that we kept running into the same circle of creators, and starting to see familiar faces.

He even shared with me that he's been following Intern Insider since before the cohorts even existed!

Radin's path wasn’t a straight line.

He’s from Iran, moved to Canada in high school, started in Niagara College and now lives in Toronto.

He did a 3 year advanced diploma while working in IT and selling for a telecom company, spending about 50 hours a week between school and work.

Radin liked sales, but he always wanted to make content.

When his contract was close to ending, he started looking at growth roles, and one simple post opened the door!

My favorite thing he said: the circle you build matters more than the content alone.

Very grateful for Radin Shahravan sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,order:96,images:["src/photos/stories/10-10-2026-radin-shahravan-0.png"]},{date:"10/11/2026",name:"solo",body:`I used to write stories under the covers at midnight. Today's day 100 of writing them in public!

As a kid, I read all kinds of stories: novels, fantasy, romance, anything I could get my hands on, and then I started writing my own, in 99-cent notebooks and in Microsoft Word at night.

At some point I stopped, and this series is how I found my way back!

It all started on July 3rd.

I was eating at a panini shop with Bhaumi Nadella in our study abroad program at the University of Oxford, and I joked that I was so happy I could post on LinkedIn.

She said, “wait, you should actually do it.”

On the bus to our side quest in London the next day, on July 4th, I couldn’t stop thinking about it.

I had so many mentors I wanted to thank, people who helped me when it felt like my life was changing so much, and I wanted to give them their flowers in public.

Then we all went to a photo booth together, and I knew I had to do it!

I drafted the post on my phone, and I was so scared I was even shaking.

I asked Shreeya Jajoo, who I had only known for a few days at the time, if I could hold her hand, counted myself down out loud, and hit post.

I haven’t stopped since!

I started by publicly thanking the mentors who shaped me, and sharing how we met and pieces of their stories.

Then I started reaching out to people I didn’t know, just to hear theirs.

The world got small, fast.

I’ve had the opportunity to call with people across the US, including Georgia, Massachusetts, New York, Maryland, California, and Washington, and around the world, from the UK, Croatia, and Germany to India, Australia, Argentina, Canada, the Netherlands, and the Dominican Republic!

One thing that made reaching out so much easier: after a coffee chat, Jacob Frausto gifted me LinkedIn Premium. His kindness lowered the barrier to messaging people and jumpstarted everything. Thank you, Jacob!

Here's what 100 days taught me:

1) A cold DM costs nothing. The worst case is silence, which I got plenty of times. The best case was an incredible talk that changed my view of the world!

2) Everyone has a story worth telling. Most people don’t realize it until someone asks!

3) Start before you feel ready. I was shaking when I hit post on day 1. Now, posting at 12:12pm every day is a grounding part of my routine!

Thank you to every person who entrusted me with their story.

You answered a message from a stranger, gave me your time, and let me share a piece of your life.

I am endlessly grateful.

If you have a story, I would love to hear it. You just have to ask!


P.S. If you have an idea you're working on, or even if you're just curious about the world too, I'd love to hear your story! DM me :) And if you're building something, add it to Pitcher!

https://lnkd.in/eX6CN7fC`,order:97,images:["src/photos/stories/10-11-2026-solo-1.jpg","src/photos/stories/10-11-2026-solo-2.png","src/photos/stories/10-11-2026-solo-0.jpg"]},{date:"10/12/2026",name:"eesha banala",body:`Continuing to tell these stories, one at a time. This one starts with a career event she almost skipped!

Eesha Banala and I met in the ModernGuild Consulting Accelerator this July, and we finally caught up a few months later!

She’s a senior at North Carolina State University, and she told me she interviewed for consulting as a sophomore and found that case interviews were the most fun part of recruiting.

Her take on casing: it’s just talking! If you can carry the story and understand the client's core goal, you're most of the way there.

Market sizing is still the case type she’s working the most on, but Eesha likes to learn from the challenges and lean into the ones she enjoys, like market entry!

Eesha also reminded me to remember what got you into the room.

When she felt imposter syndrome next to accomplished students, she told herself that if you are already in the conversation, you’re already worthy!

Eesha met her mentor at an NC State career event she almost didn’t attend.

She stopped at a bank's table, got talking with someone who was enthusiastic about his work, and messaged him on LinkedIn and email.

He replied two weeks later, and Eesha still talks to him today.

He works in investment banking and she pivoted into consulting, but he is the first person she calls, when she needs perspective.

Eesha said a mentor can be a friend, a parent, or someone you met, and a hype person gives you an objective eye on your own journey!

She also shared a lesson on drive.

Eesha said her hunger to win pushed her through recruiting, but sometimes it needed some restraint.

We both reflected on our shared experiences of always wanting to be in action, but learning how to enjoy the process.

Her last reminder: nobody thinks about you as much as you think about yourself. Keep going!

Very grateful for Eesha Banala sharing her story with me, and for every person who has shown me the same thing: you just have to ask!`,order:98,images:["src/photos/stories/10-12-2026-eesha-banala-0.jpg"]},{date:"10/13/2026",name:"Sofiat Olanrewaju",body:`Continuing to tell these stories, one at a time. This one starts with five hours of videos on debugging code!

Sofiat Olanrewaju told me she was working on Project ROUTE, a research project on young students perspectives on careers in transport.

She interviewed people, turned each interview into a transcript, and put the answers in Excel.

She came up with an algorithm that uses AI to score responses from 0 to 1, but when the AI was not giving her what she wanted, she had to debug the code herself.

So she watched five hours of debugging videos while interviewing people at the same time, and it all came together in a presentation!

Sofiat has loved engineering since she was 10 years old.

Her dad worked around cars, and conversations she had growing up gave her access to that world!

Sofiat loves complex problems, and whenever she finds something out, her first question is how to make it work.

She just finished her A levels in July, taking five instead of the usual three, while also studying for the SAT and sending out university applications: 20 to the US, 5 to the UK, and 6 or 7 to other countries in Europe.

Plans changed, and now Sofiat is doing a construction apprenticeship with PlanBEE (Built Environment Education)!

She works part of the week and studies part of it, PlanBEE, her direct employer, sponsors her education so she has no college fees, and she gets paid while she learns.

After she finishes college, she will have the option of either securing a level 6 apprenticeship or going to university to get her degree!

She also shared how she gets through all of it: discipline.

Sofiat is a calendar organized person, and when her day is all green, she says it brings her a lot of joy!

She makes sure that anything she takes on is something she is willing to learn from, because when you want to learn, even the days you wake up on the wrong side of the bed work out.

Sofiat is also posting on LinkedIn every day this year, with a goal of 365 days, which she started before January 1st!

She loves LinkedIn and personal branding, and we're both proud of how far she's come!

Very grateful for Sofiat Olanrewaju sharing her story with me, and for every person who has shown me the same thing: you just have to ask!`,order:99,images:["src/photos/stories/10-13-2026-sofiat-olanrewaju-0.jpg"]},{date:"10/14/2026",name:"Tony Erwin, MSF CBDA",body:`Continuing to tell these stories, one at a time. This one starts with a submarine!

Tony Erwin, MSF CBDA told our Principles of FinTech class at The University of Georgia that he grew up in Georgia and served in the US Navy as an electronics technician on submarines!

After that, he became a networking consultant and worked in Silicon Valley networking technology, selling to clients like NASA - National Aeronautics and Space Administration, universities, and major phone carriers.

He then started SkyRocket Financial Solutions, first in commercial lending, and later pivoted into blockchain, web3, and digital assets consulting for banks, fintechs, and family offices.

Today, Tony is an ambassador for the Global Blockchain Business Council (GBBC), a consultant with the The Fintech Accord and Stablecoin Institute, and Treasurer of the World Luxury Chamber of Commerce.

He told me the common thread for him is how money moves and works, and even what we consider money is undergoing a major change and is changing everything else with it.

One thing I appreciated was how he explained where finance is heading.

Banks and big institutions like J.P. Morgan and SWIFT are moving onto the blockchain, so money can move in real time, 24/7, on rails that are programmable.

Rails are simply the systems money moves on, like ACH!

He also talked about tokenization, turning things like real estate, invoices, and private credit into digital tokens so they're faster and easier to trade.

Then he got to the part that fascinated me most: AI agents paying each other.

If an AI agent wants information from a company, it needs a way to pay.

Tony said agents are starting to pay with stablecoins, digital dollars that live on the blockchain, using protocols like x402, and there are standards for agents to show the world they can be trusted.

Google and Stripe are working on this too, and it's cheaper and faster!

Tony was candid that his path had many pivots.

He told us his trust that things were going to work out guided him a lot.

Some transitions were very difficult, but he trusted that he was doing the right thing for the right reasons, and he knew this technology would change the world and he had to be part of it!

Very grateful for Tony Erwin, MSF CBDA sharing his story, and for every person who has shown me the same thing: you just have to ask!`,order:100,images:["src/photos/stories/10-14-2026-tony-erwin-msf-cbda-0.jpg"]},{date:"10/15/2026",name:"ashlynn wong",body:`Continuing to tell these stories, one at a time. This one starts with throwing a stick at a wall to see if it sticks!

That's how Ashlynn Wong described her content strategy to me!

If something sticks, she keeps doing it.

If it doesn't, she changes the approach and tries again.

Ashlynn's been making User Generated Content (UGC) for about three years!

She started with everyday products, then moved into tech UGC, and her first client, found through an agency with an alien companion app.

After that, it snowballed.

She put her email in her bio on every account, and once word got around, brands started finding her.

She also schedules about 10 posts ahead so she's never scrambling, which I thought was pretty smart!

Ashlynn moved from Singapore to Australia when she was 9 and now studies commerce and finance there.

Three days a week, she drives 30 minutes to campus!

Ashlynn told me that hands-on work grew her faster, and she likes learning how to manage people, so she's now doing coaching and campaign work too.

Since Ashlynn knows many Australian creators, she helps brands that want to reach that market.

One app she's working with has Australia as its second biggest user base, even though not many were marketing there.

Her accounts have gotten suspended before, and her 21st one got shut down.

Now she has a virtual assistant (thanks to Marko Ciganović, who I interviewed a while back!) and she pivots on the spot.

Same stick, different wall!

When I asked Ashlynn about opinions she received at the beginning, she told me she has a goal and other people's takes shouldn't stop anyone from going after theirs.

She plans to continue doing tech UGC while moving into more management.

Very grateful to Ashlynn Wong for sharing her story with me, and to everyone who keeps showing me the same thing: you just have to ask!`,order:101,images:["src/photos/stories/10-15-2026-ashlynn-wong-1.jpg","src/photos/stories/10-15-2026-ashlynn-wong-0.jpg"]},{date:"10/16/2026",name:"tami maeda",body:`Continuing to tell these mentorship stories, one at a time. This one starts with five years of hearing "no," and finally getting a yes!

I met Tami in May!

She was our team's Project Manager during the Summer 2026 Mission Concept Academy for the L'SPACE Program.

Tami told me she'd been applying to the program for five or six years before finally getting accepted, and even then, she never expected to be selected as Project Manager.

Coming in, she'd spent years working across businesses, startups, and nonprofits with all kinds of cross-functional teams, and that background made stepping into the PM role far easier than she expected.

She was honest that the beginning was difficult.

Leading a team of about 20 people, was something she'd never done at that scale before.

Tami shared that she's naturally introverted, and staying energized through the process was a real challenge.

But she credited our team's Chief Scientist, Grace Williams, for making her job significantly easier once things started to gel after the first few weeks.

Tami also spoke with gratitude about our team mentor, Matthew Foster, describing him as the thread that kept the whole team bound together through the program.

She shared something thoughtful about leadership itself: she never really saw herself as a leader, she just kept getting picked for those roles, and eventually realized it's because she's genuinely a listener.

Tami told me people tend to trust her because she asks questions instead of questioning their judgment, something she considers one of the most underrated leadership skills.
I felt that firsthand too, I trusted her because she asked questions instead of judging me, even as I was learning so much for the first time!

Tami also opened up about carrying impostor syndrome for a long time, but reframed it in a way that stuck with me: recognize the skills you already have, especially ones that don't get rewarded or named outright.

She spoke about growing up between cultures, an immigrant mother and a father from a very different background, and how that shaped her sense of not quite fitting fully into either space growing up. That experience, she said, is part of what eventually pulled her toward earth and space science in the first place.

Tami's thought stuck with me the most: sometimes we're so focused on being over-prepared and having every answer before starting something that we miss out on the growth that only comes from real uncertainty.

She said if she'd waited until she felt fully ready, she never would have taken this role at all, and it ended up changing her life in ways she never expected.

I felt that with L'SPACE too; I wasn't fully ready and went in without much technical skill at all, but I learned so much along the way.

Very grateful for Tami sharing her story with me, and for every person who's shown me the same thing: you just have to ask!


P.S. Had to reupload for some tweaks! Thanks for understanding :))`,order:97.5,note:"reposted - original post date uncertain",images:["src/photos/stories/10-7-2026-got-reuploaded-tami-maeda-0.jpg","src/photos/stories/10-7-2026-got-reuploaded-tami-maeda-1.jpg"]},{date:"10/16/2026",name:"jasmina holikov",body:`Continuing to tell these stories, one at a time. This one starts with a toy doctor kit filled with water!

When Jasmina Holikov was little, her parents got her play medical kits with tiny shots.

She filled them with water and gave her stuffed animals their medicine!

For years, she was sure she'd be a doctor.

Then she joined mock trial in high school and fell in love with law. 

She started out as a shy freshman playing a random witness.

By senior year she was team president and a varsity attorney.

Mock trial is where she learned to put herself out there!

Jasmina started thinking about becoming a medical malpractice lawyer.

When she looked into the day to day, she saw that the work happens mostly outside the courtroom, in research, writing, and prep.

That's a big part of what makes lawyers good at what they do!

Jasmina knew she wanted to be hands on with people every day, and she likes things changing up, so she went back to medicine.

She spent a whole week researching TED talks, videos, a doctor, walking through every field.

One stood out the most to her: anesthesiology. She wants to be with a patient before and after surgery, she loves taking care of kids! Pediatric anesthesia checked all of it.

Now she's studying human biology at community college and minoring in sociology to keep her love of law alive.

Jasmina's been taking college classes in person since high school, and she told me it was one of the most fulfilling parts of her life. She shared that she loved learning from people older than her!

Very grateful for Jasmina Holikov sharing her story with me, and to everyone who keeps showing me the same thing: you just have to ask!`,order:102,images:["src/photos/stories/10-16-2026-jasmina-holikov-0.jpg"]},{date:"10/17/2026",name:"jeff aquino",body:`Continuing to tell these stories, one at a time. This one starts with painting outside the lines.

Jeff Aquino told me that in kindergarten, his teacher noticed he painted outside the lines and said he wouldn't make it as an artist.

Jeff went toward numbers instead, studied engineering, and spent years working his way from IT support to operations to business intelligence.

But he always put on noise cancelling headphones while he worked, and music was always there.

Then a hard stretch with his health made him realize he needed a more active life.

A friend who was studying sound therapy told Jeff he had the ear for a DJ.

Jeff started by helping DJs with computers and equipment, then began learning to DJ himself.

He told me he doesn't need to be the greatest DJ, he just wanted a life with more movement and more time for his family.

A big part of Jeff's story is his great grandfather, who lived to almost 100 and saw World War II and the moon landing!

Jeff went home to the Dominican Republic to spend time with him in his last years.

His great grandfather did not like flying, but he took his first plane ride to be at Jeff's college graduation.

Jeff told me he carries him in his heart in everything he does.

Now Jeff is studying to become a certified DJ from the Dominican Republic, with plans to move back to Panama.

He wants to build a DJ brand and use his systems engineering background to create structure for festivals, private parties, weddings, and quinceañeras.

He spent three months going to a nightlife street every night with a notebook, tracking how the music and crowd worked, then turned it into routines on his computer.

Jeff shared that he thinks a lot about the value of the human touch. In a world full of cell phones, he said, crying and laughing are what remind us we are human.

He also reminded me that he is trying to be a better person every day, and to create something he is proud of.

Very grateful for Jeff Aquino sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,order:103,images:["src/photos/stories/10-17-2026-jeff-aquino-0.jpg"]},{date:"10/18/2026",name:"yusuf mohamoud",body:`Continuing to tell these stories, one at a time. This one starts with someone across the world who began his 100 day LinkedIn challenge two days after I began mine!

Yusuf Mohamoud is a second year student in Greater London, and I had the honor of being the first person in the US he ever had a coffee chat with!

He started posting on July 6th, I started on July 4th, and we're both second years with Substack pages. The similarities were awesome to talk about!

Yusuf told me he usually writes his post the night before and schedules it for 9am. 

If he has nothing to say, he turns the day into a lesson: what did I do today that can become a post? 

Once, that was a debate about bringing iced coffee into interviews. 

Sometimes a news article or a big debate on the internet is worth talking about for him!

He shared how the challenge felt in phases. 

The first 10 days were an adrenaline rush, days 20 to 30 were the hardest mentally, and by day 50 he shifted to a more value oriented approach. 

He also just finished a 100 day one minute speaking challenge on Instagram, @yusuf.is.loading! 

I was amazed because I just had completed the same challenge at the same time as he did on the same platform, and it helped with my own speech articulation!

For the first 20 days he planned his answers in bullet points, and now he does it off the cuff. 

He pinned his day 1 and day 100 videos so he can see how far he has come, and loves asking people for feedback!

Yusuf said one of the best things about LinkedIn is the community. 

Beyond the "I'm excited to announce" posts, there are people sharing what they are really going through. 

He's even been recognized from writing on LinkedIn at a train station!

Yusuf also shared that he went through a hard stretch where he felt his spark slipping away. 

Posting and the communication challenge helped him get it back, and he told me he is more inspired than ever.

Yusuf is now exploring writing on Substack, documenting culture, technology, and life, which he writes at 1am on Sunday nights!

Very grateful for Yusuf Mohamoud sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-18-2026-yusuf-mohamoud-0.jpg","src/photos/stories/10-18-2026-yusuf-mohamoud-1.jpg"]},{date:"10/19/2026",name:"roshan ramani",body:`Continuing to tell these stories, one at a time. This one starts with 16-hour days at a screen, and learning to find balance!

Roshan Ramani started learning to code in his first year of college through online courses!

He picked computer science partly because 80% of the people around him in India were heading into big tech or AI, and honestly he didn't know what he wanted to do. 

Then he found web development, pivoted into AI automation and agents, and now builds full stack web apps, AI agents, and mobile apps with those tools. 

He found textpip, the ambassador program we're both part of, through Evan Kong's posts. 

Now he uses it 3 to 4 times a day for his habits: hitting the gym 6 times a week, building a new product, and prepping for an English exam for a master's in Australia. 

I’ve used it to keep up with playing piano again! 

He told me more than half the ambassadors are early stage founders, and the small habits add up.

The part that stuck with me was balance. In his second and third year, he spent up to 16 hours a day on a screen. 

He realized he needed to reconsider his priorities, so now he keeps it to 8 or 9, goes to the gym, and even walks barefoot on grass! 

He shared that going to the gym gives him mental clarity.

Roshan also told me to meet as many people as you can on LinkedIn, since your network is a big part of university and those people could even help you later!

Very grateful for Roshan Ramani for sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-19-2026-roshan-ramani-0.jpg"]},{date:"10/20/2026",name:"teagan yuen",body:`Continuing to tell these stories, one at a time. This one starts with a quiet decision to just start posting!

Teagan Yuen told me she started making content about a year ago with a simple mindset: nothing to lose.

She told me once you post that first video, there's no barrier to posting the next one, and consistency's really the entire game!

Teagan’s path into startups started even earlier, at a high school incubator in San Francisco where she became obsessed with building.

She told me she used to write in her journal that she had to be in SF, and she eventually found her way back for good.

Today, Teagan is founding growth at BOND (YC X25), an AI Chief of Staff that gives executives clear visibility into what their teams are prioritizing.

Their bigger vision is helping companies run leaner, with far fewer layers of middle management.

Both of her SF roles found her through content. 

Teagan said so many of her opportunities were inbound from what she has posted on LinkedIn, X, and Instagram.

She also shared a lesson that stuck with me. When she first joined BOND, Teagan chased virality on every platform, until she realized it can be a vanity metric that doesn't necessarily convert to revenue. 

Now she thinks of growth less as a content game and more as a messaging and people game: 

1) Who exactly is your customer?
2) What do they care about?
3) How do you show up in front of them again and again?

Teagan also talked about her team, a small group she eats lunch and dinner with.

She also described BOND's CEO as someone she trusts completely, which is how she believes everyone should feel about the person leading their company!

Very grateful for Teagan Yuen sharing her story with me, and for every person who has shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-20-2026-teagan-yuen-0.jpg"]},{date:"10/21/2026",name:"lukas gross",body:`Continuing to tell these stories, one at a time. This one starts with an accent that became his advantage!

Lukas Gross found user-generated content (UGC) while looking for side hustles on a work and travel trip to Japan with friends. 

Now, he's the founder of LuCreates and works in startup growth in Berlin!

German is his first language and English his second. 

When he started making UGC, he spent his first few months doing skits because they let him focus on being creative.

Lukas' first brand video reached about 9.2 million views. 

Brands started reaching out, and he went on to work as a campaign manager, creator coach, and Head of UGC.

Along the way, he's generated over 12 million views for brands across different niches and languages.

That experience led to LuCreates, his international UGC agency. 

The idea behind it is simple: brands want to reach people in different markets, so they need creators who understand those languages and cultures. 

Creating outside the US could be an advantage!

But getting comfortable being seen online was its own process. 

Lukas described himself as more introverted, and working with brands helped him share more of himself. 

Posting when you know friends and family will see it is a big step!

Today, Lukas works full time in growth at a startup in Berlin, focusing on German-speaking markets, and still makes UGC on the side. 

He's putting more focus on startup growth than the agency right now as he works toward becoming a well-rounded international marketer!

His takeaway: what makes you different can become your edge. It depends on how you position it.

Very grateful to Lukas Gross for sharing his story with me, and for everyone who's shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-21-2026-lukas-gross-0.jpg"]},{date:"10/22/2026",name:"nathan stanford",body:`Continuing to tell these stories, one at a time. This one starts with a hackathon where nobody on the team knew how to code.

Nathan Stanford had never written a line of code when he started his engineering degree at Monash University in Australia. 

During his second week of classes, a friend asked if he wanted to do a hackathon. 

Nathan's answer was basically "what even is that?" 

He said yes anyway!

Neither of them knew what they were doing: they got a prompt, built something, and Nathan went home asking himself "okay, what else can I make?"

Then, another friend asked if he wanted to build a startup. 

His idea came from riding his motorbike! 

He could never hear the person right next to him, so he opened Claude and told it: 

1) don't write the code
2) teach me what I need to know 
3) tell me where to learn it 

He turned that into his own roadmap for learning to code!

Four months ago, he hadn't even downloaded LinkedIn. 

Then he met Evan Kong after his first hackathon and asked him what he'd tell last year's version of himself. 

Evan told him, "just post on LinkedIn." 

Nathan did, and the opportunities kept coming, including an invite to the Antler Residency. 

Evan then messaged him asking if he wanted to be an ambassador for textpip, an accountability agent that lives in your iMessage! 

When Evan started a 30-day posting challenge, Nathan was scared people would judge him. 

But his friends showed up for him and the days kept stacking!

Very grateful to Nathan Stanford for sharing his story with me, and to everyone who keeps showing me the same thing: you just have to ask!`,images:["src/photos/stories/10-22-2026-nathan-stanford-0.jpg"]},{date:"10/23/2026",name:"enrique yervez",body:`Continuing to tell these stories, one at a time. This one starts with a hotel manager who learned to run ads because a client asked him to!

Enrique Yervez told me he has always been a nerd who loved to study, and he learned to build websites at 15!

He worked as a hotel manager at one of the most important hotels on Venezuela's Caribbean coast, until the country's economic collapse. 

Hyperinflation made life incredibly difficult, and Enrique eventually moved to Argentina, where he lives today.

Enrique started working remotely as a virtual assistant for a branding company in California, and he realized was earning much more than he did as a hotel manager. 

He went on to do e-commerce customer service, then one owner asked him for help running ads. 

Enrique had no idea how, so he learned!

He fell in love with marketing, from Meta ads to email marketing, Google ads, and lead magnets.

That experience led him to co-found iWorker, a social enterprise that connects talented remote workers, like virtual assistants, designers, developers, and marketers, with entrepreneurs and agencies in the US, Canada, and Europe. 

Enrique saw it from the worker's side first, so he knows how many skilled people there are in countries in crisis, and how many companies want to scale without building a full in-house team. 

It’s a win-win!

Later, he missed marketing, so he also founded Lumini & Co., a boutique agency.

These days, Enrique is building his personal brand, and he creates videos in Spanish!

He told me that for a long time he got stuck trying to find one niche. 

However, Enrique is a multi-passionate person who wants to talk about life, philosophy, running, and the books he reads, and he decided that he doesn't have to put walls around himself!

Sometimes you might not know what you’re doing, but you get there anyway!

Enrique is a father of two, and he shared a book he's reading by Mark Wolynn, "Este dolor no es mío," known in English as "It Didn't Start with You." 

The book explores how family trauma can pass through generations.

It helped him understand why parents work so hard for their children to experience the things they could not.

Very grateful to Enrique Yervez for sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-23-2026-enrique-yervez-0.jpg"]},{date:"10/24/2026",name:"umar faheem",body:`Continuing to tell these stories, one at a time. This one starts with a question I'm still thinking about: what exactly do you want your life to represent?

When Umar Faheem and I talked about curating content, he helped me reflect on what I care about most: the message I want to get out to people, and documenting my life along the way!

He told me he lives in go-to-market (how a company gets its product in front of the people who need it), automation, and content, and what he really wants is to make life easier so people have more time to be together!

Umar has been editing videos since 5th grade, back when he wanted to be a Minecraft YouTuber, drawing inspiration from DanTDM and StopMotion. 

Now, that skill shows up in his growth work!

He loves the craft of editing, and he believes the editing you do yourself carries its own flair.

Umar started in accounting and then found growth and operations, which turned out to be the perfect mix of his interests in tech, business, and creativity.

One thing that stuck with me the most: his best performing LinkedIn post was about a rejection. 

Umar used to feel like he needed an accomplishment every time he posted, until he realized being honest is what connects with people. 

Recruiters even started reaching out to him after that!

Umar also calls journaling one of his top five habits. 

It lets him see how his thinking has grown, and he keeps it separate from his work goals.

His advice to me was to find the intersection between what the world needs and what you love (the Japanese framework, Ikigai), put your energy into real projects, and have faith in yourself because you know yourself best!

Very grateful for Umar Faheem sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-24-2026-umar-faheem-0.jpg"]},{date:"10/25/2026",name:"kyan navaja",body:`Continuing to tell these stories, one at a time. This one starts with a KFC and two words: why not?

Kyan Navaja is currently in his second year studying economics and finance at Queen Mary University of London. 

He found the ambassador program and LinkedIn posting challenge Evan Kong curated while scrolling this platform!

At first, he thought being an econ and finance student in London, he maybe didn’t necessarily need to do it.

Then, sitting at KFC with his family, a little bored, he asked himself: why not?

He told me he can always think of 100 reasons not to do something, but the 101st reason to do it is simply, "why not?"

That mindset shows up everywhere for him!

Kyan started playing piano at 12, got pulled into the choir as a soprano, and has been reading stoicism since he was 14.

One thing he said stuck with me: creating is essential, especially because an idea can disappear quickly if you don’t turn it into something!

We both shared that when we weren’t creating, life often felt like being stuck underwater, and creating brought clarity.

Kyan also talked about vulnerability as a strength.

At an insight day at a firm, he had a real, honest conversation with a stranger in the lunch line who turned out to be a manager!

Kyan told me real relationships start with being willing to be honest about what you want or when you need help.

We shared a question we both ask ourselves: would I rather live with the pain of discipline, or the pain of regret?

For me, that showed up in writing this series. I was scared of getting started, and doing it every day was something I had to adjust to alongside my studies and other commitments as a full time student. It's been super fulfilling to me!

We also shared a line: after every prolonged period of hardship and uncertainty, there is a period of quantum leaps across your life. The only requirement is that you don't give up on yourself.

There's a lot happening in the background while I write this series, including rejections and ups and downs, but I'm treating everything as a learning experience and reframing it that way. 

That mindset has been important for me!

Very grateful for Kyan Navaja sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-25-2026-kyan-navaja-0.jpg"]},{date:"10/26/2026",name:"david derama",body:`Continuing to tell these stories, one at a time. This one starts with my first conversation with someone in Finland!

David Derama told me he was born in Manila and moved to Finland when he was 7!

In 13 years, he’s only been back to the Philippines once.

He told me his path into tech started with a laptop his family got him as a kid. 

David played games, started coding, and got hooked, and watching The Social Network pushed him even further. 

In Finland, he picked computer science right away in high school and studied it for 3 years.

He grew up on American movies, from 70s New York mob films to rom-coms.

The coffee chats we both do are something he wishes he had more of.

David started putting himself out on LinkedIn and started doing coffee chats! 

One of the people he talked to saw it, reached out, and now he’s set to volunteer next month on the marketing team for a startup and tech event, called Slush, in Helsinki, Finland, where startups gather to network and look for their next big thing. 

He’s still figuring out whether IT is the long term path or whether something like growth and marketing is. 

We both swapped stories about pivoting between fields and how it’s been to still be figuring it out!

His takeaway for anyone struggling: you’re not alone, and reach out to people!

Very grateful for David Derama sharing his story with me, and for every person who has shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-26-2026-david-derama-0.jpg"]},{date:"10/27/2026",name:"adeetya jain",body:`Continuing to tell these stories, one at a time. This one starts with selling clay lamps at festival stalls in Mumbai at 9 to analyzing 50+ startups for a top VC firm at 14!

Adeetya Jain spent much of his childhood exploring entrepreneurship and technology, from research and tech internships to building in edtech.

At 14, he was scouted as a tech investment analyst for Lightbox, one of the prominent VC firms in the Global South, where he analyzed unit economics and metrics across 50+ startups.

He’d been preparing for college applications since 5th grade. 

But when health challenges made studying in the US unfeasible, he had to take a sharp pivot.

His mom had always encouraged him to explore every curiosity, so he channeled that energy into building!

One project was particularly close to his heart.

Having worn glasses his whole life, Adeetya started collecting unused pairs with two friends. 

That small initiative grew into SpecsAid.

They partnered with hospitals and local organizations, mobilized 50 volunteers across 70 buildings in Mumbai, and spent a year refurbishing glasses and organizing eye tests. 

They set out to collect 5,000 pairs and reached their goal!

He also built Ecobyte Kids, a financial literacy platform for children aged 8 to 15, breaking down equity and economics into bite-sized newsletters and other content.

Eventually, his interests shifted toward AI. 

He started exploring transformer-based models, experimenting with BERT and LSTM architectures, and became fascinated by how rapidly AI was advancing.

That curiosity eventually led to Soverin Gaming!

Today, Adeetya is building Soverin Gaming at the intersection of AI and gaming, exploring how AI could change the way games are experienced.

He’s building in public while keeping Soverin’s specific approach under wraps for now.

He’s also brought together an early team spanning Georgia Institute of Technology, University of Illinois Urbana-Champaign, UC San Diego, Indian Institute of Technology, Bombay, and Indian Institute of Technology, Kharagpur. 

He credits Jay, Puranjay, and Soham as early founding engineers helping turn his vision into tangible products.

After pitching at a South Park Commons mixer in Mumbai, Adeetya flew to Bangalore for interviews and was accepted as the youngest South Park Commons Member Resident.

Two pieces of wisdom from our conversation really stuck with me!

1) Curiosity can be your biggest strength. Adeetya reads everything from ancient empire histories to cinema biographies and writes fiction. His belief is that nonlinear inputs help build nonlinear problem solvers!

2) You don’t need a starting point handed to you; you can cultivate one yourself. Adeetya spoke about the importance of putting your work out there, taking initiative, and executing rather than waiting for the perfect opportunity.

Very grateful to Adeetya Jain for sharing his story with me, and to every person who’s shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-27-2026-adeetya-jain-0.jpg"]}],nm=[{date:"7/22/2026",link:"https://x.com/ellielwang/status/2080082913396220236",text:"Trying something new everyday! Walked to this random meadow and pet a lot of horses and got to watch the sunset! So happy to be able to see such beautiful things :))"},{date:"7/21/2026",link:"https://x.com/ellielwang/status/2079658303513079817",text:"Trying something new everyday! Went to a museum today and tried out an old computer, pretty cool!"},{date:"7/20/2026",link:"https://x.com/ellielwang/status/2079337670677807237",text:"Trying something new everyday! Ate this yummy dessert, it was like some type of cornbread with sherbet ice cream. Very delicious, would eat again!! Very grateful to be able to eat yummy food!!"},{date:"7/19/2026",link:"https://x.com/ellielwang/status/2078875844517245054",text:"Trying something new everyday! Had this caramel ice cream for the first time and it was so good!! It was around 4am and we were at the airport so it was refreshing"},{date:"7/18/2026",link:"https://x.com/ellielwang/status/2078463148483383489",text:"Trying something new everyday! This morning tried to eat breakfast without looking at my phone!! Very yummy, I definitely took my time to savor the food 🙂‍↕️"},{date:"7/18/2026",link:"https://x.com/ellielwang/status/2078462085059469320",text:"Trying something new everyday! Oops forgot to post yesterday but I tried out this mango pineapple juice!!"}],Ca=[{slug:"fintech",label:"fintech & finance"},{slug:"creators",label:"creators & ugc"},{slug:"startups",label:"startups & founders"},{slug:"health",label:"health & medicine"},{slug:"tech",label:"tech & ai"},{slug:"space",label:"space & science"},{slug:"policy",label:"policy & advocacy"}],om={"10/27/2026|adeetya jain":["fintech","startups","tech"],"10/26/2026|david derama":["tech"],"8/28/2026|alyssa lee":["fintech"],"9/10/2026|ashutos jain":["fintech"],"9/14/2026|jessica jones":["fintech"],"9/21/2026|joe radest":["fintech","startups"],"9/29/2026|jonathan pertchik":["fintech"],"10/9/2026|tracy huang":["fintech","startups"],"10/14/2026|Tony Erwin, MSF CBDA":["fintech"],"7/25/2026|ben aratame":["creators"],"8/2/2026|jay yang":["creators"],"8/30/2026|kolton rice":["creators"],"8/31/2026|vivian lin":["creators"],"9/1/2026|subal kumar":["creators","startups"],"9/3/2026|yash alluri":["creators","startups"],"9/4/2026|alice lan":["creators"],"9/9/2026|zexi li":["creators"],"9/12/2026|elisha kim":["creators"],"9/13/2026|marko ciganovic":["creators"],"9/24/2026|jibran khalil":["creators"],"9/25/2026|eric d'amico":["creators"],"10/1/2026|jerry zhu":["creators","tech"],"10/2/2026|nicholas low":["creators"],"10/7/2026|arthur park":["creators","startups"],"10/10/2026|radin shahravan":["creators"],"10/15/2026|ashlynn wong":["creators"],"10/20/2026|teagan yuen":["creators"],"10/21/2026|lukas gross":["creators","startups"],"10/24/2026|umar faheem":["creators"],"7/27/2026|jeff nguyen":["startups"],"8/11/2026|naman mehrotra":["startups"],"8/12/2026|matthew huang":["startups"],"8/19/2026|zawadi pilipili":["startups"],"8/22/2026|subal kumar":["startups"],"9/7/2026|evan kong":["startups","tech"],"9/20/2026|kennard liong":["startups"],"9/22/2026|joe nedza":["startups"],"9/23/2026|chloe hughes":["startups"],"9/27/2026|fredrick okwudili":["startups","tech"],"10/3/2026|dimas aryo":["startups"],"10/6/2026|duy nguyen":["startups"],"10/8/2026|Jose Cruz-Lopez":["startups","tech"],"7/7/2026|Ngozi F. Anachebe, PharmD, MD, FACOG":["health"],"8/10/2026|anandhi bharadwaj":["tech"],"9/17/2026|shivansh rastogi":["tech"],"9/19/2026|phil-ho combatir":["tech","space"],"10/19/2026|roshan ramani":["tech"],"10/22/2026|nathan stanford":["tech"],"8/4/2026|ava martinez":["space"],"8/8/2026|joaquin santander":["space"],"8/9/2026|amanda schultz":["space"],"8/13/2026|matthew foster":["space"],"8/25/2026|macy felton":["space"],"9/11/2026|rachel paiz":["space"],"9/26/2026|ezekiel wood & lemma post":["space"],"9/28/2026|manoj d":["space"],"9/30/2026|dominick filipponi":["space"],"10/16/2026|tami maeda":["space"],"7/8/2026|girish menon":["policy"],"8/20/2026|patrick pickren":["policy"],"8/23/2026|anshi purohit":["policy"]};function am(e){return om[e.date+"|"+e.name]||[]}function ra(e,t=170){const o=(e.body.split(/\n{2,}/).map(s=>s.replace(/Continuing to tell these[^.!?]*[.!?]\s*/i,"").trim()).filter(s=>s.length>30)[0]||"").replace(/\s+/g," ");if(o.length<=t)return o;const a=o.slice(0,t);return a.slice(0,a.lastIndexOf(" "))+"..."}const sm="/assets/10-1-2026-nicholas-low-0-CD1DBmsq.jpg",im="/assets/10-10-2026-radin-shahravan-0-DnDMN2xu.png",rm="/assets/10-11-2026-solo-0-DVqNpudn.jpg",lm="/assets/10-11-2026-solo-1-XZi_j7Rc.jpg",hm="/assets/10-11-2026-solo-2-nL9YB8VW.png",um="/assets/10-12-2026-eesha-banala-0-BMVnreDt.jpg",dm="/assets/10-13-2026-sofiat-olanrewaju-0-Dd2h1BJ1.jpg",cm="/assets/10-14-2026-tony-erwin-msf-cbda-0-DS5tNdwS.jpg",mm="/assets/10-15-2026-ashlynn-wong-0-CJhalIdP.jpg",gm="/assets/10-15-2026-ashlynn-wong-1-BuvE6HU-.jpg",pm="/assets/10-16-2026-jasmina-holikov-0-DWHKmR5a.jpg",fm="/assets/10-17-2026-jeff-aquino-0-Cjcg3Oxj.jpg",ym="/assets/10-18-2026-yusuf-mohamoud-0-uvOUeYLj.jpg",wm="/assets/10-18-2026-yusuf-mohamoud-1-CoGptN0c.jpg",vm="/assets/10-19-2026-roshan-ramani-0-DfsL-XB6.jpg",km="/assets/10-2-2026-dimas-aryo-0-CQQQ2tuH.jpg",bm="/assets/10-2-2026-dimas-aryo-1-DWPmob9M.jpg",jm="/assets/10-20-2026-teagan-yuen-0-NiqPCL6M.jpg",Im="/assets/10-3-2026-abdulsaboor-shaikh-0-C5NW2gb7.jpg",xm="/assets/10-4-2026-duy-nguyen-0-DZQ0W0rp.png",Sm="/assets/10-5-2026-arthur-park-0-CeGdkKc4.jpg",Cm="/assets/10-5-2026-arthur-park-1-BUfOy6zW.jpg",Tm="/assets/10-7-2026-got-reuploaded-tami-maeda-0-BOteWkgT.jpg",Am="/assets/10-7-2026-got-reuploaded-tami-maeda-1-B2ogJ3T2.jpg",Em="/assets/10-8-2026-jose-cruz-lopez-0-Bd27h6lM.jpg",zm="/assets/10-9-2026-tracy-huang-0-5agkSO8Y.png",Nm="/assets/7-10-2026-ellie-fleming-0-CuIFzVw7.png",Pm="/assets/7-10-2026-ellie-fleming-1-PE-VqkTf.jpg",Mm="/assets/7-11-2026-robert-anthony-0-Co3uovtx.png",Hm="/assets/7-11-2026-robert-anthony-1-DiY8AkOO.png",Lm="/assets/7-12-2026-kush-santosh-0-D6RFc5En.jpg",Dm="/assets/7-12-2026-kush-santosh-1-DGUw8drC.jpg",Rm="/assets/7-13-2026-alex-zou-0-TDxT09jA.jpg",Fm="/assets/7-13-2026-alex-zou-1-i1vNkPnf.jpg",Um="/assets/7-14-2026-catherine-ling-0-ijAMrV4Y.png",_m="/assets/7-14-2026-catherine-ling-1-DxZNl15w.jpg",Bm="/assets/7-15-2026-michael-mcginn-0-7rkpAyrJ.png",Om="/assets/7-15-2026-michael-mcginn-1-DyMgbW3e.jpg",Vm="/assets/7-16-2026-pranav-rohit-0-Cgarufpy.jpg",Gm="/assets/7-16-2026-pranav-rohit-1-BxFy3cWN.jpg",Wm="/assets/7-16-2026-pranav-rohit-2-CZJS9PA3.jpg",Jm="/assets/7-17-2026-thya-gutta-0-BaJZfO-j.jpg",qm="/assets/7-17-2026-thya-gutta-1-C_wBw0jg.jpg",Ym="/assets/7-17-2026-thya-gutta-2-D0mg5_1u.png",Km="/assets/7-18-2026-andrew-mathis-0-BFj2N1Bh.png",$m="/assets/7-18-2026-andrew-mathis-1-BgJzPii3.png",Qm="/assets/7-19-2026-katherine-perry-0-pqh2QDzq.jpg",Xm="/assets/7-19-2026-katherine-perry-1-D4QXkq5i.jpg",Zm="/assets/7-19-2026-katherine-perry-2-BXC8SatL.jpg",eg="/assets/7-19-2026-katherine-perry-3-Cj0bNSzv.png",tg="/assets/7-20-2026-vincent-nguyen-0-BXA71HnD.jpg",ng="/assets/7-20-2026-vincent-nguyen-1-DXqH_SpK.jpg",og="/assets/7-20-2026-vincent-nguyen-2-D3-k0tJs.jpg",ag="/assets/7-20-2026-vincent-nguyen-3-YrrODtv9.jpg",sg="/assets/7-21-2026-marqee-ivory-0-BGRmAK-R.jpg",ig="/assets/7-21-2026-marqee-ivory-1-B5CIKNL9.png",rg="/assets/7-21-2026-marqee-ivory-2-BU11JZ52.jpg",lg="/assets/7-22-2026-ashlee-azizz-0-Cv9jAHKl.jpg",hg="/assets/7-22-2026-ashlee-azizz-1-BXyo6w3O.png",ug="/assets/7-23-2026-kennith-lee-0-BBT3WACL.jpg",dg="/assets/7-23-2026-kennith-lee-1-dkC-bo93.png",cg="/assets/7-23-2026-kennith-lee-2-BEY5n4GM.png",mg="/assets/7-24-2026-bria-smith-0-Cu_QpDKn.png",gg="/assets/7-24-2026-bria-smith-1-MOFTbYdc.jpg",pg="/assets/7-25-2026-ben-aratame-0-CPTLLXWY.jpg",fg="/assets/7-25-2026-ben-aratame-1-yANnDyt5.jpg",yg="/assets/7-26-2026-karishma-pandit-0-DgSWrLFe.jpg",wg="/assets/7-26-2026-karishma-pandit-1-WAUodC76.jpg",vg="/assets/7-27-2026-jeff-nguyen-0-D4XrO2nL.jpg",kg="/assets/7-27-2026-jeff-nguyen-1-B44-zHd0.jpg",bg="/assets/7-27-2026-jeff-nguyen-2-BqyYsVJH.png",jg="/assets/7-28-2026-dr-christina-serrano-0-B_rNADOg.jpg",Ig="/assets/7-28-2026-dr-christina-serrano-1-CGul1l73.png",xg="/assets/7-29-2026-jacob-frausto-0-D0wrr01W.jpg",Sg="/assets/7-29-2026-jacob-frausto-1-DcqbDGPG.jpg",Cg="/assets/7-30-2026-connie-ma-0-BeK0vrOB.jpg",Tg="/assets/7-30-2026-connie-ma-1-FQh-6SQV.png",Ag="/assets/7-31-2026-dr-irakli-shalikashvili-0-2qvgsLHd.png",Eg="/assets/7-31-2026-dr-irakli-shalikashvili-1-B2cifdRi.png",zg="/assets/7-4-2026-elizabeth-wang-0-BmnNQIU_.jpg",Ng="/assets/7-5-2026-ammar-razzak-0-CWk-AHbF.jpg",Pg="/assets/7-5-2026-ammar-razzak-1-DYo6gZUG.jpg",Mg="/assets/7-5-2026-ammar-razzak-2-DeByYFuK.jpg",Hg="/assets/7-6-2026-omeir-honda-0-h6HzZg55.jpg",Lg="/assets/7-6-2026-omeir-honda-1-DHI-Wfom.jpg",Dg="/assets/7-6-2026-omeir-honda-2-CLk0FGF-.jpg",Rg="/assets/7-6-2026-omeir-honda-3-2QURMC2N.jpg",Fg="/assets/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-0-DCayntki.jpg",Ug="/assets/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-1-BgE0p93A.jpg",_g="/assets/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-2-mw38XcUM.jpg",Bg="/assets/7-8-2026-girish-menon-0-BE5TthnX.jpg",Og="/assets/7-8-2026-girish-menon-1-eYLyqMl_.jpg",Vg="/assets/7-9-2026-will-huber-0-B96p2xpy.jpg",Gg="/assets/7-9-2026-will-huber-1-KtzYT8Ur.jpg",Wg="/assets/7-9-2026-will-huber-2-DB_a_QWi.jpg",Jg="/assets/8-1-2026-nithya-vembu-0-DtVdNj-P.jpg",qg="/assets/8-1-2026-nithya-vembu-1-CSw5Pqbk.jpg",Yg="/assets/8-1-2026-nithya-vembu-2-DQOq07Gr.jpg",Kg="/assets/8-1-2026-nithya-vembu-3-BgZshRKI.png",$g="/assets/8-10-2026-anandhi-bharadwaj-0-Ca-zy35r.jpg",Qg="/assets/8-10-2026-anandhi-bharadwaj-1-CpF1n2bO.jpg",Xg="/assets/8-10-2026-anandhi-bharadwaj-2-B8LKd9TO.jpg",Zg="/assets/8-11-2026-naman-mehrotra-0-PtJEj1Fh.jpg",ep="/assets/8-11-2026-naman-mehrotra-1-BA94qRpA.jpg",tp="/assets/8-12-2026-matthew-huang-0-C5keRHsA.jpg",np="/assets/8-12-2026-matthew-huang-1-BbtVHuGy.jpg",op="/assets/8-13-2026-matthew-foster-0-BqtFJtLA.jpg",ap="/assets/8-13-2026-matthew-foster-1-Dqlr1Zld.jpg",sp="/assets/8-13-2026-matthew-foster-2-_pTUMIJX.png",ip="/assets/8-14-2026-akosua-opoku-0-6DUwR2kd.png",rp="/assets/8-14-2026-akosua-opoku-1-B0e8D-10.png",lp="/assets/8-15-2026-sai-shankar-sadhu-0-BXAvXVhW.jpg",hp="/assets/8-15-2026-sai-shankar-sadhu-1-DFqLz1N6.jpg",up="/assets/8-15-2026-sai-shankar-sadhu-2-hQwndGn9.jpg",dp="/assets/8-16-2026-keira-smyth-gravina-0-M-YdXjZS.png",cp="/assets/8-16-2026-keira-smyth-gravina-1-Gno1_0_V.png",mp="/assets/8-17-2026-syruis-zhang-0-HkGVBE8W.jpg",gp="/assets/8-17-2026-syruis-zhang-1-CgoKFK3Y.png",pp="/assets/8-18-2026-miffy-wang-0-BObuBV-E.png",fp="/assets/8-18-2026-miffy-wang-1-DsNJpTAL.jpg",yp="/assets/8-19-2026-zawadi-pilipili-0-Uxm7Gepe.png",wp="/assets/8-19-2026-zawadi-pilipili-1-BDa_s6p5.png",vp="/assets/8-2-2026-jay-yang-0-CD9Uye7X.png",kp="/assets/8-2-2026-jay-yang-1-D-19gew3.png",bp="/assets/8-20-2026-patrick-pickren-0-emkzyTW6.jpg",jp="/assets/8-20-2026-patrick-pickren-1-qVOYgx7D.png",Ip="/assets/8-20-2026-patrick-pickren-2-DCsJz2QI.jpg",xp="/assets/8-20-2026-patrick-pickren-3-Bmjnxx54.png",Sp="/assets/8-21-2026-solo-0-C18X7v1i.jpg",Cp="/assets/8-21-2026-solo-1-DnsY_L97.jpg",Tp="/assets/8-22-2026-subal-kumar-0-BcHqMlR-.jpg",Ap="/assets/8-22-2026-subal-kumar-1-9WgURV0f.jpg",Ep="/assets/8-23-2026-anshi-purohit-0-B2QTV2vV.jpg",zp="/assets/8-23-2026-anshi-purohit-1-BgzfPkDm.jpg",Np="/assets/8-23-2026-anshi-purohit-2-B_Ub1b0U.png",Pp="/assets/8-23-2026-anshi-purohit-3-CPHEITGE.jpg",Mp="/assets/8-23-2026-anshi-purohit-4-D8qmU1SH.jpg",Hp="/assets/8-24-2026-macy-felton-0-DQMYye5u.png",Lp="/assets/8-25-2026-francine-tran-0-DpazEOmC.jpg",Dp="/assets/8-25-2026-francine-tran-1-Bz55h5hw.jpg",Rp="/assets/8-26-2026-rohan-mistry-0-79PL6ntJ.jpg",Fp="/assets/8-26-2026-rohan-mistry-1-DwsUg3nS.jpg",Up="/assets/8-27-2026-alyssa-lee-0-CjuoDUHU.jpg",_p="/assets/8-27-2026-alyssa-lee-1-Bt1z2xvn.jpg",Bp="/assets/8-28-2026-lalo-de-armas-0-D12XwszQ.jpg",Op="/assets/8-28-2026-lalo-de-armas-1-CeYGVt5E.jpg",Vp="/assets/8-29-2026-kolton-rice-0-BAwtkRdb.jpg",Gp="/assets/8-29-2026-kolton-rice-1-Rg-U7sIa.jpg",Wp="/assets/8-3-2026-gergana-droumeva-0-CK6gQKY6.jpg",Jp="/assets/8-3-2026-gergana-droumeva-1-BzDdcBmu.jpg",qp="/assets/8-30-2026-vivian-lin-0-CznxQC41.jpg",Yp="/assets/8-30-2026-vivian-lin-1-CPe236Sr.jpg",Kp="/assets/8-31-2026-subal-kumar-0-DNEYEazP.jpg",$p="/assets/8-31-2026-subal-kumar-1-Druv_oJD.jpg",Qp="/assets/8-4-2026-ava-martinez-0-DdjCdYmr.png",Xp="/assets/8-4-2026-ava-martinez-1-BPkKHRCv.png",Zp="/assets/8-5-2026-dennis-chen-0-BjEAXWtY.jpg",ef="/assets/8-5-2026-dennis-chen-1-DX1Q7Pi3.png",tf="/assets/8-6-2026-eshani-ram-0-DwTMWpoa.png",nf="/assets/8-6-2026-eshani-ram-1-DSqBPi_7.png",of="/assets/8-7-2026-gabriela-aguilar-castillo-0-BFkljd9T.png",af="/assets/8-7-2026-gabriela-aguilar-castillo-1-Cwi0LiL0.png",sf="/assets/8-8-2026-joaquin-santander-0-HkgDkMds.png",rf="/assets/8-8-2026-joaquin-santander-1-D6X0t-m2.jpg",lf="/assets/8-9-2026-amanda-schultz-0-N1vm4cFs.png",hf="/assets/8-9-2026-amanda-schultz-1-C22oUTzC.png",uf="/assets/9-1-2026-jaron-tan-0-Bp1r8Bqw.jpg",df="/assets/9-10-2026-rachel-paiz-0-D-bQ4pSa.jpg",cf="/assets/9-10-2026-rachel-paiz-1-giTTPdL-.jpg",mf="/assets/9-11-2026-elisha-kim-0-zTMD8ia3.png",gf="/assets/9-12-2026-marko-ciganovic-0-iRFQmoqb.jpg",pf="/assets/9-13-2026-jessica-jones-0-DHpz3mcZ.jpg",ff="/assets/9-13-2026-jessica-jones-1-Da_53m72.jpg",yf="/assets/9-14-2026-akshat-kumar-0-B0z15UAF.jpg",wf="/assets/9-15-2026-ayanna-varma-0-oXP5lGZT.jpg",vf="/assets/9-16-2026-shivansh-rastogi-0-D3vX28iy.jpg",kf="/assets/9-17-2026-jillian-loux-0-mOxz5Mce.jpg",bf="/assets/9-17-2026-jillian-loux-1-Chy1Gc7B.jpg",jf="/assets/9-17-2026-jillian-loux-2-VNiMHI3k.jpg",If="/assets/9-18-2026-phil-ho-combatir-0-Dcluwvs7.png",xf="/assets/9-19-2026-kennard-liong-0-BkLsZgbB.png",Sf="/assets/9-2-2026-yash-alluri-0-BqaRBTGF.jpg",Cf="/assets/9-20-2026-joe-radest-0-TfuK9VJr.jpg",Tf="/assets/9-20-2026-joe-radest-1-DIh0C-L4.png",Af="/assets/9-21-2026-joe-nedza-0-CJa7lRBg.png",Ef="/assets/9-21-2026-joe-nedza-1-Lbg7DYog.png",zf="/assets/9-22-2026-chloe-hughes-0-ND60kedg.jpg",Nf="/assets/9-22-2026-chloe-hughes-1-CJblyJjH.jpg",Pf="/assets/9-23-2026-jibran-khalil-0-BgPOvHJH.jpg",Mf="/assets/9-24-2026-eric-d-amico-0-BLJ6pzez.jpg",Hf="/assets/9-24-2026-eric-d-amico-1-DfJnQ87F.jpg",Lf="/assets/9-24-2026-eric-d-amico-2-DepUQ2hv.jpg",Df="/assets/9-25-2026-ezekiel-wood-lemma-post-0-ItBruMBk.png",Rf="/assets/9-25-2026-ezekiel-wood-lemma-post-1-Clv4SPGi.png",Ff="/assets/9-25-2026-ezekiel-wood-lemma-post-2-CdJKFhGJ.jpg",Uf="/assets/9-25-2026-ezekiel-wood-lemma-post-3-Cuic11SY.jpg",_f="/assets/9-25-2026-ezekiel-wood-lemma-post-4-518Cvyra.png",Bf="/assets/9-25-2026-ezekiel-wood-lemma-post-5-DgdVDfdl.png",Of="/assets/9-25-2026-ezekiel-wood-lemma-post-6-BG17GmLC.png",Vf="/assets/9-26-2026-fredrick-okwudili-0-WmMmY5Wh.png",Gf="/assets/9-27-2026-manoj-d-0-CNG5XAEF.jpg",Wf="/assets/9-28-2026-jonathan-pertchik-0-dSMHsEGR.png",Jf="/assets/9-29-2026-dominick-filipponi-0-PIQysanZ.png",qf="/assets/9-3-2026-alice-lan-0-CIy56hQI.jpg",Yf="/assets/9-3-2026-alice-lan-1-BRil7TA1.jpg",Kf="/assets/9-3-2026-alice-lan-2-BwDRRq0P.jpg",$f="/assets/9-30-2026-jerry-zhu-0-DbMaS0pb.jpg",Qf="/assets/9-4-2026-anthony-wang-0-DpEbGUxO.jpg",Xf="/assets/9-4-2026-anthony-wang-1-C9Ho2ur8.jpg",Zf="/assets/9-5-2026-dior-muankaew-0-B327HGPl.jpg",ey="/assets/9-5-2026-dior-muankaew-1-Cr5FDVX6.jpg",ty="/assets/9-6-2026-evan-kong-0-DX4ltUe0.jpg",ny="/assets/9-6-2026-evan-kong-1-nbafxg2c.jpg",oy="/assets/9-7-2026-rui-maki-0-e-qyH5lj.jpg",ay="/assets/9-7-2026-rui-maki-1-BNgX2Ex0.jpg",sy="/assets/9-8-2026-zexi-li-0-CfWd0qdS.jpg",iy="/assets/9-8-2026-zexi-li-1-BnHvydiI.png",ry="/assets/9-8-2026-zexi-li-2-BS60PX5t.png",ly="/assets/9-8-2026-zexi-li-3-aOr7waNQ.png",hy="/assets/9-9-2026-ashutos-jain-0-zWk5UCtz.jpg",uy="/assets/9-9-2026-ashutos-jain-1-RLnYG7UU.jpg",dy="/assets/10-21-2026-lukas-gross-0-Bc6XYUW4.jpg",cy="/assets/10-22-2026-nathan-stanford-0-DDd7QixX.jpg",my="/assets/10-23-2026-enrique-yervez-0-BbPITUAh.jpg",gy="/assets/10-24-2026-umar-faheem-0-CXih-uPe.jpg",py="/assets/10-25-2026-kyan-navaja-0-CizR8kOa.jpg",fy="/assets/10-26-2026-david-derama-0-BAnQlAvA.jpg",yy="/assets/10-27-2026-adeetya-jain-0-Pa1q-sfT.jpg",wy="/assets/7-25-2026-ben-aratame-2-bk8jN4Of.jpg",vy="/assets/9-28-2026-jonathan-pertchik-1-DJCYcXC8.jpg",Vi={"src/photos/stories/10-1-2026-nicholas-low-0.jpg":sm,"src/photos/stories/10-10-2026-radin-shahravan-0.png":im,"src/photos/stories/10-11-2026-solo-0.jpg":rm,"src/photos/stories/10-11-2026-solo-1.jpg":lm,"src/photos/stories/10-11-2026-solo-2.png":hm,"src/photos/stories/10-12-2026-eesha-banala-0.jpg":um,"src/photos/stories/10-13-2026-sofiat-olanrewaju-0.jpg":dm,"src/photos/stories/10-14-2026-tony-erwin-msf-cbda-0.jpg":cm,"src/photos/stories/10-15-2026-ashlynn-wong-0.jpg":mm,"src/photos/stories/10-15-2026-ashlynn-wong-1.jpg":gm,"src/photos/stories/10-16-2026-jasmina-holikov-0.jpg":pm,"src/photos/stories/10-17-2026-jeff-aquino-0.jpg":fm,"src/photos/stories/10-18-2026-yusuf-mohamoud-0.jpg":ym,"src/photos/stories/10-18-2026-yusuf-mohamoud-1.jpg":wm,"src/photos/stories/10-19-2026-roshan-ramani-0.jpg":vm,"src/photos/stories/10-2-2026-dimas-aryo-0.jpg":km,"src/photos/stories/10-2-2026-dimas-aryo-1.jpg":bm,"src/photos/stories/10-20-2026-teagan-yuen-0.jpg":jm,"src/photos/stories/10-3-2026-abdulsaboor-shaikh-0.jpg":Im,"src/photos/stories/10-4-2026-duy-nguyen-0.png":xm,"src/photos/stories/10-5-2026-arthur-park-0.jpg":Sm,"src/photos/stories/10-5-2026-arthur-park-1.jpg":Cm,"src/photos/stories/10-7-2026-got-reuploaded-tami-maeda-0.jpg":Tm,"src/photos/stories/10-7-2026-got-reuploaded-tami-maeda-1.jpg":Am,"src/photos/stories/10-8-2026-jose-cruz-lopez-0.jpg":Em,"src/photos/stories/10-9-2026-tracy-huang-0.png":zm,"src/photos/stories/7-10-2026-ellie-fleming-0.png":Nm,"src/photos/stories/7-10-2026-ellie-fleming-1.jpg":Pm,"src/photos/stories/7-11-2026-robert-anthony-0.png":Mm,"src/photos/stories/7-11-2026-robert-anthony-1.png":Hm,"src/photos/stories/7-12-2026-kush-santosh-0.jpg":Lm,"src/photos/stories/7-12-2026-kush-santosh-1.jpg":Dm,"src/photos/stories/7-13-2026-alex-zou-0.jpg":Rm,"src/photos/stories/7-13-2026-alex-zou-1.jpg":Fm,"src/photos/stories/7-14-2026-catherine-ling-0.png":Um,"src/photos/stories/7-14-2026-catherine-ling-1.jpg":_m,"src/photos/stories/7-15-2026-michael-mcginn-0.png":Bm,"src/photos/stories/7-15-2026-michael-mcginn-1.jpg":Om,"src/photos/stories/7-16-2026-pranav-rohit-0.jpg":Vm,"src/photos/stories/7-16-2026-pranav-rohit-1.jpg":Gm,"src/photos/stories/7-16-2026-pranav-rohit-2.jpg":Wm,"src/photos/stories/7-17-2026-thya-gutta-0.jpg":Jm,"src/photos/stories/7-17-2026-thya-gutta-1.jpg":qm,"src/photos/stories/7-17-2026-thya-gutta-2.png":Ym,"src/photos/stories/7-18-2026-andrew-mathis-0.png":Km,"src/photos/stories/7-18-2026-andrew-mathis-1.png":$m,"src/photos/stories/7-19-2026-katherine-perry-0.jpg":Qm,"src/photos/stories/7-19-2026-katherine-perry-1.jpg":Xm,"src/photos/stories/7-19-2026-katherine-perry-2.jpg":Zm,"src/photos/stories/7-19-2026-katherine-perry-3.png":eg,"src/photos/stories/7-20-2026-vincent-nguyen-0.jpg":tg,"src/photos/stories/7-20-2026-vincent-nguyen-1.jpg":ng,"src/photos/stories/7-20-2026-vincent-nguyen-2.jpg":og,"src/photos/stories/7-20-2026-vincent-nguyen-3.jpg":ag,"src/photos/stories/7-21-2026-marqee-ivory-0.jpg":sg,"src/photos/stories/7-21-2026-marqee-ivory-1.png":ig,"src/photos/stories/7-21-2026-marqee-ivory-2.jpg":rg,"src/photos/stories/7-22-2026-ashlee-azizz-0.jpg":lg,"src/photos/stories/7-22-2026-ashlee-azizz-1.png":hg,"src/photos/stories/7-23-2026-kennith-lee-0.jpg":ug,"src/photos/stories/7-23-2026-kennith-lee-1.png":dg,"src/photos/stories/7-23-2026-kennith-lee-2.png":cg,"src/photos/stories/7-24-2026-bria-smith-0.png":mg,"src/photos/stories/7-24-2026-bria-smith-1.jpg":gg,"src/photos/stories/7-25-2026-ben-aratame-0.jpg":pg,"src/photos/stories/7-25-2026-ben-aratame-1.jpg":fg,"src/photos/stories/7-26-2026-karishma-pandit-0.jpg":yg,"src/photos/stories/7-26-2026-karishma-pandit-1.jpg":wg,"src/photos/stories/7-27-2026-jeff-nguyen-0.jpg":vg,"src/photos/stories/7-27-2026-jeff-nguyen-1.jpg":kg,"src/photos/stories/7-27-2026-jeff-nguyen-2.png":bg,"src/photos/stories/7-28-2026-dr-christina-serrano-0.jpg":jg,"src/photos/stories/7-28-2026-dr-christina-serrano-1.png":Ig,"src/photos/stories/7-29-2026-jacob-frausto-0.jpg":xg,"src/photos/stories/7-29-2026-jacob-frausto-1.jpg":Sg,"src/photos/stories/7-30-2026-connie-ma-0.jpg":Cg,"src/photos/stories/7-30-2026-connie-ma-1.png":Tg,"src/photos/stories/7-31-2026-dr-irakli-shalikashvili-0.png":Ag,"src/photos/stories/7-31-2026-dr-irakli-shalikashvili-1.png":Eg,"src/photos/stories/7-4-2026-elizabeth-wang-0.jpg":zg,"src/photos/stories/7-5-2026-ammar-razzak-0.jpg":Ng,"src/photos/stories/7-5-2026-ammar-razzak-1.jpg":Pg,"src/photos/stories/7-5-2026-ammar-razzak-2.jpg":Mg,"src/photos/stories/7-6-2026-omeir-honda-0.jpg":Hg,"src/photos/stories/7-6-2026-omeir-honda-1.jpg":Lg,"src/photos/stories/7-6-2026-omeir-honda-2.jpg":Dg,"src/photos/stories/7-6-2026-omeir-honda-3.jpg":Rg,"src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-0.jpg":Fg,"src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-1.jpg":Ug,"src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-2.jpg":_g,"src/photos/stories/7-8-2026-girish-menon-0.jpg":Bg,"src/photos/stories/7-8-2026-girish-menon-1.jpg":Og,"src/photos/stories/7-9-2026-will-huber-0.jpg":Vg,"src/photos/stories/7-9-2026-will-huber-1.jpg":Gg,"src/photos/stories/7-9-2026-will-huber-2.jpg":Wg,"src/photos/stories/8-1-2026-nithya-vembu-0.jpg":Jg,"src/photos/stories/8-1-2026-nithya-vembu-1.jpg":qg,"src/photos/stories/8-1-2026-nithya-vembu-2.jpg":Yg,"src/photos/stories/8-1-2026-nithya-vembu-3.png":Kg,"src/photos/stories/8-10-2026-anandhi-bharadwaj-0.jpg":$g,"src/photos/stories/8-10-2026-anandhi-bharadwaj-1.jpg":Qg,"src/photos/stories/8-10-2026-anandhi-bharadwaj-2.jpg":Xg,"src/photos/stories/8-11-2026-naman-mehrotra-0.jpg":Zg,"src/photos/stories/8-11-2026-naman-mehrotra-1.jpg":ep,"src/photos/stories/8-12-2026-matthew-huang-0.jpg":tp,"src/photos/stories/8-12-2026-matthew-huang-1.jpg":np,"src/photos/stories/8-13-2026-matthew-foster-0.jpg":op,"src/photos/stories/8-13-2026-matthew-foster-1.jpg":ap,"src/photos/stories/8-13-2026-matthew-foster-2.png":sp,"src/photos/stories/8-14-2026-akosua-opoku-0.png":ip,"src/photos/stories/8-14-2026-akosua-opoku-1.png":rp,"src/photos/stories/8-15-2026-sai-shankar-sadhu-0.jpg":lp,"src/photos/stories/8-15-2026-sai-shankar-sadhu-1.jpg":hp,"src/photos/stories/8-15-2026-sai-shankar-sadhu-2.jpg":up,"src/photos/stories/8-16-2026-keira-smyth-gravina-0.png":dp,"src/photos/stories/8-16-2026-keira-smyth-gravina-1.png":cp,"src/photos/stories/8-17-2026-syruis-zhang-0.jpg":mp,"src/photos/stories/8-17-2026-syruis-zhang-1.png":gp,"src/photos/stories/8-18-2026-miffy-wang-0.png":pp,"src/photos/stories/8-18-2026-miffy-wang-1.jpg":fp,"src/photos/stories/8-19-2026-zawadi-pilipili-0.png":yp,"src/photos/stories/8-19-2026-zawadi-pilipili-1.png":wp,"src/photos/stories/8-2-2026-jay-yang-0.png":vp,"src/photos/stories/8-2-2026-jay-yang-1.png":kp,"src/photos/stories/8-20-2026-patrick-pickren-0.jpg":bp,"src/photos/stories/8-20-2026-patrick-pickren-1.png":jp,"src/photos/stories/8-20-2026-patrick-pickren-2.jpg":Ip,"src/photos/stories/8-20-2026-patrick-pickren-3.png":xp,"src/photos/stories/8-21-2026-solo-0.jpg":Sp,"src/photos/stories/8-21-2026-solo-1.jpg":Cp,"src/photos/stories/8-22-2026-subal-kumar-0.jpg":Tp,"src/photos/stories/8-22-2026-subal-kumar-1.jpg":Ap,"src/photos/stories/8-23-2026-anshi-purohit-0.jpg":Ep,"src/photos/stories/8-23-2026-anshi-purohit-1.jpg":zp,"src/photos/stories/8-23-2026-anshi-purohit-2.png":Np,"src/photos/stories/8-23-2026-anshi-purohit-3.jpg":Pp,"src/photos/stories/8-23-2026-anshi-purohit-4.jpg":Mp,"src/photos/stories/8-24-2026-macy-felton-0.png":Hp,"src/photos/stories/8-25-2026-francine-tran-0.jpg":Lp,"src/photos/stories/8-25-2026-francine-tran-1.jpg":Dp,"src/photos/stories/8-26-2026-rohan-mistry-0.jpg":Rp,"src/photos/stories/8-26-2026-rohan-mistry-1.jpg":Fp,"src/photos/stories/8-27-2026-alyssa-lee-0.jpg":Up,"src/photos/stories/8-27-2026-alyssa-lee-1.jpg":_p,"src/photos/stories/8-28-2026-lalo-de-armas-0.jpg":Bp,"src/photos/stories/8-28-2026-lalo-de-armas-1.jpg":Op,"src/photos/stories/8-29-2026-kolton-rice-0.jpg":Vp,"src/photos/stories/8-29-2026-kolton-rice-1.jpg":Gp,"src/photos/stories/8-3-2026-gergana-droumeva-0.jpg":Wp,"src/photos/stories/8-3-2026-gergana-droumeva-1.jpg":Jp,"src/photos/stories/8-30-2026-vivian-lin-0.jpg":qp,"src/photos/stories/8-30-2026-vivian-lin-1.jpg":Yp,"src/photos/stories/8-31-2026-subal-kumar-0.jpg":Kp,"src/photos/stories/8-31-2026-subal-kumar-1.jpg":$p,"src/photos/stories/8-4-2026-ava-martinez-0.png":Qp,"src/photos/stories/8-4-2026-ava-martinez-1.png":Xp,"src/photos/stories/8-5-2026-dennis-chen-0.jpg":Zp,"src/photos/stories/8-5-2026-dennis-chen-1.png":ef,"src/photos/stories/8-6-2026-eshani-ram-0.png":tf,"src/photos/stories/8-6-2026-eshani-ram-1.png":nf,"src/photos/stories/8-7-2026-gabriela-aguilar-castillo-0.png":of,"src/photos/stories/8-7-2026-gabriela-aguilar-castillo-1.png":af,"src/photos/stories/8-8-2026-joaquin-santander-0.png":sf,"src/photos/stories/8-8-2026-joaquin-santander-1.jpg":rf,"src/photos/stories/8-9-2026-amanda-schultz-0.png":lf,"src/photos/stories/8-9-2026-amanda-schultz-1.png":hf,"src/photos/stories/9-1-2026-jaron-tan-0.jpg":uf,"src/photos/stories/9-10-2026-rachel-paiz-0.jpg":df,"src/photos/stories/9-10-2026-rachel-paiz-1.jpg":cf,"src/photos/stories/9-11-2026-elisha-kim-0.png":mf,"src/photos/stories/9-12-2026-marko-ciganovic-0.jpg":gf,"src/photos/stories/9-13-2026-jessica-jones-0.jpg":pf,"src/photos/stories/9-13-2026-jessica-jones-1.jpg":ff,"src/photos/stories/9-14-2026-akshat-kumar-0.jpg":yf,"src/photos/stories/9-15-2026-ayanna-varma-0.jpg":wf,"src/photos/stories/9-16-2026-shivansh-rastogi-0.jpg":vf,"src/photos/stories/9-17-2026-jillian-loux-0.jpg":kf,"src/photos/stories/9-17-2026-jillian-loux-1.jpg":bf,"src/photos/stories/9-17-2026-jillian-loux-2.jpg":jf,"src/photos/stories/9-18-2026-phil-ho-combatir-0.png":If,"src/photos/stories/9-19-2026-kennard-liong-0.png":xf,"src/photos/stories/9-2-2026-yash-alluri-0.jpg":Sf,"src/photos/stories/9-20-2026-joe-radest-0.jpg":Cf,"src/photos/stories/9-20-2026-joe-radest-1.png":Tf,"src/photos/stories/9-21-2026-joe-nedza-0.png":Af,"src/photos/stories/9-21-2026-joe-nedza-1.png":Ef,"src/photos/stories/9-22-2026-chloe-hughes-0.jpg":zf,"src/photos/stories/9-22-2026-chloe-hughes-1.jpg":Nf,"src/photos/stories/9-23-2026-jibran-khalil-0.jpg":Pf,"src/photos/stories/9-24-2026-eric-d-amico-0.jpg":Mf,"src/photos/stories/9-24-2026-eric-d-amico-1.jpg":Hf,"src/photos/stories/9-24-2026-eric-d-amico-2.jpg":Lf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-0.png":Df,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-1.png":Rf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-2.jpg":Ff,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-3.jpg":Uf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-4.png":_f,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-5.png":Bf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-6.png":Of,"src/photos/stories/9-26-2026-fredrick-okwudili-0.png":Vf,"src/photos/stories/9-27-2026-manoj-d-0.jpg":Gf,"src/photos/stories/9-28-2026-jonathan-pertchik-0.png":Wf,"src/photos/stories/9-29-2026-dominick-filipponi-0.png":Jf,"src/photos/stories/9-3-2026-alice-lan-0.jpg":qf,"src/photos/stories/9-3-2026-alice-lan-1.jpg":Yf,"src/photos/stories/9-3-2026-alice-lan-2.jpg":Kf,"src/photos/stories/9-30-2026-jerry-zhu-0.jpg":$f,"src/photos/stories/9-4-2026-anthony-wang-0.jpg":Qf,"src/photos/stories/9-4-2026-anthony-wang-1.jpg":Xf,"src/photos/stories/9-5-2026-dior-muankaew-0.jpg":Zf,"src/photos/stories/9-5-2026-dior-muankaew-1.jpg":ey,"src/photos/stories/9-6-2026-evan-kong-0.jpg":ty,"src/photos/stories/9-6-2026-evan-kong-1.jpg":ny,"src/photos/stories/9-7-2026-rui-maki-0.jpg":oy,"src/photos/stories/9-7-2026-rui-maki-1.jpg":ay,"src/photos/stories/9-8-2026-zexi-li-0.jpg":sy,"src/photos/stories/9-8-2026-zexi-li-1.png":iy,"src/photos/stories/9-8-2026-zexi-li-2.png":ry,"src/photos/stories/9-8-2026-zexi-li-3.png":ly,"src/photos/stories/9-9-2026-ashutos-jain-0.jpg":hy,"src/photos/stories/9-9-2026-ashutos-jain-1.jpg":uy,"src/photos/stories/10-21-2026-lukas-gross-0.jpg":dy,"src/photos/stories/10-22-2026-nathan-stanford-0.jpg":cy,"src/photos/stories/10-23-2026-enrique-yervez-0.jpg":my,"src/photos/stories/10-24-2026-umar-faheem-0.jpg":gy,"src/photos/stories/10-25-2026-kyan-navaja-0.jpg":py,"src/photos/stories/10-26-2026-david-derama-0.jpg":fy,"src/photos/stories/10-27-2026-adeetya-jain-0.jpg":yy,"src/photos/stories/7-25-2026-ben-aratame-2.jpg":wy,"src/photos/stories/9-28-2026-jonathan-pertchik-1.jpg":vy},vu="/assets/headshot-DLreZ3gC.webp",ky="/assets/lotus-Co6ac3nX.png",by="/assets/snow-Ctu1IRmy.jpg",la=tm,Hn=[...la].reverse(),jy=["january","february","march","april","may","june","july","august","september","october","november","december"],Ct=e=>e.replace(/\b\w/g,t=>t.toUpperCase()),oo=D.createContext({dusk:!1,toggle:()=>{}});function kn({kind:e}){const t={viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":!0};return e==="mail"?r.jsxs("svg",{...t,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),r.jsx("path",{d:"M3 7l9 7 9-7"})]}):e==="cal"?r.jsxs("svg",{...t,children:[r.jsx("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2"}),r.jsx("path",{d:"M3 10h18M8 3v4M16 3v4"})]}):e==="x"?r.jsx("svg",{...t,children:r.jsx("path",{d:"M5 4l14 16M19 4L5 20"})}):e==="tree"?r.jsx("svg",{...t,children:r.jsx("path",{d:"M12 3v18M12 8l-5 4M12 8l5 4M12 13l-4 3M12 13l4 3"})}):r.jsxs("svg",{...t,children:[r.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"3"}),r.jsx("path",{d:"M8 11v6M8 7.5v.01M12 17v-6M12 13c0-2 4-2.5 4 0v4"})]})}function ha({className:e}){return r.jsx("img",{className:e,src:ky,alt:"","aria-hidden":"true"})}function ku({story:e,onClose:t}){return D.useEffect(()=>{const n=o=>{o.key==="Escape"&&t()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[t]),r.jsx("div",{className:"ew-modal",role:"dialog","aria-modal":"true","aria-label":e.name,onClick:t,children:r.jsxs("article",{className:"ew-modal-card",onClick:n=>n.stopPropagation(),children:[r.jsx("button",{className:"ew-close",onClick:t,"aria-label":"Close story",children:"close"}),r.jsx("div",{className:"ew-meta",children:e.date}),r.jsx("h3",{children:Ct(e.name)}),e.images.map((n,o)=>r.jsx("img",{className:"ew-simg",src:Vi[n],alt:`${Ct(e.name)}, from the original post`,loading:"lazy"},o)),e.body.split(/\n{2,}/).map((n,o)=>r.jsx("p",{children:n},o))]})})}const Iy=Hn.map(e=>({s:e,secs:am(e)})),bu=e=>Iy.filter(t=>t.secs.includes(e)).map(t=>t.s),xy=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});function Gi(){const{dusk:e,toggle:t}=D.useContext(oo);return r.jsxs("header",{className:"ew-mast",children:[r.jsxs("div",{className:"ew-topline",children:[r.jsxs(Re,{to:"/",className:"ew-brand",children:[r.jsx("img",{src:vu,alt:""}),"ellielwang"]}),r.jsxs("span",{className:"ew-tl-mid",children:[xy," · ",la.length," stories"]}),r.jsxs("span",{className:"ew-tl-right",children:[r.jsx("button",{className:"ew-sub",onClick:nl,children:"subscribe"}),r.jsxs("button",{className:"ew-mode",onClick:t,"aria-pressed":e,"aria-label":e?"Switch to day mode":"Switch to dusk mode",children:[r.jsx(ha,{className:"ew-btn-lotus"}),e?"day":"dusk"]})]})]}),r.jsxs("div",{className:"ew-brandrow",children:[r.jsxs("div",{className:"ew-title",children:[r.jsx("h1",{className:"ew-h1",children:r.jsx(Re,{to:"/",className:"ew-pub",children:"you just have to ask"})}),r.jsx("div",{className:"ew-by",children:"by Elizabeth (Ellie) Wang"})]}),r.jsx(ha,{className:"ew-mast-lotus"})]}),r.jsxs("nav",{className:"ew-secnav","aria-label":"Sections",children:[r.jsx("div",{className:"ew-marq",children:r.jsx("div",{className:"ew-marq-track",children:[0,1].map(n=>r.jsxs("div",{className:"ew-marq-set","aria-hidden":n===1?!0:void 0,children:[r.jsx(Re,{to:"/",tabIndex:n===1?-1:void 0,children:"latest"}),Ca.map(o=>r.jsx(Re,{to:"/section/"+o.slug,tabIndex:n===1?-1:void 0,children:o.label},o.slug)),r.jsx(Re,{to:"/stories",tabIndex:n===1?-1:void 0,children:"all stories"}),r.jsx(Re,{to:"/diary",tabIndex:n===1?-1:void 0,children:"digital diary"})]},n))})}),r.jsxs("div",{className:"ew-navfix",children:[r.jsx("button",{className:"ew-navbtn",onClick:nl,children:"newsletter"}),r.jsx(Re,{to:"/diary",children:"digital diary"}),r.jsx("a",{href:"#about",children:"about"}),r.jsx("a",{href:"#contact",children:"contact"})]})]})]})}function nl(){const e=()=>{const n=document.getElementById("newsletter");if(n){n.scrollIntoView({behavior:"smooth",block:"center"});const o=n.querySelector("input");o&&setTimeout(()=>o.focus({preventScroll:!0}),600)}},t=window.location.hash;t&&t!=="#"&&t!=="#/"?(window.location.hash="/",setTimeout(e,400)):e()}function ju({s:e}){return r.jsx("img",{className:"ew-thumb",src:Vi[e.images[0]],alt:"",loading:"lazy"})}function Sy({s:e,onOpen:t}){return r.jsxs("button",{className:"ew-brief",onClick:()=>t(e),children:[r.jsx(ju,{s:e}),r.jsx("span",{className:"ew-kick",children:e.date.replace("/2026","")}),r.jsx("span",{className:"ew-hl",children:Ct(e.name)}),r.jsx("span",{className:"ew-dek",children:ra(e,120)})]})}function ol({items:e,onOpen:t,label:n}){const o=D.useRef(null),a=s=>{var i,l;return(l=o.current)==null?void 0:l.scrollBy({left:s*Math.max(300,(((i=o.current)==null?void 0:i.clientWidth)||600)*.8),behavior:"smooth"})};return r.jsxs("div",{className:"ew-rowwrap",children:[r.jsxs("div",{className:"ew-arrows",children:[r.jsx("button",{onClick:()=>a(-1),"aria-label":"Scroll "+n+" left",children:"←"}),r.jsx("button",{onClick:()=>a(1),"aria-label":"Scroll "+n+" right",children:"→"})]}),r.jsx("div",{className:"ew-track",ref:o,tabIndex:0,"aria-label":n,children:e.map(s=>r.jsx(Sy,{s,onOpen:t},s.date+s.name))})]})}function Cy(){const[e,t]=D.useState(null),n=Hn[0],o=Hn.slice(1,6);return r.jsxs("div",{className:"ew"+(D.useContext(oo).dusk?" dusk":""),children:[r.jsx(Gi,{}),r.jsxs("main",{className:"ew-wrap",children:[r.jsxs("section",{className:"ew-front",children:[r.jsxs("aside",{className:"ew-rail",children:[r.jsx("figure",{className:"ew-arch",children:r.jsx("img",{src:vu,alt:"Ellie Wang standing on a balcony in a black blazer"})}),r.jsx("p",{className:"ew-kicker",children:"UGA ’29, Terry College of Business"}),r.jsxs("div",{className:"ew-pills",children:[r.jsx("a",{href:"#sections",children:"browse by industry"}),r.jsx("a",{href:"https://calendly.com/elizabethlynnwang/30min",target:"_blank",rel:"noreferrer",children:"book a chat"})]})]}),r.jsxs("article",{className:"ew-lead",children:[r.jsx("span",{className:"ew-label",children:"latest story"}),r.jsxs("button",{className:"ew-leadbtn",onClick:()=>t(n),children:[r.jsx("img",{src:Vi[n.images[0]],alt:Ct(n.name)+", from the original post"}),r.jsx("span",{className:"ew-kick",children:n.date}),r.jsx("span",{className:"ew-leadhl",children:Ct(n.name)}),r.jsx("span",{className:"ew-leaddek",children:ra(n,260)}),r.jsx("span",{className:"ew-more",children:"read the story →"})]})]}),r.jsxs("aside",{className:"ew-latest",children:[r.jsx("span",{className:"ew-label",children:"more recent"}),o.map(a=>r.jsxs("button",{className:"ew-item",onClick:()=>t(a),children:[r.jsx("span",{className:"ew-kick",children:a.date.replace("/2026","")}),r.jsx("span",{className:"ew-hl",children:Ct(a.name)}),r.jsx("span",{className:"ew-dek",children:ra(a,90)})]},a.date+a.name)),r.jsxs(Re,{className:"ew-link",to:"/stories",children:["search all ",la.length," stories"]})]})]}),r.jsxs("section",{className:"ew-band",children:[r.jsxs("div",{children:[r.jsxs("h3",{children:["cofounder of ",r.jsx("u",{children:"Pitcher"})]}),r.jsxs("p",{children:["A professional discovery network for early-stage startups. ",r.jsx("b",{children:"Human-curated."})," First pilot open to ",r.jsx("b",{children:"Georgia founders"}),". ",r.jsx("a",{href:"https://trypitcher.co",target:"_blank",rel:"noreferrer",children:"trypitcher.co"})]})]}),r.jsxs("div",{children:[r.jsxs("h3",{children:["at ",r.jsx("u",{children:"school"})]}),r.jsxs("p",{children:[r.jsx("b",{children:"Management Information Systems"})," at Terry College, with a ",r.jsx("b",{children:"Sociology"})," minor and an ",r.jsx("b",{children:"Entrepreneurship"})," certificate"]})]}),r.jsxs("div",{children:[r.jsxs("h3",{children:["the ",r.jsx("u",{children:"series"})]}),r.jsxs("p",{children:["You Just Have to Ask: ",r.jsx("b",{children:"one story every day"})," on LinkedIn since July 4, talking with founders, advocates and students"]})]}),r.jsxs("div",{children:[r.jsxs("h3",{children:["building ",r.jsx("u",{children:"community"})]}),r.jsxs("p",{children:["Co-founder and co-president of ",r.jsx("b",{children:"Lotus Society"}),", a mentorship org for Asian American students at UGA"]})]})]}),r.jsxs("section",{id:"stories",className:"ew-sect",children:[r.jsxs("div",{className:"ew-shead",children:[r.jsxs("h2",{children:["the newest ",r.jsx("em",{children:"stories"})]}),r.jsxs(Re,{to:"/stories",children:["see all ",la.length," →"]})]}),r.jsx(ol,{items:Hn.slice(0,24),onOpen:t,label:"Latest stories"}),r.jsxs("p",{className:"ew-hint",children:[r.jsx("span",{className:"ew-h-d",children:"use the arrows"}),r.jsx("span",{className:"ew-h-m",children:"swipe"})," · tap a story to read it"]})]}),r.jsx("div",{id:"sections"}),Ca.map(a=>{const s=bu(a.slug);return s.length?r.jsxs("section",{className:"ew-sect ew-secblock",children:[r.jsxs("div",{className:"ew-shead",children:[r.jsx("h2",{children:a.label}),r.jsxs(Re,{to:"/section/"+a.slug,children:[s.length," ",s.length===1?"story":"stories"," →"]})]}),r.jsx(ol,{items:s.slice(0,12),onOpen:t,label:a.label})]},a.slug):null}),r.jsxs("section",{className:"ew-sect",id:"work",children:[r.jsx("div",{className:"ew-shead",children:r.jsxs("h2",{children:["in the ",r.jsx("em",{children:"field"})]})}),r.jsxs("div",{className:"ew-trio",children:[r.jsxs("div",{className:"ew-tcol",children:[r.jsx("h3",{children:"venture + business"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("b",{children:"JSV Launchpad"}),", venture scout"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Todd AgriScience"}),", go-to-market intern"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Terry Student Consulting"}),", 1 of 40 from 225 applicants"]}),r.jsxs("li",{children:[r.jsx("b",{children:"UGA SMIS"}),", senior VP of finance"]}),r.jsx("li",{children:"Intern Insider fellow, TextPip ambassador"})]})]}),r.jsxs("div",{className:"ew-tcol",children:[r.jsx("h3",{children:"research + policy"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("b",{children:"NASA L’SPACE"}),", principal investigator on an orbital debris mission concept"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Institute for Youth in Policy"}),", fellow, Outstanding Capstone Writer"]}),r.jsxs("li",{children:[r.jsx("b",{children:"AAAIM"}),", investment management extern"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Anthropic Claude Builder Club"}),", campus ambassador"]})]})]}),r.jsxs("div",{className:"ew-tcol",children:[r.jsx("h3",{children:"leadership"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("b",{children:"Alpha Sigma Rho"}),", philanthropy and social chair, raised $1,418"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Magellan Program"}),", selected from 500+ applicants"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Emerging Greek Leaders"}),", sole MGC representative"]}),r.jsx("li",{children:"Reed & Payne Community Council, UGA campus tour guide"})]})]})]})]}),r.jsxs("section",{className:"ew-sect",id:"record",children:[r.jsx("div",{className:"ew-shead",children:r.jsxs("h2",{children:["the full ",r.jsx("em",{children:"record"})]})}),r.jsxs("div",{className:"ew-trio",children:[r.jsxs("div",{className:"ew-tcol",children:[r.jsx("h3",{children:"experience"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("b",{children:"Claude Campus Ambassador"}),", NEXT GEN·TEAM",r.jsx("small",{children:"Oct 2026 to present"}),"Leading the Claude Builder Community at UGA"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Co-Founder, Go-To-Market"}),", Pitcher",r.jsx("small",{children:"Jun 2026 to present"}),"A founder discovery network for early startups"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Go-To-Market"}),", Todd",r.jsx("small",{children:"Aug 2026 to present"}),"Interviews with people who run farms across New York, California, Utah, and Maryland. Instagram graphics for an ag-tech startup that raised pre-seed funding at a $40M valuation cap."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Founding Growth @ UGA"}),", Ditto",r.jsx("small",{children:"Aug 2026 to present"}),"Secured approval to put Ditto flyers up across UGA dorms and student centers. #1 cupid all time in the US."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Lucy Mission Ambassador"}),", L’SPACE Program",r.jsx("small",{children:"Sep 2026 to present"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"Team Program Analyst (MCA)"}),", L’SPACE Program",r.jsx("small",{children:"May 2026 to Aug 2026"}),"Supporting a lunar surface mission concept focused on hazards in permanently shadowed regions, including dust, radiation, and impact risk. Driving schedule and cost estimation for the team’s Preliminary Definition Review."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Team Principal Investigator (NPWEE)"}),", L’SPACE Program",r.jsx("small",{children:"Jan 2026 to May 2026"}),"Led a 10-member interdisciplinary team in the NASA-funded L’SPACE NPWEE to develop a NASA-style mission concept addressing orbital debris mitigation."]})]})]}),r.jsxs("div",{className:"ew-tcol",children:[r.jsx("h3",{children:"education"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("b",{children:"University of Georgia, Terry College of Business"}),r.jsx("small",{children:"Aug 2025 to May 2029"}),"BBA in Management Information Systems, with Entrepreneurship and FinTech Certificates. Alpha Sigma Rho (Fundraising & Philanthropy Chair), Magellan Program, Emerging Greek Leaders, Reed/Payne Community Council (Coordinator of Communications), UGA Trial Gardens, International Business Society, Society for Management Information Systems, Shop With A Bulldawg mentor, UGA Fencing Club, UGAHacks."]}),r.jsxs("li",{children:[r.jsx("b",{children:"University of Oxford"}),r.jsx("small",{children:"Jun 2026 to Aug 2026"}),"Biomedical Ethics, Computing Ethics. UGA Foundation Incentive Scholarship ($3,500) and EL Ready to Thrive Scholarship ($7K)."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Northview High School"}),r.jsx("small",{children:"Aug 2021 to May 2025"}),"Magna Cum Laude. Public Health and Fine Arts Pathways Seal (Mastery Orchestra: Violin). Outstanding Public Health Pathway Student of the Year."]}),r.jsxs("li",{children:[r.jsx("b",{children:"Atlanta Contemporary Chinese Academy"}),r.jsx("small",{children:"2012 to 2023"}),"Completed the 9-year curriculum and 1-year AP Chinese Language and Culture course."]}),r.jsx("li",{children:"Selected participant: Goldman Sachs Possibilities Series, BCG Launch, PwC Future Focus, DHL Future Leaders Summit"})]})]}),r.jsxs("div",{className:"ew-tcol",children:[r.jsx("h3",{children:"service + learning"}),r.jsxs("ul",{children:[r.jsxs("li",{children:[r.jsx("b",{children:"Johns Creek Baptist Church"}),", contemporary production director and event volunteer",r.jsx("small",{children:"Sep 2021 to Mar 2025"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"Findley Oaks Elementary Literacy Initiative"}),", English Second Language tutor",r.jsx("small",{children:"Jan 2024 to May 2024"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"Wellstar Health System"}),", Cobb & North Fulton Wellstar Hospital VolunTEEN",r.jsx("small",{children:"Jun 2023 to Jul 2024"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"National Beta"}),", student volunteer",r.jsx("small",{children:"Aug 2021 to May 2025"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"Capstone Hospice"}),", volunteer",r.jsx("small",{children:"Apr 2024"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"National Honor Society"}),", inductee, 1 of 75 from a 450+ senior class",r.jsx("small",{children:"May 2024 to May 2025"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"Policy brief:"})," “The Invisible Workload of Grief: Student Bereavement Administrative Burdens,” Institute for Youth in Policy",r.jsx("small",{children:"Jan 2026 to Mar 2026"})]}),r.jsxs("li",{children:[r.jsx("b",{children:"Certifications:"})," CITI Social and Behavioral Research; National Health Science Certificate; JHU Global Health Leaders Conference (2024); Excel Essential Training; Basic Life Support (CPR and AED)"]})]})]})]})]}),r.jsxs("section",{className:"ew-row",children:[r.jsxs("div",{children:[r.jsx("div",{className:"ew-shead",children:r.jsxs("h2",{children:["about the ",r.jsx("em",{children:"series"})]})}),r.jsx("p",{children:"My daily storytelling series on LinkedIn: one story every day since July 4, 2026, posted at 12:12 PM ET. I talk with founders, advocates, students, and anyone with a passion for helping the world."}),r.jsx("p",{children:"I take handwritten notes during conversations, and guests review their stories before publication. It started because I wanted to give my mentors their flowers. It kept going because everyone has a story worth telling."}),r.jsx("blockquote",{children:r.jsx("span",{lang:"zh-Hant",className:"ew-zh",children:"水滴石穿"})}),r.jsx("a",{className:"ew-link",href:"https://www.linkedin.com/in/ellielwang",target:"_blank",rel:"noreferrer",children:"read the series on LinkedIn"})]}),r.jsxs("div",{children:[r.jsxs("div",{className:"ew-stats",children:[r.jsxs("div",{children:["100+",r.jsx("small",{children:"stories told"})]}),r.jsxs("div",{children:["9+",r.jsx("small",{children:"countries"})]}),r.jsxs("div",{children:["330,440",r.jsx("small",{children:"linkedin impressions"})]})]}),r.jsx("h3",{className:"ew-small",children:"honors"}),r.jsxs("ul",{className:"ew-honors",children:[r.jsxs("li",{children:["EY SAP S/4HANA Case Competition",r.jsx("span",{children:"2nd"})]}),r.jsxs("li",{children:["Goldman Sachs Case Competition",r.jsx("span",{children:"top 5"})]}),r.jsxs("li",{children:["Global Health Union Case Competition",r.jsx("span",{children:"top 2"})]}),r.jsxs("li",{children:["SHRM Case Competition",r.jsx("span",{children:"top 4"})]}),r.jsxs("li",{children:["UGA SMIS & WIC Consulting Case Competition",r.jsx("span",{children:"4th"})]}),r.jsxs("li",{children:["UGA Claude AI Hackathon",r.jsx("span",{children:"3rd"})]}),r.jsxs("li",{children:["LightReel AI Fellowship",r.jsx("span",{children:"1 of 10"})]}),r.jsxs("li",{children:["Point Foundation Persistence Scholarship",r.jsx("span",{children:"2x"})]}),r.jsxs("li",{children:["Public Health Pathway Student of the Year",r.jsx("span",{children:"2025"})]}),r.jsxs("li",{children:["ASTA National Orchestra Festival",r.jsx("span",{children:"1st"})]}),r.jsxs("li",{children:["Top 6, Medical Business Association/SMIS Case Competition",r.jsx("span",{children:"top 6"})]}),r.jsxs("li",{children:["HOSA Georgia State Leadership Conference, Medical Reading",r.jsx("span",{children:"1st in state, 2026"})]}),r.jsxs("li",{children:["National BETA Scholarship Program, top 5 of 3,500+ applicants",r.jsx("span",{children:"$6K"})]}),r.jsxs("li",{children:["Runner-Up Student Project Award, UGA Data Science and AI Summer Camp",r.jsx("span",{children:"2024"})]}),r.jsxs("li",{children:["Selected presenter, Georgia State Undergraduate Research Conference",r.jsx("span",{children:"2025"})]}),r.jsxs("li",{children:["Published in “Bubbles,” Northview MUSE literary magazine",r.jsx("span",{children:"2025"})]})]})]})]}),r.jsxs("section",{className:"ew-row ew-about",id:"about",children:[r.jsxs("div",{children:[r.jsx("div",{className:"ew-shead",children:r.jsx("h2",{children:"about"})}),r.jsx("p",{children:"I’m a student at the University of Georgia studying Management Information Systems in the Terry College of Business, with a Sociology minor and an Entrepreneurship Certificate."}),r.jsx("p",{children:"Born and raised in Georgia, the daughter of immigrants. My mother is from Cambodia and my father is from Taiwan. I’ve studied at the University of Oxford (Biomedical Ethics and Computing Ethics & Society) and traveled Italy and Germany for a Food Industries Maymester."})]}),r.jsxs("div",{className:"ew-aboutr",children:[r.jsx("p",{children:"I’ve played piano since I was 4 and violin since 4th grade, and I started making content at 15 by posting piano videos. Music taught me how to work hard; people taught me why it matters."}),r.jsx("p",{className:"ew-values",children:"authenticity · curiosity · gratitude · community"}),r.jsx("figure",{className:"ew-snow",children:r.jsx("img",{src:by,alt:"A snowy outdoor scene with a child in a red jacket in the foreground",loading:"lazy"})})]})]}),r.jsx(Ty,{}),r.jsx(Ay,{}),r.jsx(Wi,{})]}),e&&r.jsx(ku,{story:e,onClose:()=>t(null)})]})}function Ty(){const[e,t]=D.useState(""),[n,o]=D.useState("idle"),[a,s]=D.useState(""),i=async l=>{l.preventDefault(),o("sending");try{const h=new FormData;h.append("email_address",e);const d=await fetch("https://app.kit.com/forms/10102413/subscriptions",{method:"POST",body:h,headers:{Accept:"application/json"}}),g=await d.json().catch(()=>({}));g&&g.status==="quarantined"&&g.url?(s(g.url),o("guard")):d.ok&&(!g.status||g.status==="success"||g.status==="created")?o("ok"):o("err")}catch{o("err")}};return r.jsxs("section",{className:"ew-sect ew-news",id:"newsletter",children:[r.jsx(ha,{className:"ew-news-lotus"}),r.jsx("div",{className:"ew-shead",children:r.jsxs("h2",{children:["the ",r.jsx("em",{children:'"you just have to ask"'})," newsletter"]})}),r.jsx("p",{className:"ew-clede",children:"New stories in your inbox, so you never have to catch every post. Free, no paywall."}),r.jsxs("form",{className:"ew-nform",onSubmit:i,children:[r.jsx("input",{type:"email",required:!0,value:e,onChange:l=>{t(l.target.value),n!=="sending"&&o("idle")},placeholder:"you@email.com","aria-label":"email address"}),r.jsx("button",{type:"submit",disabled:n==="sending",children:n==="sending"?"sending":"subscribe"})]}),n==="ok"&&r.jsx("p",{className:"ew-nnote",role:"status",children:"Almost there. Check your email and click the link to confirm your subscription."}),n==="guard"&&r.jsxs("p",{className:"ew-nnote",role:"status",children:["One quick check first: ",r.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"confirm you’re human"}),", then check your email."]}),n==="err"&&r.jsx("p",{className:"ew-nnote",role:"alert",children:"Something went wrong. Please try again in a moment."})]})}function Ay(){const[e,t]=D.useState(""),[n,o]=D.useState(""),a="mailto:ellielwang1@gmail.com?subject="+encodeURIComponent("Hi Ellie"+(e?", from "+e:""))+"&body="+encodeURIComponent(n);return r.jsxs("section",{className:"ew-sect ew-contact",id:"contact",children:[r.jsx("div",{className:"ew-shead",children:r.jsxs("h2",{children:["say ",r.jsx("em",{children:"hi"})]})}),r.jsx("p",{className:"ew-clede",children:"Have a story, a question or an idea? Write below and it opens as an email to me. Or book a time."}),r.jsxs("div",{className:"ew-cform",children:[r.jsxs("label",{children:["your name",r.jsx("input",{value:e,onChange:s=>t(s.target.value),placeholder:"your name"})]}),r.jsxs("label",{children:["message",r.jsx("textarea",{value:n,onChange:s=>o(s.target.value),placeholder:"say hi!",rows:4})]}),r.jsxs("div",{className:"ew-pills",children:[r.jsx("a",{href:a,children:"open in my email app"}),r.jsx("a",{href:"https://calendly.com/elizabethlynnwang/30min",target:"_blank",rel:"noreferrer",children:"book a chat"})]})]})]})}function Wi(){return r.jsxs("footer",{children:[r.jsxs("div",{className:"ew-sign",children:[r.jsx(ha,{className:"ew-pix"}),"ellielwang"]}),r.jsxs("p",{className:"ew-credit",children:["Lotus designed by ",r.jsx("a",{href:"https://www.linkedin.com/in/ava-c-589144366/",target:"_blank",rel:"noopener noreferrer",children:"Ava Chapagain"})]}),r.jsxs("ul",{className:"ew-icons",children:[r.jsx("li",{children:r.jsx("a",{href:"https://www.linkedin.com/in/ellielwang",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:r.jsx(kn,{kind:"in"})})}),r.jsx("li",{children:r.jsx("a",{href:"https://x.com/ellielwang",target:"_blank",rel:"noreferrer","aria-label":"X",children:r.jsx(kn,{kind:"x"})})}),r.jsx("li",{children:r.jsx("a",{href:"https://linktr.ee/ellielwang",target:"_blank",rel:"noreferrer","aria-label":"Linktree",children:r.jsx(kn,{kind:"tree"})})}),r.jsx("li",{children:r.jsx("a",{href:"https://calendly.com/elizabethlynnwang/30min",target:"_blank",rel:"noreferrer","aria-label":"Book a chat",children:r.jsx(kn,{kind:"cal"})})}),r.jsx("li",{children:r.jsx("a",{href:"mailto:ellielwang1@gmail.com","aria-label":"Email",children:r.jsx(kn,{kind:"mail"})})})]}),r.jsx("p",{className:"ew-copy",children:"© 2026 Elizabeth “Ellie” Wang · Athens, GA · Johns Creek, GA"})]})}function Ey(){return r.jsxs("div",{className:"ew"+(D.useContext(oo).dusk?" dusk":""),children:[r.jsx(Gi,{}),r.jsxs("main",{className:"ew-wrap ew-archive",children:[r.jsx("h1",{children:"digital diary"}),r.jsx("p",{className:"ew-lede",children:"Trying something new every day, told in my own words on X. Newest first."}),nm.map((e,t)=>r.jsxs("article",{className:"ew-dentry",children:[r.jsx("span",{className:"ew-kick",children:e.date.replace("/2026","")}),r.jsx("div",{className:"ew-dbody",children:e.text}),r.jsx("span",{className:"ew-dsrc",children:r.jsx("a",{href:e.link,target:"_blank",rel:"noreferrer",children:"original post on x"})})]},e.link)),r.jsxs("p",{className:"ew-dsrc",children:["posted daily on ",r.jsx("a",{href:"https://x.com/ellielwang",target:"_blank",rel:"noreferrer",children:"x.com/ellielwang"})]}),r.jsx(Wi,{})]})]})}function al({section:e}){const[t,n]=D.useState(""),[o,a]=D.useState(null),s=Ca.find(g=>g.slug===e),i=e?bu(e):Hn,l=t.trim().toLowerCase(),h=l?i.filter(g=>(g.name+" "+g.body).toLowerCase().includes(l)):i,d=[];return h.forEach(g=>{const f=jy[parseInt(g.date.split("/")[0],10)-1]+" 2026",p=d[d.length-1];p&&p.label===f?p.items.push(g):d.push({label:f,items:[g]})}),r.jsxs("div",{className:"ew"+(D.useContext(oo).dusk?" dusk":""),children:[r.jsx(Gi,{}),r.jsxs("main",{className:"ew-wrap ew-archive",children:[r.jsx("h1",{children:s?s.label:i.length+" stories"}),r.jsx("p",{className:"ew-lede",children:s?i.length+" stories from You Just Have to Ask that talk about this field, newest first. Sorted by what each story says.":"From You Just Have to Ask, newest first."}),r.jsx("input",{className:"ew-filter",type:"search",placeholder:"search a name or a detail",value:t,onChange:g=>n(g.target.value),"aria-label":"Search stories"}),d.map(g=>r.jsxs("section",{children:[r.jsxs("div",{className:"ew-ghead",children:[r.jsx("h2",{children:g.label}),r.jsxs("span",{className:"ew-meta",children:[g.items.length," ",g.items.length===1?"story":"stories"]})]}),g.items.map(f=>r.jsxs("button",{className:"ew-arow",onClick:()=>a(f),children:[r.jsx(ju,{s:f}),r.jsxs("span",{className:"ew-atext",children:[r.jsx("span",{className:"ew-kick",children:f.date.replace("/2026","")}),r.jsx("span",{className:"ew-sname",children:Ct(f.name)}),r.jsx("span",{className:"ew-dek",children:ra(f,200)})]})]},f.date+f.name))]},g.label)),h.length===0&&r.jsx("p",{className:"ew-lede",children:"No stories match that search."}),r.jsx(Wi,{})]}),o&&r.jsx(ku,{story:o,onClose:()=>a(null)})]})}function zy(){const[e,t]=D.useState(!1);return D.useEffect(()=>{document.body.style.background=e?"#2b1322":"#fbe4ea",document.documentElement.style.background=e?"#2b1322":"#fbe4ea"},[e]),r.jsx(oo.Provider,{value:{dusk:e,toggle:()=>t(n=>!n)},children:r.jsx(em,{children:r.jsxs(Zc,{children:[r.jsx(xo,{path:"/",element:r.jsx(Cy,{})}),r.jsx(xo,{path:"/stories",element:r.jsx(al,{})}),r.jsx(xo,{path:"/diary",element:r.jsx(Ey,{})}),Ca.map(n=>r.jsx(xo,{path:"/section/"+n.slug,element:r.jsx(al,{section:n.slug})},n.slug))]})})})}yu(document.getElementById("root")).render(r.jsx(Xc,{children:r.jsx(zy,{})}));
