!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(S,e){"use strict";var t=[],T=S.document,i=Object.getPrototypeOf,a=t.slice,m=t.concat,l=t.push,r=t.indexOf,n={},o=n.toString,g=n.hasOwnProperty,s=g.toString,c=s.call(Object),v={},y=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},_=function(e){return null!=e&&e===e.window},u={type:!0,src:!0,noModule:!0};function w(e,t,n){var i,r=(t=t||T).createElement("script");if(r.text=e,n)for(i in u)n[i]&&(r[i]=n[i]);t.head.appendChild(r).parentNode.removeChild(r)}function b(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var E=function(e,t){return new E.fn.init(e,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function h(e){var t=!!e&&"length"in e&&e.length,n=b(e);return!y(e)&&!_(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:"3.3.1",constructor:E,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||y(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(i=e[t])&&(c&&i&&(E.isPlainObject(i)||(r=Array.isArray(i)))?(o=r?(r=!1,n&&Array.isArray(n)?n:[]):n&&E.isPlainObject(n)?n:{},s[t]=E.extend(c,o,i)):void 0!==i&&(s[t]=i));return s},E.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e)||(t=i(e))&&("function"!=typeof(n=g.call(t,"constructor")&&t.constructor)||s.call(n)!==c))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){w(e)},each:function(e,t){var n,i=0;if(h(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(d,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(h(Object(e))?E.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:r.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;i<n;i++)e[r++]=t[i];return e.length=r,e},grep:function(e,t,n){for(var i=[],r=0,o=e.length,s=!n;r<o;r++)!t(e[r],r)!==s&&i.push(e[r]);return i},map:function(e,t,n){var i,r,o=0,s=[];if(h(e))for(i=e.length;o<i;o++)null!=(r=t(e[o],o,n))&&s.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&s.push(r);return m.apply([],s)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var f=function(n){var e,f,w,o,r,p,d,m,b,l,c,x,S,s,T,g,a,u,v,E="sizzle"+1*new Date,y=n.document,k=0,i=0,h=se(),_=se(),C=se(),D=function(e,t){return e===t&&(c=!0),0},O={}.hasOwnProperty,t=[],N=t.pop,M=t.push,A=t.push,L=t.slice,I=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",j="[\\x20\\t\\r\\n\\f]",H="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",Y="\\["+j+"*("+H+")(?:"+j+"*([*^$|!~]?=)"+j+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+H+"))|)"+j+"*\\]",R=":("+H+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+Y+")*)|.*)\\)|)",z=new RegExp(j+"+","g"),W=new RegExp("^"+j+"+|((?:^|[^\\\\])(?:\\\\.)*)"+j+"+$","g"),F=new RegExp("^"+j+"*,"+j+"*"),q=new RegExp("^"+j+"*([>+~]|"+j+")"+j+"*"),U=new RegExp("="+j+"*([^\\]'\"]*?)"+j+"*\\]","g"),B=new RegExp(R),V=new RegExp("^"+H+"$"),G={ID:new RegExp("^#("+H+")"),CLASS:new RegExp("^\\.("+H+")"),TAG:new RegExp("^("+H+"|[*])"),ATTR:new RegExp("^"+Y),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+j+"*(even|odd|(([+-]|)(\\d*)n|)"+j+"*(?:([+-]|)"+j+"*(\\d+)|))"+j+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+j+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+j+"*((?:-\\d)?\\d*)"+j+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,$=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Q=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/[+~]/,J=new RegExp("\\\\([\\da-f]{1,6}"+j+"?|("+j+")|.)","ig"),ee=function(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ie=function(){x()},re=ye(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{A.apply(t=L.call(y.childNodes),y.childNodes),t[y.childNodes.length].nodeType}catch(n){A={apply:t.length?function(e,t){M.apply(e,L.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function oe(e,t,n,i){var r,o,s,a,l,c,u,d=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!i&&((t?t.ownerDocument||t:y)!==S&&x(t),t=t||S,T)){if(11!==h&&(l=Q.exec(e)))if(r=l[1]){if(9===h){if(!(s=t.getElementById(r)))return n;if(s.id===r)return n.push(s),n}else if(d&&(s=d.getElementById(r))&&v(t,s)&&s.id===r)return n.push(s),n}else{if(l[2])return A.apply(n,t.getElementsByTagName(e)),n;if((r=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return A.apply(n,t.getElementsByClassName(r)),n}if(f.qsa&&!C[e+" "]&&(!g||!g.test(e))){if(1!==h)d=t,u=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(te,ne):t.setAttribute("id",a=E),o=(c=p(e)).length;o--;)c[o]="#"+a+" "+ve(c[o]);u=c.join(","),d=Z.test(e)&&me(t.parentNode)||t}if(u)try{return A.apply(n,d.querySelectorAll(u)),n}catch(e){}finally{a===E&&t.removeAttribute("id")}}}return m(e.replace(W,"$1"),t,n,i)}function se(){var i=[];return function e(t,n){return i.push(t+" ")>w.cacheLength&&delete e[i.shift()],e[t+" "]=n}}function ae(e){return e[E]=!0,e}function le(e){var t=S.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),i=n.length;i--;)w.attrHandle[n[i]]=t}function ue(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function fe(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&re(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function pe(s){return ae(function(o){return o=+o,ae(function(e,t){for(var n,i=s([],e.length,o),r=i.length;r--;)e[n=i[r]]&&(e[n]=!(t[n]=e[n]))})})}function me(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in f=oe.support={},r=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},x=oe.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:y;return i!==S&&9===i.nodeType&&i.documentElement&&(s=(S=i).documentElement,T=!r(S),y!==S&&(n=S.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",ie,!1):n.attachEvent&&n.attachEvent("onunload",ie)),f.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),f.getElementsByTagName=le(function(e){return e.appendChild(S.createComment("")),!e.getElementsByTagName("*").length}),f.getElementsByClassName=K.test(S.getElementsByClassName),f.getById=le(function(e){return s.appendChild(e).id=E,!S.getElementsByName||!S.getElementsByName(E).length}),f.getById?(w.filter.ID=function(e){var t=e.replace(J,ee);return function(e){return e.getAttribute("id")===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&T){var n=t.getElementById(e);return n?[n]:[]}}):(w.filter.ID=function(e){var n=e.replace(J,ee);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&T){var n,i,r,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(r=t.getElementsByName(e),i=0;o=r[i++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),w.find.TAG=f.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):f.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[r++];)1===n.nodeType&&i.push(n);return i},w.find.CLASS=f.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&T)return t.getElementsByClassName(e)},a=[],g=[],(f.qsa=K.test(S.querySelectorAll))&&(le(function(e){s.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+j+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+j+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+E+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=S.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+j+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),s.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(f.matchesSelector=K.test(u=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.oMatchesSelector||s.msMatchesSelector))&&le(function(e){f.disconnectedMatch=u.call(e,"*"),u.call(e,"[s!='']:x"),a.push("!=",R)}),g=g.length&&new RegExp(g.join("|")),a=a.length&&new RegExp(a.join("|")),t=K.test(s.compareDocumentPosition),v=t||K.test(s.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e===S||e.ownerDocument===y&&v(y,e)?-1:t===S||t.ownerDocument===y&&v(y,t)?1:l?I(l,e)-I(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,i=0,r=e.parentNode,o=t.parentNode,s=[e],a=[t];if(!r||!o)return e===S?-1:t===S?1:r?-1:o?1:l?I(l,e)-I(l,t):0;if(r===o)return ue(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?ue(s[i],a[i]):s[i]===y?-1:a[i]===y?1:0}),S},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==S&&x(e),t=t.replace(U,"='$1']"),f.matchesSelector&&T&&!C[t+" "]&&(!a||!a.test(t))&&(!g||!g.test(t)))try{var n=u.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<oe(t,S,null,[e]).length},oe.contains=function(e,t){return(e.ownerDocument||e)!==S&&x(e),v(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==S&&x(e);var n=w.attrHandle[t.toLowerCase()],i=n&&O.call(w.attrHandle,t.toLowerCase())?n(e,t,!T):void 0;return void 0!==i?i:f.attributes||!T?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,n=[],i=0,r=0;if(c=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(D),c){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return l=null,e},o=oe.getText=function(e){var t,n="",i=0,r=e.nodeType;if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=o(t);return n},(w=oe.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(J,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(J,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&B.test(n)&&(t=p(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(J,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=h[e+" "];return t||(t=new RegExp("(^|"+j+")"+e+"("+j+"|$)"))&&h(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,i,r){return function(e){var t=oe.attr(e,n);return null==t?"!="===i:!i||(t+="","="===i?t===r:"!="===i?t!==r:"^="===i?r&&0===t.indexOf(r):"*="===i?r&&-1<t.indexOf(r):"$="===i?r&&t.slice(-r.length)===r:"~="===i?-1<(" "+t.replace(z," ")+" ").indexOf(r):"|="===i&&(t===r||t.slice(0,r.length+1)===r+"-"))}},CHILD:function(p,e,t,m,g){var v="nth"!==p.slice(0,3),y="last"!==p.slice(-4),_="of-type"===e;return 1===m&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var i,r,o,s,a,l,c=v!==y?"nextSibling":"previousSibling",u=e.parentNode,d=_&&e.nodeName.toLowerCase(),h=!n&&!_,f=!1;if(u){if(v){for(;c;){for(s=e;s=s[c];)if(_?s.nodeName.toLowerCase()===d:1===s.nodeType)return!1;l=c="only"===p&&!l&&"nextSibling"}return!0}if(l=[y?u.firstChild:u.lastChild],y&&h){for(f=(a=(i=(r=(o=(s=u)[E]||(s[E]={}))[s.uniqueID]||(o[s.uniqueID]={}))[p]||[])[0]===k&&i[1])&&i[2],s=a&&u.childNodes[a];s=++a&&s&&s[c]||(f=a=0)||l.pop();)if(1===s.nodeType&&++f&&s===e){r[p]=[k,a,f];break}}else if(h&&(f=a=(i=(r=(o=(s=e)[E]||(s[E]={}))[s.uniqueID]||(o[s.uniqueID]={}))[p]||[])[0]===k&&i[1]),!1===f)for(;(s=++a&&s&&s[c]||(f=a=0)||l.pop())&&((_?s.nodeName.toLowerCase()!==d:1!==s.nodeType)||!++f||(h&&((r=(o=s[E]||(s[E]={}))[s.uniqueID]||(o[s.uniqueID]={}))[p]=[k,f]),s!==e)););return(f-=g)===m||f%m==0&&0<=f/m}}},PSEUDO:function(e,o){var t,s=w.pseudos[e]||w.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return s[E]?s(o):1<s.length?(t=[e,e,"",o],w.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,t){for(var n,i=s(e,o),r=i.length;r--;)e[n=I(e,i[r])]=!(t[n]=i[r])}):function(e){return s(e,0,t)}):s}},pseudos:{not:ae(function(e){var i=[],r=[],a=d(e.replace(W,"$1"));return a[E]?ae(function(e,t,n,i){for(var r,o=a(e,null,i,[]),s=e.length;s--;)(r=o[s])&&(e[s]=!(t[s]=r))}):function(e,t,n){return i[0]=e,a(i,null,n,r),i[0]=null,!r.pop()}}),has:ae(function(t){return function(e){return 0<oe(t,e).length}}),contains:ae(function(t){return t=t.replace(J,ee),function(e){return-1<(e.textContent||e.innerText||o(e)).indexOf(t)}}),lang:ae(function(n){return V.test(n||"")||oe.error("unsupported lang: "+n),n=n.replace(J,ee).toLowerCase(),function(e){var t;do{if(t=T?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===s},focus:function(e){return e===S.activeElement&&(!S.hasFocus||S.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:fe(!1),disabled:fe(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return $.test(e.nodeName)},input:function(e){return X.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:pe(function(){return[0]}),last:pe(function(e,t){return[t-1]}),eq:pe(function(e,t,n){return[n<0?n+t:n]}),even:pe(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:pe(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:pe(function(e,t,n){for(var i=n<0?n+t:n;0<=--i;)e.push(i);return e}),gt:pe(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=w.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})w.pseudos[e]=he(e);function ge(){}function ve(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function ye(a,e,t){var l=e.dir,c=e.next,u=c||l,d=t&&"parentNode"===u,h=i++;return e.first?function(e,t,n){for(;e=e[l];)if(1===e.nodeType||d)return a(e,t,n);return!1}:function(e,t,n){var i,r,o,s=[k,h];if(n){for(;e=e[l];)if((1===e.nodeType||d)&&a(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||d)if(r=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),c&&c===e.nodeName.toLowerCase())e=e[l]||e;else{if((i=r[u])&&i[0]===k&&i[1]===h)return s[2]=i[2];if((r[u]=s)[2]=a(e,t,n))return!0}return!1}}function _e(r){return 1<r.length?function(e,t,n){for(var i=r.length;i--;)if(!r[i](e,t,n))return!1;return!0}:r[0]}function we(e,t,n,i,r){for(var o,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(o=e[a])&&(n&&!n(o,i,r)||(s.push(o),c&&t.push(a)));return s}function be(f,p,m,g,v,e){return g&&!g[E]&&(g=be(g)),v&&!v[E]&&(v=be(v,e)),ae(function(e,t,n,i){var r,o,s,a=[],l=[],c=t.length,u=e||function(e,t,n){for(var i=0,r=t.length;i<r;i++)oe(e,t[i],n);return n}(p||"*",n.nodeType?[n]:n,[]),d=!f||!e&&p?u:we(u,a,f,n,i),h=m?v||(e?f:c||g)?[]:t:d;if(m&&m(d,h,n,i),g)for(r=we(h,l),g(r,[],n,i),o=r.length;o--;)(s=r[o])&&(h[l[o]]=!(d[l[o]]=s));if(e){if(v||f){if(v){for(r=[],o=h.length;o--;)(s=h[o])&&r.push(d[o]=s);v(null,h=[],r,i)}for(o=h.length;o--;)(s=h[o])&&-1<(r=v?I(e,s):a[o])&&(e[r]=!(t[r]=s))}}else h=we(h===t?h.splice(c,h.length):h),v?v(null,t,h,i):A.apply(t,h)})}function xe(e){for(var r,t,n,i=e.length,o=w.relative[e[0].type],s=o||w.relative[" "],a=o?1:0,l=ye(function(e){return e===r},s,!0),c=ye(function(e){return-1<I(r,e)},s,!0),u=[function(e,t,n){var i=!o&&(n||t!==b)||((r=t).nodeType?l(e,t,n):c(e,t,n));return r=null,i}];a<i;a++)if(t=w.relative[e[a].type])u=[ye(_e(u),t)];else{if((t=w.filter[e[a].type].apply(null,e[a].matches))[E]){for(n=++a;n<i&&!w.relative[e[n].type];n++);return be(1<a&&_e(u),1<a&&ve(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(W,"$1"),t,a<n&&xe(e.slice(a,n)),n<i&&xe(e=e.slice(n)),n<i&&ve(e))}u.push(t)}return _e(u)}return ge.prototype=w.filters=w.pseudos,w.setFilters=new ge,p=oe.tokenize=function(e,t){var n,i,r,o,s,a,l,c=_[e+" "];if(c)return t?0:c.slice(0);for(s=e,a=[],l=w.preFilter;s;){for(o in n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),a.push(r=[])),n=!1,(i=q.exec(s))&&(n=i.shift(),r.push({value:n,type:i[0].replace(W," ")}),s=s.slice(n.length)),w.filter)!(i=G[o].exec(s))||l[o]&&!(i=l[o](i))||(n=i.shift(),r.push({value:n,type:o,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):_(e,a).slice(0)},d=oe.compile=function(e,t){var n,g,v,y,_,i,r=[],o=[],s=C[e+" "];if(!s){for(t||(t=p(e)),n=t.length;n--;)(s=xe(t[n]))[E]?r.push(s):o.push(s);(s=C(e,(g=o,v=r,y=0<v.length,_=0<g.length,i=function(e,t,n,i,r){var o,s,a,l=0,c="0",u=e&&[],d=[],h=b,f=e||_&&w.find.TAG("*",r),p=k+=null==h?1:Math.random()||.1,m=f.length;for(r&&(b=t===S||t||r);c!==m&&null!=(o=f[c]);c++){if(_&&o){for(s=0,t||o.ownerDocument===S||(x(o),n=!T);a=g[s++];)if(a(o,t||S,n)){i.push(o);break}r&&(k=p)}y&&((o=!a&&o)&&l--,e&&u.push(o))}if(l+=c,y&&c!==l){for(s=0;a=v[s++];)a(u,d,t,n);if(e){if(0<l)for(;c--;)u[c]||d[c]||(d[c]=N.call(i));d=we(d)}A.apply(i,d),r&&!e&&0<d.length&&1<l+v.length&&oe.uniqueSort(i)}return r&&(k=p,b=h),u},y?ae(i):i))).selector=e}return s},m=oe.select=function(e,t,n,i){var r,o,s,a,l,c="function"==typeof e&&e,u=!i&&p(e=c.selector||e);if(n=n||[],1===u.length){if(2<(o=u[0]=u[0].slice(0)).length&&"ID"===(s=o[0]).type&&9===t.nodeType&&T&&w.relative[o[1].type]){if(!(t=(w.find.ID(s.matches[0].replace(J,ee),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(r=G.needsContext.test(e)?0:o.length;r--&&(s=o[r],!w.relative[a=s.type]);)if((l=w.find[a])&&(i=l(s.matches[0].replace(J,ee),Z.test(o[0].type)&&me(t.parentNode)||t))){if(o.splice(r,1),!(e=i.length&&ve(o)))return A.apply(n,i),n;break}}return(c||d(e,u))(i,t,!T,n,!t||Z.test(e)&&me(t.parentNode)||t),n},f.sortStable=E.split("").sort(D).join("")===E,f.detectDuplicates=!!c,x(),f.sortDetached=le(function(e){return 1&e.compareDocumentPosition(S.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),f.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ce(P,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),oe}(S);E.find=f,E.expr=f.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=f.uniqueSort,E.text=f.getText,E.isXMLDoc=f.isXML,E.contains=f.contains,E.escapeSelector=f.escape;var p=function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&E(e).is(n))break;i.push(e)}return i},x=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function O(e,n,i){return y(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==i}):n.nodeType?E.grep(e,function(e){return e===n!==i}):"string"!=typeof n?E.grep(e,function(e){return-1<r.call(n,e)!==i}):E.filter(n,e,i)}E.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?E.find.matchesSelector(i,e)?[i]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,i=this.length,r=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<i;t++)if(E.contains(r[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)E.find(e,r[t],n);return 1<i?E.uniqueSort(n):n},filter:function(e){return this.pushStack(O(this,e||[],!1))},not:function(e){return this.pushStack(O(this,e||[],!0))},is:function(e){return!!O(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var N,M=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var i,r;if(!e)return this;if(n=n||N,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):y(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this);if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:M.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:T,!0)),D.test(i[1])&&E.isPlainObject(t))for(i in t)y(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(r=T.getElementById(i[2]))&&(this[0]=r,this.length=1),this}).prototype=E.fn,N=E(T);var A=/^(?:parents|prev(?:Until|All))/,L={children:!0,contents:!0,next:!0,prev:!0};function I(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,r=this.length,o=[],s="string"!=typeof e&&E(e);if(!k.test(e))for(;i<r;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?r.call(E(e),this[0]):r.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return p(e,"parentNode")},parentsUntil:function(e,t,n){return p(e,"parentNode",n)},next:function(e){return I(e,"nextSibling")},prev:function(e){return I(e,"previousSibling")},nextAll:function(e){return p(e,"nextSibling")},prevAll:function(e){return p(e,"previousSibling")},nextUntil:function(e,t,n){return p(e,"nextSibling",n)},prevUntil:function(e,t,n){return p(e,"previousSibling",n)},siblings:function(e){return x((e.parentNode||{}).firstChild,e)},children:function(e){return x(e.firstChild)},contents:function(e){return C(e,"iframe")?e.contentDocument:(C(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(i,r){E.fn[i]=function(e,t){var n=E.map(this,r,e);return"Until"!==i.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(L[i]||E.uniqueSort(n),A.test(i)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function j(e){return e}function H(e){throw e}function Y(e,t,n,i){var r;try{e&&y(r=e.promise)?r.call(e).done(t).fail(n):e&&y(r=e.then)?r.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(i){var e,n;i="string"==typeof i?(e=i,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},i);var r,t,o,s,a=[],l=[],c=-1,u=function(){for(s=s||i.once,o=r=!0;l.length;c=-1)for(t=l.shift();++c<a.length;)!1===a[c].apply(t[0],t[1])&&i.stopOnFalse&&(c=a.length,t=!1);i.memory||(t=!1),r=!1,s&&(a=t?[]:"")},d={add:function(){return a&&(t&&!r&&(c=a.length-1,l.push(t)),function n(e){E.each(e,function(e,t){y(t)?i.unique&&d.has(t)||a.push(t):t&&t.length&&"string"!==b(t)&&n(t)})}(arguments),t&&!r&&u()),this},remove:function(){return E.each(arguments,function(e,t){for(var n;-1<(n=E.inArray(t,a,n));)a.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<E.inArray(e,a):0<a.length},empty:function(){return a&&(a=[]),this},disable:function(){return s=l=[],a=t="",this},disabled:function(){return!a},lock:function(){return s=l=[],t||r||(a=t=""),this},locked:function(){return!!s},fireWith:function(e,t){return s||(t=[e,(t=t||[]).slice?t.slice():t],l.push(t),r||u()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!o}};return d},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],r="pending",s={state:function(){return r},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return s.then(null,e)},pipe:function(){var r=arguments;return E.Deferred(function(i){E.each(o,function(e,t){var n=y(r[t[4]])&&r[t[4]];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&y(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[t[0]+"With"](this,n?[e]:arguments)})}),r=null}).promise()},then:function(t,n,i){var l=0;function c(r,o,s,a){return function(){var n=this,i=arguments,e=function(){var e,t;if(!(r<l)){if((e=s.apply(n,i))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,y(t)?a?t.call(e,c(l,o,j,a),c(l,o,H,a)):(l++,t.call(e,c(l,o,j,a),c(l,o,H,a),c(l,o,j,o.notifyWith))):(s!==j&&(n=void 0,i=[e]),(a||o.resolveWith)(n,i))}},t=a?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),l<=r+1&&(s!==H&&(n=void 0,i=[e]),o.rejectWith(n,i))}};r?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),S.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(c(0,e,y(i)?i:j,e.notifyWith)),o[1][3].add(c(0,e,y(t)?t:j)),o[2][3].add(c(0,e,y(n)?n:H))}).promise()},promise:function(e){return null!=e?E.extend(e,s):s}},a={};return E.each(o,function(e,t){var n=t[2],i=t[5];s[t[1]]=n.add,i&&n.add(function(){r=i},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),a[t[0]]=function(){return a[t[0]+"With"](this===a?void 0:this,arguments),this},a[t[0]+"With"]=n.fireWith}),s.promise(a),e&&e.call(a,a),a},when:function(e){var n=arguments.length,t=n,i=Array(t),r=a.call(arguments),o=E.Deferred(),s=function(t){return function(e){i[t]=this,r[t]=1<arguments.length?a.call(arguments):e,--n||o.resolveWith(i,r)}};if(n<=1&&(Y(e,o.done(s(t)).resolve,o.reject,!n),"pending"===o.state()||y(r[t]&&r[t].then)))return o.then();for(;t--;)Y(r[t],s(t),o.reject);return o.promise()}});var R=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){S.console&&S.console.warn&&e&&R.test(e.name)&&S.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){S.setTimeout(function(){throw e})};var z=E.Deferred();function W(){T.removeEventListener("DOMContentLoaded",W),S.removeEventListener("load",W),E.ready()}E.fn.ready=function(e){return z.then(e).catch(function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||((E.isReady=!0)!==e&&0<--E.readyWait||z.resolveWith(T,[E]))}}),E.ready.then=z.then,"complete"===T.readyState||"loading"!==T.readyState&&!T.documentElement.doScroll?S.setTimeout(E.ready):(T.addEventListener("DOMContentLoaded",W),S.addEventListener("load",W));var F=function(e,t,n,i,r,o,s){var a=0,l=e.length,c=null==n;if("object"===b(n))for(a in r=!0,n)F(e,t,a,n[a],!0,o,s);else if(void 0!==i&&(r=!0,y(i)||(s=!0),c&&(t=s?(t.call(e,i),null):(c=t,function(e,t,n){return c.call(E(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):l?t(e[0],n):o},q=/^-ms-/,U=/-([a-z])/g;function B(e,t){return t.toUpperCase()}function V(e){return e.replace(q,"ms-").replace(U,B)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function X(){this.expando=E.expando+X.uid++}X.uid=1,X.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,r=this.cache(e);if("string"==typeof t)r[V(t)]=n;else for(i in t)r[V(i)]=t[i];return r},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in i?[t]:t.match(P)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||E.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var $=new X,K=new X,Q=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function J(e,t,n){var i,r;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(r=n)||"false"!==r&&("null"===r?null:r===+r+""?+r:Q.test(r)?JSON.parse(r):r)}catch(e){}K.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return K.hasData(e)||$.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return $.access(e,t,n)},_removeData:function(e,t){$.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,i,r,o=this[0],s=o&&o.attributes;if(void 0!==n)return"object"==typeof n?this.each(function(){K.set(this,n)}):F(this,function(e){var t;if(o&&void 0===e){if(void 0!==(t=K.get(o,n)))return t;if(void 0!==(t=J(o,n)))return t}else this.each(function(){K.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(r=K.get(o),1===o.nodeType&&!$.get(o,"hasDataAttrs"))){for(t=s.length;t--;)s[t]&&0===(i=s[t].name).indexOf("data-")&&(i=V(i.slice(5)),J(o,i,r[i]));$.set(o,"hasDataAttrs",!0)}return r},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),E.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=$.get(e,t),n&&(!i||Array.isArray(n)?i=$.access(e,t,E.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),i=n.length,r=n.shift(),o=E._queueHooks(e,t);"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,function(){E.dequeue(e,t)},o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return $.get(e,n)||$.access(e,n,{empty:E.Callbacks("once memory").add(function(){$.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=E.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=$.get(o[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],ie=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&E.contains(e.ownerDocument,e)&&"none"===E.css(e,"display")},re=function(e,t,n,i){var r,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];for(o in r=n.apply(e,i||[]),t)e.style[o]=s[o];return r};function oe(e,t,n,i){var r,o,s=20,a=i?function(){return i.cur()}:function(){return E.css(e,t,"")},l=a(),c=n&&n[3]||(E.cssNumber[t]?"":"px"),u=(E.cssNumber[t]||"px"!==c&&+l)&&te.exec(E.css(e,t));if(u&&u[3]!==c){for(l/=2,c=c||u[3],u=+l||1;s--;)E.style(e,t,u+c),(1-o)*(1-(o=a()/l||.5))<=0&&(s=0),u/=o;u*=2,E.style(e,t,u+c),n=n||[]}return n&&(u=+u||+l||0,r=n[1]?u+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=u,i.end=r)),r}var se={};function ae(e,t){for(var n,i,r=[],o=0,s=e.length;o<s;o++)(i=e[o]).style&&(n=i.style.display,t?("none"===n&&(r[o]=$.get(i,"display")||null,r[o]||(i.style.display="")),""===i.style.display&&ie(i)&&(r[o]=(d=c=l=void 0,c=(a=i).ownerDocument,u=a.nodeName,(d=se[u])||(l=c.body.appendChild(c.createElement(u)),d=E.css(l,"display"),l.parentNode.removeChild(l),"none"===d&&(d="block"),se[u]=d)))):"none"!==n&&(r[o]="none",$.set(i,"display",n)));var a,l,c,u,d;for(o=0;o<s;o++)null!=r[o]&&(e[o].style.display=r[o]);return e}E.fn.extend({show:function(){return ae(this,!0)},hide:function(){return ae(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ie(this)?E(this).show():E(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ue=/^$|^module$|\/(?:java|ecma)script/i,de={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function he(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t)?E.merge([e],n):n}function fe(e,t){for(var n=0,i=e.length;n<i;n++)$.set(e[n],"globalEval",!t||$.get(t[n],"globalEval"))}de.optgroup=de.option,de.tbody=de.tfoot=de.colgroup=de.caption=de.thead,de.th=de.td;var pe,me,ge=/<|&#?\w+;/;function ve(e,t,n,i,r){for(var o,s,a,l,c,u,d=t.createDocumentFragment(),h=[],f=0,p=e.length;f<p;f++)if((o=e[f])||0===o)if("object"===b(o))E.merge(h,o.nodeType?[o]:o);else if(ge.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(ce.exec(o)||["",""])[1].toLowerCase(),l=de[a]||de._default,s.innerHTML=l[1]+E.htmlPrefilter(o)+l[2],u=l[0];u--;)s=s.lastChild;E.merge(h,s.childNodes),(s=d.firstChild).textContent=""}else h.push(t.createTextNode(o));for(d.textContent="",f=0;o=h[f++];)if(i&&-1<E.inArray(o,i))r&&r.push(o);else if(c=E.contains(o.ownerDocument,o),s=he(d.appendChild(o),"script"),c&&fe(s),n)for(u=0;o=s[u++];)ue.test(o.type||"")&&n.push(o);return d}pe=T.createDocumentFragment().appendChild(T.createElement("div")),(me=T.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),pe.appendChild(me),v.checkClone=pe.cloneNode(!0).cloneNode(!0).lastChild.checked,pe.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!pe.cloneNode(!0).lastChild.defaultValue;var ye=T.documentElement,_e=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,be=/^([^.]*)(?:\.(.+)|)/;function xe(){return!0}function Se(){return!1}function Te(){try{return T.activeElement}catch(e){}}function Ee(e,t,n,i,r,o){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)Ee(e,a,n,i,t[a],o);return e}if(null==i&&null==r?(r=n,i=n=void 0):null==r&&("string"==typeof n?(r=i,i=void 0):(r=i,i=n,n=void 0)),!1===r)r=Se;else if(!r)return e;return 1===o&&(s=r,(r=function(e){return E().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=E.guid++)),e.each(function(){E.event.add(this,t,r,i,n)})}E.event={global:{},add:function(t,e,n,i,r){var o,s,a,l,c,u,d,h,f,p,m,g=$.get(t);if(g)for(n.handler&&(n=(o=n).handler,r=o.selector),r&&E.find.matchesSelector(ye,r),n.guid||(n.guid=E.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(e){return void 0!==E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(P)||[""]).length;c--;)f=m=(a=be.exec(e[c])||[])[1],p=(a[2]||"").split(".").sort(),f&&(d=E.event.special[f]||{},f=(r?d.delegateType:d.bindType)||f,d=E.event.special[f]||{},u=E.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&E.expr.match.needsContext.test(r),namespace:p.join(".")},o),(h=l[f])||((h=l[f]=[]).delegateCount=0,d.setup&&!1!==d.setup.call(t,i,p,s)||t.addEventListener&&t.addEventListener(f,s)),d.add&&(d.add.call(t,u),u.handler.guid||(u.handler.guid=n.guid)),r?h.splice(h.delegateCount++,0,u):h.push(u),E.event.global[f]=!0)},remove:function(e,t,n,i,r){var o,s,a,l,c,u,d,h,f,p,m,g=$.hasData(e)&&$.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(P)||[""]).length;c--;)if(f=m=(a=be.exec(t[c])||[])[1],p=(a[2]||"").split(".").sort(),f){for(d=E.event.special[f]||{},h=l[f=(i?d.delegateType:d.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=h.length;o--;)u=h[o],!r&&m!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(h.splice(o,1),u.selector&&h.delegateCount--,d.remove&&d.remove.call(e,u));s&&!h.length&&(d.teardown&&!1!==d.teardown.call(e,p,g.handle)||E.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)E.event.remove(e,f+t[c],n,i,!0);E.isEmptyObject(l)&&$.remove(e,"handle events")}},dispatch:function(e){var t,n,i,r,o,s,a=E.event.fix(e),l=new Array(arguments.length),c=($.get(this,"events")||{})[a.type]||[],u=E.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!u.preDispatch||!1!==u.preDispatch.call(this,a)){for(s=E.event.handlers.call(this,a,c),t=0;(r=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(o.namespace)||(a.handleObj=o,a.data=o.data,void 0!==(i=((E.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,r,o,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(o=[],s={},n=0;n<l;n++)void 0===s[r=(i=t[n]).selector+" "]&&(s[r]=i.needsContext?-1<E(r,this).index(c):E.find(r,this,null,[c]).length),s[r]&&o.push(i);o.length&&a.push({elem:c,handlers:o})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:y(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Te()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Te()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&C(this,"input"))return this.click(),!1},_default:function(e){return C(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?xe:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=xe,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=xe,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=xe,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&_e.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,r){E.event.special[e]={delegateType:r,bindType:r,handle:function(e){var t,n=e.relatedTarget,i=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=i.origType,t=i.handler.apply(this,arguments),e.type=r),t}}}),E.fn.extend({on:function(e,t,n,i){return Ee(this,e,t,n,i)},one:function(e,t,n,i){return Ee(this,e,t,n,i,1)},off:function(e,t,n){var i,r;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,E(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){E.event.remove(this,e,n,t)});for(r in e)this.off(r,t,e[r]);return this}});var ke=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ce=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,Oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ne(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function Me(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ae(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,i,r,o,s,a,l,c;if(1===t.nodeType){if($.hasData(e)&&(o=$.access(e),s=$.set(t,o),c=o.events))for(r in delete s.handle,s.events={},c)for(n=0,i=c[r].length;n<i;n++)E.event.add(t,r,c[r][n]);K.hasData(e)&&(a=K.access(e),l=E.extend({},a),K.set(t,l))}}function Ie(n,i,r,o){i=m.apply([],i);var e,t,s,a,l,c,u=0,d=n.length,h=d-1,f=i[0],p=y(f);if(p||1<d&&"string"==typeof f&&!v.checkClone&&De.test(f))return n.each(function(e){var t=n.eq(e);p&&(i[0]=f.call(this,e,t.html())),Ie(t,i,r,o)});if(d&&(t=(e=ve(i,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(a=(s=E.map(he(e,"script"),Me)).length;u<d;u++)l=e,u!==h&&(l=E.clone(l,!0,!0),a&&E.merge(s,he(l,"script"))),r.call(n[u],l,u);if(a)for(c=s[s.length-1].ownerDocument,E.map(s,Ae),u=0;u<a;u++)l=s[u],ue.test(l.type||"")&&!$.access(l,"globalEval")&&E.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?E._evalUrl&&E._evalUrl(l.src):w(l.textContent.replace(Oe,""),c,l))}return n}function Pe(e,t,n){for(var i,r=t?E.filter(t,e):e,o=0;null!=(i=r[o]);o++)n||1!==i.nodeType||E.cleanData(he(i)),i.parentNode&&(n&&E.contains(i.ownerDocument,i)&&fe(he(i,"script")),i.parentNode.removeChild(i));return e}E.extend({htmlPrefilter:function(e){return e.replace(ke,"<$1></$2>")},clone:function(e,t,n){var i,r,o,s,a,l,c,u=e.cloneNode(!0),d=E.contains(e.ownerDocument,e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(s=he(u),i=0,r=(o=he(e)).length;i<r;i++)a=o[i],l=s[i],void 0,"input"===(c=l.nodeName.toLowerCase())&&le.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(t)if(n)for(o=o||he(e),s=s||he(u),i=0,r=o.length;i<r;i++)Le(o[i],s[i]);else Le(e,u);return 0<(s=he(u,"script")).length&&fe(s,!d&&he(e,"script")),u},cleanData:function(e){for(var t,n,i,r=E.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[$.expando]){if(t.events)for(i in t.events)r[i]?E.event.remove(n,i):E.removeEvent(n,i,t.handle);n[$.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Pe(this,e,!0)},remove:function(e){return Pe(this,e)},text:function(e){return F(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Ne(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Ne(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(he(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ce.test(e)&&!de[(ce.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(he(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(he(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){E.fn[e]=function(e){for(var t,n=[],i=E(e),r=i.length-1,o=0;o<=r;o++)t=o===r?this:this.clone(!0),E(i[o])[s](t),l.apply(n,t.get());return this.pushStack(n)}});var je=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),He=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=S),t.getComputedStyle(e)},Ye=new RegExp(ne.join("|"),"i");function Re(e,t,n){var i,r,o,s,a=e.style;return(n=n||He(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||E.contains(e.ownerDocument,e)||(s=E.style(e,t)),!v.pixelBoxStyles()&&je.test(s)&&Ye.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){a.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ye.appendChild(a).appendChild(l);var e=S.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),i=36===t(e.width),l.style.position="absolute",r=36===l.offsetWidth||"absolute",ye.removeChild(a),l=null}}function t(e){return Math.round(parseFloat(e))}var n,i,r,o,s,a=T.createElement("div"),l=T.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),i},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),r}}))}();var We=/^(none|table(?!-c[ea]).+)/,Fe=/^--/,qe={position:"absolute",visibility:"hidden",display:"block"},Ue={letterSpacing:"0",fontWeight:"400"},Be=["Webkit","Moz","ms"],Ve=T.createElement("div").style;function Ge(e){var t=E.cssProps[e];return t||(t=E.cssProps[e]=function(e){if(e in Ve)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=Be.length;n--;)if((e=Be[n]+t)in Ve)return e}(e)||e),t}function Xe(e,t,n){var i=te.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function $e(e,t,n,i,r,o){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=E.css(e,n+ne[s],!0,r)),i?("content"===n&&(l-=E.css(e,"padding"+ne[s],!0,r)),"margin"!==n&&(l-=E.css(e,"border"+ne[s]+"Width",!0,r))):(l+=E.css(e,"padding"+ne[s],!0,r),"padding"!==n?l+=E.css(e,"border"+ne[s]+"Width",!0,r):a+=E.css(e,"border"+ne[s]+"Width",!0,r));return!i&&0<=o&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-l-a-.5))),l}function Ke(e,t,n){var i=He(e),r=Re(e,t,i),o="border-box"===E.css(e,"boxSizing",!1,i),s=o;if(je.test(r)){if(!n)return r;r="auto"}return s=s&&(v.boxSizingReliable()||r===e.style[t]),("auto"===r||!parseFloat(r)&&"inline"===E.css(e,"display",!1,i))&&(r=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),(r=parseFloat(r)||0)+$e(e,t,n||(o?"border":"content"),s,i,r)+"px"}function Qe(e,t,n,i,r){return new Qe.prototype.init(e,t,n,i,r)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Re(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=V(t),l=Fe.test(t),c=e.style;if(l||(t=Ge(a)),s=E.cssHooks[t]||E.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:c[t];"string"==(o=typeof n)&&(r=te.exec(n))&&r[1]&&(n=oe(e,t,r),o="number"),null!=n&&n==n&&("number"===o&&(n+=r&&r[3]||(E.cssNumber[a]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var r,o,s,a=V(t);return Fe.test(t)||(t=Ge(a)),(s=E.cssHooks[t]||E.cssHooks[a])&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=Re(e,t,i)),"normal"===r&&t in Ue&&(r=Ue[t]),""===n||n?(o=parseFloat(r),!0===n||isFinite(o)?o||0:r):r}}),E.each(["height","width"],function(e,a){E.cssHooks[a]={get:function(e,t,n){if(t)return!We.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ke(e,a,n):re(e,qe,function(){return Ke(e,a,n)})},set:function(e,t,n){var i,r=He(e),o="border-box"===E.css(e,"boxSizing",!1,r),s=n&&$e(e,a,n,o,r);return o&&v.scrollboxSize()===r.position&&(s-=Math.ceil(e["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(r[a])-$e(e,a,"border",!1,r)-.5)),s&&(i=te.exec(t))&&"px"!==(i[3]||"px")&&(e.style[a]=t,t=E.css(e,a)),Xe(0,t,s)}}}),E.cssHooks.marginLeft=ze(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Re(e,"marginLeft"))||e.getBoundingClientRect().left-re(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(r,o){E.cssHooks[r+o]={expand:function(e){for(var t=0,n={},i="string"==typeof e?e.split(" "):[e];t<4;t++)n[r+ne[t]+o]=i[t]||i[t-2]||i[0];return n}},"margin"!==r&&(E.cssHooks[r+o].set=Xe)}),E.fn.extend({css:function(e,t){return F(this,function(e,t,n){var i,r,o={},s=0;if(Array.isArray(t)){for(i=He(e),r=t.length;s<r;s++)o[t[s]]=E.css(e,t[s],!1,i);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=Qe).prototype={constructor:Qe,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=Qe.propHooks[this.prop];return e&&e.get?e.get(this):Qe.propHooks._default.get(this)},run:function(e){var t,n=Qe.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Qe.propHooks._default.set(this),this}}).init.prototype=Qe.prototype,(Qe.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[E.cssProps[e.prop]]&&!E.cssHooks[e.prop]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Qe.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=Qe.prototype.init,E.fx.step={};var Ze,Je,et,tt,nt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function rt(){Je&&(!1===T.hidden&&S.requestAnimationFrame?S.requestAnimationFrame(rt):S.setTimeout(rt,E.fx.interval),E.fx.tick())}function ot(){return S.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,i=0,r={height:e};for(t=t?1:0;i<4;i+=2-t)r["margin"+(n=ne[i])]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function at(e,t,n){for(var i,r=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,s=r.length;o<s;o++)if(i=r[o].call(n,t,e))return i}function lt(o,e,t){var n,s,i=0,r=lt.prefilters.length,a=E.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=Ze||ot(),t=Math.max(0,c.startTime+c.duration-e),n=1-(t/c.duration||0),i=0,r=c.tweens.length;i<r;i++)c.tweens[i].run(n);return a.notifyWith(o,[c,n,t]),n<1&&r?t:(r||a.notifyWith(o,[c,1,0]),a.resolveWith(o,[c]),!1)},c=a.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||ot(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,c.opts,e,t,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var t=0,n=e?c.tweens.length:0;if(s)return this;for(s=!0;t<n;t++)c.tweens[t].run(1);return e?(a.notifyWith(o,[c,1,0]),a.resolveWith(o,[c,e])):a.rejectWith(o,[c,e]),this}}),u=c.props;for(function(e,t){var n,i,r,o,s;for(n in e)if(r=t[i=V(n)],o=e[n],Array.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),(s=E.cssHooks[i])&&"expand"in s)for(n in o=s.expand(o),delete e[i],o)n in e||(e[n]=o[n],t[n]=r);else t[i]=r}(u,c.opts.specialEasing);i<r;i++)if(n=lt.prefilters[i].call(c,o,u,c.opts))return y(n.stop)&&(E._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return E.map(u,at,c),y(c.opts.start)&&c.opts.start.call(o,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),E.fx.timer(E.extend(l,{elem:o,anim:c,queue:c.opts.queue})),c}E.Animation=E.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return oe(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){for(var n,i=0,r=(e=y(e)?(t=e,["*"]):e.match(P)).length;i<r;i++)n=e[i],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,r,o,s,a,l,c,u,d="width"in t||"height"in t,h=this,f={},p=e.style,m=e.nodeType&&ie(e),g=$.get(e,"fxshow");for(i in n.queue||(null==(s=E._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,h.always(function(){h.always(function(){s.unqueued--,E.queue(e,"fx").length||s.empty.fire()})})),t)if(r=t[i],nt.test(r)){if(delete t[i],o=o||"toggle"===r,r===(m?"hide":"show")){if("show"!==r||!g||void 0===g[i])continue;m=!0}f[i]=g&&g[i]||E.style(e,i)}if((l=!E.isEmptyObject(t))||!E.isEmptyObject(f))for(i in d&&1===e.nodeType&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],null==(c=g&&g.display)&&(c=$.get(e,"display")),"none"===(u=E.css(e,"display"))&&(c?u=c:(ae([e],!0),c=e.style.display||c,u=E.css(e,"display"),ae([e]))),("inline"===u||"inline-block"===u&&null!=c)&&"none"===E.css(e,"float")&&(l||(h.done(function(){p.display=c}),null==c&&(u=p.display,c="none"===u?"":u)),p.display="inline-block")),n.overflow&&(p.overflow="hidden",h.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),l=!1,f)l||(g?"hidden"in g&&(m=g.hidden):g=$.access(e,"fxshow",{display:c}),o&&(g.hidden=!m),m&&ae([e],!0),h.done(function(){for(i in m||ae([e]),$.remove(e,"fxshow"),f)E.style(e,i,f[i])})),l=at(m?g[i]:0,i,h),i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),E.speed=function(e,t,n){var i=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||y(e)&&e,duration:e,easing:n&&t||t&&!y(t)&&t};return E.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in E.fx.speeds?i.duration=E.fx.speeds[i.duration]:i.duration=E.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){y(i.old)&&i.old.call(this),i.queue&&E.dequeue(this,i.queue)},i},E.fn.extend({fadeTo:function(e,t,n,i){return this.filter(ie).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,e,n,i){var r=E.isEmptyObject(t),o=E.speed(e,n,i),s=function(){var e=lt(this,E.extend({},t),o);(r||$.get(this,"finish"))&&e.stop(!0)};return s.finish=s,r||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(r,e,o){var s=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof r&&(o=e,e=r,r=void 0),e&&!1!==r&&this.queue(r||"fx",[]),this.each(function(){var e=!0,t=null!=r&&r+"queueHooks",n=E.timers,i=$.get(this);if(t)i[t]&&i[t].stop&&s(i[t]);else for(t in i)i[t]&&i[t].stop&&it.test(t)&&s(i[t]);for(t=n.length;t--;)n[t].elem!==this||null!=r&&n[t].queue!==r||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,r)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=$.get(this),n=t[s+"queue"],i=t[s+"queueHooks"],r=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),e=r.length;e--;)r[e].elem===this&&r[e].queue===s&&(r[e].anim.stop(!0),r.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,i){var r=E.fn[i];E.fn[i]=function(e,t,n){return null==e||"boolean"==typeof e?r.apply(this,arguments):this.animate(st(i,!0),e,t,n)}}),E.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){E.fn[e]=function(e,t,n){return this.animate(i,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),Ze=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){Je||(Je=!0,rt())},E.fx.stop=function(){Je=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(i,e){return i=E.fx&&E.fx.speeds[i]||i,e=e||"fx",this.queue(e,function(e,t){var n=S.setTimeout(e,i);t.stop=function(){S.clearTimeout(n)}})},et=T.createElement("input"),tt=T.createElement("select").appendChild(T.createElement("option")),et.type="checkbox",v.checkOn=""!==et.value,v.optSelected=tt.selected,(et=T.createElement("input")).value="t",et.type="radio",v.radioValue="t"===et.value;var ct,ut=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return F(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(r=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=E.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,r=t&&t.match(P);if(r&&1===e.nodeType)for(;n=r[i++];)e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var s=ut[t]||E.find.attr;ut[t]=function(e,t,n){var i,r,o=t.toLowerCase();return n||(r=ut[o],ut[o]=i,i=null!=s(e,t,n)?o:null,ut[o]=r),i}});var dt=/^(?:input|select|textarea|button)$/i,ht=/^(?:a|area)$/i;function ft(e){return(e.match(P)||[]).join(" ")}function pt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return F(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var i,r,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,r=E.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):dt.test(e.nodeName)||ht.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,i,r,o,s,a,l=0;if(y(t))return this.each(function(e){E(this).addClass(t.call(this,e,pt(this)))});if((e=mt(t)).length)for(;n=this[l++];)if(r=pt(n),i=1===n.nodeType&&" "+ft(r)+" "){for(s=0;o=e[s++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ");r!==(a=ft(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,r,o,s,a,l=0;if(y(t))return this.each(function(e){E(this).removeClass(t.call(this,e,pt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)for(;n=this[l++];)if(r=pt(n),i=1===n.nodeType&&" "+ft(r)+" "){for(s=0;o=e[s++];)for(;-1<i.indexOf(" "+o+" ");)i=i.replace(" "+o+" "," ");r!==(a=ft(i))&&n.setAttribute("class",a)}return this},toggleClass:function(r,t){var o=typeof r,s="string"===o||Array.isArray(r);return"boolean"==typeof t&&s?t?this.addClass(r):this.removeClass(r):y(r)?this.each(function(e){E(this).toggleClass(r.call(this,e,pt(this),t),t)}):this.each(function(){var e,t,n,i;if(s)for(t=0,n=E(this),i=mt(r);e=i[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==r&&"boolean"!==o||((e=pt(this))&&$.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===r?"":$.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+ft(pt(n))+" ").indexOf(t))return!0;return!1}});var gt=/\r/g;E.fn.extend({val:function(n){var i,e,r,t=this[0];return arguments.length?(r=y(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=r?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(i=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,t,"value")||(this.value=t))})):t?(i=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in i&&void 0!==(e=i.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(gt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:ft(E.text(e))}},select:{get:function(e){var t,n,i,r=e.options,o=e.selectedIndex,s="select-one"===e.type,a=s?null:[],l=s?o+1:r.length;for(i=o<0?l:s?o:0;i<l;i++)if(((n=r[i]).selected||i===o)&&!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){if(t=E(n).val(),s)return t;a.push(t)}return a},set:function(e,t){for(var n,i,r=e.options,o=E.makeArray(t),s=r.length;s--;)((i=r[s]).selected=-1<E.inArray(E.valHooks.option.get(i),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in S;var vt=/^(?:focusinfocus|focusoutblur)$/,yt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,i){var r,o,s,a,l,c,u,d,h=[n||T],f=g.call(e,"type")?e.type:e,p=g.call(e,"namespace")?e.namespace.split("."):[];if(o=d=s=n=n||T,3!==n.nodeType&&8!==n.nodeType&&!vt.test(f+E.event.triggered)&&(-1<f.indexOf(".")&&(f=(p=f.split(".")).shift(),p.sort()),l=f.indexOf(":")<0&&"on"+f,(e=e[E.expando]?e:new E.Event(f,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=p.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),u=E.event.special[f]||{},i||!u.trigger||!1!==u.trigger.apply(n,t))){if(!i&&!u.noBubble&&!_(n)){for(a=u.delegateType||f,vt.test(a+f)||(o=o.parentNode);o;o=o.parentNode)h.push(o),s=o;s===(n.ownerDocument||T)&&h.push(s.defaultView||s.parentWindow||S)}for(r=0;(o=h[r++])&&!e.isPropagationStopped();)d=o,e.type=1<r?a:u.bindType||f,(c=($.get(o,"events")||{})[e.type]&&$.get(o,"handle"))&&c.apply(o,t),(c=l&&o[l])&&c.apply&&G(o)&&(e.result=c.apply(o,t),!1===e.result&&e.preventDefault());return e.type=f,i||e.isDefaultPrevented()||u._default&&!1!==u._default.apply(h.pop(),t)||!G(n)||l&&y(n[f])&&!_(n)&&((s=n[l])&&(n[l]=null),E.event.triggered=f,e.isPropagationStopped()&&d.addEventListener(f,yt),n[f](),e.isPropagationStopped()&&d.removeEventListener(f,yt),E.event.triggered=void 0,s&&(n[l]=s)),e.result}},simulate:function(e,t,n){var i=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(i,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,i){var r=function(e){E.event.simulate(i,e.target,E.event.fix(e))};E.event.special[i]={setup:function(){var e=this.ownerDocument||this,t=$.access(e,i);t||e.addEventListener(n,r,!0),$.access(e,i,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=$.access(e,i)-1;t?$.access(e,i,t):(e.removeEventListener(n,r,!0),$.remove(e,i))}}});var _t=S.location,wt=Date.now(),bt=/\?/;E.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new S.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||E.error("Invalid XML: "+e),t};var xt=/\[\]$/,St=/\r?\n/g,Tt=/^(?:submit|button|image|reset|file)$/i,Et=/^(?:input|select|textarea|keygen)/i;function kt(n,e,i,r){var t;if(Array.isArray(e))E.each(e,function(e,t){i||xt.test(n)?r(n,t):kt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,r)});else if(i||"object"!==b(e))r(n,e);else for(t in e)kt(n+"["+t+"]",e[t],i,r)}E.param=function(e,t){var n,i=[],r=function(e,t){var n=y(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){r(this.name,this.value)});else for(n in e)kt(n,e[n],t,r);return i.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Et.test(this.nodeName)&&!Tt.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(St,"\r\n")}}):{name:t.name,value:n.replace(St,"\r\n")}}).get()}});var Ct=/%20/g,Dt=/#.*$/,Ot=/([?&])_=[^&]*/,Nt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Mt=/^(?:GET|HEAD)$/,At=/^\/\//,Lt={},It={},Pt="*/".concat("*"),jt=T.createElement("a");function Ht(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,i=0,r=e.toLowerCase().match(P)||[];if(y(t))for(;n=r[i++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Yt(t,r,o,s){var a={},l=t===It;function c(e){var i;return a[e]=!0,E.each(t[e]||[],function(e,t){var n=t(r,o,s);return"string"!=typeof n||l||a[n]?l?!(i=n):void 0:(r.dataTypes.unshift(n),c(n),!1)}),i}return c(r.dataTypes[0])||!a["*"]&&c("*")}function Rt(e,t){var n,i,r=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&E.extend(!0,e,i),e}jt.href=_t.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_t.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Rt(Rt(e,E.ajaxSettings),t):Rt(E.ajaxSettings,e)},ajaxPrefilter:Ht(Lt),ajaxTransport:Ht(It),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var u,d,h,n,f,i,p,m,r,o,g=E.ajaxSetup({},t),v=g.context||g,y=g.context&&(v.nodeType||v.jquery)?E(v):E.event,_=E.Deferred(),w=E.Callbacks("once memory"),b=g.statusCode||{},s={},a={},l="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(p){if(!n)for(n={};t=Nt.exec(h);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return p?h:null},setRequestHeader:function(e,t){return null==p&&(e=a[e.toLowerCase()]=a[e.toLowerCase()]||e,s[e]=t),this},overrideMimeType:function(e){return null==p&&(g.mimeType=e),this},statusCode:function(e){var t;if(e)if(p)x.always(e[x.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||l;return u&&u.abort(t),c(0,t),this}};if(_.promise(x),g.url=((e||g.url||_t.href)+"").replace(At,_t.protocol+"//"),g.type=t.method||t.type||g.method||g.type,g.dataTypes=(g.dataType||"*").toLowerCase().match(P)||[""],null==g.crossDomain){i=T.createElement("a");try{i.href=g.url,i.href=i.href,g.crossDomain=jt.protocol+"//"+jt.host!=i.protocol+"//"+i.host}catch(e){g.crossDomain=!0}}if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=E.param(g.data,g.traditional)),Yt(Lt,g,t,x),p)return x;for(r in(m=E.event&&g.global)&&0==E.active++&&E.event.trigger("ajaxStart"),g.type=g.type.toUpperCase(),g.hasContent=!Mt.test(g.type),d=g.url.replace(Dt,""),g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Ct,"+")):(o=g.url.slice(d.length),g.data&&(g.processData||"string"==typeof g.data)&&(d+=(bt.test(d)?"&":"?")+g.data,delete g.data),!1===g.cache&&(d=d.replace(Ot,"$1"),o=(bt.test(d)?"&":"?")+"_="+wt+++o),g.url=d+o),g.ifModified&&(E.lastModified[d]&&x.setRequestHeader("If-Modified-Since",E.lastModified[d]),E.etag[d]&&x.setRequestHeader("If-None-Match",E.etag[d])),(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&x.setRequestHeader("Content-Type",g.contentType),x.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Pt+"; q=0.01":""):g.accepts["*"]),g.headers)x.setRequestHeader(r,g.headers[r]);if(g.beforeSend&&(!1===g.beforeSend.call(v,x,g)||p))return x.abort();if(l="abort",w.add(g.complete),x.done(g.success),x.fail(g.error),u=Yt(It,g,t,x)){if(x.readyState=1,m&&y.trigger("ajaxSend",[x,g]),p)return x;g.async&&0<g.timeout&&(f=S.setTimeout(function(){x.abort("timeout")},g.timeout));try{p=!1,u.send(s,c)}catch(e){if(p)throw e;c(-1,e)}}else c(-1,"No Transport");function c(e,t,n,i){var r,o,s,a,l,c=t;p||(p=!0,f&&S.clearTimeout(f),u=void 0,h=i||"",x.readyState=0<e?4:0,r=200<=e&&e<300||304===e,n&&(a=function(e,t,n){for(var i,r,o,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){l.unshift(r);break}if(l[0]in n)o=l[0];else{for(r in n){if(!l[0]||e.converters[r+" "+l[0]]){o=r;break}s||(s=r)}o=o||s}if(o)return o!==l[0]&&l.unshift(o),n[o]}(g,x,n)),a=function(e,t,n,i){var r,o,s,a,l,c={},u=e.dataTypes.slice();if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(o=u.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=u.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(!(s=c[l+" "+o]||c["* "+o]))for(r in c)if((a=r.split(" "))[1]===o&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[r]:!0!==c[r]&&(o=a[0],u.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}(g,a,x,r),r?(g.ifModified&&((l=x.getResponseHeader("Last-Modified"))&&(E.lastModified[d]=l),(l=x.getResponseHeader("etag"))&&(E.etag[d]=l)),204===e||"HEAD"===g.type?c="nocontent":304===e?c="notmodified":(c=a.state,o=a.data,r=!(s=a.error))):(s=c,!e&&c||(c="error",e<0&&(e=0))),x.status=e,x.statusText=(t||c)+"",r?_.resolveWith(v,[o,c,x]):_.rejectWith(v,[x,c,s]),x.statusCode(b),b=void 0,m&&y.trigger(r?"ajaxSuccess":"ajaxError",[x,g,r?o:s]),w.fireWith(v,[x,c]),m&&(y.trigger("ajaxComplete",[x,g]),--E.active||E.event.trigger("ajaxStop")))}return x},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,r){E[r]=function(e,t,n,i){return y(t)&&(i=i||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:r,dataType:i,data:t,success:n},E.isPlainObject(e)&&e))}}),E._evalUrl=function(e){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(y(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return y(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=y(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new S.XMLHttpRequest}catch(e){}};var zt={0:200,1223:204},Wt=E.ajaxSettings.xhr();v.cors=!!Wt&&"withCredentials"in Wt,v.ajax=Wt=!!Wt,E.ajaxTransport(function(r){var o,s;if(v.cors||Wt&&!r.crossDomain)return{send:function(e,t){var n,i=r.xhr();if(i.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(n in r.xhrFields)i[n]=r.xhrFields[n];for(n in r.mimeType&&i.overrideMimeType&&i.overrideMimeType(r.mimeType),r.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)i.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?"number"!=typeof i.status?t(0,"error"):t(i.status,i.statusText):t(zt[i.status]||i.status,i.statusText,"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},i.onload=o(),s=i.onerror=i.ontimeout=o("error"),void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){4===i.readyState&&S.setTimeout(function(){o&&s()})},o=o("abort");try{i.send(r.hasContent&&r.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var i,r;if(n.crossDomain)return{send:function(e,t){i=E("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",r=function(e){i.remove(),r=null,e&&t("error"===e.type?404:200,e.type)}),T.head.appendChild(i[0])},abort:function(){r&&r()}}});var Ft,qt=[],Ut=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=qt.pop()||E.expando+"_"+wt++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var i,r,o,s=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=y(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Ut,"$1"+i):!1!==e.jsonp&&(e.url+=(bt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return o||E.error(i+" was not called"),o[0]},e.dataTypes[0]="json",r=S[i],S[i]=function(){o=arguments},n.always(function(){void 0===r?E(S).removeProp(i):S[i]=r,e[i]&&(e.jsonpCallback=t.jsonpCallback,qt.push(i)),o&&y(r)&&r(o[0]),o=r=void 0}),"script"}),v.createHTMLDocument=((Ft=T.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ft.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((i=(t=T.implementation.createHTMLDocument("")).createElement("base")).href=T.location.href,t.head.appendChild(i)):t=T),o=!n&&[],(r=D.exec(e))?[t.createElement(r[1])]:(r=ve([e],t,o),o&&o.length&&E(o).remove(),E.merge([],r.childNodes)));var i,r,o},E.fn.load=function(e,t,n){var i,r,o,s=this,a=e.indexOf(" ");return-1<a&&(i=ft(e.slice(a)),e=e.slice(0,a)),y(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),0<s.length&&E.ajax({url:e,type:r||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(i?E("<div>").append(E.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var i,r,o,s,a,l,c=E.css(e,"position"),u=E(e),d={};"static"===c&&(e.style.position="relative"),a=u.offset(),o=E.css(e,"top"),l=E.css(e,"left"),r=("absolute"===c||"fixed"===c)&&-1<(o+l).indexOf("auto")?(s=(i=u.position()).top,i.left):(s=parseFloat(o)||0,parseFloat(l)||0),y(t)&&(t=t.call(e,n,E.extend({},a))),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):u.css(d)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],r={top:0,left:0};if("fixed"===E.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((r=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),r.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-r.top-E.css(i,"marginTop",!0),left:t.left-r.left-E.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===E.css(e,"position");)e=e.offsetParent;return e||ye})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,r){var o="pageYOffset"===r;E.fn[t]=function(e){return F(this,function(e,t,n){var i;if(_(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===n)return i?i[r]:e[t];i?i.scrollTo(o?i.pageXOffset:n,o?n:i.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=ze(v.pixelPosition,function(e,t){if(t)return t=Re(e,n),je.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(s,a){E.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,o){E.fn[o]=function(e,t){var n=arguments.length&&(i||"boolean"!=typeof e),r=i||(!0===e||!0===t?"margin":"border");return F(this,function(e,t,n){var i;return _(e)?0===o.indexOf("outer")?e["inner"+s]:e.document.documentElement["client"+s]:9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+s],i["scroll"+s],e.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?E.css(e,t,r):E.style(e,t,n,r)},a,n?e:void 0,n)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.proxy=function(e,t){var n,i,r;if("string"==typeof t&&(n=e[t],t=e,e=n),y(e))return i=a.call(arguments,2),(r=function(){return e.apply(t||this,i.concat(a.call(arguments)))}).guid=e.guid=e.guid||E.guid++,r},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=C,E.isFunction=y,E.isWindow=_,E.camelCase=V,E.type=b,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Bt=S.jQuery,Vt=S.$;return E.noConflict=function(e){return S.$===E&&(S.$=Vt),e&&S.jQuery===E&&(S.jQuery=Bt),E},e||(S.jQuery=S.$=E),E}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function s(e){return e&&"[object Function]"==={}.toString.call(e)}function w(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function y(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function _(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=w(e),n=t.overflow,i=t.overflowX,r=t.overflowY;return/(auto|scroll)/.test(n+r+i)?e:_(y(e))}function b(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===w(t,"position")?b(t):t:e?e.ownerDocument.documentElement:document.documentElement}function u(e){return null===e.parentNode?e:u(e.parentNode)}function x(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,o=document.createRange();o.setStart(i,0),o.setEnd(r,0);var s,a,l=o.commonAncestorContainer;if(e!==l&&t!==l||i.contains(r))return"BODY"===(a=(s=l).nodeName)||"HTML"!==a&&b(s.firstElementChild)!==s?b(l):l;var c=u(e);return c.host?x(c.host,t):x(e,u(t).host)}function S(e){var t="top"===(1<arguments.length&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"!==n&&"HTML"!==n)return e[t];var i=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||i)[t]}function d(e,t){var n="x"===t?"Left":"Top",i="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function i(e,t,n,i){return H(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],W()?n["offset"+e]+i["margin"+("Height"===e?"Top":"Left")]+i["margin"+("Height"===e?"Bottom":"Right")]:0)}function T(){var e=document.body,t=document.documentElement,n=W()&&getComputedStyle(t);return{height:i("Height",e,t,n),width:i("Width",e,t,n)}}function E(e){return U({},e,{right:e.left+e.width,bottom:e.top+e.height})}function k(e){var t={};if(W())try{t=e.getBoundingClientRect();var n=S(e,"top"),i=S(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}catch(e){}else t=e.getBoundingClientRect();var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?T():{},s=o.width||e.clientWidth||r.right-r.left,a=o.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,c=e.offsetHeight-a;if(l||c){var u=w(e);l-=d(u,"x"),c-=d(u,"y"),r.width-=l,r.height-=c}return E(r)}function C(e,t){var n=W(),i="HTML"===t.nodeName,r=k(e),o=k(t),s=_(e),a=w(t),l=parseFloat(a.borderTopWidth,10),c=parseFloat(a.borderLeftWidth,10),u=E({top:r.top-o.top-l,left:r.left-o.left-c,width:r.width,height:r.height});if(u.marginTop=0,u.marginLeft=0,!n&&i){var d=parseFloat(a.marginTop,10),h=parseFloat(a.marginLeft,10);u.top-=l-d,u.bottom-=l-d,u.left-=c-h,u.right-=c-h,u.marginTop=d,u.marginLeft=h}return(n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(u=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=S(t,"top"),r=S(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}(u,t)),u}function h(e,t,n,i){var r,o,s,a,l,c,u,d={top:0,left:0},h=x(e,t);if("viewport"===i)o=(r=h).ownerDocument.documentElement,s=C(r,o),a=H(o.clientWidth,window.innerWidth||0),l=H(o.clientHeight,window.innerHeight||0),c=S(o),u=S(o,"left"),d=E({top:c-s.top+s.marginTop,left:u-s.left+s.marginLeft,width:a,height:l});else{var f;"scrollParent"===i?"BODY"===(f=_(y(t))).nodeName&&(f=e.ownerDocument.documentElement):f="window"===i?e.ownerDocument.documentElement:i;var p=C(f,h);if("HTML"!==f.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===w(t,"position")||e(y(t)))}(h))d=p;else{var m=T(),g=m.height,v=m.width;d.top+=p.top-p.marginTop,d.bottom=g+p.top,d.left+=p.left-p.marginLeft,d.right=v+p.left}}return d.left+=n,d.top+=n,d.right-=n,d.bottom-=n,d}function a(e,t,i,n,r){var o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=h(i,n,o,r),a={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},l=Object.keys(a).map(function(e){return U({key:e},a[e],{area:(t=a[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),c=l.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),u=0<c.length?c[0].key:l[0].key,d=e.split("-")[1];return u+(d?"-"+d:"")}function l(e,t,n){return C(n,x(t,n))}function D(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function O(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function N(e,t,n){n=n.split("-")[0];var i=D(e),r={width:i.width,height:i.height},o=-1!==["right","left"].indexOf(n),s=o?"top":"left",a=o?"left":"top",l=o?"height":"width",c=o?"width":"height";return r[s]=t[s]+t[l]/2-i[l]/2,r[a]=n===a?t[a]-i[c]:t[O(a)],r}function M(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function A(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=M(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&s(t)&&(n.offsets.popper=E(n.offsets.popper),n.offsets.reference=E(n.offsets.reference),n=t(n,e))}),n}function e(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function L(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length-1;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==document.body.style[o])return o}return null}function o(e){var t=e.ownerDocument;return t?t.defaultView:window}function t(e,t,n,i){n.updateBound=i,o(e).addEventListener("resize",n.updateBound,{passive:!0});var r=_(e);return function e(t,n,i,r){var o="BODY"===t.nodeName,s=o?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),o||e(_(s.parentNode),n,i,r),r.push(s)}(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function n(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,o(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function f(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function c(n,i){Object.keys(i).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&f(i[e])&&(t="px"),n.style[e]=i[e]+t})}function I(e,t,n){var i=M(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`";console.warn("`"+n+"` modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}function r(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=V.indexOf(e),i=V.slice(n+1).concat(V.slice(0,n));return t?i.reverse():i}function p(e,r,o,t){var s=[0,0],a=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),i=n.indexOf(M(n,function(e){return-1!==e.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1===i?[n]:[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))];return(c=c.map(function(e,t){var n=(1===t?!a:a)?"height":"width",i=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var r,o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+o[1],a=o[2];if(!s)return e;if(0!==a.indexOf("%"))return"vh"!==a&&"vw"!==a?s:("vh"===a?H(document.documentElement.clientHeight,window.innerHeight||0):H(document.documentElement.clientWidth,window.innerWidth||0))/100*s;switch(a){case"%p":r=n;break;case"%":case"%r":default:r=i}return E(r)[t]/100*s}(e,n,r,o)})})).forEach(function(n,i){n.forEach(function(e,t){f(e)&&(s[i]+=e*("-"===n[t-1]?-1:1))})}),s}for(var P=Math.min,j=Math.floor,H=Math.max,m="undefined"!=typeof window&&"undefined"!=typeof document,g=["Edge","Trident","Firefox"],v=0,Y=0;Y<g.length;Y+=1)if(m&&0<=navigator.userAgent.indexOf(g[Y])){v=1;break}var R,z=m&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},v))}},W=function(){return null==R&&(R=-1!==navigator.appVersion.indexOf("MSIE 10")),R},F=function(){function i(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),q=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},U=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},B=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],V=B.slice(3),G="flip",X="clockwise",$="counterclockwise",K=function(){function o(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,o),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=z(this.update.bind(this)),this.options=U({},o.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(U({},o.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=U({},o.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return U({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&s(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return F(o,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=l(this.state,this.popper,this.reference),e.placement=a(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=N(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=A(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,e(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[L("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=t(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return n.call(this)}}]),o}();return K.Utils=("undefined"==typeof window?global:window).PopperUtils,K.placements=B,K.Defaults={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets,o=r.reference,s=r.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",u={start:q({},l,o[l]),end:q({},l,o[l]+o[c]-s[c])};e.offsets.popper=U({},s,u[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,i=t.offset,r=e.placement,o=e.offsets,s=o.popper,a=o.reference,l=r.split("-")[0];return n=f(+i)?[+i,0]:p(i,s,a,l),"left"===l?(s.top+=n[0],s.left-=n[1]):"right"===l?(s.top+=n[0],s.left+=n[1]):"top"===l?(s.left+=n[0],s.top-=n[1]):"bottom"===l&&(s.left+=n[0],s.top+=n[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,i){var t=i.boundariesElement||b(e.instance.popper);e.instance.reference===t&&(t=b(t));var r=h(e.instance.popper,e.instance.reference,i.padding,t);i.boundaries=r;var n=i.priority,o=e.offsets.popper,s={primary:function(e){var t=o[e];return o[e]<r[e]&&!i.escapeWithReference&&(t=H(o[e],r[e])),q({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=o[t];return o[e]>r[e]&&!i.escapeWithReference&&(n=P(o[t],r[e]-("right"===e?o.width:o.height))),q({},t,n)}};return n.forEach(function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";o=U({},o,s[t](e))}),e.offsets.popper=o,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,r=e.placement.split("-")[0],o=j,s=-1!==["top","bottom"].indexOf(r),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<o(i[l])&&(e.offsets.popper[l]=o(i[l])-n[c]),n[l]>o(i[a])&&(e.offsets.popper[l]=o(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!I(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var r=e.placement.split("-")[0],o=e.offsets,s=o.popper,a=o.reference,l=-1!==["left","right"].indexOf(r),c=l?"height":"width",u=l?"Top":"Left",d=u.toLowerCase(),h=l?"left":"top",f=l?"bottom":"right",p=D(i)[c];a[f]-p<s[d]&&(e.offsets.popper[d]-=s[d]-(a[f]-p)),a[d]+p>s[f]&&(e.offsets.popper[d]+=a[d]+p-s[f]),e.offsets.popper=E(e.offsets.popper);var m=a[d]+a[c]/2-p/2,g=w(e.instance.popper),v=parseFloat(g["margin"+u],10),y=parseFloat(g["border"+u+"Width"],10),_=m-e.offsets.popper[d]-v-y;return _=H(P(s[c]-p,_),0),e.arrowElement=i,e.offsets.arrow=(q(n={},d,Math.round(_)),q(n,h,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(p,m){if(e(p.instance.modifiers,"inner"))return p;if(p.flipped&&p.placement===p.originalPlacement)return p;var g=h(p.instance.popper,p.instance.reference,m.padding,m.boundariesElement),v=p.placement.split("-")[0],y=O(v),_=p.placement.split("-")[1]||"",w=[];switch(m.behavior){case G:w=[v,y];break;case X:w=r(v);break;case $:w=r(v,!0);break;default:w=m.behavior}return w.forEach(function(e,t){if(v!==e||w.length===t+1)return p;v=p.placement.split("-")[0],y=O(v);var n,i=p.offsets.popper,r=p.offsets.reference,o=j,s="left"===v&&o(i.right)>o(r.left)||"right"===v&&o(i.left)<o(r.right)||"top"===v&&o(i.bottom)>o(r.top)||"bottom"===v&&o(i.top)<o(r.bottom),a=o(i.left)<o(g.left),l=o(i.right)>o(g.right),c=o(i.top)<o(g.top),u=o(i.bottom)>o(g.bottom),d="left"===v&&a||"right"===v&&l||"top"===v&&c||"bottom"===v&&u,h=-1!==["top","bottom"].indexOf(v),f=!!m.flipVariations&&(h&&"start"===_&&a||h&&"end"===_&&l||!h&&"start"===_&&c||!h&&"end"===_&&u);(s||d||f)&&(p.flipped=!0,(s||d)&&(v=w[t+1]),f&&(_="end"===(n=_)?"start":"start"===n?"end":n),p.placement=v+(_?"-"+_:""),p.offsets.popper=U({},p.offsets.popper,N(p.instance.popper,p.offsets.reference,p.placement)),p=A(p.instance.modifiers,p,"flip"))}),p},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,r=i.popper,o=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return r[s?"left":"top"]=o[n]-(a?r[s?"width":"height"]:0),e.placement=O(t),e.offsets.popper=E(r),e}},hide:{order:800,enabled:!0,fn:function(e){if(!I(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=M(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,r=e.offsets.popper,o=M(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==o&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,l=void 0===o?t.gpuAcceleration:o,c=k(b(e.instance.popper)),u={position:r.position},d={left:j(r.left),top:j(r.top),bottom:j(r.bottom),right:j(r.right)},h="bottom"===n?"top":"bottom",f="right"===i?"left":"right",p=L("transform");if(a="bottom"==h?-c.height+d.bottom:d.top,s="right"==f?-c.width+d.right:d.left,l&&p)u[p]="translate3d("+s+"px, "+a+"px, 0)",u[h]=0,u[f]=0,u.willChange="transform";else{var m="bottom"==h?-1:1,g="right"==f?-1:1;u[h]=a*m,u[f]=s*g,u.willChange=h+", "+f}var v={"x-placement":e.placement};return e.attributes=U({},v,e.attributes),e.styles=U({},u,e.styles),e.arrowStyles=U({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return c(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1===n[e]?t.removeAttribute(e):t.setAttribute(e,n[e])}),e.arrowElement&&Object.keys(e.arrowStyles).length&&c(e.arrowElement,e.arrowStyles),e;var t,n},onLoad:function(e,t,n,i,r){var o=l(0,t,e),s=a(n.placement,o,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),c(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},K}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("popper.js")):"function"==typeof define&&define.amd?define(["popper.js"],t):e.Tooltip=t(e.Popper)}(this,function(o){"use strict";o=o&&"default"in o?o.default:o;var e=function(){function i(e,t){for(var n,i=0;i<t.length;i++)(n=t[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),s=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0},t=function(){function i(e,t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,i),a.call(this),t=s({},r,t),e.jquery&&(e=e[0]),this.reference=e;var n="string"==typeof(this.options=t).trigger?t.trigger.split(" ").filter(function(e){return-1!==["click","hover","focus"].indexOf(e)}):[];this._isOpen=!1,this._popperOptions={},this._setEventListeners(e,n,t)}return e(i,[{key:"_create",value:function(e,t,n,i){var r=window.document.createElement("div");r.innerHTML=t.trim();var o=r.childNodes[0];o.id="tooltip_"+Math.random().toString(36).substr(2,10),o.setAttribute("aria-hidden","false");var s,a=r.querySelector(this.innerSelector);if(1===n.nodeType||11===n.nodeType)i&&a.appendChild(n);else if((s=n)&&"[object Function]"==={}.toString.call(s)){var l=n.call(e);i?a.innerHTML=l:a.innerText=l}else i?a.innerHTML=n:a.innerText=n;return o}},{key:"_show",value:function(e,t){if(this._isOpen&&!this._isOpening)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.display="",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.update(),this;var n=e.getAttribute("title")||t.title;if(!n)return this;var i=this._create(e,t.template,n,t.html);e.setAttribute("aria-describedby",i.id);var r=this._findContainer(t.container,e);return this._append(i,r),this._popperOptions=s({},t.popperOptions,{placement:t.placement}),this._popperOptions.modifiers=s({},this._popperOptions.modifiers,{arrow:{element:this.arrowSelector},offset:{offset:t.offset}}),t.boundariesElement&&(this._popperOptions.modifiers.preventOverflow={boundariesElement:t.boundariesElement}),this.popperInstance=new o(e,i,this._popperOptions),this._tooltipNode=i,this}},{key:"_hide",value:function(){return this._isOpen&&(this._isOpen=!1,this._tooltipNode.style.display="none",this._tooltipNode.setAttribute("aria-hidden","true")),this}},{key:"_dispose",value:function(){var i=this;return this._events.forEach(function(e){var t=e.func,n=e.event;i.reference.removeEventListener(n,t)}),this._events=[],this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),!this.popperInstance.options.removeOnDestroy&&(this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null)),this}},{key:"_findContainer",value:function(e,t){return"string"==typeof e?e=window.document.querySelector(e):!1===e&&(e=t.parentNode),e}},{key:"_append",value:function(e,t){t.appendChild(e)}},{key:"_setEventListeners",value:function(n,e,i){var r=this,t=[],o=[];e.forEach(function(e){"hover"===e?(t.push("mouseenter"),o.push("mouseleave")):"focus"===e?(t.push("focus"),o.push("blur")):"click"===e&&(t.push("click"),o.push("click"))}),t.forEach(function(e){var t=function(e){!0===r._isOpening||(e.usedByTooltip=!0,r._scheduleShow(n,i.delay,i,e))};r._events.push({event:e,func:t}),n.addEventListener(e,t)}),o.forEach(function(e){var t=function(e){!0===e.usedByTooltip||r._scheduleHide(n,i.delay,i,e)};r._events.push({event:e,func:t}),n.addEventListener(e,t)})}},{key:"_scheduleShow",value:function(e,t,n){var i=this;this._isOpening=!0;var r=t&&t.show||t||0;this._showTimeout=window.setTimeout(function(){return i._show(e,n)},r)}},{key:"_scheduleHide",value:function(e,t,n,i){var r=this;this._isOpening=!1;var o=t&&t.hide||t||0;window.setTimeout(function(){if(window.clearTimeout(r._showTimeout),!1!==r._isOpen&&document.body.contains(r._tooltipNode)){if("mouseleave"===i.type)if(r._setTooltipNodeEvent(i,e,t,n))return;r._hide(e,n)}},o)}}]),i}(),a=function(){var s=this;this.show=function(){return s._show(s.reference,s.options)},this.hide=function(){return s._hide()},this.dispose=function(){return s._dispose()},this.toggle=function(){return s._isOpen?s.hide():s.show()},this.arrowSelector=".tooltip-arrow, .tooltip__arrow",this.innerSelector=".tooltip-inner, .tooltip__inner",this._events=[],this._setTooltipNodeEvent=function(i,r,e,o){var t=i.relatedreference||i.toElement||i.relatedTarget;return!!s._tooltipNode.contains(t)&&(s._tooltipNode.addEventListener(i.type,function e(t){var n=t.relatedreference||t.toElement||t.relatedTarget;s._tooltipNode.removeEventListener(i.type,e),r.contains(n)||s._scheduleHide(r,o.delay,o,t)}),!0)}};return t}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],t):t((e=e||self).bootstrap={},e.jQuery,e.Popper)}(this,function(e,p,d){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function l(r){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter(function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable}))),t.forEach(function(e){var t,n,i;t=r,i=o[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i})}return r}p=p&&p.hasOwnProperty("default")?p.default:p,d=d&&d.hasOwnProperty("default")?d.default:d;var t="transitionend";var m={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=p(e).css("transition-duration"),n=p(e).css("transition-delay"),i=parseFloat(t),r=parseFloat(n);return i||r?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){p(e).trigger(t)},supportsTransitionEnd:function(){return Boolean(t)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],o=t[i],s=o&&m.isElement(o)?"element":(a=o,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+r+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"!=typeof e.getRootNode)return e instanceof ShadowRoot?e:e.parentNode?m.findShadowRoot(e.parentNode):null;var t=e.getRootNode();return t instanceof ShadowRoot?t:null}};p.fn.emulateTransitionEnd=function(e){var t=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(t)},e),this},p.event.special[m.TRANSITION_END]={bindType:t,delegateType:t,handle:function(e){if(p(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var n="alert",r="bs.alert",o="."+r,a=p.fn[n],c={CLOSE:"close"+o,CLOSED:"closed"+o,CLICK_DATA_API:"click"+o+".data-api"},u=function(){function i(e){this._element=e}var e=i.prototype;return e.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},e.dispose=function(){p.removeData(this._element,r),this._element=null},e._getRootElement=function(e){var t=m.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n||(n=p(e).closest(".alert")[0]),n},e._triggerCloseEvent=function(e){var t=p.Event(c.CLOSE);return p(e).trigger(t),t},e._removeElement=function(t){var n=this;if(p(t).removeClass("show"),p(t).hasClass("fade")){var e=m.getTransitionDurationFromElement(t);p(t).one(m.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(e)}else this._destroyElement(t)},e._destroyElement=function(e){p(e).detach().trigger(c.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(r);t||(t=new i(this),e.data(r,t)),"close"===n&&t[n](this)})},i._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(c.CLICK_DATA_API,'[data-dismiss="alert"]',u._handleDismiss(new u)),p.fn[n]=u._jQueryInterface,p.fn[n].Constructor=u,p.fn[n].noConflict=function(){return p.fn[n]=a,u._jQueryInterface};var h="button",f="bs.button",g="."+f,v=".data-api",y=p.fn[h],_="active",w='[data-toggle^="button"]',b={CLICK_DATA_API:"click"+g+v,FOCUS_BLUR_DATA_API:"focus"+g+v+" blur"+g+v},x=function(){function n(e){this._element=e}var e=n.prototype;return e.toggle=function(){var e=!0,t=!0,n=p(this._element).closest('[data-toggle="buttons"]')[0];if(n){var i=this._element.querySelector('input:not([type="hidden"])');if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(_))e=!1;else{var r=n.querySelector(".active");r&&p(r).removeClass(_)}if(e){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(_),p(i).trigger("change")}i.focus(),t=!1}}t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(_)),e&&p(this._element).toggleClass(_)},e.dispose=function(){p.removeData(this._element,f),this._element=null},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(f);e||(e=new n(this),p(this).data(f,e)),"toggle"===t&&e[t]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();p(document).on(b.CLICK_DATA_API,w,function(e){e.preventDefault();var t=e.target;p(t).hasClass("btn")||(t=p(t).closest(".btn")),x._jQueryInterface.call(p(t),"toggle")}).on(b.FOCUS_BLUR_DATA_API,w,function(e){var t=p(e.target).closest(".btn")[0];p(t).toggleClass("focus",/^focus(in)?$/.test(e.type))}),p.fn[h]=x._jQueryInterface,p.fn[h].Constructor=x,p.fn[h].noConflict=function(){return p.fn[h]=y,x._jQueryInterface};var S="carousel",T="bs.carousel",E="."+T,k=".data-api",C=p.fn[S],D={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},O={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},N="next",M="prev",A={SLIDE:"slide"+E,SLID:"slid"+E,KEYDOWN:"keydown"+E,MOUSEENTER:"mouseenter"+E,MOUSELEAVE:"mouseleave"+E,TOUCHSTART:"touchstart"+E,TOUCHMOVE:"touchmove"+E,TOUCHEND:"touchend"+E,POINTERDOWN:"pointerdown"+E,POINTERUP:"pointerup"+E,DRAG_START:"dragstart"+E,LOAD_DATA_API:"load"+E+k,CLICK_DATA_API:"click"+E+k},L="active",I=".active.carousel-item",P={TOUCH:"touch",PEN:"pen"},j=function(){function o(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=o.prototype;return e.next=function(){this._isSliding||this._slide(N)},e.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(M)},e.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(e){var t=this;this._activeElement=this._element.querySelector(I);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)p(this._element).one(A.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();var i=n<e?N:M;this._slide(i,this._items[e])}},e.dispose=function(){p(this._element).off(E),p.removeData(this._element,T),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(e){return e=l({},D,e),m.typeCheckConfig(S,e,O),e},e._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;0<t&&this.prev(),t<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&p(this._element).on(A.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&p(this._element).on(A.MOUSEENTER,function(e){return t.pause(e)}).on(A.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var t=function(e){n._pointerEvent&&P[e.originalEvent.pointerType.toUpperCase()]?n.touchStartX=e.originalEvent.clientX:n._pointerEvent||(n.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){n._pointerEvent&&P[e.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=e.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(e){return n.cycle(e)},500+n._config.interval))};p(this._element.querySelectorAll(".carousel-item img")).on(A.DRAG_START,function(e){return e.preventDefault()}),this._pointerEvent?(p(this._element).on(A.POINTERDOWN,function(e){return t(e)}),p(this._element).on(A.POINTERUP,function(e){return i(e)}),this._element.classList.add("pointer-event")):(p(this._element).on(A.TOUCHSTART,function(e){return t(e)}),p(this._element).on(A.TOUCHMOVE,function(e){var t;(t=e).originalEvent.touches&&1<t.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=t.originalEvent.touches[0].clientX-n.touchStartX}),p(this._element).on(A.TOUCHEND,function(e){return i(e)}))}},e._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},e._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(e)},e._getItemByDirection=function(e,t){var n=e===N,i=e===M,r=this._getItemIndex(t),o=this._items.length-1;if((i&&0===r||n&&r===o)&&!this._config.wrap)return t;var s=(r+(e===M?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),i=this._getItemIndex(this._element.querySelector(I)),r=p.Event(A.SLIDE,{relatedTarget:e,direction:t,from:i,to:n});return p(this._element).trigger(r),r},e._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(".active"));p(t).removeClass(L);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&p(n).addClass(L)}},e._slide=function(e,t){var n,i,r,o=this,s=this._element.querySelector(I),a=this._getItemIndex(s),l=t||s&&this._getItemByDirection(e,s),c=this._getItemIndex(l),u=Boolean(this._interval);if(r=e===N?(n="carousel-item-left",i="carousel-item-next","left"):(n="carousel-item-right",i="carousel-item-prev","right"),l&&p(l).hasClass(L))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&s&&l){this._isSliding=!0,u&&this.pause(),this._setActiveIndicatorElement(l);var d=p.Event(A.SLID,{relatedTarget:l,direction:r,from:a,to:c});if(p(this._element).hasClass("slide")){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var h=parseInt(l.getAttribute("data-interval"),10);this._config.interval=h?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,h):this._config.defaultInterval||this._config.interval;var f=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(L),p(s).removeClass(L+" "+i+" "+n),o._isSliding=!1,setTimeout(function(){return p(o._element).trigger(d)},0)}).emulateTransitionEnd(f)}else p(s).removeClass(L),p(l).addClass(L),this._isSliding=!1,p(this._element).trigger(d);u&&this.cycle()}},o._jQueryInterface=function(i){return this.each(function(){var e=p(this).data(T),t=l({},D,p(this).data());"object"==typeof i&&(t=l({},t,i));var n="string"==typeof i?i:t.slide;if(e||(e=new o(this,t),p(this).data(T,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}else t.interval&&t.ride&&(e.pause(),e.cycle())})},o._dataApiClickHandler=function(e){var t=m.getSelectorFromElement(this);if(t){var n=p(t)[0];if(n&&p(n).hasClass("carousel")){var i=l({},p(n).data(),p(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),o._jQueryInterface.call(p(n),i),r&&p(n).data(T).to(r),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return D}}]),o}();p(document).on(A.CLICK_DATA_API,"[data-slide], [data-slide-to]",j._dataApiClickHandler),p(window).on(A.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),t=0,n=e.length;t<n;t++){var i=p(e[t]);j._jQueryInterface.call(i,i.data())}}),p.fn[S]=j._jQueryInterface,p.fn[S].Constructor=j,p.fn[S].noConflict=function(){return p.fn[S]=C,j._jQueryInterface};var H="collapse",Y="bs.collapse",R="."+Y,z=p.fn[H],W={toggle:!0,parent:""},F={toggle:"boolean",parent:"(string|element)"},q={SHOW:"show"+R,SHOWN:"shown"+R,HIDE:"hide"+R,HIDDEN:"hidden"+R,CLICK_DATA_API:"click"+R+".data-api"},U="show",B="collapse",V="collapsing",G="collapsed",X='[data-toggle="collapse"]',$=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(X)),i=0,r=n.length;i<r;i++){var o=n[i],s=m.getSelectorFromElement(o),a=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(o))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=a.prototype;return e.toggle=function(){p(this._element).hasClass(U)?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!(this._isTransitioning||p(this._element).hasClass(U)||(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e){return"string"==typeof n._config.parent?e.getAttribute("data-parent")===n._config.parent:e.classList.contains(B)})).length&&(e=null),e&&(t=p(e).not(this._selector).data(Y))&&t._isTransitioning))){var i=p.Event(q.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){e&&(a._jQueryInterface.call(p(e).not(this._selector),"hide"),t||p(e).data(Y,null));var r=this._getDimension();p(this._element).removeClass(B).addClass(V),this._element.style[r]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(G).attr("aria-expanded",!0),this.setTransitioning(!0);var o="scroll"+(r[0].toUpperCase()+r.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(V).addClass(B).addClass(U),n._element.style[r]="",n.setTransitioning(!1),p(n._element).trigger(q.SHOWN)}).emulateTransitionEnd(s),this._element.style[r]=this._element[o]+"px"}}},e.hide=function(){var e=this;if(!this._isTransitioning&&p(this._element).hasClass(U)){var t=p.Event(q.HIDE);if(p(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(V).removeClass(B).removeClass(U);var i=this._triggerArray.length;if(0<i)for(var r=0;r<i;r++){var o=this._triggerArray[r],s=m.getSelectorFromElement(o);null!==s&&(p([].slice.call(document.querySelectorAll(s))).hasClass(U)||p(o).addClass(G).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e.setTransitioning(!1),p(e._element).removeClass(V).addClass(B).trigger(q.HIDDEN)}).emulateTransitionEnd(a)}}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){p.removeData(this._element,Y),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=l({},W,e)).toggle=Boolean(e.toggle),m.typeCheckConfig(H,e,F),e},e._getDimension=function(){return p(this._element).hasClass("width")?"width":"height"},e._getParent=function(){var e,n=this;m.isElement(this._config.parent)?(e=this._config.parent,void 0!==this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(e.querySelectorAll(t));return p(i).each(function(e,t){n._addAriaAndCollapsedClass(a._getTargetFromElement(t),[t])}),e},e._addAriaAndCollapsedClass=function(e,t){var n=p(e).hasClass(U);t.length&&p(t).toggleClass(G,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(e){var t=m.getSelectorFromElement(e);return t?document.querySelector(t):null},a._jQueryInterface=function(i){return this.each(function(){var e=p(this),t=e.data(Y),n=l({},W,e.data(),"object"==typeof i&&i?i:{});if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new a(this,n),e.data(Y,t)),"string"==typeof i){if(void 0===t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return W}}]),a}();p(document).on(q.CLICK_DATA_API,X,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=p(this),t=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(t));p(i).each(function(){var e=p(this),t=e.data(Y)?"toggle":n.data();$._jQueryInterface.call(e,t)})}),p.fn[H]=$._jQueryInterface,p.fn[H].Constructor=$,p.fn[H].noConflict=function(){return p.fn[H]=z,$._jQueryInterface};var K="dropdown",Q="bs.dropdown",Z="."+Q,J=".data-api",ee=p.fn[K],te=new RegExp("38|40|27"),ne={HIDE:"hide"+Z,HIDDEN:"hidden"+Z,SHOW:"show"+Z,SHOWN:"shown"+Z,CLICK:"click"+Z,CLICK_DATA_API:"click"+Z+J,KEYDOWN_DATA_API:"keydown"+Z+J,KEYUP_DATA_API:"keyup"+Z+J},ie="disabled",re="show",oe="dropdown-menu-right",se='[data-toggle="dropdown"]',ae=".dropdown-menu",le={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},ce={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},ue=function(){function c(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=c.prototype;return e.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(ie)){var e=c._getParentFromElement(this._element),t=p(this._menu).hasClass(re);if(c._clearMenus(),!t){var n={relatedTarget:this._element},i=p.Event(ne.SHOW,n);if(p(e).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if(void 0===d)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var r=this._element;"parent"===this._config.reference?r=e:m.isElement(this._config.reference)&&(r=this._config.reference,void 0!==this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(e).addClass("position-static"),this._popper=new d(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(e).closest(".navbar-nav").length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(re),p(e).toggleClass(re).trigger(p.Event(ne.SHOWN,n))}}}},e.show=function(){if(!(this._element.disabled||p(this._element).hasClass(ie)||p(this._menu).hasClass(re))){var e={relatedTarget:this._element},t=p.Event(ne.SHOW,e),n=c._getParentFromElement(this._element);p(n).trigger(t),t.isDefaultPrevented()||(p(this._menu).toggleClass(re),p(n).toggleClass(re).trigger(p.Event(ne.SHOWN,e)))}},e.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(ie)&&p(this._menu).hasClass(re)){var e={relatedTarget:this._element},t=p.Event(ne.HIDE,e),n=c._getParentFromElement(this._element);p(n).trigger(t),t.isDefaultPrevented()||(p(this._menu).toggleClass(re),p(n).toggleClass(re).trigger(p.Event(ne.HIDDEN,e)))}},e.dispose=function(){p.removeData(this._element,Q),p(this._element).off(Z),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;p(this._element).on(ne.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=l({},this.constructor.Default,p(this._element).data(),e),m.typeCheckConfig(K,e,this.constructor.DefaultType),e},e._getMenuElement=function(){if(!this._menu){var e=c._getParentFromElement(this._element);e&&(this._menu=e.querySelector(ae))}return this._menu},e._getPlacement=function(){var e=p(this._element.parentNode),t="bottom-start";return e.hasClass("dropup")?(t="top-start",p(this._menu).hasClass(oe)&&(t="top-end")):e.hasClass("dropright")?t="right-start":e.hasClass("dropleft")?t="left-start":p(this._menu).hasClass(oe)&&(t="bottom-end"),t},e._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),e},c._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(Q);if(e||(e=new c(this,"object"==typeof t?t:null),p(this).data(Q,e)),"string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},c._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var t=[].slice.call(document.querySelectorAll(se)),n=0,i=t.length;n<i;n++){var r=c._getParentFromElement(t[n]),o=p(t[n]).data(Q),s={relatedTarget:t[n]};if(e&&"click"===e.type&&(s.clickEvent=e),o){var a=o._menu;if(p(r).hasClass(re)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&p.contains(r,e.target))){var l=p.Event(ne.HIDE,s);p(r).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),t[n].setAttribute("aria-expanded","false"),p(a).removeClass(re),p(r).removeClass(re).trigger(p.Event(ne.HIDDEN,s)))}}}},c._getParentFromElement=function(e){var t,n=m.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},c._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||p(e.target).closest(ae).length)):te.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!p(this).hasClass(ie))){var t=c._getParentFromElement(this),n=p(t).hasClass(re);if(n&&(!n||27!==e.which&&32!==e.which)){var i=[].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"));if(0!==i.length){var r=i.indexOf(e.target);38===e.which&&0<r&&r--,40===e.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===e.which){var o=t.querySelector(se);p(o).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return le}},{key:"DefaultType",get:function(){return ce}}]),c}();p(document).on(ne.KEYDOWN_DATA_API,se,ue._dataApiKeydownHandler).on(ne.KEYDOWN_DATA_API,ae,ue._dataApiKeydownHandler).on(ne.CLICK_DATA_API+" "+ne.KEYUP_DATA_API,ue._clearMenus).on(ne.CLICK_DATA_API,se,function(e){e.preventDefault(),e.stopPropagation(),ue._jQueryInterface.call(p(this),"toggle")}).on(ne.CLICK_DATA_API,".dropdown form",function(e){e.stopPropagation()}),p.fn[K]=ue._jQueryInterface,p.fn[K].Constructor=ue,p.fn[K].noConflict=function(){return p.fn[K]=ee,ue._jQueryInterface};var de="modal",he="bs.modal",fe="."+he,pe=p.fn[de],me={backdrop:!0,keyboard:!0,focus:!0,show:!0},ge={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ve={HIDE:"hide"+fe,HIDDEN:"hidden"+fe,SHOW:"show"+fe,SHOWN:"shown"+fe,FOCUSIN:"focusin"+fe,RESIZE:"resize"+fe,CLICK_DISMISS:"click.dismiss"+fe,KEYDOWN_DISMISS:"keydown.dismiss"+fe,MOUSEUP_DISMISS:"mouseup.dismiss"+fe,MOUSEDOWN_DISMISS:"mousedown.dismiss"+fe,CLICK_DATA_API:"click"+fe+".data-api"},ye="modal-open",_e="fade",we="show",be=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",xe=".sticky-top",Se=function(){function r(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=r.prototype;return e.toggle=function(e){return this._isShown?this.hide():this.show(e)},e.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(_e)&&(this._isTransitioning=!0);var n=p.Event(ve.SHOW,{relatedTarget:e});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(ve.CLICK_DISMISS,'[data-dismiss="modal"]',function(e){return t.hide(e)}),p(this._dialog).on(ve.MOUSEDOWN_DISMISS,function(){p(t._element).one(ve.MOUSEUP_DISMISS,function(e){p(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},e.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(ve.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(_e);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(ve.FOCUSIN),p(this._element).removeClass(we),p(this._element).off(ve.CLICK_DISMISS),p(this._dialog).off(ve.MOUSEDOWN_DISMISS),i){var r=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(r)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return p(e).off(fe)}),p(document).off(ve.FOCUSIN),p.removeData(this._element,he),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(e){return e=l({},me,e),m.typeCheckConfig(de,e,ge),e},e._showElement=function(e){var t=this,n=p(this._element).hasClass(_e);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass("modal-dialog-scrollable")?this._dialog.querySelector(".modal-body").scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(we),this._config.focus&&this._enforceFocus();var i=p.Event(ve.SHOWN,{relatedTarget:e}),r=function(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,p(t._element).trigger(i)};if(n){var o=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,r).emulateTransitionEnd(o)}else r()},e._enforceFocus=function(){var t=this;p(document).off(ve.FOCUSIN).on(ve.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===p(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?p(this._element).on(ve.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||p(this._element).off(ve.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?p(window).on(ve.RESIZE,function(e){return t.handleUpdate(e)}):p(window).off(ve.RESIZE)},e._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(ye),e._resetAdjustments(),e._resetScrollbar(),p(e._element).trigger(ve.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(e){var t=this,n=p(this._element).hasClass(_e)?_e:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(ve.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&("static"===t._config.backdrop?t._element.focus():t.hide())}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(we),!e)return;if(!n)return void e();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,e).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(we);var r=function(){t._removeBackdrop(),e&&e()};if(p(this._element).hasClass(_e)){var o=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,r).emulateTransitionEnd(o)}else r()}else e&&e()},e._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(be)),t=[].slice.call(document.querySelectorAll(xe));p(e).each(function(e,t){var n=t.style.paddingRight,i=p(t).css("padding-right");p(t).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),p(t).each(function(e,t){var n=t.style.marginRight,i=p(t).css("margin-right");p(t).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(ye)},e._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(be));p(e).each(function(e,t){var n=p(t).data("padding-right");p(t).removeData("padding-right"),t.style.paddingRight=n||""});var t=[].slice.call(document.querySelectorAll(""+xe));p(t).each(function(e,t){var n=p(t).data("margin-right");void 0!==n&&p(t).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var e=document.createElement("div");e.className="modal-scrollbar-measure",document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},r._jQueryInterface=function(n,i){return this.each(function(){var e=p(this).data(he),t=l({},me,p(this).data(),"object"==typeof n&&n?n:{});if(e||(e=new r(this,t),p(this).data(he,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return me}}]),r}();p(document).on(ve.CLICK_DATA_API,'[data-toggle="modal"]',function(e){var t,n=this,i=m.getSelectorFromElement(this);i&&(t=document.querySelector(i));var r=p(t).data(he)?"toggle":l({},p(t).data(),p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var o=p(t).one(ve.SHOW,function(e){e.isDefaultPrevented()||o.one(ve.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});Se._jQueryInterface.call(p(t),r,this)}),p.fn[de]=Se._jQueryInterface,p.fn[de].Constructor=Se,p.fn[de].noConflict=function(){return p.fn[de]=pe,Se._jQueryInterface};var Te=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,ke=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Ce(e,s,t){if(0===e.length)return e;if(t&&"function"==typeof t)return t(e);for(var n=(new window.DOMParser).parseFromString(e,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(e,t){var n=l[e],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var r=[].slice.call(n.attributes),o=[].concat(s["*"]||[],s[i]||[]);r.forEach(function(e){(function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===Te.indexOf(n)||Boolean(e.nodeValue.match(Ee)||e.nodeValue.match(ke));for(var i=t.filter(function(e){return e instanceof RegExp}),r=0,o=i.length;r<o;r++)if(n.match(i[r]))return!0;return!1})(e,o)||n.removeAttribute(e.nodeName)})},r=0,o=l.length;r<o;r++)i(r);return n.body.innerHTML}var De="tooltip",Oe="bs.tooltip",Ne="."+Oe,Me=p.fn[De],Ae="bs-tooltip",Le=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Ie=["sanitize","whiteList","sanitizeFn"],Pe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},je={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},He={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]}},Ye="show",Re={HIDE:"hide"+Ne,HIDDEN:"hidden"+Ne,SHOW:"show"+Ne,SHOWN:"shown"+Ne,INSERTED:"inserted"+Ne,CLICK:"click"+Ne,FOCUSIN:"focusin"+Ne,FOCUSOUT:"focusout"+Ne,MOUSEENTER:"mouseenter"+Ne,MOUSELEAVE:"mouseleave"+Ne},ze="fade",We="show",Fe="hover",qe="focus",Ue=function(){function i(e,t){if(void 0===d)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var e=i.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=p(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(We))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var e=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(e);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var r=this.getTipElement(),o=m.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&p(r).addClass(ze);var s="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(r).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(r).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new d(this.element,r,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}}),p(r).addClass(We),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,p(t.element).trigger(t.constructor.Event.SHOWN),"out"===e&&t._leave(null,t)};if(p(this.tip).hasClass(ze)){var u=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(u)}else c()}},e.hide=function(e){var t=this,n=this.getTipElement(),i=p.Event(this.constructor.Event.HIDE),r=function(){t._hoverState!==Ye&&n.parentNode&&n.parentNode.removeChild(n),t._cleanTipClass(),t.element.removeAttribute("aria-describedby"),p(t.element).trigger(t.constructor.Event.HIDDEN),null!==t._popper&&t._popper.destroy(),e&&e()};if(p(this.element).trigger(i),!i.isDefaultPrevented()){if(p(n).removeClass(We),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger.click=!1,this._activeTrigger[qe]=!1,this._activeTrigger[Fe]=!1,p(this.tip).hasClass(ze)){var o=m.getTransitionDurationFromElement(n);p(n).one(m.TRANSITION_END,r).emulateTransitionEnd(o)}else r();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(e){p(this.getTipElement()).addClass(Ae+"-"+e)},e.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},e.setContent=function(){var e=this.getTipElement();this.setElementContent(p(e.querySelectorAll(".tooltip-inner")),this.getTitle()),p(e).removeClass(ze+" "+We)},e.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=Ce(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?p(t).parent().is(e)||e.empty().append(t):e.text(p(t).text())},e.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e||(e="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),e},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},e._getAttachment=function(e){return je[e.toUpperCase()]},e._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(e){return i.toggle(e)});else if("manual"!==e){var t=e===Fe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=e===Fe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(t,i.config.selector,function(e){return i._enter(e)}).on(n,i.config.selector,function(e){return i._leave(e)})}}),p(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==e)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?qe:Fe]=!0),p(t.getTipElement()).hasClass(We)||t._hoverState===Ye?t._hoverState=Ye:(clearTimeout(t._timeout),t._hoverState=Ye,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===Ye&&t.show()},t.config.delay.show):t.show())},e._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?qe:Fe]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState="out",t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){"out"===t._hoverState&&t.hide()},t.config.delay.hide):t.hide())},e._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},e._getConfig=function(e){var t=p(this.element).data();return Object.keys(t).forEach(function(e){-1!==Ie.indexOf(e)&&delete t[e]}),"number"==typeof(e=l({},this.constructor.Default,t,"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),m.typeCheckConfig(De,e,this.constructor.DefaultType),e.sanitize&&(e.template=Ce(e.template,e.whiteList,e.sanitizeFn)),e},e._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},e._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(Le);null!==t&&t.length&&e.removeClass(t.join(""))},e._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},e._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(p(e).removeClass(ze),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data(Oe),t="object"==typeof n&&n;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data(Oe,e)),"string"==typeof n)){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return He}},{key:"NAME",get:function(){return De}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return Ne}},{key:"DefaultType",get:function(){return Pe}}]),i}();p.fn[De]=Ue._jQueryInterface,p.fn[De].Constructor=Ue,p.fn[De].noConflict=function(){return p.fn[De]=Me,Ue._jQueryInterface};var Be="popover",Ve="bs.popover",Ge="."+Ve,Xe=p.fn[Be],$e="bs-popover",Ke=new RegExp("(^|\\s)"+$e+"\\S+","g"),Qe=l({},Ue.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Ue.DefaultType,{content:"(string|element|function)"}),Je={HIDE:"hide"+Ge,HIDDEN:"hidden"+Ge,SHOW:"show"+Ge,SHOWN:"shown"+Ge,INSERTED:"inserted"+Ge,CLICK:"click"+Ge,FOCUSIN:"focusin"+Ge,FOCUSOUT:"focusout"+Ge,MOUSEENTER:"mouseenter"+Ge,MOUSELEAVE:"mouseleave"+Ge},et=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),(t.prototype.constructor=t).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(e){p(this.getTipElement()).addClass($e+"-"+e)},r.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},r.setContent=function(){var e=p(this.getTipElement());this.setElementContent(e.find(".popover-header"),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(".popover-body"),t),e.removeClass("fade show")},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(Ke);null!==t&&0<t.length&&e.removeClass(t.join(""))},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data(Ve),t="object"==typeof n?n:null;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data(Ve,e)),"string"==typeof n)){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Qe}},{key:"NAME",get:function(){return Be}},{key:"DATA_KEY",get:function(){return Ve}},{key:"Event",get:function(){return Je}},{key:"EVENT_KEY",get:function(){return Ge}},{key:"DefaultType",get:function(){return Ze}}]),i}(Ue);p.fn[Be]=et._jQueryInterface,p.fn[Be].Constructor=et,p.fn[Be].noConflict=function(){return p.fn[Be]=Xe,et._jQueryInterface};var tt="scrollspy",nt="bs.scrollspy",it="."+nt,rt=p.fn[tt],ot={offset:10,method:"auto",target:""},st={offset:"number",method:"string",target:"(string|element)"},at={ACTIVATE:"activate"+it,SCROLL:"scroll"+it,LOAD_DATA_API:"load"+it+".data-api"},lt="active",ct=".nav, .list-group",ut=".nav-link",dt=".list-group-item",ht="position",ft=function(){function n(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+ut+","+this._config.target+" "+dt+","+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(at.SCROLL,function(e){return n._process(e)}),this.refresh(),this._process()}var e=n.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?"offset":ht,r="auto"===this._config.method?e:this._config.method,o=r===ht?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var t,n=m.getSelectorFromElement(e);if(n&&(t=document.querySelector(n)),t){var i=t.getBoundingClientRect();if(i.width||i.height)return[p(t)[r]().top+o,n]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){p.removeData(this._element,nt),p(this._scrollElement).off(it),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(e){if("string"!=typeof(e=l({},ot,"object"==typeof e&&e?e:{})).target){var t=p(e.target).attr("id");t||(t=m.getUID(tt),p(e.target).attr("id",t)),e.target="#"+t}return m.typeCheckConfig(tt,e,st),e},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),n<=e){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;)this._activeTarget!==this._targets[r]&&e>=this._offsets[r]&&(void 0===this._offsets[r+1]||e<this._offsets[r+1])&&this._activate(this._targets[r])}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),n=p([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass("dropdown-item")?(n.closest(".dropdown").find(".dropdown-toggle").addClass(lt),n.addClass(lt)):(n.addClass(lt),n.parents(ct).prev(ut+", "+dt).addClass(lt),n.parents(ct).prev(".nav-item").children(ut).addClass(lt)),p(this._scrollElement).trigger(at.ACTIVATE,{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(lt)}).forEach(function(e){return e.classList.remove(lt)})},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(nt);if(e||(e=new n(this,"object"==typeof t&&t),p(this).data(nt,e)),"string"==typeof t){if(void 0===e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ot}}]),n}();p(window).on(at.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),t=e.length;t--;){var n=p(e[t]);ft._jQueryInterface.call(n,n.data())}}),p.fn[tt]=ft._jQueryInterface,p.fn[tt].Constructor=ft,p.fn[tt].noConflict=function(){return p.fn[tt]=rt,ft._jQueryInterface};var pt="bs.tab",mt="."+pt,gt=p.fn.tab,vt={HIDE:"hide"+mt,HIDDEN:"hidden"+mt,SHOW:"show"+mt,SHOWN:"shown"+mt,CLICK_DATA_API:"click"+mt+".data-api"},yt="active",_t=".active",wt="> li > .active",bt=function(){function i(e){this._element=e}var e=i.prototype;return e.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(yt)||p(this._element).hasClass("disabled"))){var e,i,t=p(this._element).closest(".nav, .list-group")[0],r=m.getSelectorFromElement(this._element);if(t){var o="UL"===t.nodeName||"OL"===t.nodeName?wt:_t;i=(i=p.makeArray(p(t).find(o)))[i.length-1]}var s=p.Event(vt.HIDE,{relatedTarget:this._element}),a=p.Event(vt.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){r&&(e=document.querySelector(r)),this._activate(this._element,t);var l=function(){var e=p.Event(vt.HIDDEN,{relatedTarget:n._element}),t=p.Event(vt.SHOWN,{relatedTarget:i});p(i).trigger(e),p(n._element).trigger(t)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){p.removeData(this._element,pt),this._element=null},e._activate=function(e,t,n){var i=this,r=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?p(t).children(_t):p(t).find(wt))[0],o=n&&r&&p(r).hasClass("fade"),s=function(){return i._transitionComplete(e,r,n)};if(r&&o){var a=m.getTransitionDurationFromElement(r);p(r).removeClass("show").one(m.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},e._transitionComplete=function(e,t,n){if(t){p(t).removeClass(yt);var i=p(t.parentNode).find("> .dropdown-menu .active")[0];i&&p(i).removeClass(yt),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(p(e).addClass(yt),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),m.reflow(e),e.classList.contains("fade")&&e.classList.add("show"),e.parentNode&&p(e.parentNode).hasClass("dropdown-menu")){var r=p(e).closest(".dropdown")[0];if(r){var o=[].slice.call(r.querySelectorAll(".dropdown-toggle"));p(o).addClass(yt)}e.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(pt);if(t||(t=new i(this),e.data(pt,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();p(document).on(vt.CLICK_DATA_API,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(e){e.preventDefault(),bt._jQueryInterface.call(p(this),"show")}),p.fn.tab=bt._jQueryInterface,p.fn.tab.Constructor=bt,p.fn.tab.noConflict=function(){return p.fn.tab=gt,bt._jQueryInterface};var xt="toast",St="bs.toast",Tt="."+St,Et=p.fn[xt],kt={CLICK_DISMISS:"click.dismiss"+Tt,HIDE:"hide"+Tt,HIDDEN:"hidden"+Tt,SHOW:"show"+Tt,SHOWN:"shown"+Tt},Ct="show",Dt="showing",Ot={animation:"boolean",autohide:"boolean",delay:"number"},Nt={animation:!0,autohide:!0,delay:500},Mt=function(){function i(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var e=i.prototype;return e.show=function(){var e=this;p(this._element).trigger(kt.SHOW),this._config.animation&&this._element.classList.add("fade");var t=function(){e._element.classList.remove(Dt),e._element.classList.add(Ct),p(e._element).trigger(kt.SHOWN),e._config.autohide&&e.hide()};if(this._element.classList.remove("hide"),this._element.classList.add(Dt),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},e.hide=function(e){var t=this;this._element.classList.contains(Ct)&&(p(this._element).trigger(kt.HIDE),e?this._close():this._timeout=setTimeout(function(){t._close()},this._config.delay))},e.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Ct)&&this._element.classList.remove(Ct),p(this._element).off(kt.CLICK_DISMISS),p.removeData(this._element,St),this._element=null,this._config=null},e._getConfig=function(e){return e=l({},Nt,p(this._element).data(),"object"==typeof e&&e?e:{}),m.typeCheckConfig(xt,e,this.constructor.DefaultType),e},e._setListeners=function(){var e=this;p(this._element).on(kt.CLICK_DISMISS,'[data-dismiss="toast"]',function(){return e.hide(!0)})},e._close=function(){var e=this,t=function(){e._element.classList.add("hide"),p(e._element).trigger(kt.HIDDEN)};if(this._element.classList.remove(Ct),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,t).emulateTransitionEnd(n)}else t()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(St);if(t||(t=new i(this,"object"==typeof n&&n),e.data(St,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Ot}},{key:"Default",get:function(){return Nt}}]),i}();p.fn[xt]=Mt._jQueryInterface,p.fn[xt].Constructor=Mt,p.fn[xt].noConflict=function(){return p.fn[xt]=Et,Mt._jQueryInterface},function(){if(void 0===p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=p.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),e.Util=m,e.Alert=u,e.Button=x,e.Carousel=j,e.Collapse=$,e.Dropdown=ue,e.Modal=Se,e.Popover=et,e.Scrollspy=ft,e.Tab=bt,e.Toast=Mt,e.Tooltip=Ue,Object.defineProperty(e,"__esModule",{value:!0})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){"use strict";var k=!1,C=!1,D=0,O=2e3,N=0,M=e,A=document,L=window,I=M(L),P=[],j=L.requestAnimationFrame||L.webkitRequestAnimationFrame||L.mozRequestAnimationFrame||!1,H=L.cancelAnimationFrame||L.webkitCancelAnimationFrame||L.mozCancelAnimationFrame||!1;if(j)L.cancelAnimationFrame||(H=function(e){});else{var o=0;j=function(e,t){var n=(new Date).getTime(),i=Math.max(0,16-(n-o)),r=L.setTimeout(function(){e(n+i)},i);return o=n+i,r},H=function(e){L.clearTimeout(e)}}var t,n,i,Y=L.MutationObserver||L.WebKitMutationObserver||!1,R=Date.now||function(){return(new Date).getTime()},z={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"6px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:40,mousescrollstep:27,touchbehavior:!1,emulatetouch:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,preservenativescrolling:!0,railoffset:!1,railhoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:.3,rtlmode:"auto",cursordragontouch:!1,oneaxismousemode:"auto",scriptpath:(n=A.currentScript||!!(t=A.getElementsByTagName("script")).length&&t[t.length-1],i=n?n.src.split("?")[0]:"",0<i.split("/").length?i.split("/").slice(0,-1).join("/")+"/":""),preventmultitouchscrolling:!0,disablemutationobserver:!1,enableobserver:!0,scrollbarid:!1},W=!1,a=function(e,t){function n(){var e=_.doc.css(x.trstyle);return!(!e||"matrix"!=e.substr(0,6))&&e.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/)}function s(e,t,n){var i=e.css(t),r=parseFloat(i);if(isNaN(r)){var o=3==(r=h[i]||0)?n?_.win.outerHeight()-_.win.innerHeight():_.win.outerWidth()-_.win.innerWidth():1;return _.isie8&&r&&(r+=1),o?r:0}return r}function o(n,i,r,e){_._bind(n,i,function(e){var t={original:e=e||L.event,target:e.target||e.srcElement,type:"wheel",deltaMode:"MozMousePixelScroll"==e.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){return e.preventDefault?e.preventDefault():e.returnValue=!1,!1},stopImmediatePropagation:function(){e.stopImmediatePropagation?e.stopImmediatePropagation():e.cancelBubble=!0}};return"mousewheel"==i?(e.wheelDeltaX&&(t.deltaX=-.025*e.wheelDeltaX),e.wheelDeltaY&&(t.deltaY=-.025*e.wheelDeltaY),!t.deltaY&&!t.deltaX&&(t.deltaY=-.025*e.wheelDelta)):t.deltaY=e.detail,r.call(n,t)},e)}function a(e,t,n,i){_.scrollrunning||(_.newscrolly=_.getScrollTop(),_.newscrollx=_.getScrollLeft(),y=R());var r=R()-y;if(y=R(),350<r?S=1:S+=(2-S)/10,t=t*S|0,e=e*S|0){if(i)if(e<0){if(_.getScrollLeft()>=_.page.maxw)return!0}else if(_.getScrollLeft()<=0)return!0;var o=0<e?1:-1;v!==o&&(_.scrollmom&&_.scrollmom.stop(),_.newscrollx=_.getScrollLeft(),v=o),_.lastdeltax-=e}if(t){if(function(){var e=_.getScrollTop();if(t<0){if(e>=_.page.maxh)return!0}else if(e<=0)return!0}()){if(b.nativeparentscrolling&&n&&!_.ispage&&!_.zoomactive)return!0;var s=_.view.h>>1;t=_.newscrolly<-s?(_.newscrolly=-s,-1):_.newscrolly>_.page.maxh+s?(_.newscrolly=_.page.maxh+s,1):0}var a=0<t?1:-1;g!==a&&(_.scrollmom&&_.scrollmom.stop(),_.newscrolly=_.getScrollTop(),g=a),_.lastdeltay-=t}(t||e)&&_.synched("relativexy",function(){var e=_.lastdeltay+_.newscrolly;_.lastdeltay=0;var t=_.lastdeltax+_.newscrollx;_.lastdeltax=0,_.rail.drag||_.doScrollPos(t,e)})}function r(e,t,n){var i,r;return!(n||!T)||(0===e.deltaMode?(i=-e.deltaX*(b.mousescrollstep/54)|0,r=-e.deltaY*(b.mousescrollstep/54)|0):1===e.deltaMode&&(i=-e.deltaX*b.mousescrollstep*50/80|0,r=-e.deltaY*b.mousescrollstep*50/80|0),t&&b.oneaxismousemode&&0===i&&r&&(i=r,r=0,n&&(i<0?_.getScrollLeft()>=_.page.maxw:_.getScrollLeft()<=0)&&(r=i,i=0)),_.isrtlmode&&(i=-i),a(i,r,n,!0)?void(n&&(T=!0)):(T=!1,e.stopImmediatePropagation(),e.preventDefault()))}var _=this;this.version="3.7.6",this.name="nicescroll",this.me=t;var w=M("body"),b=this.opt={doc:w,win:!1};if(M.extend(b,z),b.snapbackspeed=80,e)for(var i in b)void 0!==e[i]&&(b[i]=e[i]);if(b.disablemutationobserver&&(Y=!1),this.doc=b.doc,this.iddoc=this.doc&&this.doc[0]&&this.doc[0].id||"",this.ispage=/^BODY|HTML/.test(b.win?b.win[0].nodeName:this.doc[0].nodeName),this.haswrapper=!1!==b.win,this.win=b.win||(this.ispage?I:this.doc),this.docscroll=this.ispage&&!this.haswrapper?I:this.win,this.body=w,this.viewport=!1,this.isfixed=!1,this.iframe=!1,this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName,this.istextarea="TEXTAREA"==this.win[0].nodeName,this.forcescreen=!1,this.canshowonmouseevent="scroll"!=b.autohidemode,this.onmousedown=!1,this.onmouseup=!1,this.onmousemove=!1,this.onmousewheel=!1,this.onkeypress=!1,this.ongesturezoom=!1,this.onclick=!1,this.onscrollstart=!1,this.onscrollend=!1,this.onscrollcancel=!1,this.onzoomin=!1,this.onzoomout=!1,this.view=!1,this.page=!1,this.scroll={x:0,y:0},this.scrollratio={x:0,y:0},this.cursorheight=20,this.scrollvaluemax=0,"auto"==b.rtlmode){var l=this.win[0]==L?this.body:this.win,c=l.css("writing-mode")||l.css("-webkit-writing-mode")||l.css("-ms-writing-mode")||l.css("-moz-writing-mode");"horizontal-tb"==c||"lr-tb"==c||""===c?(this.isrtlmode="rtl"==l.css("direction"),this.isvertical=!1):(this.isrtlmode="vertical-rl"==c||"tb"==c||"tb-rl"==c||"rl-tb"==c,this.isvertical="vertical-rl"==c||"tb"==c||"tb-rl"==c)}else this.isrtlmode=!0===b.rtlmode,this.isvertical=!1;if(this.scrollrunning=!1,this.scrollmom=!1,this.observer=!1,this.observerremover=!1,(this.observerbody=!1)!==b.scrollbarid)this.id=b.scrollbarid;else for(;this.id="ascrail"+O++,A.getElementById(this.id););this.rail=!1,this.cursor=!1,this.cursorfreezed=!1,this.selectiondrag=!1,this.zoom=!1,this.zoomactive=!1,this.hasfocus=!1,this.hasmousefocus=!1,this.railslocked=!1,this.locked=!1,this.hidden=!1,this.cursoractive=!0,this.wheelprevented=!1,this.overflowx=b.overflowx,this.overflowy=b.overflowy,this.nativescrollingarea=!1,this.checkarea=0,this.events=[],this.saved={},this.delaylist={},this.synclist={},this.lastdeltax=0,this.lastdeltay=0,this.detected=function(){if(W)return W;var e=A.createElement("DIV"),o=e.style,t=navigator.userAgent,n=navigator.platform,s={};return s.haspointerlock="pointerLockElement"in A||"webkitPointerLockElement"in A||"mozPointerLockElement"in A,s.isopera="opera"in L,s.isopera12=s.isopera&&"getUserMedia"in navigator,s.isoperamini="[object OperaMini]"===Object.prototype.toString.call(L.operamini),s.isie="all"in A&&"attachEvent"in e&&!s.isopera,s.isieold=s.isie&&!("msInterpolationMode"in o),s.isie7=s.isie&&!s.isieold&&(!("documentMode"in A)||7===A.documentMode),s.isie8=s.isie&&"documentMode"in A&&8===A.documentMode,s.isie9=s.isie&&"performance"in L&&9===A.documentMode,s.isie10=s.isie&&"performance"in L&&10===A.documentMode,s.isie11="msRequestFullscreen"in e&&11<=A.documentMode,s.ismsedge="msCredentials"in L,s.ismozilla="MozAppearance"in o,s.iswebkit=!s.ismsedge&&"WebkitAppearance"in o,s.ischrome=s.iswebkit&&"chrome"in L,s.ischrome38=s.ischrome&&"touchAction"in o,s.ischrome22=!s.ischrome38&&s.ischrome&&s.haspointerlock,s.ischrome26=!s.ischrome38&&s.ischrome&&"transition"in o,s.cantouch="ontouchstart"in A.documentElement||"ontouchstart"in L,s.hasw3ctouch=!!L.PointerEvent&&(0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints),s.hasmstouch=!s.hasw3ctouch&&(L.MSPointerEvent||!1),s.ismac=/^mac$/i.test(n),s.isios=s.cantouch&&/iphone|ipad|ipod/i.test(n),s.isios4=s.isios&&!("seal"in Object),s.isios7=s.isios&&"webkitHidden"in A,s.isios8=s.isios&&"hidden"in A,s.isios10=s.isios&&L.Proxy,s.isandroid=/android/i.test(t),s.haseventlistener="addEventListener"in e,s.trstyle=!1,s.hastransform=!1,s.hastranslate3d=!1,s.transitionstyle=!1,s.hastransition=!1,s.transitionend=!1,s.trstyle="transform",s.hastransform="transform"in o||function(){for(var e=["msTransform","webkitTransform","MozTransform","OTransform"],t=0,n=e.length;t<n;t++)if(void 0!==o[e[t]]){s.trstyle=e[t];break}s.hastransform=!!s.trstyle}(),s.hastransform&&(o[s.trstyle]="translate3d(1px,2px,3px)",s.hastranslate3d=/translate3d/.test(o[s.trstyle])),s.transitionstyle="transition",s.prefixstyle="",s.transitionend="transitionend",s.hastransition="transition"in o||function(){s.transitionend=!1;for(var e=["webkitTransition","msTransition","MozTransition","OTransition","OTransition","KhtmlTransition"],t=["-webkit-","-ms-","-moz-","-o-","-o","-khtml-"],n=["webkitTransitionEnd","msTransitionEnd","transitionend","otransitionend","oTransitionEnd","KhtmlTransitionEnd"],i=0,r=e.length;i<r;i++)if(e[i]in o){s.transitionstyle=e[i],s.prefixstyle=t[i],s.transitionend=n[i];break}s.ischrome26&&(s.prefixstyle=t[1]),s.hastransition=s.transitionstyle}(),s.cursorgrabvalue=function(){var e=["grab","-webkit-grab","-moz-grab"];(s.ischrome&&!s.ischrome38||s.isie)&&(e=[]);for(var t=0,n=e.length;t<n;t++){var i=e[t];if(o.cursor=i,o.cursor==i)return i}return"url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize"}(),s.hasmousecapture="setCapture"in e,s.hasMutationObserver=!1!==Y,e=null,W=s}();var x=M.extend({},this.detected);this.canhwscroll=x.hastransform&&b.hwacceleration,this.ishwscroll=this.canhwscroll&&_.haswrapper,this.isrtlmode?this.isvertical?this.hasreversehr=!(x.iswebkit||x.isie||x.isie11):this.hasreversehr=!(x.iswebkit||x.isie&&!x.isie10&&!x.isie11):this.hasreversehr=!1,this.istouchcapable=!1,(x.cantouch||!x.hasw3ctouch&&!x.hasmstouch)&&(!x.cantouch||x.isios||x.isandroid||!x.iswebkit&&!x.ismozilla)||(this.istouchcapable=!0),b.enablemouselockapi||(x.hasmousecapture=!1,x.haspointerlock=!1),this.debounced=function(e,t,n){_&&(_.delaylist[e]||(_.delaylist[e]={h:j(function(){_.delaylist[e].fn.call(_),_.delaylist[e]=!1},n)},t.call(_)),_.delaylist[e].fn=t)},this.synched=function(e,t){_.synclist[e]?_.synclist[e]=t:(_.synclist[e]=t,j(function(){_&&(_.synclist[e]&&_.synclist[e].call(_),_.synclist[e]=null)}))},this.unsynched=function(e){_.synclist[e]&&(_.synclist[e]=!1)},this.css=function(e,t){for(var n in t)_.saved.css.push([e,n,e.css(n)]),e.css(n,t[n])},this.scrollTop=function(e){return void 0===e?_.getScrollTop():_.setScrollTop(e)},this.scrollLeft=function(e){return void 0===e?_.getScrollLeft():_.setScrollLeft(e)};var u=function(e,t,n,i,r,o,s){this.st=e,this.ed=t,this.spd=n,this.p1=i||0,this.p2=r||1,this.p3=o||0,this.p4=s||1,this.ts=R(),this.df=t-e};if(u.prototype={B2:function(e){return 3*(1-e)*(1-e)*e},B3:function(e){return 3*(1-e)*e*e},B4:function(e){return e*e*e},getPos:function(){return(R()-this.ts)/this.spd},getNow:function(){var e=(R()-this.ts)/this.spd,t=this.B2(e)+this.B3(e)+this.B4(e);return 1<=e?this.ed:this.st+this.df*t|0},update:function(e,t){return this.st=this.getNow(),this.ed=e,this.spd=t,this.ts=R(),this.df=this.ed-this.st,this}},this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"},x.hastranslate3d&&x.isios&&this.doc.css("-webkit-backface-visibility","hidden"),this.getScrollTop=function(e){if(!e){var t=n();if(t)return 16==t.length?-t[13]:-t[5];if(_.timerscroll&&_.timerscroll.bz)return _.timerscroll.bz.getNow()}return _.doc.translate.y},this.getScrollLeft=function(e){if(!e){var t=n();if(t)return 16==t.length?-t[12]:-t[4];if(_.timerscroll&&_.timerscroll.bh)return _.timerscroll.bh.getNow()}return _.doc.translate.x},this.notifyScrollEvent=function(e){var t=A.createEvent("UIEvents");t.initUIEvent("scroll",!1,!1,L,1),t.niceevent=!0,e.dispatchEvent(t)};var d=this.isrtlmode?1:-1;x.hastranslate3d&&b.enabletranslate3d?(this.setScrollTop=function(e,t){_.doc.translate.y=e,_.doc.translate.ty=-1*e+"px",_.doc.css(x.trstyle,"translate3d("+_.doc.translate.tx+","+_.doc.translate.ty+",0)"),t||_.notifyScrollEvent(_.win[0])},this.setScrollLeft=function(e,t){_.doc.translate.x=e,_.doc.translate.tx=e*d+"px",_.doc.css(x.trstyle,"translate3d("+_.doc.translate.tx+","+_.doc.translate.ty+",0)"),t||_.notifyScrollEvent(_.win[0])}):(this.setScrollTop=function(e,t){_.doc.translate.y=e,_.doc.translate.ty=-1*e+"px",_.doc.css(x.trstyle,"translate("+_.doc.translate.tx+","+_.doc.translate.ty+")"),t||_.notifyScrollEvent(_.win[0])},this.setScrollLeft=function(e,t){_.doc.translate.x=e,_.doc.translate.tx=e*d+"px",_.doc.css(x.trstyle,"translate("+_.doc.translate.tx+","+_.doc.translate.ty+")"),t||_.notifyScrollEvent(_.win[0])})}else this.getScrollTop=function(){return _.docscroll.scrollTop()},this.setScrollTop=function(e){_.docscroll.scrollTop(e)},this.getScrollLeft=function(){return _.hasreversehr?_.detected.ismozilla?_.page.maxw-Math.abs(_.docscroll.scrollLeft()):_.page.maxw-_.docscroll.scrollLeft():_.docscroll.scrollLeft()},this.setScrollLeft=function(e){return setTimeout(function(){if(_)return _.hasreversehr&&(e=_.detected.ismozilla?-(_.page.maxw-e):_.page.maxw-e),_.docscroll.scrollLeft(e)},1)};this.getTarget=function(e){return!!e&&(e.target?e.target:!!e.srcElement&&e.srcElement)},this.hasParent=function(e,t){if(!e)return!1;for(var n=e.target||e.srcElement||e||!1;n&&n.id!=t;)n=n.parentNode||!1;return!1!==n};var h={thin:1,medium:3,thick:5};this.getDocumentScrollOffset=function(){return{top:L.pageYOffset||A.documentElement.scrollTop,left:L.pageXOffset||A.documentElement.scrollLeft}},this.getOffset=function(){if(_.isfixed){var e=_.win.offset(),t=_.getDocumentScrollOffset();return e.top-=t.top,e.left-=t.left,e}var n=_.win.offset();if(!_.viewport)return n;var i=_.viewport.offset();return{top:n.top-i.top,left:n.left-i.left}},this.updateScrollBar=function(e){var t,n;if(_.ishwscroll)_.rail.css({height:_.win.innerHeight()-(b.railpadding.top+b.railpadding.bottom)}),_.railh&&_.railh.css({width:_.win.innerWidth()-(b.railpadding.left+b.railpadding.right)});else{var i=_.getOffset();if((t={top:i.top,left:i.left-(b.railpadding.left+b.railpadding.right)}).top+=s(_.win,"border-top-width",!0),t.left+=_.rail.align?_.win.outerWidth()-s(_.win,"border-right-width")-_.rail.width:s(_.win,"border-left-width"),(n=b.railoffset)&&(n.top&&(t.top+=n.top),n.left&&(t.left+=n.left)),_.railslocked||_.rail.css({top:t.top,left:t.left,height:(e?e.h:_.win.innerHeight())-(b.railpadding.top+b.railpadding.bottom)}),_.zoom&&_.zoom.css({top:t.top+1,left:1==_.rail.align?t.left-20:t.left+_.rail.width+4}),_.railh&&!_.railslocked){t={top:i.top,left:i.left},(n=b.railhoffset)&&(n.top&&(t.top+=n.top),n.left&&(t.left+=n.left));var r=_.railh.align?t.top+s(_.win,"border-top-width",!0)+_.win.innerHeight()-_.railh.height:t.top+s(_.win,"border-top-width",!0),o=t.left+s(_.win,"border-left-width");_.railh.css({top:r-(b.railpadding.top+b.railpadding.bottom),left:o,width:_.railh.width})}}},this.doRailClick=function(e,t,n){var i,r,o,s;_.railslocked||(_.cancelEvent(e),"pageY"in e||(e.pageX=e.clientX+A.documentElement.scrollLeft,e.pageY=e.clientY+A.documentElement.scrollTop),t?(i=n?_.doScrollLeft:_.doScrollTop,o=n?(e.pageX-_.railh.offset().left-_.cursorwidth/2)*_.scrollratio.x:(e.pageY-_.rail.offset().top-_.cursorheight/2)*_.scrollratio.y,_.unsynched("relativexy"),i(0|o)):(i=n?_.doScrollLeftBy:_.doScrollBy,o=n?_.scroll.x:_.scroll.y,s=n?e.pageX-_.railh.offset().left:e.pageY-_.rail.offset().top,r=n?_.view.w:_.view.h,i(s<=o?r:-r)))},_.newscrolly=_.newscrollx=0,_.hasanimationframe="requestAnimationFrame"in L,_.hascancelanimationframe="cancelAnimationFrame"in L,_.hasborderbox=!1,this.init=function(){if(_.saved.css=[],x.isoperamini)return!0;if(x.isandroid&&!("hidden"in A))return!0;b.emulatetouch=b.emulatetouch||b.touchbehavior,_.hasborderbox=L.getComputedStyle&&"border-box"===L.getComputedStyle(A.body)["box-sizing"];var n={"overflow-y":"hidden"};if((x.isie11||x.isie10)&&(n["-ms-overflow-style"]="none"),_.ishwscroll&&(this.doc.css(x.transitionstyle,x.prefixstyle+"transform 0ms ease-out"),x.transitionend&&_.bind(_.doc,x.transitionend,_.onScrollTransitionEnd,!1)),_.zindex="auto",_.ispage||"auto"!=b.zindex?_.zindex=b.zindex:_.zindex=function(){var e=_.win;if("zIndex"in e)return e.zIndex();for(;0<e.length;){if(9==e[0].nodeType)return!1;var t=e.css("zIndex");if(!isNaN(t)&&0!==t)return parseInt(t);e=e.parent()}return!1}()||"auto",!_.ispage&&"auto"!=_.zindex&&_.zindex>N&&(N=_.zindex),_.isie&&0===_.zindex&&"auto"==b.zindex&&(_.zindex="auto"),!_.ispage||!x.isieold){var e=_.docscroll;_.ispage&&(e=_.haswrapper?_.win:_.doc),_.css(e,n),_.ispage&&(x.isie11||x.isie)&&_.css(M("html"),n),!x.isios||_.ispage||_.haswrapper||_.css(w,{"-webkit-overflow-scrolling":"touch"});var t=M(A.createElement("div"));t.css({position:"relative",top:0,float:"right",width:b.cursorwidth,height:0,"background-color":b.cursorcolor,border:b.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.cursorborderradius,"-moz-border-radius":b.cursorborderradius,"border-radius":b.cursorborderradius}),t.addClass("nicescroll-cursors"),_.cursor=t;var i=M(A.createElement("div"));i.attr("id",_.id),i.addClass("nicescroll-rails nicescroll-rails-vr");var r,o,s=["left","right","top","bottom"];for(var a in s)o=s[a],(r=b.railpadding[o]||0)&&i.css("padding-"+o,r+"px");i.append(t),i.width=Math.max(parseFloat(b.cursorwidth),t.outerWidth()),i.css({width:i.width+"px",zIndex:_.zindex,background:b.background,cursor:"default"}),i.visibility=!0,i.scrollable=!0,i.align="left"==b.railalign?0:1,_.rail=i;var l,c=_.rail.drag=!1;if(!b.boxzoom||_.ispage||x.isieold||(c=A.createElement("div"),_.bind(c,"click",_.doZoom),_.bind(c,"mouseenter",function(){_.zoom.css("opacity",b.cursoropacitymax)}),_.bind(c,"mouseleave",function(){_.zoom.css("opacity",b.cursoropacitymin)}),_.zoom=M(c),_.zoom.css({cursor:"pointer",zIndex:_.zindex,backgroundImage:"url("+b.scriptpath+"zoomico.png)",height:18,width:18,backgroundPosition:"0 0"}),b.dblclickzoom&&_.bind(_.win,"dblclick",_.doZoom),x.cantouch&&b.gesturezoom&&(_.ongesturezoom=function(e){return 1.5<e.scale&&_.doZoomIn(e),e.scale<.8&&_.doZoomOut(e),_.cancelEvent(e)},_.bind(_.win,"gestureend",_.ongesturezoom))),_.railh=!1,b.horizrailenabled&&(_.css(e,{overflowX:"hidden"}),(t=M(A.createElement("div"))).css({position:"absolute",top:0,height:b.cursorwidth,width:0,backgroundColor:b.cursorcolor,border:b.cursorborder,backgroundClip:"padding-box","-webkit-border-radius":b.cursorborderradius,"-moz-border-radius":b.cursorborderradius,"border-radius":b.cursorborderradius}),x.isieold&&t.css("overflow","hidden"),t.addClass("nicescroll-cursors"),_.cursorh=t,(l=M(A.createElement("div"))).attr("id",_.id+"-hr"),l.addClass("nicescroll-rails nicescroll-rails-hr"),l.height=Math.max(parseFloat(b.cursorwidth),t.outerHeight()),l.css({height:l.height+"px",zIndex:_.zindex,background:b.background}),l.append(t),l.visibility=!0,l.scrollable=!0,l.align="top"==b.railvalign?0:1,_.railh=l,_.railh.drag=!1),_.ispage)i.css({position:"fixed",top:0,height:"100%"}),i.css(i.align?{right:0}:{left:0}),_.body.append(i),_.railh&&(l.css({position:"fixed",left:0,width:"100%"}),l.css(l.align?{bottom:0}:{top:0}),_.body.append(l));else{if(_.ishwscroll){"static"==_.win.css("position")&&_.css(_.win,{position:"relative"});var u="HTML"==_.win[0].nodeName?_.body:_.win;M(u).scrollTop(0).scrollLeft(0),_.zoom&&(_.zoom.css({position:"absolute",top:1,right:0,"margin-right":i.width+4}),u.append(_.zoom)),i.css({position:"absolute",top:0}),i.css(i.align?{right:0}:{left:0}),u.append(i),l&&(l.css({position:"absolute",left:0,bottom:0}),l.css(l.align?{bottom:0}:{top:0}),u.append(l))}else{_.isfixed="fixed"==_.win.css("position");var d=_.isfixed?"fixed":"absolute";_.isfixed||(_.viewport=_.getViewport(_.win[0])),_.viewport&&(_.body=_.viewport,/fixed|absolute/.test(_.viewport.css("position"))||_.css(_.viewport,{position:"relative"})),i.css({position:d}),_.zoom&&_.zoom.css({position:d}),_.updateScrollBar(),_.body.append(i),_.zoom&&_.body.append(_.zoom),_.railh&&(l.css({position:d}),_.body.append(l))}x.isios&&_.css(_.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),b.disableoutline&&(x.isie&&_.win.attr("hideFocus","true"),x.iswebkit&&_.win.css("outline","none"))}if(!1===b.autohidemode?(_.autohidedom=!1,_.rail.css({opacity:b.cursoropacitymax}),_.railh&&_.railh.css({opacity:b.cursoropacitymax})):!0===b.autohidemode||"leave"===b.autohidemode?(_.autohidedom=M().add(_.rail),x.isie8&&(_.autohidedom=_.autohidedom.add(_.cursor)),_.railh&&(_.autohidedom=_.autohidedom.add(_.railh)),_.railh&&x.isie8&&(_.autohidedom=_.autohidedom.add(_.cursorh))):"scroll"==b.autohidemode?(_.autohidedom=M().add(_.rail),_.railh&&(_.autohidedom=_.autohidedom.add(_.railh))):"cursor"==b.autohidemode?(_.autohidedom=M().add(_.cursor),_.railh&&(_.autohidedom=_.autohidedom.add(_.cursorh))):"hidden"==b.autohidemode&&(_.autohidedom=!1,_.hide(),_.railslocked=!1),x.cantouch||_.istouchcapable||b.emulatetouch||x.hasmstouch){_.scrollmom=new F(_),_.ontouchstart=function(e){if(_.locked)return!1;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;if(_.hasmoving=!1,_.scrollmom.timer&&(_.triggerScrollEnd(),_.scrollmom.stop()),!_.railslocked){var t=_.getTarget(e);if(t&&/INPUT/i.test(t.nodeName)&&/range/i.test(t.type))return _.stopPropagation(e);var n="mousedown"===e.type;if(!("clientX"in e)&&"changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),_.forcescreen){var i=e;(e={original:e.original?e.original:e}).clientX=i.screenX,e.clientY=i.screenY}if(_.rail.drag={x:e.clientX,y:e.clientY,sx:_.scroll.x,sy:_.scroll.y,st:_.getScrollTop(),sl:_.getScrollLeft(),pt:2,dl:!1,tg:t},_.ispage||!b.directionlockdeadzone)_.rail.drag.dl="f";else{var r=I.width(),o=I.height(),s=_.getContentSize(),a=s.h-o,l=s.w-r;_.rail.scrollable&&!_.railh.scrollable?_.rail.drag.ck=0<a&&"v":!_.rail.scrollable&&_.railh.scrollable?_.rail.drag.ck=0<l&&"h":_.rail.drag.ck=!1}if(b.emulatetouch&&_.isiframe&&x.isie){var c=_.win.position();_.rail.drag.x+=c.left,_.rail.drag.y+=c.top}if(_.hasmoving=!1,_.lastmouseup=!1,_.scrollmom.reset(e.clientX,e.clientY),t&&n){if(!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(t.nodeName))return x.hasmousecapture&&t.setCapture(),b.emulatetouch?(t.onclick&&!t._onclick&&(t._onclick=t.onclick,t.onclick=function(e){if(_.hasmoving)return!1;t._onclick.call(this,e)}),_.cancelEvent(e)):_.stopPropagation(e);/SUBMIT|CANCEL|BUTTON/i.test(M(t).attr("type"))&&(_.preventclick={tg:t,click:!1})}}},_.ontouchend=function(e){if(!_.rail.drag)return!0;if(2==_.rail.drag.pt){if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!1;_.rail.drag=!1;var t="mouseup"===e.type;if(_.hasmoving&&(_.scrollmom.doMomentum(),_.lastmouseup=!0,_.hideCursor(),x.hasmousecapture&&A.releaseCapture(),t))return _.cancelEvent(e)}else if(1==_.rail.drag.pt)return _.onmouseup(e)};var p=b.emulatetouch&&_.isiframe&&!x.hasmousecapture,m=.3*b.directionlockdeadzone|0;_.ontouchmove=function(e,t){if(!_.rail.drag)return!0;if(e.targetTouches&&b.preventmultitouchscrolling&&1<e.targetTouches.length)return!0;if(e.pointerType&&("mouse"===e.pointerType||e.pointerType===e.MSPOINTER_TYPE_MOUSE))return!0;if(2!=_.rail.drag.pt)return 1==_.rail.drag.pt?_.onmousemove(e):void 0;var n,i;if("changedTouches"in e&&(e.clientX=e.changedTouches[0].clientX,e.clientY=e.changedTouches[0].clientY),i=n=0,p&&!t){var r=_.win.position();i=-r.left,n=-r.top}var o=e.clientY+n,s=o-_.rail.drag.y,a=e.clientX+i,l=a-_.rail.drag.x,c=_.rail.drag.st-s;if(_.ishwscroll&&b.bouncescroll)c<0?c=Math.round(c/2):c>_.page.maxh&&(c=_.page.maxh+Math.round((c-_.page.maxh)/2));else if(c<0?o=c=0:c>_.page.maxh&&(c=_.page.maxh,o=0),0===o&&!_.hasmoving)return _.ispage||(_.rail.drag=!1),!0;var u=_.getScrollLeft();if(_.railh&&_.railh.scrollable&&(u=_.isrtlmode?l-_.rail.drag.sl:_.rail.drag.sl-l,_.ishwscroll&&b.bouncescroll?u<0?u=Math.round(u/2):u>_.page.maxw&&(u=_.page.maxw+Math.round((u-_.page.maxw)/2)):(u<0&&(a=u=0),u>_.page.maxw&&(u=_.page.maxw,a=0))),!_.hasmoving){if(_.rail.drag.y===e.clientY&&_.rail.drag.x===e.clientX)return _.cancelEvent(e);var d=Math.abs(s),h=Math.abs(l),f=b.directionlockdeadzone;if(_.rail.drag.ck?"v"==_.rail.drag.ck?f<h&&d<=m?_.rail.drag=!1:f<d&&(_.rail.drag.dl="v"):"h"==_.rail.drag.ck&&(f<d&&h<=m?_.rail.drag=!1:f<h&&(_.rail.drag.dl="h")):f<d&&f<h?_.rail.drag.dl="f":f<d?_.rail.drag.dl=m<h?"f":"v":f<h&&(_.rail.drag.dl=m<d?"f":"h"),!_.rail.drag.dl)return _.cancelEvent(e);_.triggerScrollStart(e.clientX,e.clientY,0,0,0),_.hasmoving=!0}return _.preventclick&&!_.preventclick.click&&(_.preventclick.click=_.preventclick.tg.onclick||!1,_.preventclick.tg.onclick=_.onpreventclick),_.rail.drag.dl&&("v"==_.rail.drag.dl?u=_.rail.drag.sl:"h"==_.rail.drag.dl&&(c=_.rail.drag.st)),_.synched("touchmove",function(){_.rail.drag&&2==_.rail.drag.pt&&(_.prepareTransition&&_.resetTransition(),_.rail.scrollable&&_.setScrollTop(c),_.scrollmom.update(a,o),_.railh&&_.railh.scrollable?(_.setScrollLeft(u),_.showCursor(c,u)):_.showCursor(c),x.isie10&&A.selection.clear())}),_.cancelEvent(e)},_.ontouchstartCursor=function(e,t){if(!_.rail.drag||3==_.rail.drag.pt){if(_.locked)return _.cancelEvent(e);_.cancelScroll(),_.rail.drag={x:e.touches[0].clientX,y:e.touches[0].clientY,sx:_.scroll.x,sy:_.scroll.y,pt:3,hr:!!t};var n=_.getTarget(e);return!_.ispage&&x.hasmousecapture&&n.setCapture(),_.isiframe&&!x.hasmousecapture&&(_.saved.csspointerevents=_.doc.css("pointer-events"),_.css(_.doc,{"pointer-events":"none"})),_.cancelEvent(e)}},_.ontouchendCursor=function(e){if(_.rail.drag){if(x.hasmousecapture&&A.releaseCapture(),_.isiframe&&!x.hasmousecapture&&_.doc.css("pointer-events",_.saved.csspointerevents),3!=_.rail.drag.pt)return;return _.rail.drag=!1,_.cancelEvent(e)}},_.ontouchmoveCursor=function(e){if(_.rail.drag){if(3!=_.rail.drag.pt)return;if(_.cursorfreezed=!0,_.rail.drag.hr){_.scroll.x=_.rail.drag.sx+(e.touches[0].clientX-_.rail.drag.x),_.scroll.x<0&&(_.scroll.x=0);var t=_.scrollvaluemaxw;_.scroll.x>t&&(_.scroll.x=t)}else{_.scroll.y=_.rail.drag.sy+(e.touches[0].clientY-_.rail.drag.y),_.scroll.y<0&&(_.scroll.y=0);var n=_.scrollvaluemax;_.scroll.y>n&&(_.scroll.y=n)}return _.synched("touchmove",function(){_.rail.drag&&3==_.rail.drag.pt&&(_.showCursor(),_.rail.drag.hr?_.doScrollLeft(Math.round(_.scroll.x*_.scrollratio.x),b.cursordragspeed):_.doScrollTop(Math.round(_.scroll.y*_.scrollratio.y),b.cursordragspeed))}),_.cancelEvent(e)}}}if(_.onmousedown=function(e,t){if(!_.rail.drag||1==_.rail.drag.pt){if(_.railslocked)return _.cancelEvent(e);_.cancelScroll(),_.rail.drag={x:e.clientX,y:e.clientY,sx:_.scroll.x,sy:_.scroll.y,pt:1,hr:t||!1};var n=_.getTarget(e);return x.hasmousecapture&&n.setCapture(),_.isiframe&&!x.hasmousecapture&&(_.saved.csspointerevents=_.doc.css("pointer-events"),_.css(_.doc,{"pointer-events":"none"})),_.hasmoving=!1,_.cancelEvent(e)}},_.onmouseup=function(e){if(_.rail.drag)return 1!=_.rail.drag.pt||(x.hasmousecapture&&A.releaseCapture(),_.isiframe&&!x.hasmousecapture&&_.doc.css("pointer-events",_.saved.csspointerevents),_.rail.drag=!1,_.cursorfreezed=!1,_.hasmoving&&_.triggerScrollEnd(),_.cancelEvent(e))},_.onmousemove=function(e){if(_.rail.drag){if(1!==_.rail.drag.pt)return;if(x.ischrome&&0===e.which)return _.onmouseup(e);if(_.cursorfreezed=!0,_.hasmoving||_.triggerScrollStart(e.clientX,e.clientY,0,0,0),_.hasmoving=!0,_.rail.drag.hr){_.scroll.x=_.rail.drag.sx+(e.clientX-_.rail.drag.x),_.scroll.x<0&&(_.scroll.x=0);var t=_.scrollvaluemaxw;_.scroll.x>t&&(_.scroll.x=t)}else{_.scroll.y=_.rail.drag.sy+(e.clientY-_.rail.drag.y),_.scroll.y<0&&(_.scroll.y=0);var n=_.scrollvaluemax;_.scroll.y>n&&(_.scroll.y=n)}return _.synched("mousemove",function(){_.cursorfreezed&&(_.showCursor(),_.rail.drag.hr?_.scrollLeft(Math.round(_.scroll.x*_.scrollratio.x)):_.scrollTop(Math.round(_.scroll.y*_.scrollratio.y)))}),_.cancelEvent(e)}_.checkarea=0},x.cantouch||b.emulatetouch)_.onpreventclick=function(e){if(_.preventclick)return _.preventclick.tg.onclick=_.preventclick.click,_.preventclick=!1,_.cancelEvent(e)},_.onclick=!x.isios&&function(e){return!_.lastmouseup||(_.lastmouseup=!1,_.cancelEvent(e))},b.grabcursorenabled&&x.cursorgrabvalue&&(_.css(_.ispage?_.doc:_.win,{cursor:x.cursorgrabvalue}),_.css(_.rail,{cursor:x.cursorgrabvalue}));else{var h=function(e){if(_.selectiondrag){if(e){var t=_.win.outerHeight(),n=e.pageY-_.selectiondrag.top;0<n&&n<t&&(n=0),t<=n&&(n-=t),_.selectiondrag.df=n}if(0!==_.selectiondrag.df){var i=-2*_.selectiondrag.df/6|0;_.doScrollBy(i),_.debounced("doselectionscroll",function(){h()},50)}}};_.hasTextSelected="getSelection"in A?function(){return 0<A.getSelection().rangeCount}:"selection"in A?function(){return"None"!=A.selection.type}:function(){return!1},_.onselectionstart=function(e){_.ispage||(_.selectiondrag=_.win.offset())},_.onselectionend=function(e){_.selectiondrag=!1},_.onselectiondrag=function(e){_.selectiondrag&&_.hasTextSelected()&&_.debounced("selectionscroll",function(){h(e)},250)}}if(x.hasw3ctouch?(_.css(_.ispage?M("html"):_.win,{"touch-action":"none"}),_.css(_.rail,{"touch-action":"none"}),_.css(_.cursor,{"touch-action":"none"}),_.bind(_.win,"pointerdown",_.ontouchstart),_.bind(A,"pointerup",_.ontouchend),_.delegate(A,"pointermove",_.ontouchmove)):x.hasmstouch?(_.css(_.ispage?M("html"):_.win,{"-ms-touch-action":"none"}),_.css(_.rail,{"-ms-touch-action":"none"}),_.css(_.cursor,{"-ms-touch-action":"none"}),_.bind(_.win,"MSPointerDown",_.ontouchstart),_.bind(A,"MSPointerUp",_.ontouchend),_.delegate(A,"MSPointerMove",_.ontouchmove),_.bind(_.cursor,"MSGestureHold",function(e){e.preventDefault()}),_.bind(_.cursor,"contextmenu",function(e){e.preventDefault()})):x.cantouch&&(_.bind(_.win,"touchstart",_.ontouchstart,!1,!0),_.bind(A,"touchend",_.ontouchend,!1,!0),_.bind(A,"touchcancel",_.ontouchend,!1,!0),_.delegate(A,"touchmove",_.ontouchmove,!1,!0)),b.emulatetouch&&(_.bind(_.win,"mousedown",_.ontouchstart,!1,!0),_.bind(A,"mouseup",_.ontouchend,!1,!0),_.bind(A,"mousemove",_.ontouchmove,!1,!0)),(b.cursordragontouch||!x.cantouch&&!b.emulatetouch)&&(_.rail.css({cursor:"default"}),_.railh&&_.railh.css({cursor:"default"}),_.jqbind(_.rail,"mouseenter",function(){if(!_.ispage&&!_.win.is(":visible"))return!1;_.canshowonmouseevent&&_.showCursor(),_.rail.active=!0}),_.jqbind(_.rail,"mouseleave",function(){_.rail.active=!1,_.rail.drag||_.hideCursor()}),b.sensitiverail&&(_.bind(_.rail,"click",function(e){_.doRailClick(e,!1,!1)}),_.bind(_.rail,"dblclick",function(e){_.doRailClick(e,!0,!1)}),_.bind(_.cursor,"click",function(e){_.cancelEvent(e)}),_.bind(_.cursor,"dblclick",function(e){_.cancelEvent(e)})),_.railh&&(_.jqbind(_.railh,"mouseenter",function(){if(!_.ispage&&!_.win.is(":visible"))return!1;_.canshowonmouseevent&&_.showCursor(),_.rail.active=!0}),_.jqbind(_.railh,"mouseleave",function(){_.rail.active=!1,_.rail.drag||_.hideCursor()}),b.sensitiverail&&(_.bind(_.railh,"click",function(e){_.doRailClick(e,!1,!0)}),_.bind(_.railh,"dblclick",function(e){_.doRailClick(e,!0,!0)}),_.bind(_.cursorh,"click",function(e){_.cancelEvent(e)}),_.bind(_.cursorh,"dblclick",function(e){_.cancelEvent(e)})))),b.cursordragontouch&&(this.istouchcapable||x.cantouch)&&(_.bind(_.cursor,"touchstart",_.ontouchstartCursor),_.bind(_.cursor,"touchmove",_.ontouchmoveCursor),_.bind(_.cursor,"touchend",_.ontouchendCursor),_.cursorh&&_.bind(_.cursorh,"touchstart",function(e){_.ontouchstartCursor(e,!0)}),_.cursorh&&_.bind(_.cursorh,"touchmove",_.ontouchmoveCursor),_.cursorh&&_.bind(_.cursorh,"touchend",_.ontouchendCursor)),b.emulatetouch||x.isandroid||x.isios?(_.bind(x.hasmousecapture?_.win:A,"mouseup",_.ontouchend),_.onclick&&_.bind(A,"click",_.onclick),b.cursordragontouch?(_.bind(_.cursor,"mousedown",_.onmousedown),_.bind(_.cursor,"mouseup",_.onmouseup),_.cursorh&&_.bind(_.cursorh,"mousedown",function(e){_.onmousedown(e,!0)}),_.cursorh&&_.bind(_.cursorh,"mouseup",_.onmouseup)):(_.bind(_.rail,"mousedown",function(e){e.preventDefault()}),_.railh&&_.bind(_.railh,"mousedown",function(e){e.preventDefault()}))):(_.bind(x.hasmousecapture?_.win:A,"mouseup",_.onmouseup),_.bind(A,"mousemove",_.onmousemove),_.onclick&&_.bind(A,"click",_.onclick),_.bind(_.cursor,"mousedown",_.onmousedown),_.bind(_.cursor,"mouseup",_.onmouseup),_.railh&&(_.bind(_.cursorh,"mousedown",function(e){_.onmousedown(e,!0)}),_.bind(_.cursorh,"mouseup",_.onmouseup)),!_.ispage&&b.enablescrollonselection&&(_.bind(_.win[0],"mousedown",_.onselectionstart),_.bind(A,"mouseup",_.onselectionend),_.bind(_.cursor,"mouseup",_.onselectionend),_.cursorh&&_.bind(_.cursorh,"mouseup",_.onselectionend),_.bind(A,"mousemove",_.onselectiondrag)),_.zoom&&(_.jqbind(_.zoom,"mouseenter",function(){_.canshowonmouseevent&&_.showCursor(),_.rail.active=!0}),_.jqbind(_.zoom,"mouseleave",function(){_.rail.active=!1,_.rail.drag||_.hideCursor()}))),b.enablemousewheel&&(_.isiframe||_.mousewheel(x.isie&&_.ispage?A:_.win,_.onmousewheel),_.mousewheel(_.rail,_.onmousewheel),_.railh&&_.mousewheel(_.railh,_.onmousewheelhr)),_.ispage||x.cantouch||/HTML|^BODY/.test(_.win[0].nodeName)||(_.win.attr("tabindex")||_.win.attr({tabindex:++D}),_.bind(_.win,"focus",function(e){k=_.getTarget(e).id||_.getTarget(e)||!1,_.hasfocus=!0,_.canshowonmouseevent&&_.noticeCursor()}),_.bind(_.win,"blur",function(e){k=!1,_.hasfocus=!1}),_.bind(_.win,"mouseenter",function(e){C=_.getTarget(e).id||_.getTarget(e)||!1,_.hasmousefocus=!0,_.canshowonmouseevent&&_.noticeCursor()}),_.bind(_.win,"mouseleave",function(e){C=!1,_.hasmousefocus=!1,_.rail.drag||_.hideCursor()})),_.onkeypress=function(e){if(_.railslocked&&0===_.page.maxh)return!0;e=e||L.event;var t=_.getTarget(e);if(t&&/INPUT|TEXTAREA|SELECT|OPTION/.test(t.nodeName)&&(!t.getAttribute("type")&&!t.type||!/submit|button|cancel/i.tp))return!0;if(M(t).attr("contenteditable"))return!0;if(_.hasfocus||_.hasmousefocus&&!k||_.ispage&&!k&&!C){var n=e.keyCode;if(_.railslocked&&27!=n)return _.cancelEvent(e);var i=e.ctrlKey||!1,r=e.shiftKey||!1,o=!1;switch(n){case 38:case 63233:_.doScrollBy(72),o=!0;break;case 40:case 63235:_.doScrollBy(-72),o=!0;break;case 37:case 63232:_.railh&&(i?_.doScrollLeft(0):_.doScrollLeftBy(72),o=!0);break;case 39:case 63234:_.railh&&(i?_.doScrollLeft(_.page.maxw):_.doScrollLeftBy(-72),o=!0);break;case 33:case 63276:_.doScrollBy(_.view.h),o=!0;break;case 34:case 63277:_.doScrollBy(-_.view.h),o=!0;break;case 36:case 63273:_.railh&&i?_.doScrollPos(0,0):_.doScrollTo(0),o=!0;break;case 35:case 63275:_.railh&&i?_.doScrollPos(_.page.maxw,_.page.maxh):_.doScrollTo(_.page.maxh),o=!0;break;case 32:b.spacebarenabled&&(r?_.doScrollBy(_.view.h):_.doScrollBy(-_.view.h),o=!0);break;case 27:_.zoomactive&&(_.doZoom(),o=!0)}if(o)return _.cancelEvent(e)}},b.enablekeyboard&&_.bind(A,x.isopera&&!x.isopera12?"keypress":"keydown",_.onkeypress),_.bind(A,"keydown",function(e){e.ctrlKey&&(_.wheelprevented=!0)}),_.bind(A,"keyup",function(e){e.ctrlKey||(_.wheelprevented=!1)}),_.bind(L,"blur",function(e){_.wheelprevented=!1}),_.bind(L,"resize",_.onscreenresize),_.bind(L,"orientationchange",_.onscreenresize),_.bind(L,"load",_.lazyResize),x.ischrome&&!_.ispage&&!_.haswrapper){var f=_.win.attr("style"),g=parseFloat(_.win.css("width"))+1;_.win.css("width",g),_.synched("chromefix",function(){_.win.attr("style",f)})}if(_.onAttributeChange=function(e){_.lazyResize(_.isieold?250:30)},b.enableobserver&&(_.isie11||!1===Y||(_.observerbody=new Y(function(e){if(e.forEach(function(e){if("attributes"==e.type)return w.hasClass("modal-open")&&w.hasClass("modal-dialog")&&!M.contains(M(".modal-dialog")[0],_.doc[0])?_.hide():_.show()}),_.me.clientWidth!=_.page.width||_.me.clientHeight!=_.page.height)return _.lazyResize(30)}),_.observerbody.observe(A.body,{childList:!0,subtree:!0,characterData:!1,attributes:!0,attributeFilter:["class"]})),!_.ispage&&!_.haswrapper)){var v=_.win[0];!1!==Y?(_.observer=new Y(function(e){e.forEach(_.onAttributeChange)}),_.observer.observe(v,{childList:!0,characterData:!1,attributes:!0,subtree:!1}),_.observerremover=new Y(function(e){e.forEach(function(e){if(0<e.removedNodes.length)for(var t in e.removedNodes)if(_&&e.removedNodes[t]===v)return _.remove()})}),_.observerremover.observe(v.parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(_.bind(v,x.isie&&!x.isie9?"propertychange":"DOMAttrModified",_.onAttributeChange),x.isie9&&v.attachEvent("onpropertychange",_.onAttributeChange),_.bind(v,"DOMNodeRemoved",function(e){e.target===v&&_.remove()}))}!_.ispage&&b.boxzoom&&_.bind(L,"resize",_.resizeZoom),_.istextarea&&(_.bind(_.win,"keydown",_.lazyResize),_.bind(_.win,"mouseup",_.lazyResize)),_.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var y=function(){var t;_.iframexd=!1;try{(t="contentDocument"in this?this.contentDocument:this.contentWindow._doc).domain}catch(e){t=!(_.iframexd=!0)}if(_.iframexd)return"console"in L&&console.log("NiceScroll error: policy restriced iframe"),!0;if(_.forcescreen=!0,_.isiframe&&(_.iframe={doc:M(t),html:_.doc.contents().find("html")[0],body:_.doc.contents().find("body")[0]},_.getContentSize=function(){return{w:Math.max(_.iframe.html.scrollWidth,_.iframe.body.scrollWidth),h:Math.max(_.iframe.html.scrollHeight,_.iframe.body.scrollHeight)}},_.docscroll=M(_.iframe.body)),!x.isios&&b.iframeautoresize&&!_.isiframe){_.win.scrollTop(0),_.doc.height("");var e=Math.max(t.getElementsByTagName("html")[0].scrollHeight,t.body.scrollHeight);_.doc.height(e)}_.lazyResize(30),_.css(M(_.iframe.body),n),x.isios&&_.haswrapper&&_.css(M(t.body),{"-webkit-transform":"translate3d(0,0,0)"}),"contentWindow"in this?_.bind(this.contentWindow,"scroll",_.onscroll):_.bind(t,"scroll",_.onscroll),b.enablemousewheel&&_.mousewheel(t,_.onmousewheel),b.enablekeyboard&&_.bind(t,x.isopera?"keypress":"keydown",_.onkeypress),x.cantouch?(_.bind(t,"touchstart",_.ontouchstart),_.bind(t,"touchmove",_.ontouchmove)):b.emulatetouch&&(_.bind(t,"mousedown",_.ontouchstart),_.bind(t,"mousemove",function(e){return _.ontouchmove(e,!0)}),b.grabcursorenabled&&x.cursorgrabvalue&&_.css(M(t.body),{cursor:x.cursorgrabvalue})),_.bind(t,"mouseup",_.ontouchend),_.zoom&&(b.dblclickzoom&&_.bind(t,"dblclick",_.doZoom),_.ongesturezoom&&_.bind(t,"gestureend",_.ongesturezoom))};this.doc[0].readyState&&"complete"===this.doc[0].readyState&&setTimeout(function(){y.call(_.doc[0],!1)},500),_.bind(this.doc,"load",y)}},this.showCursor=function(e,t){if(_.cursortimeout&&(clearTimeout(_.cursortimeout),_.cursortimeout=0),_.rail){if(_.autohidedom&&(_.autohidedom.stop().css({opacity:b.cursoropacitymax}),_.cursoractive=!0),_.rail.drag&&1==_.rail.drag.pt||(void 0!==e&&!1!==e&&(_.scroll.y=e/_.scrollratio.y|0),void 0!==t&&(_.scroll.x=t/_.scrollratio.x|0)),_.cursor.css({height:_.cursorheight,top:_.scroll.y}),_.cursorh){var n=_.hasreversehr?_.scrollvaluemaxw-_.scroll.x:_.scroll.x;_.cursorh.css({width:_.cursorwidth,left:!_.rail.align&&_.rail.visibility?n+_.rail.width:n}),_.cursoractive=!0}_.zoom&&_.zoom.stop().css({opacity:b.cursoropacitymax})}},this.hideCursor=function(e){_.cursortimeout||_.rail&&_.autohidedom&&(_.hasmousefocus&&"leave"===b.autohidemode||(_.cursortimeout=setTimeout(function(){_.rail.active&&_.showonmouseevent||(_.autohidedom.stop().animate({opacity:b.cursoropacitymin}),_.zoom&&_.zoom.stop().animate({opacity:b.cursoropacitymin}),_.cursoractive=!1),_.cursortimeout=0},e||b.hidecursordelay)))},this.noticeCursor=function(e,t,n){_.showCursor(t,n),_.rail.active||_.hideCursor(e)},this.getContentSize=_.ispage?function(){return{w:Math.max(A.body.scrollWidth,A.documentElement.scrollWidth),h:Math.max(A.body.scrollHeight,A.documentElement.scrollHeight)}}:_.haswrapper?function(){return{w:_.doc[0].offsetWidth,h:_.doc[0].offsetHeight}}:function(){return{w:_.docscroll[0].scrollWidth,h:_.docscroll[0].scrollHeight}},this.onResize=function(e,t){if(!_||!_.win)return!1;var n=_.page.maxh,i=_.page.maxw,r=_.view.h,o=_.view.w;if(_.view={w:_.ispage?_.win.width():_.win[0].clientWidth,h:_.ispage?_.win.height():_.win[0].clientHeight},_.page=t||_.getContentSize(),_.page.maxh=Math.max(0,_.page.h-_.view.h),_.page.maxw=Math.max(0,_.page.w-_.view.w),_.page.maxh==n&&_.page.maxw==i&&_.view.w==o&&_.view.h==r){if(_.ispage)return _;var s=_.win.offset();if(_.lastposition){var a=_.lastposition;if(a.top==s.top&&a.left==s.left)return _}_.lastposition=s}return 0===_.page.maxh?(_.hideRail(),_.scrollvaluemax=0,_.scroll.y=0,_.scrollratio.y=0,_.cursorheight=0,_.setScrollTop(0),_.rail&&(_.rail.scrollable=!1)):(_.page.maxh-=b.railpadding.top+b.railpadding.bottom,_.rail.scrollable=!0),0===_.page.maxw?(_.hideRailHr(),_.scrollvaluemaxw=0,_.scroll.x=0,_.scrollratio.x=0,_.cursorwidth=0,_.setScrollLeft(0),_.railh&&(_.railh.scrollable=!1)):(_.page.maxw-=b.railpadding.left+b.railpadding.right,_.railh&&(_.railh.scrollable=b.horizrailenabled)),_.railslocked=_.locked||0===_.page.maxh&&0===_.page.maxw,_.railslocked?(_.ispage||_.updateScrollBar(_.view),!1):(_.hidden||(_.rail.visibility||_.showRail(),_.railh&&!_.railh.visibility&&_.showRailHr()),_.istextarea&&_.win.css("resize")&&"none"!=_.win.css("resize")&&(_.view.h-=20),_.cursorheight=Math.min(_.view.h,Math.round(_.view.h*(_.view.h/_.page.h))),_.cursorheight=b.cursorfixedheight?b.cursorfixedheight:Math.max(b.cursorminheight,_.cursorheight),_.cursorwidth=Math.min(_.view.w,Math.round(_.view.w*(_.view.w/_.page.w))),_.cursorwidth=b.cursorfixedheight?b.cursorfixedheight:Math.max(b.cursorminheight,_.cursorwidth),_.scrollvaluemax=_.view.h-_.cursorheight-(b.railpadding.top+b.railpadding.bottom),_.hasborderbox||(_.scrollvaluemax-=_.cursor[0].offsetHeight-_.cursor[0].clientHeight),_.railh&&(_.railh.width=0<_.page.maxh?_.view.w-_.rail.width:_.view.w,_.scrollvaluemaxw=_.railh.width-_.cursorwidth-(b.railpadding.left+b.railpadding.right)),_.ispage||_.updateScrollBar(_.view),_.scrollratio={x:_.page.maxw/_.scrollvaluemaxw,y:_.page.maxh/_.scrollvaluemax},_.getScrollTop()>_.page.maxh?_.doScrollTop(_.page.maxh):(_.scroll.y=_.getScrollTop()/_.scrollratio.y|0,_.scroll.x=_.getScrollLeft()/_.scrollratio.x|0,_.cursoractive&&_.noticeCursor()),_.scroll.y&&0===_.getScrollTop()&&_.doScrollTo(_.scroll.y*_.scrollratio.y|0),_)},this.resize=_.onResize;var f=0;this.onscreenresize=function(e){clearTimeout(f);var t=!_.ispage&&!_.haswrapper;t&&_.hideRails(),f=setTimeout(function(){_&&(t&&_.showRails(),_.resize()),f=0},120)},this.lazyResize=function(e){return clearTimeout(f),e=isNaN(e)?240:e,f=setTimeout(function(){_&&_.resize(),f=0},e),_},this.jqbind=function(e,t,n){_.events.push({e:e,n:t,f:n,q:!0}),M(e).on(t,n)};var p=!(this.mousewheel=function(e,t,n){var i="jquery"in e?e[0]:e;if("onwheel"in A.createElement("div"))_._bind(i,"wheel",t,n||!1);else{var r=void 0!==A.onmousewheel?"mousewheel":"DOMMouseScroll";o(i,r,t,n||!1),"DOMMouseScroll"==r&&o(i,"MozMousePixelScroll",t,n||!1)}});if(x.haseventlistener){try{var m=Object.defineProperty({},"passive",{get:function(){p=!0}});L.addEventListener("test",null,m)}catch(e){}this.stopPropagation=function(e){return!!e&&((e=e.original?e.original:e).stopPropagation(),!1)},this.cancelEvent=function(e){return e.cancelable&&e.preventDefault(),e.stopImmediatePropagation(),e.preventManipulation&&e.preventManipulation(),!1}}else Event.prototype.preventDefault=function(){this.returnValue=!1},Event.prototype.stopPropagation=function(){this.cancelBubble=!0},L.constructor.prototype.addEventListener=A.constructor.prototype.addEventListener=Element.prototype.addEventListener=function(e,t,n){this.attachEvent("on"+e,t)},L.constructor.prototype.removeEventListener=A.constructor.prototype.removeEventListener=Element.prototype.removeEventListener=function(e,t,n){this.detachEvent("on"+e,t)},this.cancelEvent=function(e){return(e=e||L.event)&&(e.cancelBubble=!0,e.cancel=!0,e.returnValue=!1),!1},this.stopPropagation=function(e){return(e=e||L.event)&&(e.cancelBubble=!0),!1};this.delegate=function(e,t,n,i,r){var o=P[t]||!1;o||(o={a:[],l:[],f:function(e){for(var t=o.l,n=!1,i=t.length-1;0<=i;i--)if(!1===(n=t[i].call(e.target,e)))return!1;return n}},_.bind(e,t,o.f,i,r),P[t]=o),_.ispage?(o.a=[_.id].concat(o.a),o.l=[n].concat(o.l)):(o.a.push(_.id),o.l.push(n))},this.undelegate=function(e,t,n,i,r){var o=P[t]||!1;if(o&&o.l)for(var s=0,a=o.l.length;s<a;s++)o.a[s]===_.id&&(o.a.splice(s),o.l.splice(s),0===o.a.length&&(_._unbind(e,t,o.l.f),P[t]=null))},this.bind=function(e,t,n,i,r){var o="jquery"in e?e[0]:e;_._bind(o,t,n,i||!1,r||!1)},this._bind=function(e,t,n,i,r){_.events.push({e:e,n:t,f:n,b:i,q:!1}),p&&r?e.addEventListener(t,n,{passive:!1,capture:i}):e.addEventListener(t,n,i||!1)},this._unbind=function(e,t,n,i){P[t]?_.undelegate(e,t,n,i):e.removeEventListener(t,n,i)},this.unbindAll=function(){for(var e=0;e<_.events.length;e++){var t=_.events[e];t.q?t.e.unbind(t.n,t.f):_._unbind(t.e,t.n,t.f,t.b)}},this.showRails=function(){return _.showRail().showRailHr()},this.showRail=function(){return 0===_.page.maxh||!_.ispage&&"none"==_.win.css("display")||(_.rail.visibility=!0,_.rail.css("display","block")),_},this.showRailHr=function(){return _.railh&&(0===_.page.maxw||!_.ispage&&"none"==_.win.css("display")||(_.railh.visibility=!0,_.railh.css("display","block"))),_},this.hideRails=function(){return _.hideRail().hideRailHr()},this.hideRail=function(){return _.rail.visibility=!1,_.rail.css("display","none"),_},this.hideRailHr=function(){return _.railh&&(_.railh.visibility=!1,_.railh.css("display","none")),_},this.show=function(){return _.hidden=!1,_.railslocked=!1,_.showRails()},this.hide=function(){return _.hidden=!0,_.railslocked=!0,_.hideRails()},this.toggle=function(){return _.hidden?_.show():_.hide()},this.remove=function(){for(var e in _.stop(),_.cursortimeout&&clearTimeout(_.cursortimeout),_.delaylist)_.delaylist[e]&&H(_.delaylist[e].h);_.doZoomOut(),_.unbindAll(),x.isie9&&_.win[0].detachEvent("onpropertychange",_.onAttributeChange),!1!==_.observer&&_.observer.disconnect(),!1!==_.observerremover&&_.observerremover.disconnect(),!1!==_.observerbody&&_.observerbody.disconnect(),_.events=null,_.cursor&&_.cursor.remove(),_.cursorh&&_.cursorh.remove(),_.rail&&_.rail.remove(),_.railh&&_.railh.remove(),_.zoom&&_.zoom.remove();for(var t=0;t<_.saved.css.length;t++){var n=_.saved.css[t];n[0].css(n[1],void 0===n[2]?"":n[2])}_.saved=!1,_.me.data("__nicescroll","");var i=M.nicescroll;for(var r in i.each(function(e){if(this&&this.id===_.id){delete i[e];for(var t=++e;t<i.length;t++,e++)i[e]=i[t];--i.length&&delete i[i.length]}}),_)_[r]=null,delete _[r];_=null},this.scrollstart=function(e){return this.onscrollstart=e,_},this.scrollend=function(e){return this.onscrollend=e,_},this.scrollcancel=function(e){return this.onscrollcancel=e,_},this.zoomin=function(e){return this.onzoomin=e,_},this.zoomout=function(e){return this.onzoomout=e,_},this.isScrollable=function(e){var t=e.target?e.target:e;if("OPTION"==t.nodeName)return!0;for(;t&&1==t.nodeType&&t!==this.me[0]&&!/^BODY|HTML/.test(t.nodeName);){var n=M(t),i=n.css("overflowY")||n.css("overflowX")||n.css("overflow")||"";if(/scroll|auto/.test(i))return t.clientHeight!=t.scrollHeight;t=!!t.parentNode&&t.parentNode}return!1},this.getViewport=function(e){for(var t=!(!e||!e.parentNode)&&e.parentNode;t&&1==t.nodeType&&!/^BODY|HTML/.test(t.nodeName);){var n=M(t);if(/fixed|absolute/.test(n.css("position")))return n;var i=n.css("overflowY")||n.css("overflowX")||n.css("overflow")||"";if(/scroll|auto/.test(i)&&t.clientHeight!=t.scrollHeight)return n;if(0<n.getNiceScroll().length)return n;t=!!t.parentNode&&t.parentNode}return!1},this.triggerScrollStart=function(e,t,n,i,r){if(_.onscrollstart){var o={type:"scrollstart",current:{x:e,y:t},request:{x:n,y:i},end:{x:_.newscrollx,y:_.newscrolly},speed:r};_.onscrollstart.call(_,o)}},this.triggerScrollEnd=function(){if(_.onscrollend){var e=_.getScrollLeft(),t=_.getScrollTop(),n={type:"scrollend",current:{x:e,y:t},end:{x:e,y:t}};_.onscrollend.call(_,n)}};var g=0,v=0,y=0,S=1,T=!1;if(this.onmousewheel=function(e){if(_.wheelprevented||_.locked)return!1;if(_.railslocked)return _.debounced("checkunlock",_.resize,250),!1;if(_.rail.drag)return _.cancelEvent(e);if("auto"===b.oneaxismousemode&&0!==e.deltaX&&(b.oneaxismousemode=!1),b.oneaxismousemode&&0===e.deltaX&&!_.rail.scrollable)return!_.railh||!_.railh.scrollable||_.onmousewheelhr(e);var t=R(),n=!1;if(b.preservenativescrolling&&_.checkarea+600<t&&(_.nativescrollingarea=_.isScrollable(e),n=!0),_.checkarea=t,_.nativescrollingarea)return!0;var i=r(e,!1,n);return i&&(_.checkarea=0),i},this.onmousewheelhr=function(e){if(!_.wheelprevented){if(_.railslocked||!_.railh.scrollable)return!0;if(_.rail.drag)return _.cancelEvent(e);var t=R(),n=!1;return b.preservenativescrolling&&_.checkarea+600<t&&(_.nativescrollingarea=_.isScrollable(e),n=!0),_.checkarea=t,!!_.nativescrollingarea||(_.railslocked?_.cancelEvent(e):r(e,!0,n))}},this.stop=function(){return _.cancelScroll(),_.scrollmon&&_.scrollmon.stop(),_.cursorfreezed=!1,_.scroll.y=Math.round(_.getScrollTop()*(1/_.scrollratio.y)),_.noticeCursor(),_},this.getTransitionSpeed=function(e){return 80+e/72*b.scrollspeed|0},b.smoothscroll)if(_.ishwscroll&&x.hastransition&&b.usetransition&&b.smoothscroll){var E="";this.resetTransition=function(){E="",_.doc.css(x.prefixstyle+"transition-duration","0ms")},this.prepareTransition=function(e,t){var n=t?e:_.getTransitionSpeed(e),i=n+"ms";return E!==i&&(E=i,_.doc.css(x.prefixstyle+"transition-duration",i)),n},this.doScrollLeft=function(e,t){var n=_.scrollrunning?_.newscrolly:_.getScrollTop();_.doScrollPos(e,n,t)},this.doScrollTop=function(e,t){var n=_.scrollrunning?_.newscrollx:_.getScrollLeft();_.doScrollPos(n,e,t)},this.cursorupdate={running:!1,start:function(){var e=this;if(!e.running){e.running=!0;var t=function(){e.running&&j(t),_.showCursor(_.getScrollTop(),_.getScrollLeft()),_.notifyScrollEvent(_.win[0])};j(t)}},stop:function(){this.running=!1}},this.doScrollPos=function(e,t,n){var i=_.getScrollTop(),r=_.getScrollLeft();if(((_.newscrolly-i)*(t-i)<0||(_.newscrollx-r)*(e-r)<0)&&_.cancelScroll(),b.bouncescroll?(t<0?t=t/2|0:t>_.page.maxh&&(t=_.page.maxh+(t-_.page.maxh)/2|0),e<0?e=e/2|0:e>_.page.maxw&&(e=_.page.maxw+(e-_.page.maxw)/2|0)):(t<0?t=0:t>_.page.maxh&&(t=_.page.maxh),e<0?e=0:e>_.page.maxw&&(e=_.page.maxw)),_.scrollrunning&&e==_.newscrollx&&t==_.newscrolly)return!1;_.newscrolly=t,_.newscrollx=e;var o=_.getScrollTop(),s=_.getScrollLeft(),a={};a.x=e-s,a.y=t-o;var l=0|Math.sqrt(a.x*a.x+a.y*a.y),c=_.prepareTransition(l);_.scrollrunning||(_.scrollrunning=!0,_.triggerScrollStart(s,o,e,t,c),_.cursorupdate.start()),_.scrollendtrapped=!0,x.transitionend||(_.scrollendtrapped&&clearTimeout(_.scrollendtrapped),_.scrollendtrapped=setTimeout(_.onScrollTransitionEnd,c)),_.setScrollTop(_.newscrolly),_.setScrollLeft(_.newscrollx)},this.cancelScroll=function(){if(!_.scrollendtrapped)return!0;var e=_.getScrollTop(),t=_.getScrollLeft();return _.scrollrunning=!1,x.transitionend||clearTimeout(x.transitionend),_.scrollendtrapped=!1,_.resetTransition(),_.setScrollTop(e),_.railh&&_.setScrollLeft(t),_.timerscroll&&_.timerscroll.tm&&clearInterval(_.timerscroll.tm),_.timerscroll=!1,_.cursorfreezed=!1,_.cursorupdate.stop(),_.showCursor(e,t),_},this.onScrollTransitionEnd=function(){if(_.scrollendtrapped){var e=_.getScrollTop(),t=_.getScrollLeft();if(e<0?e=0:e>_.page.maxh&&(e=_.page.maxh),t<0?t=0:t>_.page.maxw&&(t=_.page.maxw),e!=_.newscrolly||t!=_.newscrollx)return _.doScrollPos(t,e,b.snapbackspeed);_.scrollrunning&&_.triggerScrollEnd(),_.scrollrunning=!1,_.scrollendtrapped=!1,_.resetTransition(),_.timerscroll=!1,_.setScrollTop(e),_.railh&&_.setScrollLeft(t),_.cursorupdate.stop(),_.noticeCursor(!1,e,t),_.cursorfreezed=!1}}}else this.doScrollLeft=function(e,t){var n=_.scrollrunning?_.newscrolly:_.getScrollTop();_.doScrollPos(e,n,t)},this.doScrollTop=function(e,t){var n=_.scrollrunning?_.newscrollx:_.getScrollLeft();_.doScrollPos(n,e,t)},this.doScrollPos=function(e,t,n){var i=_.getScrollTop(),r=_.getScrollLeft();((_.newscrolly-i)*(t-i)<0||(_.newscrollx-r)*(e-r)<0)&&_.cancelScroll();var o=!1;if(_.bouncescroll&&_.rail.visibility||(t<0?o=!(t=0):t>_.page.maxh&&(t=_.page.maxh,o=!0)),_.bouncescroll&&_.railh.visibility||(e<0?o=!(e=0):e>_.page.maxw&&(e=_.page.maxw,o=!0)),_.scrollrunning&&_.newscrolly===t&&_.newscrollx===e)return!0;_.newscrolly=t,_.newscrollx=e,_.dst={},_.dst.x=e-r,_.dst.y=t-i,_.dst.px=r,_.dst.py=i;var s=0|Math.sqrt(_.dst.x*_.dst.x+_.dst.y*_.dst.y),a=_.getTransitionSpeed(s);_.bzscroll={};var l=o?1:.58;_.bzscroll.x=new u(r,_.newscrollx,a,0,0,l,1),_.bzscroll.y=new u(i,_.newscrolly,a,0,0,l,1),R();var c=function(){if(_.scrollrunning){var e=_.bzscroll.y.getPos();_.setScrollLeft(_.bzscroll.x.getNow()),_.setScrollTop(_.bzscroll.y.getNow()),e<=1?_.timer=j(c):(_.scrollrunning=!1,_.timer=0,_.triggerScrollEnd())}};_.scrollrunning||(_.triggerScrollStart(r,i,e,t,a),_.scrollrunning=!0,_.timer=j(c))},this.cancelScroll=function(){return _.timer&&H(_.timer),_.timer=0,_.bzscroll=!1,_.scrollrunning=!1,_};else this.doScrollLeft=function(e,t){var n=_.getScrollTop();_.doScrollPos(e,n,t)},this.doScrollTop=function(e,t){var n=_.getScrollLeft();_.doScrollPos(n,e,t)},this.doScrollPos=function(e,t,n){var i=e>_.page.maxw?_.page.maxw:e;i<0&&(i=0);var r=t>_.page.maxh?_.page.maxh:t;r<0&&(r=0),_.synched("scroll",function(){_.setScrollTop(r),_.setScrollLeft(i)})},this.cancelScroll=function(){};this.doScrollBy=function(e,t){a(0,e)},this.doScrollLeftBy=function(e,t){a(e,0)},this.doScrollTo=function(e,t){var n=t?Math.round(e*_.scrollratio.y):e;n<0?n=0:n>_.page.maxh&&(n=_.page.maxh),_.cursorfreezed=!1,_.doScrollTop(e)},this.checkContentSize=function(){var e=_.getContentSize();e.h==_.page.h&&e.w==_.page.w||_.resize(!1,e)},_.onscroll=function(e){_.rail.drag||_.cursorfreezed||_.synched("scroll",function(){_.scroll.y=Math.round(_.getScrollTop()/_.scrollratio.y),_.railh&&(_.scroll.x=Math.round(_.getScrollLeft()/_.scrollratio.x)),_.noticeCursor()})},_.bind(_.docscroll,"scroll",_.onscroll),this.doZoomIn=function(e){if(!_.zoomactive){_.zoomactive=!0,_.zoomrestore={style:{}};var t=["position","top","left","zIndex","backgroundColor","marginTop","marginBottom","marginLeft","marginRight"],n=_.win[0].style;for(var i in t){var r=t[i];_.zoomrestore.style[r]=void 0!==n[r]?n[r]:""}_.zoomrestore.style.width=_.win.css("width"),_.zoomrestore.style.height=_.win.css("height"),_.zoomrestore.padding={w:_.win.outerWidth()-_.win.width(),h:_.win.outerHeight()-_.win.height()},x.isios4&&(_.zoomrestore.scrollTop=I.scrollTop(),I.scrollTop(0)),_.win.css({position:x.isios4?"absolute":"fixed",top:0,left:0,zIndex:N+100,margin:0});var o=_.win.css("backgroundColor");return(""===o||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(o))&&_.win.css("backgroundColor","#fff"),_.rail.css({zIndex:N+101}),_.zoom.css({zIndex:N+102}),_.zoom.css("backgroundPosition","0 -18px"),_.resizeZoom(),_.onzoomin&&_.onzoomin.call(_),_.cancelEvent(e)}},this.doZoomOut=function(e){if(_.zoomactive)return _.zoomactive=!1,_.win.css("margin",""),_.win.css(_.zoomrestore.style),x.isios4&&I.scrollTop(_.zoomrestore.scrollTop),_.rail.css({"z-index":_.zindex}),_.zoom.css({"z-index":_.zindex}),_.zoomrestore=!1,_.zoom.css("backgroundPosition","0 0"),_.onResize(),_.onzoomout&&_.onzoomout.call(_),_.cancelEvent(e)},this.doZoom=function(e){return _.zoomactive?_.doZoomOut(e):_.doZoomIn(e)},this.resizeZoom=function(){if(_.zoomactive){var e=_.getScrollTop();_.win.css({width:I.width()-_.zoomrestore.padding.w+"px",height:I.height()-_.zoomrestore.padding.h+"px"}),_.onResize(),_.setScrollTop(Math.min(_.page.maxh,e))}},this.init(),M.nicescroll.push(this)},F=function(e){var m=this;this.nc=e,this.lastx=0,this.lasty=0,this.speedx=0,this.speedy=0,this.lasttime=0,this.steptime=0,this.snapx=!1,this.snapy=!1,this.demulx=0,this.demuly=0,this.lastscrollx=-1,this.lastscrolly=-1,this.chkx=0,this.chky=0,this.timer=0,this.reset=function(e,t){m.stop(),m.steptime=0,m.lasttime=R(),m.speedx=0,m.speedy=0,m.lastx=e,m.lasty=t,m.lastscrollx=-1,m.lastscrolly=-1},this.update=function(e,t){var n=R();m.steptime=n-m.lasttime,m.lasttime=n;var i=t-m.lasty,r=e-m.lastx,o=m.nc.getScrollTop()+i,s=m.nc.getScrollLeft()+r;m.snapx=s<0||s>m.nc.page.maxw,m.snapy=o<0||o>m.nc.page.maxh,m.speedx=r,m.speedy=i,m.lastx=e,m.lasty=t},this.stop=function(){m.nc.unsynched("domomentum2d"),m.timer&&clearTimeout(m.timer),m.timer=0,m.lastscrollx=-1,m.lastscrolly=-1},this.doSnapy=function(e,t){var n=!1;t<0?n=!(t=0):t>m.nc.page.maxh&&(t=m.nc.page.maxh,n=!0),e<0?n=!(e=0):e>m.nc.page.maxw&&(e=m.nc.page.maxw,n=!0),n?m.nc.doScrollPos(e,t,m.nc.opt.snapbackspeed):m.nc.triggerScrollEnd()},this.doMomentum=function(e){var t=R(),n=e?t+e:m.lasttime,i=m.nc.getScrollLeft(),r=m.nc.getScrollTop(),o=m.nc.page.maxh,s=m.nc.page.maxw;m.speedx=0<s?Math.min(60,m.speedx):0,m.speedy=0<o?Math.min(60,m.speedy):0;var a=n&&t-n<=60;(r<0||o<r||i<0||s<i)&&(a=!1);var l=!(!m.speedy||!a)&&m.speedy,c=!(!m.speedx||!a)&&m.speedx;if(l||c){var u=Math.max(16,m.steptime);if(50<u){var d=u/50;m.speedx*=d,m.speedy*=d,u=50}m.demulxy=0,m.lastscrollx=m.nc.getScrollLeft(),m.chkx=m.lastscrollx,m.lastscrolly=m.nc.getScrollTop(),m.chky=m.lastscrolly;var h=m.lastscrollx,f=m.lastscrolly,p=function(){var e=600<R()-t?.04:.02;m.speedx&&(h=Math.floor(m.lastscrollx-m.speedx*(1-m.demulxy)),((m.lastscrollx=h)<0||s<h)&&(e=.1)),m.speedy&&(f=Math.floor(m.lastscrolly-m.speedy*(1-m.demulxy)),((m.lastscrolly=f)<0||o<f)&&(e=.1)),m.demulxy=Math.min(1,m.demulxy+e),m.nc.synched("domomentum2d",function(){m.speedx&&(m.nc.getScrollLeft(),m.chkx=h,m.nc.setScrollLeft(h)),m.speedy&&(m.nc.getScrollTop(),m.chky=f,m.nc.setScrollTop(f)),m.timer||(m.nc.hideCursor(),m.doSnapy(h,f))}),m.demulxy<1?m.timer=setTimeout(p,u):(m.stop(),m.nc.hideCursor(),m.doSnapy(h,f))};p()}else m.doSnapy(m.nc.getScrollLeft(),m.nc.getScrollTop())}},r=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(e,t,n){var i=M.data(e,"__nicescroll")||!1;return i&&i.ishwscroll?i.getScrollTop():r.call(e)},set:function(e,t){var n=M.data(e,"__nicescroll")||!1;return n&&n.ishwscroll?n.setScrollTop(parseInt(t)):r.call(e,t),this}},e.fn.scrollTop=function(t){if(void 0!==t)return this.each(function(){var e=M.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollTop(parseInt(t)):r.call(M(this),t)});var e=!!this[0]&&(M.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollTop():r.call(this)};var s=e.fn.scrollLeft;M.cssHooks.pageXOffset={get:function(e,t,n){var i=M.data(e,"__nicescroll")||!1;return i&&i.ishwscroll?i.getScrollLeft():s.call(e)},set:function(e,t){var n=M.data(e,"__nicescroll")||!1;return n&&n.ishwscroll?n.setScrollLeft(parseInt(t)):s.call(e,t),this}},e.fn.scrollLeft=function(t){if(void 0!==t)return this.each(function(){var e=M.data(this,"__nicescroll")||!1;e&&e.ishwscroll?e.setScrollLeft(parseInt(t)):s.call(M(this),t)});var e=!!this[0]&&(M.data(this[0],"__nicescroll")||!1);return e&&e.ishwscroll?e.getScrollLeft():s.call(this)};var l=function(e){var t=this;if(this.length=0,this.name="nicescrollarray",this.each=function(e){return M.each(t,e),t},this.push=function(e){t[t.length]=e,t.length++},this.eq=function(e){return t[e]},e)for(var n=0;n<e.length;n++){var i=M.data(e[n],"__nicescroll")||!1;i&&(this[this.length]=i,this.length++)}return this};!function(e,t,n){for(var i=0,r=t.length;i<r;i++)n(e,t[i])}(l.prototype,["show","hide","toggle","onResize","resize","remove","stop","doScrollPos"],function(e,t){e[t]=function(){var e=arguments;return this.each(function(){this[t].apply(this,e)})}}),e.fn.getNiceScroll=function(e){return void 0===e?new l(this):this[e]&&M.data(this[e],"__nicescroll")||!1},(e.expr.pseudos||e.expr[":"]).nicescroll=function(e){return void 0!==M.data(e,"__nicescroll")},M.fn.niceScroll=function(r,o){void 0!==o||"object"!=typeof r||"jquery"in r||(o=r,r=!1);var s=new l;return this.each(function(){var e=M(this),t=M.extend({},o);if(r){var n=M(r);t.doc=1<n.length?M(r,e):n,t.win=e}!("doc"in t)||"win"in t||(t.win=e);var i=e.data("__nicescroll")||!1;i||(t.doc=t.doc||e,i=new a(t,e),e.data("__nicescroll",i)),s.push(i)}),1===s.length?s[0]:s},L.NiceScroll={getjQuery:function(){return e}},M.nicescroll||(M.nicescroll=new l,M.nicescroll.options=z)}),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";function y(){return Ge.apply(null,arguments)}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function l(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function c(e){return void 0===e}function u(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function h(e,t){var n,i=[];for(n=0;n<e.length;++n)i.push(t(e[n],n));return i}function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function f(e,t){for(var n in t)_(t,n)&&(e[n]=t[n]);return _(t,"toString")&&(e.toString=t.toString),_(t,"valueOf")&&(e.valueOf=t.valueOf),e}function p(e,t,n,i){return fe(e,t,n,i,!0).utc()}function w(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function m(e){if(null==e._isValid){var t=w(e),n=Xe.call(t.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(i=i&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function g(e){var t=p(NaN);return null!=e?f(w(t),e):w(t).userInvalidated=!0,t}function v(e,t){var n,i,r;if(c(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),c(t._i)||(e._i=t._i),c(t._f)||(e._f=t._f),c(t._l)||(e._l=t._l),c(t._strict)||(e._strict=t._strict),c(t._tzm)||(e._tzm=t._tzm),c(t._isUTC)||(e._isUTC=t._isUTC),c(t._offset)||(e._offset=t._offset),c(t._pf)||(e._pf=w(t)),c(t._locale)||(e._locale=t._locale),0<Ke.length)for(n=0;n<Ke.length;n++)c(r=t[i=Ke[n]])||(e[i]=r);return e}function b(e){v(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===Qe&&(Qe=!0,y.updateOffset(this),Qe=!1)}function x(e){return e instanceof b||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function T(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function s(e,t,n){var i,r=Math.min(e.length,t.length),o=Math.abs(e.length-t.length),s=0;for(i=0;i<r;i++)(n&&e[i]!==t[i]||!n&&T(e[i])!==T(t[i]))&&s++;return s+o}function E(e){!1===y.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function e(r,o){var s=!0;return f(function(){if(null!=y.deprecationHandler&&y.deprecationHandler(null,r),s){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var i in e+="\n["+n+"] ",arguments[0])e+=i+": "+arguments[0][i]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}E(r+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),s=!1}return o.apply(this,arguments)},o)}function o(e,t){null!=y.deprecationHandler&&y.deprecationHandler(e,t),Ze[e]||(E(t),Ze[e]=!0)}function k(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function C(e,t){var n,i=f({},e);for(n in t)_(t,n)&&(l(e[n])&&l(t[n])?(i[n]={},f(i[n],e[n]),f(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n]);for(n in e)_(e,n)&&!_(t,n)&&l(e[n])&&(i[n]=f({},i[n]));return i}function D(e){null!=e&&this.set(e)}function t(e,t){var n=e.toLowerCase();Je[n]=Je[n+"s"]=Je[t]=e}function O(e){return"string"==typeof e?Je[e]||Je[e.toLowerCase()]:void 0}function N(e){var t,n,i={};for(n in e)_(e,n)&&(t=O(n))&&(i[t]=e[n]);return i}function n(e,t){et[e]=t}function M(e,t,n){var i=""+Math.abs(e),r=t-i.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}function i(e,t,n,i){var r=i;"string"==typeof i&&(r=function(){return this[i]()}),e&&(rt[e]=r),t&&(rt[t[0]]=function(){return M(r.apply(this,arguments),t[1],t[2])}),n&&(rt[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function r(e,t){return e.isValid()?(t=A(t,e.localeData()),it[t]=it[t]||function(i){var e,r,t,o=i.match(tt);for(e=0,r=o.length;e<r;e++)rt[o[e]]?o[e]=rt[o[e]]:o[e]=(t=o[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<r;t++)n+=k(o[t])?o[t].call(e,i):o[t];return n}}(t),it[t](e)):e.localeData().invalidDate()}function A(e,t){function n(e){return t.longDateFormat(e)||e}var i=5;for(nt.lastIndex=0;0<=i&&nt.test(e);)e=e.replace(nt,n),nt.lastIndex=0,i-=1;return e}function L(e,n,i){bt[e]=k(n)?n:function(e,t){return e&&i?i:n}}function I(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function P(e,n){var t,i=n;for("string"==typeof e&&(e=[e]),u(n)&&(i=function(e,t){t[n]=T(e)}),t=0;t<e.length;t++)xt[e[t]]=i}function j(e,r){P(e,function(e,t,n,i){n._w=n._w||{},r(e,n._w,n,i)})}function H(e){return Y(e)?366:365}function Y(e){return e%4==0&&e%100!=0||e%400==0}function R(t,n){return function(e){return null!=e?(W(this,t,e),y.updateOffset(this,n),this):z(this,t)}}function z(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function W(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Y(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),F(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function F(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=(t%12+12)%12;return e+=(t-n)/12,1===n?Y(e)?29:28:31-n%7%2}function q(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=T(t);else if(!u(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),F(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function U(e){return null!=e?(q(this,e),y.updateOffset(this,!0),this):z(this,"Month")}function B(){function e(e,t){return t.length-e.length}var t,n,i=[],r=[],o=[];for(t=0;t<12;t++)n=p([2e3,t]),i.push(this.monthsShort(n,"")),r.push(this.months(n,"")),o.push(this.months(n,"")),o.push(this.monthsShort(n,""));for(i.sort(e),r.sort(e),o.sort(e),t=0;t<12;t++)i[t]=I(i[t]),r[t]=I(r[t]);for(t=0;t<24;t++)o[t]=I(o[t]);this._monthsRegex=new RegExp("^("+o.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function V(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function G(e,t,n){var i=7+t-n;return-(7+V(e,0,i).getUTCDay()-t)%7+i-1}function X(e,t,n,i,r){var o,s,a=1+7*(t-1)+(7+n-i)%7+G(e,i,r);return s=a<=0?H(o=e-1)+a:a>H(e)?(o=e+1,a-H(e)):(o=e,a),{year:o,dayOfYear:s}}function $(e,t,n){var i,r,o=G(e.year(),t,n),s=Math.floor((e.dayOfYear()-o-1)/7)+1;return s<1?i=s+K(r=e.year()-1,t,n):s>K(e.year(),t,n)?(i=s-K(e.year(),t,n),r=e.year()+1):(r=e.year(),i=s),{week:i,year:r}}function K(e,t,n){var i=G(e,t,n),r=G(e+1,t,n);return(H(e)-i+r)/7}function Q(){function e(e,t){return t.length-e.length}var t,n,i,r,o,s=[],a=[],l=[],c=[];for(t=0;t<7;t++)n=p([2e3,1]).day(t),i=this.weekdaysMin(n,""),r=this.weekdaysShort(n,""),o=this.weekdays(n,""),s.push(i),a.push(r),l.push(o),c.push(i),c.push(r),c.push(o);for(s.sort(e),a.sort(e),l.sort(e),c.sort(e),t=0;t<7;t++)a[t]=I(a[t]),l[t]=I(l[t]),c[t]=I(c[t]);this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Z(){return this.hours()%12||12}function J(e,t){i(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function ee(e,t){return t._meridiemParse}function te(e){return e?e.toLowerCase().replace("_","-"):e}function ne(e){var t=null;if(!Xt[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Bt._abbr,require("./locale/"+e),ie(t)}catch(e){}return Xt[e]}function ie(e,t){var n;return e&&(n=c(t)?oe(e):re(e,t))&&(Bt=n),Bt._abbr}function re(e,t){if(null===t)return delete Xt[e],null;var n=Gt;if(t.abbr=e,null!=Xt[e])o("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Xt[e]._config;else if(null!=t.parentLocale){if(null==Xt[t.parentLocale])return $t[t.parentLocale]||($t[t.parentLocale]=[]),$t[t.parentLocale].push({name:e,config:t}),null;n=Xt[t.parentLocale]._config}return Xt[e]=new D(C(n,t)),$t[e]&&$t[e].forEach(function(e){re(e.name,e.config)}),ie(e),Xt[e]}function oe(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Bt;if(!a(e)){if(t=ne(e))return t;e=[e]}return function(e){for(var t,n,i,r,o=0;o<e.length;){for(t=(r=te(e[o]).split("-")).length,n=(n=te(e[o+1]))?n.split("-"):null;0<t;){if(i=ne(r.slice(0,t).join("-")))return i;if(n&&n.length>=t&&s(r,n,!0)>=t-1)break;t--}o++}return null}(e)}function se(e){var t,n=e._a;return n&&-2===w(e).overflow&&(t=n[Tt]<0||11<n[Tt]?Tt:n[Et]<1||n[Et]>F(n[St],n[Tt])?Et:n[kt]<0||24<n[kt]||24===n[kt]&&(0!==n[Ct]||0!==n[Dt]||0!==n[Ot])?kt:n[Ct]<0||59<n[Ct]?Ct:n[Dt]<0||59<n[Dt]?Dt:n[Ot]<0||999<n[Ot]?Ot:-1,w(e)._overflowDayOfYear&&(t<St||Et<t)&&(t=Et),w(e)._overflowWeeks&&-1===t&&(t=Nt),w(e)._overflowWeekday&&-1===t&&(t=Mt),w(e).overflow=t),e}function ae(e,t,n){return null!=e?e:null!=t?t:n}function le(e){var t,n,i,r,o,s,a,l=[];if(!e._d){for(s=e,a=void 0,a=new Date(y.now()),i=s._useUTC?[a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()]:[a.getFullYear(),a.getMonth(),a.getDate()],e._w&&null==e._a[Et]&&null==e._a[Tt]&&function(e){var t,n,i,r,o,s,a,l;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)o=1,s=4,n=ae(t.GG,e._a[St],$(pe(),1,4).year),i=ae(t.W,1),((r=ae(t.E,1))<1||7<r)&&(l=!0);else{o=e._locale._week.dow,s=e._locale._week.doy;var c=$(pe(),o,s);n=ae(t.gg,e._a[St],c.year),i=ae(t.w,c.week),null!=t.d?((r=t.d)<0||6<r)&&(l=!0):null!=t.e?(r=t.e+o,(t.e<0||6<t.e)&&(l=!0)):r=o}i<1||i>K(n,o,s)?w(e)._overflowWeeks=!0:null!=l?w(e)._overflowWeekday=!0:(a=X(n,i,r,o,s),e._a[St]=a.year,e._dayOfYear=a.dayOfYear)}(e),null!=e._dayOfYear&&(o=ae(e._a[St],i[St]),(e._dayOfYear>H(o)||0===e._dayOfYear)&&(w(e)._overflowDayOfYear=!0),n=V(o,0,e._dayOfYear),e._a[Tt]=n.getUTCMonth(),e._a[Et]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=l[t]=i[t];for(;t<7;t++)e._a[t]=l[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[kt]&&0===e._a[Ct]&&0===e._a[Dt]&&0===e._a[Ot]&&(e._nextDay=!0,e._a[kt]=0),e._d=(e._useUTC?V:function(e,t,n,i,r,o,s){var a=new Date(e,t,n,i,r,o,s);return e<100&&0<=e&&isFinite(a.getFullYear())&&a.setFullYear(e),a}).apply(null,l),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[kt]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(w(e).weekdayMismatch=!0)}}function ce(e){var t,n,i,r,o,s,a=e._i,l=Kt.exec(a)||Qt.exec(a);if(l){for(w(e).iso=!0,t=0,n=Jt.length;t<n;t++)if(Jt[t][1].exec(l[1])){r=Jt[t][0],i=!1!==Jt[t][2];break}if(null==r)return void(e._isValid=!1);if(l[3]){for(t=0,n=en.length;t<n;t++)if(en[t][1].exec(l[3])){o=(l[2]||" ")+en[t][0];break}if(null==o)return void(e._isValid=!1)}if(!i&&null!=o)return void(e._isValid=!1);if(l[4]){if(!Zt.exec(l[4]))return void(e._isValid=!1);s="Z"}e._f=r+(o||"")+(s||""),de(e)}else e._isValid=!1}function ue(e){var t,n,i,r,o,s,a,l,c,u,d,h=nn.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim());if(h){var f=(r=h[4],o=h[3],s=h[2],a=h[5],l=h[6],c=h[7],d=[(u=parseInt(r,10),u<=49?2e3+u:u<=999?1900+u:u),jt.indexOf(o),parseInt(s,10),parseInt(a,10),parseInt(l,10)],c&&d.push(parseInt(c,10)),d);if(t=h[1],n=f,i=e,t&&zt.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(w(i).weekdayMismatch=!0,!(i._isValid=!1)))return;e._a=f,e._tzm=function(e,t,n){if(e)return rn[e];if(t)return 0;var i=parseInt(n,10),r=i%100;return(i-r)/100*60+r}(h[8],h[9],h[10]),e._d=V.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),w(e).rfc2822=!0}else e._isValid=!1}function de(e){if(e._f!==y.ISO_8601)if(e._f!==y.RFC_2822){e._a=[],w(e).empty=!0;var t,n,i,r,o,s=""+e._i,a=s.length,l=0;for(i=A(e._f,e._locale).match(tt)||[],t=0;t<i.length;t++)r=i[t],(n=(s.match((g=r,v=e,_(bt,g)?bt[g](v._strict,v._locale):new RegExp(I(g.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,i,r){return t||n||i||r})))))||[])[0])&&(0<(o=s.substr(0,s.indexOf(n))).length&&w(e).unusedInput.push(o),s=s.slice(s.indexOf(n)+n.length),l+=n.length),rt[r]?(n?w(e).empty=!1:w(e).unusedTokens.push(r),f=r,m=e,null!=(p=n)&&_(xt,f)&&xt[f](p,m._a,m,f)):e._strict&&!n&&w(e).unusedTokens.push(r);w(e).charsLeftOver=a-l,0<s.length&&w(e).unusedInput.push(s),e._a[kt]<=12&&!0===w(e).bigHour&&0<e._a[kt]&&(w(e).bigHour=void 0),w(e).parsedDateParts=e._a.slice(0),w(e).meridiem=e._meridiem,e._a[kt]=(c=e._locale,u=e._a[kt],null==(d=e._meridiem)?u:null!=c.meridiemHour?c.meridiemHour(u,d):(null!=c.isPM&&((h=c.isPM(d))&&u<12&&(u+=12),h||12!==u||(u=0)),u)),le(e),se(e)}else ue(e);else ce(e);var c,u,d,h,f,p,m,g,v}function he(e){var t,n,i,r,o=e._i,s=e._f;return e._locale=e._locale||oe(e._l),null===o||void 0===s&&""===o?g({nullInput:!0}):("string"==typeof o&&(e._i=o=e._locale.preparse(o)),x(o)?new b(se(o)):(d(o)?e._d=o:a(s)?function(e){var t,n,i,r,o;if(0===e._f.length)return w(e).invalidFormat=!0,e._d=new Date(NaN);for(r=0;r<e._f.length;r++)o=0,t=v({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[r],de(t),m(t)&&(o+=w(t).charsLeftOver,o+=10*w(t).unusedTokens.length,w(t).score=o,(null==i||o<i)&&(i=o,n=t));f(e,n||t)}(e):s?de(e):c(r=(t=e)._i)?t._d=new Date(y.now()):d(r)?t._d=new Date(r.valueOf()):"string"==typeof r?(n=t,null===(i=tn.exec(n._i))?(ce(n),!1===n._isValid&&(delete n._isValid,ue(n),!1===n._isValid&&(delete n._isValid,y.createFromInputFallback(n)))):n._d=new Date(+i[1])):a(r)?(t._a=h(r.slice(0),function(e){return parseInt(e,10)}),le(t)):l(r)?function(e){if(!e._d){var t=N(e._i);e._a=h([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),le(e)}}(t):u(r)?t._d=new Date(r):y.createFromInputFallback(t),m(e)||(e._d=null),e))}function fe(e,t,n,i,r){var o,s={};return!0!==n&&!1!==n||(i=n,n=void 0),(l(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||a(e)&&0===e.length)&&(e=void 0),s._isAMomentObject=!0,s._useUTC=s._isUTC=r,s._l=n,s._i=e,s._f=t,s._strict=i,(o=new b(se(he(s))))._nextDay&&(o.add(1,"d"),o._nextDay=void 0),o}function pe(e,t,n,i){return fe(e,t,n,i,!1)}function me(e,t){var n,i;if(1===t.length&&a(t[0])&&(t=t[0]),!t.length)return pe();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}function ge(e){var t=N(e),n=t.year||0,i=t.quarter||0,r=t.month||0,o=t.week||0,s=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,u=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===At.call(an,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,i=0;i<an.length;++i)if(e[an[i]]){if(n)return!1;parseFloat(e[an[i]])!==T(e[an[i]])&&(n=!0)}return!0}(t),this._milliseconds=+u+1e3*c+6e4*l+1e3*a*60*60,this._days=+s+7*o,this._months=+r+3*i+12*n,this._data={},this._locale=oe(),this._bubble()}function ve(e){return e instanceof ge}function ye(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function _e(e,n){i(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+M(~~(e/60),2)+n+M(~~e%60,2)})}function we(e,t){var n=(t||"").match(e);if(null===n)return null;var i=((n[n.length-1]||[])+"").match(ln)||["-",0,0],r=60*i[1]+T(i[2]);return 0===r?0:"+"===i[0]?r:-r}function be(e,t){var n,i;return t._isUTC?(n=t.clone(),i=(x(e)||d(e)?e.valueOf():pe(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),y.updateOffset(n,!1),n):pe(e).local()}function xe(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Se(){return!!this.isValid()&&this._isUTC&&0===this._offset}function Te(e,t){var n,i,r,o,s,a,l=e,c=null;return ve(e)?l={ms:e._milliseconds,d:e._days,M:e._months}:u(e)?(l={},t?l[t]=e:l.milliseconds=e):(c=cn.exec(e))?(n="-"===c[1]?-1:1,l={y:0,d:T(c[Et])*n,h:T(c[kt])*n,m:T(c[Ct])*n,s:T(c[Dt])*n,ms:T(ye(1e3*c[Ot]))*n}):(c=un.exec(e))?(n="-"===c[1]?-1:(c[1],1),l={y:Ee(c[2],n),M:Ee(c[3],n),w:Ee(c[4],n),d:Ee(c[5],n),h:Ee(c[6],n),m:Ee(c[7],n),s:Ee(c[8],n)}):null==l?l={}:"object"==typeof l&&("from"in l||"to"in l)&&(o=pe(l.from),s=pe(l.to),r=o.isValid()&&s.isValid()?(s=be(s,o),o.isBefore(s)?a=ke(o,s):((a=ke(s,o)).milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0},(l={}).ms=r.milliseconds,l.M=r.months),i=new ge(l),ve(e)&&_(e,"_locale")&&(i._locale=e._locale),i}function Ee(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function ke(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Ce(i,r){return function(e,t){var n;return null===t||isNaN(+t)||(o(r,"moment()."+r+"(period, number) is deprecated. Please use moment()."+r+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),De(this,Te(e="string"==typeof e?+e:e,t),i),this}}function De(e,t,n,i){var r=t._milliseconds,o=ye(t._days),s=ye(t._months);e.isValid()&&(i=null==i||i,s&&q(e,z(e,"Month")+s*n),o&&W(e,"Date",z(e,"Date")+o*n),r&&e._d.setTime(e._d.valueOf()+r*n),i&&y.updateOffset(e,o||s))}function Oe(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(n,"months");return-(n+(t-i<0?(t-i)/(i-e.clone().add(n-1,"months")):(t-i)/(e.clone().add(n+1,"months")-i)))||0}function Ne(e){var t;return void 0===e?this._locale._abbr:(null!=(t=oe(e))&&(this._locale=t),this)}function Me(){return this._locale}function Ae(e,t){i(0,[e,e.length],0,t)}function Le(e,t,n,i,r){var o;return null==e?$(this,i,r).year:((o=K(e,i,r))<t&&(t=o),function(e,t,n,i,r){var o=X(e,t,n,i,r),s=V(o.year,0,o.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}.call(this,e,t,n,i,r))}function Ie(e,t){t[Ot]=T(1e3*("0."+e))}function Pe(e){return e}function je(e,t,n,i){var r=oe(),o=p().set(i,t);return r[n](o,e)}function He(e,t,n){if(u(e)&&(t=e,e=void 0),e=e||"",null!=t)return je(e,t,n,"month");var i,r=[];for(i=0;i<12;i++)r[i]=je(e,i,n,"month");return r}function Ye(e,t,n,i){t=("boolean"==typeof e||(n=t=e,e=!1),u(t)&&(n=t,t=void 0),t||"");var r=oe(),o=e?r._week.dow:0;if(null!=n)return je(t,(n+o)%7,i,"day");var s,a=[];for(s=0;s<7;s++)a[s]=je(t,(s+o)%7,i,"day");return a}function Re(e,t,n,i){var r=Te(t,n);return e._milliseconds+=i*r._milliseconds,e._days+=i*r._days,e._months+=i*r._months,e._bubble()}function ze(e){return e<0?Math.floor(e):Math.ceil(e)}function We(e){return 4800*e/146097}function Fe(e){return 146097*e/4800}function qe(e){return function(){return this.as(e)}}function Ue(e){return function(){return this.isValid()?this._data[e]:NaN}}function Be(e){return(0<e)-(e<0)||+e}function Ve(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Rn(this._milliseconds)/1e3,i=Rn(this._days),r=Rn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var o=S(r/12),s=r%=12,a=i,l=t,c=e,u=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var h=d<0?"-":"",f=Be(this._months)!==Be(d)?"-":"",p=Be(this._days)!==Be(d)?"-":"",m=Be(this._milliseconds)!==Be(d)?"-":"";return h+"P"+(o?f+o+"Y":"")+(s?f+s+"M":"")+(a?p+a+"D":"")+(l||c||u?"T":"")+(l?m+l+"H":"")+(c?m+c+"M":"")+(u?m+u+"S":"")}var Ge,Xe;Xe=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,i=0;i<n;i++)if(i in t&&e.call(this,t[i],i,t))return!0;return!1};var $e,Ke=y.momentProperties=[],Qe=!1,Ze={};y.suppressDeprecationWarnings=!1,y.deprecationHandler=null,$e=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)_(e,t)&&n.push(t);return n};var Je={},et={},tt=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,nt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,it={},rt={},ot=/\d/,st=/\d\d/,at=/\d{3}/,lt=/\d{4}/,ct=/[+-]?\d{6}/,ut=/\d\d?/,dt=/\d\d\d\d?/,ht=/\d\d\d\d\d\d?/,ft=/\d{1,3}/,pt=/\d{1,4}/,mt=/[+-]?\d{1,6}/,gt=/\d+/,vt=/[+-]?\d+/,yt=/Z|[+-]\d\d:?\d\d/gi,_t=/Z|[+-]\d\d(?::?\d\d)?/gi,wt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,bt={},xt={},St=0,Tt=1,Et=2,kt=3,Ct=4,Dt=5,Ot=6,Nt=7,Mt=8;i("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),i(0,["YY",2],0,function(){return this.year()%100}),i(0,["YYYY",4],0,"year"),i(0,["YYYYY",5],0,"year"),i(0,["YYYYYY",6,!0],0,"year"),t("year","y"),n("year",1),L("Y",vt),L("YY",ut,st),L("YYYY",pt,lt),L("YYYYY",mt,ct),L("YYYYYY",mt,ct),P(["YYYYY","YYYYYY"],St),P("YYYY",function(e,t){t[St]=2===e.length?y.parseTwoDigitYear(e):T(e)}),P("YY",function(e,t){t[St]=y.parseTwoDigitYear(e)}),P("Y",function(e,t){t[St]=parseInt(e,10)}),y.parseTwoDigitYear=function(e){return T(e)+(68<T(e)?1900:2e3)};var At,Lt=R("FullYear",!0);At=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},i("M",["MM",2],"Mo",function(){return this.month()+1}),i("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),i("MMMM",0,0,function(e){return this.localeData().months(this,e)}),t("month","M"),n("month",8),L("M",ut),L("MM",ut,st),L("MMM",function(e,t){return t.monthsShortRegex(e)}),L("MMMM",function(e,t){return t.monthsRegex(e)}),P(["M","MM"],function(e,t){t[Tt]=T(e)-1}),P(["MMM","MMMM"],function(e,t,n,i){var r=n._locale.monthsParse(e,i,n._strict);null!=r?t[Tt]=r:w(n).invalidMonth=e});var It=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Pt="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),jt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Ht=wt,Yt=wt;i("w",["ww",2],"wo","week"),i("W",["WW",2],"Wo","isoWeek"),t("week","w"),t("isoWeek","W"),n("week",5),n("isoWeek",5),L("w",ut),L("ww",ut,st),L("W",ut),L("WW",ut,st),j(["w","ww","W","WW"],function(e,t,n,i){t[i.substr(0,1)]=T(e)}),i("d",0,"do","day"),i("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),i("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),i("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),i("e",0,0,"weekday"),i("E",0,0,"isoWeekday"),t("day","d"),t("weekday","e"),t("isoWeekday","E"),n("day",11),n("weekday",11),n("isoWeekday",11),L("d",ut),L("e",ut),L("E",ut),L("dd",function(e,t){return t.weekdaysMinRegex(e)}),L("ddd",function(e,t){return t.weekdaysShortRegex(e)}),L("dddd",function(e,t){return t.weekdaysRegex(e)}),j(["dd","ddd","dddd"],function(e,t,n,i){var r=n._locale.weekdaysParse(e,i,n._strict);null!=r?t.d=r:w(n).invalidWeekday=e}),j(["d","e","E"],function(e,t,n,i){t[i]=T(e)});var Rt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),zt="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Wt="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Ft=wt,qt=wt,Ut=wt;i("H",["HH",2],0,"hour"),i("h",["hh",2],0,Z),i("k",["kk",2],0,function(){return this.hours()||24}),i("hmm",0,0,function(){return""+Z.apply(this)+M(this.minutes(),2)}),i("hmmss",0,0,function(){return""+Z.apply(this)+M(this.minutes(),2)+M(this.seconds(),2)}),i("Hmm",0,0,function(){return""+this.hours()+M(this.minutes(),2)}),i("Hmmss",0,0,function(){return""+this.hours()+M(this.minutes(),2)+M(this.seconds(),2)}),J("a",!0),J("A",!1),t("hour","h"),n("hour",13),L("a",ee),L("A",ee),L("H",ut),L("h",ut),L("k",ut),L("HH",ut,st),L("hh",ut,st),L("kk",ut,st),L("hmm",dt),L("hmmss",ht),L("Hmm",dt),L("Hmmss",ht),P(["H","HH"],kt),P(["k","kk"],function(e,t,n){var i=T(e);t[kt]=24===i?0:i}),P(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),P(["h","hh"],function(e,t,n){t[kt]=T(e),w(n).bigHour=!0}),P("hmm",function(e,t,n){var i=e.length-2;t[kt]=T(e.substr(0,i)),t[Ct]=T(e.substr(i)),w(n).bigHour=!0}),P("hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[kt]=T(e.substr(0,i)),t[Ct]=T(e.substr(i,2)),t[Dt]=T(e.substr(r)),w(n).bigHour=!0}),P("Hmm",function(e,t,n){var i=e.length-2;t[kt]=T(e.substr(0,i)),t[Ct]=T(e.substr(i))}),P("Hmmss",function(e,t,n){var i=e.length-4,r=e.length-2;t[kt]=T(e.substr(0,i)),t[Ct]=T(e.substr(i,2)),t[Dt]=T(e.substr(r))});var Bt,Vt=R("Hours",!0),Gt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Pt,monthsShort:jt,week:{dow:0,doy:6},weekdays:Rt,weekdaysMin:Wt,weekdaysShort:zt,meridiemParse:/[ap]\.?m?\.?/i},Xt={},$t={},Kt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Qt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Zt=/Z|[+-]\d\d(?::?\d\d)?/,Jt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],en=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],tn=/^\/?Date\((\-?\d+)/i,nn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,rn={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};y.createFromInputFallback=e("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),y.ISO_8601=function(){},y.RFC_2822=function(){};var on=e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=pe.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:g()}),sn=e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=pe.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:g()}),an=["year","quarter","month","week","day","hour","minute","second","millisecond"];_e("Z",":"),_e("ZZ",""),L("Z",_t),L("ZZ",_t),P(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=we(_t,e)});var ln=/([\+\-]|\d\d)/gi;y.updateOffset=function(){};var cn=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,un=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Te.fn=ge.prototype,Te.invalid=function(){return Te(NaN)};var dn=Ce(1,"add"),hn=Ce(-1,"subtract");y.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",y.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var fn=e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});i(0,["gg",2],0,function(){return this.weekYear()%100}),i(0,["GG",2],0,function(){return this.isoWeekYear()%100}),Ae("gggg","weekYear"),Ae("ggggg","weekYear"),Ae("GGGG","isoWeekYear"),Ae("GGGGG","isoWeekYear"),t("weekYear","gg"),t("isoWeekYear","GG"),n("weekYear",1),n("isoWeekYear",1),L("G",vt),L("g",vt),L("GG",ut,st),L("gg",ut,st),L("GGGG",pt,lt),L("gggg",pt,lt),L("GGGGG",mt,ct),L("ggggg",mt,ct),j(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,i){t[i.substr(0,2)]=T(e)}),j(["gg","GG"],function(e,t,n,i){t[i]=y.parseTwoDigitYear(e)}),i("Q",0,"Qo","quarter"),t("quarter","Q"),n("quarter",7),L("Q",ot),P("Q",function(e,t){t[Tt]=3*(T(e)-1)}),i("D",["DD",2],"Do","date"),t("date","D"),n("date",9),L("D",ut),L("DD",ut,st),L("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),P(["D","DD"],Et),P("Do",function(e,t){t[Et]=T(e.match(ut)[0])});var pn=R("Date",!0);i("DDD",["DDDD",3],"DDDo","dayOfYear"),t("dayOfYear","DDD"),n("dayOfYear",4),L("DDD",ft),L("DDDD",at),P(["DDD","DDDD"],function(e,t,n){n._dayOfYear=T(e)}),i("m",["mm",2],0,"minute"),t("minute","m"),n("minute",14),L("m",ut),L("mm",ut,st),P(["m","mm"],Ct);var mn=R("Minutes",!1);i("s",["ss",2],0,"second"),t("second","s"),n("second",15),L("s",ut),L("ss",ut,st),P(["s","ss"],Dt);var gn,vn=R("Seconds",!1);for(i("S",0,0,function(){return~~(this.millisecond()/100)}),i(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),i(0,["SSS",3],0,"millisecond"),i(0,["SSSS",4],0,function(){return 10*this.millisecond()}),i(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),i(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),i(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),i(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),i(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),t("millisecond","ms"),n("millisecond",16),L("S",ft,ot),L("SS",ft,st),L("SSS",ft,at),gn="SSSS";gn.length<=9;gn+="S")L(gn,gt);for(gn="S";gn.length<=9;gn+="S")P(gn,Ie);var yn=R("Milliseconds",!1);i("z",0,0,"zoneAbbr"),i("zz",0,0,"zoneName");var _n=b.prototype;_n.add=dn,_n.calendar=function(e,t){var n=e||pe(),i=be(n,this).startOf("day"),r=y.calendarFormat(this,i)||"sameElse",o=t&&(k(t[r])?t[r].call(this,n):t[r]);return this.format(o||this.localeData().calendar(r,this,pe(n)))},_n.clone=function(){return new b(this)},_n.diff=function(e,t,n){var i,r,o;if(!this.isValid())return NaN;if(!(i=be(e,this)).isValid())return NaN;switch(r=6e4*(i.utcOffset()-this.utcOffset()),t=O(t)){case"year":o=Oe(this,i)/12;break;case"month":o=Oe(this,i);break;case"quarter":o=Oe(this,i)/3;break;case"second":o=(this-i)/1e3;break;case"minute":o=(this-i)/6e4;break;case"hour":o=(this-i)/36e5;break;case"day":o=(this-i-r)/864e5;break;case"week":o=(this-i-r)/6048e5;break;default:o=this-i}return n?o:S(o)},_n.endOf=function(e){return void 0===(e=O(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},_n.format=function(e){e||(e=this.isUtc()?y.defaultFormatUtc:y.defaultFormat);var t=r(this,e);return this.localeData().postformat(t)},_n.from=function(e,t){return this.isValid()&&(x(e)&&e.isValid()||pe(e).isValid())?Te({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},_n.fromNow=function(e){return this.from(pe(),e)},_n.to=function(e,t){return this.isValid()&&(x(e)&&e.isValid()||pe(e).isValid())?Te({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},_n.toNow=function(e){return this.to(pe(),e)},_n.get=function(e){return k(this[e=O(e)])?this[e]():this},_n.invalidAt=function(){return w(this).overflow},_n.isAfter=function(e,t){var n=x(e)?e:pe(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=O(c(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},_n.isBefore=function(e,t){var n=x(e)?e:pe(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=O(c(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},_n.isBetween=function(e,t,n,i){return("("===(i=i||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===i[1]?this.isBefore(t,n):!this.isAfter(t,n))},_n.isSame=function(e,t){var n,i=x(e)?e:pe(e);return!(!this.isValid()||!i.isValid())&&("millisecond"===(t=O(t||"millisecond"))?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},_n.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},_n.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},_n.isValid=function(){return m(this)},_n.lang=fn,_n.locale=Ne,_n.localeData=Me,_n.max=sn,_n.min=on,_n.parsingFlags=function(){return f({},w(this))},_n.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:et[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=N(e)),i=0;i<n.length;i++)this[n[i].unit](e[n[i].unit]);else if(k(this[e=O(e)]))return this[e](t);return this},_n.startOf=function(e){switch(e=O(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},_n.subtract=hn,_n.toArray=function(){return[this.year(),this.month(),this.date(),this.hour(),this.minute(),this.second(),this.millisecond()]},_n.toObject=function(){return{years:this.year(),months:this.month(),date:this.date(),hours:this.hours(),minutes:this.minutes(),seconds:this.seconds(),milliseconds:this.milliseconds()}},_n.toDate=function(){return new Date(this.valueOf())},_n.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?r(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):k(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this._d.valueOf()).toISOString().replace("Z",r(n,"Z")):r(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},_n.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r=t+'[")]';return this.format(n+i+"-MM-DD[T]HH:mm:ss.SSS"+r)},_n.toJSON=function(){return this.isValid()?this.toISOString():null},_n.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},_n.unix=function(){return Math.floor(this.valueOf()/1e3)},_n.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},_n.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},_n.year=Lt,_n.isLeapYear=function(){return Y(this.year())},_n.weekYear=function(e){return Le.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},_n.isoWeekYear=function(e){return Le.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},_n.quarter=_n.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},_n.month=U,_n.daysInMonth=function(){return F(this.year(),this.month())},_n.week=_n.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},_n.isoWeek=_n.isoWeeks=function(e){var t=$(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},_n.weeksInYear=function(){var e=this.localeData()._week;return K(this.year(),e.dow,e.doy)},_n.isoWeeksInYear=function(){return K(this.year(),1,4)},_n.date=pn,_n.day=_n.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,i=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-i,"d")):i},_n.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},_n.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,i=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?i:i-7)},_n.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},_n.hour=_n.hours=Vt,_n.minute=_n.minutes=mn,_n.second=_n.seconds=vn,_n.millisecond=_n.milliseconds=yn,_n.utcOffset=function(e,t,n){var i,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?r:xe(this);if("string"==typeof e){if(null===(e=we(_t,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(i=xe(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?De(this,Te(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,y.updateOffset(this,!0),this._changeInProgress=null)),this},_n.utc=function(e){return this.utcOffset(0,e)},_n.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(xe(this),"m")),this},_n.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=we(yt,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},_n.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?pe(e).utcOffset():0,(this.utcOffset()-e)%60==0)},_n.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},_n.isLocal=function(){return!!this.isValid()&&!this._isUTC},_n.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},_n.isUtc=Se,_n.isUTC=Se,_n.zoneAbbr=function(){return this._isUTC?"UTC":""},_n.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},_n.dates=e("dates accessor is deprecated. Use date instead.",pn),_n.months=e("months accessor is deprecated. Use month instead",U),_n.years=e("years accessor is deprecated. Use year instead",Lt),_n.zone=e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),_n.isDSTShifted=e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!c(this._isDSTShifted))return this._isDSTShifted;var e={};if(v(e,this),(e=he(e))._a){var t=e._isUTC?p(e._a):pe(e._a);this._isDSTShifted=this.isValid()&&0<s(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var wn=D.prototype;wn.calendar=function(e,t,n){var i=this._calendar[e]||this._calendar.sameElse;return k(i)?i.call(t,n):i},wn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},wn.invalidDate=function(){return this._invalidDate},wn.ordinal=function(e){return this._ordinal.replace("%d",e)},wn.preparse=Pe,wn.postformat=Pe,wn.relativeTime=function(e,t,n,i){var r=this._relativeTime[n];return k(r)?r(e,t,n,i):r.replace(/%d/i,e)},wn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return k(n)?n(t):n.replace(/%s/i,t)},wn.set=function(e){var t,n;for(n in e)k(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},wn.months=function(e,t){return e?a(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||It).test(t)?"format":"standalone"][e.month()]:a(this._months)?this._months:this._months.standalone},wn.monthsShort=function(e,t){return e?a(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[It.test(t)?"format":"standalone"][e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},wn.monthsParse=function(e,t,n){var i,r,o;if(this._monthsParseExact)return function(e,t,n){var i,r,o,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)o=p([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(o,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(o,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(r=At.call(this._shortMonthsParse,s))?r:null:-1!==(r=At.call(this._longMonthsParse,s))?r:null:"MMM"===t?-1!==(r=At.call(this._shortMonthsParse,s))?r:-1!==(r=At.call(this._longMonthsParse,s))?r:null:-1!==(r=At.call(this._longMonthsParse,s))?r:-1!==(r=At.call(this._shortMonthsParse,s))?r:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=p([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(o="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(o.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[i].test(e))return i;if(n&&"MMM"===t&&this._shortMonthsParse[i].test(e))return i;if(!n&&this._monthsParse[i].test(e))return i}},wn.monthsRegex=function(e){return this._monthsParseExact?(_(this,"_monthsRegex")||B.call(this),e?this._monthsStrictRegex:this._monthsRegex):(_(this,"_monthsRegex")||(this._monthsRegex=Yt),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},wn.monthsShortRegex=function(e){return this._monthsParseExact?(_(this,"_monthsRegex")||B.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(_(this,"_monthsShortRegex")||(this._monthsShortRegex=Ht),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},wn.week=function(e){return $(e,this._week.dow,this._week.doy).week},wn.firstDayOfYear=function(){return this._week.doy},wn.firstDayOfWeek=function(){return this._week.dow},wn.weekdays=function(e,t){return e?a(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:a(this._weekdays)?this._weekdays:this._weekdays.standalone},wn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},wn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},wn.weekdaysParse=function(e,t,n){var i,r,o;if(this._weekdaysParseExact)return function(e,t,n){var i,r,o,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)o=p([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(o,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(o,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(o,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(r=At.call(this._weekdaysParse,s))?r:null:"ddd"===t?-1!==(r=At.call(this._shortWeekdaysParse,s))?r:null:-1!==(r=At.call(this._minWeekdaysParse,s))?r:null:"dddd"===t?-1!==(r=At.call(this._weekdaysParse,s))?r:-1!==(r=At.call(this._shortWeekdaysParse,s))?r:-1!==(r=At.call(this._minWeekdaysParse,s))?r:null:"ddd"===t?-1!==(r=At.call(this._shortWeekdaysParse,s))?r:-1!==(r=At.call(this._weekdaysParse,s))?r:-1!==(r=At.call(this._minWeekdaysParse,s))?r:null:-1!==(r=At.call(this._minWeekdaysParse,s))?r:-1!==(r=At.call(this._weekdaysParse,s))?r:-1!==(r=At.call(this._shortWeekdaysParse,s))?r:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(r=p([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".",".?")+"$","i")),this._weekdaysParse[i]||(o="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[i]=new RegExp(o.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[i].test(e))return i;if(n&&"ddd"===t&&this._shortWeekdaysParse[i].test(e))return i;if(n&&"dd"===t&&this._minWeekdaysParse[i].test(e))return i;if(!n&&this._weekdaysParse[i].test(e))return i}},wn.weekdaysRegex=function(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Q.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(_(this,"_weekdaysRegex")||(this._weekdaysRegex=Ft),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},wn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Q.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(_(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qt),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},wn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(_(this,"_weekdaysRegex")||Q.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(_(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ut),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},wn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},wn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ie("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===T(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),y.lang=e("moment.lang is deprecated. Use moment.locale instead.",ie),y.langData=e("moment.langData is deprecated. Use moment.localeData instead.",oe);var bn=Math.abs,xn=qe("ms"),Sn=qe("s"),Tn=qe("m"),En=qe("h"),kn=qe("d"),Cn=qe("w"),Dn=qe("M"),On=qe("y"),Nn=Ue("milliseconds"),Mn=Ue("seconds"),An=Ue("minutes"),Ln=Ue("hours"),In=Ue("days"),Pn=Ue("months"),jn=Ue("years"),Hn=Math.round,Yn={ss:44,s:45,m:45,h:22,d:26,M:11},Rn=Math.abs,zn=ge.prototype;return zn.isValid=function(){return this._isValid},zn.abs=function(){var e=this._data;return this._milliseconds=bn(this._milliseconds),this._days=bn(this._days),this._months=bn(this._months),e.milliseconds=bn(e.milliseconds),e.seconds=bn(e.seconds),e.minutes=bn(e.minutes),e.hours=bn(e.hours),e.months=bn(e.months),e.years=bn(e.years),this},zn.add=function(e,t){return Re(this,e,t,1)},zn.subtract=function(e,t){return Re(this,e,t,-1)},zn.as=function(e){if(!this.isValid())return NaN;var t,n,i=this._milliseconds;if("month"===(e=O(e))||"year"===e)return t=this._days+i/864e5,n=this._months+We(t),"month"===e?n:n/12;switch(t=this._days+Math.round(Fe(this._months)),e){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return 24*t+i/36e5;case"minute":return 1440*t+i/6e4;case"second":return 86400*t+i/1e3;case"millisecond":return Math.floor(864e5*t)+i;default:throw new Error("Unknown unit "+e)}},zn.asMilliseconds=xn,zn.asSeconds=Sn,zn.asMinutes=Tn,zn.asHours=En,zn.asDays=kn,zn.asWeeks=Cn,zn.asMonths=Dn,zn.asYears=On,zn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*T(this._months/12):NaN},zn._bubble=function(){var e,t,n,i,r,o=this._milliseconds,s=this._days,a=this._months,l=this._data;return 0<=o&&0<=s&&0<=a||o<=0&&s<=0&&a<=0||(o+=864e5*ze(Fe(a)+s),a=s=0),l.milliseconds=o%1e3,e=S(o/1e3),l.seconds=e%60,t=S(e/60),l.minutes=t%60,n=S(t/60),l.hours=n%24,a+=r=S(We(s+=S(n/24))),s-=ze(Fe(r)),i=S(a/12),a%=12,l.days=s,l.months=a,l.years=i,this},zn.clone=function(){return Te(this)},zn.get=function(e){return e=O(e),this.isValid()?this[e+"s"]():NaN},zn.milliseconds=Nn,zn.seconds=Mn,zn.minutes=An,zn.hours=Ln,zn.days=In,zn.weeks=function(){return S(this.days()/7)},zn.months=Pn,zn.years=jn,zn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,i,r,o,s,a,l,c,u,d,h=this.localeData(),f=(n=!e,i=h,r=Te(t=this).abs(),o=Hn(r.as("s")),s=Hn(r.as("m")),a=Hn(r.as("h")),l=Hn(r.as("d")),c=Hn(r.as("M")),u=Hn(r.as("y")),(d=o<=Yn.ss&&["s",o]||o<Yn.s&&["ss",o]||s<=1&&["m"]||s<Yn.m&&["mm",s]||a<=1&&["h"]||a<Yn.h&&["hh",a]||l<=1&&["d"]||l<Yn.d&&["dd",l]||c<=1&&["M"]||c<Yn.M&&["MM",c]||u<=1&&["y"]||["yy",u])[2]=n,d[3]=0<+t,d[4]=i,function(e,t,n,i,r){return r.relativeTime(t||1,!!n,e,i)}.apply(null,d));return e&&(f=h.pastFuture(+this,f)),h.postformat(f)},zn.toISOString=Ve,zn.toString=Ve,zn.toJSON=Ve,zn.locale=Ne,zn.localeData=Me,zn.toIsoString=e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ve),zn.lang=fn,i("X",0,0,"unix"),i("x",0,0,"valueOf"),L("x",vt),L("X",/[+-]?\d+(\.\d{1,3})?/),P("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),P("x",function(e,t,n){n._d=new Date(T(e))}),y.version="2.20.1",Ge=pe,y.fn=_n,y.min=function(){return me("isBefore",[].slice.call(arguments,0))},y.max=function(){return me("isAfter",[].slice.call(arguments,0))},y.now=function(){return Date.now?Date.now():+new Date},y.utc=p,y.unix=function(e){return pe(1e3*e)},y.months=function(e,t){return He(e,t,"months")},y.isDate=d,y.locale=ie,y.invalid=g,y.duration=Te,y.isMoment=x,y.weekdays=function(e,t,n){return Ye(e,t,n,"weekdays")},y.parseZone=function(){return pe.apply(null,arguments).parseZone()},y.localeData=oe,y.isDuration=ve,y.monthsShort=function(e,t){return He(e,t,"monthsShort")},y.weekdaysMin=function(e,t,n){return Ye(e,t,n,"weekdaysMin")},y.defineLocale=re,y.updateLocale=function(e,t){if(null!=t){var n,i,r=Gt;null!=(i=ne(e))&&(r=i._config),(n=new D(t=C(r,t))).parentLocale=Xt[e],Xt[e]=n,ie(e)}else null!=Xt[e]&&(null!=Xt[e].parentLocale?Xt[e]=Xt[e].parentLocale:null!=Xt[e]&&delete Xt[e]);return Xt[e]},y.locales=function(){return $e(Xt)},y.weekdaysShort=function(e,t,n){return Ye(e,t,n,"weekdaysShort")},y.normalizeUnits=O,y.relativeTimeRounding=function(e){return void 0===e?Hn:"function"==typeof e&&(Hn=e,!0)},y.relativeTimeThreshold=function(e,t){return void 0!==Yn[e]&&(void 0===t?Yn[e]:(Yn[e]=t,"s"===e&&(Yn.ss=t-1),!0))},y.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},y.prototype=_n,y.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},y});
/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";


"use strict";

$(window).on('load', function () {
  $(".loader").fadeOut("slow");
});


// Global
$(function () {
  let sidebar_nicescroll_opts = {
    cursoropacitymin: 0,
    cursoropacitymax: .8,
    zindex: 892
  }, now_layout_class = null;

  var sidebar_sticky = function () {
    if ($("body").hasClass('layout-2')) {
      $("body.layout-2 #sidebar-wrapper").stick_in_parent({
        parent: $('body')
      });
      $("body.layout-2 #sidebar-wrapper").stick_in_parent({ recalc_every: 1 });
    }
  }
  sidebar_sticky();

  var sidebar_nicescroll;
  var update_sidebar_nicescroll = function () {
    let a = setInterval(function () {
      if (sidebar_nicescroll != null)
        sidebar_nicescroll.resize();
    }, 10);

    setTimeout(function () {
      clearInterval(a);
    }, 600);
  }

  var sidebar_dropdown = function () {
    if ($(".main-sidebar").length) {
      $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
      sidebar_nicescroll = $(".main-sidebar").getNiceScroll();

      $(".main-sidebar .sidebar-menu li a.has-dropdown").off('click').on('click', function () {
        var me = $(this);

        me.parent().find('> .dropdown-menu').slideToggle(500, function () {
          update_sidebar_nicescroll();
          return false;
        });
        return false;
      });
    }
  }
  sidebar_dropdown();

  if ($("#top-5-scroll").length) {
    $("#top-5-scroll").css({
      height: 315
    }).niceScroll();
  }
  if ($("#scroll-new").length) {
    $("#scroll-new").css({
      height: 200
    }).niceScroll();
  }

  $(".main-content").css({
    minHeight: $(window).outerHeight() - 95
  })

  $(".nav-collapse-toggle").click(function () {
    $(this).parent().find('.navbar-nav').toggleClass('show');
    return false;
  });

  $(document).on('click', function (e) {
    $(".nav-collapse .navbar-nav").removeClass('show');
  });

  var toggle_sidebar_mini = function (mini) {
    let body = $('body');

    if (!mini) {
      body.removeClass('sidebar-mini');
      $(".main-sidebar").css({
        overflow: 'hidden'
      });
      setTimeout(function () {
        $(".main-sidebar").niceScroll(sidebar_nicescroll_opts);
        sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
      }, 500);
      $(".main-sidebar .sidebar-menu > li > ul .dropdown-title").remove();
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('data-toggle');
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('data-original-title');
      $(".main-sidebar .sidebar-menu > li > a").removeAttr('title');
    } else {
      body.addClass('sidebar-mini');
      body.removeClass('sidebar-show');
      sidebar_nicescroll.remove();
      sidebar_nicescroll = null;
      $(".main-sidebar .sidebar-menu > li").each(function () {
        let me = $(this);

        if (me.find('> .dropdown-menu').length) {
          me.find('> .dropdown-menu').hide();
          me.find('> .dropdown-menu').prepend('<li class="dropdown-title pt-3">' + me.find('> a').text() + '</li>');
        } else {
          me.find('> a').attr('data-toggle', 'tooltip');
          me.find('> a').attr('data-original-title', me.find('> a').text());
          $("[data-toggle='tooltip']").tooltip({
            placement: 'right'
          });
        }
      });
    }
  }

  $("[data-toggle='sidebar']").click(function () {
    var body = $("body"),
      w = $(window);

    if (w.outerWidth() <= 1024) {
      body.removeClass('search-show search-gone');
      if (body.hasClass('sidebar-gone')) {
        body.removeClass('sidebar-gone');
        body.addClass('sidebar-show');
      } else {
        body.addClass('sidebar-gone');
        body.removeClass('sidebar-show');
      }

      update_sidebar_nicescroll();
    } else {
      body.removeClass('search-show search-gone');
      if (body.hasClass('sidebar-mini')) {
        toggle_sidebar_mini(false);
      } else {
        toggle_sidebar_mini(true);
      }
    }

    return false;
  });

  var toggleLayout = function () {
    var w = $(window),
      layout_class = $('body').attr('class') || '',
      layout_classes = (layout_class.trim().length > 0 ? layout_class.split(' ') : '');

    if (layout_classes.length > 0) {
      layout_classes.forEach(function (item) {
        if (item.indexOf('layout-') != -1) {
          now_layout_class = item;
        }
      });
    }

    if (w.outerWidth() <= 1024) {
      if ($('body').hasClass('sidebar-mini')) {
        toggle_sidebar_mini(false);
        $('.main-sidebar').niceScroll(sidebar_nicescroll_opts);
        sidebar_nicescroll = $(".main-sidebar").getNiceScroll();
      }

      $("body").addClass("sidebar-gone");
      $("body").removeClass("layout-2 layout-3 sidebar-mini sidebar-show");
      $("body").off('click').on('click', function (e) {
        if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
          $("body").removeClass("sidebar-show");
          $("body").addClass("sidebar-gone");
          $("body").removeClass("search-show");

          update_sidebar_nicescroll();
        }
      });

      update_sidebar_nicescroll();

      if (now_layout_class == 'layout-3') {
        let nav_second_classes = $(".navbar-secondary").attr('class'),
          nav_second = $(".navbar-secondary");

        nav_second.attr('data-nav-classes', nav_second_classes);
        nav_second.removeAttr('class');
        nav_second.addClass('main-sidebar');

        let main_sidebar = $(".main-sidebar");
        main_sidebar.find('.container').addClass('sidebar-wrapper').removeClass('container');
        main_sidebar.find('.navbar-nav').addClass('sidebar-menu').removeClass('navbar-nav');
        main_sidebar.find('.sidebar-menu .nav-item.dropdown.show a').click();
        main_sidebar.find('.sidebar-brand').remove();
        main_sidebar.find('.sidebar-menu').before($('<div>', {
          class: 'sidebar-brand'
        }).append(
          $('<a>', {
            href: $('.navbar-brand').attr('href'),
          }).html($('.navbar-brand').html())
        ));
        setTimeout(function () {
          sidebar_nicescroll = main_sidebar.niceScroll(sidebar_nicescroll_opts);
          sidebar_nicescroll = main_sidebar.getNiceScroll();
        }, 700);

        sidebar_dropdown();
        $(".main-wrapper").removeClass("container");
      }
    } else {
      $("body").removeClass("sidebar-gone sidebar-show");
      if (now_layout_class)
        $("body").addClass(now_layout_class);

      let nav_second_classes = $(".main-sidebar").attr('data-nav-classes'),
        nav_second = $(".main-sidebar");

      if (now_layout_class == 'layout-3' && nav_second.hasClass('main-sidebar')) {
        nav_second.find(".sidebar-menu li a.has-dropdown").off('click');
        nav_second.find('.sidebar-brand').remove();
        nav_second.removeAttr('class');
        nav_second.addClass(nav_second_classes);

        let main_sidebar = $(".navbar-secondary");
        main_sidebar.find('.sidebar-wrapper').addClass('container').removeClass('sidebar-wrapper');
        main_sidebar.find('.sidebar-menu').addClass('navbar-nav').removeClass('sidebar-menu');
        main_sidebar.find('.dropdown-menu').hide();
        main_sidebar.removeAttr('style');
        main_sidebar.removeAttr('tabindex');
        main_sidebar.removeAttr('data-nav-classes');
        $(".main-wrapper").addClass("container");
        // if(sidebar_nicescroll != null)
        //   sidebar_nicescroll.remove();
      } else if (now_layout_class == 'layout-2') {
        $("body").addClass("layout-2");
      } else {
        update_sidebar_nicescroll();
      }
    }
  }
  toggleLayout();
  $(window).resize(toggleLayout);

  $("[data-toggle='search']").click(function () {
    var body = $("body");

    if (body.hasClass('search-gone')) {
      body.addClass('search-gone');
      body.removeClass('search-show');
    } else {
      body.removeClass('search-gone');
      body.addClass('search-show');
    }
  });

  // tooltip
  $("[data-toggle='tooltip']").tooltip();

  // popover
  $('[data-toggle="popover"]').popover({
    container: 'body'
  });

  // Select2
  if (jQuery().select2) {
    $(".select2").select2();
  }

  // Selectric
  if (jQuery().selectric) {
    $(".selectric").selectric({
      disableOnMobile: false,
      nativeOnMobile: false
    });
  }

  $(".notification-toggle").dropdown();
  $(".notification-toggle").parent().on('shown.bs.dropdown', function () {
    $(".dropdown-list-icons").niceScroll({
      cursoropacitymin: .3,
      cursoropacitymax: .8,
      cursorwidth: 7
    });
  });

  $(".message-toggle").dropdown();
  $(".message-toggle").parent().on('shown.bs.dropdown', function () {
    $(".dropdown-list-message").niceScroll({
      cursoropacitymin: .3,
      cursoropacitymax: .8,
      cursorwidth: 7
    });
  });



  if (jQuery().summernote) {
    $(".summernote").summernote({
      dialogsInBody: true,
      minHeight: 250,
    });
    $(".summernote-simple").summernote({
      dialogsInBody: true,
      minHeight: 150,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough']],
        ['para', ['paragraph']]
      ]
    });
  }

  // Dismiss function
  $("[data-dismiss]").each(function () {
    var me = $(this),
      target = me.data('dismiss');

    me.click(function () {
      $(target).fadeOut(function () {
        $(target).remove();
      });
      return false;
    });
  });

  // Collapsable
  $("[data-collapse]").each(function () {
    var me = $(this),
      target = me.data('collapse');

    me.click(function () {
      $(target).collapse('toggle');
      $(target).on('shown.bs.collapse', function () {
        me.html('<i class="fas fa-minus"></i>');
      });
      $(target).on('hidden.bs.collapse', function () {
        me.html('<i class="fas fa-plus"></i>');
      });
      return false;
    });
  });


  // Background
  $("[data-background]").each(function () {
    var me = $(this);
    me.css({
      backgroundImage: 'url(' + me.data('background') + ')'
    });
  });

  // Custom Tab
  $("[data-tab]").each(function () {
    var me = $(this);

    me.click(function () {
      if (!me.hasClass('active')) {
        var tab_group = $('[data-tab-group="' + me.data('tab') + '"]'),
          tab_group_active = $('[data-tab-group="' + me.data('tab') + '"].active'),
          target = $(me.attr('href')),
          links = $('[data-tab="' + me.data('tab') + '"]');

        links.removeClass('active');
        me.addClass('active');
        target.addClass('active');
        tab_group_active.removeClass('active');
      }
      return false;
    });
  });

  // Bootstrap 4 Validation
  $(".needs-validation").submit(function () {
    var form = $(this);
    if (form[0].checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    form.addClass('was-validated');
  });

  // alert dismissible
  $(".alert-dismissible").each(function () {
    var me = $(this);

    me.find('.close').click(function () {
      me.alert('close');
    });
  });

  if ($('.main-navbar').length) {
  }

  // Image cropper
  $('[data-crop-image]').each(function (e) {
    $(this).css({
      overflow: 'hidden',
      position: 'relative',
      height: $(this).data('crop-image')
    });
  });

  // Slide Toggle
  $('[data-toggle-slide]').click(function () {
    let target = $(this).data('toggle-slide');

    $(target).slideToggle();
    return false;
  });

  // Dismiss modal
  $("[data-dismiss=modal]").click(function () {
    $(this).closest('.modal').modal('hide');

    return false;
  });

  // Width attribute
  $('[data-width]').each(function () {
    $(this).css({
      width: $(this).data('width')
    });
  });

  // Height attribute
  $('[data-height]').each(function () {
    $(this).css({
      height: $(this).data('height')
    });
  });

  // Chocolat
  if ($('.chocolat-parent').length && jQuery().Chocolat) {
    $('.chocolat-parent').Chocolat();
  }

  // Sortable card
  if ($('.sortable-card').length && jQuery().sortable) {
    $('.sortable-card').sortable({
      handle: '.card-header',
      opacity: .8,
      tolerance: 'pointer'
    });
  }

  // Daterangepicker
  if (jQuery().daterangepicker) {
    if ($(".datepicker").length) {
      $('.datepicker').daterangepicker({
        locale: { format: 'YYYY-MM-DD' },
        singleDatePicker: true,
      });
    }
    if ($(".datetimepicker").length) {
      $('.datetimepicker').daterangepicker({
        locale: { format: 'YYYY-MM-DD hh:mm' },
        singleDatePicker: true,
        timePicker: true,
        timePicker24Hour: true,
      });
    }
    if ($(".daterange").length) {
      $('.daterange').daterangepicker({
        locale: { format: 'YYYY-MM-DD' },
        drops: 'down',
        opens: 'right'
      });
    }
  }

  // Timepicker
  if (jQuery().timepicker && $(".timepicker").length) {
    $(".timepicker").timepicker({
      icons: {
        up: 'fas fa-chevron-up',
        down: 'fas fa-chevron-down'
      }
    });
  }

  $('#mini_sidebar_setting').on('change', function () {
    var _val = $(this).is(':checked') ? 'checked' : 'unchecked';
    if (_val === "checked") {
      toggle_sidebar_mini(true);
    } else {
      toggle_sidebar_mini(false);
    }
  });


  $(".theme-setting-toggle").on("click", function () {
    if ($(".theme-setting")[0].classList.contains("active")) {
      $(".theme-setting")[0].classList.remove('active');
    } else {
      $(".theme-setting")[0].classList += ' active';
    }
  });

  // full screen call

  $(document).on('click', '.fullscreen-btn', function (e) {
    if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }

  });

  // setting sidebar 

  $(".settingPanelToggle").on("click", function () {
    $(".settingSidebar").toggleClass("showSettingPanel")
  }), $(".page-wrapper").on("click", function () {
    $(".settingSidebar").removeClass("showSettingPanel")
  })

  // close right sidebar when click outside
  var mouse_is_inside = false;
  $('.settingSidebar').hover(function () {
    mouse_is_inside = true;
  }, function () {
    mouse_is_inside = false;
  });

  $("body").mouseup(function () {
    if (!mouse_is_inside) $(".settingSidebar").removeClass("showSettingPanel")
  });

  $(".settingSidebar-body").niceScroll();

  // theme change event
  $(".choose-theme li").on("click", function () {
    var bodytag = $("body"),
      selectedTheme = $(this),
      prevTheme = $(".choose-theme li.active").attr("title");

    $(".choose-theme li").removeClass("active"), selectedTheme.addClass("active");
    $(".choose-theme li.active").data("theme");

    bodytag.removeClass("theme-" + prevTheme);
    bodytag.addClass("theme-" + $(this).attr("title"));

  })

  // dark light sidebar button setting
  $(".sidebar-color input:radio").change(function () {
    if ($(this).val() == "1") {
      $('body').removeClass('dark-sidebar');
      $('body').addClass('light-sidebar');
    } else {
      $('body').removeClass('light-sidebar');
      $('body').addClass('dark-sidebar');
    }
  });

  // dark light layout button setting
  $(".layout-color input:radio").change(function () {
    if ($(this).val() == "1") {
      $('body').removeClass();
      $('body').addClass('light');
      $('body').addClass('light-sidebar');
      $('body').addClass('theme-white');

      $(".choose-theme li").removeClass("active");
      $(".choose-theme li[title|='white']").addClass("active");
      $(".selectgroup-input[value|='1']").prop("checked", true);

    } else {
      $('body').removeClass();
      $('body').addClass('dark');
      $('body').addClass('dark-sidebar');
      $('body').addClass('theme-black');

      $(".choose-theme li").removeClass("active");
      $(".choose-theme li[title|='black']").addClass("active");
      $(".selectgroup-input[value|='2']").prop("checked", true);
    }
  });

  // restore default to dark theme
  $(".btn-restore-theme").on("click", function () {
    //remove all class from body
    $('body').removeClass();
    jQuery("body").addClass('light');
    jQuery("body").addClass("dark-sidebar");
    jQuery("body").addClass("theme-white");

    // set default theme 
    $(".choose-theme li").removeClass("active");
    $(".choose-theme li[title|='white']").addClass("active");

    $(".select-layout[value|='1']").prop("checked", true);
    $(".select-sidebar[value|='2']").prop("checked", true);
    toggle_sidebar_mini(false);
    $('#mini_sidebar_setting').prop("checked", false);
  })

  //start up class add

  //add default class on body tag
  jQuery("body").addClass('light');
  jQuery("body").addClass("dark-sidebar");
  jQuery("body").addClass("theme-white");
  // set theme default color
  $(".choose-theme li").removeClass("active");
  $(".choose-theme li[title|='white']").addClass("active");
  //set default dark or light layout(1=light, 2=dark)
  $(".select-layout[value|='1']").prop("checked", true);
  //set default dark or light sidebar(1=light, 2=dark)
  $(".select-sidebar[value|='2']").prop("checked", true);

});


"use strict";

$("[data-checkboxes]").each(function() {
  var me = $(this),
    group = me.data('checkboxes'),
    role = me.data('checkbox-role');

  me.change(function() {
    var all = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"])'),
      checked = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"]):checked'),
      dad = $('[data-checkboxes="' + group + '"][data-checkbox-role="dad"]'),
      total = all.length,
      checked_length = checked.length;

    if(role == 'dad') {
      if(me.is(':checked')) {
        all.prop('checked', true);
      }else{
        all.prop('checked', false);
      }
    }else{
      if(checked_length >= total) {
        dad.prop('checked', true);
      }else{
        dad.prop('checked', false);
      }
    }
  });
});

$("#sortable-table tbody").sortable({
  handle: '.sort-handler'
});

"use strict";

$(".pwstrength").pwstrength();

 var today = new Date();
  year = today.getFullYear();
  month = today.getMonth();
  day = today.getDate();
  var calendar = $('#myEvent').fullCalendar({
  height: 'auto',
    defaultView: 'month',
    editable: true,
    selectable: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay,listMonth'
    },
    events: [{
      title: "Palak Jani",
      start: new Date(year, month, day, 11, 30),
      end: new Date(year, month, day, 12, 00),
      backgroundColor: "#00bcd4"
    }, {
      title: "Priya Sarma",
      start: new Date(year, month, day, 13, 30),
      end: new Date(year, month, day, 14, 00),
      backgroundColor: "#fe9701"
    }, {
      title: "John Doe",
      start: new Date(year, month, day, 17, 30),
      end: new Date(year, month, day, 18, 00),
      backgroundColor: "#F3565D"
    }, {
      title: "Sarah Smith",
      start: new Date(year, month, day, 19, 00),
      end: new Date(year, month, day, 19, 30),
      backgroundColor: "#1bbc9b"
    }, {
      title: "Airi Satou",
      start: new Date(year, month, day + 1, 19, 00),
      end: new Date(year, month, day + 1, 19, 30),
      backgroundColor: "#DC35A9",
    }, {
      title: "Angelica Ramos",
      start: new Date(year, month, day + 1, 21, 00),
      end: new Date(year, month, day + 1, 21, 30),
      backgroundColor: "#fe9701",
    }, {
      title: "Palak Jani",
      start: new Date(year, month, day + 3, 11, 30),
      end: new Date(year, month, day + 3, 12, 00),
      backgroundColor: "#00bcd4"
    }, {
      title: "Priya Sarma",
      start: new Date(year, month, day + 5, 2, 30),
      end: new Date(year, month, day + 5, 3, 00),
      backgroundColor: "#9b59b6"
    }, {
      title: "John Doe",
      start: new Date(year, month, day + 7, 17, 30),
      end: new Date(year, month, day + 7, 18, 00),
      backgroundColor: "#F3565D"
    }, {
      title: "Mark Hay",
      start: new Date(year, month, day + 5, 9, 30),
      end: new Date(year, month, day + 5, 10, 00),
      backgroundColor: "#F3565D"
    }]
  });
  
/*$("#myEvent").fullCalendar({
  height: 'auto',
  header: {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay,listWeek'
  },
  editable: true,
  events: [
    {
      title: 'Conference',
      start: '2018-01-9',
      end: '2018-01-11',
      backgroundColor: "#fff",
      borderColor: "#fff",
      textColor: '#000'
    },
    {
      title: "John's Birthday",
      start: '2018-01-14',
      backgroundColor: "#007bff",
      borderColor: "#007bff",
      textColor: '#fff'
    },
    {
      title: 'Reporting',
      start: '2018-01-10T11:30:00',
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      textColor: '#fff'
    },
    {
      title: 'Starting New Project',
      start: '2018-01-11',
      backgroundColor: "#ffc107",
      borderColor: "#ffc107",
      textColor: '#fff'
    },
    {
      title: 'Social Distortion Concert',
      start: '2018-01-24',
      end: '2018-01-27',
      backgroundColor: "#000",
      borderColor: "#000",
      textColor: '#fff'
    },
    {
      title: 'Lunch',
      start: '2018-01-24T13:15:00',
      backgroundColor: "#fff",
      borderColor: "#fff",
      textColor: '#000',
    },
    {
      title: 'Company Trip',
      start: '2018-01-28',
      end: '2018-01-31',
      backgroundColor: "#fff",
      borderColor: "#fff",
      textColor: '#000',
    },
  ]

});
*/
'use strict';
$(function () {
  barChart();
  barChartWithImg();
  lineChart();
  donutChart();
  pieChart();
  gaugeChart();
  radialLineChart();
  dumbbellPlotChart();
  mapBubble();
});

function barChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end



  // Create chart instance
  var chart = am4core.create("barChart", am4charts.XYChart);
  chart.scrollbarX = new am4core.Scrollbar();

  // Add data
  chart.data = [{
    "country": "USA",
    "visits": 3025
  }, {
    "country": "China",
    "visits": 1882
  }, {
    "country": "Japan",
    "visits": 1809
  }, {
    "country": "Germany",
    "visits": 1322
  }, {
    "country": "UK",
    "visits": 1122
  }, {
    "country": "France",
    "visits": 1114
  }, {
    "country": "India",
    "visits": 984
  }, {
    "country": "Spain",
    "visits": 711
  }, {
    "country": "Netherlands",
    "visits": 665
  }, {
    "country": "Russia",
    "visits": 580
  }, {
    "country": "South Korea",
    "visits": 443
  }, {
    "country": "Canada",
    "visits": 441
  }];

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "country";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.minGridDistance = 30;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.verticalCenter = "middle";
  categoryAxis.renderer.labels.template.rotation = 270;
  categoryAxis.tooltip.disabled = true;
  categoryAxis.renderer.minHeight = 110;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.minWidth = 50;

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.sequencedInterpolation = true;
  series.dataFields.valueY = "visits";
  series.dataFields.categoryX = "country";
  series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
  series.columns.template.strokeWidth = 0;

  series.tooltip.pointerOrientation = "vertical";

  series.columns.template.column.cornerRadiusTopLeft = 10;
  series.columns.template.column.cornerRadiusTopRight = 10;
  series.columns.template.column.fillOpacity = 0.8;

  // on hover, make corner radiuses bigger
  let hoverState = series.columns.template.column.states.create("hover");
  hoverState.properties.cornerRadiusTopLeft = 0;
  hoverState.properties.cornerRadiusTopRight = 0;
  hoverState.properties.fillOpacity = 1;

  series.columns.template.adapter.add("fill", (fill, target) => {
    return chart.colors.getIndex(target.dataItem.index);
  })

  // Cursor
  chart.cursor = new am4charts.XYCursor();
}
function barChartWithImg() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("barImg", am4charts.XYChart);

  // Add data
  chart.data = [{
    "name": "John",
    "points": 35654,
    "color": chart.colors.next(),
    "bullet": "assets/img/users/user1-round.png"
  }, {
    "name": "Damon",
    "points": 65456,
    "color": chart.colors.next(),
    "bullet": "assets/img/users/user2-round.png"
  }, {
    "name": "Patrick",
    "points": 45724,
    "color": chart.colors.next(),
    "bullet": "assets/img/users/user3-round.png"
  }, {
    "name": "Sarah",
    "points": 13654,
    "color": chart.colors.next(),
    "bullet": "assets/img/users/user4-round.png"
  },
  {
    "name": "Pooja",
    "points": 32589,
    "color": chart.colors.next(),
    "bullet": "assets/img/users/user5-round.png"
  },
  {
    "name": "jatin",
    "points": 45895,
    "color": chart.colors.next(),
    "bullet": "assets/img/users/user6-round.png"
  },
  ];

  // Create axes
  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "name";
  categoryAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.minGridDistance = 30;
  categoryAxis.renderer.inside = true;
  categoryAxis.renderer.labels.template.fill = am4core.color("#fff");
  categoryAxis.renderer.labels.template.fontSize = 14;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeDasharray = "4,4";
  valueAxis.renderer.labels.template.disabled = true;
  valueAxis.min = 0;

  // Do not crop bullets
  chart.maskBullets = false;

  // Remove padding
  chart.paddingBottom = 0;

  // Create series
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "points";
  series.dataFields.categoryX = "name";
  series.columns.template.propertyFields.fill = "color";
  series.columns.template.propertyFields.stroke = "color";
  series.columns.template.column.cornerRadiusTopLeft = 15;
  series.columns.template.column.cornerRadiusTopRight = 15;
  series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/b]";

  // Add bullets
  var bullet = series.bullets.push(new am4charts.Bullet());
  var image = bullet.createChild(am4core.Image);
  image.horizontalCenter = "middle";
  image.verticalCenter = "bottom";
  image.dy = 20;
  image.y = am4core.percent(100);
  image.propertyFields.href = "bullet";
  image.tooltipText = series.columns.template.tooltipText;
  image.propertyFields.fill = "color";
  image.filters.push(new am4core.DropShadowFilter());
}

function lineChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("lineChart", am4charts.XYChart);

  // Add data
  chart.data = [{
    "date": "2012-08-12",
    "value": 32
  }, {
    "date": "2012-08-13",
    "value": 18
  }, {
    "date": "2012-08-14",
    "value": 24
  }, {
    "date": "2012-08-15",
    "value": 22
  }, {
    "date": "2012-08-16",
    "value": 18
  }, {
    "date": "2012-08-17",
    "value": 19
  }, {
    "date": "2012-08-18",
    "value": 14
  }, {
    "date": "2012-08-19",
    "value": 15
  }, {
    "date": "2012-08-20",
    "value": 12
  }, {
    "date": "2012-08-28",
    "value": 18
  }, {
    "date": "2012-08-29",
    "value": 20
  }, {
    "date": "2012-08-30",
    "value": 29
  }, {
    "date": "2012-08-31",
    "value": 33
  }, {
    "date": "2012-09-01",
    "value": 42
  }, {
    "date": "2012-09-02",
    "value": 35
  }, {
    "date": "2012-09-03",
    "value": 31
  }, {
    "date": "2012-09-04",
    "value": 47
  }, {
    "date": "2012-09-05",
    "value": 52
  }, {
    "date": "2012-09-06",
    "value": 46
  }, {
    "date": "2012-09-07",
    "value": 41
  }, {
    "date": "2012-09-08",
    "value": 43
  }, {
    "date": "2012-09-09",
    "value": 40
  }, {
    "date": "2012-09-10",
    "value": 39
  }, {
    "date": "2012-09-11",
    "value": 34
  }, {
    "date": "2012-09-12",
    "value": 29
  }, {
    "date": "2012-09-13",
    "value": 34
  }, {
    "date": "2012-11-14",
    "value": 81
  }, {
    "date": "2012-11-15",
    "value": 87
  }, {
    "date": "2012-11-16",
    "value": 82
  }, {
    "date": "2012-11-17",
    "value": 86
  }, {
    "date": "2012-11-18",
    "value": 80
  }, {
    "date": "2012-11-19",
    "value": 87
  }, {
    "date": "2012-11-20",
    "value": 83
  }, {
    "date": "2012-11-21",
    "value": 85
  }, {
    "date": "2012-11-22",
    "value": 84
  }, {
    "date": "2012-11-23",
    "value": 82
  }, {
    "date": "2012-11-24",
    "value": 73
  }, {
    "date": "2012-11-25",
    "value": 71
  }, {
    "date": "2012-11-26",
    "value": 75
  }, {
    "date": "2012-11-27",
    "value": 79
  }, {
    "date": "2012-11-28",
    "value": 70
  }, {
    "date": "2012-11-29",
    "value": 73
  }, {
    "date": "2012-11-30",
    "value": 61
  }, {
    "date": "2012-12-01",
    "value": 62
  }, {
    "date": "2012-12-02",
    "value": 66
  }, {
    "date": "2012-12-03",
    "value": 65
  }, {
    "date": "2012-12-04",
    "value": 73
  }, {
    "date": "2012-12-05",
    "value": 79
  }, {
    "date": "2012-12-06",
    "value": 78
  }, {
    "date": "2012-12-07",
    "value": 78
  }, {
    "date": "2012-12-08",
    "value": 78
  }, {
    "date": "2012-12-09",
    "value": 74
  }, {
    "date": "2012-12-10",
    "value": 73
  }, {
    "date": "2012-12-11",
    "value": 75
  }, {
    "date": "2012-12-12",
    "value": 70
  }, {
    "date": "2012-12-13",
    "value": 77
  }, {
    "date": "2012-12-14",
    "value": 67
  }, {
    "date": "2012-12-15",
    "value": 62
  }, {
    "date": "2012-12-16",
    "value": 64
  }, {
    "date": "2012-12-17",
    "value": 61
  }, {
    "date": "2012-12-18",
    "value": 59
  }, {
    "date": "2012-12-19",
    "value": 53
  }, {
    "date": "2012-12-20",
    "value": 54
  }, {
    "date": "2012-12-21",
    "value": 56
  }, {
    "date": "2012-12-22",
    "value": 59
  }, {
    "date": "2012-12-23",
    "value": 58
  }, {
    "date": "2012-12-24",
    "value": 55
  }, {
    "date": "2012-12-25",
    "value": 52
  }, {
    "date": "2012-12-26",
    "value": 54
  }, {
    "date": "2012-12-27",
    "value": 50
  }, {
    "date": "2012-12-28",
    "value": 50
  }, {
    "date": "2012-12-29",
    "value": 51
  }, {
    "date": "2012-12-30",
    "value": 52
  }, {
    "date": "2012-12-31",
    "value": 58
  }, {
    "date": "2013-01-01",
    "value": 60
  }, {
    "date": "2013-01-02",
    "value": 67
  }, {
    "date": "2013-01-03",
    "value": 64
  }, {
    "date": "2013-01-04",
    "value": 66
  }, {
    "date": "2013-01-05",
    "value": 60
  }, {
    "date": "2013-01-06",
    "value": 63
  }, {
    "date": "2013-01-07",
    "value": 61
  }, {
    "date": "2013-01-08",
    "value": 60
  }, {
    "date": "2013-01-09",
    "value": 65
  }, {
    "date": "2013-01-10",
    "value": 75
  }, {
    "date": "2013-01-11",
    "value": 77
  }, {
    "date": "2013-01-12",
    "value": 78
  }, {
    "date": "2013-01-13",
    "value": 70
  }, {
    "date": "2013-01-14",
    "value": 70
  }, {
    "date": "2013-01-15",
    "value": 73
  }, {
    "date": "2013-01-16",
    "value": 71
  }, {
    "date": "2013-01-17",
    "value": 74
  }, {
    "date": "2013-01-18",
    "value": 78
  }, {
    "date": "2013-01-19",
    "value": 85
  }, {
    "date": "2013-01-20",
    "value": 82
  }, {
    "date": "2013-01-21",
    "value": 83
  }, {
    "date": "2013-01-22",
    "value": 88
  }, {
    "date": "2013-01-23",
    "value": 85
  }, {
    "date": "2013-01-24",
    "value": 85
  }, {
    "date": "2013-01-25",
    "value": 80
  }, {
    "date": "2013-01-26",
    "value": 87
  }, {
    "date": "2013-01-27",
    "value": 84
  }, {
    "date": "2013-01-28",
    "value": 83
  }, {
    "date": "2013-01-29",
    "value": 84
  }, {
    "date": "2013-01-30",
    "value": 81
  }];

  // Create axes
  var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

  // Create series
  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.tooltipText = "{value}"
  series.strokeWidth = 2;
  series.minBulletDistance = 15;

  // Drop-shaped tooltips
  series.tooltip.background.cornerRadius = 20;
  series.tooltip.background.strokeOpacity = 0;
  series.tooltip.pointerOrientation = "vertical";
  series.tooltip.label.minWidth = 40;
  series.tooltip.label.minHeight = 40;
  series.tooltip.label.textAlign = "middle";
  series.tooltip.label.textValign = "middle";

  // Make bullets grow on hover
  var bullet = series.bullets.push(new am4charts.CircleBullet());
  bullet.circle.strokeWidth = 2;
  bullet.circle.radius = 4;
  bullet.circle.fill = am4core.color("#fff");

  var bullethover = bullet.states.create("hover");
  bullethover.properties.scale = 1.3;

  // Make a panning cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "panXY";
  chart.cursor.xAxis = dateAxis;
  chart.cursor.snapToSeries = series;

  // Create vertical scrollbar and place it before the value axis
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.parent = chart.leftAxesContainer;
  chart.scrollbarY.toBack();

  // Create a horizontal scrollbar with previe and place it underneath the date axis
  chart.scrollbarX = new am4charts.XYChartScrollbar();
  chart.scrollbarX.series.push(series);
  chart.scrollbarX.parent = chart.bottomAxesContainer;

  chart.events.on("ready", function () {
    dateAxis.zoom({ start: 0.90, end: 1 });
  });

}

function donutChart() {
// Create chart instance
var chart = am4core.create("donutChart", am4charts.PieChart);

// Add data
chart.data = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
},{
  "country": "The Netherlands",
  "litres": 50,
  "hidden": true
}];

// Add and configure Series
var pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.dataFields.hidden = "hidden";

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Disable ticks and labels
pieSeries.labels.template.disabled = true;
pieSeries.ticks.template.disabled = true;

// Add a legend
chart.legend = new am4charts.Legend();
chart.legend.position = "bottom";


}

function pieChart() {
var chart = am4core.create("pieChart", am4charts.PieChart);
// Add data
chart.data = [{
  "country": "Lithuania",
  "litres": 501.9
}, {
  "country": "Czech Republic",
  "litres": 301.9
}, {
  "country": "Ireland",
  "litres": 201.1
},{
  "country": "The Netherlands",
  "litres": 50,
  "hidden": true
}];


var series = chart.series.push(new am4charts.PieSeries());
series.dataFields.value = "litres";
series.dataFields.category = "country";

// this creates initial animation
series.hiddenState.properties.opacity = 1;
series.hiddenState.properties.endAngle = -90;
series.hiddenState.properties.startAngle = -90;

series.labels.template.disabled = true;
series.ticks.template.disabled = true;

// Add a legend
chart.legend = new am4charts.Legend();
chart.legend.position = "bottom";

}

function gaugeChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end



  // Create chart instance
  var chart = am4core.create("gaugeChart", am4charts.RadarChart);

  // Add data
  chart.data = [{
    "category": "Research",
    "value": 80,
    "full": 100
  }, {
    "category": "Marketing",
    "value": 35,
    "full": 100
  }, {
    "category": "Distribution",
    "value": 92,
    "full": 100
  }, {
    "category": "Human Resources",
    "value": 68,
    "full": 100
  }];

  // Make chart not full circle
  chart.startAngle = -90;
  chart.endAngle = 180;
  chart.innerRadius = am4core.percent(20);

  // Set number format
  chart.numberFormatter.numberFormat = "#.#'%'";

  // Create axes
  var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.grid.template.strokeOpacity = 0;
  categoryAxis.renderer.labels.template.horizontalCenter = "right";
  categoryAxis.renderer.labels.template.fontWeight = 500;
  categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
    return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
  });
  categoryAxis.renderer.minGridDistance = 10;

  var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  valueAxis.renderer.grid.template.strokeOpacity = 0;
  valueAxis.min = 0;
  valueAxis.max = 100;
  valueAxis.strictMinMax = true;

  // Create series
  var series1 = chart.series.push(new am4charts.RadarColumnSeries());
  series1.dataFields.valueX = "full";
  series1.dataFields.categoryY = "category";
  series1.clustered = false;
  series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
  series1.columns.template.fillOpacity = 0.08;
  series1.columns.template.cornerRadiusTopLeft = 20;
  series1.columns.template.strokeWidth = 0;
  series1.columns.template.radarColumn.cornerRadius = 20;

  var series2 = chart.series.push(new am4charts.RadarColumnSeries());
  series2.dataFields.valueX = "value";
  series2.dataFields.categoryY = "category";
  series2.clustered = false;
  series2.columns.template.strokeWidth = 0;
  series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
  series2.columns.template.radarColumn.cornerRadius = 20;

  series2.columns.template.adapter.add("fill", function (fill, target) {
    return chart.colors.getIndex(target.dataItem.index);
  });

  // Add cursor
  chart.cursor = new am4charts.RadarCursor();
}
function radialLineChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  /* Create chart instance */
  var chart = am4core.create("radialLineChart", am4charts.RadarChart);

  var data = [];
  var value1 = 500;
  var value2 = 600;

  for (var i = 0; i < 12; i++) {
    let date = new Date();
    date.setMonth(i, 1);
    value1 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    value2 -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 50);
    data.push({ date: date, value1: value1, value2: value2 })
  }

  chart.data = data;

  /* Create axes */
  var categoryAxis = chart.xAxes.push(new am4charts.DateAxis());

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.extraMin = 0.2;
  valueAxis.extraMax = 0.2;
  valueAxis.tooltip.disabled = true;

  /* Create and configure series */
  var series1 = chart.series.push(new am4charts.RadarSeries());
  series1.dataFields.valueY = "value1";
  series1.dataFields.dateX = "date";
  series1.strokeWidth = 3;
  series1.tooltipText = "{valueY}";
  series1.name = "Series 2";
  series1.bullets.create(am4charts.CircleBullet);

  var series2 = chart.series.push(new am4charts.RadarSeries());
  series2.dataFields.valueY = "value2";
  series2.dataFields.dateX = "date";
  series2.strokeWidth = 3;
  series2.tooltipText = "{valueY}";
  series2.name = "Series 2";
  series2.bullets.create(am4charts.CircleBullet);

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();

  chart.cursor = new am4charts.RadarCursor();

  chart.legend = new am4charts.Legend();
}
function dumbbellPlotChart() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  var chart = am4core.create("dumbbellPlotChart", am4charts.XYChart);

  var data = [];
  var open = 100;
  var close = 120;

  var names = ["Raina",
    "Demarcus",
    "Carlo",
    "Jacinda",
    "Richie",
    "Antony",
    "Amada",
    "Idalia",
    "Janella",
    "Marla",
    "Curtis",
    "Shellie"

  ];

  for (var i = 0; i < names.length; i++) {
    open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    close = open + Math.round(Math.random() * 10) + 3;
    data.push({ category: names[i], open: open, close: close });
  }

  chart.data = data;

  var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.ticks.template.disabled = true;
  categoryAxis.renderer.axisFills.template.disabled = true;
  categoryAxis.dataFields.category = "category";
  categoryAxis.renderer.minGridDistance = 15;
  categoryAxis.renderer.grid.template.location = 0.5;
  categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
  categoryAxis.renderer.labels.template.rotation = -90;
  categoryAxis.renderer.labels.template.horizontalCenter = "left";
  categoryAxis.renderer.labels.template.dx = 17;
  categoryAxis.renderer.inside = true;

  var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.ticks.template.disabled = true;
  valueAxis.renderer.axisFills.template.disabled = true;

  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.categoryX = "category";
  series.dataFields.openValueY = "open";
  series.dataFields.valueY = "close";
  series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
  series.sequencedInterpolation = true;
  series.fillOpacity = 0;
  series.strokeOpacity = 1;
  series.columns.template.width = 0.01;
  series.tooltip.pointerOrientation = "horizontal";

  var openBullet = series.bullets.create(am4charts.CircleBullet);
  openBullet.locationY = 1;

  var closeBullet = series.bullets.create(am4charts.CircleBullet);

  closeBullet.fill = chart.colors.getIndex(4);
  closeBullet.stroke = closeBullet.fill;

  chart.cursor = new am4charts.XYCursor();

  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarY = new am4core.Scrollbar();
}

function mapBubble() {
  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create map instance
  var chart = am4core.create("mapBubble", am4maps.MapChart);

  var title = chart.titles.create();
  title.text = "[bold font-size: 20]Population of Countries in 2011[/]\nsource: Gapminder";
  title.textAlign = "middle";

  var latlong = {
    "IN": { "latitude": 20, "longitude": 77 },
    "JP": { "latitude": 36, "longitude": 138 },
    "AU": { "latitude": -27, "longitude": 133 },
    "US": { "latitude": 38, "longitude": -97 },
    "RU": { "latitude": 60, "longitude": 100 },
    "BR": { "latitude": -10, "longitude": -55 },
    "DZ": { "latitude": 28, "longitude": 3 }
  };

  var mapData = [
    { "id": "IN", "name": "India", "value": 1241491960, "color": chart.colors.getIndex(0) },
    { "id": "JP", "name": "Japan", "value": 126497241, "color": chart.colors.getIndex(0) },
    { "id": "AU", "name": "Australia", "value": 22605732, "color": "#8aabb0" },
    { "id": "US", "name": "United States", "value": 313085380, "color": chart.colors.getIndex(4) },
    { "id": "RU", "name": "Russia", "value": 142835555, "color": chart.colors.getIndex(1) },
    { "id": "BR", "name": "Brazil", "value": 196655014, "color": chart.colors.getIndex(3) },
    { "id": "DZ", "name": "Algeria", "value": 35980193, "color": chart.colors.getIndex(2) }
  ];

  // Add lat/long information to data
  for (var i = 0; i < mapData.length; i++) {
    mapData[i].latitude = latlong[mapData[i].id].latitude;
    mapData[i].longitude = latlong[mapData[i].id].longitude;
  }

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.exclude = ["AQ"];
  polygonSeries.useGeodata = true;

  var imageSeries = chart.series.push(new am4maps.MapImageSeries());
  imageSeries.data = mapData;
  imageSeries.dataFields.value = "value";

  var imageTemplate = imageSeries.mapImages.template;
  imageTemplate.propertyFields.latitude = "latitude";
  imageTemplate.propertyFields.longitude = "longitude";
  imageTemplate.nonScaling = true

  var circle = imageTemplate.createChild(am4core.Circle);
  circle.fillOpacity = 0.7;
  circle.propertyFields.fill = "color";
  circle.tooltipText = "{name}: [bold]{value}[/]";

  imageSeries.heatRules.push({
    "target": circle,
    "property": "radius",
    "min": 4,
    "max": 30,
    "dataField": "value"
  })
}
'use strict';
$(function () {
    chart1();
    chart2();
    chart3();
    chart4();
    chart5();
    chart6();
    chart7();
    chart8();
});

function chart1(){
	 var options = {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: '55%',
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                name: 'Net Profit',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
                name: 'Revenue',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
                name: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            }],
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1

            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart1"),
            options
        );

        chart.render();
       

}

function chart2(){

 var options = {
            chart: {
                height: 350,
                type: 'bar',
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%";
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            series: [{
                name: 'Inflation',
                data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
            }],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                position: 'top',
                labels: {
                    offsetY: -18,

                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    offsetY: -35,

                }
            },
            fill: {
                gradient: {
                    shade: 'light',
                    type: "horizontal",
                    shadeIntensity: 0.25,
                    gradientToColors: undefined,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [50, 0, 100, 100]
                },
            },
            yaxis: {
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false,
                },
                labels: {
                    show: false,
                    formatter: function (val) {
                        return val + "%";
                    }
                }

            },
            title: {
                text: 'Monthly Inflation in Argentina, 2002',
                floating: true,
                offsetY: 320,
                align: 'center',
                style: {
                    color: '#444'
                }
            },
        }

        var chart = new ApexCharts(
            document.querySelector("#chart2"),
            options
        );

        chart.render();
    
    }
function chart3(){
	 var options = {
            chart: {
                height: 350,
                type: 'line',
                shadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 1
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                    name: "High - 2013",
                    data: [28, 29, 33, 36, 32, 32, 33]
                },
                {
                    name: "Low - 2013",
                    data: [12, 11, 14, 18, 17, 13, 13]
                }
            ],
            title: {
                text: 'Average High & Low Temperature',
                align: 'left'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            markers: {
                
                size: 6
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                title: {
                    text: 'Month'
                }
            },
            yaxis: {
                title: {
                    text: 'Temperature'
                },
                min: 5,
                max: 40
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart3"),
            options
        );

        chart.render();
}
function chart4(){
	var options = {
            chart: {
                height: 350,
                type: 'line',
                shadow: {
                    enabled: false,
                    color: '#bbb',
                    top: 3,
                    left: 2,
                    blur: 3,
                    opacity: 1
                },
            },
            stroke: {
                width: 7,   
                curve: 'smooth'
            },
            series: [{
                name: 'Likes',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            },
            title: {
                text: 'Social Media',
                align: 'left',
                style: {
                    fontSize: "16px",
                    color: '#666'
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    gradientToColors: [ '#FDD835'],
                    shadeIntensity: 1,
                    type: 'horizontal',
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100, 100, 100]
                },
            },
            markers: {
                size: 4,
                opacity: 0.9,
                colors: ["#FFA41B"],
                strokeColor: "#fff",
                strokeWidth: 2,
                 
                hover: {
                    size: 7,
                }
            },
            yaxis: {
                min: -10,
                max: 40,
                title: {
                    text: 'Engagement',
                },                
            }
        }

       var chart = new ApexCharts(
            document.querySelector("#chart4"),
            options
        );
        
        chart.render();
}
function chart5(){
	var options = {
      chart: {
        height: 350,
        type: 'line',
      },
      series: [{
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
      }, {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
      }],
      stroke: {
        width: [0, 4]
      },
      title: {
        text: 'Traffic Sources'
      },
      // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
      xaxis: {
        type: 'datetime'
      },
      yaxis: [{
        title: {
          text: 'Website Blog',
        },

      }, {
        opposite: true,
        title: {
          text: 'Social Media'
        }
      }]

    }

    var chart = new ApexCharts(
      document.querySelector("#chart5"),
      options
    );

    chart.render();
}
function chart6(){
	 var options = {
            chart: {
                height: 350,
                type: 'area',
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100]
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],

            xaxis: {
                type: 'datetime',
                categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm'
                },
            }
        }

        var chart = new ApexCharts(
            document.querySelector("#chart6"),
            options
        );

        chart.render();
}
function chart7(){
	var options = {
            chart: {
                width: 360,
                type: 'pie',
            },
            labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
            series: [44, 55, 13, 43, 22],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }

        var chart = new ApexCharts(
            document.querySelector("#chart7"),
            options
        );

        chart.render();
}
function chart8(){

   var options = {
            chart: {
                height: 350,
                type: 'radar',
                dropShadow: {
                    enabled: true,
                    blur: 1,
                    left: 1,
                    top: 1
                }
            },
            series: [{
                name: 'Series 1',
                data: [80, 50, 30, 40, 100, 20],
            }, {
                name: 'Series 2',
                data: [20, 30, 40, 80, 20, 80],
            }, {
                name: 'Series 3',
                data: [44, 76, 78, 13, 43, 10],
            }],
            title: {
                text: 'Radar Chart - Multi Series'
            },
            stroke: {
                width: 0
            },
            fill: {
                opacity: 0.4
            },
            markers: {
                size: 0
            },
            labels: ['2011', '2012', '2013', '2014', '2015', '2016']
        }

        var chart = new ApexCharts(
            document.querySelector("#chart8"),
            options
        );

        chart.render();

        function update() {

            function randomSeries() {
                var arr = []
                for(var i = 0; i < 6; i++) {
                    arr.push(Math.floor(Math.random() * 100)) 
                }

                return arr
            }
            

            chart.updateSeries([{
                name: 'Series 1',
                data: randomSeries(),
            }, {
                name: 'Series 2',
                data: randomSeries(),
            }, {
                name: 'Series 3',
                data: randomSeries(),
            }])
        }
       

}
"use strict";


var draw = Chart.controllers.line.prototype.draw;
Chart.controllers.lineShadow = Chart.controllers.line.extend({
    draw: function() {
        draw.apply(this, arguments);
        var ctx = this.chart.chart.ctx;
        var _stroke = ctx.stroke;
        ctx.stroke = function() {
            ctx.save();
            ctx.shadowColor = '#00000075';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 8;
            ctx.shadowOffsetY = 8;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Statistics',
      data: [460, 458, 330, 502, 430, 610, 488],
      borderWidth: 2,
      backgroundColor: '#6777ef',
      borderColor: '#6777ef',
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 150
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
  }
});

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Statistics',
      data: [460, 458, 330, 502, 430, 610, 488],
      borderWidth: 2,
      backgroundColor: '#6777ef',
      borderColor: '#6777ef',
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 150
        }
      }],
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false
        }
      }]
    },
  }
});

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        80,
        50,
        40,
        30,
        20,
      ],
      backgroundColor: [
        '#191d21',
        '#63ed7a',
        '#ffa426',
        '#fc544b',
        '#6777ef',
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Black',
      'Green',
      'Yellow',
      'Red',
      'Blue'
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
    },
  }
});

var ctx = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      data: [
        80,
        50,
        40,
        30,
        100,
      ],
      backgroundColor: [
        '#191d21',
        '#63ed7a',
        '#ffa426',
        '#fc544b',
        '#6777ef',
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Black',
      'Green',
      'Yellow',
      'Red',
      'Blue'
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
    },
  }
});

var ctx = document.getElementById("line-chart");
if (ctx) {
	ctx.height = 150;
	var myChart = new Chart(ctx, {
		type: 'lineShadow',
		data: {
			labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
			type: 'line',
			defaultFontFamily: 'Poppins',
			datasets: [{
				label: "Foods",
				data: [0, 30, 10, 120, 50, 63, 10],
				backgroundColor: 'transparent',
				borderColor: '#222222',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 3,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#222222',
			}, {
				label: "Electronics",
				data: [0, 50, 40, 80, 40, 79, 120],
				backgroundColor: 'transparent',
				borderColor: '#f96332',
				borderWidth: 2,
				pointStyle: 'circle',
				pointRadius: 3,
				pointBorderColor: 'transparent',
				pointBackgroundColor: '#f96332',
			}]
		},
		options: {
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				titleFontFamily: 'Poppins',
				bodyFontFamily: 'Poppins',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: false,
				labels: {
					usePointStyle: true,
					fontFamily: 'Poppins',
				},
			},
			scales: {
				xAxes: [{
					display: true,
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month'
					},
					ticks: {
						fontFamily: "Poppins"
					}
				}],
				yAxes: [{
					display: true,
					gridLines: {
						display: false,
						drawBorder: false
					},
					scaleLabel: {
						display: true,
						labelString: 'Value',
						fontFamily: "Poppins"

					},
					ticks: {
						fontFamily: "Poppins"
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
}


var ctx = document.getElementById("lineChartFill");
if (ctx) {
	ctx.height = 150;
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ["January", "February", "March", "April", "May", "June", "July"],
			datasets: [
				{
					label: "My First dataset",
					borderColor: "rgba(0,0,0,.09)",
					borderWidth: "1",
					backgroundColor: "rgba(0,0,0,.07)",
					data: [22, 44, 67, 43, 76, 45, 12]
				},
				{
					label: "My Second dataset",
					borderColor: "rgba(0, 123, 255, 0.9)",
					borderWidth: "1",
					backgroundColor: "rgba(0, 123, 255, 0.5)",
					pointHighlightStroke: "rgba(26,179,148,1)",
					data: [16, 32, 18, 26, 42, 33, 44]
				}
			]
		},
		options: {
			legend: {
				position: 'top',
				labels: {
				}

			},
			responsive: true,
			tooltips: {
				mode: 'index',
				intersect: false
			},
			hover: {
				mode: 'nearest',
				intersect: true
			},
			scales: {
				xAxes: [{
					ticks: {

					}
				}],
				yAxes: [{
					ticks: {
						beginAtZero: true,
					}
				}]
			}

		}
	});
}

//radar chart
var ctx = document.getElementById("radar-chart");
if (ctx) {
	ctx.height = 200;
	var myChart = new Chart(ctx, {
		type: 'radar',
		data: {
			labels: [["Eating", "Dinner"], ["Drinking", "Water"], "Sleeping", ["Designing", "Graphics"], "Coding", "Cycling", "Running"],
			datasets: [
				{
					label: "My First dataset",
					data: [65, 59, 66, 45, 56, 55, 40],
					borderColor: "rgba(0, 123, 255, 0.6)",
					borderWidth: "1",
					backgroundColor: "rgba(0, 123, 255, 0.4)"
				},
				{
					label: "My Second dataset",
					data: [28, 12, 40, 19, 63, 27, 87],
					borderColor: "rgba(0, 123, 255, 0.7",
					borderWidth: "1",
					backgroundColor: "rgba(0, 123, 255, 0.5)"
				}
			]
		},
		options: {
			legend: {
				position: 'top',
				labels: {
				}

			},
			scale: {
				ticks: {
					beginAtZero: true,
				}
			}
		}
	});
}

var ctx = document.getElementById("polar-chart");
if (ctx) {
	ctx.height = 200;
	var myChart = new Chart(ctx, {
		type: 'polarArea',
		data: {
			datasets: [{
				data: [15, 18, 9, 6, 19],
				backgroundColor: [
					"rgba(0, 123, 255,0.9)",
					"rgba(0, 123, 255,0.8)",
					"rgba(0, 123, 255,0.7)",
					"rgba(0,0,0,0.2)",
					"rgba(0, 123, 255,0.5)"
				]

			}],
			labels: [
				"Green",
				"Green",
				"Green",
				"Green"
			]
		},
		options: {
			legend: {
				position: 'top',
				labels: {
					fontFamily: 'Poppins'
				}

			},
			responsive: true
		}
	});
}

var ctx = document.getElementById('line-chart3').getContext("2d");


var gradientStroke = ctx.createLinearGradient(500, 0, 0, 0);
gradientStroke.addColorStop(0, 'rgba(155, 89, 182, 1)');
gradientStroke.addColorStop(1, 'rgba(231, 76, 60, 1)');


var myChart = new Chart(ctx, {
type: 'lineShadow',
data: {
	labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
	type: 'line',
	defaultFontFamily: 'Poppins',
	datasets: [{
		label: "Foods",
		data: [0, 30, 10, 120, 50, 63, 10],
		borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        fill: false,
        borderWidth: 4,
	}, {
		label: "Electronics",
		data: [0, 50, 40, 80, 40, 79, 120],
		borderColor: gradientStroke,
        pointBorderColor: gradientStroke,
        pointBackgroundColor: gradientStroke,
        pointHoverBackgroundColor: gradientStroke,
        pointHoverBorderColor: gradientStroke,
        pointBorderWidth: 10,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        fill: false,
        borderWidth: 4,
	}]
},
options: {          
    legend: {
        position: "bottom"
    },
    tooltips: {
		mode: 'index',
		titleFontSize: 12,
		titleFontColor: '#fff',
		bodyFontColor: '#fff',
		backgroundColor: '#000',
		titleFontFamily: 'Poppins',
		bodyFontFamily: 'Poppins',
		cornerRadius: 3,
		intersect: false,
	},
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}
});

var ctx = document.getElementById('line-chart4').getContext("2d");

var gradientStroke = ctx.createLinearGradient(0,0,700,0);
gradientStroke.addColorStop(0, 'rgba(255, 204, 128, 1)');   
gradientStroke.addColorStop(0.5, 'rgba(255, 152, 0, 1)');
gradientStroke.addColorStop(1, 'rgba(239, 108, 0, 1)');

var myChart = new Chart(ctx, {
type: 'lineShadow',
data: {
	labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
	type: 'line',
	defaultFontFamily: 'Poppins',
	datasets: [{
		label: "Foods",
		data: [0, 30, 10, 120, 50, 63, 10],
		 borderColor: gradientStroke,
	        pointBorderColor: gradientStroke,
	        pointBackgroundColor: gradientStroke,
	       pointHoverBackgroundColor: gradientStroke,
	        pointHoverBorderColor: gradientStroke,
	        pointBorderWidth: 10,
	        pointHoverRadius: 10,
	        pointHoverBorderWidth: 1,
	        pointRadius: 0,
	        fill: false,
	        borderWidth: 4,
	}, {
		label: "Electronics",
		data: [0, 50, 40, 80, 40, 79, 120],
		 borderColor: gradientStroke,
	        pointBorderColor: gradientStroke,
	        pointBackgroundColor: gradientStroke,
	       pointHoverBackgroundColor: gradientStroke,
	        pointHoverBorderColor: gradientStroke,
	        pointBorderWidth: 10,
	        pointHoverRadius: 10,
	        pointHoverBorderWidth: 1,
	        pointRadius: 0,
	        fill: false,
	        borderWidth: 4,
	}]
},


options: {          
    legend: {
        position: "bottom"
    },
    scales: {
        yAxes: [{
            ticks: {
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold",
                beginAtZero: true,
                maxTicksLimit: 5,
                padding: 20
            },
            gridLines: {
                drawTicks: false,
                display: false
            }

        }],
        xAxes: [{
            gridLines: {
                zeroLineColor: "transparent"
            },
            ticks: {
                padding: 20,
                fontColor: "rgba(0,0,0,0.5)",
                fontStyle: "bold"
            }
        }]
    }
}
});
$(function (e) {
    'use strict'

    /* Chart data*/
    var chartdata = [
        {
            name: 'sales',
            type: 'bar',
            data: [11, 14, 8, 16, 11, 13]
        },
        {
            name: 'profit',
            type: 'line',
            smooth: true,
            data: [10, 7, 17, 11, 15],
            symbolSize: 10,
        },
        {
            name: 'growth',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25]
        }
    ];

    /* Bar chart echartopt1*/
    var chart = document.getElementById('echart_bar_line');
    var barChart = echarts.init(chart);

    var option = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['2014', '2015', '2016', '2017', '2018'],
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                }
            }

        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        series: chartdata,
        color: ['#9f78ff', '#fa626b', '#32cafe',]
    };

    barChart.setOption(option);


    var chartdata2 = [
        {
            name: 'sales',
            type: 'line',
            smooth: true,
            data: [15, 22, 14, 31, 17, 41],
            symbolSize: 10,
            color: ['#FF8D60']
        },
        {
            name: 'Profit',
            type: 'line',
            smooth: true,
            symbolSize: 10,
            size: 10,
            data: [8, 12, 28, 10, 10, 12],
            color: ['#009DA0']
        }
    ];

    var chart2 = document.getElementById('echart_line');
    var barChart2 = echarts.init(chart2);
    var option2 = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['2014', '2015', '2016', '2017', '2018'],
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                },
            }
        },
        yAxis: {
            splitLine: {
                lineStyle: {
                    color: 'none'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#eaeaea'
                }
            },
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        series: chartdata2,
    };
    barChart2.setOption(option2);



    /* Bar chart */

    /* Chart data*/
    var chartdata = [
        {
            name: 'sales',
            type: 'bar',
            data: [13, 14, 10, 16, 11, 13]
        },

        {
            name: 'growth',
            type: 'bar',
            data: [10, 14, 10, 15, 9, 25]
        }
    ];


    var chart = document.getElementById('echart_bar');
    var barChart = echarts.init(chart);

    var option = {
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: {
            data: ['2014', '2015', '2016', '2017', '2018'],

            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        tooltip: {
            show: true,
            showContent: true,
            alwaysShowContent: false,
            triggerOn: 'mousemove',
            trigger: 'axis',
            axisPointer:
            {
                label: {
                    show: false,
                }
            }
        },
        yAxis: {
            axisLabel: {
                fontSize: 10,
                color: '#000'
            }
        },
        series: chartdata,
        color: ['#9f78ff', '#32cafe']
    };

    barChart.setOption(option);


    /* Bar Graph */
    var chart = document.getElementById('echart_graph_line');
    var barChart = echarts.init(chart);

    barChart.setOption({
        title: {
            text: "Graph title",
            subtext: "Graph Sub-text"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["sales", "purchases"]
        },
        toolbox: {
            show: !1
        },
        calculable: !1,
        xAxis: [{
            type: "category",
            data: ["2000", "2001", "2002", "2003", "2004", "2005"]
        }],
        yAxis: [{
            type: "value"
        }],
        series: [{
            name: "sales",
            type: "bar",
            data: [22, 54, 37, 23, 25.6, 76],
            markPoint: {
                data: [{
                    type: "max",
                    name: "???"
                }, {
                    type: "min",
                    name: "???"
                }]
            },
            markLine: {
                data: [{
                    type: "average",
                    name: "???"
                }]
            }
        }, {
            name: "purchases",
            type: "bar",
            data: [35, 45, 47, 10, 35, 70],
            markPoint: {
                data: [{
                    name: "sales",
                    value: 182.2,
                    xAxis: 7,
                    yAxis: 183
                }, {
                    name: "purchases",
                    value: 2.3,
                    xAxis: 11,
                    yAxis: 3
                }]
            },
            markLine: {
                data: [{
                    type: "average",
                    name: "???"
                }]
            }
        }],
        color: ['#9f78ff', '#32cafe']

    });

    /* Pie Chart */
    var chart = document.getElementById('echart_pie');
    var barChart = echarts.init(chart);

    barChart.setOption({
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: "center",
            y: "bottom",
            data: ["Direct Access", "E-mail Marketing", "Union Ad", "Video Ads", "Search Engine"]
        },

        calculable: !0,
        series: [{
            name: "Chart Data",
            type: "pie",
            radius: "55%",
            center: ["50%", "48%"],
            data: [{
                value: 335,
                name: "Direct Access"
            }, {
                value: 310,
                name: "E-mail Marketing"
            }, {
                value: 234,
                name: "Union Ad"
            }, {
                value: 135,
                name: "Video Ads"
            }, {
                value: 548,
                name: "Search Engine"
            }]
        }],
        color: ['#575B7A', '#DE725C', '#DFC126', '#72BE81', '#50A5D8']
    });

    /* line chart */
    var chart = document.getElementById('echart_area_line');
    var lineChart = echarts.init(chart);

    lineChart.setOption({
        title: {
            text: "Line Graph",
            subtext: "Subtitle"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            x: 220,
            y: 40,
            data: ["Intent", "Pre-order", "Deal"]
        },
        toolbox: {
            show: !0,
            feature: {
                magicType: {
                    show: !0,
                    title: {
                        line: "Line",
                        bar: "Bar",
                        stack: "Stack",
                        tiled: "Tiled"
                    },
                    type: ["line", "bar", "stack", "tiled"]
                },
                restore: {
                    show: !0,
                    title: "Restore"
                },
                saveAsImage: {
                    show: !0,
                    title: "Save Image"
                }
            }
        },
        calculable: !0,
        xAxis: [{
            type: "category",
            boundaryGap: !1,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        }],
        yAxis: [{
            type: "value"
        }],
        series: [{
            name: "Deal",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [10, 12, 21, 54, 260, 830, 710]
        }, {
            name: "Pre-order",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [30, 182, 434, 791, 390, 30, 10]
        }, {
            name: "Intent",
            type: "line",
            smooth: !0,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: "default"
                    }
                }
            },
            data: [1320, 1132, 601, 234, 120, 90, 20]
        }],
        color: ['#9f78ff', '#fa626b', '#32cafe',]
    });

    /* Sonar Chart */
    var chart = document.getElementById('echart_sonar');
    var sonarChart = echarts.init(chart);

    sonarChart.setOption({
        title: {
            text: "Budget vs spending",
            subtext: "Subtitle"
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            orient: "vertical",
            x: "right",
            y: "bottom",
            data: ["Allocated Budget", "Actual Spending"]
        },
        toolbox: {
            show: !0,
            feature: {
                restore: {
                    show: !0,
                    title: "Restore"
                },
                saveAsImage: {
                    show: !0,
                    title: "Save Image"
                }
            }
        },
        polar: [{
            indicator: [{
                text: "Sales",
                max: 6e3
            }, {
                text: "Administration",
                max: 16e3
            }, {
                text: "Information Techology",
                max: 3e4
            }, {
                text: "Customer Support",
                max: 38e3
            }, {
                text: "Development",
                max: 52e3
            }, {
                text: "Marketing",
                max: 25e3
            }]
        }],
        calculable: !0,
        series: [{
            name: "Budget vs spending",
            type: "radar",
            data: [{
                value: [4300, 1e4, 28e3, 35e3, 5e4, 19e3],
                name: "Allocated Budget"
            }, {
                value: [5e3, 14e3, 28e3, 31e3, 42e3, 21e3],
                name: "Actual Spending"
            }]
        }]
    });

    /* Donut Chart */
    var chart = document.getElementById('echart_donut');
    var donutChart = echarts.init(chart);

    donutChart.setOption({
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: !0,
        legend: {
            x: "center",
            y: "bottom",
            data: ["Direct Access", "E-mail Marketing", "Union Ad", "Video Ads", "Search Engine"]
        },
        toolbox: {
            show: !0,
            feature: {
                magicType: {
                    show: !0,
                    type: ["pie", "funnel"],
                    option: {
                        funnel: {
                            x: "25%",
                            width: "50%",
                            funnelAlign: "center",
                            max: 1548
                        }
                    }
                },
                restore: {
                    show: !0,
                    title: "Restore"
                },
                saveAsImage: {
                    show: !0,
                    title: "Save Image"
                }
            }
        },
        series: [{
            name: "Access to the resource",
            type: "pie",
            radius: ["35%", "55%"],
            itemStyle: {
                normal: {
                    label: {
                        show: !0
                    },
                    labelLine: {
                        show: !0
                    }
                },
                emphasis: {
                    label: {
                        show: !0,
                        position: "center",
                        textStyle: {
                            fontSize: "14",
                            fontWeight: "normal"
                        }
                    }
                }
            },
            data: [{
                value: 335,
                name: "Direct Access"
            }, {
                value: 310,
                name: "E-mail Marketing"
            }, {
                value: 234,
                name: "Union Ad"
            }, {
                value: 135,
                name: "Video Ads"
            }, {
                value: 1548,
                name: "Search Engine"
            }]
        }]
    });

});


'use strict';
$(function () {
    getMorris('line', 'line_chart');
    getMorris('bar', 'bar_chart');
    getMorris('area', 'area_chart');
    getMorris('donut', 'donut_chart');
});


function getMorris(type, element) {
    if (type === 'line') {
        Morris.Line({
            element: element,
            data: [{
                period: '2008',
                iphone: 35,
                ipad: 67,
                itouch: 15
            }, {
                period: '2009',
                iphone: 140,
                ipad: 189,
                itouch: 67
            }, {
                period: '2010',
                iphone: 50,
                ipad: 80,
                itouch: 22
            }, {
                period: '2011',
                iphone: 180,
                ipad: 220,
                itouch: 76
            }, {
                period: '2012',
                iphone: 130,
                ipad: 110,
                itouch: 82
            }, {
                period: '2013',
                iphone: 80,
                ipad: 60,
                itouch: 85
            }, {
                period: '2014',
                iphone: 78,
                ipad: 205,
                itouch: 135
            }, {
                period: '2015',
                iphone: 180,
                ipad: 124,
                itouch: 140
            }, {
                period: '2016',
                iphone: 105,
                ipad: 100,
                itouch: 85
            },
            {
                period: '2017',
                iphone: 210,
                ipad: 180,
                itouch: 120
            }
            ],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['iPhone', 'iPad', 'iPod Touch'],
            pointSize: 3,
            fillOpacity: 0,
            pointStrokeColors: ['#222222', '#cccccc', '#f96332'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 2,
            hideHover: 'auto',
            lineColors: ['#222222', '#20B2AA', '#f96332'],
            resize: true
        });
    } else if (type === 'bar') {
    	 Morris.Bar({
    		    element: element,
    		    data: [{
                    x: '2011 Q1',
                    y: 66,
                    z: 54,
                    a: 38
                }, {
                    x: '2011 Q2',
                    y: 98,
                    z: 75,
                    a: 45
                }, {
                    x: '2011 Q3',
                    y: 73,
                    z: 52,
                    a: 44
                }, {
                    x: '2011 Q4',
                    y: 82,
                    z: 64,
                    a: 43
                }],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                barColors: ['#01B8AA', '#F2C80F', '#5F6B6D'],
    		    hideHover: 'auto'
    		  });

    } else if (type === 'area') {
        Morris.Area({
            element: element,
            data: [
                { w: '2011 Q1', x: 2, y: 0, z: 0 },
                { w: '2011 Q2', x: 50, y: 15, z: 5 },
                { w: '2011 Q3', x: 15, y: 50, z: 23 },
                { w: '2011 Q4', x: 45, y: 12, z: 7 },
                { w: '2011 Q5', x: 20, y: 32, z: 55 },
                { w: '2011 Q6', x: 39, y: 67, z: 20 },
                { w: '2011 Q7', x: 20, y: 9, z: 5 }
            ],
            xkey: 'w',
            ykeys: ['x', 'y', 'z'],
            labels: ['X', 'Y', 'Z'],
            pointSize: 0,
            lineWidth: 0,
            resize: true,
            fillOpacity: 0.8,
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            hideHover: 'auto',
            lineColors: ['rgb(97, 97, 97)', 'rgb(0, 206, 209)', 'rgb(255, 117, 142)']
        });
    } else if (type === 'donut') {
        Morris.Donut({
            element: element,
            data: [{
                label: 'Chrome',
                value: 37
            }, {
                label: 'Firefox',
                value: 30
            }, {
                label: 'Safari',
                value: 18
            }, {
                label: 'Opera',
                value: 12
            },
            {
                label: 'Other',
                value: 3
            }],
            colors: ['rgb(255, 206, 86)', 'rgb(65, 196, 216)', 'rgb(109, 109, 109)', 'rgb(255, 99, 132)', 'rgb(75, 192, 192)'],
            formatter: function (y) {
                return y + '%'
            }
        });
    }
}
"use strict";

$.chatCtrl = function(element, chat) {
    var chat = $.extend({
      position: 'chat-right',
      text: '',
      time: moment(new Date().toISOString()).format('hh:mm'),
      picture: '',
      type: 'text', // or typing
      timeout: 0,
      onShow: function() {}
    }, chat);

    var target = $(element),
        element = '<div class="chat-item '+chat.position+'" style="display:none">' +
                  '<img src="'+chat.picture+'">' +
                  '<div class="chat-details">' +
                  '<div class="chat-text">'+chat.text+'</div>' +
                  '<div class="chat-time">'+chat.time+'</div>' +
                  '</div>' +
                  '</div>',
        typing_element = '<div class="chat-item chat-left chat-typing" style="display:none">' +
                  '<img src="'+chat.picture+'">' +
                  '<div class="chat-details">' +
                  '<div class="chat-text"></div>' +
                  '</div>' +
                  '</div>';

      var append_element = element;
      if(chat.type == 'typing') {
        append_element = typing_element;
      }

      if(chat.timeout > 0) {
        setTimeout(function() {
          target.find('.chat-content').append($(append_element).fadeIn());
        }, chat.timeout);
      }else{
        target.find('.chat-content').append($(append_element).fadeIn());
      }

      var target_height = 0;
      target.find('.chat-content .chat-item').each(function() {
        target_height += $(this).outerHeight();
      });
      setTimeout(function() {
        target.find('.chat-content').scrollTop(target_height, -1);
      }, 100);
      chat.onShow.call(this, append_element);
  }

  if ($("#chat-scroll").length) {
    $("#chat-scroll").css({
      height: 450
    }).niceScroll();
  }
  
    if ($(".chat-content").length) {
    $(".chat-content").niceScroll({
      cursoropacitymin: .3,
      cursoropacitymax: .8,
    });
    $('.chat-content').getNiceScroll(0).doScrollTop($('.chat-content').height());
  }
var chats = [
  {
    text: 'Hi, How R U?!',
    position: 'left'
  },
  {
    text: 'I am Fine',
    position: 'right'
  },
  {
    text: 'You?',
    position: 'right'
  },
  {
    text: 'I am fine too!!',
    position: 'left'
  },
  {
    text: 'Have you look at current task?',
    position: 'right'
  },
  {
    text: 'Yes I am.',
    position: 'left'
  },
  {
    text: 'Its going good.',
    position: 'left'
  },
  {
    text: 'Very Good',
    position: 'right'
  },
  {
    text: 'Delevered me when complete',
    position: 'right'
  },
  {
    text: 'Okay Sure',
    position: 'left'
  },
  {
    text: 'Thank You...',
    position: 'right'
  },
  {
    typing: true,
    position: 'left'
  }
];
for(var i = 0; i < chats.length; i++) {
  var type = 'text';
  if(chats[i].typing != undefined) type = 'typing';
  $.chatCtrl('#mychatbox', {
    text: (chats[i].text != undefined ? chats[i].text : ''),
    picture: (chats[i].position == 'left' ? 'assets/img/users/user-5.png' : 'assets/img/users/user-1.png'),
    position: 'chat-'+chats[i].position,
    type: type
  });
}

$("#chat-form").submit(function() {
  var me = $(this);

  if(me.find('input').val().trim().length > 0) {      
    $.chatCtrl('#mychatbox', {
      text: me.find('input').val(),
      picture: 'assets/img/users/user-5.png',
    });
    me.find('input').val('');
  } 
  return false;
});



'use strict';
$(function () {
    //CKEditor
    CKEDITOR.replace('ckeditor');
    CKEDITOR.config.height = 300;
    
      if (window.CodeMirror) {
    $(".codeeditor").each(function () {
      let editor = CodeMirror.fromTextArea(this, {
        lineNumbers: true,
        theme: "duotone-dark",
        mode: 'javascript',
        height: 200
      });
      editor.setSize("100%", 200);
    });
  }
    

});


"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 23.014280,
  lng: 72.532057,
  zoomControl: false,
  fullscreenControl: false,
  mapTypeControl: true,
  mapTypeControlOptions: {
    mapTypeIds: []
  }
});
// Added a overlay to the map
map.drawOverlay({
   	lat: 23.014280,
  	lng: 72.532057,
  content: '<div class="popover" style="width:250px;"><div class="manual-arrow"><i class="fas fa-caret-down"></i></div><div class="popover-body"><b>Redstar</b><p><small>501, Saman Complex, Mansi Circle., <br>Gandho Road, Satellite 356987</p><p><a target="_blank" href="http://test.com">Website</a></small></p></div></div>'
});

"use strict";

$("select").selectric();
$.uploadPreview({
  input_field: "#image-upload",   // Default: .image-upload
  preview_box: "#image-preview",  // Default: .image-preview
  label_field: "#image-label",    // Default: .image-label
  label_default: "Choose File",   // Default: Choose File
  label_selected: "Change File",  // Default: Change File
  no_label: false,                // Default: false
  success_callback: null          // Default: null
});
$(".inputtags").tagsinput('items');

"use strict";

$("[data-checkboxes]").each(function() {
  var me = $(this),
    group = me.data('checkboxes'),
    role = me.data('checkbox-role');

  me.change(function() {
    var all = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"])'),
      checked = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"]):checked'),
      dad = $('[data-checkboxes="' + group + '"][data-checkbox-role="dad"]'),
      total = all.length,
      checked_length = checked.length;

    if(role == 'dad') {
      if(me.is(':checked')) {
        all.prop('checked', true);
      }else{
        all.prop('checked', false);
      }
    }else{
      if(checked_length >= total) {
        dad.prop('checked', true);
      }else{
        dad.prop('checked', false);
      }
    }
  });
});

$("#table-1").dataTable({
  "columnDefs": [
    { "sortable": false, "targets": [2,3] }
  ]
});
$("#table-2").dataTable({
 "columnDefs": [
    { "sortable": false, "targets": [0,2,3] }
  ],
  order: [[ 1, "asc" ]] //column indexes is zero based
  
});
$('#save-stage').DataTable({
		"scrollX": true,
		stateSave: true
	});
$('#tableExport').DataTable({
		dom: 'Bfrtip',
		buttons: [
			'copy', 'csv', 'excel', 'pdf', 'print'
		]
	});
	
'use strict';
$(function () {
    $('#mainTable').editableTableWidget();
});
'use strict';
$(function () {
    //Horizontal form basic
    $('#wizard_horizontal').steps({
        headerTag: 'h2',
        bodyTag: 'section',
        transitionEffect: 'slideLeft',
        onInit: function (event, currentIndex) {
            setButtonWavesEffect(event);
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            setButtonWavesEffect(event);
        }
    });

    //Vertical form basic
    $('#wizard_vertical').steps({
        headerTag: 'h2',
        bodyTag: 'section',
        transitionEffect: 'slideLeft',
        stepsOrientation: 'vertical',
        onInit: function (event, currentIndex) {
            setButtonWavesEffect(event);
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            setButtonWavesEffect(event);
        }
    });
    
    //Advanced form with validation
    var form = $('#wizard_with_validation').show();
    form.steps({
        headerTag: 'h3',
        bodyTag: 'fieldset',
        transitionEffect: 'slideLeft',
        onInit: function (event, currentIndex) {

            //Set tab width
            var $tab = $(event.currentTarget).find('ul[role="tablist"] li');
            var tabCount = $tab.length;
            $tab.css('width', (100 / tabCount) + '%');

            //set button waves effect
            setButtonWavesEffect(event);
        },
        onStepChanging: function (event, currentIndex, newIndex) {
            if (currentIndex > newIndex) { return true; }

            if (currentIndex < newIndex) {
                form.find('.body:eq(' + newIndex + ') label.error').remove();
                form.find('.body:eq(' + newIndex + ') .error').removeClass('error');
            }

            form.validate().settings.ignore = ':disabled,:hidden';
            return form.valid();
        },
        onStepChanged: function (event, currentIndex, priorIndex) {
            setButtonWavesEffect(event);
        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ':disabled';
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            alert("Good job!", "Submitted!", "success");
        }
    });

    form.validate({
        highlight: function (input) {
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.form-group').append(error);
        },
        rules: {
            'confirm': {
                equalTo: '#password'
            }
        }
    });

    
});

function setButtonWavesEffect(event) {
    $(event.currentTarget).find('[role="menu"] li a').removeClass('waves-effect');
    $(event.currentTarget).find('[role="menu"] li:not(.disabled) a').addClass('waves-effect');
}
"use strict";

var cleavePN = new Cleave('.phone-number', {
  phone: true,
  phoneRegionCode: 'us'
});
var cleaveC = new Cleave('.currency', {
  numeral: true,
  numeralThousandsGroupStyle: 'thousand'
});
var cleavePC = new Cleave('.purchase-code', {
  delimiter: '-',
  blocks: [4, 4, 4, 4],
  uppercase: true
});
var cleaveI = new Cleave('.invoice-input', {
  prefix: 'INV',
  delimiter: '-',
  blocks: [10],
  uppercase: true
});
var cleaveD = new Cleave('.datemask', {
  date: true,
  datePattern: ['Y', 'm', 'd']
});
var cc_last_type;
var cleaveCC = new Cleave('.creditcard', {
  creditCard: true,
  onCreditCardTypeChanged: function(type) {
    if(type !== 'unknown') {
      if(type == 'amex') {
        type = 'americanexpress';
      }else if(type == 'mastercard') {
        type = 'mastercard';
      }else if(type == 'visa') {
        type = 'visa';
      }else if(type == 'diners') {
        type = 'dinersclub';
      }else if(type == 'discover') {
        type = 'discover';
      }else if(type == 'jcb') {
        type = 'jcb';
      }
      $(".creditcard").removeClass(cc_last_type);
      $(".creditcard").addClass(type);
      cc_last_type = type;                        
    }
  }
});

$(".pwstrength").pwstrength();

$('.daterange-cus').daterangepicker({
  locale: {format: 'YYYY-MM-DD'},
  drops: 'down',
  opens: 'right'
});
$('.daterange-btn').daterangepicker({
  ranges: {
    'Today'       : [moment(), moment()],
    'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month'  : [moment().startOf('month'), moment().endOf('month')],
    'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  },
  startDate: moment().subtract(29, 'days'),
  endDate  : moment()
}, function (start, end) {
  $('.daterange-btn span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'))
});

$(".colorpickerinput").colorpicker({
  format: 'hex',
  component: '.input-group-append',
});
$(".inputtags").tagsinput('items');

/**
 * Gallery
 */
 
  $(".gallery .gallery-item").each(function () {
    var me = $(this);

    me.attr('href', me.data('image'));
    me.attr('title', me.data('title'));
    if (me.parent().hasClass('gallery-fw')) {
      me.css({
        height: me.parent().data('item-height'),
      });
      me.find('div').css({
        lineHeight: me.parent().data('item-height') + 'px'
      });
    }
    me.css({
      backgroundImage: 'url("' + me.data('image') + '")'
    });
  });
  if (jQuery().Chocolat) {
    $(".gallery").Chocolat({
      className: 'gallery',
      imageSelector: '.gallery-item',
    });
  }
 
"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 23.014711,
  lng: 72.530810
});

// when the 'start travel' button is clicked
$("#start-travel").click(function() {
  $(this).fadeOut();
  $("#instructions").before("<div class='section-title'>Instructions</div>");
  map.travelRoute({
    origin: [23.014711, 72.530810],
    destination: [23.0193733, 72.5069159],
    travelMode: 'driving',
    step: function(e) {
      $('#instructions').append('<li class="media"><div class="media-icon"><i class="far fa-circle"></i></div><div class="media-body">'+e.instructions+'</div></li>');
      $('#instructions li:eq(' + e.step_number + ')').delay(450 * e.step_number).fadeIn(200, function() {
        map.setCenter(e.end_location.lat(), e.end_location.lng());
        map.drawPolyline({
          path: e.path,
          strokeColor: '#131540',
          strokeOpacity: 0.6,
          strokeWeight: 6
        });
      });
    }
  });
});

"use strict";

var input_lat = $("#input-lat"), // latitude input text
  input_lng = $("#input-lng"), // longitude input text
  map = new GMaps({ // init map
    div: '#map',
    lat: 23.014711,
  	lng: 72.530810
  });

// add marker
var marker = map.addMarker({
  	lat: 23.014711,
  	lng: 72.530810,
  	draggable: true,
});

// when the map is clicked
map.addListener("click", function(e) {
  var lat = e.latLng.lat(), 
    lng = e.latLng.lng();

  // move the marker position
  marker.setPosition({
    lat: lat,
    lng: lng
  });
  update_position();       
});

// when the marker is dragged
marker.addListener('drag', function(e) {
  update_position();
});

// set the value to latitude and longitude input
update_position();
function update_position() {
  var lat = marker.getPosition().lat(), lng = marker.getPosition().lng();
  input_lat.val(lat);
  input_lng.val(lng);
}

// move the marker when the latitude and longitude inputs change in value
$("#input-lat,#input-lng").blur(function() {
  var lat = parseInt(input_lat.val()), 
    lng = parseInt(input_lng.val());

  marker.setPosition({
    lat: lat,
    lng: lng
  });
  map.setCenter({
    lat: lat,
    lng: lng
  });
});

"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 23.014711,
  lng: 72.530810
});

// when the form is submitted
$("#search-form").submit(function(e) {
  e.preventDefault();

  // initialize map geocode
  GMaps.geocode({
    address: $('#address').val(),
    callback: function(results, status) {
    if (status == 'OK') {
      var latlng = results[0].geometry.location;
      map.setCenter(latlng.lat(), latlng.lng());
      map.addMarker({
      lat: latlng.lat(),
      lng: latlng.lng()
      });
    }
    }
  });
})
"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 23.014711,
  lng: 72.530810
});
// initialize map geolocation
GMaps.geolocate({
  // when geolocation is allowed by user
  success: function(position) {
    // set center map according to user position
    map.setCenter(position.coords.latitude, position.coords.longitude);
    // add a marker to the map
    map.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      title: 'You'
    });
  },
  // when geolocation is blocked by the user
  error: function(error) {
    toastr.error('Geolocation failed: '+error.message);
  },
  // when the user's browser does not support
  not_supported: function() {
    toastr.error("Your browser does not support geolocation");
  }
});

"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 23.078960,
  lng: 72.623013
});
// Added a marker to the map
map.addMarker({
  lat: 23.078960,
  lng: 72.623013,
  title: 'Airport',
  infoWindow: {
    content: '<h6>Airport</h6><p>Sardar Vallabhbhai Patel International Airport, <br>Ahmedabad</p><p><a target="_blank" href="http://example.com">Website</a></p>'
  }
});

"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 23.078960,
  lng: 72.623013,
  zoom: 8
});
// Added markers to the map
map.addMarker({
  lat: 23.078960,
  lng: 72.623013,
  title: 'Airport',
  infoWindow: {
    content: '<h6>Airport</h6><p>Sardar Vallabhbhai Patel International Airport, <br>Ahmedabad</p><p><a target="_blank" href="http://example.com">Website</a></p>'
  }
});
map.addMarker({
  lat: 22.291343,
  lng: 70.801418,
  title: 'Bus Stop',
  infoWindow: {
    content: '<h6>Bus Stop</h6><p>Rajkot GSRTC Bus Stop</p><p><a target="_blank" href="https://example.com/">Website</a></p>'
  }
});
 
map.addMarker({
  lat: 22.322411,
  lng: 73.180935,
  title: 'University',
  infoWindow: {
    content: '<h6>University</h6><p>M S Uni Head Office, Officers Railway Colony, Pratapgunj, Vadodara, Gujarat 390002, India</p><p><a target="_blank" href="http://example.com/">Website</a></p>'
  }
});

"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 23.014711,
  lng: 72.530810,
  zoom: 8
});

// draw route between 'origin' to 'destination'
map.drawRoute({
  origin: [23.014711, 72.530810],
  destination: [22.291330, 70.802255],
  travelMode: 'driving',
  strokeColor: '#131540',
  strokeOpacity: 0.6,
  strokeWeight: 6
});
"use strict";

var simple_map = new GMaps({
  div: '#simple-map',
  lat: 23.014711,
  lng: 72.530810
})

"use strict";

var draw = Chart.controllers.line.prototype.draw;
Chart.controllers.lineShadow = Chart.controllers.line.extend({
    draw: function () {
        draw.apply(this, arguments);
        var ctx = this.chart.chart.ctx;
        var _stroke = ctx.stroke;
        ctx.stroke = function () {
            ctx.save();
            ctx.shadowColor = '#00000075';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetX = 8;
            ctx.shadowOffsetY = 8;
            _stroke.apply(this, arguments)
            ctx.restore();
        }
    }
});

var options = {
    chart: {
        height: 350,
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'New Clients',
        data: [20, 120, 38, 100, 42, 109, 32]
    }, {
        name: 'Old Clients',
        data: [11, 32, 125, 40, 135, 52, 41]
    }],

    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        labels: {
            style: {
                colors: '#9aa0ac',
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                color: '#9aa0ac',
            }
        }
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
}

var chart = new ApexCharts(
    document.querySelector("#chart6"),
    options
);

chart.render();

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                30,
                50,
                20,
            ],
            backgroundColor: [
                '#191d21',
                '#63ed7a',
                '#ffa426',
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Black',
            'Green',
            'Yellow',
        ],
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            display: false
        },
    }
});

var ctx = document.getElementById('line-chart3').getContext("2d");

var gradientStroke = ctx.createLinearGradient(0, 0, 700, 0);
gradientStroke.addColorStop(0, 'rgba(255, 204, 128, 1)');
gradientStroke.addColorStop(0.5, 'rgba(255, 152, 0, 1)');
gradientStroke.addColorStop(1, 'rgba(239, 108, 0, 1)');

var gradientStroke2 = ctx.createLinearGradient(0, 0, 700, 0);
gradientStroke2.addColorStop(0, 'rgba(35, 189, 184, 1)');
gradientStroke2.addColorStop(0.5, 'rgba(48, 195, 191, 1)');
gradientStroke2.addColorStop(1, 'rgba(64, 202, 197, 1)');

var myChart = new Chart(ctx, {
    type: 'lineShadow',
    data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        type: 'line',
        defaultFontFamily: 'Poppins',
        datasets: [{
            label: "Income",
            data: [0, 30, 10, 120, 50, 63, 10],
            borderColor: gradientStroke,
            pointBorderColor: gradientStroke,
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            pointBorderWidth: 5,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            fill: false,
            borderWidth: 4,
        }, {
            label: "Expense",
            data: [0, 50, 40, 80, 40, 79, 120],
            borderColor: gradientStroke2,
            pointBorderColor: gradientStroke2,
            pointBackgroundColor: gradientStroke2,
            pointHoverBackgroundColor: gradientStroke2,
            pointHoverBorderColor: gradientStroke2,
            pointBorderWidth: 5,
            pointHoverRadius: 6,
            pointHoverBorderWidth: 1,
            pointRadius: 1,
            fill: false,
            borderWidth: 4,
        }]
    },


    options: {
        legend: {
            position: "bottom",
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20,
                    fontColor: "#9aa0ac", // Font Color
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 20,
                    fontColor: "rgba(0,0,0,0.5)",
                    fontStyle: "bold",
                    fontColor: "#9aa0ac", // Font Color
                }
            }]
        }
    }
});



"use strict";

$("#icons li").each(function() {
  $(this).append('<div class="icon-name">'+ $(this).attr('class') +'</div>');
});
$("#icons li").click(function() {
  $(".icon-name").fadeOut();
  $(this).find('.icon-name').fadeIn();
});


'use strict';
$(function () {
    $('#aniimated-thumbnials').lightGallery({
        thumbnail: true,
        selector: 'a'
    });
});
"use strict";

// DropzoneJS
if (window.Dropzone) {
  Dropzone.autoDiscover = false;
}

var dropzone = new Dropzone("#mydropzone", {
  url: "#"
});

var minSteps = 6,
  maxSteps = 60,
  timeBetweenSteps = 100,
  bytesPerStep = 100000;

dropzone.uploadFiles = function(files) {
  var self = this;

  for (var i = 0; i < files.length; i++) {

    var file = files[i];
      totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));

    for (var step = 0; step < totalSteps; step++) {
      var duration = timeBetweenSteps * (step + 1);
      setTimeout(function(file, totalSteps, step) {
        return function() {
          file.upload = {
            progress: 100 * (step + 1) / totalSteps,
            total: file.size,
            bytesSent: (step + 1) * file.size / totalSteps
          };

          self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);
          if (file.upload.progress == 100) {
            file.status = Dropzone.SUCCESS;
            self.emit("success", file, 'success', null);
            self.emit("complete", file);
            self.processQueue();
          }
        };
      }(file, totalSteps, step), duration);
    }
  }
}
"use strict";

$("#slider1,#slider2").owlCarousel({
  items: 1,
  nav: true,
  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
});

$(function () {
	$('.categories a').click(function (e) {
		$('.categories ul li').removeClass('active');
		$(this).parent('li').addClass('active');
		var itemSelected = $(this).attr('data-filter');
		$('.portfolio-item').each(function () {
			if (itemSelected == '*') {
				$(this).removeClass('filtered').removeClass('selected');
				return;
			} else if ($(this).is(itemSelected)) {
				$(this).removeClass('filtered').addClass('selected');
			} else {
				$(this).removeClass('selected').addClass('filtered');
			}
		});
	});
}); 
"use strict";

$("[data-checkboxes]").each(function() {
  var me = $(this),
    group = me.data('checkboxes'),
    role = me.data('checkbox-role');

  me.change(function() {
    var all = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"])'),
      checked = $('[data-checkboxes="' + group + '"]:not([data-checkbox-role="dad"]):checked'),
      dad = $('[data-checkboxes="' + group + '"][data-checkbox-role="dad"]'),
      total = all.length,
      checked_length = checked.length;

    if(role == 'dad') {
      if(me.is(':checked')) {
        all.prop('checked', true);
      }else{
        all.prop('checked', false);
      }
    }else{
      if(checked_length >= total) {
        dad.prop('checked', true);
      }else{
        dad.prop('checked', false);
      }
    }
  });
});

"use strict";

var sparkline_values = [110, 147, 324, 108, 235, 498, 346, 525, 382, 214, 427, 424, 239, 236, 475, 569],
  sparkline_values_bar = [10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 10, 7, 4, 8, 5, 8, 6, 5, 4],
  sparkline_pie = [30, 20, 10];

$('.sparkline-inline').sparkline(sparkline_values, {
  type: 'line',
  width: '100%',
  height: '200',
  lineWidth: 3,
  lineColor: 'rgba(63,82,227,.1)',
  fillColor: 'rgba(63,82,227,.4)',
  highlightSpotColor: 'rgba(63,82,227,.1)',
  highlightLineColor: 'rgba(63,82,227,.1)',
  spotRadius: 3,
});

$('.sparkline-line').sparkline(sparkline_values, {
  type: 'line',
  width: '100%',
  height: '200',
  lineWidth: 3,
  lineColor: 'rgba(63,82,227,.6)',
  fillColor: 'transparent',
  highlightSpotColor: 'rgba(63,82,227,.1)',
  highlightLineColor: 'rgba(63,82,227,.1)',
  spotRadius: 3,
});

$(".sparkline-bar").sparkline(sparkline_values_bar, {
  type: 'bar',
  width: '100%',
  height: '200',
  barColor: 'rgb(63,82,227)',
  barWidth: 20
});

$(".sparkline-pie").sparkline(sparkline_pie, {
  type: 'pie',
  width: 'auto',
  height: '200',
  barWidth: 20
});
"use strict";

$("#swal-1").click(function() {
	swal('Hello');
});

$("#swal-2").click(function() {
	swal('Good Job', 'You clicked the button!', 'success');
});

$("#swal-3").click(function() {
	swal('Good Job', 'You clicked the button!', 'warning');
});

$("#swal-4").click(function() {
	swal('Good Job', 'You clicked the button!', 'info');
});

$("#swal-5").click(function() {
	swal('Good Job', 'You clicked the button!', 'error');
});

$("#swal-6").click(function() {
  swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
      swal('Poof! Your imaginary file has been deleted!', {
        icon: 'success',
      });
      } else {
      swal('Your imaginary file is safe!');
      }
    });
});

$("#swal-7").click(function() {
  swal({
    title: 'What is your name?',
    content: {
    element: 'input',
    attributes: {
      placeholder: 'Type your name',
      type: 'text',
    },
    },
  }).then((data) => {
    swal('Hello, ' + data + '!');
  });
});

$("#swal-8").click(function() {
  swal('This modal will disappear soon!', {
    buttons: false,
    timer: 3000,
  });
});
"use strict";

$('#visitorMap').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: .8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: .8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
  pins: {
    id: '<div class="jqvmap-circle"></div>',
    my: '<div class="jqvmap-circle"></div>',
    th: '<div class="jqvmap-circle"></div>',
    sy: '<div class="jqvmap-circle"></div>',
    eg: '<div class="jqvmap-circle"></div>',
    ae: '<div class="jqvmap-circle"></div>',
    nz: '<div class="jqvmap-circle"></div>',
    tl: '<div class="jqvmap-circle"></div>',
    ng: '<div class="jqvmap-circle"></div>',
    si: '<div class="jqvmap-circle"></div>',
    pa: '<div class="jqvmap-circle"></div>',
    au: '<div class="jqvmap-circle"></div>',
    ca: '<div class="jqvmap-circle"></div>',
    tr: '<div class="jqvmap-circle"></div>',
  },
  onRegionClick: function(element, code, region) {
    var opts = {
      title: 'Choosed',
      message: 'You clicked "'
      + region
      + '" which has the code: '
      + code.toUpperCase()
    };

    iziToast.info(opts);
  }
});
$('#visitorMap2').vectorMap({
  map: 'world_en',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: .8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: .8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
  onRegionClick: function(element, code, region) {
    var message = 'You clicked "'
      + region
      + '" which has the code: '
      + code.toUpperCase();

    $("#flag-icon").removeClass (function (index, className) {
      return (className.match (/(^|\s)flag-icon-\S+/g) || []).join(' ');
    });
    $("#flag-icon").addClass('flag-icon-' + code);
  }
});
$('#visitorMap3').vectorMap({
  map: 'indonesia_id',
  backgroundColor: '#ffffff',
  borderColor: '#f2f2f2',
  borderOpacity: .8,
  borderWidth: 1,
  hoverColor: '#000',
  hoverOpacity: .8,
  color: '#ddd',
  normalizeFunction: 'linear',
  selectedRegions: false,
  showTooltip: true,
});

"use strict";

var sparkline_values = [10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 6, 5, 9];
var sparkline_values_chart = [2, 6, 4, 8, 3, 5, 2, 7];
var sparkline_values_bar = [10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 10, 7, 4, 8, 5, 8, 6, 5, 2, 4, 7, 4, 9, 8, 6, 5, 2, 4, 7, 4, 9, 10, 2, 4, 7, 4, 9, 7, 4, 8, 5, 8, 6, 5];

$('.sparkline-inline').sparkline(sparkline_values, {
  type: 'line',
  width: '100%',
  height: '32',
  lineWidth: 3,
  lineColor: 'rgba(87,75,144,.1)',
  fillColor: 'rgba(87,75,144,.25)',
  highlightSpotColor: 'rgba(87,75,144,.1)',
  highlightLineColor: 'rgba(87,75,144,.1)',
  spotRadius: 3,
});

$('.sparkline-line').sparkline(sparkline_values, {
  type: 'line',
  width: '100%',
  height: '32',
  lineWidth: 3,
  lineColor: 'rgba(63, 82, 227, .5)',
  fillColor: 'transparent',
  highlightSpotColor: 'rgba(63, 82, 227, .5)',
  highlightLineColor: 'rgba(63, 82, 227, .5)',
  spotRadius: 3,
});

$('.sparkline-line-chart').sparkline(sparkline_values_chart, {
  type: 'line',
  width: '100%',
  height: '32',
  lineWidth: 2,
  lineColor: 'rgba(63, 82, 227, .5)',
  fillColor: 'transparent',
  highlightSpotColor: 'rgba(63, 82, 227, .5)',
  highlightLineColor: 'rgba(63, 82, 227, .5)',
  spotRadius: 2,
});

$(".sparkline-bar").sparkline(sparkline_values_bar, {
  type: 'bar',
  height: '32',
  disableTooltips: true,
  barColor: 'rgb(87,75,144)'
});


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Statistics',
      data: [460, 458, 330, 502, 430, 610, 488],
      borderWidth: 2,
      backgroundColor: 'rgba(145,141,197,.8)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(63,82,227,.8)',
    }, {
      label: 'Statistics',
      data: [390, 600, 390, 280, 600, 430, 638],
      borderWidth: 2,
      backgroundColor: 'rgba(58,184,214,.7)',
      borderWidth: 0,
      borderColor: 'transparent',
      pointBorderWidth: 0,
      pointRadius: 3.5,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(254,86,83,.8)',
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#9aa0ac", // Font Color
          callback: function (value, index, values) {
            return value;
          }
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          tickMarkLength: 15,
        },
        ticks: {
          fontColor: "#9aa0ac", // Font Color
        }
      }]
    },
  }
});

var ctx = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Statistics',
      data: [428, 354, 425, 528, 450, 632, 429],
      borderWidth: 2,
      backgroundColor: 'rgba(255,164,38,.9)',
      borderColor: 'rgba(255,164,38,.9)',
      borderWidth: 2.5,
      pointBackgroundColor: '#ffffff',
      pointRadius: 4
    }, {
      label: 'Statistics',
      data: [468, 387, 401, 574, 498, 568, 452],
      borderWidth: 2,
      backgroundColor: 'rgba(71,65,98,.9)',
      borderColor: 'transparent',
      borderWidth: 0,
      pointBackgroundColor: '#999',
      pointRadius: 4
    }]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 150,
          fontColor: "#9aa0ac", // Font Color
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: "#9aa0ac", // Font Color
        }
      }]
    },
  }
});

var ctx = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [{
      label: 'Google',
      data: [290, 358, 220, 402, 440, 510, 688],
      borderWidth: 2,
      backgroundColor: 'transparent',
      borderColor: 'rgba(254,86,83,.7)',
      borderWidth: 2.5,
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointRadius: 4
    },
    {
      label: 'Facebook',
      data: [450, 258, 390, 162, 650, 570, 438],
      borderWidth: 2,
      backgroundColor: 'transparent',
      borderColor: 'rgba(63,82,227,.8)',
      borderWidth: 0,
      pointBackgroundColor: 'transparent',
      pointBorderColor: 'transparent',
      pointRadius: 4
    },
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          color: '#f2f2f2',
        },
        ticks: {
          beginAtZero: true,
          stepSize: 200,
          fontColor: "#9aa0ac", // Font Color
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: "#9aa0ac", // Font Color
        }
      }]
    },
  }
});

$('#visitorMap').vectorMap(
  {
    map: 'world_en',
    backgroundColor: '#ffffff',
    borderColor: '#F5AE46',
    borderOpacity: .8,
    borderWidth: 1,
    hoverColor: '#000',
    hoverOpacity: .8,
    color: '#ddd',
    normalizeFunction: 'linear',
    selectedRegions: false,
    showTooltip: true,
    pins: {
      id: '<div class="jqvmap-circle"></div>',
      my: '<div class="jqvmap-circle"></div>',
      th: '<div class="jqvmap-circle"></div>',
      sy: '<div class="jqvmap-circle"></div>',
      eg: '<div class="jqvmap-circle"></div>',
      ae: '<div class="jqvmap-circle"></div>',
      nz: '<div class="jqvmap-circle"></div>',
      tl: '<div class="jqvmap-circle"></div>',
      ng: '<div class="jqvmap-circle"></div>',
      si: '<div class="jqvmap-circle"></div>',
      pa: '<div class="jqvmap-circle"></div>',
      au: '<div class="jqvmap-circle"></div>',
      ca: '<div class="jqvmap-circle"></div>',
      tr: '<div class="jqvmap-circle"></div>',
    },
  });

/* chart shadow */
var draw = Chart.controllers.line.prototype.draw;
Chart.controllers.lineShadow = Chart.controllers.line.extend({
  draw: function () {
    draw.apply(this, arguments);
    var ctx = this.chart.chart.ctx;
    var _stroke = ctx.stroke;
    ctx.stroke = function () {
      ctx.save();
      ctx.shadowColor = '#00000075';
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 8;
      ctx.shadowOffsetY = 8;
      _stroke.apply(this, arguments)
      ctx.restore();
    }
  }
});

var balance_chart = document.getElementById("chart-1").getContext('2d');

var balance_chart_bg_color = balance_chart.createLinearGradient(0, 0, 0, 70);
balance_chart_bg_color.addColorStop(0, 'rgba(120, 107, 236, .2)');
balance_chart_bg_color.addColorStop(1, 'rgba(120, 107, 236, 0)');

var myChart = new Chart(balance_chart, {
  type: 'lineShadow',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001'],
    datasets: [{
      label: 'Balance',
      data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40],
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(41, 192, 177, 1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(120, 107, 236,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },

    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
          fontColor: "#9aa0ac", // Font Color
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false,
          fontColor: "#9aa0ac", // Font Color
        }
      }]
    },
  }
});

var sales_chart = document.getElementById("chart-2").getContext('2d');

var myChart = new Chart(sales_chart, {
  type: 'lineShadow',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001'],
    datasets: [{
      label: 'Sales',
      data: [70, 62, 44, 40, 21, 63, 82, 52, 50, 31, 70, 50],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(156, 39, 176, 1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(120, 107, 236,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});
var sales_chart = document.getElementById("chart-3").getContext('2d');

var myChart = new Chart(sales_chart, {
  type: 'lineShadow',
  data: {
    labels: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001'],
    datasets: [{
      label: 'Sales',
      data: [63, 82, 52, 50, 31, 70, 50, 70, 62, 44, 40, 21],
      borderWidth: 2,
      backgroundColor: balance_chart_bg_color,
      borderWidth: 3,
      borderColor: 'rgba(76, 175, 80, 1)',
      pointBorderWidth: 0,
      pointBorderColor: 'transparent',
      pointRadius: 3,
      pointBackgroundColor: 'transparent',
      pointHoverBackgroundColor: 'rgba(120, 107, 236,1)',
    }]
  },
  options: {
    layout: {
      padding: {
        bottom: -1,
        left: -1
      }
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: true,
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          display: false
        }
      }]
    },
  }
});

var ctx = document.getElementById("donutChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        30,
        50,
        20,
      ],
      backgroundColor: [
        '#191d21',
        '#63ed7a',
        '#ffa426',
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Black',
      'Green',
      'Yellow',
    ],
  },
  options: {
    responsive: true,
    legend: {
      position: 'bottom',
      display: false
    },
  }
});

var ctx = document.getElementById('line-chart3').getContext("2d");

var gradientStroke = ctx.createLinearGradient(0, 0, 700, 0);
gradientStroke.addColorStop(0, 'rgba(255, 204, 128, 1)');
gradientStroke.addColorStop(0.5, 'rgba(255, 152, 0, 1)');
gradientStroke.addColorStop(1, 'rgba(239, 108, 0, 1)');

var myChart = new Chart(ctx, {
  type: 'lineShadow',
  data: {
    labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    type: 'line',
    defaultFontFamily: 'Poppins',
    datasets: [{
      label: "Income",
      data: [0, 30, 10, 120, 50, 63, 10],
      borderColor: gradientStroke,
      pointBorderColor: gradientStroke,
      pointBackgroundColor: gradientStroke,
      pointHoverBackgroundColor: gradientStroke,
      pointHoverBorderColor: gradientStroke,
      pointBorderWidth: 10,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      fill: false,
      borderWidth: 4,
    }, {
      label: "Expense",
      data: [0, 50, 40, 80, 40, 79, 120],
      borderColor: gradientStroke,
      pointBorderColor: gradientStroke,
      pointBackgroundColor: gradientStroke,
      pointHoverBackgroundColor: gradientStroke,
      pointHoverBorderColor: gradientStroke,
      pointBorderWidth: 10,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      fill: false,
      borderWidth: 4,
    }]
  },


  options: {
    legend: {
      position: "bottom",
      display: false
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "rgba(0,0,0,0.5)",
          fontStyle: "bold",
          beginAtZero: true,
          maxTicksLimit: 5,
          padding: 20,
          fontColor: "#9aa0ac", // Font Color
        },
        gridLines: {
          drawTicks: false,
          display: false
        }

      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "transparent"
        },
        ticks: {
          padding: 20,
          fontColor: "rgba(0,0,0,0.5)",
          fontStyle: "bold",
          fontColor: "#9aa0ac", // Font Color
        }
      }]
    }
  }
});



"use strict";

$("#users-carousel").owlCarousel({
  items: 4,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 5000,
  loop: true,
  responsive: {
    0: {
      items: 2
    },
    578: {
      items: 4
    },
    768: {
      items: 4
    }
  }
});

 // Follow function
  $('.follow-btn, .following-btn').each(function () {
    var me = $(this),
      follow_text = 'Follow',
      unfollow_text = 'Following';

    me.click(function () {
      if (me.hasClass('following-btn')) {
        me.removeClass('btn-danger');
        me.removeClass('following-btn');
        me.addClass('btn-primary');
        me.html(follow_text);

      } else {
        me.removeClass('btn-primary');
        me.addClass('btn-danger');
        me.addClass('following-btn');
        me.html(unfollow_text);

      }
      return false;
    });
  });

//# sourceMappingURL=libs.js.map