/* version: 2016-12-8 15:43:49 */
!function(t){"use strict";function e(){}var n=t.adv={};t.flashCallback={},n.merge=function(){var t=arguments.length;if(1>t)return{};if(2>t)return n.merge(n,arguments[0]);for(var e=arguments[0],i=1;t>i;i++){var o=arguments[i];for(var s in o)o.hasOwnProperty(s)&&(e[s]=o[s])}return e};var i=!1,o=/xyz/.test(function(){})?/\bbase\b/:/.*/;e.extend=function(t,s){function r(){!i&&this.init&&this.init.apply(this,arguments)}if(2==arguments.length){var a=t.split("")[0];if(a.toUpperCase()!=a)throw new Error("Constructor must begin with Uppercase letter:"+t);var c=this.extend(s);return c.classType=t,void(n[t]=c)}s=arguments[0];var u=this.prototype;i=!0;var l=new this;i=!1;for(var d in s)l[d]="function"==typeof s[d]&&"function"==typeof u[d]&&o.test(s[d])?function(t,e){return function(){var n=this.base;this.base=u[t];var i=e.apply(this,arguments);return this.base=n,i}}(d,s[d]):s[d];return r.prototype=l,r.prototype.constructor=r,r.extend=e.extend,r},n.Class=e,n.CONFIGS={baseDir:"http://ue.17173cdn.com/a/lib/vda",debug:!1},n.CONFIGS=n.merge(n.CONFIGS,advConfigs.ADV_CONFIGS),n.VERSION="v0.5.0",n.merge({ENUM:{ADVSTATE:{uninit:"uninit",inited:"inited",setuped:"setuped",played:"played",stoped:"stoped",dispose:"dispose"},ERROR:{initInterface:"can not init an interface"},EVENTS:{configed:"configed",inited:"inited",setuped:"setuped",played:"played",stoped:"stoped",dispose:"disspose"},POSITION:{topLeft:"topLeft",topCenter:"topCenter",topRight:"topRight",middleLeft:"middleLeft",middleCenter:"middleCenter",middleRight:"middleRight",bottomLeft:"bottomLeft",bottomCenter:"bottomCenter",bottomRight:"bottomRight"},RANDOMS:{allways:"allways",firstTime:"firstTime"}}})}(window),function(t){"use strict";{var e=Array.prototype.forEach,n=Object.prototype.toString,i={ARRAY:"[object Array]",NUM:"[object Number]",OBJECT:"[object Object]",STRING:"[object String]",FUNCTION:"[object Function]"},o={},s=/[^, ]+/g;"propertyIsEnumerable,isPrototypeOf,hasOwnProperty,toLocaleString,toString,valueOf,constructor".split(",")}"Boolean Number String Function Array Date RegExp Object Error".replace(s,function(t){o["[object "+t+"]"]=t.toLowerCase()});var r=Object.prototype,a=r.hasOwnProperty;t.util={sendIpa:function(t,e,n){window._jc_ping=window._jc_ping||[],_jc_ping.push(["_trackModuleArea",t,e,n])},sendTrack:function(t,e,n){this.sendIpa(t,e,n)},random:function(e){var o=n.call(e);return o===i.ARRAY?t.util.random(e.length):o===i.NUM?Math.floor(Math.random()*e):0},guid:function(){return"adv"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},getType:function(t){return null==t?String(t):"object"==typeof t||"function"==typeof t?o[n.call(t)]||"object":typeof t},isObject:function(t){return n.call(t)===i.OBJECT},isString:function(t){return n.call(t)===i.STRING},isNum:function(t){return n.call(t)===i.NUM},isArray:function(t){return n.call(t)===i.ARRAY},isFunction:function(t){return n.call(t)===i.FUNCTION},isWindow:function(t){return t?t==t.document&&t.document!=t:!1},isPlainObject:function(e){if("object"!==t.util.getType(e)||e.nodeType||this.isWindow(e))return!1;try{if(e.constructor&&!a.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}return!0},arrDel:function(t,e){return 0>e?t:t.slice(0,e).concat(t.slice(e+1,t.length))},forEach:function(t,n,i){if(null!=t)if(e&&t.forEach===e)t.forEach(n,i);else if(t.length===+t.length)for(var o=0,s=t.length;s>o;o++)n.call(i,t[o],o,t);else for(var r in t)t.hasOwnProperty(r)&&n.call(i,t[r],r,t)},filter:function(){},urlParams:function(t){var e={};return t=t||location.href,t=~t.indexOf("?")?t.split("?")[1]:t,t&&t.replace(/([^=&]+)=([^&]*)/gi,function(t,n,i){e[n]=i}),e},objToQueryStr:function(t,e){var n=[];e=e===!1?e:!0;for(var i in t)t.hasOwnProperty(i)&&n.push(i+"="+(e?encodeURIComponent(t[i]):t[i]));return n.join("&")},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},poll:function(t,e,n,i,o){var s=1*new Date+(i||2e3);o=o||100,function r(){t()?e():1*new Date<s?setTimeout(r,o):n()}()}},t.util.isMobile=function(){for(var t=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPod"],n=!1,i=0;i<e.length;i++)if(t.indexOf(e[i])>-1){n=!0;break}return n}()}(adv),function(t){"use strict";t.net={jsonp:function(e,n,i){if(t.util.isFunction(n)&&(i=n),n=n||{},i){var o=t.util.guid();window[o]=i,n.callback=o}e=e+"?"+t.util.objToQueryStr(n);var s=document.createElement("script");s.src=e,document.getElementsByTagName("head")[0].appendChild(s)},proxy:function(e,n,i){var o="//ap.17173.com";n=n||{};var s={u:e,p:t.util.objToQueryStr(n,!1)};this.jsonp(o,s,i)}}}(adv),function(t){"use strict";var e="@",n=!0,i=function(e,n){var s;return 1==arguments.length?o(e):("function"==typeof e&&(e=t.razor.multiline(e)),s=o(e),s.call(null,i.HtmlHelper,n))},o=function(t){var e={segments:[],segmentIndex:0,conditionOpeningBraceCount:0},n=a.parse(e,t),i=c.toFunctionContent(n);return new Function("Html","m",i)};i.HtmlHelper={escape:function(t){return(""+t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")}};var s={String:0,Variable:1,ScriptBlock:2},r={VariableFirstChar:/^[\(_a-zA-Z]/,Variable:/^(?:(?:\()(?:new\s+)?[_a-zA-Z0-9]+(?:\.|[-\+*\/^=<>?:]|[\[\(][^\]\)]*[\]\)]|[_a-zA-Z0-9]+)*(?:\))|(?:new\s+)?[_a-zA-Z0-9]+(?:\.|[\[\(][^\]\)]*[\]\)]|[_a-zA-Z0-9]+)*)/,ConditionAndLoop:/^(?:if|for|while)\s*\(/,ElseCondition:/^[\s\r\n\t]*else(?:\s*{|[\s\t]+if\()?/,Unicode:/\\u([\d\w]{4})/gi},a={parse:function(t,n){for(var i=n.length,o=0;i>o;o++){var s=n.substr(o,1);if(s===e){this._handleString(t,n,t.segmentIndex,o-t.segmentIndex);var a=n.substr(o+1,1);a===e?(this._handleEscape(t,e,t.segmentIndex),o=t.segmentIndex-1):"}"===a?(this._handleEscape(t,a,t.segmentIndex),o=t.segmentIndex-1):"{"===a?(this._handleScriptBlock(t,n,o+1),o=t.segmentIndex-1):r.VariableFirstChar.test(a)&&(r.ConditionAndLoop.test(n.substr(o+1))?this._handleCondition(t,n,o+1):this._handleVariable(t,n,o+1),o=t.segmentIndex-1)}else"}"===s&&t.conditionOpeningBraceCount>0&&(this._handleCloseBrace(t,n,o),r.ElseCondition.test(n.substr(t.segmentIndex))&&this._handleCondition(t,n,o+1),o=t.segmentIndex-1)}return t.segmentIndex<i&&this._handleString(t,n,t.segmentIndex,i-t.segmentIndex),t.segments},_handleString:function(t,e,n,i){0!=i&&(t.segments[t.segments.length]={segmentType:s.String,content:e.substr(n,i)},t.segmentIndex=n+i)},_handleEscape:function(t,e,n){t.segmentIndex=n+2,t.segments[t.segments.length]={segmentType:s.String,content:e}},_handleVariable:function(t,e,n){var i=e.substr(n),o=r.Variable.exec(i)[0];t.segmentIndex=n+o.length,t.segments[t.segments.length]={segmentType:s.Variable,content:o}},_handleScriptBlock:function(t,e,n){var i=this._getScriptBlockLength(e,n);t.segmentIndex=n+i,t.segments[t.segments.length]={segmentType:s.ScriptBlock,content:e.substr(n+1,i-2)},t.conditionOpeningBraceCount++},_getScriptBlockLength:function(t,e){for(var n=0,i=e;i<t.length;i++){var o=t.substr(i,1);if("{"===o)n++;else if("}"===o){if(0===--n)return i-e+1;n--}}throw"no matches found }"},_handleCondition:function(t,e,n){var i=e.substr(n),o=i.indexOf("{");t.segments[t.segments.length]={segmentType:s.ScriptBlock,content:i.substr(0,o+1)},t.segmentIndex=n+o+1,t.conditionOpeningBraceCount++},_handleCloseBrace:function(t,e,n){this._handleString(t,e,t.segmentIndex,n-t.segmentIndex),t.segments[t.segments.length]={segmentType:s.ScriptBlock,content:e.substr(n,1)},t.segmentIndex=n+1,t.conditionOpeningBraceCount--}},c={escape:function(t){return t.replace(/\\/g,"\\\\").replace(/'/g,"\\'").replace(/[\n\r]/g,"")},toFunctionContent:function(t){for(var e=["var __c=[];with(m||{}){"],i=0;i<t.length;i++)if(t[i].segmentType===s.String)e[e.length]="__c[__c.length] = '"+this.escape(t[i].content)+"';";else if(t[i].segmentType===s.Variable){var o=t[i].content;e[e.length]=n?"if(typeof "+o+" !== 'undefined'){__c[__c.length] = "+o+";}":"__c[__c.length] = "+o+";"}else t[i].segmentType===s.ScriptBlock&&(e[e.length]=t[i].content);return e[e.length]="};return __c.join('');",e.join("")}};i.use=function(t){return e=t,this},i.enableEmptyValue=function(t){return n=t,this},i.multiline=function(t){var e=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,n=e.exec(t.toString());if(!n)throw new TypeError("Template does not exist,or unread");return n[1].toString().replace(r.Unicode,function(t,e){return String.fromCharCode(parseInt(e,16))})},t.razor=i}(adv),function(t){"use strict";t.cookie={DAY:864e5,HOUR:36e5,MINUTE:6e4,setCookie:function(t,e,n,i,o){var s=t+"="+escape(e);if(n){var r=new Date;r.setTime(r.getTime()+n),s+="; expires="+r.toUTCString()}i&&(s+="; domain="+i),o&&(s+="; path="+o),document.cookie=s},getCookie:function(t){var e,n=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(n))?unescape(e[2]):null},deleteCookie:function(e){t.cookie.setCookie(e,1,-1e3)}}}(adv),function(t){"use strict";t.storage={set:function(e,n,i){t.storage.set=window.localStorage?function(t,e,n){var i=new Date;i.setTime(i.getTime()+n),n&&(e+=";;"+1*i),localStorage.setItem(t,e)}:function(e,n,i){t.cookie.setCookie(e,n,i)},t.storage.set(e,n,i)},get:function(e){return t.storage.get=window.localStorage?function(t){var e,n=localStorage.getItem(t);return n&&(e=n.split(";;"),!e[1]||e[1]-1*new Date>0)?e[0]:void 0}:function(e){return t.cookie.getCookie(e)},t.storage.get(e)},remove:function(e){t.storage.remove=window.localStorage?function(t){localStorage.removeItem(t)}:function(e){t.cookie.deleteCookie(e)},t.storage.remove(e)}}}(adv),function(t){"use strict";function e(t){return t.indexOf("-")<0&&t.indexOf("_")<0?t:t.replace(/[-_][^-_]/g,function(t){return t.charAt(1).toUpperCase()})}function n(t,e){"string"==typeof t&&(t=t.match(y)||[]);for(var n={},i=void 0!==e?e:1,o=0,s=t.length;s>o;o++)n[t[o]]=i;return n}function i(t,e){if(t.offsetWidth<=0){if(k.test(S["@:get"](t,"display"))){var n={node:t};for(var o in D)n[o]=t.style[o],t.style[o]=D[o];e.push(n)}var s=t.parentNode;s&&1==s.nodeType&&i(s,e)}}function o(t){var e={};for(var n in t)e[n]=t[n];var i=e.target=t.srcElement;if(0===t.type.indexOf("key"))e.which=null!=t.charCode?t.charCode:t.keyCode;else if(/mouse|click/.test(t.type)){var o=i.ownerDocument||DOC,s="BackCompat"===o.compatMode?o.body:o.documentElement;e.pageX=t.clientX+(s.scrollLeft>>0)-(s.clientLeft>>0),e.pageY=t.clientY+(s.scrollTop>>0)-(s.clientTop>>0)}return e.timeStamp=new Date-0,e.originalEvent=t,e.preventDefault=function(){t.returnValue=!1},e.stopPropagation=function(){t.cancelBubble=!0},e}var s,r=document.createElement("div"),a=document.documentElement,c=window.dispatchEvent,u=function(t){r.innerHTML=t;for(var e=[];r.childNodes.length;)e.push(r.removeChild(r.firstChild));return e},l=function(e,n){var i=[];if(!t.util.isString(e)||""==e)return i;var o=e.split(" "),s="",r=o[0].split(":")[0];r!=o[0]&&(s=o[0].split(":")[1]);var a=r.split("[")[0];a=a!=r?r.split("[")[1].replace(/[",\]]/g,""):"",r=r.split("[")[0];var c=null;switch(n=n||document,r.charAt(0)){case"#":c=document.getElementById(r.substr(1)),c&&i.push(c);break;case".":for(var u=n.getElementsByTagName("*"),d=r.substr(1),f=0;f<u.length;f++)u[f].className&&t.util.isFunction(u[f].className.search)&&-1!=u[f].className.search("\\b"+d+"\\b")&&i.push(u[f]);break;default:i=n.getElementsByTagName(r)}if(a){for(var u=[],h=a.split("="),f=0;f<i.length;f++)2==h.length&&i[f][h[0]]==h[1]&&u.push(i[f]);i=u}if(s){for(var u=[],f=0;f<i.length;f++)i[f][s]&&u.push(i[f]);i=u}if(o.length>1){for(var u=[],f=0;f<i.length;f++){var p=l(e.substr(o[0].length+1),i[f]);if(p.tagName)u.push(p);else for(var g=0;g<p.length;g++)u.push(p[g])}i=u}if(c&&1==o.length)i=c,i&&(i.length=1);else{for(var u=[],f=0;f<i.length;f++)i[f].$isAdd=!1;for(var f=0;f<i.length;f++)i[f].$isAdd||(i[f].$isAdd=!0,u.push(i[f]));i=u}return i},d=[],f=!1,h=function(e){return m(),t.isReady?e.call(document,t):d&&d.push(e),this},p=function(){if(!t.isReady){if(!document.body)return setTimeout(p,13);if(t.isReady=!0,d){for(var e,n=0;e=d[n++];)e.call(document,t);d=null}}},g=function(){if(!t.isReady){try{document.documentElement.doScroll("left")}catch(e){return void setTimeout(g,1)}p()}},m=function(){if(!f){if(f=!0,"complete"===document.readyState)return p();if(document.addEventListener)document.addEventListener("DOMContentLoaded",s,!1),window.addEventListener("load",p,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",s),window.attachEvent("onload",p);var t=!1;try{t=null==window.frameElement}catch(e){}document.documentElement.doScroll&&t&&g()}}};t.isReady=!1;var v=/\S+/g,y=/[^, ]+/g,E=t.Dom=t.Class.extend({init:function(e,n){var i=this;this.els=[],e&&(e.nodeType?this.els.push(e):t.util.isFunction(e)?h(e):this.els=this.els.concat("<"===t.util.trim(e).charAt(0)?u(t.util.trim(e)):l(e,n))),this.length=this.els.length,this.forEach(function(t,e){i[e]=t})},forEach:function(e){return t.util.forEach(this.els,function(t,n){e(t,n)}),this},hide:function(){return this.forEach(function(t){t.style.display="none"}),this},remove:function(){},show:function(){return this.forEach(function(t){t.style.display="block"}),this},find:function(t){return new E(t,this.els[0])},append:function(e){var n=this;return this.length&&((t.util.isString(e)||1===e.nodeType)&&(e=new t.Dom(e)),e.length&&e.forEach(function(t){n.els[0].appendChild(t)})),this},appendTo:function(t){return t.append(this),this},css:function(e,n){if(t.util.isPlainObject(e))for(var i in e)t.Dom.css(this,i,e[i]);else var o=t.Dom.css(this,e,n);return void 0!==o?o:this},hasClass:function(t){var e=this[0]||{};return 1===e.nodeType&&e.className?(" "+e.className+" ").indexOf(" "+t+" ")>-1:!1},addClass:function(t){var e=this[0]||{};if(t&&"string"==typeof t&&1===e.nodeType)if(e.className){var n=e.className.match(v);t.replace(v,function(t){-1===n.indexOf(t)&&n.push(t)}),e.className=n.join(" ")}else e.className=t;return this},removeClass:function(t){var e=this[0]||{};if(t&&typeof t>"o"&&1===e.nodeType&&e.className){for(var n=t.match(v)||[],i=n.length,o=" "+e.className.match(v).join(" ")+" ",s=0;i>s;s++)o=o.replace(" "+n[s]+" "," ");e.className=o.slice(1,o.length-1)}return this},attr:function(t,e){return 2===arguments.length?(this[0].setAttribute(t,e),this):this[0].getAttribute(t)},offset:function(){var t=this[0],e=t&&t.ownerDocument,n={left:0,top:0};if(!e)return n;var i=t.getBoundingClientRect(),o=e.defaultView||e.parentWindow,s=navigator.vendor||"BackCompat"===e.compatMode?e.body:e.documentElement,r=s.clientTop>>0,a=s.clientLeft>>0,c=o.pageYOffset||s.scrollTop,u=o.pageXOffset||s.scrollLeft;return n.top=i.top+c-r,n.left=i.left+u-a,n},position:function(){var e,n,i=this[0],o={top:0,left:0};if(i)return"fixed"===this.css("position")?n=i.getBoundingClientRect():(e=this.offsetParent(),n=this.offset(),"HTML"!==e[0].tagName&&(o=e.offset()),o.top+=t.Dom.css(e[0],"borderTopWidth",!0),o.left+=t.Dom.css(e[0],"borderLeftWidth",!0)),{top:n.top-o.top-t.Dom.css(i,"marginTop",!0),left:n.left-o.left-t.Dom.css(i,"marginLeft",!0)}},offsetParent:function(){for(var e=this[0].offsetParent||a;e&&"HTML"!==e.tagName&&"static"===t.Dom.css(e,"position");)e=e.offsetParent;return t.$(e||a)},width:function(){this[0]},html:function(t){return t?(this.append(t),this):this.length?this[0].innerHTML:""},outerHtml:function(){return t.$("<div>").append(this[0]).html()},on:function(e,n,i){this.forEach(function(o){t.Dom.on(o,e,n,i)})},off:function(e,n,i){this.forEach(function(o){t.Dom.off(o,e,n,i)})}}),b=["","-webkit-","-o-","-moz-","-ms-"];t.Dom.cssName=function(t,n,i){if(T[t])return T[t];n=n||a.style;for(var o=0,s=b.length;s>o;o++)if(i=e(b[o]+t),i in n)return T[t]=i;return null};var w=n("columnCount,order,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");t.Dom.css=function(n,i,o){n=n[0];var s=/[_-]/.test(i)?e(i):i;if(i=t.Dom.cssName(s)||s,void 0===o||"boolean"==typeof o){var r=S[s+":get"]||S["@:get"],a=r(n,i);return o===!0?parseFloat(a)||0:a}if(""===o)n.style[i]="";else{if(null==o||o!==o)return;isFinite(o)&&!w[s]&&(o+="px"),r=S[s+":set"]||S["@:set"],r(n,i,o)}};var T={"float":"cssFloat",background:"backgroundColor"},S=t.Dom.cssHooks={};if(S["@:set"]=function(t,e,n){try{t.style[e]=n}catch(i){}},window.getComputedStyle)S["@:get"]=function(t,e){var n,i;return t&&(i=window.getComputedStyle(t,null))&&(n="filter"===e?i.getPropertyValue(e):i[e],""===n&&(n=t.style[e])),n},S["opacity:get"]=function(t){var e=S["@:get"](t,"opacity");return""===e?"1":e};else{var C=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,x=/^(top|right|bottom|left)$/,N=!!window.XDomainRequest,A="DXImageTransform.Microsoft.Alpha",_={thin:N?"1px":"2px",medium:N?"3px":"4px",thick:N?"5px":"6px"};S["@:get"]=function(t,e){if(!t)return"auto";var n=t.currentStyle,i=n[e];if(C.test(i)&&!x.test(i)){var o=t.style,s=o.left,r=t.runtimeStyle.left;t.runtimeStyle.left=n.left,o.left="fontSize"===e?"1em":i||0,i=o.pixelLeft+"px",o.left=s,t.runtimeStyle.left=r}return"medium"===i&&(e=e.replace("Width","Style"),"none"===n[e]&&(i="0px")),""===i?"auto":_[i]||i},S["opacity:set"]=function(t,e,n){t.style.filter="alpha(opacity="+100*n+")",t.style.zoom=1},S["opacity:get"]=function(t){var e=t.filters.alpha||t.filters[A],n=e?e.opacity:100;return n/100+""},"width,height".replace(y,function(e){S[e+":get"]=function(n){return"width"===e?n.clientWidth-t.Dom.css(n,"paddingLeft",!0)-t.Dom.css(n,"paddingRight",!0):n.clientHeight-t.Dom.css(n,"paddingTop",!0)-t.Dom.css(n,"paddingBottom",!0)}})}"top,left".replace(y,function(e){S[e+":get"]=function(n){var i=S["@:get"](n,e);return/px$/.test(i)?i:t.$(n).position()[e]+"px"}});var D={position:"absolute",visibility:"hidden",display:"block"},k=/^(none|table(?!-c[ea]).+)/;"Width,Height".replace(y,function(e){var n=e.toLowerCase(),o="client"+e,s="scroll"+e,r="offset"+e;S[n+"::get"]=function(e){var o=[];i(e,o);for(var s,r=t.Dom.css(e,n,!0),a=0;s=o[a++];){e=s.node;for(var c in s)"string"==typeof s[c]&&(e.style[c]=s[c])}return r},t.Dom[n]=function(t){var i=this[0];if(0===arguments.length){if(i.setTimeout)return i["inner"+e]||i.document.documentElement[o];if(9===i.nodeType){var a=i.documentElement;return Math.max(i.body[s],a[s],i.body[r],a[r],a[o])}return S[n+"::get"](i)}return this.css(n,t)}}),t.Dom.on=function(t,e,n,i){var s=c?n:function(e){return n.call(t,o(e))};return c?t.addEventListener(e,s,!!i):t.attachEvent("on"+e,s),s},t.Dom.off=c?function(t,e,n,i){t.removeEventListener(e,n||noop,!!i)}:function(t,e,n){t.detachEvent("on"+e,n||noop)},t.easin={},t.$=function(t,e){return new E(t,e)},t.$.appendStyle=function(t){var e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t)),e.appendChild(n)}}(adv),function(t){"use strict";t.flash={embed:function(e){var n,i=[],o=e.id?e.id:t.util.guid(),s=e.params||[],r="",a=~e.source.indexOf(".flv"),c="http://ue.17173cdn.com/a/lib/vda/ad_assets_loader.swf";return i.push('<object id="'+o+'" name="'+o+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,22,0"'),e.width&&i.push(' width="'+e.width+'"'),e.height&&i.push(' height = "'+e.height+'"'),i.push(">"),i.push('<param name="wmode" value="transparent">'),i.push('    <param name="movie" value="'+(a?c:e.source)+'">'),i.push('    <param name="quality" value="high">'),i.push('    <param name="allowScriptAccess" value="always">'),s&&(n=[],t.util.forEach(s,function(e,i){var s=e;t.util.isFunction(e)&&(s=t.util.guid(),window.flashCallback[s]=function(){var n=t.flash.getSWF(o);e.apply(n,arguments)}),n.push(i+"="+s)}),a&&(n.push("url="+e.source),n.push("maxsize=500")),r=n.join("&"),i.push('    <param name="flashvars" value="'+r+'">')),i.push('    <embed wmode="transparent" flashvars="'+r+'" allowScriptAccess="always" name="'+o+'" src="'+(a?c:e.source)+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"></embed>'),i.push("</object>"),t.$(i.join(""))},getParam:function(e,n){var i,o;return t.util.forEach(e[0].childNodes,function(e){e.name==n?i=e.value:"flashvars"===e.name?(o=t.util.urlParams(e.value),t.util.forEach(o,function(t,e){e==n&&(i=t)})):e[n]&&(i=e[n])}),i},getSWF:function(t){return-1!=navigator.appName.indexOf("Microsoft")?window[t]:document[t]}}}(adv),function(t){"use strict";t.Class.extend("EventEmitter",{init:function(){this.events={}},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(e,n){this.events[e]=n?t.util.filter(this.events[e],function(t){return t!==t}):[]},emit:function(e,n){t.util.forEach(this.events[e],function(i){t.CONFIGS.debug&&console.log(e,n),i.call(this,n)},this)}})}(adv),function(t){"use strict";t.EventEmitter.extend("IAdv",{init:function(){this.base()},setup:function(){throw new Error(t.ENUM.ERROR.initInterface)},play:function(){throw new Error(t.ENUM.ERROR.initInterface)},stop:function(){throw new Error(t.ENUM.ERROR.initInterface)}})}(adv),function(t){"use strict";t.Class.extend("Collection",{init:function(){this.cursor=0,this._arrData=[]},reset:function(){this.cursor=0},read:function(){var t;return this.cursor>=this.count()?t=null:(t=this._arrData[this.cursor].data,this.cursor++),t},count:function(){return this._arrData.length},push:function(t,e){this._arrData.push({key:t,data:e})},get:function(){var t,e,n=[];return arguments.length?adv.util.isNum(arguments[0])?(e=arguments[0],this.forEach(function(t,i,o){o===e&&n.push(t)})):adv.util.isString(arguments[0])?this.forEach(function(t,e){e===arguments[0]&&n.push(t)}):adv.util.isObject(arguments[0])&&(t=arguments[0],this.forEach(function(e){var i=!0;for(var o in t)e[o]&&e[o]==t[o]||(i=!1);i&&n.push(e)})):this.forEach(function(t){n.push(t)}),1===n.length?n=n[0]:0===n.length&&(n=null),n},forEach:function(t){adv.util.forEach(this._arrData,function(e,n){t(e.data,e.key,n)})},del:function(){}})}(adv),function(t){t.IAdv.extend("AdBase",{init:function(e){this.state=adv.ENUM.ADVSTATE.uninit,this.base(),this.options=adv.merge({},this.options,e),this.id=t.util.guid(),t.util.forEach(this.options.events,function(t){this.on(t.event,t.listener)},this),this.on(adv.ENUM.EVENTS.inited,function(){this.state=adv.ENUM.ADVSTATE.inited}),this.on(adv.ENUM.EVENTS.setuped,function(){this.state=adv.ENUM.ADVSTATE.setuped}),this.on(adv.ENUM.EVENTS.played,function(){this.state=adv.ENUM.ADVSTATE.played}),this.on(adv.ENUM.EVENTS.stoped,function(){this.state=adv.ENUM.ADVSTATE.stoped})},setup:function(){},play:function(){},stop:function(){},generalAdMark:function(t){var e;return t=adv.merge({zIndex:10,left:!0,top:!1,offset:[2,2]},t),e='<em style="display: block;width:24px; height:14px; background:url(http://ue.17173cdn.com/a/www/index/2016v2/img/tg-ico-expand.png) no-repeat; position:absolute; z-index:@zIndex;@if(left){left:@(offset[0])px;}else{right:@(offset[0])px;}@if(top){top:@(offset[1])px}else{bottom:@(offset[1])px;}"></em>',adv.razor(e,t)},showAdMark:function(){var t=window.jQuery||adv.$;~location.href.indexOf("download.17173.com")&&(t=adv.$);var e,n,i,o=t("."+this.options.advid);for(e=this.options.adMarkConfigs||[{}];e.length;)i=e.shift(),i.container?(n=o.find(i.container),n=n[0]?n:t(i.container)):n=o,"absolute"!=n.css("position")&&"fixed"!=n.css("position")&&n.css("position","relative"),n.css("*zoom","1"),n.append(this.generalAdMark(i))},dispose:function(){}}),t.AdBase.extend("AdMBase",{init:function(t){this.base(t)}})}(adv),function(t){t.IAdv.extend("DrBase",{init:function(e){this.state=adv.ENUM.ADVSTATE.uninit,this.base(),this.options=adv.merge({},this.options,e),this.id=t.util.guid(),t.util.forEach(this.options.events,function(t){this.on(t.event,t.listener)},this),this.on(adv.ENUM.EVENTS.inited,function(){this.state=adv.ENUM.ADVSTATE.inited}),this.on(adv.ENUM.EVENTS.setuped,function(){this.state=adv.ENUM.ADVSTATE.setuped}),this.on(adv.ENUM.EVENTS.played,function(){this.state=adv.ENUM.ADVSTATE.played}),this.on(adv.ENUM.EVENTS.stoped,function(){this.state=adv.ENUM.ADVSTATE.stoped})},setup:function(){this.ad.instance.setup()},play:function(){this.ad.instance.play()},stop:function(){this.ad.instance.stop()}})}(adv),function(t){t.Class.extend("FtBase",{init:function(t){this.passing=!1,this.options=t},validate:function(){return this.passing=this.accord&&!this.options.skipOnAccord||!this.accord&&this.options.skipOnAccord?!0:!1,this.passing}})}(adv),function(t){"use strict";t.FtBase.extend("FtBrowser",{init:function(t){this.base(t),this.accord="mobile"==this.options.key?adv.util.isMobile:!1}})}(adv),function(t){"use strict";t.FtBase.extend("FtUrl",{init:function(t){this.base(t),this.accord=~location.href.indexOf(this.options.key)}})}(adv),function(t){var e=new t.Collection,n={"default":function(t,e){e(t.resources[0])},"37wan":function(e,n){var i=e.resourceid,o=e.resources,s=!1,r=setTimeout(function(){e.resources=[o[0]],n(o[0]),s=!0},5e3);t.net.jsonp("http://zt2.a.he2d.com/jp1f26/"+i,function(t){var i=o[0];if(!s){if(clearTimeout(r),1===t.status&&t.pkgid)for(var a=0;a<o.length;a++)-o[a].pkgid===-t.pkgid&&(i=o[a]);e.resources=[i],n(i)}})}},i=t.EventEmitter.extend({init:function(){this.base()},disable:!1,start:function(){if(this.validate()){for(;advConfigs.configFiles.length;)this.loadConfigFile(advConfigs.configFiles.shift());this.loader=new t[t.CONFIGS.LoaderType],this.loader.start()}},on:function(t,e,n){arguments.length>2?this.base(e+":"+t,n):this.base(t,e)},emit:function(t,e){this.base(t,e),e.advid&&this.base(e.advid+":"+t,e)},loadConfigFile:function(e){if(t.util.isString(e))e+="?clear="+Math.floor(new Date/18e4),this.loadScript("adconfig"+t.util.guid(),e);else if(t.util.isArray(e))for(var n;e.length;)if(n=e.shift(),n.filter&&n.filter())for(;n.configs.length;)this.loadConfigFile(n.configs.shift())},sendPv:function(t){this.loader.sendPv&&this.loader.sendPv(t)},sendIpa:function(t){this.loader.sendIpa&&this.loader.sendIpa(t)},loadScript:function(t,e,n){var i=document.getElementById(t);if(i){if(n)if(i.ready)n();else{var o=i.onload;i.onload=i.onreadystatechange=function(){i.readyState&&"loaded"!=i.readyState&&"complete"!=i.readyState||n(),o()}}}else i=document.createElement("script"),i.type="text/javascript",i.src=e,i.id=t,n&&(i.onload=i.onreadystatechange=function(){return i.ready?!1:void(i.readyState&&"loaded"!=i.readyState&&"complete"!=i.readyState||(i.onreadystatechange=null,i.ready=!0,n()))}),document.getElementsByTagName("head")[0].appendChild(i)},loadSource:function(e,n){var i,o,s=e.type,r=e.version;r&&(r=r.split("."),i=r[0]+"-"+r[1],o=r[2]);var a=t.CONFIGS.baseDir+"/sources/"+s.toLowerCase();a+=i?"/"+i:"",a+="/production.js",a+=o?"?"+o:"",advConfigs.ADV_SYSTEM_DEBUG&&advConfigs.DEBUG_AD&&advConfigs.DEBUG_AD[s]&&(a=advConfigs.DEBUG_AD[s]),this.loadScript(s+"adsourcesembled"+(e.version||""),a,n)},validate:function(){return this.disable=window.market17173===!1?!0:!1,!this.disable},config:function(t){t&&this.loader&&this.loader.addAd(t)}});t.merge({adCenter:new i}),t.Class.extend("LoaderBase",{init:function(){t.util.forEach(advConfigs,function(n){n.id=t.util.guid(),e.push(n.id,n)})},start:function(){},loadSource:function(e,n){t.adCenter.loadSource(e,n)},addAd:function(n){n.id=t.util.guid(),e.push(n.id,n)},sendPv:function(e){var n=t.util.isString(e)?e:e.pvCode,i=this;this.pvList=this.pvList||[],this.pvList.push(t.util.urlParams(n)),clearTimeout(this.pvTimer),this.pvTimer=setTimeout(function(){for(var t,e=[];i.pvList.length;)t=i.pvList.shift(),e.push(t.ad_code+","+t.resource_code+","+t.order_code+(t.mpkg_id?","+t.mpkg_id:""));var n=new Image;n.src="//vda.17173.com/batch_show?ads="+e.join(";")},advConfigs.API_TIME_OUT||3e3)},sendIpa:function(e){$("."+e.advid).each(function(n,i){0===n?t.util.sendIpa($(i),e.ipaCode,!0):t.util.sendIpa($(i),e.ipaCode,!1)})},chooseResource:function(e,i){var o=e.resources;o&&t.util.isArray(o)?(1!==o.length&&e.isMultiPkg&&e.theotherid||(e.theotherid="default"),n[e.theotherid](e,i)):i()},loadAd:function(e,n){var i=this;this.loadSource(e,function(){n&&n(),e.instance=new t[e.type](e),e.instance.on(t.ENUM.EVENTS.played,function(){if(t.adCenter.emit(t.ENUM.EVENTS.played,e),(advConfigs.enableAdMark&&"show"===e.adMark||"allwaysShow"===e.adMark)&&e.instance.showAdMark(),e.ipaCode&&i.sendIpa(e),!e.disablePv){e.pvCode&&i.sendPv(e);for(var n in e)if(e.hasOwnProperty(n)&&t.util.isArray(e[n]))for(var o=0;o<e[n].length;o++)!e[n][o].type&&e[n][o].pvCode&&i.sendPv(e[n][o])}}),e.instance.on(t.ENUM.EVENTS.setuped,function(){t.adCenter.emit(t.ENUM.EVENTS.setuped,e),this.play()}),e.instance.state==t.ENUM.EVENTS.inited?(t.adCenter.emit(t.ENUM.EVENTS.inited,e),i.chooseResource(e,function(t){e.instance.setup(t)})):e.instance.on(t.ENUM.EVENTS.inited,function(){t.adCenter.emit(t.ENUM.EVENTS.inited,e),i.chooseResource(e,function(t){e.instance.setup(t)})})})},execFilter:function(e){if(result=!0,e.filters)if(e.filterCon&&"and"!==e.filterCon){if("or"===e.filterCon){for(;e.filters.length;)if(filterConfig=e.filters.shift(),new t[filterConfig.type](filterConfig).validate())return!0;result=!1}}else for(;e.filters.length;)if(filterConfig=e.filters.shift(),!new t[filterConfig.type](filterConfig).validate())return!1;return result}}),t.LoaderBase.extend("DefaultLoader",{init:function(){this.base()},queueing:!1,start:function(){this.base(),this.next()},next:function(){var t=e.read(),n=this;if(this.queueing=!0,t)if(this.execFilter(t)){var i=setTimeout(function(){n.next()},3e3);this.loadAd(t,function(){clearTimeout(i),n.next()})}else this.next();else this.queueing=!1},addAd:function(t){this.base(t),this.queueing||this.next()}}),t.LoaderBase.extend("LazyLoader",{init:function(){var t=this;this.base(),this.$w=$(window),this.calcSize(!0),this.scrollTimer=setTimeout(function(){t.calcSize(),t.update()},200),this.$w.bind("resize",function(){t._onResize.call(t)}).bind("scroll",function(){t._onScroll.call(t)}),$(document.body).bind("appendHtml",function(){t.update()})},preloadHeight:100,_onResize:function(){var t=this;clearTimeout(t.resizeTimer),t.resizeTimer=setTimeout(function(){t.calcSize(!0),t.update()},100)},_onScroll:function(){var t=this;clearTimeout(t.scrollTimer),t.scrollTimer=setTimeout(function(){t.calcSize(),t.update()},100)},update:function(){var t=this;clearTimeout(this.updateTimer),this.updateTimer=setTimeout(function(){t.checkForLoad()},100)},checkForLoad:function(){var t=this;e.forEach(function(e){t.loadAd(e)})},loadAd:function(t){var e=this;if(!t.lazyLoaded)if(t.advid){if(t.adEl=t.adEl&&t.adEl[0]?t.adEl:$("."+t.advid),t.adEl[0]){var n=e.calcPosition(t.adEl,t);n.below||n.above||(t.lazyLoaded=!0,this.base(t))}}else t.lazyLoaded=!0,this.base(t)},calcSize:function(t){t&&(this.wHeight=this.$w.height()),this.scrollTop=this.$w.scrollTop(),this.screenHeight=this.wHeight+this.scrollTop},calcPosition:function(t){var e;"none"==t.css("display")?(t.show(),e=t.offset().top,t.hide()):e=t.offset().top;var n=this.screenHeight<=e;return above=this.scrollTop>=e+t.height(),{below:n,above:above}},addAd:function(t){this.base(t),this.loadAd(t)}}),t.adCenter.start()}(adv);