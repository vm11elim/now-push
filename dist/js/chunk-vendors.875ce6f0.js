(self["webpackChunknow_push"]=self["webpackChunknow_push"]||[]).push([[998],{9662:function(e,t,n){var r=n(614),i=n(6330),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},6077:function(e,t,n){var r=n(614),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},5787:function(e,t,n){var r=n(7976),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},9670:function(e,t,n){var r=n(111),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},3013:function(e){e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(e,t,n){"use strict";var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),d=n(648),f=n(6330),p=n(8880),m=n(8052),g=n(3070).f,v=n(7976),y=n(9518),w=n(7674),b=n(5112),_=n(9711),I=n(9909),E=I.enforce,T=I.get,S=c.Int8Array,k=S&&S.prototype,C=c.Uint8ClampedArray,x=C&&C.prototype,A=S&&y(S),R=k&&y(k),N=Object.prototype,O=c.TypeError,D=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),L="TypedArrayConstructor",F=o&&!!w&&"Opera"!==d(c.opera),M=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},V={BigInt64Array:8,BigUint64Array:8},B=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||h(U,t)||h(V,t)},j=function(e){var t=y(e);if(l(t)){var n=T(t);return n&&h(n,L)?n[L]:j(t)}},$=function(e){if(!l(e))return!1;var t=d(e);return h(U,t)||h(V,t)},q=function(e){if($(e))return e;throw O("Target is not a typed array")},W=function(e){if(u(e)&&(!w||v(A,e)))return e;throw O(f(e)+" is not a typed array constructor")},z=function(e,t,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(u){}}}R[e]&&!n||m(R,e,n?t:F&&k[e]||t,r)}},G=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in U)if(i=c[r],i&&h(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return m(A,e,n?t:F&&A[e]||t)}catch(s){}}for(r in U)i=c[r],!i||i[e]&&!n||m(i,e,t)}};for(r in U)i=c[r],s=i&&i.prototype,s?E(s)[L]=i:F=!1;for(r in V)i=c[r],s=i&&i.prototype,s&&(E(s)[L]=i);if((!F||!u(A)||A===Function.prototype)&&(A=function(){throw O("Incorrect invocation")},F))for(r in U)c[r]&&w(c[r],A);if((!F||!R||R===N)&&(R=A.prototype,F))for(r in U)c[r]&&w(c[r].prototype,R);if(F&&y(x)!==R&&w(x,R),a&&!h(R,D))for(r in M=!0,g(R,D,{get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:M&&P,aTypedArray:q,aTypedArrayConstructor:W,exportTypedArrayMethod:z,exportTypedArrayStaticMethod:G,getTypedArrayConstructor:j,isView:B,isTypedArray:$,TypedArray:A,TypedArrayPrototype:R}},1318:function(e,t,n){var r=n(5656),i=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=r(t),u=s(c),l=i(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},9671:function(e,t,n){var r=n(9974),i=n(8361),s=n(7908),o=n(6244),a=function(e){var t=1==e;return function(n,a,c){var u,l,h=s(n),d=i(h),f=r(a,c),p=o(d);while(p-- >0)if(u=d[p],l=f(u,p,h),l)switch(e){case 0:return u;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},3658:function(e,t,n){"use strict";var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(i(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var r=n(84),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},648:function(e,t,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:u?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=i(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(e,h)||n&&r(n,h)||c(e,h,u(t,h))}}},8544:function(e,t,n){var r=n(7293);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},8880:function(e,t,n){var r=n(9781),i=n(3070),s=n(9114);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(r(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},5117:function(e,t,n){"use strict";var r=n(6330),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+r(t)+" of "+r(e))}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},3678:function(e){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(e,t,n){var r=n(1702),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2109:function(e,t,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},9974:function(e,t,n){var r=n(1702),i=n(9662),s=n(4374),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(e,t,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(e,t,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);e.exports=r?o:function(e){return function(){return s.apply(e,arguments)}}},1702:function(e,t,n){var r=n(4326),i=n(84);e.exports=function(e){if("Function"===r(e))return i(e)}},5005:function(e,t,n){var r=n(7854),i=n(614),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662),i=n(8554);e.exports=function(e,t){var n=e[t];return i(n)?void 0:r(n)}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),i=n(7293),s=n(317);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9587:function(e,t,n){var r=n(614),i=n(111),s=n(7674);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},2788:function(e,t,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var w=h.state||(h.state=new g);w.get=w.get,w.has=w.has,w.set=w.set,r=function(e,t){if(w.has(e))throw m(p);return t.facade=e,w.set(e,t),t},i=function(e){return w.get(e)||{}},s=function(e){return w.has(e)}}else{var b=d("state");f[b]=!0,r=function(e,t){if(l(e,b))throw m(p);return t.facade=e,u(e,b,t),t},i=function(e){return l(e,b)?e[b]:{}},s=function(e){return l(e,b)}}e.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(e,t,n){var r=n(4326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},614:function(e,t,n){var r=n(4154),i=r.all;e.exports=r.IS_HTMLDDA?function(e){return"function"==typeof e||e===i}:function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var r=n(614),i=n(4154),s=i.all;e.exports=i.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:r(e)||e===s}:function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),i=n(614),s=n(2597),o=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),m=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=l(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=m((function(){return i(this)&&h(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},6277:function(e,t,n){var r=n(1340);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},3070:function(e,t,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=l(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!i(s.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},9518:function(e,t,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;e.exports=a?u.getPrototypeOf:function(e){var t=s(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof u?l:null}},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);e.exports=function(e,t){var n,r=s(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},7674:function(e,t,n){var r=n(1702),i=n(9670),s=n(6077);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},2140:function(e,t,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var r=n(8554),i=TypeError;e.exports=function(e){if(r(e))throw i("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),i=n(9711),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},5465:function(e,t,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},2309:function(e,t,n){var r=n(1913),i=n(5465);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.26.0",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var r=n(7392),i=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(e,t,n){var r=n(9303),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5656:function(e,t,n){var r=n(8361),i=n(4488);e.exports=function(e){return r(i(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),i=Object;e.exports=function(e){return i(r(e))}},7593:function(e,t,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var r=n(7593),i=n(2190);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},1694:function(e,t,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},1340:function(e,t,n){var r=n(648),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},3307:function(e,t,n){var r=n(6293);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),i=n(7293);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var r=n(7854),i=n(614),s=r.WeakMap;e.exports=i(s)&&/native code/.test(String(s))},5112:function(e,t,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=i("wks"),l=r.Symbol,h=l&&l["for"],d=c?l:l&&l.withoutSetter||o;e.exports=function(e){if(!s(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&s(l,e)?u[e]=l[e]:u[e]=c&&h?h(t):d(t)}return u[e]}},7658:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(e){var t=i(this),n=s(t),r=arguments.length;a(n+r);for(var c=0;c<r;c++)t[n]=arguments[c],n++;return o(t,n),n}})},541:function(e,t,n){"use strict";var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(5117),c=n(7207),u=1!==[].unshift(0),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{unshift:function(e){var t=i(this),n=s(t),r=arguments.length;if(r){c(n+r);var u=n;while(u--){var l=u+r;u in t?t[l]=t[u]:a(t,l)}for(var h=0;h<r;h++)t[h]=arguments[h]}return o(t,n+r)}})},4590:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},3408:function(e,t,n){"use strict";var r=n(260),i=n(9671).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},2801:function(e,t,n){"use strict";var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),d=n(3678),f=n(1060),p=n(9781),m=n(1913),g="DOMException",v=s("Error"),y=s(g),w=function(){u(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=g,a(r,"stack",o(1,f(i.stack,1))),l(r,this,w),r},b=w.prototype=y.prototype,_="stack"in v(g),I="stack"in new y(1,2),E=y&&p&&Object.getOwnPropertyDescriptor(i,g),T=!!E&&!(E.writable&&E.configurable),S=_&&!T&&!I;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?w:y});var k=s(g),C=k.prototype;if(C.constructor!==k)for(var x in m||a(C,"constructor",o(1,k)),d)if(c(d,x)){var A=d[x],R=A.s;c(k,R)||a(k,R,o(6,A.c))}},9773:function(){},7425:function(e,t,n){"use strict";n.d(t,{u7:function(){return Hp},Jj:function(){return Kf},IX:function(){return Df},my:function(){return Yd},xU:function(){return Jp},Lz:function(){return Qf},WA:function(){return qr},F8:function(){return Jf},$q:function(){return Xp},W:function(){return Zp},EK:function(){return ii},PU:function(){return ym},l7:function(){return ns},Ky:function(){return li},Xb:function(){return ui},Cf:function(){return Wd},K9:function(){return Br},Me:function(){return Gi},yq:function(){return Fr},Wi:function(){return Bd},ET:function(){return dm},Ab:function(){return Sm},vr:function(){return Tm},Fc:function(){return jf},hJ:function(){return Zd},B$:function(){return ef},at:function(){return Qd},oe:function(){return hm},AK:function(){return Im},TF:function(){return Wf},JU:function(){return tf},ST:function(){return Uf},fH:function(){return Vf},Ix:function(){return qf},Wu:function(){return $p},Lx:function(){return jp},qY:function(){return Ff},GL:function(){return mm},QT:function(){return nm},kl:function(){return im},Xk:function(){return sm},PL:function(){return om},UQ:function(){return am},zN:function(){return cm},ad:function(){return Lf},nP:function(){return km},b9:function(){return Lp},vh:function(){return Fp},Pb:function(){return zf},L$:function(){return Gf},cf:function(){return fm},sc:function(){return pm},Xo:function(){return Dp},IO:function(){return Ap},iE:function(){return rf},Eo:function(){return nf},i3:function(){return _m},Bt:function(){return Em},pl:function(){return um},Ub:function(){return Dr},qK:function(){return tm},TQ:function(){return Vp},e0:function(){return Up},r7:function(){return lm},Mx:function(){return $f},ar:function(){return Np}});n(3408),n(4590),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c=(n(541),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),u={},l=l||{},h=c||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function m(e){return Object.prototype.hasOwnProperty.call(e,g)&&e[g]||(e[g]=++v)}var g="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function I(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var T=0,S={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var e=m(this);delete S[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function x(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(f(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var R=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}var O=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function D(e,t){return e<t?-1:e>t?1:0}function P(){var e=h.navigator;return e&&(e=e.userAgent)?e:""}function L(e){return-1!=P().indexOf(e)}function F(e){return F[" "](e),e}function M(e){var t=Y;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}F[" "]=d;var U,V=L("Opera"),B=L("Trident")||L("MSIE"),j=L("Edge"),$=j||B,q=L("Gecko")&&!(-1!=P().toLowerCase().indexOf("webkit")&&!L("Edge"))&&!(L("Trident")||L("MSIE"))&&!L("Edge"),W=-1!=P().toLowerCase().indexOf("webkit")&&!L("Edge");function z(){var e=h.document;return e?e.documentMode:void 0}e:{var G="",H=function(){var e=P();return q?/rv:([^\);]+)(\)|;)/.exec(e):j?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):W?/WebKit\/(\S+)/.exec(e):V?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(H&&(G=H?H[1]:""),B){var K=z();if(null!=K&&K>parseFloat(G)){U=String(K);break e}}U=G}var Q,Y={};function J(){return M((function(){let e=0;const t=O(String(U)).split("."),n=O("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&B){var X=z();Q=X||(parseInt(U,10)||void 0)}else Q=void 0;var Z=Q;function ee(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(q){e:{try{F(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.X.h.call(this)}}I(ee,A);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),re=0;function ie(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++re,this.ba=this.ea=!1}function se(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function oe(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function ae(e){const t={};for(const n in e)t[n]=e[n];return t}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<ce.length;t++)n=ce[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=k(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}le.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,r,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new ie(t,this.src,s,!!r,i),t.ea=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,r,i){if(r&&r.once)return ye(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,r,i);return null}return n=Se(n),e&&e[ne]?e.N(t,n,p(r)?!!r.capture:!!r,i):ge(e,t,n,!1,r,i)}function ge(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ee(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ve(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)R||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(_e(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}const t=Ie;return e}function ye(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,r,i);return null}return n=Se(n),e&&e[ne]?e.O(t,n,p(r)?!!r.capture:!!r,i):ge(e,t,n,!0,r,i)}function we(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)we(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Se(n),e&&e[ne]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,r,i),-1<n&&(se(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ee(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,r,i)),(n=-1<e?t[e]:null)&&be(n))}function be(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ne])he(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(_e(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ee(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):se(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ba)e=!0;else{t=new ee(t,this);var n=e.listener,r=e.ha||e.src;e.ea&&be(e),e=n.call(r,t)}return e}function Ee(e){return e=e[fe],e instanceof le?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Se(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function ke(){E.call(this),this.i=new le(this),this.P=this,this.I=null}function Ce(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var i=t;t=new A(r,e),ue(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=xe(o,r,!0,t)&&i}if(o=t.g=e,i=xe(o,r,!0,t)&&i,i=xe(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=xe(o,r,!1,t)&&i}function xe(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&he(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}I(ke,E),ke.prototype[ne]=!0,ke.prototype.removeEventListener=function(e,t,n,r){we(this,e,t,n,r)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)se(n[r]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ke.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Ae=h.JSON.stringify;function Re(){var e=Ve;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=De.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Oe,De=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Pe),(e=>e.reset()));class Pe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Le(e){h.setTimeout((()=>{throw e}),0)}function Fe(e,t){Oe||Me(),Ue||(Oe(),Ue=!0),Ve.add(e,t)}function Me(){var e=h.Promise.resolve(void 0);Oe=function(){e.then(Be)}}var Ue=!1,Ve=new Ne;function Be(){for(var e;e=Re();){try{e.h.call(e.g)}catch(n){Le(n)}var t=De;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ue=!1}function je(e,t){ke.call(this),this.h=e||1,this.g=t||h,this.j=b(this.lb,this),this.l=Date.now()}function $e(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function qe(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function We(e){e.g=qe((()=>{e.g=null,e.i&&(e.i=!1,We(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}I(je,ke),r=je.prototype,r.ca=!1,r.R=null,r.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ce(this,"tick"),this.ca&&($e(this),this.start()))}},r.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){je.X.M.call(this),$e(this),delete this.g};class ze extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:We(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(e){E.call(this),this.h=e,this.g={}}I(Ge,E);var He=[];function Ke(e,t,n,r){Array.isArray(n)||(n&&(He[0]=n.toString()),n=He);for(var i=0;i<n.length;i++){var s=me(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){oe(e.g,(function(e,t){this.g.hasOwnProperty(t)&&be(e)}),e),e.g={}}function Ye(){this.g=!0}function Je(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Ze(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(r?" "+r:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Ae(n)}catch(a){return t}}Ge.prototype.M=function(){Ge.X.M.call(this),Qe(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ye.prototype.Aa=function(){this.g=!1},Ye.prototype.info=function(){};var nt={},rt=null;function it(){return rt=rt||new ke}function st(e){A.call(this,nt.Pa,e)}function ot(e){const t=it();Ce(t,new st(t,e))}function at(e,t){A.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=it();Ce(t,new at(t,e))}function ut(e,t){A.call(this,nt.Qa,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}nt.Pa="serverreachability",I(st,A),nt.STAT_EVENT="statevent",I(at,A),nt.Qa="timingevent",I(ut,A);var ht={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,vt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){A.call(this,"d")}function wt(){A.call(this,"c")}function bt(){}function _t(e,t,n,r){this.l=e,this.j=t,this.m=n,this.U=r||1,this.S=new Ge(this),this.O=Et,e=$?125:void 0,this.T=new je(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}I(yt,A),I(wt,A),I(bt,ft),bt.prototype.g=function(){return new XMLHttpRequest},bt.prototype.i=function(){return{}},gt=new bt;var Et=45e3,Tt={},St={};function kt(e,t,n){e.K=1,e.v=Kt(qt(t)),e.s=n,e.P=!0,Ct(e,null)}function Ct(e,t){e.F=Date.now(),Nt(e),e.A=qt(e.v);var n=e.A,r=e.U;Array.isArray(r)||(r=[String(r)]),cn(n.i,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=dr(e.l,n?t:null,!e.s),0<e.N&&(e.L=new ze(b(e.La,e,e.g),e.N)),Ke(e.S,e.g,"readystatechange",e.ib),t=e.H?ae(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ot(1),Je(e.j,e.u,e.A,e.m,e.U,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function At(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Rt(e,n),r==St){4==t&&(e.o=4,ct(14),i=!1),Ze(e.j,e.m,null,"[Incomplete Response]");break}if(r==Tt){e.o=4,ct(15),Ze(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Ze(e.j,e.m,r,null),Ft(e,r)}xt(e)&&r!=St&&r!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ir(t),t.K=!0,ct(11))):(Ze(e.j,e.m,n,"[Invalid Chunked Response]"),Lt(e),Pt(e))}function Rt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?St:(n=Number(t.substring(n,r)),isNaN(n)?Tt:(r+=1,r+n>t.length?St:(t=t.substr(r,n),e.C=r+n,t)))}function Nt(e){e.V=Date.now()+e.O,Ot(e,e.O)}function Ot(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(b(e.gb,e),t)}function Dt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function Pt(e){0==e.l.G||e.I||ar(e.l,e)}function Lt(e){Dt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,$e(e.T),Qe(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ft(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||gn(n.h,e)))if(!e.J&&gn(n.h,e)&&3==n.G){try{var r=n.Fa.g.parse(t)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;or(n),Qn(n)}rr(n),ct(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&0==n.A&&!n.v&&(n.v=lt(b(n.cb,n),6e3));if(1>=mn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ur(n,11)}else if((e.J||n.g==e)&&or(n),!N(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const i=u[4];null!=i&&(n.Ca=i,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(vn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.za=e,Ht(r.F,r.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=e;if(r.sa=hr(r,r.H?r.ka:null,r.V),o.J){yn(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Dt(a),Nt(a)),r.g=o}else nr(r);0<n.i.length&&Jn(n)}else"stop"!=u[0]&&"close"!=u[0]||ur(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ur(n,7):Kn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Ut(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(f(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Vt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Ut(e),r=Mt(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}r=_t.prototype,r.setTimeout=function(e){this.O=e},r.ib=function(e){e=e.target;const t=this.L;t&&3==$n(e)?t.l():this.La(e)},r.La=function(e){try{if(e==this.g)e:{const l=$n(this.g);var t=this.g.Ea();const d=this.g.aa();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.fa()||qn(this.g)))){this.I||4!=l||7==t||ot(8==t||0>=d?3:2),Dt(this);var n=this.g.aa();this.Y=n;t:if(xt(this)){var r=qn(this.g);e="";var i=r.length,s=4==$n(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Lt(this),Pt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ct(12),Lt(this),Pt(this);break e}Ze(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ft(this,n)}this.P?(At(this,l,o),$&&this.i&&3==l&&(Ke(this.S,this.T,"tick",this.hb),this.T.start())):(Ze(this.j,this.m,o,null),Ft(this,o)),4==l&&Lt(this),this.i&&!this.I&&(4==l?ar(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Lt(this),Pt(this)}}}catch(l){}},r.hb=function(){if(this.g){var e=$n(this.g),t=this.g.fa();this.C<t.length&&(Dt(this),At(this,e,t),this.i&&4!=e&&Nt(this))}},r.cancel=function(){this.I=!0,Lt(this)},r.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(et(this.j,this.A),2!=this.K&&(ot(3),ct(17)),Lt(this),this.o=2,Pt(this)):Ot(this,this.V-e)};var Bt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $t(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof $t){this.h=void 0!==t?t:e.h,Wt(this,e.j),this.s=e.s,this.g=e.g,zt(this,e.m),this.l=e.l,t=e.i;var n=new rn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.h=!!t,Wt(this,n[1]||"",!0),this.s=Qt(n[2]||""),this.g=Qt(n[3]||"",!0),zt(this,n[4]),this.l=Qt(n[5]||"",!0),Gt(this,n[6]||"",!0),this.o=Qt(n[7]||"")):(this.h=!!t,this.i=new rn(null,this.h))}function qt(e){return new $t(e)}function Wt(e,t,n){e.j=n?Qt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gt(e,t,n){t instanceof rn?(e.i=t,ln(e.i,e.h)):(n||(t=Yt(t,tn)),e.i=new rn(t,e.h))}function Ht(e,t,n){e.i.set(t,n)}function Kt(e){return Ht(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Qt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Yt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Jt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Jt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}$t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Yt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Yt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Yt(n,"/"==n.charAt(0)?en:Zt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Yt(n,nn)),e.join("")};var Xt=/[#\/\?@]/g,Zt=/[#\?:]/g,en=/[#\?]/g,tn=/[#\?@]/g,nn=/#/g;function rn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function sn(e){e.g||(e.g=new Map,e.h=0,e.i&&jt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){sn(e),t=un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function an(e,t){return sn(e),t=un(e,t),e.g.has(t)}function cn(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(un(e,t),C(n)),e.h+=n.length)}function un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ln(e,t){t&&!e.j&&(sn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),cn(this,n,e))}),e)),e.j=t}r=rn.prototype,r.add=function(e,t){sn(this),this.i=null,e=un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){sn(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},r.oa=function(){sn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},r.W=function(e){sn(this);let t=[];if("string"===typeof e)an(this,e)&&(t=t.concat(this.g.get(un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},r.set=function(e,t){return sn(this),this.i=null,e=un(this,e),an(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};var hn=class{constructor(e,t){this.h=e,this.g=t}};function dn(e){this.l=e||fn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ga&&h.g.Ga()&&h.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function vn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function wn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function bn(){}function _n(){this.g=new bn}function In(e,t,n){const r=n||"";try{Vt(e,(function(e,n){let i=e;p(e)&&(i=Ae(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function En(e,t){const n=new Ye;if(h.Image){const r=new Image;r.onload=_(Tn,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Tn,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Tn,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Tn,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Tn(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Sn(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=wn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},bn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},bn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},I(Sn,ft),Sn.prototype.g=function(){return new kn(this.l,this.j)},Sn.prototype.i=function(e){return function(){return e}}({}),I(kn,ke);var Cn=0;function xn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rn(e)}function Rn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=kn.prototype,r.open=function(e,t){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Cn},r.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rn(this)),this.g&&(this.readyState=3,Rn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},r.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):Rn(this),3==this.readyState&&xn(this)}},r.Va=function(e){this.g&&(this.response=this.responseText=e,An(this))},r.Ua=function(e){this.g&&(this.response=e,An(this))},r.ga=function(){this.g&&An(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Nn=h.JSON.parse;function On(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Dn,this.K=this.L=!1}I(On,ke);var Dn="",Pn=/^https?$/i,Ln=["POST","PUT"];function Fn(e){return B&&J()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Un(e),Bn(e)}function Un(e){e.D||(e.D=!0,Ce(e,"complete"),Ce(e,"error"))}function Vn(e){if(e.h&&"undefined"!=typeof l&&(!e.C[1]||4!=$n(e)||2!=e.aa()))if(e.v&&4==$n(e))qe(e.Ha,0,e);else if(Ce(e,"readystatechange"),4==$n(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var i=String(e.H).match(Bt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!Pn.test(i?i.toLowerCase():"")}n=r}if(n)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var o=2<$n(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Un(e)}}finally{Bn(e)}}}function Bn(e,t){if(e.g){jn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Ce(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function jn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function $n(e){return e.g?e.g.readyState:0}function qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Dn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(xr){return null}}function Wn(e){let t="";return oe(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function zn(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Wn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Ht(e,t,n))}function Gn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Hn(e){this.Ca=0,this.i=[],this.j=new Ye,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,e),this.bb=Gn("retryDelaySeedMs",1e4,e),this.$a=Gn("forwardChannelMaxRetries",2,e),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(e&&e.concurrentRequestLimit),this.Fa=new _n,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kn(e){if(Yn(e),3==e.G){var t=e.U++,n=qt(e.F);Ht(n,"SID",e.I),Ht(n,"RID",t),Ht(n,"TYPE","terminate"),er(e,n),t=new _t(e,e.j,t,void 0),t.K=2,t.v=Kt(qt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=dr(t.l,null),t.g.da(t.v)),t.F=Date.now(),Nt(t)}lr(e)}function Qn(e){e.g&&(ir(e),e.g.cancel(),e.g=null)}function Yn(e){Qn(e),e.u&&(h.clearTimeout(e.u),e.u=null),or(e),e.h.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function Jn(e){pn(e.h)||e.m||(e.m=!0,Fe(e.Ja,e),e.C=0)}function Xn(e,t){return!(mn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=lt(b(e.Ja,e,t),cr(e,e.C)),e.C++,!0))}function Zn(e,t){var n;n=t?t.m:e.U++;const r=qt(e.F);Ht(r,"SID",e.I),Ht(r,"RID",n),Ht(r,"AID",e.T),er(e,r),e.o&&e.s&&zn(r,e.o,e.s),n=new _t(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=tr(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),vn(e.h,n),kt(n,r,t)}function er(e,t){e.ia&&oe(e.ia,(function(e,n){Ht(t,n,e)})),e.l&&Vt({},(function(e,n){Ht(t,n,e)}))}function tr(e,t,n){n=Math.min(e.i.length,n);var r=e.l?b(e.l.Ra,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{In(a,e,"req"+n+"_")}catch(Br){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function nr(e){e.g||e.u||(e.Z=1,Fe(e.Ia,e),e.A=0)}function rr(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=lt(b(e.Ia,e),cr(e,e.A)),e.A++,!0)}function ir(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function sr(e){e.g=new _t(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=qt(e.sa);Ht(t,"RID","rpc"),Ht(t,"SID",e.I),Ht(t,"CI",e.L?"0":"1"),Ht(t,"AID",e.T),Ht(t,"TYPE","xmlhttp"),er(e,t),e.o&&e.s&&zn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kt(qt(t)),n.s=null,n.P=!0,Ct(n,e)}function or(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function ar(e,t){var n=null;if(e.g==t){or(e),ir(e),e.g=null;var r=2}else{if(!gn(e.h,t))return;n=t.D,yn(e.h,t),r=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=it(),Ce(r,new ut(r,n,t,i)),Jn(e)}else nr(e);else if(i=t.o,3==i||0==i&&0<e.pa||!(1==r&&Xn(e,t)||2==r&&rr(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ur(e,5);break;case 4:ur(e,10);break;case 3:ur(e,6);break;default:ur(e,2)}}function cr(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ur(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var r=b(e.kb,e);n||(n=new $t("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Wt(n,"https"),Kt(n)),En(n.toString(),r)}else ct(2);e.G=0,e.l&&e.l.va(t),lr(e),Yn(e)}function lr(e){if(e.G=0,e.la=[],e.l){const t=wn(e.h);0==t.length&&0==e.i.length||(x(e.la,t),x(e.la,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ua()}}function hr(e,t,n){var r=n instanceof $t?qt(n):new $t(n,void 0);if(""!=r.g)t&&(r.g=t+"."+r.g),zt(r,r.m);else{var i=h.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new $t(null,void 0);r&&Wt(s,r),t&&(s.g=t),i&&zt(s,i),n&&(s.l=n),r=s}return n=e.D,t=e.za,n&&t&&Ht(r,n,t),Ht(r,"VER",e.ma),er(e,r),r}function dr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new On(new Sn({jb:!0})):new On(e.ra),t.Ka(e.H),t}function fr(){}function pr(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function mr(e,t){ke.call(this),this.g=new Hn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yr(this)}function gr(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function vr(){wt.call(this),this.status=1}function yr(e){this.g=e}r=On.prototype,r.Ka=function(e){this.L=e},r.da=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=b(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=h.FormData&&e instanceof h.FormData,!(0<=k(Ln,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{jn(this),0<this.B&&((this.K=Fn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.qa,this)):this.A=qe(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},r.qa=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),Bn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),On.X.M.call(this)},r.Ha=function(){this.s||(this.F||this.v||this.l?Vn(this):this.fb())},r.fb=function(){Vn(this)},r.aa=function(){try{return 2<$n(this)?this.g.status:-1}catch(e){return-1}},r.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Nn(t)}},r.Ea=function(){return this.m},r.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Hn.prototype,r.ma=8,r.G=1,r.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new _t(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=ae(s),ue(s,this.S)):s=this.S),null!==this.o||this.N||(i.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=tr(this,i,t),n=qt(this.F),Ht(n,"RID",e),Ht(n,"CVER",22),this.D&&Ht(n,"X-HTTP-Session-Id",this.D),er(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(Wn(s)))+"&"+t:this.o&&zn(n,this.o,s)),vn(this.h,i),this.Ya&&Ht(n,"TYPE","init"),this.O?(Ht(n,"$req",t),Ht(n,"SID","null"),i.Z=!0,kt(i,n,null)):kt(i,n,t),this.G=2}}else 3==this.G&&(e?Zn(this,e):0==this.i.length||pn(this.h)||Zn(this))},r.Ia=function(){if(this.u=null,sr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=lt(b(this.eb,this),e)}},r.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),Qn(this),sr(this))},r.cb=function(){null!=this.v&&(this.v=null,Qn(this),rr(this),ct(19))},r.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))},r=fr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Ra=function(){},pr.prototype.g=function(e,t){return new mr(e,t)},I(mr,ke),mr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ct(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=hr(e,null,e.V),Jn(e)},mr.prototype.close=function(){Kn(this.g)},mr.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ae(e),e=n);t.i.push(new hn(t.ab++,e)),3==t.G&&Jn(t)},mr.prototype.M=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,mr.X.M.call(this)},I(gr,yt),I(vr,wt),I(yr,fr),yr.prototype.xa=function(){Ce(this.g,"a")},yr.prototype.wa=function(e){Ce(this.g,new gr(e))},yr.prototype.va=function(e){Ce(this.g,new vr(e))},yr.prototype.ua=function(){Ce(this.g,"b")},pr.prototype.createWebChannel=pr.prototype.g,mr.prototype.send=mr.prototype.u,mr.prototype.open=mr.prototype.m,mr.prototype.close=mr.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,On.prototype.listenOnce=On.prototype.O,On.prototype.getLastError=On.prototype.Oa,On.prototype.getLastErrorCode=On.prototype.Ea,On.prototype.getStatus=On.prototype.aa,On.prototype.getResponseJson=On.prototype.Sa,On.prototype.getResponseText=On.prototype.fa,On.prototype.send=On.prototype.da,On.prototype.setWithCredentials=On.prototype.Ka;var wr=u.createWebChannelTransport=function(){return new pr},br=u.getStatEventTarget=function(){return it()},_r=u.ErrorCode=ht,Ir=u.EventType=dt,Er=u.Event=nt,Tr=u.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Sr=u.FetchXmlHttpFactory=Sn,kr=u.WebChannel=mt,Cr=u.XhrIo=On;const xr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ar.UNAUTHENTICATED=new Ar(null),Ar.GOOGLE_CREDENTIALS=new Ar("google-credentials-uid"),Ar.FIRST_PARTY=new Ar("first-party-uid"),Ar.MOCK_USER=new Ar("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Rr="9.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new o.Yd("@firebase/firestore");function Or(){return Nr.logLevel}function Dr(e){Nr.setLogLevel(e)}function Pr(e,...t){if(Nr.logLevel<=o["in"].DEBUG){const n=t.map(Mr);Nr.debug(`Firestore (${Rr}): ${e}`,...n)}}function Lr(e,...t){if(Nr.logLevel<=o["in"].ERROR){const n=t.map(Mr);Nr.error(`Firestore (${Rr}): ${e}`,...n)}}function Fr(e,...t){if(Nr.logLevel<=o["in"].WARN){const n=t.map(Mr);Nr.warn(`Firestore (${Rr}): ${e}`,...n)}}function Mr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e="Unexpected state"){const t=`FIRESTORE (${Rr}) INTERNAL ASSERTION FAILED: `+e;throw Lr(t),new Error(t)}function Vr(e,t){e||Ur()}function Br(e,t){e||Ur()}function jr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class qr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ar.UNAUTHENTICATED)))}shutdown(){}}class Hr{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Kr{constructor(e){this.t=e,this.currentUser=Ar.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Pr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Pr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Pr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Vr("string"==typeof t.accessToken),new zr(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Vr(null===e||"string"==typeof e),new Ar(e)}}class Qr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r,this.type="FirstParty",this.user=Ar.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Vr(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Yr{constructor(e,t,n,r){this.h=e,this.l=t,this.m=n,this.g=r}getToken(){return Promise.resolve(new Qr(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable((()=>t(Ar.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jr{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xr{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const n=e=>{null!=e.error&&Pr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.A;return this.A=e.token,Pr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Pr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.T.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.T.getImmediate({optional:!0});e?r(e):Pr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Vr("string"==typeof e.token),this.A=e.token,new Jr(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Zr(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Zr(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ti(e,t){return e<t?-1:e>t?1:0}function ni(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}function ri(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new qr($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new qr($r.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new qr($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new qr($r.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ii.fromMillis(Date.now())}static fromDate(e){return ii.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ii(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ti(this.nanoseconds,e.nanoseconds):ti(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.timestamp=e}static fromTimestamp(e){return new si(e)}static min(){return new si(new ii(0,0))}static max(){return new si(new ii(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ur(),void 0===n?n=e.length-t:n>e.length-t&&Ur(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===oi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof oi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ai extends oi{construct(e,t,n){return new ai(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new qr($r.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ai(t)}static emptyPath(){return new ai([])}}const ci=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ui extends oi{construct(e,t,n){return new ui(e,t,n)}static isValidIdentifier(e){return ci.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ui.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ui(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new qr($r.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new qr($r.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new qr($r.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new qr($r.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ui(t)}static emptyPath(){return new ui([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.path=e}static fromPath(e){return new li(ai.fromString(e))}static fromName(e){return new li(ai.fromString(e).popFirst(5))}static empty(){return new li(ai.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ai.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ai.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new li(new ai(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function di(e){return e.fields.find((e=>2===e.kind))}function fi(e){return e.fields.filter((e=>2!==e.kind))}hi.UNKNOWN_ID=-1;class pi{constructor(e,t){this.fieldPath=e,this.kind=t}}class mi{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new mi(0,yi.min())}}function gi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=si.fromTimestamp(1e9===r?new ii(n+1,0):new ii(n,r));return new yi(i,li.empty(),t)}function vi(e){return new yi(e.readTime,e.key,-1)}class yi{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new yi(si.min(),li.empty(),-1)}static max(){return new yi(si.max(),li.empty(),-1)}}function wi(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=li.comparator(e.documentKey,t.documentKey),0!==n?n:ti(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _i{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e){if(e.code!==$r.FAILED_PRECONDITION||e.message!==bi)throw e;Pr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ur(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ei(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ei?t:Ei.resolve(t)}catch(e){return Ei.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ei.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ei.reject(t)}static resolve(e){return new Ei(((t,n)=>{t(e)}))}static reject(e){return new Ei(((t,n)=>{n(e)}))}static waitFor(e){return new Ei(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ei.resolve(!1);for(const n of e)t=t.next((e=>e?Ei.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ei(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ei(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.P=new Wr,this.transaction.oncomplete=()=>{this.P.resolve()},this.transaction.onabort=()=>{t.error?this.P.reject(new Ci(e,t.error)):this.P.resolve()},this.transaction.onerror=t=>{const n=Oi(t.target.error);this.P.reject(new Ci(e,n))}}static open(e,t,n,r){try{return new Ti(t,e.transaction(r,n))}catch(e){throw new Ci(t,e)}}get v(){return this.P.promise}abort(e){e&&this.P.reject(e),this.aborted||(Pr("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}V(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ai(t)}}class Si{constructor(e,t,n){this.name=e,this.version=t,this.S=n,12.2===Si.D((0,a.z$)())&&Lr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Pr("SimpleDb","Removing database:",e),Ri(window.indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!(0,a.hl)())return!1;if(Si.N())return!0;const e=(0,a.z$)(),t=Si.D(e),n=0<t&&t<10,r=Si.k(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static N(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/"})||void 0===e?void 0:e.O)}static M(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static k(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async F(e){return this.db||(Pr("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new Ci(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new qr($r.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new qr($r.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new Ci(e,r))},r.onupgradeneeded=e=>{Pr("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.S.$(t,r.transaction,e.oldVersion,this.version).next((()=>{Pr("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,r){const i="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.F(e);const t=Ti.open(this.db,e,i?"readonly":"readwrite",n),s=r(t).next((e=>(t.V(),e))).catch((e=>(t.abort(e),Ei.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Pr("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ki{constructor(e){this.U=e,this.q=!1,this.K=null}get isDone(){return this.q}get G(){return this.K}set cursor(e){this.U=e}done(){this.q=!0}j(e){this.K=e}delete(){return Ri(this.U.delete())}}class Ci extends qr{constructor(e,t){super($r.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xi(e){return"IndexedDbTransactionError"===e.name}class Ai{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Pr("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Pr("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Ri(n)}add(e){return Pr("SimpleDb","ADD",this.store.name,e,e),Ri(this.store.add(e))}get(e){return Ri(this.store.get(e)).next((t=>(void 0===t&&(t=null),Pr("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Pr("SimpleDb","DELETE",this.store.name,e),Ri(this.store.delete(e))}count(){return Pr("SimpleDb","COUNT",this.store.name),Ri(this.store.count())}W(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.H(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Ei(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}J(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ei(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}Y(e,t){Pr("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.X=!1;const r=this.cursor(n);return this.H(r,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.H(r,t)}tt(e){const t=this.cursor({});return new Ei(((n,r)=>{t.onerror=e=>{const t=Oi(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next((e=>{e?r.continue():n()})):n()}}))}H(e,t){const n=[];return new Ei(((r,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{const i=e.target.result;if(!i)return void r();const s=new ki(i),o=t(i.primaryKey,i.value,s);if(o instanceof Ei){const e=o.catch((e=>(s.done(),Ei.reject(e))));n.push(e)}s.isDone?r():null===s.G?i.continue():i.continue(s.G)}})).next((()=>Ei.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.X?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ri(e){return new Ei(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Oi(e.target.error);n(t)}}))}let Ni=!1;function Oi(e){const t=Si.D((0,a.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new qr("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ni||(Ni=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Di{constructor(e,t){this.asyncQueue=e,this.et=t,this.task=null}start(){this.nt(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}nt(e){Pr("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Pr("IndexBackiller",`Documents written: ${await this.et.st()}`)}catch(e){xi(e)?Pr("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Ii(e)}await this.nt(6e4)}))}}class Pi{constructor(e,t){this.localStore=e,this.persistence=t}async st(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.it(t,e)))}it(e,t){const n=new Set;let r=t,i=!0;return Ei.doWhile((()=>!0===i&&r>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Pr("IndexBackiller",`Processing collection: ${t}`),this.rt(e,t,r).next((e=>{r-=e,n.add(t)}));i=!1})))).next((()=>t-r))}rt(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next((n=>{const i=n.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next((()=>this.ot(r,n))).next((n=>(Pr("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>i.size))}))))}ot(e,t){let n=e;return t.changes.forEach(((e,t)=>{const r=vi(t);wi(r,n)>0&&(n=r)})),new yi(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ut(e),this.ct=e=>t.writeSequenceNumber(e))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Mi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ui(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Li.at=-1;class Vi{constructor(e,t){this.comparator=e,this.root=t||ji.EMPTY}insert(e,t){return new Vi(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ji.BLACK,null,null))}remove(e){return new Vi(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ji.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ji{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ji.RED,this.left=null!=r?r:ji.EMPTY,this.right=null!=i?i:ji.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ji(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ji.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ji.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ji.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ji.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ur();if(this.right.isRed())throw Ur();const e=this.left.check();if(e!==this.right.check())throw Ur();return e+(this.isRed()?0:1)}}ji.EMPTY=null,ji.RED=!0,ji.BLACK=!1,ji.EMPTY=new class{constructor(){this.size=0}get key(){throw Ur()}get value(){throw Ur()}get color(){throw Ur()}get left(){throw Ur()}get right(){throw Ur()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ji(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(e){this.comparator=e,this.data=new Vi(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qi(this.data.getIterator())}getIteratorFrom(e){return new qi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof $i))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new $i(this.comparator);return t.data=e,t}}class qi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Wi(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this.fields=e,e.sort(ui.comparator)}static empty(){return new zi([])}unionWith(e){let t=new $i(ui.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new zi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ni(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Hi(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Hi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ti(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Hi.EMPTY_BYTE_STRING=new Hi("");const Ki=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qi(e){if(Vr(!!e),"string"==typeof e){let t=0;const n=Ki.exec(e);if(Vr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Yi(e.seconds),nanos:Yi(e.nanos)}}function Yi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ji(e){return"string"==typeof e?Hi.fromBase64String(e):Hi.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Zi(e){const t=e.mapValue.fields.__previous_value__;return Xi(t)?Zi(t):t}function es(e){const t=Qi(e.mapValue.fields.__local_write_time__.timestampValue);return new ii(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class ns{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ns("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ns&&e.projectId===this.projectId&&e.database===this.database}}function rs(e){return null==e}function is(e){return 0===e&&1/e==-1/0}function ss(e){return"number"==typeof e&&Number.isInteger(e)&&!is(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},as={nullValue:"NULL_VALUE"};function cs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Xi(e)?4:Is(e)?9007199254740991:10:Ur()}function us(e,t){if(e===t)return!0;const n=cs(e);if(n!==cs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return es(e).isEqual(es(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qi(e.timestampValue),r=Qi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ji(e.bytesValue).isEqual(Ji(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Yi(e.geoPointValue.latitude)===Yi(t.geoPointValue.latitude)&&Yi(e.geoPointValue.longitude)===Yi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Yi(e.integerValue)===Yi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Yi(e.doubleValue),r=Yi(t.doubleValue);return n===r?is(n)===is(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ni(e.arrayValue.values||[],t.arrayValue.values||[],us);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Fi(n)!==Fi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!us(n[i],r[i])))return!1;return!0}(e,t);default:return Ur()}}function ls(e,t){return void 0!==(e.values||[]).find((e=>us(e,t)))}function hs(e,t){if(e===t)return 0;const n=cs(e),r=cs(t);if(n!==r)return ti(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ti(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Yi(e.integerValue||e.doubleValue),r=Yi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ds(e.timestampValue,t.timestampValue);case 4:return ds(es(e),es(t));case 5:return ti(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ji(e),r=Ji(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ti(n[i],r[i]);if(0!==e)return e}return ti(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ti(Yi(e.latitude),Yi(t.latitude));return 0!==n?n:ti(Yi(e.longitude),Yi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=hs(n[i],r[i]);if(e)return e}return ti(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===os.mapValue&&t===os.mapValue)return 0;if(e===os.mapValue)return 1;if(t===os.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ti(r[o],s[o]);if(0!==e)return e;const t=hs(n[r[o]],i[s[o]]);if(0!==t)return t}return ti(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Ur()}}function ds(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ti(e,t);const n=Qi(e),r=Qi(t),i=ti(n.seconds,r.seconds);return 0!==i?i:ti(n.nanos,r.nanos)}function fs(e){return ps(e)}function ps(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ji(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,li.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=ps(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${ps(e.fields[i])}`;return n+"}"}(e.mapValue):Ur();var t,n}function ms(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function gs(e){return!!e&&"integerValue"in e}function vs(e){return!!e&&"arrayValue"in e}function ys(e){return!!e&&"nullValue"in e}function ws(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function bs(e){return!!e&&"mapValue"in e}function _s(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Mi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=_s(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=_s(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Is(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Es(e){return"nullValue"in e?as:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?ms(ns.empty(),li.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Ur()}function Ts(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?ms(ns.empty(),li.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?os:Ur()}function Ss(e,t){const n=hs(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function ks(e,t){const n=hs(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.value=e}static empty(){return new Cs({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!bs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(t)}setAll(e){let t=ui.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=_s(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());bs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return us(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];bs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Mi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Cs(_s(this.value))}}function xs(e){const t=[];return Mi(e.fields,((e,n)=>{const r=new ui([e]);if(bs(n)){const e=xs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new zi(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class As{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new As(e,0,si.min(),si.min(),Cs.empty(),0)}static newFoundDocument(e,t,n){return new As(e,1,t,si.min(),n,0)}static newNoDocument(e,t){return new As(e,2,t,si.min(),Cs.empty(),0)}static newUnknownDocument(e,t){return new As(e,3,t,si.min(),Cs.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cs.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cs.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=si.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof As&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new As(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ht=null}}function Ns(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Rs(e,t,n,r,i,s,o)}function Os(e){const t=jr(e);if(null===t.ht){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+fs(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),rs(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>fs(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>fs(e))).join(",")),t.ht=e}return t.ht}function Ds(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${fs(t.value)}`;var t})).join(", ")}]`),rs(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>fs(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>fs(e))).join(",")),`Target(${t})`}function Ps(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ys(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!us(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Xs(e.startAt,t.startAt)&&Xs(e.endAt,t.endAt)}function Ls(e){return li.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function Fs(e,t){return e.filters.filter((e=>e instanceof Vs&&e.field.isEqual(t)))}function Ms(e,t,n){let r=as,i=!0;for(const s of Fs(e,t)){let e=as,t=!0;switch(s.op){case"<":case"<=":e=Es(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=as}Ss({value:r,inclusive:i},{value:e,inclusive:t})<0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];Ss({value:r,inclusive:i},{value:e,inclusive:n.inclusive})<0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}function Us(e,t,n){let r=os,i=!0;for(const s of Fs(e,t)){let e=os,t=!0;switch(s.op){case">=":case">":e=Ts(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=os}ks({value:r,inclusive:i},{value:e,inclusive:t})>0&&(r=e,i=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];ks({value:r,inclusive:i},{value:e,inclusive:n.inclusive})>0&&(r=e,i=n.inclusive);break}return{value:r,inclusive:i}}class Vs extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.lt(e,t,n):new Bs(e,t,n):"array-contains"===t?new Ws(e,n):"in"===t?new zs(e,n):"not-in"===t?new Gs(e,n):"array-contains-any"===t?new Hs(e,n):new Vs(e,t,n)}static lt(e,t,n){return"in"===t?new js(e,n):new $s(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.ft(hs(t,this.value)):null!==t&&cs(this.value)===cs(t)&&this.ft(hs(t,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ur()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Bs extends Vs{constructor(e,t,n){super(e,t,n),this.key=li.fromName(n.referenceValue)}matches(e){const t=li.comparator(e.key,this.key);return this.ft(t)}}class js extends Vs{constructor(e,t){super(e,"in",t),this.keys=qs("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class $s extends Vs{constructor(e,t){super(e,"not-in",t),this.keys=qs("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function qs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>li.fromName(e.referenceValue)))}class Ws extends Vs{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return vs(t)&&ls(t.arrayValue,this.value)}}class zs extends Vs{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ls(this.value.arrayValue,t)}}class Gs extends Vs{constructor(e,t){super(e,"not-in",t)}matches(e){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ls(this.value.arrayValue,t)}}class Hs extends Vs{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!vs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ls(this.value.arrayValue,e)))}}class Ks{constructor(e,t){this.position=e,this.inclusive=t}}class Qs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ys(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Js(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?li.comparator(li.fromName(o.referenceValue),n.key):hs(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Xs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!us(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this._t=null,this.wt=null,this.startAt,this.endAt}}function eo(e,t,n,r,i,s,o,a){return new Zs(e,t,n,r,i,s,o,a)}function to(e){return new Zs(e)}function no(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ro(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function io(e){for(const t of e.filters)if(t.dt())return t.field;return null}function so(e){return null!==e.collectionGroup}function oo(e){const t=jr(e);if(null===t._t){t._t=[];const e=io(t),n=ro(t);if(null!==e&&null===n)e.isKeyField()||t._t.push(new Qs(e)),t._t.push(new Qs(ui.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t._t.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t._t.push(new Qs(ui.keyField(),e))}}}return t._t}function ao(e){const t=jr(e);if(!t.wt)if("F"===t.limitType)t.wt=Ns(t.path,t.collectionGroup,oo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of oo(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Qs(i.field,t))}const n=t.endAt?new Ks(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ks(t.startAt.position,t.startAt.inclusive):null;t.wt=Ns(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.wt}function co(e,t,n){return new Zs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function uo(e,t){return Ps(ao(e),ao(t))&&e.limitType===t.limitType}function lo(e){return`${Os(ao(e))}|lt:${e.limitType}`}function ho(e){return`Query(target=${Ds(ao(e))}; limitType=${e.limitType})`}function fo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):li.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Js(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,oo(e),t))&&!(e.endAt&&!function(e,t,n){const r=Js(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,oo(e),t))}(e,t)}function po(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function mo(e){return(t,n)=>{let r=!1;for(const i of oo(e)){const e=go(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function go(e,t,n){const r=e.field.isKeyField()?li.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?hs(r,i):Ur()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Ur()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(e,t){if(e.gt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:is(t)?"-0":t}}function yo(e){return{integerValue:""+e}}function wo(e,t){return ss(t)?yo(t):vo(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(){this._=void 0}}function _o(e,t,n){return e instanceof To?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof So?ko(e,t):e instanceof Co?xo(e,t):function(e,t){const n=Eo(e,t),r=Ro(n)+Ro(e.yt);return gs(n)&&gs(e.yt)?yo(r):vo(e.It,r)}(e,t)}function Io(e,t,n){return e instanceof So?ko(e,t):e instanceof Co?xo(e,t):n}function Eo(e,t){return e instanceof Ao?gs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class To extends bo{}class So extends bo{constructor(e){super(),this.elements=e}}function ko(e,t){const n=No(t);for(const r of e.elements)n.some((e=>us(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Co extends bo{constructor(e){super(),this.elements=e}}function xo(e,t){let n=No(t);for(const r of e.elements)n=n.filter((e=>!us(e,r)));return{arrayValue:{values:n}}}class Ao extends bo{constructor(e,t){super(),this.It=e,this.yt=t}}function Ro(e){return Yi(e.integerValue||e.doubleValue)}function No(e){return vs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.field=e,this.transform=t}}function Do(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof So&&t instanceof So||e instanceof Co&&t instanceof Co?ni(e.elements,t.elements,us):e instanceof Ao&&t instanceof Ao?us(e.yt,t.yt):e instanceof To&&t instanceof To}(e.transform,t.transform)}class Po{constructor(e,t){this.version=e,this.transformResults=t}}class Lo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Lo}static exists(e){return new Lo(void 0,e)}static updateTime(e){return new Lo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Mo{}function Uo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ko(e.key,Lo.none()):new qo(e.key,e.data,Lo.none());{const n=e.data,r=Cs.empty();let i=new $i(ui.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Wo(e.key,r,new zi(i.toArray()),Lo.none())}}function Vo(e,t,n){e instanceof qo?function(e,t,n){const r=e.value.clone(),i=Go(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Wo?function(e,t,n){if(!Fo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Go(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(zo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Bo(e,t,n,r){return e instanceof qo?function(e,t,n,r){if(!Fo(e.precondition,t))return n;const i=e.value.clone(),s=Ho(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Wo?function(e,t,n,r){if(!Fo(e.precondition,t))return n;const i=Ho(e.fieldTransforms,r,t),s=t.data;return s.setAll(zo(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return Fo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function jo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=Eo(r.transform,e||null);null!=i&&(null===n&&(n=Cs.empty()),n.set(r.field,i))}return n||null}function $o(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ni(e,t,((e,t)=>Do(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class qo extends Mo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Wo extends Mo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function zo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Go(e,t,n){const r=new Map;Vr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Io(o,a,n[i]))}return r}function Ho(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,_o(e,s,t))}return r}class Ko extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Qo extends Mo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Jo,Xo;function Zo(e){switch(e){default:return Ur();case $r.CANCELLED:case $r.UNKNOWN:case $r.DEADLINE_EXCEEDED:case $r.RESOURCE_EXHAUSTED:case $r.INTERNAL:case $r.UNAVAILABLE:case $r.UNAUTHENTICATED:return!1;case $r.INVALID_ARGUMENT:case $r.NOT_FOUND:case $r.ALREADY_EXISTS:case $r.PERMISSION_DENIED:case $r.FAILED_PRECONDITION:case $r.ABORTED:case $r.OUT_OF_RANGE:case $r.UNIMPLEMENTED:case $r.DATA_LOSS:return!0}}function ea(e){if(void 0===e)return Lr("GRPC error has no .code"),$r.UNKNOWN;switch(e){case Jo.OK:return $r.OK;case Jo.CANCELLED:return $r.CANCELLED;case Jo.UNKNOWN:return $r.UNKNOWN;case Jo.DEADLINE_EXCEEDED:return $r.DEADLINE_EXCEEDED;case Jo.RESOURCE_EXHAUSTED:return $r.RESOURCE_EXHAUSTED;case Jo.INTERNAL:return $r.INTERNAL;case Jo.UNAVAILABLE:return $r.UNAVAILABLE;case Jo.UNAUTHENTICATED:return $r.UNAUTHENTICATED;case Jo.INVALID_ARGUMENT:return $r.INVALID_ARGUMENT;case Jo.NOT_FOUND:return $r.NOT_FOUND;case Jo.ALREADY_EXISTS:return $r.ALREADY_EXISTS;case Jo.PERMISSION_DENIED:return $r.PERMISSION_DENIED;case Jo.FAILED_PRECONDITION:return $r.FAILED_PRECONDITION;case Jo.ABORTED:return $r.ABORTED;case Jo.OUT_OF_RANGE:return $r.OUT_OF_RANGE;case Jo.UNIMPLEMENTED:return $r.UNIMPLEMENTED;case Jo.DATA_LOSS:return $r.DATA_LOSS;default:return Ur()}}(Xo=Jo||(Jo={}))[Xo.OK=0]="OK",Xo[Xo.CANCELLED=1]="CANCELLED",Xo[Xo.UNKNOWN=2]="UNKNOWN",Xo[Xo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xo[Xo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xo[Xo.NOT_FOUND=5]="NOT_FOUND",Xo[Xo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xo[Xo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xo[Xo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xo[Xo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xo[Xo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xo[Xo.ABORTED=10]="ABORTED",Xo[Xo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xo[Xo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xo[Xo.INTERNAL=13]="INTERNAL",Xo[Xo.UNAVAILABLE=14]="UNAVAILABLE",Xo[Xo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ta{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Ui(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=new Vi(li.comparator);function ra(){return na}const ia=new Vi(li.comparator);function sa(...e){let t=ia;for(const n of e)t=t.insert(n.key,n);return t}function oa(e){let t=ia;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function aa(){return ua()}function ca(){return ua()}function ua(){return new ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}const la=new Vi(li.comparator),ha=new $i(li.comparator);function da(...e){let t=ha;for(const n of e)t=t.add(n);return t}const fa=new $i(ti);function pa(){return fa}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ma(si.min(),r,pa(),ra(),da())}}class ga{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ga(n,t,da(),da(),da())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,n,r){this.Tt=e,this.removedTargetIds=t,this.key=n,this.Et=r}}class ya{constructor(e,t){this.targetId=e,this.At=t}}class wa{constructor(e,t,n=Hi.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ba{constructor(){this.Rt=0,this.bt=Ea(),this.Pt=Hi.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return 0!==this.Rt}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=da(),t=da(),n=da();return this.bt.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Ur()}})),new ga(this.Pt,this.vt,e,t,n)}Nt(){this.Vt=!1,this.bt=Ea()}kt(e,t){this.Vt=!0,this.bt=this.bt.insert(e,t)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class _a{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=ra(),this.qt=Ia(),this.Kt=new $i(ti)}Gt(e){for(const t of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(t,e.Et):this.jt(t,e.key,e.Et);for(const t of e.removedTargetIds)this.jt(t,e.key,e.Et)}Wt(e){this.forEachTarget(e,(t=>{const n=this.zt(t);switch(e.state){case 0:this.Ht(t)&&n.Ct(e.resumeToken);break;case 1:n.Ft(),n.St||n.Nt(),n.Ct(e.resumeToken);break;case 2:n.Ft(),n.St||this.removeTarget(t);break;case 3:this.Ht(t)&&(n.$t(),n.Ct(e.resumeToken));break;case 4:this.Ht(t)&&(this.Jt(t),n.Ct(e.resumeToken));break;default:Ur()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Lt.forEach(((e,n)=>{this.Ht(n)&&t(n)}))}Yt(e){const t=e.targetId,n=e.At.count,r=this.Xt(t);if(r){const e=r.target;if(Ls(e))if(0===n){const n=new li(e.path);this.jt(t,n,As.newNoDocument(n,si.min()))}else Vr(1===n);else this.Zt(t)!==n&&(this.Jt(t),this.Kt=this.Kt.add(t))}}te(e){const t=new Map;this.Lt.forEach(((n,r)=>{const i=this.Xt(r);if(i){if(n.current&&Ls(i.target)){const t=new li(i.target.path);null!==this.Ut.get(t)||this.ee(r,t)||this.jt(r,t,As.newNoDocument(t,e))}n.Dt&&(t.set(r,n.xt()),n.Nt())}}));let n=da();this.qt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Ut.forEach(((t,n)=>n.setReadTime(e)));const r=new ma(e,t,this.Kt,this.Ut,n);return this.Ut=ra(),this.qt=Ia(),this.Kt=new $i(ti),r}Qt(e,t){if(!this.Ht(e))return;const n=this.ee(e,t.key)?2:0;this.zt(e).kt(t.key,n),this.Ut=this.Ut.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ne(t.key).add(e))}jt(e,t,n){if(!this.Ht(e))return;const r=this.zt(e);this.ee(e,t)?r.kt(t,1):r.Ot(t),this.qt=this.qt.insert(t,this.ne(t).delete(e)),n&&(this.Ut=this.Ut.insert(t,n))}removeTarget(e){this.Lt.delete(e)}Zt(e){const t=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let t=this.Lt.get(e);return t||(t=new ba,this.Lt.set(e,t)),t}ne(e){let t=this.qt.get(e);return t||(t=new $i(ti),this.qt=this.qt.insert(e,t)),t}Ht(e){const t=null!==this.Xt(e);return t||Pr("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.Lt.get(e);return t&&t.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new ba),this.Bt.getRemoteKeysForTarget(e).forEach((t=>{this.jt(e,t,null)}))}ee(e,t){return this.Bt.getRemoteKeysForTarget(e).has(t)}}function Ia(){return new Vi(li.comparator)}function Ea(){return new Vi(li.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Sa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class ka{constructor(e,t){this.databaseId=e,this.gt=t}}function Ca(e,t){return e.gt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xa(e,t){return e.gt?t.toBase64():t.toUint8Array()}function Aa(e,t){return Ca(e,t.toTimestamp())}function Ra(e){return Vr(!!e),si.fromTimestamp(function(e){const t=Qi(e);return new ii(t.seconds,t.nanos)}(e))}function Na(e,t){return function(e){return new ai(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Oa(e){const t=ai.fromString(e);return Vr(ic(t)),t}function Da(e,t){return Na(e.databaseId,t.path)}function Pa(e,t){const n=Oa(t);if(n.get(1)!==e.databaseId.projectId)throw new qr($r.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new qr($r.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new li(Ua(n))}function La(e,t){return Na(e.databaseId,t)}function Fa(e){const t=Oa(e);return 4===t.length?ai.emptyPath():Ua(t)}function Ma(e){return new ai(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ua(e){return Vr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Va(e,t,n){return{name:Da(e,t),fields:n.value.mapValue.fields}}function Ba(e,t,n){const r=Pa(e,t.name),i=Ra(t.updateTime),s=new Cs({mapValue:{fields:t.fields}}),o=As.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function ja(e,t){return"found"in t?function(e,t){Vr(!!t.found),t.found.name,t.found.updateTime;const n=Pa(e,t.found.name),r=Ra(t.found.updateTime),i=new Cs({mapValue:{fields:t.found.fields}});return As.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){Vr(!!t.missing),Vr(!!t.readTime);const n=Pa(e,t.missing),r=Ra(t.readTime);return As.newNoDocument(n,r)}(e,t):Ur()}function $a(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Ur()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.gt?(Vr(void 0===t||"string"==typeof t),Hi.fromBase64String(t||"")):(Vr(void 0===t||t instanceof Uint8Array),Hi.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?$r.UNKNOWN:ea(e.code);return new qr(t,e.message||"")}(o);n=new wa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pa(e,r.document.name),s=Ra(r.document.updateTime),o=new Cs({mapValue:{fields:r.document.fields}}),a=As.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new va(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Pa(e,r.document),s=r.readTime?Ra(r.readTime):si.min(),o=As.newNoDocument(i,s),a=r.removedTargetIds||[];n=new va([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Pa(e,r.document),s=r.removedTargetIds||[];n=new va([],s,i,null)}else{if(!("filter"in t))return Ur();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Yo(r),s=e.targetId;n=new ya(s,i)}}return n}function qa(e,t){let n;if(t instanceof qo)n={update:Va(e,t.key,t.value)};else if(t instanceof Ko)n={delete:Da(e,t.key)};else if(t instanceof Wo)n={update:Va(e,t.key,t.data),updateMask:rc(t.fieldMask)};else{if(!(t instanceof Qo))return Ur();n={verify:Da(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof To)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof So)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Co)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ao)return{fieldPath:t.field.canonicalString(),increment:n.yt};throw Ur()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Aa(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Ur()}(e,t.precondition)),n}function Wa(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Lo.updateTime(Ra(e.updateTime)):void 0!==e.exists?Lo.exists(e.exists):Lo.none()}(t.currentDocument):Lo.none(),r=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Vr("REQUEST_TIME"===t.setToServerValue),n=new To;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new So(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Co(e)}else"increment"in t?n=new Ao(e,t.increment):Ur();const r=ui.fromServerFormat(t.fieldPath);return new Oo(r,n)}(e,t))):[];if(t.update){t.update.name;const i=Pa(e,t.update.name),s=new Cs({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new zi(t.map((e=>ui.fromServerFormat(e))))}(t.updateMask);return new Wo(i,s,e,n,r)}return new qo(i,s,n,r)}if(t.delete){const r=Pa(e,t.delete);return new Ko(r,n)}if(t.verify){const r=Pa(e,t.verify);return new Qo(r,n)}return Ur()}function za(e,t){return e&&e.length>0?(Vr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ra(e.updateTime):Ra(t);return n.isEqual(si.min())&&(n=Ra(t)),new Po(n,e.transformResults||[])}(e,t)))):[]}function Ga(e,t){return{documents:[La(e,t.path)]}}function Ha(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=La(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=La(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ws(e.value))return{unaryFilter:{field:Za(e.field),op:"IS_NAN"}};if(ys(e.value))return{unaryFilter:{field:Za(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ws(e.value))return{unaryFilter:{field:Za(e.field),op:"IS_NOT_NAN"}};if(ys(e.value))return{unaryFilter:{field:Za(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Za(e.field),op:Xa(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Za(e.field),direction:Ja(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.gt||rs(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ka(e){let t=Fa(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Vr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=Ya(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Qs(ec(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,rs(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ks(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new Ks(n,t)}(n.endAt)),eo(t,i,o,s,a,"F",c,u)}function Qa(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Ur()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function Ya(e){return e?void 0!==e.unaryFilter?[nc(e)]:void 0!==e.fieldFilter?[tc(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Ya(e))).reduce(((e,t)=>e.concat(t))):Ur():[]}function Ja(e){return Ta[e]}function Xa(e){return Sa[e]}function Za(e){return{fieldPath:e.canonicalString()}}function ec(e){return ui.fromServerFormat(e.fieldPath)}function tc(e){return Vs.create(ec(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ur()}}(e.fieldFilter.op),e.fieldFilter.value)}function nc(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ec(e.unaryFilter.field);return Vs.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ec(e.unaryFilter.field);return Vs.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ec(e.unaryFilter.field);return Vs.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ec(e.unaryFilter.field);return Vs.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Ur()}}function rc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ic(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=ac(t)),t=oc(e.get(n),t);return ac(t)}function oc(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function ac(e){return e+""}function cc(e){const t=e.length;if(Vr(t>=2),2===t)return Vr(""===e.charAt(0)&&""===e.charAt(1)),ai.emptyPath();const n=t-2,r=[];let i="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Ur(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=e.substring(s,t),i+="\0";break;case"":i+=e.substring(s,t+1);break;default:Ur()}s=t+2}return new ai(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(e,t){return[e,sc(t)]}function hc(e,t,n){return[e,sc(t),n]}const dc={},fc=["prefixPath","collectionGroup","readTime","documentId"],pc=["prefixPath","collectionGroup","documentId"],mc=["collectionGroup","readTime","prefixPath","documentId"],gc=["canonicalId","targetId"],vc=["targetId","path"],yc=["path","targetId"],wc=["collectionId","parent"],bc=["indexId","uid"],_c=["uid","sequenceNumber"],Ic=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ec=["indexId","uid","orderedDocumentKey"],Tc=["userId","collectionPath","documentId"],Sc=["userId","collectionPath","largestBatchId"],kc=["userId","collectionGroup","largestBatchId"],Cc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],xc=[...Cc,"documentOverlays"],Ac=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Rc=Ac,Nc=[...Rc,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends _i{constructor(e,t){super(),this.ie=e,this.currentSequenceNumber=t}}function Dc(e,t){const n=jr(e);return Si.M(n.ie,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Vo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Bo(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Bo(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ca();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Uo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(si.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),da())}isEqual(e){return this.batchId===e.batchId&&ni(this.mutations,e.mutations,((e,t)=>$o(e,t)))&&ni(this.baseMutations,e.baseMutations,((e,t)=>$o(e,t)))}}class Lc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Vr(e.mutations.length===n.length);let r=la;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Lc(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,n,r,i=si.min(),s=si.min(),o=Hi.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Mc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Mc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Mc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e){this.re=e}}function Vc(e,t){let n;if(t.document)n=Ba(e.re,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=li.fromSegments(t.noDocument.path),r=qc(t.noDocument.readTime);n=As.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Ur();{const e=li.fromSegments(t.unknownDocument.path),r=qc(t.unknownDocument.version);n=As.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new ii(e[0],e[1]);return si.fromTimestamp(t)}(t.readTime)),n}function Bc(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:jc(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document=function(e,t){return{name:Da(e,t.key),fields:t.data.value.mapValue.fields,updateTime:Ca(e,t.version.toTimestamp())}}(e.re,t);else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:$c(t.version)};else{if(!t.isUnknownDocument())return Ur();r.unknownDocument={path:n.path.toArray(),version:$c(t.version)}}return r}function jc(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function $c(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function qc(e){const t=new ii(e.seconds,e.nanoseconds);return si.fromTimestamp(t)}function Wc(e,t){const n=(t.baseMutations||[]).map((t=>Wa(e.re,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const r=t.mutations.map((t=>Wa(e.re,t))),i=ii.fromMillis(t.localWriteTimeMs);return new Pc(t.batchId,i,n,r)}function zc(e){const t=qc(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?qc(e.lastLimboFreeSnapshotVersion):si.min();let r;var i;return void 0!==e.query.documents?(Vr(1===(i=e.query).documents.length),r=ao(to(Fa(i.documents[0])))):r=function(e){return ao(Ka(e))}(e.query),new Mc(r,e.targetId,0,e.lastListenSequenceNumber,t,n,Hi.fromBase64String(e.resumeToken))}function Gc(e,t){const n=$c(t.snapshotVersion),r=$c(t.lastLimboFreeSnapshotVersion);let i;i=Ls(t.target)?Ga(e.re,t.target):Ha(e.re,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Os(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Hc(e){const t=Ka({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?co(t,t.limit,"L"):t}function Kc(e,t){return new Fc(t.largestBatchId,Wa(e.re,t.overlayMutation))}function Qc(e,t){const n=t.path.lastSegment();return[e,sc(t.path.popLast()),n]}function Yc(e,t,n,r){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:$c(r.readTime),documentKey:sc(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{getBundleMetadata(e,t){return Xc(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:qc(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return Xc(e).put({bundleId:(n=t).id,createTime:$c(Ra(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Zc(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:Hc(t.bundledQuery),readTime:qc(t.readTime)};var t}))}saveNamedQuery(e,t){return Zc(e).put(function(e){return{name:e.name,readTime:$c(Ra(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function Xc(e){return Dc(e,"bundles")}function Zc(e){return Dc(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t){this.It=e,this.userId=t}static oe(e,t){const n=t.uid||"";return new eu(e,n)}getOverlay(e,t){return tu(e).get(Qc(this.userId,t)).next((e=>e?Kc(this.It,e):null))}getOverlays(e,t){const n=aa();return Ei.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const r=[];return n.forEach(((n,i)=>{const s=new Fc(t,i);r.push(this.ue(e,s))})),Ei.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach((e=>r.add(sc(e.getCollectionPath()))));const i=[];return r.forEach((t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);i.push(tu(e).Y("collectionPathOverlayIndex",r))})),Ei.waitFor(i)}getOverlaysForCollection(e,t,n){const r=aa(),i=sc(t),s=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return tu(e).W("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=Kc(this.It,t);r.set(e.getKey(),e)}return r}))}getOverlaysForCollectionGroup(e,t,n,r){const i=aa();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return tu(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=Kc(this.It,t);i.size()<r||o.largestBatchId===s?(i.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>i))}ue(e,t){return tu(e).put(function(e,t,n){const[r,i,s]=Qc(t,n.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:qa(e.re,n.mutation)}}(this.It,this.userId,t))}}function tu(e){return Dc(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){}ce(e,t){this.ae(e,t),t.he()}ae(e,t){if("nullValue"in e)this.le(t,5);else if("booleanValue"in e)this.le(t,10),t.fe(e.booleanValue?1:0);else if("integerValue"in e)this.le(t,15),t.fe(Yi(e.integerValue));else if("doubleValue"in e){const n=Yi(e.doubleValue);isNaN(n)?this.le(t,13):(this.le(t,15),is(n)?t.fe(0):t.fe(n))}else if("timestampValue"in e){const n=e.timestampValue;this.le(t,20),"string"==typeof n?t.de(n):(t.de(`${n.seconds||""}`),t.fe(n.nanos||0))}else if("stringValue"in e)this._e(e.stringValue,t),this.we(t);else if("bytesValue"in e)this.le(t,30),t.me(Ji(e.bytesValue)),this.we(t);else if("referenceValue"in e)this.ge(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.le(t,45),t.fe(n.latitude||0),t.fe(n.longitude||0)}else"mapValue"in e?Is(e)?this.le(t,Number.MAX_SAFE_INTEGER):(this.ye(e.mapValue,t),this.we(t)):"arrayValue"in e?(this.pe(e.arrayValue,t),this.we(t)):Ur()}_e(e,t){this.le(t,25),this.Ie(e,t)}Ie(e,t){t.de(e)}ye(e,t){const n=e.fields||{};this.le(t,55);for(const r of Object.keys(n))this._e(r,t),this.ae(n[r],t)}pe(e,t){const n=e.values||[];this.le(t,50);for(const r of n)this.ae(r,t)}ge(e,t){this.le(t,37),li.fromName(e).path.forEach((e=>{this.le(t,60),this.Ie(e,t)}))}le(e,t){e.fe(t)}we(e){e.fe(2)}}function ru(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function iu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=ru(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}nu.Te=new nu;class su{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ee(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ae(n.value),n=t.next();this.Re()}be(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Pe(n.value),n=t.next();this.ve()}Ve(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Ae(e);else if(e<2048)this.Ae(960|e>>>6),this.Ae(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Ae(480|e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e);else{const e=t.codePointAt(0);this.Ae(240|e>>>18),this.Ae(128|63&e>>>12),this.Ae(128|63&e>>>6),this.Ae(128|63&e)}}this.Re()}Se(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Pe(e);else if(e<2048)this.Pe(960|e>>>6),this.Pe(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Pe(480|e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e);else{const e=t.codePointAt(0);this.Pe(240|e>>>18),this.Pe(128|63&e>>>12),this.Pe(128|63&e>>>6),this.Pe(128|63&e)}}this.ve()}De(e){const t=this.Ce(e),n=iu(t);this.xe(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ne(e){const t=this.Ce(e),n=iu(t);this.xe(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}ke(){this.Oe(255),this.Oe(255)}Me(){this.Fe(255),this.Fe(255)}reset(){this.position=0}seed(e){this.xe(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Ce(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Ae(e){const t=255&e;0===t?(this.Oe(0),this.Oe(255)):255===t?(this.Oe(255),this.Oe(0)):this.Oe(t)}Pe(e){const t=255&e;0===t?(this.Fe(0),this.Fe(255)):255===t?(this.Fe(255),this.Fe(0)):this.Fe(e)}Re(){this.Oe(0),this.Oe(1)}ve(){this.Fe(0),this.Fe(1)}Oe(e){this.xe(1),this.buffer[this.position++]=e}Fe(e){this.xe(1),this.buffer[this.position++]=~e}xe(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class ou{constructor(e){this.Be=e}me(e){this.Be.Ee(e)}de(e){this.Be.Ve(e)}fe(e){this.Be.De(e)}he(){this.Be.ke()}}class au{constructor(e){this.Be=e}me(e){this.Be.be(e)}de(e){this.Be.Se(e)}fe(e){this.Be.Ne(e)}he(){this.Be.Me()}}class cu{constructor(){this.Be=new su,this.Le=new ou(this.Be),this.Ue=new au(this.Be)}seed(e){this.Be.seed(e)}qe(e){return 0===e?this.Le:this.Ue}$e(){return this.Be.$e()}reset(){this.Be.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t,n,r){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=r}Ke(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new uu(this.indexId,this.documentKey,this.arrayValue,n)}}function lu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=hu(e.arrayValue,t.arrayValue),0!==n?n:(n=hu(e.directionalValue,t.directionalValue),0!==n?n:li.comparator(e.documentKey,t.documentKey)))}function hu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ge=e.orderBy,this.Qe=[];for(const t of e.filters){const e=t;e.dt()?this.je=e:this.Qe.push(e)}}We(e){const t=di(e);if(void 0!==t&&!this.ze(t))return!1;const n=fi(e);let r=0,i=0;for(;r<n.length&&this.ze(n[r]);++r);if(r===n.length)return!0;if(void 0!==this.je){const e=n[r];if(!this.He(this.je,e)||!this.Je(this.Ge[i++],e))return!1;++r}for(;r<n.length;++r){const e=n[r];if(i>=this.Ge.length||!this.Je(this.Ge[i++],e))return!1}return!0}ze(e){for(const t of this.Qe)if(this.He(t,e))return!0;return!1}He(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Je(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.Ye=new pu}addToCollectionParentIndex(e,t){return this.Ye.add(t),Ei.resolve()}getCollectionParents(e,t){return Ei.resolve(this.Ye.getEntries(t))}addFieldIndex(e,t){return Ei.resolve()}deleteFieldIndex(e,t){return Ei.resolve()}getDocumentsMatchingTarget(e,t){return Ei.resolve(null)}getIndexType(e,t){return Ei.resolve(0)}getFieldIndexes(e,t){return Ei.resolve([])}getNextCollectionGroupToUpdate(e){return Ei.resolve(null)}getMinOffset(e,t){return Ei.resolve(yi.min())}getMinOffsetFromCollectionGroup(e,t){return Ei.resolve(yi.min())}updateCollectionGroup(e,t,n){return Ei.resolve()}updateIndexEntries(e,t){return Ei.resolve()}}class pu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new $i(ai.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new $i(ai.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=new Uint8Array(0);class gu{constructor(e,t){this.user=e,this.databaseId=t,this.Xe=new pu,this.Ze=new ta((e=>Os(e)),((e,t)=>Ps(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Xe.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener((()=>{this.Xe.add(t)}));const i={collectionId:n,parent:sc(r)};return vu(e).put(i)}return Ei.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[ri(t),""],!1,!0);return vu(e).W(r).next((e=>{for(const r of e){if(r.collectionId!==t)break;n.push(cc(r.parent))}return n}))}addFieldIndex(e,t){const n=wu(e),r=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete r.indexId;const i=n.add(r);if(t.indexState){const n=bu(e);return i.next((e=>{n.put(Yc(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return i.next()}deleteFieldIndex(e,t){const n=wu(e),r=bu(e),i=yu(e);return n.delete(t.indexId).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=yu(e);let r=!0;const i=new Map;return Ei.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{r&&(r=!!e),i.set(t,e)})))).next((()=>{if(r){let e=da();const r=[];return Ei.forEach(i,((i,s)=>{var o;Pr("IndexedDbIndexManager",`Using index ${o=i,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Os(t)}`);const a=function(e,t){const n=di(t);if(void 0===n)return null;for(const r of Fs(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(s,i),c=function(e,t){const n=new Map;for(const r of fi(t))for(const t of Fs(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,i),u=function(e,t){const n=[];let r=!0;for(const i of fi(t)){const t=0===i.kind?Ms(e,i.fieldPath,e.startAt):Us(e,i.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Ks(n,r)}(s,i),l=function(e,t){const n=[];let r=!0;for(const i of fi(t)){const t=0===i.kind?Us(e,i.fieldPath,e.endAt):Ms(e,i.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Ks(n,r)}(s,i),h=this.nn(i,s,u),d=this.nn(i,s,l),f=this.sn(i,s,c),p=this.rn(i.indexId,a,h,u.inclusive,d,l.inclusive,f);return Ei.forEach(p,(i=>n.J(i,t.limit).next((t=>{t.forEach((t=>{const n=li.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))}))}))))})).next((()=>r))}return Ei.resolve(null)}))}tn(e){let t=this.Ze.get(e);return t||(t=[e],this.Ze.set(e,t),t)}rn(e,t,n,r,i,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,i.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.on(t[l/c]):mu,h=this.un(e,a,n[l%c],r),d=this.cn(e,a,i[l%c],s),f=o.map((t=>this.un(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}un(e,t,n,r){const i=new uu(e,li.empty(),t,n);return r?i:i.Ke()}cn(e,t,n,r){const i=new uu(e,li.empty(),t,n);return r?i.Ke():i}en(e,t){const n=new du(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next((e=>{let t=null;for(const r of e)n.We(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t}))}getIndexType(e,t){let n=2;return Ei.forEach(this.tn(t),(t=>this.en(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new $i(ui.comparator),n=!1;for(const r of e.filters){const e=r;e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field))}for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>n))}an(e,t){const n=new cu;for(const r of fi(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const i=n.qe(r.kind);nu.Te.ce(e,i)}return n.$e()}on(e){const t=new cu;return nu.Te.ce(e,t.qe(0)),t.$e()}hn(e,t){const n=new cu;return nu.Te.ce(ms(this.databaseId,t),n.qe(function(e){const t=fi(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}sn(e,t,n){if(null===n)return[];let r=[];r.push(new cu);let i=0;for(const s of fi(e)){const e=n[i++];for(const n of r)if(this.ln(t,s.fieldPath)&&vs(e))r=this.fn(r,s,e);else{const t=n.qe(s.kind);nu.Te.ce(e,t)}}return this.dn(r)}nn(e,t,n){return this.sn(e,t,n.position)}dn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}fn(e,t,n){const r=[...e],i=[];for(const s of n.arrayValue.values||[])for(const e of r){const n=new cu;n.seed(e.$e()),nu.Te.ce(s,n.qe(t.kind)),i.push(n)}return i}ln(e,t){return!!e.filters.find((e=>e instanceof Vs&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=wu(e),r=bu(e);return(t?n.W("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.W()).next((e=>{const t=[];return Ei.forEach(e,(e=>r.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new mi(t.sequenceNumber,new yi(qc(t.readTime),new li(cc(t.documentKey)),t.largestBatchId)):mi.empty(),r=e.fields.map((([e,t])=>new pi(ui.fromServerFormat(e),t)));return new hi(e.indexId,e.collectionGroup,r,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:ti(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const r=wu(e),i=bu(e);return this._n(e).next((e=>r.W("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Ei.forEach(t,(t=>i.put(Yc(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Ei.forEach(t,((t,r)=>{const i=n.get(t.collectionGroup);return(i?Ei.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next((i=>(n.set(t.collectionGroup,i),Ei.forEach(i,(n=>this.wn(e,t,n).next((t=>{const i=this.mn(r,n);return t.isEqual(i)?Ei.resolve():this.gn(e,r,n,t,i)})))))))}))}yn(e,t,n,r){return yu(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.hn(n,t.key),documentKey:t.key.path.toArray()})}pn(e,t,n,r){return yu(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.hn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const r=yu(e);let i=new $i(lu);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.hn(n,t)])},((e,r)=>{i=i.add(new uu(n.indexId,t,r.arrayValue,r.directionalValue))})).next((()=>i))}mn(e,t){let n=new $i(lu);const r=this.an(t,e);if(null==r)return n;const i=di(t);if(null!=i){const s=e.data.field(i.fieldPath);if(vs(s))for(const i of s.arrayValue.values||[])n=n.add(new uu(t.indexId,e.key,this.on(i),r))}else n=n.add(new uu(t.indexId,e.key,mu,r));return n}gn(e,t,n,r,i){Pr("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,r,i){const s=e.getIterator(),o=t.getIterator();let a=Wi(s),c=Wi(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const r=n(a,c);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(c),c=Wi(o)):t?(i(a),a=Wi(s)):(a=Wi(s),c=Wi(o))}}(r,i,lu,(r=>{s.push(this.yn(e,t,n,r))}),(r=>{s.push(this.pn(e,t,n,r))})),Ei.waitFor(s)}_n(e){let t=1;return bu(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,r)=>{r.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>lu(e,t))).filter(((e,t,n)=>!t||0!==lu(e,n[t-1])));const r=[];r.push(e);for(const s of n){const n=lu(s,e),i=lu(s,t);if(0===n)r[0]=e.Ke();else if(n>0&&i<0)r.push(s),r.push(s.Ke());else if(i>0)break}r.push(t);const i=[];for(let s=0;s<r.length;s+=2)i.push(IDBKeyRange.bound([r[s].indexId,this.uid,r[s].arrayValue,r[s].directionalValue,mu,[]],[r[s+1].indexId,this.uid,r[s+1].arrayValue,r[s+1].directionalValue,mu,[]]));return i}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(_u)}getMinOffset(e,t){return Ei.mapArray(this.tn(t),(t=>this.en(e,t).next((e=>e||Ur())))).next(_u)}}function vu(e){return Dc(e,"collectionParents")}function yu(e){return Dc(e,"indexEntries")}function wu(e){return Dc(e,"indexConfiguration")}function bu(e){return Dc(e,"indexState")}function _u(e){Vr(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const i=e[r].indexState.offset;wi(i,t)<0&&(t=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new yi(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Eu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Eu(e,Eu.DEFAULT_COLLECTION_PERCENTILE,Eu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(e,t,n){const r=e.store("mutations"),i=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Vr(1===a)})));const u=[];for(const l of n.mutations){const e=hc(t,l.key.path,n.batchId);s.push(i.delete(e)),u.push(l.key)}return Ei.waitFor(s).next((()=>u))}function Su(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Ur();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Eu.DEFAULT_COLLECTION_PERCENTILE=10,Eu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Eu.DEFAULT=new Eu(41943040,Eu.DEFAULT_COLLECTION_PERCENTILE,Eu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Eu.DISABLED=new Eu(-1,0,0);class ku{constructor(e,t,n,r){this.userId=e,this.It=t,this.indexManager=n,this.referenceDelegate=r,this.In={}}static oe(e,t,n,r){Vr(""!==e.uid);const i=e.isAuthenticated()?e.uid:"";return new ku(i,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xu(e).Z({index:"userMutationsIndex",range:n},((e,n,r)=>{t=!1,r.done()})).next((()=>t))}addMutationBatch(e,t,n,r){const i=Au(e),s=xu(e);return s.add({}).next((o=>{Vr("number"==typeof o);const a=new Pc(o,t,n,r),c=function(e,t,n){const r=n.baseMutations.map((t=>qa(e.re,t))),i=n.mutations.map((t=>qa(e.re,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:i}}(this.It,this.userId,a),u=[];let l=new $i(((e,t)=>ti(e.canonicalString(),t.canonicalString())));for(const e of r){const t=hc(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(i.put(t,dc))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.In[o]=a.keys()})),Ei.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return xu(e).get(t).next((e=>e?(Vr(e.userId===this.userId),Wc(this.It,e)):null))}Tn(e,t){return this.In[t]?Ei.resolve(this.In[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.In[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return xu(e).Z({index:"userMutationsIndex",range:r},((e,t,r)=>{t.userId===this.userId&&(Vr(t.batchId>=n),i=Wc(this.It,t)),r.done()})).next((()=>i))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return xu(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,r)=>{n=t.batchId,r.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return xu(e).W("userMutationsIndex",t).next((e=>e.map((e=>Wc(this.It,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=lc(this.userId,t.path),r=IDBKeyRange.lowerBound(n),i=[];return Au(e).Z({range:r},((n,r,s)=>{const[o,a,c]=n,u=cc(a);if(o===this.userId&&t.path.isEqual(u))return xu(e).get(c).next((e=>{if(!e)throw Ur();Vr(e.userId===this.userId),i.push(Wc(this.It,e))}));s.done()})).next((()=>i))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $i(ti);const r=[];return t.forEach((t=>{const i=lc(this.userId,t.path),s=IDBKeyRange.lowerBound(i),o=Au(e).Z({range:s},((e,r,i)=>{const[s,o,a]=e,c=cc(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):i.done()}));r.push(o)})),Ei.waitFor(r).next((()=>this.En(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,i=lc(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new $i(ti);return Au(e).Z({range:s},((e,t,i)=>{const[s,a,c]=e,u=cc(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()})).next((()=>this.En(e,o)))}En(e,t){const n=[],r=[];return t.forEach((t=>{r.push(xu(e).get(t).next((e=>{if(null===e)throw Ur();Vr(e.userId===this.userId),n.push(Wc(this.It,e))})))})),Ei.waitFor(r).next((()=>n))}removeMutationBatch(e,t){return Tu(e.ie,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.An(t.batchId)})),Ei.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}An(e){delete this.In[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Ei.resolve();const n=IDBKeyRange.lowerBound([this.userId]),r=[];return Au(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=cc(e[1]);r.push(t)}else n.done()})).next((()=>{Vr(0===r.length)}))}))}containsKey(e,t){return Cu(e,this.userId,t)}Rn(e){return Ru(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Cu(e,t,n){const r=lc(t,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Au(e).Z({range:s,X:!0},((e,n,r)=>{const[s,a,c]=e;s===t&&a===i&&(o=!0),r.done()})).next((()=>o))}function xu(e){return Dc(e,"mutations")}function Au(e){return Dc(e,"documentMutations")}function Ru(e){return Dc(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Nu(0)}static vn(){return new Nu(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t){this.referenceDelegate=e,this.It=t}allocateTargetId(e){return this.Vn(e).next((t=>{const n=new Nu(t.highestTargetId);return t.highestTargetId=n.next(),this.Sn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Vn(e).next((e=>si.fromTimestamp(new ii(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Vn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Vn(e).next((r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Sn(e,r))))}addTargetData(e,t){return this.Dn(e,t).next((()=>this.Vn(e).next((n=>(n.targetCount+=1,this.Cn(t,n),this.Sn(e,n))))))}updateTargetData(e,t){return this.Dn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>Du(e).delete(t.targetId))).next((()=>this.Vn(e))).next((t=>(Vr(t.targetCount>0),t.targetCount-=1,this.Sn(e,t))))}removeTargets(e,t,n){let r=0;const i=[];return Du(e).Z(((s,o)=>{const a=zc(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(e,a)))})).next((()=>Ei.waitFor(i))).next((()=>r))}forEachTarget(e,t){return Du(e).Z(((e,n)=>{const r=zc(n);t(r)}))}Vn(e){return Pu(e).get("targetGlobalKey").next((e=>(Vr(null!==e),e)))}Sn(e,t){return Pu(e).put("targetGlobalKey",t)}Dn(e,t){return Du(e).put(Gc(this.It,t))}Cn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Vn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Os(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Du(e).Z({range:r,index:"queryTargetsIndex"},((e,n,r)=>{const s=zc(n);Ps(t,s.target)&&(i=s,r.done())})).next((()=>i))}addMatchingKeys(e,t,n){const r=[],i=Lu(e);return t.forEach((t=>{const s=sc(t.path);r.push(i.put({targetId:n,path:s})),r.push(this.referenceDelegate.addReference(e,n,t))})),Ei.waitFor(r)}removeMatchingKeys(e,t,n){const r=Lu(e);return Ei.forEach(t,(t=>{const i=sc(t.path);return Ei.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=Lu(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=Lu(e);let i=da();return r.Z({range:n,X:!0},((e,t,n)=>{const r=cc(e[1]),s=new li(r);i=i.add(s)})).next((()=>i))}containsKey(e,t){const n=sc(t.path),r=IDBKeyRange.bound([n],[ri(n)],!1,!0);let i=0;return Lu(e).Z({index:"documentTargetsIndex",X:!0,range:r},(([e,t],n,r)=>{0!==e&&(i++,r.done())})).next((()=>i>0))}se(e,t){return Du(e).get(t).next((e=>e?zc(e):null))}}function Du(e){return Dc(e,"targets")}function Pu(e){return Dc(e,"targetGlobal")}function Lu(e){return Dc(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu([e,t],[n,r]){const i=ti(e,n);return 0===i?ti(t,r):i}class Mu{constructor(e){this.xn=e,this.buffer=new $i(Fu),this.Nn=0}kn(){return++this.Nn}On(e){const t=[e,this.kn()];if(this.buffer.size<this.xn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Fu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Uu{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Mn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Fn(6e4)}stop(){this.Mn&&(this.Mn.cancel(),this.Mn=null)}get started(){return null!==this.Mn}Fn(e){Pr("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Mn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Mn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xi(e)?Pr("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ii(e)}await this.Fn(3e5)}))}}class Vu{constructor(e,t){this.$n=e,this.params=t}calculateTargetCount(e,t){return this.$n.Bn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Ei.resolve(Li.at);const n=new Mu(t);return this.$n.forEachTarget(e,(e=>n.On(e.sequenceNumber))).next((()=>this.$n.Ln(e,(e=>n.On(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.$n.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.$n.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Pr("LruGarbageCollector","Garbage collection skipped; disabled"),Ei.resolve(Iu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Pr("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Iu):this.Un(e,t)))}getCacheSize(e){return this.$n.getCacheSize(e)}Un(e,t){let n,r,i,s,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Pr("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Or()<=o["in"].DEBUG&&Pr("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${r} in `+(a-s)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Ei.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new Vu(e,t)}(this,t)}Bn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}qn(e){let t=0;return this.Ln(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Ln(e,t){return this.Kn(e,((e,n)=>t(n)))}addReference(e,t,n){return ju(e,n)}removeReference(e,t,n){return ju(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ju(e,t)}Gn(e,t){return function(e,t){let n=!1;return Ru(e).tt((r=>Cu(e,r,t).next((e=>(e&&(n=!0),Ei.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Kn(e,((s,o)=>{if(o<=t){const t=this.Gn(e,s).next((t=>{if(!t)return i++,n.getEntry(e,s).next((()=>(n.removeEntry(s,si.min()),Lu(e).delete([0,sc(s.path)]))))}));r.push(t)}})).next((()=>Ei.waitFor(r))).next((()=>n.apply(e))).next((()=>i))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ju(e,t)}Kn(e,t){const n=Lu(e);let r,i=Li.at;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(i!==Li.at&&t(new li(cc(r)),i),i=o,r=s):i=Li.at})).next((()=>{i!==Li.at&&t(new li(cc(r)),i)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ju(e,t){return Lu(e).put(function(e,t){return{targetId:0,path:sc(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.changes=new ta((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,As.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ei.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.It=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Hu(e).put(n)}removeEntry(e,t,n){return Hu(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],jc(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Qn(e,n))))}getEntry(e,t){let n=As.newInvalidDocument(t);return Hu(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ku(t))},((e,r)=>{n=this.jn(t,r)})).next((()=>n))}Wn(e,t){let n={size:0,document:As.newInvalidDocument(t)};return Hu(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(Ku(t))},((e,r)=>{n={document:this.jn(t,r),size:Su(r)}})).next((()=>n))}getEntries(e,t){let n=ra();return this.zn(e,t,((e,t)=>{const r=this.jn(e,t);n=n.insert(e,r)})).next((()=>n))}Hn(e,t){let n=ra(),r=new Vi(li.comparator);return this.zn(e,t,((e,t)=>{const i=this.jn(e,t);n=n.insert(e,i),r=r.insert(e,Su(t))})).next((()=>({documents:n,Jn:r})))}zn(e,t,n){if(t.isEmpty())return Ei.resolve();let r=new $i(Yu);t.forEach((e=>r=r.add(e)));const i=IDBKeyRange.bound(Ku(r.first()),Ku(r.last())),s=r.getIterator();let o=s.getNext();return Hu(e).Z({index:"documentKeyIndex",range:i},((e,t,r)=>{const i=li.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&Yu(o,i)<0;)n(o,null),o=s.getNext();o&&o.isEqual(i)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?r.j(Ku(o)):r.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getAllFromCollection(e,t,n){const r=[t.popLast().toArray(),t.lastSegment(),jc(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hu(e).W(IDBKeyRange.bound(r,i,!0)).next((e=>{let t=ra();for(const n of e){const e=this.jn(li.fromSegments(n.prefixPath.concat(n.collectionGroup,n.documentId)),n);t=t.insert(e.key,e)}return t}))}getAllFromCollectionGroup(e,t,n,r){let i=ra();const s=Qu(t,n),o=Qu(t,yi.max());return Hu(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.jn(li.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);i=i.insert(s.key,s),i.size===r&&n.done()})).next((()=>i))}newChangeBuffer(e){return new zu(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return Gu(e).get("remoteDocumentGlobalKey").next((e=>(Vr(!!e),e)))}Qn(e,t){return Gu(e).put("remoteDocumentGlobalKey",t)}jn(e,t){if(t){const e=Vc(this.It,t);if(!e.isNoDocument()||!e.version.isEqual(si.min()))return e}return As.newInvalidDocument(e)}}function Wu(e){return new qu(e)}class zu extends $u{constructor(e,t){super(),this.Yn=e,this.trackRemovals=t,this.Xn=new ta((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,r=new $i(((e,t)=>ti(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((i,s)=>{const o=this.Xn.get(i);if(t.push(this.Yn.removeEntry(e,i,o.readTime)),s.isValidDocument()){const a=Bc(this.Yn.It,s);r=r.add(i.path.popLast());const c=Su(a);n+=c-o.size,t.push(this.Yn.addEntry(e,i,a))}else if(n-=o.size,this.trackRemovals){const n=Bc(this.Yn.It,s.convertToNoDocument(si.min()));t.push(this.Yn.addEntry(e,i,n))}})),r.forEach((n=>{t.push(this.Yn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Yn.updateMetadata(e,n)),Ei.waitFor(t)}getFromCache(e,t){return this.Yn.Wn(e,t).next((e=>(this.Xn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Yn.Hn(e,t).next((({documents:e,Jn:t})=>(t.forEach(((t,n)=>{this.Xn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function Gu(e){return Dc(e,"remoteDocumentGlobal")}function Hu(e){return Dc(e,"remoteDocumentsV14")}function Ku(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Qu(e,t){const n=t.documentKey.path.toArray();return[e,jc(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Yu(e,t){const n=e.path.toArray(),r=t.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ti(n[s],r[s]),i)return i;return i=ti(n.length,r.length),i||(i=ti(n[n.length-2],r[r.length-2]),i||ti(n[n.length-1],r[r.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ju{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&Bo(n.mutation,e,zi.empty(),ii.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,da()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=da()){const r=aa();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=sa();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=aa();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,da())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=ra();const s=ua(),o=ua();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Wo)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),Bo(o.mutation,t,o.mutation.getFieldMask(),ii.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ju(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ua();let r=new Vi(((e,t)=>e-t)),i=da();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||zi.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||da()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ca();c.forEach((e=>{if(!i.has(e)){const r=Uo(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Ei.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return li.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):so(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ei.resolve(aa());let o=-1,a=i;return s.next((t=>Ei.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ei.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,da()))).next((e=>({batchId:o,changes:oa(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new li(t)).next((e=>{let t=sa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=sa();return this.indexManager.getCollectionParents(e,r).next((s=>Ei.forEach(s,(s=>{const o=function(e,t){return new Zs(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,As.newInvalidDocument(n)))}));let n=sa();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&Bo(s.mutation,i,zi.empty(),ii.now()),fo(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):Ei.resolve(As.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,t){return Ei.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Ra(n.createTime)}),Ei.resolve()}getNamedQuery(e,t){return Ei.resolve(this.ts.get(t))}saveNamedQuery(e,t){return this.ts.set(t.name,function(e){return{name:e.name,query:Hc(e.bundledQuery),readTime:Ra(e.readTime)}}(t)),Ei.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.overlays=new Vi(li.comparator),this.es=new Map}getOverlay(e,t){return Ei.resolve(this.overlays.get(t))}getOverlays(e,t){const n=aa();return Ei.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ue(e,t,r)})),Ei.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.es.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.es.delete(n)),Ei.resolve()}getOverlaysForCollection(e,t,n){const r=aa(),i=t.length+1,s=new li(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ei.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Vi(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=aa(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=aa(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ei.resolve(o)}ue(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.es.get(r.largestBatchId).delete(n.key);this.es.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Fc(t,n));let i=this.es.get(t);void 0===i&&(i=da(),this.es.set(t,i)),this.es.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.ns=new $i(nl.ss),this.rs=new $i(nl.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,t){const n=new nl(e,t);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.cs(new nl(e,t))}hs(e,t){e.forEach((e=>this.removeReference(e,t)))}ls(e){const t=new li(new ai([])),n=new nl(t,e),r=new nl(t,e+1),i=[];return this.rs.forEachInRange([n,r],(e=>{this.cs(e),i.push(e.key)})),i}fs(){this.ns.forEach((e=>this.cs(e)))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const t=new li(new ai([])),n=new nl(t,e),r=new nl(t,e+1);let i=da();return this.rs.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new nl(e,0),n=this.ns.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class nl{constructor(e,t){this.key=e,this._s=t}static ss(e,t){return li.comparator(e.key,t.key)||ti(e._s,t._s)}static os(e,t){return ti(e._s,t._s)||li.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this.gs=new $i(nl.ss)}checkEmpty(e){return Ei.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Pc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.gs=this.gs.add(new nl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ei.resolve(s)}lookupMutationBatch(e,t){return Ei.resolve(this.ys(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ps(n),i=r<0?0:r;return Ei.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ei.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Ei.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new nl(t,0),r=new nl(t,Number.POSITIVE_INFINITY),i=[];return this.gs.forEachInRange([n,r],(e=>{const t=this.ys(e._s);i.push(t)})),Ei.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new $i(ti);return t.forEach((e=>{const t=new nl(e,0),r=new nl(e,Number.POSITIVE_INFINITY);this.gs.forEachInRange([t,r],(e=>{n=n.add(e._s)}))})),Ei.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;li.isDocumentKey(i)||(i=i.child(""));const s=new nl(new li(i),0);let o=new $i(ti);return this.gs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e._s)),!0)}),s),Ei.resolve(this.Is(o))}Is(e){const t=[];return e.forEach((e=>{const n=this.ys(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Vr(0===this.Ts(t.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return Ei.forEach(t.mutations,(r=>{const i=new nl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.gs=n}))}An(e){}containsKey(e,t){const n=new nl(t,0),r=this.gs.firstAfterOrEqual(n);return Ei.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ei.resolve()}Ts(e,t){return this.ps(e)}ps(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ys(e){const t=this.ps(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e){this.Es=e,this.docs=new Vi(li.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Es(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ei.resolve(n?n.document.mutableCopy():As.newInvalidDocument(t))}getEntries(e,t){let n=ra();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():As.newInvalidDocument(e))})),Ei.resolve(n)}getAllFromCollection(e,t,n){let r=ra();const i=new li(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||wi(vi(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Ei.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Ur()}As(e,t){return Ei.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new sl(this)}getSize(e){return Ei.resolve(this.size)}}class sl extends $u{constructor(e){super(),this.Yn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Yn.addEntry(e,r)):this.Yn.removeEntry(n)})),Ei.waitFor(t)}getFromCache(e,t){return this.Yn.getEntry(e,t)}getAllFromCache(e,t){return this.Yn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e){this.persistence=e,this.Rs=new ta((e=>Os(e)),Ps),this.lastRemoteSnapshotVersion=si.min(),this.highestTargetId=0,this.bs=0,this.Ps=new tl,this.targetCount=0,this.vs=Nu.Pn()}forEachTarget(e,t){return this.Rs.forEach(((e,n)=>t(n))),Ei.resolve()}getLastRemoteSnapshotVersion(e){return Ei.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ei.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),Ei.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.bs&&(this.bs=t),Ei.resolve()}Dn(e){this.Rs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.vs=new Nu(t),this.highestTargetId=t),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,t){return this.Dn(t),this.targetCount+=1,Ei.resolve()}updateTargetData(e,t){return this.Dn(t),Ei.resolve()}removeTargetData(e,t){return this.Rs.delete(t.target),this.Ps.ls(t.targetId),this.targetCount-=1,Ei.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Rs.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Rs.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ei.waitFor(i).next((()=>r))}getTargetCount(e){return Ei.resolve(this.targetCount)}getTargetData(e,t){const n=this.Rs.get(t)||null;return Ei.resolve(n)}addMatchingKeys(e,t,n){return this.Ps.us(t,n),Ei.resolve()}removeMatchingKeys(e,t,n){this.Ps.hs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ei.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ps.ls(t),Ei.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ps.ds(t);return Ei.resolve(n)}containsKey(e,t){return Ei.resolve(this.Ps.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.Vs={},this.overlays={},this.Ss=new Li(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new ol(this),this.indexManager=new fu,this.remoteDocumentCache=function(e){return new il(e)}((e=>this.referenceDelegate.xs(e))),this.It=new Uc(t),this.Ns=new Zu(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new el,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Vs[e.toKey()];return n||(n=new rl(t,this.referenceDelegate),this.Vs[e.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,t,n){Pr("MemoryPersistence","Starting transaction:",e);const r=new cl(this.Ss.next());return this.referenceDelegate.ks(),n(r).next((e=>this.referenceDelegate.Os(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ms(e,t){return Ei.or(Object.values(this.Vs).map((n=>()=>n.containsKey(e,t))))}}class cl extends _i{constructor(e){super(),this.currentSequenceNumber=e}}class ul{constructor(e){this.persistence=e,this.Fs=new tl,this.$s=null}static Bs(e){return new ul(e)}get Ls(){if(this.$s)return this.$s;throw Ur()}addReference(e,t,n){return this.Fs.addReference(n,t),this.Ls.delete(n.toString()),Ei.resolve()}removeReference(e,t,n){return this.Fs.removeReference(n,t),this.Ls.add(n.toString()),Ei.resolve()}markPotentiallyOrphaned(e,t){return this.Ls.add(t.toString()),Ei.resolve()}removeTarget(e,t){this.Fs.ls(t.targetId).forEach((e=>this.Ls.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ls.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}ks(){this.$s=new Set}Os(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ei.forEach(this.Ls,(n=>{const r=li.fromPath(n);return this.Us(e,r).next((e=>{e||t.removeEntry(r,si.min())}))})).next((()=>(this.$s=null,t.apply(e))))}updateLimboDocument(e,t){return this.Us(e,t).next((e=>{e?this.Ls.delete(t.toString()):this.Ls.add(t.toString())}))}xs(e){return 0}Us(e,t){return Ei.or([()=>Ei.resolve(this.Fs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ms(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this.It=e}$(e,t,n,r){const i=new Ti("createOrUpgrade",t);n<1&&r>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",uc,{unique:!0}),e.createObjectStore("documentMutations")}(e),hl(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Ei.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),hl(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:si.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(i)))),n<4&&r>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").W().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",uc,{unique:!0});const r=t.store("mutations"),i=n.map((e=>r.put(e)));return Ei.waitFor(i)}))}(e,i)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&r>=5&&(s=s.next((()=>this.qs(i)))),n<6&&r>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Ks(i))))),n<7&&r>=7&&(s=s.next((()=>this.Gs(i)))),n<8&&r>=8&&(s=s.next((()=>this.Qs(e,i)))),n<9&&r>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&r>=10&&(s=s.next((()=>this.js(i)))),n<11&&r>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&r>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:Tc});t.createIndex("collectionPathOverlayIndex",Sc,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",kc,{unique:!1})}(e)}))),n<13&&r>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:fc});t.createIndex("documentKeyIndex",pc),t.createIndex("collectionGroupIndex",mc)}(e))).next((()=>this.Ws(e,i))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&r>=14&&(s=s.next((()=>this.zs(e,i)))),n<15&&r>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:bc}).createIndex("sequenceNumberIndex",_c,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:Ic}).createIndex("documentKeyIndex",Ec,{unique:!1})}(e)))),s}Ks(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=Su(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}qs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.W().next((t=>Ei.forEach(t,(t=>{const r=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.W("userMutationsIndex",r).next((n=>Ei.forEach(n,(n=>{Vr(n.userId===t.userId);const r=Wc(this.It,n);return Tu(e,t.userId,r).next((()=>{}))}))))}))))}Gs(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const r=[];return n.Z(((n,i)=>{const s=new ai(n),o=function(e){return[0,sc(e)]}(s);r.push(t.get(o).next((n=>n?Ei.resolve():(n=>t.put({targetId:0,path:sc(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Ei.waitFor(r)))}))}Qs(e,t){e.createObjectStore("collectionParents",{keyPath:wc});const n=t.store("collectionParents"),r=new pu,i=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:sc(r)})}};return t.store("remoteDocuments").Z({X:!0},((e,t)=>{const n=new ai(e);return i(n.popLast())})).next((()=>t.store("documentMutations").Z({X:!0},(([e,t,n],r)=>{const s=cc(t);return i(s.popLast())}))))}js(e){const t=e.store("targets");return t.Z(((e,n)=>{const r=zc(n),i=Gc(this.It,r);return t.put(i)}))}Ws(e,t){const n=t.store("remoteDocuments"),r=[];return n.Z(((e,n)=>{const i=t.store("remoteDocumentsV14"),s=(o=n,o.document?new li(ai.fromString(o.document.name).popFirst(5)):o.noDocument?li.fromSegments(o.noDocument.path):o.unknownDocument?li.fromSegments(o.unknownDocument.path):Ur()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};r.push(i.put(a))})).next((()=>Ei.waitFor(r)))}zs(e,t){const n=t.store("mutations"),r=Wu(this.It),i=new al(ul.Bs,this.It.re);return n.W().next((e=>{const n=new Map;return e.forEach((e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:da();Wc(this.It,e).keys().forEach((e=>r=r.add(e))),n.set(e.userId,r)})),Ei.forEach(n,((e,n)=>{const s=new Ar(n),o=eu.oe(this.It,s),a=i.getIndexManager(s),c=ku.oe(s,this.It,a,i.referenceDelegate);return new Xu(r,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Oc(t,Li.at),e).next()}))}))}}function hl(e){e.createObjectStore("targetDocuments",{keyPath:vc}).createIndex("documentTargetsIndex",yc,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",gc,{unique:!0}),e.createObjectStore("targetGlobal")}const dl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class fl{constructor(e,t,n,r,i,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Hs=i,this.window=s,this.document=o,this.Js=c,this.Ys=u,this.Xs=l,this.Ss=null,this.Ds=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.ti=null,this.ei=null,this.ni=Number.NEGATIVE_INFINITY,this.si=e=>Promise.resolve(),!fl.C())throw new qr($r.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Bu(this,r),this.ii=t+"main",this.It=new Uc(a),this.ri=new Si(this.ii,this.Xs,new ll(this.It)),this.Cs=new Ou(this.referenceDelegate,this.It),this.remoteDocumentCache=Wu(this.It),this.Ns=new Jc,this.window&&this.window.localStorage?this.oi=this.window.localStorage:(this.oi=null,!1===u&&Lr("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ui().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new qr($r.FAILED_PRECONDITION,dl);return this.ci(),this.ai(),this.hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Cs.getHighestSequenceNumber(e)))})).then((e=>{this.Ss=new Li(e,this.Js)})).then((()=>{this.Ds=!0})).catch((e=>(this.ri&&this.ri.close(),Promise.reject(e))))}li(e){return this.si=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ri.L((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Hs.enqueueAndForget((async()=>{this.started&&await this.ui()})))}ui(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ml(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.fi(e).next((e=>{e||(this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))))}))})).next((()=>this.di(e))).next((t=>this.isPrimary&&!t?this._i(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(xi(e))return Pr("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Pr("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Hs.enqueueRetryable((()=>this.si(e))),this.isPrimary=e}))}fi(e){return pl(e).get("owner").next((e=>Ei.resolve(this.mi(e))))}gi(e){return ml(e).delete(this.clientId)}async yi(){if(this.isPrimary&&!this.pi(this.ni,18e5)){this.ni=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=Dc(e,"clientMetadata");return t.W().next((e=>{const n=this.Ii(e,18e5),r=e.filter((e=>-1===n.indexOf(e)));return Ei.forEach(r,(e=>t.delete(e.clientId))).next((()=>r))}))})).catch((()=>[]));if(this.oi)for(const t of e)this.oi.removeItem(this.Ti(t.clientId))}}hi(){this.ei=this.Hs.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.ui().then((()=>this.yi())).then((()=>this.hi()))))}mi(e){return!!e&&e.ownerId===this.clientId}di(e){return this.Ys?Ei.resolve(!0):pl(e).get("owner").next((t=>{if(null!==t&&this.pi(t.leaseTimestampMs,5e3)&&!this.Ei(t.ownerId)){if(this.mi(t)&&this.networkEnabled)return!0;if(!this.mi(t)){if(!t.allowTabSynchronization)throw new qr($r.FAILED_PRECONDITION,dl);return!1}}return!(!this.networkEnabled||!this.inForeground)||ml(e).W().next((e=>void 0===this.Ii(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Pr("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ds=!1,this.Ai(),this.ei&&(this.ei.cancel(),this.ei=null),this.Ri(),this.bi(),await this.ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new Oc(e,Li.at);return this._i(t).next((()=>this.gi(t)))})),this.ri.close(),this.Pi()}Ii(e,t){return e.filter((e=>this.pi(e.updateTimeMs,t)&&!this.Ei(e.clientId)))}vi(){return this.runTransaction("getActiveClients","readonly",(e=>ml(e).W().next((e=>this.Ii(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ds}getMutationQueue(e,t){return ku.oe(e,this.It,t,this.referenceDelegate)}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new gu(e,this.It.re.databaseId)}getDocumentOverlayCache(e){return eu.oe(this.It,e)}getBundleCache(){return this.Ns}runTransaction(e,t,n){Pr("IndexedDbPersistence","Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",i=15===(s=this.Xs)?Nc:14===s?Rc:13===s?Ac:12===s?xc:11===s?Cc:void Ur();var s;let o;return this.ri.runTransaction(e,r,i,(r=>(o=new Oc(r,this.Ss?this.Ss.next():Li.at),"readwrite-primary"===t?this.fi(o).next((e=>!!e||this.di(o))).next((t=>{if(!t)throw Lr(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Hs.enqueueRetryable((()=>this.si(!1))),new qr($r.FAILED_PRECONDITION,bi);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Vi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Vi(e){return pl(e).get("owner").next((e=>{if(null!==e&&this.pi(e.leaseTimestampMs,5e3)&&!this.Ei(e.ownerId)&&!this.mi(e)&&!(this.Ys||this.allowTabSynchronization&&e.allowTabSynchronization))throw new qr($r.FAILED_PRECONDITION,dl)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return pl(e).put("owner",t)}static C(){return Si.C()}_i(e){const t=pl(e);return t.get("owner").next((e=>this.mi(e)?(Pr("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Ei.resolve()))}pi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Lr(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ci(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.ti=()=>{this.Hs.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.ui())))},this.document.addEventListener("visibilitychange",this.ti),this.inForeground="visible"===this.document.visibilityState)}Ri(){this.ti&&(this.document.removeEventListener("visibilitychange",this.ti),this.ti=null)}ai(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ai(),(0,a.G6)()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Hs.enterRestrictedMode(!0),this.Hs.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}bi(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ei(e){var t;try{const n=null!==(null===(t=this.oi)||void 0===t?void 0:t.getItem(this.Ti(e)));return Pr("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Lr("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ai(){if(this.oi)try{this.oi.setItem(this.Ti(this.clientId),String(Date.now()))}catch(I){Lr("Failed to set zombie client id.",I)}}Pi(){if(this.oi)try{this.oi.removeItem(this.Ti(this.clientId))}catch(I){}}Ti(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function pl(e){return Dc(e,"owner")}function ml(e){return Dc(e,"clientMetadata")}function gl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class vl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Si=n,this.Di=r}static Ci(e,t){let n=da(),r=da();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new vl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.xi=!1}initialize(e,t){this.Ni=e,this.indexManager=t,this.xi=!0}getDocumentsMatchingQuery(e,t,n,r){return this.ki(e,t).next((i=>i||this.Oi(e,t,r,n))).next((n=>n||this.Mi(e,t)))}ki(e,t){if(no(t))return Ei.resolve(null);let n=ao(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=co(t,null,"F"),n=ao(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=da(...r);return this.Ni.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.Fi(t,r);return this.$i(t,s,i,n.readTime)?this.ki(e,co(t,null,"F")):this.Bi(e,s,t,n)}))))})))))}Oi(e,t,n,r){return no(t)||r.isEqual(si.min())?this.Mi(e,t):this.Ni.getDocuments(e,n).next((i=>{const s=this.Fi(t,i);return this.$i(t,s,n,r)?this.Mi(e,t):(Or()<=o["in"].DEBUG&&Pr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ho(t)),this.Bi(e,s,t,gi(r,-1)))}))}Fi(e,t){let n=new $i(mo(e));return t.forEach(((t,r)=>{fo(e,r)&&(n=n.add(r))})),n}$i(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mi(e,t){return Or()<=o["in"].DEBUG&&Pr("QueryEngine","Using full collection scan to execute query:",ho(t)),this.Ni.getDocumentsMatchingQuery(e,t,yi.min())}Bi(e,t,n,r){return this.Ni.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,n,r){this.persistence=e,this.Li=t,this.It=r,this.Ui=new Vi(ti),this.qi=new ta((e=>Os(e)),Ps),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(n)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Xu(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ui)))}}function bl(e,t,n,r){return new wl(e,t,n,r)}async function _l(e,t){const n=jr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=da();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({ji:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function Il(e,t){const n=jr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Gi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ei.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Vr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=da();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function El(e){const t=jr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Cs.getLastRemoteSnapshotVersion(e)))}function Tl(e,t){const n=jr(e),r=t.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(Hi.EMPTY_BYTE_STRING,si.min()).withLastLimboFreeSnapshotVersion(si.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Cs.updateTargetData(e,u))}));let a=ra(),c=da();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(Sl(e,s,t.documentUpdates).next((e=>{a=e.Wi,c=e.zi}))),!r.isEqual(si.min())){const t=n.Cs.getLastRemoteSnapshotVersion(e).next((t=>n.Cs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ei.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ui=i,e)))}function Sl(e,t,n){let r=da(),i=da();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=ra();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(si.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Pr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Wi:r,zi:i}}))}function kl(e,t){const n=jr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Cl(e,t){const n=jr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Cs.getTargetData(e,t).next((i=>i?(r=i,Ei.resolve(r)):n.Cs.allocateTargetId(e).next((i=>(r=new Mc(t,i,0,e.currentSequenceNumber),n.Cs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ui.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function xl(e,t,n){const r=jr(e),i=r.Ui.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!xi(e))throw e;Pr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.Ui=r.Ui.remove(t),r.qi.delete(i.target)}function Al(e,t,n){const r=jr(e);let i=si.min(),s=da();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=jr(e),i=r.qi.get(n);return void 0!==i?Ei.resolve(r.Ui.get(i)):r.Cs.getTargetData(t,n)}(r,e,ao(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Li.getDocumentsMatchingQuery(e,t,n?i:si.min(),n?s:da()))).next((e=>(Ol(r,po(t),e),{documents:e,Hi:s})))))}function Rl(e,t){const n=jr(e),r=jr(n.Cs),i=n.Ui.get(t);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(e=>r.se(e,t).next((e=>e?e.target:null))))}function Nl(e,t){const n=jr(e),r=n.Ki.get(t)||si.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Gi.getAllFromCollectionGroup(e,t,gi(r,-1),Number.MAX_SAFE_INTEGER))).then((e=>(Ol(n,t,e),e)))}function Ol(e,t,n){let r=e.Ki.get(t)||si.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ki.set(t,r)}async function Dl(e,t,n,r){const i=jr(e);let s=da(),o=ra();for(const u of n){const e=t.Ji(u.metadata.name);u.document&&(s=s.add(e));const n=t.Yi(u);n.setReadTime(t.Xi(u.metadata.readTime)),o=o.insert(e,n)}const a=i.Gi.newChangeBuffer({trackRemovals:!0}),c=await Cl(i,function(e){return ao(to(ai.fromString(`__bundle__/docs/${e}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Sl(e,a,o).next((t=>(a.apply(e),t))).next((t=>i.Cs.removeMatchingKeysForTargetId(e,c.targetId).next((()=>i.Cs.addMatchingKeys(e,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(e,t.Wi,t.zi))).next((()=>t.Wi))))))}async function Pl(e,t,n=da()){const r=await Cl(e,ao(Hc(t.bundledQuery))),i=jr(e);return i.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Ra(t.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ns.saveNamedQuery(e,t);const o=r.withResumeToken(Hi.EMPTY_BYTE_STRING,s);return i.Ui=i.Ui.insert(o.targetId,o),i.Cs.updateTargetData(e,o).next((()=>i.Cs.removeMatchingKeysForTargetId(e,r.targetId))).next((()=>i.Cs.addMatchingKeys(e,n,r.targetId))).next((()=>i.Ns.saveNamedQuery(e,t)))}))}function Ll(e,t){return`firestore_clients_${e}_${t}`}function Fl(e,t,n){let r=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}function Ml(e,t){return`firestore_targets_${e}_${t}`}class Ul{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Zi(e,t,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new qr(r.error.code,r.error.message))),s?new Ul(e,t,r.state,i):(Lr("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Vl{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new qr(n.error.code,n.error.message))),i?new Vl(e,n.state,r):(Lr("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}tr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Bl{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=pa();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ss(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new Bl(e,i):(Lr("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class jl{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new jl(t.clientId,t.onlineState):(Lr("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $l{constructor(){this.activeTargetIds=pa()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ql{constructor(e,t,n,r,i){this.window=e,this.Hs=t,this.persistenceKey=n,this.sr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ir=this.rr.bind(this),this.ur=new Vi(ti),this.started=!1,this.cr=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ar=Ll(this.persistenceKey,this.sr),this.hr=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.ur=this.ur.insert(this.sr,new $l),this.lr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.dr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this._r=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.mr=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.ir)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.vi();for(const n of e){if(n===this.sr)continue;const e=this.getItem(Ll(this.persistenceKey,n));if(e){const t=Bl.Zi(n,e);t&&(this.ur=this.ur.insert(t.clientId,t))}}this.gr();const t=this.storage.getItem(this.wr);if(t){const e=this.yr(t);e&&this.pr(e)}for(const n of this.cr)this.rr(n);this.cr=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.hr,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ir(this.ur)}isActiveQueryTarget(e){let t=!1;return this.ur.forEach(((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Tr(e,"pending")}updateMutationState(e,t,n){this.Tr(e,t,n),this.Er(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(Ml(this.persistenceKey,e));if(n){const r=Vl.Zi(e,n);r&&(t=r.state)}}return this.Ar.er(e),this.gr(),t}removeLocalQueryTarget(e){this.Ar.nr(e),this.gr()}isLocalQueryTarget(e){return this.Ar.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ml(this.persistenceKey,e))}updateQueryState(e,t,n){this.Rr(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Er(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.br(e)}notifyBundleLoaded(e){this.Pr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ir),this.removeItem(this.ar),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Pr("SharedClientState","READ",e,t),t}setItem(e,t){Pr("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Pr("SharedClientState","REMOVE",e),this.storage.removeItem(e)}rr(e){const t=e;if(t.storageArea===this.storage){if(Pr("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ar)return void Lr("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Hs.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.lr.test(t.key)){if(null==t.newValue){const e=this.vr(t.key);return this.Vr(e,null)}{const e=this.Sr(t.key,t.newValue);if(e)return this.Vr(e.clientId,e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Dr(t.key,t.newValue);if(e)return this.Cr(e)}}else if(this._r.test(t.key)){if(null!==t.newValue){const e=this.Nr(t.key,t.newValue);if(e)return this.kr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.yr(t.newValue);if(e)return this.pr(e)}}else if(t.key===this.hr){const e=function(e){let t=Li.at;if(null!=e)try{const n=JSON.parse(e);Vr("number"==typeof n),t=n}catch(e){Lr("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Li.at&&this.sequenceNumberHandler(e)}else if(t.key===this.mr){const e=this.Or(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Mr(e))))}}else this.cr.push(t)}))}}get Ar(){return this.ur.get(this.sr)}gr(){this.setItem(this.ar,this.Ar.tr())}Tr(e,t,n){const r=new Ul(this.currentUser,e,t,n),i=Fl(this.persistenceKey,this.currentUser,e);this.setItem(i,r.tr())}Er(e){const t=Fl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}br(e){const t={clientId:this.sr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Rr(e,t,n){const r=Ml(this.persistenceKey,e),i=new Vl(e,t,n);this.setItem(r,i.tr())}Pr(e){const t=JSON.stringify(Array.from(e));this.setItem(this.mr,t)}vr(e){const t=this.lr.exec(e);return t?t[1]:null}Sr(e,t){const n=this.vr(e);return Bl.Zi(n,t)}Dr(e,t){const n=this.dr.exec(e),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return Ul.Zi(new Ar(i),r,t)}Nr(e,t){const n=this._r.exec(e),r=Number(n[1]);return Vl.Zi(r,t)}yr(e){return jl.Zi(e)}Or(e){return JSON.parse(e)}async Cr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Fr(e.batchId,e.state,e.error);Pr("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}kr(e){return this.syncEngine.$r(e.targetId,e.state,e.error)}Vr(e,t){const n=t?this.ur.insert(e,t):this.ur.remove(e),r=this.Ir(this.ur),i=this.Ir(n),s=[],o=[];return i.forEach((e=>{r.has(e)||s.push(e)})),r.forEach((e=>{i.has(e)||o.push(e)})),this.syncEngine.Br(s,o).then((()=>{this.ur=n}))}pr(e){this.ur.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ir(e){let t=pa();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class Wl{constructor(){this.Lr=new $l,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,t,n){this.Ur[e]=t}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new $l,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){Pr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){Pr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.oo=t+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,t,n,r,i){const s=this.ho(e,t);Pr("RestConnection","Sending: ",s,n);const o={};return this.lo(o,r,i),this.fo(e,s,o,n).then((e=>(Pr("RestConnection","Received: ",e),e)),(t=>{throw Fr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}_o(e,t,n,r,i,s){return this.ao(e,t,n,r,i)}lo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ho(e,t){const n=Hl[e];return`${this.oo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,t,n,r){return new Promise(((i,s)=>{const o=new Cr;o.setWithCredentials(!0),o.listenOnce(Ir.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case _r.NO_ERROR:const t=o.getResponseJson();Pr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case _r.TIMEOUT:Pr("Connection",'RPC "'+e+'" timed out'),s(new qr($r.DEADLINE_EXCEEDED,"Request time out"));break;case _r.HTTP_ERROR:const n=o.getStatus();if(Pr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values($r).indexOf(t)>=0?t:$r.UNKNOWN}(e.status);s(new qr(t,e.message))}else s(new qr($r.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new qr($r.UNAVAILABLE,"Connection failed."));break;default:Ur()}}finally{Pr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}wo(e,t,n){const r=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=wr(),s=br(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Sr({})),this.lo(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const a=r.join("");Pr("Connection","Creating WebChannel: "+a,o);const c=i.createWebChannel(a,o);let u=!1,l=!1;const h=new Kl({Hr:e=>{l?Pr("Connection","Not sending because WebChannel is closed:",e):(u||(Pr("Connection","Opening WebChannel transport."),c.open(),u=!0),Pr("Connection","WebChannel sending:",e),c.send(e))},Jr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return d(c,kr.EventType.OPEN,(()=>{l||Pr("Connection","WebChannel transport opened.")})),d(c,kr.EventType.CLOSE,(()=>{l||(l=!0,Pr("Connection","WebChannel transport closed"),h.io())})),d(c,kr.EventType.ERROR,(e=>{l||(l=!0,Fr("Connection","WebChannel transport errored:",e),h.io(new qr($r.UNAVAILABLE,"The operation could not be completed")))})),d(c,kr.EventType.MESSAGE,(e=>{var t;if(!l){const n=e.data[0];Vr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){Pr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=Jo[e];if(void 0!==t)return ea(t)}(e),n=i.message;void 0===t&&(t=$r.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),l=!0,h.io(new qr(t,n)),c.close()}else Pr("Connection","WebChannel received:",n),h.ro(n)}})),d(s,Er.STAT_EVENT,(e=>{e.stat===Tr.PROXY?Pr("Connection","Detected buffering proxy"):e.stat===Tr.NOPROXY&&Pr("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){return"undefined"!=typeof window?window:null}function Jl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e){return new ka(e,!0)}class Zl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Hs=e,this.timerId=t,this.mo=n,this.yo=r,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const t=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),r=Math.max(0,t-n);r>0&&Pr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,r,(()=>(this.Eo=Date.now(),e()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t,n,r,i,s,o,a){this.Hs=e,this.vo=n,this.Vo=r,this.So=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new Zl(e,t)}ko(){return 1===this.state||5===this.state||this.Oo()}Oo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&null===this.Co&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.Bo())))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,t){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==e?this.No.reset():t&&t.code===$r.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):t&&t.code===$r.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),t=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Do===t&&this.Qo(e,n)}),(t=>{e((()=>{const e=new qr($r.UNKNOWN,"Fetching auth token failed: "+t.message);return this.jo(e)}))}))}Qo(e,t){const n=this.Go(this.Do);this.stream=this.Wo(e,t),this.stream.Yr((()=>{n((()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.Oo()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((e=>{n((()=>this.jo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Mo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(e){return Pr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return t=>{this.Hs.enqueueAndForget((()=>this.Do===e?t():(Pr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class th extends eh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.It=i}Wo(e,t){return this.So.wo("Listen",e,t)}onMessage(e){this.No.reset();const t=$a(this.It,e),n=function(e){if(!("targetChange"in e))return si.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?si.min():t.readTime?Ra(t.readTime):si.min()}(e);return this.listener.zo(t,n)}Ho(e){const t={};t.database=Ma(this.It),t.addTarget=function(e,t){let n;const r=t.target;return n=Ls(r)?{documents:Ga(e,r)}:{query:Ha(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=xa(e,t.resumeToken):t.snapshotVersion.compareTo(si.min())>0&&(n.readTime=Ca(e,t.snapshotVersion.toTimestamp())),n}(this.It,e);const n=Qa(this.It,e);n&&(t.labels=n),this.Lo(t)}Jo(e){const t={};t.database=Ma(this.It),t.removeTarget=e,this.Lo(t)}}class nh extends eh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.It=i,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,t){return this.So.wo("Write",e,t)}onMessage(e){if(Vr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const t=za(e.writeResults,e.commitTime),n=Ra(e.commitTime);return this.listener.tu(n,t)}return Vr(!e.writeResults||0===e.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=Ma(this.It),this.Lo(e)}Zo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>qa(this.It,e)))};this.Lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.So=n,this.It=r,this.su=!1}iu(){if(this.su)throw new qr($r.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,t,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.So.ao(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new qr($r.UNKNOWN,e.toString())}))}_o(e,t,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.So._o(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===$r.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new qr($r.UNKNOWN,e.toString())}))}terminate(){this.su=!0}}class ih{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){0===this.ru&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve()))))}lu(e){"Online"===this.state?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,"Online"===e&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Lr(t),this.uu=!1):Pr("OnlineStateTracker",t)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.qr((e=>{n.enqueueAndForget((async()=>{ph(this)&&(Pr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=jr(e);t.wu.add(4),await ah(t),t.yu.set("Unknown"),t.wu.delete(4),await oh(t)}(this))}))})),this.yu=new ih(n,r)}}async function oh(e){if(ph(e))for(const t of e.mu)await t(!0)}async function ah(e){for(const t of e.mu)await t(!1)}function ch(e,t){const n=jr(e);n._u.has(t.targetId)||(n._u.set(t.targetId,t),fh(n)?dh(n):Oh(n).Oo()&&lh(n,t))}function uh(e,t){const n=jr(e),r=Oh(n);n._u.delete(t),r.Oo()&&hh(n,t),0===n._u.size&&(r.Oo()?r.$o():ph(n)&&n.yu.set("Unknown"))}function lh(e,t){e.pu.Mt(t.targetId),Oh(e).Ho(t)}function hh(e,t){e.pu.Mt(t),Oh(e).Jo(t)}function dh(e){e.pu=new _a({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),se:t=>e._u.get(t)||null}),Oh(e).start(),e.yu.cu()}function fh(e){return ph(e)&&!Oh(e).ko()&&e._u.size>0}function ph(e){return 0===jr(e).wu.size}function mh(e){e.pu=void 0}async function gh(e){e._u.forEach(((t,n)=>{lh(e,t)}))}async function vh(e,t){mh(e),fh(e)?(e.yu.lu(t),dh(e)):e.yu.set("Unknown")}async function yh(e,t,n){if(e.yu.set("Online"),t instanceof wa&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e._u.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e._u.delete(r),e.pu.removeTarget(r))}(e,t)}catch(n){Pr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await wh(e,n)}else if(t instanceof va?e.pu.Gt(t):t instanceof ya?e.pu.Yt(t):e.pu.Wt(t),!n.isEqual(si.min()))try{const t=await El(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.pu.te(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e._u.get(r);i&&e._u.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e._u.get(t);if(!n)return;e._u.set(t,n.withResumeToken(Hi.EMPTY_BYTE_STRING,n.snapshotVersion)),hh(e,t);const r=new Mc(n.target,t,1,n.sequenceNumber);lh(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Pr("RemoteStore","Failed to raise snapshot:",t),await wh(e,t)}}async function wh(e,t,n){if(!xi(t))throw t;e.wu.add(1),await ah(e),e.yu.set("Offline"),n||(n=()=>El(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Pr("RemoteStore","Retrying IndexedDB access"),await n(),e.wu.delete(1),await oh(e)}))}function bh(e,t){return t().catch((n=>wh(e,n,t)))}async function _h(e){const t=jr(e),n=Dh(t);let r=t.du.length>0?t.du[t.du.length-1].batchId:-1;for(;Ih(t);)try{const e=await kl(t.localStore,r);if(null===e){0===t.du.length&&n.$o();break}r=e.batchId,Eh(t,e)}catch(e){await wh(t,e)}Th(t)&&Sh(t)}function Ih(e){return ph(e)&&e.du.length<10}function Eh(e,t){e.du.push(t);const n=Dh(e);n.Oo()&&n.Xo&&n.Zo(t.mutations)}function Th(e){return ph(e)&&!Dh(e).ko()&&e.du.length>0}function Sh(e){Dh(e).start()}async function kh(e){Dh(e).nu()}async function Ch(e){const t=Dh(e);for(const n of e.du)t.Zo(n.mutations)}async function xh(e,t,n){const r=e.du.shift(),i=Lc.from(r,t,n);await bh(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await _h(e)}async function Ah(e,t){t&&Dh(e).Xo&&await async function(e,t){if(n=t.code,Zo(n)&&n!==$r.ABORTED){const n=e.du.shift();Dh(e).Fo(),await bh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await _h(e)}var n}(e,t),Th(e)&&Sh(e)}async function Rh(e,t){const n=jr(e);n.asyncQueue.verifyOperationInProgress(),Pr("RemoteStore","RemoteStore received new credentials");const r=ph(n);n.wu.add(3),await ah(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.wu.delete(3),await oh(n)}async function Nh(e,t){const n=jr(e);t?(n.wu.delete(2),await oh(n)):t||(n.wu.add(2),await ah(n),n.yu.set("Unknown"))}function Oh(e){return e.Iu||(e.Iu=function(e,t,n){const r=jr(e);return r.iu(),new th(t,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Yr:gh.bind(null,e),Zr:vh.bind(null,e),zo:yh.bind(null,e)}),e.mu.push((async t=>{t?(e.Iu.Fo(),fh(e)?dh(e):e.yu.set("Unknown")):(await e.Iu.stop(),mh(e))}))),e.Iu}function Dh(e){return e.Tu||(e.Tu=function(e,t,n){const r=jr(e);return r.iu(),new nh(t,r.So,r.authCredentials,r.appCheckCredentials,r.It,n)}(e.datastore,e.asyncQueue,{Yr:kh.bind(null,e),Zr:Ah.bind(null,e),eu:Ch.bind(null,e),tu:xh.bind(null,e)}),e.mu.push((async t=>{t?(e.Tu.Fo(),await _h(e)):(await e.Tu.stop(),e.du.length>0&&(Pr("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))}))),e.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ph{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new Ph(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new qr($r.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lh(e,t){if(Lr("AsyncQueue",`${t}: ${e}`),xi(e))return new qr($r.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.comparator=e?(t,n)=>e(t,n)||li.comparator(t.key,n.key):(e,t)=>li.comparator(e.key,t.key),this.keyedMap=sa(),this.sortedSet=new Vi(this.comparator)}static emptySet(e){return new Fh(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Fh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Fh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(){this.Eu=new Vi(li.comparator)}track(e){const t=e.doc.key,n=this.Eu.get(t);n?0!==e.type&&3===n.type?this.Eu=this.Eu.insert(t,e):3===e.type&&1!==n.type?this.Eu=this.Eu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Eu=this.Eu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Eu=this.Eu.remove(t):1===e.type&&2===n.type?this.Eu=this.Eu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Eu=this.Eu.insert(t,{type:2,doc:e.doc}):Ur():this.Eu=this.Eu.insert(t,e)}Au(){const e=[];return this.Eu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Uh{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Uh(e,t,Fh.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.Ru=void 0,this.listeners=[]}}class Bh{constructor(){this.queries=new ta((e=>lo(e)),uo),this.onlineState="Unknown",this.bu=new Set}}async function jh(e,t){const n=jr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Vh),i)try{s.Ru=await n.onListen(r)}catch(e){const n=Lh(e,`Initialization of query '${ho(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Pu(n.onlineState),s.Ru&&t.vu(s.Ru)&&zh(n)}async function $h(e,t){const n=jr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qh(e,t){const n=jr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.vu(i)&&(r=!0);t.Ru=i}}r&&zh(n)}function Wh(e,t,n){const r=jr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function zh(e){e.bu.forEach((e=>{e.next()}))}class Gh{constructor(e,t,n){this.query=e,this.Vu=t,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Uh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),t=!0):this.xu(e,this.onlineState)&&(this.Nu(e),t=!0),this.Du=e,t}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),t=!0),t}xu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Cu(e){if(e.docChanges.length>0)return!0;const t=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Nu(e){e=Uh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e,t){this.payload=e,this.byteLength=t}Ou(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.It=e}Ji(e){return Pa(this.It,e)}Yi(e){return e.metadata.exists?Ba(this.It,e.document,!1):As.newNoDocument(this.Ji(e.metadata.name),this.Xi(e.metadata.readTime))}Xi(e){return Ra(e)}}class Qh{constructor(e,t,n){this.Mu=e,this.localStore=t,this.It=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Yh(e)}Fu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const n=ai.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}$u(e){const t=new Map,n=new Kh(this.It);for(const r of e)if(r.metadata.queries){const e=n.Ji(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||da()).add(e);t.set(n,r)}}return t}async complete(){const e=await Dl(this.localStore,new Kh(this.It),this.documents,this.Mu.id),t=this.$u(this.documents);for(const n of this.queries)await Pl(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Bu:this.collectionGroups,Lu:e}}}function Yh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e){this.key=e}}class Xh{constructor(e){this.key=e}}class Zh{constructor(e,t){this.query=e,this.Uu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=da(),this.mutatedKeys=da(),this.Gu=mo(e),this.Qu=new Fh(this.Gu)}get ju(){return this.Uu}Wu(e,t){const n=t?t.zu:new Mh,r=t?t.Qu:this.Qu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),l=fo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Hu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Gu(l,a)>0||c&&this.Gu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Qu:s,zu:n,$i:o,mutatedKeys:i}}Hu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const i=e.zu.Au();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ur()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Gu(e.doc,t.doc))),this.Ju(n);const s=t?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new Uh(this.query,e.Qu,r,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:s}:{Xu:s}}Pu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Mh,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach((e=>this.Uu=this.Uu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Uu=this.Uu.delete(e))),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=da(),this.Qu.forEach((e=>{this.Zu(e.key)&&(this.Ku=this.Ku.add(e.key))}));const t=[];return e.forEach((e=>{this.Ku.has(e)||t.push(new Xh(e))})),this.Ku.forEach((n=>{e.has(n)||t.push(new Jh(n))})),t}tc(e){this.Uu=e.Hi,this.Ku=da();const t=this.Wu(e.documents);return this.applyChanges(t,!0)}ec(){return Uh.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class ed{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class td{constructor(e){this.key=e,this.nc=!1}}class nd{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.sc={},this.ic=new ta((e=>lo(e)),uo),this.rc=new Map,this.oc=new Set,this.uc=new Vi(li.comparator),this.cc=new Map,this.ac=new tl,this.hc={},this.lc=new Map,this.fc=Nu.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function rd(e,t){const n=Od(e);let r,i;const s=n.ic.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const e=await Cl(n.localStore,ao(t));n.isPrimaryClient&&ch(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await id(n,t,r,"current"===s,e.resumeToken)}return i}async function id(e,t,n,r,i){e._c=(t,n,r)=>async function(e,t,n,r){let i=t.view.Wu(n);i.$i&&(i=await Al(e.localStore,t.query,!1).then((({documents:e})=>t.view.Wu(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return vd(e,t.targetId,o.Xu),o.snapshot}(e,t,n,r);const s=await Al(e.localStore,t,!0),o=new Zh(t,s.Hi),a=o.Wu(s.documents),c=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);vd(e,n,u.Xu);const l=new ed(t,n,o);return e.ic.set(t,l),e.rc.has(n)?e.rc.get(n).push(t):e.rc.set(n,[t]),u.snapshot}async function sd(e,t){const n=jr(e),r=n.ic.get(t),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter((e=>!uo(e,t)))),void n.ic.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await xl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),uh(n.remoteStore,r.targetId),md(n,r.targetId)})).catch(Ii)):(md(n,r.targetId),await xl(n.localStore,r.targetId,!0))}async function od(e,t,n){const r=Dd(e);try{const e=await function(e,t){const n=jr(e),r=ii.now(),i=t.reduce(((e,t)=>e.add(t.key)),da());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=ra(),c=da();return n.Gi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=jo(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Wo(e.key,t,xs(t.value.mapValue),Lo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:oa(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.hc[e.currentUser.toKey()];r||(r=new Vi(ti)),r=r.insert(t,n),e.hc[e.currentUser.toKey()]=r}(r,e.batchId,n),await bd(r,e.changes),await _h(r.remoteStore)}catch(e){const t=Lh(e,"Failed to persist write");n.reject(t)}}async function ad(e,t){const n=jr(e);try{const e=await Tl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.cc.get(t);r&&(Vr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.nc=!0:e.modifiedDocuments.size>0?Vr(r.nc):e.removedDocuments.size>0&&(Vr(r.nc),r.nc=!1))})),await bd(n,e,t)}catch(e){await Ii(e)}}function cd(e,t,n){const r=jr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ic.forEach(((n,r)=>{const i=r.view.Pu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=jr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Pu(t)&&(r=!0)})),r&&zh(n)}(r.eventManager,t),e.length&&r.sc.zo(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ud(e,t,n){const r=jr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.cc.get(t),s=i&&i.key;if(s){let e=new Vi(li.comparator);e=e.insert(s,As.newNoDocument(s,si.min()));const n=da().add(s),i=new ma(si.min(),new Map,new $i(ti),e,n);await ad(r,i),r.uc=r.uc.remove(s),r.cc.delete(t),wd(r)}else await xl(r.localStore,t,!1).then((()=>md(r,t,n))).catch(Ii)}async function ld(e,t){const n=jr(e),r=t.batch.batchId;try{const e=await Il(n.localStore,t);pd(n,r,null),fd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bd(n,e)}catch(e){await Ii(e)}}async function hd(e,t,n){const r=jr(e);try{const e=await function(e,t){const n=jr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Vr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);pd(r,t,n),fd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await bd(r,e)}catch(n){await Ii(n)}}async function dd(e,t){const n=jr(e);ph(n.remoteStore)||Pr("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=jr(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const r=n.lc.get(e)||[];r.push(t),n.lc.set(e,r)}catch(e){const n=Lh(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function fd(e,t){(e.lc.get(t)||[]).forEach((e=>{e.resolve()})),e.lc.delete(t)}function pd(e,t,n){const r=jr(e);let i=r.hc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.hc[r.currentUser.toKey()]=i}}function md(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.rc.get(t))e.ic.delete(r),n&&e.sc.wc(r,n);e.rc.delete(t),e.isPrimaryClient&&e.ac.ls(t).forEach((t=>{e.ac.containsKey(t)||gd(e,t)}))}function gd(e,t){e.oc.delete(t.path.canonicalString());const n=e.uc.get(t);null!==n&&(uh(e.remoteStore,n),e.uc=e.uc.remove(t),e.cc.delete(n),wd(e))}function vd(e,t,n){for(const r of n)r instanceof Jh?(e.ac.addReference(r.key,t),yd(e,r)):r instanceof Xh?(Pr("SyncEngine","Document no longer in limbo: "+r.key),e.ac.removeReference(r.key,t),e.ac.containsKey(r.key)||gd(e,r.key)):Ur()}function yd(e,t){const n=t.key,r=n.path.canonicalString();e.uc.get(n)||e.oc.has(r)||(Pr("SyncEngine","New document in limbo: "+n),e.oc.add(r),wd(e))}function wd(e){for(;e.oc.size>0&&e.uc.size<e.maxConcurrentLimboResolutions;){const t=e.oc.values().next().value;e.oc.delete(t);const n=new li(ai.fromString(t)),r=e.fc.next();e.cc.set(r,new td(n)),e.uc=e.uc.insert(n,r),ch(e.remoteStore,new Mc(ao(to(n.path)),r,2,Li.at))}}async function bd(e,t,n){const r=jr(e),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach(((e,a)=>{o.push(r._c(a,t,n).then((e=>{if((e||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=vl.Ci(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.sc.zo(i),await async function(e,t){const n=jr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ei.forEach(t,(t=>Ei.forEach(t.Si,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ei.forEach(t.Di,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!xi(e))throw e;Pr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.Ui.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ui=n.Ui.insert(e,i)}}}(r.localStore,s))}async function _d(e,t){const n=jr(e);if(!n.currentUser.isEqual(t)){Pr("SyncEngine","User change. New user:",t.toKey());const e=await _l(n.localStore,t);n.currentUser=t,function(e,t){e.lc.forEach((e=>{e.forEach((e=>{e.reject(new qr($r.CANCELLED,t))}))})),e.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await bd(n,e.ji)}}function Id(e,t){const n=jr(e),r=n.cc.get(t);if(r&&r.nc)return da().add(r.key);{let e=da();const r=n.rc.get(t);if(!r)return e;for(const t of r){const r=n.ic.get(t);e=e.unionWith(r.view.ju)}return e}}async function Ed(e,t){const n=jr(e),r=await Al(n.localStore,t.query,!0),i=t.view.tc(r);return n.isPrimaryClient&&vd(n,t.targetId,i.Xu),i}async function Td(e,t){const n=jr(e);return Nl(n.localStore,t).then((e=>bd(n,e)))}async function Sd(e,t,n,r){const i=jr(e),s=await function(e,t){const n=jr(e),r=jr(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>r.Tn(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Ei.resolve(null)))))}(i.localStore,t);null!==s?("pending"===n?await _h(i.remoteStore):"acknowledged"===n||"rejected"===n?(pd(i,t,r||null),fd(i,t),function(e,t){jr(jr(e).mutationQueue).An(t)}(i.localStore,t)):Ur(),await bd(i,s)):Pr("SyncEngine","Cannot apply mutation batch with id: "+t)}async function kd(e,t){const n=jr(e);if(Od(n),Dd(n),!0===t&&!0!==n.dc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Cd(n,e.toArray());n.dc=!0,await Nh(n.remoteStore,!0);for(const r of t)ch(n.remoteStore,r)}else if(!1===t&&!1!==n.dc){const e=[];let t=Promise.resolve();n.rc.forEach(((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?e.push(i):t=t.then((()=>(md(n,i),xl(n.localStore,i,!0)))),uh(n.remoteStore,i)})),await t,await Cd(n,e),function(e){const t=jr(e);t.cc.forEach(((e,n)=>{uh(t.remoteStore,n)})),t.ac.fs(),t.cc=new Map,t.uc=new Vi(li.comparator)}(n),n.dc=!1,await Nh(n.remoteStore,!1)}}async function Cd(e,t,n){const r=jr(e),i=[],s=[];for(const o of t){let e;const t=r.rc.get(o);if(t&&0!==t.length){e=await Cl(r.localStore,ao(t[0]));for(const e of t){const t=r.ic.get(e),n=await Ed(r,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Rl(r.localStore,o);e=await Cl(r.localStore,t),await id(r,xd(t),o,!1,e.resumeToken)}i.push(e)}return r.sc.zo(s),i}function xd(e){return eo(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function Ad(e){const t=jr(e);return jr(jr(t.localStore).persistence).vi()}async function Rd(e,t,n,r){const i=jr(e);if(i.dc)return void Pr("SyncEngine","Ignoring unexpected query state notification.");const s=i.rc.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await Nl(i.localStore,po(s[0])),r=ma.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Hi.EMPTY_BYTE_STRING);await bd(i,e,r);break}case"rejected":await xl(i.localStore,t,!0),md(i,t,r);break;default:Ur()}}async function Nd(e,t,n){const r=Od(e);if(r.dc){for(const e of t){if(r.rc.has(e)){Pr("SyncEngine","Adding an already active target "+e);continue}const t=await Rl(r.localStore,e),n=await Cl(r.localStore,t);await id(r,xd(t),n.targetId,!1,n.resumeToken),ch(r.remoteStore,n)}for(const e of n)r.rc.has(e)&&await xl(r.localStore,e,!1).then((()=>{uh(r.remoteStore,e),md(r,e)})).catch(Ii)}}function Od(e){const t=jr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ad.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Id.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ud.bind(null,t),t.sc.zo=qh.bind(null,t.eventManager),t.sc.wc=Wh.bind(null,t.eventManager),t}function Dd(e){const t=jr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ld.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hd.bind(null,t),t}function Pd(e,t,n){const r=jr(e);(async function(e,t,n){try{const r=await t.getMetadata();if(await function(e,t){const n=jr(e),r=Ra(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.Ns.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(r)>=0))}(e.localStore,r))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(r)),Promise.resolve(new Set);n._updateProgress(Yh(r));const i=new Qh(r,e.localStore,t.It);let s=await t.mc();for(;s;){const e=await i.Fu(s);e&&n._updateProgress(e),s=await t.mc()}const o=await i.complete();return await bd(e,o.Lu,void 0),await function(e,t){const n=jr(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.Ns.saveBundleMetadata(e,t)))}(e.localStore,r),n._completeWith(o.progress),Promise.resolve(o.Bu)}catch(e){return Fr("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,t,n).then((e=>{r.sharedClientState.notifyBundleLoaded(e)}))}class Ld{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Xl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,t){return null}Ec(e,t){return null}Ic(e){return bl(this.persistence,new yl,e.initialUser,this.It)}yc(e){return new al(ul.Bs,this.It)}gc(e){return new Wl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fd extends Ld{constructor(e,t,n){super(),this.Ac=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ac.initialize(this,e),await Dd(this.Ac.syncEngine),await _h(this.Ac.remoteStore),await this.persistence.li((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}Ic(e){return bl(this.persistence,new yl,e.initialUser,this.It)}Tc(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Uu(n,e.asyncQueue,t)}Ec(e,t){const n=new Pi(t,this.persistence);return new Di(e.asyncQueue,n)}yc(e){const t=gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Eu.withCacheSize(this.cacheSizeBytes):Eu.DEFAULT;return new fl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Yl(),Jl(),this.It,this.sharedClientState,!!this.forceOwnership)}gc(e){return new Wl}}class Md extends Fd{constructor(e,t){super(e,t,!1),this.Ac=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ac.syncEngine;this.sharedClientState instanceof ql&&(this.sharedClientState.syncEngine={Fr:Sd.bind(null,t),$r:Rd.bind(null,t),Br:Nd.bind(null,t),vi:Ad.bind(null,t),Mr:Td.bind(null,t)},await this.sharedClientState.start()),await this.persistence.li((async e=>{await kd(this.Ac.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}gc(e){const t=Yl();if(!ql.C(t))throw new qr($r.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ql(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class Ud{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>cd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=_d.bind(null,this.syncEngine),await Nh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Bh}createDatastore(e){const t=Xl(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ql(r));var r;return function(e,t,n,r){return new rh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>cd(this.syncEngine,e,0),s=Gl.C()?new Gl:new zl,new sh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new nd(e,t,n,r,i,s);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=jr(e);Pr("RemoteStore","RemoteStore shutting down."),t.wu.add(5),await ah(t),t.gu.shutdown(),t.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(e,t,n){if(!n)throw new qr($r.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Bd(e,t,n,r){if(!0===t&&!0===r)throw new qr($r.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function jd(e){if(!li.isDocumentKey(e))throw new qr($r.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function $d(e){if(li.isDocumentKey(e))throw new qr($r.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function qd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Ur()}function Wd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new qr($r.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qd(e);throw new qr($r.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function zd(e,t){if(t<=0)throw new qr($r.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Map;class Hd{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new qr($r.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new qr($r.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Bd("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new qr($r.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new qr($r.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hd(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Gr;switch(e.type){case"gapi":const t=e.client;return new Yr(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new qr($r.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Gd.get(e);t&&(Pr("ComponentProvider","Removing Datastore"),Gd.delete(e),t.terminate())}(this),Promise.resolve()}}function Qd(e,t,n,r={}){var i;const s=(e=Wd(e,Kd))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&Fr("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=Ar.MOCK_USER;else{t=(0,a.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new qr($r.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ar(s)}e._authCredentials=new Hr(new zr(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xd(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yd(this.firestore,e,this._key)}}class Jd{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Jd(this.firestore,e,this._query)}}class Xd extends Jd{constructor(e,t,n){super(e,t,to(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yd(this.firestore,null,new li(e))}withConverter(e){return new Xd(this.firestore,e,this._path)}}function Zd(e,t,...n){if(e=(0,a.m9)(e),Vd("collection","path",t),e instanceof Kd){const r=ai.fromString(t,...n);return $d(r),new Xd(e,null,r)}{if(!(e instanceof Yd||e instanceof Xd))throw new qr($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ai.fromString(t,...n));return $d(r),new Xd(e.firestore,null,r)}}function ef(e,t){if(e=Wd(e,Kd),Vd("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new qr($r.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Jd(e,null,function(e){return new Zs(ai.emptyPath(),e)}(t))}function tf(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=ei.R()),Vd("doc","path",t),e instanceof Kd){const r=ai.fromString(t,...n);return jd(r),new Yd(e,null,new li(r))}{if(!(e instanceof Yd||e instanceof Xd))throw new qr($r.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ai.fromString(t,...n));return jd(r),new Yd(e.firestore,e instanceof Xd?e.converter:null,new li(r))}}function nf(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),(e instanceof Yd||e instanceof Xd)&&(t instanceof Yd||t instanceof Xd)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function rf(e,t){return e=(0,a.m9)(e),t=(0,a.m9)(t),e instanceof Jd&&t instanceof Jd&&e.firestore===t.firestore&&uo(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function sf(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t){this.Pc=e,this.It=t,this.metadata=new Wr,this.buffer=new Uint8Array,this.vc=new TextDecoder("utf-8"),this.Vc().then((e=>{e&&e.Ou()?this.metadata.resolve(e.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.payload)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Pc.cancel()}async getMetadata(){return this.metadata.promise}async mc(){return await this.getMetadata(),this.Vc()}async Vc(){const e=await this.Sc();if(null===e)return null;const t=this.vc.decode(e),n=Number(t);isNaN(n)&&this.Dc(`length string (${t}) is not valid number`);const r=await this.Cc(n);return new Hh(JSON.parse(r),e.length+n)}xc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Sc(){for(;this.xc()<0;)if(await this.Nc())break;if(0===this.buffer.length)return null;const e=this.xc();e<0&&this.Dc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Cc(e){for(;this.buffer.length<e;)await this.Nc()&&this.Dc("Reached the end of bundle when more is expected.");const t=this.vc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Dc(e){throw this.Pc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Nc(){const e=await this.Pc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new qr($r.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=jr(e),r=Ma(n.It)+"/documents",i={documents:t.map((e=>Da(n.It,e)))},s=await n._o("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=ja(n.It,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Vr(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ko(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=li.fromPath(t);this.mutations.push(new Qo(n,this.precondition(n)))})),await async function(e,t){const n=jr(e),r=Ma(n.It)+"/documents",i={writes:t.map((e=>qa(n.It,e)))};await n.ao("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Ur();t=si.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new qr($r.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(si.min())?Lo.exists(!1):Lo.updateTime(t):Lo.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(si.min()))throw new qr($r.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Lo.updateTime(t)}return Lo.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,n,r,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=i,this.kc=n.maxAttempts,this.No=new Zl(this.asyncQueue,"transaction_retry")}run(){this.kc-=1,this.Oc()}Oc(){this.No.Ro((async()=>{const e=new cf(this.datastore),t=this.Mc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Fc(e)}))))})).catch((e=>{this.Fc(e)}))}))}Mc(e){try{const t=this.updateFunction(e);return!rs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Fc(e){this.kc>0&&this.$c(e)?(this.kc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Oc(),Promise.resolve())))):this.deferred.reject(e)}$c(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||!Zo(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ar.UNAUTHENTICATED,this.clientId=ei.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Pr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Pr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new qr($r.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Lh(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function hf(e,t){e.asyncQueue.verifyOperationInProgress(),Pr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await _l(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function df(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ff(e);Pr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Rh(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Rh(t.remoteStore,n))),e.onlineComponents=t}async function ff(e){return e.offlineComponents||(Pr("FirestoreClient","Using default OfflineComponentProvider"),await hf(e,new Ld)),e.offlineComponents}async function pf(e){return e.onlineComponents||(Pr("FirestoreClient","Using default OnlineComponentProvider"),await df(e,new Ud)),e.onlineComponents}function mf(e){return ff(e).then((e=>e.persistence))}function gf(e){return ff(e).then((e=>e.localStore))}function vf(e){return pf(e).then((e=>e.remoteStore))}function yf(e){return pf(e).then((e=>e.syncEngine))}function wf(e){return pf(e).then((e=>e.datastore))}async function bf(e){const t=await pf(e),n=t.eventManager;return n.onListen=rd.bind(null,t.syncEngine),n.onUnlisten=sd.bind(null,t.syncEngine),n}function _f(e){return e.asyncQueue.enqueue((async()=>{const t=await mf(e),n=await vf(e);return t.setNetworkEnabled(!0),function(e){const t=jr(e);return t.wu.delete(0),oh(t)}(n)}))}function If(e){return e.asyncQueue.enqueue((async()=>{const t=await mf(e),n=await vf(e);return t.setNetworkEnabled(!1),async function(e){const t=jr(e);t.wu.add(0),await ah(t),t.yu.set("Offline")}(n)}))}function Ef(e,t){const n=new Wr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await function(e,t){const n=jr(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new qr($r.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const r=Lh(e,`Failed to get document '${t} from cache`);n.reject(r)}}(await gf(e),t,n))),n.promise}function Tf(e,t,n={}){const r=new Wr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new of({next:s=>{t.enqueueAndForget((()=>$h(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new qr($r.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new qr($r.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Gh(to(n.path),s,{includeMetadataChanges:!0,ku:!0});return jh(e,o)}(await bf(e),e.asyncQueue,t,n,r))),r.promise}function Sf(e,t){const n=new Wr;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const r=await Al(e,t,!0),i=new Zh(t,r.Hi),s=i.Wu(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const r=Lh(e,`Failed to execute query '${t} against cache`);n.reject(r)}}(await gf(e),t,n))),n.promise}function kf(e,t,n={}){const r=new Wr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new of({next:n=>{t.enqueueAndForget((()=>$h(e,o))),n.fromCache&&"server"===r.source?i.reject(new qr($r.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Gh(n,s,{includeMetadataChanges:!0,ku:!0});return jh(e,o)}(await bf(e),e.asyncQueue,t,n,r))),r.promise}function Cf(e,t){const n=new of(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){jr(e).bu.add(t),t.next()}(await bf(e),n))),()=>{n.bc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){jr(e).bu.delete(t)}(await bf(e),n)))}}function xf(e,t,n,r){const i=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new af(e,t)}(function(e,t){if(e instanceof Uint8Array)return sf(e,t);if(e instanceof ArrayBuffer)return sf(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Xl(t));e.asyncQueue.enqueueAndForget((async()=>{Pd(await yf(e),i,r)}))}function Af(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=jr(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.Ns.getNamedQuery(e,t)))}(await gf(e),t)))}class Rf{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new Zl(this,"async_queue_retry"),this.Wc=()=>{const e=Jl();e&&Pr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.No.Po()};const e=Jl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const t=Jl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise((()=>{}));const t=new Wr;return this.Hc((()=>this.Uc&&this.Qc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Lc.push(e),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(I){if(!xi(I))throw I;Pr("AsyncQueue","Operation failed with retryable error: "+I)}this.Lc.length>0&&this.No.Ro((()=>this.Jc()))}}Hc(e){const t=this.Bc.then((()=>(this.Gc=!0,e().catch((e=>{this.Kc=e,this.Gc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Lr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Gc=!1,e))))));return this.Bc=t,t}enqueueAfterDelay(e,t,n){this.zc(),this.jc.indexOf(e)>-1&&(t=0);const r=Ph.createAndSchedule(this,e,t,n,(e=>this.Yc(e)));return this.qc.push(r),r}zc(){this.Kc&&Ur()}verifyOperationInProgress(){}async Xc(){let e;do{e=this.Bc,await e}while(e!==this.Bc)}Zc(e){for(const t of this.qc)if(t.timerId===e)return!0;return!1}ta(e){return this.Xc().then((()=>{this.qc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.qc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Xc()}))}ea(e){this.jc.push(e)}Yc(e){const t=this.qc.indexOf(e);this.qc.splice(t,1)}}function Nf(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class Of{constructor(){this._progressObserver={},this._taskCompletionResolver=new Wr,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df=-1;class Pf extends Kd{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Rf,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mf(this),this._firestoreClient.terminate()}}function Lf(e,t){const n="object"==typeof e?e:(0,i.getApp)(),r="string"==typeof e?e:t||"(default)",s=(0,i._getProvider)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(0,a.P0)("firestore");e&&Qd(s,...e)}return s}function Ff(e){return e._firestoreClient||Mf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Mf(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new ts(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new lf(e._authCredentials,e._appCheckCredentials,e._queue,r)}function Uf(e,t){Hf(e=Wd(e,Pf));const n=Ff(e),r=e._freezeSettings(),i=new Ud;return Bf(n,i,new Fd(i,r.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function Vf(e){Hf(e=Wd(e,Pf));const t=Ff(e),n=e._freezeSettings(),r=new Ud;return Bf(t,r,new Md(r,n.cacheSizeBytes))}function Bf(e,t,n){const r=new Wr;return e.asyncQueue.enqueue((async()=>{try{await hf(e,n),await df(e,t),r.resolve()}catch(e){const n=e;if(!function(e){return"FirebaseError"===e.name?e.code===$r.FAILED_PRECONDITION||e.code===$r.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||(22===e.code||20===e.code||11===e.code)}(n))throw n;Fr("Error enabling offline persistence. Falling back to persistence disabled: "+n),r.reject(n)}})).then((()=>r.promise))}function jf(e){if(e._initialized&&!e._terminated)throw new qr($r.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Wr;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Si.C())return Promise.resolve();const t=e+"main";await Si.delete(t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(gl(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function $f(e){return function(e){const t=new Wr;return e.asyncQueue.enqueueAndForget((async()=>dd(await yf(e),t))),t.promise}(Ff(e=Wd(e,Pf)))}function qf(e){return _f(Ff(e=Wd(e,Pf)))}function Wf(e){return If(Ff(e=Wd(e,Pf)))}function zf(e,t){const n=Ff(e=Wd(e,Pf)),r=new Of;return xf(n,e._databaseId,t,r),r}function Gf(e,t){return Af(Ff(e=Wd(e,Pf)),t).then((t=>t?new Jd(e,null,t.query):null))}function Hf(e){if(e._initialized||e._terminated)throw new qr($r.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kf(Hi.fromBase64String(e))}catch(e){throw new qr($r.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Kf(Hi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new qr($r.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ui(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yf{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new qr($r.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new qr($r.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ti(this._lat,e._lat)||ti(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=/^__.*__$/;class Zf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Wo(e,this.data,this.fieldMask,t,this.fieldTransforms):new qo(e,this.data,t,this.fieldTransforms)}}class ep{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Wo(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ur()}}class np{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.It=n,this.ignoreUndefinedProperties=r,void 0===i&&this.na(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new np(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.ua(e),r}ca(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ia({path:n,oa:!1});return r.na(),r}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ip(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(0===e.length)throw this.ha("Document fields must not be empty");if(tp(this.sa)&&Xf.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class rp{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.It=n||Xl(e)}da(e,t,n,r=!1){return new np({sa:e,methodName:t,fa:n,path:ui.emptyPath(),oa:!1,la:r},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function ip(e){const t=e._freezeSettings(),n=Xl(e._databaseId);return new rp(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sp(e,t,n,r,i,s={}){const o=e.da(s.merge||s.mergeFields?2:0,t,n,i);yp("Data must be an object, but it was:",o,r);const a=gp(r,o);let c,u;if(s.merge)c=new zi(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=wp(t,r,n);if(!o.contains(i))throw new qr($r.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Ep(e,i)||e.push(i)}c=new zi(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Zf(new Cs(a),c,u)}class op extends Yf{_toFieldTransform(e){if(2!==e.sa)throw 1===e.sa?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof op}}function ap(e,t,n){return new np({sa:3,fa:t.settings.fa,methodName:e._methodName,oa:n},t.databaseId,t.It,t.ignoreUndefinedProperties)}class cp extends Yf{_toFieldTransform(e){return new Oo(e.path,new To)}isEqual(e){return e instanceof cp}}class up extends Yf{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=ap(this,e,!0),n=this._a.map((e=>mp(e,t))),r=new So(n);return new Oo(e.path,r)}isEqual(e){return this===e}}class lp extends Yf{constructor(e,t){super(e),this._a=t}_toFieldTransform(e){const t=ap(this,e,!0),n=this._a.map((e=>mp(e,t))),r=new Co(n);return new Oo(e.path,r)}isEqual(e){return this===e}}class hp extends Yf{constructor(e,t){super(e),this.wa=t}_toFieldTransform(e){const t=new Ao(e.It,wo(e.It,this.wa));return new Oo(e.path,t)}isEqual(e){return this===e}}function dp(e,t,n,r){const i=e.da(1,t,n);yp("Data must be an object, but it was:",i,r);const s=[],o=Cs.empty();Mi(r,((e,r)=>{const c=_p(t,e,n);r=(0,a.m9)(r);const u=i.ca(c);if(r instanceof op)s.push(c);else{const e=mp(r,u);null!=e&&(s.push(c),o.set(c,e))}}));const c=new zi(s);return new ep(o,c,i.fieldTransforms)}function fp(e,t,n,r,i,s){const o=e.da(1,t,n),c=[wp(t,r,n)],u=[i];if(s.length%2!=0)throw new qr($r.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(wp(t,s[a])),u.push(s[a+1]);const l=[],h=Cs.empty();for(let f=c.length-1;f>=0;--f)if(!Ep(l,c[f])){const e=c[f];let t=u[f];t=(0,a.m9)(t);const n=o.ca(e);if(t instanceof op)l.push(e);else{const r=mp(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new zi(l);return new ep(h,d,o.fieldTransforms)}function pp(e,t,n,r=!1){return mp(n,e.da(r?4:3,t))}function mp(e,t){if(vp(e=(0,a.m9)(e)))return yp("Unsupported field value:",t,e),gp(e,t);if(e instanceof Yf)return function(e,t){if(!tp(t.sa))throw t.ha(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ha(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.oa&&4!==t.sa)throw t.ha("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=mp(i,t.aa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return wo(t.It,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ii.fromDate(e);return{timestampValue:Ca(t.It,n)}}if(e instanceof ii){const n=new ii(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ca(t.It,n)}}if(e instanceof Jf)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Kf)return{bytesValue:xa(t.It,e._byteString)};if(e instanceof Yd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ha(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Na(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ha(`Unsupported field value: ${qd(e)}`)}(e,t)}function gp(e,t){const n={};return Ui(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Mi(e,((e,r)=>{const i=mp(r,t.ra(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function vp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ii||e instanceof Jf||e instanceof Kf||e instanceof Yd||e instanceof Yf)}function yp(e,t,n){if(!vp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=qd(n);throw"an object"===r?t.ha(e+" a custom object"):t.ha(e+" "+r)}}function wp(e,t,n){if((t=(0,a.m9)(t))instanceof Qf)return t._internalPath;if("string"==typeof t)return _p(e,t);throw Ip("Field path arguments must be of type string or ",e,!1,void 0,n)}const bp=new RegExp("[~\\*/\\[\\]]");function _p(e,t,n){if(t.search(bp)>=0)throw Ip(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Qf(...t.split("."))._internalPath}catch(r){throw Ip(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ip(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new qr($r.INVALID_ARGUMENT,a+e+c)}function Ep(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Yd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Sp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(kp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Sp extends Tp{data(){return super.data()}}function kp(e,t){return"string"==typeof t?_p(e,t):t instanceof Qf?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new qr($r.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xp{}function Ap(e,...t){for(const n of t)e=n._apply(e);return e}class Rp extends xp{constructor(e,t,n){super(),this.ma=e,this.ga=t,this.ya=n,this.type="where"}_apply(e){const t=ip(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new qr($r.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){zp(o,s);const t=[];for(const n of o)t.push(Wp(r,e,n));a={arrayValue:{values:t}}}else a=Wp(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||zp(o,s),a=pp(n,t,o,"in"===s||"not-in"===s);const c=Vs.create(i,s,a);return function(e,t){if(t.dt()){const n=io(e);if(null!==n&&!n.isEqual(t.field))throw new qr($r.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=ro(e);null!==r&&Gp(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new qr($r.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new qr($r.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,c),c}(e._query,"where",t,e.firestore._databaseId,this.ma,this.ga,this.ya);return new Jd(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Zs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Np(e,t,n){const r=t,i=kp("where",e);return new Rp(i,r,n)}class Op extends xp{constructor(e,t){super(),this.ma=e,this.pa=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new qr($r.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new qr($r.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Qs(t,n);return function(e,t){if(null===ro(e)){const n=io(e);null!==n&&Gp(e,n,t.field)}}(e,r),r}(e._query,this.ma,this.pa);return new Jd(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Zs(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Dp(e,t="asc"){const n=t,r=kp("orderBy",e);return new Op(r,n)}class Pp extends xp{constructor(e,t,n){super(),this.type=e,this.Ia=t,this.Ta=n}_apply(e){return new Jd(e.firestore,e.converter,co(e._query,this.Ia,this.Ta))}}function Lp(e){return zd("limit",e),new Pp("limit",e,"F")}function Fp(e){return zd("limitToLast",e),new Pp("limitToLast",e,"L")}class Mp extends xp{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){const t=qp(e,this.type,this.Ea,this.Aa);return new Jd(e.firestore,e.converter,function(e,t){return new Zs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function Up(...e){return new Mp("startAt",e,!0)}function Vp(...e){return new Mp("startAfter",e,!1)}class Bp extends xp{constructor(e,t,n){super(),this.type=e,this.Ea=t,this.Aa=n}_apply(e){const t=qp(e,this.type,this.Ea,this.Aa);return new Jd(e.firestore,e.converter,function(e,t){return new Zs(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function jp(...e){return new Bp("endBefore",e,!1)}function $p(...e){return new Bp("endAt",e,!0)}function qp(e,t,n,r){if(n[0]=(0,a.m9)(n[0]),n[0]instanceof Tp)return function(e,t,n,r,i){if(!r)throw new qr($r.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of oo(e))if(o.field.isKeyField())s.push(ms(t,r.key));else{const e=r.data.field(o.field);if(Xi(e))throw new qr($r.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new qr($r.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new Ks(s,i)}(e._query,e.firestore._databaseId,t,n[0]._document,r);{const i=ip(e.firestore);return function(e,t,n,r,i,s){const o=e.explicitOrderBy;if(i.length>o.length)throw new qr($r.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new qr($r.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!so(e)&&-1!==s.indexOf("/"))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(ai.fromString(s));if(!li.isDocumentKey(n))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new li(n);a.push(ms(t,i))}else{const e=pp(n,r,s);a.push(e)}}return new Ks(a,s)}(e._query,e.firestore._databaseId,i,t,n,r)}}function Wp(e,t,n){if("string"==typeof(n=(0,a.m9)(n))){if(""===n)throw new qr($r.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!so(t)&&-1!==n.indexOf("/"))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ai.fromString(n));if(!li.isDocumentKey(r))throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ms(e,new li(r))}if(n instanceof Yd)return ms(e,n._key);throw new qr($r.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qd(n)}.`)}function zp(e,t){if(!Array.isArray(e)||0===e.length)throw new qr($r.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new qr($r.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Gp(e,t,n){if(!n.isEqual(t))throw new qr($r.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{convertValue(e,t="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Yi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ur()}}convertObject(e,t){const n={};return Mi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Jf(Yi(e.latitude),Yi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Zi(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(es(e));default:return null}}convertTimestamp(e){const t=Qi(e);return new ii(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ai.fromString(e);Vr(ic(n));const r=new ns(n.get(1),n.get(3)),i=new li(n.popFirst(5));return r.isEqual(t)||Lr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Qp extends Hp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yd(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jp extends Tp{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Xp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(kp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Xp extends Jp{data(e={}){return super.data(e)}}class Zp{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Yp(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Xp(this._firestore,this._userDataWriter,n.key,n,new Yp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new qr($r.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new Xp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Yp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Xp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Yp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:em(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function em(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ur()}}function tm(e,t){return e instanceof Jp&&t instanceof Jp?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Zp&&t instanceof Zp&&e._firestore===t._firestore&&rf(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(e){e=Wd(e,Yd);const t=Wd(e.firestore,Pf);return Tf(Ff(t),e._key).then((n=>gm(t,e,n)))}class rm extends Hp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Yd(this.firestore,null,t)}}function im(e){e=Wd(e,Yd);const t=Wd(e.firestore,Pf),n=Ff(t),r=new rm(t);return Ef(n,e._key).then((n=>new Jp(t,r,e._key,n,new Yp(null!==n&&n.hasLocalMutations,!0),e.converter)))}function sm(e){e=Wd(e,Yd);const t=Wd(e.firestore,Pf);return Tf(Ff(t),e._key,{source:"server"}).then((n=>gm(t,e,n)))}function om(e){e=Wd(e,Jd);const t=Wd(e.firestore,Pf),n=Ff(t),r=new rm(t);return Cp(e._query),kf(n,e._query).then((n=>new Zp(t,r,e,n)))}function am(e){e=Wd(e,Jd);const t=Wd(e.firestore,Pf),n=Ff(t),r=new rm(t);return Sf(n,e._query).then((n=>new Zp(t,r,e,n)))}function cm(e){e=Wd(e,Jd);const t=Wd(e.firestore,Pf),n=Ff(t),r=new rm(t);return kf(n,e._query,{source:"server"}).then((n=>new Zp(t,r,e,n)))}function um(e,t,n){e=Wd(e,Yd);const r=Wd(e.firestore,Pf),i=Kp(e.converter,t,n);return mm(r,[sp(ip(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Lo.none())])}function lm(e,t,n,...r){e=Wd(e,Yd);const i=Wd(e.firestore,Pf),s=ip(i);let o;return o="string"==typeof(t=(0,a.m9)(t))||t instanceof Qf?fp(s,"updateDoc",e._key,t,n,r):dp(s,"updateDoc",e._key,t),mm(i,[o.toMutation(e._key,Lo.exists(!0))])}function hm(e){return mm(Wd(e.firestore,Pf),[new Ko(e._key,Lo.none())])}function dm(e,t){const n=Wd(e.firestore,Pf),r=tf(e),i=Kp(e.converter,t);return mm(n,[sp(ip(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Lo.exists(!1))]).then((()=>r))}function fm(e,...t){var n,r,i;e=(0,a.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||Nf(t[o])||(s=t[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Nf(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[o+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let u,l,h;if(e instanceof Yd)l=Wd(e.firestore,Pf),h=to(e._key.path),u={next:n=>{t[o]&&t[o](gm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=Wd(e,Jd);l=Wd(n.firestore,Pf),h=n._query;const r=new rm(l);u={next:e=>{t[o]&&t[o](new Zp(l,r,n,e))},error:t[o+1],complete:t[o+2]},Cp(e._query)}return function(e,t,n,r){const i=new of(r),s=new Gh(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>jh(await bf(e),s))),()=>{i.bc(),e.asyncQueue.enqueueAndForget((async()=>$h(await bf(e),s)))}}(Ff(l),h,c,u)}function pm(e,t){return Cf(Ff(e=Wd(e,Pf)),Nf(t)?t:{next:t})}function mm(e,t){return function(e,t){const n=new Wr;return e.asyncQueue.enqueueAndForget((async()=>od(await yf(e),t,n))),n.promise}(Ff(e),t)}function gm(e,t,n){const r=n.docs.get(t._key),i=new rm(e);return new Jp(e,i,t._key,r,new Yp(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vm={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=ip(e)}set(e,t,n){this._verifyNotCommitted();const r=wm(e,this._firestore),i=Kp(r.converter,t,n),s=sp(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Lo.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=wm(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Qf?fp(this._dataReader,"WriteBatch.update",i._key,t,n,r):dp(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Lo.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=wm(e,this._firestore);return this._mutations=this._mutations.concat(new Ko(t._key,Lo.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new qr($r.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function wm(e,t){if((e=(0,a.m9)(e)).firestore!==t)throw new qr($r.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=ip(e)}get(e){const t=wm(e,this._firestore),n=new Qp(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Ur();const r=e[0];if(r.isFoundDocument())return new Tp(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new Tp(this._firestore,n,t._key,null,t.converter);throw Ur()}))}set(e,t,n){const r=wm(e,this._firestore),i=Kp(r.converter,t,n),s=sp(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(e,t,n,...r){const i=wm(e,this._firestore);let s;return s="string"==typeof(t=(0,a.m9)(t))||t instanceof Qf?fp(this._dataReader,"Transaction.update",i._key,t,n,r):dp(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,s),this}delete(e){const t=wm(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=wm(e,this._firestore),n=new rm(this._firestore);return super.get(e).then((e=>new Jp(this._firestore,n,t._key,e._document,new Yp(!1,!1),t.converter)))}}function _m(e,t,n){e=Wd(e,Pf);const r=Object.assign(Object.assign({},vm),n);return function(e){if(e.maxAttempts<1)throw new qr($r.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new Wr;return e.asyncQueue.enqueueAndForget((async()=>{const i=await wf(e);new uf(e.asyncQueue,i,n,t,r).run()})),r.promise}(Ff(e),(n=>t(new bm(e,n))),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(){return new op("deleteField")}function Em(){return new cp("serverTimestamp")}function Tm(...e){return new up("arrayUnion",e)}function Sm(...e){return new lp("arrayRemove",e)}function km(e){return new hp("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Rr=e}(i.SDK_VERSION),(0,i._registerComponent)(new s.wA("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Pf(new Kr(e.getProvider("auth-internal")),new Xr(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new qr($r.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ns(e.options.projectId,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(xr,"3.7.1",e),(0,i.registerVersion)(xr,"3.7.1","esm2017")}()},223:function(e,t,n){"use strict";n.d(t,{BH:function(){return R},G6:function(){return y},L:function(){return a},LL:function(){return P},P0:function(){return C},Pz:function(){return A},Sg:function(){return N},UG:function(){return f},ZB:function(){return u},ZR:function(){return D},aH:function(){return x},b$:function(){return g},eu:function(){return b},hl:function(){return w},jU:function(){return p},m9:function(){return K},ne:function(){return W},pd:function(){return q},r3:function(){return M},ru:function(){return m},tV:function(){return c},uI:function(){return d},vZ:function(){return V},w1:function(){return v},xO:function(){return j},xb:function(){return U},z$:function(){return h},zd:function(){return $}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==l)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function p(){return"object"===typeof self&&self.self===self}function m(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function g(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function v(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function y(){return!f()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function w(){return"object"===typeof indexedDB}function b(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function _(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=()=>_().__FIREBASE_DEFAULTS__,E=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},T=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},S=()=>{try{return I()||E()||T()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},k=e=>{var t,n;return null===(n=null===(t=S())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},C=e=>{const t=k(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},x=()=>{var e;return null===(e=S())||void 0===e?void 0:e.config},A=e=>{var t;return null===(t=S())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=O,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?L(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new D(r,o,n);return a}}function L(e,t){return e.replace(F,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const F=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function M(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(B(n)&&B(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function B(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function j(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function $(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function q(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e,t){const n=new z(e,t);return n.subscribe.bind(n)}class z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=G(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function G(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function K(e){return e&&e._delegate?e._delegate:e}},4870:function(e,t,n){"use strict";n.d(t,{B:function(){return o},BK:function(){return qe},Bj:function(){return s},Fl:function(){return Ke},IU:function(){return Ae},Jd:function(){return T},OT:function(){return Ee},PG:function(){return Se},SU:function(){return Be},Um:function(){return Ie},Vh:function(){return ze},WL:function(){return $e},X$:function(){return x},X3:function(){return xe},XI:function(){return Me},Xl:function(){return Re},dq:function(){return Le},iH:function(){return Fe},j:function(){return k},lk:function(){return S},qj:function(){return _e},qq:function(){return b},yT:function(){return Ce}});n(7658);var r=n(7139);let i;class s{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=i,!e&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0,this.active=!1}}}function o(e){return new s(e)}function a(e,t=i){t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30;let v;const y=Symbol(""),w=Symbol("");class b{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let e=v,t=I;while(e){if(e===this)return;e=e.parent}try{return this.parent=v,v=this,I=!0,m=1<<++p,p<=g?h(this):_(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,v=this.parent,I=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){v===this?this.deferStop=!0:this.active&&(_(this),this.onStop&&this.onStop(),this.active=!1)}}function _(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let I=!0;const E=[];function T(){E.push(I),I=!1}function S(){const e=E.pop();I=void 0===e||e}function k(e,t,n){if(I&&v){let t=f.get(e);t||f.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=c());const i=void 0;C(r,i)}}function C(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function x(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&u.push(e)}));else switch(void 0!==n&&u.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&u.push(a.get("length")):(u.push(a.get(y)),(0,r._N)(e)&&u.push(a.get(w)));break;case"delete":(0,r.kJ)(e)||(u.push(a.get(y)),(0,r._N)(e)&&u.push(a.get(w)));break;case"set":(0,r._N)(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&A(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);A(c(e))}}function A(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&R(r,t);for(const r of n)r.computed||R(r,t)}function R(e,t){(e!==v||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),D=U(),P=U(!1,!0),L=U(!0),F=M();function M(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Ae(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ae)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){T();const n=Ae(this)[t].apply(this,e);return S(),n}})),e}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ye:ve:t?ge:me).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(F,i))return Reflect.get(F,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?O.has(i):N(i))?a:(e||k(n,"get",i),t?a:Le(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):_e(a):a)}}const V=j(),B=j(!0);function j(e=!1){return function(t,n,i,s){let o=t[n];if(ke(o)&&Le(o)&&!Le(i))return!1;if(!e&&(Ce(i)||ke(i)||(o=Ae(o),i=Ae(i)),!(0,r.kJ)(t)&&Le(o)&&!Le(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Ae(s)&&(a?(0,r.aU)(i,o)&&x(t,"set",n,i,o):x(t,"add",n,i)),c}}function $(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&x(e,"delete",t,void 0,i),s}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&O.has(t)||k(e,"has",t),n}function W(e){return k(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const z={get:D,set:V,deleteProperty:$,has:q,ownKeys:W},G={get:L,set(e,t){return!0},deleteProperty(e,t){return!0}},H=(0,r.l7)({},z,{get:P,set:B}),K=e=>e,Q=e=>Reflect.getPrototypeOf(e);function Y(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ae(e),s=Ae(t);n||(t!==s&&k(i,"get",t),k(i,"get",s));const{has:o}=Q(i),a=r?K:n?Oe:Ne;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function J(e,t=!1){const n=this["__v_raw"],r=Ae(n),i=Ae(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function X(e,t=!1){return e=e["__v_raw"],!t&&k(Ae(e),"iterate",y),Reflect.get(e,"size",e)}function Z(e){e=Ae(e);const t=Ae(this),n=Q(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function ee(e,t){t=Ae(t);const n=Ae(this),{has:i,get:s}=Q(n);let o=i.call(n,e);o||(e=Ae(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function te(e){const t=Ae(this),{has:n,get:r}=Q(t);let i=n.call(t,e);i||(e=Ae(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&x(t,"delete",e,void 0,s),o}function ne(){const e=Ae(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function re(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Ae(s),a=t?K:e?Oe:Ne;return!e&&k(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function ie(e,t,n){return function(...i){const s=this["__v_raw"],o=Ae(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=s[e](...i),h=n?K:t?Oe:Ne;return!t&&k(o,"iterate",u?w:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function se(e){return function(...t){return"delete"!==e&&this}}function oe(){const e={get(e){return Y(this,e)},get size(){return X(this)},has:J,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!1)},t={get(e){return Y(this,e,!1,!0)},get size(){return X(this)},has:J,add:Z,set:ee,delete:te,clear:ne,forEach:re(!1,!0)},n={get(e){return Y(this,e,!0)},get size(){return X(this,!0)},has(e){return J.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:re(!0,!1)},r={get(e){return Y(this,e,!0,!0)},get size(){return X(this,!0)},has(e){return J.call(this,e,!0)},add:se("add"),set:se("set"),delete:se("delete"),clear:se("clear"),forEach:re(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=ie(i,!1,!1),n[i]=ie(i,!0,!1),t[i]=ie(i,!1,!0),r[i]=ie(i,!0,!0)})),[e,n,t,r]}const[ae,ce,ue,le]=oe();function he(e,t){const n=t?e?le:ue:e?ce:ae;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const de={get:he(!1,!1)},fe={get:he(!1,!0)},pe={get:he(!0,!1)};const me=new WeakMap,ge=new WeakMap,ve=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function be(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function _e(e){return ke(e)?e:Te(e,!1,z,de,me)}function Ie(e){return Te(e,!1,H,fe,ge)}function Ee(e){return Te(e,!0,G,pe,ve)}function Te(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=be(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Se(e){return ke(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return!(!e||!e["__v_isShallow"])}function xe(e){return Se(e)||ke(e)}function Ae(e){const t=e&&e["__v_raw"];return t?Ae(t):e}function Re(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?_e(e):e,Oe=e=>(0,r.Kn)(e)?Ee(e):e;function De(e){I&&v&&(e=Ae(e),C(e.dep||(e.dep=c())))}function Pe(e,t){e=Ae(e),e.dep&&A(e.dep)}function Le(e){return!(!e||!0!==e.__v_isRef)}function Fe(e){return Ue(e,!1)}function Me(e){return Ue(e,!0)}function Ue(e,t){return Le(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ae(e),this._value=t?e:Ne(e)}get value(){return De(this),this._value}set value(e){const t=this.__v_isShallow||Ce(e)||ke(e);e=t?e:Ae(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ne(e),Pe(this,e))}}function Be(e){return Le(e)?e.value:e}const je={get:(e,t,n)=>Be(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $e(e){return Se(e)?e:new Proxy(e,je)}function qe(e){const t=(0,r.kJ)(e)?new Array(e.length):{};for(const n in e)t[n]=ze(e,n);return t}class We{constructor(e,t,n){this._object=e,this._key=t,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return void 0===e?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ze(e,t,n){const r=e[t];return Le(r)?r:new We(e,t,n)}var Ge;class He{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Ge]=!1,this._dirty=!0,this.effect=new b(e,(()=>{this._dirty||(this._dirty=!0,Pe(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=Ae(this);return De(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ke(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new He(i,s,o||!s,n);return a}Ge="__v_isReadonly"},3396:function(e,t,n){"use strict";n.d(t,{$d:function(){return o},Cn:function(){return F},FN:function(){return vn},Fl:function(){return Dn},HY:function(){return Lt},JJ:function(){return G},Jd:function(){return Ce},Ko:function(){return qe},LL:function(){return Ve},P$:function(){return ie},Q2:function(){return Be},Q6:function(){return le},U2:function(){return oe},Uk:function(){return sn},Us:function(){return At},Wm:function(){return en},Y3:function(){return y},Y8:function(){return te},YP:function(){return Y},_:function(){return Zt},aZ:function(){return he},bv:function(){return Te},dD:function(){return L},dG:function(){return hn},dl:function(){return me},f3:function(){return H},h:function(){return Pn},iD:function(){return Gt},ic:function(){return ke},j4:function(){return Ht},kq:function(){return an},m0:function(){return K},nK:function(){return ue},se:function(){return ge},uE:function(){return on},up:function(){return Me},w5:function(){return M},wF:function(){return Ee},wg:function(){return jt},wy:function(){return De}});n(7658),n(541);var r=n(4870),i=n(7139);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const c=[];for(let i=0;i<e.length;i++)c.push(o(e[i],t,n,r));return c}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}c(e,n,i,r)}function c(e,t,n,r=!0){console.error(e)}let u=!1,l=!1;const h=[];let d=0;const f=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(e){const t=v||g;return e?t.then(this?e.bind(this):e):t}function w(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=k(h[r]);i<e?t=r+1:n=r}return t}function b(e){h.length&&h.includes(e,u&&e.allowRecurse?d+1:d)||(null==e.id?h.push(e):h.splice(w(e.id),0,e),_())}function _(){u||l||(l=!0,v=g.then(x))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function E(e){(0,i.kJ)(e)?f.push(...e):p&&p.includes(e,e.allowRecurse?m+1:m)||f.push(e),_()}function T(e,t=(u?d+1:0)){for(0;t<h.length;t++){const e=h[t];e&&e.pre&&(h.splice(t,1),t--,e())}}function S(e){if(f.length){const e=[...new Set(f)];if(f.length=0,p)return void p.push(...e);for(p=e,p.sort(((e,t)=>k(e)-k(t))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const k=e=>null==e.id?1/0:e.id,C=(e,t)=>{const n=k(e)-k(t);if(0===n){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function x(e){l=!1,u=!0,h.sort(C);i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,S(e),u=!1,v=null,(h.length||f.length)&&x(e)}}new Set;new Map;function A(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),c=a&&t.slice(7);if(c&&c in r){const e=`${"modelValue"===c?"model":c}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>e.trim()))),t&&(s=n.map(i.He))}let u;let l=r[u=(0,i.hR)(t)]||r[u=(0,i.hR)((0,i._A)(t))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(t))]),l&&o(l,e,6,s);const h=r[u+"Once"];if(h){if(e.emitted){if(e.emitted[u])return}else e.emitted={};e.emitted[u]=!0,o(h,e,6,s)}}function R(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=R(e,t,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),(0,i.Kn)(e)&&r.set(e,a),a):((0,i.Kn)(e)&&r.set(e,null),null)}function N(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let O=null,D=null;function P(e){const t=O;return O=e,D=e&&e.type.__scopeId||null,t}function L(e){D=e}function F(){D=null}function M(e,t=O,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Wt(-1);const i=P(t);let s;try{s=e(...n)}finally{P(i),r._d&&Wt(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function U(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:d,renderCache:f,data:p,setupState:m,ctx:g,inheritAttrs:v}=e;let y,w;const b=P(e);try{if(4&n.shapeFlag){const e=s||r;y=cn(d.call(e,e,f,o,m,p,g)),w=l}else{const e=t;0,y=cn(e.length>1?e(o,{attrs:l,slots:u,emit:h}):e(o,null)),w=t.props?l:V(l)}}catch(I){Vt.length=0,a(I,e,1),y=en(Mt)}let _=y;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(c&&e.some(i.tR)&&(w=B(w,c)),_=rn(_,w))}return n.dirs&&(_=rn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,P(b),y}const V=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},B=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function j(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||$(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?$(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!N(u,n))return!0}}return!1}function $(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!N(n,s))return!0}return!1}function q({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const W=e=>e.__isSuspense;function z(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):E(e)}function G(e,t){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[e]=t}else 0}function H(e,t,n=!1){const r=gn||O;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function K(e,t){return J(e,null,t)}const Q={};function Y(e,t,n){return J(e,t,n)}function J(e,t,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){const h=gn;let d,f,p=!1,m=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(m=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ee(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[g])}:i.dG,t&&a){const e=d;d=()=>ee(e())}let g=e=>{f=_.onStop=()=>{s(e,h,4)}};if(En)return g=i.dG,t?n&&o(t,h,3,[d(),m?[]:void 0,g]):d(),i.dG;let v=m?[]:Q;const y=()=>{if(_.active)if(t){const e=_.run();(a||p||(m?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(f&&f(),o(t,h,3,[e,v===Q?void 0:v,g]),v=e)}else _.run()};let w;y.allowRecurse=!!t,"sync"===c?w=y:"post"===c?w=()=>xt(y,h&&h.suspense):(y.pre=!0,h&&(y.id=h.uid),w=()=>b(y));const _=new r.qq(d,w);return t?n?y():v=_.run():"post"===c?xt(_.run.bind(_),h&&h.suspense):_.run(),()=>{_.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,_)}}function X(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?Z(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=gn;yn(this);const c=J(s,o.bind(r),n);return a?yn(a):wn(),c}function Z(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ee(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ee(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ee(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ee(e,t)}));else if((0,i.PO)(e))for(const n in e)ee(e[n],t);return e}function te(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Te((()=>{e.isMounted=!0})),Ce((()=>{e.isUnmounting=!0})),e}const ne=[Function,Array],re={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ne,onEnter:ne,onAfterEnter:ne,onEnterCancelled:ne,onBeforeLeave:ne,onLeave:ne,onAfterLeave:ne,onLeaveCancelled:ne,onBeforeAppear:ne,onAppear:ne,onAfterAppear:ne,onAppearCancelled:ne},setup(e,{slots:t}){const n=vn(),i=te();let s;return()=>{const o=t.default&&le(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==Mt){0,a=t,e=!0;break}}const c=(0,r.IU)(e),{mode:u}=c;if(i.isLeaving)return ae(a);const l=ce(a);if(!l)return ae(a);const h=oe(l,c,i,n);ue(l,h);const d=n.subTree,f=d&&ce(d);let p=!1;const{getTransitionKey:m}=l.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Mt&&(!Qt(l,f)||p)){const e=oe(f,c,i,n);if(ue(f,e),"out-in"===u)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},ae(a);"in-out"===u&&l.type!==Mt&&(e.delayLeave=(e,t,n)=>{const r=se(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ie=re;function se(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function oe(e,t,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),I=se(n,e),E=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];E(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(t){let r=u;if(!n.isMounted){if(!s)return;r=v||u}t._leaveCb&&t._leaveCb(!0);const i=I[_];i&&Qt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),E(r,[t])},enter(e){let t=l,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||l,r=w||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,E(t?i:r,[e]),S.delayedLeave&&S.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();E(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),E(n?g:m,[t]),t._leaveCb=void 0,I[i]===e&&delete I[i])};I[i]=e,p?T(p,[t,o]):o()},clone(e){return oe(e,t,n,r)}};return S}function ae(e){if(fe(e))return e=rn(e),e.children=null,e}function ce(e){return fe(e)?e.children?e.children[0]:void 0:e}function ue(e,t){6&e.shapeFlag&&e.component?ue(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function le(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Lt?(128&o.patchFlag&&i++,r=r.concat(le(o.children,t,a))):(t||o.type!==Mt)&&r.push(null!=a?rn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function he(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const de=e=>!!e.type.__asyncLoader;const fe=e=>e.type.__isKeepAlive;RegExp,RegExp;function pe(e,t){return(0,i.kJ)(e)?e.some((e=>pe(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function me(e,t){ve(e,"a",t)}function ge(e,t){ve(e,"da",t)}function ve(e,t,n=gn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(_e(t,r,n),n){let e=n.parent;while(e&&e.parent)fe(e.parent.vnode)&&ye(r,t,n,e),e=e.parent}}function ye(e,t,n,r){const s=_e(t,e,r,!0);xe((()=>{(0,i.Od)(r[t],s)}),n)}function we(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function be(e){return 128&e.shapeFlag?e.ssContent:e}function _e(e,t,n=gn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),yn(n);const s=o(t,n,e,i);return wn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ie=e=>(t,n=gn)=>(!En||"sp"===e)&&_e(e,((...e)=>t(...e)),n),Ee=Ie("bm"),Te=Ie("m"),Se=Ie("bu"),ke=Ie("u"),Ce=Ie("bum"),xe=Ie("um"),Ae=Ie("sp"),Re=Ie("rtg"),Ne=Ie("rtc");function Oe(e,t=gn){_e("ec",e,t)}function De(e,t){const n=O;if(null===n)return e;const r=Rn(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ee(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Pe(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[e.el,u,e,t]),(0,r.lk)())}}const Le="components",Fe="directives";function Me(e,t){return je(Le,e,!0,t)||e}const Ue=Symbol();function Ve(e){return(0,i.HD)(e)?je(Le,e,!1)||e:e||Ue}function Be(e){return je(Fe,e)}function je(e,t,n=!0,r=!1){const s=O||gn;if(s){const n=s.type;if(e===Le){const e=Nn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=$e(s[e]||n[e],t)||$e(s.appContext[e],t);return!o&&r?n:o}}function $e(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function qe(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const We=e=>e?bn(e)?Rn(e)||e.proxy:We(e.parent):null,ze=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>We(e.parent),$root:e=>We(e.root),$emit:e=>e.emit,$options:e=>Xe(e),$forceUpdate:e=>e.f||(e.f=()=>b(e.update)),$nextTick:e=>e.n||(e.n=y.bind(e.proxy)),$watch:e=>X.bind(e)}),Ge={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=4,n[t];He&&(c[t]=0)}}const d=ze[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=u.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=4,n[t]):(p=l.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(ze,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let He=!0;function Ke(e){const t=Xe(e),n=e.proxy,s=e.ctx;He=!1,t.beforeCreate&&Ye(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:I,render:E,renderTracked:T,renderTriggered:S,errorCaptured:k,serverPrefetch:C,expose:x,inheritAttrs:A,components:R,directives:N,filters:O}=t,D=null;if(h&&Qe(h,s,D,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(He=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=Dn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(u)for(const r in u)Je(u[r],s,n,r);if(l){const e=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{G(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Ye(d,e,"c"),P(Ee,f),P(Te,p),P(Se,m),P(ke,g),P(me,v),P(ge,y),P(Oe,k),P(Ne,T),P(Re,S),P(Ce,b),P(xe,I),P(Ae,C),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===i.dG&&(e.render=E),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),N&&(e.directives=N)}function Qe(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=rt(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?H(n.from||o,n.default,!0):H(n.from||o):H(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Ye(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Je(e,t,n,r){const s=r.includes(".")?Z(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&Y(s,n)}else if((0,i.mf)(e))Y(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Je(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&Y(s,r,e)}else 0}function Xe(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=e.appContext,c=o.get(t);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((e=>Ze(u,e,a,!0))),Ze(u,t,a)):u=t,(0,i.Kn)(t)&&o.set(t,u),u}function Ze(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ze(e,s,n,!0),i&&i.forEach((t=>Ze(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=et[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const et={data:tt,props:st,emits:st,methods:st,computed:st,beforeCreate:it,created:it,beforeMount:it,mounted:it,beforeUpdate:it,updated:it,beforeDestroy:it,beforeUnmount:it,destroyed:it,unmounted:it,activated:it,deactivated:it,errorCaptured:it,serverPrefetch:it,components:st,directives:st,watch:ot,provide:tt,inject:nt};function tt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function nt(e,t){return st(rt(e),rt(t))}function rt(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function it(e,t){return e?[...new Set([].concat(e,t))]:t}function st(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function ot(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=it(e[r],t[r]);return n}function at(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Yt,1),e.propsDefaults=Object.create(null),ut(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ct(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,u=(0,r.IU)(o),[l]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ut(e,t,o,a)&&(h=!0);for(const s in u)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=lt(l,u,s,void 0,e,!0)):delete o[s]);if(a!==u)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(N(e.emitsOptions,s))continue;const c=t[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=lt(l,u,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ut(e,t,n,s){const[o,a]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const l=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:N(e.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=lt(o,t,c,s[c],e,!(0,i.RI)(s,c))}}return u}function lt(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(yn(s),r=i[n]=e.call(null,t),wn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ht(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let u=!1;if(!(0,i.mf)(e)){const r=e=>{u=!0;const[n,r]=ht(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(e)&&r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);dt(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(dt(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=mt(Boolean,r.type),n=mt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const l=[a,c];return(0,i.Kn)(e)&&r.set(e,l),l}function dt(e){return"$"!==e[0]}function ft(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function pt(e,t){return ft(e)===ft(t)}function mt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>pt(t,e))):(0,i.mf)(t)&&pt(t,e)?0:-1}const gt=e=>"_"===e[0]||"$stable"===e,vt=e=>(0,i.kJ)(e)?e.map(cn):[cn(e)],yt=(e,t,n)=>{if(t._n)return t;const r=M(((...e)=>vt(t(...e))),n);return r._c=!1,r},wt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(gt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=yt(s,n,r);else if(null!=n){0;const e=vt(n);t[s]=()=>e}}},bt=(e,t)=>{const n=vt(t);e.slots.default=()=>n},_t=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):wt(t,e.slots={})}else e.slots={},t&&bt(e,t);(0,i.Nj)(e.slots,Yt,1)},It=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,wt(t,s)),a=t}else t&&(bt(e,t),a={default:1});if(o)for(const i in s)gt(i)||i in a||delete s[i]};function Et(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Tt=0;function St(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Et(),o=new Set;let a=!1;const c=s.app={_uid:Tt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ln,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,u){if(!a){0;const l=en(n,r);return l.appContext=s,o&&t?t(l,i):e(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Rn(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function kt(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>kt(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(de(o)&&!a)return;const c=4&o.shapeFlag?Rn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=e;const d=t&&t.r,f=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,l,12,[u,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?(0,i.RI)(p,h)?p[h]:f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):t?(f[h]=[c],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[c],e.k&&(f[e.k]=h.value))}else t?(f[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,e.k&&(f[e.k]=u))};u?(r.id=-1,xt(r,n)):r()}else 0}}function Ct(){}const xt=z;function At(e){return Rt(e)}function Rt(e,t){Ct();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Qt(e,t)&&(r=X(e),H(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Ft:y(e,t,n,r);break;case Mt:w(e,t,n,r);break;case Ut:null==e&&_(t,n,r,o);break;case Lt:P(e,t,n,r,i,s,o,a,c);break;default:1&h?C(e,t,n,r,i,s,o,a,c):6&h?L(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,s,o,a,c,ee)}null!=l&&i&&kt(l,e&&e.ref,s,t||e,!t)},y=(e,t,n,r)=>{if(null==e)s(t.el=u(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},w=(e,t,n,r)=>{null==e?s(t.el=l(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},k=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?x(t,n,r,i,s,o,a,c):N(e,t,i,s,o,a,c)},x=(e,t,n,r,o,u,l,h)=>{let f,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:w}=e;if(f=e.el=c(e.type,u,g&&g.is,g),8&v?d(f,e.children):16&v&&R(e.children,f,null,r,o,u&&"foreignObject"!==m,l,h),w&&Pe(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(f,t,null,g[t],u,e.children,r,o,J);"value"in g&&a(f,"value",null,g.value),(p=g.onVnodeBeforeMount)&&dn(p,r,e)}A(f,e,e.scopeId,l,r),w&&Pe(e,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;b&&y.beforeEnter(f),s(f,t,n),((p=g&&g.onVnodeMounted)||b||w)&&xt((()=>{p&&dn(p,r,e),b&&y.enter(f),w&&Pe(e,null,r,"mounted")}),o)},A=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?un(e[u]):cn(e[u]);v(null,c,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;n&&Nt(n,!1),(g=m.onVnodeBeforeUpdate)&&dn(g,n,t,e),f&&Pe(t,e,n,"beforeUpdate"),n&&Nt(n,!0);const v=s&&"foreignObject"!==t.type;if(h?O(e.dynamicChildren,h,u,n,r,v,o):c||$(e,t,u,null,n,r,v,o,!1),l>0){if(16&l)D(u,t,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,e.children,n,r,J)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||D(u,t,p,m,n,r,s);((g=m.onVnodeUpdated)||f)&&xt((()=>{g&&dn(g,n,t,e),f&&Pe(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Lt||!Qt(c,u)||70&c.shapeFlag)?f(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},D=(e,t,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(e,u,n[u],null,c,t.children,s,o,J);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(e,u,h,l,c,t.children,s,o,J)}"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,c,l)=>{const h=t.el=e?e.el:u(""),d=t.anchor=e?e.anchor:u("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),R(t.children,n,d,i,o,a,c,l)):f>0&&64&f&&p&&e.dynamicChildren?(O(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Ot(e,t,!0)):$(e,t,n,d,i,o,a,c,l)},L=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):F(t,n,r,i,s,o,c):M(e,t,c)},F=(e,t,n,r,i,s,o)=>{const a=e.component=mn(e,r,i);if(fe(e)&&(a.ctx.renderer=ee),Tn(a),a.asyncDep){if(i&&i.registerDep(a,V),!e.el){const e=a.subTree=en(Mt);w(null,e,t,n)}}else V(a,e,t,n,i,s,o)},M=(e,t,n)=>{const r=t.component=e.component;if(j(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},V=(e,t,n,s,o,a,c)=>{const u=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:u,vnode:l}=e,h=n;0,Nt(e,!1),n?(n.el=l.el,B(e,n,c)):n=l,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&dn(t,u,n,l),Nt(e,!0);const d=U(e);0;const p=e.subTree;e.subTree=d,v(p,d,f(p.el),X(p),e,o,a),n.el=d.el,null===h&&q(e,d.el),s&&xt(s,o),(t=n.props&&n.props.onVnodeUpdated)&&xt((()=>dn(t,u,n,l)),o)}else{let r;const{el:c,props:u}=t,{bm:l,m:h,parent:d}=e,f=de(t);if(Nt(e,!1),l&&(0,i.ir)(l),!f&&(r=u&&u.onVnodeBeforeMount)&&dn(r,d,t),Nt(e,!0),c&&ne){const n=()=>{e.subTree=U(e),ne(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=U(e);0,v(null,r,n,s,e,o,a),t.el=r.el}if(h&&xt(h,o),!f&&(r=u&&u.onVnodeMounted)){const e=t;xt((()=>dn(r,d,e)),o)}(256&t.shapeFlag||d&&de(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&xt(e.a,o),e.isMounted=!0,t=n=s=null}},l=e.effect=new r.qq(u,(()=>b(h)),e.scope),h=e.update=()=>l.run();h.id=e.uid,Nt(e,!0),h()},B=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ct(e,t.props,i,n),It(e,t.children,n),(0,r.Jd)(),T(),(0,r.lk)()},$=(e,t,n,r,i,s,o,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(u,h,n,r,i,s,o,a,c);if(256&f)return void W(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&J(u,i,s),h!==u&&d(n,h)):16&l?16&p?z(u,h,n,r,i,s,o,a,c):J(u,i,s,!0):(8&l&&d(n,""),16&p&&R(h,n,r,i,s,o,a,c))},W=(e,t,n,r,s,o,a,c,u)=>{e=e||i.Z6,t=t||i.Z6;const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?un(t[f]):cn(t[f]);v(e[f],r,n,null,s,o,a,c,u)}l>h?J(e,s,o,!0,!1,d):R(t,n,r,s,o,a,c,u,d)},z=(e,t,n,r,s,o,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?un(t[l]):cn(t[l]);if(!Qt(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?un(t[f]):cn(t[f]);if(!Qt(r,i))break;v(r,i,n,null,s,o,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,i=e<h?t[e].el:r;while(l<=f)v(null,t[l]=u?un(t[l]):cn(t[l]),n,i,s,o,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?un(t[l]):cn(t[l]);null!=e.key&&g.set(e.key,l)}let y,w=0;const b=f-m+1;let _=!1,I=0;const E=new Array(b);for(l=0;l<b;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=f;y++)if(0===E[y-m]&&Qt(r,t[y])){i=y;break}void 0===i?H(r,s,o,!0):(E[i-m]=l+1,i>=I?I=i:_=!0,v(r,t[i],n,null,s,o,a,c,u),w++)}const T=_?Dt(E):i.Z6;for(y=T.length-1,l=b-1;l>=0;l--){const e=m+l,i=t[e],d=e+1<h?t[e+1].el:r;0===E[l]?v(null,i,n,d,s,o,a,c,u):_&&(y<0||l!==T[y]?G(i,n,d,2):y--)}}},G=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void G(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,ee);if(a===Lt){s(o,t,n);for(let e=0;e<u.length;e++)G(u[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ut)return void E(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),xt((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),u=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&kt(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!de(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&dn(m,t,e),6&l)Y(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&Pe(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,ee,r):u&&(s!==Lt||h>0&&64&h)?J(u,t,n,!1,!0):(s===Lt&&384&h||!i&&16&l)&&J(c,t,n),r&&K(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&xt((()=>{m&&dn(m,t,e),f&&Pe(e,null,t,"unmounted")}),n)},K=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Lt)return void Q(n,r);if(t===Ut)return void k(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},Q=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Y=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,H(a,e,t,n)),c&&xt(c,t),xt((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},J=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)H(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),T(),S(),t._vnode=e},ee={p:v,um:H,m:G,r:K,mt:F,mc:R,pc:$,pbc:O,n:X,o:e};let te,ne;return t&&([te,ne]=t(ee)),{render:Z,hydrate:te,createApp:St(Z,te)}}function Nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ot(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=un(s[i]),t.el=e.el),n||Ot(e,t))}}function Dt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Pt=e=>e.__isTeleport;const Lt=Symbol(void 0),Ft=Symbol(void 0),Mt=Symbol(void 0),Ut=Symbol(void 0),Vt=[];let Bt=null;function jt(e=!1){Vt.push(Bt=e?null:[])}function $t(){Vt.pop(),Bt=Vt[Vt.length-1]||null}let qt=1;function Wt(e){qt+=e}function zt(e){return e.dynamicChildren=qt>0?Bt||i.Z6:null,$t(),qt>0&&Bt&&Bt.push(e),e}function Gt(e,t,n,r,i,s){return zt(Zt(e,t,n,r,i,s,!0))}function Ht(e,t,n,r,i){return zt(en(e,t,n,r,i,!0))}function Kt(e){return!!e&&!0===e.__v_isVNode}function Qt(e,t){return e.type===t.type&&e.key===t.key}const Yt="__vInternal",Jt=({key:e})=>null!=e?e:null,Xt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:O,r:e,k:t,f:!!n}:e:null;function Zt(e,t=null,n=null,r=0,s=null,o=(e===Lt?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Jt(t),ref:t&&Xt(t),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(ln(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),qt>0&&!a&&Bt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Bt.push(u),u}const en=tn;function tn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ue||(e=Mt),Kt(e)){const r=rn(e,t,!0);return n&&ln(r,n),qt>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if(On(e)&&(e=e.__vccOpts),t){t=nn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:W(e)?128:Pt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return Zt(e,t,n,s,o,c,a,!0)}function nn(e){return e?(0,r.X3)(e)||Yt in e?(0,i.l7)({},e):e:null}function rn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?hn(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Jt(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Xt(t)):[s,Xt(t)]:Xt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Lt?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&rn(e.ssContent),ssFallback:e.ssFallback&&rn(e.ssFallback),el:e.el,anchor:e.anchor};return u}function sn(e=" ",t=0){return en(Ft,null,e,t)}function on(e,t){const n=en(Ut,null,e);return n.staticCount=t,n}function an(e="",t=!1){return t?(jt(),Ht(Mt,null,e)):en(Mt,null,e)}function cn(e){return null==e||"boolean"===typeof e?en(Mt):(0,i.kJ)(e)?en(Lt,null,e.slice()):"object"===typeof e?un(e):en(Ft,null,String(e))}function un(e){return null===e.el&&-1!==e.patchFlag||e.memo?e:rn(e)}function ln(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),ln(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Yt in t?3===r&&O&&(1===O.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=O}}else(0,i.mf)(t)?(t={default:t,_ctx:O},n=32):(t=String(t),64&r?(n=16,t=[sn(t)]):n=8);e.children=t,e.shapeFlag|=n}function hn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function dn(e,t,n,r=null){o(e,t,7,[n,r])}const fn=Et();let pn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||fn,a={uid:pn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ht(s,o),emitsOptions:R(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=A.bind(null,a),e.ce&&e.ce(a),a}let gn=null;const vn=()=>gn||O,yn=e=>{gn=e,e.scope.on()},wn=()=>{gn&&gn.scope.off(),gn=null};function bn(e){return 4&e.vnode.shapeFlag}let _n,In,En=!1;function Tn(e,t=!1){En=t;const{props:n,children:r}=e.vnode,i=bn(e);at(e,n,i,t),_t(e,r);const s=i?Sn(e,t):void 0;return En=!1,s}function Sn(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Ge));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?An(e):null;yn(e),(0,r.Jd)();const c=s(o,e,0,[e.props,n]);if((0,r.lk)(),wn(),(0,i.tI)(c)){if(c.then(wn,wn),t)return c.then((n=>{kn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=c}else kn(e,c,t)}else Cn(e,t)}function kn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Cn(e,n)}function Cn(e,t,n){const s=e.type;if(!e.render){if(!t&&_n&&!s.render){const t=s.template||Xe(e).template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=_n(t,c)}}e.render=s.render||i.dG,In&&In(e)}yn(e),(0,r.Jd)(),Ke(e),(0,r.lk)(),wn()}function xn(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function An(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=xn(e))},slots:e.slots,emit:e.emit,expose:t}}function Rn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in ze?ze[n](e):void 0}}))}function Nn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function On(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Dn=(e,t)=>(0,r.Fl)(e,t,En);function Pn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Kt(t)?en(e,null,[t]):en(e,t):en(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Kt(n)&&(n=[n]),en(e,t,n))}Symbol("");const Ln="3.2.41"},9242:function(e,t,n){"use strict";n.d(t,{F8:function(){return oe},W3:function(){return te},ri:function(){return he},uT:function(){return L}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${e}</svg>`:e;const i=c.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=g(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(e,t){const n=m[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return m[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return m[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let c=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{e[t]=n}catch(u){0}c&&e.removeAttribute(t)}function b(e,t,n,r){e.addEventListener(t,n,r)}function _(e,t,n,r){e.removeEventListener(t,n,r)}function I(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=T(t);if(r){const o=s[t]=x(r,i);b(e,n,o,a)}else o&&(_(e,n,o,a),s[t]=void 0)}}const E=/(?:Once|Passive|Capture)$/;function T(e){let t;if(E.test(e)){let n;t={};while(n=e.match(E))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}const n=":"===e[2]?e.slice(3):(0,r.rs)(e.slice(2));return[n,t]}let S=0;const k=Promise.resolve(),C=()=>S||(k.then((()=>S=0)),S=Date.now());function x(e,t){const n=e=>{if(e._vts){if(e._vts<=n.attached)return}else e._vts=Date.now();(0,i.$d)(A(e,n.value),t,5,[e])};return n.value=e,n.attached=C(),n}function A(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const R=/^on[a-z]/,N=(e,t,n,i,s=!1,o,a,c,u)=>{"class"===t?l(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||I(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):O(e,t,i,s))?w(e,t,i,o,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function O(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&R.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!R.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",P="animation",L=(e,{slots:t})=>(0,i.h)(i.P$,B(e),t);L.displayName="Transition";const F={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},M=L.props=(0,r.l7)({},i.P$.props,F),U=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},V=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function B(e){const t={};for(const r in e)r in F||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=j(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:I,onBeforeAppear:E=y,onAppear:T=w,onAppearCancelled:S=b}=t,k=(e,t,n)=>{W(e,t?h:c),W(e,t?l:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,W(e,d),W(e,p),W(e,f),t&&t()},x=e=>(t,n)=>{const r=e?T:w,s=()=>k(t,e,n);U(r,[t,s]),z((()=>{W(t,e?u:o),q(t,e?h:c),V(r)||H(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){U(y,[e]),q(e,o),q(e,a)},onBeforeAppear(e){U(E,[e]),q(e,u),q(e,l)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);q(e,d),J(),q(e,f),z((()=>{e._isLeaving&&(W(e,d),q(e,p),V(_)||H(e,i,v,n))})),U(_,[e,n])},onEnterCancelled(e){k(e,!1),U(b,[e])},onAppearCancelled(e){k(e,!0),U(S,[e])},onLeaveCancelled(e){C(e),U(I,[e])}})}function j(e){if(null==e)return null;if((0,r.Kn)(e))return[$(e.enter),$(e.leave)];{const t=$(e);return[t,t]}}function $(e){const t=(0,r.He)(e);return t}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function z(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let G=0;function H(e,t,n,r){const i=e._endId=++G,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=K(e,t);if(!o)return r();const u=o+"end";let l=0;const h=()=>{e.removeEventListener(u,d),s()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),e.addEventListener(u,d)}function K(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(D+"Delay"),s=r(D+"Duration"),o=Q(i,s),a=r(P+"Delay"),c=r(P+"Duration"),u=Q(a,c);let l=null,h=0,d=0;t===D?o>0&&(l=D,h=o,d=s.length):t===P?u>0&&(l=P,h=u,d=c.length):(h=Math.max(o,u),l=h>0?o>u?D:P:null,d=l?l===D?s.length:c.length:0);const f=l===D&&/\b(transform|all)(,|$)/.test(n[D+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function Q(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function J(){return document.body.offsetHeight}const X=new WeakMap,Z=new WeakMap,ee={name:"TransitionGroup",props:(0,r.l7)({},M,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!se(o[0].el,n.vnode.el,t))return;o.forEach(ne),o.forEach(re);const r=o.filter(ie);J(),r.forEach((e=>{const n=e.el,r=n.style;q(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,W(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(e),u=B(c);let l=c.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,u,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,u,r,n)),X.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}},te=ee;function ne(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function re(e){Z.set(e,e.el.getBoundingClientRect())}function ie(e){const t=X.get(e),n=Z.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function se(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=K(r);return i.removeChild(r),s}const oe={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ae(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),ae(e,!0),r.enter(e)):r.leave(e,(()=>{ae(e,!1)})):ae(e,t))},beforeUnmount(e,{value:t}){ae(e,t)}};function ae(e,t){e.style.display=t?e._vod:"none"}const ce=(0,r.l7)({patchProp:N},u);let ue;function le(){return ue||(ue=(0,i.Us)(ce))}const he=(...e)=>{const t=le().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=de(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function de(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},7139:function(e,t,n){"use strict";n.d(t,{C_:function(){return f},DM:function(){return O},E9:function(){return re},F7:function(){return T},Gg:function(){return W},HD:function(){return L},He:function(){return te},Kn:function(){return M},NO:function(){return I},Nj:function(){return ee},Od:function(){return C},PO:function(){return $},Pq:function(){return a},RI:function(){return A},S0:function(){return q},W7:function(){return j},WV:function(){return m},Z6:function(){return b},_A:function(){return H},_N:function(){return N},aU:function(){return X},dG:function(){return _},e1:function(){return s},fY:function(){return r},hR:function(){return J},hq:function(){return g},ir:function(){return Z},j5:function(){return u},kC:function(){return Y},kJ:function(){return R},kT:function(){return w},l7:function(){return k},mf:function(){return P},rs:function(){return Q},tI:function(){return U},tR:function(){return S},yA:function(){return c},yk:function(){return F},zw:function(){return v}});n(7658);function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function u(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=L(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return L(e)||M(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(L(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=D(e),r=D(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=F(e),r=F(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=M(e),r=M(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const v=e=>L(e)?e:null==e?"":R(e)||M(e)&&(e.toString===V||!P(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):N(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:O(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||R(t)||$(t)?t:String(t),w={},b=[],_=()=>{},I=()=>!1,E=/^on[^a-z]/,T=e=>E.test(e),S=e=>e.startsWith("onUpdate:"),k=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,A=(e,t)=>x.call(e,t),R=Array.isArray,N=e=>"[object Map]"===B(e),O=e=>"[object Set]"===B(e),D=e=>"[object Date]"===B(e),P=e=>"function"===typeof e,L=e=>"string"===typeof e,F=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,U=e=>M(e)&&P(e.then)&&P(e.catch),V=Object.prototype.toString,B=e=>V.call(e),j=e=>B(e).slice(8,-1),$=e=>"[object Object]"===B(e),q=e=>L(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,W=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),z=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},G=/-(\w)/g,H=z((e=>e.replace(G,((e,t)=>t?t.toUpperCase():"")))),K=/\B([A-Z])/g,Q=z((e=>e.replace(K,"-$1").toLowerCase())),Y=z((e=>e.charAt(0).toUpperCase()+e.slice(1))),J=z((e=>e?`on${Y(e)}`:"")),X=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},4275:function(e,t,n){"use strict";n.d(t,{ZF:function(){return r.initializeApp}});var r=n(7077),i="firebase",s="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.registerVersion)(i,s,"app")},6780:function(e,t,n){"use strict";var r=n(2661),i="firebase",s="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},1907:function(e,t,n){"use strict";n(7658);var r=n(2661),i=(n(3408),n(4590),n(223)),s=n(7077),o=n(5168);function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var c=n(7142);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new i.LL("auth","Firebase",d()),g=new o.Yd("@firebase/auth");function v(e,...t){g.logLevel<=o["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw I(e,...t)}function w(e,...t){return I(e,...t)}function b(e,t,n){const r=Object.assign(Object.assign({},p()),{[t]:n}),s=new i.LL("auth","Firebase",r);return s.create(t,{appName:e.name})}function _(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&y(e,"argument-error"),b(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return m.create(e,...t)}function E(e,t,...n){if(!e)throw I(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function S(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function C(e){S(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(S(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function R(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(R()||(0,i.ru)()||"connection"in navigator))||navigator.onLine}function D(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,t){this.shortDelay=e,this.longDelay=t,S(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return O()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){S(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},U=new P(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,r,s={}){return j(e,s,(async()=>{let s={},o={};r&&("GET"===t?o=r:s={body:JSON.stringify(r)});const a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),F.fetch()(q(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function j(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},M),t);try{const t=new W(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw z(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw z(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw z(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw z(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw b(e,a,o);y(e,a)}}catch(s){if(s instanceof i.ZR)throw s;y(e,"network-request-failed")}}async function $(e,t,n,r,i={}){const s=await B(e,t,n,r,i);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?L(e.config,i):`${e.config.apiScheme}://${i}`}class W{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(w(this.auth,"network-request-failed"))),U.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function z(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=w(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function H(e,t){return B(e,"POST","/v1/accounts:update",t)}async function K(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t=!1){const n=(0,i.m9)(e),r=await n.getIdToken(t),s=X(r);E(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:r,authTime:Q(J(s.auth_time)),issuedAtTime:Q(J(s.iat)),expirationTime:Q(J(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function J(e){return 1e3*Number(e)}function X(e){var t;const[n,r,s]=e.split(".");if(void 0===n||void 0===r||void 0===s)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,i.tV)(r);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(o){return v("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function Z(e){const t=X(e);return E(t,"internal-error"),E("undefined"!==typeof t.exp,"internal-error"),E("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof i.ZR&&te(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Q(this.lastLoginAt),this.creationTime=Q(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ee(e,K(n,{idToken:r}));E(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new re(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=(0,i.m9)(e);await ie(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await j(e,{},(async()=>{const n=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=q(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E("undefined"!==typeof e.idToken,"internal-error"),E("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):Z(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ce(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new ue;return n&&(E("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(E("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(E("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){E("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new re(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Y(this,e)}reload(){return se(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ie(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,G(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;E(y&&I,e,"internal-error");const T=ue.fromJSON(this.name,I);E("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),E("boolean"===typeof w,e,"internal-error"),E("boolean"===typeof b,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(v,e.name);const S=new he({uid:y,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ue;r.updateFromServerResponse(t);const i=new he({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ie(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=pe(this.userKey,r.apiKey,i),this.fullPersistenceKey=pe("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(C(fe),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||C(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new me(i,e,n)):new me(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(be(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Ee(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||we(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,i.z$)()){return/firefox\//i.test(e)}function ye(e=(0,i.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function we(e=(0,i.z$)()){return/crios\//i.test(e)}function be(e=(0,i.z$)()){return/iemobile/i.test(e)}function _e(e=(0,i.z$)()){return/android/i.test(e)}function Ie(e=(0,i.z$)()){return/blackberry/i.test(e)}function Ee(e=(0,i.z$)()){return/webos/i.test(e)}function Te(e=(0,i.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Se(e=(0,i.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,i.z$)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return(0,i.w1)()&&10===document.documentMode}function xe(e=(0,i.z$)()){return Te(e)||_e(e)||Ee(e)||Ie(e)||/windows phone/i.test(e)||be(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t=[]){let n;switch(e){case"Browser":n=ge((0,i.z$)());break;case"Worker":n=`${ge((0,i.z$)())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pe(this),this.idTokenSubscription=new Pe(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await ie(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=D()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,i.m9)(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return E(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Re(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function De(e){return(0,i.m9)(e)}class Pe{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)((e=>this.observer=e))}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Le(e,t,n){const r=De(e);E(r._canInitEmulator,r,"emulator-config-failed"),E(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Fe(t),{host:o,port:a}=Me(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ve()}function Fe(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=Fe(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Ue(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Ue(t)}}}function Ue(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Ve(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(e,t){return B(e,"POST","/v1/accounts:resetPassword",V(e,t))}async function $e(e,t){return B(e,"POST","/v1/accounts:update",t)}async function qe(e,t){return B(e,"POST","/v1/accounts:update",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function We(e,t){return $(e,"POST","/v1/accounts:signInWithPassword",V(e,t))}async function ze(e,t){return B(e,"POST","/v1/accounts:sendOobCode",V(e,t))}async function Ge(e,t){return ze(e,t)}async function He(e,t){return ze(e,t)}async function Ke(e,t){return ze(e,t)}async function Qe(e,t){return ze(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}async function Je(e,t){return $(e,"POST","/v1/accounts:signInWithEmailLink",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Be{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return We(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return $e(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Je(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(e,t){return $(e,"POST","/v1/accounts:signInWithIdp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=a(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new tt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,i.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",V(e,t))}async function rt(e,t){return $(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t))}async function it(e,t){const n=await $(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,t));if(n.temporaryProof)throw z(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return $(e,"POST","/v1/accounts:signInWithPhoneNumber",V(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return rt(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return it(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new at({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,i.zd)((0,i.pd)(e))["link"],n=t?(0,i.zd)((0,i.pd)(t))["deep_link_id"]:null,r=(0,i.zd)((0,i.pd)(e))["deep_link_id"],s=r?(0,i.zd)((0,i.pd)(r))["link"]:null;return s||r||n||t||e}class lt{constructor(e){var t,n,r,s,o,a;const c=(0,i.zd)((0,i.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ct(null!==(r=c["mode"])&&void 0!==r?r:null);E(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return E(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return E("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return E(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:r,pendingToken:i,nonce:s,providerId:o}=e;if(!n&&!r&&!t&&!i)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:i})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(r){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="http://localhost";class wt extends Be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ze(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r,pendingToken:i}=t;return n&&r&&i&&n===r?new wt(n,i):null}static _create(e,t){return new wt(e,t)}buildRequest(){return{requestUri:yt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="saml.";class _t extends dt{constructor(e){E(e.startsWith(bt),"argument-error"),super(e)}static credentialFromResult(e){return _t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=wt.fromJSON(e);return E(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return wt._create(n,t)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Et(e,t){return $(e,"POST","/v1/accounts:signUp",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await he._fromIdTokenResponse(e,n,r),s=St(n),o=new Tt({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=St(n);return new Tt({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function St(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){var t;const n=De(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Et(n,{returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends i.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ct(e,t,n,r)}}function xt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ct._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t){const n=(0,i.m9)(e);await Ot(!0,n,t);const{providerUserInfo:r}=await H(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=At(r||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Nt(e,t,n=!1){const r=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",r)}async function Ot(e,t,n){await ie(t);const r=At(t.providerData),i=!1===e?"provider-already-linked":"no-such-provider";E(r.has(n)===e,t.auth,i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await ee(e,xt(i,s,t,e),n);E(r.idToken,i,"internal-error");const o=X(r.idToken);E(o,i,"internal-error");const{sub:a}=o;return E(e.uid===a,i,"user-mismatch"),Tt._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&y(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pt(e,t,n=!1){const r="signIn",i=await xt(e,r,t),s=await Tt._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Lt(e,t){return Pt(De(e),t)}async function Ft(e,t){const n=(0,i.m9)(e);return await Ot(!1,n,t.providerId),Nt(n,t)}async function Mt(e,t){return Dt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(e,t){return $(e,"POST","/v1/accounts:signInWithCustomToken",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){const n=De(e),r=await Ut(n,{token:t,returnSecureToken:!0}),i=await Tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?jt._fromServerResponse(e,t):y(e,"internal-error")}}class jt extends Bt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new jt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(e,t,n){var r;E((null===(r=n.url)||void 0===r?void 0:r.length)>0,e,"invalid-continue-uri"),E("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(E(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(E(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t,n){const r=(0,i.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&$t(r,s,n),await He(r,s)}async function Wt(e,t,n){await je((0,i.m9)(e),{oobCode:t,newPassword:n})}async function zt(e,t){await qe((0,i.m9)(e),{oobCode:t})}async function Gt(e,t){const n=(0,i.m9)(e),r=await je(n,{oobCode:t}),s=r.requestType;switch(E(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":E(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":E(r.mfaInfo,n,"internal-error");default:E(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Bt._fromServerResponse(De(n),r.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.newEmail:r.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===r.requestType?r.email:r.newEmail)||null,multiFactorInfo:o},operation:s}}async function Ht(e,t){const{data:n}=await Gt((0,i.m9)(e),t);return n.email}async function Kt(e,t,n){const r=De(e),i=await Et(r,{returnSecureToken:!0,email:t,password:n}),s=await Tt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Qt(e,t,n){return Lt((0,i.m9)(e),ht.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t,n){const r=(0,i.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};E(n.handleCodeInApp,r,"argument-error"),n&&$t(r,s,n),await Ke(r,s)}function Jt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Xt(e,t,n){const r=(0,i.m9)(e),s=ht.credentialWithLink(t,n||A());return E(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Lt(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return B(e,"POST","/v1/accounts:createAuthUri",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){const n=R()?A():"http://localhost",r={identifier:t,continueUri:n},{signinMethods:s}=await Zt((0,i.m9)(e),r);return s||[]}async function tn(e,t){const n=(0,i.m9)(e),r=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:r};t&&$t(n.auth,s,t);const{email:o}=await Ge(n.auth,s);o!==e.email&&await e.reload()}async function nn(e,t,n){const r=(0,i.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&$t(r.auth,o,n);const{email:a}=await Qe(r.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=(0,i.m9)(e),s=await r.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(r,rn(r.auth,o));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const c=r.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function on(e,t){return cn((0,i.m9)(e),t,null)}function an(e,t){return cn((0,i.m9)(e),null,t)}async function cn(e,t,n){const{auth:r}=e,i=await e.getIdToken(),s={idToken:i,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,$e(r,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(e){var t,n;if(!e)return null;const{providerId:r}=e,i=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!r&&(null===e||void 0===e?void 0:e.idToken)){const r=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(r){const e="anonymous"!==r&&"custom"!==r?r:null;return new ln(s,e)}}if(!r)return null;switch(r){case"facebook.com":return new dn(s,i);case"github.com":return new fn(s,i);case"google.com":return new pn(s,i);case"twitter.com":return new mn(s,i,e.screenName||null);case"custom":case"anonymous":return new ln(s,null);default:return new ln(s,r,i)}}class ln{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class hn extends ln{constructor(e,t,n,r){super(e,t,n),this.username=r}}class dn extends ln{constructor(e,t){super(e,"facebook.com",t)}}class fn extends hn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class pn extends ln{constructor(e,t){super(e,"google.com",t)}}class mn extends hn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:un(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new vn("enroll",e,t)}static _fromMfaPendingCredential(e){return new vn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return vn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return vn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=De(e),r=t.customData._serverResponse,i=(r.mfaInfo||[]).map((e=>Bt._fromServerResponse(n,e)));E(r.mfaPendingCredential,n,"internal-error");const s=vn._fromMfaPendingCredential(r.mfaPendingCredential);return new yn(s,i,(async e=>{const i=await e._process(n,s);delete r.mfaInfo,delete r.mfaPendingCredential;const o=Object.assign(Object.assign({},r),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return E(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function wn(e,t){var n;const r=(0,i.m9)(e),s=t;return E(t.customData.operationType,r,"argument-error"),E(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,r,"argument-error"),yn._fromError(r,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",V(e,t))}function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",V(e,t))}function In(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",V(e,t))}class En{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Bt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new En(e)}async getSession(){return vn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,r=await this.getSession(),i=await ee(this.user,n._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){var t;const n="string"===typeof e?e:e.uid,r=await this.user.getIdToken(),i=await ee(this.user,In(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==n)),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if("auth/user-token-expired"!==(null===(t=s)||void 0===t?void 0:t.code))throw s}}}const Tn=new WeakMap;function Sn(e){const t=(0,i.m9)(e);return Tn.has(t)||Tn.set(t,En._fromUser(t)),Tn.get(t)}const kn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kn,"1"),this.storage.removeItem(kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(){const e=(0,i.z$)();return ye(e)||Te(e)}const An=1e3,Rn=10;class Nn extends Cn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xn()&&Ae(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ce()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rn):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),An)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nn.type="LOCAL";const On=Nn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends Cn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Dn.type="SESSION";const Pn=Dn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Fn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Ln(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Mn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn.receivers=[];class Un{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Mn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(){return window}function Bn(e){Vn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return"undefined"!==typeof Vn()["WorkerGlobalScope"]&&"function"===typeof Vn()["importScripts"]}async function $n(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function qn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Wn(){return jn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="firebaseLocalStorageDb",Gn=1,Hn="firebaseLocalStorage",Kn="fbase_key";class Qn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Yn(e,t){return e.transaction([Hn],t?"readwrite":"readonly").objectStore(Hn)}function Jn(){const e=indexedDB.deleteDatabase(zn);return new Qn(e).toPromise()}function Xn(){const e=indexedDB.open(zn,Gn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Hn,{keyPath:Kn})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Hn)?t(n):(n.close(),await Jn(),t(await Xn()))}))}))}async function Zn(e,t,n){const r=Yn(e,!0).put({[Kn]:t,value:n});return new Qn(r).toPromise()}async function er(e,t){const n=Yn(e,!1).get(t),r=await new Qn(n).toPromise();return void 0===r?null:r.value}function tr(e,t){const n=Yn(e,!0).delete(t);return new Qn(n).toPromise()}const nr=800,rr=3;class ir{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Xn()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>rr)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fn._getInstance(Wn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await $n(),!this.activeServiceWorker)return;this.sender=new Un(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&qn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xn();return await Zn(e,kn,"1"),await tr(e,kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zn(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>er(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>tr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Yn(e,!1).getAll();return new Qn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),nr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ir.type="LOCAL";const sr=ir;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",V(e,t))}function ar(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",V(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function lr(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=w("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",ur().appendChild(r)}))}function hr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=500,fr=6e4,pr=1e12;class mr{constructor(e){this.auth=e,this.counter=pr,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new gr(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||pr;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||pr;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||pr;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class gr{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r="string"===typeof e?document.getElementById(e):e;E(r,"argument-error",{appName:t}),this.container=r,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=vr(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),fr)}),dr))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vr(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<e;r++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=hr("rcb"),wr=new P(3e4,6e4),br="https://www.google.com/recaptcha/api.js?";class _r{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=Vn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return E(Ir(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Vn().grecaptcha):new Promise(((n,r)=>{const s=Vn().setTimeout((()=>{r(w(e,"network-request-failed"))}),wr.get());Vn()[yr]=()=>{Vn().clearTimeout(s),delete Vn()[yr];const i=Vn().grecaptcha;if(!i)return void r(w(e,"internal-error"));const o=i.render;i.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(i)};const o=`${br}?${(0,i.xO)({onload:yr,render:"explicit",hl:t})}`;lr(o).catch((()=>{clearTimeout(s),r(w(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=Vn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Ir(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Er{async load(e){return new mr(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="recaptcha",Sr={theme:"light",type:"image"};class kr{constructor(e,t=Object.assign({},Sr),n){this.parameters=t,this.type=Tr,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=De(n),this.isInvisible="invisible"===this.parameters.size,E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const r="string"===typeof e?document.getElementById(e):e;E(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Er:new _r,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const r=e=>{e&&(this.tokenChangeListeners.delete(r),n(e))};this.tokenChangeListeners.add(r),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){E(!this.parameters.sitekey,this.auth,"argument-error"),E(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),E("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=Vn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){E(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){E(R()&&!jn(),this.auth,"internal-error"),await Cr(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cr(this.auth);E(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return E(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Cr(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ar(e,t,n){const r=De(e),s=await Or(r,t,(0,i.m9)(n));return new xr(s,(e=>Lt(r,e)))}async function Rr(e,t,n){const r=(0,i.m9)(e);await Ot(!1,r,"phone");const s=await Or(r.auth,t,(0,i.m9)(n));return new xr(s,(e=>Ft(r,e)))}async function Nr(e,t,n){const r=(0,i.m9)(e),s=await Or(r.auth,t,(0,i.m9)(n));return new xr(s,(e=>Mt(r,e)))}async function Or(e,t,n){var r;const i=await n.verify();try{let s;if(E("string"===typeof i,e,"argument-error"),E(n.type===Tr,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){E("enroll"===t.type,e,"internal-error");const n=await bn(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{E("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;E(n,e,"missing-multi-factor-info");const o=await or(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}async function Dr(e,t){await Nt((0,i.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.providerId=Pr.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return Or(this.auth,e,(0,i.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Pr.credentialFromTaggedObject(t)}static credentialFromError(e){return Pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Lr(e,t){return t?C(t):(E(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.PROVIDER_ID="phone",Pr.PHONE_SIGN_IN_METHOD="phone";class Fr extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Mr(e){return Pt(e.auth,new Fr(e),e.bypassAuthState)}function Ur(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),Dt(n,new Fr(e),e.bypassAuthState)}async function Vr(e){const{auth:t,user:n}=e;return E(n,t,"internal-error"),Nt(n,new Fr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mr;case"linkViaPopup":case"linkViaRedirect":return Vr;case"reauthViaPopup":case"reauthViaRedirect":return Ur;default:y(this.auth,"internal-error")}}resolve(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){S(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new P(2e3,1e4);async function $r(e,t,n){const r=De(e);_(e,t,dt);const i=Lr(r,n),s=new zr(r,"signInViaPopup",t,i);return s.executeNotNull()}async function qr(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,dt);const s=Lr(r.auth,n),o=new zr(r.auth,"reauthViaPopup",t,s,r);return o.executeNotNull()}async function Wr(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,dt);const s=Lr(r.auth,n),o=new zr(r.auth,"linkViaPopup",t,s,r);return o.executeNotNull()}class zr extends Br{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){S(1===this.filter.length,"Popup operations only handle one event");const e=Mn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(w(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(w(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(w(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,jr.get())};e()}}zr.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gr="pendingRedirect",Hr=new Map;class Kr extends Br{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const t=await Qr(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Qr(e,t){const n=ei(t),r=Zr(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}async function Yr(e,t){return Zr(e)._set(ei(t),"true")}function Jr(){Hr.clear()}function Xr(e,t){Hr.set(e._key(),t)}function Zr(e){return C(e._redirectPersistence)}function ei(e){return pe(Gr,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e,t,n){return ni(e,t,n)}async function ni(e,t,n){const r=De(e);_(e,t,dt);const i=Lr(r,n);return await Yr(i,r),i._openRedirect(r,t,"signInViaRedirect")}function ri(e,t,n){return ii(e,t,n)}async function ii(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,dt);const s=Lr(r.auth,n);await Yr(s,r.auth);const o=await ui(r);return s._openRedirect(r.auth,t,"reauthViaRedirect",o)}function si(e,t,n){return oi(e,t,n)}async function oi(e,t,n){const r=(0,i.m9)(e);_(r.auth,t,dt);const s=Lr(r.auth,n);await Ot(!1,r,t.providerId),await Yr(s,r.auth);const o=await ui(r);return s._openRedirect(r.auth,t,"linkViaRedirect",o)}async function ai(e,t){return await De(e)._initializationPromise,ci(e,t,!1)}async function ci(e,t,n=!1){const r=De(e),i=Lr(r,t),s=new Kr(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}async function ui(e){const t=Mn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=6e5;class hi{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!pi(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!fi(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(w(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=li&&this.cachedEventUids.clear(),this.cachedEventUids.has(di(e))}saveEventToCache(e){this.cachedEventUids.add(di(e)),this.lastProcessedEventTime=Date.now()}}function di(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function fi({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function pi(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fi(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vi=/^https?/;async function yi(e){if(e.config.emulator)return;const{authorizedDomains:t}=await mi(e);for(const r of t)try{if(wi(r))return}catch(n){}y(e,"unauthorized-domain")}function wi(e){const t=A(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vi.test(n))return!1;if(gi.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=new P(3e4,6e4);function _i(){const e=Vn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Ii(e){return new Promise(((t,n)=>{var r,i,s;function o(){_i(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{_i(),n(w(e,"network-request-failed"))},timeout:bi.get()})}if(null===(i=null===(r=Vn().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Vn().gapi)||void 0===s?void 0:s.load)){const t=hr("iframefcb");return Vn()[t]=()=>{gapi.load?o():n(w(e,"network-request-failed"))},lr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Ei=null,e}))}let Ei=null;function Ti(e){return Ei=Ei||Ii(e),Ei}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new P(5e3,15e3),ki="__/auth/iframe",Ci="emulator/auth/iframe",xi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ai=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ri(e){const t=e.config;E(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?L(t,Ci):`https://${e.config.authDomain}/${ki}`,r={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Ai.get(e.config.apiHost);o&&(r.eid=o);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${(0,i.xO)(r).slice(1)}`}async function Ni(e){const t=await Ti(e),n=Vn().gapi;return E(n,e,"internal-error"),t.open({where:document.body,url:Ri(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xi,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=w(e,"network-request-failed"),s=Vn().setTimeout((()=>{r(i)}),Si.get());function o(){Vn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Di=500,Pi=600,Li="_blank",Fi="http://localhost";class Mi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ui(e,t,n,r=Di,s=Pi){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Oi),{width:r.toString(),height:s.toString(),top:o,left:a}),l=(0,i.z$)().toLowerCase();n&&(c=we(l)?Li:n),ve(l)&&(t=t||Fi,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return Vi(t||"",c),new Mi(null);const d=window.open(t||"",c,h);E(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Mi(d)}function Vi(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi="__/auth/handler",ji="emulator/auth/handler";function $i(e,t,n,r,o,a){E(e.config.authDomain,e,"auth-domain-config-required"),E(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:s.SDK_VERSION,eventId:o};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,i.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const i of Object.keys(u))void 0===u[i]&&delete u[i];return`${qi(e)}?${(0,i.xO)(u).slice(1)}`}function qi({config:e}){return e.emulator?L(e,ji):`https://${e.authDomain}/${Bi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="webStorageSupport";class zi{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pn,this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _openPopup(e,t,n,r){var i;S(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=$i(e,t,n,A(),r);return Ui(e,s,Mn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Bn($i(e,t,n,A(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(S(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Ni(e),n=new hi(e);return t.register("authEvent",(t=>{E(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Wi,{type:Wi},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Wi];void 0!==i&&t(!!i),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=yi(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xe()||ye()||Te()}}const Gi=zi;class Hi{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class Ki extends Hi{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Ki(e)}_finalizeEnroll(e,t,n){return _n(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return ar(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Qi{constructor(){}static assertion(e){return Ki._fromCredential(e)}}Qi.FACTOR_ID="phone";var Yi="@firebase/auth",Ji="0.20.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xi{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function es(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{E(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),E(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Re(e)},a=new Oe(t,r,i);return x(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=De(e.getProvider("auth").getImmediate());return(e=>new Xi(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(Yi,Ji,Zi(e)),(0,s.registerVersion)(Yi,Ji,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=300;(0,i.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ns(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */es("Browser");const rs=2e3;async function is(e,t,n){var r;const{BuildInfo:i}=ns();S(t.sessionId,"AuthEvent did not contain a session ID");const s=await us(t.sessionId),o={};return Te()?o["ibi"]=i.packageName:_e()?o["apn"]=i.packageName:y(e,"operation-not-supported-in-this-environment"),i.displayName&&(o["appDisplayName"]=i.displayName),o["sessionId"]=s,$i(e,n,t.type,void 0,null!==(r=t.eventId)&&void 0!==r?r:void 0,o)}async function ss(e){const{BuildInfo:t}=ns(),n={};Te()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await mi(e,n)}function os(e){const{cordova:t}=ns();return new Promise((n=>{t.plugins.browsertab.isAvailable((r=>{let i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,Se()?"_blank":"_system","location=yes"),n(i)}))}))}async function as(e,t,n){const{cordova:r}=ns();let i=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=r.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(w(e,"redirect-cancelled-by-user"))}),rs))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),_e()&&document.addEventListener("visibilitychange",l,!1),i=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{i()}}function cs(e){var t,n,r,i,s,o,a,c,u,l;const h=ns();E("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),E("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),E("function"===typeof(null===(s=null===(i=null===(r=null===h||void 0===h?void 0:h.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),E("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function us(e){const t=ls(e),n=await crypto.subtle.digest("SHA-256",t),r=Array.from(new Uint8Array(n));return r.map((e=>e.toString(16).padStart(2,"0"))).join("")}function ls(e){if(S(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=20;class ds extends hi{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function fs(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:vs(),postBody:null,tenantId:e.tenantId,error:w(e,"no-auth-event")}}function ps(e,t){return ys()._set(ws(e),t)}async function ms(e){const t=await ys()._get(ws(e));return t&&await ys()._remove(ws(e)),t}function gs(e,t){var n,r;const i=_s(t);if(i.includes("/__/auth/callback")){const t=Is(i),s=t["firebaseError"]?bs(decodeURIComponent(t["firebaseError"])):null,o=null===(r=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],a=o?w(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}function vs(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<hs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ys(){return C(On)}function ws(e){return pe("authEvent",e.config.apiKey,e.name)}function bs(e){try{return JSON.parse(e)}catch(t){return null}}function _s(e){const t=Is(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,r=Is(n)["link"],i=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Is(i)["link"];return s||i||r||n||e}function Is(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,i.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=500;class Ts{constructor(){this._redirectPersistence=Pn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new ds(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,r){cs(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),Jr(),await this._originValidation(e);const s=fs(e,n,r);await ps(e,s);const o=await is(e,s,t),a=await os(o);return as(e,i,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ss(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:r,BuildInfo:i}=ns(),s=setTimeout((async()=>{await ms(e),t.onEvent(ks())}),Es),o=async n=>{clearTimeout(s);const r=await ms(e);let i=null;r&&(null===n||void 0===n?void 0:n["url"])&&(i=gs(r,n["url"])),t.onEvent(i||ks())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=r,c=`${i.packageName.toLowerCase()}://`;ns().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Ss=Ts;function ks(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:w("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(e,t){De(e)._logFramework(t)}var xs="@firebase/auth-compat",As="0.2.23";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rs=1e3;function Ns(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Os(){return"http:"===Ns()||"https:"===Ns()}function Ds(e=(0,i.z$)()){return!("file:"!==Ns()&&"ionic:"!==Ns()&&"capacitor:"!==Ns()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ps(){return(0,i.b$)()||(0,i.UG)()}function Ls(){return(0,i.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function Fs(e=(0,i.z$)()){return/Edge\/\d+/.test(e)}function Ms(e=(0,i.z$)()){return Ls()||Fs(e)}function Us(){try{const e=self.localStorage,t=Mn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Ms()||(0,i.hl)()}catch(e){return Vs()&&(0,i.hl)()}return!1}function Vs(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Bs(){return(Os()||(0,i.ru)()||Ds())&&!Ps()&&Us()&&!Vs()}function js(){return Ds()&&"undefined"!==typeof document}async function $s(){return!!js()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Rs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function qs(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws={LOCAL:"local",NONE:"none",SESSION:"session"},zs=E,Gs="persistence";function Hs(e,t){zs(Object.values(Ws).includes(t),e,"invalid-persistence-type"),(0,i.b$)()?zs(t!==Ws.SESSION,e,"unsupported-persistence-type"):(0,i.UG)()?zs(t===Ws.NONE,e,"unsupported-persistence-type"):Vs()?zs(t===Ws.NONE||t===Ws.LOCAL&&(0,i.hl)(),e,"unsupported-persistence-type"):zs(t===Ws.NONE||Us(),e,"unsupported-persistence-type")}async function Ks(e){await e._initializationPromise;const t=Ys(),n=pe(Gs,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function Qs(e,t){const n=Ys();if(!n)return[];const r=pe(Gs,e,t),i=n.getItem(r);switch(i){case Ws.NONE:return[fe];case Ws.LOCAL:return[sr,Pn];case Ws.SESSION:return[Pn];default:return[]}}function Ys(){var e;try{return(null===(e=qs())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js=E;class Xs{constructor(){this.browserResolver=C(Gi),this.cordovaResolver=C(Ss),this.underlyingResolver=null,this._redirectPersistence=Pn,this._completeRedirectFn=ci,this._overrideRedirectResult=Xr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,r)}async _openRedirect(e,t,n,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,r)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return js()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Js(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await $s();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(e){return e.unwrap()}function eo(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e){return ro(e)}function no(e,t){var n,r;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===(r=t)||void 0===r?void 0:r.code)){const n=t;n.resolver=new oo(e,wn(e,t))}else if(i){const e=ro(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function ro(e){const{_tokenResponse:t}=e instanceof i.ZR?e.customData:e;if(!t)return null;if(!(e instanceof i.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Pr.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let r;switch(n){case u.GOOGLE:r=gt;break;case u.FACEBOOK:r=mt;break;case u.GITHUB:r=vt;break;case u.TWITTER:r=It;break;default:const{oauthIdToken:e,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return i||s||e||o?o?n.startsWith("saml.")?wt._create(n,o):tt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:i}):new pt(n).credential({idToken:e,accessToken:i,rawNonce:a}):null}return e instanceof i.ZR?r.credentialFromError(e):r.credentialFromResult(e)}function io(e,t){return t.catch((t=>{throw t instanceof i.ZR&&no(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:to(e),additionalUserInfo:gn(e),user:ao.getOrCreate(n)}}))}async function so(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>io(e,n.confirm(t))}}class oo{constructor(e,t){this.resolver=t,this.auth=eo(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return io(Zs(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this._delegate=e,this.multiFactor=Sn(e)}static getOrCreate(e){return ao.USER_MAP.has(e)||ao.USER_MAP.set(e,new ao(e)),ao.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return io(this.auth,Ft(this._delegate,e))}async linkWithPhoneNumber(e,t){return so(this.auth,Rr(this._delegate,e,t))}async linkWithPopup(e){return io(this.auth,Wr(this._delegate,e,Xs))}async linkWithRedirect(e){return await Ks(De(this.auth)),si(this._delegate,e,Xs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return io(this.auth,Mt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return so(this.auth,Nr(this._delegate,e,t))}reauthenticateWithPopup(e){return io(this.auth,qr(this._delegate,e,Xs))}async reauthenticateWithRedirect(e){return await Ks(De(this.auth)),ri(this._delegate,e,Xs)}sendEmailVerification(e){return tn(this._delegate,e)}async unlink(e){return await Rt(this._delegate,e),this}updateEmail(e){return on(this._delegate,e)}updatePassword(e){return an(this._delegate,e)}updatePhoneNumber(e){return Dr(this._delegate,e)}updateProfile(e){return sn(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return nn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ao.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const co=E;class uo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;co(n,"invalid-api-key",{appName:e.name}),co(n,"invalid-api-key",{appName:e.name});const r="undefined"!==typeof window?Xs:void 0;this._delegate=t.initialize({options:{persistence:ho(n,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ao.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Le(this._delegate,e,t)}applyActionCode(e){return zt(this._delegate,e)}checkActionCode(e){return Gt(this._delegate,e)}confirmPasswordReset(e,t){return Wt(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return io(this._delegate,Kt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return en(this._delegate,e)}isSignInWithEmailLink(e){return Jt(this._delegate,e)}async getRedirectResult(){co(Bs(),this._delegate,"operation-not-supported-in-this-environment");const e=await ai(this._delegate,Xs);return e?io(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Cs(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:r,error:i,complete:s}=lo(e,t,n);return this._delegate.onAuthStateChanged(r,i,s)}onIdTokenChanged(e,t,n){const{next:r,error:i,complete:s}=lo(e,t,n);return this._delegate.onIdTokenChanged(r,i,s)}sendSignInLinkToEmail(e,t){return Yt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return qt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(Hs(this._delegate,e),e){case Ws.SESSION:t=Pn;break;case Ws.LOCAL:const e=await C(sr)._isAvailable();t=e?sr:On;break;case Ws.NONE:t=fe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return io(this._delegate,kt(this._delegate))}signInWithCredential(e){return io(this._delegate,Lt(this._delegate,e))}signInWithCustomToken(e){return io(this._delegate,Vt(this._delegate,e))}signInWithEmailAndPassword(e,t){return io(this._delegate,Qt(this._delegate,e,t))}signInWithEmailLink(e,t){return io(this._delegate,Xt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return so(this._delegate,Ar(this._delegate,e,t))}async signInWithPopup(e){return co(Bs(),this._delegate,"operation-not-supported-in-this-environment"),io(this._delegate,$r(this._delegate,e,Xs))}async signInWithRedirect(e){return co(Bs(),this._delegate,"operation-not-supported-in-this-environment"),await Ks(this._delegate),ti(this._delegate,e,Xs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Ht(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function lo(e,t,n){let r=e;"function"!==typeof e&&({next:r,error:t,complete:n}=e);const i=r,s=e=>i(e&&ao.getOrCreate(e));return{next:s,error:t,complete:n}}function ho(e,t){const n=Qs(e,t);if("undefined"===typeof self||n.includes(sr)||n.push(sr),"undefined"!==typeof window)for(const r of[On,Pn])n.includes(r)||n.push(r);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uo.Persistence=Ws;class fo{constructor(){this.providerId="phone",this._delegate=new Pr(Zs(r.Z.auth()))}static credential(e,t){return Pr.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}fo.PHONE_SIGN_IN_METHOD=Pr.PHONE_SIGN_IN_METHOD,fo.PROVIDER_ID=Pr.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const po=E;class mo{constructor(e,t,n=r.Z.app()){var i;po(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new kr(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="auth-compat";function vo(e){e.INTERNAL.registerComponent(new c.wA(go,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new uo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:ht,FacebookAuthProvider:mt,GithubAuthProvider:vt,GoogleAuthProvider:gt,OAuthProvider:pt,SAMLAuthProvider:_t,PhoneAuthProvider:fo,PhoneMultiFactorGenerator:Qi,RecaptchaVerifier:mo,TwitterAuthProvider:It,Auth:uo,AuthCredential:Be,Error:i.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion(xs,As)}vo(r.Z)},5871:function(e,t,n){"use strict";n(3408),n(4590);var r=n(2661),i=n(7425),s=n(223),o=n(7142);const a="@firebase/firestore-compat",c="0.2.1";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new i.WA("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){if("undefined"===typeof Uint8Array)throw new i.WA("unimplemented","Uint8Arrays are not available in this environment.")}function h(){if(!(0,i.Me)())throw new i.WA("unimplemented","Blobs are unavailable in Firestore in this environment.")}class d{constructor(e){this._delegate=e}static fromBase64String(e){return h(),new d(i.Jj.fromBase64String(e))}static fromUint8Array(e){return l(),new d(i.Jj.fromUint8Array(e))}toBase64(){return h(),this._delegate.toBase64()}toUint8Array(){return l(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e){return p(e,["next","error","complete"])}function p(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{enableIndexedDbPersistence(e,t){return(0,i.ST)(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return(0,i.fH)(e._delegate)}clearIndexedDbPersistence(e){return(0,i.Fc)(e._delegate)}}class g{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof i.l7||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||(0,i.yq)("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){(0,i.at)(this._delegate,e,t,n)}enableNetwork(){return(0,i.Ix)(this._delegate)}disableNetwork(){return(0,i.TF)(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,(0,i.Wi)("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return(0,i.Mx)(this._delegate)}onSnapshotsInSync(e){return(0,i.sc)(this._delegate,e)}get app(){if(!this._appCompat)throw new i.WA("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new N(this,(0,i.hJ)(this._delegate,e))}catch(t){throw E(t,"collection()","Firestore.collection()")}}doc(e){try{return new I(this,(0,i.JU)(this._delegate,e))}catch(t){throw E(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new x(this,(0,i.B$)(this._delegate,e))}catch(t){throw E(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return(0,i.i3)(this._delegate,(t=>e(new w(this,t))))}batch(){return(0,i.qY)(this._delegate),new b(new i.PU(this._delegate,(e=>(0,i.GL)(this._delegate,e))))}loadBundle(e){return(0,i.Pb)(this._delegate,e)}namedQuery(e){return(0,i.L$)(this._delegate,e).then((e=>e?new x(this,e):null))}}class v extends i.u7{constructor(e){super(),this.firestore=e}convertBytes(e){return new d(new i.Jj(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return I.forKey(t,this.firestore,null)}}function y(e){(0,i.Ub)(e)}class w{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new v(e)}get(e){const t=O(e);return this._delegate.get(t).then((e=>new k(this._firestore,new i.xU(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const r=O(e);return n?(u("Transaction.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=O(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=O(e);return this._delegate.delete(t),this}}class b{constructor(e){this._delegate=e}set(e,t,n){const r=O(e);return n?(u("WriteBatch.set",n),this._delegate.set(r,t,n)):this._delegate.set(r,t),this}update(e,t,n,...r){const i=O(e);return 2===arguments.length?this._delegate.update(i,t):this._delegate.update(i,t,n,...r),this}delete(e){const t=O(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class _{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new i.$q(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new C(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=_.INSTANCES;let r=n.get(e);r||(r=new WeakMap,n.set(e,r));let i=r.get(t);return i||(i=new _(e,new v(e),t),r.set(t,i)),i}}_.INSTANCES=new WeakMap;class I{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}static forPath(e,t,n){if(e.length%2!==0)throw new i.WA("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new I(t,new i.my(t._delegate,n,new i.Ky(e)))}static forKey(e,t,n){return new I(t,new i.my(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new N(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new N(this.firestore,(0,i.hJ)(this._delegate,e))}catch(t){throw E(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,s.m9)(e),e instanceof i.my&&(0,i.Eo)(this._delegate,e)}set(e,t){t=u("DocumentReference.set",t);try{return t?(0,i.pl)(this._delegate,e,t):(0,i.pl)(this._delegate,e)}catch(n){throw E(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?(0,i.r7)(this._delegate,e):(0,i.r7)(this._delegate,e,t,...n)}catch(r){throw E(r,"updateDoc()","DocumentReference.update()")}}delete(){return(0,i.oe)(this._delegate)}onSnapshot(...e){const t=T(e),n=S(e,(e=>new k(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return(0,i.cf)(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?(0,i.kl)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?(0,i.Xk)(this._delegate):(0,i.QT)(this._delegate),t.then((e=>new k(this.firestore,new i.xU(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new I(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function E(e,t,n){return e.message=e.message.replace(t,n),e}function T(e){for(const t of e)if("object"===typeof t&&!f(t))return t;return{}}function S(e,t){var n,r;let i;return i=f(e[0])?e[0]:f(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{i.next&&i.next(t(e))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class k{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new I(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return(0,i.qK)(this._delegate,e._delegate)}}class C extends k{data(e){const t=this._delegate.data(e);return(0,i.K9)(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class x{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new v(e)}where(e,t,n){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.ar)(e,t,n)))}catch(r){throw E(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.Xo)(e,t)))}catch(n){throw E(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.b9)(e)))}catch(t){throw E(t,"limit()","Query.limit()")}}limitToLast(e){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.vh)(e)))}catch(t){throw E(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.e0)(...e)))}catch(t){throw E(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.TQ)(...e)))}catch(t){throw E(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.Lx)(...e)))}catch(t){throw E(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new x(this.firestore,(0,i.IO)(this._delegate,(0,i.Wu)(...e)))}catch(t){throw E(t,"endAt()","Query.endAt()")}}isEqual(e){return(0,i.iE)(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?(0,i.UQ)(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?(0,i.zN)(this._delegate):(0,i.PL)(this._delegate),t.then((e=>new R(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=T(e),n=S(e,(e=>new R(this.firestore,new i.W(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return(0,i.cf)(this._delegate,t,n)}withConverter(e){return new x(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class A{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new C(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class R{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new x(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new C(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new A(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new C(this._firestore,n))}))}isEqual(e){return(0,i.qK)(this._delegate,e._delegate)}}class N extends x{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new I(this.firestore,e):null}doc(e){try{return new I(this.firestore,void 0===e?(0,i.JU)(this._delegate):(0,i.JU)(this._delegate,e))}catch(t){throw E(t,"doc()","CollectionReference.doc()")}}add(e){return(0,i.ET)(this._delegate,e).then((e=>new I(this.firestore,e)))}isEqual(e){return(0,i.Eo)(this._delegate,e._delegate)}withConverter(e){return new N(this.firestore,e?this._delegate.withConverter(_.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function O(e){return(0,i.Cf)(e,i.my)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(...e){this._delegate=new i.Lz(...e)}static documentId(){return new D(i.Xb.keyField().canonicalString())}isEqual(e){return e=(0,s.m9)(e),e instanceof i.Lz&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this._delegate=e}static serverTimestamp(){const e=(0,i.Bt)();return e._methodName="FieldValue.serverTimestamp",new P(e)}static delete(){const e=(0,i.AK)();return e._methodName="FieldValue.delete",new P(e)}static arrayUnion(...e){const t=(0,i.vr)(...e);return t._methodName="FieldValue.arrayUnion",new P(t)}static arrayRemove(...e){const t=(0,i.Ab)(...e);return t._methodName="FieldValue.arrayRemove",new P(t)}static increment(e){const t=(0,i.nP)(e);return t._methodName="FieldValue.increment",new P(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={Firestore:g,GeoPoint:i.F8,Timestamp:i.EK,Blob:d,Transaction:w,WriteBatch:b,DocumentReference:I,DocumentSnapshot:k,Query:x,QueryDocumentSnapshot:C,QuerySnapshot:R,CollectionReference:N,FieldPath:D,FieldValue:P,setLogLevel:y,CACHE_SIZE_UNLIMITED:i.IX};function F(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("firestore").getImmediate();return t(n,r)}),"PUBLIC").setServiceProps(Object.assign({},L)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(e){F(e,((e,t)=>new g(e,t,new m))),e.registerVersion(a,c)}M(r.Z)},8307:function(e,t,n){"use strict";n.d(t,{IO:function(){return r.IO},JU:function(){return r.JU},PL:function(){return r.PL},ad:function(){return r.ad},ar:function(){return r.ar},cf:function(){return r.cf},hJ:function(){return r.hJ},pl:function(){return r.pl},r7:function(){return r.r7}});var r=n(7425)},1992:function(e,t,n){"use strict";n.d(t,{Jt:function(){return Ae},cF:function(){return Ne},iH:function(){return Re}});n(2801),n(7658),n(3408),n(4590);var r=n(7077),i=n(223),s=n(7142);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.ZR{constructor(e,t,n=0){super(h(e),`Firebase Storage: ${t} (${h(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return h(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function h(e){return"storage/"+e}function d(){const e="An unknown error occurred, please check the error payload for server response.";return new l("unknown",e)}function f(e){return new l("object-not-found","Object '"+e+"' does not exist.")}function p(e){return new l("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function m(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l("unauthenticated",e)}function g(){return new l("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function v(e){return new l("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new l("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new l("canceled","User canceled the upload/download.")}function b(e){return new l("invalid-url","Invalid URL '"+e+"'.")}function _(e){return new l("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function I(){return new l("no-default-bucket","No default bucket found. Did you set the '"+a+"' property when initializing the app?")}function E(){return new l("no-download-url","The given file does not have any download URLs.")}function T(e){return new l("invalid-argument",e)}function S(){return new l("app-deleted","The Firebase app was deleted.")}function k(e){return new l("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function C(e){throw new l("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=x.makeFromUrl(e,t)}catch(r){return new x(e,"")}if(""===n.path)return n;throw _(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===o?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),y={bucket:1,path:2},w=[{regex:a,indices:c,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let o=0;o<w.length;o++){const t=w[o],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new x(e,i),t.postModify(n);break}}if(null==n)throw b(e);return n}}class A{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function N(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){return void 0!==e}function D(e){return"object"===typeof e&&!Array.isArray(e)}function P(e){return"string"===typeof e||e instanceof String}function L(e,t,n,r){if(r<t)throw T(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw T(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function M(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(U||(U={}));class B{constructor(e,t,n,r,i,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new j(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===U.NO_ERROR,i=n.getStatus();if((!t||V(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===U.ABORT;return void e(!1,new j(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new j(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());O(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=d();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?S():w();r(e)}else{const e=y();r(e)}};this.canceled_?t(!1,new j(!1,null,!0)):this.backoffId_=R(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&N(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class j{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function $(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function q(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function W(e,t){t&&(e["X-Firebase-GMPID"]=t)}function z(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function G(e,t,n,r,i,s,o=!0){const a=M(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return W(u,t),$(u,n),q(u,s),z(u,r),new B(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){let t;try{t=JSON.parse(e)}catch(n){return null}return D(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function Q(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function Y(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(e,t){return t}class X{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||J}}let Z=null;function ee(e){return!P(e)||e.length<2?e:Y(e)}function te(){if(Z)return Z;const e=[];function t(e,t){return ee(t)}e.push(new X("bucket")),e.push(new X("generation")),e.push(new X("metageneration")),e.push(new X("name","fullPath",!0));const n=new X("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new X("size");return i.xform=r,e.push(i),e.push(new X("timeCreated")),e.push(new X("updated")),e.push(new X("md5Hash",null,!0)),e.push(new X("cacheControl",null,!0)),e.push(new X("contentDisposition",null,!0)),e.push(new X("contentEncoding",null,!0)),e.push(new X("contentLanguage",null,!0)),e.push(new X("contentType",null,!0)),e.push(new X("metadata","customMetadata",!0)),Z=e,Z}function ne(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new x(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function re(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return ne(r,e),r}function ie(e,t,n){const r=H(t);if(null===r)return null;const i=r;return re(e,i,n)}function se(e,t,n,r){const i=H(t);if(null===i)return null;if(!P(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=F(a,n,r),u=M({alt:"media",token:t});return c+u}));return c[0]}class oe{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(e){if(!e)throw d()}function ce(e,t){function n(n,r){const i=ie(e,r,t);return ae(null!==i),se(i,r,e.host,e._protocol)}return n}function ue(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?g():m():402===t.getStatus()?p(e.bucket):403===t.getStatus()?v(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function le(e){const t=ue(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=f(e.path)),i.serverResponse=r.serverResponse,i}return n}function he(e,t,n){const r=t.fullServerUrl(),i=F(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new oe(i,s,ce(e,n),o);return a.errorHandler=le(t),a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let de=null;class fe{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=U.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=U.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw C("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw C("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw C("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw C("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw C("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class pe extends fe{initXhr(){this.xhr_.responseType="text"}}function me(){return de?de():new pe}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(e,t){this._service=e,this._location=t instanceof x?t:x.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ge(e,t)}get root(){const e=new x(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y(this._location.path)}get storage(){return this._service}get parent(){const e=K(this._location.path);if(null===e)return null;const t=new x(this._location.bucket,e);return new ge(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw k(e)}}function ve(e){e._throwIfRoot("getDownloadURL");const t=he(e.storage,e._location,te());return e.storage.makeRequestWithTokens(t,me).then((e=>{if(null===e)throw E();return e}))}function ye(e,t){const n=Q(e._location.path,t),r=new x(e._location.bucket,n);return new ge(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){return/^[A-Za-z]+:\/\//.test(e)}function be(e,t){return new ge(e,t)}function _e(e,t){if(e instanceof Se){const n=e;if(null==n._bucket)throw I();const r=new ge(n,n._bucket);return null!=t?_e(r,t):r}return void 0!==t?ye(e,t):e}function Ie(e,t){if(t&&we(t)){if(e instanceof Se)return be(e,t);throw T("To use ref(service, url), the first argument must be a Storage instance.")}return _e(e,t)}function Ee(e,t){const n=null===t||void 0===t?void 0:t[a];return null==n?null:x.makeFromBucketSpec(n,e)}function Te(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:s}=r;s&&(e._overrideAuthToken="string"===typeof s?s:(0,i.Sg)(s,e.app.options.projectId))}class Se{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?x.makeFromBucketSpec(r,this._host):Ee(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,e):this._bucket=Ee(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){L("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){L("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ge(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new A(S());{const s=G(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const ke="@firebase/storage",Ce="0.9.12",xe="storage";function Ae(e){return e=(0,i.m9)(e),ve(e)}function Re(e,t){return e=(0,i.m9)(e),Ie(e,t)}function Ne(e=(0,r.getApp)(),t){e=(0,i.m9)(e);const n=(0,r._getProvider)(e,xe),s=n.getImmediate({identifier:t}),o=(0,i.P0)("storage");return o&&Oe(s,...o),s}function Oe(e,t,n,r={}){Te(e,t,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new Se(n,i,s,t,r.SDK_VERSION)}function Pe(){(0,r._registerComponent)(new s.wA(xe,De,"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(ke,Ce,""),(0,r.registerVersion)(ke,Ce,"esm2017")}Pe()},5431:function(e,t,n){"use strict";n.d(t,{z:function(){return s}});var r,i=function(){return Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))};function s(e,t){void 0===t&&(t={});var n=t.registrationOptions;void 0===n&&(n={}),delete t.registrationOptions;var s=function(e){var n=[],r=arguments.length-1;while(r-- >0)n[r]=arguments[r+1];t&&t[e]&&t[e].apply(t,n)};"serviceWorker"in navigator&&r.then((function(){i()?(c(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)}))):(a(e,s,n),navigator.serviceWorker.ready.then((function(e){s("ready",e)})).catch((function(e){return o(s,e)})))}))}function o(e,t){navigator.onLine||e("offline"),e("error",t)}function a(e,t,n){navigator.serviceWorker.register(e,n).then((function(e){t("registered",e),e.waiting?t("updated",e):e.onupdatefound=function(){t("updatefound",e);var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?t("updated",e):t("cached",e))}}})).catch((function(e){return o(t,e)}))}function c(e,t,n){fetch(e).then((function(r){404===r.status?(t("error",new Error("Service worker not found at "+e)),u()):-1===r.headers.get("content-type").indexOf("javascript")?(t("error",new Error("Expected "+e+" to have javascript content-type, but received "+r.headers.get("content-type"))),u()):a(e,t,n)})).catch((function(e){return o(t,e)}))}function u(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){return o(emit,e)}))}"undefined"!==typeof window&&(r="undefined"!==typeof Promise?new Promise((function(e){return window.addEventListener("load",e)})):{then:function(e){return window.addEventListener("load",e)}})},5269:function(e){(function(){var t={expires:"1d",path:"; path=/",domain:"",secure:"",sameSite:"; SameSite=Lax"},n={install:function(e,t){t&&this.config(t.expires,t.path,t.domain,t.secure,t.sameSite),e.prototype&&(e.prototype.$cookies=this),e.config&&e.config.globalProperties&&(e.config.globalProperties.$cookies=this,e.provide("$cookies",this)),e.$cookies=this},config:function(e,n,r,i,s){t.expires=e||"1d",t.path=n?"; path="+n:"; path=/",t.domain=r?"; domain="+r:"",t.secure=i?"; Secure":"",t.sameSite=s?"; SameSite="+s:"; SameSite=Lax"},get:function(e){var t=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(t&&"{"===t.substring(0,1)&&"}"===t.substring(t.length-1,t.length))try{t=JSON.parse(t)}catch(n){return t}return t},set:function(e,n,r,i,s,o,a){if(!e)throw new Error("Cookie name is not found in the first argument.");if(/^(?:expires|max\-age|path|domain|secure|SameSite)$/i.test(e))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+e);n&&n.constructor===Object&&(n=JSON.stringify(n));var c="";if(r=void 0==r?t.expires:r,r&&0!=r)switch(r.constructor){case Number:c=r===1/0||-1===r?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+r;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(r)){var u=r.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(r.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":c="; max-age="+2592e3*+u;break;case"d":c="; max-age="+86400*+u;break;case"h":c="; max-age="+3600*+u;break;case"min":c="; max-age="+60*+u;break;case"s":c="; max-age="+u;break;case"y":c="; max-age="+31104e3*+u;break;default:new Error('unknown exception of "set operation"')}}else c="; expires="+r;break;case Date:c="; expires="+r.toUTCString();break}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(n)+c+(s?"; domain="+s:t.domain)+(i?"; path="+i:t.path)+(void 0==o?t.secure:o?"; Secure":"")+(void 0==a?t.sameSite:a?"; SameSite="+a:""),this},remove:function(e,n,r){return!(!e||!this.isKey(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(r?"; domain="+r:t.domain)+(n?"; path="+n:t.path)+"; SameSite=Lax",!0)},isKey:function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},keys:function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e}};e.exports=n,"undefined"!==typeof window&&(window.$cookies=n)})()},89:function(e,t){"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},5339:function(e,t,n){n(7658),e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fae3")}({"01f9":function(e,t,n){"use strict";var r=n("2d00"),i=n("5ca1"),s=n("2aba"),o=n("32e9"),a=n("84f2"),c=n("41a0"),u=n("7f20"),l=n("38fd"),h=n("2b4c")("iterator"),d=!([].keys&&"next"in[].keys()),f="@@iterator",p="keys",m="values",g=function(){return this};e.exports=function(e,t,n,v,y,w,b){c(n,t,v);var _,I,E,T=function(e){if(!d&&e in x)return x[e];switch(e){case p:return function(){return new n(this,e)};case m:return function(){return new n(this,e)}}return function(){return new n(this,e)}},S=t+" Iterator",k=y==m,C=!1,x=e.prototype,A=x[h]||x[f]||y&&x[y],R=A||T(y),N=y?k?T("entries"):R:void 0,O="Array"==t&&x.entries||A;if(O&&(E=l(O.call(new e)),E!==Object.prototype&&E.next&&(u(E,S,!0),r||"function"==typeof E[h]||o(E,h,g))),k&&A&&A.name!==m&&(C=!0,R=function(){return A.call(this)}),r&&!b||!d&&!C&&x[h]||o(x,h,R),a[t]=R,a[S]=g,y)if(_={values:k?R:T(m),keys:w?R:T(p),entries:N},b)for(I in _)I in x||s(x,I,_[I]);else i(i.P+i.F*(d||C),t,_);return _}},"0d58":function(e,t,n){var r=n("ce10"),i=n("e11e");e.exports=Object.keys||function(e){return r(e,i)}},1495:function(e,t,n){var r=n("86cc"),i=n("cb7c"),s=n("0d58");e.exports=n("9e1e")?Object.defineProperties:function(e,t){i(e);var n,o=s(t),a=o.length,c=0;while(a>c)r.f(e,n=o[c++],t[n]);return e}},"230e":function(e,t,n){var r=n("d3f4"),i=n("7726").document,s=r(i)&&r(i.createElement);e.exports=function(e){return s?i.createElement(e):{}}},"2aba":function(e,t,n){var r=n("7726"),i=n("32e9"),s=n("69a8"),o=n("ca5a")("src"),a=n("fa5b"),c="toString",u=(""+a).split(c);n("8378").inspectSource=function(e){return a.call(e)},(e.exports=function(e,t,n,a){var c="function"==typeof n;c&&(s(n,"name")||i(n,"name",t)),e[t]!==n&&(c&&(s(n,o)||i(n,o,e[t]?""+e[t]:u.join(String(t)))),e===r?e[t]=n:a?e[t]?e[t]=n:i(e,t,n):(delete e[t],i(e,t,n)))})(Function.prototype,c,(function(){return"function"==typeof this&&this[o]||a.call(this)}))},"2aeb":function(e,t,n){var r=n("cb7c"),i=n("1495"),s=n("e11e"),o=n("613b")("IE_PROTO"),a=function(){},c="prototype",u=function(){var e,t=n("230e")("iframe"),r=s.length,i="<",o=">";t.style.display="none",n("fab2").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(i+"script"+o+"document.F=Object"+i+"/script"+o),e.close(),u=e.F;while(r--)delete u[c][s[r]];return u()};e.exports=Object.create||function(e,t){var n;return null!==e?(a[c]=r(e),n=new a,a[c]=null,n[o]=e):n=u(),void 0===t?n:i(n,t)}},"2b4c":function(e,t,n){var r=n("5537")("wks"),i=n("ca5a"),s=n("7726").Symbol,o="function"==typeof s,a=e.exports=function(e){return r[e]||(r[e]=o&&s[e]||(o?s:i)("Symbol."+e))};a.store=r},"2d00":function(e,t){e.exports=!1},"2d95":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"32e9":function(e,t,n){var r=n("86cc"),i=n("4630");e.exports=n("9e1e")?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"38fd":function(e,t,n){var r=n("69a8"),i=n("4bf8"),s=n("613b")("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),r(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},"41a0":function(e,t,n){"use strict";var r=n("2aeb"),i=n("4630"),s=n("7f20"),o={};n("32e9")(o,n("2b4c")("iterator"),(function(){return this})),e.exports=function(e,t,n){e.prototype=r(o,{next:i(1,n)}),s(e,t+" Iterator")}},4588:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},4630:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"4bf8":function(e,t,n){var r=n("be13");e.exports=function(e){return Object(r(e))}},5537:function(e,t,n){var r=n("8378"),i=n("7726"),s="__core-js_shared__",o=i[s]||(i[s]={});(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:r.version,mode:n("2d00")?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"5ca1":function(e,t,n){var r=n("7726"),i=n("8378"),s=n("32e9"),o=n("2aba"),a=n("9b43"),c="prototype",u=function(e,t,n){var l,h,d,f,p=e&u.F,m=e&u.G,g=e&u.S,v=e&u.P,y=e&u.B,w=m?r:g?r[t]||(r[t]={}):(r[t]||{})[c],b=m?i:i[t]||(i[t]={}),_=b[c]||(b[c]={});for(l in m&&(n=t),n)h=!p&&w&&void 0!==w[l],d=(h?w:n)[l],f=y&&h?a(d,r):v&&"function"==typeof d?a(Function.call,d):d,w&&o(w,l,d,e&u.U),b[l]!=d&&s(b,l,f),v&&_[l]!=d&&(_[l]=d)};r.core=i,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,e.exports=u},"613b":function(e,t,n){var r=n("5537")("keys"),i=n("ca5a");e.exports=function(e){return r[e]||(r[e]=i(e))}},"626a":function(e,t,n){var r=n("2d95");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},6821:function(e,t,n){var r=n("626a"),i=n("be13");e.exports=function(e){return r(i(e))}},"69a8":function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},"6a99":function(e,t,n){var r=n("d3f4");e.exports=function(e,t){if(!r(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!r(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!r(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},7726:function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},"77f1":function(e,t,n){var r=n("4588"),i=Math.max,s=Math.min;e.exports=function(e,t){return e=r(e),e<0?i(e+t,0):s(e,t)}},"79e5":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"7f20":function(e,t,n){var r=n("86cc").f,i=n("69a8"),s=n("2b4c")("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},"7f7f":function(e,t,n){var r=n("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,o="name";o in i||n("9e1e")&&r(i,o,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},8378:function(e,t){var n=e.exports={version:"2.6.12"};"number"==typeof __e&&(__e=n)},"84f2":function(e,t){e.exports={}},"86cc":function(e,t,n){var r=n("cb7c"),i=n("c69a"),s=n("6a99"),o=Object.defineProperty;t.f=n("9e1e")?Object.defineProperty:function(e,t,n){if(r(e),t=s(t,!0),r(n),i)try{return o(e,t,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},"9b43":function(e,t,n){var r=n("d8e8");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"9c6c":function(e,t,n){var r=n("2b4c")("unscopables"),i=Array.prototype;void 0==i[r]&&n("32e9")(i,r,{}),e.exports=function(e){i[r][e]=!0}},"9def":function(e,t,n){var r=n("4588"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},"9e1e":function(e,t,n){e.exports=!n("79e5")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},ac6a:function(e,t,n){for(var r=n("cadf"),i=n("0d58"),s=n("2aba"),o=n("7726"),a=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),h=u("toStringTag"),d=c.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(f),m=0;m<p.length;m++){var g,v=p[m],y=f[v],w=o[v],b=w&&w.prototype;if(b&&(b[l]||a(b,l,d),b[h]||a(b,h,v),c[v]=d,y))for(g in r)b[g]||s(b,g,r[g],!0)}},be13:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},c366:function(e,t,n){var r=n("6821"),i=n("9def"),s=n("77f1");e.exports=function(e){return function(t,n,o){var a,c=r(t),u=i(c.length),l=s(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}}},c69a:function(e,t,n){e.exports=!n("9e1e")&&!n("79e5")((function(){return 7!=Object.defineProperty(n("230e")("div"),"a",{get:function(){return 7}}).a}))},ca5a:function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+r).toString(36))}},cadf:function(e,t,n){"use strict";var r=n("9c6c"),i=n("d53b"),s=n("84f2"),o=n("6821");e.exports=n("01f9")(Array,"Array",(function(e,t){this._t=o(e),this._i=0,this._k=t}),(function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,i(1)):i(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},cb7c:function(e,t,n){var r=n("d3f4");e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},ce10:function(e,t,n){var r=n("69a8"),i=n("6821"),s=n("c366")(!1),o=n("613b")("IE_PROTO");e.exports=function(e,t){var n,a=i(e),c=0,u=[];for(n in a)n!=o&&r(a,n)&&u.push(n);while(t.length>c)r(a,n=t[c++])&&(~s(u,n)||u.push(n));return u}},d3f4:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},d53b:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},d8e8:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},e11e:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},f6fd:function(e,t){(function(e){var t="currentScript",n=e.getElementsByTagName("script");t in e||Object.defineProperty(e,t,{get:function(){try{throw new Error}catch(r){var e,t=(/.*at [^\(]*\((.*):.+:.+\)$/gi.exec(r.stack)||[!1])[1];for(e in n)if(n[e].src==t||"interactive"==n[e].readyState)return n[e];return null}}})})(document)},fa5b:function(e,t,n){e.exports=n("5537")("native-function-to-string",Function.toString)},fab2:function(e,t,n){var r=n("7726").document;e.exports=r&&r.documentElement},fae3:function(e,t,n){"use strict";var r;(n.r(t),n.d(t,"longClickDirective",(function(){return s})),"undefined"!==typeof window)&&(n("f6fd"),(r=window.document.currentScript)&&(r=r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))&&(n.p=r[1]));n("ac6a"),n("7f7f");var i=function(e){var t=e.delay,n=void 0===t?400:t,r=e.interval,i=void 0===r?50:r;return{bind:function(e,t,r){if("function"!==typeof t.value){var s=r.context.name,o="[longclick:] provided expression '".concat(t.expression,"' is not a function, but has to be");s&&(o+="Found in component '".concat(s,"' ")),console.warn(o)}var a=null,c=null,u=function(e){"click"===e.type&&0!==e.button||null===a&&(a=setTimeout((function(){i&&i>0&&(c=setInterval((function(){h()}),i)),h()}),n))},l=function(){null!==a&&(clearTimeout(a),a=null),c&&(clearInterval(c),c=null)},h=function(e){t.value(e)};["mousedown","touchstart"].forEach((function(t){return e.addEventListener(t,u)})),["click","mouseout","touchend","touchcancel"].forEach((function(t){return e.addEventListener(t,l)}))}}},s=i}})},2661:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(223),i=n(7142),s=n(7077),o=n(5168);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.37";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},7077:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return be},getApps:function(){return _e},initializeApp:function(){return we},onLog:function(){return Te},registerVersion:function(){return Ee},setLogLevel:function(){return Se}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(I(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function w(e){y=e(y)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(E(this),t),I(h.get(this))}:function(...t){return I(e.apply(E(this),t))}:function(t,...n){const r=e.call(E(this),t,...n);return f.set(r,t.sort?t.sort():[t]),I(r)}}function _(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const E=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=k.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return C.set(t,s),s}w((e=>({...e,get:(t,n,r)=>x(t,n)||e.get(t,n,r),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",O="0.8.2",D=new i.Yd("@firebase/app"),P="@firebase/app-compat",L="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",W="@firebase/functions-compat",z="@firebase/installations",G="@firebase/installations-compat",H="@firebase/messaging",K="@firebase/messaging-compat",Q="@firebase/performance",Y="@firebase/performance-compat",J="@firebase/remote-config",X="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.12.1",se="[DEFAULT]",oe={[N]:"fire-core",[P]:"fire-core-compat",[F]:"fire-analytics",[L]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[V]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[W]:"fire-fn-compat",[z]:"fire-iid",[G]:"fire-iid-compat",[H]:"fire-fcm",[K]:"fire-fcm-compat",[Q]:"fire-perf",[Y]:"fire-perf-compat",[J]:"fire-rc",[X]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){D.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return D.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=ie;function we(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const u=new ve(n,i,c);return ae.set(o,u),u}function be(e=se){const t=ae.get(e);if(!t&&e===se)return we();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Ee(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void D.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Se(e){(0,i.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ce=1,xe="firebase-heartbeat-store";let Ae=null;function Re(){return Ae||(Ae=T(ke,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xe)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function Ne(e){var t;try{const t=await Re();return t.transaction(xe).objectStore(xe).get(De(e))}catch(n){if(n instanceof s.ZR)D.warn(n.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});D.warn(e.message)}}}async function Oe(e,t){var n;try{const n=await Re(),r=n.transaction(xe,"readwrite"),i=r.objectStore(xe);return await i.put(t,De(e)),r.done}catch(r){if(r instanceof s.ZR)D.warn(r.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});D.warn(e.message)}}}function De(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=1024,Le=2592e6;class Fe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ve(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Le})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Ue(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Ue(e,t=Pe){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Be(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ve{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Oe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(e){he(new r.wA("platform-logger",(e=>new A(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Fe(e)),"PRIVATE")),Ee(N,O,e),Ee(N,O,"esm2017"),Ee("fire-js","")}je("")},7142:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},5168:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}},2483:function(e,t,n){"use strict";n.d(t,{PO:function(){return V},p7:function(){return tt}});n(7658),n(541);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function c(e,t){const n={};for(const r in t){const i=t[r];n[r]=l(i)?i.map(e):e(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function m(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function g(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return l(e)?b(e,t):l(t)?b(t,e):e===t}function b(e,t){return l(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var I,E;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(E||(E={}));function T(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const S=/^[^#]+#/;function k(e,t){return e.replace(S,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const N=new Map;function O(e,t){N.set(e,t)}function D(e){const t=N.get(e);return N.delete(e),t}let P=()=>location.protocol+"//"+location.host;function L(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,e);return o+r+i}function F(e,t,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=L(e,location),c=n.value,u=t.value;let l=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?E.forward:E.back:E.unknown})}))};function u(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:x()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:u,listen:l,destroy:d}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function U(e){const{history:t,location:n}=window,r={value:L(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(e,n){const o=a({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function c(e,n){const o=a({},i.value,t.state,{forward:e,scroll:x()});s(o.current,o,!0);const c=a({},M(r.value,e,null),{position:o.position+1},n);s(e,c,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(e){e=T(e);const t=U(e),n=F(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:k.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function B(e){return"string"===typeof e||e&&"object"===typeof e}function j(e){return"string"===typeof e||"symbol"===typeof e}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var W;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(W||(W={}));function z(e,t){return a(new Error,{type:e,[q]:!0},t)}function G(e,t){return e instanceof Error&&q in e&&(null==t||!!(e.type&t))}const H="[^/]+?",K={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function Y(e,t){const n=a({},K,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const l=u||H;if(l!==H){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${l}): `+h.message)}}let d=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;t||(d=c&&a.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function u(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function J(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function X(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=J(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ee={type:0,value:""},te=/[a-zA-Z0-9_]/;function ne(e){if(!e)return[[]];if("/"===e)return[[ee]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:te.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function re(e,t,n){const r=Y(ne(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ie(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,c=oe(e);c.aliasOf=r&&r.record;const h=le(t,e),d=[c];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=re(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&o(e.name)),c.children){const e=c.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,(f.record.components&&Object.keys(f.record.components).length||f.record.name||f.record.redirect)&&l(f)}return p?()=>{o(p)}:u}function o(e){if(j(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function c(){return n}function l(e){let t=0;while(t<n.length&&X(e,n[t])>=0&&(e.record.path!==n[t].record.path||!he(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,c={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw z(1,{location:e});0,o=i.record.name,c=a(se(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&se(e.params,i.keys.map((e=>e.name)))),s=i.stringify(c)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw z(1,{location:e,currentLocation:t});o=i.record.name,c=a({},t.params,e.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:ue(u)}}return t=le({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function se(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function oe(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ae(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ae(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function he(e,t){return t.children.some((t=>t===e||he(e,t)))}const de=/#/g,fe=/&/g,pe=/\//g,me=/=/g,ge=/\?/g,ve=/\+/g,ye=/%5B/g,we=/%5D/g,be=/%5E/g,_e=/%60/g,Ie=/%7B/g,Ee=/%7C/g,Te=/%7D/g,Se=/%20/g;function ke(e){return encodeURI(""+e).replace(Ee,"|").replace(ye,"[").replace(we,"]")}function Ce(e){return ke(e).replace(Ie,"{").replace(Te,"}").replace(be,"^")}function xe(e){return ke(e).replace(ve,"%2B").replace(Se,"+").replace(de,"%23").replace(fe,"%26").replace(_e,"`").replace(Ie,"{").replace(Te,"}").replace(be,"^")}function Ae(e){return xe(e).replace(me,"%3D")}function Re(e){return ke(e).replace(de,"%23").replace(ge,"%3F")}function Ne(e){return null==e?"":Re(e).replace(pe,"%2F")}function Oe(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ve," "),n=e.indexOf("="),s=Oe(n<0?e:e.slice(0,n)),o=n<0?null:Oe(e.slice(n+1));if(s in t){let e=t[s];l(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Pe(e){let t="";for(let n in e){const r=e[n];if(n=Ae(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=l(r)?r.map((e=>e&&xe(e))):[r&&xe(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Le(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=l(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Fe=Symbol(""),Me=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),Be=Symbol("");function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(z(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(z(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch((e=>a(e)))}))}function qe(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(We(a)){const o=a.__vccOpts||a,c=o[t];c&&i.push($e(c,n,r,s,e))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const c=a.__vccOpts||a,u=c[t];return u&&$e(u,n,r,s,e)()}))))}}}return i}function We(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Ve),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qe(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function l(n={}){return Ke(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Ge=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=(0,i.qj)(ze(e)),{options:s}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Je(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),He=Ge;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(Be),o=(0,r.Fl)((()=>e.route||s.value)),c=(0,r.f3)(Me,0),u=(0,r.Fl)((()=>{let e=(0,i.SU)(c);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Me,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Fe,l),(0,r.JJ)(Be,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=e.name,c=l.value,u=c&&c.components[s];if(!u)return Ze(n.default,{Component:u,route:i});const d=c.props[s],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},f,t,{onVnodeUnmounted:p,ref:h}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Xe;function tt(e){const t=ie(e.routes,e),n=e.parseQuery||De,o=e.stringifyQuery||Pe,h=e.history;const d=je(),m=je(),v=je(),y=(0,i.XI)($);let w=$;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(e=>""+e)),_=c.bind(null,Ne),E=c.bind(null,Oe);function T(e,n){let r,i;return j(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function N(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:E(s.params),hash:Oe(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const s=t.resolve(i,r),c=e.hash||"";s.params=b(E(s.params));const u=p(o,a({},e,{hash:Ce(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pe?Le(e.query):e.query||{}},s,{redirectedFrom:void 0,href:l})}function P(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function L(e,t){if(w!==e)return z(8,{from:t,to:e})}function F(e){return V(e)}function M(e){return F(a(P(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function V(e,t){const n=w=N(e),r=y.value,i=e.state,s=e.force,c=!0===e.replace,u=U(n);if(u)return V(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),t||n);const l=n;let h;return l.redirectedFrom=t,!s&&g(o,r,n)&&(h=z(16,{to:l,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch((e=>G(e)?G(e,2)?e:te(e):Z(e,l,r))).then((e=>{if(e){if(G(e,2))return V(a({replace:c},P(e.to),{state:"object"===typeof e.to?a({},i,e.to.state):i,force:s}),t||l)}else e=H(l,r,!0,c,i);return W(l,r,e),e}))}function B(e,t){const n=L(e,t);return n?Promise.reject(n):Promise.resolve()}function q(e,t){let n;const[r,i,s]=rt(e,t);n=qe(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of d.list())n.push($e(r,e,t));return n.push(o),nt(n)})).then((()=>{n=qe(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qe(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of m.list())n.push($e(r,e,t));return n.push(o),nt(n)})).catch((e=>G(e,8)?e:Promise.reject(e)))}function W(e,t,n){for(const r of v.list())r(e,t,n)}function H(e,t,n,r,i){const o=L(e,t);if(o)return o;const c=t===$,u=s?history.state:{};n&&(r||c?h.replace(e.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(e.fullPath,i)),y.value=e,ne(e,t,n,c),te()}let K;function Q(){K||(K=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=N(e),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(u);w=r;const o=y.value;s&&O(R(o.fullPath,n.delta),x()),q(r,o).catch((e=>G(e,12)?e:G(e,2)?(V(e.to,r).then((e=>{G(e,20)&&!n.delta&&n.type===I.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(e,r,o)))).then((e=>{e=e||H(r,o,!1),e&&(n.delta&&!G(e,8)?h.go(-n.delta,!1):n.type===I.pop&&G(e,20)&&h.go(-1,!1)),W(r,o,e)})).catch(u)})))}let Y,J=je(),X=je();function Z(e,t,n){te(e);const r=X.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return Y&&y.value!==$?Promise.resolve():new Promise(((e,t)=>{J.add([e,t])}))}function te(e){return Y||(Y=!e,Q(),J.list().forEach((([t,n])=>e?n(e):t())),J.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const c=!i&&D(R(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,c))).then((e=>e&&A(e))).catch((e=>Z(e,t,n)))}const re=e=>h.go(e);let se;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:T,removeRoute:S,hasRoute:C,getRoutes:k,resolve:N,options:e,push:F,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:m.add,afterEach:v.add,onError:X.add,isReady:ee,install(e){const t=this;e.component("RouterLink",He),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!se&&y.value===$&&(se=!0,F(h.location).catch((e=>{0})));const n={};for(const i in $)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Ue,t),e.provide(Ve,(0,i.qj)(n)),e.provide(Be,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=$,K&&K(),K=null,y.value=$,se=!1,Y=!1),o()}}};return ae}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>v(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}},7718:function(e,t,n){"use strict";n.d(t,{q:function(){return u}});var r=n(3396),i=n(9604),s=n(7041),o=n(1629),a=n(320),c=n(9888);const u=(0,a.a)({name:"VApp",props:{...(0,i.GB)({fullHeight:!0}),...(0,s.x$)()},setup(e,t){let{slots:n}=t;const a=(0,s.ER)(e),{layoutClasses:u,layoutStyles:l,getLayoutItem:h,items:d,layoutRef:f}=(0,i.te)(e),{rtlClasses:p}=(0,o.Vw)();return(0,c.L)((()=>{var e;return(0,r.Wm)("div",{ref:f,class:["v-application",a.themeClasses.value,u.value,p.value],style:l.value},[(0,r.Wm)("div",{class:"v-application__wrap"},[null==(e=n.default)?void 0:e.call(n)])])})),{getLayoutItem:h,items:d,theme:a}}})},6439:function(e,t,n){"use strict";n.d(t,{L:function(){return k}});var r=n(3396),i=n(836),s=n(8952),o=n(4310),a=n(1138),c=n(320),u=n(9888);const l=(0,c.e)()({name:"VToolbarTitle",props:{text:String,...(0,a.Q)()},setup(e,t){let{slots:n}=t;return(0,u.L)((()=>{var t;const i=!!(n.default||n.text||e.text);return(0,r.Wm)(e.tag,{class:"v-toolbar-title"},{default:()=>[i&&(0,r.Wm)("div",{class:"v-toolbar-title__placeholder"},[n.text?n.text():e.text,null==(t=n.default)?void 0:t.call(n)])]})})),{}}});var h=n(2718),d=n(2465),f=n(4231),p=n(7041),m=n(8434),g=n(2370),v=n(4870),y=n(3766),w=n(131);const b=[null,"prominent","default","comfortable","compact"],_=(0,y.U)({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>b.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...(0,h.m)(),...(0,d.c)(),...(0,f.I)(),...(0,a.Q)({tag:"header"}),...(0,p.x$)()},"v-toolbar"),I=(0,c.e)()({name:"VToolbar",props:_(),setup(e,t){var n;let{slots:a}=t;const{backgroundColorClasses:c,backgroundColorStyles:y}=(0,g.Y5)((0,v.Vh)(e,"color")),{borderClasses:b}=(0,h.P)(e),{elevationClasses:_}=(0,d.Y)(e),{roundedClasses:I}=(0,f.b)(e),{themeClasses:E}=(0,p.ER)(e),T=(0,v.iH)(!!(e.extended||null!=(n=a.extension)&&n.call(a))),S=(0,r.Fl)((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),k=(0,r.Fl)((()=>T.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return(0,m.AF)({VBtn:{variant:"text"}}),(0,u.L)((()=>{var t,n,u,h,d;const f=!(!e.title&&!a.title),p=!(!a.image&&!e.image),m=null==(t=a.extension)?void 0:t.call(a);return T.value=!(!e.extended&&!m),(0,r.Wm)(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},c.value,b.value,_.value,I.value,E.value],style:[y.value]},{default:()=>[p&&(0,r.Wm)("div",{key:"image",class:"v-toolbar__image"},[(0,r.Wm)(i.z,{defaults:{VImg:{cover:!0,src:e.image}}},{default:()=>[a.image?null==(n=a.image)?void 0:n.call(a):(0,r.Wm)(o.f,null,null)]})]),(0,r.Wm)("div",{class:"v-toolbar__content",style:{height:(0,w.kb)(S.value)}},[a.prepend&&(0,r.Wm)("div",{class:"v-toolbar__prepend"},[null==(u=a.prepend)?void 0:u.call(a)]),f&&(0,r.Wm)(l,{key:"title",text:e.title},{text:a.title}),null==(h=a.default)?void 0:h.call(a),a.append&&(0,r.Wm)("div",{class:"v-toolbar__append"},[null==(d=a.append)?void 0:d.call(a)])]),(0,r.Wm)(s.Fx,null,{default:()=>[T.value&&(0,r.Wm)("div",{class:"v-toolbar__extension",style:{height:(0,w.kb)(k.value)}},[m])]})]})})),{contentHeight:S,extensionHeight:k}}});function E(e){return(0,w.ei)(e,Object.keys((null==I?void 0:I.props)??{}))}var T=n(9604),S=n(5087);const k=(0,c.a)({name:"VAppBar",props:{modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},..._(),...(0,T.o8)(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const i=(0,v.iH)(),s=(0,S.z)(e,"modelValue"),o=(0,r.Fl)((()=>{var e,t;const n=(null==(e=i.value)?void 0:e.contentHeight)??0,r=(null==(t=i.value)?void 0:t.extensionHeight)??0;return n+r})),{layoutItemStyles:a}=(0,T.eW)({id:e.name,order:(0,r.Fl)((()=>parseInt(e.order,10))),position:(0,v.Vh)(e,"location"),layoutSize:o,elementSize:o,active:s,absolute:(0,v.Vh)(e,"absolute")});return(0,u.L)((()=>{const[t]=E(e);return(0,r.Wm)(I,(0,r.dG)({ref:i,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location}],style:{...a.value,height:void 0}},t),n)})),{}}})},836:function(e,t,n){"use strict";n.d(t,{z:function(){return o}});var r=n(8434),i=n(3396),s=n(4870);const o=(0,i.aZ)({name:"VDefaultsProvider",props:{defaults:Object,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,t){let{slots:n}=t;const{defaults:i,reset:o,root:a,scoped:c}=(0,s.BK)(e);return(0,r.AF)(i,{reset:o,root:a,scoped:c}),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}})},4075:function(e,t,n){"use strict";n.d(t,{J:function(){return l}});var r=n(3396),i=n(7041),s=n(2370),o=n(4870),a=n(320),c=n(131),u=n(9888);const l=(0,a.a)({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...(0,i.x$)()},setup(e,t){let{attrs:n}=t;const{themeClasses:a}=(0,i.ER)(e),{backgroundColorClasses:l,backgroundColorStyles:h}=(0,s.Y5)((0,o.Vh)(e,"color")),d=(0,r.Fl)((()=>{const t={};return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=(0,c.kb)(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=(0,c.kb)(e.thickness)),t}));return(0,u.L)((()=>(0,r.Wm)("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},a.value,l.value],style:[d.value,h.value],"aria-orientation":n.role&&"separator"!==n.role?void 0:e.vertical?"vertical":"horizontal",role:`${n.role||"separator"}`},null))),{}}})},3289:function(e,t,n){"use strict";n.d(t,{t:function(){return m}});var r=n(3396),i=n(4960),s=n(9374),o=n(1138),a=n(7041),c=n(2370),u=n(4870),l=n(3766),h=n(320),d=n(131),f=n(9888);const p=(0,l.U)({color:String,start:Boolean,end:Boolean,icon:i.lE,...(0,s.Z)(),...(0,o.Q)({tag:"i"}),...(0,a.x$)()},"v-icon"),m=(0,h.a)({name:"VIcon",props:p(),setup(e,t){let n,{attrs:o,slots:l}=t;l.default&&(n=(0,r.Fl)((()=>{var e,t;const n=null==(e=l.default)?void 0:e.call(l);if(n)return null==(t=(0,d.RA)(n).filter((e=>e.children&&"string"===typeof e.children))[0])?void 0:t.children})));const{themeClasses:h}=(0,a.ER)(e),{iconData:p}=(0,i.bi)(n||e),{sizeClasses:m}=(0,s.t)(e),{textColorClasses:g,textColorStyles:v}=(0,c.rY)((0,u.Vh)(e,"color"));return(0,f.L)((()=>(0,r.Wm)(p.value.component,{tag:e.tag,icon:p.value.icon,class:["v-icon","notranslate",h.value,m.value,g.value,{"v-icon--clickable":!!o.onClick,"v-icon--start":e.start,"v-icon--end":e.end}],style:[m.value?void 0:{fontSize:(0,d.kb)(e.size),height:(0,d.kb)(e.size),width:(0,d.kb)(e.size)},v.value],role:o.onClick?"button":void 0,"aria-hidden":!o.onClick},null))),{}}})},4310:function(e,t,n){"use strict";n.d(t,{f:function(){return b}});var r=n(3396),i=n(4544),s=n(320),o=n(9888);function a(e){return{aspectStyles:(0,r.Fl)((()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}const c=(0,s.a)({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...(0,i.x)()},setup(e,t){let{slots:n}=t;const{aspectStyles:s}=a(e),{dimensionStyles:c}=(0,i.$)(e);return(0,o.L)((()=>{var t;return(0,r.Wm)("div",{class:"v-responsive",style:c.value},[(0,r.Wm)("div",{class:"v-responsive__sizer",style:s.value},null),null==(t=n.additional)?void 0:t.call(n),n.default&&(0,r.Wm)("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])})),{}}});var u=n(2385);function l(e,t){if(!u.cu)return;const n=t.modifiers||{},r=t.value,{handler:i,options:s}="object"===typeof r?r:{handler:r,options:{}},o=new IntersectionObserver((function(){var r;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;const a=null==(r=e._observe)?void 0:r[t.instance.$.uid];if(!a)return;const c=s.some((e=>e.isIntersecting));!i||n.quiet&&!a.init||n.once&&!c&&!a.init||i(c,s,o),c&&n.once?h(e,t):a.init=!0}),s);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function h(e,t){var n;const r=null==(n=e._observe)?void 0:n[t.instance.$.uid];r&&(r.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const d={mounted:l,unmounted:h};var f=d,p=n(9242),m=n(3766);const g=(0,m.U)({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),v=(e,t)=>{let{slots:n}=t;const{transition:i,...s}=e,{component:o=p.uT,...a}="object"===typeof i?i:{};return(0,r.h)(o,(0,r.dG)("string"===typeof i?{name:i}:a,s),n)};var y=n(4870),w=n(131);const b=(0,s.a)({name:"VImg",directives:{intersect:f},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...g()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:i}=t;const s=(0,y.iH)(""),a=(0,y.iH)(),l=(0,y.iH)(e.eager?"loading":"idle"),h=(0,y.iH)(),d=(0,y.iH)(),f=(0,r.Fl)((()=>e.src&&"object"===typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),m=(0,r.Fl)((()=>f.value.aspect||h.value/d.value||0));function g(t){if((!e.eager||!t)&&(!u.cu||t||e.eager)){if(l.value="loading",f.value.lazySrc){const e=new Image;e.src=f.value.lazySrc,E(e,null)}f.value.src&&(0,r.Y3)((()=>{var e,t;if(n("loadstart",(null==(e=a.value)?void 0:e.currentSrc)||f.value.src),null!=(t=a.value)&&t.complete){if(a.value.naturalWidth||_(),"error"===l.value)return;m.value||E(a.value,null),b()}else m.value||E(a.value),I()}))}}function b(){var e;I(),l.value="loaded",n("load",(null==(e=a.value)?void 0:e.currentSrc)||f.value.src)}function _(){var e;l.value="error",n("error",(null==(e=a.value)?void 0:e.currentSrc)||f.value.src)}function I(){const e=a.value;e&&(s.value=e.currentSrc||e.src)}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=()=>{const{naturalHeight:r,naturalWidth:i}=e;r||i?(h.value=i,d.value=r):e.complete||"loading"!==l.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(h.value=1,d.value=1):setTimeout(n,t)};n()}(0,r.YP)((()=>e.src),(()=>{g("idle"!==l.value)})),(0,r.wF)((()=>g()));const T=(0,r.Fl)((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),S=()=>{var t;if(!f.value.src||"idle"===l.value)return null;const n=(0,r.Wm)("img",{class:["v-img__img",T.value],src:f.value.src,srcset:f.value.srcset,alt:"",sizes:e.sizes,ref:a,onLoad:b,onError:_},null),s=null==(t=i.sources)?void 0:t.call(i);return(0,r.Wm)(v,{transition:e.transition,appear:!0},{default:()=>[(0,r.wy)(s?(0,r.Wm)("picture",{class:"v-img__picture"},[s,n]):n,[[p.F8,"loaded"===l.value]])]})},k=()=>(0,r.Wm)(v,{transition:e.transition},{default:()=>[f.value.lazySrc&&"loaded"!==l.value&&(0,r.Wm)("img",{class:["v-img__img","v-img__img--preload",T.value],src:f.value.lazySrc,alt:""},null)]}),C=()=>i.placeholder?(0,r.Wm)(v,{transition:e.transition,appear:!0},{default:()=>[("loading"===l.value||"error"===l.value&&!i.error)&&(0,r.Wm)("div",{class:"v-img__placeholder"},[i.placeholder()])]}):null,x=()=>i.error?(0,r.Wm)(v,{transition:e.transition,appear:!0},{default:()=>["error"===l.value&&(0,r.Wm)("div",{class:"v-img__error"},[i.error()])]}):null,A=()=>e.gradient?(0,r.Wm)("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,R=(0,y.iH)(!1);{const e=(0,r.YP)(m,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{R.value=!0}))})),e())}))}return(0,o.L)((()=>(0,r.wy)((0,r.Wm)(c,{class:["v-img",{"v-img--booting":!R.value}],style:{width:(0,w.kb)("auto"===e.width?h.value:e.width)},aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>(0,r.Wm)(r.HY,null,[(0,r.Wm)(S,null,null),(0,r.Wm)(k,null,null),(0,r.Wm)(A,null,null),(0,r.Wm)(C,null,null),(0,r.Wm)(x,null,null)]),default:i.default}),[[(0,r.Q2)("intersect"),{handler:g,options:e.options},null,{once:!0}]]))),{currentSrc:s,image:a,state:l,naturalWidth:h,naturalHeight:d}}})},4647:function(e,t,n){"use strict";n.d(t,{i:function(){return M}});n(7658);var r=n(3396),i=n(4075),s=n(9242),o=n(836),a=n(8952),c=n(3867),u=n(4960),l=n(1138),h=n(6479),d=n(4870),f=n(320),p=n(3766),m=n(9888),g=n(131);const v=(0,f.a)({name:"VListGroupActivator",setup(e,t){let{slots:n}=t;return(0,h._$)(),()=>{var e;return null==(e=n.default)?void 0:e.call(n)}}}),y=(0,p.U)({activeColor:String,color:String,collapseIcon:{type:u.lE,default:"$collapse"},expandIcon:{type:u.lE,default:"$expand"},prependIcon:u.lE,appendIcon:u.lE,fluid:Boolean,subgroup:Boolean,value:null,...(0,l.Q)()},"v-list-group"),w=(0,f.e)()({name:"VListGroup",props:{title:String,...y()},setup(e,t){let{slots:n}=t;const{isOpen:i,open:u,id:l}=(0,h.Io)((0,d.Vh)(e,"value"),!0),f=(0,r.Fl)((()=>`v-list-group--id-${String(l.value)}`)),p=(0,c.sm)();function g(e){u(!i.value,e)}const y=(0,r.Fl)((()=>({onClick:g,class:"v-list-group__header",id:f.value}))),w=(0,r.Fl)((()=>i.value?e.collapseIcon:e.expandIcon));return(0,m.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-list-group",{"v-list-group--prepend":null==p?void 0:p.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup}]},{default:()=>[n.activator&&(0,r.Wm)(o.z,{defaults:{VListItem:{active:i.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&w.value,appendIcon:e.appendIcon||!e.subgroup&&w.value,title:e.title,value:e.value}}},{default:()=>[(0,r.Wm)(v,null,{default:()=>[n.activator({props:y.value,isOpen:i})]})]}),(0,r.Wm)(a.Fx,null,{default:()=>[(0,r.wy)((0,r.Wm)("div",{class:"v-list-group__items",role:"group","aria-labelledby":f.value},[null==(t=n.default)?void 0:t.call(n)]),[[s.F8,i.value]])]})]})})),{}}});function b(e){return(0,g.ei)(e,Object.keys(w.props))}var _=n(8878),I=n(2370);const E=(0,f.a)({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...(0,l.Q)()},setup(e,t){let{slots:n}=t;const{textColorClasses:i,textColorStyles:s}=(0,I.rY)((0,d.Vh)(e,"color"));return(0,m.L)((()=>{var t;const o=!(!n.default&&!e.title);return(0,r.Wm)(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},i.value],style:{textColorStyles:s}},{default:()=>[o&&(0,r.Wm)("div",{class:"v-list-subheader__text"},[(null==(t=n.default)?void 0:t.call(n))??e.title])]})})),{}}}),T=(0,f.e)()({name:"VListChildren",props:{items:Array},setup(e,t){let{slots:n}=t;return(0,c.$l)(),()=>{var t,s;return(null==(t=n.default)?void 0:t.call(n))??(null==(s=e.items)?void 0:s.map((e=>{let{children:t,props:s,type:o,raw:a}=e;var c,u;if("divider"===o)return(null==(c=n.divider)?void 0:c.call(n,{props:s}))??(0,r.Wm)(i.J,s,null);if("subheader"===o)return(null==(u=n.subheader)?void 0:u.call(n,{props:s}))??(0,r.Wm)(E,s,{default:n.subheader});const l={subtitle:n.subtitle?e=>{var t;return null==(t=n.subtitle)?void 0:t.call(n,{...e,item:a})}:void 0,prepend:n.prepend?e=>{var t;return null==(t=n.prepend)?void 0:t.call(n,{...e,item:a})}:void 0,append:n.append?e=>{var t;return null==(t=n.append)?void 0:t.call(n,{...e,item:a})}:void 0,default:n.default?e=>{var t;return null==(t=n.default)?void 0:t.call(n,{...e,item:a})}:void 0,title:n.title?e=>{var t;return null==(t=n.title)?void 0:t.call(n,{...e,item:a})}:void 0},[h,d]=b(s);return t?(0,r.Wm)(w,(0,r.dG)({value:null==s?void 0:s.value},h),{activator:e=>{let{props:t}=e;return n.header?n.header({...s,...t}):(0,r.Wm)(_.l,(0,r.dG)(s,t),l)},default:()=>(0,r.Wm)(T,{items:t},n)}):n.item?n.item(s):(0,r.Wm)(_.l,s,l)})))}}});var S=n(2718),k=n(9694),C=n(4544),x=n(2465);const A=(0,p.U)({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item");var R=n(4231),N=n(7041),O=n(5221),D=n(8434);function P(e,t){const n=(0,g.qF)(t,e.itemType,"item"),r="string"===typeof t?t:(0,g.qF)(t,e.itemTitle),i=(0,g.qF)(t,e.itemValue,void 0),s=(0,g.qF)(t,e.itemChildren),o=!0===e.itemProps?(0,g.ei)(t,["children"])[1]:(0,g.qF)(t,e.itemProps),a={title:r,value:i,...o};return{type:n,title:a.title,value:a.value,props:a,children:"item"===n&&s?L(e,s):void 0,raw:t}}function L(e,t){const n=[];for(const r of t)n.push(P(e,r));return n}function F(e){const t=(0,r.Fl)((()=>L(e,e.items)));return{items:t}}const M=(0,f.e)()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...(0,h.Gp)({selectStrategy:"single-leaf",openStrategy:"list"}),...(0,S.m)(),...(0,k.f)(),...(0,C.x)(),...(0,x.c)(),itemType:{type:String,default:"type"},...A(),...(0,R.I)(),...(0,l.Q)(),...(0,N.x$)(),...(0,O.bk)({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,t){let{slots:n}=t;const{items:i}=F(e),{themeClasses:s}=(0,N.ER)(e),{backgroundColorClasses:o,backgroundColorStyles:a}=(0,I.Y5)((0,d.Vh)(e,"bgColor")),{borderClasses:u}=(0,S.P)(e),{densityClasses:l}=(0,k.t)(e),{dimensionStyles:f}=(0,C.$)(e),{elevationClasses:p}=(0,x.Y)(e),{roundedClasses:g}=(0,R.b)(e),{open:v,select:y}=(0,h.Ek)(e),w=(0,r.Fl)((()=>e.lines?`v-list--${e.lines}-line`:void 0)),b=(0,d.Vh)(e,"activeColor"),_=(0,d.Vh)(e,"color");(0,c.$l)(),(0,D.AF)({VListGroup:{activeColor:b,color:_},VListItem:{activeClass:(0,d.Vh)(e,"activeClass"),activeColor:b,color:_,density:(0,d.Vh)(e,"density"),disabled:(0,d.Vh)(e,"disabled"),lines:(0,d.Vh)(e,"lines"),nav:(0,d.Vh)(e,"nav"),variant:(0,d.Vh)(e,"variant")}});const E=(0,d.iH)(!1),A=(0,d.iH)();function O(e){E.value=!0}function P(e){E.value=!1}function L(e){var t;E.value||e.relatedTarget&&null!=(t=A.value)&&t.contains(e.relatedTarget)||U()}function M(e){if(A.value){if("ArrowDown"===e.key)U("next");else if("ArrowUp"===e.key)U("prev");else if("Home"===e.key)U("first");else{if("End"!==e.key)return;U("last")}e.preventDefault()}}function U(e){if(!A.value)return;const t=[...A.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter((e=>!e.hasAttribute("disabled"))),n=t.indexOf(document.activeElement);var r;if(e)if("first"===e){var i;null==(i=t[0])||i.focus()}else if("last"===e){var s;null==(s=t.at(-1))||s.focus()}else{let r,i=n;const s="next"===e?1:-1;do{i+=s,r=t[i]}while((!r||null==r.offsetParent)&&i<t.length&&i>=0);r?r.focus():U("next"===e?"first":"last")}else null==(r=t[0])||r.focus()}return(0,m.L)((()=>(0,r.Wm)(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},s.value,o.value,u.value,l.value,p.value,w.value,g.value],style:[a.value,f.value],role:"listbox","aria-activedescendant":void 0,onFocusin:O,onFocusout:P,onFocus:L,onKeydown:M},{default:()=>[(0,r.Wm)(T,{items:i.value},n)]}))),{open:v,select:y,focus:U}}})},8878:function(e,t,n){"use strict";n.d(t,{l:function(){return J}});var r=n(3396),i=n(3289),s=n(4310),o=n(5221),a=n(4960),c=n(9694),u=n(4231),l=n(9374),h=n(1138),d=n(3766),f=n(320),p=n(9888);const m=(0,d.U)({start:Boolean,end:Boolean,icon:a.lE,image:String,...(0,c.f)(),...(0,u.I)(),...(0,l.Z)(),...(0,h.Q)(),...(0,o.bk)({variant:"flat"})},"v-avatar"),g=(0,f.a)({name:"VAvatar",props:m(),setup(e,t){let{slots:n}=t;const{colorClasses:a,colorStyles:h,variantClasses:d}=(0,o.c1)(e),{densityClasses:f}=(0,c.t)(e),{roundedClasses:m}=(0,u.b)(e),{sizeClasses:g,sizeStyles:v}=(0,l.t)(e);return(0,p.L)((()=>{var t;return(0,r.Wm)(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,f.value,m.value,g.value,d.value],style:[h.value,v.value]},{default:()=>[e.image?(0,r.Wm)(s.f,{key:"image",src:e.image,alt:""},null):e.icon?(0,r.Wm)(i.t,{key:"icon",icon:e.icon},null):null==(t=n.default)?void 0:t.call(n),(0,o.Ux)(!1,"v-avatar")]})})),{}}});var v=n(836),y=n(7769),w=n(2127),b=n(131);const _=Symbol("rippleStop"),I=80;function E(e,t){e.style.transform=t,e.style.webkitTransform=t}function T(e,t){e.style.opacity=`calc(${t} * var(--v-theme-overlay-multiplier))`}function S(e){return"TouchEvent"===e.constructor.name}function k(e){return"KeyboardEvent"===e.constructor.name}const C=function(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,s=0;if(!k(e)){const n=t.getBoundingClientRect(),r=S(e)?e.touches[e.touches.length-1]:e;i=r.clientX-n.left,s=r.clientY-n.top}let o=0,a=.3;null!=(n=t._ripple)&&n.circle?(a=.15,o=t.clientWidth/2,o=r.center?o:o+Math.sqrt((i-o)**2+(s-o)**2)/4):o=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=(t.clientWidth-2*o)/2+"px",u=(t.clientHeight-2*o)/2+"px",l=r.center?c:i-o+"px",h=r.center?u:s-o+"px";return{radius:o,scale:a,x:l,y:h,centerX:c,centerY:u}},x={show(e,t){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(null==t||null==(n=t._ripple)||!n.enabled)return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",r.class&&(i.className+=` ${r.class}`);const{radius:o,scale:a,x:c,y:u,centerX:l,centerY:h}=C(e,t,r),d=2*o+"px";s.className="v-ripple__animation",s.style.width=d,s.style.height=d,t.appendChild(i);const f=window.getComputedStyle(t);f&&"static"===f.position&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),E(s,`translate(${c}, ${u}) scale3d(${a},${a},${a})`),T(s,0),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),E(s,`translate(${l}, ${h}) scale3d(1,1,1)`),T(s,.08)}),0)},hide(e){var t;if(null==e||null==(t=e._ripple)||!t.enabled)return;const n=e.getElementsByClassName("v-ripple__animation");if(0===n.length)return;const r=n[n.length-1];if(r.dataset.isHiding)return;r.dataset.isHiding="true";const i=performance.now()-Number(r.dataset.activated),s=Math.max(250-i,0);setTimeout((()=>{r.classList.remove("v-ripple__animation--in"),r.classList.add("v-ripple__animation--out"),T(r,0),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),r.parentNode&&e.removeChild(r.parentNode)}),300)}),s)}};function A(e){return"undefined"===typeof e||!!e}function R(e){const t={},n=e.currentTarget;if(null!=n&&n._ripple&&!n._ripple.touched&&!e[_]){if(e[_]=!0,S(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||k(e),n._ripple.class&&(t.class=n._ripple.class),S(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{x.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{var e;null!=n&&null!=(e=n._ripple)&&e.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),I)}else x.show(e,n,t)}}function N(e){e[_]=!0}function O(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{O(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),x.hide(t)}}function D(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let P=!1;function L(e){P||e.keyCode!==b.Do.enter&&e.keyCode!==b.Do.space||(P=!0,R(e))}function F(e){P=!1,O(e)}function M(e){P&&(P=!1,O(e))}function U(e,t,n){const{value:r,modifiers:i}=t,s=A(r);if(s||x.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,(0,b.Kn)(r)&&r.class&&(e._ripple.class=r.class),s&&!n){if(i.stop)return e.addEventListener("touchstart",N,{passive:!0}),void e.addEventListener("mousedown",N);e.addEventListener("touchstart",R,{passive:!0}),e.addEventListener("touchend",O,{passive:!0}),e.addEventListener("touchmove",D,{passive:!0}),e.addEventListener("touchcancel",O),e.addEventListener("mousedown",R),e.addEventListener("mouseup",O),e.addEventListener("mouseleave",O),e.addEventListener("keydown",L),e.addEventListener("keyup",F),e.addEventListener("blur",M),e.addEventListener("dragstart",O,{passive:!0})}else!s&&n&&V(e)}function V(e){e.removeEventListener("mousedown",R),e.removeEventListener("touchstart",R),e.removeEventListener("touchend",O),e.removeEventListener("touchmove",D),e.removeEventListener("touchcancel",O),e.removeEventListener("mouseup",O),e.removeEventListener("mouseleave",O),e.removeEventListener("keydown",L),e.removeEventListener("keyup",F),e.removeEventListener("dragstart",O),e.removeEventListener("blur",M)}function B(e,t){U(e,t,!1)}function j(e){delete e._ripple,V(e)}function $(e,t){if(t.value===t.oldValue)return;const n=A(t.oldValue);U(e,t,n)}const q={mounted:B,unmounted:j,updated:$};var W=n(2718),z=n(4544),G=n(2465),H=n(6183),K=n(7041),Q=n(3867),Y=n(6479);const J=(0,f.e)()({name:"VListItem",directives:{Ripple:q},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:a.lE,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:a.lE,subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:b.as,onClickOnce:b.as,...(0,W.m)(),...(0,c.f)(),...(0,z.x)(),...(0,G.c)(),...(0,u.I)(),...(0,H.GN)(),...(0,h.Q)(),...(0,K.x$)(),...(0,o.bk)({variant:"text"})},emits:{click:e=>!0},setup(e,t){let{attrs:n,slots:s,emit:a}=t;const l=(0,H.nB)(e,n),h=(0,r.Fl)((()=>e.value??l.href.value)),{select:d,isSelected:f,isIndeterminate:m,isGroupActivator:b,root:_,parent:I,openOnSelect:E}=(0,Y.Io)(h,!1),T=(0,Q.sm)(),S=(0,r.Fl)((()=>{var t;return!1!==e.active&&(e.active||(null==(t=l.isActive)?void 0:t.value)||f.value)})),k=(0,r.Fl)((()=>!1!==e.link&&l.isLink.value)),C=(0,r.Fl)((()=>!e.disabled&&!1!==e.link&&(e.link||l.isClickable.value||null!=e.value&&!!T))),x=(0,r.Fl)((()=>e.rounded||e.nav)),A=(0,r.Fl)((()=>({color:S.value?e.activeColor??e.color:e.color,variant:e.variant})));(0,r.YP)((()=>{var e;return null==(e=l.isActive)?void 0:e.value}),(e=>{e&&null!=I.value&&_.open(I.value,!0),e&&E(e)}),{immediate:!0});const{themeClasses:R}=(0,K.ER)(e),{borderClasses:N}=(0,W.P)(e),{colorClasses:O,colorStyles:D,variantClasses:P}=(0,o.c1)(A),{densityClasses:L}=(0,c.t)(e),{dimensionStyles:F}=(0,z.$)(e),{elevationClasses:M}=(0,G.Y)(e),{roundedClasses:U}=(0,u.b)(x),V=(0,r.Fl)((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),B=(0,r.Fl)((()=>({isActive:S.value,select:d,isSelected:f.value,isIndeterminate:m.value})));function j(t){var n;a("click",t),!b&&C.value&&(null==(n=l.navigate)||n.call(l,t),null!=e.value&&d(!f.value,t))}function $(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),j(e))}return(0,p.L)((()=>{var t,n,a,c,u;const h=k.value?"a":e.tag,d=!T||f.value||S.value,p=s.title||e.title,m=s.subtitle||e.subtitle,b=!!(s.append||e.appendAvatar||e.appendIcon),_=!!(s.prepend||e.prependAvatar||e.prependIcon);return null==T||T.updateHasPrepend(_),(0,r.wy)((0,r.Wm)(h,{class:["v-list-item",{"v-list-item--active":S.value,"v-list-item--disabled":e.disabled,"v-list-item--link":C.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!_&&(null==T?void 0:T.hasPrepend.value),[`${e.activeClass}`]:e.activeClass&&S.value},R.value,N.value,d?O.value:void 0,L.value,M.value,V.value,U.value,P.value],style:[d?D.value:void 0,F.value],href:l.href.value,tabindex:C.value?0:void 0,onClick:j,onKeydown:C.value&&!k.value&&$},{default:()=>[(0,o.Ux)(C.value||S.value,"v-list-item"),_&&(0,r.Wm)(v.z,{key:"prepend",defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[(0,r.Wm)("div",{class:"v-list-item__prepend"},[e.prependAvatar&&(0,r.Wm)(g,{key:"prepend-avatar"},null),e.prependIcon&&(0,r.Wm)(i.t,{key:"prepend-icon"},null),null==(t=s.prepend)?void 0:t.call(s,B.value)])]}),(0,r.Wm)("div",{class:"v-list-item__content"},[p&&(0,r.Wm)(w.V,{key:"title"},{default:()=>[(null==(n=s.title)?void 0:n.call(s,{title:e.title}))??e.title]}),m&&(0,r.Wm)(y.o,{key:"subtitle"},{default:()=>[(null==(a=s.subtitle)?void 0:a.call(s,{subtitle:e.subtitle}))??e.subtitle]}),null==(c=s.default)?void 0:c.call(s,B.value)]),b&&(0,r.Wm)(v.z,{key:"append",defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[(0,r.Wm)("div",{class:"v-list-item__append"},[null==(u=s.append)?void 0:u.call(s,B.value),e.appendIcon&&(0,r.Wm)(i.t,{key:"append-icon"},null),e.appendAvatar&&(0,r.Wm)(g,{key:"append-avatar"},null)])]})]}),[[(0,r.Q2)("ripple"),C.value]])})),{}}})},7769:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var r=n(1114);const i=(0,r.J)("v-list-item-subtitle")},2127:function(e,t,n){"use strict";n.d(t,{V:function(){return i}});var r=n(1114);const i=(0,r.J)("v-list-item-title")},3867:function(e,t,n){"use strict";n.d(t,{$l:function(){return o},sm:function(){return a}});var r=n(3396),i=n(4870);Symbol.for("vuetify:depth");const s=Symbol.for("vuetify:list");function o(){const e=(0,r.f3)(s,{hasPrepend:(0,i.iH)(!1),updateHasPrepend:()=>null}),t={hasPrepend:(0,i.iH)(!1),updateHasPrepend:e=>{e&&(t.hasPrepend.value=e)}};return(0,r.JJ)(s,t),e}function a(){return(0,r.f3)(s,null)}},3140:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(3396),i=n(1138),s=n(9604),o=n(1372),a=n(320),c=n(9888);const u=(0,a.a)({name:"VMain",props:{scrollable:Boolean,...(0,i.Q)({tag:"main"})},setup(e,t){let{slots:n}=t;const{mainStyles:i}=(0,s.$Y)(),{ssrBootStyles:a}=(0,o.u)();return(0,c.L)((()=>{var t,s;return(0,r.Wm)(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[i.value,a.value]},{default:()=>[e.scrollable?(0,r.Wm)("div",{class:"v-main__scroller"},[null==(t=n.default)?void 0:t.call(n)]):null==(s=n.default)?void 0:s.call(n)]})})),{}}})},8075:function(e,t,n){"use strict";n.d(t,{V:function(){return D}});var r=n(3396),i=n(2718),s=n(2465),o=n(9604),a=n(4231),c=n(1138),u=n(7041),l=n(8434),h=n(2370),d=n(8157),f=n(5087),p=n(6183),m=n(1629),g=n(1372),v=n(4870),y=n(131);function w(e){let{rootEl:t,isSticky:n,layoutItemStyles:i}=e;const s=(0,v.iH)(!1),o=(0,v.iH)(0),a=(0,r.Fl)((()=>{const e="boolean"===typeof s.value?"top":s.value;return[n.value?{top:"auto",bottom:"auto",height:void 0}:void 0,s.value?{[e]:(0,y.kb)(o.value)}:{top:i.value.top}]}));(0,r.bv)((()=>{(0,r.YP)(n,(e=>{e?window.addEventListener("scroll",u,{passive:!0}):window.removeEventListener("scroll",u)}),{immediate:!0})})),(0,r.Jd)((()=>{document.removeEventListener("scroll",u)}));let c=0;function u(){const e=c>window.scrollY?"up":"down",n=t.value.getBoundingClientRect(),r=parseFloat(i.value.top??0),a=window.scrollY-Math.max(0,o.value-r),u=n.height+Math.max(o.value,r)-window.scrollY-window.innerHeight;n.height<window.innerHeight-r?(s.value="top",o.value=r):"up"===e&&"bottom"===s.value||"down"===e&&"top"===s.value?(o.value=window.scrollY+n.top,s.value=!0):"down"===e&&u<=0?(o.value=0,s.value="bottom"):"up"===e&&a<=0&&(o.value=n.top+a,s.value="top"),c=window.scrollY}return{isStuck:s,stickyStyles:a}}n(7658);const b=100,_=20;function I(e){const t=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*t}function E(e){if(e.length<2)return 0;if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let t=0;for(let n=e.length-1;n>0;n--){if(e[n].t===e[n-1].t)continue;const r=I(t),i=(e[n].d-e[n-1].d)/(e[n].t-e[n-1].t);t+=(i-r)*Math.abs(i),n===e.length-1&&(t*=.5)}return 1e3*I(t)}function T(){const e={};function t(t){Array.from(t.changedTouches).forEach((n=>{const r=e[n.identifier]??(e[n.identifier]=new y.PU(_));r.push([t.timeStamp,n])}))}function n(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))}function r(t){var n;const r=null==(n=e[t])?void 0:n.values().reverse();if(!r)throw new Error(`No samples for touch id ${t}`);const i=r[0],s=[],o=[];for(const e of r){if(i[0]-e[0]>b)break;s.push({t:e[0],d:e[1].clientX}),o.push({t:e[0],d:e[1].clientY})}return{x:E(s),y:E(o),get direction(){const{x:e,y:t}=this,[n,r]=[Math.abs(e),Math.abs(t)];return n>r&&e>=0?"right":n>r&&e<=0?"left":r>n&&t>=0?"down":r>n&&t<=0?"up":S()}}}return{addMovement:t,endTouch:n,getVelocity:r}}function S(){throw new Error}function k(e){let{isActive:t,isTemporary:n,width:i,touchless:s,position:o}=e;(0,r.bv)((()=>{window.addEventListener("touchstart",w,{passive:!0}),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",_,{passive:!0})})),(0,r.Jd)((()=>{window.removeEventListener("touchstart",w),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",_)}));const a=(0,r.Fl)((()=>"bottom"!==o.value)),{addMovement:c,endTouch:u,getVelocity:l}=T();let h=!1;const d=(0,v.iH)(!1),f=(0,v.iH)(0),p=(0,v.iH)(0);let m;function g(e,t){return("left"===o.value?e:"right"===o.value?document.documentElement.clientWidth-e:"bottom"===o.value?document.documentElement.clientHeight-e:C())-(t?i.value:0)}function y(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n="left"===o.value?(e-p.value)/i.value:"right"===o.value?(document.documentElement.clientWidth-e-p.value)/i.value:"bottom"===o.value?(document.documentElement.clientHeight-e-p.value)/i.value:C();return t?Math.max(0,Math.min(1,n)):n}function w(e){if(s.value)return;const r=e.changedTouches[0].clientX,l=e.changedTouches[0].clientY,d=25,v="left"===o.value?r<d:"right"===o.value?r>document.documentElement.clientWidth-d:"bottom"===o.value?l>document.documentElement.clientHeight-d:C(),w=t.value&&("left"===o.value?r<i.value:"right"===o.value?r>document.documentElement.clientWidth-i.value:"bottom"===o.value?l>document.documentElement.clientHeight-i.value:C());(v||w||t.value&&n.value)&&(h=!0,m=[r,l],p.value=g(a.value?r:l,t.value),f.value=y(a.value?r:l),u(e),c(e))}function b(e){const t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY;if(h){if(!e.cancelable)return void(h=!1);const r=Math.abs(t-m[0]),i=Math.abs(n-m[1]),s=a.value?r>i&&r>3:i>r&&i>3;s?(d.value=!0,h=!1):(a.value?i:r)>3&&(h=!1)}if(!d.value)return;e.preventDefault(),c(e);const r=y(a.value?t:n,!1);f.value=Math.max(0,Math.min(1,r)),r>1?p.value=g(a.value?t:n,!0):r<0&&(p.value=g(a.value?t:n,!1))}function _(e){if(h=!1,!d.value)return;c(e),d.value=!1;const n=l(e.changedTouches[0].identifier),r=Math.abs(n.x),i=Math.abs(n.y),s=a.value?r>i&&r>400:i>r&&i>3;t.value=s?n.direction===({left:"right",right:"left",bottom:"up"}[o.value]||C()):f.value>.5}const I=(0,r.Fl)((()=>d.value?{transform:"left"===o.value?`translateX(calc(-100% + ${f.value*i.value}px))`:"right"===o.value?`translateX(calc(100% - ${f.value*i.value}px))`:"bottom"===o.value?`translateY(calc(100% - ${f.value*i.value}px))`:C(),transition:"none"}:void 0));return{isDragging:d,dragProgress:f,dragStyles:I}}function C(){throw new Error}var x=n(9242),A=n(320);function R(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}var N=n(9888);const O=["start","end","left","right","bottom"],D=(0,A.a)({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:Boolean,railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>O.includes(e)},sticky:Boolean,...(0,i.m)(),...(0,s.c)(),...(0,o.o8)(),...(0,a.I)(),...(0,c.Q)({tag:"nav"}),...(0,u.x$)()},emits:{"update:modelValue":e=>!0},setup(e,t){let{attrs:n,slots:c}=t;const{isRtl:b}=(0,m.Vw)(),{themeClasses:_}=(0,u.ER)(e),{borderClasses:I}=(0,i.P)(e),{backgroundColorClasses:E,backgroundColorStyles:T}=(0,h.Y5)((0,v.Vh)(e,"color")),{elevationClasses:S}=(0,s.Y)(e),{mobile:C}=(0,d.AW)(),{roundedClasses:A}=(0,a.b)(e),O=(0,p.tv)(),D=(0,f.z)(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:P}=(0,g.u)(),L=(0,v.iH)(),F=(0,v.iH)(!1),M=(0,r.Fl)((()=>e.rail&&e.expandOnHover&&F.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),U=(0,r.Fl)((()=>R(e.location,b.value))),V=(0,r.Fl)((()=>!e.permanent&&(C.value||e.temporary))),B=(0,r.Fl)((()=>e.sticky&&!V.value&&"bottom"!==U.value));e.disableResizeWatcher||(0,r.YP)(V,(t=>!e.permanent&&(D.value=!t))),!e.disableRouteWatcher&&O&&(0,r.YP)(O.currentRoute,(()=>V.value&&(D.value=!1))),(0,r.YP)((()=>e.permanent),(e=>{e&&(D.value=!0)})),(0,r.wF)((()=>{null!=e.modelValue||V.value||(D.value=e.permanent||!C.value)}));const{isDragging:j,dragProgress:$,dragStyles:q}=k({isActive:D,isTemporary:V,width:M,touchless:(0,v.Vh)(e,"touchless"),position:U}),W=(0,r.Fl)((()=>{const t=V.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):M.value;return j.value?t*$.value:t})),{layoutItemStyles:z,layoutRect:G,layoutItemScrimStyles:H}=(0,o.eW)({id:e.name,order:(0,r.Fl)((()=>parseInt(e.order,10))),position:U,layoutSize:W,elementSize:M,active:(0,r.Fl)((()=>D.value||j.value)),disableTransitions:(0,r.Fl)((()=>j.value)),absolute:(0,r.Fl)((()=>e.absolute||B.value&&"string"!==typeof K.value))}),{isStuck:K,stickyStyles:Q}=w({rootEl:L,isSticky:B,layoutItemStyles:z}),Y=(0,h.Y5)((0,r.Fl)((()=>"string"===typeof e.scrim?e.scrim:null))),J=(0,r.Fl)((()=>({...j.value?{opacity:.2*$.value,transition:"none"}:void 0,...G.value?{left:(0,y.kb)(G.value.left),right:(0,y.kb)(G.value.right),top:(0,y.kb)(G.value.top),bottom:(0,y.kb)(G.value.bottom)}:void 0,...H.value})));return(0,l.AF)({VList:{bgColor:"transparent"}}),(0,N.L)((()=>{var t,i,s,o;const a=c.image||e.image;return(0,r.Wm)(r.HY,null,[(0,r.Wm)(e.tag,(0,r.dG)({ref:L,onMouseenter:()=>F.value=!0,onMouseleave:()=>F.value=!1,class:["v-navigation-drawer",`v-navigation-drawer--${U.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":F.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":V.value,"v-navigation-drawer--active":D.value,"v-navigation-drawer--sticky":B.value},_.value,E.value,I.value,S.value,A.value],style:[T.value,z.value,q.value,P.value,Q.value]},n),{default:()=>[a&&(0,r.Wm)("div",{key:"image",class:"v-navigation-drawer__img"},[c.image?null==(t=c.image)?void 0:t.call(c,{image:e.image}):(0,r.Wm)("img",{src:e.image,alt:""},null)]),c.prepend&&(0,r.Wm)("div",{class:"v-navigation-drawer__prepend"},[null==(i=c.prepend)?void 0:i.call(c)]),(0,r.Wm)("div",{class:"v-navigation-drawer__content"},[null==(s=c.default)?void 0:s.call(c)]),c.append&&(0,r.Wm)("div",{class:"v-navigation-drawer__append"},[null==(o=c.append)?void 0:o.call(c)])]}),(0,r.Wm)(x.uT,{name:"fade-transition"},{default:()=>[V.value&&(j.value||D.value)&&!!e.scrim&&(0,r.Wm)("div",{class:["v-navigation-drawer__scrim",Y.backgroundColorClasses.value],style:[J.value,Y.backgroundColorStyles.value],onClick:()=>D.value=!1},null)]})])})),{isStuck:K}}})},8952:function(e,t,n){"use strict";n.d(t,{Fx:function(){return l}});var r=n(9242),i=n(3396),s=n(320);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return(0,s.a)({name:e,props:{group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:n},origin:{type:String,default:t}},setup(t,n){let{slots:s}=n;return()=>{const n=t.group?r.W3:r.uT;return(0,i.h)(n,{name:e,mode:t.mode,onBeforeEnter(e){e.style.transformOrigin=t.origin},onLeave(e){if(t.leaveAbsolute){const{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${n}px`,e.style.width=`${r}px`,e.style.height=`${i}px`}t.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(t.leaveAbsolute&&null!=e&&e._transitionInitialStyles){const{position:t,top:n,left:r,width:i,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=r||"",e.style.width=i||"",e.style.height=s||""}}},s.default)}}})}function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return(0,s.a)({name:e,props:{mode:{type:String,default:n}},setup(n,s){let{slots:o}=s;return()=>(0,i.h)(r.uT,{name:e,...t},o.default)}})}var c=n(7139);function u(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=t?"width":"height",r=(0,c._A)(`offset-${n}`);return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},onEnter(t){const i=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=`${t[r]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=i.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=s}))},onAfterEnter:s,onEnterCancelled:s,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[r]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},onAfterLeave:i,onLeaveCancelled:i};function i(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}o("fab-transition","center center","out-in"),o("dialog-bottom-transition"),o("dialog-top-transition"),o("fade-transition"),o("scale-transition"),o("scroll-x-transition"),o("scroll-x-reverse-transition"),o("scroll-y-transition"),o("scroll-y-reverse-transition"),o("slide-x-transition"),o("slide-x-reverse-transition"),o("slide-y-transition"),o("slide-y-reverse-transition");const l=a("expand-transition",u());a("expand-x-transition",u("",!0))},2718:function(e,t,n){"use strict";n.d(t,{P:function(){return c},m:function(){return a}});n(7658);var r=n(3396),i=n(4870),s=n(3766),o=n(7514);const a=(0,s.U)({border:[Boolean,Number,String]},"border");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.border,r=[];if(!0===n||""===n)r.push(`${t}--border`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`border-${e}`);return r}));return{borderClasses:n}}},2370:function(e,t,n){"use strict";n.d(t,{Y5:function(){return u},rY:function(){return c},rd:function(){return a}});n(7658);var r=n(3396),i=n(4870),s=n(131),o=n(661);function a(e){return(0,s.S3)((()=>{const t=[],n={};return e.value.background&&((0,o.NA)(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&((0,o.NA)(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}}))}function c(e,t){const n=(0,r.Fl)((()=>({text:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:o}=a(n);return{textColorClasses:s,textColorStyles:o}}function u(e,t){const n=(0,r.Fl)((()=>({background:(0,i.dq)(e)?e.value:t?e[t]:null}))),{colorClasses:s,colorStyles:o}=a(n);return{backgroundColorClasses:s,backgroundColorStyles:o}}},8434:function(e,t,n){"use strict";n.d(t,{AF:function(){return u},qy:function(){return c},tI:function(){return o},yB:function(){return a}});var r=n(4870),i=n(3396),s=n(131);const o=Symbol.for("vuetify:defaults");function a(e){return(0,r.iH)(e??{})}function c(){const e=(0,i.f3)(o);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function u(e,t){const n=c(),a=(0,r.iH)(e),u=(0,i.Fl)((()=>{const e=(0,r.SU)(null==t?void 0:t.scoped),i=(0,r.SU)(null==t?void 0:t.reset),o=(0,r.SU)(null==t?void 0:t.root);let c=(0,s.Ee)(a.value,{prev:n.value});if(e)return c;if(i||o){const e=Number(i||1/0);for(let t=0;t<=e;t++){if(!c.prev)break;c=c.prev}return c}return(0,s.Ee)(c.prev,c)}));return(0,i.JJ)(o,u),u}},9694:function(e,t,n){"use strict";n.d(t,{f:function(){return a},t:function(){return c}});var r=n(3396),i=n(3766),s=n(7514);const o=[null,"default","comfortable","compact"],a=(0,i.U)({density:{type:String,default:"default",validator:e=>o.includes(e)}},"density");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,s.BL)();const n=(0,r.Fl)((()=>`${t}--density-${e.density}`));return{densityClasses:n}}},4544:function(e,t,n){"use strict";n.d(t,{$:function(){return a},x:function(){return o}});var r=n(3396),i=n(3766),s=n(131);const o=(0,i.U)({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function a(e){const t=(0,r.Fl)((()=>({height:(0,s.kb)(e.height),maxHeight:(0,s.kb)(e.maxHeight),maxWidth:(0,s.kb)(e.maxWidth),minHeight:(0,s.kb)(e.minHeight),minWidth:(0,s.kb)(e.minWidth),width:(0,s.kb)(e.width)})));return{dimensionStyles:t}}},8157:function(e,t,n){"use strict";n.d(t,{AW:function(){return p},fT:function(){return f},x6:function(){return a}});var r=n(4870),i=n(3396),s=n(131),o=n(2385);const a=Symbol.for("vuetify:display"),c={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return(0,s.Ee)(c,e)};function l(e){return o.BR&&!e?window.innerWidth:0}function h(e){return o.BR&&!e?window.innerHeight:0}function d(){const e=o.BR?window.navigator.userAgent:"ssr";function t(t){return Boolean(e.match(t))}const n=t(/android/i),r=t(/iphone|ipad|ipod/i),i=t(/cordova/i),s=t(/electron/i),a=t(/chrome/i),c=t(/edge/i),u=t(/firefox/i),l=t(/opera/i),h=t(/win/i),d=t(/mac/i),f=t(/linux/i),p=t(/ssr/i);return{android:n,ios:r,cordova:i,electron:s,chrome:a,edge:c,firefox:u,opera:l,win:h,mac:d,linux:f,touch:o.sR,ssr:p}}function f(e,t){const{thresholds:n,mobileBreakpoint:s}=u(e),a=(0,r.iH)(h(t)),c=d(),f=(0,r.qj)({}),p=(0,r.iH)(l(t));function m(){a.value=h(),p.value=l()}return(0,i.m0)((()=>{const e=p.value<n.sm,t=p.value<n.md&&!e,r=p.value<n.lg&&!(t||e),i=p.value<n.xl&&!(r||t||e),o=p.value<n.xxl&&!(i||r||t||e),u=p.value>=n.xxl,l=e?"xs":t?"sm":r?"md":i?"lg":o?"xl":"xxl",h="number"===typeof s?s:n[s],d=c.ssr?c.android||c.ios||c.opera:p.value<h;f.xs=e,f.sm=t,f.md=r,f.lg=i,f.xl=o,f.xxl=u,f.smAndUp=!e,f.mdAndUp=!(e||t),f.lgAndUp=!(e||t||r),f.xlAndUp=!(e||t||r||i),f.smAndDown=!(r||i||o||u),f.mdAndDown=!(i||o||u),f.lgAndDown=!(o||u),f.xlAndDown=!u,f.name=l,f.height=a.value,f.width=p.value,f.mobile=d,f.mobileBreakpoint=s,f.platform=c,f.thresholds=n})),o.BR&&window.addEventListener("resize",m,{passive:!0}),{...(0,r.BK)(f),update:m}}function p(){const e=(0,i.f3)(a);if(!e)throw new Error("Could not find Vuetify display injection");return e}},2465:function(e,t,n){"use strict";n.d(t,{Y:function(){return a},c:function(){return o}});n(7658);var r=n(3396),i=n(4870),s=n(3766);const o=(0,s.U)({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function a(e){const t=(0,r.Fl)((()=>{const t=(0,i.dq)(e)?e.value:e.elevation,n=[];return null==t||n.push(`elevation-${t}`),n}));return{elevationClasses:t}}},4960:function(e,t,n){"use strict";n.d(t,{YK:function(){return h},lE:function(){return l},$0:function(){return m},_i:function(){return v},bi:function(){return y}});var r=n(3396);const i={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},s={component:e=>(0,r.h)(m,{...e,class:"mdi"})};var o=n(4870),a=n(3766),c=n(320),u=n(131);const l=[String,Function,Object],h=Symbol.for("vuetify:icons"),d=(0,a.U)({icon:{type:l,required:!0},tag:{type:String,required:!0}},"icon"),f=(0,c.a)({name:"VComponentIcon",props:d(),setup(e){return()=>(0,r.Wm)(e.tag,null,{default:()=>[(0,r.Wm)(e.icon,null,null)]})}}),p=(0,c.a)({name:"VSvgIcon",inheritAttrs:!1,props:d(),setup(e,t){let{attrs:n}=t;return()=>(0,r.Wm)(e.tag,(0,r.dG)(n,{style:null}),{default:()=>[(0,r.Wm)("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[(0,r.Wm)("path",{d:e.icon},null)])]})}}),m=((0,c.a)({name:"VLigatureIcon",props:d(),setup(e){return()=>(0,r.Wm)(e.tag,null,{default:()=>[e.icon]})}}),(0,c.a)({name:"VClassIcon",props:d(),setup(e){return()=>(0,r.Wm)(e.tag,{class:e.icon},null)}})),g={svg:{component:p},class:{component:m}};function v(e){return(0,u.Ee)({defaultSet:"mdi",sets:{...g,mdi:s},aliases:i},e)}const y=e=>{const t=(0,r.f3)(h);if(!t)throw new Error("Missing Vuetify Icons provide!");const n=(0,r.Fl)((()=>{const n=(0,o.dq)(e)?e.value:e.icon;if(!n)throw new Error("Icon value is undefined or null");let r=n;var i;"string"===typeof r&&(r=r.trim(),r.startsWith("$")&&(r=null==(i=t.aliases)?void 0:i[r.slice(1)]));if(!r)throw new Error(`Could not find aliased icon "${n}"`);if("string"!==typeof r)return{component:f,icon:r};const s=Object.keys(t.sets).find((e=>"string"===typeof r&&r.startsWith(`${e}:`))),a=s?r.slice(s.length+1):r,c=t.sets[s??t.defaultSet];return{component:c.component,icon:a}}));return{iconData:n}}},9604:function(e,t,n){"use strict";n.d(t,{te:function(){return y},o8:function(){return p},GB:function(){return f},$Y:function(){return m},eW:function(){return g}});n(7658);var r=n(4870),i=n(3396),s=n(2385);function o(e){const t=(0,r.iH)(),n=(0,r.iH)();if(s.BR){const r=new ResizeObserver((t=>{null==e||e(t,r),t.length&&(n.value=t[0].contentRect)}));(0,i.Jd)((()=>{r.disconnect()})),(0,i.YP)(t,((e,t)=>{t&&(r.unobserve(t),n.value=void 0),e&&r.observe(e)}),{flush:"post"})}return{resizeRef:t,contentRect:(0,r.OT)(n)}}var a=n(3766),c=n(7514),u=n(131);const l=Symbol.for("vuetify:layout"),h=Symbol.for("vuetify:layout-item"),d=1e3,f=(0,a.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),p=(0,a.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function m(){const e=(0,i.f3)(l);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function g(e){const t=(0,i.f3)(l);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=e.id??`layout-item-${(0,c.sq)()}`,s=(0,c.FN)("useLayoutItem");(0,i.JJ)(h,{id:n});const o=(0,r.iH)(!1);(0,i.se)((()=>o.value=!0)),(0,i.dl)((()=>o.value=!1));const{layoutItemStyles:a,layoutItemScrimStyles:u}=t.register(s,{...e,active:(0,i.Fl)((()=>!o.value&&e.active.value)),id:n});return(0,i.Jd)((()=>t.unregister(n))),{layoutItemStyles:a,layoutRect:t.layoutRect,layoutItemScrimStyles:u}}const v=(e,t,n,r)=>{let i={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...i}}];for(const o of e){const e=t.get(o),a=n.get(o),c=r.get(o);if(!e||!a||!c)continue;const u={...i,[e.value]:parseInt(i[e.value],10)+(c.value?parseInt(a.value,10):0)};s.push({id:o,layer:u}),i=u}return s};function y(e){const t=(0,i.f3)(l,null),n=(0,i.Fl)((()=>t?t.rootZIndex.value-100:d)),s=(0,r.iH)([]),a=(0,r.qj)(new Map),f=(0,r.qj)(new Map),p=(0,r.qj)(new Map),m=(0,r.qj)(new Map),g=(0,r.qj)(new Map),{resizeRef:y,contentRect:w}=o(),b=(0,i.Fl)((()=>{const t=new Map,n=e.overlaps??[];for(const e of n.filter((e=>e.includes(":")))){const[n,r]=e.split(":");if(!s.value.includes(n)||!s.value.includes(r))continue;const i=a.get(n),o=a.get(r),c=f.get(n),u=f.get(r);i&&o&&c&&u&&(t.set(r,{position:i.value,amount:parseInt(c.value,10)}),t.set(n,{position:o.value,amount:-parseInt(u.value,10)}))}return t})),_=(0,i.Fl)((()=>{const e=[...new Set([...p.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const n of e){const e=s.value.filter((e=>{var t;return(null==(t=p.get(e))?void 0:t.value)===n}));t.push(...e)}return v(t,a,f,m)})),I=(0,i.Fl)((()=>!Array.from(g.values()).some((e=>e.value)))),E=(0,i.Fl)((()=>_.value[_.value.length-1].layer)),T=(0,i.Fl)((()=>({"--v-layout-left":(0,u.kb)(E.value.left),"--v-layout-right":(0,u.kb)(E.value.right),"--v-layout-top":(0,u.kb)(E.value.top),"--v-layout-bottom":(0,u.kb)(E.value.bottom),...I.value?void 0:{transition:"none"}}))),S=(0,i.Fl)((()=>_.value.slice(1).map(((e,t)=>{let{id:n}=e;const{layer:r}=_.value[t],i=f.get(n),s=a.get(n);return{id:n,...r,size:Number(i.value),position:s.value}})))),k=e=>S.value.find((t=>t.id===e)),C=(0,c.FN)("createLayout"),x=(0,r.iH)(!1);(0,i.bv)((()=>{x.value=!0})),(0,i.JJ)(l,{register:(e,t)=>{let{id:r,order:o,position:c,layoutSize:l,elementSize:v,active:y,disableTransitions:w,absolute:E}=t;p.set(r,o),a.set(r,c),f.set(r,l),m.set(r,y),w&&g.set(r,w);const T=(0,u.bY)(h,null==C?void 0:C.vnode),k=T.indexOf(e);k>-1?s.value.splice(k,0,r):s.value.push(r);const A=(0,i.Fl)((()=>S.value.findIndex((e=>e.id===r)))),R=(0,i.Fl)((()=>n.value+2*_.value.length-2*A.value)),N=(0,i.Fl)((()=>{const e="left"===c.value||"right"===c.value,t="right"===c.value,i="bottom"===c.value,s={[c.value]:0,zIndex:R.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-110)*(t||i?-1:1)}%)`,position:E.value||n.value!==d?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!x.value)return s;const o=S.value[A.value];if(!o)throw new Error(`[Vuetify] Could not find layout item "${r}"`);const a=b.value.get(r);return a&&(o[a.position]+=a.amount),{...s,height:e?`calc(100% - ${o.top}px - ${o.bottom}px)`:v.value?`${v.value}px`:void 0,left:t?void 0:`${o.left}px`,right:t?`${o.right}px`:void 0,top:"bottom"!==c.value?`${o.top}px`:void 0,bottom:"top"!==c.value?`${o.bottom}px`:void 0,width:e?v.value?`${v.value}px`:void 0:`calc(100% - ${o.left}px - ${o.right}px)`}})),O=(0,i.Fl)((()=>({zIndex:R.value-1})));return{layoutItemStyles:N,layoutItemScrimStyles:O,zIndex:R}},unregister:e=>{p.delete(e),a.delete(e),f.delete(e),m.delete(e),g.delete(e),s.value=s.value.filter((t=>t!==e))},mainRect:E,mainStyles:T,getLayoutItem:k,items:S,layoutRect:w,rootZIndex:n});const A=(0,i.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),R=(0,i.Fl)((()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:A,layoutStyles:R,getLayoutItem:k,items:S,layoutRect:w,layoutRef:y}}},1629:function(e,t,n){"use strict";n.d(t,{O:function(){return v},$2:function(){return w},Vw:function(){return _}});var r=n(4870),i=n(3396),s=n(131),o=n(6033),a=n(5087),c={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Page {0}, Current Page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}}};const u="$vuetify.",l=(e,t)=>e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n]))),h=(e,t,n)=>function(r){for(var i=arguments.length,a=new Array(i>1?i-1:0),c=1;c<i;c++)a[c-1]=arguments[c];if(!r.startsWith(u))return l(r,a);const h=r.replace(u,""),d=e.value&&n.value[e.value],f=t.value&&n.value[t.value];let p=(0,s.vO)(d,h,null);return p||((0,o.Kd)(`Translation key "${r}" not found in "${e.value}", trying fallback locale`),p=(0,s.vO)(f,h,null)),p||((0,o.N6)(`Translation key "${r}" not found in fallback`),p=r),"string"!==typeof p&&((0,o.N6)(`Translation key "${r}" has a non-string value`),p=r),l(p,a)};function d(e,t){return(n,r)=>{const i=new Intl.NumberFormat([e.value,t.value],r);return i.format(n)}}function f(e,t,n){const r=(0,a.z)(e,t,e[t]??n.value);return r.value=e[t]??n.value,(0,i.YP)(n,(i=>{null==e[t]&&(r.value=n.value)})),r}function p(e){return t=>{const n=f(t,"locale",e.current),r=f(t,"fallback",e.fallback),i=f(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:r,messages:i,t:h(n,r,i),n:d(n,r),provide:p({current:n,fallback:r,messages:i})}}}function m(e){const t=(0,r.iH)((null==e?void 0:e.locale)??"en"),n=(0,r.iH)((null==e?void 0:e.fallback)??"en"),i=(0,r.iH)({en:c,...null==e?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:h(t,n,i),n:d(t,n),provide:p({current:t,fallback:n,messages:i})}}const g={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!1,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},v=Symbol.for("vuetify:locale");function y(e){return null!=e.name}function w(e){const t=null!=e&&e.adapter&&y(null==e?void 0:e.adapter)?null==e?void 0:e.adapter:m(e),n=b(t,e);return{...t,...n}}Symbol.for("vuetify:rtl");function b(e,t){const n=(0,r.iH)((null==t?void 0:t.rtl)??g),s=(0,i.Fl)((()=>n.value[e.current.value]??!1));return{isRtl:s,rtl:n,rtlClasses:(0,i.Fl)((()=>"v-locale--is-"+(s.value?"rtl":"ltr")))}}function _(){const e=(0,i.f3)(v);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}},6479:function(e,t,n){"use strict";n.d(t,{Gp:function(){return y},Ek:function(){return w},_$:function(){return _},Io:function(){return b}});n(541),n(7658);var r=n(5087),i=n(3766),s=n(7514),o=n(4870),a=n(3396);const c={open:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(n){const e=new Set;e.add(t);let n=i.get(t);while(null!=n)e.add(n),n=i.get(n);return e}return r.delete(t),r},select:()=>null},u={open:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(n){let e=i.get(t);r.add(t);while(null!=e&&e!==t)r.add(e),e=i.get(e);return r}return r.delete(t),r},select:()=>null},l={open:u.open,select:e=>{let{id:t,value:n,opened:r,parents:i}=e;if(!n)return r;const s=[];let o=i.get(t);while(null!=o)s.push(o),o=i.get(o);return new Set(s)}},h=e=>{const t={select:t=>{let{id:n,value:r,selected:i}=t;if(e&&!r){const e=Array.from(i.entries()).reduce(((e,t)=>{let[n,r]=t;return"on"===r?[...e,n]:e}),[]);if(1===e.length&&e[0]===n)return i}return i.set(n,r?"on":"off"),i},in:(e,n,r)=>{let i=new Map;for(const s of e||[])i=t.select({id:s,value:!0,selected:new Map(i),children:n,parents:r});return i},out:e=>{const t=[];for(const[n,r]of e.entries())"on"===r&&t.push(n);return t}};return t},d=e=>{const t=h(e),n={select:e=>{let{selected:n,id:r,...i}=e;const s=n.has(r)?new Map([[r,n.get(r)]]):new Map;return t.select({...i,id:r,selected:s})},in:(e,n,r)=>{let i=new Map;return null!=e&&e.length&&(i=t.in(e.slice(0,1),n,r)),i},out:(e,n,r)=>t.out(e,n,r)};return n},f=e=>{const t=h(e),n={select:e=>{let{id:n,selected:r,children:i,...s}=e;return i.has(n)?r:t.select({id:n,selected:r,children:i,...s})},in:t.in,out:t.out};return n},p=e=>{const t=d(e),n={select:e=>{let{id:n,selected:r,children:i,...s}=e;return i.has(n)?r:t.select({id:n,selected:r,children:i,...s})},in:t.in,out:t.out};return n},m=e=>{const t={select:t=>{let{id:n,value:r,selected:i,children:s,parents:o}=t;const a=new Map(i),c=[n];while(c.length){const e=c.shift();i.set(e,r?"on":"off"),s.has(e)&&c.push(...s.get(e))}let u=o.get(n);while(u){const e=s.get(u),t=e.every((e=>"on"===i.get(e))),n=e.every((e=>!i.has(e)||"off"===i.get(e)));i.set(u,t?"on":n?"off":"indeterminate"),u=o.get(u)}if(e&&!r){const e=Array.from(i.entries()).reduce(((e,t)=>{let[n,r]=t;return"on"===r?[...e,n]:e}),[]);if(0===e.length)return a}return i},in:(e,n,r)=>{let i=new Map;for(const s of e||[])i=t.select({id:s,value:!0,selected:new Map(i),children:n,parents:r});return i},out:(e,t)=>{const n=[];for(const[r,i]of e.entries())"on"!==i||t.has(r)||n.push(r);return n}};return t},g=Symbol.for("vuetify:nested"),v={id:(0,o.iH)(),root:{register:()=>null,unregister:()=>null,parents:(0,o.iH)(new Map),children:(0,o.iH)(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:(0,o.iH)(new Set),selected:(0,o.iH)(new Map),selectedValues:(0,o.iH)([])}},y=(0,i.U)({selectStrategy:[String,Function],openStrategy:[String,Function],opened:Array,selected:Array,mandatory:Boolean},"nested"),w=e=>{let t=!1;const n=(0,o.iH)(new Map),i=(0,o.iH)(new Map),v=(0,r.z)(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),y=(0,a.Fl)((()=>{if("object"===typeof e.selectStrategy)return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return p(e.mandatory);case"leaf":return f(e.mandatory);case"independent":return h(e.mandatory);case"single-independent":return d(e.mandatory);case"classic":default:return m(e.mandatory)}})),w=(0,a.Fl)((()=>{if("function"===typeof e.openStrategy)return e.openStrategy;switch(e.openStrategy){case"list":return l;case"single":return c;case"multiple":default:return u}})),b=(0,r.z)(e,"selected",e.selected,(e=>y.value.in(e,n.value,i.value)),(e=>y.value.out(e,n.value,i.value)));function _(e){const t=[];let n=e;while(null!=n)t.unshift(n),n=i.value.get(n);return t}(0,a.Jd)((()=>{t=!0}));const I=(0,s.FN)("nested"),E={id:(0,o.iH)(),root:{opened:v,selected:b,selectedValues:(0,a.Fl)((()=>{const e=[];for(const[t,n]of b.value.entries())"on"===n&&e.push(t);return e})),register:(e,t,r)=>{t&&e!==t&&i.value.set(e,t),r&&n.value.set(e,[]),null!=t&&n.value.set(t,[...n.value.get(t)||[],e])},unregister:e=>{if(t)return;n.value.delete(e);const r=i.value.get(e);if(r){const t=n.value.get(r)??[];n.value.set(r,t.filter((t=>t!==e)))}i.value.delete(e),v.value.delete(e)},open:(e,t,r)=>{I.emit("click:open",{id:e,value:t,path:_(e),event:r});const s=w.value.open({id:e,value:t,opened:new Set(v.value),children:n.value,parents:i.value,event:r});s&&(v.value=s)},openOnSelect:(e,t,r)=>{const s=w.value.select({id:e,value:t,selected:new Map(b.value),opened:new Set(v.value),children:n.value,parents:i.value,event:r});s&&(v.value=s)},select:(e,t,r)=>{I.emit("click:select",{id:e,value:t,path:_(e),event:r});const s=y.value.select({id:e,value:t,selected:new Map(b.value),children:n.value,parents:i.value,event:r});s&&(b.value=s),E.root.openOnSelect(e,t,r)},children:n,parents:i}};return(0,a.JJ)(g,E),E.root},b=(e,t)=>{const n=(0,a.f3)(g,v),r=(0,a.Fl)((()=>e.value??Symbol((0,s.sq)()))),i={...n,id:r,open:(e,t)=>n.root.open(r.value,e,t),openOnSelect:(e,t)=>n.root.openOnSelect(r.value,e,t),isOpen:(0,a.Fl)((()=>n.root.opened.value.has(r.value))),parent:(0,a.Fl)((()=>n.root.parents.value.get(r.value))),select:(e,t)=>n.root.select(r.value,e,t),isSelected:(0,a.Fl)((()=>"on"===n.root.selected.value.get(r.value))),isIndeterminate:(0,a.Fl)((()=>"indeterminate"===n.root.selected.value.get(r.value))),isLeaf:(0,a.Fl)((()=>!n.root.children.value.get(r.value))),isGroupActivator:n.isGroupActivator};return!n.isGroupActivator&&n.root.register(r.value,n.id.value,t),(0,a.Jd)((()=>{!n.isGroupActivator&&n.root.unregister(r.value)})),t&&(0,a.JJ)(g,i),i},_=()=>{const e=(0,a.f3)(g,v);(0,a.JJ)(g,{...e,isGroupActivator:!0})}},5087:function(e,t,n){"use strict";n.d(t,{z:function(){return c}});var r=n(4870),i=n(3396),s=n(7514),o=n(131);function a(e,t){let n;(0,i.YP)(e,(e=>{var i;e&&!n?(n=(0,r.B)(),n.run(t)):(null==(i=n)||i.stop(),n=void 0)}),{immediate:!0})}function c(e,t,n){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e;const l=(0,s.FN)("useProxiedModel"),h=(0,r.iH)(void 0!==e[t]?e[t]:n),d=(0,o.mA)(t),f=d!==t,p=f?(0,i.Fl)((()=>{var n,r,i,s;return e[t],!(!(null!=(n=l.vnode.props)&&n.hasOwnProperty(t)||null!=(r=l.vnode.props)&&r.hasOwnProperty(d))||!(null!=(i=l.vnode.props)&&i.hasOwnProperty(`onUpdate:${t}`)||null!=(s=l.vnode.props)&&s.hasOwnProperty(`onUpdate:${d}`)))})):(0,i.Fl)((()=>{var n,r;return e[t],!(null==(n=l.vnode.props)||!n.hasOwnProperty(t)||null==(r=l.vnode.props)||!r.hasOwnProperty(`onUpdate:${t}`))}));a((()=>!p.value),(()=>{(0,i.YP)((()=>e[t]),(e=>{h.value=e}))}));const m=(0,i.Fl)({get(){return c(p.value?e[t]:h.value)},set(n){const r=u(n);(p.value?e[t]:h.value)!==r&&c(p.value?e[t]:h.value)!==n&&(h.value=r,null==l||l.emit(`update:${t}`,r))}});return Object.defineProperty(m,"externalValue",{get:()=>p.value?e[t]:h.value}),m}},4231:function(e,t,n){"use strict";n.d(t,{I:function(){return a},b:function(){return c}});n(7658);var r=n(3396),i=n(4870),s=n(3766),o=n(7514);const a=(0,s.U)({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,o.BL)();const n=(0,r.Fl)((()=>{const n=(0,i.dq)(e)?e.value:e.rounded,r=[];if(!0===n||""===n)r.push(`${t}--rounded`);else if("string"===typeof n||0===n)for(const e of String(n).split(" "))r.push(`rounded-${e}`);return r}));return{roundedClasses:n}}},6183:function(e,t,n){"use strict";n.d(t,{GN:function(){return l},nB:function(){return u},tv:function(){return c}});var r=n(7514),i=n(131),s=n(3766),o=n(3396),a=n(4870);function c(){var e,t;return null==(e=(0,r.FN)("useRouter"))||null==(t=e.proxy)?void 0:t.$router}function u(e,t){const n=(0,o.LL)("RouterLink"),r=(0,o.Fl)((()=>!(!e.href&&!e.to))),s=(0,o.Fl)((()=>(null==r?void 0:r.value)||(0,i.B0)(t,"click")||(0,i.B0)(e,"click")));if("string"===typeof n)return{isLink:r,isClickable:s,href:(0,a.Vh)(e,"href")};const c=e.to?n.useLink(e):void 0;return{isLink:r,isClickable:s,route:null==c?void 0:c.route,navigate:null==c?void 0:c.navigate,isActive:c&&(0,o.Fl)((()=>{var t,n;return e.exact?null==(t=c.isExactActive)?void 0:t.value:null==(n=c.isActive)?void 0:n.value})),href:(0,o.Fl)((()=>e.to?null==c?void 0:c.route.value.href:e.href))}}const l=(0,s.U)({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router")},9374:function(e,t,n){"use strict";n.d(t,{Z:function(){return a},t:function(){return c}});var r=n(3766),i=n(7514),s=n(131);const o=["x-small","small","default","large","x-large"],a=(0,r.U)({size:{type:[String,Number],default:"default"}},"size");function c(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,i.BL)();return(0,s.S3)((()=>{let n,r;return(0,s.q9)(o,e.size)?n=`${t}--size-${e.size}`:e.size&&(r={width:(0,s.kb)(e.size),height:(0,s.kb)(e.size)}),{sizeClasses:n,sizeStyles:r}}))}},1372:function(e,t,n){"use strict";n.d(t,{u:function(){return s}});var r=n(4870),i=n(3396);function s(){const e=(0,r.iH)(!1);(0,i.bv)((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}));const t=(0,i.Fl)((()=>e.value?void 0:{transition:"none !important"}));return{ssrBootStyles:t,isBooted:(0,r.OT)(e)}}},1138:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(3766);const i=(0,r.U)({tag:{type:String,default:"div"}},"tag")},7041:function(e,t,n){"use strict";n.d(t,{bo:function(){return x},jG:function(){return O},x$:function(){return A},ER:function(){return D}});n(7658);var r=n(4870),i=n(3396),s=n(3766),o=n(131),a=n(661),c=n(2385),u=n(7514);
/**
 * WCAG 3.0 APCA perceptual contrast algorithm from https://github.com/Myndex/SAPC-APCA
 * @licence https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 * @see https://www.w3.org/WAI/GL/task-forces/silver/wiki/Visual_Contrast_of_Text_Subgroup
 */
const l=2.4,h=.2126729,d=.7151522,f=.072175,p=.55,m=.58,g=.57,v=.62,y=.03,w=1.45,b=5e-4,_=1.25,I=1.25,E=.078,T=12.82051282051282,S=.06,k=.001;function C(e,t){const n=((e>>16&255)/255)**l,r=((e>>8&255)/255)**l,i=((e>>0&255)/255)**l,s=((t>>16&255)/255)**l,o=((t>>8&255)/255)**l,a=((t>>0&255)/255)**l;let c,u=n*h+r*d+i*f,C=s*h+o*d+a*f;if(u<=y&&(u+=(y-u)**w),C<=y&&(C+=(y-C)**w),Math.abs(C-u)<b)return 0;if(C>u){const e=(C**p-u**m)*_;c=e<k?0:e<E?e-e*T*S:e-S}else{const e=(C**v-u**g)*I;c=e>-k?0:e>-E?e-e*T*S:e+S}return 100*c}const x=Symbol.for("vuetify:theme"),A=(0,s.U)({theme:String},"theme"),R={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}};function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;if(!e)return{...R,isDisabled:!0};const t={};for(const[i,s]of Object.entries(e.themes??{})){var n,r;const e=s.dark||"dark"===i?null==(n=R.themes)?void 0:n.dark:null==(r=R.themes)?void 0:r.light;t[i]=(0,o.Ee)(e,s)}return(0,o.Ee)(R,{...e,themes:t})}function O(e){const t=(0,r.qj)(N(e)),n=(0,r.iH)(t.defaultTheme),s=(0,r.iH)(t.themes),u=(0,i.Fl)((()=>{const e={};for(const[n,r]of Object.entries(s.value)){const i=e[n]={...r,colors:{...r.colors}};if(t.variations)for(const e of t.variations.colors){const n=i.colors[e];if(n)for(const r of["lighten","darken"]){const s="lighten"===r?a.$n:a._j;for(const c of(0,o.MT)(t.variations[r],1))i.colors[`${e}-${r}-${c}`]=(0,a.I4)(s((0,a.jx)(n),c))}}for(const e of Object.keys(i.colors)){if(/^on-[a-z]/.test(e)||i.colors[`on-${e}`])continue;const t=`on-${e}`,n=(0,a.jx)(i.colors[e]),r=Math.abs(C(0,n)),s=Math.abs(C(16777215,n));i.colors[t]=s>Math.min(r,50)?"#fff":"#000"}}return e})),l=(0,i.Fl)((()=>u.value[n.value])),h=(0,i.Fl)((()=>{const e=[];l.value.dark&&P(e,":root",["color-scheme: dark"]);for(const[i,s]of Object.entries(u.value)){const{variables:t,dark:n}=s;P(e,`.v-theme--${i}`,["color-scheme: "+(n?"dark":"normal"),...L(s),...Object.keys(t).map((e=>{const n=t[e],r="string"===typeof n&&n.startsWith("#")?(0,a.nA)(n):void 0,i=r?`${r.r}, ${r.g}, ${r.b}`:void 0;return`--v-${e}: ${i??n}`}))])}const t=[],n=[],r=new Set(Object.values(u.value).flatMap((e=>Object.keys(e.colors))));for(const i of r)/^on-[a-z]/.test(i)?P(n,`.${i}`,[`color: rgb(var(--v-theme-${i})) !important`]):(P(t,`.bg-${i}`,[`--v-theme-overlay-multiplier: var(--v-theme-${i}-overlay-multiplier)`,`background: rgb(var(--v-theme-${i})) !important`,`color: rgb(var(--v-theme-on-${i})) !important`]),P(n,`.text-${i}`,[`color: rgb(var(--v-theme-${i})) !important`]),P(n,`.border-${i}`,[`--v-border-color: var(--v-theme-${i})`]));return e.push(...t,...n),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}));function d(e){const n=e._context.provides.usehead;if(n)n.addHeadObjs((0,i.Fl)((()=>{const e={children:h.value,type:"text/css",id:"vuetify-theme-stylesheet"};return t.cspNonce&&(e.nonce=t.cspNonce),{style:[e]}}))),c.BR&&(0,i.m0)((()=>n.updateDOM()));else{let r=c.BR?document.getElementById("vuetify-theme-stylesheet"):null;function s(){if(!t.isDisabled){if("undefined"!==typeof document&&!r){const e=document.createElement("style");e.type="text/css",e.id="vuetify-theme-stylesheet",t.cspNonce&&e.setAttribute("nonce",t.cspNonce),r=e,document.head.appendChild(r)}r&&(r.innerHTML=h.value)}}(0,i.YP)(h,s,{immediate:!0})}}const f=(0,i.Fl)((()=>t.isDisabled?void 0:`v-theme--${n.value}`));return{install:d,isDisabled:t.isDisabled,name:n,themes:s,current:l,computedThemes:u,themeClasses:f,styles:h,global:{name:n,current:l}}}function D(e){(0,u.FN)("provideTheme");const t=(0,i.f3)(x,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=(0,i.Fl)((()=>e.theme??(null==t?void 0:t.name.value))),r=(0,i.Fl)((()=>t.isDisabled?void 0:`v-theme--${n.value}`)),s={...t,name:n,themeClasses:r};return(0,i.JJ)(x,s),s}function P(e,t,n){e.push(`${t} {\n`,...n.map((e=>`  ${e};\n`)),"}\n")}function L(e){const t=e.dark?2:1,n=e.dark?1:2,r=[];for(const[i,s]of Object.entries(e.colors)){const e=(0,a.nA)(s);r.push(`--v-theme-${i}: ${e.r},${e.g},${e.b}`),i.startsWith("on-")||r.push(`--v-theme-${i}-overlay-multiplier: ${(0,a.zT)(s)>.18?t:n}`)}return r}},5221:function(e,t,n){"use strict";n.d(t,{Ux:function(){return u},bk:function(){return l},c1:function(){return h}});var r=n(3396),i=n(2370),s=n(4870),o=n(3766),a=n(7514);const c=["elevated","flat","tonal","outlined","text","plain"];function u(e,t){return(0,r.Wm)(r.HY,null,[e&&(0,r.Wm)("span",{key:"overlay",class:`${t}__overlay`},null),(0,r.Wm)("span",{key:"underlay",class:`${t}__underlay`},null)])}const l=(0,o.U)({color:String,variant:{type:String,default:"elevated",validator:e=>c.includes(e)}},"variant");function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,a.BL)();const n=(0,r.Fl)((()=>{const{variant:n}=(0,s.SU)(e);return`${t}--variant-${n}`})),{colorClasses:o,colorStyles:c}=(0,i.rd)((0,r.Fl)((()=>{const{variant:t,color:n}=(0,s.SU)(e);return{[["elevated","flat"].includes(t)?"background":"text"]:n}})));return{colorClasses:o,colorStyles:c,variantClasses:n}}},8957:function(e,t,n){"use strict";n.d(t,{Rd:function(){return p}});var r=n(8434),i=n(8157),s=n(4960),o=n(1629),a=n(7041),c=n(131),u=n(320),l=n(2385),h=n(7514),d=n(3396),f=n(4870);function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{blueprint:t,...n}=e,p=(0,c.Ee)(t,n),{aliases:m={},components:v={},directives:y={}}=p,w=(0,r.yB)(p.defaults),b=(0,i.fT)(p.display,p.ssr),_=(0,a.jG)(p.theme),I=(0,s._i)(p.icons),E=(0,o.$2)(p.locale),T=e=>{for(const t in y)e.directive(t,y[t]);for(const t in v)e.component(t,v[t]);for(const t in m)e.component(t,(0,u.a)({...m[t],name:t,aliasName:m[t].name}));if(_.install(e),e.provide(r.tI,w),e.provide(i.x6,b),e.provide(a.bo,_),e.provide(s.YK,I),e.provide(o.O,E),l.BR&&p.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{b.update()}));else{const{mount:t}=e;e.mount=function(){const n=t(...arguments);return(0,d.Y3)((()=>b.update())),e.mount=t,n}}h.sq.reset(),e.mixin({computed:{$vuetify(){return(0,f.qj)({defaults:g.call(this,r.tI),display:g.call(this,i.x6),theme:g.call(this,a.bo),icons:g.call(this,s.YK),locale:g.call(this,o.O)})}}})};return{install:T,defaults:w,display:b,theme:_,icons:I,locale:E}}const m="3.0.1";function g(e){var t,n;const r=this.$,i=(null==(t=r.parent)?void 0:t.provides)??(null==(n=r.vnode.appContext)?void 0:n.provides);if(i&&e in i)return i[e]}p.version=m},661:function(e,t,n){"use strict";n.d(t,{jx:function(){return v},nA:function(){return w},_j:function(){return _},zT:function(){return I},I4:function(){return y},NA:function(){return g},$n:function(){return b}});var r=n(6033),i=n(131);const s=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],o=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,a=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],c=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function u(e){const t=Array(3),n=o,r=s;for(let s=0;s<3;++s)t[s]=Math.round(255*(0,i.uZ)(n(r[s][0]*e[0]+r[s][1]*e[1]+r[s][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function l(e){const t=[0,0,0],n=c,r=a,i=n((e>>16&255)/255),s=n((e>>8&255)/255),o=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=r[a][0]*i+r[a][1]*s+r[a][2]*o;return t}const h=.20689655172413793,d=e=>e>h**3?Math.cbrt(e):e/(3*h**2)+4/29,f=e=>e>h?e**3:3*h**2*(e-4/29);function p(e){const t=d,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function m(e){const t=f,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function g(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function v(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n=e.startsWith("#")?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&8!==n.length&&(0,r.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,r.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>4294967295||isNaN(t))&&((0,r.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function y(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function w(e){const t=v(e);return{r:(16711680&t)>>16,g:(65280&t)>>8,b:255&t}}function b(e,t){const n=p(l(e));return n[0]=n[0]+10*t,u(m(n))}function _(e,t){const n=p(l(e));return n[0]=n[0]-10*t,u(m(n))}function I(e){const t=v(e);return l(t)[1]}},6033:function(e,t,n){"use strict";n.d(t,{Kd:function(){return i},N6:function(){return s}});n(7658);function r(e,t,n){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?u(t):"")}function i(e,t,n){const i=r(e,t,n);null!=i&&console.warn(i)}function s(e,t,n){const i=r(e,t,n);null!=i&&console.error(i)}const o=/(?:^|[-_])(\w)/g,a=e=>e.replace(o,(e=>e.toUpperCase())).replace(/[-_]/g,"");function c(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let r=n.name||n._componentTag;const i=n.__file;if(!r&&i){const e=i.match(/([^/\\]+)\.vue$/);r=null==e?void 0:e[1]}return(r?`<${a(r)}>`:"<Anonymous>")+(i&&!1!==t?` at ${i}`:"")}function u(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const r=t[t.length-1];if(r.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[r,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${c(e[0])}... (${e[1]} recursive calls)`:c(e)}`)).join("\n")}return`\n\n(found in ${c(e)})`}},1114:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(7139),i=n(3396),s=n(320);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return(0,s.a)({name:n??(0,r.kC)((0,r._A)(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t}},setup(t,n){let{slots:r}=n;return()=>{var n;return(0,i.h)(t.tag,{class:e},null==(n=r.default)?void 0:n.call(r))}}})}},320:function(e,t,n){"use strict";n.d(t,{a:function(){return d},e:function(){return f}});var r=n(3396),i=n(4870),s=n(6033),o=n(131),a=n(7514);function c(e){const{provides:t}=(0,a.FN)("injectSelf");if(t&&e in t)return t[e]}var u=n(8434),l=n(3766);function h(e,t){var n,r;return(null==(n=e.props)?void 0:n.hasOwnProperty(t))||(null==(r=e.props)?void 0:r.hasOwnProperty((0,o.mA)(t)))}const d=function(e){return e._setup=e._setup??e.setup,e.name?(e._setup&&(e.props=e.props??{},e.props=(0,l.U)(e.props,(0,o.mA)(e.name))(),e.props._as=String,e.setup=function(t,n){const s=(0,r.FN)(),a=(0,u.qy)(),l=(0,i.XI)(),d=(0,i.Um)({...(0,i.IU)(t)});(0,r.m0)((()=>{const n=a.value.global,r=a.value[t._as??e.name];if(r){const e=Object.entries(r).filter((e=>{let[t]=e;return t.startsWith(t[0].toUpperCase())}));e.length&&(l.value=Object.fromEntries(e))}for(const e of Object.keys(t)){let i=t[e];h(s.vnode,e)||(i=(null==r?void 0:r[e])??(null==n?void 0:n[e])??t[e]),d[e]!==i&&(d[e]=i)}}));const f=e._setup(d,n);let p;return(0,r.YP)(l,((e,t)=>{!e&&p?p.stop():e&&!t&&(p=(0,i.B)(),p.run((()=>{var t;(0,u.AF)((0,o.Ee)((null==(t=c(u.tI))?void 0:t.value)??{},e))})))}),{immediate:!0}),f}),e):((0,s.Kd)("The component is missing an explicit name, unable to generate default prop value"),e)};function f(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return t=>(e?d:r.aZ)(t)}},7514:function(e,t,n){"use strict";n.d(t,{BL:function(){return o},FN:function(){return s},sq:function(){return u}});var r=n(3396),i=n(131);function s(e,t){const n=(0,r.FN)();if(!n)throw new Error(`[Vuetify] ${e} ${t||"must be called from inside a setup function"}`);return n}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables";const t=s(e).type;return(0,i.mA)((null==t?void 0:t.aliasName)||(null==t?void 0:t.name))}let a=0,c=new WeakMap;function u(){const e=s("getUid");if(c.has(e))return c.get(e);{const t=a++;return c.set(e,t),t}}u.reset=()=>{a=0,c=new WeakMap}},2385:function(e,t,n){"use strict";n.d(t,{BR:function(){return r},cu:function(){return i},sR:function(){return s}});const r="undefined"!==typeof window,i=r&&"IntersectionObserver"in window,s=r&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);r&&"undefined"!==typeof CSS&&CSS.supports("selector(:focus-visible)")},131:function(e,t,n){"use strict";n.d(t,{B0:function(){return O},Do:function(){return w},Ee:function(){return I},Kn:function(){return y},MT:function(){return g},PU:function(){return x},RA:function(){return E},S3:function(){return A},as:function(){return N},bY:function(){return S},ei:function(){return b},kb:function(){return v},mA:function(){return T},q9:function(){return R},qF:function(){return m},uZ:function(){return _},vO:function(){return p}});n(7658);var r=n(3396),i=n(4870),s=n(7139);function o(e,t,n){a(e,t),t.set(e,n)}function a(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function c(e,t,n){var r=h(e,t,"set");return u(e,r,n),n}function u(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}function l(e,t){var n=h(e,t,"get");return d(e,n)}function h(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function d(e,t){return t.get?t.get.call(e):t.value}function f(e,t,n){const r=t.length-1;if(r<0)return void 0===e?n:e;for(let i=0;i<r;i++){if(null==e)return n;e=e[t[i]]}return null==e||void 0===e[t[r]]?n:e[t[r]]}function p(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),f(e,t.split("."),n)):n}function m(e,t,n){if(null==t)return void 0===e?n:e;if(e!==Object(e)){if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}if("string"===typeof t)return p(e,t,n);if(Array.isArray(t))return f(e,t,n);if("function"!==typeof t)return n;const r=t(e,n);return"undefined"===typeof r?n:r}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Array.from({length:e},((e,n)=>t+n))}function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function y(e){return null!==e&&"object"===typeof e&&!Array.isArray(e)}const w=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function b(e,t){const n=Object.create(null),r=Object.create(null);for(const i in e)t.some((e=>e instanceof RegExp?e.test(i):e===i))?n[i]=e[i]:r[i]=e[i];return[n,r]}function _(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return Math.max(t,Math.min(n,e))}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r={};for(const i in e)r[i]=e[i];for(const i in t){const s=e[i],o=t[i];y(s)&&y(o)?r[i]=I(s,o,n):Array.isArray(s)&&Array.isArray(o)&&n?r[i]=n(s,o):r[i]=o}return r}function E(e){return e.map((e=>e.type===r.HY?E(e.children):e)).flat()}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()}function S(e,t){if(!t||"object"!==typeof t)return[];if(Array.isArray(t))return t.map((t=>S(e,t))).flat(1);if(Array.isArray(t.children))return t.children.map((t=>S(e,t))).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return S(e,t.component.subTree).flat(1)}return[]}var k=new WeakMap,C=new WeakMap;class x{constructor(e){o(this,k,{writable:!0,value:[]}),o(this,C,{writable:!0,value:0}),this.size=e}push(e){l(this,k)[l(this,C)]=e,c(this,C,(l(this,C)+1)%this.size)}values(){return l(this,k).slice(l(this,C)).concat(l(this,k).slice(0,l(this,C)))}}function A(e){const t=(0,i.qj)({}),n=(0,r.Fl)(e);return(0,r.m0)((()=>{for(const e in n.value)t[e]=n.value[e]}),{flush:"sync"}),(0,i.BK)(t)}function R(e,t){return e.includes(t)}const N=[Function,Array];function O(e,t){return t="on"+(0,s.kC)(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}},3766:function(e,t,n){"use strict";function r(e,t){return n=>Object.keys(e).reduce(((r,i)=>{const s="object"===typeof e[i]&&null!=e[i]&&!Array.isArray(e[i]),o=s?e[i]:{type:e[i]};return r[i]=n&&i in n?{...o,default:n[i]}:o,t&&!r[i].source&&(r[i].source=t),r}),{})}n.d(t,{U:function(){return r}})},9888:function(e,t,n){"use strict";n.d(t,{L:function(){return i}});var r=n(7514);function i(e){const t=(0,r.FN)("useRender");t.render=e}}}]);
//# sourceMappingURL=chunk-vendors.875ce6f0.js.map