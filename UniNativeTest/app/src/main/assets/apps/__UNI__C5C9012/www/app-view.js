(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="./",n(n.s="f3f6")})({"148a":function(e,t,n){"undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))}),window.__uniConfig={window:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(n("5241").default)}))},1850:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.logo{height:200rpx;width:200rpx;margin-top:200rpx;margin-left:auto;margin-right:auto;margin-bottom:50rpx}.text-area{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.title{font-size:36rpx;color:#8f8f94}",""]),e.exports=t},"24fb":function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var i=o(r),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=r(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},"2c5f":function(e,t,n){var r=n("1850");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("7f7e").default;o("3fdaf9fa",r,!0,{sourceMap:!1,shadowMode:!1})},5241:function(e,t,n){"use strict";n.r(t);var r=n("b772"),o=n("6d03");for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);n("c79c");var a,s=n("f0c5"),u=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],a);t["default"]=u.exports},"6d03":function(e,t,n){"use strict";n.r(t);var r=n("fa6d"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},"7a8e":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"",""]),e.exports=t},"7f7e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],u=i[2],c=i[3],f={id:e+":"+o,css:s,media:u,sourceMap:c};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(t),n.d(t,"default",(function(){return v}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,f=function(){},l=null,d="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,n,o){c=n,l=o||{};var a=r(e,t);return g(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o],u=i[s.id];u.refs--,n.push(u)}t?(a=r(e,t),g(a)):a=[];for(o=0;o<n.length;o++){u=n[o];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete i[u.id]}}}}function g(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(b(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(b(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function b(e){var t,n,r=document.querySelector("style["+d+'~="'+e.id+'"]');if(r){if(c)return f;r.parentNode.removeChild(r)}if(p){var o=u++;r=s||(s=h()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=h(),t=_.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":T(r.css);if(e.styleSheet)e.styleSheet.cssText=m(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function _(e,t){var n=T(t.css),r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),l.ssrId&&e.setAttribute(d,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var x=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,w=/var\(--status-bar-height\)/gi,C=/var\(--window-top\)/gi,j=/var\(--window-bottom\)/gi,S=/var\(--window-left\)/gi,O=/var\(--window-right\)/gi,k=!1;function T(e){if(!uni.canIUse("css.var")){!1===k&&(k=plus.navigator.getStatusbarHeight());var t={statusBarHeight:k,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};e=e.replace(w,t.statusBarHeight+"px").replace(C,t.top+"px").replace(j,t.bottom+"px").replace(S,"0px").replace(O,"0px")}return e.replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(e){return e.replace(x,(function(e,t){return uni.upx2px(t)+"px"}))}))}},8985:function(e,t,n){var r=n("7a8e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("7f7e").default;o("49688c75",r,!0,{sourceMap:!1,shadowMode:!1})},b772:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:e._$g(0,"sc"),attrs:{_i:0}},[n("v-uni-image",{staticClass:e._$g(1,"sc"),attrs:{src:"/static/logo.png",_i:1}}),n("v-uni-view",{staticClass:e._$g(2,"sc"),attrs:{_i:2}},[n("v-uni-text",{staticClass:e._$g(3,"sc"),attrs:{_i:3}},[e._v(e._$g(3,"t0-0"))])],1)],1)},i=[]},c79c:function(e,t,n){"use strict";var r=n("2c5f"),o=n.n(r);o.a},e627:function(e,t,n){"use strict";n.r(t);var r=n("8985"),o=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=o.a},f0c5:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a,s,u,c){var f,l="function"===typeof e?e.options:e;if(u){l.components||(l.components={});var d=Object.prototype.hasOwnProperty;for(var p in u)d.call(u,p)&&!d.call(l.components,p)&&(l.components[p]=u[p])}if(c&&((c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},l._ssrRegister=f):o&&(f=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(l.functional){l._injectStyles=f;var v=l.render;l.render=function(e,t){return f.call(t),v(e,t)}}else{var g=l.beforeCreate;l.beforeCreate=g?[].concat(g,f):[f]}return{exports:e,options:l}}n.d(t,"a",(function(){return r}))},f3f6:function(e,t,n){"use strict";function r(){function e(e){var t=n("e627");t.__inject__&&t.__inject__(e)}"function"===typeof e&&e(),UniViewJSBridge.publishHandler("webviewReady")}n("148a"),"undefined"!==typeof plus?r():document.addEventListener("plusready",r)},fa6d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{wxsProps:{}}},components:{}};t.default=r}});