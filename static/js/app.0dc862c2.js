(function(e){function t(t){for(var r,o,i=t[0],u=t[1],l=t[2],f=0,s=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&s.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return u.p+"static/js/"+({}[e]||e)+"."+{"chunk-6394cd06":"4d3f2431"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-6394cd06":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-6394cd06":"639ecaf3"}[e]+".css",a=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===a))return t()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){l=s[i],f=l.getAttribute("data-href");if(f===r||f===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},"2c61":function(e){e.exports=JSON.parse('{"common":{"沒有更多了":"沒有更多了"},"index":{},"web3":{"連接錢包":"連接錢包","暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開":"暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開"}}')},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e792");var r=n("1368"),o=n.n(r),a=n("7a23"),c={class:"app-content"};function i(e,t,n,r,o,i){var u=Object(a["G"])("router-view");return Object(a["A"])(),Object(a["h"])("div",c,[Object(a["k"])(u,null,{default:Object(a["P"])((function(t){var n=t.Component;return[(Object(a["A"])(),Object(a["h"])(a["b"],null,[e.$route.meta.keepAlive?(Object(a["A"])(),Object(a["h"])(Object(a["I"])(n),{key:0})):Object(a["i"])("",!0)],1024)),e.$route.meta.keepAlive?Object(a["i"])("",!0):(Object(a["A"])(),Object(a["h"])(Object(a["I"])(n),{key:0}))]})),_:1})])}var u=n("a34a"),l=n.n(u),f=n("99e5"),s=n.n(f),d=n("5502");function p(e){return v(e)||h(e)||m(e)||b()}function b(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function h(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function v(e){if(Array.isArray(e))return g(e)}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var w=Object(d["a"])({state:{account:"",provider:null,currentBalance:"",locale:"",initem:"",price:"",chartData:[]},mutations:{updateAccount:function(e,t){e.account=t},updateProvider:function(e,t){e.provider=t},updateCurrentBalance:function(e,t){e.currentBalance=t},updateLocale:function(e,t){e.locale=t},updateNetId:function(e,t){e.netId=t,netId.set(t)},updatePrice:function(e,t){e.price=t},initChartData:function(e,t){e.chartData=[].concat(p(t),p(e.chartData))},updateChartData:function(e,t){e.chartData.push(t)},updateInitem:function(e,t){e.initem=t}},actions:{},modules:{}}),y=n("d399"),O=n("47e2");function j(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(l){return void n(l)}i.done?t(u):Promise.resolve(u).then(r,o)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){j(a,r,o,c,i,"next",e)}function i(e){j(a,r,o,c,i,"throw",e)}c(void 0)}))}}var P={web3:{},t:null,factoryContract:{},web3Provider:{},getBlance:function(e){P.web3.eth.getBalance(e).then((function(e){w.commit("updateCurrentBalance",P.web3.utils.fromWei(e,"ether"))}))},getNetId:function(){var e=k(l.a.mark((function e(){var t;return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P.web3.eth.net.getId();case 2:t=e.sent,w.commit("updateNetId",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),initWeb3:function(){var e=Object(O["b"])(),t=e.t;window.ethereum?(P.web3Provider=window.ethereum,P.web3=new s.a(P.web3Provider),window.ethereum.enable().then((function(e){w.commit("updateAccount",e[0])}))):window.web3?(P.web3Provider=window.web3.currentProvider,P.web3=new s.a(P.web3Provider)):Object(y["a"])(t("web3.暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開")),w.commit("updateProvider",P.web3),P.web3.eth.getAccounts().then(function(){var e=k(l.a.mark((function e(t){return l.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return w.commit("updateAccount",t[0]),e.abrupt("return",P.getBlance(t[0]));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},S=P,A={name:"App",setup:function(){S.initWeb3(),document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}),!1);var e=0;document.addEventListener("touchend",(function(t){var n=Date.now();n-e<=300&&t.preventDefault(),e=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()}))}};n("d0eb");A.render=i;var E=A,I=n("6c02"),x=[{path:"/",name:"Index",component:function(){return n.e("chunk-6394cd06").then(n.bind(null,"37f9"))},meta:{title:""}}],C=Object(I["a"])({history:Object(I["b"])(),routes:x});C.beforeEach((function(e){e.meta.title&&(document.title=e.meta.title)}));var D=C,M=n("b970"),N=(n("157a"),L("intro",localStorage)),B=L("locale",localStorage);L("initemStorage",sessionStorage);function _(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:localStorage;try{n.setItem(e,t)}catch(r){}}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage;return{get:function(){return t.getItem(e)},set:function(n){_(e,n,t)},remove:function(){t.removeItem(e)}}}var T=n("2c61"),W=n("edd4"),$=n("3c69"),z=n("b459"),J=n.n(z),U=n("91f4"),q=n.n(U);function F(e){switch(e){case"zh-cn":$["a"].use("zh-CN",J.a);break;case"en":$["a"].use("en-US",q.a);break}}function G(e){F(e)}function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=Object(O["a"])({locale:"zh-cn",messages:{"zh-cn":K({},T),en:K({},W)}}),V=function(e){Q.global.locale=e,w.commit("updateLocale",e),B.set(e),G(e)},X=n("b9b9"),Y=n.n(X);n("1368").polyfill(),o.a.polyfill();var Z=B.get()||"en";V(Z);var ee=function(){history.length>0?D.go(-1):D.push({name:"Welcome"})},te=function(e){if(!e||"0"===e)return{};var t=decodeURIComponent(e).split("&"),n={};return t.forEach((function(e){var t=e.split("=");1===t.length?n.id=t[0]:n[t[0]]=t[1]})),n},ne=window.location.href.replace(/#/g,"").replace(/\?utm_source=tokenpocket/g,"");if(ne.includes("?")){var re=ne.slice(ne.indexOf("?")+1,ne.length),oe=te(re);oe.intro&&N.set(oe.intro)}var ae=Object(a["g"])(E);ae.config.globalProperties.$goBack=ee,ae.config.globalProperties.$dateformat=Y.a,ae.use(D).use(w).use(Q).use(M["a"]).mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},9:function(e,t){},a7de:function(e,t,n){},d0eb:function(e,t,n){"use strict";n("a7de")},edd4:function(e){e.exports=JSON.parse('{"common":{"沒有更多了":"No More"},"index":{},"web3":{"連接錢包":"Connect Wallet","暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開":"No wallet plug-in has been detected yet, please install metamask wallet or open it in imtoken"}}')}});
//# sourceMappingURL=app.0dc862c2.js.map