!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=82)}([function(t,e,r){var n=r(49);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},function(t,e,r){var n=r(15),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},function(t,e,r){var n=r(16),o=r(36),i=r(13),a=r(4),c=r(22),s=r(24),u=r(17),p=r(26),f=Object.prototype.hasOwnProperty;t.exports=function(t){if(null==t)return!0;if(c(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||s(t)||p(t)||i(t)))return!t.length;var e=o(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(u(t))return!n(t).length;for(var r in t)if(f.call(t,r))return!1;return!0}},function(t,e,r){var n=r(27);t.exports=function(t){return(null==t?0:t.length)?n(t,1):[]}},function(t,e){var r=Array.isArray;t.exports=r},function(t,e,r){var n=r(38),o=r(41);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},function(t,e,r){var n=r(7),o=r(32),i=r(33),a=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):i(t)}},function(t,e,r){var n=r(1).Symbol;t.exports=n},function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},function(t,e,r){var n=r(5)(Object,"create");t.exports=n},function(t,e,r){var n=r(66);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},function(t,e,r){var n=r(71);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},function(t,e,r){var n=r(79),o=r(16),i=r(22);t.exports=function(t){return i(t)?n(t):o(t)}},function(t,e,r){var n=r(31),o=r(8),i=Object.prototype,a=i.hasOwnProperty,c=i.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(t){return o(t)&&a.call(t,"callee")&&!c.call(t,"callee")};t.exports=s},function(t,e,r){var n=r(6),o=r(8);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(30))},function(t,e,r){var n=r(17),o=r(34),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},function(t,e){var r=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||r)}},function(t,e,r){var n=r(6),o=r(19);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e){var r=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return r.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},function(t,e,r){var n=r(5)(r(1),"Map");t.exports=n},function(t,e,r){var n=r(18),o=r(23);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},function(t,e,r){(function(t){var n=r(1),o=r(45),i=e&&!e.nodeType&&e,a=i&&"object"==typeof t&&t&&!t.nodeType&&t,c=a&&a.exports===i?n.Buffer:void 0,s=(c?c.isBuffer:void 0)||o;t.exports=s}).call(this,r(25)(t))},function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,e,r){var n=r(46),o=r(47),i=r(48),a=i&&i.isTypedArray,c=a?o(a):n;t.exports=c},function(t,e,r){var n=r(28),o=r(29);t.exports=function t(e,r,i,a,c){var s=-1,u=e.length;for(i||(i=o),c||(c=[]);++s<u;){var p=e[s];r>0&&i(p)?r>1?t(p,r-1,i,a,c):n(c,p):a||(c[c.length]=p)}return c}},function(t,e){t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},function(t,e,r){var n=r(7),o=r(13),i=r(4),a=n?n.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||o(t)||!!(a&&t&&t[a])}},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(6),o=r(8);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},function(t,e,r){var n=r(7),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,c=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,c),r=t[c];try{t[c]=void 0;var n=!0}catch(t){}var o=a.call(t);return n&&(e?t[c]=r:delete t[c]),o}},function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},function(t,e,r){var n=r(35)(Object.keys,Object);t.exports=n},function(t,e){t.exports=function(t,e){return function(r){return t(e(r))}}},function(t,e,r){var n=r(37),o=r(21),i=r(42),a=r(43),c=r(44),s=r(6),u=r(20),p=u(n),f=u(o),l=u(i),d=u(a),_=u(c),m=s;(n&&"[object DataView]"!=m(new n(new ArrayBuffer(1)))||o&&"[object Map]"!=m(new o)||i&&"[object Promise]"!=m(i.resolve())||a&&"[object Set]"!=m(new a)||c&&"[object WeakMap]"!=m(new c))&&(m=function(t){var e=s(t),r="[object Object]"==e?t.constructor:void 0,n=r?u(r):"";if(n)switch(n){case p:return"[object DataView]";case f:return"[object Map]";case l:return"[object Promise]";case d:return"[object Set]";case _:return"[object WeakMap]"}return e}),t.exports=m},function(t,e,r){var n=r(5)(r(1),"DataView");t.exports=n},function(t,e,r){var n=r(18),o=r(39),i=r(19),a=r(20),c=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,p=s.toString,f=u.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?l:c).test(a(t))}},function(t,e,r){var n,o=r(40),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},function(t,e,r){var n=r(1)["__core-js_shared__"];t.exports=n},function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},function(t,e,r){var n=r(5)(r(1),"Promise");t.exports=n},function(t,e,r){var n=r(5)(r(1),"Set");t.exports=n},function(t,e,r){var n=r(5)(r(1),"WeakMap");t.exports=n},function(t,e){t.exports=function(){return!1}},function(t,e,r){var n=r(6),o=r(23),i=r(8),a={};a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!a[n(t)]}},function(t,e){t.exports=function(t){return function(e){return t(e)}}},function(t,e,r){(function(t){var n=r(15),o=e&&!e.nodeType&&e,i=o&&"object"==typeof t&&t&&!t.nodeType&&t,a=i&&i.exports===o&&n.process,c=function(){try{var t=i&&i.require&&i.require("util").types;return t||a&&a.binding&&a.binding("util")}catch(t){}}();t.exports=c}).call(this,r(25)(t))},function(t,e,r){var n=r(50),o=r(78);t.exports=function(t,e){for(var r=0,i=(e=n(e,t)).length;null!=t&&r<i;)t=t[o(e[r++])];return r&&r==i?t:void 0}},function(t,e,r){var n=r(4),o=r(51),i=r(52),a=r(75);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:i(a(t))}},function(t,e,r){var n=r(4),o=r(14),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||(a.test(t)||!i.test(t)||null!=e&&t in Object(e))}},function(t,e,r){var n=r(53),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,a=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(i,"$1"):r||t)})),e}));t.exports=a},function(t,e,r){var n=r(54);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},function(t,e,r){var n=r(55);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=t.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},function(t,e,r){var n=r(56),o=r(70),i=r(72),a=r(73),c=r(74);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=c,t.exports=s},function(t,e,r){var n=r(57),o=r(63),i=r(21);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},function(t,e,r){var n=r(58),o=r(59),i=r(60),a=r(61),c=r(62);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=c,t.exports=s},function(t,e,r){var n=r(9);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},function(t,e,r){var n=r(9),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},function(t,e,r){var n=r(9),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},function(t,e,r){var n=r(9);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},function(t,e,r){var n=r(64),o=r(65),i=r(67),a=r(68),c=r(69);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=i,s.prototype.has=a,s.prototype.set=c,t.exports=s},function(t,e){t.exports=function(){this.__data__=[],this.size=0}},function(t,e,r){var n=r(10),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0)&&(r==e.length-1?e.pop():o.call(e,r,1),--this.size,!0)}},function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},function(t,e,r){var n=r(10);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},function(t,e,r){var n=r(10);t.exports=function(t){return n(this.__data__,t)>-1}},function(t,e,r){var n=r(10);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},function(t,e,r){var n=r(11);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},function(t,e,r){var n=r(11);t.exports=function(t){return n(this,t).get(t)}},function(t,e,r){var n=r(11);t.exports=function(t){return n(this,t).has(t)}},function(t,e,r){var n=r(11);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},function(t,e,r){var n=r(76);t.exports=function(t){return null==t?"":n(t)}},function(t,e,r){var n=r(7),o=r(77),i=r(4),a=r(14),c=n?n.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(i(e))return o(e,t)+"";if(a(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},function(t,e){t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},function(t,e,r){var n=r(14);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},function(t,e,r){var n=r(80),o=r(13),i=r(4),a=r(24),c=r(81),s=r(26),u=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=i(t),p=!r&&o(t),f=!r&&!p&&a(t),l=!r&&!p&&!f&&s(t),d=r||p||f||l,_=d?n(t.length,String):[],m=_.length;for(var y in t)!e&&!u.call(t,y)||d&&("length"==y||f&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,m))||_.push(y);return _}},function(t,e){t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},function(t,e){var r=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var n=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==n||"symbol"!=n&&r.test(t))&&t>-1&&t%1==0&&t<e}},function(t,e,r){"use strict";r.r(e);var n=r(3),o=r.n(n),i=r(2),a=r.n(i),c=r(0),s=r.n(c);const u=navigator.connection||navigator.mozConnection||navigator.webkitConnection,p=(new Date).toISOString(),f=(t,e)=>t.filter(({name:t})=>t===e);function l(){const t="CELLULAR_"+s()(u,"effectiveType","").toUpperCase().replace("-","_");return u?{connectionType:t}:{}}async function d({attributes:t,isSiteSpeed:e}){const{browser:r,platformVersion:n}=await async function(t){if(!window.__BROWSER_DETECT__)return{browser:"unknown",platformVersion:"unknown"};const e=window.__BROWSER_DETECT__.version;return{browser:t?"sitespeed":await window.__BROWSER_DETECT__.getBrowserName(),platformVersion:e}}(e);return{...t,browser:r,platformVersion:n}}function _(t){if(!t||"string"!=typeof t)return null;const e=t.replace(/[^\d;]/g,"");return parseInt(e[0])||null}async function m(t,{attributes:e,user:r,page:n,object:o,properties:i={},isSiteSpeed:a}){const c=await d({attributes:e,isSiteSpeed:a}),s=l();return[{metrics:function(t){return Object.keys(t).map(e=>({type:e,value:t[e]}))}(t),attributes:c,object:o,actionType:"metric",timestamp:p,version:"2",user:r,page:n,properties:{...i,...s}}]}async function y(t){return new Promise(e=>setTimeout(e,t))}var g=t=>async e=>{const{metrics:r,properties:n}=e;if(a()(r))return{};const o={...t,properties:{...t.properties,...n}};return await m(r,o)},v=r(12),T=r.n(v),b=function(t,e){if(t&&"number"==typeof t&&e&&"number"==typeof e)return t-e},h=(t,e=!1)=>{const{domainLookupEnd:r,domainLookupStart:n,connectEnd:o,responseStart:i,responseEnd:a,requestStart:c,secureConnectionStart:s,fetchStart:u,connectStart:p,duration:f,decodedBodySize:l,encodedBodySize:d,transferSize:m,nextHopProtocol:y,initiatorType:g,serverTiming:v=[]}=t,h=b(s||o,p),S={...{TRANSFER_SIZE:m,DECODED_SIZE:l,ENCODED_SIZE:d},...{CACHE_TIME:b(n,u),TLS_TIME:b(c,s),DNS_TIME:b(r,n)},...{TCP_TIME:h,TIME_TO_FIRST_BYTE:b(i,n),TIME_TO_LAST_BYTE:b(a,n)},..."img"===g||e?((t=[])=>{const e=t.reduce((t,e)=>"o3_img_resize"===e.name?(t[e.name]=e.duration||0,t):(t[e.name]=e.description||"",t),{}),r={};return"HIT"===e["cdn-cache"]?r.CDN_CACHE=2:"HIT"===e.o3_img_cache?r.CDN_CACHE=1:"MISS"===e.o3_img_cache&&e.o3_img_resize&&(r.IMG_RESIZE_TIME=e.o3_img_resize),r})(v):{},TOTAL_TIME:f,PROTOCOL_VERSION:_(y)},E={};return T()(S).filter(t=>S[t]>0).forEach(t=>E[t]=S[t]),{metrics:E,properties:{url:t.name}}};const S=["https://cdn1.ozone.ru/s3/multimedia-l/wc300/6103357569.jpg","https://xcdn.ozone.ru/s3/multimedia-l/wc300/6103357569.jpg"];function E(t){const e=new URL(t);return e.searchParams.append("timestamp",String(Date.now())),e.searchParams.append("type","perf-image-test"),e.toString()}async function w(t){for(const e of t)try{await fetch(e,{cache:"no-store"})}catch(t){}}const j={Total:"ST_TOTAL",Internal:"ST_INTERNAL",Widgets:"ST_WIDGETS",Action:"ST_ACTION",Resolve:"ST_RESOLVE",Render:"ST_BODY_LB",RenderFirstByte:"ST_BODY_FB",RenderHeadFirstByte:"ST_HEAD_FB",RenderHead:"ST_HEAD_LB",FirstByte:"ST_COMPOSER_FB",LastByte:"ST_COMPOSER_LB"};var O=function(t=[]){const e={};return t&&0!==t.length?(t.forEach(({name:t,duration:r})=>{j[t]&&(e[j[t]]=r)}),e):e};const x={CLS:"CUMULATIVE_LAYOUT_SHIFT",LCP:"LARGEST_CONTENTFUL_PAINT",FID:"FIRST_INPUT_DELAY",LT:"LONG_TASK_COUNT"},M=t=>{const e={};return Object.keys(t).forEach(r=>{var n;t[r].value&&(e[(n=r,x[n])]=t[r].value)}),e};var I=function(t=[]){if(performance.getEntriesByType){const e=performance.getEntriesByType("mark").reduce((t,e)=>(t[e.name]=e.startTime,t),{}),r={};for(let n=0;n<t.length;n++){const o=t[n],i=b(e[o+":end"],e[o+":start"]);i&&i>0&&(r[o]=i,performance.clearMarks(o+":end"))}return 0===Object.keys(r).length?{}:r}return{}};function A(t){return Math.max(...t.map(t=>t.responseEnd))-Math.min(...t.map(t=>t.requestStart))||null}function C(t){return t.split(".").pop()}var P=function(t){if(!t)return{};const e=performance.getEntriesByType("resource"),r=e.filter(e=>"img"===e.initiatorType&&t.includes(e.name)),n=e.filter(e=>"script"===e.initiatorType&&t.includes(e.name)),o=e.filter(e=>"css"===C(e.name)&&t.includes(e.name)),i=e.filter(e=>{const r=C(e.name);return!!["woff","woff2"].includes(r)&&t.includes(e.name)});return{INTERNAL_LOAD_IMG:A(r),INTERNAL_LOAD_JS:A(n),INTERNAL_LOAD_CSS:A(o),INTERNAL_LOAD_FONT:A(i)}},k=({trackNavigation:t,trackPaint:e,customMarksNames:r,internalResources:n})=>({...t?function(){const{domLoading:t,domComplete:e,domInteractive:r,domContentLoadedEventEnd:n,domainLookupEnd:o,domainLookupStart:i,connectEnd:a,responseStart:c,responseEnd:u,requestStart:p,secureConnectionStart:f,navigationStart:l,fetchStart:d,connectStart:m}=performance.timing;let y;const g=b(f||a,m),v={CACHE_TIME:b(i,d),TLS_TIME:b(p,f),DNS_TIME:b(o,i)},h={TCP_TIME:g,TIME_TO_FIRST_BYTE:b(c,i),TIME_TO_LAST_BYTE:b(u,i)},S={DOM_LOADING_TIME:b(t,l),DOM_CONTENT_LOADED_TIME:b(n,l),DOM_COMPLETE_TIME:b(e,l),DOM_INTERACTIVE_TIME:b(r,l),SERVER_TIME:b(c,p),RESPONSE_TIME:b(u,c)};if(y={...S,...v,...h},performance.getEntriesByType){const t=performance.getEntriesByType("navigation"),e=s()(performance.getEntriesByName("HYDRATION_TIME"),"0.startTime");if(t&&t[0]){const{duration:r,decodedBodySize:n,encodedBodySize:o,transferSize:i,domContentLoadedEventEnd:a,nextHopProtocol:c}=t[0],s={TRANSFER_SIZE:i,DECODED_SIZE:n,ENCODED_SIZE:o},u=window.serverTiming||t[0].serverTiming;y={...y,...s,...O(u),HYDRATION_TIME:b(e,a),TOTAL_TIME:r,PROTOCOL_VERSION:_(c)}}}const E={};return T()(y).filter(t=>y[t]>0).forEach(t=>E[t]=y[t]),E}():{},...e?function(){if(performance.getEntriesByType){const t=performance.getEntriesByType("paint"),[e]=f(t,"first-contentful-paint"),[r]=f(t,"first-paint");if(e&&r)return{FIRST_CONTENTFUL_PAINT:e.startTime,FIRST_PAINT:r.startTime}}return{}}():{},...I(r),...P(n)}),N=({endpoint:t,headers:e},r)=>{const n=JSON.stringify(r);e&&"object"==typeof e?fetch(t,{method:"POST",keepalive:!0,body:n,headers:{"Content-Type":"application/json",...e}}):navigator.sendBeacon(t,n)},L=async({metrics:t={},getUser:e,getPage:r,object:n,getAttributes:i,endpoint:c,trackNavigation:u,trackPaint:p,customMarksNames:f,trackImages:l,trackJs:d,trackSpa:_,trackCdnImages:v,spaTransitionUrl:T,trackPagination:b,paginationUrl:j,isSiteSpeed:x,webVitalsVariable:I,headers:A,internalResources:C})=>{if(!window.performance||!performance.timing)return;const P={...k({trackNavigation:u,trackPaint:p,customMarksNames:f,internalResources:C}),...t},L={attributes:i(),user:e(),page:r(),object:n,isSiteSpeed:x},R=l?await async function(t){const e={...t,object:{type:"IMAGE"}},r=performance.getEntriesByType("resource").filter(t=>"img"===t.initiatorType).map(t=>h(t)).map(g(e)),n=await Promise.all(r);return n.filter(t=>!a()(t)),o()(n)}(L):[],B=d?await async function(t){const e={...t,object:{type:"SCRIPT"}},r=performance.getEntriesByType("resource").filter(t=>/\.js$/.test(t.name)).map(t=>h(t)).map(g(e)),n=await Promise.all(r);return n.filter(t=>!a()(t)),o()(n)}(L):[],D=b?await function(t,e){const r=s()(performance.getEntriesByName("paginationStart"),"0.startTime"),n=s()(performance.getEntriesByName("paginationEnd"),"0.startTime"),o=performance.getEntriesByType("resource").reverse().find(t=>t.name.includes(e));if(!o)return[];const i=h(o);return i.metrics={...i.metrics,...O(o.serverTiming)},i.metrics.TOTAL_TIME=n-r,setTimeout(()=>{performance.clearMarks("paginationStart"),performance.clearMarks("paginationEnd")},0),g(t)(i)}(L,j):[],U=_?await function(t,e,{saveMarks:r}={}){const n=s()(performance.getEntriesByName("spaTransitionStart"),"0.startTime"),o=s()(performance.getEntriesByName("spaTransitionEnd"),"0.startTime"),i=s()(performance.getEntriesByName("layoutTimeStart"),"0.startTime"),a=s()(performance.getEntriesByName("layoutTimeEnd"),"0.startTime"),c=performance.getEntriesByType("resource").reverse().find(t=>t.name.includes(e));if(!c)return[];const u=h(c);return u.metrics={...u.metrics,...O(c.serverTiming)},u.metrics.TOTAL_TIME=o-n,u.metrics.LAYOUT_TIME=a-i,r||setTimeout(()=>{performance.clearMarks("spaTransitionStart"),performance.clearMarks("spaTransitionEnd"),performance.clearMarks("layoutTimeStart"),performance.clearMarks("layoutTimeEnd")},0),g(t)(u)}(L,T,{saveMarks:x}):[],F=I?await m(M(I),L):[],z={events:[...u||p||f?await m(P,L):[],...U,...D,...R,...B,...F,...v?await async function(t,e=S){const r=e.map(E);await w(r),await w(r);const n=()=>{const t=r.map(t=>performance.getEntriesByName(t));return o()(t)};let i=n(),c=10;for(;i.length!==2*e.length||c<=0;)await y(100),i=n(),c-=1;const s={...t,object:{type:"IMAGE"}},u=i.map(t=>h(t,!0)).map(g(s)),p=await Promise.all(u);return p.filter(t=>!a()(t)),o()(p)}(L):[]]};N({endpoint:c,headers:A},z)},R=async({getAttributes:t,object:e,propertyUrl:r,metrics:n,getUser:o,getPage:i,endpoint:a,headers:c,isSiteSpeed:s,errors:u})=>{const f={attributes:t(),user:o(),page:i(),object:e,isSiteSpeed:s,properties:{url:r}};u&&u.length&&f.properties&&(f.properties.errors=u);const _=await async function(t,{attributes:e,user:r,page:n,object:o,properties:i={},isSiteSpeed:a}){const c=await d({attributes:e,isSiteSpeed:a}),s=l();return[{customMetrics:t,attributes:c,object:o,actionType:"metric",timestamp:p,version:"2",user:r,page:n,properties:{...i,...s}}]}(n,f);N({endpoint:a,headers:c},{events:_})};function B(t,e,r){const n=function t(e){const r=[];for(const n of e)if(void 0!==n.timeSpent&&r.push(n),void 0!==n.placeholders)for(const e of n.placeholders)r.push(...t(e.widgets));return r}(r);n.length>0&&function(t,e,r){const n=r.map(t=>({name:"WidgetTimeSpent",value:t.timeSpent,metric:t.name}));window.__ClientMetrics__.trackCustomMetric({propertyUrl:t,objectType:e,metrics:n})}(t,e,n)}window.__ClientMetrics__={},window.__ClientMetrics__.init=function({isBot:t=!1,endpoint:e="",getAttributes:r=(()=>null),trackNavigation:n=!0,trackPaint:o=!0,trackImages:i=!1,trackJs:a=!1,trackCdnImages:c=!1,customMarksNames:u=[],trackMemory:p=!0,getUser:f=(()=>null),getPage:l=(()=>null),object:d={},settings:_={spaTransitionUrl:"",paginationUrl:""},isSiteSpeed:y=!1,webVitalsVariable:g=window.$$windowMetrics,headers:v=""}={}){try{if(t)return{};if(!e)return{};if(!(window&&window.navigator&&navigator.sendBeacon))return{};const v=function(){const t=document.querySelectorAll("[internal]"),e=[];for(let r=0;r<t.length;r++){const n=t[r],o=n.href||n.src;o&&e.push(o)}const r=window.__INTERNAL_IMAGES__||[];return e.concat(r)}(),T={internalResources:v,metrics:{},getAttributes:r,isSiteSpeed:y,object:d,getUser:f,getPage:l,endpoint:e,trackNavigation:n,trackPaint:o,trackImages:i,trackJs:a,trackCdnImages:c,customMarksNames:u,headers:null},{spaTransitionUrl:b,paginationUrl:h}=_,S=()=>L(T),E=()=>L({...T,webVitalsVariable:g});"complete"===document.readyState?setTimeout(E,0):window.addEventListener("load",()=>setTimeout(E,0)),window.addEventListener("beforeunload",S),p&&window.addEventListener("beforeunload",()=>(async({endpoint:t,getAttributes:e,getPage:r,getUser:n,headers:o,...i})=>{const a=s()(window.performance,["memory","usedJSHeapSize"]),c=s()(window.performance,["memory","totalJSHeapSize"]),u={TOTAL_MEMORY_USAGE:c,JS_HEAP_MEMORY_USAGE:a},p={...i,attributes:e(),page:r(),user:n()};if(a||c){const e=await m(u,p);N({endpoint:t,headers:o},{events:e})}})({endpoint:e,getAttributes:r,getPage:l,getUser:f,headers:null,object:{type:"APPLICATION"}})),window.__ClientMetrics__.trackSpaTransition=()=>{L({customMarksNames:u,getAttributes:r,object:{type:"PAGE"},getUser:f,getPage:l,endpoint:e,trackSpa:!0,spaTransitionUrl:b,isSiteSpeed:y,headers:null})},window.__ClientMetrics__.trackSpa=()=>{L({customMarksNames:u,getAttributes:r,object:{type:"PAGE"},getUser:f,getPage:l,endpoint:e,isSiteSpeed:y,headers:null})},window.__ClientMetrics__.trackPaginationChange=()=>{L({getAttributes:r,object:{type:"PAGE_PART"},getUser:f,getPage:l,endpoint:e,trackPagination:!0,paginationUrl:h,isSiteSpeed:y})},window.__ClientMetrics__.trackCustomMetric=({propertyUrl:t,metrics:n,objectType:o="CUSTOM",errors:i})=>{R({getAttributes:r,object:{type:o},propertyUrl:t,metrics:n,getUser:f,getPage:l,endpoint:e,isSiteSpeed:y,headers:null,errors:i})},window.__ClientMetrics__.trackWidgetsTimeSpent=B}catch(t){console.error(t)}},window.__ClientMetricsAutoInit__&&window.__ClientMetricsInit__&&(window.__ClientMetrics__.init(window.__ClientMetricsInit__),(()=>{if(!window.widgetsTiming)return;const t=window.widgetsTiming.map(t=>{const[e="",r=0]=t;return{metric:e,name:"WidgetRender",value:r}});window.__ClientMetrics__.trackCustomMetric({propertyUrl:window.__ClientMetricsInit__.getPage().currentUrl,metrics:t,objectType:"APPLICATION"})})())}])}));