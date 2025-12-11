(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function QM(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var I1={exports:{}},yd={},U1={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=Symbol.for("react.element"),JM=Symbol.for("react.portal"),e2=Symbol.for("react.fragment"),t2=Symbol.for("react.strict_mode"),n2=Symbol.for("react.profiler"),i2=Symbol.for("react.provider"),r2=Symbol.for("react.context"),s2=Symbol.for("react.forward_ref"),o2=Symbol.for("react.suspense"),a2=Symbol.for("react.memo"),l2=Symbol.for("react.lazy"),kg=Symbol.iterator;function u2(n){return n===null||typeof n!="object"?null:(n=kg&&n[kg]||n["@@iterator"],typeof n=="function"?n:null)}var F1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O1=Object.assign,k1={};function al(n,e,t){this.props=n,this.context=e,this.refs=k1,this.updater=t||F1}al.prototype.isReactComponent={};al.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};al.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function z1(){}z1.prototype=al.prototype;function l0(n,e,t){this.props=n,this.context=e,this.refs=k1,this.updater=t||F1}var u0=l0.prototype=new z1;u0.constructor=l0;O1(u0,al.prototype);u0.isPureReactComponent=!0;var zg=Array.isArray,B1=Object.prototype.hasOwnProperty,c0={current:null},V1={key:!0,ref:!0,__self:!0,__source:!0};function H1(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B1.call(e,i)&&!V1.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bu,type:n,key:s,ref:o,props:r,_owner:c0.current}}function c2(n,e){return{$$typeof:Bu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function f0(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bu}function f2(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Bg=/\/+/g;function $d(n,e){return typeof n=="object"&&n!==null&&n.key!=null?f2(""+n.key):e.toString(36)}function ef(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bu:case JM:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+$d(o,0):i,zg(r)?(t="",n!=null&&(t=n.replace(Bg,"$&/")+"/"),ef(r,e,t,"",function(u){return u})):r!=null&&(f0(r)&&(r=c2(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Bg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",zg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+$d(s,a);o+=ef(s,e,t,l,r)}else if(l=u2(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+$d(s,a++),o+=ef(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qu(n,e,t){if(n==null)return n;var i=[],r=0;return ef(n,i,"","",function(s){return e.call(t,s,r++)}),i}function d2(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xn={current:null},tf={transition:null},h2={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:tf,ReactCurrentOwner:c0};function G1(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Qu,forEach:function(n,e,t){Qu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Qu(n,function(){e++}),e},toArray:function(n){return Qu(n,function(e){return e})||[]},only:function(n){if(!f0(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ot.Component=al;ot.Fragment=e2;ot.Profiler=n2;ot.PureComponent=l0;ot.StrictMode=t2;ot.Suspense=o2;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h2;ot.act=G1;ot.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=O1({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=c0.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)B1.call(e,l)&&!V1.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Bu,type:n.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(n){return n={$$typeof:r2,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:i2,_context:n},n.Consumer=n};ot.createElement=H1;ot.createFactory=function(n){var e=H1.bind(null,n);return e.type=n,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(n){return{$$typeof:s2,render:n}};ot.isValidElement=f0;ot.lazy=function(n){return{$$typeof:l2,_payload:{_status:-1,_result:n},_init:d2}};ot.memo=function(n,e){return{$$typeof:a2,type:n,compare:e===void 0?null:e}};ot.startTransition=function(n){var e=tf.transition;tf.transition={};try{n()}finally{tf.transition=e}};ot.unstable_act=G1;ot.useCallback=function(n,e){return Xn.current.useCallback(n,e)};ot.useContext=function(n){return Xn.current.useContext(n)};ot.useDebugValue=function(){};ot.useDeferredValue=function(n){return Xn.current.useDeferredValue(n)};ot.useEffect=function(n,e){return Xn.current.useEffect(n,e)};ot.useId=function(){return Xn.current.useId()};ot.useImperativeHandle=function(n,e,t){return Xn.current.useImperativeHandle(n,e,t)};ot.useInsertionEffect=function(n,e){return Xn.current.useInsertionEffect(n,e)};ot.useLayoutEffect=function(n,e){return Xn.current.useLayoutEffect(n,e)};ot.useMemo=function(n,e){return Xn.current.useMemo(n,e)};ot.useReducer=function(n,e,t){return Xn.current.useReducer(n,e,t)};ot.useRef=function(n){return Xn.current.useRef(n)};ot.useState=function(n){return Xn.current.useState(n)};ot.useSyncExternalStore=function(n,e,t){return Xn.current.useSyncExternalStore(n,e,t)};ot.useTransition=function(){return Xn.current.useTransition()};ot.version="18.3.1";U1.exports=ot;var Ze=U1.exports;const vo=QM(Ze);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p2=Ze,m2=Symbol.for("react.element"),g2=Symbol.for("react.fragment"),_2=Object.prototype.hasOwnProperty,v2=p2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x2={key:!0,ref:!0,__self:!0,__source:!0};function W1(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)_2.call(e,i)&&!x2.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:m2,type:n,key:s,ref:o,props:r,_owner:v2.current}}yd.Fragment=g2;yd.jsx=W1;yd.jsxs=W1;I1.exports=yd;var U=I1.exports,X1={exports:{}},bi={},j1={exports:{}},Y1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(I,Q){var R=I.length;I.push(Q);e:for(;0<R;){var oe=R-1>>>1,Se=I[oe];if(0<r(Se,Q))I[oe]=Q,I[R]=Se,R=oe;else break e}}function t(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var Q=I[0],R=I.pop();if(R!==Q){I[0]=R;e:for(var oe=0,Se=I.length,Ge=Se>>>1;oe<Ge;){var q=2*(oe+1)-1,se=I[q],he=q+1,fe=I[he];if(0>r(se,R))he<Se&&0>r(fe,se)?(I[oe]=fe,I[he]=R,oe=he):(I[oe]=se,I[q]=R,oe=q);else if(he<Se&&0>r(fe,R))I[oe]=fe,I[he]=R,oe=he;else break e}}return Q}function r(I,Q){var R=I.sortIndex-Q.sortIndex;return R!==0?R:I.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(I){for(var Q=t(u);Q!==null;){if(Q.callback===null)i(u);else if(Q.startTime<=I)i(u),Q.sortIndex=Q.expirationTime,e(l,Q);else break;Q=t(u)}}function y(I){if(g=!1,x(I),!_)if(t(l)!==null)_=!0,H(C);else{var Q=t(u);Q!==null&&Y(y,Q.startTime-I)}}function C(I,Q){_=!1,g&&(g=!1,h(b),b=-1),p=!0;var R=f;try{for(x(Q),d=t(l);d!==null&&(!(d.expirationTime>Q)||I&&!P());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,f=d.priorityLevel;var Se=oe(d.expirationTime<=Q);Q=n.unstable_now(),typeof Se=="function"?d.callback=Se:d===t(l)&&i(l),x(Q)}else i(l);d=t(l)}if(d!==null)var Ge=!0;else{var q=t(u);q!==null&&Y(y,q.startTime-Q),Ge=!1}return Ge}finally{d=null,f=R,p=!1}}var w=!1,E=null,b=-1,M=5,S=-1;function P(){return!(n.unstable_now()-S<M)}function F(){if(E!==null){var I=n.unstable_now();S=I;var Q=!0;try{Q=E(!0,I)}finally{Q?V():(w=!1,E=null)}}else w=!1}var V;if(typeof v=="function")V=function(){v(F)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Z=G.port2;G.port1.onmessage=F,V=function(){Z.postMessage(null)}}else V=function(){m(F,0)};function H(I){E=I,w||(w=!0,V())}function Y(I,Q){b=m(function(){I(n.unstable_now())},Q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(I){I.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,H(C))},n.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<I?Math.floor(1e3/I):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(I){switch(f){case 1:case 2:case 3:var Q=3;break;default:Q=f}var R=f;f=Q;try{return I()}finally{f=R}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var R=f;f=I;try{return Q()}finally{f=R}},n.unstable_scheduleCallback=function(I,Q,R){var oe=n.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?oe+R:oe):R=oe,I){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=R+Se,I={id:c++,callback:Q,priorityLevel:I,startTime:R,expirationTime:Se,sortIndex:-1},R>oe?(I.sortIndex=R,e(u,I),t(l)===null&&I===t(u)&&(g?(h(b),b=-1):g=!0,Y(y,R-oe))):(I.sortIndex=Se,e(l,I),_||p||(_=!0,H(C))),I},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(I){var Q=f;return function(){var R=f;f=Q;try{return I.apply(this,arguments)}finally{f=R}}}})(Y1);j1.exports=Y1;var y2=j1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S2=Ze,Ti=y2;function ce(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $1=new Set,hu={};function ko(n,e){Ha(n,e),Ha(n+"Capture",e)}function Ha(n,e){for(hu[n]=e,n=0;n<e.length;n++)$1.add(e[n])}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cp=Object.prototype.hasOwnProperty,M2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Vg={},Hg={};function E2(n){return cp.call(Hg,n)?!0:cp.call(Vg,n)?!1:M2.test(n)?Hg[n]=!0:(Vg[n]=!0,!1)}function w2(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T2(n,e,t,i){if(e===null||typeof e>"u"||w2(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Sn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Sn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Sn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Sn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Sn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Sn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Sn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Sn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Sn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var d0=/[\-:]([a-z])/g;function h0(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(d0,h0);Sn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(d0,h0);Sn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(d0,h0);Sn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Sn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});Sn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Sn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function p0(n,e,t,i){var r=Sn.hasOwnProperty(e)?Sn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(T2(e,t,r,i)&&(t=null),i||r===null?E2(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Qr=S2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),fa=Symbol.for("react.portal"),da=Symbol.for("react.fragment"),m0=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),q1=Symbol.for("react.provider"),K1=Symbol.for("react.context"),g0=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),hp=Symbol.for("react.suspense_list"),_0=Symbol.for("react.memo"),cs=Symbol.for("react.lazy"),Z1=Symbol.for("react.offscreen"),Gg=Symbol.iterator;function hl(n){return n===null||typeof n!="object"?null:(n=Gg&&n[Gg]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,qd;function Dl(n){if(qd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);qd=e&&e[1]||""}return`
`+qd+n}var Kd=!1;function Zd(n,e){if(!n||Kd)return"";Kd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Dl(n):""}function A2(n){switch(n.tag){case 5:return Dl(n.type);case 16:return Dl("Lazy");case 13:return Dl("Suspense");case 19:return Dl("SuspenseList");case 0:case 2:case 15:return n=Zd(n.type,!1),n;case 11:return n=Zd(n.type.render,!1),n;case 1:return n=Zd(n.type,!0),n;default:return""}}function pp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case da:return"Fragment";case fa:return"Portal";case fp:return"Profiler";case m0:return"StrictMode";case dp:return"Suspense";case hp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case K1:return(n.displayName||"Context")+".Consumer";case q1:return(n._context.displayName||"Context")+".Provider";case g0:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case _0:return e=n.displayName||null,e!==null?e:pp(n.type)||"Memo";case cs:e=n._payload,n=n._init;try{return pp(n(e))}catch{}}return null}function C2(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pp(e);case 8:return e===m0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Us(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Q1(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function b2(n){var e=Q1(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ec(n){n._valueTracker||(n._valueTracker=b2(n))}function J1(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Q1(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function bf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mp(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Wg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Us(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ex(n,e){e=e.checked,e!=null&&p0(n,"checked",e,!1)}function gp(n,e){ex(n,e);var t=Us(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?_p(n,e.type,t):e.hasOwnProperty("defaultValue")&&_p(n,e.type,Us(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Xg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function _p(n,e,t){(e!=="number"||bf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Ll=Array.isArray;function Ca(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Us(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function vp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function jg(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ce(92));if(Ll(t)){if(1<t.length)throw Error(ce(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Us(t)}}function tx(n,e){var t=Us(e.value),i=Us(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Yg(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function nx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?nx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tc,ix=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function pu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Gl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R2=["Webkit","ms","Moz","O"];Object.keys(Gl).forEach(function(n){R2.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Gl[e]=Gl[n]})});function rx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Gl.hasOwnProperty(n)&&Gl[n]?(""+e).trim():e+"px"}function sx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=rx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var P2=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yp(n,e){if(e){if(P2[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Sp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mp=null;function v0(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ep=null,ba=null,Ra=null;function $g(n){if(n=Gu(n)){if(typeof Ep!="function")throw Error(ce(280));var e=n.stateNode;e&&(e=Td(e),Ep(n.stateNode,n.type,e))}}function ox(n){ba?Ra?Ra.push(n):Ra=[n]:ba=n}function ax(){if(ba){var n=ba,e=Ra;if(Ra=ba=null,$g(n),e)for(n=0;n<e.length;n++)$g(e[n])}}function lx(n,e){return n(e)}function ux(){}var Qd=!1;function cx(n,e,t){if(Qd)return n(e,t);Qd=!0;try{return lx(n,e,t)}finally{Qd=!1,(ba!==null||Ra!==null)&&(ux(),ax())}}function mu(n,e){var t=n.stateNode;if(t===null)return null;var i=Td(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ce(231,e,typeof t));return t}var wp=!1;if(Gr)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){wp=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{wp=!1}function D2(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Wl=!1,Rf=null,Pf=!1,Tp=null,L2={onError:function(n){Wl=!0,Rf=n}};function N2(n,e,t,i,r,s,o,a,l){Wl=!1,Rf=null,D2.apply(L2,arguments)}function I2(n,e,t,i,r,s,o,a,l){if(N2.apply(this,arguments),Wl){if(Wl){var u=Rf;Wl=!1,Rf=null}else throw Error(ce(198));Pf||(Pf=!0,Tp=u)}}function zo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function fx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function qg(n){if(zo(n)!==n)throw Error(ce(188))}function U2(n){var e=n.alternate;if(!e){if(e=zo(n),e===null)throw Error(ce(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return qg(r),n;if(s===i)return qg(r),e;s=s.sibling}throw Error(ce(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(t.alternate!==i)throw Error(ce(190))}if(t.tag!==3)throw Error(ce(188));return t.stateNode.current===t?n:e}function dx(n){return n=U2(n),n!==null?hx(n):null}function hx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=hx(n);if(e!==null)return e;n=n.sibling}return null}var px=Ti.unstable_scheduleCallback,Kg=Ti.unstable_cancelCallback,F2=Ti.unstable_shouldYield,O2=Ti.unstable_requestPaint,jt=Ti.unstable_now,k2=Ti.unstable_getCurrentPriorityLevel,x0=Ti.unstable_ImmediatePriority,mx=Ti.unstable_UserBlockingPriority,Df=Ti.unstable_NormalPriority,z2=Ti.unstable_LowPriority,gx=Ti.unstable_IdlePriority,Sd=null,yr=null;function B2(n){if(yr&&typeof yr.onCommitFiberRoot=="function")try{yr.onCommitFiberRoot(Sd,n,void 0,(n.current.flags&128)===128)}catch{}}var rr=Math.clz32?Math.clz32:G2,V2=Math.log,H2=Math.LN2;function G2(n){return n>>>=0,n===0?32:31-(V2(n)/H2|0)|0}var nc=64,ic=4194304;function Nl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Nl(a):(s&=o,s!==0&&(i=Nl(s)))}else o=t&~r,o!==0?i=Nl(o):s!==0&&(i=Nl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-rr(e),r=1<<t,i|=n[t],e&=~r;return i}function W2(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function X2(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-rr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=W2(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ap(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _x(){var n=nc;return nc<<=1,!(nc&4194240)&&(nc=64),n}function Jd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Vu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-rr(e),n[e]=t}function j2(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-rr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function y0(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-rr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var yt=0;function vx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var xx,S0,yx,Sx,Mx,Cp=!1,rc=[],Ms=null,Es=null,ws=null,gu=new Map,_u=new Map,ds=[],Y2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zg(n,e){switch(n){case"focusin":case"focusout":Ms=null;break;case"dragenter":case"dragleave":Es=null;break;case"mouseover":case"mouseout":ws=null;break;case"pointerover":case"pointerout":gu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_u.delete(e.pointerId)}}function ml(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Gu(e),e!==null&&S0(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function $2(n,e,t,i,r){switch(e){case"focusin":return Ms=ml(Ms,n,e,t,i,r),!0;case"dragenter":return Es=ml(Es,n,e,t,i,r),!0;case"mouseover":return ws=ml(ws,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return gu.set(s,ml(gu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_u.set(s,ml(_u.get(s)||null,n,e,t,i,r)),!0}return!1}function Ex(n){var e=fo(n.target);if(e!==null){var t=zo(e);if(t!==null){if(e=t.tag,e===13){if(e=fx(t),e!==null){n.blockedOn=e,Mx(n.priority,function(){yx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function nf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=bp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Mp=i,t.target.dispatchEvent(i),Mp=null}else return e=Gu(t),e!==null&&S0(e),n.blockedOn=t,!1;e.shift()}return!0}function Qg(n,e,t){nf(n)&&t.delete(e)}function q2(){Cp=!1,Ms!==null&&nf(Ms)&&(Ms=null),Es!==null&&nf(Es)&&(Es=null),ws!==null&&nf(ws)&&(ws=null),gu.forEach(Qg),_u.forEach(Qg)}function gl(n,e){n.blockedOn===e&&(n.blockedOn=null,Cp||(Cp=!0,Ti.unstable_scheduleCallback(Ti.unstable_NormalPriority,q2)))}function vu(n){function e(r){return gl(r,n)}if(0<rc.length){gl(rc[0],n);for(var t=1;t<rc.length;t++){var i=rc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Ms!==null&&gl(Ms,n),Es!==null&&gl(Es,n),ws!==null&&gl(ws,n),gu.forEach(e),_u.forEach(e),t=0;t<ds.length;t++)i=ds[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ds.length&&(t=ds[0],t.blockedOn===null);)Ex(t),t.blockedOn===null&&ds.shift()}var Pa=Qr.ReactCurrentBatchConfig,Nf=!0;function K2(n,e,t,i){var r=yt,s=Pa.transition;Pa.transition=null;try{yt=1,M0(n,e,t,i)}finally{yt=r,Pa.transition=s}}function Z2(n,e,t,i){var r=yt,s=Pa.transition;Pa.transition=null;try{yt=4,M0(n,e,t,i)}finally{yt=r,Pa.transition=s}}function M0(n,e,t,i){if(Nf){var r=bp(n,e,t,i);if(r===null)uh(n,e,i,If,t),Zg(n,i);else if($2(r,n,e,t,i))i.stopPropagation();else if(Zg(n,i),e&4&&-1<Y2.indexOf(n)){for(;r!==null;){var s=Gu(r);if(s!==null&&xx(s),s=bp(n,e,t,i),s===null&&uh(n,e,i,If,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else uh(n,e,i,null,t)}}var If=null;function bp(n,e,t,i){if(If=null,n=v0(i),n=fo(n),n!==null)if(e=zo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=fx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return If=n,null}function wx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(k2()){case x0:return 1;case mx:return 4;case Df:case z2:return 16;case gx:return 536870912;default:return 16}default:return 16}}var ms=null,E0=null,rf=null;function Tx(){if(rf)return rf;var n,e=E0,t=e.length,i,r="value"in ms?ms.value:ms.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return rf=r.slice(n,1<i?1-i:void 0)}function sf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function sc(){return!0}function Jg(){return!1}function Ri(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:Jg,this.isPropagationStopped=Jg,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},w0=Ri(ll),Hu=Ht({},ll,{view:0,detail:0}),Q2=Ri(Hu),eh,th,_l,Md=Ht({},Hu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:T0,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==_l&&(_l&&n.type==="mousemove"?(eh=n.screenX-_l.screenX,th=n.screenY-_l.screenY):th=eh=0,_l=n),eh)},movementY:function(n){return"movementY"in n?n.movementY:th}}),e_=Ri(Md),J2=Ht({},Md,{dataTransfer:0}),eE=Ri(J2),tE=Ht({},Hu,{relatedTarget:0}),nh=Ri(tE),nE=Ht({},ll,{animationName:0,elapsedTime:0,pseudoElement:0}),iE=Ri(nE),rE=Ht({},ll,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),sE=Ri(rE),oE=Ht({},ll,{data:0}),t_=Ri(oE),aE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=uE[n])?!!e[n]:!1}function T0(){return cE}var fE=Ht({},Hu,{key:function(n){if(n.key){var e=aE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=sf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?lE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:T0,charCode:function(n){return n.type==="keypress"?sf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?sf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),dE=Ri(fE),hE=Ht({},Md,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n_=Ri(hE),pE=Ht({},Hu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:T0}),mE=Ri(pE),gE=Ht({},ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),_E=Ri(gE),vE=Ht({},Md,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),xE=Ri(vE),yE=[9,13,27,32],A0=Gr&&"CompositionEvent"in window,Xl=null;Gr&&"documentMode"in document&&(Xl=document.documentMode);var SE=Gr&&"TextEvent"in window&&!Xl,Ax=Gr&&(!A0||Xl&&8<Xl&&11>=Xl),i_=" ",r_=!1;function Cx(n,e){switch(n){case"keyup":return yE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ha=!1;function ME(n,e){switch(n){case"compositionend":return bx(e);case"keypress":return e.which!==32?null:(r_=!0,i_);case"textInput":return n=e.data,n===i_&&r_?null:n;default:return null}}function EE(n,e){if(ha)return n==="compositionend"||!A0&&Cx(n,e)?(n=Tx(),rf=E0=ms=null,ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ax&&e.locale!=="ko"?null:e.data;default:return null}}var wE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!wE[n.type]:e==="textarea"}function Rx(n,e,t,i){ox(i),e=Uf(e,"onChange"),0<e.length&&(t=new w0("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jl=null,xu=null;function TE(n){Bx(n,0)}function Ed(n){var e=ga(n);if(J1(e))return n}function AE(n,e){if(n==="change")return e}var Px=!1;if(Gr){var ih;if(Gr){var rh="oninput"in document;if(!rh){var o_=document.createElement("div");o_.setAttribute("oninput","return;"),rh=typeof o_.oninput=="function"}ih=rh}else ih=!1;Px=ih&&(!document.documentMode||9<document.documentMode)}function a_(){jl&&(jl.detachEvent("onpropertychange",Dx),xu=jl=null)}function Dx(n){if(n.propertyName==="value"&&Ed(xu)){var e=[];Rx(e,xu,n,v0(n)),cx(TE,e)}}function CE(n,e,t){n==="focusin"?(a_(),jl=e,xu=t,jl.attachEvent("onpropertychange",Dx)):n==="focusout"&&a_()}function bE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ed(xu)}function RE(n,e){if(n==="click")return Ed(e)}function PE(n,e){if(n==="input"||n==="change")return Ed(e)}function DE(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ar=typeof Object.is=="function"?Object.is:DE;function yu(n,e){if(ar(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!cp.call(e,r)||!ar(n[r],e[r]))return!1}return!0}function l_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function u_(n,e){var t=l_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=l_(t)}}function Lx(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Lx(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Nx(){for(var n=window,e=bf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=bf(n.document)}return e}function C0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function LE(n){var e=Nx(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Lx(t.ownerDocument.documentElement,t)){if(i!==null&&C0(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=u_(t,s);var o=u_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var NE=Gr&&"documentMode"in document&&11>=document.documentMode,pa=null,Rp=null,Yl=null,Pp=!1;function c_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pp||pa==null||pa!==bf(i)||(i=pa,"selectionStart"in i&&C0(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yl&&yu(Yl,i)||(Yl=i,i=Uf(Rp,"onSelect"),0<i.length&&(e=new w0("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=pa)))}function oc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ma={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},sh={},Ix={};Gr&&(Ix=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function wd(n){if(sh[n])return sh[n];if(!ma[n])return n;var e=ma[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Ix)return sh[n]=e[t];return n}var Ux=wd("animationend"),Fx=wd("animationiteration"),Ox=wd("animationstart"),kx=wd("transitionend"),zx=new Map,f_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(n,e){zx.set(n,e),ko(e,[n])}for(var oh=0;oh<f_.length;oh++){var ah=f_[oh],IE=ah.toLowerCase(),UE=ah[0].toUpperCase()+ah.slice(1);Gs(IE,"on"+UE)}Gs(Ux,"onAnimationEnd");Gs(Fx,"onAnimationIteration");Gs(Ox,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(kx,"onTransitionEnd");Ha("onMouseEnter",["mouseout","mouseover"]);Ha("onMouseLeave",["mouseout","mouseover"]);Ha("onPointerEnter",["pointerout","pointerover"]);Ha("onPointerLeave",["pointerout","pointerover"]);ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Il));function d_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,I2(i,e,void 0,n),n.currentTarget=null}function Bx(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;d_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;d_(r,a,u),s=l}}}if(Pf)throw n=Tp,Pf=!1,Tp=null,n}function Dt(n,e){var t=e[Up];t===void 0&&(t=e[Up]=new Set);var i=n+"__bubble";t.has(i)||(Vx(e,n,2,!1),t.add(i))}function lh(n,e,t){var i=0;e&&(i|=4),Vx(t,n,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function Su(n){if(!n[ac]){n[ac]=!0,$1.forEach(function(t){t!=="selectionchange"&&(FE.has(t)||lh(t,!1,n),lh(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ac]||(e[ac]=!0,lh("selectionchange",!1,e))}}function Vx(n,e,t,i){switch(wx(e)){case 1:var r=K2;break;case 4:r=Z2;break;default:r=M0}t=r.bind(null,e,t,n),r=void 0,!wp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function uh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=fo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}cx(function(){var u=s,c=v0(t),d=[];e:{var f=zx.get(n);if(f!==void 0){var p=w0,_=n;switch(n){case"keypress":if(sf(t)===0)break e;case"keydown":case"keyup":p=dE;break;case"focusin":_="focus",p=nh;break;case"focusout":_="blur",p=nh;break;case"beforeblur":case"afterblur":p=nh;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=e_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=eE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=mE;break;case Ux:case Fx:case Ox:p=iE;break;case kx:p=_E;break;case"scroll":p=Q2;break;case"wheel":p=xE;break;case"copy":case"cut":case"paste":p=sE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=n_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var v=u,x;v!==null;){x=v;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,h!==null&&(y=mu(v,h),y!=null&&g.push(Mu(v,y,x)))),m)break;v=v.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Mp&&(_=t.relatedTarget||t.fromElement)&&(fo(_)||_[Wr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?fo(_):null,_!==null&&(m=zo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=e_,y="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(g=n_,y="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?f:ga(p),x=_==null?f:ga(_),f=new g(y,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,y=null,fo(c)===u&&(g=new g(h,v+"enter",_,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&_)t:{for(g=p,h=_,v=0,x=g;x;x=Ho(x))v++;for(x=0,y=h;y;y=Ho(y))x++;for(;0<v-x;)g=Ho(g),v--;for(;0<x-v;)h=Ho(h),x--;for(;v--;){if(g===h||h!==null&&g===h.alternate)break t;g=Ho(g),h=Ho(h)}g=null}else g=null;p!==null&&h_(d,f,p,g,!1),_!==null&&m!==null&&h_(d,m,_,g,!0)}}e:{if(f=u?ga(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=AE;else if(s_(f))if(Px)C=PE;else{C=bE;var w=CE}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=RE);if(C&&(C=C(n,u))){Rx(d,C,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&_p(f,"number",f.value)}switch(w=u?ga(u):window,n){case"focusin":(s_(w)||w.contentEditable==="true")&&(pa=w,Rp=u,Yl=null);break;case"focusout":Yl=Rp=pa=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,c_(d,t,c);break;case"selectionchange":if(NE)break;case"keydown":case"keyup":c_(d,t,c)}var E;if(A0)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else ha?Cx(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(Ax&&t.locale!=="ko"&&(ha||b!=="onCompositionStart"?b==="onCompositionEnd"&&ha&&(E=Tx()):(ms=c,E0="value"in ms?ms.value:ms.textContent,ha=!0)),w=Uf(u,b),0<w.length&&(b=new t_(b,n,null,t,c),d.push({event:b,listeners:w}),E?b.data=E:(E=bx(t),E!==null&&(b.data=E)))),(E=SE?ME(n,t):EE(n,t))&&(u=Uf(u,"onBeforeInput"),0<u.length&&(c=new t_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=E))}Bx(d,e)})}function Mu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Uf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=mu(n,t),s!=null&&i.unshift(Mu(n,s,r)),s=mu(n,e),s!=null&&i.push(Mu(n,s,r))),n=n.return}return i}function Ho(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function h_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=mu(t,s),l!=null&&o.unshift(Mu(t,l,a))):r||(l=mu(t,s),l!=null&&o.push(Mu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var OE=/\r\n?/g,kE=/\u0000|\uFFFD/g;function p_(n){return(typeof n=="string"?n:""+n).replace(OE,`
`).replace(kE,"")}function lc(n,e,t){if(e=p_(e),p_(n)!==e&&t)throw Error(ce(425))}function Ff(){}var Dp=null,Lp=null;function Np(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ip=typeof setTimeout=="function"?setTimeout:void 0,zE=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,BE=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(n){return m_.resolve(null).then(n).catch(VE)}:Ip;function VE(n){setTimeout(function(){throw n})}function ch(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),vu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);vu(e)}function Ts(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function g_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var ul=Math.random().toString(36).slice(2),pr="__reactFiber$"+ul,Eu="__reactProps$"+ul,Wr="__reactContainer$"+ul,Up="__reactEvents$"+ul,HE="__reactListeners$"+ul,GE="__reactHandles$"+ul;function fo(n){var e=n[pr];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Wr]||t[pr]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=g_(n);n!==null;){if(t=n[pr])return t;n=g_(n)}return e}n=t,t=n.parentNode}return null}function Gu(n){return n=n[pr]||n[Wr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ga(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ce(33))}function Td(n){return n[Eu]||null}var Fp=[],_a=-1;function Ws(n){return{current:n}}function Nt(n){0>_a||(n.current=Fp[_a],Fp[_a]=null,_a--)}function Rt(n,e){_a++,Fp[_a]=n.current,n.current=e}var Fs={},Ln=Ws(Fs),Jn=Ws(!1),Ro=Fs;function Ga(n,e){var t=n.type.contextTypes;if(!t)return Fs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function Of(){Nt(Jn),Nt(Ln)}function __(n,e,t){if(Ln.current!==Fs)throw Error(ce(168));Rt(Ln,e),Rt(Jn,t)}function Hx(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,C2(n)||"Unknown",r));return Ht({},t,i)}function kf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Fs,Ro=Ln.current,Rt(Ln,n),Rt(Jn,Jn.current),!0}function v_(n,e,t){var i=n.stateNode;if(!i)throw Error(ce(169));t?(n=Hx(n,e,Ro),i.__reactInternalMemoizedMergedChildContext=n,Nt(Jn),Nt(Ln),Rt(Ln,n)):Nt(Jn),Rt(Jn,t)}var Lr=null,Ad=!1,fh=!1;function Gx(n){Lr===null?Lr=[n]:Lr.push(n)}function WE(n){Ad=!0,Gx(n)}function Xs(){if(!fh&&Lr!==null){fh=!0;var n=0,e=yt;try{var t=Lr;for(yt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Lr=null,Ad=!1}catch(r){throw Lr!==null&&(Lr=Lr.slice(n+1)),px(x0,Xs),r}finally{yt=e,fh=!1}}return null}var va=[],xa=0,zf=null,Bf=0,Ni=[],Ii=0,Po=null,Fr=1,Or="";function no(n,e){va[xa++]=Bf,va[xa++]=zf,zf=n,Bf=e}function Wx(n,e,t){Ni[Ii++]=Fr,Ni[Ii++]=Or,Ni[Ii++]=Po,Po=n;var i=Fr;n=Or;var r=32-rr(i)-1;i&=~(1<<r),t+=1;var s=32-rr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Fr=1<<32-rr(e)+r|t<<r|i,Or=s+n}else Fr=1<<s|t<<r|i,Or=n}function b0(n){n.return!==null&&(no(n,1),Wx(n,1,0))}function R0(n){for(;n===zf;)zf=va[--xa],va[xa]=null,Bf=va[--xa],va[xa]=null;for(;n===Po;)Po=Ni[--Ii],Ni[Ii]=null,Or=Ni[--Ii],Ni[Ii]=null,Fr=Ni[--Ii],Ni[Ii]=null}var Ei=null,yi=null,It=!1,tr=null;function Xx(n,e){var t=Oi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function x_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Ei=n,yi=Ts(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Ei=n,yi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Po!==null?{id:Fr,overflow:Or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Oi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Ei=n,yi=null,!0):!1;default:return!1}}function Op(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kp(n){if(It){var e=yi;if(e){var t=e;if(!x_(n,e)){if(Op(n))throw Error(ce(418));e=Ts(t.nextSibling);var i=Ei;e&&x_(n,e)?Xx(i,t):(n.flags=n.flags&-4097|2,It=!1,Ei=n)}}else{if(Op(n))throw Error(ce(418));n.flags=n.flags&-4097|2,It=!1,Ei=n}}}function y_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Ei=n}function uc(n){if(n!==Ei)return!1;if(!It)return y_(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Np(n.type,n.memoizedProps)),e&&(e=yi)){if(Op(n))throw jx(),Error(ce(418));for(;e;)Xx(n,e),e=Ts(e.nextSibling)}if(y_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ce(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){yi=Ts(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}yi=null}}else yi=Ei?Ts(n.stateNode.nextSibling):null;return!0}function jx(){for(var n=yi;n;)n=Ts(n.nextSibling)}function Wa(){yi=Ei=null,It=!1}function P0(n){tr===null?tr=[n]:tr.push(n)}var XE=Qr.ReactCurrentBatchConfig;function vl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ce(309));var i=t.stateNode}if(!i)throw Error(ce(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ce(284));if(!t._owner)throw Error(ce(290,n))}return n}function cc(n,e){throw n=Object.prototype.toString.call(e),Error(ce(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function S_(n){var e=n._init;return e(n._payload)}function Yx(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Rs(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,y){return v===null||v.tag!==6?(v=vh(x,h.mode,y),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,y){var C=x.type;return C===da?c(h,v,x.props.children,y,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cs&&S_(C)===v.type)?(y=r(v,x.props),y.ref=vl(h,v,x),y.return=h,y):(y=df(x.type,x.key,x.props,null,h.mode,y),y.ref=vl(h,v,x),y.return=h,y)}function u(h,v,x,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=xh(x,h.mode,y),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,y,C){return v===null||v.tag!==7?(v=yo(x,h.mode,y,C),v.return=h,v):(v=r(v,x),v.return=h,v)}function d(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vh(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ju:return x=df(v.type,v.key,v.props,null,h.mode,x),x.ref=vl(h,null,v),x.return=h,x;case fa:return v=xh(v,h.mode,x),v.return=h,v;case cs:var y=v._init;return d(h,y(v._payload),x)}if(Ll(v)||hl(v))return v=yo(v,h.mode,x,null),v.return=h,v;cc(h,v)}return null}function f(h,v,x,y){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(h,v,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ju:return x.key===C?l(h,v,x,y):null;case fa:return x.key===C?u(h,v,x,y):null;case cs:return C=x._init,f(h,v,C(x._payload),y)}if(Ll(x)||hl(x))return C!==null?null:c(h,v,x,y,null);cc(h,x)}return null}function p(h,v,x,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(x)||null,a(v,h,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return h=h.get(y.key===null?x:y.key)||null,l(v,h,y,C);case fa:return h=h.get(y.key===null?x:y.key)||null,u(v,h,y,C);case cs:var w=y._init;return p(h,v,x,w(y._payload),C)}if(Ll(y)||hl(y))return h=h.get(x)||null,c(v,h,y,C,null);cc(v,y)}return null}function _(h,v,x,y){for(var C=null,w=null,E=v,b=v=0,M=null;E!==null&&b<x.length;b++){E.index>b?(M=E,E=null):M=E.sibling;var S=f(h,E,x[b],y);if(S===null){E===null&&(E=M);break}n&&E&&S.alternate===null&&e(h,E),v=s(S,v,b),w===null?C=S:w.sibling=S,w=S,E=M}if(b===x.length)return t(h,E),It&&no(h,b),C;if(E===null){for(;b<x.length;b++)E=d(h,x[b],y),E!==null&&(v=s(E,v,b),w===null?C=E:w.sibling=E,w=E);return It&&no(h,b),C}for(E=i(h,E);b<x.length;b++)M=p(E,h,b,x[b],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?b:M.key),v=s(M,v,b),w===null?C=M:w.sibling=M,w=M);return n&&E.forEach(function(P){return e(h,P)}),It&&no(h,b),C}function g(h,v,x,y){var C=hl(x);if(typeof C!="function")throw Error(ce(150));if(x=C.call(x),x==null)throw Error(ce(151));for(var w=C=null,E=v,b=v=0,M=null,S=x.next();E!==null&&!S.done;b++,S=x.next()){E.index>b?(M=E,E=null):M=E.sibling;var P=f(h,E,S.value,y);if(P===null){E===null&&(E=M);break}n&&E&&P.alternate===null&&e(h,E),v=s(P,v,b),w===null?C=P:w.sibling=P,w=P,E=M}if(S.done)return t(h,E),It&&no(h,b),C;if(E===null){for(;!S.done;b++,S=x.next())S=d(h,S.value,y),S!==null&&(v=s(S,v,b),w===null?C=S:w.sibling=S,w=S);return It&&no(h,b),C}for(E=i(h,E);!S.done;b++,S=x.next())S=p(E,h,b,S.value,y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?b:S.key),v=s(S,v,b),w===null?C=S:w.sibling=S,w=S);return n&&E.forEach(function(F){return e(h,F)}),It&&no(h,b),C}function m(h,v,x,y){if(typeof x=="object"&&x!==null&&x.type===da&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ju:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===da){if(w.tag===7){t(h,w.sibling),v=r(w,x.props.children),v.return=h,h=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===cs&&S_(C)===w.type){t(h,w.sibling),v=r(w,x.props),v.ref=vl(h,w,x),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}x.type===da?(v=yo(x.props.children,h.mode,y,x.key),v.return=h,h=v):(y=df(x.type,x.key,x.props,null,h.mode,y),y.ref=vl(h,v,x),y.return=h,h=y)}return o(h);case fa:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=xh(x,h.mode,y),v.return=h,h=v}return o(h);case cs:return w=x._init,m(h,v,w(x._payload),y)}if(Ll(x))return _(h,v,x,y);if(hl(x))return g(h,v,x,y);cc(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=vh(x,h.mode,y),v.return=h,h=v),o(h)):t(h,v)}return m}var Xa=Yx(!0),$x=Yx(!1),Vf=Ws(null),Hf=null,ya=null,D0=null;function L0(){D0=ya=Hf=null}function N0(n){var e=Vf.current;Nt(Vf),n._currentValue=e}function zp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Da(n,e){Hf=n,D0=ya=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Zn=!0),n.firstContext=null)}function Wi(n){var e=n._currentValue;if(D0!==n)if(n={context:n,memoizedValue:e,next:null},ya===null){if(Hf===null)throw Error(ce(308));ya=n,Hf.dependencies={lanes:0,firstContext:n}}else ya=ya.next=n;return e}var ho=null;function I0(n){ho===null?ho=[n]:ho.push(n)}function qx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,I0(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xr(n,i)}function Xr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var fs=!1;function U0(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kx(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Br(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function As(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,ht&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xr(n,t)}return r=i.interleaved,r===null?(e.next=e,I0(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xr(n,t)}function of(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,y0(n,t)}}function M_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Gf(n,e,t,i){var r=n.updateQueue;fs=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Ht({},d,f);break e;case 2:fs=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lo|=o,n.lanes=o,n.memoizedState=d}}function E_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Wu={},Sr=Ws(Wu),wu=Ws(Wu),Tu=Ws(Wu);function po(n){if(n===Wu)throw Error(ce(174));return n}function F0(n,e){switch(Rt(Tu,e),Rt(wu,n),Rt(Sr,Wu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=xp(e,n)}Nt(Sr),Rt(Sr,e)}function ja(){Nt(Sr),Nt(wu),Nt(Tu)}function Zx(n){po(Tu.current);var e=po(Sr.current),t=xp(e,n.type);e!==t&&(Rt(wu,n),Rt(Sr,t))}function O0(n){wu.current===n&&(Nt(Sr),Nt(wu))}var kt=Ws(0);function Wf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dh=[];function k0(){for(var n=0;n<dh.length;n++)dh[n]._workInProgressVersionPrimary=null;dh.length=0}var af=Qr.ReactCurrentDispatcher,hh=Qr.ReactCurrentBatchConfig,Do=0,Vt=null,rn=null,hn=null,Xf=!1,$l=!1,Au=0,jE=0;function Mn(){throw Error(ce(321))}function z0(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ar(n[t],e[t]))return!1;return!0}function B0(n,e,t,i,r,s){if(Do=s,Vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,af.current=n===null||n.memoizedState===null?KE:ZE,n=t(i,r),$l){s=0;do{if($l=!1,Au=0,25<=s)throw Error(ce(301));s+=1,hn=rn=null,e.updateQueue=null,af.current=QE,n=t(i,r)}while($l)}if(af.current=jf,e=rn!==null&&rn.next!==null,Do=0,hn=rn=Vt=null,Xf=!1,e)throw Error(ce(300));return n}function V0(){var n=Au!==0;return Au=0,n}function ur(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?Vt.memoizedState=hn=n:hn=hn.next=n,hn}function Xi(){if(rn===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=rn.next;var e=hn===null?Vt.memoizedState:hn.next;if(e!==null)hn=e,rn=n;else{if(n===null)throw Error(ce(310));rn=n,n={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},hn===null?Vt.memoizedState=hn=n:hn=hn.next=n}return hn}function Cu(n,e){return typeof e=="function"?e(n):e}function ph(n){var e=Xi(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=rn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Do&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Vt.lanes|=c,Lo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ar(i,e.memoizedState)||(Zn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Vt.lanes|=s,Lo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function mh(n){var e=Xi(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ar(s,e.memoizedState)||(Zn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Qx(){}function Jx(n,e){var t=Vt,i=Xi(),r=e(),s=!ar(i.memoizedState,r);if(s&&(i.memoizedState=r,Zn=!0),i=i.queue,H0(ny.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||hn!==null&&hn.memoizedState.tag&1){if(t.flags|=2048,bu(9,ty.bind(null,t,i,r,e),void 0,null),pn===null)throw Error(ce(349));Do&30||ey(t,e,r)}return r}function ey(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function ty(n,e,t,i){e.value=t,e.getSnapshot=i,iy(e)&&ry(n)}function ny(n,e,t){return t(function(){iy(e)&&ry(n)})}function iy(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ar(n,t)}catch{return!0}}function ry(n){var e=Xr(n,1);e!==null&&sr(e,n,1,-1)}function w_(n){var e=ur();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Cu,lastRenderedState:n},e.queue=n,n=n.dispatch=qE.bind(null,Vt,n),[e.memoizedState,n]}function bu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Vt.updateQueue,e===null?(e={lastEffect:null,stores:null},Vt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function sy(){return Xi().memoizedState}function lf(n,e,t,i){var r=ur();Vt.flags|=n,r.memoizedState=bu(1|e,t,void 0,i===void 0?null:i)}function Cd(n,e,t,i){var r=Xi();i=i===void 0?null:i;var s=void 0;if(rn!==null){var o=rn.memoizedState;if(s=o.destroy,i!==null&&z0(i,o.deps)){r.memoizedState=bu(e,t,s,i);return}}Vt.flags|=n,r.memoizedState=bu(1|e,t,s,i)}function T_(n,e){return lf(8390656,8,n,e)}function H0(n,e){return Cd(2048,8,n,e)}function oy(n,e){return Cd(4,2,n,e)}function ay(n,e){return Cd(4,4,n,e)}function ly(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function uy(n,e,t){return t=t!=null?t.concat([n]):null,Cd(4,4,ly.bind(null,e,n),t)}function G0(){}function cy(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&z0(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function fy(n,e){var t=Xi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&z0(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function dy(n,e,t){return Do&21?(ar(t,e)||(t=_x(),Vt.lanes|=t,Lo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=t)}function YE(n,e){var t=yt;yt=t!==0&&4>t?t:4,n(!0);var i=hh.transition;hh.transition={};try{n(!1),e()}finally{yt=t,hh.transition=i}}function hy(){return Xi().memoizedState}function $E(n,e,t){var i=bs(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},py(n))my(e,t);else if(t=qx(n,e,t,i),t!==null){var r=Gn();sr(t,n,i,r),gy(t,e,i)}}function qE(n,e,t){var i=bs(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(py(n))my(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ar(a,o)){var l=e.interleaved;l===null?(r.next=r,I0(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=qx(n,e,r,i),t!==null&&(r=Gn(),sr(t,n,i,r),gy(t,e,i))}}function py(n){var e=n.alternate;return n===Vt||e!==null&&e===Vt}function my(n,e){$l=Xf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function gy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,y0(n,t)}}var jf={readContext:Wi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},KE={readContext:Wi,useCallback:function(n,e){return ur().memoizedState=[n,e===void 0?null:e],n},useContext:Wi,useEffect:T_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,lf(4194308,4,ly.bind(null,e,n),t)},useLayoutEffect:function(n,e){return lf(4194308,4,n,e)},useInsertionEffect:function(n,e){return lf(4,2,n,e)},useMemo:function(n,e){var t=ur();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=ur();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=$E.bind(null,Vt,n),[i.memoizedState,n]},useRef:function(n){var e=ur();return n={current:n},e.memoizedState=n},useState:w_,useDebugValue:G0,useDeferredValue:function(n){return ur().memoizedState=n},useTransition:function(){var n=w_(!1),e=n[0];return n=YE.bind(null,n[1]),ur().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Vt,r=ur();if(It){if(t===void 0)throw Error(ce(407));t=t()}else{if(t=e(),pn===null)throw Error(ce(349));Do&30||ey(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,T_(ny.bind(null,i,s,n),[n]),i.flags|=2048,bu(9,ty.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=ur(),e=pn.identifierPrefix;if(It){var t=Or,i=Fr;t=(i&~(1<<32-rr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Au++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=jE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},ZE={readContext:Wi,useCallback:cy,useContext:Wi,useEffect:H0,useImperativeHandle:uy,useInsertionEffect:oy,useLayoutEffect:ay,useMemo:fy,useReducer:ph,useRef:sy,useState:function(){return ph(Cu)},useDebugValue:G0,useDeferredValue:function(n){var e=Xi();return dy(e,rn.memoizedState,n)},useTransition:function(){var n=ph(Cu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Qx,useSyncExternalStore:Jx,useId:hy,unstable_isNewReconciler:!1},QE={readContext:Wi,useCallback:cy,useContext:Wi,useEffect:H0,useImperativeHandle:uy,useInsertionEffect:oy,useLayoutEffect:ay,useMemo:fy,useReducer:mh,useRef:sy,useState:function(){return mh(Cu)},useDebugValue:G0,useDeferredValue:function(n){var e=Xi();return rn===null?e.memoizedState=n:dy(e,rn.memoizedState,n)},useTransition:function(){var n=mh(Cu)[0],e=Xi().memoizedState;return[n,e]},useMutableSource:Qx,useSyncExternalStore:Jx,useId:hy,unstable_isNewReconciler:!1};function Ji(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Bp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var bd={isMounted:function(n){return(n=n._reactInternals)?zo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=bs(n),s=Br(i,r);s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(sr(e,n,r,i),of(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Gn(),r=bs(n),s=Br(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=As(n,s,r),e!==null&&(sr(e,n,r,i),of(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Gn(),i=bs(n),r=Br(t,i);r.tag=2,e!=null&&(r.callback=e),e=As(n,r,i),e!==null&&(sr(e,n,i,t),of(e,n,i))}};function A_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!yu(t,i)||!yu(r,s):!0}function _y(n,e,t){var i=!1,r=Fs,s=e.contextType;return typeof s=="object"&&s!==null?s=Wi(s):(r=ei(e)?Ro:Ln.current,i=e.contextTypes,s=(i=i!=null)?Ga(n,r):Fs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function C_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&bd.enqueueReplaceState(e,e.state,null)}function Vp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},U0(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Wi(s):(s=ei(e)?Ro:Ln.current,r.context=Ga(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&bd.enqueueReplaceState(r,r.state,null),Gf(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ya(n,e){try{var t="",i=e;do t+=A2(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function gh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Hp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var JE=typeof WeakMap=="function"?WeakMap:Map;function vy(n,e,t){t=Br(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){$f||($f=!0,Qp=i),Hp(n,e)},t}function xy(n,e,t){t=Br(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Hp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Hp(n,e),typeof i!="function"&&(Cs===null?Cs=new Set([this]):Cs.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function b_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new JE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=hw.bind(null,n,e,t),e.then(n,n))}function R_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function P_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Br(-1,1),e.tag=2,As(t,e,1))),t.lanes|=1),n)}var ew=Qr.ReactCurrentOwner,Zn=!1;function On(n,e,t,i){e.child=n===null?$x(e,null,t,i):Xa(e,n.child,t,i)}function D_(n,e,t,i,r){t=t.render;var s=e.ref;return Da(e,r),i=B0(n,e,t,i,s,r),t=V0(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,jr(n,e,r)):(It&&t&&b0(e),e.flags|=1,On(n,e,i,r),e.child)}function L_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Z0(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,yy(n,e,s,i,r)):(n=df(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:yu,t(o,i)&&n.ref===e.ref)return jr(n,e,r)}return e.flags|=1,n=Rs(s,i),n.ref=e.ref,n.return=e,e.child=n}function yy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(yu(s,i)&&n.ref===e.ref)if(Zn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Zn=!0);else return e.lanes=n.lanes,jr(n,e,r)}return Gp(n,e,t,i,r)}function Sy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(Ma,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Rt(Ma,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Rt(Ma,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Rt(Ma,pi),pi|=i;return On(n,e,r,t),e.child}function My(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Gp(n,e,t,i,r){var s=ei(t)?Ro:Ln.current;return s=Ga(e,s),Da(e,r),t=B0(n,e,t,i,s,r),i=V0(),n!==null&&!Zn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,jr(n,e,r)):(It&&i&&b0(e),e.flags|=1,On(n,e,t,r),e.child)}function N_(n,e,t,i,r){if(ei(t)){var s=!0;kf(e)}else s=!1;if(Da(e,r),e.stateNode===null)uf(n,e),_y(e,t,i),Vp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Wi(u):(u=ei(t)?Ro:Ln.current,u=Ga(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&C_(e,o,i,u),fs=!1;var f=e.memoizedState;o.state=f,Gf(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Jn.current||fs?(typeof c=="function"&&(Bp(e,t,c,i),l=e.memoizedState),(a=fs||A_(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Kx(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ji(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Wi(l):(l=ei(t)?Ro:Ln.current,l=Ga(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&C_(e,o,i,l),fs=!1,f=e.memoizedState,o.state=f,Gf(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Jn.current||fs?(typeof p=="function"&&(Bp(e,t,p,i),_=e.memoizedState),(u=fs||A_(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Wp(n,e,t,i,s,r)}function Wp(n,e,t,i,r,s){My(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&v_(e,t,!1),jr(n,e,s);i=e.stateNode,ew.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Xa(e,n.child,null,s),e.child=Xa(e,null,a,s)):On(n,e,a,s),e.memoizedState=i.state,r&&v_(e,t,!0),e.child}function Ey(n){var e=n.stateNode;e.pendingContext?__(n,e.pendingContext,e.pendingContext!==e.context):e.context&&__(n,e.context,!1),F0(n,e.containerInfo)}function I_(n,e,t,i,r){return Wa(),P0(r),e.flags|=256,On(n,e,t,i),e.child}var Xp={dehydrated:null,treeContext:null,retryLane:0};function jp(n){return{baseLanes:n,cachePool:null,transitions:null}}function wy(n,e,t){var i=e.pendingProps,r=kt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Rt(kt,r&1),n===null)return kp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dd(o,i,0,null),n=yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=jp(t),e.memoizedState=Xp,n):W0(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rs(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rs(a,s):(s=yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?jp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Xp,i}return s=n.child,n=s.sibling,i=Rs(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function W0(n,e){return e=Dd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function fc(n,e,t,i){return i!==null&&P0(i),Xa(e,n.child,null,t),n=W0(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function tw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=gh(Error(ce(422))),fc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dd({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Xa(e,n.child,null,o),e.child.memoizedState=jp(o),e.memoizedState=Xp,s);if(!(e.mode&1))return fc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=gh(s,i,void 0),fc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Zn||a){if(i=pn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xr(n,r),sr(i,n,r,-1))}return K0(),i=gh(Error(ce(421))),fc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=pw.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,yi=Ts(r.nextSibling),Ei=e,It=!0,tr=null,n!==null&&(Ni[Ii++]=Fr,Ni[Ii++]=Or,Ni[Ii++]=Po,Fr=n.id,Or=n.overflow,Po=e),e=W0(e,i.children),e.flags|=4096,e)}function U_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),zp(n.return,e,t)}function _h(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Ty(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(On(n,e,i.children,t),i=kt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&U_(n,t,e);else if(n.tag===19)U_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Rt(kt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Wf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),_h(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Wf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}_h(e,!0,t,null,s);break;case"together":_h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function jr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Lo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ce(153));if(e.child!==null){for(n=e.child,t=Rs(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Rs(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function nw(n,e,t){switch(e.tag){case 3:Ey(e),Wa();break;case 5:Zx(e);break;case 1:ei(e.type)&&kf(e);break;case 4:F0(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Rt(Vf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Rt(kt,kt.current&1),e.flags|=128,null):t&e.child.childLanes?wy(n,e,t):(Rt(kt,kt.current&1),n=jr(n,e,t),n!==null?n.sibling:null);Rt(kt,kt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Ty(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Rt(kt,kt.current),i)break;return null;case 22:case 23:return e.lanes=0,Sy(n,e,t)}return jr(n,e,t)}var Ay,Yp,Cy,by;Ay=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yp=function(){};Cy=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,po(Sr.current);var s=null;switch(t){case"input":r=mp(n,r),i=mp(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=vp(n,r),i=vp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ff)}yp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(hu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(hu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Dt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};by=function(n,e,t,i){t!==i&&(e.flags|=4)};function xl(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function iw(n,e,t){var i=e.pendingProps;switch(R0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return ei(e.type)&&Of(),En(e),null;case 3:return i=e.stateNode,ja(),Nt(Jn),Nt(Ln),k0(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(uc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tr!==null&&(tm(tr),tr=null))),Yp(n,e),En(e),null;case 5:O0(e);var r=po(Tu.current);if(t=e.type,n!==null&&e.stateNode!=null)Cy(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return En(e),null}if(n=po(Sr.current),uc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[pr]=e,i[Eu]=s,n=(e.mode&1)!==0,t){case"dialog":Dt("cancel",i),Dt("close",i);break;case"iframe":case"object":case"embed":Dt("load",i);break;case"video":case"audio":for(r=0;r<Il.length;r++)Dt(Il[r],i);break;case"source":Dt("error",i);break;case"img":case"image":case"link":Dt("error",i),Dt("load",i);break;case"details":Dt("toggle",i);break;case"input":Wg(i,s),Dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Dt("invalid",i);break;case"textarea":jg(i,s),Dt("invalid",i)}yp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",""+a]):hu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Dt("scroll",i)}switch(t){case"input":ec(i),Xg(i,s,!0);break;case"textarea":ec(i),Yg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ff)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=nx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[pr]=e,n[Eu]=i,Ay(n,e,!1,!1),e.stateNode=n;e:{switch(o=Sp(t,i),t){case"dialog":Dt("cancel",n),Dt("close",n),r=i;break;case"iframe":case"object":case"embed":Dt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Il.length;r++)Dt(Il[r],n);r=i;break;case"source":Dt("error",n),r=i;break;case"img":case"image":case"link":Dt("error",n),Dt("load",n),r=i;break;case"details":Dt("toggle",n),r=i;break;case"input":Wg(n,i),r=mp(n,i),Dt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Dt("invalid",n);break;case"textarea":jg(n,i),r=vp(n,i),Dt("invalid",n);break;default:r=i}yp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?sx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ix(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&pu(n,l):typeof l=="number"&&pu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(hu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Dt("scroll",n):l!=null&&p0(n,s,l,o))}switch(t){case"input":ec(n),Xg(n,i,!1);break;case"textarea":ec(n),Yg(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Us(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ca(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ca(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ff)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)by(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(t=po(Tu.current),po(Sr.current),uc(e)){if(i=e.stateNode,t=e.memoizedProps,i[pr]=e,(s=i.nodeValue!==t)&&(n=Ei,n!==null))switch(n.tag){case 3:lc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[pr]=e,e.stateNode=i}return En(e),null;case 13:if(Nt(kt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&yi!==null&&e.mode&1&&!(e.flags&128))jx(),Wa(),e.flags|=98560,s=!1;else if(s=uc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[pr]=e}else Wa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else tr!==null&&(tm(tr),tr=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||kt.current&1?an===0&&(an=3):K0())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return ja(),Yp(n,e),n===null&&Su(e.stateNode.containerInfo),En(e),null;case 10:return N0(e.type._context),En(e),null;case 17:return ei(e.type)&&Of(),En(e),null;case 19:if(Nt(kt),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)xl(s,!1);else{if(an!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Wf(n),o!==null){for(e.flags|=128,xl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Rt(kt,kt.current&1|2),e.child}n=n.sibling}s.tail!==null&&jt()>$a&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Wf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),xl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return En(e),null}else 2*jt()-s.renderingStartTime>$a&&t!==1073741824&&(e.flags|=128,i=!0,xl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=jt(),e.sibling=null,t=kt.current,Rt(kt,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return q0(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function rw(n,e){switch(R0(e),e.tag){case 1:return ei(e.type)&&Of(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ja(),Nt(Jn),Nt(Ln),k0(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return O0(e),null;case 13:if(Nt(kt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Wa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Nt(kt),null;case 4:return ja(),null;case 10:return N0(e.type._context),null;case 22:case 23:return q0(),null;case 24:return null;default:return null}}var dc=!1,bn=!1,sw=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Sa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Gt(n,e,i)}else t.current=null}function $p(n,e,t){try{t()}catch(i){Gt(n,e,i)}}var F_=!1;function ow(n,e){if(Dp=Nf,n=Nx(),C0(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Lp={focusedElem:n,selectionRange:t},Nf=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:Ji(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){Gt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return _=F_,F_=!1,_}function ql(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&$p(e,t,s)}r=r.next}while(r!==i)}}function Rd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function qp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Ry(n){var e=n.alternate;e!==null&&(n.alternate=null,Ry(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[pr],delete e[Eu],delete e[Up],delete e[HE],delete e[GE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Py(n){return n.tag===5||n.tag===3||n.tag===4}function O_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Py(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ff));else if(i!==4&&(n=n.child,n!==null))for(Kp(n,e,t),n=n.sibling;n!==null;)Kp(n,e,t),n=n.sibling}function Zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zp(n,e,t),n=n.sibling;n!==null;)Zp(n,e,t),n=n.sibling}var _n=null,er=!1;function ns(n,e,t){for(t=t.child;t!==null;)Dy(n,e,t),t=t.sibling}function Dy(n,e,t){if(yr&&typeof yr.onCommitFiberUnmount=="function")try{yr.onCommitFiberUnmount(Sd,t)}catch{}switch(t.tag){case 5:bn||Sa(t,e);case 6:var i=_n,r=er;_n=null,ns(n,e,t),_n=i,er=r,_n!==null&&(er?(n=_n,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):_n.removeChild(t.stateNode));break;case 18:_n!==null&&(er?(n=_n,t=t.stateNode,n.nodeType===8?ch(n.parentNode,t):n.nodeType===1&&ch(n,t),vu(n)):ch(_n,t.stateNode));break;case 4:i=_n,r=er,_n=t.stateNode.containerInfo,er=!0,ns(n,e,t),_n=i,er=r;break;case 0:case 11:case 14:case 15:if(!bn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&$p(t,e,o),r=r.next}while(r!==i)}ns(n,e,t);break;case 1:if(!bn&&(Sa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Gt(t,e,a)}ns(n,e,t);break;case 21:ns(n,e,t);break;case 22:t.mode&1?(bn=(i=bn)||t.memoizedState!==null,ns(n,e,t),bn=i):ns(n,e,t);break;default:ns(n,e,t)}}function k_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new sw),e.forEach(function(i){var r=mw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function $i(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:_n=a.stateNode,er=!1;break e;case 3:_n=a.stateNode.containerInfo,er=!0;break e;case 4:_n=a.stateNode.containerInfo,er=!0;break e}a=a.return}if(_n===null)throw Error(ce(160));Dy(s,o,r),_n=null,er=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Gt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ly(e,n),e=e.sibling}function Ly(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if($i(e,n),lr(n),i&4){try{ql(3,n,n.return),Rd(3,n)}catch(g){Gt(n,n.return,g)}try{ql(5,n,n.return)}catch(g){Gt(n,n.return,g)}}break;case 1:$i(e,n),lr(n),i&512&&t!==null&&Sa(t,t.return);break;case 5:if($i(e,n),lr(n),i&512&&t!==null&&Sa(t,t.return),n.flags&32){var r=n.stateNode;try{pu(r,"")}catch(g){Gt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ex(r,s),Sp(a,o);var u=Sp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?sx(r,d):c==="dangerouslySetInnerHTML"?ix(r,d):c==="children"?pu(r,d):p0(r,c,d,u)}switch(a){case"input":gp(r,s);break;case"textarea":tx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ca(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ca(r,!!s.multiple,s.defaultValue,!0):Ca(r,!!s.multiple,s.multiple?[]:"",!1))}r[Eu]=s}catch(g){Gt(n,n.return,g)}}break;case 6:if($i(e,n),lr(n),i&4){if(n.stateNode===null)throw Error(ce(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Gt(n,n.return,g)}}break;case 3:if($i(e,n),lr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{vu(e.containerInfo)}catch(g){Gt(n,n.return,g)}break;case 4:$i(e,n),lr(n);break;case 13:$i(e,n),lr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Y0=jt())),i&4&&k_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(bn=(u=bn)||c,$i(e,n),bn=u):$i(e,n),lr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Te=n,c=n.child;c!==null;){for(d=Te=c;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:ql(4,f,f.return);break;case 1:Sa(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Gt(i,t,g)}}break;case 5:Sa(f,f.return);break;case 22:if(f.memoizedState!==null){B_(d);continue}}p!==null?(p.return=f,Te=p):B_(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=rx("display",o))}catch(g){Gt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Gt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$i(e,n),lr(n),i&4&&k_(n);break;case 21:break;default:$i(e,n),lr(n)}}function lr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Py(t)){var i=t;break e}t=t.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pu(r,""),i.flags&=-33);var s=O_(n);Zp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=O_(n);Kp(n,a,o);break;default:throw Error(ce(161))}}catch(l){Gt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function aw(n,e,t){Te=n,Ny(n)}function Ny(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||bn;a=dc;var u=bn;if(dc=o,(bn=l)&&!u)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?V_(r):l!==null?(l.return=o,Te=l):V_(r);for(;s!==null;)Te=s,Ny(s),s=s.sibling;Te=r,dc=a,bn=u}z_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):z_(n)}}function z_(n){for(;Te!==null;){var e=Te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:bn||Rd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!bn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Ji(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&E_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}E_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&vu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}bn||e.flags&512&&qp(e)}catch(f){Gt(e,e.return,f)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function B_(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function V_(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Rd(4,e)}catch(l){Gt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Gt(e,r,l)}}var s=e.return;try{qp(e)}catch(l){Gt(e,s,l)}break;case 5:var o=e.return;try{qp(e)}catch(l){Gt(e,o,l)}}}catch(l){Gt(e,e.return,l)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var lw=Math.ceil,Yf=Qr.ReactCurrentDispatcher,X0=Qr.ReactCurrentOwner,Hi=Qr.ReactCurrentBatchConfig,ht=0,pn=null,Qt=null,xn=0,pi=0,Ma=Ws(0),an=0,Ru=null,Lo=0,Pd=0,j0=0,Kl=null,qn=null,Y0=0,$a=1/0,Pr=null,$f=!1,Qp=null,Cs=null,hc=!1,gs=null,qf=0,Zl=0,Jp=null,cf=-1,ff=0;function Gn(){return ht&6?jt():cf!==-1?cf:cf=jt()}function bs(n){return n.mode&1?ht&2&&xn!==0?xn&-xn:XE.transition!==null?(ff===0&&(ff=_x()),ff):(n=yt,n!==0||(n=window.event,n=n===void 0?16:wx(n.type)),n):1}function sr(n,e,t,i){if(50<Zl)throw Zl=0,Jp=null,Error(ce(185));Vu(n,t,i),(!(ht&2)||n!==pn)&&(n===pn&&(!(ht&2)&&(Pd|=t),an===4&&hs(n,xn)),ti(n,i),t===1&&ht===0&&!(e.mode&1)&&($a=jt()+500,Ad&&Xs()))}function ti(n,e){var t=n.callbackNode;X2(n,e);var i=Lf(n,n===pn?xn:0);if(i===0)t!==null&&Kg(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Kg(t),e===1)n.tag===0?WE(H_.bind(null,n)):Gx(H_.bind(null,n)),BE(function(){!(ht&6)&&Xs()}),t=null;else{switch(vx(i)){case 1:t=x0;break;case 4:t=mx;break;case 16:t=Df;break;case 536870912:t=gx;break;default:t=Df}t=Vy(t,Iy.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Iy(n,e){if(cf=-1,ff=0,ht&6)throw Error(ce(327));var t=n.callbackNode;if(La()&&n.callbackNode!==t)return null;var i=Lf(n,n===pn?xn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Kf(n,i);else{e=i;var r=ht;ht|=2;var s=Fy();(pn!==n||xn!==e)&&(Pr=null,$a=jt()+500,xo(n,e));do try{fw();break}catch(a){Uy(n,a)}while(!0);L0(),Yf.current=s,ht=r,Qt!==null?e=0:(pn=null,xn=0,e=an)}if(e!==0){if(e===2&&(r=Ap(n),r!==0&&(i=r,e=em(n,r))),e===1)throw t=Ru,xo(n,0),hs(n,i),ti(n,jt()),t;if(e===6)hs(n,i);else{if(r=n.current.alternate,!(i&30)&&!uw(r)&&(e=Kf(n,i),e===2&&(s=Ap(n),s!==0&&(i=s,e=em(n,s))),e===1))throw t=Ru,xo(n,0),hs(n,i),ti(n,jt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:io(n,qn,Pr);break;case 3:if(hs(n,i),(i&130023424)===i&&(e=Y0+500-jt(),10<e)){if(Lf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Gn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Ip(io.bind(null,n,qn,Pr),e);break}io(n,qn,Pr);break;case 4:if(hs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-rr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lw(i/1960))-i,10<i){n.timeoutHandle=Ip(io.bind(null,n,qn,Pr),i);break}io(n,qn,Pr);break;case 5:io(n,qn,Pr);break;default:throw Error(ce(329))}}}return ti(n,jt()),n.callbackNode===t?Iy.bind(null,n):null}function em(n,e){var t=Kl;return n.current.memoizedState.isDehydrated&&(xo(n,e).flags|=256),n=Kf(n,e),n!==2&&(e=qn,qn=t,e!==null&&tm(e)),n}function tm(n){qn===null?qn=n:qn.push.apply(qn,n)}function uw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ar(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hs(n,e){for(e&=~j0,e&=~Pd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-rr(e),i=1<<t;n[t]=-1,e&=~i}}function H_(n){if(ht&6)throw Error(ce(327));La();var e=Lf(n,0);if(!(e&1))return ti(n,jt()),null;var t=Kf(n,e);if(n.tag!==0&&t===2){var i=Ap(n);i!==0&&(e=i,t=em(n,i))}if(t===1)throw t=Ru,xo(n,0),hs(n,e),ti(n,jt()),t;if(t===6)throw Error(ce(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,io(n,qn,Pr),ti(n,jt()),null}function $0(n,e){var t=ht;ht|=1;try{return n(e)}finally{ht=t,ht===0&&($a=jt()+500,Ad&&Xs())}}function No(n){gs!==null&&gs.tag===0&&!(ht&6)&&La();var e=ht;ht|=1;var t=Hi.transition,i=yt;try{if(Hi.transition=null,yt=1,n)return n()}finally{yt=i,Hi.transition=t,ht=e,!(ht&6)&&Xs()}}function q0(){pi=Ma.current,Nt(Ma)}function xo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,zE(t)),Qt!==null)for(t=Qt.return;t!==null;){var i=t;switch(R0(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Of();break;case 3:ja(),Nt(Jn),Nt(Ln),k0();break;case 5:O0(i);break;case 4:ja();break;case 13:Nt(kt);break;case 19:Nt(kt);break;case 10:N0(i.type._context);break;case 22:case 23:q0()}t=t.return}if(pn=n,Qt=n=Rs(n.current,null),xn=pi=e,an=0,Ru=null,j0=Pd=Lo=0,qn=Kl=null,ho!==null){for(e=0;e<ho.length;e++)if(t=ho[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ho=null}return n}function Uy(n,e){do{var t=Qt;try{if(L0(),af.current=jf,Xf){for(var i=Vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Xf=!1}if(Do=0,hn=rn=Vt=null,$l=!1,Au=0,X0.current=null,t===null||t.return===null){an=1,Ru=e,Qt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=xn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=R_(o);if(p!==null){p.flags&=-257,P_(p,o,a,s,e),p.mode&1&&b_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){b_(s,u,e),K0();break e}l=Error(ce(426))}}else if(It&&a.mode&1){var m=R_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),P_(m,o,a,s,e),P0(Ya(l,a));break e}}s=l=Ya(l,a),an!==4&&(an=2),Kl===null?Kl=[s]:Kl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=vy(s,l,e);M_(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cs===null||!Cs.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=xy(s,a,e);M_(s,y);break e}}s=s.return}while(s!==null)}ky(t)}catch(C){e=C,Qt===t&&t!==null&&(Qt=t=t.return);continue}break}while(!0)}function Fy(){var n=Yf.current;return Yf.current=jf,n===null?jf:n}function K0(){(an===0||an===3||an===2)&&(an=4),pn===null||!(Lo&268435455)&&!(Pd&268435455)||hs(pn,xn)}function Kf(n,e){var t=ht;ht|=2;var i=Fy();(pn!==n||xn!==e)&&(Pr=null,xo(n,e));do try{cw();break}catch(r){Uy(n,r)}while(!0);if(L0(),ht=t,Yf.current=i,Qt!==null)throw Error(ce(261));return pn=null,xn=0,an}function cw(){for(;Qt!==null;)Oy(Qt)}function fw(){for(;Qt!==null&&!F2();)Oy(Qt)}function Oy(n){var e=By(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?ky(n):Qt=e,X0.current=null}function ky(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=rw(t,e),t!==null){t.flags&=32767,Qt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,Qt=null;return}}else if(t=iw(t,e,pi),t!==null){Qt=t;return}if(e=e.sibling,e!==null){Qt=e;return}Qt=e=n}while(e!==null);an===0&&(an=5)}function io(n,e,t){var i=yt,r=Hi.transition;try{Hi.transition=null,yt=1,dw(n,e,t,i)}finally{Hi.transition=r,yt=i}return null}function dw(n,e,t,i){do La();while(gs!==null);if(ht&6)throw Error(ce(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ce(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(j2(n,s),n===pn&&(Qt=pn=null,xn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hc||(hc=!0,Vy(Df,function(){return La(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Hi.transition,Hi.transition=null;var o=yt;yt=1;var a=ht;ht|=4,X0.current=null,ow(n,t),Ly(t,n),LE(Lp),Nf=!!Dp,Lp=Dp=null,n.current=t,aw(t),O2(),ht=a,yt=o,Hi.transition=s}else n.current=t;if(hc&&(hc=!1,gs=n,qf=r),s=n.pendingLanes,s===0&&(Cs=null),B2(t.stateNode),ti(n,jt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if($f)throw $f=!1,n=Qp,Qp=null,n;return qf&1&&n.tag!==0&&La(),s=n.pendingLanes,s&1?n===Jp?Zl++:(Zl=0,Jp=n):Zl=0,Xs(),null}function La(){if(gs!==null){var n=vx(qf),e=Hi.transition,t=yt;try{if(Hi.transition=null,yt=16>n?16:n,gs===null)var i=!1;else{if(n=gs,gs=null,qf=0,ht&6)throw Error(ce(331));var r=ht;for(ht|=4,Te=n.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Te=u;Te!==null;){var c=Te;switch(c.tag){case 0:case 11:case 15:ql(8,c,s)}var d=c.child;if(d!==null)d.return=c,Te=d;else for(;Te!==null;){c=Te;var f=c.sibling,p=c.return;if(Ry(c),c===u){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ql(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Te=h;break e}Te=s.return}}var v=n.current;for(Te=v;Te!==null;){o=Te;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Te=x;else e:for(o=v;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rd(9,a)}}catch(C){Gt(a,a.return,C)}if(a===o){Te=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Te=y;break e}Te=a.return}}if(ht=r,Xs(),yr&&typeof yr.onPostCommitFiberRoot=="function")try{yr.onPostCommitFiberRoot(Sd,n)}catch{}i=!0}return i}finally{yt=t,Hi.transition=e}}return!1}function G_(n,e,t){e=Ya(t,e),e=vy(n,e,1),n=As(n,e,1),e=Gn(),n!==null&&(Vu(n,1,e),ti(n,e))}function Gt(n,e,t){if(n.tag===3)G_(n,n,t);else for(;e!==null;){if(e.tag===3){G_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cs===null||!Cs.has(i))){n=Ya(t,n),n=xy(e,n,1),e=As(e,n,1),n=Gn(),e!==null&&(Vu(e,1,n),ti(e,n));break}}e=e.return}}function hw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Gn(),n.pingedLanes|=n.suspendedLanes&t,pn===n&&(xn&t)===t&&(an===4||an===3&&(xn&130023424)===xn&&500>jt()-Y0?xo(n,0):j0|=t),ti(n,e)}function zy(n,e){e===0&&(n.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var t=Gn();n=Xr(n,e),n!==null&&(Vu(n,e,t),ti(n,t))}function pw(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),zy(n,t)}function mw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),zy(n,t)}var By;By=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Zn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Zn=!1,nw(n,e,t);Zn=!!(n.flags&131072)}else Zn=!1,It&&e.flags&1048576&&Wx(e,Bf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uf(n,e),n=e.pendingProps;var r=Ga(e,Ln.current);Da(e,t),r=B0(null,e,i,n,r,t);var s=V0();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,kf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,U0(e),r.updater=bd,e.stateNode=r,r._reactInternals=e,Vp(e,i,n,t),e=Wp(null,e,i,!0,s,t)):(e.tag=0,It&&s&&b0(e),On(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(uf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=_w(i),n=Ji(i,n),r){case 0:e=Gp(null,e,i,n,t);break e;case 1:e=N_(null,e,i,n,t);break e;case 11:e=D_(null,e,i,n,t);break e;case 14:e=L_(null,e,i,Ji(i.type,n),t);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ji(i,r),Gp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ji(i,r),N_(n,e,i,r,t);case 3:e:{if(Ey(e),n===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Kx(n,e),Gf(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ya(Error(ce(423)),e),e=I_(n,e,i,t,r);break e}else if(i!==r){r=Ya(Error(ce(424)),e),e=I_(n,e,i,t,r);break e}else for(yi=Ts(e.stateNode.containerInfo.firstChild),Ei=e,It=!0,tr=null,t=$x(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Wa(),i===r){e=jr(n,e,t);break e}On(n,e,i,t)}e=e.child}return e;case 5:return Zx(e),n===null&&kp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Np(i,r)?o=null:s!==null&&Np(i,s)&&(e.flags|=32),My(n,e),On(n,e,o,t),e.child;case 6:return n===null&&kp(e),null;case 13:return wy(n,e,t);case 4:return F0(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Xa(e,null,i,t):On(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ji(i,r),D_(n,e,i,r,t);case 7:return On(n,e,e.pendingProps,t),e.child;case 8:return On(n,e,e.pendingProps.children,t),e.child;case 12:return On(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Rt(Vf,i._currentValue),i._currentValue=o,s!==null)if(ar(s.value,o)){if(s.children===r.children&&!Jn.current){e=jr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Br(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),zp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),zp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}On(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Da(e,t),r=Wi(r),i=i(r),e.flags|=1,On(n,e,i,t),e.child;case 14:return i=e.type,r=Ji(i,e.pendingProps),r=Ji(i.type,r),L_(n,e,i,r,t);case 15:return yy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ji(i,r),uf(n,e),e.tag=1,ei(i)?(n=!0,kf(e)):n=!1,Da(e,t),_y(e,i,r),Vp(e,i,r,t),Wp(null,e,i,!0,n,t);case 19:return Ty(n,e,t);case 22:return Sy(n,e,t)}throw Error(ce(156,e.tag))};function Vy(n,e){return px(n,e)}function gw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Oi(n,e,t,i){return new gw(n,e,t,i)}function Z0(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _w(n){if(typeof n=="function")return Z0(n)?1:0;if(n!=null){if(n=n.$$typeof,n===g0)return 11;if(n===_0)return 14}return 2}function Rs(n,e){var t=n.alternate;return t===null?(t=Oi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function df(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Z0(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case da:return yo(t.children,r,s,e);case m0:o=8,r|=8;break;case fp:return n=Oi(12,t,e,r|2),n.elementType=fp,n.lanes=s,n;case dp:return n=Oi(13,t,e,r),n.elementType=dp,n.lanes=s,n;case hp:return n=Oi(19,t,e,r),n.elementType=hp,n.lanes=s,n;case Z1:return Dd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case q1:o=10;break e;case K1:o=9;break e;case g0:o=11;break e;case _0:o=14;break e;case cs:o=16,i=null;break e}throw Error(ce(130,n==null?n:typeof n,""))}return e=Oi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function yo(n,e,t,i){return n=Oi(7,n,i,e),n.lanes=t,n}function Dd(n,e,t,i){return n=Oi(22,n,i,e),n.elementType=Z1,n.lanes=t,n.stateNode={isHidden:!1},n}function vh(n,e,t){return n=Oi(6,n,null,e),n.lanes=t,n}function xh(n,e,t){return e=Oi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function vw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Jd(0),this.expirationTimes=Jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Q0(n,e,t,i,r,s,o,a,l){return n=new vw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Oi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},U0(s),n}function xw(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Hy(n){if(!n)return Fs;n=n._reactInternals;e:{if(zo(n)!==n||n.tag!==1)throw Error(ce(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(n.tag===1){var t=n.type;if(ei(t))return Hx(n,t,e)}return e}function Gy(n,e,t,i,r,s,o,a,l){return n=Q0(t,i,!0,n,r,s,o,a,l),n.context=Hy(null),t=n.current,i=Gn(),r=bs(t),s=Br(i,r),s.callback=e??null,As(t,s,r),n.current.lanes=r,Vu(n,r,i),ti(n,i),n}function Ld(n,e,t,i){var r=e.current,s=Gn(),o=bs(r);return t=Hy(t),e.context===null?e.context=t:e.pendingContext=t,e=Br(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=As(r,e,o),n!==null&&(sr(n,r,o,s),of(n,r,o)),o}function Zf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function W_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function J0(n,e){W_(n,e),(n=n.alternate)&&W_(n,e)}function yw(){return null}var Wy=typeof reportError=="function"?reportError:function(n){console.error(n)};function eg(n){this._internalRoot=n}Nd.prototype.render=eg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ce(409));Ld(n,e,null,null)};Nd.prototype.unmount=eg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;No(function(){Ld(null,n,null,null)}),e[Wr]=null}};function Nd(n){this._internalRoot=n}Nd.prototype.unstable_scheduleHydration=function(n){if(n){var e=Sx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ds.length&&e!==0&&e<ds[t].priority;t++);ds.splice(t,0,n),t===0&&Ex(n)}};function tg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Id(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function X_(){}function Sw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Zf(o);s.call(u)}}var o=Gy(e,i,n,0,null,!1,!1,"",X_);return n._reactRootContainer=o,n[Wr]=o.current,Su(n.nodeType===8?n.parentNode:n),No(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Zf(l);a.call(u)}}var l=Q0(n,0,!1,null,null,!1,!1,"",X_);return n._reactRootContainer=l,n[Wr]=l.current,Su(n.nodeType===8?n.parentNode:n),No(function(){Ld(e,l,t,i)}),l}function Ud(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Zf(o);a.call(l)}}Ld(e,o,n,r)}else o=Sw(t,e,n,r,i);return Zf(o)}xx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Nl(e.pendingLanes);t!==0&&(y0(e,t|1),ti(e,jt()),!(ht&6)&&($a=jt()+500,Xs()))}break;case 13:No(function(){var i=Xr(n,1);if(i!==null){var r=Gn();sr(i,n,1,r)}}),J0(n,1)}};S0=function(n){if(n.tag===13){var e=Xr(n,134217728);if(e!==null){var t=Gn();sr(e,n,134217728,t)}J0(n,134217728)}};yx=function(n){if(n.tag===13){var e=bs(n),t=Xr(n,e);if(t!==null){var i=Gn();sr(t,n,e,i)}J0(n,e)}};Sx=function(){return yt};Mx=function(n,e){var t=yt;try{return yt=n,e()}finally{yt=t}};Ep=function(n,e,t){switch(e){case"input":if(gp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Td(i);if(!r)throw Error(ce(90));J1(i),gp(i,r)}}}break;case"textarea":tx(n,t);break;case"select":e=t.value,e!=null&&Ca(n,!!t.multiple,e,!1)}};lx=$0;ux=No;var Mw={usingClientEntryPoint:!1,Events:[Gu,ga,Td,ox,ax,$0]},yl={findFiberByHostInstance:fo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:yl.bundleType,version:yl.version,rendererPackageName:yl.rendererPackageName,rendererConfig:yl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dx(n),n===null?null:n.stateNode},findFiberByHostInstance:yl.findFiberByHostInstance||yw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Sd=pc.inject(Ew),yr=pc}catch{}}bi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mw;bi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tg(e))throw Error(ce(200));return xw(n,e,null,t)};bi.createRoot=function(n,e){if(!tg(n))throw Error(ce(299));var t=!1,i="",r=Wy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Q0(n,1,!1,null,null,t,!1,i,r),n[Wr]=e.current,Su(n.nodeType===8?n.parentNode:n),new eg(e)};bi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ce(188)):(n=Object.keys(n).join(","),Error(ce(268,n)));return n=dx(e),n=n===null?null:n.stateNode,n};bi.flushSync=function(n){return No(n)};bi.hydrate=function(n,e,t){if(!Id(e))throw Error(ce(200));return Ud(null,n,e,!0,t)};bi.hydrateRoot=function(n,e,t){if(!tg(n))throw Error(ce(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Wy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Gy(e,null,n,1,t??null,r,!1,s,o),n[Wr]=e.current,Su(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nd(e)};bi.render=function(n,e,t){if(!Id(e))throw Error(ce(200));return Ud(null,n,e,!1,t)};bi.unmountComponentAtNode=function(n){if(!Id(n))throw Error(ce(40));return n._reactRootContainer?(No(function(){Ud(null,null,n,!1,function(){n._reactRootContainer=null,n[Wr]=null})}),!0):!1};bi.unstable_batchedUpdates=$0;bi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Id(t))throw Error(ce(200));if(n==null||n._reactInternals===void 0)throw Error(ce(38));return Ud(n,e,t,!1,i)};bi.version="18.3.1-next-f1338f8080-20240426";function Xy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xy)}catch(n){console.error(n)}}Xy(),X1.exports=bi;var ww=X1.exports,jy,j_=ww;jy=j_.createRoot,j_.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Tw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ji=(n,e)=>{const t=Ze.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>Ze.createElement("svg",{ref:c,...Tw,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Aw(n)}`,a].join(" "),...u},[...e.map(([d,f])=>Ze.createElement(d,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=ji("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=ji("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=ji("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ji("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=ji("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=ji("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=ji("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pw=ji("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=ji("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=ji("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=ji("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=ji("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);function Uw(){const n=["UI/UX Designer","Frontend Developer","Backend Developer","Quality Assurance","Mobile Developer"],[e,t]=Ze.useState(0);Ze.useEffect(()=>{const u=setInterval(()=>{t(c=>(c+1)%n.length)},2e3);return()=>clearInterval(u)},[n.length]);const[i,r]=Ze.useState({x:0,y:0}),[s,o]=Ze.useState(!1),a=Ze.useCallback(u=>{const c=u.clientX/window.innerWidth*20-10,d=u.clientY/window.innerHeight*20-10;r({x:c,y:d})},[]);Ze.useEffect(()=>(o(!0),window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}),[a]);const l=[{icon:Yy,href:"https://github.com/aosy01",label:"GitHub"},{icon:bw,href:"https://www.linkedin.com/in/anno-siregar",label:"LinkedIn"},{icon:nm,href:"mailto:annoderitman@gmail.com",label:"Email"}];return U.jsx("section",{className:"min-h-screen",children:U.jsxs("section",{className:"min-h-screen flex items-start justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden bg-cover bg-center pt-24",style:{backgroundImage:"url('public/images/background.jpg')"},children:[U.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[U.jsx("div",{className:"absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse",style:{transform:`translate(${i.x}px, ${i.y}px)`}}),U.jsx("div",{className:"absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse",style:{transform:`translate(${-i.x}px, ${-i.y}px)`}}),U.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-50"})]}),U.jsx("div",{className:"absolute inset-0 bg-black/70 pointer-events-none"}),U.jsxs("div",{className:"max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10",children:[U.jsx("div",{className:`flex justify-center md:justify-end md:order-2 transition-all duration-1000 ${s?"opacity-100 translate-x-0":"opacity-0 translate-x-12"}`,children:U.jsxs("div",{className:"relative group flex flex-col items-center",children:[U.jsxs("div",{className:"relative w-80 h-100 md:w-80 md:h-96 rounded-3xl overflow-hidden bg-slate-950 p-1 shadow-2xl",children:[U.jsx("div",{className:"absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"}),U.jsxs("div",{className:"relative w-full h-full rounded-3xl overflow-hidden bg-slate-950 backdrop-blur-sm",children:[U.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"}),U.jsx("div",{className:"absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-400/50 rounded-tl-3xl"}),U.jsx("div",{className:"absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-3xl"}),U.jsx("div",{className:"absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-400/50 rounded-bl-3xl"}),U.jsx("div",{className:"absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-400/50 rounded-br-3xl"}),U.jsx("div",{className:"absolute inset-0 flex items-end justify-center overflow-hidden",children:U.jsx("img",{src:"/images/Anno.png",alt:"Anno Deritman Siregar",className:"w-[80%] h-auto object-contain object-bottom group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl",loading:"lazy"})}),U.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/20 pointer-events-none"})]})]}),U.jsxs("a",{href:"https://wa.me/6287816652331",target:"_blank",rel:"noopener noreferrer",className:"mt-8 relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",children:[U.jsx("span",{className:"absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-600 p-[1.5px]",children:U.jsx("span",{className:"flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950"})}),U.jsxs("span",{className:"relative z-10 flex items-center gap-3",children:[U.jsx(nm,{className:"w-5 h-5"}),"Contact Me"]})]})]})}),U.jsxs("div",{className:`space-y-8 transition-all duration-1000 ${s?"opacity-100 -translate-x-0":"opacity-0 -translate-x-12"}`,children:[U.jsxs("div",{className:"space-y-6",children:[U.jsx("h1",{className:"text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",children:U.jsx("span",{className:"bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent",children:"Anno Deritman Siregar"})}),U.jsxs("p",{className:"text-2xl md:text-3xl font-normal text-gray-300",children:["Hello I'm &"," ",U.jsx("span",{className:"font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-fade",children:n[e]},e)]})]}),U.jsxs("div",{className:"flex flex-wrap gap-4 pt-6",children:[U.jsxs("a",{href:"/form/CV_Anno.pdf",target:"_blank",rel:"noopener noreferrer",className:"group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105",children:["Download CV",U.jsx("span",{className:"absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"})]}),l.map((u,c)=>{const d=u.icon;return U.jsxs("a",{href:u.href,target:"_blank",rel:"noopener noreferrer","aria-label":u.label,className:"group relative p-4 rounded-2xl border border-gray-700/50 hover:border-blue-500/70 bg-gray-900/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20",children:[U.jsx(d,{className:"w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors"}),U.jsx("div",{className:"absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all"})]},c)})]})]})]})]})})}function Dr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function $y(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.1
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},ng,yn,Ut,ki=1e8,Tt=1/ki,im=Math.PI*2,Fw=im/4,Ow=0,qy=Math.sqrt,kw=Math.cos,zw=Math.sin,mn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},Yr=function(e){return typeof e=="number"},ig=function(e){return typeof e>"u"},Er=function(e){return typeof e=="object"},ni=function(e){return e!==!1},rg=function(){return typeof window<"u"},mc=function(e){return Wt(e)||mn(e)},Ky=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,Bw=/random\([^)]+\)/g,Vw=/,\s*/g,q_=/(?:-?\.?\d|\.)+/gi,Zy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ea=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qy=/[+-]=-?[.\d]+/,Hw=/[^,'"\[\]\s]+/gi,Gw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,cr,rm,sg,Ai={},Qf={},Jy,eS=function(e){return(Qf=Ka(e,Ai))&&li},og=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},tS=function(e,t){return e&&(Ai[e]=t)&&Qf&&(Qf[e]=t)||Ai},Du=function(){return 0},Ww={suppressEvents:!0,isStart:!0,kill:!1},hf={suppressEvents:!0,kill:!1},Xw={suppressEvents:!0},ag={},Ps=[],sm={},nS,gi={},Sh={},K_=30,pf=[],lg="",ug=function(e){var t=e[0],i,r;if(Er(t)||Wt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=pf.length;r--&&!pf[r].targetTest(t););i=pf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new AS(e[r],i)))||e.splice(r,1);return e},So=function(e){return e._gsap||ug(zi(e))[0]._gsap},iS=function(e,t,i){return(i=e[t])&&Wt(i)?e[t]():ig(i)&&e.getAttribute&&e.getAttribute(t)||i},ii=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Na=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},jw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Jf=function(){var e=Ps.length,t=Ps.slice(0),i,r;for(sm={},Ps.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},cg=function(e){return!!(e._initted||e._startAt||e.add)},rS=function(e,t,i,r){Ps.length&&!yn&&Jf(),e.render(t,i,!!(yn&&t<0&&cg(e))),Ps.length&&!yn&&Jf()},sS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hw).length<2?t:mn(e)?e.trim():e},oS=function(e){return e},Ci=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Yw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ka=function(e,t){for(var i in t)e[i]=t[i];return e},Z_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Er(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ed=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ql=function(e){var t=e.parent||zt,i=e.keyframes?Yw(Dn(e.keyframes)):Ci;if(ni(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},$w=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},aS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Fd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Os=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Mo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},qw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},om=function(e,t,i,r){return e._startAt&&(yn?e._startAt.revert(hf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Kw=function n(e){return!e||e._ts&&n(e.parent)},Q_=function(e){return e._repeat?Za(e._tTime,e=e.duration()+e._rDelay)*e:0},Za=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},td=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Od=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},kd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Od(e),i._dirty||Mo(i,e)),e},lS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=td(e.rawTime(),t),(!t._dur||Xu(0,t.totalDuration(),i)-t._tTime>Tt)&&t.render(i,!0)),Mo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Tt}},mr=function(e,t,i,r){return t.parent&&Os(t),t._start=Ot((Yr(i)?i:i||e!==zt?Li(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),aS(e,t,"_first","_last",e._sort?"_start":0),am(t)||(e._recent=t),r||lS(e,t),e._ts<0&&kd(e,e._tTime),e},uS=function(e,t){return(Ai.ScrollTrigger||og("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},cS=function(e,t,i,r,s){if(dg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&nS!==vi.frame)return Ps.push(e),e._lazy=[s,r],1},Zw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},am=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Qw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Zw(e)&&!(!e._initted&&am(e))||(e._ts<0||e._dp._ts<0)&&!am(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Xu(0,e._tDur,t),c=Za(l,a),e._yoyo&&c&1&&(o=1-o),c!==Za(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||yn||r||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&cS(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Tt:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&om(e,t,i,!0),e._onUpdate&&!i&&Si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Os(e,1),!i&&!yn&&(Si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Jw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Qa=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&kd(e,e._tTime=e._tDur*a),e.parent&&Od(e),i||Mo(e.parent,e),e},J_=function(e){return e instanceof Bn?Mo(e):Qa(e,e._dur)},eT={_start:0,endTime:Du,totalDuration:Du},Li=function n(e,t,i){var r=e.labels,s=e._recent||eT,o=e.duration()>=ki?s.endTime(!1):e._dur,a,l,u;return mn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Dn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jl=function(e,t,i){var r=Yr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},js=function(e,t){return e||e===0?t(e):t},Xu=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!mn(e)||!(t=Gw.exec(e))?"":t[1]},tT=function(e,t,i){return js(i,function(r){return Xu(e,t,r)})},lm=[].slice,fS=function(e,t){return e&&Er(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Er(e[0]))&&!e.nodeType&&e!==cr},nT=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return mn(r)&&!t||fS(r,1)?(s=i).push.apply(s,zi(r)):i.push(r)})||i},zi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):mn(e)&&!i&&(rm||!Ja())?lm.call((t||sg).querySelectorAll(e),0):Dn(e)?nT(e,i):fS(e)?lm.call(e,0):e?[e]:[]},um=function(e){return e=zi(e)[0]||Pu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return zi(t,i.querySelectorAll?i:i===e?Pu("Invalid scope")||sg.createElement("div"):e)}},dS=function(e){return e.sort(function(){return .5-Math.random()})},hS=function(e){if(Wt(e))return e;var t=Er(e)?e:{each:e},i=Eo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return mn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,v,x,y,C,w,E,b,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,ki])[1],!M){for(E=-ki;E<(E=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],h=l?Math.min(M,g)*c-.5:r%M,v=M===ki?0:l?g*d/M-.5:r/M|0,E=0,b=ki,w=0;w<g;w++)x=w%M-h,y=v-(w/M|0),m[w]=C=u?Math.abs(u==="y"?y:x):qy(x*x+y*y),C>E&&(E=C),C<b&&(b=C);r==="random"&&dS(m),m.max=E-b,m.min=b,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Rn(t.amount||t.each)||0,i=i&&g<0?ES(i):i}return g=(m[f]-m.min)/m.max||0,Ot(m.b+(i?i(g):g)*m.v)+m.u}},cm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Yr(i)?0:Rn(i))}},pS=function(e,t){var i=Dn(e),r,s;return!i&&Er(e)&&(r=i=e.radius||ki,e.values?(e=zi(e.values),(s=!Yr(e[0]))&&(r*=r)):e=cm(e.increment)),js(t,i?Wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ki,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Yr(o)?c:c+Rn(o)}:cm(e))},mS=function(e,t,i,r){return js(Dn(e)?!t:i===!0?!!(i=0):!r,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},iT=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},rT=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},sT=function(e,t,i){return _S(e,t,0,1,i)},gS=function(e,t,i){return js(i,function(r){return e[~~t(r)]})},oT=function n(e,t,i){var r=t-e;return Dn(e)?gS(e,n(0,e.length),t):js(i,function(s){return(r+(s-e)%r)%r+e})},aT=function n(e,t,i){var r=t-e,s=r*2;return Dn(e)?gS(e,n(0,e.length-1),t):js(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Lu=function(e){return e.replace(Bw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(Vw);return mS(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},_S=function(e,t,i,r,s){var o=t-e,a=r-i;return js(s,function(l){return i+((l-e)/o*a||0)})},lT=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=mn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=Ka(Dn(e)?[]:{},e));if(!c){for(l in t)fg.call(a,e,l,"get",t[l]);s=function(_){return mg(_,a)||(o?e.p:e)}}}return js(i,s)},ev=function(e,t,i){var r=e.labels,s=ki,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Si=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ps.length&&Jf(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Ul=function(e){return Os(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&Si(e,"onInterrupt"),e},wa,vS=[],xS=function(e){if(e)if(e=!e.name&&e.default||e,rg()||e.headless){var t=e.name,i=Wt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Du,render:mg,add:fg,kill:wT,modifier:ET,rawVars:0},o={targetTest:0,get:0,getSetter:pg,aliases:{},register:0};if(Ja(),e!==r){if(gi[t])return;Ci(r,Ci(ed(e,s),o)),Ka(r.prototype,Ka(s,ed(e,o))),gi[r.prop=t]=r,e.targetTest&&(pf.push(r),ag[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}tS(t,r),e.register&&e.register(li,r,ri)}else vS.push(e)},wt=255,Fl={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},Mh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*wt+.5|0},yS=function(e,t,i){var r=e?Yr(e)?[e>>16,e>>8&wt,e&wt]:0:Fl.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fl[e])r=Fl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&wt,r&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(q_),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Mh(l+1/3,s,o),r[1]=Mh(l,s,o),r[2]=Mh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Zy),i&&r.length<4&&(r[3]=1),r}else r=e.match(q_)||Fl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/wt,o=r[1]/wt,a=r[2]/wt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},SS=function(e){var t=[],i=[],r=-1;return e.split(Ds).forEach(function(s){var o=s.match(Ea)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},tv=function(e,t,i){var r="",s=(e+r).match(Ds),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=yS(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=SS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ds,"1").split(Ea),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ds),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ds=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),uT=/hsl[a]?\(/,MS=function(e){var t=e.join(" "),i;if(Ds.lastIndex=0,Ds.test(t))return i=uT.test(t),e[1]=tv(e[1],i),e[0]=tv(e[0],i,SS(e[1])),!0},Nu,vi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,v=m===!0,x,y,C,w;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,x=C-o,(x>0||v)&&(w=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=x+(x>=s?4:s-x),y=1),v||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](C,f,w,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Jy&&(!rm&&rg()&&(cr=rm=window,sg=cr.document||{},Ai.gsap=li,(cr.gsapVersions||(cr.gsapVersions=[])).push(li.version),eS(Qf||cr.GreenSockGlobals||!cr.gsap&&cr||{}),vS.forEach(xS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Nu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nu=0,u=Du},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,v){var x=h?function(y,C,w,E){m(y,C,w,E),d.remove(x)}:m;return d.remove(m),a[v?"unshift":"push"](x),Ja(),x},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),Ja=function(){return!Nu&&vi.wake()},ut={},cT=/^[\d.\-M][\d.\-,\s]/,fT=/["']/g,dT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(fT,"").trim():+u,r=l.substr(a+1).trim();return t},hT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},pT=function(e){var t=(e+"").split("("),i=ut[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[dT(t[1])]:hT(e).split(",").map(sS)):ut._CE&&cT.test(e)?ut._CE("",e):i},ES=function(e){return function(t){return 1-e(1-t)}},wS=function n(e,t){for(var i=e._first,r;i;)i instanceof Bn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Eo=function(e,t){return e&&(Wt(e)?e:ut[e]||pT(e))||t},Bo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ii(e,function(a){ut[a]=Ai[a]=s,ut[o=a.toLowerCase()]=i;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},TS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Eh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/im*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*zw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:TS(a);return s=im/s,l.config=function(u,c){return n(e,u,c)},l},wh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:TS(i);return r.config=function(s){return n(e,s)},r};ii("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Bo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;Bo("Elastic",Eh("in"),Eh("out"),Eh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Bo("Circ",function(n){return-(qy(1-n*n)-1)});Bo("Sine",function(n){return n===1?1:-kw(n*Fw)+1});Bo("Back",wh("in"),wh("out"),wh());ut.SteppedEase=ut.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Tt;return function(a){return((r*Xu(0,o,a)|0)+s)*i}}};qa.ease=ut["quad.out"];ii("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return lg+=n+","+n+"Params,"});var AS=function(e,t){this.id=Ow++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:iS,this.set=t?t.getSetter:pg},Iu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Qa(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Nu||vi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Qa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ja(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kd(this,i),!s._dp||s.parent||lS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),rS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Q_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Q_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Za(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?td(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Tt?0:this._rts,this.totalTime(Xu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Od(this),qw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&mr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ni(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?td(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Xw);var r=yn;return yn=i,cg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),yn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,J_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,J_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Li(this,i),ni(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,ni(r)),this._dur||(this._zTime=-Tt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Tt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Wt(i)?i:oS,l=function(){var c=r.then;r.then=null,s&&s(),Wt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Ul(this)},n}();Ci(Iu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Bn=function(n){$y(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ni(i.sortChildren),zt&&mr(i.parent||zt,Dr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&uS(Dr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jl(0,arguments,this),this},t.from=function(r,s,o){return Jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,Li(this,o),1),this},t.call=function(r,s,o){return mr(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Zt(r,o,Li(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ql(o).immediateRender=ni(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Ql(a).immediateRender=ni(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,v,x,y,C,w,E;if(this!==zt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,y=this._start,x=this._ts,h=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(c%m),c===l?(g=this._repeat,f=u):(C=Ot(c/m),g=~~C,g&&g===C&&(f=u,g--),f>u&&(f=u)),C=Za(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),w&&g&1&&(f=u-f,E=1),g!==C&&!this._lock){var b=w&&C&1,M=b===(w&&g&1);if(g<C&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Ot(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Si(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;wS(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Jw(this,Ot(a),Ot(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(Si(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-Tt);break}}p=_}else{p=this._last;for(var S=r<0?r:f;p;){if(_=p._prev,(p._act||S<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||yn&&cg(p)),f!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=S?-Tt:Tt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Od(this),this.render(r,s,o);this._onUpdate&&!s&&Si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Os(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Yr(s)||(s=Li(this,s,r)),!(r instanceof Iu)){if(Dn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(mn(r))return this.addLabel(r,s);if(Wt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?mr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ki);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Zt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return mn(r)?this.removeLabel(r):Wt(r)?this.killTweensOf(r):(r.parent===this&&Fd(this,r),r===this._recent&&(this._recent=this._last),Mo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(vi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Li(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||Du,o);return a.data="isPause",this._hasPause=1,mr(this,a,Li(this,r))},t.removePause=function(r){var s=this._first;for(r=Li(this,r);s;)s._start===r&&s.data==="isPause"&&Os(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)_s!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=zi(r),l=this._first,u=Yr(s),c;l;)l instanceof Zt?jw(l._targets,a)&&(u?(!_s||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Li(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Zt.to(o,Ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&Qa(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ci({startAt:{time:Li(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ev(this,Li(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ev(this,Li(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Mo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Mo(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ki,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Qa(o,o===zt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(zt._ts&&(rS(zt,td(r,zt)),nS=vi.frame),vi.frame>=K_){K_+=wi.autoSleep||120;var s=zt._first;if((!s||!s._ts)&&wi.autoSleep&&vi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||vi.sleep()}}},e}(Iu);Ci(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mT=function(e,t,i,r,s,o,a){var l=new ri(this._pt,e,t,0,1,LS,null,s),u=0,c=0,d,f,p,_,g,m,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Lu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(yh)||[];d=yh.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Na(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=yh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Qy.test(r)||h)&&(l.e=0),this._pt=l,l},fg=function(e,t,i,r,s,o,a,l,u,c){Wt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Wt(d)?u?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Wt(d)?u?yT:PS:hg,_;if(mn(r)&&(~r.indexOf("random(")&&(r=Lu(r)),r.charAt(1)==="="&&(_=Na(f,r)+(Rn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||fm)return!isNaN(f*r)&&r!==""?(_=new ri(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?MT:DS,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&og(t,r),mT.call(this,e,t,f,r,p,l||wi.stringFilter,u))},gT=function(e,t,i,r,s){if(Wt(e)&&(e=eu(e,s,t,i,r)),!Er(e)||e.style&&e.nodeType||Dn(e)||Ky(e))return mn(e)?eu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=eu(e[a],s,t,i,r);return o},CS=function(e,t,i,r,s,o){var a,l,u,c;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:gT(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ri(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==wa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},_s,fm,dg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:m,x=e._overwrite==="auto"&&!ng,y=e.timeline,C,w,E,b,M,S,P,F,V,G,Z,H,Y;if(y&&(!f||!s)&&(s="none"),e._ease=Eo(s,qa.ease),e._yEase=d?ES(Eo(d===!0?s:d,qa.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!r.runBackwards,!y||f&&!r.stagger){if(F=m[0]?So(m[0]).harness:0,H=F&&r[F.prop],C=ed(r,ag),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?hf:Ww),g._lazy=0),o){if(Os(e._startAt=Zt.set(m,Ci({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&ni(l),startAt:null,delay:0,onUpdate:u&&function(){return Si(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn||!a&&!p)&&e._startAt.revert(hf),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),E=Ci({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ni(l),immediateRender:a,stagger:0,parent:h},C),H&&(E[F.prop]=H),Os(e._startAt=Zt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(yn?e._startAt.revert(hf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ni(l)||l&&!_,w=0;w<m.length;w++){if(M=m[w],P=M._gsap||ug(m)[w]._gsap,e._ptLookup[w]=G={},sm[P.id]&&Ps.length&&Jf(),Z=v===m?w:v.indexOf(M),F&&(V=new F).init(M,H||C,e,Z,v)!==!1&&(e._pt=b=new ri(e._pt,M,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(I){G[I]=b}),V.priority&&(S=1)),!F||H)for(E in C)gi[E]&&(V=CS(E,C,e,Z,M,v))?V.priority&&(S=1):G[E]=b=fg.call(e,M,E,"get",C[E],Z,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),x&&e._pt&&(_s=e,zt.killTweensOf(M,G,e.globalTime(t)),Y=!e.parent,_s=0),e._pt&&l&&(sm[P.id]=1)}S&&NS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&y.render(ki,!0,!0)},_T=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return fm=1,e.vars[t]="+=0",dg(e,a),fm=0,l?Pu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Xt(i)+Rn(d.e)),d.b&&(d.b=c.s+Rn(d.b))},vT=function(e,t){var i=e[0]?So(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ka({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xT=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Dn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},eu=function(e,t,i,r,s){return Wt(e)?e.call(t,i,r,s):mn(e)&&~e.indexOf("random(")?Lu(e):e},bS=lg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",RS={};ii(bS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return RS[n]=1});var Zt=function(n){$y(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,v=r.parent||zt,x=(Dn(i)||Ky(i)?Yr(i[0]):"length"in r)?[i]:zi(i),y,C,w,E,b,M,S,P;if(a._targets=x.length?ug(x):Pu("GSAP target "+i+" not found. https://gsap.com",!wi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||mc(u)||mc(c)){if(r=a.vars,y=a.timeline=new Bn({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:x}),y.kill(),y.parent=y._dp=Dr(a),y._start=0,f||mc(u)||mc(c)){if(E=x.length,S=f&&hS(f),Er(f))for(b in f)~bS.indexOf(b)&&(P||(P={}),P[b]=f[b]);for(C=0;C<E;C++)w=ed(r,RS),w.stagger=0,h&&(w.yoyoEase=h),P&&Ka(w,P),M=x[C],w.duration=+eu(u,Dr(a),C,M,x),w.delay=(+eu(c,Dr(a),C,M,x)||0)-a._delay,!f&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(M,w,S?S(C,M,x):0),y._ease=ut.none;y.duration()?u=c=0:a.timeline=0}else if(_){Ql(Ci(y.vars.defaults,{ease:"none"})),y._ease=Eo(_.ease||r.ease||"none");var F=0,V,G,Z;if(Dn(_))_.forEach(function(H){return y.to(x,H,">")}),y.duration();else{w={};for(b in _)b==="ease"||b==="easeEach"||xT(b,_[b],w,_.easeEach);for(b in w)for(V=w[b].sort(function(H,Y){return H.t-Y.t}),F=0,C=0;C<V.length;C++)G=V[C],Z={ease:G.e,duration:(G.t-(C?V[C-1].t:0))/100*u},Z[b]=G.v,y.to(x,Z,F),F+=Z.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!ng&&(_s=Dr(a),zt.killTweensOf(x),_s=0),mr(v,Dr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Ot(v._time)&&ni(d)&&Kw(Dr(a))&&v.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-c)||0)),m&&uS(Dr(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Tt&&!c?l:r<Tt?0:r,f,p,_,g,m,h,v,x,y;if(!u)Qw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=Ot(d%g),d===l?(_=this._repeat,f=u):(m=Ot(d/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(y=this._yEase,f=u-f),m=Za(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(x&&this._yEase&&wS(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(cS(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(f/u),this._from&&(this.ratio=v=1-v),!a&&d&&!s&&!m&&(Si(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&om(this,r,s,o),Si(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&om(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Os(this,1),!s&&!(c&&!a)&&(d||a||h)&&(Si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Nu||vi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||dg(this,u),c=this._ease(u/this._dur),_T(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(kd(this,0),this.parent||aS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ul(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,_s&&_s.vars.overwrite!==!0)._first||Ul(this),this.parent&&o!==this.timeline.totalDuration()&&Qa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?zi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&$w(a,l))return s==="all"&&(this._pt=0),Ul(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(g={},ii(s,function(v){return g[v]=1}),s=g),s=vT(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Fd(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Ul(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return zt.killTweensOf(r,s,o)},e}(Iu);Ci(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ii("staggerTo,staggerFrom,staggerFromTo",function(n){Zt[n]=function(){var e=new Bn,t=lm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var hg=function(e,t,i){return e[t]=i},PS=function(e,t,i){return e[t](i)},yT=function(e,t,i,r){return e[t](r.fp,i)},ST=function(e,t,i){return e.setAttribute(t,i)},pg=function(e,t){return Wt(e[t])?PS:ig(e[t])&&e.setAttribute?ST:hg},DS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},MT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},LS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},mg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},ET=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},wT=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Fd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},TT=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},NS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ri=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||DS,this.d=l||this,this.set=u||hg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=TT,this.m=i,this.mt=s,this.tween=r},n}();ii(lg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return ag[n]=1});Ai.TweenMax=Ai.TweenLite=Zt;Ai.TimelineLite=Ai.TimelineMax=Bn;zt=new Bn({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=MS;var wo=[],mf={},AT=[],nv=0,CT=0,Th=function(e){return(mf[e]||AT).map(function(t){return t()})},dm=function(){var e=Date.now(),t=[];e-nv>2&&(Th("matchMediaInit"),wo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=cr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Th("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),nv=e,Th("matchMedia"))},IS=function(){function n(t,i){this.selector=i&&um(i),this.data=[],this._r=[],this.isReverted=!1,this.id=CT++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Wt(i)&&(s=r,r=i,i=Wt);var o=this,a=function(){var u=Ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=um(s)),Ut=o,d=r.apply(o,arguments),Wt(d)&&o._r.push(d),Ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Wt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Bn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Zt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=wo.length;o--;)wo[o].id===this.id&&wo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),bT=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Er(i)||(i={matches:i});var o=new IS(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=cr.matchMedia(i[u]),l&&(wo.indexOf(o)<0&&wo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(dm):l.addEventListener("change",dm)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),nd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return xS(r)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,t){return zt.getTweensOf(e,t)},getProperty:function(e,t,i,r){mn(e)&&(e=zi(e)[0]);var s=So(e||{}).get,o=i?oS:sS;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,u){return o((gi[a]&&gi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=zi(e),e.length>1){var r=e.map(function(c){return li.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=gi[t],a=So(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;wa._pt=0,d.init(e,i?c+i:c,wa,0,[e]),d.render(1,d),wa._pt&&mg(1,wa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=li.to(e,Ci((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return zt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Eo(e.ease,qa.ease)),Z_(qa,e||{})},config:function(e){return Z_(wi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!Ai[a]&&Pu(t+" effect requires "+a+" plugin.")}),Sh[t]=function(a,l,u){return i(zi(a),Ci(l||{},s),u)},o&&(Bn.prototype[t]=function(a,l,u){return this.add(Sh[t](a,Er(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ut[e]=Eo(t)},parseEase:function(e,t){return arguments.length?Eo(e,t):ut},getById:function(e){return zt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Bn(e),r,s;for(i.smoothChildTiming=ni(e.smoothChildTiming),zt.remove(i),i._dp=0,i._time=i._tTime=zt._time,r=zt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&mr(i,r,r._start-r._delay),r=s;return mr(zt,i,0),i},context:function(e,t){return e?new IS(e,t):Ut},matchMedia:function(e){return new bT(e)},matchMediaRefresh:function(){return wo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||dm()},addEventListener:function(e,t){var i=mf[e]||(mf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=mf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:oT,wrapYoyo:aT,distribute:hS,random:mS,snap:pS,normalize:sT,getUnit:Rn,clamp:tT,splitColor:yS,toArray:zi,selector:um,mapRange:_S,pipe:iT,unitize:rT,interpolate:lT,shuffle:dS},install:eS,effects:Sh,ticker:vi,updateRoot:Bn.updateRoot,plugins:gi,globalTimeline:zt,core:{PropTween:ri,globals:tS,Tween:Zt,Timeline:Bn,Animation:Iu,getCache:So,_removeLinkedListItem:Fd,reverting:function(){return yn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return ng=e}}};ii("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nd[n]=Zt[n]});vi.add(Bn.updateRoot);wa=nd.to({},{duration:0});var RT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},PT=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=RT(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Ah=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(mn(s)&&(l={},ii(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}PT(a,s)}}}},li=nd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)yn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ah("roundProps",cm),Ah("modifiers"),Ah("snap",pS))||nd;Zt.version=Bn.version=li.version="3.14.1";Jy=1;rg()&&Ja();ut.Power0;ut.Power1;ut.Power2;ut.Power3;ut.Power4;ut.Linear;ut.Quad;ut.Cubic;ut.Quart;ut.Quint;ut.Strong;ut.Elastic;ut.Back;ut.SteppedEase;ut.Bounce;ut.Sine;ut.Expo;ut.Circ;/*!
 * CSSPlugin 3.14.1
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var iv,vs,Ia,gg,mo,rv,_g,DT=function(){return typeof window<"u"},$r={},ro=180/Math.PI,Ua=Math.PI/180,Go=Math.atan2,sv=1e8,vg=/([A-Z])/g,LT=/(left|right|width|margin|padding|x)/i,NT=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},US=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},FS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kT=function(e,t,i){return e.style[t]=i},zT=function(e,t,i){return e.style.setProperty(t,i)},BT=function(e,t,i){return e._gsap[t]=i},VT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},HT=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},GT=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Bt="transform",si=Bt+"Origin",WT=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in $r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Nr(r,a)}):this.tfm[e]=o.x?o[e]:Nr(r,e),e===si&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Bt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(si,t,"")),e=Bt}(s||t)&&this.props.push(e,t,s[e])},OS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},XT=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(vg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=_g(),(!s||!s.isStart)&&!i[Bt]&&(OS(i),r.zOrigin&&i[si]&&(i[si]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},kS=function(e,t){var i={target:e,props:[],revert:XT,save:WT};return e._gsap||li.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},zS,pm=function(e,t){var i=vs.createElementNS?vs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):vs.createElement(e);return i&&i.style?i:vs.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(vg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,el(t)||t,1)||""},ov="O,Moz,ms,Ms,Webkit".split(","),el=function(e,t,i){var r=t||mo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ov[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ov[o]:"")+e},mm=function(){DT()&&window.document&&(iv=window,vs=iv.document,Ia=vs.documentElement,mo=pm("div")||{style:{}},pm("div"),Bt=el(Bt),si=Bt+"Origin",mo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zS=!!el("perspective"),_g=li.core.reverting,gg=1)},av=function(e){var t=e.ownerSVGElement,i=pm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Ia.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Ia.removeChild(i),s},lv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},BS=function(e){var t,i;try{t=e.getBBox()}catch{t=av(e),i=1}return t&&(t.width||t.height)||i||(t=av(e)),t&&!t.width&&!t.x&&!t.y?{x:+lv(e,["x","cx","x1"])||0,y:+lv(e,["y","cy","y1"])||0,width:0,height:0}:t},VS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&BS(e))},ks=function(e,t){if(t){var i=e.style,r;t in $r&&t!==si&&(t=Bt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(vg,"-$1").toLowerCase())):i.removeAttribute(t)}},xs=function(e,t,i,r,s,o){var a=new ri(e._pt,t,i,0,1,o?FS:US);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},uv={deg:1,rad:1,turn:1},jT={grid:1,flex:1},zs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=mo.style,l=LT.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||uv[r]||uv[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&VS(e),(p||o==="%")&&($r[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Xt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===vs||!g.appendChild)&&(g=vs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===vi.time&&!m.uncache)return Xt(s/m.width*d);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=d+r,_=e[c],v?e.style[t]=v:ks(e,t)}else(p||o==="%")&&!jT[Mi(g,"display")]&&(a.position=Mi(e,"position")),g===e&&(a.position="static"),g.appendChild(mo),_=mo[c],g.removeChild(mo),a.position="absolute";return l&&p&&(m=So(g),m.time=vi.time,m.width=g[c]),Xt(f?_*s/d:_&&s?d/_*s:0)},Nr=function(e,t,i,r){var s;return gg||mm(),t in _r&&t!=="transform"&&(t=_r[t],~t.indexOf(",")&&(t=t.split(",")[0])),$r[t]&&t!=="transform"?(s=Fu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rd(Mi(e,si))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=id[t]&&id[t](e,t,i)||Mi(e,t)||iS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zs(e,t,s,i)+i:s},YT=function(e,t,i,r){if(!i||i==="none"){var s=el(t,e,1),o=s&&Mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var a=new ri(this._pt,e.style,t,0,1,LS),l=0,u=0,c,d,f,p,_,g,m,h,v,x,y,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Mi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Mi(e,t)||r,g?e.style[t]=g:ks(e,t)),c=[i,r],MS(c),i=c[0],r=c[1],f=i.match(Ea)||[],C=r.match(Ea)||[],C.length){for(;d=Ea.exec(r);)m=d[0],v=r.substring(l,d.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=Na(p,m)+y),h=parseFloat(m),x=m.substr((h+"").length),l=Ea.lastIndex-x.length,x||(x=x||wi.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=zs(e,t,g,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?FS:US;return Qy.test(r)&&(a.e=0),this._pt=a,a},cv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$T=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=cv[i]||i,t[1]=cv[r]||r,t.join(" ")},qT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],$r[a]&&(l=1,a=a==="transformOrigin"?si:Bt),ks(i,a);l&&(ks(i,Bt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fu(i,1),o.uncache=1,OS(r)))}},id={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ri(e._pt,t,i,0,0,qT);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Uu=[1,0,0,1,0,0],HS={},GS=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fv=function(e){var t=Mi(e,Bt);return GS(t)?Uu:t.substr(7).match(Zy).map(Xt)},xg=function(e,t){var i=e._gsap||So(e),r=e.style,s=fv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Uu:s):(s===Uu&&!e.offsetParent&&e!==Ia&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Ia.appendChild(e)),s=fv(e),l?r.display=l:ks(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ia.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},gm=function(e,t,i,r,s,o){var a=e._gsap,l=s||xg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],v=l[5],x=t.split(" "),y=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,E,b,M;i?l!==Uu&&(E=p*m-_*g)&&(b=y*(m/E)+C*(-g/E)+(g*v-m*h)/E,M=y*(-_/E)+C*(p/E)-(p*v-_*h)/E,y=b,C=M):(w=BS(e),y=w.x+(~x[0].indexOf("%")?y/100*w.width:y),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(h=y-u,v=C-c,a.xOffset=d+(h*p+v*g)-h,a.yOffset=f+(h*_+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[si]="0px 0px",o&&(xs(o,a,"xOrigin",u,y),xs(o,a,"yOrigin",c,C),xs(o,a,"xOffset",d,a.xOffset),xs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+C)},Fu=function(e,t){var i=e._gsap||new AS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Mi(e,si)||"0",c,d,f,p,_,g,m,h,v,x,y,C,w,E,b,M,S,P,F,V,G,Z,H,Y,I,Q,R,oe,Se,Ge,q,se;return c=d=f=g=m=h=v=x=y=0,p=_=1,i.svg=!!(e.getCTM&&VS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Bt]!=="none"?l[Bt]:"")),r.scale=r.rotate=r.translate="none"),E=xg(e,i.svg),i.svg&&(i.uncache?(I=e.getBBox(),u=i.xOrigin-I.x+"px "+(i.yOrigin-I.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),gm(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,E)),C=i.xOrigin||0,w=i.yOrigin||0,E!==Uu&&(P=E[0],F=E[1],V=E[2],G=E[3],c=Z=E[4],d=H=E[5],E.length===6?(p=Math.sqrt(P*P+F*F),_=Math.sqrt(G*G+V*V),g=P||F?Go(F,P)*ro:0,v=V||G?Go(V,G)*ro+g:0,v&&(_*=Math.abs(Math.cos(v*Ua))),i.svg&&(c-=C-(C*P+w*V),d-=w-(C*F+w*G))):(se=E[6],Ge=E[7],R=E[8],oe=E[9],Se=E[10],q=E[11],c=E[12],d=E[13],f=E[14],b=Go(se,Se),m=b*ro,b&&(M=Math.cos(-b),S=Math.sin(-b),Y=Z*M+R*S,I=H*M+oe*S,Q=se*M+Se*S,R=Z*-S+R*M,oe=H*-S+oe*M,Se=se*-S+Se*M,q=Ge*-S+q*M,Z=Y,H=I,se=Q),b=Go(-V,Se),h=b*ro,b&&(M=Math.cos(-b),S=Math.sin(-b),Y=P*M-R*S,I=F*M-oe*S,Q=V*M-Se*S,q=G*S+q*M,P=Y,F=I,V=Q),b=Go(F,P),g=b*ro,b&&(M=Math.cos(b),S=Math.sin(b),Y=P*M+F*S,I=Z*M+H*S,F=F*M-P*S,H=H*M-Z*S,P=Y,Z=I),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Xt(Math.sqrt(P*P+F*F+V*V)),_=Xt(Math.sqrt(H*H+se*se)),b=Go(Z,H),v=Math.abs(b)>2e-4?b*ro:0,y=q?1/(q<0?-q:q):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!GS(Mi(e,Bt)),Y&&e.setAttribute("transform",Y))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Xt(p),i.scaleY=Xt(_),i.rotation=Xt(g)+a,i.rotationX=Xt(m)+a,i.rotationY=Xt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[si]=rd(u)),i.xOffset=i.yOffset=0,i.force3D=wi.force3D,i.renderTransform=i.svg?ZT:zS?WS:KT,i.uncache=0,i},rd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ch=function(e,t,i){var r=Rn(t);return Xt(parseFloat(t)+parseFloat(zs(e,"x",i+"px",r)))+r},KT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,WS(e,t)},$s="0deg",Sl="0px",qs=") ",WS=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,y="",C=h==="auto"&&e&&e!==1||h===!0;if(x&&(d!==$s||c!==$s)){var w=parseFloat(c)*Ua,E=Math.sin(w),b=Math.cos(w),M;w=parseFloat(d)*Ua,M=Math.cos(w),o=Ch(v,o,E*M*-x),a=Ch(v,a,-Math.sin(w)*-x),l=Ch(v,l,b*M*-x+x)}m!==Sl&&(y+="perspective("+m+qs),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(C||o!==Sl||a!==Sl||l!==Sl)&&(y+=l!==Sl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+qs),u!==$s&&(y+="rotate("+u+qs),c!==$s&&(y+="rotateY("+c+qs),d!==$s&&(y+="rotateX("+d+qs),(f!==$s||p!==$s)&&(y+="skew("+f+", "+p+qs),(_!==1||g!==1)&&(y+="scale("+_+", "+g+qs),v.style[Bt]=y||"translate(0, 0)"},ZT=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),y=parseFloat(a),C,w,E,b,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ua,u*=Ua,C=Math.cos(l)*d,w=Math.sin(l)*d,E=Math.sin(l-u)*-f,b=Math.cos(l-u)*f,u&&(c*=Ua,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,b*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,w*=M)),C=Xt(C),w=Xt(w),E=Xt(E),b=Xt(b)):(C=d,b=f,w=E=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=zs(p,"x",o,"px"),y=zs(p,"y",a,"px")),(_||g||m||h)&&(x=Xt(x+_-(_*C+g*E)+m),y=Xt(y+g-(_*w+g*b)+h)),(r||s)&&(M=p.getBBox(),x=Xt(x+r/100*M.width),y=Xt(y+s/100*M.height)),M="matrix("+C+","+w+","+E+","+b+","+x+","+y+")",p.setAttribute("transform",M),v&&(p.style[Bt]=M)},QT=function(e,t,i,r,s){var o=360,a=mn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ro:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*sv)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*sv)%o-~~(u/o)*o)),e._pt=f=new ri(e._pt,t,i,r,u,IT),f.e=c,f.u="deg",e._props.push(i),f},dv=function(e,t){for(var i in t)e[i]=t[i];return e},JT=function(e,t,i){var r=dv({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Bt]=t,a=Fu(i,1),ks(i,Bt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Bt],o[Bt]=t,a=Fu(i,1),o[Bt]=u);for(l in $r)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),_=Rn(c),d=p!==_?zs(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new ri(e._pt,a,l,d,f-d,hm),e._pt.u=_||0,e._props.push(l));dv(a,r)};ii("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});id[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return Nr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var XS={name:"css",register:mm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,v,x,y,C,w,E,b,M;gg||mm(),this.styles=this.styles||kS(e),b=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(gi[g]&&CS(g,t,i,r,e,s)))){if(p=typeof c,_=id[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Lu(c)),_)_(this,e,g,c,i)&&(E=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ds.lastIndex=0,Ds.test(u)||(m=Rn(u),h=Rn(c),h?m!==h&&(u=zs(e,g,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),b.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],mn(u)&&~u.indexOf("random(")&&(u=Lu(u)),Rn(u+"")||u==="auto"||(u+=wi.units[g]||Rn(Nr(e,g))||""),(u+"").charAt(1)==="="&&(u=Nr(e,g))):u=Nr(e,g),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),d=parseFloat(c),g in _r&&(g==="autoAlpha"&&(f===1&&Nr(e,"visibility")==="hidden"&&d&&(f=0),b.push("visibility",0,a.visibility),xs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=_r[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in $r,x){if(this.styles.save(g),M=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Mi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=c,c=Mi(e,"perspective"),S?e.style.perspective=S:ks(e,"perspective")}d=parseFloat(c)}if(y||(C=e._gsap,C.renderTransform&&!t.parseTransform||Fu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,y=this._pt=new ri(this._pt,a,Bt,0,1,C.renderTransform,C,0,-1),y.dep=1),g==="scale")this._pt=new ri(this._pt,C,"scaleY",C.scaleY,(v?Na(C.scaleY,v+d):d)-C.scaleY||0,hm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(si,0,a[si]),c=$T(c),C.svg?gm(e,c,0,w,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&xs(this,C,"zOrigin",C.zOrigin,h),xs(this,a,g,rd(u),rd(c)));continue}else if(g==="svgOrigin"){gm(e,c,1,w,0,this);continue}else if(g in HS){QT(this,C,g,f,v?Na(f,v+c):c);continue}else if(g==="smoothOrigin"){xs(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){JT(this,c,e);continue}}else g in a||(g=el(g)||g);if(x||(d||d===0)&&(f||f===0)&&!NT.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=Rn(c)||(g in wi.units?wi.units[g]:m),m!==h&&(f=zs(e,g,u,h)),this._pt=new ri(this._pt,x?C:a,g,f,(v?Na(f,v+d):d)-f,!x&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?OT:hm),this._pt.u=h||0,x&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=FT):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=UT);else if(g in a)YT.call(this,e,g,u,v?v+c:c);else if(g in e)this.add(e,g,u||e[g],v?v+c:c,r,s);else if(g!=="parseTransform"){og(g,c);continue}x||(g in a?b.push(g,0,a[g]):typeof e[g]=="function"?b.push(g,2,e[g]()):b.push(g,1,u||e[g])),o.push(g)}}E&&NS(this)},render:function(e,t){if(t.tween._time||!_g())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Nr,aliases:_r,getSetter:function(e,t,i){var r=_r[t];return r&&r.indexOf(",")<0&&(t=r),t in $r&&t!==si&&(e._gsap.x||Nr(e,"x"))?i&&rv===i?t==="scale"?VT:BT:(rv=i||{})&&(t==="scale"?HT:GT):e.style&&!ig(e.style[t])?kT:~t.indexOf("-")?zT:pg(e,t)},core:{_removeProperty:ks,_getMatrix:xg}};li.utils.checkPrefix=el;li.core.getStyleSaver=kS;(function(n,e,t,i){var r=ii(n+","+e+","+t,function(s){$r[s]=1});ii(e,function(s){wi.units[s]="deg",HS[s]=1}),_r[r[13]]=n+","+e,ii(i,function(s){var o=s.split(":");_r[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ii("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){wi.units[n]="px"});li.registerPlugin(XS);var tu=li.registerPlugin(XS)||li;tu.core.Tween;function e3(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function t3(n,e,t){return e&&e3(n.prototype,e),n}/*!
 * Observer 3.14.1
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vn,gf,xi,ys,Ss,Fa,jS,so,nu,YS,kr,Qi,$S,qS=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},KS=1,Ta=[],rt=[],Mr=[],iu=Date.now,_m=function(e,t){return t},n3=function(){var e=nu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,Mr),rt=i,Mr=r,_m=function(o,a){return t[o](a)}},Ls=function(e,t){return~Mr.indexOf(e)&&Mr[Mr.indexOf(e)+1][t]},ru=function(e){return!!~YS.indexOf(e)},In=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Nn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},gc="scrollLeft",_c="scrollTop",vm=function(){return kr&&kr.isPressed||rt.cache++},sd=function(e,t){var i=function r(s){if(s||s===0){KS&&(xi.history.scrollRestoration="manual");var o=kr&&kr.isPressed;s=r.v=Math.round(s)||(kr&&kr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&_m("ss",s)}else(t||rt.cache!==r.cacheID||_m("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Vn={s:gc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sd(function(n){return arguments.length?xi.scrollTo(n,sn.sc()):xi.pageXOffset||ys[gc]||Ss[gc]||Fa[gc]||0})},sn={s:_c,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:sd(function(n){return arguments.length?xi.scrollTo(Vn.sc(),n):xi.pageYOffset||ys[_c]||Ss[_c]||Fa[_c]||0})},$n=function(e,t){return(t&&t._ctx&&t._ctx.selector||vn.utils.toArray)(e)[0]||(typeof e=="string"&&vn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},i3=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Bs=function(e,t){var i=t.s,r=t.sc;ru(e)&&(e=ys.scrollingElement||Ss);var s=rt.indexOf(e),o=r===sn.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||In(e,"scroll",vm);var a=rt[s+o],l=a||(rt[s+o]=sd(Ls(e,i),!0)||(ru(e)?r:sd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=vn.getProperty(e,"scrollBehavior")==="smooth"),l},xm=function(e,t,i){var r=e,s=e,o=iu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=iu();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=iu();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},Ml=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},hv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},ZS=function(){nu=vn.core.globals().ScrollTrigger,nu&&nu.core&&n3()},QS=function(e){return vn=e||qS(),!gf&&vn&&typeof document<"u"&&document.body&&(xi=window,ys=document,Ss=ys.documentElement,Fa=ys.body,YS=[xi,ys,Ss,Fa],vn.utils.clamp,$S=vn.core.context||function(){},so="onpointerenter"in Fa?"pointer":"mouse",jS=Yt.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Qi=Yt.eventTypes=("ontouchstart"in Ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return KS=0},500),ZS(),gf=1),gf};Vn.op=sn;rt.cache=0;var Yt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){gf||QS(vn)||console.warn("Please gsap.registerPlugin(Observer)"),nu||ZS();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,v=i.onDrag,x=i.onPress,y=i.onRelease,C=i.onRight,w=i.onLeft,E=i.onUp,b=i.onDown,M=i.onChangeX,S=i.onChangeY,P=i.onChange,F=i.onToggleX,V=i.onToggleY,G=i.onHover,Z=i.onHoverEnd,H=i.onMove,Y=i.ignoreCheck,I=i.isNormalizer,Q=i.onGestureStart,R=i.onGestureEnd,oe=i.onWheel,Se=i.onEnable,Ge=i.onDisable,q=i.onClick,se=i.scrollSpeed,he=i.capture,fe=i.allowClicks,be=i.lockAxis,Ne=i.onLockAxis;this.target=a=$n(a)||Ss,this.vars=i,p&&(p=vn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,se=se||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(xi.getComputedStyle(Fa).lineHeight)||22);var We,Qe,N,Ue,ze,Ye,Me,j=this,Ae=0,Oe=0,L=i.passive||!c&&i.passive!==!1,T=Bs(a,Vn),$=Bs(a,sn),J=T(),D=$(),O=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Qi[0]==="pointerdown",re=ru(a),ee=a.ownerDocument||ys,ae=[0,0,0],ye=[0,0,0],le=0,me=function(){return le=iu()},Pe=function(De,ct){return(j.event=De)&&p&&i3(De.target,p)||ct&&O&&De.pointerType!=="touch"||Y&&Y(De,ct)},Be=function(){j._vx.reset(),j._vy.reset(),Qe.pause(),d&&d(j)},ge=function(){var De=j.deltaX=hv(ae),ct=j.deltaY=hv(ye),pe=Math.abs(De)>=r,Xe=Math.abs(ct)>=r;P&&(pe||Xe)&&P(j,De,ct,ae,ye),pe&&(C&&j.deltaX>0&&C(j),w&&j.deltaX<0&&w(j),M&&M(j),F&&j.deltaX<0!=Ae<0&&F(j),Ae=j.deltaX,ae[0]=ae[1]=ae[2]=0),Xe&&(b&&j.deltaY>0&&b(j),E&&j.deltaY<0&&E(j),S&&S(j),V&&j.deltaY<0!=Oe<0&&V(j),Oe=j.deltaY,ye[0]=ye[1]=ye[2]=0),(Ue||N)&&(H&&H(j),N&&(m&&N===1&&m(j),v&&v(j),N=0),Ue=!1),Ye&&!(Ye=!1)&&Ne&&Ne(j),ze&&(oe(j),ze=!1),We=0},He=function(De,ct,pe){ae[pe]+=De,ye[pe]+=ct,j._vx.update(De),j._vy.update(ct),u?We||(We=requestAnimationFrame(ge)):ge()},$e=function(De,ct){be&&!Me&&(j.axis=Me=Math.abs(De)>Math.abs(ct)?"x":"y",Ye=!0),Me!=="y"&&(ae[2]+=De,j._vx.update(De,!0)),Me!=="x"&&(ye[2]+=ct,j._vy.update(ct,!0)),u?We||(We=requestAnimationFrame(ge)):ge()},pt=function(De){if(!Pe(De,1)){De=Ml(De,c);var ct=De.clientX,pe=De.clientY,Xe=ct-j.x,Fe=pe-j.y,je=j.isDragging;j.x=ct,j.y=pe,(je||(Xe||Fe)&&(Math.abs(j.startX-ct)>=s||Math.abs(j.startY-pe)>=s))&&(N||(N=je?2:1),je||(j.isDragging=!0),$e(Xe,Fe))}},z=j.onPress=function(Ve){Pe(Ve,1)||Ve&&Ve.button||(j.axis=Me=null,Qe.pause(),j.isPressed=!0,Ve=Ml(Ve),Ae=Oe=0,j.startX=j.x=Ve.clientX,j.startY=j.y=Ve.clientY,j._vx.reset(),j._vy.reset(),In(I?a:ee,Qi[1],pt,L,!0),j.deltaX=j.deltaY=0,x&&x(j))},te=j.onRelease=function(Ve){if(!Pe(Ve,1)){Nn(I?a:ee,Qi[1],pt,!0);var De=!isNaN(j.y-j.startY),ct=j.isDragging,pe=ct&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),Xe=Ml(Ve);!pe&&De&&(j._vx.reset(),j._vy.reset(),c&&fe&&vn.delayedCall(.08,function(){if(iu()-le>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(ee.createEvent){var Fe=ee.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,xi,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(Fe)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,d&&ct&&!I&&Qe.restart(!0),N&&ge(),h&&ct&&h(j),y&&y(j,pe)}},ne=function(De){return De.touches&&De.touches.length>1&&(j.isGesturing=!0)&&Q(De,j.isDragging)},ie=function(){return(j.isGesturing=!1)||R(j)},de=function(De){if(!Pe(De)){var ct=T(),pe=$();He((ct-J)*se,(pe-D)*se,1),J=ct,D=pe,d&&Qe.restart(!0)}},Le=function(De){if(!Pe(De)){De=Ml(De,c),oe&&(ze=!0);var ct=(De.deltaMode===1?l:De.deltaMode===2?xi.innerHeight:1)*_;He(De.deltaX*ct,De.deltaY*ct,0),d&&!I&&Qe.restart(!0)}},Ke=function(De){if(!Pe(De)){var ct=De.clientX,pe=De.clientY,Xe=ct-j.x,Fe=pe-j.y;j.x=ct,j.y=pe,Ue=!0,d&&Qe.restart(!0),(Xe||Fe)&&$e(Xe,Fe)}},Mt=function(De){j.event=De,G(j)},Et=function(De){j.event=De,Z(j)},at=function(De){return Pe(De)||Ml(De,c)&&q(j)};Qe=j._dc=vn.delayedCall(f||.25,Be).pause(),j.deltaX=j.deltaY=0,j._vx=xm(0,50,!0),j._vy=xm(0,50,!0),j.scrollX=T,j.scrollY=$,j.isDragging=j.isGesturing=j.isPressed=!1,$S(this),j.enable=function(Ve){return j.isEnabled||(In(re?ee:a,"scroll",vm),o.indexOf("scroll")>=0&&In(re?ee:a,"scroll",de,L,he),o.indexOf("wheel")>=0&&In(a,"wheel",Le,L,he),(o.indexOf("touch")>=0&&jS||o.indexOf("pointer")>=0)&&(In(a,Qi[0],z,L,he),In(ee,Qi[2],te),In(ee,Qi[3],te),fe&&In(a,"click",me,!0,!0),q&&In(a,"click",at),Q&&In(ee,"gesturestart",ne),R&&In(ee,"gestureend",ie),G&&In(a,so+"enter",Mt),Z&&In(a,so+"leave",Et),H&&In(a,so+"move",Ke)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=Ue=N=!1,j._vx.reset(),j._vy.reset(),J=T(),D=$(),Ve&&Ve.type&&z(Ve),Se&&Se(j)),j},j.disable=function(){j.isEnabled&&(Ta.filter(function(Ve){return Ve!==j&&ru(Ve.target)}).length||Nn(re?ee:a,"scroll",vm),j.isPressed&&(j._vx.reset(),j._vy.reset(),Nn(I?a:ee,Qi[1],pt,!0)),Nn(re?ee:a,"scroll",de,he),Nn(a,"wheel",Le,he),Nn(a,Qi[0],z,he),Nn(ee,Qi[2],te),Nn(ee,Qi[3],te),Nn(a,"click",me,!0),Nn(a,"click",at),Nn(ee,"gesturestart",ne),Nn(ee,"gestureend",ie),Nn(a,so+"enter",Mt),Nn(a,so+"leave",Et),Nn(a,so+"move",Ke),j.isEnabled=j.isPressed=j.isDragging=!1,Ge&&Ge(j))},j.kill=j.revert=function(){j.disable();var Ve=Ta.indexOf(j);Ve>=0&&Ta.splice(Ve,1),kr===j&&(kr=0)},Ta.push(j),I&&ru(a)&&(kr=j),j.enable(g)},t3(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Yt.version="3.14.1";Yt.create=function(n){return new Yt(n)};Yt.register=QS;Yt.getAll=function(){return Ta.slice()};Yt.getById=function(n){return Ta.filter(function(e){return e.vars.id===n})[0]};qS()&&vn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.14.1
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,ua,it,bt,_i,_t,yg,od,Ou,su,Ol,vc,An,zd,ym,kn,pv,mv,ca,JS,bh,eM,Fn,Sm,tM,nM,us,Mm,Sg,Oa,Mg,ou,Em,Rh,xc=1,Cn=Date.now,Ph=Cn(),Gi=0,kl=0,gv=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},_v=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},r3=function n(){return kl&&requestAnimationFrame(n)},vv=function(){return zd=1},xv=function(){return zd=0},fr=function(e){return e},zl=function(e){return Math.round(e*1e5)/1e5||0},iM=function(){return typeof window<"u"},rM=function(){return Ce||iM()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},Io=function(e){return!!~yg.indexOf(e)},sM=function(e){return(e==="Height"?Mg:it["inner"+e])||_i["client"+e]||_t["client"+e]},oM=function(e){return Ls(e,"getBoundingClientRect")||(Io(e)?function(){return Sf.width=it.innerWidth,Sf.height=Mg,Sf}:function(){return Ir(e)})},s3=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Ls(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?sM(s):e["client"+s])||0}},o3=function(e,t){return!t||~Mr.indexOf(e)?oM(e):function(){return Sf}},vr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Ls(e,i))?o()-oM(e)()[s]:Io(e)?(_i[i]||_t[i])-sM(r):e[i]-e["offset"+r])},yc=function(e,t){for(var i=0;i<ca.length;i+=3)(!t||~t.indexOf(ca[i+1]))&&e(ca[i],ca[i+1],ca[i+2])},mi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Bl=function(e){return typeof e=="number"},oo=function(e){return typeof e=="object"},El=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Dh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},Wo=Math.abs,aM="left",lM="top",Eg="right",wg="bottom",To="width",Ao="height",au="Right",lu="Left",uu="Top",cu="Bottom",Kt="padding",Ui="margin",tl="Width",Tg="Height",nn="px",Fi=function(e){return it.getComputedStyle(e)},a3=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},yv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ir=function(e,t){var i=t&&Fi(e)[ym]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},ad=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},uM=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},l3=function(e){return function(t){return Ce.utils.snap(uM(e),t)}},Ag=function(e){var t=Ce.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},u3=function(e){return function(t,i){return Ag(uM(e))(t,i.direction)}},Sc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},dn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},fn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Mc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Sv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ec={toggleActions:"play",anticipatePin:0},ld={top:0,left:0,center:.5,bottom:1,right:1},_f=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ld?ld[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},wc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=bt.createElement("div"),g=Io(i)||Ls(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?_t:i,v=e.indexOf("start")!==-1,x=v?u:c,y="border-color:"+x+";font-size:"+d+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===sn?Eg:wg)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],vf(_,0,r,v),_},vf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+tl]=1,s["border"+a+tl]=0,s[i.p]=t+"px",Ce.set(e,s)},tt=[],wm={},ku,Mv=function(){return Cn()-Gi>34&&(ku||(ku=requestAnimationFrame(Vr)))},Xo=function(){(!Fn||!Fn.isPressed||Fn.startX>_t.clientWidth)&&(rt.cache++,Fn?ku||(ku=requestAnimationFrame(Vr)):Vr(),Gi||Fo("scrollStart"),Gi=Cn())},Lh=function(){nM=it.innerWidth,tM=it.innerHeight},Vl=function(e){rt.cache++,(e===!0||!An&&!eM&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Sm||nM!==it.innerWidth||Math.abs(it.innerHeight-tM)>it.innerHeight*.25))&&od.restart(!0)},Uo={},c3=[],cM=function n(){return fn(st,"scrollEnd",n)||go(!0)},Fo=function(e){return Uo[e]&&Uo[e].map(function(t){return t()})||c3},hi=[],fM=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},dM=function(){return rt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},Cg=function(e,t){var i;for(kn=0;kn<tt.length;kn++)i=tt[kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));ou=!0,t&&fM(t),t||Fo("revert")},hM=function(e,t){rt.cache++,(t||!zn)&&rt.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(it.history.scrollRestoration=Sg=e)},zn,Co=0,Ev,f3=function(){if(Ev!==Co){var e=Ev=Co;requestAnimationFrame(function(){return e===Co&&go(!0)})}},pM=function(){_t.appendChild(Oa),Mg=!Fn&&Oa.offsetHeight||it.innerHeight,_t.removeChild(Oa)},wv=function(e){return Ou(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},go=function(e,t){if(_i=bt.documentElement,_t=bt.body,yg=[it,bt,_i,_t],Gi&&!e&&!ou){dn(st,"scrollEnd",cM);return}pM(),zn=st.isRefreshing=!0,ou||dM();var i=Fo("refreshInit");JS&&st.sort(),t||Cg(),rt.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),tt.slice(0).forEach(function(r){return r.refresh()}),ou=!1,tt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Em=1,wv(!0),tt.forEach(function(r){var s=vr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),wv(!1),Em=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),hM(Sg,1),od.pause(),Co++,zn=2,Vr(2),tt.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=st.isRefreshing=!1,Fo("refresh")},Tm=0,xf=1,fu,Vr=function(e){if(e===2||!zn&&!ou){st.isUpdating=!0,fu&&fu.update(0);var t=tt.length,i=Cn(),r=i-Ph>=50,s=t&&tt[0].scroll();if(xf=Tm>s?-1:1,zn||(Tm=s),r&&(Gi&&!zd&&i-Gi>200&&(Gi=0,Fo("scrollEnd")),Ol=Ph,Ph=i),xf<0){for(kn=t;kn-- >0;)tt[kn]&&tt[kn].update(0,r);xf=1}else for(kn=0;kn<t;kn++)tt[kn]&&tt[kn].update(0,r);st.isUpdating=!1}ku=0},Am=[aM,lM,wg,Eg,Ui+cu,Ui+au,Ui+uu,Ui+lu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yf=Am.concat([To,Ao,"boxSizing","max"+tl,"max"+Tg,"position",Ui,Kt,Kt+uu,Kt+au,Kt+cu,Kt+lu]),d3=function(e,t,i){ka(i);var r=e._gsap;if(r.spacerIsNative)ka(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Nh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Am.length,o=t.style,a=e.style,l;s--;)l=Am[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[wg]=a[Eg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[To]=ad(e,Vn)+nn,o[Ao]=ad(e,sn)+nn,o[Kt]=a[Ui]=a[lM]=a[aM]="0",ka(r),a[To]=a["max"+tl]=i[To],a[Ao]=a["max"+Tg]=i[Ao],a[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},h3=/([A-Z])/g,ka=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(h3,"-$1").toLowerCase())}},Tc=function(e){for(var t=yf.length,i=e.style,r=[],s=0;s<t;s++)r.push(yf[s],i[yf[s]]);return r.t=e,r},p3=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Sf={left:0,top:0},Tv=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){Pn(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?_f("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Bl(e))p&&(e=Ce.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&vf(a,i,r,!0);else{Pn(t)&&(t=t(l));var x=(e||"0").split(" "),y,C,w,E;v=$n(t,l)||_t,y=Ir(v)||{},(!y||!y.left&&!y.top)&&Fi(v).display==="none"&&(E=v.style.display,v.style.display="block",y=Ir(v),E?v.style.display=E:v.style.removeProperty("display")),C=_f(x[0],y[r.d]),w=_f(x[1]||"0",i),e=y[r.p]-u[r.p]-c+C+s-w,a&&vf(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var b=e+i,M=o._isStart;m="scroll"+r.d2,vf(o,b,r,M&&b>20||!M&&(d?Math.max(_t[m],_i[m]):o.parentNode[m])<=b+1),d&&(u=Ir(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+nn))}return p&&v&&(m=Ir(v),p.seek(f),h=Ir(v),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},m3=/(webkit|moz|length|cssText|inset)/i,Av=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===_t){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!m3.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},mM=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Ac=function(e,t,i){var r={};r[t.p]="+="+i,Ce.set(e,r)},Cv=function(e,t){var i=Bs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=mM(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Vr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Ce.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},dn(e,"wheel",i.wheelHandler),st.isTouch&&dn(e,"touchmove",i.wheelHandler),s},st=function(){function n(t,i){ua||n.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Mm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!kl){this.update=this.refresh=this.kill=fr;return}i=yv(mi(i)||Bl(i)||i.nodeType?{trigger:i}:i,Ec);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,v=s.onSnapComplete,x=s.once,y=s.snap,C=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,b=s.fastScrollEnd,M=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Vn:sn,P=!d&&d!==0,F=$n(i.scroller||it),V=Ce.core.getCache(F),G=Io(F),Z=("pinType"in i?i.pinType:Ls(F,"pinType")||G&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],Y=P&&i.toggleActions.split(" "),I="markers"in i?i.markers:Ec.markers,Q=G?0:parseFloat(Fi(F)["border"+S.p2+tl])||0,R=this,oe=i.onRefreshInit&&function(){return i.onRefreshInit(R)},Se=s3(F,G,S),Ge=o3(F,G),q=0,se=0,he=0,fe=Bs(F,S),be,Ne,We,Qe,N,Ue,ze,Ye,Me,j,Ae,Oe,L,T,$,J,D,O,re,ee,ae,ye,le,me,Pe,Be,ge,He,$e,pt,z,te,ne,ie,de,Le,Ke,Mt,Et;if(R._startClamp=R._endClamp=!1,R._dir=S,m*=45,R.scroller=F,R.scroll=E?E.time.bind(E):fe,Qe=fe(),R.vars=i,r=r||i.animation,"refreshPriority"in i&&(JS=1,i.refreshPriority===-9999&&(fu=R)),V.tweenScroll=V.tweenScroll||{top:Cv(F,sn),left:Cv(F,Vn)},R.tweenTo=be=V.tweenScroll[S.p],R.scrubDuration=function(pe){ne=Bl(pe)&&pe,ne?te?te.duration(pe):te=Ce.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ne,paused:!0,onComplete:function(){return h&&h(R)}}):(te&&te.progress(1).kill(),te=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(d),pt=0,l||(l=r.vars.id)),y&&((!oo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in _t.style&&Ce.set(G?[_t,_i]:F,{scrollBehavior:"auto"}),rt.forEach(function(pe){return Pn(pe)&&pe.target===(G?bt.scrollingElement||_i:F)&&(pe.smooth=!1)}),We=Pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?l3(r):y.snapTo==="labelsDirectional"?u3(r):y.directional!==!1?function(pe,Xe){return Ag(y.snapTo)(pe,Cn()-se<500?0:Xe.direction)}:Ce.utils.snap(y.snapTo),ie=y.duration||{min:.1,max:2},ie=oo(ie)?su(ie.min,ie.max):su(ie,ie),de=Ce.delayedCall(y.delay||ne/2||.1,function(){var pe=fe(),Xe=Cn()-se<500,Fe=be.tween;if((Xe||Math.abs(R.getVelocity())<10)&&!Fe&&!zd&&q!==pe){var je=(pe-Ue)/T,Ft=r&&!P?r.totalProgress():je,nt=Xe?0:(Ft-z)/(Cn()-Ol)*1e3||0,At=Ce.utils.clamp(-je,1-je,Wo(nt/2)*nt/.185),en=je+(y.inertia===!1?0:At),Pt,Ct,xt=y,ui=xt.onStart,A=xt.onInterrupt,k=xt.onComplete;if(Pt=We(en,R),Bl(Pt)||(Pt=en),Ct=Math.max(0,Math.round(Ue+Pt*T)),pe<=ze&&pe>=Ue&&Ct!==pe){if(Fe&&!Fe._initted&&Fe.data<=Wo(Ct-pe))return;y.inertia===!1&&(At=Pt-je),be(Ct,{duration:ie(Wo(Math.max(Wo(en-Ft),Wo(Pt-Ft))*.185/nt/.05||0)),ease:y.ease||"power3",data:Wo(Ct-pe),onInterrupt:function(){return de.restart(!0)&&A&&A(R)},onComplete:function(){R.update(),q=fe(),r&&!P&&(te?te.resetTo("totalProgress",Pt,r._tTime/r._tDur):r.progress(Pt)),pt=z=r&&!P?r.totalProgress():R.progress,v&&v(R),k&&k(R)}},pe,At*T,Ct-pe-At*T),ui&&ui(R,be.tween)}}else R.isActive&&q!==pe&&de.restart(!0)}).pause()),l&&(wm[l]=R),f=R.trigger=$n(f||p!==!0&&p),Et=f&&f._gsap&&f._gsap.stRevert,Et&&(Et=Et(R)),p=p===!0?f:$n(p),mi(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Ui||(_=!_&&p.parentNode&&p.parentNode.style&&Fi(p.parentNode).display==="flex"?!1:Kt),R.pin=p,Ne=Ce.core.getCache(p),Ne.spacer?$=Ne.pinState:(w&&(w=$n(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Ne.spacerIsNative=!!w,w&&(Ne.spacerState=Tc(w))),Ne.spacer=O=w||bt.createElement("div"),O.classList.add("pin-spacer"),l&&O.classList.add("pin-spacer-"+l),Ne.pinState=$=Tc(p)),i.force3D!==!1&&Ce.set(p,{force3D:!0}),R.spacer=O=Ne.spacer,$e=Fi(p),me=$e[_+S.os2],ee=Ce.getProperty(p),ae=Ce.quickSetter(p,S.a,nn),Nh(p,O,$e),D=Tc(p)),I){Oe=oo(I)?yv(I,Sv):Sv,j=wc("scroller-start",l,F,S,Oe,0),Ae=wc("scroller-end",l,F,S,Oe,0,j),re=j["offset"+S.op.d2];var at=$n(Ls(F,"content")||F);Ye=this.markerStart=wc("start",l,at,S,Oe,re,0,E),Me=this.markerEnd=wc("end",l,at,S,Oe,re,0,E),E&&(Mt=Ce.quickSetter([Ye,Me],S.a,nn)),!Z&&!(Mr.length&&Ls(F,"fixedMarkers")===!0)&&(a3(G?_t:F),Ce.set([j,Ae],{force3D:!0}),Be=Ce.quickSetter(j,S.a,nn),He=Ce.quickSetter(Ae,S.a,nn))}if(E){var Ve=E.vars.onUpdate,De=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Ve&&Ve.apply(E,De||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(pe,Xe){if(!Xe)return R.kill(!0);var Fe=pe!==!1||!R.enabled,je=An;Fe!==R.isReverted&&(Fe&&(Le=Math.max(fe(),R.scroll.rec||0),he=R.progress,Ke=r&&r.progress()),Ye&&[Ye,Me,j,Ae].forEach(function(Ft){return Ft.style.display=Fe?"none":"block"}),Fe&&(An=R,R.update(Fe)),p&&(!C||!R.isActive)&&(Fe?d3(p,O,$):Nh(p,O,Fi(p),Pe)),Fe||R.update(Fe),An=je,R.isReverted=Fe)},R.refresh=function(pe,Xe,Fe,je){if(!((An||!R.enabled)&&!Xe)){if(p&&pe&&Gi){dn(n,"scrollEnd",cM);return}!zn&&oe&&oe(R),An=R,be.tween&&!Fe&&(be.tween.kill(),be.tween=0),te&&te.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ft=Se(),nt=Ge(),At=E?E.duration():vr(F,S),en=T<=.01||!T,Pt=0,Ct=je||0,xt=oo(Fe)?Fe.end:i.end,ui=i.endTrigger||f,A=oo(Fe)?Fe.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),k=R.pinnedContainer=i.pinnedContainer&&$n(i.pinnedContainer,R),X=f&&Math.max(0,tt.indexOf(R))||0,W=X,B,ue,_e,we,ve,Ee,Ie,ke,ft,St,dt,tn,lt;for(I&&oo(Fe)&&(tn=Ce.getProperty(j,S.p),lt=Ce.getProperty(Ae,S.p));W-- >0;)Ee=tt[W],Ee.end||Ee.refresh(0,1)||(An=R),Ie=Ee.pin,Ie&&(Ie===f||Ie===p||Ie===k)&&!Ee.isReverted&&(St||(St=[]),St.unshift(Ee),Ee.revert(!0,!0)),Ee!==tt[W]&&(X--,W--);for(Pn(A)&&(A=A(R)),A=gv(A,"start",R),Ue=Tv(A,f,Ft,S,fe(),Ye,j,R,nt,Q,Z,At,E,R._startClamp&&"_startClamp")||(p?-.001:0),Pn(xt)&&(xt=xt(R)),mi(xt)&&!xt.indexOf("+=")&&(~xt.indexOf(" ")?xt=(mi(A)?A.split(" ")[0]:"")+xt:(Pt=_f(xt.substr(2),Ft),xt=mi(A)?A:(E?Ce.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ue):Ue)+Pt,ui=f)),xt=gv(xt,"end",R),ze=Math.max(Ue,Tv(xt||(ui?"100% 0":At),ui,Ft,S,fe()+Pt,Me,Ae,R,nt,Q,Z,At,E,R._endClamp&&"_endClamp"))||-.001,Pt=0,W=X;W--;)Ee=tt[W]||{},Ie=Ee.pin,Ie&&Ee.start-Ee._pinPush<=Ue&&!E&&Ee.end>0&&(B=Ee.end-(R._startClamp?Math.max(0,Ee.start):Ee.start),(Ie===f&&Ee.start-Ee._pinPush<Ue||Ie===k)&&isNaN(A)&&(Pt+=B*(1-Ee.progress)),Ie===p&&(Ct+=B));if(Ue+=Pt,ze+=Pt,R._startClamp&&(R._startClamp+=Pt),R._endClamp&&!zn&&(R._endClamp=ze||-.001,ze=Math.min(ze,vr(F,S))),T=ze-Ue||(Ue-=.01)&&.001,en&&(he=Ce.utils.clamp(0,1,Ce.utils.normalize(Ue,ze,Le))),R._pinPush=Ct,Ye&&Pt&&(B={},B[S.a]="+="+Pt,k&&(B[S.p]="-="+fe()),Ce.set([Ye,Me],B)),p&&!(Em&&R.end>=vr(F,S)))B=Fi(p),we=S===sn,_e=fe(),ye=parseFloat(ee(S.a))+Ct,!At&&ze>1&&(dt=(G?bt.scrollingElement||_i:F).style,dt={style:dt,value:dt["overflow"+S.a.toUpperCase()]},G&&Fi(_t)["overflow"+S.a.toUpperCase()]!=="scroll"&&(dt.style["overflow"+S.a.toUpperCase()]="scroll")),Nh(p,O,B),D=Tc(p),ue=Ir(p,!0),ke=Z&&Bs(F,we?Vn:sn)(),_?(Pe=[_+S.os2,T+Ct+nn],Pe.t=O,W=_===Kt?ad(p,S)+T+Ct:0,W&&(Pe.push(S.d,W+nn),O.style.flexBasis!=="auto"&&(O.style.flexBasis=W+nn)),ka(Pe),k&&tt.forEach(function(Re){Re.pin===k&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),Z&&fe(Le)):(W=ad(p,S),W&&O.style.flexBasis!=="auto"&&(O.style.flexBasis=W+nn)),Z&&(ve={top:ue.top+(we?_e-Ue:ke)+nn,left:ue.left+(we?ke:_e-Ue)+nn,boxSizing:"border-box",position:"fixed"},ve[To]=ve["max"+tl]=Math.ceil(ue.width)+nn,ve[Ao]=ve["max"+Tg]=Math.ceil(ue.height)+nn,ve[Ui]=ve[Ui+uu]=ve[Ui+au]=ve[Ui+cu]=ve[Ui+lu]="0",ve[Kt]=B[Kt],ve[Kt+uu]=B[Kt+uu],ve[Kt+au]=B[Kt+au],ve[Kt+cu]=B[Kt+cu],ve[Kt+lu]=B[Kt+lu],J=p3($,ve,C),zn&&fe(0)),r?(ft=r._initted,bh(1),r.render(r.duration(),!0,!0),le=ee(S.a)-ye+T+Ct,ge=Math.abs(T-le)>1,Z&&ge&&J.splice(J.length-2,2),r.render(0,!0,!0),ft||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),bh(0)):le=T,dt&&(dt.value?dt.style["overflow"+S.a.toUpperCase()]=dt.value:dt.style.removeProperty("overflow-"+S.a));else if(f&&fe()&&!E)for(ue=f.parentNode;ue&&ue!==_t;)ue._pinOffset&&(Ue-=ue._pinOffset,ze-=ue._pinOffset),ue=ue.parentNode;St&&St.forEach(function(Re){return Re.revert(!1,!0)}),R.start=Ue,R.end=ze,Qe=N=zn?Le:fe(),!E&&!zn&&(Qe<Le&&fe(Le),R.scroll.rec=0),R.revert(!1,!0),se=Cn(),de&&(q=-1,de.restart(!0)),An=0,r&&P&&(r._initted||Ke)&&r.progress()!==Ke&&r.progress(Ke||0,!0).render(r.time(),!0,!0),(en||he!==R.progress||E||g||r&&!r._initted)&&(r&&!P&&(r._initted||he||r.vars.immediateRender!==!1)&&r.totalProgress(E&&Ue<-.001&&!he?Ce.utils.normalize(Ue,ze,0):he,!0),R.progress=en||(Qe-Ue)/T===he?0:he),p&&_&&(O._pinOffset=Math.round(R.progress*le)),te&&te.invalidate(),isNaN(tn)||(tn-=Ce.getProperty(j,S.p),lt-=Ce.getProperty(Ae,S.p),Ac(j,S,tn),Ac(Ye,S,tn-(je||0)),Ac(Ae,S,lt),Ac(Me,S,lt-(je||0))),en&&!zn&&R.update(),c&&!zn&&!L&&(L=!0,c(R),L=!1)}},R.getVelocity=function(){return(fe()-N)/(Cn()-Ol)*1e3||0},R.endAnimation=function(){El(R.callbackAnimation),r&&(te?te.progress(1):r.paused()?P||El(r,R.direction<0,1):El(r,r.reversed()))},R.labelToScroll=function(pe){return r&&r.labels&&(Ue||R.refresh()||Ue)+r.labels[pe]/r.duration()*T||0},R.getTrailing=function(pe){var Xe=tt.indexOf(R),Fe=R.direction>0?tt.slice(0,Xe).reverse():tt.slice(Xe+1);return(mi(pe)?Fe.filter(function(je){return je.vars.preventOverlaps===pe}):Fe).filter(function(je){return R.direction>0?je.end<=Ue:je.start>=ze})},R.update=function(pe,Xe,Fe){if(!(E&&!Fe&&!pe)){var je=zn===!0?Le:R.scroll(),Ft=pe?0:(je-Ue)/T,nt=Ft<0?0:Ft>1?1:Ft||0,At=R.progress,en,Pt,Ct,xt,ui,A,k,X;if(Xe&&(N=Qe,Qe=E?fe():je,y&&(z=pt,pt=r&&!P?r.totalProgress():nt)),m&&p&&!An&&!xc&&Gi&&(!nt&&Ue<je+(je-N)/(Cn()-Ol)*m?nt=1e-4:nt===1&&ze>je+(je-N)/(Cn()-Ol)*m&&(nt=.9999)),nt!==At&&R.enabled){if(en=R.isActive=!!nt&&nt<1,Pt=!!At&&At<1,A=en!==Pt,ui=A||!!nt!=!!At,R.direction=nt>At?1:-1,R.progress=nt,ui&&!An&&(Ct=nt&&!At?0:nt===1?1:At===1?2:3,P&&(xt=!A&&Y[Ct+1]!=="none"&&Y[Ct+1]||Y[Ct],X=r&&(xt==="complete"||xt==="reset"||xt in r))),M&&(A||X)&&(X||d||!r)&&(Pn(M)?M(R):R.getTrailing(M).forEach(function(_e){return _e.endAnimation()})),P||(te&&!An&&!xc?(te._dp._time-te._start!==te._time&&te.render(te._dp._time-te._start),te.resetTo?te.resetTo("totalProgress",nt,r._tTime/r._tDur):(te.vars.totalProgress=nt,te.invalidate().restart())):r&&r.totalProgress(nt,!!(An&&(se||pe)))),p){if(pe&&_&&(O.style[_+S.os2]=me),!Z)ae(zl(ye+le*nt));else if(ui){if(k=!pe&&nt>At&&ze+1>je&&je+1>=vr(F,S),C)if(!pe&&(en||k)){var W=Ir(p,!0),B=je-Ue;Av(p,_t,W.top+(S===sn?B:0)+nn,W.left+(S===sn?0:B)+nn)}else Av(p,O);ka(en||k?J:D),ge&&nt<1&&en||ae(ye+(nt===1&&!k?le:0))}}y&&!be.tween&&!An&&!xc&&de.restart(!0),a&&(A||x&&nt&&(nt<1||!Rh))&&Ou(a.targets).forEach(function(_e){return _e.classList[en||x?"add":"remove"](a.className)}),o&&!P&&!pe&&o(R),ui&&!An?(P&&(X&&(xt==="complete"?r.pause().totalProgress(1):xt==="reset"?r.restart(!0).pause():xt==="restart"?r.restart(!0):r[xt]()),o&&o(R)),(A||!Rh)&&(u&&A&&Dh(R,u),H[Ct]&&Dh(R,H[Ct]),x&&(nt===1?R.kill(!1,1):H[Ct]=0),A||(Ct=nt===1?1:3,H[Ct]&&Dh(R,H[Ct]))),b&&!en&&Math.abs(R.getVelocity())>(Bl(b)?b:2500)&&(El(R.callbackAnimation),te?te.progress(1):El(r,xt==="reverse"?1:!nt,1))):P&&o&&!An&&o(R)}if(He){var ue=E?je/E.duration()*(E._caScrollDist||0):je;Be(ue+(j._isFlipped?1:0)),He(ue)}Mt&&Mt(-je/E.duration()*(E._caScrollDist||0))}},R.enable=function(pe,Xe){R.enabled||(R.enabled=!0,dn(F,"resize",Vl),G||dn(F,"scroll",Xo),oe&&dn(n,"refreshInit",oe),pe!==!1&&(R.progress=he=0,Qe=N=q=fe()),Xe!==!1&&R.refresh())},R.getTween=function(pe){return pe&&be?be.tween:te},R.setPositions=function(pe,Xe,Fe,je){if(E){var Ft=E.scrollTrigger,nt=E.duration(),At=Ft.end-Ft.start;pe=Ft.start+At*pe/nt,Xe=Ft.start+At*Xe/nt}R.refresh(!1,!1,{start:_v(pe,Fe&&!!R._startClamp),end:_v(Xe,Fe&&!!R._endClamp)},je),R.update()},R.adjustPinSpacing=function(pe){if(Pe&&pe){var Xe=Pe.indexOf(S.d)+1;Pe[Xe]=parseFloat(Pe[Xe])+pe+nn,Pe[1]=parseFloat(Pe[1])+pe+nn,ka(Pe)}},R.disable=function(pe,Xe){if(pe!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Xe||te&&te.pause(),Le=0,Ne&&(Ne.uncache=1),oe&&fn(n,"refreshInit",oe),de&&(de.pause(),be.tween&&be.tween.kill()&&(be.tween=0)),!G)){for(var Fe=tt.length;Fe--;)if(tt[Fe].scroller===F&&tt[Fe]!==R)return;fn(F,"resize",Vl),G||fn(F,"scroll",Xo)}},R.kill=function(pe,Xe){R.disable(pe,Xe),te&&!Xe&&te.kill(),l&&delete wm[l];var Fe=tt.indexOf(R);Fe>=0&&tt.splice(Fe,1),Fe===kn&&xf>0&&kn--,Fe=0,tt.forEach(function(je){return je.scroller===R.scroller&&(Fe=1)}),Fe||zn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),Xe||r.kill()),Ye&&[Ye,Me,j,Ae].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),fu===R&&(fu=0),p&&(Ne&&(Ne.uncache=1),Fe=0,tt.forEach(function(je){return je.pin===p&&Fe++}),Fe||(Ne.spacer=0)),i.onKill&&i.onKill(R)},tt.push(R),R.enable(!1,!1),Et&&Et(R),r&&r.add&&!T){var ct=R.update;R.update=function(){R.update=ct,rt.cache++,Ue||ze||R.refresh()},Ce.delayedCall(.01,R.update),T=.01,Ue=ze=0}else R.refresh();p&&f3()},n.register=function(i){return ua||(Ce=i||rM(),iM()&&window.document&&n.enable(),ua=kl),ua},n.defaults=function(i){if(i)for(var r in i)Ec[r]=i[r];return Ec},n.disable=function(i,r){kl=0,tt.forEach(function(o){return o[r?"kill":"disable"](i)}),fn(it,"wheel",Xo),fn(bt,"scroll",Xo),clearInterval(vc),fn(bt,"touchcancel",fr),fn(_t,"touchstart",fr),Sc(fn,bt,"pointerdown,touchstart,mousedown",vv),Sc(fn,bt,"pointerup,touchend,mouseup",xv),od.kill(),yc(fn);for(var s=0;s<rt.length;s+=3)Mc(fn,rt[s],rt[s+1]),Mc(fn,rt[s],rt[s+2])},n.enable=function(){if(it=window,bt=document,_i=bt.documentElement,_t=bt.body,Ce&&(Ou=Ce.utils.toArray,su=Ce.utils.clamp,Mm=Ce.core.context||fr,bh=Ce.core.suppressOverwrites||fr,Sg=it.history.scrollRestoration||"auto",Tm=it.pageYOffset||0,Ce.core.globals("ScrollTrigger",n),_t)){kl=1,Oa=document.createElement("div"),Oa.style.height="100vh",Oa.style.position="absolute",pM(),r3(),Yt.register(Ce),n.isTouch=Yt.isTouch,us=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Sm=Yt.isTouch===1,dn(it,"wheel",Xo),yg=[it,bt,_i,_t],Ce.matchMedia?(n.matchMedia=function(u){var c=Ce.matchMedia(),d;for(d in u)c.add(d,u[d]);return c},Ce.addEventListener("matchMediaInit",function(){dM(),Cg()}),Ce.addEventListener("matchMediaRevert",function(){return fM()}),Ce.addEventListener("matchMedia",function(){go(0,1),Fo("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return Lh(),Lh})):console.warn("Requires GSAP 3.11.0 or later"),Lh(),dn(bt,"scroll",Xo);var i=_t.hasAttribute("style"),r=_t.style,s=r.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Ir(_t),sn.m=Math.round(a.top+sn.sc())||0,Vn.m=Math.round(a.left+Vn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(_t.setAttribute("style",""),_t.removeAttribute("style")),vc=setInterval(Mv,250),Ce.delayedCall(.5,function(){return xc=0}),dn(bt,"touchcancel",fr),dn(_t,"touchstart",fr),Sc(dn,bt,"pointerdown,touchstart,mousedown",vv),Sc(dn,bt,"pointerup,touchend,mouseup",xv),ym=Ce.utils.checkPrefix("transform"),yf.push(ym),ua=Cn(),od=Ce.delayedCall(.2,go).pause(),ca=[bt,"visibilitychange",function(){var u=it.innerWidth,c=it.innerHeight;bt.hidden?(pv=u,mv=c):(pv!==u||mv!==c)&&Vl()},bt,"DOMContentLoaded",go,it,"load",go,it,"resize",Vl],yc(dn),tt.forEach(function(u){return u.enable(0,1)}),l=0;l<rt.length;l+=3)Mc(fn,rt[l],rt[l+1]),Mc(fn,rt[l],rt[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Rh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(vc)||(vc=r)&&setInterval(Mv,r),"ignoreMobileResize"in i&&(Sm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(yc(fn)||yc(dn,i.autoRefreshEvents||"none"),eM=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=$n(i),o=rt.indexOf(s),a=Io(s);~o&&rt.splice(o,a?6:2),r&&(a?Mr.unshift(it,r,_t,r,_i,r):Mr.unshift(s,r))},n.clearMatchMedia=function(i){tt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?$n(i):i).getBoundingClientRect(),a=o[s?To:Ao]*r||0;return s?o.right-a>0&&o.left+a<it.innerWidth:o.bottom-a>0&&o.top+a<it.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=$n(i));var o=i.getBoundingClientRect(),a=o[s?To:Ao],l=r==null?a/2:r in ld?ld[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/it.innerWidth:(o.top+l)/it.innerHeight},n.killAll=function(i){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Uo.killAll||[];Uo={},r.forEach(function(s){return s()})}},n}();st.version="3.14.1";st.saveStyles=function(n){return n?Ou(n).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Mm())}}):hi};st.revert=function(n,e){return Cg(!n,e)};st.create=function(n,e){return new st(n,e)};st.refresh=function(n){return n?Vl(!0):(ua||st.register())&&go(!0)};st.update=function(n){return++rt.cache&&Vr(n===!0?2:0)};st.clearScrollMemory=hM;st.maxScroll=function(n,e){return vr(n,e?Vn:sn)};st.getScrollFunc=function(n,e){return Bs($n(n),e?Vn:sn)};st.getById=function(n){return wm[n]};st.getAll=function(){return tt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!Gi};st.snapDirectional=Ag;st.addEventListener=function(n,e){var t=Uo[n]||(Uo[n]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(n,e){var t=Uo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};st.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=Ce.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),dn(st,"refresh",function(){return s=e.batchMax()})),Ou(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(st.create(u))}),t};var bv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Ih=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===_i&&n(_t,t)},Cc={auto:1,scroll:1},g3=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_t&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Cc[(l=Fi(s)).overflowY]||Cc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Io(s)&&(Cc[(l=Fi(s)).overflowY]||Cc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},gM=function(e,t,i,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&g3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&dn(bt,Yt.eventTypes[0],Pv,!1,!0)},onDisable:function(){return fn(bt,Yt.eventTypes[0],Pv,!0)}})},_3=/(input|label|select|textarea)/i,Rv,Pv=function(e){var t=_3.test(e.target.tagName);(t||Rv)&&(e._gsapAllow=!0,Rv=t)},v3=function(e){oo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=$n(e.target)||_i,c=Ce.core.globals().ScrollSmoother,d=c&&c.get(),f=us&&(e.content&&$n(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Bs(u,sn),_=Bs(u,Vn),g=1,m=(Yt.isTouch&&it.visualViewport?it.visualViewport.scale*it.visualViewport.width:it.outerWidth)/it.innerWidth,h=0,v=Pn(r)?function(){return r(a)}:function(){return r||2.8},x,y,C=gM(u,e.type,!0,s),w=function(){return y=!1},E=fr,b=fr,M=function(){l=vr(u,sn),b=su(us?1:0,l),i&&(E=su(0,vr(u,Vn))),x=Co},S=function(){f._gsap.y=zl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},P=function(){if(y){requestAnimationFrame(w);var I=zl(a.deltaY/2),Q=b(p.v-I);if(f&&Q!==p.v+p.offset){p.offset=Q-p.v;var R=zl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",f._gsap.y=R+"px",p.cacheID=rt.cache,Vr()}return!0}p.offset&&S(),y=!0},F,V,G,Z,H=function(){M(),F.isActive()&&F.vars.scrollY>l&&(p()>l?F.progress(1)&&p(l):F.resetTo("scrollY",l))};return f&&Ce.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return us&&Y.type==="touchmove"&&P()||g>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){y=!1;var Y=g;g=zl((it.visualViewport&&it.visualViewport.scale||1)/m),F.pause(),Y!==g&&Ih(u,g>1.01?!0:i?!1:"x"),V=_(),G=p(),M(),x=Co},e.onRelease=e.onGestureStart=function(Y,I){if(p.offset&&S(),!I)Z.restart(!0);else{rt.cache++;var Q=v(),R,oe;i&&(R=_(),oe=R+Q*.05*-Y.velocityX/.227,Q*=bv(_,R,oe,vr(u,Vn)),F.vars.scrollX=E(oe)),R=p(),oe=R+Q*.05*-Y.velocityY/.227,Q*=bv(p,R,oe,vr(u,sn)),F.vars.scrollY=b(oe),F.invalidate().duration(Q).play(.01),(us&&F.vars.scrollY>=l||R>=l-1)&&Ce.to({},{onUpdate:H,duration:Q})}o&&o(Y)},e.onWheel=function(){F._ts&&F.pause(),Cn()-h>1e3&&(x=0,h=Cn())},e.onChange=function(Y,I,Q,R,oe){if(Co!==x&&M(),I&&i&&_(E(R[2]===I?V+(Y.startX-Y.x):_()+I-R[1])),Q){p.offset&&S();var Se=oe[2]===Q,Ge=Se?G+Y.startY-Y.y:p()+Q-oe[1],q=b(Ge);Se&&Ge!==q&&(G+=q-Ge),p(q)}(Q||I)&&Vr()},e.onEnable=function(){Ih(u,i?!1:"x"),st.addEventListener("refresh",H),dn(it,"resize",H),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){Ih(u,!0),fn(it,"resize",H),st.removeEventListener("refresh",H),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=us,us&&!p()&&p(1),us&&Ce.ticker.add(fr),Z=a._dc,F=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mM(p,p(),function(){return F.pause()})},onUpdate:Vr,onComplete:Z.vars.onComplete}),a};st.sort=function(n){if(Pn(n))return tt.sort(n);var e=it.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+it.innerHeight}),tt.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};st.observe=function(n){return new Yt(n)};st.normalizeScroll=function(n){if(typeof n>"u")return Fn;if(n===!0&&Fn)return Fn.enable();if(n===!1){Fn&&Fn.kill(),Fn=n;return}var e=n instanceof Yt?n:v3(n);return Fn&&Fn.target===e.target&&Fn.kill(),Io(e.target)&&(Fn=e),e};st.core={_getVelocityProp:xm,_inputObserver:gM,_scrollers:rt,_proxies:Mr,bridge:{ss:function(){Gi||Fo("scrollStart"),Gi=Cn()},ref:function(){return An}}};rM()&&Ce.registerPlugin(st);tu.registerPlugin(st);const ju=({children:n,container:e,distance:t=100,direction:i="vertical",reverse:r=!1,duration:s=.8,ease:o="power3.out",initialOpacity:a=0,animateOpacity:l=!0,scale:u=1,threshold:c=.1,delay:d=0,disappearAfter:f=0,disappearDuration:p=.5,disappearEase:_="power3.in",onComplete:g,onDisappearanceComplete:m,className:h="",...v})=>{const x=Ze.useRef(null);return Ze.useEffect(()=>{const y=x.current;if(!y)return;let C=null;C=typeof e=="string"?document.querySelector(e):e||document.getElementById("snap-main-container");const w=i==="horizontal"?"x":"y",E=r?-t:t,b=(1-c)*100;tu.set(y,{[w]:E,scale:u,opacity:l?a:1,visibility:"visible"});const M=tu.timeline({paused:!0,delay:d,onComplete:()=>{g==null||g(),f>0&&tu.to(y,{[w]:r?t:-t,scale:.8,opacity:l?a:0,delay:f,duration:p,ease:_,onComplete:()=>m==null?void 0:m()})}});M.to(y,{[w]:0,scale:1,opacity:1,duration:s,ease:o});const S=st.create({trigger:y,scroller:C||void 0,start:`top ${b}%`,once:!0,onEnter:()=>M.play()});return()=>{S.kill(),M.kill()}},[e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m]),U.jsx("div",{ref:x,className:h,style:{visibility:"hidden"},...v,children:n})};var _M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Dv=vo.createContext&&vo.createContext(_M),x3=["attr","size","title"];function y3(n,e){if(n==null)return{};var t=S3(n,e),i,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function S3(n,e){if(n==null)return{};var t={};for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){if(e.indexOf(i)>=0)continue;t[i]=n[i]}return t}function ud(){return ud=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},ud.apply(this,arguments)}function Lv(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function cd(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Lv(Object(t),!0).forEach(function(i){M3(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Lv(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function M3(n,e,t){return e=E3(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function E3(n){var e=w3(n,"string");return typeof e=="symbol"?e:e+""}function w3(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function vM(n){return n&&n.map((e,t)=>vo.createElement(e.tag,cd({key:t},e.attr),vM(e.child)))}function Jr(n){return e=>vo.createElement(T3,ud({attr:cd({},n.attr)},e),vM(n.child))}function T3(n){var e=t=>{var{attr:i,size:r,title:s}=n,o=y3(n,x3),a=r||t.size||"1em",l;return t.className&&(l=t.className),n.className&&(l=(l?l+" ":"")+n.className),vo.createElement("svg",ud({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,o,{className:l,style:cd(cd({color:n.color||t.color},t.style),n.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&vo.createElement("title",null,s),n.children)};return Dv!==void 0?vo.createElement(Dv.Consumer,null,t=>e(t)):e(_M)}function A3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(n)}function C3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(n)}function b3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(n)}function R3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(n)}function P3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(n)}function D3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(n)}function L3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(n)}function N3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(n)}function I3(n){return Jr({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(n)}function U3(){const n=[{name:"React",icon:L3,color:"#61DAFB"},{name:"Next.js",icon:R3,color:"#FFFFFF"},{name:"TypeScript",icon:I3,color:"#3178C6"},{name:"Node.js",icon:P3,color:"#339933"},{name:"PostgreSQL",icon:D3,color:"#4169E1"},{name:"MongoDB",icon:b3,color:"#47A248"},{name:"Tailwind CSS",icon:N3,color:"#06B6D4"},{name:"JavaScript",icon:C3,color:"#F7DF1E"},{name:"HTML/CSS",icon:A3,color:"#E34F26"}];return U.jsx(ju,{children:U.jsx("section",{className:"py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden",children:U.jsxs("div",{className:"max-w-7xl mx-auto",children:[U.jsxs("div",{className:"text-center mb-16 animate-fadeIn",children:[U.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 animate-slideDown",children:[U.jsx(Nw,{className:"w-5 h-5 text-blue-400"}),U.jsx("span",{className:"text-blue-400 font-medium",children:"My Profile"})]}),U.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent animate-slideUp",children:"About Me"})]}),U.jsxs("div",{className:"grid md:grid-cols-2 gap-8 mb-12 items-start",children:[U.jsx("div",{className:"bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 animate-slideInLeft group",children:U.jsxs("div",{className:"relative",children:[U.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"}),U.jsxs("div",{className:"relative",children:[U.jsx("p",{className:"text-gray-300 mb-6 leading-relaxed",children:"I am a software developer with expertise in JavaScript, TypeScript, ReactJS, Next.js, and Dart (Flutter) to build responsive and stable web and mobile interfaces. I also master Python and SQL for data processing, backend integration, and basic analytics. Furthermore, I have expertise in UI design and experience connecting front-end applications with RESTful APIs and backend services. I am capable of developing and integrating AI-based solutions into mobile applications to deliver smarter, more efficient, and automated user experiences."}),U.jsxs("div",{className:"space-y-3 mb-6",children:[U.jsxs("div",{className:"flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300",children:[U.jsx("div",{className:"w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover/item:bg-blue-500/20 transition-colors",children:U.jsx(Iw,{className:"w-5 h-5 text-blue-400 group-hover/item:scale-110 transition-transform"})}),U.jsxs("div",{children:[U.jsx("h4",{className:"text-white font-semibold mb-1",children:"Web Development"}),U.jsx("p",{className:"text-gray-400 text-sm",children:"Full-stack development using modern technologies"})]})]}),U.jsxs("div",{className:"flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300",children:[U.jsx("div",{className:"w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover/item:bg-purple-500/20 transition-colors",children:U.jsx(Dw,{className:"w-5 h-5 text-purple-400 group-hover/item:scale-110 transition-transform"})}),U.jsxs("div",{children:[U.jsx("h4",{className:"text-white font-semibold mb-1",children:"UI/UX Design"}),U.jsx("p",{className:"text-gray-400 text-sm",children:"Creating user-centered designs for web and mobile apps"})]})]})]})]})]})}),U.jsx("div",{className:"bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10 animate-slideInRight group",children:U.jsxs("div",{className:"relative",children:[U.jsx("div",{className:"absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"}),U.jsxs("div",{className:"relative",children:[U.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[U.jsx("div",{className:"w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500",children:U.jsx(Cw,{className:"w-6 h-6 text-white"})}),U.jsx("h3",{className:"text-2xl font-bold text-white",children:"Tech Stack"})]}),U.jsx("p",{className:"text-gray-300 mb-6",children:"Technologies I frequently use in projects:"}),U.jsx("div",{className:"grid grid-cols-2 gap-3",children:n.map((e,t)=>{const i=e.icon;return U.jsxs("div",{className:"px-4 py-3 bg-gradient-to-br from-gray-800/60 to-gray-800/40 rounded-lg text-sm font-medium text-white hover:from-gray-700 hover:to-gray-700/60 transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-700/50 hover:border-gray-600 flex items-center gap-2 cursor-pointer group/tech animate-techCard",style:{animationDelay:`${t*.1}s`},children:[U.jsx(i,{className:"w-5 h-5 group-hover/tech:scale-125 group-hover/tech:rotate-12 transition-all duration-300",style:{color:e.color}}),U.jsx("span",{className:"group-hover/tech:translate-x-1 transition-transform duration-300",children:e.name})]},e.name)})})]})]})})]})]})})})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bg="167",F3=0,Nv=1,O3=2,xM=1,k3=2,Rr=3,Vs=0,oi=1,Ur=2,Ns=0,za=1,Cm=2,Iv=3,Uv=4,z3=5,uo=100,B3=101,V3=102,H3=103,G3=104,W3=200,X3=201,j3=202,Y3=203,bm=204,Rm=205,$3=206,q3=207,K3=208,Z3=209,Q3=210,J3=211,eA=212,tA=213,nA=214,iA=0,rA=1,sA=2,fd=3,oA=4,aA=5,lA=6,uA=7,yM=0,cA=1,fA=2,Is=0,dA=1,hA=2,pA=3,mA=4,gA=5,_A=6,vA=7,SM=300,nl=301,il=302,Pm=303,Dm=304,Bd=306,Lm=1e3,ir=1001,Nm=1002,Qn=1003,xA=1004,bc=1005,Hn=1006,Uh=1007,_o=1008,qr=1009,MM=1010,EM=1011,zu=1012,Rg=1013,Oo=1014,xr=1015,cl=1016,Pg=1017,Dg=1018,rl=1020,wM=35902,TM=1021,AM=1022,Bi=1023,CM=1024,bM=1025,Ba=1026,sl=1027,RM=1028,Lg=1029,PM=1030,Ng=1031,Ig=1033,Mf=33776,Ef=33777,wf=33778,Tf=33779,Im=35840,Um=35841,Fm=35842,Om=35843,km=36196,zm=37492,Bm=37496,Vm=37808,Hm=37809,Gm=37810,Wm=37811,Xm=37812,jm=37813,Ym=37814,$m=37815,qm=37816,Km=37817,Zm=37818,Qm=37819,Jm=37820,e0=37821,Af=36492,t0=36494,n0=36495,DM=36283,i0=36284,r0=36285,s0=36286,yA=3200,SA=3201,MA=0,EA=1,ps="",dr="srgb",Ys="srgb-linear",Ug="display-p3",Vd="display-p3-linear",dd="linear",Lt="srgb",hd="rec709",pd="p3",jo=7680,Fv=519,wA=512,TA=513,AA=514,LM=515,CA=516,bA=517,RA=518,PA=519,Ov=35044,kv="300 es",zr=2e3,md=2001;class fl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=Math.PI/180,o0=180/Math.PI;function Yu(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[i&255]+wn[i>>8&255]+wn[i>>16&255]+wn[i>>24&255]).toLowerCase()}function Kn(n,e,t){return Math.max(e,Math.min(t,n))}function DA(n,e){return(n%e+e)%e}function Oh(n,e,t){return(1-t)*n+t*e}function wl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,s,o,a,l,u){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],v=r[1],x=r[4],y=r[7],C=r[2],w=r[5],E=r[8];return s[0]=o*g+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*h+a*y+l*E,s[1]=u*g+c*v+d*C,s[4]=u*m+c*x+d*w,s[7]=u*h+c*y+d*E,s[2]=f*g+p*v+_*C,s[5]=f*m+p*x+_*w,s[8]=f*h+p*y+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const kh=new et;function NM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gd(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LA(){const n=gd("canvas");return n.style.display="block",n}const zv={};function du(n){n in zv||(zv[n]=!0,console.warn(n))}function NA(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const Bv=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vv=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tl={[Ys]:{transfer:dd,primaries:hd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[dr]:{transfer:Lt,primaries:hd,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vd]:{transfer:dd,primaries:pd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Vv),fromReference:n=>n.applyMatrix3(Bv)},[Ug]:{transfer:Lt,primaries:pd,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Vv),fromReference:n=>n.applyMatrix3(Bv).convertLinearToSRGB()}},IA=new Set([Ys,Vd]),vt={enabled:!0,_workingColorSpace:Ys,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!IA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Tl[e].toReference,r=Tl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Tl[n].primaries},getTransfer:function(n){return n===ps?dd:Tl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Tl[e].luminanceCoefficients)}};function Va(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yo;class UA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yo===void 0&&(Yo=gd("canvas")),Yo.width=e.width,Yo.height=e.height;const i=Yo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gd("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Va(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Va(t[i]/255)*255):t[i]=Va(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FA=0;class IM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=Yu(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bh(r[o].image)):s.push(Bh(r[o]))}else s=Bh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Bh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?UA.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OA=0;class Wn extends fl{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,i=ir,r=ir,s=Hn,o=_o,a=Bi,l=qr,u=Wn.DEFAULT_ANISOTROPY,c=ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OA++}),this.uuid=Yu(),this.name="",this.source=new IM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==SM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lm:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Nm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lm:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Nm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=SM;Wn.DEFAULT_ANISOTROPY=1;class on{constructor(e=0,t=0,i=0,r=1){on.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,C=(h+1)/2,w=(c+f)/4,E=(d+g)/4,b=(_+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=E/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=b/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(d-g)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kA extends fl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Wn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new IM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hs extends kA{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class UM extends Wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zA extends Wn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $u{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,h*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const y=a*v;if(l=l*m+f*y,u=u*m+p*y,c=c*m+_*y,d=d*m+g*y,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vh.copy(this).projectOnVector(e),this.sub(Vh)}reflect(e){return this.sub(Vh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vh=new K,Hv=new $u;class qu{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(s,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rc.copy(i.boundingBox)),Rc.applyMatrix4(e.matrixWorld),this.union(Rc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Al),Pc.subVectors(this.max,Al),$o.subVectors(e.a,Al),qo.subVectors(e.b,Al),Ko.subVectors(e.c,Al),is.subVectors(qo,$o),rs.subVectors(Ko,qo),Ks.subVectors($o,Ko);let t=[0,-is.z,is.y,0,-rs.z,rs.y,0,-Ks.z,Ks.y,is.z,0,-is.x,rs.z,0,-rs.x,Ks.z,0,-Ks.x,-is.y,is.x,0,-rs.y,rs.x,0,-Ks.y,Ks.x,0];return!Hh(t,$o,qo,Ko,Pc)||(t=[1,0,0,0,1,0,0,0,1],!Hh(t,$o,qo,Ko,Pc))?!1:(Dc.crossVectors(is,rs),t=[Dc.x,Dc.y,Dc.z],Hh(t,$o,qo,Ko,Pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wr=[new K,new K,new K,new K,new K,new K,new K,new K],qi=new K,Rc=new qu,$o=new K,qo=new K,Ko=new K,is=new K,rs=new K,Ks=new K,Al=new K,Pc=new K,Dc=new K,Zs=new K;function Hh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Zs.fromArray(n,s);const a=r.x*Math.abs(Zs.x)+r.y*Math.abs(Zs.y)+r.z*Math.abs(Zs.z),l=e.dot(Zs),u=t.dot(Zs),c=i.dot(Zs);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const BA=new qu,Cl=new K,Gh=new K;class Hd{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):BA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cl.subVectors(e,this.center);const t=Cl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Cl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cl.copy(e.center).add(Gh)),this.expandByPoint(Cl.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tr=new K,Wh=new K,Lc=new K,ss=new K,Xh=new K,Nc=new K,jh=new K;class FM{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.origin).addScaledVector(this.direction,t),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wh.copy(e).add(t).multiplyScalar(.5),Lc.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(Wh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lc),a=ss.dot(this.direction),l=-ss.dot(Lc),u=ss.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wh).addScaledVector(Lc,f),p}intersectSphere(e,t){Tr.subVectors(e.center,this.origin);const i=Tr.dot(this.direction),r=Tr.dot(Tr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,r,s){Xh.subVectors(t,e),Nc.subVectors(i,e),jh.crossVectors(Xh,Nc);let o=this.direction.dot(jh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,e);const l=a*this.direction.dot(Nc.crossVectors(ss,Nc));if(l<0)return null;const u=a*this.direction.dot(Xh.cross(ss));if(u<0||l+u>o)return null;const c=-a*ss.dot(jh);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Zo.setFromMatrixColumn(e,0).length(),s=1/Zo.setFromMatrixColumn(e,1).length(),o=1/Zo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VA,e,HA)}lookAt(e,t,i){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),os.crossVectors(i,fi),os.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),os.crossVectors(i,fi)),os.normalize(),Ic.crossVectors(fi,os),r[0]=os.x,r[4]=Ic.x,r[8]=fi.x,r[1]=os.y,r[5]=Ic.y,r[9]=fi.y,r[2]=os.z,r[6]=Ic.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],v=i[3],x=i[7],y=i[11],C=i[15],w=r[0],E=r[4],b=r[8],M=r[12],S=r[1],P=r[5],F=r[9],V=r[13],G=r[2],Z=r[6],H=r[10],Y=r[14],I=r[3],Q=r[7],R=r[11],oe=r[15];return s[0]=o*w+a*S+l*G+u*I,s[4]=o*E+a*P+l*Z+u*Q,s[8]=o*b+a*F+l*H+u*R,s[12]=o*M+a*V+l*Y+u*oe,s[1]=c*w+d*S+f*G+p*I,s[5]=c*E+d*P+f*Z+p*Q,s[9]=c*b+d*F+f*H+p*R,s[13]=c*M+d*V+f*Y+p*oe,s[2]=_*w+g*S+m*G+h*I,s[6]=_*E+g*P+m*Z+h*Q,s[10]=_*b+g*F+m*H+h*R,s[14]=_*M+g*V+m*Y+h*oe,s[3]=v*w+x*S+y*G+C*I,s[7]=v*E+x*P+y*Z+C*Q,s[11]=v*b+x*F+y*H+C*R,s[15]=v*M+x*V+y*Y+C*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],v=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,x=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,y=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,w=t*v+i*x+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=v*E,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*E,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*E,e[4]=x*E,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*E,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*E,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*E,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*E,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*E,e[12]=C*E,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*E,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*E,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,v=l*u,x=l*c,y=l*d,C=i.x,w=i.y,E=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+y)*C,r[2]=(_-x)*C,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(f+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+x)*E,r[9]=(m-v)*E,r[10]=(1-(f+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Zo.set(r[0],r[1],r[2]).length();const o=Zo.set(r[4],r[5],r[6]).length(),a=Zo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ki.copy(this);const u=1/s,c=1/o,d=1/a;return Ki.elements[0]*=u,Ki.elements[1]*=u,Ki.elements[2]*=u,Ki.elements[4]*=c,Ki.elements[5]*=c,Ki.elements[6]*=c,Ki.elements[8]*=d,Ki.elements[9]*=d,Ki.elements[10]*=d,t.setFromRotationMatrix(Ki),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=zr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===zr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===md)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=zr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===zr)_=(o+s)*d,g=-2*d;else if(a===md)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Zo=new K,Ki=new Jt,VA=new K(0,0,0),HA=new K(1,1,1),os=new K,Ic=new K,fi=new K,Gv=new Jt,Wv=new $u;class Kr{constructor(e=0,t=0,i=0,r=Kr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wv.setFromEuler(this),this.setFromQuaternion(Wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kr.DEFAULT_ORDER="XYZ";class OM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GA=0;const Xv=new K,Qo=new $u,Ar=new Jt,Uc=new K,bl=new K,WA=new K,XA=new $u,jv=new K(1,0,0),Yv=new K(0,1,0),$v=new K(0,0,1),qv={type:"added"},jA={type:"removed"},Jo={type:"childadded",child:null},Yh={type:"childremoved",child:null};class ai extends fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GA++}),this.uuid=Yu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new K,t=new Kr,i=new $u,r=new K(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new et}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new OM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.multiply(Qo),this}rotateOnWorldAxis(e,t){return Qo.setFromAxisAngle(e,t),this.quaternion.premultiply(Qo),this}rotateX(e){return this.rotateOnAxis(jv,e)}rotateY(e){return this.rotateOnAxis(Yv,e)}rotateZ(e){return this.rotateOnAxis($v,e)}translateOnAxis(e,t){return Xv.copy(e).applyQuaternion(this.quaternion),this.position.add(Xv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jv,e)}translateY(e){return this.translateOnAxis(Yv,e)}translateZ(e){return this.translateOnAxis($v,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Uc.copy(e):Uc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(bl,Uc,this.up):Ar.lookAt(Uc,bl,this.up),this.quaternion.setFromRotationMatrix(Ar),r&&(Ar.extractRotation(r.matrixWorld),Qo.setFromRotationMatrix(Ar),this.quaternion.premultiply(Qo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qv),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jA),Yh.child=e,this.dispatchEvent(Yh),Yh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qv),Jo.child=e,this.dispatchEvent(Jo),Jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,WA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,XA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ai.DEFAULT_UP=new K(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zi=new K,Cr=new K,$h=new K,br=new K,ea=new K,ta=new K,Kv=new K,qh=new K,Kh=new K,Zh=new K;class gr{constructor(e=new K,t=new K,i=new K){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zi.subVectors(e,t),r.cross(Zi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zi.subVectors(r,t),Cr.subVectors(i,t),$h.subVectors(e,t);const o=Zi.dot(Zi),a=Zi.dot(Cr),l=Zi.dot($h),u=Cr.dot(Cr),c=Cr.dot($h),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,br)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,br.x),l.addScaledVector(o,br.y),l.addScaledVector(a,br.z),l)}static isFrontFacing(e,t,i,r){return Zi.subVectors(i,t),Cr.subVectors(e,t),Zi.cross(Cr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zi.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Zi.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ea.subVectors(r,i),ta.subVectors(s,i),qh.subVectors(e,i);const l=ea.dot(qh),u=ta.dot(qh);if(l<=0&&u<=0)return t.copy(i);Kh.subVectors(e,r);const c=ea.dot(Kh),d=ta.dot(Kh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ea,o);Zh.subVectors(e,s);const p=ea.dot(Zh),_=ta.dot(Zh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(ta,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return Kv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(Kv,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(ea,o).addScaledVector(ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function Qh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=DA(e,1),t=Kn(t,0,1),i=Kn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Qh(o,s,e+1/3),this.g=Qh(o,s,e),this.b=Qh(o,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=dr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dr){const i=kM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Va(e.r),this.g=Va(e.g),this.b=Va(e.b),this}copyLinearToSRGB(e){return this.r=zh(e.r),this.g=zh(e.g),this.b=zh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dr){return vt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Kn(Tn.r*255,0,255))*65536+Math.round(Kn(Tn.g*255,0,255))*256+Math.round(Kn(Tn.b*255,0,255))}getHexString(e=dr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=dr){vt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==dr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(as),this.setHSL(as.h+e,as.s+t,as.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(as),e.getHSL(Fc);const i=Oh(as.h,Fc.h,t),r=Oh(as.s,Fc.s,t),s=Oh(as.l,Fc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new mt;mt.NAMES=kM;let YA=0;class Ku extends fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YA++}),this.uuid=Yu(),this.name="",this.type="Material",this.blending=za,this.side=Vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bm,this.blendDst=Rm,this.blendEquation=uo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=fd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==za&&(i.blending=this.blending),this.side!==Vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bm&&(i.blendSrc=this.blendSrc),this.blendDst!==Rm&&(i.blendDst=this.blendDst),this.blendEquation!==uo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==jo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==jo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class zM extends Ku{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kr,this.combine=yM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new K,Oc=new qe;class or{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ov,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return du("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ov&&(e.usage=this.usage),e}}class BM extends or{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class VM extends or{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Hr extends or{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $A=0;const Di=new Jt,Jh=new ai,na=new K,di=new qu,Rl=new qu,cn=new K;class es extends fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$A++}),this.uuid=Yu(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(NM(e)?VM:BM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Hr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rl.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(di.min,Rl.min),di.expandByPoint(cn),cn.addVectors(di.max,Rl.max),di.expandByPoint(cn)):(di.expandByPoint(Rl.min),di.expandByPoint(Rl.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)cn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(cn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)cn.fromBufferAttribute(a,u),l&&(na.fromBufferAttribute(e,u),cn.add(na)),r=Math.max(r,i.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new or(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new K,l[b]=new K;const u=new K,c=new K,d=new K,f=new qe,p=new qe,_=new qe,g=new K,m=new K;function h(b,M,S){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,S),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,S),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(P),a[b].add(g),a[M].add(g),a[S].add(g),l[b].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let b=0,M=v.length;b<M;++b){const S=v[b],P=S.start,F=S.count;for(let V=P,G=P+F;V<G;V+=3)h(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const x=new K,y=new K,C=new K,w=new K;function E(b){C.fromBufferAttribute(r,b),w.copy(C);const M=a[b];x.copy(M),x.sub(C.multiplyScalar(C.dot(M))).normalize(),y.crossVectors(w,M);const P=y.dot(l[b])<0?-1:1;o.setXYZW(b,x.x,x.y,x.z,P)}for(let b=0,M=v.length;b<M;++b){const S=v[b],P=S.start,F=S.count;for(let V=P,G=P+F;V<G;V+=3)E(e.getX(V+0)),E(e.getX(V+1)),E(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new or(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,u=new K,c=new K,d=new K;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new or(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new es,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zv=new Jt,Qs=new FM,kc=new Hd,Qv=new K,ia=new K,ra=new K,sa=new K,ep=new K,zc=new K,Bc=new qe,Vc=new qe,Hc=new qe,Jv=new K,e1=new K,t1=new K,Gc=new K,Wc=new K;class Vi extends ai{constructor(e=new es,t=new zM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){zc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(ep.fromBufferAttribute(d,e),o?zc.addScaledVector(ep,c):zc.addScaledVector(ep.sub(t),c))}t.add(zc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kc.copy(i.boundingSphere),kc.applyMatrix4(s),Qs.copy(e.ray).recast(e.near),!(kc.containsPoint(Qs.origin)===!1&&(Qs.intersectSphere(kc,Qv)===null||Qs.origin.distanceToSquared(Qv)>(e.far-e.near)**2))&&(Zv.copy(s).invert(),Qs.copy(e.ray).applyMatrix4(Zv),!(i.boundingBox!==null&&Qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Qs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=a.getX(y),E=a.getX(y+1),b=a.getX(y+2);r=Xc(this,h,e,i,u,c,d,w,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Xc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,C=x;y<C;y+=3){const w=y,E=y+1,b=y+2;r=Xc(this,h,e,i,u,c,d,w,E,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const v=m,x=m+1,y=m+2;r=Xc(this,o,e,i,u,c,d,v,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function qA(n,e,t,i,r,s,o,a){let l;if(e.side===oi?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Vs,a),l===null)return null;Wc.copy(a),Wc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Wc);return u<t.near||u>t.far?null:{distance:u,point:Wc.clone(),object:n}}function Xc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ia),n.getVertexPosition(l,ra),n.getVertexPosition(u,sa);const c=qA(n,e,t,i,ia,ra,sa,Gc);if(c){r&&(Bc.fromBufferAttribute(r,a),Vc.fromBufferAttribute(r,l),Hc.fromBufferAttribute(r,u),c.uv=gr.getInterpolation(Gc,ia,ra,sa,Bc,Vc,Hc,new qe)),s&&(Bc.fromBufferAttribute(s,a),Vc.fromBufferAttribute(s,l),Hc.fromBufferAttribute(s,u),c.uv1=gr.getInterpolation(Gc,ia,ra,sa,Bc,Vc,Hc,new qe)),o&&(Jv.fromBufferAttribute(o,a),e1.fromBufferAttribute(o,l),t1.fromBufferAttribute(o,u),c.normal=gr.getInterpolation(Gc,ia,ra,sa,Jv,e1,t1,new K),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new K,materialIndex:0};gr.getNormal(ia,ra,sa,d.normal),c.face=d}return c}class Zu extends es{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Hr(u,3)),this.setAttribute("normal",new Hr(c,3)),this.setAttribute("uv",new Hr(d,2));function _(g,m,h,v,x,y,C,w,E,b,M){const S=y/E,P=C/b,F=y/2,V=C/2,G=w/2,Z=E+1,H=b+1;let Y=0,I=0;const Q=new K;for(let R=0;R<H;R++){const oe=R*P-V;for(let Se=0;Se<Z;Se++){const Ge=Se*S-F;Q[g]=Ge*v,Q[m]=oe*x,Q[h]=G,u.push(Q.x,Q.y,Q.z),Q[g]=0,Q[m]=0,Q[h]=w>0?1:-1,c.push(Q.x,Q.y,Q.z),d.push(Se/E),d.push(1-R/b),Y+=1}}for(let R=0;R<b;R++)for(let oe=0;oe<E;oe++){const Se=f+oe+Z*R,Ge=f+oe+Z*(R+1),q=f+(oe+1)+Z*(R+1),se=f+(oe+1)+Z*R;l.push(Se,Ge,se),l.push(Ge,q,se),I+=6}a.addGroup(p,I,M),p+=I,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ol(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const i=ol(n[t]);for(const r in i)e[r]=i[r]}return e}function KA(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function HM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const ZA={clone:ol,merge:Un};var QA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,JA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zr extends Ku{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QA,this.fragmentShader=JA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ol(e.uniforms),this.uniformsGroups=KA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class _d extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=zr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ls=new K,n1=new qe,i1=new qe;class nr extends _d{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=o0*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return o0*2*Math.atan(Math.tan(Fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ls.x,ls.y).multiplyScalar(-e/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-e/ls.z)}getViewSize(e,t){return this.getViewBounds(e,n1,i1),t.subVectors(i1,n1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,aa=1;class eC extends ai{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nr(oa,aa,e,t);r.layers=this.layers,this.add(r);const s=new nr(oa,aa,e,t);s.layers=this.layers,this.add(s);const o=new nr(oa,aa,e,t);o.layers=this.layers,this.add(o);const a=new nr(oa,aa,e,t);a.layers=this.layers,this.add(a);const l=new nr(oa,aa,e,t);l.layers=this.layers,this.add(l);const u=new nr(oa,aa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===zr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===md)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class GM extends Wn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:nl,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tC extends Hs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new GM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Zu(5,5,5),s=new Zr({name:"CubemapFromEquirect",uniforms:ol(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:oi,blending:Ns});s.uniforms.tEquirect.value=t;const o=new Vi(r,s),a=t.minFilter;return t.minFilter===_o&&(t.minFilter=Hn),new eC(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const tp=new K,nC=new K,iC=new et;class ao{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=tp.subVectors(i,t).cross(nC.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(tp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||iC.getNormalMatrix(e),r=this.coplanarPoint(tp).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Js=new Hd,jc=new K;class WM{constructor(e=new ao,t=new ao,i=new ao,r=new ao,s=new ao,o=new ao){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],v=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,f-u,m-p,y-h).normalize(),i[1].setComponents(l+s,f+u,m+p,y+h).normalize(),i[2].setComponents(l+o,f+c,m+_,y+v).normalize(),i[3].setComponents(l-o,f-c,m-_,y-v).normalize(),i[4].setComponents(l-a,f-d,m-g,y-x).normalize(),t===zr)i[5].setComponents(l+a,f+d,m+g,y+x).normalize();else if(t===md)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jc.x=r.normal.x>0?e.max.x:e.min.x,jc.y=r.normal.y>0?e.max.y:e.min.y,jc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function XM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function rC(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class bo extends es{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const v=h*f-o;for(let x=0;x<u;x++){const y=x*d-s;_.push(y,-v,0),g.push(0,0,1),m.push(x/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,y=v+u*(h+1),C=v+1+u*(h+1),w=v+1+u*h;p.push(x,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new Hr(_,3)),this.setAttribute("normal",new Hr(g,3)),this.setAttribute("uv",new Hr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.widthSegments,e.heightSegments)}}var sC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oC=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uC=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fC=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hC=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,pC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mC=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gC=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_C=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vC=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xC=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yC=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MC=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EC=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wC=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AC=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CC=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bC=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RC=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PC=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UC="gl_FragColor = linearToOutputTexel( gl_FragColor );",FC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,BC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$C=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ib=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Db=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$b=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_R=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ER=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,FR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:sC,alphahash_pars_fragment:oC,alphamap_fragment:aC,alphamap_pars_fragment:lC,alphatest_fragment:uC,alphatest_pars_fragment:cC,aomap_fragment:fC,aomap_pars_fragment:dC,batching_pars_vertex:hC,batching_vertex:pC,begin_vertex:mC,beginnormal_vertex:gC,bsdfs:_C,iridescence_fragment:vC,bumpmap_pars_fragment:xC,clipping_planes_fragment:yC,clipping_planes_pars_fragment:SC,clipping_planes_pars_vertex:MC,clipping_planes_vertex:EC,color_fragment:wC,color_pars_fragment:TC,color_pars_vertex:AC,color_vertex:CC,common:bC,cube_uv_reflection_fragment:RC,defaultnormal_vertex:PC,displacementmap_pars_vertex:DC,displacementmap_vertex:LC,emissivemap_fragment:NC,emissivemap_pars_fragment:IC,colorspace_fragment:UC,colorspace_pars_fragment:FC,envmap_fragment:OC,envmap_common_pars_fragment:kC,envmap_pars_fragment:zC,envmap_pars_vertex:BC,envmap_physical_pars_fragment:ZC,envmap_vertex:VC,fog_vertex:HC,fog_pars_vertex:GC,fog_fragment:WC,fog_pars_fragment:XC,gradientmap_pars_fragment:jC,lightmap_pars_fragment:YC,lights_lambert_fragment:$C,lights_lambert_pars_fragment:qC,lights_pars_begin:KC,lights_toon_fragment:QC,lights_toon_pars_fragment:JC,lights_phong_fragment:eb,lights_phong_pars_fragment:tb,lights_physical_fragment:nb,lights_physical_pars_fragment:ib,lights_fragment_begin:rb,lights_fragment_maps:sb,lights_fragment_end:ob,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:lb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:cb,map_fragment:fb,map_pars_fragment:db,map_particle_fragment:hb,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:_b,morphcolor_vertex:vb,morphnormal_vertex:xb,morphtarget_pars_vertex:yb,morphtarget_vertex:Sb,normal_fragment_begin:Mb,normal_fragment_maps:Eb,normal_pars_fragment:wb,normal_pars_vertex:Tb,normal_vertex:Ab,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:bb,clearcoat_normal_fragment_maps:Rb,clearcoat_pars_fragment:Pb,iridescence_pars_fragment:Db,opaque_fragment:Lb,packing:Nb,premultiplied_alpha_fragment:Ib,project_vertex:Ub,dithering_fragment:Fb,dithering_pars_fragment:Ob,roughnessmap_fragment:kb,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Bb,shadowmap_pars_vertex:Vb,shadowmap_vertex:Hb,shadowmask_pars_fragment:Gb,skinbase_vertex:Wb,skinning_pars_vertex:Xb,skinning_vertex:jb,skinnormal_vertex:Yb,specularmap_fragment:$b,specularmap_pars_fragment:qb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Zb,transmission_fragment:Qb,transmission_pars_fragment:Jb,uv_pars_fragment:eR,uv_pars_vertex:tR,uv_vertex:nR,worldpos_vertex:iR,background_vert:rR,background_frag:sR,backgroundCube_vert:oR,backgroundCube_frag:aR,cube_vert:lR,cube_frag:uR,depth_vert:cR,depth_frag:fR,distanceRGBA_vert:dR,distanceRGBA_frag:hR,equirect_vert:pR,equirect_frag:mR,linedashed_vert:gR,linedashed_frag:_R,meshbasic_vert:vR,meshbasic_frag:xR,meshlambert_vert:yR,meshlambert_frag:SR,meshmatcap_vert:MR,meshmatcap_frag:ER,meshnormal_vert:wR,meshnormal_frag:TR,meshphong_vert:AR,meshphong_frag:CR,meshphysical_vert:bR,meshphysical_frag:RR,meshtoon_vert:PR,meshtoon_frag:DR,points_vert:LR,points_frag:NR,shadow_vert:IR,shadow_frag:UR,sprite_vert:FR,sprite_frag:OR},xe={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},hr={basic:{uniforms:Un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Un([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Un([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Un([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new mt(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Un([xe.points,xe.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Un([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Un([xe.common,xe.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Un([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Un([xe.sprite,xe.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Un([xe.common,xe.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Un([xe.lights,xe.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};hr.physical={uniforms:Un([hr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Yc={r:0,b:0,g:0},eo=new Kr,kR=new Jt;function zR(n,e,t,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function g(v){let x=!1;const y=_(v);y===null?h(a,l):y&&y.isColor&&(h(y,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===Bd)?(c===void 0&&(c=new Vi(new Zu(1,1,1),new Zr({name:"BackgroundCubeMaterial",uniforms:ol(hr.backgroundCube.uniforms),vertexShader:hr.backgroundCube.vertexShader,fragmentShader:hr.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),eo.copy(x.backgroundRotation),eo.x*=-1,eo.y*=-1,eo.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kR.makeRotationFromEuler(eo)),c.material.toneMapped=vt.getTransfer(y.colorSpace)!==Lt,(d!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Vi(new bo(2,2),new Zr({name:"BackgroundMaterial",uniforms:ol(hr.background.uniforms),vertexShader:hr.background.vertexShader,fragmentShader:hr.background.fragmentShader,side:Vs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=vt.getTransfer(y.colorSpace)!==Lt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function h(v,x){v.getRGB(Yc,HM(n)),i.buffers.color.setClear(Yc.r,Yc.g,Yc.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(a,l)},render:g,addToRenderList:m}}function BR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(S,P,F,V,G){let Z=!1;const H=d(V,F,P);s!==H&&(s=H,u(s.object)),Z=p(S,V,F,G),Z&&_(S,V,F,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(S,P,F,V),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function d(S,P,F){const V=F.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let Z=G[P.id];Z===void 0&&(Z={},G[P.id]=Z);let H=Z[V];return H===void 0&&(H=f(l()),Z[V]=H),H}function f(S){const P=[],F=[],V=[];for(let G=0;G<t;G++)P[G]=0,F[G]=0,V[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,P,F,V){const G=s.attributes,Z=P.attributes;let H=0;const Y=F.getAttributes();for(const I in Y)if(Y[I].location>=0){const R=G[I];let oe=Z[I];if(oe===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),R===void 0||R.attribute!==oe||oe&&R.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==V}function _(S,P,F,V){const G={},Z=P.attributes;let H=0;const Y=F.getAttributes();for(const I in Y)if(Y[I].location>=0){let R=Z[I];R===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(R=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(R=S.instanceColor));const oe={};oe.attribute=R,R&&R.data&&(oe.data=R.data),G[I]=oe,H++}s.attributes=G,s.attributesNum=H,s.index=V}function g(){const S=s.newAttributes;for(let P=0,F=S.length;P<F;P++)S[P]=0}function m(S){h(S,0)}function h(S,P){const F=s.newAttributes,V=s.enabledAttributes,G=s.attributeDivisors;F[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),G[S]!==P&&(n.vertexAttribDivisor(S,P),G[S]=P)}function v(){const S=s.newAttributes,P=s.enabledAttributes;for(let F=0,V=P.length;F<V;F++)P[F]!==S[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function x(S,P,F,V,G,Z,H){H===!0?n.vertexAttribIPointer(S,P,F,G,Z):n.vertexAttribPointer(S,P,F,V,G,Z)}function y(S,P,F,V){g();const G=V.attributes,Z=F.getAttributes(),H=P.defaultAttributeValues;for(const Y in Z){const I=Z[Y];if(I.location>=0){let Q=G[Y];if(Q===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor)),Q!==void 0){const R=Q.normalized,oe=Q.itemSize,Se=e.get(Q);if(Se===void 0)continue;const Ge=Se.buffer,q=Se.type,se=Se.bytesPerElement,he=q===n.INT||q===n.UNSIGNED_INT||Q.gpuType===Rg;if(Q.isInterleavedBufferAttribute){const fe=Q.data,be=fe.stride,Ne=Q.offset;if(fe.isInstancedInterleavedBuffer){for(let We=0;We<I.locationSize;We++)h(I.location+We,fe.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let We=0;We<I.locationSize;We++)m(I.location+We);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let We=0;We<I.locationSize;We++)x(I.location+We,oe/I.locationSize,q,R,be*se,(Ne+oe/I.locationSize*We)*se,he)}else{if(Q.isInstancedBufferAttribute){for(let fe=0;fe<I.locationSize;fe++)h(I.location+fe,Q.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<I.locationSize;fe++)m(I.location+fe);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let fe=0;fe<I.locationSize;fe++)x(I.location+fe,oe/I.locationSize,q,R,oe*se,oe/I.locationSize*fe*se,he)}}else if(H!==void 0){const R=H[Y];if(R!==void 0)switch(R.length){case 2:n.vertexAttrib2fv(I.location,R);break;case 3:n.vertexAttrib3fv(I.location,R);break;case 4:n.vertexAttrib4fv(I.location,R);break;default:n.vertexAttrib1fv(I.location,R)}}}}v()}function C(){b();for(const S in i){const P=i[S];for(const F in P){const V=P[F];for(const G in V)c(V[G].object),delete V[G];delete P[F]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const F in P){const V=P[F];for(const G in V)c(V[G].object),delete V[G];delete P[F]}delete i[S.id]}function E(S){for(const P in i){const F=i[P];if(F[S.id]===void 0)continue;const V=F[S.id];for(const G in V)c(V[G].object),delete V[G];delete F[S.id]}}function b(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function VR(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,d){d!==0&&(n.drawArraysInstanced(i,u,c,d),t.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let _=0;_<d;_++)p+=c[_];t.update(p,i,1)}function l(u,c,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=c[g];for(let g=0;g<f.length;g++)t.update(_,i,f[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function HR(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Bi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const E=w===cl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==qr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==xr&&!E)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),h=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function GR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ao,a=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let y=h.clippingState||null;l.value=y,y=c(_,f,x,p);for(let C=0;C!==x;++C)y[C]=t[C];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function WR(n){let e=new WeakMap;function t(o,a){return a===Pm?o.mapping=nl:a===Dm&&(o.mapping=il),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Pm||a===Dm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new tC(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class XR extends _d{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Aa=4,r1=[.125,.215,.35,.446,.526,.582],co=20,np=new XR,s1=new mt;let ip=null,rp=0,sp=0,op=!1;const lo=(1+Math.sqrt(5))/2,la=1/lo,o1=[new K(-lo,la,0),new K(lo,la,0),new K(-la,0,lo),new K(la,0,lo),new K(0,lo,-la),new K(0,lo,la),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class a1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ip=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ip,rp,sp),this._renderer.xr.enabled=op,e.scissorTest=!1,$c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nl||e.mapping===il?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ip=this._renderer.getRenderTarget(),rp=this._renderer.getActiveCubeFace(),sp=this._renderer.getActiveMipmapLevel(),op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:cl,format:Bi,colorSpace:Ys,depthBuffer:!1},r=l1(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l1(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jR(s)),this._blurMaterial=YR(s,e,t)}return r}_compileMaterial(e){const t=new Vi(this._lodPlanes[0],e);this._renderer.compile(t,np)}_sceneToCubeUV(e,t,i,r){const a=new nr(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(s1),c.toneMapping=Is,c.autoClear=!1;const p=new zM({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1}),_=new Vi(new Zu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(s1),g=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;$c(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===nl||e.mapping===il;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=c1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Vi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$c(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,np)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=o1[(r-s-1)%o1.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Vi(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*co-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):co;m>co&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${co}`);const h=[];let v=0;for(let E=0;E<co;++E){const b=E/g,M=Math.exp(-b*b/2);h.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<h.length;E++)h[E]=h[E]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const y=this._sizeLods[r],C=3*y*(r>x-Aa?r-x+Aa:0),w=4*(this._cubeSize-y);$c(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(d,np)}}function jR(n){const e=[],t=[],i=[];let r=n;const s=n-Aa+1+r1.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Aa?l=r1[o-n+Aa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,v=new Float32Array(g*_*p),x=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,b=w>2?0:-1,M=[E,b,0,E+2/3,b,0,E+2/3,b+1,0,E,b,0,E+2/3,b+1,0,E,b+1,0];v.set(M,g*_*w),x.set(f,m*_*w);const S=[w,w,w,w,w,w];y.set(S,h*_*w)}const C=new es;C.setAttribute("position",new or(v,g)),C.setAttribute("uv",new or(x,m)),C.setAttribute("faceIndex",new or(y,h)),e.push(C),r>Aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function l1(n,e,t){const i=new Hs(n,e,t);return i.texture.mapping=Bd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $c(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function YR(n,e,t){const i=new Float32Array(co),r=new K(0,1,0);return new Zr({name:"SphericalGaussianBlur",defines:{n:co,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function u1(){return new Zr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function c1(){return new Zr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ns,depthTest:!1,depthWrite:!1})}function Fg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $R(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Pm||l===Dm,c=l===nl||l===il;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new a1(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new a1(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function qR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&du("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KR(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],w=v[x+1],E=v[x+2];f.push(C,w,w,E,E,C)}}else if(_!==void 0){const v=_.array;g=_.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,w=x+1,E=x+2;f.push(C,w,w,E,E,C)}}else return;const m=new(NM(f)?VM:BM)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function ZR(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,s,f*o,_),t.update(p,i,_))}function c(f,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,i,1)}function d(f,p,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)u(f[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,g,0,_);let h=0;for(let v=0;v<_;v++)h+=p[v];for(let v=0;v<g.length;v++)t.update(h,i,g[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function QR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function JR(n,e,t){const i=new WeakMap,r=new on;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),g===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const E=new Float32Array(C*w*4*d),b=new UM(E,C,w,d);b.type=xr,b.needsUpdate=!0;const M=y*4;for(let P=0;P<d;P++){const F=h[P],V=v[P],G=x[P],Z=C*w*4*P;for(let H=0;H<F.count;H++){const Y=H*M;_===!0&&(r.fromBufferAttribute(F,H),E[Z+Y+0]=r.x,E[Z+Y+1]=r.y,E[Z+Y+2]=r.z,E[Z+Y+3]=0),g===!0&&(r.fromBufferAttribute(V,H),E[Z+Y+4]=r.x,E[Z+Y+5]=r.y,E[Z+Y+6]=r.z,E[Z+Y+7]=0),m===!0&&(r.fromBufferAttribute(G,H),E[Z+Y+8]=r.x,E[Z+Y+9]=r.y,E[Z+Y+10]=r.z,E[Z+Y+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new qe(C,w)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function eP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class jM extends Wn{constructor(e,t,i,r,s,o,a,l,u,c=Ba){if(c!==Ba&&c!==sl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ba&&(i=Oo),i===void 0&&c===sl&&(i=rl),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Qn,this.minFilter=l!==void 0?l:Qn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const YM=new Wn,f1=new jM(1,1),$M=new UM,qM=new zA,KM=new GM,d1=[],h1=[],p1=new Float32Array(16),m1=new Float32Array(9),g1=new Float32Array(4);function dl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=d1[r];if(s===void 0&&(s=new Float32Array(r),d1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ln(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function un(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gd(n,e){let t=h1[e];t===void 0&&(t=new Int32Array(e),h1[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2fv(this.addr,e),un(t,e)}}function iP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;n.uniform3fv(this.addr,e),un(t,e)}}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4fv(this.addr,e),un(t,e)}}function sP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;g1.set(i),n.uniformMatrix2fv(this.addr,!1,g1),un(t,i)}}function oP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;m1.set(i),n.uniformMatrix3fv(this.addr,!1,m1),un(t,i)}}function aP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ln(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(ln(t,i))return;p1.set(i),n.uniformMatrix4fv(this.addr,!1,p1),un(t,i)}}function lP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2iv(this.addr,e),un(t,e)}}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3iv(this.addr,e),un(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4iv(this.addr,e),un(t,e)}}function dP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function hP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;n.uniform2uiv(this.addr,e),un(t,e)}}function pP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;n.uniform3uiv(this.addr,e),un(t,e)}}function mP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;n.uniform4uiv(this.addr,e),un(t,e)}}function gP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(f1.compareFunction=LM,s=f1):s=YM,t.setTexture2D(e||s,r)}function _P(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||qM,r)}function vP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||KM,r)}function xP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$M,r)}function yP(n){switch(n){case 5126:return tP;case 35664:return nP;case 35665:return iP;case 35666:return rP;case 35674:return sP;case 35675:return oP;case 35676:return aP;case 5124:case 35670:return lP;case 35667:case 35671:return uP;case 35668:case 35672:return cP;case 35669:case 35673:return fP;case 5125:return dP;case 36294:return hP;case 36295:return pP;case 36296:return mP;case 35678:case 36198:case 36298:case 36306:case 35682:return gP;case 35679:case 36299:case 36307:return _P;case 35680:case 36300:case 36308:case 36293:return vP;case 36289:case 36303:case 36311:case 36292:return xP}}function SP(n,e){n.uniform1fv(this.addr,e)}function MP(n,e){const t=dl(e,this.size,2);n.uniform2fv(this.addr,t)}function EP(n,e){const t=dl(e,this.size,3);n.uniform3fv(this.addr,t)}function wP(n,e){const t=dl(e,this.size,4);n.uniform4fv(this.addr,t)}function TP(n,e){const t=dl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AP(n,e){const t=dl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CP(n,e){const t=dl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bP(n,e){n.uniform1iv(this.addr,e)}function RP(n,e){n.uniform2iv(this.addr,e)}function PP(n,e){n.uniform3iv(this.addr,e)}function DP(n,e){n.uniform4iv(this.addr,e)}function LP(n,e){n.uniform1uiv(this.addr,e)}function NP(n,e){n.uniform2uiv(this.addr,e)}function IP(n,e){n.uniform3uiv(this.addr,e)}function UP(n,e){n.uniform4uiv(this.addr,e)}function FP(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||YM,s[o])}function OP(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||qM,s[o])}function kP(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||KM,s[o])}function zP(n,e,t){const i=this.cache,r=e.length,s=Gd(t,r);ln(i,s)||(n.uniform1iv(this.addr,s),un(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$M,s[o])}function BP(n){switch(n){case 5126:return SP;case 35664:return MP;case 35665:return EP;case 35666:return wP;case 35674:return TP;case 35675:return AP;case 35676:return CP;case 5124:case 35670:return bP;case 35667:case 35671:return RP;case 35668:case 35672:return PP;case 35669:case 35673:return DP;case 5125:return LP;case 36294:return NP;case 36295:return IP;case 36296:return UP;case 35678:case 36198:case 36298:case 36306:case 35682:return FP;case 35679:case 36299:case 36307:return OP;case 35680:case 36300:case 36308:case 36293:return kP;case 36289:case 36303:case 36311:case 36292:return zP}}class VP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=yP(t.type)}}class HP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BP(t.type)}}class GP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ap=/(\w+)(\])?(\[|\.)?/g;function _1(n,e){n.seq.push(e),n.map[e.id]=e}function WP(n,e,t){const i=n.name,r=i.length;for(ap.lastIndex=0;;){const s=ap.exec(i),o=ap.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){_1(t,u===void 0?new VP(a,n,e):new HP(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new GP(a),_1(t,d)),t=d}}}class Cf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);WP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function v1(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const XP=37297;let jP=0;function YP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function $P(n){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(n);let i;switch(e===t?i="":e===pd&&t===hd?i="LinearDisplayP3ToLinearSRGB":e===hd&&t===pd&&(i="LinearSRGBToLinearDisplayP3"),n){case Ys:case Vd:return[i,"LinearTransferOETF"];case dr:case Ug:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function x1(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+YP(n.getShaderSource(e),o)}else return r}function qP(n,e){const t=$P(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function KP(n,e){let t;switch(e){case dA:t="Linear";break;case hA:t="Reinhard";break;case pA:t="OptimizedCineon";break;case mA:t="ACESFilmic";break;case _A:t="AgX";break;case vA:t="Neutral";break;case gA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qc=new K;function ZP(){vt.getLuminanceCoefficients(qc);const n=qc.x.toFixed(4),e=qc.y.toFixed(4),t=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QP(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hl).join(`
`)}function JP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Hl(n){return n!==""}function y1(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function S1(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tD=/^[ \t]*#include +<([\w\d./]+)>/gm;function a0(n){return n.replace(tD,iD)}const nD=new Map;function iD(n,e){let t=Je[e];if(t===void 0){const i=nD.get(e);if(i!==void 0)t=Je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return a0(t)}const rD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M1(n){return n.replace(rD,sD)}function sD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function E1(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function oD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===k3?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rr&&(e="SHADOWMAP_TYPE_VSM"),e}function aD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nl:case il:e="ENVMAP_TYPE_CUBE";break;case Bd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lD(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case il:e="ENVMAP_MODE_REFRACTION";break}return e}function uD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yM:e="ENVMAP_BLENDING_MULTIPLY";break;case cA:e="ENVMAP_BLENDING_MIX";break;case fA:e="ENVMAP_BLENDING_ADD";break}return e}function cD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=oD(t),u=aD(t),c=lD(t),d=uD(t),f=cD(t),p=QP(t),_=JP(s),g=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hl).join(`
`),h.length>0&&(h+=`
`)):(m=[E1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hl).join(`
`),h=[E1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Is?"#define TONE_MAPPING":"",t.toneMapping!==Is?Je.tonemapping_pars_fragment:"",t.toneMapping!==Is?KP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,qP("linearToOutputTexel",t.outputColorSpace),ZP(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hl).join(`
`)),o=a0(o),o=y1(o,t),o=S1(o,t),a=a0(a),a=y1(a,t),a=S1(a,t),o=M1(o),a=M1(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+m+o,y=v+h+a,C=v1(r,r.VERTEX_SHADER,x),w=v1(r,r.FRAGMENT_SHADER,y);r.attachShader(g,C),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(P){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(g).trim(),V=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(w).trim();let Z=!0,H=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,w);else{const Y=x1(r,C,"vertex"),I=x1(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+Y+`
`+I)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(V===""||G==="")&&(H=!1);H&&(P.diagnostics={runnable:Z,programLog:F,vertexShader:{log:V,prefix:m},fragmentShader:{log:G,prefix:h}})}r.deleteShader(C),r.deleteShader(w),b=new Cf(r,g),M=eD(r,g)}let b;this.getUniforms=function(){return b===void 0&&E(this),b};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,XP)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=w,this}let dD=0;class hD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pD(e),t.set(e,i)),i}}class pD{constructor(e){this.id=dD++,this.code=e,this.usedTimes=0}}function mD(n,e,t,i,r,s,o){const a=new OM,l=new hD,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,P,F,V){const G=F.fog,Z=V.geometry,H=M.isMeshStandardMaterial?F.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),I=Y&&Y.mapping===Bd?Y.image.height:null,Q=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const R=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=R!==void 0?R.length:0;let Se=0;Z.morphAttributes.position!==void 0&&(Se=1),Z.morphAttributes.normal!==void 0&&(Se=2),Z.morphAttributes.color!==void 0&&(Se=3);let Ge,q,se,he;if(Q){const at=hr[Q];Ge=at.vertexShader,q=at.fragmentShader}else Ge=M.vertexShader,q=M.fragmentShader,l.update(M),se=l.getVertexShaderID(M),he=l.getFragmentShaderID(M);const fe=n.getRenderTarget(),be=V.isInstancedMesh===!0,Ne=V.isBatchedMesh===!0,We=!!M.map,Qe=!!M.matcap,N=!!Y,Ue=!!M.aoMap,ze=!!M.lightMap,Ye=!!M.bumpMap,Me=!!M.normalMap,j=!!M.displacementMap,Ae=!!M.emissiveMap,Oe=!!M.metalnessMap,L=!!M.roughnessMap,T=M.anisotropy>0,$=M.clearcoat>0,J=M.dispersion>0,D=M.iridescence>0,O=M.sheen>0,re=M.transmission>0,ee=T&&!!M.anisotropyMap,ae=$&&!!M.clearcoatMap,ye=$&&!!M.clearcoatNormalMap,le=$&&!!M.clearcoatRoughnessMap,me=D&&!!M.iridescenceMap,Pe=D&&!!M.iridescenceThicknessMap,Be=O&&!!M.sheenColorMap,ge=O&&!!M.sheenRoughnessMap,He=!!M.specularMap,$e=!!M.specularColorMap,pt=!!M.specularIntensityMap,z=re&&!!M.transmissionMap,te=re&&!!M.thicknessMap,ne=!!M.gradientMap,ie=!!M.alphaMap,de=M.alphaTest>0,Le=!!M.alphaHash,Ke=!!M.extensions;let Mt=Is;M.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Mt=n.toneMapping);const Et={shaderID:Q,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:q,defines:M.defines,customVertexShaderID:se,customFragmentShaderID:he,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ne,batchingColor:Ne&&V._colorsTexture!==null,instancing:be,instancingColor:be&&V.instanceColor!==null,instancingMorph:be&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?n.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ys,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:Qe,envMap:N,envMapMode:N&&Y.mapping,envMapCubeUVHeight:I,aoMap:Ue,lightMap:ze,bumpMap:Ye,normalMap:Me,displacementMap:f&&j,emissiveMap:Ae,normalMapObjectSpace:Me&&M.normalMapType===EA,normalMapTangentSpace:Me&&M.normalMapType===MA,metalnessMap:Oe,roughnessMap:L,anisotropy:T,anisotropyMap:ee,clearcoat:$,clearcoatMap:ae,clearcoatNormalMap:ye,clearcoatRoughnessMap:le,dispersion:J,iridescence:D,iridescenceMap:me,iridescenceThicknessMap:Pe,sheen:O,sheenColorMap:Be,sheenRoughnessMap:ge,specularMap:He,specularColorMap:$e,specularIntensityMap:pt,transmission:re,transmissionMap:z,thicknessMap:te,gradientMap:ne,opaque:M.transparent===!1&&M.blending===za&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:de,alphaHash:Le,combine:M.combine,mapUv:We&&g(M.map.channel),aoMapUv:Ue&&g(M.aoMap.channel),lightMapUv:ze&&g(M.lightMap.channel),bumpMapUv:Ye&&g(M.bumpMap.channel),normalMapUv:Me&&g(M.normalMap.channel),displacementMapUv:j&&g(M.displacementMap.channel),emissiveMapUv:Ae&&g(M.emissiveMap.channel),metalnessMapUv:Oe&&g(M.metalnessMap.channel),roughnessMapUv:L&&g(M.roughnessMap.channel),anisotropyMapUv:ee&&g(M.anisotropyMap.channel),clearcoatMapUv:ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ye&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(M.sheenRoughnessMap.channel),specularMapUv:He&&g(M.specularMap.channel),specularColorMapUv:$e&&g(M.specularColorMap.channel),specularIntensityMapUv:pt&&g(M.specularIntensityMap.channel),transmissionMapUv:z&&g(M.transmissionMap.channel),thicknessMapUv:te&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Me||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(We||ie),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Mt,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&vt.getTransfer(M.map.colorSpace)===Lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ur,flipSided:M.side===oi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ke&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&M.extensions.multiDraw===!0||Ne)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function h(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),M.push(a.mask)}function y(M){const S=_[M.type];let P;if(S){const F=hr[S];P=ZA.clone(F.uniforms)}else P=M.uniforms;return P}function C(M,S){let P;for(let F=0,V=c.length;F<V;F++){const G=c[F];if(G.cacheKey===S){P=G,++P.usedTimes;break}}return P===void 0&&(P=new fD(n,S,M,s),c.push(P)),P}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:b}}function gD(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function _D(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function w1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function T1(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||_D),i.length>1&&i.sort(f||w1),r.length>1&&r.sort(f||w1)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function vD(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new T1,n.set(i,[o])):r>=s.length?(o=new T1,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function xD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new mt};break;case"SpotLight":t={position:new K,direction:new K,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new K,halfWidth:new K,halfHeight:new K};break}return n[e.id]=t,t}}}function yD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SD=0;function MD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ED(n){const e=new xD,t=yD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,s=new Jt,o=new Jt;function a(u){let c=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,v=0,x=0,y=0,C=0,w=0,E=0;u.sort(MD);for(let M=0,S=u.length;M<S;M++){const P=u[M],F=P.color,V=P.intensity,G=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=F.r*V,d+=F.g*V,f+=F.b*V;else if(P.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(P.sh.coefficients[H],V);E++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,I=t.get(P);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=H,p++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(F).multiplyScalar(V),H.distance=G,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,i.spot[g]=H;const Y=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,Y.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[g]=Y.matrix,P.castShadow){const I=t.get(P);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,i.spotShadow[g]=I,i.spotShadowMap[g]=Z,y++}g++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(F).multiplyScalar(V),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=H,m++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,I=t.get(P);I.shadowIntensity=Y.intensity,I.shadowBias=Y.bias,I.shadowNormalBias=Y.normalBias,I.shadowRadius=Y.radius,I.shadowMapSize=Y.mapSize,I.shadowCameraNear=Y.camera.near,I.shadowCameraFar=Y.camera.far,i.pointShadow[_]=I,i.pointShadowMap[_]=Z,i.pointShadowMatrix[_]=P.shadow.matrix,x++}i.point[_]=H,_++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(V),H.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[h]=H,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==h||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,b.directionalLength=p,b.pointLength=_,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=h,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=E,i.version=SD++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const x=u[h];if(x.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function A1(n){const e=new ED(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new A1(n),e.set(r,[a])):s>=o.length?(a=new A1(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class TD extends Ku{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AD extends Ku{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RD(n,e,t){let i=new WM;const r=new qe,s=new qe,o=new on,a=new TD({depthPacking:SA}),l=new AD,u={},c=t.maxTextureSize,d={[Vs]:oi,[oi]:Vs,[Ur]:Ur},f=new Zr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:CD,fragmentShader:bD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new es;_.setAttribute("position",new or(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Vi(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xM;let h=this.type;this.render=function(w,E,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ns),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const V=h!==Rr&&this.type===Rr,G=h===Rr&&this.type!==Rr;for(let Z=0,H=w.length;Z<H;Z++){const Y=w[Z],I=Y.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const Q=I.getFrameExtents();if(r.multiply(Q),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Q.x),r.x=s.x*Q.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Q.y),r.y=s.y*Q.y,I.mapSize.y=s.y)),I.map===null||V===!0||G===!0){const oe=this.type!==Rr?{minFilter:Qn,magFilter:Qn}:{};I.map!==null&&I.map.dispose(),I.map=new Hs(r.x,r.y,oe),I.map.texture.name=Y.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const R=I.getViewportCount();for(let oe=0;oe<R;oe++){const Se=I.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),F.viewport(o),I.updateMatrices(Y,oe),i=I.getFrustum(),y(E,b,I.camera,Y,this.type)}I.isPointLightShadow!==!0&&this.type===Rr&&v(I,b),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,P)};function v(w,E){const b=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Hs(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,b,f,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,b,p,g,null)}function x(w,E,b,M){let S=null;const P=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=b.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=S.uuid,V=E.uuid;let G=u[F];G===void 0&&(G={},u[F]=G);let Z=G[V];Z===void 0&&(Z=S.clone(),G[V]=Z,E.addEventListener("dispose",C)),S=Z}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Rr?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:d[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=b}return S}function y(w,E,b,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Rr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const V=e.update(w),G=w.material;if(Array.isArray(G)){const Z=V.groups;for(let H=0,Y=Z.length;H<Y;H++){const I=Z[H],Q=G[I.materialIndex];if(Q&&Q.visible){const R=x(w,Q,M,S);w.onBeforeShadow(n,w,E,b,V,R,I),n.renderBufferDirect(b,null,V,R,w,I),w.onAfterShadow(n,w,E,b,V,R,I)}}}else if(G.visible){const Z=x(w,G,M,S);w.onBeforeShadow(n,w,E,b,V,Z,null),n.renderBufferDirect(b,null,V,Z,w,null),w.onAfterShadow(n,w,E,b,V,Z,null)}}const F=w.children;for(let V=0,G=F.length;V<G;V++)y(F[V],E,b,M,S)}function C(w){w.target.removeEventListener("dispose",C);for(const b in u){const M=u[b],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function PD(n){function e(){let z=!1;const te=new on;let ne=null;const ie=new on(0,0,0,0);return{setMask:function(de){ne!==de&&!z&&(n.colorMask(de,de,de,de),ne=de)},setLocked:function(de){z=de},setClear:function(de,Le,Ke,Mt,Et){Et===!0&&(de*=Mt,Le*=Mt,Ke*=Mt),te.set(de,Le,Ke,Mt),ie.equals(te)===!1&&(n.clearColor(de,Le,Ke,Mt),ie.copy(te))},reset:function(){z=!1,ne=null,ie.set(-1,0,0,0)}}}function t(){let z=!1,te=null,ne=null,ie=null;return{setTest:function(de){de?he(n.DEPTH_TEST):fe(n.DEPTH_TEST)},setMask:function(de){te!==de&&!z&&(n.depthMask(de),te=de)},setFunc:function(de){if(ne!==de){switch(de){case iA:n.depthFunc(n.NEVER);break;case rA:n.depthFunc(n.ALWAYS);break;case sA:n.depthFunc(n.LESS);break;case fd:n.depthFunc(n.LEQUAL);break;case oA:n.depthFunc(n.EQUAL);break;case aA:n.depthFunc(n.GEQUAL);break;case lA:n.depthFunc(n.GREATER);break;case uA:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=de}},setLocked:function(de){z=de},setClear:function(de){ie!==de&&(n.clearDepth(de),ie=de)},reset:function(){z=!1,te=null,ne=null,ie=null}}}function i(){let z=!1,te=null,ne=null,ie=null,de=null,Le=null,Ke=null,Mt=null,Et=null;return{setTest:function(at){z||(at?he(n.STENCIL_TEST):fe(n.STENCIL_TEST))},setMask:function(at){te!==at&&!z&&(n.stencilMask(at),te=at)},setFunc:function(at,Ve,De){(ne!==at||ie!==Ve||de!==De)&&(n.stencilFunc(at,Ve,De),ne=at,ie=Ve,de=De)},setOp:function(at,Ve,De){(Le!==at||Ke!==Ve||Mt!==De)&&(n.stencilOp(at,Ve,De),Le=at,Ke=Ve,Mt=De)},setLocked:function(at){z=at},setClear:function(at){Et!==at&&(n.clearStencil(at),Et=at)},reset:function(){z=!1,te=null,ne=null,ie=null,de=null,Le=null,Ke=null,Mt=null,Et=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,y=null,C=null,w=new mt(0,0,0),E=0,b=!1,M=null,S=null,P=null,F=null,V=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,H=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=H>=2);let I=null,Q={};const R=n.getParameter(n.SCISSOR_BOX),oe=n.getParameter(n.VIEWPORT),Se=new on().fromArray(R),Ge=new on().fromArray(oe);function q(z,te,ne,ie){const de=new Uint8Array(4),Le=n.createTexture();n.bindTexture(z,Le),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ne;Ke++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(te,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(te+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return Le}const se={};se[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(n.DEPTH_TEST),s.setFunc(fd),Ye(!1),Me(Nv),he(n.CULL_FACE),Ue(Ns);function he(z){u[z]!==!0&&(n.enable(z),u[z]=!0)}function fe(z){u[z]!==!1&&(n.disable(z),u[z]=!1)}function be(z,te){return c[z]!==te?(n.bindFramebuffer(z,te),c[z]=te,z===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=te),z===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=te),!0):!1}function Ne(z,te){let ne=f,ie=!1;if(z){ne=d.get(te),ne===void 0&&(ne=[],d.set(te,ne));const de=z.textures;if(ne.length!==de.length||ne[0]!==n.COLOR_ATTACHMENT0){for(let Le=0,Ke=de.length;Le<Ke;Le++)ne[Le]=n.COLOR_ATTACHMENT0+Le;ne.length=de.length,ie=!0}}else ne[0]!==n.BACK&&(ne[0]=n.BACK,ie=!0);ie&&n.drawBuffers(ne)}function We(z){return p!==z?(n.useProgram(z),p=z,!0):!1}const Qe={[uo]:n.FUNC_ADD,[B3]:n.FUNC_SUBTRACT,[V3]:n.FUNC_REVERSE_SUBTRACT};Qe[H3]=n.MIN,Qe[G3]=n.MAX;const N={[W3]:n.ZERO,[X3]:n.ONE,[j3]:n.SRC_COLOR,[bm]:n.SRC_ALPHA,[Q3]:n.SRC_ALPHA_SATURATE,[K3]:n.DST_COLOR,[$3]:n.DST_ALPHA,[Y3]:n.ONE_MINUS_SRC_COLOR,[Rm]:n.ONE_MINUS_SRC_ALPHA,[Z3]:n.ONE_MINUS_DST_COLOR,[q3]:n.ONE_MINUS_DST_ALPHA,[J3]:n.CONSTANT_COLOR,[eA]:n.ONE_MINUS_CONSTANT_COLOR,[tA]:n.CONSTANT_ALPHA,[nA]:n.ONE_MINUS_CONSTANT_ALPHA};function Ue(z,te,ne,ie,de,Le,Ke,Mt,Et,at){if(z===Ns){_===!0&&(fe(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),z!==z3){if(z!==g||at!==b){if((m!==uo||x!==uo)&&(n.blendEquation(n.FUNC_ADD),m=uo,x=uo),at)switch(z){case za:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cm:n.blendFunc(n.ONE,n.ONE);break;case Iv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case za:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Cm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Iv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}h=null,v=null,y=null,C=null,w.set(0,0,0),E=0,g=z,b=at}return}de=de||te,Le=Le||ne,Ke=Ke||ie,(te!==m||de!==x)&&(n.blendEquationSeparate(Qe[te],Qe[de]),m=te,x=de),(ne!==h||ie!==v||Le!==y||Ke!==C)&&(n.blendFuncSeparate(N[ne],N[ie],N[Le],N[Ke]),h=ne,v=ie,y=Le,C=Ke),(Mt.equals(w)===!1||Et!==E)&&(n.blendColor(Mt.r,Mt.g,Mt.b,Et),w.copy(Mt),E=Et),g=z,b=!1}function ze(z,te){z.side===Ur?fe(n.CULL_FACE):he(n.CULL_FACE);let ne=z.side===oi;te&&(ne=!ne),Ye(ne),z.blending===za&&z.transparent===!1?Ue(Ns):Ue(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),s.setFunc(z.depthFunc),s.setTest(z.depthTest),s.setMask(z.depthWrite),r.setMask(z.colorWrite);const ie=z.stencilWrite;o.setTest(ie),ie&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ae(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(z){M!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),M=z)}function Me(z){z!==F3?(he(n.CULL_FACE),z!==S&&(z===Nv?n.cullFace(n.BACK):z===O3?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):fe(n.CULL_FACE),S=z}function j(z){z!==P&&(Z&&n.lineWidth(z),P=z)}function Ae(z,te,ne){z?(he(n.POLYGON_OFFSET_FILL),(F!==te||V!==ne)&&(n.polygonOffset(te,ne),F=te,V=ne)):fe(n.POLYGON_OFFSET_FILL)}function Oe(z){z?he(n.SCISSOR_TEST):fe(n.SCISSOR_TEST)}function L(z){z===void 0&&(z=n.TEXTURE0+G-1),I!==z&&(n.activeTexture(z),I=z)}function T(z,te,ne){ne===void 0&&(I===null?ne=n.TEXTURE0+G-1:ne=I);let ie=Q[ne];ie===void 0&&(ie={type:void 0,texture:void 0},Q[ne]=ie),(ie.type!==z||ie.texture!==te)&&(I!==ne&&(n.activeTexture(ne),I=ne),n.bindTexture(z,te||se[z]),ie.type=z,ie.texture=te)}function $(){const z=Q[I];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function D(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ae(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function le(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Be(z){Se.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),Se.copy(z))}function ge(z){Ge.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),Ge.copy(z))}function He(z,te){let ne=l.get(te);ne===void 0&&(ne=new WeakMap,l.set(te,ne));let ie=ne.get(z);ie===void 0&&(ie=n.getUniformBlockIndex(te,z.name),ne.set(z,ie))}function $e(z,te){const ie=l.get(te).get(z);a.get(te)!==ie&&(n.uniformBlockBinding(te,ie,z.__bindingPointIndex),a.set(te,ie))}function pt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},I=null,Q={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,v=null,x=null,y=null,C=null,w=new mt(0,0,0),E=0,b=!1,M=null,S=null,P=null,F=null,V=null,Se.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:fe,bindFramebuffer:be,drawBuffers:Ne,useProgram:We,setBlending:Ue,setMaterial:ze,setFlipSided:Ye,setCullFace:Me,setLineWidth:j,setPolygonOffset:Ae,setScissorTest:Oe,activeTexture:L,bindTexture:T,unbindTexture:$,compressedTexImage2D:J,compressedTexImage3D:D,texImage2D:me,texImage3D:Pe,updateUBOMapping:He,uniformBlockBinding:$e,texStorage2D:ye,texStorage3D:le,texSubImage2D:O,texSubImage3D:re,compressedTexSubImage2D:ee,compressedTexSubImage3D:ae,scissor:Be,viewport:ge,reset:pt}}function C1(n,e,t,i){const r=DD(i);switch(t){case TM:return n*e;case CM:return n*e;case bM:return n*e*2;case RM:return n*e/r.components*r.byteLength;case Lg:return n*e/r.components*r.byteLength;case PM:return n*e*2/r.components*r.byteLength;case Ng:return n*e*2/r.components*r.byteLength;case AM:return n*e*3/r.components*r.byteLength;case Bi:return n*e*4/r.components*r.byteLength;case Ig:return n*e*4/r.components*r.byteLength;case Mf:case Ef:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wf:case Tf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Um:case Om:return Math.max(n,16)*Math.max(e,8)/4;case Im:case Fm:return Math.max(n,8)*Math.max(e,8)/2;case km:case zm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ym:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $m:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case qm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Km:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zm:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Qm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Jm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case e0:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Af:case t0:case n0:return Math.ceil(n/4)*Math.ceil(e/4)*16;case DM:case i0:return Math.ceil(n/4)*Math.ceil(e/4)*8;case r0:case s0:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function DD(n){switch(n){case qr:case MM:return{byteLength:1,components:1};case zu:case EM:case cl:return{byteLength:2,components:1};case Pg:case Dg:return{byteLength:2,components:4};case Oo:case Rg:case xr:return{byteLength:4,components:1};case wM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function LD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new qe,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return p?new OffscreenCanvas(L,T):gd("canvas")}function g(L,T,$){let J=1;const D=Oe(L);if((D.width>$||D.height>$)&&(J=$/Math.max(D.width,D.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const O=Math.floor(J*D.width),re=Math.floor(J*D.height);d===void 0&&(d=_(O,re));const ee=T?_(O,re):d;return ee.width=O,ee.height=re,ee.getContext("2d").drawImage(L,0,0,O,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+O+"x"+re+")."),ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==Qn&&L.minFilter!==Hn}function h(L){n.generateMipmap(L)}function v(L,T,$,J,D=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let O=T;if(T===n.RED&&($===n.FLOAT&&(O=n.R32F),$===n.HALF_FLOAT&&(O=n.R16F),$===n.UNSIGNED_BYTE&&(O=n.R8)),T===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(O=n.R8UI),$===n.UNSIGNED_SHORT&&(O=n.R16UI),$===n.UNSIGNED_INT&&(O=n.R32UI),$===n.BYTE&&(O=n.R8I),$===n.SHORT&&(O=n.R16I),$===n.INT&&(O=n.R32I)),T===n.RG&&($===n.FLOAT&&(O=n.RG32F),$===n.HALF_FLOAT&&(O=n.RG16F),$===n.UNSIGNED_BYTE&&(O=n.RG8)),T===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(O=n.RG8UI),$===n.UNSIGNED_SHORT&&(O=n.RG16UI),$===n.UNSIGNED_INT&&(O=n.RG32UI),$===n.BYTE&&(O=n.RG8I),$===n.SHORT&&(O=n.RG16I),$===n.INT&&(O=n.RG32I)),T===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(O=n.RGB9_E5),T===n.RGBA){const re=D?dd:vt.getTransfer(J);$===n.FLOAT&&(O=n.RGBA32F),$===n.HALF_FLOAT&&(O=n.RGBA16F),$===n.UNSIGNED_BYTE&&(O=re===Lt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(O=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(O=n.RGB5_A1)}return(O===n.R16F||O===n.R32F||O===n.RG16F||O===n.RG32F||O===n.RGBA16F||O===n.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function x(L,T){let $;return L?T===null||T===Oo||T===rl?$=n.DEPTH24_STENCIL8:T===xr?$=n.DEPTH32F_STENCIL8:T===zu&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Oo||T===rl?$=n.DEPTH_COMPONENT24:T===xr?$=n.DEPTH_COMPONENT32F:T===zu&&($=n.DEPTH_COMPONENT16),$}function y(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Qn&&L.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function C(L){const T=L.target;T.removeEventListener("dispose",C),E(T),T.isVideoTexture&&c.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),M(T)}function E(L){const T=i.get(L);if(T.__webglInit===void 0)return;const $=L.source,J=f.get($);if(J){const D=J[T.__cacheKey];D.usedTimes--,D.usedTimes===0&&b(L),Object.keys(J).length===0&&f.delete($)}i.remove(L)}function b(L){const T=i.get(L);n.deleteTexture(T.__webglTexture);const $=L.source,J=f.get($);delete J[T.__cacheKey],o.memory.textures--}function M(L){const T=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(T.__webglFramebuffer[J]))for(let D=0;D<T.__webglFramebuffer[J].length;D++)n.deleteFramebuffer(T.__webglFramebuffer[J][D]);else n.deleteFramebuffer(T.__webglFramebuffer[J]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[J])}else{if(Array.isArray(T.__webglFramebuffer))for(let J=0;J<T.__webglFramebuffer.length;J++)n.deleteFramebuffer(T.__webglFramebuffer[J]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let J=0;J<T.__webglColorRenderbuffer.length;J++)T.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[J]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const $=L.textures;for(let J=0,D=$.length;J<D;J++){const O=i.get($[J]);O.__webglTexture&&(n.deleteTexture(O.__webglTexture),o.memory.textures--),i.remove($[J])}i.remove(L)}let S=0;function P(){S=0}function F(){const L=S;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),S+=1,L}function V(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function G(L,T){const $=i.get(L);if(L.isVideoTexture&&j(L),L.isRenderTargetTexture===!1&&L.version>0&&$.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge($,L,T);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+T)}function Z(L,T){const $=i.get(L);if(L.version>0&&$.__version!==L.version){Ge($,L,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+T)}function H(L,T){const $=i.get(L);if(L.version>0&&$.__version!==L.version){Ge($,L,T);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+T)}function Y(L,T){const $=i.get(L);if(L.version>0&&$.__version!==L.version){q($,L,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+T)}const I={[Lm]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[Nm]:n.MIRRORED_REPEAT},Q={[Qn]:n.NEAREST,[xA]:n.NEAREST_MIPMAP_NEAREST,[bc]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[Uh]:n.LINEAR_MIPMAP_NEAREST,[_o]:n.LINEAR_MIPMAP_LINEAR},R={[wA]:n.NEVER,[PA]:n.ALWAYS,[TA]:n.LESS,[LM]:n.LEQUAL,[AA]:n.EQUAL,[RA]:n.GEQUAL,[CA]:n.GREATER,[bA]:n.NOTEQUAL};function oe(L,T){if(T.type===xr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===Uh||T.magFilter===bc||T.magFilter===_o||T.minFilter===Hn||T.minFilter===Uh||T.minFilter===bc||T.minFilter===_o)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,I[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,I[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,I[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Q[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,R[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Qn||T.minFilter!==bc&&T.minFilter!==_o||T.type===xr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Se(L,T){let $=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",C));const J=T.source;let D=f.get(J);D===void 0&&(D={},f.set(J,D));const O=V(T);if(O!==L.__cacheKey){D[O]===void 0&&(D[O]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,$=!0),D[O].usedTimes++;const re=D[L.__cacheKey];re!==void 0&&(D[L.__cacheKey].usedTimes--,re.usedTimes===0&&b(T)),L.__cacheKey=O,L.__webglTexture=D[O].texture}return $}function Ge(L,T,$){let J=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(J=n.TEXTURE_3D);const D=Se(L,T),O=T.source;t.bindTexture(J,L.__webglTexture,n.TEXTURE0+$);const re=i.get(O);if(O.version!==re.__version||D===!0){t.activeTexture(n.TEXTURE0+$);const ee=vt.getPrimaries(vt.workingColorSpace),ae=T.colorSpace===ps?null:vt.getPrimaries(T.colorSpace),ye=T.colorSpace===ps||ee===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let le=g(T.image,!1,r.maxTextureSize);le=Ae(T,le);const me=s.convert(T.format,T.colorSpace),Pe=s.convert(T.type);let Be=v(T.internalFormat,me,Pe,T.colorSpace,T.isVideoTexture);oe(J,T);let ge;const He=T.mipmaps,$e=T.isVideoTexture!==!0,pt=re.__version===void 0||D===!0,z=O.dataReady,te=y(T,le);if(T.isDepthTexture)Be=x(T.format===sl,T.type),pt&&($e?t.texStorage2D(n.TEXTURE_2D,1,Be,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Be,le.width,le.height,0,me,Pe,null));else if(T.isDataTexture)if(He.length>0){$e&&pt&&t.texStorage2D(n.TEXTURE_2D,te,Be,He[0].width,He[0].height);for(let ne=0,ie=He.length;ne<ie;ne++)ge=He[ne],$e?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,ne,Be,ge.width,ge.height,0,me,Pe,ge.data);T.generateMipmaps=!1}else $e?(pt&&t.texStorage2D(n.TEXTURE_2D,te,Be,le.width,le.height),z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le.width,le.height,me,Pe,le.data)):t.texImage2D(n.TEXTURE_2D,0,Be,le.width,le.height,0,me,Pe,le.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){$e&&pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Be,He[0].width,He[0].height,le.depth);for(let ne=0,ie=He.length;ne<ie;ne++)if(ge=He[ne],T.format!==Bi)if(me!==null)if($e){if(z)if(T.layerUpdates.size>0){const de=C1(ge.width,ge.height,T.format,T.type);for(const Le of T.layerUpdates){const Ke=ge.data.subarray(Le*de/ge.data.BYTES_PER_ELEMENT,(Le+1)*de/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,Le,ge.width,ge.height,1,me,Ke,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,le.depth,me,ge.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,Be,ge.width,ge.height,le.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,le.depth,me,Pe,ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,Be,ge.width,ge.height,le.depth,0,me,Pe,ge.data)}else{$e&&pt&&t.texStorage2D(n.TEXTURE_2D,te,Be,He[0].width,He[0].height);for(let ne=0,ie=He.length;ne<ie;ne++)ge=He[ne],T.format!==Bi?me!==null?$e?z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,Be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,ge.width,ge.height,me,Pe,ge.data):t.texImage2D(n.TEXTURE_2D,ne,Be,ge.width,ge.height,0,me,Pe,ge.data)}else if(T.isDataArrayTexture)if($e){if(pt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,te,Be,le.width,le.height,le.depth),z)if(T.layerUpdates.size>0){const ne=C1(le.width,le.height,T.format,T.type);for(const ie of T.layerUpdates){const de=le.data.subarray(ie*ne/le.data.BYTES_PER_ELEMENT,(ie+1)*ne/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,le.width,le.height,1,me,Pe,de)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,me,Pe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,le.width,le.height,le.depth,0,me,Pe,le.data);else if(T.isData3DTexture)$e?(pt&&t.texStorage3D(n.TEXTURE_3D,te,Be,le.width,le.height,le.depth),z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,me,Pe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Be,le.width,le.height,le.depth,0,me,Pe,le.data);else if(T.isFramebufferTexture){if(pt)if($e)t.texStorage2D(n.TEXTURE_2D,te,Be,le.width,le.height);else{let ne=le.width,ie=le.height;for(let de=0;de<te;de++)t.texImage2D(n.TEXTURE_2D,de,Be,ne,ie,0,me,Pe,null),ne>>=1,ie>>=1}}else if(He.length>0){if($e&&pt){const ne=Oe(He[0]);t.texStorage2D(n.TEXTURE_2D,te,Be,ne.width,ne.height)}for(let ne=0,ie=He.length;ne<ie;ne++)ge=He[ne],$e?z&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me,Pe,ge):t.texImage2D(n.TEXTURE_2D,ne,Be,me,Pe,ge);T.generateMipmaps=!1}else if($e){if(pt){const ne=Oe(le);t.texStorage2D(n.TEXTURE_2D,te,Be,ne.width,ne.height)}z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Pe,le)}else t.texImage2D(n.TEXTURE_2D,0,Be,me,Pe,le);m(T)&&h(J),re.__version=O.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function q(L,T,$){if(T.image.length!==6)return;const J=Se(L,T),D=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+$);const O=i.get(D);if(D.version!==O.__version||J===!0){t.activeTexture(n.TEXTURE0+$);const re=vt.getPrimaries(vt.workingColorSpace),ee=T.colorSpace===ps?null:vt.getPrimaries(T.colorSpace),ae=T.colorSpace===ps||re===ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const ye=T.isCompressedTexture||T.image[0].isCompressedTexture,le=T.image[0]&&T.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!ye&&!le?me[ie]=g(T.image[ie],!0,r.maxCubemapSize):me[ie]=le?T.image[ie].image:T.image[ie],me[ie]=Ae(T,me[ie]);const Pe=me[0],Be=s.convert(T.format,T.colorSpace),ge=s.convert(T.type),He=v(T.internalFormat,Be,ge,T.colorSpace),$e=T.isVideoTexture!==!0,pt=O.__version===void 0||J===!0,z=D.dataReady;let te=y(T,Pe);oe(n.TEXTURE_CUBE_MAP,T);let ne;if(ye){$e&&pt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,te,He,Pe.width,Pe.height);for(let ie=0;ie<6;ie++){ne=me[ie].mipmaps;for(let de=0;de<ne.length;de++){const Le=ne[de];T.format!==Bi?Be!==null?$e?z&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,0,0,Le.width,Le.height,Be,Le.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,He,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,0,0,Le.width,Le.height,Be,ge,Le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de,He,Le.width,Le.height,0,Be,ge,Le.data)}}}else{if(ne=T.mipmaps,$e&&pt){ne.length>0&&te++;const ie=Oe(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,te,He,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(le){$e?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Be,ge,me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,me[ie].width,me[ie].height,0,Be,ge,me[ie].data);for(let de=0;de<ne.length;de++){const Ke=ne[de].image[ie].image;$e?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,0,0,Ke.width,Ke.height,Be,ge,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,He,Ke.width,Ke.height,0,Be,ge,Ke.data)}}else{$e?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Be,ge,me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,He,Be,ge,me[ie]);for(let de=0;de<ne.length;de++){const Le=ne[de];$e?z&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,0,0,Be,ge,Le.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,de+1,He,Be,ge,Le.image[ie])}}}m(T)&&h(n.TEXTURE_CUBE_MAP),O.__version=D.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function se(L,T,$,J,D,O){const re=s.convert($.format,$.colorSpace),ee=s.convert($.type),ae=v($.internalFormat,re,ee,$.colorSpace);if(!i.get(T).__hasExternalTextures){const le=Math.max(1,T.width>>O),me=Math.max(1,T.height>>O);D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?t.texImage3D(D,O,ae,le,me,T.depth,0,re,ee,null):t.texImage2D(D,O,ae,le,me,0,re,ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Me(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,D,i.get($).__webglTexture,0,Ye(T)):(D===n.TEXTURE_2D||D>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&D<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,D,i.get($).__webglTexture,O),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(L,T,$){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){const J=T.depthTexture,D=J&&J.isDepthTexture?J.type:null,O=x(T.stencilBuffer,D),re=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=Ye(T);Me(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,O,T.width,T.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,O,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,O,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,L)}else{const J=T.textures;for(let D=0;D<J.length;D++){const O=J[D],re=s.convert(O.format,O.colorSpace),ee=s.convert(O.type),ae=v(O.internalFormat,re,ee,O.colorSpace),ye=Ye(T);$&&Me(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,ae,T.width,T.height):Me(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ye,ae,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ae,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const J=i.get(T.depthTexture).__webglTexture,D=Ye(T);if(T.depthTexture.format===Ba)Me(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(T.depthTexture.format===sl)Me(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,D):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function be(L){const T=i.get(L),$=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,L)}else if($){T.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[J]),T.__webglDepthbuffer[J]=n.createRenderbuffer(),he(T.__webglDepthbuffer[J],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),he(T.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ne(L,T,$){const J=i.get(L);T!==void 0&&se(J.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&be(L)}function We(L){const T=L.texture,$=i.get(L),J=i.get(T);L.addEventListener("dispose",w);const D=L.textures,O=L.isWebGLCubeRenderTarget===!0,re=D.length>1;if(re||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=T.version,o.memory.textures++),O){$.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer[ee]=[];for(let ae=0;ae<T.mipmaps.length;ae++)$.__webglFramebuffer[ee][ae]=n.createFramebuffer()}else $.__webglFramebuffer[ee]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){$.__webglFramebuffer=[];for(let ee=0;ee<T.mipmaps.length;ee++)$.__webglFramebuffer[ee]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(re)for(let ee=0,ae=D.length;ee<ae;ee++){const ye=i.get(D[ee]);ye.__webglTexture===void 0&&(ye.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&Me(L)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ee=0;ee<D.length;ee++){const ae=D[ee];$.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[ee]);const ye=s.convert(ae.format,ae.colorSpace),le=s.convert(ae.type),me=v(ae.internalFormat,ye,le,ae.colorSpace,L.isXRRenderTarget===!0),Pe=Ye(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,me,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,$.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),he($.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(O){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),oe(n.TEXTURE_CUBE_MAP,T);for(let ee=0;ee<6;ee++)if(T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)se($.__webglFramebuffer[ee][ae],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ae);else se($.__webglFramebuffer[ee],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(T)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let ee=0,ae=D.length;ee<ae;ee++){const ye=D[ee],le=i.get(ye);t.bindTexture(n.TEXTURE_2D,le.__webglTexture),oe(n.TEXTURE_2D,ye),se($.__webglFramebuffer,L,ye,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D,0),m(ye)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ee,J.__webglTexture),oe(ee,T),T.mipmaps&&T.mipmaps.length>0)for(let ae=0;ae<T.mipmaps.length;ae++)se($.__webglFramebuffer[ae],L,T,n.COLOR_ATTACHMENT0,ee,ae);else se($.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,ee,0);m(T)&&h(ee),t.unbindTexture()}L.depthBuffer&&be(L)}function Qe(L){const T=L.textures;for(let $=0,J=T.length;$<J;$++){const D=T[$];if(m(D)){const O=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,re=i.get(D).__webglTexture;t.bindTexture(O,re),h(O),t.unbindTexture()}}}const N=[],Ue=[];function ze(L){if(L.samples>0){if(Me(L)===!1){const T=L.textures,$=L.width,J=L.height;let D=n.COLOR_BUFFER_BIT;const O=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(L),ee=T.length>1;if(ee)for(let ae=0;ae<T.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<T.length;ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(D|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(D|=n.STENCIL_BUFFER_BIT)),ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const ye=i.get(T[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,$,J,0,0,$,J,D,n.NEAREST),l===!0&&(N.length=0,Ue.length=0,N.push(n.COLOR_ATTACHMENT0+ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(N.push(O),Ue.push(O),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,N))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let ae=0;ae<T.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);const ye=i.get(T[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ye(L){return Math.min(r.maxSamples,L.samples)}function Me(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function j(L){const T=o.render.frame;c.get(L)!==T&&(c.set(L,T),L.update())}function Ae(L,T){const $=L.colorSpace,J=L.format,D=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||$!==Ys&&$!==ps&&(vt.getTransfer($)===Lt?(J!==Bi||D!==qr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),T}function Oe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=G,this.setTexture2DArray=Z,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=Ne,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Me}function ND(n,e){function t(i,r=ps){let s;const o=vt.getTransfer(r);if(i===qr)return n.UNSIGNED_BYTE;if(i===Pg)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dg)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wM)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===MM)return n.BYTE;if(i===EM)return n.SHORT;if(i===zu)return n.UNSIGNED_SHORT;if(i===Rg)return n.INT;if(i===Oo)return n.UNSIGNED_INT;if(i===xr)return n.FLOAT;if(i===cl)return n.HALF_FLOAT;if(i===TM)return n.ALPHA;if(i===AM)return n.RGB;if(i===Bi)return n.RGBA;if(i===CM)return n.LUMINANCE;if(i===bM)return n.LUMINANCE_ALPHA;if(i===Ba)return n.DEPTH_COMPONENT;if(i===sl)return n.DEPTH_STENCIL;if(i===RM)return n.RED;if(i===Lg)return n.RED_INTEGER;if(i===PM)return n.RG;if(i===Ng)return n.RG_INTEGER;if(i===Ig)return n.RGBA_INTEGER;if(i===Mf||i===Ef||i===wf||i===Tf)if(o===Lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ef)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Tf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ef)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===wf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Tf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Im||i===Um||i===Fm||i===Om)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Im)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Um)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Om)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===km||i===zm||i===Bm)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===km||i===zm)return o===Lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Bm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vm||i===Hm||i===Gm||i===Wm||i===Xm||i===jm||i===Ym||i===$m||i===qm||i===Km||i===Zm||i===Qm||i===Jm||i===e0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ym)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$m)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===qm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Km)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jm)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===e0)return o===Lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Af||i===t0||i===n0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Af)return o===Lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===t0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===n0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===DM||i===i0||i===r0||i===s0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Af)return s.COMPRESSED_RED_RGTC1_EXT;if(i===i0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===r0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===s0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class ID extends nr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kc extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UD={type:"move"};class lp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const FD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Wn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Zr({vertexShader:FD,fragmentShader:OD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vi(new bo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zD extends fl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new kD,m=t.getContextAttributes();let h=null,v=null;const x=[],y=[],C=new qe;let w=null;const E=new nr;E.layers.enable(1),E.viewport=new on;const b=new nr;b.layers.enable(2),b.viewport=new on;const M=[E,b],S=new ID;S.layers.enable(1),S.layers.enable(2);let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let se=x[q];return se===void 0&&(se=new lp,x[q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(q){let se=x[q];return se===void 0&&(se=new lp,x[q]=se),se.getGripSpace()},this.getHand=function(q){let se=x[q];return se===void 0&&(se=new lp,x[q]=se),se.getHandSpace()};function V(q){const se=y.indexOf(q.inputSource);if(se===-1)return;const he=x[se];he!==void 0&&(he.update(q.inputSource,q.frame,u||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",Z);for(let q=0;q<x.length;q++){const se=y[q];se!==null&&(y[q]=null,x[q].disconnect(se))}P=null,F=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,v=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",G),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Hs(p.framebufferWidth,p.framebufferHeight,{format:Bi,type:qr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,he=null,fe=null;m.depth&&(fe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?sl:Ba,he=m.stencil?rl:Oo);const be={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Hs(f.textureWidth,f.textureHeight,{format:Bi,type:qr,depthTexture:new jM(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(q){for(let se=0;se<q.removed.length;se++){const he=q.removed[se],fe=y.indexOf(he);fe>=0&&(y[fe]=null,x[fe].disconnect(he))}for(let se=0;se<q.added.length;se++){const he=q.added[se];let fe=y.indexOf(he);if(fe===-1){for(let Ne=0;Ne<x.length;Ne++)if(Ne>=y.length){y.push(he),fe=Ne;break}else if(y[Ne]===null){y[Ne]=he,fe=Ne;break}if(fe===-1)break}const be=x[fe];be&&be.connect(he)}}const H=new K,Y=new K;function I(q,se,he){H.setFromMatrixPosition(se.matrixWorld),Y.setFromMatrixPosition(he.matrixWorld);const fe=H.distanceTo(Y),be=se.projectionMatrix.elements,Ne=he.projectionMatrix.elements,We=be[14]/(be[10]-1),Qe=be[14]/(be[10]+1),N=(be[9]+1)/be[5],Ue=(be[9]-1)/be[5],ze=(be[8]-1)/be[0],Ye=(Ne[8]+1)/Ne[0],Me=We*ze,j=We*Ye,Ae=fe/(-ze+Ye),Oe=Ae*-ze;se.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(Ae),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const L=We+Ae,T=Qe+Ae,$=Me-Oe,J=j+(fe-Oe),D=N*Qe/T*L,O=Ue*Qe/T*L;q.projectionMatrix.makePerspective($,J,D,O,L,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function Q(q,se){se===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(se.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;g.texture!==null&&(q.near=g.depthNear,q.far=g.depthFar),S.near=b.near=E.near=q.near,S.far=b.far=E.far=q.far,(P!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,F=S.far,E.near=P,E.far=F,b.near=P,b.far=F,E.updateProjectionMatrix(),b.updateProjectionMatrix(),q.updateProjectionMatrix());const se=q.parent,he=S.cameras;Q(S,se);for(let fe=0;fe<he.length;fe++)Q(he[fe],se);he.length===2?I(S,E,b):S.projectionMatrix.copy(E.projectionMatrix),R(q,S,se)};function R(q,se,he){he===null?q.matrix.copy(se.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(se.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(se.projectionMatrix),q.projectionMatrixInverse.copy(se.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=o0*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let oe=null;function Se(q,se){if(c=se.getViewerPose(u||o),_=se,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let fe=!1;he.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Ne=0;Ne<he.length;Ne++){const We=he[Ne];let Qe=null;if(p!==null)Qe=p.getViewport(We);else{const Ue=d.getViewSubImage(f,We);Qe=Ue.viewport,Ne===0&&(e.setRenderTargetTextures(v,Ue.colorTexture,f.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(v))}let N=M[Ne];N===void 0&&(N=new nr,N.layers.enable(Ne),N.viewport=new on,M[Ne]=N),N.matrix.fromArray(We.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(We.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ne===0&&(S.matrix.copy(N.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(N)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ne=d.getDepthInformation(he[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,r.renderState)}}for(let he=0;he<x.length;he++){const fe=y[he],be=x[he];fe!==null&&be!==void 0&&be.update(fe,se,u||o)}oe&&oe(q,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}const Ge=new XM;Ge.setAnimationLoop(Se),this.setAnimationLoop=function(q){oe=q},this.dispose=function(){}}}const to=new Kr,BD=new Jt;function VD(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,HM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,x):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===oi&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===oi&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h),x=v.envMap,y=v.envMapRotation;x&&(m.envMap.value=x,to.copy(y),to.x*=-1,to.y*=-1,to.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(to.y*=-1,to.z*=-1),m.envMapRotation.value.setFromMatrix4(BD.makeRotationFromEuler(to)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,x){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=x*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===oi&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function HD(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;i.uniformBlockBinding(v,y)}function u(v,x){let y=r[v.id];y===void 0&&(_(v),y=c(v),r[v.id]=y,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=d();v.__bindingPointIndex=x;const y=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],y=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=b.length;M<S;M++){const P=b[M];if(p(P,w,M,C)===!0){const F=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let Z=0;Z<V.length;Z++){const H=V[Z],Y=g(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+G,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,G),G+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,y,C){const w=v.value,E=x+"_"+y;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{const b=C[E];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return C[E]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function _(v){const x=v.uniforms;let y=0;const C=16;for(let E=0,b=x.length;E<b;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,P=M.length;S<P;S++){const F=M[S],V=Array.isArray(F.value)?F.value:[F.value];for(let G=0,Z=V.length;G<Z;G++){const H=V[G],Y=g(H),I=y%C,Q=I%Y.boundary,R=I+Q;y+=Q,R!==0&&C-R<Y.storage&&(y+=C-R),F.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=Y.storage}}}const w=y%C;return w>0&&(y+=C-w),v.__size=y,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class GD{constructor(e={}){const{canvas:t=LA(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dr,this.toneMapping=Is,this.toneMappingExposure=1;const x=this;let y=!1,C=0,w=0,E=null,b=-1,M=null;const S=new on,P=new on;let F=null;const V=new mt(0);let G=0,Z=t.width,H=t.height,Y=1,I=null,Q=null;const R=new on(0,0,Z,H),oe=new on(0,0,Z,H);let Se=!1;const Ge=new WM;let q=!1,se=!1;const he=new Jt,fe=new K,be=new on,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function Qe(){return E===null?Y:1}let N=i;function Ue(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bg}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",de,!1),N===null){const k="webgl2";if(N=Ue(k,A),N===null)throw Ue(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ze,Ye,Me,j,Ae,Oe,L,T,$,J,D,O,re,ee,ae,ye,le,me,Pe,Be,ge,He,$e,pt;function z(){ze=new qR(N),ze.init(),He=new ND(N,ze),Ye=new HR(N,ze,e,He),Me=new PD(N),j=new QR(N),Ae=new gD,Oe=new LD(N,ze,Me,Ae,Ye,He,j),L=new WR(x),T=new $R(x),$=new rC(N),$e=new BR(N,$),J=new KR(N,$,j,$e),D=new eP(N,J,$,j),Pe=new JR(N,Ye,Oe),ye=new GR(Ae),O=new mD(x,L,T,ze,Ye,$e,ye),re=new VD(x,Ae),ee=new vD,ae=new wD(ze),me=new zR(x,L,T,Me,D,f,l),le=new RD(x,D,Ye),pt=new HD(N,j,Ye,Me),Be=new VR(N,ze,j),ge=new ZR(N,ze,j),j.programs=O.programs,x.capabilities=Ye,x.extensions=ze,x.properties=Ae,x.renderLists=ee,x.shadowMap=le,x.state=Me,x.info=j}z();const te=new zD(x,N);this.xr=te,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(Z,H,!1))},this.getSize=function(A){return A.set(Z,H)},this.setSize=function(A,k,X=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=A,H=k,t.width=Math.floor(A*Y),t.height=Math.floor(k*Y),X===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Z*Y,H*Y).floor()},this.setDrawingBufferSize=function(A,k,X){Z=A,H=k,Y=X,t.width=Math.floor(A*X),t.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,k,X,W){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,k,X,W),Me.viewport(S.copy(R).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(oe)},this.setScissor=function(A,k,X,W){A.isVector4?oe.set(A.x,A.y,A.z,A.w):oe.set(A,k,X,W),Me.scissor(P.copy(oe).multiplyScalar(Y).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(A){Me.setScissorTest(Se=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){Q=A},this.getClearColor=function(A){return A.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(A=!0,k=!0,X=!0){let W=0;if(A){let B=!1;if(E!==null){const ue=E.texture.format;B=ue===Ig||ue===Ng||ue===Lg}if(B){const ue=E.texture.type,_e=ue===qr||ue===Oo||ue===zu||ue===rl||ue===Pg||ue===Dg,we=me.getClearColor(),ve=me.getClearAlpha(),Ee=we.r,Ie=we.g,ke=we.b;_e?(p[0]=Ee,p[1]=Ie,p[2]=ke,p[3]=ve,N.clearBufferuiv(N.COLOR,0,p)):(_[0]=Ee,_[1]=Ie,_[2]=ke,_[3]=ve,N.clearBufferiv(N.COLOR,0,_))}else W|=N.COLOR_BUFFER_BIT}k&&(W|=N.DEPTH_BUFFER_BIT),X&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ee.dispose(),ae.dispose(),Ae.dispose(),L.dispose(),T.dispose(),D.dispose(),$e.dispose(),pt.dispose(),O.dispose(),te.dispose(),te.removeEventListener("sessionstart",De),te.removeEventListener("sessionend",ct),pe.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=j.autoReset,k=le.enabled,X=le.autoUpdate,W=le.needsUpdate,B=le.type;z(),j.autoReset=A,le.enabled=k,le.autoUpdate=X,le.needsUpdate=W,le.type=B}function de(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Le(A){const k=A.target;k.removeEventListener("dispose",Le),Ke(k)}function Ke(A){Mt(A),Ae.remove(A)}function Mt(A){const k=Ae.get(A).programs;k!==void 0&&(k.forEach(function(X){O.releaseProgram(X)}),A.isShaderMaterial&&O.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,W,B,ue){k===null&&(k=Ne);const _e=B.isMesh&&B.matrixWorld.determinant()<0,we=Ct(A,k,X,W,B);Me.setMaterial(W,_e);let ve=X.index,Ee=1;if(W.wireframe===!0){if(ve=J.getWireframeAttribute(X),ve===void 0)return;Ee=2}const Ie=X.drawRange,ke=X.attributes.position;let ft=Ie.start*Ee,St=(Ie.start+Ie.count)*Ee;ue!==null&&(ft=Math.max(ft,ue.start*Ee),St=Math.min(St,(ue.start+ue.count)*Ee)),ve!==null?(ft=Math.max(ft,0),St=Math.min(St,ve.count)):ke!=null&&(ft=Math.max(ft,0),St=Math.min(St,ke.count));const dt=St-ft;if(dt<0||dt===1/0)return;$e.setup(B,W,we,X,ve);let tn,lt=Be;if(ve!==null&&(tn=$.get(ve),lt=ge,lt.setIndex(tn)),B.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*Qe()),lt.setMode(N.LINES)):lt.setMode(N.TRIANGLES);else if(B.isLine){let Re=W.linewidth;Re===void 0&&(Re=1),Me.setLineWidth(Re*Qe()),B.isLineSegments?lt.setMode(N.LINES):B.isLineLoop?lt.setMode(N.LINE_LOOP):lt.setMode(N.LINE_STRIP)}else B.isPoints?lt.setMode(N.POINTS):B.isSprite&&lt.setMode(N.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Re=B._multiDrawStarts,gn=B._multiDrawCounts,gt=B._multiDrawCount,Yi=ve?$.get(ve).bytesPerElement:1,Vo=Ae.get(W).currentProgram.getUniforms();for(let ci=0;ci<gt;ci++)Vo.setValue(N,"_gl_DrawID",ci),lt.render(Re[ci]/Yi,gn[ci])}else if(B.isInstancedMesh)lt.renderInstances(ft,dt,B.count);else if(X.isInstancedBufferGeometry){const Re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gn=Math.min(X.instanceCount,Re);lt.renderInstances(ft,dt,gn)}else lt.render(ft,dt)};function Et(A,k,X){A.transparent===!0&&A.side===Ur&&A.forceSinglePass===!1?(A.side=oi,A.needsUpdate=!0,At(A,k,X),A.side=Vs,A.needsUpdate=!0,At(A,k,X),A.side=Ur):At(A,k,X)}this.compile=function(A,k,X=null){X===null&&(X=A),m=ae.get(X),m.init(k),v.push(m),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),A!==X&&A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const W=new Set;return A.traverse(function(B){const ue=B.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const we=ue[_e];Et(we,X,B),W.add(we)}else Et(ue,X,B),W.add(ue)}),v.pop(),m=null,W},this.compileAsync=function(A,k,X=null){const W=this.compile(A,k,X);return new Promise(B=>{function ue(){if(W.forEach(function(_e){Ae.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){B(A);return}setTimeout(ue,10)}ze.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let at=null;function Ve(A){at&&at(A)}function De(){pe.stop()}function ct(){pe.start()}const pe=new XM;pe.setAnimationLoop(Ve),typeof self<"u"&&pe.setContext(self),this.setAnimationLoop=function(A){at=A,te.setAnimationLoop(A),A===null?pe.stop():pe.start()},te.addEventListener("sessionstart",De),te.addEventListener("sessionend",ct),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,k,E),m=ae.get(A,v.length),m.init(k),v.push(m),he.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ge.setFromProjectionMatrix(he),se=this.localClippingEnabled,q=ye.init(this.clippingPlanes,se),g=ee.get(A,h.length),g.init(),h.push(g),te.enabled===!0&&te.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Xe(ue,k,-1/0,x.sortObjects)}Xe(A,k,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(I,Q),We=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,We&&me.addToRenderList(g,A),this.info.render.frame++,q===!0&&ye.beginShadows();const X=m.state.shadowsArray;le.render(X,A,k),q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=g.opaque,B=g.transmissive;if(m.setupLights(),k.isArrayCamera){const ue=k.cameras;if(B.length>0)for(let _e=0,we=ue.length;_e<we;_e++){const ve=ue[_e];je(W,B,A,ve)}We&&me.render(A);for(let _e=0,we=ue.length;_e<we;_e++){const ve=ue[_e];Fe(g,A,ve,ve.viewport)}}else B.length>0&&je(W,B,A,k),We&&me.render(A),Fe(g,A,k);E!==null&&(Oe.updateMultisampleRenderTarget(E),Oe.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,k),$e.resetDefaultState(),b=-1,M=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&ye.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Xe(A,k,X,W){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ge.intersectsSprite(A)){W&&be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(he);const _e=D.update(A),we=A.material;we.visible&&g.push(A,_e,we,X,be.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ge.intersectsObject(A))){const _e=D.update(A),we=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),be.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),be.copy(_e.boundingSphere.center)),be.applyMatrix4(A.matrixWorld).applyMatrix4(he)),Array.isArray(we)){const ve=_e.groups;for(let Ee=0,Ie=ve.length;Ee<Ie;Ee++){const ke=ve[Ee],ft=we[ke.materialIndex];ft&&ft.visible&&g.push(A,_e,ft,X,be.z,ke)}}else we.visible&&g.push(A,_e,we,X,be.z,null)}}const ue=A.children;for(let _e=0,we=ue.length;_e<we;_e++)Xe(ue[_e],k,X,W)}function Fe(A,k,X,W){const B=A.opaque,ue=A.transmissive,_e=A.transparent;m.setupLightsView(X),q===!0&&ye.setGlobalState(x.clippingPlanes,X),W&&Me.viewport(S.copy(W)),B.length>0&&Ft(B,k,X),ue.length>0&&Ft(ue,k,X),_e.length>0&&Ft(_e,k,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function je(A,k,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Hs(1,1,{generateMipmaps:!0,type:ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float")?cl:qr,minFilter:_o,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[W.id],_e=W.viewport||S;ue.setSize(_e.z,_e.w);const we=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(V),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),We&&me.render(X);const ve=x.toneMapping;x.toneMapping=Is;const Ee=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),q===!0&&ye.setGlobalState(x.clippingPlanes,W),Ft(A,X,W),Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ke=0,ft=k.length;ke<ft;ke++){const St=k[ke],dt=St.object,tn=St.geometry,lt=St.material,Re=St.group;if(lt.side===Ur&&dt.layers.test(W.layers)){const gn=lt.side;lt.side=oi,lt.needsUpdate=!0,nt(dt,X,W,tn,lt,Re),lt.side=gn,lt.needsUpdate=!0,Ie=!0}}Ie===!0&&(Oe.updateMultisampleRenderTarget(ue),Oe.updateRenderTargetMipmap(ue))}x.setRenderTarget(we),x.setClearColor(V,G),Ee!==void 0&&(W.viewport=Ee),x.toneMapping=ve}function Ft(A,k,X){const W=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ue=A.length;B<ue;B++){const _e=A[B],we=_e.object,ve=_e.geometry,Ee=W===null?_e.material:W,Ie=_e.group;we.layers.test(X.layers)&&nt(we,k,X,ve,Ee,Ie)}}function nt(A,k,X,W,B,ue){A.onBeforeRender(x,k,X,W,B,ue),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.transparent===!0&&B.side===Ur&&B.forceSinglePass===!1?(B.side=oi,B.needsUpdate=!0,x.renderBufferDirect(X,k,W,B,A,ue),B.side=Vs,B.needsUpdate=!0,x.renderBufferDirect(X,k,W,B,A,ue),B.side=Ur):x.renderBufferDirect(X,k,W,B,A,ue),A.onAfterRender(x,k,X,W,B,ue)}function At(A,k,X){k.isScene!==!0&&(k=Ne);const W=Ae.get(A),B=m.state.lights,ue=m.state.shadowsArray,_e=B.state.version,we=O.getParameters(A,B.state,ue,k,X),ve=O.getProgramCacheKey(we);let Ee=W.programs;W.environment=A.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(A.isMeshStandardMaterial?T:L).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Ee===void 0&&(A.addEventListener("dispose",Le),Ee=new Map,W.programs=Ee);let Ie=Ee.get(ve);if(Ie!==void 0){if(W.currentProgram===Ie&&W.lightsStateVersion===_e)return Pt(A,we),Ie}else we.uniforms=O.getUniforms(A),A.onBeforeCompile(we,x),Ie=O.acquireProgram(we,ve),Ee.set(ve,Ie),W.uniforms=we.uniforms;const ke=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=ye.uniform),Pt(A,we),W.needsLights=ui(A),W.lightsStateVersion=_e,W.needsLights&&(ke.ambientLightColor.value=B.state.ambient,ke.lightProbe.value=B.state.probe,ke.directionalLights.value=B.state.directional,ke.directionalLightShadows.value=B.state.directionalShadow,ke.spotLights.value=B.state.spot,ke.spotLightShadows.value=B.state.spotShadow,ke.rectAreaLights.value=B.state.rectArea,ke.ltc_1.value=B.state.rectAreaLTC1,ke.ltc_2.value=B.state.rectAreaLTC2,ke.pointLights.value=B.state.point,ke.pointLightShadows.value=B.state.pointShadow,ke.hemisphereLights.value=B.state.hemi,ke.directionalShadowMap.value=B.state.directionalShadowMap,ke.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ke.spotShadowMap.value=B.state.spotShadowMap,ke.spotLightMatrix.value=B.state.spotLightMatrix,ke.spotLightMap.value=B.state.spotLightMap,ke.pointShadowMap.value=B.state.pointShadowMap,ke.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ie,W.uniformsList=null,Ie}function en(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Cf.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Pt(A,k){const X=Ae.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Ct(A,k,X,W,B){k.isScene!==!0&&(k=Ne),Oe.resetTextureUnits();const ue=k.fog,_e=W.isMeshStandardMaterial?k.environment:null,we=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ys,ve=(W.isMeshStandardMaterial?T:L).get(W.envMap||_e),Ee=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ie=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ke=!!X.morphAttributes.position,ft=!!X.morphAttributes.normal,St=!!X.morphAttributes.color;let dt=Is;W.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(dt=x.toneMapping);const tn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,lt=tn!==void 0?tn.length:0,Re=Ae.get(W),gn=m.state.lights;if(q===!0&&(se===!0||A!==M)){const Pi=A===M&&W.id===b;ye.setState(W,A,Pi)}let gt=!1;W.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==gn.state.version||Re.outputColorSpace!==we||B.isBatchedMesh&&Re.batching===!1||!B.isBatchedMesh&&Re.batching===!0||B.isBatchedMesh&&Re.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Re.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Re.instancing===!1||!B.isInstancedMesh&&Re.instancing===!0||B.isSkinnedMesh&&Re.skinning===!1||!B.isSkinnedMesh&&Re.skinning===!0||B.isInstancedMesh&&Re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Re.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Re.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Re.instancingMorph===!1&&B.morphTexture!==null||Re.envMap!==ve||W.fog===!0&&Re.fog!==ue||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ye.numPlanes||Re.numIntersection!==ye.numIntersection)||Re.vertexAlphas!==Ee||Re.vertexTangents!==Ie||Re.morphTargets!==ke||Re.morphNormals!==ft||Re.morphColors!==St||Re.toneMapping!==dt||Re.morphTargetsCount!==lt)&&(gt=!0):(gt=!0,Re.__version=W.version);let Yi=Re.currentProgram;gt===!0&&(Yi=At(W,k,B));let Vo=!1,ci=!1,Xd=!1;const $t=Yi.getUniforms(),ts=Re.uniforms;if(Me.useProgram(Yi.program)&&(Vo=!0,ci=!0,Xd=!0),W.id!==b&&(b=W.id,ci=!0),Vo||M!==A){$t.setValue(N,"projectionMatrix",A.projectionMatrix),$t.setValue(N,"viewMatrix",A.matrixWorldInverse);const Pi=$t.map.cameraPosition;Pi!==void 0&&Pi.setValue(N,fe.setFromMatrixPosition(A.matrixWorld)),Ye.logarithmicDepthBuffer&&$t.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&$t.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,ci=!0,Xd=!0)}if(B.isSkinnedMesh){$t.setOptional(N,B,"bindMatrix"),$t.setOptional(N,B,"bindMatrixInverse");const Pi=B.skeleton;Pi&&(Pi.boneTexture===null&&Pi.computeBoneTexture(),$t.setValue(N,"boneTexture",Pi.boneTexture,Oe))}B.isBatchedMesh&&($t.setOptional(N,B,"batchingTexture"),$t.setValue(N,"batchingTexture",B._matricesTexture,Oe),$t.setOptional(N,B,"batchingIdTexture"),$t.setValue(N,"batchingIdTexture",B._indirectTexture,Oe),$t.setOptional(N,B,"batchingColorTexture"),B._colorsTexture!==null&&$t.setValue(N,"batchingColorTexture",B._colorsTexture,Oe));const jd=X.morphAttributes;if((jd.position!==void 0||jd.normal!==void 0||jd.color!==void 0)&&Pe.update(B,X,Yi),(ci||Re.receiveShadow!==B.receiveShadow)&&(Re.receiveShadow=B.receiveShadow,$t.setValue(N,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ts.envMap.value=ve,ts.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(ts.envMapIntensity.value=k.environmentIntensity),ci&&($t.setValue(N,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&xt(ts,Xd),ue&&W.fog===!0&&re.refreshFogUniforms(ts,ue),re.refreshMaterialUniforms(ts,W,Y,H,m.state.transmissionRenderTarget[A.id]),Cf.upload(N,en(Re),ts,Oe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Cf.upload(N,en(Re),ts,Oe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&$t.setValue(N,"center",B.center),$t.setValue(N,"modelViewMatrix",B.modelViewMatrix),$t.setValue(N,"normalMatrix",B.normalMatrix),$t.setValue(N,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Pi=W.uniformsGroups;for(let Yd=0,ZM=Pi.length;Yd<ZM;Yd++){const Og=Pi[Yd];pt.update(Og,Yi),pt.bind(Og,Yi)}}return Yi}function xt(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function ui(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,k,X){Ae.get(A.texture).__webglTexture=k,Ae.get(A.depthTexture).__webglTexture=X;const W=Ae.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=X===void 0,W.__autoAllocateDepthBuffer||ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const X=Ae.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){E=A,C=k,w=X;let W=!0,B=null,ue=!1,_e=!1;if(A){const ve=Ae.get(A);ve.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(N.FRAMEBUFFER,null),W=!1):ve.__webglFramebuffer===void 0?Oe.setupRenderTarget(A):ve.__hasExternalTextures&&Oe.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);const Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(_e=!0);const Ie=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ie[k])?B=Ie[k][X]:B=Ie[k],ue=!0):A.samples>0&&Oe.useMultisampledRTT(A)===!1?B=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Ie)?B=Ie[X]:B=Ie,S.copy(A.viewport),P.copy(A.scissor),F=A.scissorTest}else S.copy(R).multiplyScalar(Y).floor(),P.copy(oe).multiplyScalar(Y).floor(),F=Se;if(Me.bindFramebuffer(N.FRAMEBUFFER,B)&&W&&Me.drawBuffers(A,B),Me.viewport(S),Me.scissor(P),Me.setScissorTest(F),ue){const ve=Ae.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,ve.__webglTexture,X)}else if(_e){const ve=Ae.get(A.texture),Ee=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,X||0,Ee)}b=-1},this.readRenderTargetPixels=function(A,k,X,W,B,ue,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){Me.bindFramebuffer(N.FRAMEBUFFER,we);try{const ve=A.texture,Ee=ve.format,Ie=ve.type;if(!Ye.textureFormatReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-W&&X>=0&&X<=A.height-B&&N.readPixels(k,X,W,B,He.convert(Ee),He.convert(Ie),ue)}finally{const ve=E!==null?Ae.get(E).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(A,k,X,W,B,ue,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){Me.bindFramebuffer(N.FRAMEBUFFER,we);try{const ve=A.texture,Ee=ve.format,Ie=ve.type;if(!Ye.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-W&&X>=0&&X<=A.height-B){const ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(k,X,W,B,He.convert(Ee),He.convert(Ie),0),N.flush();const ft=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);await NA(N,ft,4);try{N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue)}finally{N.deleteBuffer(ke),N.deleteSync(ft)}return ue}}finally{const ve=E!==null?Ae.get(E).__webglFramebuffer:null;Me.bindFramebuffer(N.FRAMEBUFFER,ve)}}},this.copyFramebufferToTexture=function(A,k=null,X=0){A.isTexture!==!0&&(du("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-X),B=Math.floor(A.image.width*W),ue=Math.floor(A.image.height*W),_e=k!==null?k.x:0,we=k!==null?k.y:0;Oe.setTexture2D(A,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,_e,we,B,ue),Me.unbindTexture()},this.copyTextureToTexture=function(A,k,X=null,W=null,B=0){A.isTexture!==!0&&(du("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],k=arguments[2],B=arguments[3]||0,X=null);let ue,_e,we,ve,Ee,Ie;X!==null?(ue=X.max.x-X.min.x,_e=X.max.y-X.min.y,we=X.min.x,ve=X.min.y):(ue=A.image.width,_e=A.image.height,we=0,ve=0),W!==null?(Ee=W.x,Ie=W.y):(Ee=0,Ie=0);const ke=He.convert(k.format),ft=He.convert(k.type);Oe.setTexture2D(k,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const St=N.getParameter(N.UNPACK_ROW_LENGTH),dt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),tn=N.getParameter(N.UNPACK_SKIP_PIXELS),lt=N.getParameter(N.UNPACK_SKIP_ROWS),Re=N.getParameter(N.UNPACK_SKIP_IMAGES),gn=A.isCompressedTexture?A.mipmaps[B]:A.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,gn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,ve),A.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,B,Ee,Ie,ue,_e,ke,ft,gn.data):A.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,B,Ee,Ie,gn.width,gn.height,ke,gn.data):N.texSubImage2D(N.TEXTURE_2D,B,Ee,Ie,ue,_e,ke,ft,gn),N.pixelStorei(N.UNPACK_ROW_LENGTH,St),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,tn),N.pixelStorei(N.UNPACK_SKIP_ROWS,lt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Re),B===0&&k.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(A,k,X=null,W=null,B=0){A.isTexture!==!0&&(du("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,W=arguments[1]||null,A=arguments[2],k=arguments[3],B=arguments[4]||0);let ue,_e,we,ve,Ee,Ie,ke,ft,St;const dt=A.isCompressedTexture?A.mipmaps[B]:A.image;X!==null?(ue=X.max.x-X.min.x,_e=X.max.y-X.min.y,we=X.max.z-X.min.z,ve=X.min.x,Ee=X.min.y,Ie=X.min.z):(ue=dt.width,_e=dt.height,we=dt.depth,ve=0,Ee=0,Ie=0),W!==null?(ke=W.x,ft=W.y,St=W.z):(ke=0,ft=0,St=0);const tn=He.convert(k.format),lt=He.convert(k.type);let Re;if(k.isData3DTexture)Oe.setTexture3D(k,0),Re=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Oe.setTexture2DArray(k,0),Re=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const gn=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Yi=N.getParameter(N.UNPACK_SKIP_PIXELS),Vo=N.getParameter(N.UNPACK_SKIP_ROWS),ci=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,dt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,dt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ve),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ie),A.isDataTexture||A.isData3DTexture?N.texSubImage3D(Re,B,ke,ft,St,ue,_e,we,tn,lt,dt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,B,ke,ft,St,ue,_e,we,tn,dt.data):N.texSubImage3D(Re,B,ke,ft,St,ue,_e,we,tn,lt,dt),N.pixelStorei(N.UNPACK_ROW_LENGTH,gn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Yi),N.pixelStorei(N.UNPACK_SKIP_ROWS,Vo),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ci),B===0&&k.generateMipmaps&&N.generateMipmap(Re),Me.unbindTexture()},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&Oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Oe.setTextureCube(A,0):A.isData3DTexture?Oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Oe.setTexture2DArray(A,0):Oe.setTexture2D(A,0),Me.unbindTexture()},this.resetState=function(){C=0,w=0,E=null,Me.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ug?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===Vd?"display-p3":"srgb"}}class b1 extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kr,this.environmentIntensity=1,this.environmentRotation=new Kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class WD extends Wn{constructor(e=null,t=1,i=1,r,s,o,a,l,u=Qn,c=Qn,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XD extends Ku{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const vd=new K,xd=new K,R1=new Jt,Pl=new FM,Zc=new Hd,up=new K,P1=new K;class jD extends ai{constructor(e=new es,t=new XD){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)vd.fromBufferAttribute(t,r-1),xd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=vd.distanceTo(xd);e.setAttribute("lineDistance",new Hr(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zc.copy(i.boundingSphere),Zc.applyMatrix4(r),Zc.radius+=s,e.ray.intersectsSphere(Zc)===!1)return;R1.copy(r).invert(),Pl.copy(e.ray).applyMatrix4(R1);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),_=Math.min(c.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const h=c.getX(g),v=c.getX(g+1),x=Qc(this,e,Pl,l,h,v);x&&t.push(x)}if(this.isLineLoop){const g=c.getX(_-1),m=c.getX(p),h=Qc(this,e,Pl,l,g,m);h&&t.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=p,m=_-1;g<m;g+=u){const h=Qc(this,e,Pl,l,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=Qc(this,e,Pl,l,_-1,p);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qc(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(vd.fromBufferAttribute(o,r),xd.fromBufferAttribute(o,s),t.distanceSqToSegment(vd,xd,up,P1)>i)return;up.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(up);if(!(l<e.near||l>e.far))return{distance:l,point:P1.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}const D1=new K,L1=new K;class YD extends jD{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)D1.fromBufferAttribute(t,r),L1.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+D1.distanceTo(L1);e.setAttribute("lineDistance",new Hr(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jc extends Zr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $D{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=N1(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=N1();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function N1(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bg);const qD=["#5227FF","#FF9FFC","#B19EEF"];function Wd({mouseForce:n=20,cursorSize:e=100,isViscous:t=!1,viscous:i=30,iterationsViscous:r=32,iterationsPoisson:s=32,dt:o=.014,BFECC:a=!0,resolution:l=.5,isBounce:u=!1,colors:c=qD,style:d={},className:f="",autoDemo:p=!0,autoSpeed:_=.5,autoIntensity:g=2.2,takeoverDuration:m=.25,autoResumeDelay:h=1e3,autoRampDuration:v=.6}){const x=Ze.useRef(null),y=Ze.useRef(null),C=Ze.useRef(null),w=Ze.useRef(null),E=Ze.useRef(null),b=Ze.useRef(!0),M=Ze.useRef(null);return Ze.useEffect(()=>{if(!x.current)return;function S(J){let D;Array.isArray(J)&&J.length>0?D=J.length===1?[J[0],J[0]]:J:D=["#00000","#00000"];const O=D.length,re=new Uint8Array(O*4);for(let ae=0;ae<O;ae++){const ye=new mt(D[ae]);re[ae*4+0]=Math.round(ye.r*255),re[ae*4+1]=Math.round(ye.g*255),re[ae*4+2]=Math.round(ye.b*255),re[ae*4+3]=255}const ee=new WD(re,O,1,Bi);return ee.magFilter=Hn,ee.minFilter=Hn,ee.wrapS=ir,ee.wrapT=ir,ee.generateMipmaps=!1,ee.needsUpdate=!0,ee}const P=S(c),F=new on(0,0,0,1);class V{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(D){this.container=D,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new GD({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new mt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height);const O=this.renderer.domElement;O.style.width="100%",O.style.height="100%",O.style.display="block",this.clock=new $D,this.clock.start()}resize(){if(!this.container)return;const D=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(D.width)),this.height=Math.max(1,Math.floor(D.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.clock&&(this.delta=this.clock.getDelta(),this.time+=this.delta)}}const G=new V;class Z{constructor(){this.mouseMoved=!1,this.coords=new qe,this.coords_old=new qe,this.diff=new qe,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new qe,this.takeoverTo=new qe,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(D){var re,ee;this.container=D,this.docTarget=D.ownerDocument||null;const O=((re=this.docTarget)==null?void 0:re.defaultView)||(typeof window<"u"?window:null);O&&(this.listenerTarget=O,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),(ee=this.docTarget)==null||ee.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(D,O){if(!this.container)return!1;const re=this.container.getBoundingClientRect();return re.width===0||re.height===0?!1:D>=re.left&&D<=re.right&&O>=re.top&&O<=re.bottom}updateHoverState(D,O){return this.isHoverInside=this.isPointInside(D,O),this.isHoverInside}setCoords(D,O){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const re=this.container.getBoundingClientRect();if(re.width===0||re.height===0)return;const ee=(D-re.left)/re.width,ae=(O-re.top)/re.height;this.coords.set(ee*2-1,-(ae*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(D,O){this.coords.set(D,O),this.mouseMoved=!0}onDocumentMouseMove(D){if(this.updateHoverState(D.clientX,D.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const O=this.container.getBoundingClientRect(),re=(D.clientX-O.left)/O.width,ee=(D.clientY-O.top)/O.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(re*2-1,-(ee*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(D.clientX,D.clientY),this.hasUserControl=!0}}onDocumentTouchStart(D){if(D.touches.length!==1)return;const O=D.touches[0];this.updateHoverState(O.clientX,O.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(O.clientX,O.clientY),this.hasUserControl=!0)}onDocumentTouchMove(D){if(D.touches.length!==1)return;const O=D.touches[0];this.updateHoverState(O.clientX,O.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(O.clientX,O.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const D=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(D>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const O=D*D*(3-2*D);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,O)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const H=new Z;class Y{constructor(D,O,re){this.active=!1,this.current=new qe(0,0),this.target=new qe,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new qe,this.mouse=D,this.manager=O,this.enabled=re.enabled,this.speed=re.speed,this.resumeDelay=re.resumeDelay||3e3,this.rampDurationMs=(re.rampDuration||0)*1e3,this.pickNewTarget()}pickNewTarget(){const D=Math.random;this.target.set((D()*2-1)*(1-this.margin),(D()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const D=performance.now();if(D-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=D,this.activationTime=D),!this.active)return;this.mouse.isAutoActive=!0;let re=(D-this.lastTime)/1e3;this.lastTime=D,re>.2&&(re=.016);const ee=this._tmpDir.subVectors(this.target,this.current),ae=ee.length();if(ae<.01){this.pickNewTarget();return}ee.normalize();let ye=1;if(this.rampDurationMs>0){const Pe=Math.min(1,(D-this.activationTime)/this.rampDurationMs);ye=Pe*Pe*(3-2*Pe)}const le=this.speed*re*ye,me=Math.min(le,ae);this.current.addScaledVector(ee,me),this.mouse.setNormalized(this.current.x,this.current.y)}}const I=`
	attribute vec3 position;
	uniform vec2 px;
	uniform vec2 boundarySpace;
	varying vec2 uv;
	precision highp float;
	void main(){
	vec3 pos = position;
	vec2 scale = 1.0 - boundarySpace * 2.0;
	pos.xy = pos.xy * scale;
	uv = vec2(0.5)+(pos.xy)*0.5;
	gl_Position = vec4(pos, 1.0);
}
`,Q=`
	attribute vec3 position;
	uniform vec2 px;
	precision highp float;
	varying vec2 uv;
	void main(){
	vec3 pos = position;
	uv = 0.5 + pos.xy * 0.5;
	vec2 n = sign(pos.xy);
	pos.xy = abs(pos.xy) - px * 1.0;
	pos.xy *= n;
	gl_Position = vec4(pos, 1.0);
}
`,R=`
		precision highp float;
		attribute vec3 position;
		attribute vec2 uv;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 pos = position.xy * scale * 2.0 * px + center;
		vUv = uv;
		gl_Position = vec4(pos, 0.0, 1.0);
}
`,oe=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform bool isBFECC;
		uniform vec2 fboSize;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
		if(isBFECC == false){
				vec2 vel = texture2D(velocity, uv).xy;
				vec2 uv2 = uv - vel * dt * ratio;
				vec2 newVel = texture2D(velocity, uv2).xy;
				gl_FragColor = vec4(newVel, 0.0, 0.0);
		} else {
				vec2 spot_new = uv;
				vec2 vel_old = texture2D(velocity, uv).xy;
				vec2 spot_old = spot_new - vel_old * dt * ratio;
				vec2 vel_new1 = texture2D(velocity, spot_old).xy;
				vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
				vec2 error = spot_new2 - spot_new;
				vec2 spot_new3 = spot_new - error / 2.0;
				vec2 vel_2 = texture2D(velocity, spot_new3).xy;
				vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
				vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
				gl_FragColor = vec4(newVel2, 0.0, 0.0);
		}
}
`,Se=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D palette;
		uniform vec4 bgColor;
		varying vec2 uv;
		void main(){
		vec2 vel = texture2D(velocity, uv).xy;
		float lenv = clamp(length(vel), 0.0, 1.0);
		vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
		vec3 outRGB = mix(bgColor.rgb, c, lenv);
		float outA = mix(bgColor.a, 1.0, lenv);
		gl_FragColor = vec4(outRGB, outA);
}
`,Ge=`
		precision highp float;
		uniform sampler2D velocity;
		uniform float dt;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
		float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
		float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
		float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
		float divergence = (x1 - x0 + y1 - y0) / 2.0;
		gl_FragColor = vec4(divergence / dt);
}
`,q=`
		precision highp float;
		uniform vec2 force;
		uniform vec2 center;
		uniform vec2 scale;
		uniform vec2 px;
		varying vec2 vUv;
		void main(){
		vec2 circle = (vUv - 0.5) * 2.0;
		float d = 1.0 - min(length(circle), 1.0);
		d *= d;
		gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,se=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D divergence;
		uniform vec2 px;
		varying vec2 uv;
		void main(){
		float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
		float div = texture2D(divergence, uv).r;
		float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
		gl_FragColor = vec4(newP);
}
`,he=`
		precision highp float;
		uniform sampler2D pressure;
		uniform sampler2D velocity;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		float step = 1.0;
		float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
		float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
		float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
		float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
		vec2 v = texture2D(velocity, uv).xy;
		vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
		v = v - gradP * dt;
		gl_FragColor = vec4(v, 0.0, 1.0);
}
`,fe=`
		precision highp float;
		uniform sampler2D velocity;
		uniform sampler2D velocity_new;
		uniform float v;
		uniform vec2 px;
		uniform float dt;
		varying vec2 uv;
		void main(){
		vec2 old = texture2D(velocity, uv).xy;
		vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
		vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
		vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
		vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
		vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
		newv /= 4.0 * (1.0 + v * dt);
		gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class be{constructor(D){var O;this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null,this.props=D||{},this.uniforms=(O=this.props.material)==null?void 0:O.uniforms}init(...D){this.scene=new b1,this.camera=new _d,this.uniforms&&(this.material=new Jc(this.props.material),this.geometry=new bo(2,2),this.plane=new Vi(this.geometry,this.material),this.scene.add(this.plane))}update(...D){!G.renderer||!this.scene||!this.camera||(G.renderer.setRenderTarget(this.props.output||null),G.renderer.render(this.scene,this.camera),G.renderer.setRenderTarget(null))}}class Ne extends be{constructor(D){super({material:{vertexShader:I,fragmentShader:oe,uniforms:{boundarySpace:{value:D.cellScale},px:{value:D.cellScale},fboSize:{value:D.fboSize},velocity:{value:D.src.texture},dt:{value:D.dt},isBFECC:{value:!0}}},output:D.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const D=new es,O=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);D.setAttribute("position",new or(O,3));const re=new Jc({vertexShader:Q,fragmentShader:oe,uniforms:this.uniforms});this.line=new YD(D,re),this.scene.add(this.line)}update(...D){const{dt:O,isBounce:re,BFECC:ee}=D[0]||{};this.uniforms&&(typeof O=="number"&&(this.uniforms.dt.value=O),typeof re=="boolean"&&(this.line.visible=re),typeof ee=="boolean"&&(this.uniforms.isBFECC.value=ee),super.update())}}class We extends be{constructor(D){super({output:D.dst}),this.init(D)}init(D){super.init();const O=new bo(1,1),re=new Jc({vertexShader:R,fragmentShader:q,blending:Cm,depthWrite:!1,uniforms:{px:{value:D.cellScale},force:{value:new qe(0,0)},center:{value:new qe(0,0)},scale:{value:new qe(D.cursor_size,D.cursor_size)}}});this.mouse=new Vi(O,re),this.scene.add(this.mouse)}update(...D){const O=D[0]||{},re=H.diff.x/2*(O.mouse_force||0),ee=H.diff.y/2*(O.mouse_force||0),ae=O.cellScale||{x:1,y:1},ye=O.cursor_size||0,le=ye*ae.x,me=ye*ae.y,Pe=Math.min(Math.max(H.coords.x,-1+le+ae.x*2),1-le-ae.x*2),Be=Math.min(Math.max(H.coords.y,-1+me+ae.y*2),1-me-ae.y*2),ge=this.mouse.material.uniforms;ge.force.value.set(re,ee),ge.center.value.set(Pe,Be),ge.scale.value.set(ye,ye),super.update()}}class Qe extends be{constructor(D){super({material:{vertexShader:I,fragmentShader:fe,uniforms:{boundarySpace:{value:D.boundarySpace},velocity:{value:D.src.texture},velocity_new:{value:D.dst_.texture},v:{value:D.viscous},px:{value:D.cellScale},dt:{value:D.dt}}},output:D.dst,output0:D.dst_,output1:D.dst}),this.init()}update(...D){const{viscous:O,iterations:re,dt:ee}=D[0]||{};if(!this.uniforms)return;let ae,ye;typeof O=="number"&&(this.uniforms.v.value=O);const le=re??0;for(let me=0;me<le;me++)me%2===0?(ae=this.props.output0,ye=this.props.output1):(ae=this.props.output1,ye=this.props.output0),this.uniforms.velocity_new.value=ae.texture,this.props.output=ye,typeof ee=="number"&&(this.uniforms.dt.value=ee),super.update();return ye}}class N extends be{constructor(D){super({material:{vertexShader:I,fragmentShader:Ge,uniforms:{boundarySpace:{value:D.boundarySpace},velocity:{value:D.src.texture},px:{value:D.cellScale},dt:{value:D.dt}}},output:D.dst}),this.init()}update(...D){const{vel:O}=D[0]||{};this.uniforms&&O&&(this.uniforms.velocity.value=O.texture),super.update()}}class Ue extends be{constructor(D){super({material:{vertexShader:I,fragmentShader:se,uniforms:{boundarySpace:{value:D.boundarySpace},pressure:{value:D.dst_.texture},divergence:{value:D.src.texture},px:{value:D.cellScale}}},output:D.dst,output0:D.dst_,output1:D.dst}),this.init()}update(...D){const{iterations:O}=D[0]||{};let re,ee;const ae=O??0;for(let ye=0;ye<ae;ye++)ye%2===0?(re=this.props.output0,ee=this.props.output1):(re=this.props.output1,ee=this.props.output0),this.uniforms&&(this.uniforms.pressure.value=re.texture),this.props.output=ee,super.update();return ee}}class ze extends be{constructor(D){super({material:{vertexShader:I,fragmentShader:he,uniforms:{boundarySpace:{value:D.boundarySpace},pressure:{value:D.src_p.texture},velocity:{value:D.src_v.texture},px:{value:D.cellScale},dt:{value:D.dt}}},output:D.dst}),this.init()}update(...D){const{vel:O,pressure:re}=D[0]||{};this.uniforms&&O&&re&&(this.uniforms.velocity.value=O.texture,this.uniforms.pressure.value=re.texture),super.update()}}class Ye{constructor(D){this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new qe,this.cellScale=new qe,this.boundarySpace=new qe,this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...D},this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?cl:xr}createAllFBO(){const O={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Hn,magFilter:Hn,wrapS:ir,wrapT:ir};for(const re in this.fbos)this.fbos[re]=new Hs(this.fboSize.x,this.fboSize.y,O)}createShaderPass(){this.advection=new Ne({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new We({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new Qe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new N({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Ue({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new ze({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const D=Math.max(1,Math.round(this.options.resolution*G.width)),O=Math.max(1,Math.round(this.options.resolution*G.height));this.cellScale.set(1/D,1/O),this.fboSize.set(D,O)}resize(){this.calcSize();for(const D in this.fbos)this.fbos[D].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let D=this.fbos.vel_1;this.options.isViscous&&(D=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:D});const O=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:D,pressure:O})}}class Me{constructor(){this.simulation=new Ye,this.scene=new b1,this.camera=new _d,this.output=new Vi(new bo(2,2),new Jc({vertexShader:I,fragmentShader:Se,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new qe},palette:{value:P},bgColor:{value:F}}})),this.scene.add(this.output)}resize(){this.simulation.resize()}render(){G.renderer&&(G.renderer.setRenderTarget(null),G.renderer.render(this.scene,this.camera))}update(){this.simulation.update(),this.render()}}class j{constructor(D){this.lastUserInteraction=performance.now(),this.running=!1,this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),this.props=D,G.init(D.$wrapper),H.init(D.$wrapper),H.autoIntensity=D.autoIntensity,H.takeoverDuration=D.takeoverDuration,H.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new Y(H,this,{enabled:D.autoDemo,speed:D.autoSpeed,resumeDelay:D.autoResumeDelay,rampDuration:D.autoRampDuration}),this.init(),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():b.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility)}init(){G.renderer&&(this.props.$wrapper.prepend(G.renderer.domElement),this.output=new Me)}resize(){G.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),H.update(),G.update(),this.output.update()}loop(){this.running&&(this.render(),w.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,w.current&&(cancelAnimationFrame(w.current),w.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),this._onVisibility&&document.removeEventListener("visibilitychange",this._onVisibility),H.dispose(),G.renderer){const D=G.renderer.domElement;D&&D.parentNode&&D.parentNode.removeChild(D),G.renderer.dispose()}}catch{}}}const Ae=x.current;Ae.style.position=Ae.style.position||"relative",Ae.style.overflow=Ae.style.overflow||"hidden";const Oe=new j({$wrapper:Ae,autoDemo:p,autoSpeed:_,autoIntensity:g,takeoverDuration:m,autoResumeDelay:h,autoRampDuration:v});y.current=Oe,(()=>{var O;if(!y.current)return;const J=(O=y.current.output)==null?void 0:O.simulation;if(!J)return;const D=J.options.resolution;Object.assign(J.options,{mouse_force:n,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),l!==D&&J.resize()})(),Oe.start();const T=new IntersectionObserver(J=>{const D=J[0],O=D.isIntersecting&&D.intersectionRatio>0;b.current=O,y.current&&(O&&!document.hidden?y.current.start():y.current.pause())},{threshold:[0,.01,.1]});T.observe(Ae),E.current=T;const $=new ResizeObserver(()=>{y.current&&(M.current&&cancelAnimationFrame(M.current),M.current=requestAnimationFrame(()=>{y.current&&y.current.resize()}))});return $.observe(Ae),C.current=$,()=>{if(w.current&&cancelAnimationFrame(w.current),C.current)try{C.current.disconnect()}catch{}if(E.current)try{E.current.disconnect()}catch{}y.current&&y.current.dispose(),y.current=null}},[a,e,o,u,t,s,r,n,l,i,c,p,_,g,m,h,v]),Ze.useEffect(()=>{var V;const S=y.current;if(!S)return;const P=(V=S.output)==null?void 0:V.simulation;if(!P)return;const F=P.options.resolution;Object.assign(P.options,{mouse_force:n,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:r,iterations_poisson:s,dt:o,BFECC:a,resolution:l,isBounce:u}),S.autoDriver&&(S.autoDriver.enabled=p,S.autoDriver.speed=_,S.autoDriver.resumeDelay=h,S.autoDriver.rampDurationMs=v*1e3,S.autoDriver.mouse&&(S.autoDriver.mouse.autoIntensity=g,S.autoDriver.mouse.takeoverDuration=m)),l!==F&&P.resize()},[n,e,t,i,r,s,o,a,l,u,p,_,g,m,h,v]),U.jsx("div",{ref:x,className:`liquid-ether-container ${f||""}`,style:d})}function KD(){const n=[{title:"LCC Supervisor Committee",company:"Institute of Technology Del x PT Inalum",logo:"public/images/DELL.png",period:"Sep 2024",description:"Supervisor committee member for organizing collaborative events between Inalum and Del Institute of Technology.",achievements:["Ensure that there are no technical or logistical obstacles that could hinder the event.","Ensure that the competition runs smoothly according to the schedule that has been set.","Ensure that all event equipment is complete and has been tested before the event begins.","Ensure that there is no cheating between participants who take part in the LCC.","Ensure that the score recording is correct according to what the participants get."]},{title:"Committe Staff - Bioinformatics and Biodiversity Conference",company:"Institute of Technology Del",logo:"public/images/DELL.png",period:"Nov 2025",description:"Del Institute of Technology held The 6th Bioinformatics and Biodiversity Conference (BBC) 2025. The program was supported by Telkom Indonesia and Telkom Solution, which provided advanced connectivity solutions and digital platforms leveraging Big Data and Artificial Intelligence (AI) for applications in the field of bioinformatics.",achievements:["Ensure that invited guests enter the event room.","Ensure that all event supplies are in good condition.","Ensure that the event runs smoothly"]},{title:"Frontend Developer",company:"BEM Institute of Technology Del",logo:"public/images/bem.png",period:"Sep 2025 - Nov 2025",description:"Collaborating with the Student Executive Board (BEM) of the Del Institute of Technology to develop a BEM website platform. This project was built using Next.js for the frontend and Golang for the backend.",achievements:["Successfully built a website display using NextJS","Successfully built a CRUD system on the website"]}],e=[{title:"HIMATIF 2024 Cadre Formation Committee",division:"Sports Division",logo:"public/images/himatif.png",period:"Nov 2024",description:"This is an annual program organized by the Information Technology Student Association (HIMATIF) to conduct cadre development and introduce the association to new students enrolled in the Information Technology study program.",achievements:["Ensure that the event goes according to plan well and smoothly","Ensure the availability of tools and ensure the quality of tools and materials","Ensure the participation of participants to achieve the goals of the event"]},{title:"BEM Department of Arts and Culture",division:"Documentation and design division",logo:"https://upload.wikimedia.org/wikipedia/en/0/0a/Institut_Teknologi_Del_Logo.png",period:"2024 - 2025",description:"",achievements:["Record and store documentation of every event or organizational activity in the form of photos, videos, or writing.","Design logos, posters, banners, and other visual elements that reflect the identity of the organization.","Assist the organization in compiling systematic activity reports that can be used as references"]}];return U.jsxs(ju,{children:[U.jsx("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:U.jsx(Wd,{colors:["#5227FF","#0046FF","#B19EEF","#8B5CF6"],mouseForce:10,cursorSize:50,isViscous:!1,viscous:35,iterationsViscous:36,iterationsPoisson:36,resolution:.3,isBounce:!0,autoDemo:!0,autoSpeed:.4,autoIntensity:2.8,takeoverDuration:.3,autoResumeDelay:2500,autoRampDuration:.7})}),U.jsx("section",{className:"py-24 px-6 md:px-12 lg:px-24",children:U.jsxs("div",{className:"max-w-7xl mx-auto",children:[U.jsxs("div",{className:"text-center mb-16",children:[U.jsx("p",{className:"text-[#0046FF] font-medium tracking-wide mb-2",children:"JOURNEY"}),U.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Experience & Organization"})]}),U.jsxs("div",{className:"grid lg:grid-cols-2 gap-12",children:[U.jsxs("div",{children:[U.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[U.jsx("div",{className:"w-12 h-12 bg-[#0046FF]/10 rounded-lg flex items-center justify-center",children:U.jsx(Y_,{className:"w-6 h-6 text-[#0046FF]"})}),U.jsx("h3",{className:"text-2xl font-bold",children:"Work Experience"})]}),U.jsx("div",{className:"space-y-6",children:n.map((t,i)=>U.jsxs("div",{className:"relative pl-8 pb-8 border-l-2 border-gray-800 last:pb-0",children:[U.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0046FF] border-4 border-black"}),U.jsxs("div",{className:"bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-[#0046FF] transition-all duration-300",children:[U.jsxs("div",{className:"flex gap-4 mb-4",children:[t.logo&&U.jsx("div",{className:"flex-shrink-0",children:U.jsx("img",{src:t.logo,alt:t.company,className:"w-12 h-12 rounded-lg object-cover bg-white/10 p-1 border border-gray-700",onError:r=>{r.currentTarget.style.display="none"}})}),U.jsxs("div",{className:"flex-1",children:[U.jsx("p",{className:"text-sm text-[#0046FF] mb-2",children:t.period}),U.jsx("h4",{className:"text-xl font-semibold mb-1",children:t.title}),U.jsx("p",{className:"text-gray-400 font-medium",children:t.company})]})]}),U.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-4",children:t.description}),t.achievements&&U.jsx("ul",{className:"space-y-2",children:t.achievements.map((r,s)=>U.jsxs("li",{className:"flex gap-2 text-gray-300 text-sm",children:[U.jsx("span",{className:"text-[#0046FF] font-bold mt-0.5",children:"•"}),U.jsx("span",{children:r})]},s))})]})]},i))})]}),U.jsxs("div",{children:[U.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[U.jsx("div",{className:"w-12 h-12 bg-[#0046FF]/10 rounded-lg flex items-center justify-center",children:U.jsx(Y_,{className:"w-6 h-6 text-[#0046FF]"})}),U.jsx("h3",{className:"text-2xl font-bold",children:"Organizations"})]}),U.jsx("div",{className:"space-y-6",children:e.map((t,i)=>U.jsxs("div",{className:"relative pl-8 pb-8 border-l-2 border-gray-800 last:pb-0",children:[U.jsx("div",{className:"absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#0046FF] border-4 border-black"}),U.jsxs("div",{className:"bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-[#0046FF] transition-all duration-300",children:[U.jsxs("div",{className:"flex gap-4 mb-4",children:[t.logo&&U.jsx("div",{className:"flex-shrink-0",children:U.jsx("img",{src:t.logo,alt:t.title,className:"w-12 h-12 rounded-lg object-cover bg-white/10 p-1 border border-gray-700",onError:r=>{r.currentTarget.style.display="none"}})}),U.jsxs("div",{className:"flex-1",children:[U.jsx("p",{className:"text-sm text-[#0046FF] mb-2",children:t.period}),U.jsx("h4",{className:"text-xl font-semibold mb-1",children:t.title}),U.jsx("p",{className:"text-gray-400 font-medium",children:t.division})]})]}),U.jsx("p",{className:"text-gray-400 text-sm leading-relaxed mb-4",children:t.description}),t.achievements&&U.jsx("ul",{className:"space-y-2",children:t.achievements.map((r,s)=>U.jsxs("li",{className:"flex gap-2 text-gray-300 text-sm",children:[U.jsx("span",{className:"text-[#0046FF] font-bold mt-0.5",children:"•"}),U.jsx("span",{children:r})]},s))})]})]},i))})]})]})]})})]})}function ZD(){const n=["/images/Sertifikasi_GoogleCloud_Anno.png","/images/kader2024.jpg","/images/LCC_ANNO.png","/images/Committee_Anno.png","/images/kader2025.png"],[e,t]=Ze.useState(null);return Ze.useEffect(()=>{const i=r=>{r.key==="Escape"&&t(null)};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[]),U.jsxs(ju,{children:[U.jsx("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:U.jsx(Wd,{colors:["#5227FF","#0046FF","#B19EEF","#8B5CF6"],mouseForce:10,cursorSize:50,isViscous:!1,viscous:35,iterationsViscous:36,iterationsPoisson:36,resolution:.3,isBounce:!0,autoDemo:!0,autoSpeed:.4,autoIntensity:2.8,takeoverDuration:.3,autoResumeDelay:2500,autoRampDuration:.7})}),U.jsx("section",{className:"py-12 px-4 md:px-12 lg:px-24",children:U.jsxs("div",{className:"max-w-7l mx-auto",children:[U.jsx("div",{className:"text-center mb-8",children:U.jsx("h2",{className:"text-3xl md:text-4xl font-bold",children:"Certifications"})}),U.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",children:n.map((i,r)=>U.jsx("button",{onClick:()=>t(i),className:"relative overflow-hidden rounded-lg focus:outline-none","aria-label":`Open certificate ${r+1}`,children:U.jsx("img",{src:i,alt:`Certificate ${r+1}`,className:"w-full  object-cover rounded-lg hover:scale-105 transition-transform duration-300 bg-gray-800",onError:s=>{s.currentTarget.style.display="none"}})},r))}),e&&U.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4",role:"dialog","aria-modal":"true",onClick:()=>t(null),children:U.jsxs("div",{className:"relative max-w-5xl w-full",onClick:i=>i.stopPropagation(),children:[U.jsx("button",{onClick:()=>t(null),className:"absolute -top-3 -right-3 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white z-50","aria-label":"Close",children:"✕"}),U.jsx("img",{src:e,alt:"Certificate enlarged",className:"w-full max-h-[80vh] object-contain rounded"})]})})]})})]})}const QD=({children:n,className:e="",spotlightColor:t="rgba(59, 130, 246, 0.4)"})=>{const i=Ze.useRef(null),r=s=>{if(!i.current)return;const o=i.current.getBoundingClientRect(),a=s.clientX-o.left,l=s.clientY-o.top;i.current.style.setProperty("--mouse-x",`${a}px`),i.current.style.setProperty("--mouse-y",`${l}px`),i.current.style.setProperty("--spotlight-color",t)};return U.jsx("div",{ref:i,onMouseMove:r,className:`card-spotlight ${e}`,children:n})};function JD(){const n=[{title:"BEM IT Del Website",description:"Website designed to get news about BEM and IT Del.",image:"/images/bemweb.jpg",tags:["Next.js","Gin","PostgreSQL","Tailwind"],demoUrl:"https://bem-itdel.netlify.app/",repoUrl:"https://github.com/aosy01/Website-BEM-FrontEnd"},{title:"Corn Disease Detection App",description:"An application designed to assist farmers in managing corn leaf diseases.",image:"/images/corndisease.png",tags:["Python","Dart","Flutter","PyTorch","FastAPI"],repoUrl:"https://github.com/aosy01/Project_Corn_Disease"},{title:"Aosy Restaurant System",description:"The system is developed using Object-Oriented Programming (OOP) principles and the Java programming language.",image:"/images/aosyrestaurant.png",tags:["Java","OOP"],repoUrl:"https://github.com/aosy01/Aosy-Restaurant-Management-Application"},{title:"Temperature Detection System",description:"The system built to determine temperature and humidity uses DHT 22 and ESP",image:"/images/IoT.jpg",tags:["Arduino","PHP","JavaScript"],repoUrl:"https://github.com/aosy01/Realtime-Room-Temperature-Detection-System"},{title:"Anthony Store Information System",description:"Designing an information system regarding Anthony's shop",image:"/images/anthonystore.png",tags:["HTML","Bootstrap","CSS"],repoUrl:"https://github.com/aosy01/Website-Anthony-Store"},{title:"Student Stress Detection System",description:"Conducting system design to classify students' stress levels",image:"/images/stressdetection.png",tags:["Python","TensorFlow","Keras","Flask"],repoUrl:"https://github.com/aosy01/Classification-Student-Stress"}];return U.jsxs(ju,{children:[U.jsx("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:U.jsx(Wd,{colors:["#5227FF","#0046FF","#B19EEF","#8B5CF6"],mouseForce:10,cursorSize:50,isViscous:!1,viscous:35,iterationsViscous:36,iterationsPoisson:36,resolution:.3,isBounce:!0,autoDemo:!0,autoSpeed:.4,autoIntensity:2.8,takeoverDuration:.3,autoResumeDelay:2500,autoRampDuration:.7})}),U.jsx("section",{className:"py-24 px-6 md:px-12 lg:px-24 bg-gray-900/20",children:U.jsxs("div",{className:"max-w-7xl mx-auto",children:[U.jsx("div",{className:"text-center mb-16",children:U.jsx("h2",{className:"text-5xl md:text-6xl font-bold text-white",children:"My Projects"})}),U.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-10",children:n.map((e,t)=>U.jsxs(QD,{className:"relative group rounded-2xl",children:[U.jsxs("div",{className:"relative h-52 overflow-hidden rounded-2xl bg-gray-900",children:[U.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"}),U.jsxs("div",{className:`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                    flex items-end justify-center gap-6 pb-6`,children:[e.demoUrl?U.jsx("a",{href:e.demoUrl,target:"_blank",rel:"noopener noreferrer",className:`w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center
                          hover:scale-110 transition-transform shadow-lg shadow-cyan-500/40`,children:U.jsx($_,{className:"w-6 h-6 text-white"})}):U.jsx("div",{className:"w-12 h-12 bg-gray-700/50 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed",children:U.jsx($_,{className:"w-6 h-6 text-gray-400"})}),U.jsx("a",{href:e.repoUrl,target:"_blank",rel:"noopener noreferrer",className:`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center
                        hover:scale-110 transition-transform shadow-lg`,children:U.jsx(Yy,{className:"w-6 h-6 text-white"})})]})]}),U.jsxs("div",{className:"mt-6 px-1",children:[U.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:e.title}),U.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-5",children:e.description}),U.jsx("div",{className:"flex flex-wrap gap-3",children:e.tags.map((i,r)=>U.jsx("span",{className:`px-4 py-2 text-xs rounded-full
                          bg-cyan-500/10 text-cyan-400 border border-cyan-500/30`,children:i},r))})]})]},t))})]})})]})}function eL(){const n=[{icon:nm,label:"Email",value:"annoderitman@gmail.com",link:"mailto:annoderitman@gmail.com"},{icon:Lw,label:"Phone",value:"+62 878 1665 2331",link:"tel:+6287816652331"},{icon:Rw,label:"Location",value:"Pematang Siantar, Sumatera Utara",link:"https://maps.app.goo.gl/2hDDvim6npTxUCyRA"}];return U.jsx(ju,{children:U.jsx("section",{className:"py-24 px-6 md:px-12 lg:px-24 bg-gray-900/20",children:U.jsxs("div",{className:"max-w-7xl mx-auto",children:[U.jsx("div",{className:"text-center mb-16",children:U.jsx("h2",{className:"text-4xl md:text-5xl font-bold mb-6",children:"Let's Work Together"})}),U.jsx("div",{className:"grid lg:grid-cols-3 gap-8 mb-12",children:n.map((e,t)=>U.jsxs("a",{href:e.link,className:"bg-black/40 border border-gray-800 rounded-xl p-6 hover:border-[#0046FF] transition-all duration-300 group text-center",children:[U.jsx("div",{className:"w-14 h-14 bg-[#0046FF]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0046FF]/20 transition-colors",children:U.jsx(e.icon,{className:"w-6 h-6 text-[#0046FF]"})}),U.jsx("p",{className:"text-sm text-gray-400 mb-1",children:e.label}),U.jsx("p",{className:"font-medium",children:e.value})]},t))}),U.jsx("div",{className:"mt-16 pt-8 border-t border-gray-800 text-center",children:U.jsx("p",{className:"text-gray-400",children:"© 2025 Anno D Siregar. All rights reserved."})})]})})})}const tL=({items:n,animationTime:e=600,particleCount:t=15,particleDistances:i=[90,10],particleR:r=100,timeVariance:s=300,colors:o=[1,2,3,1,2,3,1,4],initialActiveIndex:a=0,activeIndex:l})=>{const u=Ze.useRef(null),c=Ze.useRef(null),d=Ze.useRef(null),f=Ze.useRef(null),[p,_]=Ze.useState(a),g=l!==void 0?l:p,m=(w=1)=>w/2-Math.random()*w,h=(w,E,b)=>{const M=(360+m(8))/b*E*(Math.PI/180);return[w*Math.cos(M),w*Math.sin(M)]},v=(w,E)=>{const b=m(r/10);return{start:h(i[0],t-w,t),end:h(i[1]+m(7),t-w,t),time:E,scale:1+m(.2),color:o[Math.floor(Math.random()*o.length)],rotate:b>0?(b+r/20)*10:(b-r/20)*10}},x=w=>{w.style.setProperty("--time",`${e*2+s}ms`),w.querySelectorAll(".particle").forEach(E=>E.remove());for(let E=0;E<t;E++){const b=e*2+m(s*2),M=v(E,b);setTimeout(()=>{const S=document.createElement("span"),P=document.createElement("span");S.className="particle",P.className="point",Object.entries({"--start-x":`${M.start[0]}px`,"--start-y":`${M.start[1]}px`,"--end-x":`${M.end[0]}px`,"--end-y":`${M.end[1]}px`,"--time":`${M.time}ms`,"--scale":`${M.scale}`,"--rotate":`${M.rotate}deg`,"--color":`var(--color-${M.color}, #06b6d4)`}).forEach(([F,V])=>S.style.setProperty(F,V)),S.appendChild(P),w.appendChild(S),requestAnimationFrame(()=>w.classList.add("active")),setTimeout(()=>S.remove(),b+100)},E*30)}},y=w=>{if(!u.current||!d.current||!f.current||!c.current)return;const E=c.current.children[w];if(!E)return;const b=u.current.getBoundingClientRect(),M=E.getBoundingClientRect(),S={left:`${M.x-b.x}px`,top:`${M.y-b.y}px`,width:`${M.width}px`,height:`${M.height}px`};Object.assign(d.current.style,S),Object.assign(f.current.style,S),f.current.textContent=E.textContent||""},C=w=>{g!==w&&(l===void 0&&_(w),y(w),d.current&&x(d.current),f.current&&(f.current.classList.remove("active"),f.current.offsetWidth,f.current.classList.add("active")))};return Ze.useEffect(()=>{l!==void 0&&l!==g&&C(l)},[l]),Ze.useEffect(()=>{y(g),f.current&&f.current.classList.add("active");const w=new ResizeObserver(()=>{y(g)});return u.current&&w.observe(u.current),()=>w.disconnect()},[g]),U.jsxs("div",{className:"gooey-nav-container",ref:u,children:[U.jsx("nav",{children:U.jsx("ul",{ref:c,children:n.map((w,E)=>U.jsx("li",{className:E===g?"active":"",children:U.jsx("a",{href:w.href,onClick:b=>{b.preventDefault(),C(E);const M=document.querySelector(w.href);M&&M.scrollIntoView({behavior:"smooth"})},children:w.label})},E))})}),U.jsx("span",{className:"effect filter",ref:d}),U.jsx("span",{className:"effect text",ref:f})]})};function nL(){const[n,e]=Ze.useState("hero"),t=[{href:"#hero",label:"Home",id:"hero"},{href:"#about",label:"About",id:"about"},{href:"#experience",label:"Experience",id:"experience"},{href:"#certification",label:"Certification",id:"certification"},{href:"#projects",label:"Projects",id:"projects"},{href:"#contact",label:"Contact",id:"contact"}],i="/logo.png";Ze.useEffect(()=>{const s=t.map(a=>document.querySelector(a.href)),o=()=>{const a=window.scrollY+150;for(let l=s.length-1;l>=0;l--){const u=s[l];if(u&&a>=u.offsetTop){e(t[l].id);break}}};return o(),window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]);const r=t.findIndex(s=>s.id===n);return U.jsx("nav",{className:"fixed top-6 left-0 right-0 z-50 pointer-events-auto",children:U.jsx("div",{className:"max-w-7xl mx-auto px-6 md:px-12 lg:px-24",children:U.jsxs("div",{className:"bg-black/70 backdrop-blur-xl border border-gray-800/50 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl",children:[U.jsxs("a",{href:"#hero",className:"flex items-center gap-3 hover:scale-105 transition-transform",children:[U.jsx("img",{src:i,alt:"Logo",onError:s=>{s.currentTarget.style.display="none"},className:"w-9 h-9 rounded-full object-cover border border-cyan-500/50"}),U.jsx("span",{className:"text-white font-bold text-lg tracking-tight",children:"Anno Siregar"})]}),U.jsx("div",{className:"hidden lg:block",children:U.jsx(tL,{items:t,particleCount:15,particleDistances:[80,10],particleR:90,initialActiveIndex:0,activeIndex:r,animationTime:600,timeVariance:250,colors:[1,2,3,4,1,2,3]})}),U.jsx("button",{className:"lg:hidden p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all",children:U.jsx(Pw,{className:"w-6 h-6 text-cyan-400"})})]})})})}function iL({children:n,sparkColor:e="#60A5FA",sparkCount:t=8,duration:i=600}){const r=Ze.useRef(null),[s,o]=Ze.useState([]),a=Ze.useRef(0);return Ze.useEffect(()=>{const l=r.current;if(!l)return;const u=c=>{const d=l.getBoundingClientRect(),f=c.clientX-d.left,p=c.clientY-d.top,_=[];for(let g=0;g<t;g++)_.push({id:a.current++,x:f,y:p,angle:Math.PI*2*g/t,life:1});o(g=>[...g,..._])};return l.addEventListener("click",u),()=>l.removeEventListener("click",u)},[t]),Ze.useEffect(()=>{if(!s.length)return;const l=setInterval(()=>{o(u=>u.map(c=>({...c,life:c.life-16/i})).filter(c=>c.life>0))},16);return()=>clearInterval(l)},[s,i]),U.jsxs("div",{ref:r,className:"relative",children:[n,U.jsx("svg",{className:"absolute inset-0 pointer-events-none",width:"100%",height:"100%",children:s.map(l=>{const c=22*(1-l.life),d=l.x+Math.cos(l.angle)*c,f=l.y+Math.sin(l.angle)*c,p=12*l.life;return U.jsx("line",{x1:d,y1:f,x2:d+Math.cos(l.angle)*p,y2:f+Math.sin(l.angle)*p,stroke:e,strokeWidth:2,strokeLinecap:"round",opacity:l.life},l.id)})})]})}function rL(){return U.jsx(iL,{children:U.jsxs("div",{className:"min-h-screen bg-black text-white",children:[U.jsx(nL,{}),U.jsx("div",{className:"fixed inset-0 -z-10 overflow-hidden",children:U.jsx(Wd,{colors:["#5227FF","#0046FF","#B19EEF","#8B5CF6"],mouseForce:10,cursorSize:50,isViscous:!1,viscous:35,iterationsViscous:36,iterationsPoisson:36,resolution:.3,isBounce:!0,autoDemo:!0,autoSpeed:.4,autoIntensity:2.8,takeoverDuration:.3,autoResumeDelay:2500,autoRampDuration:.7})}),U.jsxs("main",{className:"pt-24",children:[U.jsx("div",{id:"hero",children:U.jsx(Uw,{})}),U.jsx("div",{id:"about",children:U.jsx(U3,{})}),U.jsx("div",{id:"experience",children:U.jsx(KD,{})}),U.jsx("div",{id:"certification",children:U.jsx(ZD,{})}),U.jsx("div",{id:"projects",children:U.jsx(JD,{})}),U.jsx("div",{id:"contact",children:U.jsx(eL,{})})]})]})})}jy(document.getElementById("root")).render(U.jsx(Ze.StrictMode,{children:U.jsx(rL,{})}));
