!function n(e,t,r){function o(u,a){if(!t[u]){if(!e[u]){var l="function"==typeof require&&require;if(!a&&l)return l(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var s=t[u]={exports:{}};e[u][0].call(s.exports,function(n){var t=e[u][1][n];return o(t?t:n)},s,s.exports,n,e,t,r)}return t[u].exports}for(var i="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=n("../patterns/singleton"),u=function(){function n(){r(this,n),this.singletonExample=new i.SingletonExample}return o(n,[{key:"changeSingletonValue",value:function(n){this.singletonExample.setValue(n)}}]),n}();t["default"]=u},{"../patterns/singleton":3}],2:[function(n,e,t){"use strict";function r(n){return n&&n.__esModule?n:{"default":n}}function o(){var n=new i.SingletonExample,e=new i.SingletonExample,t=new a["default"];n.printValue(),e.printValue(),n.setValue(2),n.printValue(),e.printValue(),e.setValue(3),n.printValue(),e.printValue(),console.log(n===e),t.changeSingletonValue(6),n.printValue(),e.printValue()}var i=n("./patterns/singleton"),u=n("./components/componentInfluencingSingleton"),a=r(u);$(document).ready(o)},{"./components/componentInfluencingSingleton":1,"./patterns/singleton":3}],3:[function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}();t.EmptySingleton=function i(){return r(this,i),i.singletonInstance?i.singletonInstance:void(i.singletonInstance=this)},t.SingletonExample=function(){function n(){return r(this,n),n.singletonInstance?n.singletonInstance:(n.singletonInstance=this,void(this.value=1))}return o(n,[{key:"setValue",value:function(n){this.value=n}},{key:"getValue",value:function(){return this.value}},{key:"printValue",value:function(){console.log(this.value)}}]),n}()},{}]},{},[2]);
//# sourceMappingURL=example1.js.map