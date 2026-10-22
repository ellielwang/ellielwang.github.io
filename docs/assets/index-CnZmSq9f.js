(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();function lu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jr={exports:{}},ta={},Yr={exports:{}},E={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kn=Symbol.for("react.element"),hu=Symbol.for("react.portal"),uu=Symbol.for("react.fragment"),du=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),mu=Symbol.for("react.provider"),gu=Symbol.for("react.context"),pu=Symbol.for("react.forward_ref"),fu=Symbol.for("react.suspense"),yu=Symbol.for("react.memo"),wu=Symbol.for("react.lazy"),Hi=Symbol.iterator;function vu(e){return e===null||typeof e!="object"?null:(e=Hi&&e[Hi]||e["@@iterator"],typeof e=="function"?e:null)}var Kr={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$r=Object.assign,qr={};function an(e,t,n){this.props=e,this.context=t,this.refs=qr,this.updater=n||Kr}an.prototype.isReactComponent={};an.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};an.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qr(){}Qr.prototype=an.prototype;function Fs(e,t,n){this.props=e,this.context=t,this.refs=qr,this.updater=n||Kr}var Us=Fs.prototype=new Qr;Us.constructor=Fs;$r(Us,an.prototype);Us.isPureReactComponent=!0;var Di=Array.isArray,Xr=Object.prototype.hasOwnProperty,Bs={current:null},Zr={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,n){var o,a={},s=null,i=null;if(t!=null)for(o in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(s=""+t.key),t)Xr.call(t,o)&&!Zr.hasOwnProperty(o)&&(a[o]=t[o]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var l=Array(r),u=0;u<r;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(o in r=e.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:Kn,type:e,key:s,ref:i,props:a,_owner:Bs.current}}function ku(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Os(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function bu(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var _i=/\/+/g;function ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bu(""+e.key):t.toString(36)}function vo(e,t,n,o,a){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(s){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kn:case hu:i=!0}}if(i)return i=e,a=a(i),e=o===""?"."+ka(i,0):o,Di(a)?(n="",e!=null&&(n=e.replace(_i,"$&/")+"/"),vo(a,t,n,"",function(u){return u})):a!=null&&(Os(a)&&(a=ku(a,n+(!a.key||i&&i.key===a.key?"":(""+a.key).replace(_i,"$&/")+"/")+e)),t.push(a)),1;if(i=0,o=o===""?".":o+":",Di(e))for(var r=0;r<e.length;r++){s=e[r];var l=o+ka(s,r);i+=vo(s,t,n,l,a)}else if(l=vu(e),typeof l=="function")for(e=l.call(e),r=0;!(s=e.next()).done;)s=s.value,l=o+ka(s,r++),i+=vo(s,t,n,l,a);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function to(e,t,n){if(e==null)return e;var o=[],a=0;return vo(e,o,"","",function(s){return t.call(n,s,a++)}),o}function Iu(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var re={current:null},ko={transition:null},ju={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:ko,ReactCurrentOwner:Bs};function tl(){throw Error("act(...) is not supported in production builds of React.")}E.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};E.Component=an;E.Fragment=uu;E.Profiler=cu;E.PureComponent=Fs;E.StrictMode=du;E.Suspense=fu;E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ju;E.act=tl;E.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=$r({},e.props),a=e.key,s=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,i=Bs.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var r=e.type.defaultProps;for(l in t)Xr.call(t,l)&&!Zr.hasOwnProperty(l)&&(o[l]=t[l]===void 0&&r!==void 0?r[l]:t[l])}var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){r=Array(l);for(var u=0;u<l;u++)r[u]=arguments[u+2];o.children=r}return{$$typeof:Kn,type:e.type,key:a,ref:s,props:o,_owner:i}};E.createContext=function(e){return e={$$typeof:gu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mu,_context:e},e.Consumer=e};E.createElement=el;E.createFactory=function(e){var t=el.bind(null,e);return t.type=e,t};E.createRef=function(){return{current:null}};E.forwardRef=function(e){return{$$typeof:pu,render:e}};E.isValidElement=Os;E.lazy=function(e){return{$$typeof:wu,_payload:{_status:-1,_result:e},_init:Iu}};E.memo=function(e,t){return{$$typeof:yu,type:e,compare:t===void 0?null:t}};E.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};E.unstable_act=tl;E.useCallback=function(e,t){return re.current.useCallback(e,t)};E.useContext=function(e){return re.current.useContext(e)};E.useDebugValue=function(){};E.useDeferredValue=function(e){return re.current.useDeferredValue(e)};E.useEffect=function(e,t){return re.current.useEffect(e,t)};E.useId=function(){return re.current.useId()};E.useImperativeHandle=function(e,t,n){return re.current.useImperativeHandle(e,t,n)};E.useInsertionEffect=function(e,t){return re.current.useInsertionEffect(e,t)};E.useLayoutEffect=function(e,t){return re.current.useLayoutEffect(e,t)};E.useMemo=function(e,t){return re.current.useMemo(e,t)};E.useReducer=function(e,t,n){return re.current.useReducer(e,t,n)};E.useRef=function(e){return re.current.useRef(e)};E.useState=function(e){return re.current.useState(e)};E.useSyncExternalStore=function(e,t,n){return re.current.useSyncExternalStore(e,t,n)};E.useTransition=function(){return re.current.useTransition()};E.version="18.3.1";Yr.exports=E;var Vs=Yr.exports;const Be=lu(Vs);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Su=Vs,xu=Symbol.for("react.element"),Cu=Symbol.for("react.fragment"),Tu=Object.prototype.hasOwnProperty,Au=Su.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,zu={key:!0,ref:!0,__self:!0,__source:!0};function nl(e,t,n){var o,a={},s=null,i=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(i=t.ref);for(o in t)Tu.call(t,o)&&!zu.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)a[o]===void 0&&(a[o]=t[o]);return{$$typeof:xu,type:e,key:s,ref:i,props:a,_owner:Au.current}}ta.Fragment=Cu;ta.jsx=nl;ta.jsxs=nl;Jr.exports=ta;var m=Jr.exports,ol={exports:{}},we={},al={exports:{}},sl={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,A){var z=S.length;S.push(A);e:for(;0<z;){var W=z-1>>>1,$=S[W];if(0<a($,A))S[W]=A,S[z]=$,z=W;else break e}}function n(S){return S.length===0?null:S[0]}function o(S){if(S.length===0)return null;var A=S[0],z=S.pop();if(z!==A){S[0]=z;e:for(var W=0,$=S.length,Zn=$>>>1;W<Zn;){var ft=2*(W+1)-1,va=S[ft],yt=ft+1,eo=S[yt];if(0>a(va,z))yt<$&&0>a(eo,va)?(S[W]=eo,S[yt]=z,W=yt):(S[W]=va,S[ft]=z,W=ft);else if(yt<$&&0>a(eo,z))S[W]=eo,S[yt]=z,W=yt;else break e}}return A}function a(S,A){var z=S.sortIndex-A.sortIndex;return z!==0?z:S.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var i=Date,r=i.now();e.unstable_now=function(){return i.now()-r}}var l=[],u=[],f=1,p=null,g=3,v=!1,k=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function c(S){for(var A=n(u);A!==null;){if(A.callback===null)o(u);else if(A.startTime<=S)o(u),A.sortIndex=A.expirationTime,t(l,A);else break;A=n(u)}}function y(S){if(b=!1,c(S),!k)if(n(l)!==null)k=!0,ya(j);else{var A=n(u);A!==null&&wa(y,A.startTime-S)}}function j(S,A){k=!1,b&&(b=!1,d(T),T=-1),v=!0;var z=g;try{for(c(A),p=n(l);p!==null&&(!(p.expirationTime>A)||S&&!Ce());){var W=p.callback;if(typeof W=="function"){p.callback=null,g=p.priorityLevel;var $=W(p.expirationTime<=A);A=e.unstable_now(),typeof $=="function"?p.callback=$:p===n(l)&&o(l),c(A)}else o(l);p=n(l)}if(p!==null)var Zn=!0;else{var ft=n(u);ft!==null&&wa(y,ft.startTime-A),Zn=!1}return Zn}finally{p=null,g=z,v=!1}}var x=!1,C=null,T=-1,V=5,N=-1;function Ce(){return!(e.unstable_now()-N<V)}function ln(){if(C!==null){var S=e.unstable_now();N=S;var A=!0;try{A=C(!0,S)}finally{A?hn():(x=!1,C=null)}}else x=!1}var hn;if(typeof h=="function")hn=function(){h(ln)};else if(typeof MessageChannel<"u"){var Li=new MessageChannel,ru=Li.port2;Li.port1.onmessage=ln,hn=function(){ru.postMessage(null)}}else hn=function(){_(ln,0)};function ya(S){C=S,x||(x=!0,hn())}function wa(S,A){T=_(function(){S(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,ya(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var z=g;g=A;try{return S()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,A){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var z=g;g=S;try{return A()}finally{g=z}},e.unstable_scheduleCallback=function(S,A,z){var W=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?W+z:W):z=W,S){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=z+$,S={id:f++,callback:A,priorityLevel:S,startTime:z,expirationTime:$,sortIndex:-1},z>W?(S.sortIndex=z,t(u,S),n(l)===null&&S===n(u)&&(b?(d(T),T=-1):b=!0,wa(y,z-W))):(S.sortIndex=$,t(l,S),k||v||(k=!0,ya(j))),S},e.unstable_shouldYield=Ce,e.unstable_wrapCallback=function(S){var A=g;return function(){var z=g;g=A;try{return S.apply(this,arguments)}finally{g=z}}}})(sl);al.exports=sl;var Eu=al.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu=Vs,ye=Eu;function w(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var il=new Set,Nn={};function Et(e,t){Qt(e,t),Qt(e+"Capture",t)}function Qt(e,t){for(Nn[e]=t,e=0;e<t.length;e++)il.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ya=Object.prototype.hasOwnProperty,Pu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ri={},Fi={};function Mu(e){return Ya.call(Fi,e)?!0:Ya.call(Ri,e)?!1:Pu.test(e)?Fi[e]=!0:(Ri[e]=!0,!1)}function Lu(e,t,n,o){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Hu(e,t,n,o){if(t===null||typeof t>"u"||Lu(e,t,n,o))return!0;if(o)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,o,a,s,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new le(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new le(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new le(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new le(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new le(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new le(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ws=/[\-:]([a-z])/g;function Gs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ws,Gs);ee[t]=new le(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ws,Gs);ee[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ws,Gs);ee[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function Js(e,t,n,o){var a=ee.hasOwnProperty(t)?ee[t]:null;(a!==null?a.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Hu(t,n,a,o)&&(n=null),o||a===null?Mu(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,o=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,o?e.setAttributeNS(o,t,n):e.setAttribute(t,n))))}var $e=Nu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),Ys=Symbol.for("react.strict_mode"),Ka=Symbol.for("react.profiler"),rl=Symbol.for("react.provider"),ll=Symbol.for("react.context"),Ks=Symbol.for("react.forward_ref"),$a=Symbol.for("react.suspense"),qa=Symbol.for("react.suspense_list"),$s=Symbol.for("react.memo"),Qe=Symbol.for("react.lazy"),hl=Symbol.for("react.offscreen"),Ui=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Ui&&e[Ui]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,ba;function wn(e){if(ba===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ba=t&&t[1]||""}return`
`+ba+e}var Ia=!1;function ja(e,t){if(!e||Ia)return"";Ia=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var o=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){o=u}e.call(t.prototype)}else{try{throw Error()}catch(u){o=u}e()}}catch(u){if(u&&o&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),s=o.stack.split(`
`),i=a.length-1,r=s.length-1;1<=i&&0<=r&&a[i]!==s[r];)r--;for(;1<=i&&0<=r;i--,r--)if(a[i]!==s[r]){if(i!==1||r!==1)do if(i--,r--,0>r||a[i]!==s[r]){var l=`
`+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=r);break}}}finally{Ia=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function Du(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=ja(e.type,!1),e;case 11:return e=ja(e.type.render,!1),e;case 1:return e=ja(e.type,!0),e;default:return""}}function Qa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Lt:return"Fragment";case Mt:return"Portal";case Ka:return"Profiler";case Ys:return"StrictMode";case $a:return"Suspense";case qa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ll:return(e.displayName||"Context")+".Consumer";case rl:return(e._context.displayName||"Context")+".Provider";case Ks:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $s:return t=e.displayName||null,t!==null?t:Qa(e.type)||"Memo";case Qe:t=e._payload,e=e._init;try{return Qa(e(t))}catch{}}return null}function _u(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qa(t);case 8:return t===Ys?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function dt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ul(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ru(e){var t=ul(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(i){o=""+i,s.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(i){o=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=Ru(e))}function dl(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=ul(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function No(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xa(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bi(e,t){var n=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;n=dt(t.value!=null?t.value:n),e._wrapperState={initialChecked:o,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function cl(e,t){t=t.checked,t!=null&&Js(e,"checked",t,!1)}function Za(e,t){cl(e,t);var n=dt(t.value),o=t.type;if(n!=null)o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?es(e,t.type,n):t.hasOwnProperty("defaultValue")&&es(e,t.type,dt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function es(e,t,n){(t!=="number"||No(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var vn=Array.isArray;function Gt(e,t,n,o){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&o&&(e[n].defaultSelected=!0)}else{for(n=""+dt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,o&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function ts(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(w(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Vi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(w(92));if(vn(n)){if(1<n.length)throw Error(w(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:dt(n)}}function ml(e,t){var n=dt(t.value),o=dt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),o!=null&&(e.defaultValue=""+o)}function Wi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function gl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ns(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?gl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,pl=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,o,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Pn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var In={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fu=["Webkit","ms","Moz","O"];Object.keys(In).forEach(function(e){Fu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),In[t]=In[e]})});function fl(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||In.hasOwnProperty(e)&&In[e]?(""+t).trim():t+"px"}function yl(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var o=n.indexOf("--")===0,a=fl(n,t[n],o);n==="float"&&(n="cssFloat"),o?e.setProperty(n,a):e[n]=a}}var Uu=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function os(e,t){if(t){if(Uu[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(w(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(w(61))}if(t.style!=null&&typeof t.style!="object")throw Error(w(62))}}function as(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function qs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var is=null,Jt=null,Yt=null;function Gi(e){if(e=Qn(e)){if(typeof is!="function")throw Error(w(280));var t=e.stateNode;t&&(t=ia(t),is(e.stateNode,e.type,t))}}function wl(e){Jt?Yt?Yt.push(e):Yt=[e]:Jt=e}function vl(){if(Jt){var e=Jt,t=Yt;if(Yt=Jt=null,Gi(e),t)for(e=0;e<t.length;e++)Gi(t[e])}}function kl(e,t){return e(t)}function bl(){}var Sa=!1;function Il(e,t,n){if(Sa)return e(t,n);Sa=!0;try{return kl(e,t,n)}finally{Sa=!1,(Jt!==null||Yt!==null)&&(bl(),vl())}}function Mn(e,t){var n=e.stateNode;if(n===null)return null;var o=ia(n);if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var rs=!1;if(Ge)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){rs=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{rs=!1}function Bu(e,t,n,o,a,s,i,r,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var jn=!1,Po=null,Mo=!1,ls=null,Ou={onError:function(e){jn=!0,Po=e}};function Vu(e,t,n,o,a,s,i,r,l){jn=!1,Po=null,Bu.apply(Ou,arguments)}function Wu(e,t,n,o,a,s,i,r,l){if(Vu.apply(this,arguments),jn){if(jn){var u=Po;jn=!1,Po=null}else throw Error(w(198));Mo||(Mo=!0,ls=u)}}function Nt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function jl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ji(e){if(Nt(e)!==e)throw Error(w(188))}function Gu(e){var t=e.alternate;if(!t){if(t=Nt(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,o=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(o=a.return,o!==null){n=o;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return Ji(a),e;if(s===o)return Ji(a),t;s=s.sibling}throw Error(w(188))}if(n.return!==o.return)n=a,o=s;else{for(var i=!1,r=a.child;r;){if(r===n){i=!0,n=a,o=s;break}if(r===o){i=!0,o=a,n=s;break}r=r.sibling}if(!i){for(r=s.child;r;){if(r===n){i=!0,n=s,o=a;break}if(r===o){i=!0,o=s,n=a;break}r=r.sibling}if(!i)throw Error(w(189))}}if(n.alternate!==o)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function Sl(e){return e=Gu(e),e!==null?xl(e):null}function xl(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xl(e);if(t!==null)return t;e=e.sibling}return null}var Cl=ye.unstable_scheduleCallback,Yi=ye.unstable_cancelCallback,Ju=ye.unstable_shouldYield,Yu=ye.unstable_requestPaint,G=ye.unstable_now,Ku=ye.unstable_getCurrentPriorityLevel,Qs=ye.unstable_ImmediatePriority,Tl=ye.unstable_UserBlockingPriority,Lo=ye.unstable_NormalPriority,$u=ye.unstable_LowPriority,Al=ye.unstable_IdlePriority,na=null,_e=null;function qu(e){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(na,e,void 0,(e.current.flags&128)===128)}catch{}}var Ne=Math.clz32?Math.clz32:Zu,Qu=Math.log,Xu=Math.LN2;function Zu(e){return e>>>=0,e===0?32:31-(Qu(e)/Xu|0)|0}var so=64,io=4194304;function kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var o=0,a=e.suspendedLanes,s=e.pingedLanes,i=n&268435455;if(i!==0){var r=i&~a;r!==0?o=kn(r):(s&=i,s!==0&&(o=kn(s)))}else i=n&~a,i!==0?o=kn(i):s!==0&&(o=kn(s));if(o===0)return 0;if(t!==0&&t!==o&&!(t&a)&&(a=o&-o,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if(o&4&&(o|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)n=31-Ne(t),a=1<<n,o|=e[n],t&=~a;return o}function ed(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function td(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-Ne(s),r=1<<i,l=a[i];l===-1?(!(r&n)||r&o)&&(a[i]=ed(r,t)):l<=t&&(e.expiredLanes|=r),s&=~r}}function hs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zl(){var e=so;return so<<=1,!(so&4194240)&&(so=64),e}function xa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $n(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ne(t),e[t]=n}function nd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-Ne(n),s=1<<a;t[a]=0,o[a]=-1,e[a]=-1,n&=~s}}function Xs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-Ne(n),a=1<<o;a&t|e[o]&t&&(e[o]|=t),n&=~a}}var M=0;function El(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nl,Zs,Pl,Ml,Ll,us=!1,ro=[],ot=null,at=null,st=null,Ln=new Map,Hn=new Map,Ze=[],od="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ki(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Ln.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function cn(e,t,n,o,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Qn(t),t!==null&&Zs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function ad(e,t,n,o,a){switch(t){case"focusin":return ot=cn(ot,e,t,n,o,a),!0;case"dragenter":return at=cn(at,e,t,n,o,a),!0;case"mouseover":return st=cn(st,e,t,n,o,a),!0;case"pointerover":var s=a.pointerId;return Ln.set(s,cn(Ln.get(s)||null,e,t,n,o,a)),!0;case"gotpointercapture":return s=a.pointerId,Hn.set(s,cn(Hn.get(s)||null,e,t,n,o,a)),!0}return!1}function Hl(e){var t=kt(e.target);if(t!==null){var n=Nt(t);if(n!==null){if(t=n.tag,t===13){if(t=jl(n),t!==null){e.blockedOn=t,Ll(e.priority,function(){Pl(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ds(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);ss=o,n.target.dispatchEvent(o),ss=null}else return t=Qn(n),t!==null&&Zs(t),e.blockedOn=n,!1;t.shift()}return!0}function $i(e,t,n){bo(e)&&n.delete(t)}function sd(){us=!1,ot!==null&&bo(ot)&&(ot=null),at!==null&&bo(at)&&(at=null),st!==null&&bo(st)&&(st=null),Ln.forEach($i),Hn.forEach($i)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,us||(us=!0,ye.unstable_scheduleCallback(ye.unstable_NormalPriority,sd)))}function Dn(e){function t(a){return mn(a,e)}if(0<ro.length){mn(ro[0],e);for(var n=1;n<ro.length;n++){var o=ro[n];o.blockedOn===e&&(o.blockedOn=null)}}for(ot!==null&&mn(ot,e),at!==null&&mn(at,e),st!==null&&mn(st,e),Ln.forEach(t),Hn.forEach(t),n=0;n<Ze.length;n++)o=Ze[n],o.blockedOn===e&&(o.blockedOn=null);for(;0<Ze.length&&(n=Ze[0],n.blockedOn===null);)Hl(n),n.blockedOn===null&&Ze.shift()}var Kt=$e.ReactCurrentBatchConfig,Do=!0;function id(e,t,n,o){var a=M,s=Kt.transition;Kt.transition=null;try{M=1,ei(e,t,n,o)}finally{M=a,Kt.transition=s}}function rd(e,t,n,o){var a=M,s=Kt.transition;Kt.transition=null;try{M=4,ei(e,t,n,o)}finally{M=a,Kt.transition=s}}function ei(e,t,n,o){if(Do){var a=ds(e,t,n,o);if(a===null)Ha(e,t,o,_o,n),Ki(e,o);else if(ad(a,e,t,n,o))o.stopPropagation();else if(Ki(e,o),t&4&&-1<od.indexOf(e)){for(;a!==null;){var s=Qn(a);if(s!==null&&Nl(s),s=ds(e,t,n,o),s===null&&Ha(e,t,o,_o,n),s===a)break;a=s}a!==null&&o.stopPropagation()}else Ha(e,t,o,null,n)}}var _o=null;function ds(e,t,n,o){if(_o=null,e=qs(o),e=kt(e),e!==null)if(t=Nt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=jl(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return _o=e,null}function Dl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ku()){case Qs:return 1;case Tl:return 4;case Lo:case $u:return 16;case Al:return 536870912;default:return 16}default:return 16}}var tt=null,ti=null,Io=null;function _l(){if(Io)return Io;var e,t=ti,n=t.length,o,a="value"in tt?tt.value:tt.textContent,s=a.length;for(e=0;e<n&&t[e]===a[e];e++);var i=n-e;for(o=1;o<=i&&t[n-o]===a[s-o];o++);return Io=a.slice(e,1<o?1-o:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function qi(){return!1}function ve(e){function t(n,o,a,s,i){this._reactName=n,this._targetInst=a,this.type=o,this.nativeEvent=s,this.target=i,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(s):s[r]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:qi,this.isPropagationStopped=qi,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ni=ve(sn),qn=B({},sn,{view:0,detail:0}),ld=ve(qn),Ca,Ta,gn,oa=B({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(Ca=e.screenX-gn.screenX,Ta=e.screenY-gn.screenY):Ta=Ca=0,gn=e),Ca)},movementY:function(e){return"movementY"in e?e.movementY:Ta}}),Qi=ve(oa),hd=B({},oa,{dataTransfer:0}),ud=ve(hd),dd=B({},qn,{relatedTarget:0}),Aa=ve(dd),cd=B({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),md=ve(cd),gd=B({},sn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pd=ve(gd),fd=B({},sn,{data:0}),Xi=ve(fd),yd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=vd[e])?!!t[e]:!1}function oi(){return kd}var bd=B({},qn,{key:function(e){if(e.key){var t=yd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oi,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Id=ve(bd),jd=B({},oa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zi=ve(jd),Sd=B({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oi}),xd=ve(Sd),Cd=B({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Td=ve(Cd),Ad=B({},oa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zd=ve(Ad),Ed=[9,13,27,32],ai=Ge&&"CompositionEvent"in window,Sn=null;Ge&&"documentMode"in document&&(Sn=document.documentMode);var Nd=Ge&&"TextEvent"in window&&!Sn,Rl=Ge&&(!ai||Sn&&8<Sn&&11>=Sn),er=" ",tr=!1;function Fl(e,t){switch(e){case"keyup":return Ed.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ul(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ht=!1;function Pd(e,t){switch(e){case"compositionend":return Ul(t);case"keypress":return t.which!==32?null:(tr=!0,er);case"textInput":return e=t.data,e===er&&tr?null:e;default:return null}}function Md(e,t){if(Ht)return e==="compositionend"||!ai&&Fl(e,t)?(e=_l(),Io=ti=tt=null,Ht=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rl&&t.locale!=="ko"?null:t.data;default:return null}}var Ld={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ld[e.type]:t==="textarea"}function Bl(e,t,n,o){wl(o),t=Ro(t,"onChange"),0<t.length&&(n=new ni("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var xn=null,_n=null;function Hd(e){Xl(e,0)}function aa(e){var t=Rt(e);if(dl(t))return e}function Dd(e,t){if(e==="change")return t}var Ol=!1;if(Ge){var za;if(Ge){var Ea="oninput"in document;if(!Ea){var or=document.createElement("div");or.setAttribute("oninput","return;"),Ea=typeof or.oninput=="function"}za=Ea}else za=!1;Ol=za&&(!document.documentMode||9<document.documentMode)}function ar(){xn&&(xn.detachEvent("onpropertychange",Vl),_n=xn=null)}function Vl(e){if(e.propertyName==="value"&&aa(_n)){var t=[];Bl(t,_n,e,qs(e)),Il(Hd,t)}}function _d(e,t,n){e==="focusin"?(ar(),xn=t,_n=n,xn.attachEvent("onpropertychange",Vl)):e==="focusout"&&ar()}function Rd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return aa(_n)}function Fd(e,t){if(e==="click")return aa(t)}function Ud(e,t){if(e==="input"||e==="change")return aa(t)}function Bd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Bd;function Rn(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var a=n[o];if(!Ya.call(t,a)||!Me(e[a],t[a]))return!1}return!0}function sr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ir(e,t){var n=sr(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sr(n)}}function Wl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gl(){for(var e=window,t=No();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=No(e.document)}return t}function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Od(e){var t=Gl(),n=e.focusedElem,o=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wl(n.ownerDocument.documentElement,n)){if(o!==null&&si(n)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(o.start,a);o=o.end===void 0?s:Math.min(o.end,a),!e.extend&&s>o&&(a=o,o=s,s=a),a=ir(n,s);var i=ir(n,o);a&&i&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>o?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vd=Ge&&"documentMode"in document&&11>=document.documentMode,Dt=null,cs=null,Cn=null,ms=!1;function rr(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ms||Dt==null||Dt!==No(o)||(o=Dt,"selectionStart"in o&&si(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Cn&&Rn(Cn,o)||(Cn=o,o=Ro(cs,"onSelect"),0<o.length&&(t=new ni("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=Dt)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _t={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Na={},Jl={};Ge&&(Jl=document.createElement("div").style,"AnimationEvent"in window||(delete _t.animationend.animation,delete _t.animationiteration.animation,delete _t.animationstart.animation),"TransitionEvent"in window||delete _t.transitionend.transition);function sa(e){if(Na[e])return Na[e];if(!_t[e])return e;var t=_t[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jl)return Na[e]=t[n];return e}var Yl=sa("animationend"),Kl=sa("animationiteration"),$l=sa("animationstart"),ql=sa("transitionend"),Ql=new Map,lr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mt(e,t){Ql.set(e,t),Et(t,[e])}for(var Pa=0;Pa<lr.length;Pa++){var Ma=lr[Pa],Wd=Ma.toLowerCase(),Gd=Ma[0].toUpperCase()+Ma.slice(1);mt(Wd,"on"+Gd)}mt(Yl,"onAnimationEnd");mt(Kl,"onAnimationIteration");mt($l,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(ql,"onTransitionEnd");Qt("onMouseEnter",["mouseout","mouseover"]);Qt("onMouseLeave",["mouseout","mouseover"]);Qt("onPointerEnter",["pointerout","pointerover"]);Qt("onPointerLeave",["pointerout","pointerover"]);Et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Et("onBeforeInput",["compositionend","keypress","textInput","paste"]);Et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jd=new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));function hr(e,t,n){var o=e.type||"unknown-event";e.currentTarget=n,Wu(o,t,void 0,e),e.currentTarget=null}function Xl(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],a=o.event;o=o.listeners;e:{var s=void 0;if(t)for(var i=o.length-1;0<=i;i--){var r=o[i],l=r.instance,u=r.currentTarget;if(r=r.listener,l!==s&&a.isPropagationStopped())break e;hr(a,r,u),s=l}else for(i=0;i<o.length;i++){if(r=o[i],l=r.instance,u=r.currentTarget,r=r.listener,l!==s&&a.isPropagationStopped())break e;hr(a,r,u),s=l}}}if(Mo)throw e=ls,Mo=!1,ls=null,e}function H(e,t){var n=t[ws];n===void 0&&(n=t[ws]=new Set);var o=e+"__bubble";n.has(o)||(Zl(t,e,2,!1),n.add(o))}function La(e,t,n){var o=0;t&&(o|=4),Zl(n,e,o,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[uo]){e[uo]=!0,il.forEach(function(n){n!=="selectionchange"&&(Jd.has(n)||La(n,!1,e),La(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,La("selectionchange",!1,t))}}function Zl(e,t,n,o){switch(Dl(t)){case 1:var a=id;break;case 4:a=rd;break;default:a=ei}n=a.bind(null,t,n,e),a=void 0,!rs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),o?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ha(e,t,n,o,a){var s=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var i=o.tag;if(i===3||i===4){var r=o.stateNode.containerInfo;if(r===a||r.nodeType===8&&r.parentNode===a)break;if(i===4)for(i=o.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;i=i.return}for(;r!==null;){if(i=kt(r),i===null)return;if(l=i.tag,l===5||l===6){o=s=i;continue e}r=r.parentNode}}o=o.return}Il(function(){var u=s,f=qs(n),p=[];e:{var g=Ql.get(e);if(g!==void 0){var v=ni,k=e;switch(e){case"keypress":if(jo(n)===0)break e;case"keydown":case"keyup":v=Id;break;case"focusin":k="focus",v=Aa;break;case"focusout":k="blur",v=Aa;break;case"beforeblur":case"afterblur":v=Aa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Qi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xd;break;case Yl:case Kl:case $l:v=md;break;case ql:v=Td;break;case"scroll":v=ld;break;case"wheel":v=zd;break;case"copy":case"cut":case"paste":v=pd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Zi}var b=(t&4)!==0,_=!b&&e==="scroll",d=b?g!==null?g+"Capture":null:g;b=[];for(var h=u,c;h!==null;){c=h;var y=c.stateNode;if(c.tag===5&&y!==null&&(c=y,d!==null&&(y=Mn(h,d),y!=null&&b.push(Un(h,y,c)))),_)break;h=h.return}0<b.length&&(g=new v(g,k,null,n,f),p.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==ss&&(k=n.relatedTarget||n.fromElement)&&(kt(k)||k[Je]))break e;if((v||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=u,k=k?kt(k):null,k!==null&&(_=Nt(k),k!==_||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(b=Qi,y="onMouseLeave",d="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(b=Zi,y="onPointerLeave",d="onPointerEnter",h="pointer"),_=v==null?g:Rt(v),c=k==null?g:Rt(k),g=new b(y,h+"leave",v,n,f),g.target=_,g.relatedTarget=c,y=null,kt(f)===u&&(b=new b(d,h+"enter",k,n,f),b.target=c,b.relatedTarget=_,y=b),_=y,v&&k)t:{for(b=v,d=k,h=0,c=b;c;c=Pt(c))h++;for(c=0,y=d;y;y=Pt(y))c++;for(;0<h-c;)b=Pt(b),h--;for(;0<c-h;)d=Pt(d),c--;for(;h--;){if(b===d||d!==null&&b===d.alternate)break t;b=Pt(b),d=Pt(d)}b=null}else b=null;v!==null&&ur(p,g,v,b,!1),k!==null&&_!==null&&ur(p,_,k,b,!0)}}e:{if(g=u?Rt(u):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var j=Dd;else if(nr(g))if(Ol)j=Ud;else{j=Rd;var x=_d}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Fd);if(j&&(j=j(e,u))){Bl(p,j,n,f);break e}x&&x(e,g,u),e==="focusout"&&(x=g._wrapperState)&&x.controlled&&g.type==="number"&&es(g,"number",g.value)}switch(x=u?Rt(u):window,e){case"focusin":(nr(x)||x.contentEditable==="true")&&(Dt=x,cs=u,Cn=null);break;case"focusout":Cn=cs=Dt=null;break;case"mousedown":ms=!0;break;case"contextmenu":case"mouseup":case"dragend":ms=!1,rr(p,n,f);break;case"selectionchange":if(Vd)break;case"keydown":case"keyup":rr(p,n,f)}var C;if(ai)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Ht?Fl(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Rl&&n.locale!=="ko"&&(Ht||T!=="onCompositionStart"?T==="onCompositionEnd"&&Ht&&(C=_l()):(tt=f,ti="value"in tt?tt.value:tt.textContent,Ht=!0)),x=Ro(u,T),0<x.length&&(T=new Xi(T,e,null,n,f),p.push({event:T,listeners:x}),C?T.data=C:(C=Ul(n),C!==null&&(T.data=C)))),(C=Nd?Pd(e,n):Md(e,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(f=new Xi("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:u}),f.data=C))}Xl(p,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",o=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Mn(e,n),s!=null&&o.unshift(Un(e,s,a)),s=Mn(e,t),s!=null&&o.push(Un(e,s,a))),e=e.return}return o}function Pt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ur(e,t,n,o,a){for(var s=t._reactName,i=[];n!==null&&n!==o;){var r=n,l=r.alternate,u=r.stateNode;if(l!==null&&l===o)break;r.tag===5&&u!==null&&(r=u,a?(l=Mn(n,s),l!=null&&i.unshift(Un(n,l,r))):a||(l=Mn(n,s),l!=null&&i.push(Un(n,l,r)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Yd=/\r\n?/g,Kd=/\u0000|\uFFFD/g;function dr(e){return(typeof e=="string"?e:""+e).replace(Yd,`
`).replace(Kd,"")}function co(e,t,n){if(t=dr(t),dr(e)!==t&&n)throw Error(w(425))}function Fo(){}var gs=null,ps=null;function fs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ys=typeof setTimeout=="function"?setTimeout:void 0,$d=typeof clearTimeout=="function"?clearTimeout:void 0,cr=typeof Promise=="function"?Promise:void 0,qd=typeof queueMicrotask=="function"?queueMicrotask:typeof cr<"u"?function(e){return cr.resolve(null).then(e).catch(Qd)}:ys;function Qd(e){setTimeout(function(){throw e})}function Da(e,t){var n=t,o=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(o===0){e.removeChild(a),Dn(t);return}o--}else n!=="$"&&n!=="$?"&&n!=="$!"||o++;n=a}while(n);Dn(t)}function it(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mr(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var rn=Math.random().toString(36).slice(2),De="__reactFiber$"+rn,Bn="__reactProps$"+rn,Je="__reactContainer$"+rn,ws="__reactEvents$"+rn,Xd="__reactListeners$"+rn,Zd="__reactHandles$"+rn;function kt(e){var t=e[De];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Je]||n[De]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mr(e);e!==null;){if(n=e[De])return n;e=mr(e)}return t}e=n,n=e.parentNode}return null}function Qn(e){return e=e[De]||e[Je],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ia(e){return e[Bn]||null}var vs=[],Ft=-1;function gt(e){return{current:e}}function D(e){0>Ft||(e.current=vs[Ft],vs[Ft]=null,Ft--)}function L(e,t){Ft++,vs[Ft]=e.current,e.current=t}var ct={},ae=gt(ct),de=gt(!1),xt=ct;function Xt(e,t){var n=e.type.contextTypes;if(!n)return ct;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in n)a[s]=t[s];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ce(e){return e=e.childContextTypes,e!=null}function Uo(){D(de),D(ae)}function gr(e,t,n){if(ae.current!==ct)throw Error(w(168));L(ae,t),L(de,n)}function eh(e,t,n){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return n;o=o.getChildContext();for(var a in o)if(!(a in t))throw Error(w(108,_u(e)||"Unknown",a));return B({},n,o)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ct,xt=ae.current,L(ae,e),L(de,de.current),!0}function pr(e,t,n){var o=e.stateNode;if(!o)throw Error(w(169));n?(e=eh(e,t,xt),o.__reactInternalMemoizedMergedChildContext=e,D(de),D(ae),L(ae,e)):D(de),L(de,n)}var Ue=null,ra=!1,_a=!1;function th(e){Ue===null?Ue=[e]:Ue.push(e)}function ec(e){ra=!0,th(e)}function pt(){if(!_a&&Ue!==null){_a=!0;var e=0,t=M;try{var n=Ue;for(M=1;e<n.length;e++){var o=n[e];do o=o(!0);while(o!==null)}Ue=null,ra=!1}catch(a){throw Ue!==null&&(Ue=Ue.slice(e+1)),Cl(Qs,pt),a}finally{M=t,_a=!1}}return null}var Ut=[],Bt=0,Oo=null,Vo=0,ke=[],be=0,Ct=null,Oe=1,Ve="";function wt(e,t){Ut[Bt++]=Vo,Ut[Bt++]=Oo,Oo=e,Vo=t}function nh(e,t,n){ke[be++]=Oe,ke[be++]=Ve,ke[be++]=Ct,Ct=e;var o=Oe;e=Ve;var a=32-Ne(o)-1;o&=~(1<<a),n+=1;var s=32-Ne(t)+a;if(30<s){var i=a-a%5;s=(o&(1<<i)-1).toString(32),o>>=i,a-=i,Oe=1<<32-Ne(t)+a|n<<a|o,Ve=s+e}else Oe=1<<s|n<<a|o,Ve=e}function ii(e){e.return!==null&&(wt(e,1),nh(e,1,0))}function ri(e){for(;e===Oo;)Oo=Ut[--Bt],Ut[Bt]=null,Vo=Ut[--Bt],Ut[Bt]=null;for(;e===Ct;)Ct=ke[--be],ke[be]=null,Ve=ke[--be],ke[be]=null,Oe=ke[--be],ke[be]=null}var fe=null,pe=null,R=!1,Ee=null;function oh(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fr(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,fe=e,pe=it(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,fe=e,pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:Oe,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,fe=e,pe=null,!0):!1;default:return!1}}function ks(e){return(e.mode&1)!==0&&(e.flags&128)===0}function bs(e){if(R){var t=pe;if(t){var n=t;if(!fr(e,t)){if(ks(e))throw Error(w(418));t=it(n.nextSibling);var o=fe;t&&fr(e,t)?oh(o,n):(e.flags=e.flags&-4097|2,R=!1,fe=e)}}else{if(ks(e))throw Error(w(418));e.flags=e.flags&-4097|2,R=!1,fe=e}}}function yr(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;fe=e}function mo(e){if(e!==fe)return!1;if(!R)return yr(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fs(e.type,e.memoizedProps)),t&&(t=pe)){if(ks(e))throw ah(),Error(w(418));for(;t;)oh(e,t),t=it(t.nextSibling)}if(yr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pe=it(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pe=null}}else pe=fe?it(e.stateNode.nextSibling):null;return!0}function ah(){for(var e=pe;e;)e=it(e.nextSibling)}function Zt(){pe=fe=null,R=!1}function li(e){Ee===null?Ee=[e]:Ee.push(e)}var tc=$e.ReactCurrentBatchConfig;function pn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var o=n.stateNode}if(!o)throw Error(w(147,e));var a=o,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(i){var r=a.refs;i===null?delete r[s]:r[s]=i},t._stringRef=s,t)}if(typeof e!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wr(e){var t=e._init;return t(e._payload)}function sh(e){function t(d,h){if(e){var c=d.deletions;c===null?(d.deletions=[h],d.flags|=16):c.push(h)}}function n(d,h){if(!e)return null;for(;h!==null;)t(d,h),h=h.sibling;return null}function o(d,h){for(d=new Map;h!==null;)h.key!==null?d.set(h.key,h):d.set(h.index,h),h=h.sibling;return d}function a(d,h){return d=ut(d,h),d.index=0,d.sibling=null,d}function s(d,h,c){return d.index=c,e?(c=d.alternate,c!==null?(c=c.index,c<h?(d.flags|=2,h):c):(d.flags|=2,h)):(d.flags|=1048576,h)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function r(d,h,c,y){return h===null||h.tag!==6?(h=Wa(c,d.mode,y),h.return=d,h):(h=a(h,c),h.return=d,h)}function l(d,h,c,y){var j=c.type;return j===Lt?f(d,h,c.props.children,y,c.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Qe&&wr(j)===h.type)?(y=a(h,c.props),y.ref=pn(d,h,c),y.return=d,y):(y=Eo(c.type,c.key,c.props,null,d.mode,y),y.ref=pn(d,h,c),y.return=d,y)}function u(d,h,c,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==c.containerInfo||h.stateNode.implementation!==c.implementation?(h=Ga(c,d.mode,y),h.return=d,h):(h=a(h,c.children||[]),h.return=d,h)}function f(d,h,c,y,j){return h===null||h.tag!==7?(h=St(c,d.mode,y,j),h.return=d,h):(h=a(h,c),h.return=d,h)}function p(d,h,c){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Wa(""+h,d.mode,c),h.return=d,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case no:return c=Eo(h.type,h.key,h.props,null,d.mode,c),c.ref=pn(d,null,h),c.return=d,c;case Mt:return h=Ga(h,d.mode,c),h.return=d,h;case Qe:var y=h._init;return p(d,y(h._payload),c)}if(vn(h)||un(h))return h=St(h,d.mode,c,null),h.return=d,h;go(d,h)}return null}function g(d,h,c,y){var j=h!==null?h.key:null;if(typeof c=="string"&&c!==""||typeof c=="number")return j!==null?null:r(d,h,""+c,y);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case no:return c.key===j?l(d,h,c,y):null;case Mt:return c.key===j?u(d,h,c,y):null;case Qe:return j=c._init,g(d,h,j(c._payload),y)}if(vn(c)||un(c))return j!==null?null:f(d,h,c,y,null);go(d,c)}return null}function v(d,h,c,y,j){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(c)||null,r(h,d,""+y,j);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return d=d.get(y.key===null?c:y.key)||null,l(h,d,y,j);case Mt:return d=d.get(y.key===null?c:y.key)||null,u(h,d,y,j);case Qe:var x=y._init;return v(d,h,c,x(y._payload),j)}if(vn(y)||un(y))return d=d.get(c)||null,f(h,d,y,j,null);go(h,y)}return null}function k(d,h,c,y){for(var j=null,x=null,C=h,T=h=0,V=null;C!==null&&T<c.length;T++){C.index>T?(V=C,C=null):V=C.sibling;var N=g(d,C,c[T],y);if(N===null){C===null&&(C=V);break}e&&C&&N.alternate===null&&t(d,C),h=s(N,h,T),x===null?j=N:x.sibling=N,x=N,C=V}if(T===c.length)return n(d,C),R&&wt(d,T),j;if(C===null){for(;T<c.length;T++)C=p(d,c[T],y),C!==null&&(h=s(C,h,T),x===null?j=C:x.sibling=C,x=C);return R&&wt(d,T),j}for(C=o(d,C);T<c.length;T++)V=v(C,d,T,c[T],y),V!==null&&(e&&V.alternate!==null&&C.delete(V.key===null?T:V.key),h=s(V,h,T),x===null?j=V:x.sibling=V,x=V);return e&&C.forEach(function(Ce){return t(d,Ce)}),R&&wt(d,T),j}function b(d,h,c,y){var j=un(c);if(typeof j!="function")throw Error(w(150));if(c=j.call(c),c==null)throw Error(w(151));for(var x=j=null,C=h,T=h=0,V=null,N=c.next();C!==null&&!N.done;T++,N=c.next()){C.index>T?(V=C,C=null):V=C.sibling;var Ce=g(d,C,N.value,y);if(Ce===null){C===null&&(C=V);break}e&&C&&Ce.alternate===null&&t(d,C),h=s(Ce,h,T),x===null?j=Ce:x.sibling=Ce,x=Ce,C=V}if(N.done)return n(d,C),R&&wt(d,T),j;if(C===null){for(;!N.done;T++,N=c.next())N=p(d,N.value,y),N!==null&&(h=s(N,h,T),x===null?j=N:x.sibling=N,x=N);return R&&wt(d,T),j}for(C=o(d,C);!N.done;T++,N=c.next())N=v(C,d,T,N.value,y),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?T:N.key),h=s(N,h,T),x===null?j=N:x.sibling=N,x=N);return e&&C.forEach(function(ln){return t(d,ln)}),R&&wt(d,T),j}function _(d,h,c,y){if(typeof c=="object"&&c!==null&&c.type===Lt&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case no:e:{for(var j=c.key,x=h;x!==null;){if(x.key===j){if(j=c.type,j===Lt){if(x.tag===7){n(d,x.sibling),h=a(x,c.props.children),h.return=d,d=h;break e}}else if(x.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Qe&&wr(j)===x.type){n(d,x.sibling),h=a(x,c.props),h.ref=pn(d,x,c),h.return=d,d=h;break e}n(d,x);break}else t(d,x);x=x.sibling}c.type===Lt?(h=St(c.props.children,d.mode,y,c.key),h.return=d,d=h):(y=Eo(c.type,c.key,c.props,null,d.mode,y),y.ref=pn(d,h,c),y.return=d,d=y)}return i(d);case Mt:e:{for(x=c.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===c.containerInfo&&h.stateNode.implementation===c.implementation){n(d,h.sibling),h=a(h,c.children||[]),h.return=d,d=h;break e}else{n(d,h);break}else t(d,h);h=h.sibling}h=Ga(c,d.mode,y),h.return=d,d=h}return i(d);case Qe:return x=c._init,_(d,h,x(c._payload),y)}if(vn(c))return k(d,h,c,y);if(un(c))return b(d,h,c,y);go(d,c)}return typeof c=="string"&&c!==""||typeof c=="number"?(c=""+c,h!==null&&h.tag===6?(n(d,h.sibling),h=a(h,c),h.return=d,d=h):(n(d,h),h=Wa(c,d.mode,y),h.return=d,d=h),i(d)):n(d,h)}return _}var en=sh(!0),ih=sh(!1),Wo=gt(null),Go=null,Ot=null,hi=null;function ui(){hi=Ot=Go=null}function di(e){var t=Wo.current;D(Wo),e._currentValue=t}function Is(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function $t(e,t){Go=e,hi=Ot=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ue=!0),e.firstContext=null)}function Se(e){var t=e._currentValue;if(hi!==e)if(e={context:e,memoizedValue:t,next:null},Ot===null){if(Go===null)throw Error(w(308));Ot=e,Go.dependencies={lanes:0,firstContext:e}}else Ot=Ot.next=e;return t}var bt=null;function ci(e){bt===null?bt=[e]:bt.push(e)}function rh(e,t,n,o){var a=t.interleaved;return a===null?(n.next=n,ci(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ye(e,o)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Xe=!1;function mi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rt(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,P&2){var a=o.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),o.pending=t,Ye(e,n)}return a=o.interleaved,a===null?(t.next=t,ci(o)):(t.next=a.next,a.next=t),o.interleaved=t,Ye(e,n)}function So(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Xs(e,n)}}function vr(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var a=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?a=s=i:s=s.next=i,n=n.next}while(n!==null);s===null?a=s=t:s=s.next=t}else a=s=t;n={baseState:o.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:o.shared,effects:o.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,o){var a=e.updateQueue;Xe=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,r=a.shared.pending;if(r!==null){a.shared.pending=null;var l=r,u=l.next;l.next=null,i===null?s=u:i.next=u,i=l;var f=e.alternate;f!==null&&(f=f.updateQueue,r=f.lastBaseUpdate,r!==i&&(r===null?f.firstBaseUpdate=u:r.next=u,f.lastBaseUpdate=l))}if(s!==null){var p=a.baseState;i=0,f=u=l=null,r=s;do{var g=r.lane,v=r.eventTime;if((o&g)===g){f!==null&&(f=f.next={eventTime:v,lane:0,tag:r.tag,payload:r.payload,callback:r.callback,next:null});e:{var k=e,b=r;switch(g=t,v=n,b.tag){case 1:if(k=b.payload,typeof k=="function"){p=k.call(v,p,g);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=b.payload,g=typeof k=="function"?k.call(v,p,g):k,g==null)break e;p=B({},p,g);break e;case 2:Xe=!0}}r.callback!==null&&r.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[r]:g.push(r))}else v={eventTime:v,lane:g,tag:r.tag,payload:r.payload,callback:r.callback,next:null},f===null?(u=f=v,l=p):f=f.next=v,i|=g;if(r=r.next,r===null){if(r=a.shared.pending,r===null)break;g=r,r=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(f===null&&(l=p),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=f,t=a.shared.interleaved,t!==null){a=t;do i|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);At|=i,e.lanes=i,e.memoizedState=p}}function kr(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],a=o.callback;if(a!==null){if(o.callback=null,o=n,typeof a!="function")throw Error(w(191,a));a.call(o)}}}var Xn={},Re=gt(Xn),On=gt(Xn),Vn=gt(Xn);function It(e){if(e===Xn)throw Error(w(174));return e}function gi(e,t){switch(L(Vn,t),L(On,e),L(Re,Xn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ns(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ns(t,e)}D(Re),L(Re,t)}function tn(){D(Re),D(On),D(Vn)}function hh(e){It(Vn.current);var t=It(Re.current),n=ns(t,e.type);t!==n&&(L(On,e),L(Re,n))}function pi(e){On.current===e&&(D(Re),D(On))}var F=gt(0);function Yo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ra=[];function fi(){for(var e=0;e<Ra.length;e++)Ra[e]._workInProgressVersionPrimary=null;Ra.length=0}var xo=$e.ReactCurrentDispatcher,Fa=$e.ReactCurrentBatchConfig,Tt=0,U=null,Y=null,q=null,Ko=!1,Tn=!1,Wn=0,nc=0;function te(){throw Error(w(321))}function yi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function wi(e,t,n,o,a,s){if(Tt=s,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?ic:rc,e=n(o,a),Tn){s=0;do{if(Tn=!1,Wn=0,25<=s)throw Error(w(301));s+=1,q=Y=null,t.updateQueue=null,xo.current=lc,e=n(o,a)}while(Tn)}if(xo.current=$o,t=Y!==null&&Y.next!==null,Tt=0,q=Y=U=null,Ko=!1,t)throw Error(w(300));return e}function vi(){var e=Wn!==0;return Wn=0,e}function He(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?U.memoizedState=q=e:q=q.next=e,q}function xe(){if(Y===null){var e=U.alternate;e=e!==null?e.memoizedState:null}else e=Y.next;var t=q===null?U.memoizedState:q.next;if(t!==null)q=t,Y=e;else{if(e===null)throw Error(w(310));Y=e,e={memoizedState:Y.memoizedState,baseState:Y.baseState,baseQueue:Y.baseQueue,queue:Y.queue,next:null},q===null?U.memoizedState=q=e:q=q.next=e}return q}function Gn(e,t){return typeof t=="function"?t(e):t}function Ua(e){var t=xe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var o=Y,a=o.baseQueue,s=n.pending;if(s!==null){if(a!==null){var i=a.next;a.next=s.next,s.next=i}o.baseQueue=a=s,n.pending=null}if(a!==null){s=a.next,o=o.baseState;var r=i=null,l=null,u=s;do{var f=u.lane;if((Tt&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),o=u.hasEagerState?u.eagerState:e(o,u.action);else{var p={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(r=l=p,i=o):l=l.next=p,U.lanes|=f,At|=f}u=u.next}while(u!==null&&u!==s);l===null?i=o:l.next=r,Me(o,t.memoizedState)||(ue=!0),t.memoizedState=o,t.baseState=i,t.baseQueue=l,n.lastRenderedState=o}if(e=n.interleaved,e!==null){a=e;do s=a.lane,U.lanes|=s,At|=s,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ba(e){var t=xe(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var o=n.dispatch,a=n.pending,s=t.memoizedState;if(a!==null){n.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a);Me(s,t.memoizedState)||(ue=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,o]}function uh(){}function dh(e,t){var n=U,o=xe(),a=t(),s=!Me(o.memoizedState,a);if(s&&(o.memoizedState=a,ue=!0),o=o.queue,ki(gh.bind(null,n,o,e),[e]),o.getSnapshot!==t||s||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Jn(9,mh.bind(null,n,o,a,t),void 0,null),Q===null)throw Error(w(349));Tt&30||ch(n,t,a)}return a}function ch(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mh(e,t,n,o){t.value=n,t.getSnapshot=o,ph(t)&&fh(e)}function gh(e,t,n){return n(function(){ph(t)&&fh(e)})}function ph(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function fh(e){var t=Ye(e,1);t!==null&&Pe(t,e,1,-1)}function br(e){var t=He();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gn,lastRenderedState:e},t.queue=e,e=e.dispatch=sc.bind(null,U,e),[t.memoizedState,e]}function Jn(e,t,n,o){return e={tag:e,create:t,destroy:n,deps:o,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e)),e}function yh(){return xe().memoizedState}function Co(e,t,n,o){var a=He();U.flags|=e,a.memoizedState=Jn(1|t,n,void 0,o===void 0?null:o)}function la(e,t,n,o){var a=xe();o=o===void 0?null:o;var s=void 0;if(Y!==null){var i=Y.memoizedState;if(s=i.destroy,o!==null&&yi(o,i.deps)){a.memoizedState=Jn(t,n,s,o);return}}U.flags|=e,a.memoizedState=Jn(1|t,n,s,o)}function Ir(e,t){return Co(8390656,8,e,t)}function ki(e,t){return la(2048,8,e,t)}function wh(e,t){return la(4,2,e,t)}function vh(e,t){return la(4,4,e,t)}function kh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bh(e,t,n){return n=n!=null?n.concat([e]):null,la(4,4,kh.bind(null,t,e),n)}function bi(){}function Ih(e,t){var n=xe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&yi(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function jh(e,t){var n=xe();t=t===void 0?null:t;var o=n.memoizedState;return o!==null&&t!==null&&yi(t,o[1])?o[0]:(e=e(),n.memoizedState=[e,t],e)}function Sh(e,t,n){return Tt&21?(Me(n,t)||(n=zl(),U.lanes|=n,At|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ue=!0),e.memoizedState=n)}function oc(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var o=Fa.transition;Fa.transition={};try{e(!1),t()}finally{M=n,Fa.transition=o}}function xh(){return xe().memoizedState}function ac(e,t,n){var o=ht(e);if(n={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null},Ch(e))Th(t,n);else if(n=rh(e,t,n,o),n!==null){var a=ie();Pe(n,e,o,a),Ah(n,t,o)}}function sc(e,t,n){var o=ht(e),a={lane:o,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ch(e))Th(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var i=t.lastRenderedState,r=s(i,n);if(a.hasEagerState=!0,a.eagerState=r,Me(r,i)){var l=t.interleaved;l===null?(a.next=a,ci(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=rh(e,t,a,o),n!==null&&(a=ie(),Pe(n,e,o,a),Ah(n,t,o))}}function Ch(e){var t=e.alternate;return e===U||t!==null&&t===U}function Th(e,t){Tn=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ah(e,t,n){if(n&4194240){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,Xs(e,n)}}var $o={readContext:Se,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},ic={readContext:Se,useCallback:function(e,t){return He().memoizedState=[e,t===void 0?null:t],e},useContext:Se,useEffect:Ir,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Co(4194308,4,kh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Co(4194308,4,e,t)},useInsertionEffect:function(e,t){return Co(4,2,e,t)},useMemo:function(e,t){var n=He();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var o=He();return t=n!==void 0?n(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=ac.bind(null,U,e),[o.memoizedState,e]},useRef:function(e){var t=He();return e={current:e},t.memoizedState=e},useState:br,useDebugValue:bi,useDeferredValue:function(e){return He().memoizedState=e},useTransition:function(){var e=br(!1),t=e[0];return e=oc.bind(null,e[1]),He().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var o=U,a=He();if(R){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),Q===null)throw Error(w(349));Tt&30||ch(o,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,Ir(gh.bind(null,o,s,e),[e]),o.flags|=2048,Jn(9,mh.bind(null,o,s,n,t),void 0,null),n},useId:function(){var e=He(),t=Q.identifierPrefix;if(R){var n=Ve,o=Oe;n=(o&~(1<<32-Ne(o)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=nc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rc={readContext:Se,useCallback:Ih,useContext:Se,useEffect:ki,useImperativeHandle:bh,useInsertionEffect:wh,useLayoutEffect:vh,useMemo:jh,useReducer:Ua,useRef:yh,useState:function(){return Ua(Gn)},useDebugValue:bi,useDeferredValue:function(e){var t=xe();return Sh(t,Y.memoizedState,e)},useTransition:function(){var e=Ua(Gn)[0],t=xe().memoizedState;return[e,t]},useMutableSource:uh,useSyncExternalStore:dh,useId:xh,unstable_isNewReconciler:!1},lc={readContext:Se,useCallback:Ih,useContext:Se,useEffect:ki,useImperativeHandle:bh,useInsertionEffect:wh,useLayoutEffect:vh,useMemo:jh,useReducer:Ba,useRef:yh,useState:function(){return Ba(Gn)},useDebugValue:bi,useDeferredValue:function(e){var t=xe();return Y===null?t.memoizedState=e:Sh(t,Y.memoizedState,e)},useTransition:function(){var e=Ba(Gn)[0],t=xe().memoizedState;return[e,t]},useMutableSource:uh,useSyncExternalStore:dh,useId:xh,unstable_isNewReconciler:!1};function Ae(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function js(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ha={isMounted:function(e){return(e=e._reactInternals)?Nt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var o=ie(),a=ht(e),s=We(o,a);s.payload=t,n!=null&&(s.callback=n),t=rt(e,s,a),t!==null&&(Pe(t,e,a,o),So(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=ie(),a=ht(e),s=We(o,a);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=rt(e,s,a),t!==null&&(Pe(t,e,a,o),So(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ie(),o=ht(e),a=We(n,o);a.tag=2,t!=null&&(a.callback=t),t=rt(e,a,o),t!==null&&(Pe(t,e,o,n),So(t,e,o))}};function jr(e,t,n,o,a,s,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,s,i):t.prototype&&t.prototype.isPureReactComponent?!Rn(n,o)||!Rn(a,s):!0}function zh(e,t,n){var o=!1,a=ct,s=t.contextType;return typeof s=="object"&&s!==null?s=Se(s):(a=ce(t)?xt:ae.current,o=t.contextTypes,s=(o=o!=null)?Xt(e,a):ct),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ha,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function Sr(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&ha.enqueueReplaceState(t,t.state,null)}function Ss(e,t,n,o){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},mi(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=Se(s):(s=ce(t)?xt:ae.current,a.context=Xt(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(js(e,t,s,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ha.enqueueReplaceState(a,a.state,null),Jo(e,n,a,o),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function nn(e,t){try{var n="",o=t;do n+=Du(o),o=o.return;while(o);var a=n}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function Oa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function xs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var hc=typeof WeakMap=="function"?WeakMap:Map;function Eh(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var o=t.value;return n.callback=function(){Qo||(Qo=!0,Hs=o),xs(e,t)},n}function Nh(e,t,n){n=We(-1,n),n.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var a=t.value;n.payload=function(){return o(a)},n.callback=function(){xs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xs(e,t),typeof o!="function"&&(lt===null?lt=new Set([this]):lt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function xr(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new hc;var a=new Set;o.set(t,a)}else a=o.get(t),a===void 0&&(a=new Set,o.set(t,a));a.has(n)||(a.add(n),e=jc.bind(null,e,t,n),t.then(e,e))}function Cr(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Tr(e,t,n,o,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,rt(n,t,1))),n.lanes|=1),e)}var uc=$e.ReactCurrentOwner,ue=!1;function se(e,t,n,o){t.child=e===null?ih(t,null,n,o):en(t,e.child,n,o)}function Ar(e,t,n,o,a){n=n.render;var s=t.ref;return $t(t,a),o=wi(e,t,n,o,s,a),n=vi(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ke(e,t,a)):(R&&n&&ii(t),t.flags|=1,se(e,t,o,a),t.child)}function zr(e,t,n,o,a){if(e===null){var s=n.type;return typeof s=="function"&&!zi(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ph(e,t,s,o,a)):(e=Eo(n.type,null,o,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&a)){var i=s.memoizedProps;if(n=n.compare,n=n!==null?n:Rn,n(i,o)&&e.ref===t.ref)return Ke(e,t,a)}return t.flags|=1,e=ut(s,o),e.ref=t.ref,e.return=t,t.child=e}function Ph(e,t,n,o,a){if(e!==null){var s=e.memoizedProps;if(Rn(s,o)&&e.ref===t.ref)if(ue=!1,t.pendingProps=o=s,(e.lanes&a)!==0)e.flags&131072&&(ue=!0);else return t.lanes=e.lanes,Ke(e,t,a)}return Cs(e,t,n,o,a)}function Mh(e,t,n){var o=t.pendingProps,a=o.children,s=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},L(Wt,ge),ge|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,L(Wt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=s!==null?s.baseLanes:n,L(Wt,ge),ge|=o}else s!==null?(o=s.baseLanes|n,t.memoizedState=null):o=n,L(Wt,ge),ge|=o;return se(e,t,a,n),t.child}function Lh(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Cs(e,t,n,o,a){var s=ce(n)?xt:ae.current;return s=Xt(t,s),$t(t,a),n=wi(e,t,n,o,s,a),o=vi(),e!==null&&!ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Ke(e,t,a)):(R&&o&&ii(t),t.flags|=1,se(e,t,n,a),t.child)}function Er(e,t,n,o,a){if(ce(n)){var s=!0;Bo(t)}else s=!1;if($t(t,a),t.stateNode===null)To(e,t),zh(t,n,o),Ss(t,n,o,a),o=!0;else if(e===null){var i=t.stateNode,r=t.memoizedProps;i.props=r;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Se(u):(u=ce(n)?xt:ae.current,u=Xt(t,u));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function";p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==o||l!==u)&&Sr(t,i,o,u),Xe=!1;var g=t.memoizedState;i.state=g,Jo(t,o,i,a),l=t.memoizedState,r!==o||g!==l||de.current||Xe?(typeof f=="function"&&(js(t,n,f,o),l=t.memoizedState),(r=Xe||jr(t,n,r,o,g,l,u))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=l),i.props=o,i.state=l,i.context=u,o=r):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{i=t.stateNode,lh(e,t),r=t.memoizedProps,u=t.type===t.elementType?r:Ae(t.type,r),i.props=u,p=t.pendingProps,g=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Se(l):(l=ce(n)?xt:ae.current,l=Xt(t,l));var v=n.getDerivedStateFromProps;(f=typeof v=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==p||g!==l)&&Sr(t,i,o,l),Xe=!1,g=t.memoizedState,i.state=g,Jo(t,o,i,a);var k=t.memoizedState;r!==p||g!==k||de.current||Xe?(typeof v=="function"&&(js(t,n,v,o),k=t.memoizedState),(u=Xe||jr(t,n,u,o,g,k,l)||!1)?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(o,k,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(o,k,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=k),i.props=o,i.state=k,i.context=l,o=u):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),o=!1)}return Ts(e,t,n,o,s,a)}function Ts(e,t,n,o,a,s){Lh(e,t);var i=(t.flags&128)!==0;if(!o&&!i)return a&&pr(t,n,!1),Ke(e,t,s);o=t.stateNode,uc.current=t;var r=i&&typeof n.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&i?(t.child=en(t,e.child,null,s),t.child=en(t,null,r,s)):se(e,t,r,s),t.memoizedState=o.state,a&&pr(t,n,!0),t.child}function Hh(e){var t=e.stateNode;t.pendingContext?gr(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gr(e,t.context,!1),gi(e,t.containerInfo)}function Nr(e,t,n,o,a){return Zt(),li(a),t.flags|=256,se(e,t,n,o),t.child}var As={dehydrated:null,treeContext:null,retryLane:0};function zs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dh(e,t,n){var o=t.pendingProps,a=F.current,s=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(a&2)!==0),r?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),L(F,a&1),e===null)return bs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=o.children,e=o.fallback,s?(o=t.mode,s=t.child,i={mode:"hidden",children:i},!(o&1)&&s!==null?(s.childLanes=0,s.pendingProps=i):s=ca(i,o,0,null),e=St(e,o,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=zs(n),t.memoizedState=As,e):Ii(t,i));if(a=e.memoizedState,a!==null&&(r=a.dehydrated,r!==null))return dc(e,t,i,o,r,a,n);if(s){s=o.fallback,i=t.mode,a=e.child,r=a.sibling;var l={mode:"hidden",children:o.children};return!(i&1)&&t.child!==a?(o=t.child,o.childLanes=0,o.pendingProps=l,t.deletions=null):(o=ut(a,l),o.subtreeFlags=a.subtreeFlags&14680064),r!==null?s=ut(r,s):(s=St(s,i,n,null),s.flags|=2),s.return=t,o.return=t,o.sibling=s,t.child=o,o=s,s=t.child,i=e.child.memoizedState,i=i===null?zs(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},s.memoizedState=i,s.childLanes=e.childLanes&~n,t.memoizedState=As,o}return s=e.child,e=s.sibling,o=ut(s,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=n),o.return=t,o.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=o,t.memoizedState=null,o}function Ii(e,t){return t=ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,n,o){return o!==null&&li(o),en(t,e.child,null,n),e=Ii(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function dc(e,t,n,o,a,s,i){if(n)return t.flags&256?(t.flags&=-257,o=Oa(Error(w(422))),po(e,t,i,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=o.fallback,a=t.mode,o=ca({mode:"visible",children:o.children},a,0,null),s=St(s,a,i,null),s.flags|=2,o.return=t,s.return=t,o.sibling=s,t.child=o,t.mode&1&&en(t,e.child,null,i),t.child.memoizedState=zs(i),t.memoizedState=As,s);if(!(t.mode&1))return po(e,t,i,null);if(a.data==="$!"){if(o=a.nextSibling&&a.nextSibling.dataset,o)var r=o.dgst;return o=r,s=Error(w(419)),o=Oa(s,o,void 0),po(e,t,i,o)}if(r=(i&e.childLanes)!==0,ue||r){if(o=Q,o!==null){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(o.suspendedLanes|i)?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Ye(e,a),Pe(o,e,a,-1))}return Ai(),o=Oa(Error(w(421))),po(e,t,i,o)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Sc.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,pe=it(a.nextSibling),fe=t,R=!0,Ee=null,e!==null&&(ke[be++]=Oe,ke[be++]=Ve,ke[be++]=Ct,Oe=e.id,Ve=e.overflow,Ct=t),t=Ii(t,o.children),t.flags|=4096,t)}function Pr(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Is(e.return,t,n)}function Va(e,t,n,o,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=o,s.tail=n,s.tailMode=a)}function _h(e,t,n){var o=t.pendingProps,a=o.revealOrder,s=o.tail;if(se(e,t,o.children,n),o=F.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pr(e,n,t);else if(e.tag===19)Pr(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(L(F,o),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Yo(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Va(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Yo(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Va(t,!0,n,null,s);break;case"together":Va(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function To(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ke(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),At|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t,n){switch(t.tag){case 3:Hh(t),Zt();break;case 5:hh(t);break;case 1:ce(t.type)&&Bo(t);break;case 4:gi(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,a=t.memoizedProps.value;L(Wo,o._currentValue),o._currentValue=a;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(L(F,F.current&1),t.flags|=128,null):n&t.child.childLanes?Dh(e,t,n):(L(F,F.current&1),e=Ke(e,t,n),e!==null?e.sibling:null);L(F,F.current&1);break;case 19:if(o=(n&t.childLanes)!==0,e.flags&128){if(o)return _h(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),L(F,F.current),o)break;return null;case 22:case 23:return t.lanes=0,Mh(e,t,n)}return Ke(e,t,n)}var Rh,Es,Fh,Uh;Rh=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Es=function(){};Fh=function(e,t,n,o){var a=e.memoizedProps;if(a!==o){e=t.stateNode,It(Re.current);var s=null;switch(n){case"input":a=Xa(e,a),o=Xa(e,o),s=[];break;case"select":a=B({},a,{value:void 0}),o=B({},o,{value:void 0}),s=[];break;case"textarea":a=ts(e,a),o=ts(e,o),s=[];break;default:typeof a.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=Fo)}os(n,o);var i;n=null;for(u in a)if(!o.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var r=a[u];for(i in r)r.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Nn.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in o){var l=o[u];if(r=a!=null?a[u]:void 0,o.hasOwnProperty(u)&&l!==r&&(l!=null||r!=null))if(u==="style")if(r){for(i in r)!r.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&r[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,r=r?r.__html:void 0,l!=null&&r!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Nn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&H("scroll",e),s||r===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Uh=function(e,t,n,o){n!==o&&(t.flags|=4)};function fn(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags&14680064,o|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,o|=a.subtreeFlags,o|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function mc(e,t,n){var o=t.pendingProps;switch(ri(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return ce(t.type)&&Uo(),ne(t),null;case 3:return o=t.stateNode,tn(),D(de),D(ae),fi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ee!==null&&(Rs(Ee),Ee=null))),Es(e,t),ne(t),null;case 5:pi(t);var a=It(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)Fh(e,t,n,o,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(w(166));return ne(t),null}if(e=It(Re.current),mo(t)){o=t.stateNode,n=t.type;var s=t.memoizedProps;switch(o[De]=t,o[Bn]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",o),H("close",o);break;case"iframe":case"object":case"embed":H("load",o);break;case"video":case"audio":for(a=0;a<bn.length;a++)H(bn[a],o);break;case"source":H("error",o);break;case"img":case"image":case"link":H("error",o),H("load",o);break;case"details":H("toggle",o);break;case"input":Bi(o,s),H("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!s.multiple},H("invalid",o);break;case"textarea":Vi(o,s),H("invalid",o)}os(n,s),a=null;for(var i in s)if(s.hasOwnProperty(i)){var r=s[i];i==="children"?typeof r=="string"?o.textContent!==r&&(s.suppressHydrationWarning!==!0&&co(o.textContent,r,e),a=["children",r]):typeof r=="number"&&o.textContent!==""+r&&(s.suppressHydrationWarning!==!0&&co(o.textContent,r,e),a=["children",""+r]):Nn.hasOwnProperty(i)&&r!=null&&i==="onScroll"&&H("scroll",o)}switch(n){case"input":oo(o),Oi(o,s,!0);break;case"textarea":oo(o),Wi(o);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(o.onclick=Fo)}o=a,t.updateQueue=o,o!==null&&(t.flags|=4)}else{i=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gl(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=i.createElement(n,{is:o.is}):(e=i.createElement(n),n==="select"&&(i=e,o.multiple?i.multiple=!0:o.size&&(i.size=o.size))):e=i.createElementNS(e,n),e[De]=t,e[Bn]=o,Rh(e,t,!1,!1),t.stateNode=e;e:{switch(i=as(n,o),n){case"dialog":H("cancel",e),H("close",e),a=o;break;case"iframe":case"object":case"embed":H("load",e),a=o;break;case"video":case"audio":for(a=0;a<bn.length;a++)H(bn[a],e);a=o;break;case"source":H("error",e),a=o;break;case"img":case"image":case"link":H("error",e),H("load",e),a=o;break;case"details":H("toggle",e),a=o;break;case"input":Bi(e,o),a=Xa(e,o),H("invalid",e);break;case"option":a=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},a=B({},o,{value:void 0}),H("invalid",e);break;case"textarea":Vi(e,o),a=ts(e,o),H("invalid",e);break;default:a=o}os(n,a),r=a;for(s in r)if(r.hasOwnProperty(s)){var l=r[s];s==="style"?yl(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&pl(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pn(e,l):typeof l=="number"&&Pn(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Nn.hasOwnProperty(s)?l!=null&&s==="onScroll"&&H("scroll",e):l!=null&&Js(e,s,l,i))}switch(n){case"input":oo(e),Oi(e,o,!1);break;case"textarea":oo(e),Wi(e);break;case"option":o.value!=null&&e.setAttribute("value",""+dt(o.value));break;case"select":e.multiple=!!o.multiple,s=o.value,s!=null?Gt(e,!!o.multiple,s,!1):o.defaultValue!=null&&Gt(e,!!o.multiple,o.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)Uh(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(w(166));if(n=It(Vn.current),It(Re.current),mo(t)){if(o=t.stateNode,n=t.memoizedProps,o[De]=t,(s=o.nodeValue!==n)&&(e=fe,e!==null))switch(e.tag){case 3:co(o.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&co(o.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else o=(n.nodeType===9?n:n.ownerDocument).createTextNode(o),o[De]=t,t.stateNode=o}return ne(t),null;case 13:if(D(F),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&pe!==null&&t.mode&1&&!(t.flags&128))ah(),Zt(),t.flags|=98560,s=!1;else if(s=mo(t),o!==null&&o.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[De]=t}else Zt(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),s=!1}else Ee!==null&&(Rs(Ee),Ee=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||F.current&1?K===0&&(K=3):Ai())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return tn(),Es(e,t),e===null&&Fn(t.stateNode.containerInfo),ne(t),null;case 10:return di(t.type._context),ne(t),null;case 17:return ce(t.type)&&Uo(),ne(t),null;case 19:if(D(F),s=t.memoizedState,s===null)return ne(t),null;if(o=(t.flags&128)!==0,i=s.rendering,i===null)if(o)fn(s,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Yo(e),i!==null){for(t.flags|=128,fn(s,!1),o=i.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=n,n=t.child;n!==null;)s=n,e=o,s.flags&=14680066,i=s.alternate,i===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=i.childLanes,s.lanes=i.lanes,s.child=i.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=i.memoizedProps,s.memoizedState=i.memoizedState,s.updateQueue=i.updateQueue,s.type=i.type,e=i.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return L(F,F.current&1|2),t.child}e=e.sibling}s.tail!==null&&G()>on&&(t.flags|=128,o=!0,fn(s,!1),t.lanes=4194304)}else{if(!o)if(e=Yo(i),e!==null){if(t.flags|=128,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!R)return ne(t),null}else 2*G()-s.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,o=!0,fn(s,!1),t.lanes=4194304);s.isBackwards?(i.sibling=t.child,t.child=i):(n=s.last,n!==null?n.sibling=i:t.child=i,s.last=i)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=G(),t.sibling=null,n=F.current,L(F,o?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Ti(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?ge&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(w(156,t.tag))}function gc(e,t){switch(ri(t),t.tag){case 1:return ce(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tn(),D(de),D(ae),fi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pi(t),null;case 13:if(D(F),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Zt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(F),null;case 4:return tn(),null;case 10:return di(t.type._context),null;case 22:case 23:return Ti(),null;case 24:return null;default:return null}}var fo=!1,oe=!1,pc=typeof WeakSet=="function"?WeakSet:Set,I=null;function Vt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(o){O(e,t,o)}else n.current=null}function Ns(e,t,n){try{n()}catch(o){O(e,t,o)}}var Mr=!1;function fc(e,t){if(gs=Do,e=Gl(),si(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var a=o.anchorOffset,s=o.focusNode;o=o.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var i=0,r=-1,l=-1,u=0,f=0,p=e,g=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(r=i+a),p!==s||o!==0&&p.nodeType!==3||(l=i+o),p.nodeType===3&&(i+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++u===a&&(r=i),g===s&&++f===o&&(l=i),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=r===-1||l===-1?null:{start:r,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ps={focusedElem:e,selectionRange:n},Do=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var b=k.memoizedProps,_=k.memoizedState,d=t.stateNode,h=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:Ae(t.type,b),_);d.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var c=t.stateNode.containerInfo;c.nodeType===1?c.textContent="":c.nodeType===9&&c.documentElement&&c.removeChild(c.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){O(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return k=Mr,Mr=!1,k}function An(e,t,n){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var a=o=o.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&Ns(t,n,s)}a=a.next}while(a!==o)}}function ua(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var o=n.create;n.destroy=o()}n=n.next}while(n!==t)}}function Ps(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bh(e){var t=e.alternate;t!==null&&(e.alternate=null,Bh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[De],delete t[Bn],delete t[ws],delete t[Xd],delete t[Zd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Oh(e){return e.tag===5||e.tag===3||e.tag===4}function Lr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Oh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ms(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Fo));else if(o!==4&&(e=e.child,e!==null))for(Ms(e,t,n),e=e.sibling;e!==null;)Ms(e,t,n),e=e.sibling}function Ls(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(Ls(e,t,n),e=e.sibling;e!==null;)Ls(e,t,n),e=e.sibling}var X=null,ze=!1;function qe(e,t,n){for(n=n.child;n!==null;)Vh(e,t,n),n=n.sibling}function Vh(e,t,n){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(na,n)}catch{}switch(n.tag){case 5:oe||Vt(n,t);case 6:var o=X,a=ze;X=null,qe(e,t,n),X=o,ze=a,X!==null&&(ze?(e=X,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):X.removeChild(n.stateNode));break;case 18:X!==null&&(ze?(e=X,n=n.stateNode,e.nodeType===8?Da(e.parentNode,n):e.nodeType===1&&Da(e,n),Dn(e)):Da(X,n.stateNode));break;case 4:o=X,a=ze,X=n.stateNode.containerInfo,ze=!0,qe(e,t,n),X=o,ze=a;break;case 0:case 11:case 14:case 15:if(!oe&&(o=n.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){a=o=o.next;do{var s=a,i=s.destroy;s=s.tag,i!==void 0&&(s&2||s&4)&&Ns(n,t,i),a=a.next}while(a!==o)}qe(e,t,n);break;case 1:if(!oe&&(Vt(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=n.memoizedProps,o.state=n.memoizedState,o.componentWillUnmount()}catch(r){O(n,t,r)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(oe=(o=oe)||n.memoizedState!==null,qe(e,t,n),oe=o):qe(e,t,n);break;default:qe(e,t,n)}}function Hr(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pc),t.forEach(function(o){var a=xc.bind(null,e,o);n.has(o)||(n.add(o),o.then(a,a))})}}function Te(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var a=n[o];try{var s=e,i=t,r=i;e:for(;r!==null;){switch(r.tag){case 5:X=r.stateNode,ze=!1;break e;case 3:X=r.stateNode.containerInfo,ze=!0;break e;case 4:X=r.stateNode.containerInfo,ze=!0;break e}r=r.return}if(X===null)throw Error(w(160));Vh(s,i,a),X=null,ze=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(u){O(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wh(t,e),t=t.sibling}function Wh(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Te(t,e),Le(e),o&4){try{An(3,e,e.return),ua(3,e)}catch(b){O(e,e.return,b)}try{An(5,e,e.return)}catch(b){O(e,e.return,b)}}break;case 1:Te(t,e),Le(e),o&512&&n!==null&&Vt(n,n.return);break;case 5:if(Te(t,e),Le(e),o&512&&n!==null&&Vt(n,n.return),e.flags&32){var a=e.stateNode;try{Pn(a,"")}catch(b){O(e,e.return,b)}}if(o&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,i=n!==null?n.memoizedProps:s,r=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{r==="input"&&s.type==="radio"&&s.name!=null&&cl(a,s),as(r,i);var u=as(r,s);for(i=0;i<l.length;i+=2){var f=l[i],p=l[i+1];f==="style"?yl(a,p):f==="dangerouslySetInnerHTML"?pl(a,p):f==="children"?Pn(a,p):Js(a,f,p,u)}switch(r){case"input":Za(a,s);break;case"textarea":ml(a,s);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Gt(a,!!s.multiple,v,!1):g!==!!s.multiple&&(s.defaultValue!=null?Gt(a,!!s.multiple,s.defaultValue,!0):Gt(a,!!s.multiple,s.multiple?[]:"",!1))}a[Bn]=s}catch(b){O(e,e.return,b)}}break;case 6:if(Te(t,e),Le(e),o&4){if(e.stateNode===null)throw Error(w(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(b){O(e,e.return,b)}}break;case 3:if(Te(t,e),Le(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(b){O(e,e.return,b)}break;case 4:Te(t,e),Le(e);break;case 13:Te(t,e),Le(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(xi=G())),o&4&&Hr(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(u=oe)||f,Te(t,e),oe=u):Te(t,e),Le(e),o&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(I=e,f=e.child;f!==null;){for(p=I=f;I!==null;){switch(g=I,v=g.child,g.tag){case 0:case 11:case 14:case 15:An(4,g,g.return);break;case 1:Vt(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){o=g,n=g.return;try{t=o,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(b){O(o,n,b)}}break;case 5:Vt(g,g.return);break;case 22:if(g.memoizedState!==null){_r(p);continue}}v!==null?(v.return=g,I=v):_r(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{a=p.stateNode,u?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(r=p.stateNode,l=p.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,r.style.display=fl("display",i))}catch(b){O(e,e.return,b)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(b){O(e,e.return,b)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Te(t,e),Le(e),o&4&&Hr(e);break;case 21:break;default:Te(t,e),Le(e)}}function Le(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Oh(n)){var o=n;break e}n=n.return}throw Error(w(160))}switch(o.tag){case 5:var a=o.stateNode;o.flags&32&&(Pn(a,""),o.flags&=-33);var s=Lr(e);Ls(e,s,a);break;case 3:case 4:var i=o.stateNode.containerInfo,r=Lr(e);Ms(e,r,i);break;default:throw Error(w(161))}}catch(l){O(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yc(e,t,n){I=e,Gh(e)}function Gh(e,t,n){for(var o=(e.mode&1)!==0;I!==null;){var a=I,s=a.child;if(a.tag===22&&o){var i=a.memoizedState!==null||fo;if(!i){var r=a.alternate,l=r!==null&&r.memoizedState!==null||oe;r=fo;var u=oe;if(fo=i,(oe=l)&&!u)for(I=a;I!==null;)i=I,l=i.child,i.tag===22&&i.memoizedState!==null?Rr(a):l!==null?(l.return=i,I=l):Rr(a);for(;s!==null;)I=s,Gh(s),s=s.sibling;I=a,fo=r,oe=u}Dr(e)}else a.subtreeFlags&8772&&s!==null?(s.return=a,I=s):Dr(e)}}function Dr(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||ua(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!oe)if(n===null)o.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Ae(t.type,n.memoizedProps);o.componentDidUpdate(a,n.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&kr(t,s,o);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}kr(t,i,n)}break;case 5:var r=t.stateNode;if(n===null&&t.flags&4){n=r;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Dn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}oe||t.flags&512&&Ps(t)}catch(g){O(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function _r(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Rr(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ua(4,t)}catch(l){O(t,n,l)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var a=t.return;try{o.componentDidMount()}catch(l){O(t,a,l)}}var s=t.return;try{Ps(t)}catch(l){O(t,s,l)}break;case 5:var i=t.return;try{Ps(t)}catch(l){O(t,i,l)}}}catch(l){O(t,t.return,l)}if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}var wc=Math.ceil,qo=$e.ReactCurrentDispatcher,ji=$e.ReactCurrentOwner,je=$e.ReactCurrentBatchConfig,P=0,Q=null,J=null,Z=0,ge=0,Wt=gt(0),K=0,Yn=null,At=0,da=0,Si=0,zn=null,he=null,xi=0,on=1/0,Fe=null,Qo=!1,Hs=null,lt=null,yo=!1,nt=null,Xo=0,En=0,Ds=null,Ao=-1,zo=0;function ie(){return P&6?G():Ao!==-1?Ao:Ao=G()}function ht(e){return e.mode&1?P&2&&Z!==0?Z&-Z:tc.transition!==null?(zo===0&&(zo=zl()),zo):(e=M,e!==0||(e=window.event,e=e===void 0?16:Dl(e.type)),e):1}function Pe(e,t,n,o){if(50<En)throw En=0,Ds=null,Error(w(185));$n(e,n,o),(!(P&2)||e!==Q)&&(e===Q&&(!(P&2)&&(da|=n),K===4&&et(e,Z)),me(e,o),n===1&&P===0&&!(t.mode&1)&&(on=G()+500,ra&&pt()))}function me(e,t){var n=e.callbackNode;td(e,t);var o=Ho(e,e===Q?Z:0);if(o===0)n!==null&&Yi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(n!=null&&Yi(n),t===1)e.tag===0?ec(Fr.bind(null,e)):th(Fr.bind(null,e)),qd(function(){!(P&6)&&pt()}),n=null;else{switch(El(o)){case 1:n=Qs;break;case 4:n=Tl;break;case 16:n=Lo;break;case 536870912:n=Al;break;default:n=Lo}n=Zh(n,Jh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Jh(e,t){if(Ao=-1,zo=0,P&6)throw Error(w(327));var n=e.callbackNode;if(qt()&&e.callbackNode!==n)return null;var o=Ho(e,e===Q?Z:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=Zo(e,o);else{t=o;var a=P;P|=2;var s=Kh();(Q!==e||Z!==t)&&(Fe=null,on=G()+500,jt(e,t));do try{bc();break}catch(r){Yh(e,r)}while(!0);ui(),qo.current=s,P=a,J!==null?t=0:(Q=null,Z=0,t=K)}if(t!==0){if(t===2&&(a=hs(e),a!==0&&(o=a,t=_s(e,a))),t===1)throw n=Yn,jt(e,0),et(e,o),me(e,G()),n;if(t===6)et(e,o);else{if(a=e.current.alternate,!(o&30)&&!vc(a)&&(t=Zo(e,o),t===2&&(s=hs(e),s!==0&&(o=s,t=_s(e,s))),t===1))throw n=Yn,jt(e,0),et(e,o),me(e,G()),n;switch(e.finishedWork=a,e.finishedLanes=o,t){case 0:case 1:throw Error(w(345));case 2:vt(e,he,Fe);break;case 3:if(et(e,o),(o&130023424)===o&&(t=xi+500-G(),10<t)){if(Ho(e,0)!==0)break;if(a=e.suspendedLanes,(a&o)!==o){ie(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ys(vt.bind(null,e,he,Fe),t);break}vt(e,he,Fe);break;case 4:if(et(e,o),(o&4194240)===o)break;for(t=e.eventTimes,a=-1;0<o;){var i=31-Ne(o);s=1<<i,i=t[i],i>a&&(a=i),o&=~s}if(o=a,o=G()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*wc(o/1960))-o,10<o){e.timeoutHandle=ys(vt.bind(null,e,he,Fe),o);break}vt(e,he,Fe);break;case 5:vt(e,he,Fe);break;default:throw Error(w(329))}}}return me(e,G()),e.callbackNode===n?Jh.bind(null,e):null}function _s(e,t){var n=zn;return e.current.memoizedState.isDehydrated&&(jt(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=he,he=n,t!==null&&Rs(t)),e}function Rs(e){he===null?he=e:he.push.apply(he,e)}function vc(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var o=0;o<n.length;o++){var a=n[o],s=a.getSnapshot;a=a.value;try{if(!Me(s(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function et(e,t){for(t&=~Si,t&=~da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ne(t),o=1<<n;e[n]=-1,t&=~o}}function Fr(e){if(P&6)throw Error(w(327));qt();var t=Ho(e,0);if(!(t&1))return me(e,G()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var o=hs(e);o!==0&&(t=o,n=_s(e,o))}if(n===1)throw n=Yn,jt(e,0),et(e,t),me(e,G()),n;if(n===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vt(e,he,Fe),me(e,G()),null}function Ci(e,t){var n=P;P|=1;try{return e(t)}finally{P=n,P===0&&(on=G()+500,ra&&pt())}}function zt(e){nt!==null&&nt.tag===0&&!(P&6)&&qt();var t=P;P|=1;var n=je.transition,o=M;try{if(je.transition=null,M=1,e)return e()}finally{M=o,je.transition=n,P=t,!(P&6)&&pt()}}function Ti(){ge=Wt.current,D(Wt)}function jt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$d(n)),J!==null)for(n=J.return;n!==null;){var o=n;switch(ri(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&Uo();break;case 3:tn(),D(de),D(ae),fi();break;case 5:pi(o);break;case 4:tn();break;case 13:D(F);break;case 19:D(F);break;case 10:di(o.type._context);break;case 22:case 23:Ti()}n=n.return}if(Q=e,J=e=ut(e.current,null),Z=ge=t,K=0,Yn=null,Si=da=At=0,he=zn=null,bt!==null){for(t=0;t<bt.length;t++)if(n=bt[t],o=n.interleaved,o!==null){n.interleaved=null;var a=o.next,s=n.pending;if(s!==null){var i=s.next;s.next=a,o.next=i}n.pending=o}bt=null}return e}function Yh(e,t){do{var n=J;try{if(ui(),xo.current=$o,Ko){for(var o=U.memoizedState;o!==null;){var a=o.queue;a!==null&&(a.pending=null),o=o.next}Ko=!1}if(Tt=0,q=Y=U=null,Tn=!1,Wn=0,ji.current=null,n===null||n.return===null){K=1,Yn=t,J=null;break}e:{var s=e,i=n.return,r=n,l=t;if(t=Z,r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=r,p=f.tag;if(!(f.mode&1)&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var v=Cr(i);if(v!==null){v.flags&=-257,Tr(v,i,r,s,t),v.mode&1&&xr(s,u,t),t=v,l=u;var k=t.updateQueue;if(k===null){var b=new Set;b.add(l),t.updateQueue=b}else k.add(l);break e}else{if(!(t&1)){xr(s,u,t),Ai();break e}l=Error(w(426))}}else if(R&&r.mode&1){var _=Cr(i);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Tr(_,i,r,s,t),li(nn(l,r));break e}}s=l=nn(l,r),K!==4&&(K=2),zn===null?zn=[s]:zn.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var d=Eh(s,l,t);vr(s,d);break e;case 1:r=l;var h=s.type,c=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(lt===null||!lt.has(c)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=Nh(s,r,t);vr(s,y);break e}}s=s.return}while(s!==null)}qh(n)}catch(j){t=j,J===n&&n!==null&&(J=n=n.return);continue}break}while(!0)}function Kh(){var e=qo.current;return qo.current=$o,e===null?$o:e}function Ai(){(K===0||K===3||K===2)&&(K=4),Q===null||!(At&268435455)&&!(da&268435455)||et(Q,Z)}function Zo(e,t){var n=P;P|=2;var o=Kh();(Q!==e||Z!==t)&&(Fe=null,jt(e,t));do try{kc();break}catch(a){Yh(e,a)}while(!0);if(ui(),P=n,qo.current=o,J!==null)throw Error(w(261));return Q=null,Z=0,K}function kc(){for(;J!==null;)$h(J)}function bc(){for(;J!==null&&!Ju();)$h(J)}function $h(e){var t=Xh(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?qh(e):J=t,ji.current=null}function qh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gc(n,t),n!==null){n.flags&=32767,J=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,J=null;return}}else if(n=mc(n,t,ge),n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);K===0&&(K=5)}function vt(e,t,n){var o=M,a=je.transition;try{je.transition=null,M=1,Ic(e,t,n,o)}finally{je.transition=a,M=o}return null}function Ic(e,t,n,o){do qt();while(nt!==null);if(P&6)throw Error(w(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(nd(e,s),e===Q&&(J=Q=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||yo||(yo=!0,Zh(Lo,function(){return qt(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=je.transition,je.transition=null;var i=M;M=1;var r=P;P|=4,ji.current=null,fc(e,n),Wh(n,e),Od(ps),Do=!!gs,ps=gs=null,e.current=n,yc(n),Yu(),P=r,M=i,je.transition=s}else e.current=n;if(yo&&(yo=!1,nt=e,Xo=a),s=e.pendingLanes,s===0&&(lt=null),qu(n.stateNode),me(e,G()),t!==null)for(o=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],o(a.value,{componentStack:a.stack,digest:a.digest});if(Qo)throw Qo=!1,e=Hs,Hs=null,e;return Xo&1&&e.tag!==0&&qt(),s=e.pendingLanes,s&1?e===Ds?En++:(En=0,Ds=e):En=0,pt(),null}function qt(){if(nt!==null){var e=El(Xo),t=je.transition,n=M;try{if(je.transition=null,M=16>e?16:e,nt===null)var o=!1;else{if(e=nt,nt=null,Xo=0,P&6)throw Error(w(331));var a=P;for(P|=4,I=e.current;I!==null;){var s=I,i=s.child;if(I.flags&16){var r=s.deletions;if(r!==null){for(var l=0;l<r.length;l++){var u=r[l];for(I=u;I!==null;){var f=I;switch(f.tag){case 0:case 11:case 15:An(8,f,s)}var p=f.child;if(p!==null)p.return=f,I=p;else for(;I!==null;){f=I;var g=f.sibling,v=f.return;if(Bh(f),f===u){I=null;break}if(g!==null){g.return=v,I=g;break}I=v}}}var k=s.alternate;if(k!==null){var b=k.child;if(b!==null){k.child=null;do{var _=b.sibling;b.sibling=null,b=_}while(b!==null)}}I=s}}if(s.subtreeFlags&2064&&i!==null)i.return=s,I=i;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:An(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,I=d;break e}I=s.return}}var h=e.current;for(I=h;I!==null;){i=I;var c=i.child;if(i.subtreeFlags&2064&&c!==null)c.return=i,I=c;else e:for(i=h;I!==null;){if(r=I,r.flags&2048)try{switch(r.tag){case 0:case 11:case 15:ua(9,r)}}catch(j){O(r,r.return,j)}if(r===i){I=null;break e}var y=r.sibling;if(y!==null){y.return=r.return,I=y;break e}I=r.return}}if(P=a,pt(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(na,e)}catch{}o=!0}return o}finally{M=n,je.transition=t}}return!1}function Ur(e,t,n){t=nn(n,t),t=Eh(e,t,1),e=rt(e,t,1),t=ie(),e!==null&&($n(e,1,t),me(e,t))}function O(e,t,n){if(e.tag===3)Ur(e,e,n);else for(;t!==null;){if(t.tag===3){Ur(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(lt===null||!lt.has(o))){e=nn(n,e),e=Nh(t,e,1),t=rt(t,e,1),e=ie(),t!==null&&($n(t,1,e),me(t,e));break}}t=t.return}}function jc(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),t=ie(),e.pingedLanes|=e.suspendedLanes&n,Q===e&&(Z&n)===n&&(K===4||K===3&&(Z&130023424)===Z&&500>G()-xi?jt(e,0):Si|=n),me(e,t)}function Qh(e,t){t===0&&(e.mode&1?(t=io,io<<=1,!(io&130023424)&&(io=4194304)):t=1);var n=ie();e=Ye(e,t),e!==null&&($n(e,t,n),me(e,n))}function Sc(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qh(e,n)}function xc(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(w(314))}o!==null&&o.delete(t),Qh(e,n)}var Xh;Xh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ue=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ue=!1,cc(e,t,n);ue=!!(e.flags&131072)}else ue=!1,R&&t.flags&1048576&&nh(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;To(e,t),e=t.pendingProps;var a=Xt(t,ae.current);$t(t,n),a=wi(null,t,o,e,a,n);var s=vi();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ce(o)?(s=!0,Bo(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,mi(t),a.updater=ha,t.stateNode=a,a._reactInternals=t,Ss(t,o,e,n),t=Ts(null,t,o,!0,s,n)):(t.tag=0,R&&s&&ii(t),se(null,t,a,n),t=t.child),t;case 16:o=t.elementType;e:{switch(To(e,t),e=t.pendingProps,a=o._init,o=a(o._payload),t.type=o,a=t.tag=Tc(o),e=Ae(o,e),a){case 0:t=Cs(null,t,o,e,n);break e;case 1:t=Er(null,t,o,e,n);break e;case 11:t=Ar(null,t,o,e,n);break e;case 14:t=zr(null,t,o,Ae(o.type,e),n);break e}throw Error(w(306,o,""))}return t;case 0:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ae(o,a),Cs(e,t,o,a,n);case 1:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ae(o,a),Er(e,t,o,a,n);case 3:e:{if(Hh(t),e===null)throw Error(w(387));o=t.pendingProps,s=t.memoizedState,a=s.element,lh(e,t),Jo(t,o,null,n);var i=t.memoizedState;if(o=i.element,s.isDehydrated)if(s={element:o,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=nn(Error(w(423)),t),t=Nr(e,t,o,n,a);break e}else if(o!==a){a=nn(Error(w(424)),t),t=Nr(e,t,o,n,a);break e}else for(pe=it(t.stateNode.containerInfo.firstChild),fe=t,R=!0,Ee=null,n=ih(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zt(),o===a){t=Ke(e,t,n);break e}se(e,t,o,n)}t=t.child}return t;case 5:return hh(t),e===null&&bs(t),o=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,i=a.children,fs(o,a)?i=null:s!==null&&fs(o,s)&&(t.flags|=32),Lh(e,t),se(e,t,i,n),t.child;case 6:return e===null&&bs(t),null;case 13:return Dh(e,t,n);case 4:return gi(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=en(t,null,o,n):se(e,t,o,n),t.child;case 11:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ae(o,a),Ar(e,t,o,a,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(o=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,L(Wo,o._currentValue),o._currentValue=i,s!==null)if(Me(s.value,i)){if(s.children===a.children&&!de.current){t=Ke(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var r=s.dependencies;if(r!==null){i=s.child;for(var l=r.firstContext;l!==null;){if(l.context===o){if(s.tag===1){l=We(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Is(s.return,n,t),r.lanes|=n;break}l=l.next}}else if(s.tag===10)i=s.type===t.type?null:s.child;else if(s.tag===18){if(i=s.return,i===null)throw Error(w(341));i.lanes|=n,r=i.alternate,r!==null&&(r.lanes|=n),Is(i,n,t),i=s.sibling}else i=s.child;if(i!==null)i.return=s;else for(i=s;i!==null;){if(i===t){i=null;break}if(s=i.sibling,s!==null){s.return=i.return,i=s;break}i=i.return}s=i}se(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,o=t.pendingProps.children,$t(t,n),a=Se(a),o=o(a),t.flags|=1,se(e,t,o,n),t.child;case 14:return o=t.type,a=Ae(o,t.pendingProps),a=Ae(o.type,a),zr(e,t,o,a,n);case 15:return Ph(e,t,t.type,t.pendingProps,n);case 17:return o=t.type,a=t.pendingProps,a=t.elementType===o?a:Ae(o,a),To(e,t),t.tag=1,ce(o)?(e=!0,Bo(t)):e=!1,$t(t,n),zh(t,o,a),Ss(t,o,a,n),Ts(null,t,o,!0,e,n);case 19:return _h(e,t,n);case 22:return Mh(e,t,n)}throw Error(w(156,t.tag))};function Zh(e,t){return Cl(e,t)}function Cc(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,o){return new Cc(e,t,n,o)}function zi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tc(e){if(typeof e=="function")return zi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ks)return 11;if(e===$s)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,o,a,s){var i=2;if(o=e,typeof e=="function")zi(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Lt:return St(n.children,a,s,t);case Ys:i=8,a|=8;break;case Ka:return e=Ie(12,n,t,a|2),e.elementType=Ka,e.lanes=s,e;case $a:return e=Ie(13,n,t,a),e.elementType=$a,e.lanes=s,e;case qa:return e=Ie(19,n,t,a),e.elementType=qa,e.lanes=s,e;case hl:return ca(n,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rl:i=10;break e;case ll:i=9;break e;case Ks:i=11;break e;case $s:i=14;break e;case Qe:i=16,o=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return t=Ie(i,n,t,a),t.elementType=e,t.type=o,t.lanes=s,t}function St(e,t,n,o){return e=Ie(7,e,o,t),e.lanes=n,e}function ca(e,t,n,o){return e=Ie(22,e,o,t),e.elementType=hl,e.lanes=n,e.stateNode={isHidden:!1},e}function Wa(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function Ga(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ac(e,t,n,o,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xa(0),this.expirationTimes=xa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xa(0),this.identifierPrefix=o,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ei(e,t,n,o,a,s,i,r,l){return e=new Ac(e,t,n,r,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ie(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:o,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mi(s),e}function zc(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:o==null?null:""+o,children:e,containerInfo:t,implementation:n}}function eu(e){if(!e)return ct;e=e._reactInternals;e:{if(Nt(e)!==e||e.tag!==1)throw Error(w(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(w(171))}if(e.tag===1){var n=e.type;if(ce(n))return eh(e,n,t)}return t}function tu(e,t,n,o,a,s,i,r,l){return e=Ei(n,o,!0,e,a,s,i,r,l),e.context=eu(null),n=e.current,o=ie(),a=ht(n),s=We(o,a),s.callback=t??null,rt(n,s,a),e.current.lanes=a,$n(e,a,o),me(e,o),e}function ma(e,t,n,o){var a=t.current,s=ie(),i=ht(a);return n=eu(n),t.context===null?t.context=n:t.pendingContext=n,t=We(s,i),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=rt(a,t,i),e!==null&&(Pe(e,a,i,s),So(e,a,i)),i}function ea(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Br(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ni(e,t){Br(e,t),(e=e.alternate)&&Br(e,t)}function Ec(){return null}var nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pi(e){this._internalRoot=e}ga.prototype.render=Pi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));ma(e,t,null,null)};ga.prototype.unmount=Pi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zt(function(){ma(null,e,null,null)}),t[Je]=null}};function ga(e){this._internalRoot=e}ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ml();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ze.length&&t!==0&&t<Ze[n].priority;n++);Ze.splice(n,0,e),n===0&&Hl(e)}};function Mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Or(){}function Nc(e,t,n,o,a){if(a){if(typeof o=="function"){var s=o;o=function(){var u=ea(i);s.call(u)}}var i=tu(t,o,e,0,null,!1,!1,"",Or);return e._reactRootContainer=i,e[Je]=i.current,Fn(e.nodeType===8?e.parentNode:e),zt(),i}for(;a=e.lastChild;)e.removeChild(a);if(typeof o=="function"){var r=o;o=function(){var u=ea(l);r.call(u)}}var l=Ei(e,0,!1,null,null,!1,!1,"",Or);return e._reactRootContainer=l,e[Je]=l.current,Fn(e.nodeType===8?e.parentNode:e),zt(function(){ma(t,l,n,o)}),l}function fa(e,t,n,o,a){var s=n._reactRootContainer;if(s){var i=s;if(typeof a=="function"){var r=a;a=function(){var l=ea(i);r.call(l)}}ma(t,i,e,a)}else i=Nc(n,t,e,a,o);return ea(i)}Nl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=kn(t.pendingLanes);n!==0&&(Xs(t,n|1),me(t,G()),!(P&6)&&(on=G()+500,pt()))}break;case 13:zt(function(){var o=Ye(e,1);if(o!==null){var a=ie();Pe(o,e,1,a)}}),Ni(e,1)}};Zs=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ie();Pe(t,e,134217728,n)}Ni(e,134217728)}};Pl=function(e){if(e.tag===13){var t=ht(e),n=Ye(e,t);if(n!==null){var o=ie();Pe(n,e,t,o)}Ni(e,t)}};Ml=function(){return M};Ll=function(e,t){var n=M;try{return M=e,t()}finally{M=n}};is=function(e,t,n){switch(t){case"input":if(Za(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var a=ia(o);if(!a)throw Error(w(90));dl(o),Za(o,a)}}}break;case"textarea":ml(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};kl=Ci;bl=zt;var Pc={usingClientEntryPoint:!1,Events:[Qn,Rt,ia,wl,vl,Ci]},yn={findFiberByHostInstance:kt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mc={bundleType:yn.bundleType,version:yn.version,rendererPackageName:yn.rendererPackageName,rendererConfig:yn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sl(e),e===null?null:e.stateNode},findFiberByHostInstance:yn.findFiberByHostInstance||Ec,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wo.isDisabled&&wo.supportsFiber)try{na=wo.inject(Mc),_e=wo}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pc;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mi(t))throw Error(w(200));return zc(e,t,null,n)};we.createRoot=function(e,t){if(!Mi(e))throw Error(w(299));var n=!1,o="",a=nu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ei(e,1,!1,null,null,n,!1,o,a),e[Je]=t.current,Fn(e.nodeType===8?e.parentNode:e),new Pi(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Sl(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return zt(e)};we.hydrate=function(e,t,n){if(!pa(t))throw Error(w(200));return fa(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Mi(e))throw Error(w(405));var o=n!=null&&n.hydratedSources||null,a=!1,s="",i=nu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=tu(t,null,e,1,n??null,a,!1,s,i),e[Je]=t.current,Fn(e),o)for(e=0;e<o.length;e++)n=o[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ga(t)};we.render=function(e,t,n){if(!pa(t))throw Error(w(200));return fa(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!pa(e))throw Error(w(40));return e._reactRootContainer?(zt(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Je]=null})}),!0):!1};we.unstable_batchedUpdates=Ci;we.unstable_renderSubtreeIntoContainer=function(e,t,n,o){if(!pa(n))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return fa(e,t,n,!1,o)};we.version="18.3.1-next-f1338f8080-20240426";function ou(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ou)}catch(e){console.error(e)}}ou(),ol.exports=we;var Lc=ol.exports,au,Vr=Lc;au=Vr.createRoot,Vr.hydrateRoot;function Hc(){const e=()=>{const o=window.location.hash.replace(/^#/,"");return o.startsWith("/")?o:"/"},[t,n]=Be.useState(e);return Be.useEffect(()=>{const o=()=>n(e());return window.addEventListener("hashchange",o),()=>window.removeEventListener("hashchange",o)},[]),t}const su=Be.createContext("/");function Dc({children:e}){const t=Hc();return m.jsx(su.Provider,{value:t,children:e})}function _c({children:e}){const t=Be.useContext(su);let n=null;return Be.Children.forEach(e,o=>{if(!Be.isValidElement(o))return;o.props.path===t&&(n=o)}),n||Be.Children.forEach(e,o=>{!n&&Be.isValidElement(o)&&o.props.path==="/"&&(n=o)}),n?n.props.element:null}function Wr(e){return null}function iu({to:e,className:t,children:n}){return m.jsx("a",{className:t,href:"#"+e,children:n})}function Gr({href:e,children:t}){return m.jsx("a",{href:e,target:"_blank",rel:"noreferrer",children:t})}function Rc({children:e}){return m.jsxs(m.Fragment,{children:[m.jsx("style",{children:".ifc-shell{max-width:1040px;margin:0 auto;padding:24px;}@media (min-width:768px){.ifc-shell{padding:36px;}}"}),m.jsx("div",{className:"ifc-shell",children:e})]})}const Ja=[{date:"7/4/2026",name:"elizabeth wang",body:`After about 3 years of having this account, I figured it’s time to actually introduce myself!

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

Very grateful for Omeir Honda’s mentorship and for every mentor since who’s shown me the same thing: you just have to ask.`,order:2,images:["src/photos/stories/7-6-2026-omeir-honda-0.jpg","src/photos/stories/7-6-2026-omeir-honda-1.jpg","src/photos/stories/7-6-2026-omeir-honda-2.jpg","src/photos/stories/7-6-2026-omeir-honda-3.jpg"]},{date:"7/7/2026",name:"Ngozi F. Anachebe, PharmD, MD, FACOG",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a switched physics class.

In my senior year of high school, I was juggling college applications and a full course load, and for the first time, I switched down from AP Physics to an on-level physics course, just to complete the graduation requirement. I remember feeling a little ashamed about it at the time, like I was falling behind somehow. That decision landed me in a virtual lab for the physics course, proctored by Ms. Regina Okolie.

She often shared her own stories about mentorship and reminded us constantly that we were capable of more than we realized, and to take and create every opportunity we could.

At the time, I was already cold-DMing people, mostly getting silence back, maybe one response for every ten messages. I asked her for advice, because I just felt so lost. She immediately brought up her dear friend, Ngozi F. Anachebe, PharmD, MD, FACOG, and told me to reach out. I didn't need to be told twice.

I immediately found Dr. Anachebe on LinkedIn and sent a connection request. She messaged me before I even got the chance to reach out myself. She told me her own story: growing up in Nigeria, earning her PharmD at Mercer University - College of Pharmacy, then her MD at Morehouse School of Medicine, building an entire career in medicine and academic leadership from there. She encouraged me to keep going, to keep learning, and told me I had real potential.

I still think about how kind she was to a random high school student who wanted to talk to her out of nowhere.

Very grateful for my conversations with Ngozi F. Anachebe, PharmD, MD, FACOG; for Ms. Okolie, who pointed me toward her; and for every mentor who's shown me the same thing: you just have to ask!`,order:3,images:["src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-0.jpg","src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-1.jpg","src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-2.jpg"]},{date:"7/8/2026",name:"girish menon",body:`Three days ago, I got an email from the director of the study abroad program I'm in, James McClung. He told us our guest speaker this week would be Girish Menon, president of Lucy Cavendish College at the University of Cambridge, and someone with decades of experience in international development, including his time at UNICEF UK.

I looked him up on LinkedIn and reached out before he even arrived.

After his talk to a full auditorium of 154 students across three of The University of Georgia colleges two nights ago, I asked him who his first real mentor was. He told me it was one of his early bosses, someone who showed him the ropes early in his career.

I asked how he ended up where he is now, and he said not everything he did was part of some grand plan; he tried a lot of different things along the way. Then he gave me some advice of his own: find what actually brings you joy, whatever that looks like for you. He mentioned some people find that in something unique, like saving the elephants!

Very grateful for my conversation with Girish Menon and James McClung's email, and for every mentor who's shown me the same thing: you just have to ask!`,order:4,images:["src/photos/stories/7-8-2026-girish-menon-0.jpg","src/photos/stories/7-8-2026-girish-menon-1.jpg"]},{date:"7/9/2026",name:"will huber",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a rejection.

Omeir Honda, someone I emailed cold through the UGA Mentor Program, told me about the Magellan Program during our first meeting, a program that brings together 50-55 bright pre-University of Georgia - Terry College of Business freshmen each semester, with mentorship built in. I applied in the fall and made it to the interview round, but I was so nervous that my hands shook from underneath the table. I fumbled it completely.

I didn't get in the first time.

The next semester, I applied again. Before my interview, I just kept telling myself the first rejection doesn't define me, and I walked in calmer than I'd expected.

Almost 5 months after I got rejected, I got in on my second attempt.

Will Huber was one of the people who interviewed me, and when it came time to choose a mentor, I knew instantly he would be an amazing mentor for me. He mentors many other students in the Fall '25 and Spring '26 cohorts, and it shows in how he talks: genuinely invested, and always kind. I'd stay back after our weekly Wednesday meetings just to keep asking him questions, and he never once made me feel like I was asking too much.

Very grateful for Will Huber’s mentorship, and for every mentor since who's shown me the same thing: you just have to ask!`,order:5,images:["src/photos/stories/7-9-2026-will-huber-0.jpg","src/photos/stories/7-9-2026-will-huber-1.jpg","src/photos/stories/7-9-2026-will-huber-2.jpg"]},{date:"7/10/2026",name:"ellie fleming",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a club fair and two people who share a nickname!

I met Eleanor Fleming the third week of my freshman year, just walking around getting to as many tables as I could at The University of Georgia Engagement Fair held every semester. I saw her tabling for the UGA International Business Society and went up to introduce myself. We quickly realized we shared the same nickname, Ellie!

She told me all about the club. I immediately applied, interviewed, and got in as a committee member. I was thrilled! After meetings, I'd stay back and ask her questions, and she was always patient and generous with her answers.

At one point, I told her I'd failed my first financial accounting exam and needed help. She directed me to study resources she'd used to get an A in the class herself. I ended up scoring almost perfectly on the rest of the exams and finished the class with an A without needing to take the final!

Through the society, I also learned about study abroad opportunities and scholarships I originally hadn't known to look for, opportunities that ended up funding three separate study abroad experiences.

None of it would've happened if I hadn't just walked up and talked to her cold.

Very grateful for Eleanor Fleming's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:6,images:["src/photos/stories/7-10-2026-ellie-fleming-0.png","src/photos/stories/7-10-2026-ellie-fleming-1.jpg"]},{date:"7/11/2026",name:"robert anthony",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a failed exam and an accidental meeting.

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

Very grateful for Catherine Ling's mentorship, for Alex Zou, who introduced me to her, and for every mentor who's shown me the same thing: you just have to ask!`,order:10,images:["src/photos/stories/7-14-2026-catherine-ling-0.png","src/photos/stories/7-14-2026-catherine-ling-1.jpg"]},{date:"7/15/2026",name:"michael mcginn",body:`Continuing to tell these mentorship stories, one at a time. This one starts in an interview room.

A month into my first semester of college, Michael McGinn interviewed me for the General Committee of the UGA International Business Society. Somewhere in that conversation, studying abroad came up. He told me how it shaped his view of the world and recommended it to me. I’d never really been outside the US before, aside from one quick cruise trip.

Months later, I got into the same program Michael told me about during that interview. He sent me an entire message full of advice, what the courseload was really like, which classes tend to be tougher, and one line that’s stuck with me since: say yes to things. Whether it’s a random tour, a walk, or a spontaneous exploration, time goes by faster than you’d think.

Michael also pointed me toward specific scholarships to apply for, ones that ended up funding the experiences. Every step after that, picking classes, figuring out logistics, he checked in, genuinely invested in how it turned out.

I’ve since had the opportunity to go to multiple study abroad experiences. None of them would’ve happened if I hadn’t walked into one interview and just talked to him.

Very grateful for Michael McGinn’s encouragement, and for every mentor who’s shown me the same thing: you just have to ask!`,order:11,images:["src/photos/stories/7-15-2026-michael-mcginn-0.png","src/photos/stories/7-15-2026-michael-mcginn-1.jpg"]},{date:"7/16/2026",name:"pranav rohit",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a language I didn't plan on learning.

I met Pranav Rohit at my first UGA International Business Society General Committee meeting. I asked him if he'd studied abroad before, and he said he did! He told me about a study abroad program he thought I'd be a good fit for and encouraged me to reach out to the program directors directly, so I did. He also told me about study abroad opportunities in Germany through The University of Georgia, so I applied. I ended up doing a spring break program in Germany, then a Maymester across Germany again, and Italy.

Somewhere in one of our conversations, he mentioned he wanted to live in Germany someday and had started learning German because of it. I started too, almost as an afterthought. I'm hundreds of days into Duolingo German now (give or take; my streak got a little scrambled in a recent app update), not fluent by any means, but I've been enjoying learning something new!

None of it would've happened if I hadn't shown up to one meeting and asked a stranger a few questions about studying abroad.

Very grateful for Pranav Rohit's encouragement, and for every mentor who's shown me the same thing: you just have to ask!`,order:12,images:["src/photos/stories/7-16-2026-pranav-rohit-0.jpg","src/photos/stories/7-16-2026-pranav-rohit-1.jpg","src/photos/stories/7-16-2026-pranav-rohit-2.jpg"]},{date:"7/17/2026",name:"thya gutta",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a rush event and a fig tree.

I met Saahithya Gutta (Thya for short) at a rush event for Alpha Sigma Rho Sorority, Inc., and she became my big sister in University of Georgia - Greek Life not long after. She graduated this spring from the UGA School of Public and International Affairs!

During one of our first conversations, I asked Thya for life advice. I was a freshman, she was a senior, and I figured she'd know things I didn't yet. She told me about the fig tree, from an analogy Sylvia Plath wrote, each fig on the branch a different life you could live. If you stand there too long trying to decide which one to pick, they all rot before you choose any of them.

Going into college, there were so many majors to choose from, and I was genuinely scared of picking the "wrong" one. But I decided to just choose one instead of freezing in front of all the options. I picked Management Information Systems, and so far, I've ended up really loving it.

Being in Alpha Sigma Rho Sorority, Inc. changed Thya too; she came out of her shell and got better at leaning on people, something high school never taught her. I think that's part of why she's been so generous with me; she knew what it's like to need someone to lean on.

Maybe none of it would've happened if I hadn't simply asked a senior in my sorority what she wished she'd known.

Very grateful for the mentorship of Saahithya Gutta, my Greek Life big sister, the support of Elyn Wadstein, my Greek Life twin sister, and for every mentor who's shown me the same thing: you just have to ask!`,order:13,images:["src/photos/stories/7-17-2026-thya-gutta-0.jpg","src/photos/stories/7-17-2026-thya-gutta-1.jpg","src/photos/stories/7-17-2026-thya-gutta-2.png"]},{date:"7/18/2026",name:"andrew mathis",body:`Continuing to tell these mentorship stories, one at a time. This one starts at an accounting dinner and ends over a game of pool.

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

Very grateful for Dr. Katherine Perry's mentorship, and for every mentor who's shown me the same thing: you just have to ask!`,order:15,images:["src/photos/stories/7-19-2026-katherine-perry-0.jpg","src/photos/stories/7-19-2026-katherine-perry-1.jpg","src/photos/stories/7-19-2026-katherine-perry-2.jpg","src/photos/stories/7-19-2026-katherine-perry-3.png"]},{date:"7/20/2026",name:"vincent nguyen",body:`Continuing to tell these mentorship stories, one at a time. This one starts with four torn pieces of paper, a coin flip, and a spinner app.

In December 2024, my senior year of high school during college application season, I reached out to Vincent Nguyen on LinkedIn after seeing he'd received a scholarship to one of the colleges I was really interested in. I wanted to know how anyone could possibly get it, and honestly, whether I even had a chance at the school myself.

Vincent took the time to read through my essays, gave me honest feedback, and stayed present through every twist of my process. In March, I got rejected from said school I was interested in, but I thanked him for his time anyway.

Months later, torn between four schools ranging from a full ride to years of overwhelming debt, I asked Vincent what to do. He didn't know either, he told me honestly. Instead, he gave me the advice that got him through his own difficult decision: he'd flipped a coin, and paid attention to which outcome he found himself hoping for.

My mom tore a piece of paper into four; wrote a school name on each, and with my eyes closed, I picked the piece that had UGA written on it. Then, following Vincent's advice, I flipped a coin (well, at the time I didn't have a coin on me, so I flipped my phone) between two schools; it landed on UGA. Then I used a spinner app for good measure; it landed on UGA too. All three landed on The University of Georgia.

After I committed to UGA, Vincent told me something I still think about: it's not the college that shapes your experience; it's you. He said he'd seen students at the same school have completely different experiences, some who made the most of it, others who didn't. The place only provides the door. Walking through it is up to you.

If the door was there, I figured I might as well walk through it. That's part of why I've tried to search for, take, and open up every opportunity I possibly could at UGA since: professional development organizations, upperclassmen with incredible advice, professors with decades of expertise, study abroad, all of it.

None of it would've happened if I hadn't sent one long, nervous message to someone I'd never met.

Very grateful for Vincent Nguyen's kindness and guidance during my college decisions, and for every mentor who's shown me the same thing: you just have to ask!
*  View image`,order:16,images:["src/photos/stories/7-20-2026-vincent-nguyen-0.jpg","src/photos/stories/7-20-2026-vincent-nguyen-1.jpg","src/photos/stories/7-20-2026-vincent-nguyen-2.jpg","src/photos/stories/7-20-2026-vincent-nguyen-3.jpg"]},{date:"7/21/2026",name:"marqee ivory",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an invite and a decision to introduce myself to one of the guest speakers in the room!

In February of this year, I saw a message in the Magellan Program GroupMe about a guest speaker session with UGA Alumni of a respected firm, so I went to the meeting where it was happening. I decided to introduce myself to as many of the guest speakers as I could that evening, and I eventually asked Marqee Ivory, CPA about what made him feel fulfilled in his role afterward. I asked him for a coffee chat, and he said yes!

When I asked him who his first real mentor was, he told me it was probably his aunt and uncle, both in business, his aunt an accountant. Watching them showed him what that world could actually look like, long before he ever applied to college as an intended business major.

Marqee's built his own career in specialized tax services since then, and one thing he told me has stuck with me: know your core values, know what's close to your heart, and let that be the foundation of your professional brand. I've since kept that close to my heart in deciding what's true to me!

Maybe none of it would've happened if I hadn't introduced myself to a room full of strangers.

Very grateful for Marqee Ivory, CPA's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:17,images:["src/photos/stories/7-21-2026-marqee-ivory-0.jpg","src/photos/stories/7-21-2026-marqee-ivory-1.png","src/photos/stories/7-21-2026-marqee-ivory-2.jpg"]},{date:"7/22/2026",name:"ashlee azizz",body:`Continuing to tell these mentorship stories, one at a time. This one starts with three concerns I confided in a mentor about, and three pieces of advice she gave me in return.

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

Very grateful for Kennith Lee’s kindness, and for every mentor who’s shown me the same thing: you just have to ask!`,order:19,images:["src/photos/stories/7-23-2026-kennith-lee-0.jpg","src/photos/stories/7-23-2026-kennith-lee-1.png","src/photos/stories/7-23-2026-kennith-lee-2.png"]},{date:"7/24/2026",name:"bria smith",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a race to grab a meal together.

In October 2025, an upperclassman in my Alpha Sigma Rho Sorority, Inc. chapter mentioned the University of Georgia - Greek Life Emerging Greek Leaders Program as something we could look into, and I decided to go for it and apply. It’s a cohort-based leadership program for students in their first two years of fraternity or sorority membership, with biweekly Thursday meetings to build leadership skills and connections across UGA’s Greek community!

Once I got in, I checked the roster and realized I was the only person from the Multicultural Greek Council in the program, so I felt a bit out of place at the start. I was assigned to Bria Smith’s group, a soror of Alpha Kappa Alpha Sorority, Incorporated, part of the National Pan-Hellenic Council, Inc. (NPHC). She offered to grab a meal one-on-one with whoever found her first at the UGA Miller Learning Center. I happened to be there waiting for the elevator before a study session with friends, and when the doors opened, she was there!

Over that meal, I had so many questions, about Greek life, leadership, service, and how to actually make the most of my time in it. She answered every single one and never once made me feel like I was asking too much. She took me under her wing from that day on!

She was the very first person in the National Pan-Hellenic Council, Inc. I talked to, and she was incredible.

I loved having someone to look up to, someone I really admired for how confident and strong she was in her values and her commitment to service.

We kept crossing paths after that, when she invited me to the UGA NPHC’s yard show, and when she showed up to support at the UGA MGC strollcase I performed in, one my sorority’s performance chair had spent months preparing for!

Maybe none of it would’ve happened if I hadn’t looked twice at a message in a group chat and decided to apply!

Very grateful for Bria Smith’s mentorship, and for every mentor who’s shown me the same thing: you just have to ask!`,order:20,images:["src/photos/stories/7-24-2026-bria-smith-0.png","src/photos/stories/7-24-2026-bria-smith-1.jpg"]},{date:"7/25/2026",name:"ben aratame",body:`Continuing to tell these mentorship stories, one at a time. This one starts on a school bus!

I recognized Ben Aratame before I ever reached out to him; we rode the same school bus and lived in the same neighborhood growing up. Many years later, I saw his content online, growth, startups, and entrepreneurship, and it made me think that maybe I could be something bigger than I'd thought. I'd always wanted to create and build things of my own, but I wasn't exactly sure where to get started. I figured it couldn't hurt to ask him how he did it. I found his email through his website and reached out. My email was very, very raw, like I was trying to find some meaning to my life.

He got back to me and wanted to hear my whole story first. Then he told me his.

Ben told me he was a "bum" in high school until he met a mentor who introduced him to self-improvement, business, and personal finance. I actually talked to that same mentor a few times in high school myself, back when I was trying to practice public speaking for the first time. His own parents didn't think he'd make it. He started building his life anyway, posting content on TikTok, working on his physical health, and DMing and emailing every moderately successful person he could find, even leaving notes on nice cars in parking lots. I recognized I'd been doing the same thing, but over LinkedIn and cold emails, for the past few years, just too scared to start speaking more loudly and publicly about it.

That talk sparked something in me. If he could build the life he has, growing up in the same neighborhood and taking the same school bus as me, I started to wonder what I could build too. It took me 10 months since our first conversation, but I finally took the leap to be more public about my own story a few weeks ago.

Very grateful for Ben Aratame's advice, and for every mentor who's shown me the same thing: you just have to ask!`,order:21,images:["src/photos/stories/7-25-2026-ben-aratame-0.jpg","src/photos/stories/7-25-2026-ben-aratame-1.jpg"]},{date:"7/26/2026",name:"karishma pandit",body:`Continuing to tell these mentorship stories, one at a time. This one starts with shadowing a role I hoped to fill in for one day!

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

Very grateful for jeff nguyen's honesty, and for every mentor who's shown me the same thing: you just have to ask!`,order:23,images:["src/photos/stories/7-27-2026-jeff-nguyen-0.jpg","src/photos/stories/7-27-2026-jeff-nguyen-1.jpg","src/photos/stories/7-27-2026-jeff-nguyen-2.png"]},{date:"7/28/2026",name:"dr. christina serrano",body:`Continuing to tell these mentorship stories, one at a time. This one starts with free food and an empty seat.

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

If you'd like to talk with her yourself, you could do the same free 60-minute discovery call I had with her using this link: https://lnkd.in/eSAJdYc2`,order:26,images:["src/photos/stories/7-30-2026-connie-ma-0.jpg","src/photos/stories/7-30-2026-connie-ma-1.png"]},{date:"7/31/2026",name:"dr. irakli shalikashvili",body:`Continuing to tell these mentorship stories, one at a time. This one starts with my very first class in college.

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

Very grateful for Nithya Vembu's mentorship, and for every mentor who's shown me the same thing: you just have to ask!`,order:28,images:["src/photos/stories/8-1-2026-nithya-vembu-0.jpg","src/photos/stories/8-1-2026-nithya-vembu-1.jpg","src/photos/stories/8-1-2026-nithya-vembu-2.jpg","src/photos/stories/8-1-2026-nithya-vembu-3.png"]},{date:"8/2/2026",name:"jay yang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with someone who quite literally proved his own thesis.

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

Very grateful for Gergana Droumeva's guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:30,images:["src/photos/stories/8-3-2026-gergana-droumeva-0.jpg","src/photos/stories/8-3-2026-gergana-droumeva-1.jpg"]},{date:"8/4/2026",name:"ava martinez",body:`Continuing to tell these mentorship stories, one at a time. This one starts with hours of frustration over trying CAD for the very first time.

I've been in the L'SPACE Program, a free, NASA-funded, virtual, workforce development program designed to train and educate students about the dynamic world of the space industry through hands-on learning, since January of this year. Something I'd always had my eye on was trying Siemens NX for the first time. It was completely new to me, and I'm currently on the programmatics subteam as a non-technical major. But I figured it couldn't hurt to try!

I finally got to it 6 months after I first started the program, in June.

I spent hours, sometimes five at a time, trudging through tutorials, trying to complete four assessments I wasn't technically required to do, but really determined to try anyway. I knew the L'SPACE Program is full of incredible mentors, so I reached out to Ava Martinez, who was holding NX office hours, after hours of being stuck on one specific problem.

She walked me through it incredibly patiently, constraints, extrusions, the unite tool, back and forth over messages until I finally hopped on a screenshare call with her.

Something I noticed through it all stuck with me: what I'd struggled with for hours, watching tutorials passively, got resolved so much more easily once I actually asked someone with real experience for help. It was also just super comforting having someone as supportive as Ava there cheering me on through that initial learning curve.

I ended up passing all four assessments for the academy's NX badge!

Maybe none of it would've happened if I hadn't finally asked for that call instead of continuing to struggle alone on something completely new to me.

Very grateful for Ava Martinez's patience and guidance, and for every mentor who's shown me the same thing: you just have to ask!`,order:31,images:["src/photos/stories/8-4-2026-ava-martinez-0.png","src/photos/stories/8-4-2026-ava-martinez-1.png"]},{date:"8/5/2026",name:"dennis chen",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a simple question: what would you do differently?

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

Very grateful for Eshani Ram's mentorship, then and now, and for every mentor who's shown me the same thing: you just have to ask!`,order:33,images:["src/photos/stories/8-6-2026-eshani-ram-0.png","src/photos/stories/8-6-2026-eshani-ram-1.png"]},{date:"8/7/2026",name:"gabriela aguilar castillo",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a newsletter link.

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

P.S. Here's the source if you're interested in reading some more: https://lnkd.in/eVF5dh8W`,order:37,images:["src/photos/stories/8-10-2026-anandhi-bharadwaj-0.jpg","src/photos/stories/8-10-2026-anandhi-bharadwaj-1.jpg","src/photos/stories/8-10-2026-anandhi-bharadwaj-2.jpg"]},{date:"8/11/2026",name:"naman mehrotra",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a builder halfway across the world!

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

Very grateful for Akosua Opoku's kindness and calls, and for every mentor who's shown me the same thing: you just have to ask!`,order:41,images:["src/photos/stories/8-14-2026-akosua-opoku-0.png","src/photos/stories/8-14-2026-akosua-opoku-1.png"]},{date:"8/15/2026",name:"sai shankar sadhu",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a dream job people told him not to pursue.

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

Very grateful for Keira Smyth Gravina's friendship, and for every person who's shown me the same thing: you just have to ask!`,order:43,images:["src/photos/stories/8-16-2026-keira-smyth-gravina-0.png","src/photos/stories/8-16-2026-keira-smyth-gravina-1.png"]},{date:"8/17/2026",name:"syruis zhang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with an Instagram reel I stumbled across as a scared incoming freshman.

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

Very grateful for Syruis Zhang, and for every person who's shown me the same thing: you just have to ask!`,order:44,images:["src/photos/stories/8-17-2026-syruis-zhang-0.jpg","src/photos/stories/8-17-2026-syruis-zhang-1.png"]},{date:"8/18/2026",name:"miffy wang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with taking the NYC public transport completely by myself for the first time!

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

Very grateful for Patrick Pickren's dedication, and for every person who's shown me the same thing: you just have to ask.`,order:47,images:["src/photos/stories/8-20-2026-patrick-pickren-0.jpg","src/photos/stories/8-20-2026-patrick-pickren-1.png","src/photos/stories/8-20-2026-patrick-pickren-2.jpg","src/photos/stories/8-20-2026-patrick-pickren-3.png"]},{date:"8/21/2026",name:"solo",body:`For the past 49 days, I've been sharing other people’s stories. For Day 50, I think it's time I share a little bit about my own!

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

I don't have all the answers, but asking is how I've been finding them, and I'll continue to do so!`,order:48,images:["src/photos/stories/8-21-2026-solo-0.jpg","src/photos/stories/8-21-2026-solo-1.jpg"]},{date:"8/22/2026",name:"subal kumar",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a cold DM at 18 years old.

Subal Kumar's journey into startups started when he was 18, cold-messaging founders just to break into the industry, before he even knew if he was qualified for anything. He told me his first real lesson was simple: you have to learn to shoot your shot, you're never really "ready" for these roles, you just have to ask anyway. He said it took him about a year to completely change his story, from being a student not earning money to working at YC-backed startups.

His path since has been really cool: an early-stage startup, then one with friends generating revenue, then a fellowship at Willow where he helped generate 10 million impressions, then Photon, where he was the first person they publicly featured for his work on X. He never expected that post, but it led directly to the founder of Lightreel AI reaching out to him, and now he runs their fellowship program himself!

He explained what Lightreel AI was to me and I thought it was pretty cool: as he put it, it "doomscrolls for you," analyzing TikTok and Instagram reels to catch content trends early, before they're already everywhere. He told me how the idea behind the product addresses a frustration so many people doing social media research run into: constantly doomscrolling for "market research" and trending sounds, and not actually getting real work done because of it.

I honestly have to catch myself doomscrolling for way too long sometimes just looking for inspiration, so I could immediately see how something like this could be useful! I tried it out for myself, and I was amazed by how many creators I found talking about challenges I'd faced myself. Seeing so many people sharing similar experiences was also a nice reminder that I was never really alone in them! I could see he was genuinely excited about how Y Combinator-backed startups have started using Lightreel to source undiscovered User Generated Content (UGC) creators, while creators can use it to understand what to try next!

What stuck with me most was his honest advice on breaking into startups: show hunger! Subal's advice was for me and also for anyone reading this who's trying to break in: post consistently, build in public, contribute to open source, and show founders real proof that you would make an impact through actual results. I've really been learning so much on LinkedIn by talking to people of various backgrounds every day!

Maybe none of it would've happened if he hadn't cold-messaged one founder at 18, just to see if they'd say yes!

Very grateful for Subal Kumar's honesty, and for every person who's shown me the same thing: you just have to ask!`,order:49,images:["src/photos/stories/8-22-2026-subal-kumar-0.jpg","src/photos/stories/8-22-2026-subal-kumar-1.jpg"]},{date:"8/23/2026",name:"anshi purohit",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a random team assignment for an international competition in March 2024, and someone from Maryland when I was in Georgia.

In my junior year of high school, I signed up completely on my own for a competition through the International Youth Neuroscience Association (IYNA), not knowing a single other person doing it. I got randomly paired into a team of four, and that's how I met Anshi Purohit.

We had one week to build a public health proposal on neurodegenerative disease prevention, looking at environmental exposures and legislative measures to minimize risk. We ended up placing third internationally!

After that week, life moved on, and Anshi and I didn't stay in touch.

Fast forward two years later to 2026, I completed a 10-week winter fellowship with the Institute for Youth in Policy, and then joined their education department. In April, I got paired with a someone to guide me through the beginning of it, someone named Anshi Purohit. I remember thinking, that sounds so familiar, and sure enough, it was the same Anshi I worked on the IYNA competition with.

To make it even more surreal, she told me she was heading to The University of Georgia too, the same school I'm attending!

We finally got to meet in person for the first time a few days ago, over two years after we first worked together as virtual strangers on a neuroscience competition. It felt like nothing had really changed, and I was just chatting with an old friend! She told me about her interests in medicine, regenerative bioscience (fun fact: it was a major I actually once tried to pursue myself!), and journalism, and how she found The University of Georgia and its regenerative bioscience major just from scrolling Instagram one day.

What are the odds, meeting randomly at 16 and 17 years old across the country through a neuroscience competition, only to end up at the same college years later.

Really, none of it would've happened if I hadn't signed up alone for something I knew nothing about back in high school.

Very grateful for this full-circle friendship with Anshi Purohit, and for every person who's shown me the same thing: you just have to ask!`,order:50,images:["src/photos/stories/8-23-2026-anshi-purohit-0.jpg","src/photos/stories/8-23-2026-anshi-purohit-1.jpg","src/photos/stories/8-23-2026-anshi-purohit-2.png","src/photos/stories/8-23-2026-anshi-purohit-3.jpg","src/photos/stories/8-23-2026-anshi-purohit-4.jpg"]},{date:"8/25/2026",name:"macy felton",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a reminder that you don't have to know exactly what you want, even in a field as technical as aerospace.

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

Very grateful for Francine Tran's advice, and for every person who's shown me the same thing: you just have to ask!`,order:52,images:["src/photos/stories/8-25-2026-francine-tran-0.jpg","src/photos/stories/8-25-2026-francine-tran-1.jpg"]},{date:"8/27/2026",name:"rohan mistry",body:`Continuing to tell these mentorship stories, one at a time. This one starts in 2023 in my junior year of high school, long before The University of Georgia was even on my radar.

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

Very grateful for Kolton Rice telling me his story, and for every person who's shown me the same thing: you just have to ask!  View image`,order:56,images:["src/photos/stories/8-29-2026-kolton-rice-0.jpg","src/photos/stories/8-29-2026-kolton-rice-1.jpg"]},{date:"8/31/2026",name:"vivian lin",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a design class she almost didn't take!

I met Vivian Lin through the Lightreel AI fellowship; we're both in the same cohort!

Vivian came into UC San Diego with the intent of studying Computer Science, but got nervous about admissions and asked herself: was CS something she'd want to pursue no matter what school she got into? The answer was no, so she gave Data Science a try because of her love of math! Although the classes were challenging, the subject eventually clicked, and she ended up loving it.

It wasn't until her second year that design entered the picture, almost by accident, through a required data visualization course, focusing on human-computer interaction design. This led her to explore human-centered design, taking a class in interaction design. She loved the ideation side, seeing how something as simple as showing two versions of a design to see how the target audience responds to them (A/B testing) bridges the technical and human sides of building something. As a result, she ended up declaring a design minor!

Last spring, in a UX design class, she and her team redesigned BeReal. for a case study, imagining a version where, instead of a 2-minute window, you had the whole day to post, with optional journaling prompts to reflect on your day rather than just capture a snapshot of it. It’s a small change on paper, but it reframed the whole product: from chasing streaks of capturing random moments to a daily habit of reflection. Small, thoughtful reframes like that say a lot about how she thinks!

As for Lightreel AI itself, she's not a heavy user, but she has spent time on it trying out sample prompts, browsing the trending tab to see what's actually catching user attention on TikTok, and loving the overall experience of the product. Lightreel constantly updates creators on the newest trends and catches them before they go viral, essentially "doomscrolling" for you. She’s even started using it to get feedback on her LinkedIn posts before publishing them!

She talked briefly about being 21 with her whole life ahead of her: you don't have to have it all figured out right now. If something doesn't feel right, it's better to find that out early than to keep going out of momentum and being honest with herself about what she actually wanted her day-to-day to look like!

Outside of school, Vivian’s paddled on her school's dragon boat team since her third year, studied abroad in Hong Kong, and did a K-pop dance cover last quarter. Fun fact, we found out we shared that in common too, I was part of a dance team in my senior year of high school, and it made me happy to express myself through movement!

Talking with her was a good reminder that the "right" path isn't always the one you started on!

Very grateful for Vivian Lin sharing her story with me, and for every person who's shown me the same thing: you just have to ask!`,order:57,images:["src/photos/stories/8-30-2026-vivian-lin-0.jpg","src/photos/stories/8-30-2026-vivian-lin-1.jpg"]},{date:"9/1/2026",name:"subal kumar",body:`Continuing to tell these mentorship stories, one at a time. This one starts with something he disliked, and turned into a book!

Abdul Wahaj told me his whole journey traces back to his second year of high school. He got into listening to motivational speakers on YouTube to help break past self-doubt, and one idea stuck with him: taking something you dislike and finding a way to make it work in your favor. So he took writing, something he genuinely disliked, and kept doing it anyway, until he wrote a book. Funny enough, we found out we both listened to the same motivational speaker to break past self-doubt! That led to a meeting with his province's Ministry of Education, and gave him the push to start posting on LinkedIn.

What started as User Generated Content (UGC) content turned gradually into growth roles, then real conversations with hundreds of people, coffee chats, cold emails, and curiosity about others' work.

Abdul's path into VC and startups came almost entirely through cold outreach and relationship-building. Entrepreneurs First was his first real step into VC, which came from 21 cold emails, building an app, and following up 20 times about how he could help. A coffee chat with someone in product marketing led to a referral, Antler came from a cold email, and his path has also included working with a Y Combinator-backed startup along the way!

He was honest about a difficult season too, having a difficult period in his life, watching friends celebrate college acceptances while he faced rejection after rejection. Abdul described that month as feeling like the world was against him. He channeled that disappointment into motivation to push his limits and see how far he could go on his own terms. I could relate to that in a different way, in high school, so much of what I thought about revolved around college decisions too, but I've since come to terms with it and have been making the most out of and enjoying my time at The University of Georgia!

We both talked about this quote that really hit home for both of us: "You have to realize that life is coming from you, and not at you." Reflecting on both of our experiences with rejections, we realized we've both been doing the absolute best we could with what we have, and trust that we'll still come out stronger.

We also talked about our parents, and how much thought goes into honoring their sacrifices while still building a path that feels true to you. Abdul's parents left everything behind to move to Canada, missing major family events back home along the way. He shared something that stuck with me: staying in honest communication, even something as small as a weekly check-in, can go a long way in building trust as you navigate your own path forward!

Very grateful for Abdul Wahaj sharing his story with me, and for every person who's shown me the same thing: you just have to ask!  View image`,order:58,images:["src/photos/stories/8-31-2026-subal-kumar-0.jpg","src/photos/stories/8-31-2026-subal-kumar-1.jpg"]},{date:"9/2/2026",name:"jaron tan",body:`Continuing to tell these mentorship stories, one at a time. This one starts in the Philippines, moves through Singapore, and lands in New Jersey.

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
   *  View image    *  View image`,order:61,images:["src/photos/stories/9-3-2026-alice-lan-0.jpg","src/photos/stories/9-3-2026-alice-lan-1.jpg","src/photos/stories/9-3-2026-alice-lan-2.jpg"]},{date:"9/5/2026",name:"anthony wang",body:`Continuing to tell these mentorship stories, one at a time. This one starts with me failing my first financial accounting exam and working on a hackathon project from 10pm until 6am.

I met Anthony Wang (Tony for short!) because I did so badly on my first financial accounting exam that I was genuinely shocked. During the session where we could go back and review our scores and answers on the exams, I ran into friends from high school and asked if I could study with them since I was so lost. They said of course, and Anthony happened to be in the study room too. We hung out as a group plenty of times after that. And don't worry, I ended the class with an A!

Tony grew up in Suwanee, Georgia, and started selling fountain pens back in 10th grade, which sparked his interest in business in the first place. Like me, he came into The University of Georgia not knowing what he wanted to do, just doing his best to figure it out.

One afternoon, around 5 or 6pm, we were both in the same room working solo on separate projects for UGAHacks for several hours. After hours of being stuck, confused, and frustrated on our own, around 10pm we had a realization: why don't we just work together? Tony and I ended up building something together from 10pm until 6am, our first time actually collaborating, completely sleep-deprived, but it was the first time we both realized how much we had to learn, and how much we actually had in common.

That one decision turned into doing four case competitions together, spending countless hours doing interview and case prep in the MLC.

When he's not building things, Tony loves pickleball, international travel (he's been to over 30 countries!), collecting fragrances, and learning more about start-ups!

Very grateful for Anthony Wang's supportive friendship, and for every person who's shown me the same thing: you just have to ask!`,order:62,images:["src/photos/stories/9-4-2026-anthony-wang-0.jpg","src/photos/stories/9-4-2026-anthony-wang-1.jpg"]},{date:"9/6/2026",name:"dior muankaew",body:`Continuing to tell these mentorship stories, one at a time. This one starts with curiosity about people’s experiences!

Deannery (Dior) Muankaew told me about her college journey, and it stuck with me in a way I didn’t expect.

In high school, she was deeply ambitious, with dreams of going to a well-known college, but life had a different way of things, so she started at community college first.

She was honest that people can carry a lot of stigma around that path, but her time there was genuinely humbling in the best way. She met people from every walk of life there, from veterans to single parents, and it broadened her perspective on people in a way she says she wouldn’t trade for anything.

From that, Dior talked about wanting to tell the younger generation going through the college admissions process something important: as it gets harder to get in, and the pressure and prestige around top schools keeps climbing, kids need to remember to be a good person despite it all. She reminded me that a school’s name can take you far, but ultimately you’re the one who makes the difference, you still have to take the initiative to network, show up to job fairs, and put yourself out there.

Dior also told me something very practical: she once pushed herself to nearly 100 hours of NASA - National Aeronautics and Space Administration coursework, listening to modules in the car, between classes, and sometimes before bed, trying to fully absorb it all.

Looking back, she said she wishes someone had told her to find some sort of balance earlier. Your brain needs the basics: eating, sleeping, and happiness to actually function and excel. She now prioritizes breaks, rest, and giving herself permission to slow down when she needs to.

It was honestly something I needed to hear too, as I’ve been actively improving on taking care of myself and getting more rest as well. There was a point this year where I was waking up at 5:30am every day to study and it eventually caught up with me physically, but I definitely learned my lesson!

What stuck with me most was her encouragement to go out, talk to people, and ask questions, even when it’s scary. She said it can be hard to tell where the line is between “is this awkward to ask” and “is this worth asking anyway,” but more people should be having that conversation openly.

Very grateful for Deannery (Dior) Muankaew sharing her story with me, and for every person who’s shown me the same thing: you just have to ask!`,order:63,images:["src/photos/stories/9-5-2026-dior-muankaew-0.jpg","src/photos/stories/9-5-2026-dior-muankaew-1.jpg"]},{date:"9/7/2026",name:"evan kong",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a $5 bet between two friends!

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

Very grateful for Evan Kong sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:64,images:["src/photos/stories/9-6-2026-evan-kong-0.jpg","src/photos/stories/9-6-2026-evan-kong-1.jpg"]},{date:"9/8/2026",name:"rui maki",body:`Continuing to tell these mentorship stories, one at a time. This one starts from Scotland, to University of Oxford, to Barcelona, and finally to The University of Georgia!

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

If you would like to learn more about Build Talent Labs, check it out here! https://lnkd.in/eAraY7VF`,order:65,images:["src/photos/stories/9-7-2026-rui-maki-0.jpg","src/photos/stories/9-7-2026-rui-maki-1.jpg"]},{date:"9/9/2026",name:"zexi li",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a stolen bag right before school started.

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

Very grateful for Rachel Paiz's partnership, and for every person who's shown me the same thing: you just have to ask!`,order:68,images:["src/photos/stories/9-10-2026-rachel-paiz-0.jpg","src/photos/stories/9-10-2026-rachel-paiz-1.jpg"]},{date:"9/12/2026",name:"elisha kim",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a random post about Clash Royale!

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
      *  View image`,order:75,images:["src/photos/stories/9-17-2026-jillian-loux-0.jpg","src/photos/stories/9-17-2026-jillian-loux-1.jpg","src/photos/stories/9-17-2026-jillian-loux-2.jpg"]},{date:"9/19/2026",name:"phil-ho combatir",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a college research project that unexpectedly led him to NASA!

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

Very grateful for Joe Radest sharing his story with our class, and for every person who's shown me the same thing: you just have to ask!`,order:78,images:["src/photos/stories/9-20-2026-joe-radest-0.jpg","src/photos/stories/9-20-2026-joe-radest-1.png"]},{date:"9/22/2026",name:"joe nedza",body:`Continuing to tell these mentorship stories, one at a time. This one starts with selling waffles out of his college apartment.

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

Very grateful for Joe Nedza sharing his story with us, and for every person who's shown me the same thing: you just have to ask!`,order:79,images:["src/photos/stories/9-21-2026-joe-nedza-0.png","src/photos/stories/9-21-2026-joe-nedza-1.png"]},{date:"9/23/2026",name:"chloe hughes",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a scholarship application she almost gave up on halfway through.

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
         *  View image          *  View image`,order:82,images:["src/photos/stories/9-24-2026-eric-d-amico-0.jpg","src/photos/stories/9-24-2026-eric-d-amico-1.jpg","src/photos/stories/9-24-2026-eric-d-amico-2.jpg"]},{date:"9/26/2026",name:"ezekiel wood & lemma post",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a team that almost didn't get funded, and a redo that changed everything.

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

-
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

--

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

Very grateful for Jonathan Pertchik sharing his story with me, and for every person who's shown me the same thing: you just have to ask!`,order:86,images:["src/photos/stories/9-28-2026-jonathan-pertchik-0.png"]},{date:"9/30/2026",name:"dominick filipponi",body:`Continuing to tell these mentorship stories, one at a time. This one starts with a kid who wanted to be an astronaut and never really stopped.

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

--

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

--

P.S. If you have an idea you're working on, or even if you're just curious about the world too, I'd love to hear your story! DM me :) And if you're building something, add it to Pitcher!

https://lnkd.in/eX6CN7fC`,order:97,images:["src/photos/stories/10-11-2026-solo-0.jpg","src/photos/stories/10-11-2026-solo-1.jpg","src/photos/stories/10-11-2026-solo-2.png"]},{date:"10/12/2026",name:"eesha banala",body:`Continuing to tell these stories, one at a time. This one starts with a career event she almost skipped!

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

Very grateful to Ashlynn Wong for sharing her story with me, and to everyone who keeps showing me the same thing: you just have to ask!`,order:101,images:["src/photos/stories/10-15-2026-ashlynn-wong-0.jpg","src/photos/stories/10-15-2026-ashlynn-wong-1.jpg"]},{date:"10/16/2026",name:"tami maeda",body:`Continuing to tell these mentorship stories, one at a time. This one starts with five years of hearing "no," and finally getting a yes!

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

--

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

Very grateful to Lukas Gross for sharing his story with me, and for everyone who's shown me the same thing: you just have to ask!`,images:["src/photos/stories/10-21-2026-lukas-gross-0.jpg"]}],Fc="/assets/10-1-2026-nicholas-low-0-l8z6Tfky.jpg",Uc="/assets/10-10-2026-radin-shahravan-0-DnDMN2xu.png",Bc="/assets/10-11-2026-solo-0-DVqNpudn.jpg",Oc="/assets/10-11-2026-solo-1-XZi_j7Rc.jpg",Vc="/assets/10-11-2026-solo-2-C6zT2LvE.png",Wc="/assets/10-12-2026-eesha-banala-0-DlktiaL4.jpg",Gc="/assets/10-13-2026-sofiat-olanrewaju-0-BB1jzZT8.jpg",Jc="/assets/10-14-2026-tony-erwin-msf-cbda-0-C6L9toqy.jpg",Yc="/assets/10-15-2026-ashlynn-wong-0-CJhalIdP.jpg",Kc="/assets/10-15-2026-ashlynn-wong-1-BuvE6HU-.jpg",$c="/assets/10-16-2026-jasmina-holikov-0-Cw2VTu_M.jpg",qc="/assets/10-17-2026-jeff-aquino-0--a--nMIv.jpg",Qc="/assets/10-18-2026-yusuf-mohamoud-0-uvOUeYLj.jpg",Xc="/assets/10-18-2026-yusuf-mohamoud-1-CoGptN0c.jpg",Zc="/assets/10-19-2026-roshan-ramani-0-CtiHieft.jpg",em="/assets/10-2-2026-dimas-aryo-0-CQQQ2tuH.jpg",tm="/assets/10-2-2026-dimas-aryo-1-DWPmob9M.jpg",nm="/assets/10-20-2026-teagan-yuen-0-CAbk674N.jpg",om="/assets/10-3-2026-abdulsaboor-shaikh-0-C0GBF6DB.jpg",am="/assets/10-4-2026-duy-nguyen-0-DZQ0W0rp.png",sm="/assets/10-5-2026-arthur-park-0-CeGdkKc4.jpg",im="/assets/10-5-2026-arthur-park-1-BUfOy6zW.jpg",rm="/assets/10-7-2026-got-reuploaded-tami-maeda-0-BOteWkgT.jpg",lm="/assets/10-7-2026-got-reuploaded-tami-maeda-1-B2ogJ3T2.jpg",hm="/assets/10-8-2026-jose-cruz-lopez-0-BL4kHfjX.jpg",um="/assets/10-9-2026-tracy-huang-0-5agkSO8Y.png",dm="/assets/7-10-2026-ellie-fleming-0-CMOki6Mv.png",cm="/assets/7-10-2026-ellie-fleming-1-PE-VqkTf.jpg",mm="/assets/7-11-2026-robert-anthony-0-CJfjNArm.png",gm="/assets/7-11-2026-robert-anthony-1-DiY8AkOO.png",pm="/assets/7-12-2026-kush-santosh-0-D6RFc5En.jpg",fm="/assets/7-12-2026-kush-santosh-1-DGUw8drC.jpg",ym="/assets/7-13-2026-alex-zou-0-TDxT09jA.jpg",wm="/assets/7-13-2026-alex-zou-1-i1vNkPnf.jpg",vm="/assets/7-14-2026-catherine-ling-0-ijAMrV4Y.png",km="/assets/7-14-2026-catherine-ling-1-DxZNl15w.jpg",bm="/assets/7-15-2026-michael-mcginn-0-DNnIHFxp.png",Im="/assets/7-15-2026-michael-mcginn-1-DyMgbW3e.jpg",jm="/assets/7-16-2026-pranav-rohit-0-Cgarufpy.jpg",Sm="/assets/7-16-2026-pranav-rohit-1-BxFy3cWN.jpg",xm="/assets/7-16-2026-pranav-rohit-2-CZJS9PA3.jpg",Cm="/assets/7-17-2026-thya-gutta-0-BaJZfO-j.jpg",Tm="/assets/7-17-2026-thya-gutta-1-C_wBw0jg.jpg",Am="/assets/7-17-2026-thya-gutta-2-D0mg5_1u.png",zm="/assets/7-18-2026-andrew-mathis-0-CNIUweKK.png",Em="/assets/7-18-2026-andrew-mathis-1-BXNmeznN.png",Nm="/assets/7-19-2026-katherine-perry-0-pqh2QDzq.jpg",Pm="/assets/7-19-2026-katherine-perry-1-D4QXkq5i.jpg",Mm="/assets/7-19-2026-katherine-perry-2-BXC8SatL.jpg",Lm="/assets/7-19-2026-katherine-perry-3-Cj0bNSzv.png",Hm="/assets/7-20-2026-vincent-nguyen-0-CnYRvt7r.jpg",Dm="/assets/7-20-2026-vincent-nguyen-1-DyDKiE-F.jpg",_m="/assets/7-20-2026-vincent-nguyen-2-D3-k0tJs.jpg",Rm="/assets/7-20-2026-vincent-nguyen-3-YrrODtv9.jpg",Fm="/assets/7-21-2026-marqee-ivory-0-EiwSTjJ0.jpg",Um="/assets/7-21-2026-marqee-ivory-1-Dak5sCdL.png",Bm="/assets/7-21-2026-marqee-ivory-2-B_LlfiEz.jpg",Om="/assets/7-22-2026-ashlee-azizz-0-Cv9jAHKl.jpg",Vm="/assets/7-22-2026-ashlee-azizz-1-BXyo6w3O.png",Wm="/assets/7-23-2026-kennith-lee-0-BBT3WACL.jpg",Gm="/assets/7-23-2026-kennith-lee-1-dkC-bo93.png",Jm="/assets/7-23-2026-kennith-lee-2-BzUtCIC-.png",Ym="/assets/7-24-2026-bria-smith-0-Cu_QpDKn.png",Km="/assets/7-24-2026-bria-smith-1-MOFTbYdc.jpg",$m="/assets/7-25-2026-ben-aratame-0-CPTLLXWY.jpg",qm="/assets/7-25-2026-ben-aratame-1-yANnDyt5.jpg",Qm="/assets/7-26-2026-karishma-pandit-0-DgSWrLFe.jpg",Xm="/assets/7-26-2026-karishma-pandit-1-WAUodC76.jpg",Zm="/assets/7-27-2026-jeff-nguyen-0-GP8vMwdR.jpg",eg="/assets/7-27-2026-jeff-nguyen-1-CbOsQRM0.jpg",tg="/assets/7-27-2026-jeff-nguyen-2-CkWDrCGX.png",ng="/assets/7-28-2026-dr-christina-serrano-0-B_rNADOg.jpg",og="/assets/7-28-2026-dr-christina-serrano-1-CGul1l73.png",ag="/assets/7-29-2026-jacob-frausto-0-D0wrr01W.jpg",sg="/assets/7-29-2026-jacob-frausto-1-DcqbDGPG.jpg",ig="/assets/7-30-2026-connie-ma-0-BeK0vrOB.jpg",rg="/assets/7-30-2026-connie-ma-1-Bxgabapw.png",lg="/assets/7-31-2026-dr-irakli-shalikashvili-0-M0iVpsSV.png",hg="/assets/7-31-2026-dr-irakli-shalikashvili-1-B2cifdRi.png",ug="/assets/7-4-2026-elizabeth-wang-0-BmnNQIU_.jpg",dg="/assets/7-5-2026-ammar-razzak-0-CWk-AHbF.jpg",cg="/assets/7-5-2026-ammar-razzak-1-DGL_eTWt.jpg",mg="/assets/7-5-2026-ammar-razzak-2-lRuGhl7e.jpg",gg="/assets/7-6-2026-omeir-honda-0-h6HzZg55.jpg",pg="/assets/7-6-2026-omeir-honda-1-DHI-Wfom.jpg",fg="/assets/7-6-2026-omeir-honda-2-DR-iNVtF.jpg",yg="/assets/7-6-2026-omeir-honda-3-2QURMC2N.jpg",wg="/assets/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-0-DCayntki.jpg",vg="/assets/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-1-CS7I7yPz.jpg",kg="/assets/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-2-mw38XcUM.jpg",bg="/assets/7-8-2026-girish-menon-0-BE5TthnX.jpg",Ig="/assets/7-8-2026-girish-menon-1-eYLyqMl_.jpg",jg="/assets/7-9-2026-will-huber-0-B96p2xpy.jpg",Sg="/assets/7-9-2026-will-huber-1-KtzYT8Ur.jpg",xg="/assets/7-9-2026-will-huber-2-DB_a_QWi.jpg",Cg="/assets/8-1-2026-nithya-vembu-0-DtVdNj-P.jpg",Tg="/assets/8-1-2026-nithya-vembu-1-C8e4NPWg.jpg",Ag="/assets/8-1-2026-nithya-vembu-2-DaynufY3.jpg",zg="/assets/8-1-2026-nithya-vembu-3-BNfemoMO.png",Eg="/assets/8-10-2026-anandhi-bharadwaj-0-CBlzyG5w.jpg",Ng="/assets/8-10-2026-anandhi-bharadwaj-1-n0XFXd0p.jpg",Pg="/assets/8-10-2026-anandhi-bharadwaj-2-B8LKd9TO.jpg",Mg="/assets/8-11-2026-naman-mehrotra-0-PtJEj1Fh.jpg",Lg="/assets/8-11-2026-naman-mehrotra-1-BA94qRpA.jpg",Hg="/assets/8-12-2026-matthew-huang-0-C5keRHsA.jpg",Dg="/assets/8-12-2026-matthew-huang-1-BbtVHuGy.jpg",_g="/assets/8-13-2026-matthew-foster-0-BqtFJtLA.jpg",Rg="/assets/8-13-2026-matthew-foster-1-Dqlr1Zld.jpg",Fg="/assets/8-13-2026-matthew-foster-2-_pTUMIJX.png",Ug="/assets/8-14-2026-akosua-opoku-0-6DUwR2kd.png",Bg="/assets/8-14-2026-akosua-opoku-1-7YLYsi4H.png",Og="/assets/8-15-2026-sai-shankar-sadhu-0-BXAvXVhW.jpg",Vg="/assets/8-15-2026-sai-shankar-sadhu-1-CfOrAVs-.jpg",Wg="/assets/8-15-2026-sai-shankar-sadhu-2-hMVdYg4l.jpg",Gg="/assets/8-16-2026-keira-smyth-gravina-0-M-YdXjZS.png",Jg="/assets/8-16-2026-keira-smyth-gravina-1-Gno1_0_V.png",Yg="/assets/8-17-2026-syruis-zhang-0-HkGVBE8W.jpg",Kg="/assets/8-17-2026-syruis-zhang-1-DL5Prmto.png",$g="/assets/8-18-2026-miffy-wang-0-BObuBV-E.png",qg="/assets/8-18-2026-miffy-wang-1-DsNJpTAL.jpg",Qg="/assets/8-19-2026-zawadi-pilipili-0-Uxm7Gepe.png",Xg="/assets/8-19-2026-zawadi-pilipili-1-BDa_s6p5.png",Zg="/assets/8-2-2026-jay-yang-0-D7j4W4mr.png",ep="/assets/8-2-2026-jay-yang-1-D-19gew3.png",tp="/assets/8-20-2026-patrick-pickren-0-emkzyTW6.jpg",np="/assets/8-20-2026-patrick-pickren-1-qVOYgx7D.png",op="/assets/8-20-2026-patrick-pickren-2-DCsJz2QI.jpg",ap="/assets/8-20-2026-patrick-pickren-3-Bmjnxx54.png",sp="/assets/8-21-2026-solo-0-C18X7v1i.jpg",ip="/assets/8-21-2026-solo-1-DnsY_L97.jpg",rp="/assets/8-22-2026-subal-kumar-0-BcHqMlR-.jpg",lp="/assets/8-22-2026-subal-kumar-1-9WgURV0f.jpg",hp="/assets/8-23-2026-anshi-purohit-0-B2QTV2vV.jpg",up="/assets/8-23-2026-anshi-purohit-1-BgzfPkDm.jpg",dp="/assets/8-23-2026-anshi-purohit-2-B_Ub1b0U.png",cp="/assets/8-23-2026-anshi-purohit-3-CPHEITGE.jpg",mp="/assets/8-23-2026-anshi-purohit-4-D8qmU1SH.jpg",gp="/assets/8-24-2026-macy-felton-0-DQMYye5u.png",pp="/assets/8-25-2026-francine-tran-0-DpazEOmC.jpg",fp="/assets/8-25-2026-francine-tran-1-DntIWVkR.jpg",yp="/assets/8-26-2026-rohan-mistry-0-99QZ4z-5.jpg",wp="/assets/8-26-2026-rohan-mistry-1-DwsUg3nS.jpg",vp="/assets/8-27-2026-alyssa-lee-0-CjuoDUHU.jpg",kp="/assets/8-27-2026-alyssa-lee-1-Bt1z2xvn.jpg",bp="/assets/8-28-2026-lalo-de-armas-0-D12XwszQ.jpg",Ip="/assets/8-28-2026-lalo-de-armas-1-CeYGVt5E.jpg",jp="/assets/8-29-2026-kolton-rice-0-BAwtkRdb.jpg",Sp="/assets/8-29-2026-kolton-rice-1-Rg-U7sIa.jpg",xp="/assets/8-3-2026-gergana-droumeva-0-CK6gQKY6.jpg",Cp="/assets/8-3-2026-gergana-droumeva-1-BzDdcBmu.jpg",Tp="/assets/8-30-2026-vivian-lin-0-CznxQC41.jpg",Ap="/assets/8-30-2026-vivian-lin-1-CPe236Sr.jpg",zp="/assets/8-31-2026-subal-kumar-0-DNEYEazP.jpg",Ep="/assets/8-31-2026-subal-kumar-1-Druv_oJD.jpg",Np="/assets/8-4-2026-ava-martinez-0-DBjkCgxr.png",Pp="/assets/8-4-2026-ava-martinez-1-PISRdQdx.png",Mp="/assets/8-5-2026-dennis-chen-0-BjEAXWtY.jpg",Lp="/assets/8-5-2026-dennis-chen-1-DX1Q7Pi3.png",Hp="/assets/8-6-2026-eshani-ram-0-DwTMWpoa.png",Dp="/assets/8-6-2026-eshani-ram-1-C7hBiFIN.png",_p="/assets/8-7-2026-gabriela-aguilar-castillo-0-BFkljd9T.png",Rp="/assets/8-7-2026-gabriela-aguilar-castillo-1-B7b9GjSj.png",Fp="/assets/8-8-2026-joaquin-santander-0-CpqWjBU-.png",Up="/assets/8-8-2026-joaquin-santander-1-D6X0t-m2.jpg",Bp="/assets/8-9-2026-amanda-schultz-0-C41cdyUX.png",Op="/assets/8-9-2026-amanda-schultz-1-DHyKmZCy.png",Vp="/assets/9-1-2026-jaron-tan-0-DXUIcaez.jpg",Wp="/assets/9-10-2026-rachel-paiz-0-D-bQ4pSa.jpg",Gp="/assets/9-10-2026-rachel-paiz-1-giTTPdL-.jpg",Jp="/assets/9-11-2026-elisha-kim-0-mH6HdRh6.png",Yp="/assets/9-12-2026-marko-ciganovic-0-Dq_Prc0b.jpg",Kp="/assets/9-13-2026-jessica-jones-0-DHpz3mcZ.jpg",$p="/assets/9-13-2026-jessica-jones-1-Da_53m72.jpg",qp="/assets/9-14-2026-akshat-kumar-0-YnKjc72R.jpg",Qp="/assets/9-15-2026-ayanna-varma-0-uwa3W6_C.jpg",Xp="/assets/9-16-2026-shivansh-rastogi-0-DIp7v1YF.jpg",Zp="/assets/9-17-2026-jillian-loux-0-mOxz5Mce.jpg",ef="/assets/9-17-2026-jillian-loux-1-Cya-OeQx.jpg",tf="/assets/9-17-2026-jillian-loux-2-VNiMHI3k.jpg",nf="/assets/9-18-2026-phil-ho-combatir-0-Dol8EiWN.png",of="/assets/9-19-2026-kennard-liong-0-CKGVKK1B.png",af="/assets/9-2-2026-yash-alluri-0-D7wiMU2x.jpg",sf="/assets/9-20-2026-joe-radest-0-TfuK9VJr.jpg",rf="/assets/9-20-2026-joe-radest-1-Dvbx-UEd.png",lf="/assets/9-21-2026-joe-nedza-0-6kYnLsFZ.png",hf="/assets/9-21-2026-joe-nedza-1-Lbg7DYog.png",uf="/assets/9-22-2026-chloe-hughes-0-ND60kedg.jpg",df="/assets/9-22-2026-chloe-hughes-1-CJblyJjH.jpg",cf="/assets/9-23-2026-jibran-khalil-0-DL3cNRlI.jpg",mf="/assets/9-24-2026-eric-d-amico-0-BLJ6pzez.jpg",gf="/assets/9-24-2026-eric-d-amico-1-DfJnQ87F.jpg",pf="/assets/9-24-2026-eric-d-amico-2-DatX3v_Y.jpg",ff="/assets/9-25-2026-ezekiel-wood-lemma-post-0-ItBruMBk.png",yf="/assets/9-25-2026-ezekiel-wood-lemma-post-1-BBvjabw1.png",wf="/assets/9-25-2026-ezekiel-wood-lemma-post-2-CdJKFhGJ.jpg",vf="/assets/9-25-2026-ezekiel-wood-lemma-post-3-Cuic11SY.jpg",kf="/assets/9-25-2026-ezekiel-wood-lemma-post-4-518Cvyra.png",bf="/assets/9-25-2026-ezekiel-wood-lemma-post-5-DgdVDfdl.png",If="/assets/9-25-2026-ezekiel-wood-lemma-post-6-BG17GmLC.png",jf="/assets/9-26-2026-fredrick-okwudili-0-DI6Mw0nh.png",Sf="/assets/9-27-2026-manoj-d-0-Dfu2T2W3.jpg",xf="/assets/9-28-2026-jonathan-pertchik-0-DXomrnsL.png",Cf="/assets/9-29-2026-dominick-filipponi-0-gBUDYw_F.png",Tf="/assets/9-3-2026-alice-lan-0-CIy56hQI.jpg",Af="/assets/9-3-2026-alice-lan-1-BRil7TA1.jpg",zf="/assets/9-3-2026-alice-lan-2-BwDRRq0P.jpg",Ef="/assets/9-30-2026-jerry-zhu-0-DBBhCTNL.jpg",Nf="/assets/9-4-2026-anthony-wang-0-DpEbGUxO.jpg",Pf="/assets/9-4-2026-anthony-wang-1-868xPA6N.jpg",Mf="/assets/9-5-2026-dior-muankaew-0-B327HGPl.jpg",Lf="/assets/9-5-2026-dior-muankaew-1-Cr5FDVX6.jpg",Hf="/assets/9-6-2026-evan-kong-0-DX4ltUe0.jpg",Df="/assets/9-6-2026-evan-kong-1-nbafxg2c.jpg",_f="/assets/9-7-2026-rui-maki-0-e-qyH5lj.jpg",Rf="/assets/9-7-2026-rui-maki-1-BNgX2Ex0.jpg",Ff="/assets/9-8-2026-zexi-li-0-CfWd0qdS.jpg",Uf="/assets/9-8-2026-zexi-li-1-BnHvydiI.png",Bf="/assets/9-8-2026-zexi-li-2-BS60PX5t.png",Of="/assets/9-8-2026-zexi-li-3-aOr7waNQ.png",Vf="/assets/9-9-2026-ashutos-jain-0-zWk5UCtz.jpg",Wf="/assets/9-9-2026-ashutos-jain-1-RLnYG7UU.jpg",Gf="/assets/10-21-2026-lukas-gross-0-Bc6XYUW4.jpg",Jf={"src/photos/stories/10-1-2026-nicholas-low-0.jpg":Fc,"src/photos/stories/10-10-2026-radin-shahravan-0.png":Uc,"src/photos/stories/10-11-2026-solo-0.jpg":Bc,"src/photos/stories/10-11-2026-solo-1.jpg":Oc,"src/photos/stories/10-11-2026-solo-2.png":Vc,"src/photos/stories/10-12-2026-eesha-banala-0.jpg":Wc,"src/photos/stories/10-13-2026-sofiat-olanrewaju-0.jpg":Gc,"src/photos/stories/10-14-2026-tony-erwin-msf-cbda-0.jpg":Jc,"src/photos/stories/10-15-2026-ashlynn-wong-0.jpg":Yc,"src/photos/stories/10-15-2026-ashlynn-wong-1.jpg":Kc,"src/photos/stories/10-16-2026-jasmina-holikov-0.jpg":$c,"src/photos/stories/10-17-2026-jeff-aquino-0.jpg":qc,"src/photos/stories/10-18-2026-yusuf-mohamoud-0.jpg":Qc,"src/photos/stories/10-18-2026-yusuf-mohamoud-1.jpg":Xc,"src/photos/stories/10-19-2026-roshan-ramani-0.jpg":Zc,"src/photos/stories/10-2-2026-dimas-aryo-0.jpg":em,"src/photos/stories/10-2-2026-dimas-aryo-1.jpg":tm,"src/photos/stories/10-20-2026-teagan-yuen-0.jpg":nm,"src/photos/stories/10-3-2026-abdulsaboor-shaikh-0.jpg":om,"src/photos/stories/10-4-2026-duy-nguyen-0.png":am,"src/photos/stories/10-5-2026-arthur-park-0.jpg":sm,"src/photos/stories/10-5-2026-arthur-park-1.jpg":im,"src/photos/stories/10-7-2026-got-reuploaded-tami-maeda-0.jpg":rm,"src/photos/stories/10-7-2026-got-reuploaded-tami-maeda-1.jpg":lm,"src/photos/stories/10-8-2026-jose-cruz-lopez-0.jpg":hm,"src/photos/stories/10-9-2026-tracy-huang-0.png":um,"src/photos/stories/7-10-2026-ellie-fleming-0.png":dm,"src/photos/stories/7-10-2026-ellie-fleming-1.jpg":cm,"src/photos/stories/7-11-2026-robert-anthony-0.png":mm,"src/photos/stories/7-11-2026-robert-anthony-1.png":gm,"src/photos/stories/7-12-2026-kush-santosh-0.jpg":pm,"src/photos/stories/7-12-2026-kush-santosh-1.jpg":fm,"src/photos/stories/7-13-2026-alex-zou-0.jpg":ym,"src/photos/stories/7-13-2026-alex-zou-1.jpg":wm,"src/photos/stories/7-14-2026-catherine-ling-0.png":vm,"src/photos/stories/7-14-2026-catherine-ling-1.jpg":km,"src/photos/stories/7-15-2026-michael-mcginn-0.png":bm,"src/photos/stories/7-15-2026-michael-mcginn-1.jpg":Im,"src/photos/stories/7-16-2026-pranav-rohit-0.jpg":jm,"src/photos/stories/7-16-2026-pranav-rohit-1.jpg":Sm,"src/photos/stories/7-16-2026-pranav-rohit-2.jpg":xm,"src/photos/stories/7-17-2026-thya-gutta-0.jpg":Cm,"src/photos/stories/7-17-2026-thya-gutta-1.jpg":Tm,"src/photos/stories/7-17-2026-thya-gutta-2.png":Am,"src/photos/stories/7-18-2026-andrew-mathis-0.png":zm,"src/photos/stories/7-18-2026-andrew-mathis-1.png":Em,"src/photos/stories/7-19-2026-katherine-perry-0.jpg":Nm,"src/photos/stories/7-19-2026-katherine-perry-1.jpg":Pm,"src/photos/stories/7-19-2026-katherine-perry-2.jpg":Mm,"src/photos/stories/7-19-2026-katherine-perry-3.png":Lm,"src/photos/stories/7-20-2026-vincent-nguyen-0.jpg":Hm,"src/photos/stories/7-20-2026-vincent-nguyen-1.jpg":Dm,"src/photos/stories/7-20-2026-vincent-nguyen-2.jpg":_m,"src/photos/stories/7-20-2026-vincent-nguyen-3.jpg":Rm,"src/photos/stories/7-21-2026-marqee-ivory-0.jpg":Fm,"src/photos/stories/7-21-2026-marqee-ivory-1.png":Um,"src/photos/stories/7-21-2026-marqee-ivory-2.jpg":Bm,"src/photos/stories/7-22-2026-ashlee-azizz-0.jpg":Om,"src/photos/stories/7-22-2026-ashlee-azizz-1.png":Vm,"src/photos/stories/7-23-2026-kennith-lee-0.jpg":Wm,"src/photos/stories/7-23-2026-kennith-lee-1.png":Gm,"src/photos/stories/7-23-2026-kennith-lee-2.png":Jm,"src/photos/stories/7-24-2026-bria-smith-0.png":Ym,"src/photos/stories/7-24-2026-bria-smith-1.jpg":Km,"src/photos/stories/7-25-2026-ben-aratame-0.jpg":$m,"src/photos/stories/7-25-2026-ben-aratame-1.jpg":qm,"src/photos/stories/7-26-2026-karishma-pandit-0.jpg":Qm,"src/photos/stories/7-26-2026-karishma-pandit-1.jpg":Xm,"src/photos/stories/7-27-2026-jeff-nguyen-0.jpg":Zm,"src/photos/stories/7-27-2026-jeff-nguyen-1.jpg":eg,"src/photos/stories/7-27-2026-jeff-nguyen-2.png":tg,"src/photos/stories/7-28-2026-dr-christina-serrano-0.jpg":ng,"src/photos/stories/7-28-2026-dr-christina-serrano-1.png":og,"src/photos/stories/7-29-2026-jacob-frausto-0.jpg":ag,"src/photos/stories/7-29-2026-jacob-frausto-1.jpg":sg,"src/photos/stories/7-30-2026-connie-ma-0.jpg":ig,"src/photos/stories/7-30-2026-connie-ma-1.png":rg,"src/photos/stories/7-31-2026-dr-irakli-shalikashvili-0.png":lg,"src/photos/stories/7-31-2026-dr-irakli-shalikashvili-1.png":hg,"src/photos/stories/7-4-2026-elizabeth-wang-0.jpg":ug,"src/photos/stories/7-5-2026-ammar-razzak-0.jpg":dg,"src/photos/stories/7-5-2026-ammar-razzak-1.jpg":cg,"src/photos/stories/7-5-2026-ammar-razzak-2.jpg":mg,"src/photos/stories/7-6-2026-omeir-honda-0.jpg":gg,"src/photos/stories/7-6-2026-omeir-honda-1.jpg":pg,"src/photos/stories/7-6-2026-omeir-honda-2.jpg":fg,"src/photos/stories/7-6-2026-omeir-honda-3.jpg":yg,"src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-0.jpg":wg,"src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-1.jpg":vg,"src/photos/stories/7-7-2026-ngozi-f-anachebe-pharmd-md-facog-2.jpg":kg,"src/photos/stories/7-8-2026-girish-menon-0.jpg":bg,"src/photos/stories/7-8-2026-girish-menon-1.jpg":Ig,"src/photos/stories/7-9-2026-will-huber-0.jpg":jg,"src/photos/stories/7-9-2026-will-huber-1.jpg":Sg,"src/photos/stories/7-9-2026-will-huber-2.jpg":xg,"src/photos/stories/8-1-2026-nithya-vembu-0.jpg":Cg,"src/photos/stories/8-1-2026-nithya-vembu-1.jpg":Tg,"src/photos/stories/8-1-2026-nithya-vembu-2.jpg":Ag,"src/photos/stories/8-1-2026-nithya-vembu-3.png":zg,"src/photos/stories/8-10-2026-anandhi-bharadwaj-0.jpg":Eg,"src/photos/stories/8-10-2026-anandhi-bharadwaj-1.jpg":Ng,"src/photos/stories/8-10-2026-anandhi-bharadwaj-2.jpg":Pg,"src/photos/stories/8-11-2026-naman-mehrotra-0.jpg":Mg,"src/photos/stories/8-11-2026-naman-mehrotra-1.jpg":Lg,"src/photos/stories/8-12-2026-matthew-huang-0.jpg":Hg,"src/photos/stories/8-12-2026-matthew-huang-1.jpg":Dg,"src/photos/stories/8-13-2026-matthew-foster-0.jpg":_g,"src/photos/stories/8-13-2026-matthew-foster-1.jpg":Rg,"src/photos/stories/8-13-2026-matthew-foster-2.png":Fg,"src/photos/stories/8-14-2026-akosua-opoku-0.png":Ug,"src/photos/stories/8-14-2026-akosua-opoku-1.png":Bg,"src/photos/stories/8-15-2026-sai-shankar-sadhu-0.jpg":Og,"src/photos/stories/8-15-2026-sai-shankar-sadhu-1.jpg":Vg,"src/photos/stories/8-15-2026-sai-shankar-sadhu-2.jpg":Wg,"src/photos/stories/8-16-2026-keira-smyth-gravina-0.png":Gg,"src/photos/stories/8-16-2026-keira-smyth-gravina-1.png":Jg,"src/photos/stories/8-17-2026-syruis-zhang-0.jpg":Yg,"src/photos/stories/8-17-2026-syruis-zhang-1.png":Kg,"src/photos/stories/8-18-2026-miffy-wang-0.png":$g,"src/photos/stories/8-18-2026-miffy-wang-1.jpg":qg,"src/photos/stories/8-19-2026-zawadi-pilipili-0.png":Qg,"src/photos/stories/8-19-2026-zawadi-pilipili-1.png":Xg,"src/photos/stories/8-2-2026-jay-yang-0.png":Zg,"src/photos/stories/8-2-2026-jay-yang-1.png":ep,"src/photos/stories/8-20-2026-patrick-pickren-0.jpg":tp,"src/photos/stories/8-20-2026-patrick-pickren-1.png":np,"src/photos/stories/8-20-2026-patrick-pickren-2.jpg":op,"src/photos/stories/8-20-2026-patrick-pickren-3.png":ap,"src/photos/stories/8-21-2026-solo-0.jpg":sp,"src/photos/stories/8-21-2026-solo-1.jpg":ip,"src/photos/stories/8-22-2026-subal-kumar-0.jpg":rp,"src/photos/stories/8-22-2026-subal-kumar-1.jpg":lp,"src/photos/stories/8-23-2026-anshi-purohit-0.jpg":hp,"src/photos/stories/8-23-2026-anshi-purohit-1.jpg":up,"src/photos/stories/8-23-2026-anshi-purohit-2.png":dp,"src/photos/stories/8-23-2026-anshi-purohit-3.jpg":cp,"src/photos/stories/8-23-2026-anshi-purohit-4.jpg":mp,"src/photos/stories/8-24-2026-macy-felton-0.png":gp,"src/photos/stories/8-25-2026-francine-tran-0.jpg":pp,"src/photos/stories/8-25-2026-francine-tran-1.jpg":fp,"src/photos/stories/8-26-2026-rohan-mistry-0.jpg":yp,"src/photos/stories/8-26-2026-rohan-mistry-1.jpg":wp,"src/photos/stories/8-27-2026-alyssa-lee-0.jpg":vp,"src/photos/stories/8-27-2026-alyssa-lee-1.jpg":kp,"src/photos/stories/8-28-2026-lalo-de-armas-0.jpg":bp,"src/photos/stories/8-28-2026-lalo-de-armas-1.jpg":Ip,"src/photos/stories/8-29-2026-kolton-rice-0.jpg":jp,"src/photos/stories/8-29-2026-kolton-rice-1.jpg":Sp,"src/photos/stories/8-3-2026-gergana-droumeva-0.jpg":xp,"src/photos/stories/8-3-2026-gergana-droumeva-1.jpg":Cp,"src/photos/stories/8-30-2026-vivian-lin-0.jpg":Tp,"src/photos/stories/8-30-2026-vivian-lin-1.jpg":Ap,"src/photos/stories/8-31-2026-subal-kumar-0.jpg":zp,"src/photos/stories/8-31-2026-subal-kumar-1.jpg":Ep,"src/photos/stories/8-4-2026-ava-martinez-0.png":Np,"src/photos/stories/8-4-2026-ava-martinez-1.png":Pp,"src/photos/stories/8-5-2026-dennis-chen-0.jpg":Mp,"src/photos/stories/8-5-2026-dennis-chen-1.png":Lp,"src/photos/stories/8-6-2026-eshani-ram-0.png":Hp,"src/photos/stories/8-6-2026-eshani-ram-1.png":Dp,"src/photos/stories/8-7-2026-gabriela-aguilar-castillo-0.png":_p,"src/photos/stories/8-7-2026-gabriela-aguilar-castillo-1.png":Rp,"src/photos/stories/8-8-2026-joaquin-santander-0.png":Fp,"src/photos/stories/8-8-2026-joaquin-santander-1.jpg":Up,"src/photos/stories/8-9-2026-amanda-schultz-0.png":Bp,"src/photos/stories/8-9-2026-amanda-schultz-1.png":Op,"src/photos/stories/9-1-2026-jaron-tan-0.jpg":Vp,"src/photos/stories/9-10-2026-rachel-paiz-0.jpg":Wp,"src/photos/stories/9-10-2026-rachel-paiz-1.jpg":Gp,"src/photos/stories/9-11-2026-elisha-kim-0.png":Jp,"src/photos/stories/9-12-2026-marko-ciganovic-0.jpg":Yp,"src/photos/stories/9-13-2026-jessica-jones-0.jpg":Kp,"src/photos/stories/9-13-2026-jessica-jones-1.jpg":$p,"src/photos/stories/9-14-2026-akshat-kumar-0.jpg":qp,"src/photos/stories/9-15-2026-ayanna-varma-0.jpg":Qp,"src/photos/stories/9-16-2026-shivansh-rastogi-0.jpg":Xp,"src/photos/stories/9-17-2026-jillian-loux-0.jpg":Zp,"src/photos/stories/9-17-2026-jillian-loux-1.jpg":ef,"src/photos/stories/9-17-2026-jillian-loux-2.jpg":tf,"src/photos/stories/9-18-2026-phil-ho-combatir-0.png":nf,"src/photos/stories/9-19-2026-kennard-liong-0.png":of,"src/photos/stories/9-2-2026-yash-alluri-0.jpg":af,"src/photos/stories/9-20-2026-joe-radest-0.jpg":sf,"src/photos/stories/9-20-2026-joe-radest-1.png":rf,"src/photos/stories/9-21-2026-joe-nedza-0.png":lf,"src/photos/stories/9-21-2026-joe-nedza-1.png":hf,"src/photos/stories/9-22-2026-chloe-hughes-0.jpg":uf,"src/photos/stories/9-22-2026-chloe-hughes-1.jpg":df,"src/photos/stories/9-23-2026-jibran-khalil-0.jpg":cf,"src/photos/stories/9-24-2026-eric-d-amico-0.jpg":mf,"src/photos/stories/9-24-2026-eric-d-amico-1.jpg":gf,"src/photos/stories/9-24-2026-eric-d-amico-2.jpg":pf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-0.png":ff,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-1.png":yf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-2.jpg":wf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-3.jpg":vf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-4.png":kf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-5.png":bf,"src/photos/stories/9-25-2026-ezekiel-wood-lemma-post-6.png":If,"src/photos/stories/9-26-2026-fredrick-okwudili-0.png":jf,"src/photos/stories/9-27-2026-manoj-d-0.jpg":Sf,"src/photos/stories/9-28-2026-jonathan-pertchik-0.png":xf,"src/photos/stories/9-29-2026-dominick-filipponi-0.png":Cf,"src/photos/stories/9-3-2026-alice-lan-0.jpg":Tf,"src/photos/stories/9-3-2026-alice-lan-1.jpg":Af,"src/photos/stories/9-3-2026-alice-lan-2.jpg":zf,"src/photos/stories/9-30-2026-jerry-zhu-0.jpg":Ef,"src/photos/stories/9-4-2026-anthony-wang-0.jpg":Nf,"src/photos/stories/9-4-2026-anthony-wang-1.jpg":Pf,"src/photos/stories/9-5-2026-dior-muankaew-0.jpg":Mf,"src/photos/stories/9-5-2026-dior-muankaew-1.jpg":Lf,"src/photos/stories/9-6-2026-evan-kong-0.jpg":Hf,"src/photos/stories/9-6-2026-evan-kong-1.jpg":Df,"src/photos/stories/9-7-2026-rui-maki-0.jpg":_f,"src/photos/stories/9-7-2026-rui-maki-1.jpg":Rf,"src/photos/stories/9-8-2026-zexi-li-0.jpg":Ff,"src/photos/stories/9-8-2026-zexi-li-1.png":Uf,"src/photos/stories/9-8-2026-zexi-li-2.png":Bf,"src/photos/stories/9-8-2026-zexi-li-3.png":Of,"src/photos/stories/9-9-2026-ashutos-jain-0.jpg":Vf,"src/photos/stories/9-9-2026-ashutos-jain-1.jpg":Wf,"src/photos/stories/10-21-2026-lukas-gross-0.jpg":Gf},Yf="/assets/headshot-xqe0RWgA.webp",Kf=[{name:"JSV Launchpad",role:"Venture scout - sourcing founders and learning how early teams actually get built.",dates:"sep 2026 - present"},{name:"Todd AgriScience",role:"Go-to-market intern - interviews with farmers and founders across the country.",dates:"aug 2026 - present"},{name:"Intern Insider",role:"Go-to-market fellow.",dates:"sep 2026 - present"},{name:"TextPip",role:"Ambassador.",dates:"sep 2026 - present"},{name:"Anthropic Claude Builder Club",role:"Campus ambassador at UGA.",dates:"oct 2026 - present"},{name:"UGA SMIS",role:"Senior VP of Finance - budgets and funding documentation for the Society for Management Information Systems.",dates:"2026 - 27"},{name:"Terry Student Consulting",role:"Associate consultant - 1 of 40 selected from 225 applicants.",dates:"apr 2026 - present"},{name:"Institute for Youth in Policy",role:"Fellow & education intern - Outstanding Capstone Writer for a policy brief on institutional barriers for bereaved college students.",dates:"fellowship"},{name:"NASA L'SPACE",role:"Principal investigator & program analyst - led a 10-person team on an orbital debris mitigation mission concept.",dates:"nasa-funded"},{name:"AAAIM",role:"Investment management extern.",dates:"externship"}],$f=[{name:"Lotus Society",role:"Co-founder & co-president - mentorship community for Asian American students at UGA.",dates:"may 2026 - present"},{name:"Alpha Sigma Rho Sorority, Inc.",role:"Philanthropy & social chair - raised $1,418 for the National Ovarian Cancer Coalition and OneSky.",dates:"greek life"},{name:"Magellan Program",role:"Selected participant - chosen from 500+ applicants.",dates:"fellowship"},{name:"Emerging Greek Leaders",role:"Sole Multicultural Greek Council representative in the cohort.",dates:"leadership"},{name:"Reed & Payne Community Council",role:"Coordinator of communications.",dates:"community"},{name:"UGA",role:"Campus tour guide for visiting families, and UGArden community service volunteer.",dates:"service"}],qf=[{name:"EY SAP S/4HANA Case Competition",dates:"2nd place"},{name:"Goldman Sachs Case Competition",dates:"top 5"},{name:"Global Health Union Case Competition",dates:"top 2"},{name:"SHRM Case Competition",dates:"top 4"},{name:"UGA SMIS & WIC Consulting Case Competition",dates:"4th place"},{name:"UGA Claude AI Hackathon",dates:"3rd place"},{name:"LightReel AI Fellowship",dates:"1 of 10 from 300+"},{name:"Point Foundation Persistence Scholarship",dates:"2x recipient"},{name:"Public Health Pathway Student of the Year",dates:"2025"},{name:"ASTA National Orchestra Festival",dates:"1st place · 2025"}],Qf=["january","february","march","april","may","june","july","august","september","october","november","december"];function Xf(){const[e,t]=Be.useState(""),n=e.trim().toLowerCase(),o=n?Ja.filter(s=>(s.name+" "+s.body).toLowerCase().includes(n)):Ja,a=[];return[...o].reverse().forEach(s=>{const[i]=s.date.split("/"),r=Qf[parseInt(i,10)-1]+" 2026",l=a[a.length-1];l&&l.label===r?l.items.push(s):a.push({label:r,items:[s]})}),m.jsxs("div",{className:"ew-page",children:[m.jsxs("div",{className:"ew-topbar",children:[m.jsx(iu,{to:"/",className:"ew-brand ew-back",children:"← ellie wang"}),m.jsx("span",{className:"ew-meta",children:"you just have to ask · the archive"})]}),m.jsxs("section",{className:"ew-hero",children:[m.jsx("div",{className:"ew-meta",children:"(01) · every story, by date"}),m.jsxs("h1",{children:[Ja.length," stories"]}),m.jsx("p",{className:"ew-sub",children:"Stories from You Just Have to Ask, organized by date."}),m.jsx("input",{className:"ew-filter",type:"search",placeholder:"search a name or a detail",value:e,onChange:s=>t(s.target.value),"aria-label":"Search stories"})]}),a.map(s=>m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:s.label}),m.jsxs("span",{className:"ew-meta",children:[s.items.length," ",s.items.length===1?"story":"stories"]})]}),s.items.map(i=>m.jsxs("details",{className:"ew-story",children:[m.jsxs("summary",{children:[m.jsx("span",{className:"ew-sdate",children:i.date.replace("/2026","")}),m.jsx("span",{className:"ew-sname",children:i.name})]}),m.jsxs("div",{className:"ew-sbody",children:[(i.images||[]).map((r,l)=>m.jsx("img",{className:"ew-simg",src:Jf[r],alt:`${i.name} - from the original post`,loading:"lazy"},l)),i.body.split(/\n{2,}/).map((r,l)=>m.jsx("p",{children:r},l))]})]},i.date+i.name))]},s.label)),o.length===0&&m.jsx("p",{className:"ew-body",style:{padding:"20px 0"},children:"no stories match that search."}),m.jsx("div",{className:"ew-footer",children:m.jsx("span",{className:"ew-meta",children:"© 2026 elizabeth “ellie” wang"})})]})}function Zf(){return m.jsxs("div",{className:"ew-page",children:[m.jsxs("div",{className:"ew-topbar",children:[m.jsx("span",{className:"ew-brand",children:"ellie wang"}),m.jsxs("span",{className:"ew-meta",children:[m.jsx(iu,{to:"/stories",className:"ew-toplink",children:"stories archive"})," · vol. 02 · 2026"]})]}),m.jsx("section",{className:"ew-hero",children:m.jsxs("div",{className:"ew-hero-grid",children:[m.jsxs("div",{children:[m.jsx("div",{className:"ew-meta",children:"(01) · uga ’29 · terry college · mis + sociology + entrepreneurship"}),m.jsx("h1",{children:"Elizabeth “Ellie” Wang"}),m.jsx("p",{className:"ew-sub",children:"Building community, one genuine conversation at a time - through mentorship, entrepreneurship, and the technology that connects us."}),m.jsx("span",{className:"ew-meta",children:"athens, ga · johns creek, ga"})]}),m.jsx("img",{className:"ew-headshot",src:Yf,alt:"Ellie Wang professional headshot"})]})}),m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:"about"}),m.jsx("span",{className:"ew-meta",children:"(02)"})]}),m.jsxs("div",{className:"ew-body",children:[m.jsx("p",{children:"I'm a student at the University of Georgia studying Management Information Systems in the Terry College of Business, with a Sociology minor and an Entrepreneurship Certificate."}),m.jsx("p",{children:"Born and raised in Georgia, the daughter of immigrants - my mother is from Cambodia and my father is from Taiwan. I've studied at Oxford University (Biomedical Ethics and Computing Ethics & Society) and traveled Italy and Germany for a Food Industries Maymester."}),m.jsx("p",{children:"I've played piano since I was 4 and violin since 4th grade, and I started making content at 15 by posting piano videos. Music taught me how to work hard; people taught me why it matters."})]}),m.jsxs("div",{className:"ew-values",children:[m.jsx("span",{children:"authenticity"}),m.jsx("span",{children:"curiosity"}),m.jsx("span",{children:"gratitude"}),m.jsx("span",{children:"community"})]})]}),m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:"building"}),m.jsx("span",{className:"ew-meta",children:"(03)"})]}),m.jsx("div",{className:"ew-venture",children:m.jsxs("div",{children:[m.jsx("h3",{children:"Pitcher"}),m.jsx("p",{children:"Co-founder (June 2026). A professional discovery network for early-stage startups - human-curated, not an algorithm. My cofounder and I connect student founders with the right people through real connections. First pilot open to Georgia founders, live now."}),m.jsx(Gr,{href:"https://trypitcher.co",children:"trypitcher.co - pitch to anyone"})]})}),m.jsxs("div",{className:"ew-row",children:[m.jsx("span",{className:"ew-name",children:"Lotus Society"}),m.jsx("span",{className:"ew-role",children:"Co-founder & co-president - mentorship organization for Asian American students at UGA."}),m.jsx("span",{className:"ew-dates",children:"since may 2026"})]})]}),m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:"you just have to ask"}),m.jsx("span",{className:"ew-meta",children:"(04)"})]}),m.jsxs("div",{className:"ew-body",children:[m.jsx("p",{children:"My daily storytelling series on LinkedIn - one story every day since July 4, 2026, posted at 12:12 PM ET. I talk with young founders, advocates, students, and anyone with a passion for helping the world."}),m.jsx("p",{children:"I take handwritten notes during conversations, and guests review their stories before publication. It started because I wanted to give my mentors their flowers. It kept going because everyone has a story worth telling."})]}),m.jsxs("div",{className:"ew-stats",children:[m.jsxs("div",{className:"ew-stat",children:[m.jsx("b",{children:"100+"}),m.jsx("span",{children:"stories told"})]}),m.jsxs("div",{className:"ew-stat",children:[m.jsx("b",{children:"9+"}),m.jsx("span",{children:"countries"})]}),m.jsxs("div",{className:"ew-stat",children:[m.jsx("b",{children:"319,719"}),m.jsx("span",{children:"impressions"})]})]}),m.jsx("div",{className:"ew-quote",children:"“A bad question is one that's never asked.”"}),m.jsx(Gr,{href:"https://www.linkedin.com/in/ellielwang",children:"read the series on linkedin - @ellielwang"})]}),m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:"experience"}),m.jsx("span",{className:"ew-meta",children:"(05)"})]}),Kf.map(e=>m.jsxs("div",{className:"ew-row",children:[m.jsx("span",{className:"ew-name",children:e.name}),m.jsx("span",{className:"ew-role",children:e.role}),m.jsx("span",{className:"ew-dates",children:e.dates})]},e.name))]}),m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:"leadership"}),m.jsx("span",{className:"ew-meta",children:"(06)"})]}),$f.map(e=>m.jsxs("div",{className:"ew-row",children:[m.jsx("span",{className:"ew-name",children:e.name}),m.jsx("span",{className:"ew-role",children:e.role}),m.jsx("span",{className:"ew-dates",children:e.dates})]},e.name))]}),m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:"honors"}),m.jsx("span",{className:"ew-meta",children:"(07)"})]}),qf.map(e=>m.jsxs("div",{className:"ew-row",children:[m.jsx("span",{className:"ew-name",children:e.name}),m.jsx("span",{className:"ew-dates",children:e.dates})]},e.name))]}),m.jsxs("section",{className:"ew-section",children:[m.jsxs("div",{className:"ew-section-head",children:[m.jsx("h2",{children:"say hi"}),m.jsx("span",{className:"ew-meta",children:"(08)"})]}),m.jsx("div",{className:"ew-body",children:m.jsx("p",{children:"Mentors, founders, collaborators - I'm genuinely most reachable through a real conversation."})}),m.jsxs("div",{className:"ew-links",children:[m.jsxs("a",{href:"https://www.linkedin.com/in/ellielwang",target:"_blank",rel:"noreferrer",children:[m.jsx("span",{className:"ew-lname",children:"LinkedIn"}),m.jsx("span",{className:"ew-lval",children:"linkedin.com/in/ellielwang"})]}),m.jsxs("a",{href:"https://linktr.ee/ellielwang",target:"_blank",rel:"noreferrer",children:[m.jsx("span",{className:"ew-lname",children:"Linktree"}),m.jsx("span",{className:"ew-lval",children:"linktr.ee/ellielwang"})]}),m.jsxs("a",{href:"https://x.com/ellielwang",target:"_blank",rel:"noreferrer",children:[m.jsx("span",{className:"ew-lname",children:"X"}),m.jsx("span",{className:"ew-lval",children:"x.com/ellielwang"})]}),m.jsxs("a",{href:"https://calendly.com/elizabethlynnwang/30min",target:"_blank",rel:"noreferrer",children:[m.jsx("span",{className:"ew-lname",children:"Book a chat"}),m.jsx("span",{className:"ew-lval",children:"calendly.com/elizabethlynnwang/30min"})]}),m.jsxs("a",{href:"mailto:ellielwang1@gmail.com",children:[m.jsx("span",{className:"ew-lname",children:"Email"}),m.jsx("span",{className:"ew-lval",children:"ellielwang1@gmail.com"})]})]})]}),m.jsx("div",{className:"ew-footer",children:m.jsx("span",{className:"ew-meta",children:"© 2026 elizabeth “ellie” wang"})})]})}function ey(){return m.jsx(Rc,{children:m.jsxs(_c,{children:[m.jsx(Wr,{path:"/",element:m.jsx(Zf,{})}),m.jsx(Wr,{path:"/stories",element:m.jsx(Xf,{})})]})})}au(document.getElementById("root")).render(m.jsx(Dc,{children:m.jsx(ey,{})}));
