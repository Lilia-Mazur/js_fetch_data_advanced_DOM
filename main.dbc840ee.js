parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var n="https://mate-academy.github.io/phone-catalogue-static/api/phones",t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("".concat(n).concat(t,".json")).then(function(n){if(!n)throw new Error("Something wrong");return n.json()})};function e(n,t,e){document.body.insertAdjacentHTML("beforeend",'\n    <div class="'.concat(n,'">\n      <h3>').concat(t,"</h3>\n      <ul>\n        ").concat(e.map(function(n){return"<li>".concat(n.name,"</li>")}).join(""),"\n      </ul>\n    </div>\n  "))}var c=function(){return t()},r=function(){return t()},o=function(){return t()};c().then(function(n){return Promise.race(n.map(function(n){return t("/".concat(n.id))}))}).then(function(n){e("first-received","First Fastest",[n])}),r().then(function(n){return Promise.all(n.map(function(n){return t("/".concat(n.id))}))}).then(function(n){e("all-successful","All Successful",n)}),o().then(function(n){return Promise.all([Promise.race(n.map(function(n){return t("/".concat(n.id))})),Promise.race(n.map(function(n){return t("/".concat(n.id))})),Promise.race(n.map(function(n){return t("/".concat(n.id))}))])}).then(function(n){e("three-fasters","Three fasters",n)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.dbc840ee.js.map