parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KY7H":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={filmGallery:document.querySelector(".js-gallery-list"),backdrop:document.querySelector(".js-backdrop"),modalCardContainer:document.querySelector(".js-modal__card-container"),paginationContainer:document.querySelector(".js-tui-pagination"),filterBtnsContainer:document.querySelector(".js-filter-list")};exports.refs=e;
},{}],"WHRk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.LocalStorageService=void 0;class e{constructor(){}save(e,r){try{const t=JSON.stringify(r);localStorage.setItem(e,t)}catch(o){console.error("Set state error: ",o.message)}}load(e){try{const o=localStorage.getItem(e);return null===o?void 0:JSON.parse(o)}catch(r){console.error("Get state error: ",r.message)}}remove(e){try{localStorage.removeItem(e)}catch(r){console.error("Remove state error: ",r.message)}}}exports.LocalStorageService=e;
},{}],"pAws":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof e&&e.amd?e([],r):"object"==typeof exports?exports.Handlebars=r():t.Handlebars=r()}(this,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";var n=r(1).default,o=r(2).default;t.__esModule=!0;var a=n(r(3)),i=o(r(36)),u=o(r(5)),l=n(r(4)),s=n(r(37)),c=o(r(43));function f(){var e=new a.HandlebarsEnvironment;return l.extend(e,a),e.SafeString=i.default,e.Exception=u.default,e.Utils=l,e.escapeExpression=l.escapeExpression,e.VM=s,e.template=function(t){return s.template(t,e)},e}var p=f();p.create=f,c.default(p),p.default=p,t.default=p,e.exports=t.default},function(e,t){"use strict";t.default=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},t.__esModule=!0},function(e,t){"use strict";t.default=function(e){return e&&e.__esModule?e:{default:e}},t.__esModule=!0},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.HandlebarsEnvironment=c;var o=r(4),a=n(r(5)),i=r(9),u=r(29),l=n(r(31)),s=r(32);t.VERSION="4.7.7";t.COMPILER_REVISION=8;t.LAST_COMPATIBLE_COMPILER_REVISION=7;t.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function c(e,t,r){this.helpers=e||{},this.partials=t||{},this.decorators=r||{},i.registerDefaultHelpers(this),u.registerDefaultDecorators(this)}c.prototype={constructor:c,logger:l.default,log:l.default.log,registerHelper:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple helpers");o.extend(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===o.toString.call(e))o.extend(this.partials,e);else{if(void 0===t)throw new a.default('Attempting to register a partial called "'+e+'" as undefined');this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===o.toString.call(e)){if(t)throw new a.default("Arg not supported with multiple decorators");o.extend(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]},resetLoggedPropertyAccesses:function(){s.resetLoggedProperties()}};var f=l.default.log;t.log=f,t.createFrame=o.createFrame,t.logger=l.default},function(e,t){"use strict";t.__esModule=!0,t.extend=i,t.indexOf=function(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r;return-1},t.escapeExpression=function(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}if(!o.test(e))return e;return e.replace(n,a)},t.isEmpty=function(e){return!e&&0!==e||!(!s(e)||0!==e.length)},t.createFrame=function(e){var t=i({},e);return t._parent=e,t},t.blockParams=function(e,t){return e.path=t,e},t.appendContextPath=function(e,t){return(e?e+".":"")+t};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},n=/[&<>"'`=]/g,o=/[&<>"'`=]/;function a(e){return r[e]}function i(e){for(var t=1;t<arguments.length;t++)for(var r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&(e[r]=arguments[t][r]);return e}var u=Object.prototype.toString;t.toString=u;var l=function(e){return"function"==typeof e};l(/x/)&&(t.isFunction=l=function(e){return"function"==typeof e&&"[object Function]"===u.call(e)}),t.isFunction=l;var s=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===u.call(e)};t.isArray=s},function(e,t,r){"use strict";var n=r(6).default;t.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function a(e,t){var r=t&&t.loc,i=void 0,u=void 0,l=void 0,s=void 0;r&&(i=r.start.line,u=r.end.line,l=r.start.column,s=r.end.column,e+=" - "+i+":"+l);for(var c=Error.prototype.constructor.call(this,e),f=0;f<o.length;f++)this[o[f]]=c[o[f]];Error.captureStackTrace&&Error.captureStackTrace(this,a);try{r&&(this.lineNumber=i,this.endLineNumber=u,n?(Object.defineProperty(this,"column",{value:l,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:s,enumerable:!0})):(this.column=l,this.endColumn=s))}catch(p){}}a.prototype=new Error,t.default=a,e.exports=t.default},function(e,t,r){e.exports={default:r(7),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t,r){return n.setDesc(e,t,r)}},function(e,t){var r=Object;e.exports={create:r.create,getProto:r.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:r.getOwnPropertyDescriptor,setDesc:r.defineProperty,setDescs:r.defineProperties,getKeys:r.keys,getNames:r.getOwnPropertyNames,getSymbols:r.getOwnPropertySymbols,each:[].forEach}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultHelpers=function(e){o.default(e),a.default(e),i.default(e),u.default(e),l.default(e),s.default(e),c.default(e)},t.moveHelperToHooks=function(e,t,r){e.helpers[t]&&(e.hooks[t]=e.helpers[t],r||delete e.helpers[t])};var o=n(r(10)),a=n(r(11)),i=n(r(24)),u=n(r(25)),l=n(r(26)),s=n(r(27)),c=n(r(28))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerHelper("blockHelperMissing",function(t,r){var o=r.inverse,a=r.fn;if(!0===t)return a(this);if(!1===t||null==t)return o(this);if(n.isArray(t))return t.length>0?(r.ids&&(r.ids=[r.name]),e.helpers.each(t,r)):o(this);if(r.data&&r.ids){var i=n.createFrame(r.data);i.contextPath=n.appendContextPath(r.data.contextPath,r.name),r={data:i}}return a(t,r)})},e.exports=t.default},function(e,t,r){(function(n){"use strict";var o=r(12).default,a=r(2).default;t.__esModule=!0;var i=r(4),u=a(r(5));t.default=function(e){e.registerHelper("each",function(e,t){if(!t)throw new u.default("Must pass iterator to #each");var r,a=t.fn,l=t.inverse,s=0,c="",f=void 0,p=void 0;function d(t,r,n){f&&(f.key=t,f.index=r,f.first=0===r,f.last=!!n,p&&(f.contextPath=p+t)),c+=a(e[t],{data:f,blockParams:i.blockParams([e[t],t],[p+t,null])})}if(t.data&&t.ids&&(p=i.appendContextPath(t.data.contextPath,t.ids[0])+"."),i.isFunction(e)&&(e=e.call(this)),t.data&&(f=i.createFrame(t.data)),e&&"object"==typeof e)if(i.isArray(e))for(var h=e.length;s<h;s++)s in e&&d(s,s,s===e.length-1);else if(n.Symbol&&e[n.Symbol.iterator]){for(var v=[],m=e[n.Symbol.iterator](),g=m.next();!g.done;g=m.next())v.push(g.value);for(h=(e=v).length;s<h;s++)d(s,s,s===e.length-1)}else r=void 0,o(e).forEach(function(e){void 0!==r&&d(r,s-1),r=e,s++}),void 0!==r&&d(r,s-1,!0);return 0===s&&(c=l(this)),c})},e.exports=t.default}).call(t,function(){return this}())},function(e,t,r){e.exports={default:r(13),__esModule:!0}},function(e,t,r){r(14),e.exports=r(20).Object.keys},function(e,t,r){var n=r(15);r(17)("keys",function(e){return function(t){return e(n(t))}})},function(e,t,r){var n=r(16);e.exports=function(e){return Object(n(e))}},function(e,t){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,r){var n=r(18),o=r(20),a=r(23);e.exports=function(e,t){var r=(o.Object||{})[e]||Object[e],i={};i[e]=t(r),n(n.S+n.F*a(function(){r(1)}),"Object",i)}},function(e,t,r){var n=r(19),o=r(20),a=r(21),i=function(e,t,r){var u,l,s,c=e&i.F,f=e&i.G,p=e&i.S,d=e&i.P,h=e&i.B,v=e&i.W,m=f?o:o[t]||(o[t]={}),g=f?n:p?n[t]:(n[t]||{}).prototype;for(u in f&&(r=t),r)(l=!c&&g&&u in g)&&u in m||(s=l?g[u]:r[u],m[u]=f&&"function"!=typeof g[u]?r[u]:h&&l?a(s,n):v&&g[u]==s?function(e){var t=function(t){return this instanceof e?new e(t):e(t)};return t.prototype=e.prototype,t}(s):d&&"function"==typeof s?a(Function.call,s):s,d&&((m.prototype||(m.prototype={}))[u]=s))};i.F=1,i.G=2,i.S=4,i.P=8,i.B=16,i.W=32,e.exports=i},function(e,t){var r=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(e,t){var r=e.exports={version:"1.2.6"};"number"==typeof __e&&(__e=r)},function(e,t,r){var n=r(22);e.exports=function(e,t,r){if(n(e),void 0===t)return e;switch(r){case 1:return function(r){return e.call(t,r)};case 2:return function(r,n){return e.call(t,r,n)};case 3:return function(r,n,o){return e.call(t,r,n,o)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=n(r(5));t.default=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new o.default('Missing helper: "'+arguments[arguments.length-1].name+'"')})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("if",function(e,t){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return o.isFunction(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||o.isEmpty(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,r){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:r.inverse,inverse:r.fn,hash:r.hash})})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("log",function(){for(var t=[void 0],r=arguments[arguments.length-1],n=0;n<arguments.length-1;n++)t.push(arguments[n]);var o=1;null!=r.hash.level?o=r.hash.level:r.data&&null!=r.data.level&&(o=r.data.level),t[0]=o,e.log.apply(e,t)})},e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e){e.registerHelper("lookup",function(e,t,r){return e?r.lookupProperty(e,t):e})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0;var o=r(4),a=n(r(5));t.default=function(e){e.registerHelper("with",function(e,t){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");o.isFunction(e)&&(e=e.call(this));var r=t.fn;if(o.isEmpty(e))return t.inverse(this);var n=t.data;return t.data&&t.ids&&((n=o.createFrame(t.data)).contextPath=o.appendContextPath(t.data.contextPath,t.ids[0])),r(e,{data:n,blockParams:o.blockParams([e],[n&&n.contextPath])})})},e.exports=t.default},function(e,t,r){"use strict";var n=r(2).default;t.__esModule=!0,t.registerDefaultDecorators=function(e){o.default(e)};var o=n(r(30))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4);t.default=function(e){e.registerDecorator("inline",function(e,t,r,o){var a=e;return t.partials||(t.partials={},a=function(o,a){var i=r.partials;r.partials=n.extend({},i,t.partials);var u=e(o,a);return r.partials=i,u}),t.partials[o.args[0]]=o.fn,a})},e.exports=t.default},function(e,t,r){"use strict";t.__esModule=!0;var n=r(4),o={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){var t=n.indexOf(o.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e){if(e=o.lookupLevel(e),"undefined"!=typeof console&&o.lookupLevel(o.level)<=e){var t=o.methodMap[e];console[t]||(t="log");for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];console[t].apply(console,n)}}};t.default=o,e.exports=t.default},function(e,t,r){"use strict";var n=r(33).default,o=r(12).default,a=r(1).default;t.__esModule=!0,t.createProtoAccessControl=function(e){var t=n(null);t.constructor=!1,t.__defineGetter__=!1,t.__defineSetter__=!1,t.__lookupGetter__=!1;var r=n(null);return r.__proto__=!1,{properties:{whitelist:i.createNewLookupObject(r,e.allowedProtoProperties),defaultValue:e.allowProtoPropertiesByDefault},methods:{whitelist:i.createNewLookupObject(t,e.allowedProtoMethods),defaultValue:e.allowProtoMethodsByDefault}}},t.resultIsAllowed=function(e,t,r){return s("function"==typeof e?t.methods:t.properties,r)},t.resetLoggedProperties=function(){o(l).forEach(function(e){delete l[e]})};var i=r(35),u=a(r(31)),l=n(null);function s(e,t){return void 0!==e.whitelist[t]?!0===e.whitelist[t]:void 0!==e.defaultValue?e.defaultValue:(function(e){!0!==l[e]&&(l[e]=!0,u.log("error",'Handlebars: Access has been denied to resolve the property "'+e+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(t),!1)}},function(e,t,r){e.exports={default:r(34),__esModule:!0}},function(e,t,r){var n=r(8);e.exports=function(e,t){return n.create(e,t)}},function(e,t,r){"use strict";var n=r(33).default;t.__esModule=!0,t.createNewLookupObject=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return o.extend.apply(void 0,[n(null)].concat(t))};var o=r(4)},function(e,t){"use strict";function r(e){this.string=e}t.__esModule=!0,r.prototype.toString=r.prototype.toHTML=function(){return""+this.string},t.default=r,e.exports=t.default},function(e,t,r){"use strict";var n=r(38).default,o=r(12).default,a=r(1).default,i=r(2).default;t.__esModule=!0,t.checkRevision=function(e){var t=e&&e[0]||1,r=s.COMPILER_REVISION;if(t>=s.LAST_COMPATIBLE_COMPILER_REVISION&&t<=s.COMPILER_REVISION)return;if(t<s.LAST_COMPATIBLE_COMPILER_REVISION){var n=s.REVISION_CHANGES[r],o=s.REVISION_CHANGES[t];throw new l.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+n+") or downgrade your runtime to an older version ("+o+").")}throw new l.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")},t.template=function(e,t){if(!t)throw new l.default("No environment passed to template");if(!e||!e.main)throw new l.default("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);var r=e.compiler&&7===e.compiler[0];var a={strict:function(e,t,r){if(!(e&&t in e))throw new l.default('"'+t+'" not defined in '+e,{loc:r});return a.lookupProperty(e,t)},lookupProperty:function(e,t){var r=e[t];return null==r?r:Object.prototype.hasOwnProperty.call(e,t)?r:p.resultIsAllowed(r,a.protoAccessControl,t)?r:void 0},lookup:function(e,t){for(var r=e.length,n=0;n<r;n++){var o=e[n]&&a.lookupProperty(e[n],t);if(null!=o)return e[n][t]}},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:u.escapeExpression,invokePartial:function(r,n,o){o.hash&&(n=u.extend({},n,o.hash),o.ids&&(o.ids[0]=!0));r=t.VM.resolvePartial.call(this,r,n,o);var a=u.extend({},o,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),i=t.VM.invokePartial.call(this,r,n,a);null==i&&t.compile&&(o.partials[o.name]=t.compile(r,e.compilerOptions,t),i=o.partials[o.name](n,a));if(null!=i){if(o.indent){for(var s=i.split("\n"),c=0,f=s.length;c<f&&(s[c]||c+1!==f);c++)s[c]=o.indent+s[c];i=s.join("\n")}return i}throw new l.default("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){var r=e[t];return r.decorator=e[t+"_d"],r},programs:[],program:function(e,t,r,n,o){var a=this.programs[e],i=this.fn(e);return t||o||n||r?a=d(this,e,i,t,r,n,o):a||(a=this.programs[e]=d(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},mergeIfNeeded:function(e,t){var r=e||t;return e&&t&&e!==t&&(r=u.extend({},t,e)),r},nullContext:n({}),noop:t.VM.noop,compilerInfo:e.compiler};function i(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=r.data;i._setup(r),!r.partial&&e.useData&&(n=function(e,t){t&&"root"in t||((t=t?s.createFrame(t):{}).root=e);return t}(t,n));var o=void 0,u=e.useBlockParams?[]:void 0;function l(t){return""+e.main(a,t,a.helpers,a.partials,n,u,o)}return e.useDepths&&(o=r.depths?t!=r.depths[0]?[t].concat(r.depths):r.depths:[t]),(l=v(e.main,l,a,r.depths||[],n,u))(t,r)}return i.isTop=!0,i._setup=function(n){if(n.partial)a.protoAccessControl=n.protoAccessControl,a.helpers=n.helpers,a.partials=n.partials,a.decorators=n.decorators,a.hooks=n.hooks;else{var i=u.extend({},t.helpers,n.helpers);!function(e,t){o(e).forEach(function(r){var n=e[r];e[r]=function(e,t){var r=t.lookupProperty;return f.wrapHelper(e,function(e){return u.extend({lookupProperty:r},e)})}(n,t)})}(i,a),a.helpers=i,e.usePartial&&(a.partials=a.mergeIfNeeded(n.partials,t.partials)),(e.usePartial||e.useDecorators)&&(a.decorators=u.extend({},t.decorators,n.decorators)),a.hooks={},a.protoAccessControl=p.createProtoAccessControl(n);var l=n.allowCallsToHelperMissing||r;c.moveHelperToHooks(a,"helperMissing",l),c.moveHelperToHooks(a,"blockHelperMissing",l)}},i._child=function(t,r,n,o){if(e.useBlockParams&&!n)throw new l.default("must pass block params");if(e.useDepths&&!o)throw new l.default("must pass parent depths");return d(a,t,e[t],r,0,n,o)},i},t.wrapProgram=d,t.resolvePartial=function(e,t,r){e?e.call||r.name||(r.name=e,e=r.partials[e]):e="@partial-block"===r.name?r.data["partial-block"]:r.partials[r.name];return e},t.invokePartial=function(e,t,r){var n=r.data&&r.data["partial-block"];r.partial=!0,r.ids&&(r.data.contextPath=r.ids[0]||r.data.contextPath);var o=void 0;r.fn&&r.fn!==h&&function(){r.data=s.createFrame(r.data);var e=r.fn;o=r.data["partial-block"]=function(t){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return r.data=s.createFrame(r.data),r.data["partial-block"]=n,e(t,r)},e.partials&&(r.partials=u.extend({},r.partials,e.partials))}();void 0===e&&o&&(e=o);if(void 0===e)throw new l.default("The partial "+r.name+" could not be found");if(e instanceof Function)return e(t,r)},t.noop=h;var u=a(r(4)),l=i(r(5)),s=r(3),c=r(9),f=r(42),p=r(32);function d(e,t,r,n,o,a,i){function u(t){var o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],u=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(u=[t].concat(i)),r(e,t,e.helpers,e.partials,o.data||n,a&&[o.blockParams].concat(a),u)}return(u=v(r,u,e,i,n,a)).program=t,u.depth=i?i.length:0,u.blockParams=o||0,u}function h(){return""}function v(e,t,r,n,o,a){if(e.decorator){var i={};t=e.decorator(t,i,r,n&&n[0],o,a,n),u.extend(t,i)}return t}},function(e,t,r){e.exports={default:r(39),__esModule:!0}},function(e,t,r){r(40),e.exports=r(20).Object.seal},function(e,t,r){var n=r(41);r(17)("seal",function(e){return function(t){return e&&n(t)?e(t):t}})},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t){"use strict";t.__esModule=!0,t.wrapHelper=function(e,t){if("function"!=typeof e)return e;return function(){var r=arguments[arguments.length-1];return arguments[arguments.length-1]=t(r),e.apply(this,arguments)}}},function(e,t){(function(r){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0!==r?r:window,n=t.Handlebars;e.noConflict=function(){return t.Handlebars===e&&(t.Handlebars=n),e}},e.exports=t.default}).call(t,function(){return this}())}])});
},{}],"yKEB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=l(require("handlebars/dist/handlebars.runtime"));function l(n){return n&&n.__esModule?n:{default:n}}const e=n.default.template({1:function(n,l,e,t,a){var o,r,i=null!=l?l:n.nullContext||{},u=n.hooks.helperMissing,s=n.escapeExpression,c=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<li class="gallery-list__item" data-film-id="'+s("function"==typeof(r=null!=(r=c(e,"id")||(null!=l?c(l,"id"):l))?r:u)?r.call(i,{name:"id",hash:{},data:a,loc:{start:{line:2,column:45},end:{line:2,column:51}}}):r)+'">\n    <a href="#" class="link">\n'+(null!=(o=c(e,"if").call(i,null!=l?c(l,"poster_path"):l,{name:"if",hash:{},fn:n.program(2,a,0),inverse:n.noop,data:a,loc:{start:{line:4,column:8},end:{line:8,column:15}}}))?o:"")+(null!=(o=c(e,"unless").call(i,null!=l?c(l,"poster_path"):l,{name:"unless",hash:{},fn:n.program(4,a,0),inverse:n.noop,data:a,loc:{start:{line:9,column:8},end:{line:11,column:19}}}))?o:"")+'        <div class="gallery-list__content">\n            <h2 class="gallery-list__title">'+s("function"==typeof(r=null!=(r=c(e,"title")||(null!=l?c(l,"title"):l))?r:u)?r.call(i,{name:"title",hash:{},data:a,loc:{start:{line:13,column:44},end:{line:13,column:53}}}):r)+'</h2>\n            <div class="gallery-list__bottom-wrapper">\n                <ul class="genres-list list">\n'+(null!=(o=c(e,"if").call(i,null!=l?c(l,"genre_ids"):l,{name:"if",hash:{},fn:n.program(6,a,0),inverse:n.noop,data:a,loc:{start:{line:16,column:20},end:{line:25,column:27}}}))?o:"")+(null!=(o=c(e,"unless").call(i,null!=l?c(l,"genre_ids"):l,{name:"unless",hash:{},fn:n.program(12,a,0),inverse:n.noop,data:a,loc:{start:{line:26,column:20},end:{line:35,column:31}}}))?o:"")+'                </ul>\n                <span class="gallery-list__item-year">'+s("function"==typeof(r=null!=(r=c(e,"release_date")||(null!=l?c(l,"release_date"):l))?r:u)?r.call(i,{name:"release_date",hash:{},data:a,loc:{start:{line:37,column:54},end:{line:37,column:70}}}):r)+"</span>\n            </div>\n        </div>\n    </a>\n</li>\n"},2:function(n,l,e,t,a){var o,r=null!=l?l:n.nullContext||{},i=n.hooks.helperMissing,u=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'        <picture>\n            <img loading="lazy" src="'+u("function"==typeof(o=null!=(o=s(e,"poster_path")||(null!=l?s(l,"poster_path"):l))?o:i)?o.call(r,{name:"poster_path",hash:{},data:a,loc:{start:{line:6,column:37},end:{line:6,column:52}}}):o)+'" alt="'+u("function"==typeof(o=null!=(o=s(e,"title")||(null!=l?s(l,"title"):l))?o:i)?o.call(r,{name:"title",hash:{},data:a,loc:{start:{line:6,column:59},end:{line:6,column:68}}}):o)+'" class="gallery-list__img">\n        </picture>\n'},4:function(n,l,e,t,a){return'        <div class="image-placeholder" aria-label="image not found"></div>\n'},6:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=r(e,"each").call(null!=l?l:n.nullContext||{},null!=l?r(l,"genre_ids"):l,{name:"each",hash:{},fn:n.program(7,a,0),inverse:n.noop,data:a,loc:{start:{line:17,column:20},end:{line:24,column:29}}}))?o:""},7:function(n,l,e,t,a){var o,r=null!=l?l:n.nullContext||{},i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(o=i(e,"if").call(r,a&&i(a,"last"),{name:"if",hash:{},fn:n.program(8,a,0),inverse:n.noop,data:a,loc:{start:{line:18,column:20},end:{line:20,column:27}}}))?o:"")+(null!=(o=i(e,"unless").call(r,a&&i(a,"last"),{name:"unless",hash:{},fn:n.program(10,a,0),inverse:n.noop,data:a,loc:{start:{line:21,column:20},end:{line:23,column:31}}}))?o:"")},8:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                    <li class="genres-list__item">'+n.escapeExpression("function"==typeof(o=null!=(o=r(e,"name")||(null!=l?r(l,"name"):l))?o:n.hooks.helperMissing)?o.call(null!=l?l:n.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:19,column:50},end:{line:19,column:58}}}):o)+"</li>\n"},10:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                    <li class="genres-list__item">'+n.escapeExpression("function"==typeof(o=null!=(o=r(e,"name")||(null!=l?r(l,"name"):l))?o:n.hooks.helperMissing)?o.call(null!=l?l:n.nullContext||{},{name:"name",hash:{},data:a,loc:{start:{line:22,column:50},end:{line:22,column:58}}}):o)+", </li>\n"},12:function(n,l,e,t,a){var o,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return null!=(o=r(e,"each").call(null!=l?l:n.nullContext||{},null!=l?r(l,"genres"):l,{name:"each",hash:{},fn:n.program(7,a,0),inverse:n.noop,data:a,loc:{start:{line:27,column:20},end:{line:34,column:29}}}))?o:""},compiler:[8,">= 4.3.0"],main:function(n,l,e,t,a){var o;return null!=(o=(n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]})(e,"each").call(null!=l?l:n.nullContext||{},l,{name:"each",hash:{},fn:n.program(1,a,0),inverse:n.noop,data:a,loc:{start:{line:1,column:0},end:{line:42,column:9}}}))?o:""},useData:!0});var t=e;exports.default=t;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"fSkc":[function(require,module,exports) {
"use strict";function e(e,i){return s(e,t(e,i,"get"))}function t(e,t,s){if(!t.has(e))throw new TypeError("attempted to "+s+" private field on non-instance");return t.get(e)}function s(e,t){return t.get?t.get.call(e):t.value}function i(e,t,s){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return s}Object.defineProperty(exports,"__esModule",{value:!0}),exports.FilmModalService=exports.ModalService=void 0;var n=new WeakMap,o=new WeakSet;class r{constructor(e){o.add(this),n.set(this,{writable:!0,value:i(this,o,c).bind(this)}),this.backdrop=e,this.backdrop.querySelector(".close-btn").addEventListener("click",this.close.bind(this)),this.backdrop.addEventListener("click",e=>{e.target.classList.contains("backdrop")&&this.close()})}open(){this.backdrop.classList.remove("is-hidden"),window.addEventListener("keydown",e(this,n))}close(){this.backdrop.classList.add("is-hidden"),window.removeEventListener("keydown",e(this,n))}}function c(e){"Escape"===e.code&&this.close()}exports.ModalService=r;class a extends r{constructor(e){super(e)}}exports.FilmModalService=a;
},{}],"RSs1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n=l(require("handlebars/dist/handlebars.runtime"));function l(n){return n&&n.__esModule?n:{default:n}}const a=n.default.template({1:function(n,l,a,o,e){var t,r=null!=l?l:n.nullContext||{},i=n.hooks.helperMissing,c=n.escapeExpression,s=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'        <img loading="lazy" src="'+c("function"==typeof(t=null!=(t=s(a,"poster_path")||(null!=l?s(l,"poster_path"):l))?t:i)?t.call(r,{name:"poster_path",hash:{},data:e,loc:{start:{line:4,column:33},end:{line:4,column:48}}}):t)+'" alt="'+c("function"==typeof(t=null!=(t=s(a,"title")||(null!=l?s(l,"title"):l))?t:i)?t.call(r,{name:"title",hash:{},data:e,loc:{start:{line:4,column:55},end:{line:4,column:64}}}):t)+'" class="modal__card-img">\n'},3:function(n,l,a,o,e){return'        <div class="image-placeholder" aria-label="image not found"></div>\n'},5:function(n,l,a,o,e){var t,r=null!=l?l:n.nullContext||{},i=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return(null!=(t=i(a,"if").call(r,e&&i(e,"last"),{name:"if",hash:{},fn:n.program(6,e,0),inverse:n.noop,data:e,loc:{start:{line:37,column:16},end:{line:39,column:23}}}))?t:"")+(null!=(t=i(a,"unless").call(r,e&&i(e,"last"),{name:"unless",hash:{},fn:n.program(8,e,0),inverse:n.noop,data:e,loc:{start:{line:40,column:16},end:{line:42,column:27}}}))?t:"")},6:function(n,l,a,o,e){var t,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                <span class="modal__card-info-text modal__card-info-text_color_main">'+n.escapeExpression("function"==typeof(t=null!=(t=r(a,"name")||(null!=l?r(l,"name"):l))?t:n.hooks.helperMissing)?t.call(null!=l?l:n.nullContext||{},{name:"name",hash:{},data:e,loc:{start:{line:38,column:85},end:{line:38,column:93}}}):t)+"</span>\n"},8:function(n,l,a,o,e){var t,r=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'                <span class="modal__card-info-text modal__card-info-text_color_main">'+n.escapeExpression("function"==typeof(t=null!=(t=r(a,"name")||(null!=l?r(l,"name"):l))?t:n.hooks.helperMissing)?t.call(null!=l?l:n.nullContext||{},{name:"name",hash:{},data:e,loc:{start:{line:41,column:85},end:{line:41,column:93}}}):t)+", </span>\n"},compiler:[8,">= 4.3.0"],main:function(n,l,a,o,e){var t,r,i=null!=l?l:n.nullContext||{},c=n.hooks.helperMissing,s="function",d=n.escapeExpression,u=n.lookupProperty||function(n,l){if(Object.prototype.hasOwnProperty.call(n,l))return n[l]};return'<div class="modal__card">\n    <div class="modal__card-left-side">\n'+(null!=(t=u(a,"if").call(i,null!=l?u(l,"poster_path"):l,{name:"if",hash:{},fn:n.program(1,e,0),inverse:n.noop,data:e,loc:{start:{line:3,column:8},end:{line:5,column:15}}}))?t:"")+(null!=(t=u(a,"unless").call(i,null!=l?u(l,"poster_path"):l,{name:"unless",hash:{},fn:n.program(3,e,0),inverse:n.noop,data:e,loc:{start:{line:6,column:8},end:{line:8,column:19}}}))?t:"")+'    </div>\n    <div class="modal__card-right-side">\n        <h2 class="modal__card-title">'+d(typeof(r=null!=(r=u(a,"title")||(null!=l?u(l,"title"):l))?r:c)===s?r.call(i,{name:"title",hash:{},data:e,loc:{start:{line:11,column:38},end:{line:11,column:47}}}):r)+'</h2>\n        <ul class="modal__card-info-list list">\n            <li class="modal__card-info-item">\n                <span\n                    class="modal__card-info-text modal__card-info-text_side_left modal__card-info-text_color_secondary">Vote\n                    /\n                    Votes</span><span class="modal__card-info-text modal__card-info-text_color_main"><span\n                        class="modal__card-info-votes modal__card-info-votes_color_accent">'+d(typeof(r=null!=(r=u(a,"vote_average")||(null!=l?u(l,"vote_average"):l))?r:c)===s?r.call(i,{name:"vote_average",hash:{},data:e,loc:{start:{line:18,column:91},end:{line:18,column:107}}}):r)+'</span> /\n                    <span\n                        class="modal__card-info-votes modal__card-info-votes_color_secondary">'+d(typeof(r=null!=(r=u(a,"vote_count")||(null!=l?u(l,"vote_count"):l))?r:c)===s?r.call(i,{name:"vote_count",hash:{},data:e,loc:{start:{line:20,column:94},end:{line:20,column:108}}}):r)+'</span></span>\n            </li>\n            <li class="modal__card-info-item">\n                <span\n                    class="modal__card-info-text modal__card-info-text_side_left modal__card-info-text_color_secondary">Popularity</span><span\n                    class="modal__card-info-text modal__card-info-text_color_main">'+d(typeof(r=null!=(r=u(a,"popularity")||(null!=l?u(l,"popularity"):l))?r:c)===s?r.call(i,{name:"popularity",hash:{},data:e,loc:{start:{line:25,column:83},end:{line:25,column:97}}}):r)+'</span>\n            </li>\n            <li class="modal__card-info-item">\n                <span\n                    class="modal__card-info-text modal__card-info-text_side_left modal__card-info-text_color_secondary">Original\n                    Title</span><span\n                    class="modal__card-info-text modal__card-info-text_color_main">'+d(typeof(r=null!=(r=u(a,"original_title")||(null!=l?u(l,"original_title"):l))?r:c)===s?r.call(i,{name:"original_title",hash:{},data:e,loc:{start:{line:31,column:83},end:{line:31,column:101}}}):r)+'</span>\n            </li>\n            <li class="modal__card-info-item">\n                <span\n                    class="modal__card-info-text modal__card-info-text_side_left modal__card-info-text_color_secondary">Genre</span>\n'+(null!=(t=u(a,"each").call(i,null!=l?u(l,"genres"):l,{name:"each",hash:{},fn:n.program(5,e,0),inverse:n.noop,data:e,loc:{start:{line:36,column:16},end:{line:43,column:25}}}))?t:"")+'            </li>\n        </ul>\n        <h3 class="modal__card-subtitle">About</h3>\n        <p class="modal__card-description">'+d(typeof(r=null!=(r=u(a,"overview")||(null!=l?u(l,"overview"):l))?r:c)===s?r.call(i,{name:"overview",hash:{},data:e,loc:{start:{line:47,column:43},end:{line:47,column:55}}}):r)+'</p>\n        <div class="modal__card-btn-wrapper">\n            <button type="button" class="modal__card-btn" data-remove-btn>remove from '+d(typeof(r=null!=(r=u(a,"libraryCondition")||(null!=l?u(l,"libraryCondition"):l))?r:c)===s?r.call(i,{name:"libraryCondition",hash:{},data:e,loc:{start:{line:49,column:86},end:{line:49,column:106}}}):r)+"</button>\n        </div>\n    </div>\n</div>"},useData:!0});var o=a;exports.default=o;
},{"handlebars/dist/handlebars.runtime":"pAws"}],"nHKT":[function(require,module,exports) {
"use strict";var e=require("./refs"),t=require("../utils/localStorageService"),r=i(require("../../templates/gallery-card")),a=require("../components/modal"),l=i(require("../../templates/watched-modal-card"));function i(e){return e&&e.__esModule?e:{default:e}}const n=new t.LocalStorageService,s=new a.FilmModalService(e.refs.backdrop);d("watched");let c=e.refs.filterBtnsContainer.querySelector('button[data-filter="watched"]');function o(t){if("BUTTON"!==t.target.nodeName)return;if(t.target.classList.contains("filter-list__btn_active"))return;const r=t.target.dataset.filter;c.classList.remove("filter-list__btn_active"),t.target.classList.add("filter-list__btn_active"),d(r),c=t.target,e.refs.filmGallery.dataset.gallery=r}function d(t){e.refs.filmGallery.innerHTML="";const a=n.load(t);a&&(e.refs.filmGallery.innerHTML=(0,r.default)(a))}function f(t){t.preventDefault();const r=t.target.closest(".gallery-list__item");if(!r)return;s.open();const a=t.currentTarget.dataset.gallery,i=n.load(a),c=+r.dataset.filmId,o=i.find(e=>e.id===c);e.refs.modalCardContainer.innerHTML=(0,l.default)({...o,libraryCondition:a}),e.refs.backdrop.querySelector("button[data-remove-btn]").addEventListener("click",e=>{const t=n.load(a);t.forEach((e,t,r)=>{e.id===c&&r.splice(t,1)}),n.save(a,t),d(a),s.close()})}e.refs.filterBtnsContainer.addEventListener("click",o),e.refs.filmGallery.addEventListener("click",f);
},{"./refs":"KY7H","../utils/localStorageService":"WHRk","../../templates/gallery-card":"yKEB","../components/modal":"fSkc","../../templates/watched-modal-card":"RSs1"}]},{},["nHKT"], null)
//# sourceMappingURL=/filmoteka-v2.0/library.ee01b65e.js.map