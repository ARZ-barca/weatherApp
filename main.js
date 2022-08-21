/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=L(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h={};function p(){}function d(){}function y(){}var v={};s(v,c,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==n&&o.call(g,c)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(i,c,a,u){var s=f(e[i],e,c);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):r.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=y,s(w,"constructor",y),s(y,"constructor",d),d.displayName=s(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(b.prototype),s(b.prototype,a,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var c=new b(l(t,e,n,o),i);return r.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=k,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var c=t.apply(e,n);function a(t){r(c,o,i,a,u,"next",t)}function u(t){r(c,o,i,a,u,"throw",t)}a(void 0)}))}}var o,i="679208c8a3e8f64983666e8a1c6faf63";function c(t){return a.apply(this,arguments)}function a(){return(a=n(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/geo/1.0/direct?q=".concat(r,"&appid=").concat(i),{mode:"cors"});case 2:return n=t.sent,t.next=5,n.json();case 5:return o=t.sent,t.abrupt("return",o);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e){return s.apply(this,arguments)}function s(){return(s=n(e().mark((function t(r,n){var o,c,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(r,"&lon=").concat(n,"&appid=").concat(i,"&units=metric"),{mode:"cors"}).then((function(t){return t.json()})),c=fetch("https://api.openweathermap.org/data/2.5/forecast?lat=".concat(r,"&lon=").concat(n,"&appid=").concat(i,"&units=metric"),{mode:"cors"}).then((function(t){return t.json()})),t.next=4,Promise.all([o,c]);case 4:return a=t.sent,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(){f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new C(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=L(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h={};function p(){}function d(){}function y(){}var v={};a(v,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==e&&r.call(g,o)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function n(o,i,c,a){var u=s(t[o],t,i);if("throw"!==u.type){var f=u.arg,h=f.value;return h&&"object"==l(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(h).then((function(t){f.value=t,c(f)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=y,a(w,"constructor",y),a(y,"constructor",d),d.displayName=a(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,a(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(b.prototype),a(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(w),a(w,c,"Generator"),a(w,o,(function(){return this})),a(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function h(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){h(i,n,o,c,a,"next",t)}function a(t){h(i,n,o,c,a,"throw",t)}c(void 0)}))}}function d(){return(d=p(f().mark((function t(e){var r,n,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c(e);case 3:return o=t.sent,r=o[0].lat,n=o[0].lon,t.next=8,u(r,n);case 8:return i=t.sent,t.abrupt("return",i);case 12:if(t.prev=12,t.t0=t.catch(0),void 0!==o){t.next=16;break}return t.abrupt("return",null);case 16:if(0!==o.length){t.next=18;break}return t.abrupt("return","invalid");case 18:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}var y="C";function v(){return y}function m(t){return S(9*Number(t)/5+32)}function g(t){return S(Number(t)+273.15)}function w(t){return S(5*(Number(t)-32)/9+273.15)}function x(t){return S(5*(Number(t)-32)/9)}function b(t){return S(Number(t)-273.15)}function L(t){return S(9*(Number(t)-273.15)/5+32)}function S(t){return Math.round(100*(t+Number.EPSILON))/100}const E=function(t){var e=document.querySelector(".current-weather .temp-number"),r=document.querySelector(".current-weather .feels-number"),n=document.querySelector(".current-weather .temp-symbol"),o=document.querySelector(".current-weather .feels-symbol");n.textContent=o.textContent=t,"C"===y?"F"===t?(y="F",e.textContent=m(e.textContent),r.textContent=m(r.textContent)):"K"===t&&(y="K",e.textContent=g(e.textContent),r.textContent=g(r.textContent)):"F"===y?"C"===t?(y="C",e.textContent=x(e.textContent),r.textContent=x(r.textContent)):"K"===t&&(y="K",e.textContent=w(e.textContent),r.textContent=w(r.textContent)):"K"===y&&("C"===t?(y="C",e.textContent=b(e.textContent),r.textContent=b(r.textContent)):"F"===t&&(y="F",e.textContent=L(e.textContent),r.textContent=L(r.textContent)))};var C=document.querySelector(".current-weather"),k=document.querySelector(".search-form"),_=document.querySelector(".search-form input"),q=document.querySelector(".search-form .error"),j=document.querySelector(".search-icon"),O=document.querySelector(".current-weather .weather-icon img"),N=document.querySelector(".current-weather .c-mode"),F=document.querySelector(".current-weather .f-mode"),P=document.querySelector(".current-weather .k-mode"),G=document.querySelector(".current-weather .cover");function T(t){_.classList.add("invalid"),q.textContent=t}function K(t){return t<10?"0"+t:t}k.addEventListener("submit",(function(t){t.preventDefault(),j.src="images/Spin-0.8s-207px.svg",_.checkValidity()?(_.classList.remove("invalid"),q.textContent="",function(t){return d.apply(this,arguments)}(_.value).then((function(t){"invalid"===t?T("invalid city."):null===t?T("nework error."):(O.src="http://openweathermap.org/img/wn/".concat(t[0].weather[0].icon,"@2x.png"),function(t){var e,r,n=t.sys.country,o=t.name,i=new Date(1e3*t.dt),c=t.weather[0].description;"C"===v()?(e=t.main.temp,r=t.main.feels_like):"F"===v()?(e=m(t.main.temp),r=m(t.main.feels_like)):"K"===v()&&(e=g(t.main.temp),r=g(t.main.feels_like));var a=t.wind.speed,u=t.main.humidity,s=new Date(1e3*t.sys.sunrise),l=new Date(1e3*t.sys.sunset),f=document.querySelector(".current-weather .place"),h=document.querySelector(".current-weather .date"),p=document.querySelector(".current-weather .time"),d=document.querySelector(".current-weather .weather-description"),y=document.querySelector(".current-weather .temp"),w=document.querySelector(".current-weather .feels"),x=document.querySelector(".current-weather .wind"),b=document.querySelector(".current-weather .humidity"),L=document.querySelector(".current-weather .sunrise"),S=document.querySelector(".current-weather .sunset");f.textContent="".concat(n,"-").concat(o),h.textContent="".concat(i.getFullYear(),"/").concat(i.getMonth()+1,"/").concat(i.getDate()),p.textContent="".concat(K(i.getHours()),":").concat(K(i.getMinutes()),":").concat(K(i.getSeconds())),d.textContent="Weather: ".concat(c),y.innerHTML='Temperature: <span class="temp-number">'.concat(e,'</span>°<span class="temp-symbol">').concat(v(),"</span>"),w.innerHTML='Feels like: <span class="feels-number">'.concat(r,'</span>°<span class="feels-symbol">').concat(v(),"</span>"),x.textContent="Wind speed: ".concat(a,"m/s"),b.textContent="Humidity: ".concat(u,"%"),L.textContent="Sunrise: ".concat(K(s.getHours()),":").concat(K(s.getMinutes()),":").concat(K(s.getSeconds())),S.textContent="Sunset: ".concat(K(l.getHours()),":").concat(K(l.getMinutes()),":").concat(K(l.getSeconds()))}(t[0]),C.classList.add("show"))}))):T("city name is required."),setTimeout((function(){j.src="images/search-svgrepo-com.svg"}),500)})),N.addEventListener("click",(function(){"C"!==v()&&(E("C"),G.classList.remove("on-f"),G.classList.remove("on-k"),G.classList.add("on-c"))})),F.addEventListener("click",(function(){"F"!==v()&&(E("F"),G.classList.remove("on-c"),G.classList.remove("on-k"),G.classList.add("on-f"))})),P.addEventListener("click",(function(){"K"!==v()&&(E("K"),G.classList.remove("on-f"),G.classList.remove("on-c"),G.classList.add("on-k"))})),G.addEventListener("transitionend",(function(){this.textContent=v()}))})();