(function(){for(var l,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ca="undefined"!=typeof Reflect&&Reflect.construct||function(a,b,c){void 0===c&&(c=a);
c=ba(c.prototype||Object.prototype);return Function.prototype.apply.call(a,c,b)||c},da="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ea=["Reflect",
"construct"],fa=0;fa<ea.length-1;fa++){var ga=ea[fa];ga in da||(da[ga]={});da=da[ga]}var ha=ea[ea.length-1],ia=da[ha],ja;ja=ia||ca;ja!=ia&&null!=ja&&aa(da,ha,{configurable:!0,writable:!0,value:ja});var m=this;function la(a){return void 0!==a}
function p(a){return"string"==typeof a}
function ma(a){return"number"==typeof a}
function q(a){a=a.split(".");for(var b=m,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function na(){}
function oa(a){a.ea=void 0;a.A=function(){return a.ea?a.ea:a.ea=new a}}
function pa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function qa(a){var b=pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function ra(a){return"function"==pa(a)}
function sa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ta(a){return a[ua]||(a[ua]=++va)}
var ua="closure_uid_"+(1E9*Math.random()>>>0),va=0;function wa(a,b,c){return a.call.apply(a.bind,arguments)}
function xa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function r(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?r=wa:r=xa;return r.apply(null,arguments)}
function ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var za=Date.now||function(){return+new Date};
function t(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&la(b)?d[e]=b:d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}}
function v(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ub=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Aa=window,Ba=document,Ca=Aa.location;function Da(){}
var Ea=/\[native code\]/;function x(a,b,c){return a[b]=a[b]||c}
function Fa(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Ga(){var a;if((a=Object.create)&&Ea.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Ha=x(Aa,"gapi",{});var z;z=x(Aa,"___jsl",Ga());x(z,"I",0);x(z,"hel",10);function Ia(){var a=Ca.href;if(z.dpo)var b=z.h;else{b=z.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ja(a){var b=x(z,"PQ",[]);z.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ka(a){return x(x(z,"H",Ga()),a,Ga())}
;var La=x(z,"perf",Ga());x(La,"g",Ga());var Ma=x(La,"i",Ga());x(La,"r",[]);Ga();Ga();function Na(a,b,c){b&&0<b.length&&(b=Oa(b),c&&0<c.length&&(b+="___"+Oa(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=x(Ma,"_p",Ga()),x(b,c,Ga())[a]=(new Date).getTime(),b=La.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Oa(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var Pa=Ga(),Qa=[];function Ra(a){throw Error("Bad hint"+(a?": "+a:""));}
Qa.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?z[b]=x(z,b,[]).concat(c):x(z,b,c)}if(b=a.u)a=x(z,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Sa=/^(\/[a-zA-Z0-9_\-]+)+$/,Ta=[/\/amp\//,/\/amp$/,/^\/amp$/],Ua=/^[a-zA-Z0-9\-_\.,!]+$/,Va=/^gapi\.loaded_[0-9]+$/,Wa=/^[a-zA-Z0-9,._-]+$/;function Xa(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Pa[f],h=null;g?h=g(e,b,c,d):Ra("no hint processor for: "+f);h||Ra("failed to generate load url");b=h;c=b.match(Ya);(d=b.match(Za))&&1===d.length&&$a.test(b)&&c&&1===c.length||Ra("failed sanity: "+a);return h}
function ab(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=bb(a);Va.test(c)||Ra("invalid_callback");b=cb(b);d=d&&d.length?cb(d):null;return[encodeURIComponent(a.Cb).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.na?"/am="+e(a.na):"",a.Ha?"/rs="+e(a.Ha):"",a.Ra?"/t="+e(a.Ra):"","/cb=",e(c)].join("")}
function bb(a){"/"!==a.charAt(0)&&Ra("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Ra("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Sa.test(b)||Ra("invalid_prefix");c=0;for(d=Ta.length;c<d;++c)Ta[c].test(b)&&Ra("invalid_prefix");c=db(a,
"k",!0);d=db(a,"am");e=db(a,"rs");a=db(a,"t");return{Cb:b,version:c,na:d,Ha:e,Ra:a}}
function cb(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Wa.test(e)&&b.push(e)}return b.join(",")}
function db(a,b,c){a=a[b];!a&&c&&Ra("missing: "+b);if(a){if(Ua.test(a))return a;Ra("invalid: "+b)}return null}
var $a=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Za=/\/cb=/g,Ya=/\/\//g;function eb(){var a=Ia();if(!a)throw Error("Bad hint");return a}
Pa.m=function(a,b,c,d){(a=a[0])||Ra("missing_hint");return"https://apis.google.com"+ab(a,b,c,d)};
var fb=decodeURI("%73cript"),gb=/^[-+_0-9\/A-Za-z]+={0,2}$/;function hb(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function ib(){var a=z.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(gb)?a:z.nonce=null;var b=x(z,"us",[]);if(!b||!b.length)return z.nonce=null;for(var c=Ba.getElementsByTagName(fb),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(gb))return z.nonce=a}}return null}
function jb(a){if("loading"!=Ba.readyState)kb(a);else{var b=ib(),c="";null!==b&&(c=' nonce="'+b+'"');Ba.write("<"+fb+' src="'+encodeURI(a)+'"'+c+"></"+fb+">")}}
function kb(a){var b=Ba.createElement(fb);b.setAttribute("src",a);a=ib();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Ba.getElementsByTagName(fb)[0])?a.parentNode.insertBefore(b,a):(Ba.head||Ba.body||Ba.documentElement).appendChild(b)}
function lb(a,b){var c=b&&b._c;if(c)for(var d=0;d<Qa.length;d++){var e=Qa[d][0],f=Qa[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function mb(a,b,c){nb(function(){var c=b===Ia()?x(Ha,"_",Ga()):Ga();c=x(Ka(b),"_",c);a(c)},c)}
function ob(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);lb(a,c);var d=a?a.split(":"):[],e=c.h||eb(),f=x(z,"ah",Ga());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e,n=g.length&&g[g.length-1]||null,w=n;n&&n.hint==k||(w={hint:k,features:[]},g.push(w));w.features.push(h)}var y=g.length;if(1<y){var Q=c.callback;Q&&(c.callback=function(){0==--y&&Q()})}for(;d=g.shift();)pb(d.features,c,d.hint)}else pb(d||[],c,e)}
function pb(a,b,c){function d(a,b){if(y)return 0;Aa.clearTimeout(w);Q.push.apply(Q,u);var d=((Ha||{}).config||{}).update;d?d(f):f&&x(z,"cu",[]).push(f);if(b){Na("me0",a,G);try{mb(b,c,n)}finally{Na("me1",a,G)}}return 1}
a=Fa(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,n=void 0;"function"==typeof k&&(n=k);var w=null,y=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var k=x(Ka(c),"r",[]).sort(),Q=x(Ka(c),"L",[]).sort(),G=[].concat(k);0<g&&(w=Aa.setTimeout(function(){y=!0;h()},g));
var u=hb(a,Q);if(u.length){var u=hb(a,k),ka=x(z,"CP",[]),S=ka.length;ka[S]=function(a){function b(){var a=ka[S+1];a&&a()}
function c(b){ka[S]=null;d(u,a)&&Ja(function(){e&&e();b()})}
if(!a)return 0;Na("ml1",u,G);0<S&&ka[S-1]?ka[S]=function(){c(b)}:c(b)};
if(u.length){var mc="loaded_"+z.I++;Ha[mc]=function(a){ka[S](a);Ha[mc]=null};
a=Xa(c,u,"gapi."+mc,k);k.push.apply(k,u);Na("ml0",u,G);b.sync||Aa.___gapisync?jb(a):kb(a)}else ka[S](Da)}else d(u)&&e&&e()}
function nb(a,b){if(z.hee&&0<z.hel)try{return a()}catch(c){b&&b(c),z.hel--,ob("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Ha.load=function(a,b){return nb(function(){return ob(a,b)})};function qb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,qb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
v(qb,Error);qb.prototype.name="CustomError";var rb;var sb=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},tb=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)};
function ub(a){a=la(void 0)?a.toFixed(void 0):String(a);var b=a.indexOf(".");-1==b&&(b=a.length);return tb("0",Math.max(0,2-b))+a}
function vb(a,b){for(var c=0,d=sb(String(a)).split("."),e=sb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=wb(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||wb(0==h[2].length,0==k[2].length)||wb(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function wb(a,b){return a<b?-1:a>b?1:0}
function xb(a){return String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()})}
function yb(a){var b=p(void 0)?"undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"):"\\s";return a.replace(new RegExp("(^"+(b?"|["+b+"]+":"")+")([a-z])","g"),function(a,b,e){return b+e.toUpperCase()})}
;var zb=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},A=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ab=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},Bb=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=p(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));
return e},Cb=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function Db(a,b){a:{var c=a.length;for(var d=p(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:p(a)?a.charAt(c):a[c]}
function Eb(a,b){return 0<=zb(a,b)}
function Fb(a){return Array.prototype.concat.apply([],arguments)}
function Gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function Ib(a,b,c,d){return Array.prototype.splice.apply(a,Jb(arguments,1))}
function Jb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function Kb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if("array"==pa(d))for(var e=0;e<d.length;e+=8192)for(var f=Kb.apply(null,Jb(d,e,e+8192)),g=0;g<f.length;g++)b.push(f[g]);else b.push(d)}return b}
;function Lb(a,b,c){this.o=c;this.i=a;this.v=b;this.f=0;this.b=null}
Lb.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.i();return a};
function Mb(a,b){a.v(b);a.f<a.o&&(a.f++,b.next=a.b,a.b=b)}
;var Nb;a:{var Ob=m.navigator;if(Ob){var Pb=Ob.userAgent;if(Pb){Nb=Pb;break a}}Nb=""}function B(a){return-1!=Nb.indexOf(a)}
;function Qb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function Rb(a,b){var c={},d;for(d in a)c[d]=b.call(void 0,a[d],d,a);return c}
function Sb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function Tb(a){var b=Ub,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Vb(a){for(var b in a)return!1;return!0}
var Wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Wb.length;f++)c=Wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Yb(){return B("Safari")&&!(Zb()||B("Coast")||B("Opera")||B("Edge")||B("Silk")||B("Android"))}
function Zb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")}
;function $b(a){m.setTimeout(function(){throw a;},0)}
var ac;
function bc(){var a=m.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=r(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(la(c.next)){c=c.next;var a=c.pa;c.pa=null;a()}};
return function(a){d.next={pa:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){m.setTimeout(a,0)}}
;function cc(){this.f=this.b=null}
var ec=new Lb(function(){return new dc},function(a){a.reset()},100);
cc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function dc(){this.next=this.scope=this.b=null}
dc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
dc.prototype.reset=function(){this.next=this.scope=this.b=null};function fc(a,b){gc||hc();ic||(gc(),ic=!0);var c=jc,d=ec.get();d.set(a,b);c.f?c.f.next=d:c.b=d;c.f=d}
var gc;function hc(){if(-1!=String(m.Promise).indexOf("[native code]")){var a=m.Promise.resolve(void 0);gc=function(){a.then(kc)}}else gc=function(){var a=kc;
!ra(m.setImmediate)||m.Window&&m.Window.prototype&&!B("Edge")&&m.Window.prototype.setImmediate==m.setImmediate?(ac||(ac=bc()),ac(a)):m.setImmediate(a)}}
var ic=!1,jc=new cc;function kc(){for(var a;a=jc.remove();){try{a.b.call(a.scope)}catch(b){$b(b)}Mb(ec,a)}ic=!1}
;function lc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function nc(a){nc[" "](a);return a}
nc[" "]=na;function oc(a,b){var c=pc;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var qc=B("Opera"),C=B("Trident")||B("MSIE"),rc=B("Edge"),sc=rc||C,tc=B("Gecko")&&!(-1!=Nb.toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),uc=-1!=Nb.toLowerCase().indexOf("webkit")&&!B("Edge"),vc=B("Windows");function wc(){var a=m.document;return a?a.documentMode:void 0}
var xc;a:{var yc="",zc=function(){var a=Nb;if(tc)return/rv\:([^\);]+)(\)|;)/.exec(a);if(rc)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zc&&(yc=zc?zc[1]:"");if(C){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,pc={};function Cc(a){return oc(a,function(){return 0<=vb(Bc,a)})}
var Dc;var Ec=m.document;Dc=Ec&&C?wc()||("CSS1Compat"==Ec.compatMode?parseInt(Bc,10):5):void 0;var Fc=B("Firefox"),Gc=lc()||B("iPod"),Hc=B("iPad"),Ic=B("Android")&&!(Zb()||B("Firefox")||B("Opera")||B("Silk")),Jc=Zb(),Kc=Yb()&&!(lc()||B("iPad")||B("iPod"));function Lc(a,b,c){ma(a)?(this.date=Mc(a,b||0,c||1),Nc(this,c||1)):sa(a)?(this.date=Mc(a.getFullYear(),a.getMonth(),a.getDate()),Nc(this,a.getDate())):(this.date=new Date(za()),a=this.date.getDate(),this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Nc(this,a))}
function Mc(a,b,c){b=new Date(a,b,c);0<=a&&100>a&&b.setFullYear(b.getFullYear()-1900);return b}
l=Lc.prototype;l.getFullYear=function(){return this.date.getFullYear()};
l.getMonth=function(){return this.date.getMonth()};
l.getDate=function(){return this.date.getDate()};
l.getTime=function(){return this.date.getTime()};
function Oc(a){a=a.date.getTimezoneOffset();if(0==a)a="Z";else{var b=Math.abs(a)/60,c=Math.floor(b),b=60*(b-c);a=(0<a?"-":"+")+ub(c)+":"+ub(b)}return a}
l.set=function(a){this.date=new Date(a.getFullYear(),a.getMonth(),a.getDate())};
l.Y=function(a,b){return[this.getFullYear(),ub(this.getMonth()+1),ub(this.getDate())].join(a?"-":"")+(b?Oc(this):"")};
l.equals=function(a){return!(!a||this.getFullYear()!=a.getFullYear()||this.getMonth()!=a.getMonth()||this.getDate()!=a.getDate())};
l.toString=function(){return this.Y()};
function Nc(a,b){a.getDate()!=b&&a.date.setUTCHours(a.date.getUTCHours()+(a.getDate()<b?1:-1))}
l.valueOf=function(){return this.date.valueOf()};
function Pc(a,b,c,d,e,f,g){this.date=ma(a)?new Date(a,b||0,c||1,d||0,e||0,f||0,g||0):new Date(a&&a.getTime?a.getTime():za())}
v(Pc,Lc);Pc.prototype.Y=function(a,b){var c=Lc.prototype.Y.call(this,a);return a?c+" "+ub(this.date.getHours())+":"+ub(this.date.getMinutes())+":"+ub(this.date.getSeconds())+(b?Oc(this):""):c+"T"+ub(this.date.getHours())+ub(this.date.getMinutes())+ub(this.date.getSeconds())+(b?Oc(this):"")};
Pc.prototype.equals=function(a){return this.getTime()==a.getTime()};
Pc.prototype.toString=function(){return this.Y()};function Qc(){this.i=this.i;this.o=this.o}
Qc.prototype.i=!1;Qc.prototype.W=function(){return this.i};
Qc.prototype.dispose=function(){this.i||(this.i=!0,this.ba())};
Qc.prototype.ba=function(){if(this.o)for(;this.o.length;)this.o.shift()()};
function Rc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;var Sc=!tc&&!C||C&&9<=Number(Dc)||tc&&Cc("1.9.1"),Tc=C&&!Cc("9");function Uc(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}
function D(a,b){return a.classList?a.classList.contains(b):Eb(Uc(a),b)}
function E(a,b){a.classList?a.classList.add(b):D(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Vc(a,b){if(a.classList)A(b,function(b){E(a,b)});
else{var c={};A(Uc(a),function(a){c[a]=!0});
A(b,function(a){c[a]=!0});
a.className="";for(var d in c)a.className+=0<a.className.length?" "+d:d}}
function F(a,b){a.classList?a.classList.remove(b):D(a,b)&&(a.className=Ab(Uc(a),function(a){return a!=b}).join(" "))}
function Wc(a,b){a.classList?A(b,function(b){F(a,b)}):a.className=Ab(Uc(a),function(a){return!Eb(b,a)}).join(" ")}
function Xc(a,b,c){c?E(a,b):F(a,b)}
function Yc(a,b,c){D(a,b)&&(F(a,b),E(a,c))}
function Zc(a,b){var c=!D(a,b);Xc(a,b,c)}
;var $c=!C&&!Yb();function ad(a,b){return $c&&a.dataset?b in a.dataset?a.dataset[b]:null:a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function bd(){this.b="";this.f=cd}
bd.prototype.da=!0;bd.prototype.ca=function(){return this.b};
var dd=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,cd={};function ed(a){var b=new bd;b.b=a;return b}
ed("about:blank");function fd(){this.b="";this.f=gd}
fd.prototype.da=!0;fd.prototype.ca=function(){return this.b};
function hd(a){if(a instanceof fd&&a.constructor===fd&&a.f===gd)return a.b;pa(a);return"type_error:SafeHtml"}
var gd={};function id(a){var b=new fd;b.b=a;return b}
id("<!DOCTYPE html>");id("");id("<br>");function H(a,b){this.j=la(a)?a:0;this.l=la(b)?b:0}
H.prototype.equals=function(a){return a instanceof H&&(this==a?!0:this&&a?this.j==a.j&&this.l==a.l:!1)};
function jd(a,b){return new H(a.j-b.j,a.l-b.l)}
H.prototype.ceil=function(){this.j=Math.ceil(this.j);this.l=Math.ceil(this.l);return this};
H.prototype.floor=function(){this.j=Math.floor(this.j);this.l=Math.floor(this.l);return this};
H.prototype.round=function(){this.j=Math.round(this.j);this.l=Math.round(this.l);return this};function kd(a,b){this.width=a;this.height=b}
l=kd.prototype;l.ib=function(){return this.width*this.height};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!this.ib()};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ld(a){return a?new md(nd(a)):rb||(rb=new md)}
function I(a){return p(a)?document.getElementById(a):a}
function od(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):pd(document,"*",a,b)}
function J(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else var c=document,d=b||c,c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(""+(a?"."+a:"")):pd(c,"*",a,b)[0]||null;return c||null}
function pd(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){d=a.getElementsByClassName(c);if(e){a={};for(var f=b=0,g;g=d[f];f++)e==g.nodeName&&(a[b++]=g);a.length=b;return a}return d}d=a.getElementsByTagName(e||"*");if(c){a={};for(f=b=0;g=d[f];f++)e=g.className,"function"==typeof e.split&&Eb(e.split(/\s+/),c)&&(a[b++]=g);a.length=b;return a}return d}
function qd(a,b){Qb(b,function(b,d){b&&b.da&&(b=b.ca());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:rd.hasOwnProperty(d)?a.setAttribute(rd[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var rd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function sd(a){a=a.document;a=td(a)?a.documentElement:a.body;return new kd(a.clientWidth,a.clientHeight)}
function ud(a){var b=vd(a);a=wd(a);return C&&Cc("10")&&a.pageYOffset!=b.scrollTop?new H(b.scrollLeft,b.scrollTop):new H(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function vd(a){return a.scrollingElement?a.scrollingElement:!uc&&td(a)?a.documentElement:a.body||a.documentElement}
function wd(a){return a.parentWindow||a.defaultView}
function td(a){return"CSS1Compat"==a.compatMode}
function xd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function yd(a){return Sc&&void 0!=a.children?a.children:Ab(a.childNodes,function(a){return 1==a.nodeType})}
function zd(a){return sa(a)&&1==a.nodeType}
function Ad(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function nd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Bd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(nd(a).createTextNode(String(b)))}}
function Cd(a,b){var c=[];return Dd(a,b,c,!0)?c[0]:void 0}
function Dd(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Dd(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Ed={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Fd={IMG:" ",BR:"\n"};function Gd(a){var b;if((b="A"==a.tagName||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Hd(a)||Id(a)):Hd(a)&&Id(a))&&C){var c;!ra(a.getBoundingClientRect)||C&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Hd(a){return C&&!Cc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Id(a){a=a.tabIndex;return ma(a)&&0<=a&&32768>a}
function Jd(a){if(Tc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Kd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Tc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Kd(a,b,c){if(!(a.nodeName in Ed))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Fd)b.push(Fd[a.nodeName]);else for(a=a.firstChild;a;)Kd(a,b,c),a=a.nextSibling}
function Ld(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Md(a,function(a){return(!e||a.nodeName==e)&&(!c||p(a.className)&&Eb(a.className.split(/\s+/),c))},!0,d)}
function K(a,b){return Ld(a,null,b,void 0)}
function Md(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function md(a){this.b=a||m.document||document}
md.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(String(a))};
md.prototype.createElement=function(a){return this.b.createElement(String(a))};
md.prototype.appendChild=function(a,b){a.appendChild(b)};
md.prototype.isElement=zd;var Nd="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""};function Od(){}
Od.prototype.next=function(){throw Nd;};
Od.prototype.T=function(){return this};
function Pd(a){if(a instanceof Od)return a;if("function"==typeof a.T)return a.T(!1);if(qa(a)){var b=0,c=new Od;c.next=function(){for(;;){if(b>=a.length)throw Nd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Qd(a,b){if(qa(a))try{A(a,b,void 0)}catch(c){if(c!==Nd)throw c;}else{a=Pd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Nd)throw c;}}}
function Rd(a){if(qa(a))return Gb(a);a=Pd(a);var b=[];Qd(a,function(a){b.push(a)});
return b}
;function Sd(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
Sd.prototype.getHeight=function(){return this.bottom-this.top};
Sd.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
Sd.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
Sd.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Td(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
Td.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
Td.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
Td.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ud(a,b,c){if(p(b))(b=Vd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=Vd(c,d);f&&(c.style[f]=e)}}
var Wd={};function Vd(a,b){var c=Wd[b];if(!c){var d=xb(b),c=d;void 0===a.style[d]&&(d=(uc?"Webkit":tc?"Moz":C?"ms":qc?"O":null)+yb(d),void 0!==a.style[d]&&(c=d));Wd[b]=c}return c}
function Xd(a,b){var c=nd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Yd(a,b){return Xd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Zd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}C&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function $d(a){if(C&&!(8<=Number(Dc)))return a.offsetParent;var b=nd(a),c=Yd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Yd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function ae(a){for(var b=new Sd(0,Infinity,Infinity,0),c=ld(a),d=c.b.body,e=c.b.documentElement,f=vd(c.b);a=$d(a);)if(!(C&&0==a.clientWidth||uc&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Yd(a,"overflow")){var g=be(a),h=new H(a.clientLeft,a.clientTop);g.j+=h.j;g.l+=h.l;b.top=Math.max(b.top,g.l);b.right=Math.min(b.right,g.j+a.clientWidth);b.bottom=Math.min(b.bottom,g.l+a.clientHeight);b.left=Math.max(b.left,g.j)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
sd(wd(c.b)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function be(a){var b=nd(a),c=new H(0,0);var d=b?nd(b):document;d=!C||9<=Number(Dc)||td(ld(d).b)?d.documentElement:d.body;if(a==d)return c;a=Zd(a);b=ud(ld(b).b);c.j=a.left+b.j;c.l=a.top+b.l;return c}
function ce(a){a=Zd(a);return new H(a.left,a.top)}
function de(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function ee(a){var b=fe;if("none"!=Yd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function fe(a){var b=a.offsetWidth,c=a.offsetHeight,d=uc&&!b&&!c;return la(b)&&!d||!a.getBoundingClientRect?new kd(b,c):(a=Zd(a),new kd(a.right-a.left,a.bottom-a.top))}
function ge(a){var b=be(a);a=ee(a);return new Td(b.j,b.l,a.width,a.height)}
function he(a){return"rtl"==Yd(a,"direction")}
function ie(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function je(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?ie(a,c):0}
var ke={thin:2,medium:4,thick:6};function le(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ke?ke[c]:ie(a,c)}
;function me(a){return(a=a.exec(Nb))?a[1]:""}
var ne=function(){if(Fc)return me(/Firefox\/([0-9.]+)/);if(C||rc||qc)return Bc;if(Jc)return lc()||B("iPad")||B("iPod")?me(/CriOS\/([0-9.]+)/):me(/Chrome\/([0-9.]+)/);if(Kc&&!(lc()||B("iPad")||B("iPod")))return me(/Version\/([0-9.]+)/);if(Gc||Hc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Nb);if(a)return a[1]+"."+a[2]}else if(Ic)return(a=me(/Android\s+([0-9.]+)/))?a:me(/Version\/([0-9.]+)/);return""}();function oe(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=Yd(h,"position")){var n=be(h);if(!k){var k=he(h),w=Kc&&0<=vb(ne,10),k=k&&(tc||w)?-h.scrollLeft:!k||sc&&Cc("8")||"visible"==Yd(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;n=jd(n,new H(k,h.scrollTop))}}}h=n||new H;n=ge(a);if(k=ae(a)){var y=new Td(k.left,k.top,k.right-k.left,k.bottom-k.top),k=Math.max(n.left,y.left),w=Math.min(n.left+n.width,y.left+y.width);if(k<=
w){var Q=Math.max(n.top,y.top),y=Math.min(n.top+n.height,y.top+y.height);Q<=y&&(n.left=k,n.top=Q,n.width=w-k,n.height=y-Q)}}k=ld(a);Q=ld(c);if(k.b!=Q.b){var w=k.b.body;var Q=wd(Q.b),y=new H(0,0);var G=(G=nd(w))?wd(G):window;b:{try{nc(G.parent);var u=!0;break b}catch(mc){}u=!1}if(u){u=w;do{var ka=G==Q?be(u):ce(u);y.j+=ka.j;y.l+=ka.l}while(G&&G!=Q&&G!=G.parent&&(u=G.frameElement)&&(G=G.parent))}u=jd(y,be(w));!C||9<=Number(Dc)||td(k.b)||(u=jd(u,ud(k.b)));n.left+=u.j;n.top+=u.l}a=pe(a,b);b=n.left;a&4?
b+=n.width:a&2&&(b+=n.width/2);b=new H(b,n.top+(a&1?n.height:0));b=jd(b,h);e&&(b.j+=(a&4?-1:1)*e.j,b.l+=(a&1?-1:1)*e.l);var S;g&&(S=ae(c))&&(S.top-=h.l,S.right-=h.j,S.bottom-=h.l,S.left-=h.j);return qe(b,c,d,f,S,g,void 0)}
function qe(a,b,c,d,e,f,g){a=new H(a.j,a.l);var h=pe(b,c);c=ee(b);g=g?new kd(g.width,g.height):new kd(c.width,c.height);a=new H(a.j,a.l);g=new kd(g.width,g.height);var k=0;if(d||0!=h)h&4?a.j-=g.width+(d?d.right:0):h&2?a.j-=g.width/2:d&&(a.j+=d.left),h&1?a.l-=g.height+(d?d.bottom:0):d&&(a.l+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.j<e.left||d.j>=e.right)&&(f&=-2);132==(f&132)&&(d.l<e.top||d.l>=e.bottom)&&(f&=-5);d.j<e.left&&f&1&&(d.j=e.left,k|=1);if(f&16){var n=d.j;d.j<e.left&&(d.j=e.left,k|=
4);d.j+h.width>e.right&&(h.width=Math.min(e.right-d.j,n+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.j+h.width>e.right&&f&1&&(d.j=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.j<e.left?16:0)|(d.j+h.width>e.right?32:0));d.l<e.top&&f&4&&(d.l=e.top,k|=2);f&32&&(n=d.l,d.l<e.top&&(d.l=e.top,k|=8),d.l+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.l,n+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.l+h.height>e.bottom&&f&4&&(d.l=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.l<
e.top?64:0)|(d.l+h.height>e.bottom?128:0));e=k}else e=256;k=e}f=new Td(0,0,0,0);f.left=a.j;f.top=a.l;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;g=new H(f.left,f.top);g instanceof H?(a=g.j,g=g.l):(a=g,g=void 0);b.style.left=de(a,!1);b.style.top=de(g,!1);g=new kd(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=td(ld(nd(b)).b),!C||Cc("10")||g&&Cc("8")?(b=b.style,tc?b.MozBoxSizing="border-box":uc?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,
0)+"px",b.height=Math.max(c.height,0)+"px"):(a=b.style,g?(C?(h=je(b,"paddingLeft"),d=je(b,"paddingRight"),f=je(b,"paddingTop"),g=je(b,"paddingBottom"),g=new Sd(f,d,g,h)):(h=Xd(b,"paddingLeft"),d=Xd(b,"paddingRight"),f=Xd(b,"paddingTop"),g=Xd(b,"paddingBottom"),g=new Sd(parseFloat(f),parseFloat(d),parseFloat(g),parseFloat(h))),!C||9<=Number(Dc)?(h=Xd(b,"borderLeftWidth"),d=Xd(b,"borderRightWidth"),f=Xd(b,"borderTopWidth"),b=Xd(b,"borderBottomWidth"),b=new Sd(parseFloat(f),parseFloat(d),parseFloat(b),
parseFloat(h))):(h=le(b,"borderLeft"),d=le(b,"borderRight"),f=le(b,"borderTop"),b=le(b,"borderBottom"),b=new Sd(f,d,b,h)),a.pixelWidth=c.width-b.left-g.left-g.right-b.right,a.pixelHeight=c.height-b.top-g.top-g.bottom-b.bottom):(a.pixelWidth=c.width,a.pixelHeight=c.height)));return e}
function pe(a,b){return(b&8&&he(a)?b^4:b)&-9}
;function re(a,b){this.b=0;this.B=void 0;this.o=this.f=this.i=null;this.v=this.w=!1;if(a!=na)try{var c=this;a.call(b,function(a){se(c,2,a)},function(a){se(c,3,a)})}catch(d){se(this,3,d)}}
function te(){this.next=this.context=this.f=this.i=this.b=null;this.o=!1}
te.prototype.reset=function(){this.context=this.f=this.i=this.b=null;this.o=!1};
var ue=new Lb(function(){return new te},function(a){a.reset()},100);
function ve(a,b,c){var d=ue.get();d.i=a;d.f=b;d.context=c;return d}
re.prototype.then=function(a,b,c){return we(this,ra(a)?a:null,ra(b)?b:null,c)};
re.prototype.then=re.prototype.then;re.prototype.$goog_Thenable=!0;re.prototype.cancel=function(a){0==this.b&&fc(function(){var b=new xe(a);ye(this,b)},this)};
function ye(a,b){if(0==a.b)if(a.i){var c=a.i;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.o||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?ye(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):ze(c),Ae(c,e,3,b)))}a.i=null}else se(a,3,b)}
function Be(a,b){a.f||2!=a.b&&3!=a.b||Ce(a);a.o?a.o.next=b:a.f=b;a.o=b}
function we(a,b,c,d){var e=ve(null,null,null);e.b=new re(function(a,g){e.i=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.f=c?function(b){try{var e=c.call(d,b);!la(e)&&b instanceof xe?g(b):a(e)}catch(n){g(n)}}:g});
e.b.i=a;Be(a,e);return e.b}
re.prototype.J=function(a){this.b=0;se(this,2,a)};
re.prototype.R=function(a){this.b=0;se(this,3,a)};
function se(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.J,f=a.R;if(d instanceof re){Be(d,ve(e||na,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(n){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(sa(d))try{var k=d.then;if(ra(k)){De(d,k,e,f,a);g=!0;break a}}catch(n){f.call(a,n);g=!0;break a}g=!1}}}g||(a.B=c,a.b=b,a.i=null,Ce(a),3!=b||c instanceof xe||Ee(a,c))}}
function De(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Ce(a){a.w||(a.w=!0,fc(a.F,a))}
function ze(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.o=null);return b}
re.prototype.F=function(){for(var a;a=ze(this);)Ae(this,a,this.b,this.B);this.w=!1};
function Ae(a,b,c,d){if(3==c&&b.f&&!b.o)for(;a&&a.v;a=a.i)a.v=!1;if(b.b)b.b.i=null,Fe(b,c,d);else try{b.o?b.i.call(b.context):Fe(b,c,d)}catch(e){Ge.call(null,e)}Mb(ue,b)}
function Fe(a,b,c){2==b?a.i.call(a.context,c):a.f&&a.f.call(a.context,c)}
function Ee(a,b){a.v=!0;fc(function(){a.v&&Ge.call(null,b)})}
var Ge=$b;function xe(a){qb.call(this,a)}
v(xe,qb);xe.prototype.name="cancel";function L(a){Qc.call(this);this.B=1;this.v=[];this.w=0;this.b=[];this.f={};this.F=!!a}
v(L,Qc);l=L.prototype;l.subscribe=function(a,b,c){var d=this.f[a];d||(d=this.f[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
function He(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(){c||(c=!0,this.P(d),b.apply(void 0,arguments))},a)}
function Ie(a,b,c){if(b=a.f[b]){var d=a.b;(b=Db(b,function(a){return d[a+1]==c&&void 0==d[a+2]}))&&a.P(b)}}
l.P=function(a){var b=this.b[a];if(b){var c=this.f[b];if(0!=this.w)this.v.push(a),this.b[a+1]=na;else{if(c){var d=zb(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
l.H=function(a){var b=this.f[a];if(b){for(var c=Array(arguments.length-1),d=1,e=arguments.length;d<e;d++)c[d-1]=arguments[d];if(this.F)for(d=0;d<b.length;d++){var f=b[d];Je(this.b[f+1],this.b[f+2],c)}else{this.w++;try{for(d=0,e=b.length;d<e;d++)f=b[d],this.b[f+1].apply(this.b[f+2],c)}finally{if(this.w--,0<this.v.length&&0==this.w)for(;f=this.v.pop();)this.P(f)}}return 0!=d}return!1};
function Je(a,b,c){fc(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.f[a];b&&(A(b,this.P,this),delete this.f[a])}else this.b.length=0,this.f={}};
function Ke(a,b){if(b){var c=a.f[b];return c?c.length:0}var c=0,d;for(d in a.f)c+=Ke(a,d);return c}
l.ba=function(){L.D.ba.call(this);this.clear();this.v.length=0};function Le(){}
;function Me(){}
v(Me,Le);Me.prototype.clear=function(){var a=Rd(this.T(!0)),b=this;A(a,function(a){b.remove(a)})};function Ne(a){this.b=a}
v(Ne,Me);l=Ne.prototype;l.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.b.getItem(a);if(!p(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.b.removeItem(a)};
l.T=function(a){var b=0,c=this.b,d=new Od;d.next=function(){if(b>=c.length)throw Nd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!p(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
l.clear=function(){this.b.clear()};
l.key=function(a){return this.b.key(a)};function Oe(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
v(Oe,Ne);function Pe(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
v(Pe,Ne);var Qe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Re(a){return a?decodeURI(a):a}
function Se(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function Te(a,b,c){if("array"==pa(b))for(var d=0;d<b.length;d++)Te(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ue(a,b){for(var c=[],d=b||0;d<a.length;d+=2)Te(a[d],a[d+1],c);return c.join("&")}
function Ve(a){var b=[],c;for(c in a)Te(c,a[c],b);return b.join("&")}
function We(a,b){var c=2==arguments.length?Ue(arguments[1],0):Ue(arguments,1);return Se(a,c)}
function Xe(a,b){var c=Ve(b);return Se(a,c)}
;var Ye=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",Ye);function Ze(a){var b=arguments;if(1<b.length)Ye[b[0]]=b[1];else{var b=b[0],c;for(c in b)Ye[c]=b[c]}}
function M(a,b){return a in Ye?Ye[a]:b}
;function $e(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=M("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Ze("ERRORS",b))}
function af(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$e(b)}}:a}
;function N(a,b){ra(a)&&(a=af(a));return window.setTimeout(a,b)}
;var bf=q("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.P;L.prototype.publish=L.prototype.H;L.prototype.clear=L.prototype.clear;t("ytPubsubPubsubInstance",bf);var cf=q("ytPubsubPubsubSubscribedKeys")||{};t("ytPubsubPubsubSubscribedKeys",cf);var df=q("ytPubsubPubsubTopicToKeys")||{};t("ytPubsubPubsubTopicToKeys",df);var ef=q("ytPubsubPubsubIsSynchronous")||{};t("ytPubsubPubsubIsSynchronous",ef);
function ff(a,b,c){var d=gf();if(d){var e=d.subscribe(a,function(){var d=arguments;var g=function(){cf[e]&&b.apply(c||window,d)};
try{ef[a]?g():N(g,0)}catch(h){$e(h)}},c);
cf[e]=!0;df[a]||(df[a]=[]);df[a].push(e);return e}return 0}
function gf(){return q("ytPubsubPubsubInstance")}
function O(a,b){var c=gf();return c?c.publish.apply(c,arguments):!1}
function hf(a,b){ef[a]=!0;var c=gf();c&&c.publish.apply(c,arguments);ef[a]=!1}
function jf(a){var b=gf();b&&(ma(a)?a=[a]:p(a)&&(a=[parseInt(a,10)]),A(a,function(a){b.unsubscribeByKey(a);delete cf[a]}))}
;function kf(a,b){return a?a.dataset?a.dataset[lf(b)]:a.getAttribute("data-"+b):null}
var mf={};function lf(a){return mf[a]||(mf[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
function nf(a,b){a&&(a.dataset?delete a.dataset[lf(b)]:a.removeAttribute("data-"+b))}
function of(a,b,c){a&&(a.dataset?a.dataset[lf(b)]=String(c):a.setAttribute("data-"+b,c))}
;function P(a,b){this.version=a;this.args=b}
function pf(a,b){if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!a.Ma){var c=new a;a.Ma=c.version}var d=a.Ma}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{return Reflect.construct(a,Gb(b.args))}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
P.prototype.Eb=function(){return{version:this.version,args:this.args}};function R(a,b){this.topic=a;this.U=b}
R.prototype.toString=function(){return this.topic};function qf(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():N(a,b||0)}
;var rf=q("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.P;L.prototype.publish=L.prototype.H;L.prototype.clear=L.prototype.clear;t("ytPubsub2Pubsub2Instance",rf);var sf=q("ytPubsub2Pubsub2SubscribedKeys")||{};t("ytPubsub2Pubsub2SubscribedKeys",sf);var tf=q("ytPubsub2Pubsub2TopicToKeys")||{};t("ytPubsub2Pubsub2TopicToKeys",tf);var uf=q("ytPubsub2Pubsub2IsAsync")||{};t("ytPubsub2Pubsub2IsAsync",uf);
t("ytPubsub2Pubsub2SkipSubKey",null);function T(a,b){var c=vf();return c?c.publish.call(c,a.toString(),a,b):!1}
function U(a,b,c){var d=vf();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){var f=q("ytPubsub2Pubsub2SkipSubKey");f&&f==e||(f=function(){if(sf[e])try{if(g&&a instanceof R&&a!=d)try{g=pf(a.U,g)}catch(k){throw k.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){$e(k)}},uf[a.toString()]?q("yt.scheduler.instance")?qf(f):N(f,0):f())});
sf[e]=!0;tf[a.toString()]||(tf[a.toString()]=[]);tf[a.toString()].push(e);return e}
function vf(){return q("ytPubsub2Pubsub2Instance")}
function wf(a,b,c){window.ytPubsub2Pubsub2SkipSubKey=a;T.call(null,b,c);window.ytPubsub2Pubsub2SkipSubKey=null}
function xf(a){var b=vf();b&&(ma(a)&&(a=[a]),A(a,function(a){b.unsubscribeByKey(a);delete sf[a]}))}
;var yf=0;function zf(a,b){var c=pd(document,a,null,b);return c.length?c[0]:null}
var Af=q("ytDomDomGetNextId")||function(){return++yf};
t("ytDomDomGetNextId",Af);function Bf(){var a=document,b;Cb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Cf(a){var b=a.__yt_uid_key;b||(b=Af(),a.__yt_uid_key=b);return b}
function Df(a,b){a=I(a);b=I(b);return!!Md(a,function(a){return a===b},!0,void 0)}
function Ef(){Xc(document.body,"hide-players",!1);A(od("preserve-players"),function(a){F(a,"preserve-players")})}
;var Ff={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Gf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Ff||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:
"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
Gf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Gf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Gf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Ub=q("ytEventsEventsListeners")||{};t("ytEventsEventsListeners",Ub);var Hf=q("ytEventsEventsCounter")||{count:0};t("ytEventsEventsCounter",Hf);function If(a,b,c,d){d=void 0===d?!1:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Tb(function(e){return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function V(a,b,c,d){d=void 0===d?!1:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=If(a,b,c,d);if(e)return e;var e=++Hf.count+"",f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Gf(d);if(!Md(d.relatedTarget,function(b){return b==a},!0))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Gf(b);
b.currentTarget=a;return c.call(a,b)};
g=af(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),a.addEventListener(b,g,d)):a.attachEvent("on"+b,g);Ub[e]=[a,b,c,g,d];return e}
function Jf(a,b,c){var d=a||document;return V(d,"click",function(a){var e=Md(a.target,function(a){return a===d||c(a)},!0);
e&&e!==d&&!e.disabled&&(a.currentTarget=e,b.call(e,a))})}
function Kf(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
function Lf(a,b,c){return Jf(a,b,function(a){return D(a,c)})}
function Mf(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),A(a,function(a){if(a in Ub){var b=Ub[a],d=b[0],e=b[1],f=b[3],b=b[4];d.removeEventListener?d.removeEventListener(e,f,b):d.detachEvent&&d.detachEvent("on"+e,f);delete Ub[a]}}))}
;var Nf={},Of="ontouchstart"in document;function Pf(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Md(c,function(a){return D(a,b)},!0,d)}
function Qf(a){var b,c="mouseover"==a.type&&"mouseenter"in Nf||"mouseout"==a.type&&"mouseleave"in Nf,d=a.type in Nf||c;if("HTML"!=a.target.tagName&&d){if(c){var c="mouseover"==a.type?"mouseenter":"mouseleave",d=Nf[c],e;for(e in d.f)(b=Pf(c,e,a.target))&&!Md(a.relatedTarget,function(a){return a==b},!0)&&d.H(e,b,c,a)}if(c=Nf[a.type])for(e in c.f)(b=Pf(a.type,e,a.target))&&c.H(e,b,a.type,a)}}
V(document,"blur",Qf,!0);V(document,"change",Qf,!0);V(document,"click",Qf);V(document,"focus",Qf,!0);V(document,"mouseover",Qf);V(document,"mouseout",Qf);V(document,"mousedown",Qf);V(document,"keydown",Qf);V(document,"keyup",Qf);V(document,"keypress",Qf);V(document,"cut",Qf);V(document,"paste",Qf);Of&&(V(document,"touchstart",Qf),V(document,"touchend",Qf),V(document,"touchcancel",Qf));function Rf(a){this.v=a;this.B={};this.J=[];this.F=[]}
l=Rf.prototype;l.C=function(a){return K(a,X(this))};
function X(a,b){return"yt-uix"+(a.v?"-"+a.v:"")+(b?"-"+b:"")}
l.unregister=function(){jf(this.J);this.J.length=0;xf(this.F);this.F.length=0};
l.init=na;l.dispose=na;function Sf(a,b,c){a.J.push(ff(b,c,a))}
function Tf(a,b,c){a.F.push(U(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=r(c,a);b in Nf||(Nf[b]=new L);Nf[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in Nf){var e=Nf[b];Ie(e,X(a,d),a.B[c]);0>=Ke(e)&&(e.dispose(),delete Nf[b])}delete a.B[c]}
l.N=function(a,b){var c=this.g(a,b);if(c&&(c=q(c))){var d=Jb(arguments,2);Ib(d,0,0,a);c.apply(null,d)}};
l.g=function(a,b){return kf(a,b)};
function Uf(a,b){of(a,"tooltip-text",b)}
;var Vf=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};t("yt.uix.widgets_",Vf);function Wf(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==pa(b[f])?Hb(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function Xf(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=Wf(d[1]||""),e;for(e in b)d[e]=b[e];return Xe(a,d)+c}
;function Yf(a){a=void 0===a?{}:a;ra(a)&&(a={callback:a});if(a.gapiHintOverride||M("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Wf(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&Xb(a,{_c:{jsl:{h:b}}})}ob("gapi.iframes:gapi.iframes.style.common",a)}
;function Zf(){return q("gapi.iframes.getContext")()}
function $f(){return Zf().getParentIframe()}
function ag(a,b){var c=c||Zf();c.addOnConnectHandler("yt",a,void 0,b)}
function bg(a){var b=Zf(),b=b||Zf();b.connectIframes(a)}
;za();var cg=la(XMLHttpRequest)?function(){return new XMLHttpRequest}:la(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function dg(){if(!cg)return null;var a=cg();return"open"in a?a:null}
;var eg={"X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},fg=!1;
function gg(a,b){b=void 0===b?{}:b;var c=void 0;c=window.location.href;var d=a.match(Qe)[1]||null,e=Re(a.match(Qe)[3]||null);d&&e?(d=c,c=a.match(Qe),d=d.match(Qe),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Re(c.match(Qe)[3]||null)==e&&(Number(c.match(Qe)[4]||null)||null)==(Number(a.match(Qe)[4]||null)||null):!0;for(var f in eg){if((e=d=M(eg[f]))&&!(e=c)){var g=a,e=f,h=M("CORS_HEADER_WHITELIST")||{};e=(g=Re(g.match(Qe)[3]||null))?(h=h[g])?Eb(h,e):!1:!0}e&&(b[f]=d)}return b}
function hg(a,b){var c=M("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Wb&&(!Re(a.match(Qe)[3]||null)||b.withCredentials||Re(a.match(Qe)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.L&&b.L[c])}
function ig(a,b){var c=b.format||"JSON";b.Xb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=M("XSRF_FIELD_NAME",void 0),e=M("XSRF_TOKEN",void 0),f=b.La;f&&(f[d]&&delete f[d],a=Xf(a,f||{}));var f=b.postBody||"",g=b.L;hg(a,b)&&(g||(g={}),g[d]=e);g&&p(f)&&(d=Wf(f),Xb(d,g),f=b.Db&&"JSON"==b.Db?JSON.stringify(d):Ve(d));d=f||g&&!Vb(g);!fg&&d&&"POST"!=b.method&&(fg=!0,$e(Error("AJAX request with postData should use POST")));
var h=!1,k,n=jg(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var d=!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=kg(c,a,b.Vb);if(d)a:if(204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||m;d?b.O&&b.O.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.fa&&b.fa.call(f,a,e)}},
b.method,f,b.headers,b.responseType,b.withCredentials);
b.Ab&&0<b.timeout&&(k=N(function(){h||(h=!0,n.abort(),window.clearTimeout(k),b.Ab.call(b.context||m,n))},b.timeout))}
function kg(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?lg(b):null)d={},A(b.getElementsByTagName("*"),function(a){d[a.tagName]=mg(a)})}c&&ng(d);
return d}
function ng(a){if(sa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=id(a[b]);a[c]=d}else ng(a[b])}}
function lg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function mg(a){var b="";A(a.childNodes,function(a){b+=a.nodeValue});
return b}
function jg(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&af(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=dg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c;if(e=gg(a,e))for(var n in e)k.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
;var og={},pg=0;function qg(a){var b=new Image,c=""+pg++;og[c]=b;b.onload=b.onerror=function(){delete og[c]};
b.src=a}
;function rg(a){P.call(this,1,arguments);this.b=a}
v(rg,P);function sg(a){P.call(this,1,arguments);this.b=a}
v(sg,P);function tg(a,b,c){P.call(this,3,arguments);this.i=a;this.f=b;this.b=null!=c?!!c:null}
v(tg,P);function ug(a,b,c,d,e){P.call(this,2,arguments);this.f=a;this.b=b;this.o=c||null;this.i=d||null;this.source=e||null}
v(ug,P);function vg(a,b,c){P.call(this,1,arguments);this.b=a;this.f=b}
v(vg,P);function wg(a,b,c,d,e,f,g){P.call(this,1,arguments);this.f=a;this.v=b;this.b=c;this.w=d||null;this.o=e||null;this.i=f||null;this.source=g||null}
v(wg,P);
var xg=new R("subscription-batch-subscribe",rg),yg=new R("subscription-batch-unsubscribe",rg),zg=new R("subscription-subscribe",ug),Ag=new R("subscription-subscribe-loading",sg),Bg=new R("subscription-subscribe-loaded",sg),Cg=new R("subscription-subscribe-success",vg),Dg=new R("subscription-subscribe-external",ug),Eg=new R("subscription-unsubscribe",wg),Fg=new R("subscription-unsubscirbe-loading",sg),Gg=new R("subscription-unsubscribe-loaded",sg),Hg=new R("subscription-unsubscribe-success",sg),Ig=
new R("subscription-external-unsubscribe",wg),Jg=new R("subscription-enable-ypc",sg),Kg=new R("subscription-disable-ypc",sg),Lg=new R("subscription-prefs",tg),Mg=new R("subscription-prefs-success",tg),Ng=new R("subscription-prefs-failure",tg);var Og="http://www.youtube.com https://www.youtube.com https://plus.google.com https://plus.googleapis.com https://plus.sandbox.google.com https://plusone.google.com https://plusone.sandbox.google.com https://apis.google.com https://apis.sandbox.google.com https://web-ppg.corp.google.com https://web-green-qa.youtube.com https://web-release-qa.youtube.com".split(" "),Pg=[Ag,Bg,Cg,Fg,Gg,Hg,Dg,Ig],Qg=[Ag,Bg,Cg,Fg,Gg,Hg,Jg,Kg];function Rg(){var a=Bf();return a?a:null}
;function Sg(a,b){(a=I(a))&&a.style&&(a.style.display=b?"":"none",Xc(a,"hid",!b))}
function Tg(a){return(a=I(a))?"none"!=a.style.display&&!D(a,"hid"):!1}
function Ug(a){A(arguments,function(a){!qa(a)||a instanceof Element?Sg(a,!0):A(a,function(a){Ug(a)})})}
function Vg(a){A(arguments,function(a){!qa(a)||a instanceof Element?Sg(a,!1):A(a,function(a){Vg(a)})})}
;function Wg(){Rf.call(this,"tooltip");this.b=0;this.f={}}
v(Wg,Rf);oa(Wg);l=Wg.prototype;l.register=function(){Y(this,"mouseover",this.X);Y(this,"mouseout",this.K);Y(this,"focus",this.ta);Y(this,"blur",this.oa);Y(this,"click",this.K);Y(this,"touchstart",this.Ka);Y(this,"touchend",this.Z);Y(this,"touchcancel",this.Z)};
l.unregister=function(){Z(this,"mouseover",this.X);Z(this,"mouseout",this.K);Z(this,"focus",this.ta);Z(this,"blur",this.oa);Z(this,"click",this.K);Z(this,"touchstart",this.Ka);Z(this,"touchend",this.Z);Z(this,"touchcancel",this.Z);this.dispose();Wg.D.unregister.call(this)};
l.dispose=function(){for(var a in this.f)this.K(this.f[a]);this.f={}};
l.X=function(a){if(!(this.b&&1E3>za()-this.b)){var b=parseInt(this.g(a,"tooltip-hide-timer"),10);b&&(nf(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=r(function(){Xg(this,a);nf(a,"tooltip-show-timer")},this),c=parseInt(this.g(a,"tooltip-show-delay"),10)||0,b=N(b,c);
of(a,"tooltip-show-timer",b.toString());a.title&&(Uf(a,Yg(this,a)),a.title="");b=ta(a).toString();this.f[b]=a}};
l.K=function(a){var b=parseInt(this.g(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),nf(a,"tooltip-show-timer"));b=r(function(){if(a){var b=I(Zg(this,a));b&&($g(b),xd(b),nf(a,"content-id"));b=I(Zg(this,a,"arialabel"));xd(b)}nf(a,"tooltip-hide-timer")},this);
b=N(b,50);of(a,"tooltip-hide-timer",b.toString());if(b=this.g(a,"tooltip-text"))a.title=b;b=ta(a).toString();delete this.f[b]};
l.ta=function(a){this.b=0;this.X(a)};
l.oa=function(a){this.b=0;this.K(a)};
l.Ka=function(a,b,c){c.changedTouches&&(this.b=0,(a=Pf(b,X(this),c.changedTouches[0].target))&&this.X(a))};
l.Z=function(a,b,c){c.changedTouches&&(this.b=za(),(a=Pf(b,X(this),c.changedTouches[0].target))&&this.K(a))};
function ah(a,b,c){Uf(b,c);a=a.g(b,"content-id");(a=I(a))&&Bd(a,c)}
function Yg(a,b){return a.g(b,"tooltip-text")||b.title}
function Xg(a,b){if(b){var c=Yg(a,b);if(c){var d=I(Zg(a,b));if(!d){d=document.createElement("div");d.id=Zg(a,b);d.className=X(a,"tip");var e=document.createElement("div");e.className=X(a,"tip-body");var f=document.createElement("div");f.className=X(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=X(a,"tip-content");var h=bh(a,b),k=Zg(a,b,"content");g.id=k;of(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);
var n=Jd(b);k=Zg(a,b,"arialabel");f=document.createElement("div");E(f,X(a,"arialabel"));f.id=k;n=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+n:n+" "+c;Bd(f,n);b.setAttribute("aria-labelledby",k);k=Rg()||document.body;k.appendChild(f);k.appendChild(d);ah(a,b,c);(c=parseInt(a.g(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",E(g,X(a,"normal-wrap")));g=D(b,X(a,"reverse"));ch(a,b,d,e,h,g)||ch(a,b,d,e,h,!g);var w=X(a,"tip-visible");
N(function(){E(d,w)},0)}}}}
function ch(a,b,c,d,e,f){Xc(c,X(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=ee(b);f=new H((h.width-10)/2,f?h.height:0);var k=be(b);qe(new H(k.j+f.j,k.l+f.l),c,g);f=sd(window);if(1==c.nodeType)var n=ce(c);else c=c.changedTouches?c.changedTouches[0]:c,n=new H(c.clientX,c.clientY);c=ee(d);var w=Math.floor(c.width/2),g=!!(f.height<n.l+h.height),h=!!(n.l<h.height),k=!!(n.j<w);f=!!(f.width<n.j+w);n=(c.width+3)/-2- -5;a=a.g(b,"force-tooltip-direction");if("left"==a||k)n=-5;else if("right"==a||f)n=20-c.width-
3;a=Math.floor(n)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Zg(a,b,c){a=X(a)+Cf(b);c&&(a+="-"+c);return a}
function bh(a,b){var c=null;vc&&D(b,X(a,"masked"))&&((c=I("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Ug(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=X(a,"tip-mask")));return c}
function $g(a){var b=I("yt-uix-tooltip-shared-mask"),c=b&&Md(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Vg(b),document.body.appendChild(b))}
;function dh(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=We(b,"mode","subscribe"),b=We("/signin?context=popup","next",b),b=We(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=ff("LOGGED_IN",function(b){jf(M("LOGGED_IN_PUBSUB_KEY",void 0));Ze("LOGGED_IN",!0);a(b)});
Ze("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
t("yt.pubsub.publish",O);var eh=Object.create(null);eh.log_event="GENERIC_EVENT_LOGGING";eh.log_event2="GENERIC_EVENT_LOGGING";eh.log_interaction="INTERACTION_LOGGING";var fh=q("ytLoggingTransportLogPayloadsQueue_")||{};t("ytLoggingTransportLogPayloadsQueue_",fh);var gh=q("ytLoggingTransportTokensToCttTargetIds_")||{};t("ytLoggingTransportTokensToCttTargetIds_",gh);var hh=q("ytLoggingTransportDispatchedStats_")||{};t("ytLoggingTransportDispatchedStats_",hh);var ih=q("ytLoggingTransportCapturedTime_")||{};
t("ytytLoggingTransportCapturedTime_",ih);(new Oe).isAvailable();(new Pe).isAvailable();function jh(){Rf.call(this,"button");this.b=null;this.i=[];this.f={}}
v(jh,Rf);oa(jh);l=jh.prototype;l.register=function(){Y(this,"click",this.Na);Y(this,"keydown",this.xa);Y(this,"keypress",this.ya);Sf(this,"page-scroll",this.ob)};
l.unregister=function(){Z(this,"click",this.Na);Z(this,"keydown",this.xa);Z(this,"keypress",this.ya);kh(this);this.f={};jh.D.unregister.call(this)};
l.Na=function(a){a&&!a.disabled&&(lh(this,a),this.click(a))};
l.xa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey)&&(b=mh(this,a))){var d=function(a){var b="";a.tagName&&(b=a.tagName.toLowerCase());return"ul"==b||"table"==b},e;
d(b)?e=b:e=Cd(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.vb;else"table"==e&&(f=this.ub);f&&nh(this,a,b,c,r(f,this))}}};
l.ob=function(){var a=this.f,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=K(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;oh(this,d,b,!0)}};
function nh(a,b,c,d,e){var f=Tg(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=ph(a,c)){if(la(d.firstElementChild))b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var n=void 0===n?window:n;n=n.location;h=Xe(b.href,h)+k;h instanceof bd||h instanceof bd||(h=h.da?h.ca():String(h),dd.test(h)||(h="about:invalid#zClosurez"),h=ed(h));h instanceof bd&&h.constructor===bd&&h.f===cd?h=h.b:
(pa(h),h="type_error:SafeUrl");n.href=h}else Mf(b)}else g&&qh(a,b);else f?27==d.keyCode?(ph(a,c),qh(a,b)):e(b,c,d):(h=D(b,X(a,"reverse"))?38:40,d.keyCode==h&&(Mf(b),d.preventDefault()))}
l.ya=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||(a=mh(this,a),Tg(a)&&c.preventDefault())};
function ph(a,b){var c=X(a,"menu-item-highlight"),d=J(c,b);d&&F(d,c);return d}
function rh(a,b,c){E(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+ta(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
l.ub=function(a,b,c){var d=ph(this,b);if(d){var e=zf("table",b);b=pd(document,"td",null,e);d=sh(d,b,pd(document,"td",null,zf("tr",e)).length,c);-1!=d&&(rh(this,a,b[d]),c.preventDefault())}};
l.vb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=ph(this,b);d&&(b=Ab(pd(document,"li",null,b),Tg),rh(this,a,b[sh(d,b,1,c)]),c.preventDefault())}};
function sh(a,b,c,d){var e=b.length;a=zb(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function th(a,b){var c=b.iframeMask;c||(c=document.createElement("iframe"),c.src='javascript:""',c.className=X(a,"menu-mask"),Vg(c),b.iframeMask=c);return c}
function oh(a,b,c,d){var e=K(b,X(a,"group")),f=!!a.g(b,"button-menu-ignore-group"),e=e&&!f?e:b,f=9,g=8,h=ge(b);if(D(b,X(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(w){}}D(b,"flip")&&(D(b,X(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.g(b,"button-has-sibling-menu")?k=$d(e):a.g(b,"button-menu-root-container")&&(k=uh(a,b));C&&!Cc("8")&&(k=null);if(k){var n=ge(k);n=new Sd(-n.top,n.left,n.top,-n.left)}k=new H(0,1);D(b,X(a,"center-menu"))&&(k.j-=Math.round((ee(c).width-ee(b).width)/
2));d&&(k.l+=ud(document).l);if(a=th(a,b))b=ee(c),a.style.width=b.width+"px",a.style.height=b.height+"px",oe(e,f,a,g,k,n,197),d&&Ud(a,"position","fixed");oe(e,f,c,g,k,n,197)}
function uh(a,b){if(a.g(b,"button-menu-root-container")){var c=a.g(b,"button-menu-root-container");return K(b,c)}return document.body}
l.Pa=function(a){if(a){var b=mh(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.g(a,"button-has-sibling-menu")?c=a.parentNode:c=uh(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=th(this,a);d&&c.appendChild(d);(c=!!this.g(a,"button-menu-fixed"))&&(this.f[Cf(a).toString()]=b);oh(this,a,b,c);hf("yt-uix-button-menu-before-show",a,b);Ug(b);d&&Ug(d);
this.N(a,"button-menu-action",!0);E(a,X(this,"active"));b=r(this.Oa,this,a,!1);d=r(this.Oa,this,a,!0);c=r(this.Gb,this,a,void 0);this.b&&mh(this,this.b)==mh(this,a)||kh(this);O("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.b=a}}};
function qh(a,b){if(b){var c=mh(a,b);if(c){a.b=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Vg(c);a.N(b,"button-menu-action",!1);var d=th(a,b),e=Cf(c).toString();delete a.f[e];N(function(){d&&d.parentNode&&(Vg(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}var e=K(b,X(a,"group")),f=[X(a,"active")];
e&&f.push(X(a,"group-active"));Wc(b,f);O("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
l.Gb=function(a,b){var c=mh(this,a);if(c){b&&(b instanceof fd?c.innerHTML=hd(b):Bd(c,b));var d=!!this.g(a,"button-menu-fixed");oh(this,a,c,d)}};
l.Oa=function(a,b,c){c=Kf(c);var d=K(c,X(this));if(d){var d=mh(this,d),e=mh(this,a);if(d==e)return}var d=K(c,X(this,"menu")),e=d==mh(this,a),f=D(c,X(this,"menu-item")),g=D(c,X(this,"menu-close"));if(!d||e&&(f||g))qh(this,a),d&&b&&this.g(a,"button-menu-indicate-selected")&&((a=J(X(this,"content"),a))&&Bd(a,Jd(c)),vh(this,d,c))};
function vh(a,b,c){var d=X(a,"menu-item-selected");A(od(d,b),function(a){F(a,d)});
E(c.parentNode,d)}
function mh(a,b){if(!b.widgetMenu){var c=a.g(b,"button-menu-id"),c=c&&I(c),d=X(a,"menu");c?Vc(c,[d,X(a,"menu-external")]):c=J(d,b);b.widgetMenu=c}return b.widgetMenu}
l.isToggled=function(a){return D(a,X(this,"toggled"))};
function lh(a,b){if(a.g(b,"button-toggle")){var c=K(b,X(a,"group")),d=X(a,"toggled"),e=D(b,d);if(c&&a.g(c,"button-toggle-group")){var f=a.g(c,"button-toggle-group");A(od(X(a),c),function(a){a!=b||"optional"==f&&e?(F(a,d),a.removeAttribute("aria-pressed")):(E(b,d),a.setAttribute("aria-pressed","true"))})}else e?b.removeAttribute("aria-pressed"):b.setAttribute("aria-pressed","true"),Zc(b,d)}}
l.click=function(a){if(mh(this,a)){var b=mh(this,a);if(b){var c=K(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(qh(this,c),N(r(this.Pa,this,a),1)):Tg(b)?qh(this,a):this.Pa(a)}a.focus()}this.N(a,"button-action")};
function kh(a){a.b&&qh(a,a.b)}
;function wh(a){Rf.call(this,a);this.i=null}
v(wh,Rf);l=wh.prototype;l.C=function(a){var b=Rf.prototype.C.call(this,a);return b?b:a};
l.register=function(){Sf(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
l.dispose=function(){xh(this);wh.D.dispose.call(this)};
l.g=function(a,b){var c=wh.D.g.call(this,a,b);return c?c:(c=wh.D.g.call(this,a,"card-config"))&&(c=q(c))&&c[b]?c[b]:null};
l.show=function(a){var b=this.C(a);if(b){E(b,X(this,"active"));var c=yh(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;zh(this,a,c);var d=X(this,"card-visible"),e=this.g(a,"card-delegate-show")&&this.g(b,"card-action");this.N(b,"card-action",a);this.i=a;Vg(c);N(r(function(){e||(Ug(c),O("yt-uix-card-show",b,a,c));Ah(c);E(c,d);O("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function yh(a,b,c){var d=c||b,e=X(a,"card");c=Bh(a,d);var f=I(X(a,"card")+Cf(d));if(f)return a=J(X(a,"card-body"),f),Ad(a,c)||(xd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Cf(d);f.className=e;(d=a.g(d,"card-class"))&&Vc(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.g(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");
g.className=X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;xd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function zh(a,b,c){var d=a.g(b,"orientation")||"horizontal",e=J(X(a,"anchor"),b)||b,f=a.g(b,"position"),g=!!a.g(b,"force-position"),h=a.g(b,"position-fixed"),d="horizontal"==d,k="bottomright"==f||"bottomleft"==f,n="topright"==f||"bottomright"==f;if(n&&k){var w=13;var y=8}else n&&!k?(w=12,y=9):!n&&k?(w=9,y=12):(w=8,y=13);var Q=he(document.body),f=he(b);Q!=f&&(w^=4);if(d){f=b.offsetHeight/2-12;var G=new H(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,G=new H(b.offsetWidth+6,-12);var u=ee(c),f=Math.min(f,
(d?u.height:u.width)-24-6);6>f&&(f=6,d?G.l+=12-b.offsetHeight/2:G.j+=12-b.offsetWidth/2);u=null;g||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");Xc(c,b,n);Xc(c,a,k);u=oe(e,w,c,y,G,null,u);!g&&u&&(u&48&&(n=!n,w^=4,y^=4),u&192&&(k=!k,w^=1,y^=1),Xc(c,b,n),Xc(c,a,k),oe(e,w,c,y,G));h&&(e=parseInt(c.style.top,10),g=ud(document).l,Ud(c,"position","fixed"),Ud(c,"top",e-g+"px"));Q&&(c.style.right="",e=ge(c),e.left=e.left||parseInt(c.style.left,10),g=sd(window),c.style.left="",c.style.right=g.width-e.left-
e.width+"px");e=J("yt-uix-card-body-arrow",c);g=J("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!Q&&n||Q&&!n?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=J("yt-uix-card-arrow",c);n=J("yt-uix-card-arrow-background",c);k&&n&&(c="right"==d?ee(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",n.style.marginLeft=-f+"px",n.style.marginTop=f+"px")}
l.hide=function(a){if(a=this.C(a)){var b=I(X(this,"card")+Cf(a));b&&(F(a,X(this,"active")),F(b,X(this,"card-visible")),Vg(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(xd(b.cardMask),b.cardMask=null))}};
function xh(a){a.i&&a.hide(a.i)}
l.Fb=function(a,b){var c=this.C(a);if(c){if(b){var d=Bh(this,c);if(!d)return;b instanceof fd?d.innerHTML=hd(b):Bd(d,b)}D(c,X(this,"active"))&&(c=yh(this,a,c),zh(this,a,c),Ug(c),Ah(c))}};
l.isActive=function(a){return(a=this.C(a))?D(a,X(this,"active")):!1};
function Bh(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.g(b,"card-id"))?I(c):J(d,b))||(c=document.createElement("div"));var f=c;F(f,d);E(f,e);b.cardContentNode=c}return c}
function Ah(a){var b=a.cardMask;b||(b=document.createElement("iframe"),b.src='javascript:""',Vc(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Ch(){Rf.call(this,"kbd-nav")}
var Dh;v(Ch,Rf);oa(Ch);l=Ch.prototype;l.register=function(){Y(this,"keydown",this.va);Sf(this,"yt-uix-kbd-nav-move-in",this.Da);Sf(this,"yt-uix-kbd-nav-move-in-to",this.wb);Sf(this,"yt-uix-kbd-move-next",this.Ea);Sf(this,"yt-uix-kbd-nav-move-to",this.V)};
l.unregister=function(){Z(this,"keydown",this.va);W(Dh)};
l.va=function(a,b,c){var d=c.keyCode;if(a=K(a,X(this)))switch(d){case 13:case 32:this.Da(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=ad(a,"kbdNavMoveOut");!c;){c=K(a.parentElement,X(this));if(!c)break a;c=ad(c,"kbdNavMoveOut")}c=I(c);this.V(c);O("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&D(a,X(this,"list")))switch(d){case 40:this.Ea(b,a);break;case 38:d=document.activeElement==a,a=Eh(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),Fh(this,a[b]))}c.preventDefault()}};
l.Da=function(a){var b=ad(a,"kbdNavMoveIn"),b=I(b);Gh(this,a,b);this.V(b)};
l.wb=function(a){a:{var b=document;try{var c=b&&b.activeElement;break a}catch(d){}c=null}Gh(this,c,a);this.V(a)};
l.V=function(a){if(a)if(Gd(a))a.focus();else{var b=Cd(a,function(a){return zd(a)?Gd(a):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Gh(a,b,c){b&&c&&(E(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,$c&&c.dataset?c.dataset.kbdNavMoveOut=b:c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b))}
l.Ea=function(a,b){var c=document.activeElement==b,d=Eh(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Fh(this,d[c]))};
function Fh(a,b){if(b){var c=Ld(b,"LI");c&&(E(c,X(a,"highlight")),Dh=V(b,"blur",r(function(a){F(a,X(this,"highlight"));W(Dh)},a,c)))}}
function Eh(a){if("UL"!=a.tagName.toUpperCase())return[];a=Ab(yd(a),function(a){return"LI"==a.tagName.toUpperCase()});
return Ab(Bb(a,function(a){return Tg(a)?Cd(a,function(a){return zd(a)?Gd(a):!1}):!1}),function(a){return!!a})}
;function Hh(){Rf.call(this,"menu");this.f=this.b=null;this.i={};this.w={};this.o=null}
v(Hh,Rf);oa(Hh);function Ih(a){var b=Hh.A();if(D(a,X(b)))return a;var c=b.C(a);return c?c:K(a,X(b,"content"))==b.b?b.f:null}
l=Hh.prototype;l.register=function(){Y(this,"click",this.ua);Y(this,"mouseenter",this.mb);Sf(this,"page-scroll",this.pb);Sf(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.C(a);Jh(this,a)});
this.o=new L};
l.unregister=function(){Z(this,"click",this.ua);this.f=this.b=null;W(Kb(Sb(this.i)));this.i={};Qb(this.w,function(a){xd(a)},this);
this.w={};Rc(this.o);this.o=null;Hh.D.unregister.call(this)};
l.ua=function(a,b,c){a&&(b=Kh(this,a),!b.disabled&&Df(c.target,b)&&Lh(this,a))};
l.mb=function(a,b,c){a&&D(a,X(this,"hover"))&&Df(c.target,Kh(this,a))&&Lh(this,a,!0)};
l.pb=function(){this.b&&this.f&&Mh(this,this.f,this.b)};
function Mh(a,b,c){var d=Nh(a,b);if(d){var e=ee(c);if(e instanceof kd){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=de(e,!0);d.style.height=de(f,!0)}c==a.b&&(e=9,f=8,D(b,X(a,"reversed"))&&(e^=1,f^=1),D(b,X(a,"flipped"))&&(e^=4,f^=4),a=new H(0,1),d&&oe(b,e,d,f,a,null,197),oe(b,e,c,f,a,null,197))}
function Lh(a,b,c){Oh(a,b)&&!c?Jh(a,b):(Ph(a,b),!a.b||Df(b,a.b)?a.Qa(b):He(a.o,r(a.Qa,a,b)))}
l.Qa=function(a){if(a){var b=Qh(this,a);if(b){hf("yt-uix-menu-before-show",a,b);this.b?Df(a,this.b)||Jh(this,this.f):(this.f=a,this.b=b,D(a,X(this,"sibling-content"))||(xd(b),document.body.appendChild(b)),b.style.minWidth=Kh(this,a).offsetWidth-2+"px");var c=Nh(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);F(b,X(this,"content-hidden"));Mh(this,a,b);Vc(Kh(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);O("yt-uix-menu-show",a);Rh(b);Sh(this,a);O("yt-uix-kbd-nav-move-in-to",
b);var d=r(this.Hb,this,a),e=r(this.sb,this,a),c=ta(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];D(a,X(this,"indicate-selected"))&&(d=r(this.tb,this,a),this.i[c].push(V(b,"click",d)));D(a,X(this,"hover"))&&(a=r(this.nb,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
l.nb=function(a,b){var c=Kf(b);c&&(Df(c,Kh(this,a))||Th(this,c)||Uh(this,a))};
l.Hb=function(a,b){var c=Kf(b);if(c){if(Th(this,c)){var d=K(c,X(this,"content"));var e=Ld(c,"LI");e&&d&&Ad(d,e)&&hf("yt-uix-menu-item-clicked",c);c=K(c,X(this,"close-on-select"));if(!c)return;d=Ih(c)}Jh(this,d||a)}};
function Ph(a,b){if(b){var c=K(b,X(a,"content"));c&&A(od(X(a),c),function(a){!Df(a,b)&&Oh(this,a)&&Uh(this,a)},a)}}
function Jh(a,b){if(b){var c=[];c.push(b);var d=Qh(a,b);d&&(d=od(X(a),d),d=Gb(d),c=c.concat(d),A(c,function(a){Oh(this,a)&&Uh(this,a)},a))}}
function Uh(a,b){if(b){var c=Qh(a,b);Wc(Kh(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);E(c,X(a,"content-hidden"));var d=Qh(a,b);d&&qd(d,{"aria-expanded":"false"});(d=Nh(a,b))&&d.parentNode&&xd(d);c&&c==a.b&&(a.f.appendChild(c),a.b=null,a.f=null,a.o&&a.o.H("ROOT_MENU_REMOVED"));O("yt-uix-menu-hide",b);c=ta(b).toString();W(a.i[c]);delete a.i[c]}}
l.sb=function(a,b){var c=Kf(b);c&&Vh(this,a,c)};
l.tb=function(a,b){var c=Kf(b);if(c){var d=Kh(this,a);if(d&&(c=Ld(c,"LI")))if(c=Jd(c).trim(),d.hasChildNodes()){var e=jh.A();(d=J(X(e,"content"),d))&&Bd(d,c)}else Bd(d,c)}};
function Sh(a,b){var c=Qh(a,b);if(c){A(c.children,function(a){"LI"==a.tagName&&qd(a,{role:"menuitem"})});
qd(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+ta(c),c.id=d);(c=Kh(a,b))&&qd(c,{"aria-controls":d})}}
function Vh(a,b,c){var d=Qh(a,b);d&&D(b,X(a,"checked"))&&(a=Ld(c,"LI"))&&(a=J("yt-ui-menu-item-checked-hid",a))&&(A(od("yt-ui-menu-item-checked",d),function(a){Yc(a,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Yc(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Oh(a,b){var c=Qh(a,b);return c?!D(c,X(a,"content-hidden")):!1}
function Rh(a){A(pd(document,"UL",null,a),function(a){a.tabIndex=0;var b=Ch.A();Vc(a,[X(b),X(b,"list")])})}
function Qh(a,b){var c=kf(b,"menu-content-id");return c&&(c=I(c))?(Vc(c,[X(a,"content"),X(a,"content-external")]),c):b==a.f?a.b:J(X(a,"content"),b)}
function Nh(a,b){var c=ta(b).toString(),d=a.w[c];if(!d){d=document.createElement("IFRAME");d.src='javascript:""';var e=[X(a,"mask")];A(Uc(b),function(a){e.push(a+"-mask")});
Vc(d,e);a.w[c]=d}return d||null}
function Kh(a,b){return J(X(a,"trigger"),b)}
function Th(a,b){return Df(b,a.b)||Df(b,a.f)}
;function Wh(){wh.call(this,"clickcard");this.b={};this.f={}}
v(Wh,wh);oa(Wh);l=Wh.prototype;l.register=function(){Wh.D.register.call(this);Y(this,"click",this.ra,"target");Y(this,"click",this.qa,"close")};
l.unregister=function(){Wh.D.unregister.call(this);Z(this,"click",this.ra,"target");Z(this,"click",this.qa,"close");for(var a in this.b)W(this.b[a]);this.b={};for(a in this.f)W(this.f[a]);this.f={}};
l.ra=function(a,b,c){c.preventDefault();b=Ld(c.target,"button");if(!b||!b.disabled){if(b=this.g(a,"card-target"))a=document,a=p(b)?a.getElementById(b):b;b=this.C(a);this.g(b,"disabled")||(D(b,X(this,"active"))?(this.hide(a),F(b,X(this,"active"))):(this.show(a),E(b,X(this,"active"))))}};
l.show=function(a){Wh.D.show.call(this,a);var b=this.C(a),c=ta(a).toString();if(!kf(b,"click-outside-persists")){if(this.b[c])return;var b=V(document,"click",r(this.sa,this,a)),d=V(window,"blur",r(this.sa,this,a));this.b[c]=[b,d]}a=V(window,"resize",r(this.Fb,this,a,void 0));this.f[c]=a};
l.hide=function(a){Wh.D.hide.call(this,a);a=ta(a).toString();var b=this.b[a];b&&(W(b),this.b[a]=null);if(b=this.f[a])W(b),delete this.f[a]};
l.sa=function(a,b){var c="yt-uix"+(this.v?"-"+this.v:"")+"-card",d=null;b.target&&(d=K(b.target,c)||K(Ih(b.target),c));(d=d||K(document.activeElement,c)||K(Ih(document.activeElement),c))||this.hide(a)};
l.qa=function(a){(a=K(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Xh(){wh.call(this,"hovercard")}
v(Xh,wh);oa(Xh);l=Xh.prototype;l.register=function(){Y(this,"mouseenter",this.za,"target");Y(this,"mouseleave",this.Ba,"target");Y(this,"mouseenter",this.Aa,"card");Y(this,"mouseleave",this.Ca,"card")};
l.unregister=function(){Z(this,"mouseenter",this.za,"target");Z(this,"mouseleave",this.Ba,"target");Z(this,"mouseenter",this.Aa,"card");Z(this,"mouseleave",this.Ca,"card")};
l.za=function(a){if(Yh!=a){Yh&&(this.hide(Yh),Yh=null);var b=r(this.show,this,a),c=parseInt(this.g(a,"delay-show"),10),b=N(b,-1<c?c:200);of(a,"card-timer",b.toString());Yh=a;a.alt&&(of(a,"card-alt",a.alt),a.alt="");a.title&&(of(a,"card-title",a.title),a.title="")}};
l.Ba=function(a){var b=parseInt(this.g(a,"card-timer"),10);window.clearTimeout(b);this.C(a).isCardHidable=!0;b=parseInt(this.g(a,"delay-hide"),10);b=-1<b?b:200;N(r(this.qb,this,a),b);if(b=this.g(a,"card-alt"))a.alt=b;if(b=this.g(a,"card-title"))a.title=b};
l.qb=function(a){this.C(a).isCardHidable&&(this.hide(a),Yh=null)};
l.Aa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
l.Ca=function(a){a&&this.hide(a.cardTargetNode)};
var Yh=null;function Zh(a,b,c,d,e,f){this.b=a;this.B=null;this.i=J("yt-dialog-fg",this.b)||this.b;if(a=J("yt-dialog-title",this.i)){var g="yt-dialog-title-"+ta(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.R=J("yt-dialog-focus-trap",this.b);this.ia=!1;this.o=new L;this.F=[];this.F.push(Lf(this.b,r(this.xb,this),"yt-dialog-dismiss"));this.F.push(V(this.R,"focus",r(this.lb,this),!0));$h(this);this.Ua=b;this.bb=c;this.ab=d;this.J=e;this.cb=f;this.w=
this.v=null}
var ai={LOADING:"loading",Mb:"content",Tb:"working"};function bi(a,b){a.W()||a.o.subscribe("post-all",b)}
function $h(a){a=J("yt-dialog-fg-content",a.b);var b=[];Qb(ai,function(a){b.push("yt-dialog-show-"+a)});
Wc(a,b);E(a,"yt-dialog-show-content")}
l=Zh.prototype;
l.show=function(){if(!this.W()){this.B=document.activeElement;if(!this.ab){this.f||(this.f=I("yt-dialog-bg"),this.f||(this.f=document.createElement("div"),this.f.id="yt-dialog-bg",this.f.className="yt-dialog-bg",document.body.appendChild(this.f)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=sd(a).height,td(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{var b=d.scrollHeight,e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=
c.offsetHeight);c=b>a?b>e?b:e:b<e?b:e}else c=0}this.f.style.height=c+"px";Ug(this.f)}this.wa();c=ci(this);di(c);this.v=V(document,"keydown",r(this.rb,this));c=this.b;d=ff("player-added",this.wa,this);of(c,"player-ready-pubsub-key",d);this.bb&&(this.w=V(document,"click",r(this.Bb,this)));Ug(this.b);this.i.setAttribute("tabindex","0");ei(this);this.J||E(document.body,"yt-dialog-active");kh(jh.A());xh(Wh.A());xh(Xh.A());O("yt-ui-dialog-show-complete",this)}};
function fi(){return Cb(od("yt-dialog"),function(a){return Tg(a)})}
l.wa=function(){if(!this.cb){var a=this.b;Xc(document.body,"hide-players",!0);a&&Xc(a,"preserve-players",!0)}};
function ci(a){var b=pd(document,"iframe",null,a.b);A(b,function(a){var b=kf(a,"onload");b&&(b=q(b))&&V(a,"load",b);if(b=kf(a,"src"))a.src=b},a);
return Gb(b)}
function di(a){A(document.getElementsByTagName("iframe"),function(b){-1==zb(a,b)&&E(b,"iframe-hid")})}
function gi(){A(od("iframe-hid"),function(a){F(a,"iframe-hid")})}
l.xb=function(a){a=a.currentTarget;a.disabled||(a=kf(a,"action")||"",this.dismiss(a))};
l.dismiss=function(a){if(!this.W()){this.o.H("pre-all");this.o.H("pre-"+a);Vg(this.b);xh(Wh.A());xh(Xh.A());this.i.setAttribute("tabindex","-1");fi()||(Vg(this.f),this.J||F(document.body,"yt-dialog-active"),Ef(),gi());this.v&&(W(this.v),this.v=null);this.w&&(W(this.w),this.w=null);var b=this.b;if(b){var c=kf(b,"player-ready-pubsub-key");c&&(jf(c),nf(b,"player-ready-pubsub-key"))}this.o.H("post-all");O("yt-ui-dialog-hide-complete",this);"cancel"==a&&O("yt-ui-dialog-cancelled",this);this.o&&this.o.H("post-"+
a);this.B&&this.B.focus()}};
l.setTitle=function(a){Bd(J("yt-dialog-title",this.b),a)};
l.rb=function(a){N(r(function(){this.Ua||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&D(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
l.Bb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
l.W=function(){return this.ia};
l.dispose=function(){Tg(this.b)&&this.dismiss("dispose");W(this.F);this.F.length=0;N(r(function(){this.B=null},this),0);
this.R=this.i=null;this.o.dispose();this.o=null;this.ia=!0};
l.lb=function(a){a.stopPropagation();ei(this)};
function ei(a){N(r(function(){this.i&&this.i.focus()},a),0)}
t("yt.ui.Dialog",Zh);function hi(){Rf.call(this,"overlay");this.o=this.f=this.i=this.b=null}
v(hi,Rf);oa(hi);l=hi.prototype;l.register=function(){Y(this,"click",this.ga,"target");Y(this,"click",this.hide,"close");ii(this)};
l.unregister=function(){hi.D.unregister.call(this);Z(this,"click",this.ga,"target");Z(this,"click",this.hide,"close");this.o&&(jf(this.o),this.o=null);this.f&&(W(this.f),this.f=null)};
l.ga=function(a){if(!this.b||!Tg(this.b.b)){var b=this.C(a);a=ji(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.g(b,"disable-shortcuts")||!1,d=!!this.g(b,"disable-outside-click-dismiss")||!1;this.b=new Zh(a,c);this.i=b;var e=J("yt-dialog-fg",a);if(e){var f=this.g(b,"overlay-class")||"",g=this.g(b,"overlay-style")||"default",h=this.g(b,"overlay-shape")||"default",f=f?f.split(" "):[];f.push(X(this,g));f.push(X(this,h));Vc(e,f)}this.b.show();O("yt-uix-kbd-nav-move-to",e||a);ii(this);c||
d||(c=r(function(a){D(a.target,"yt-dialog-base")&&ki(this)},this),this.f=V(J("yt-dialog-base",a),"click",c));
this.N(b,"overlay-shown");O("yt-uix-overlay-shown",b)}}};
function ii(a){a.o||(a.o=ff("yt-uix-overlay-hide",li));a.b&&bi(a.b,function(){var a=hi.A();a.i=null;a.b.dispose();a.b=null})}
function ki(a){if(a.b){var b=a.i;a.b.dismiss("overlayhide");b&&a.N(b,"overlay-hidden");a.i=null;a.f&&(W(a.f),a.f=null);a.b=null}}
function ji(a,b){var c;if(a)if(c=J("yt-dialog",a)){var d=I("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=K(b,"yt-dialog"));return c}
function mi(){var a=hi.A();if(a.i)a=J("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=od("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=K(a[b],"yt-dialog");if(Tg(c)){a=a[b];break a}}a=null}return a}
l.hide=function(a){a&&a.disabled||O("yt-uix-overlay-hide")};
function li(){ki(hi.A())}
l.show=function(a){this.ga(a)};var ni={},oi=[];function pi(a){a=K(a,"yt-uix-button-subscription-container");return J("yt-dialog",J("unsubscribe-confirmation-overlay-container",a))}
function qi(a,b){W(oi);oi.length=0;ni[b]||(ni[b]=pi(a));hi.A().show(ni[b]);var c=mi();return new re(function(a){oi.push(Lf(c,function(){a()},"overlay-confirmation-unsubscribe-button"))})}
;function ri(){var a=M("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!M("SESSION_INDEX")&&!M("LOGGED_IN"))}
;function si(){Rf.call(this,"subscription-button");this.b=this.f=!1}
v(si,Rf);oa(si);si.prototype.register=function(){Y(this,"click",this.ha);Tf(this,Ag,this.Ga);Tf(this,Bg,this.Fa);Tf(this,Cg,this.Ib);Tf(this,Fg,this.Ga);Tf(this,Gg,this.Fa);Tf(this,Hg,this.Jb);Tf(this,Jg,this.zb);Tf(this,Kg,this.yb)};
si.prototype.unregister=function(){Z(this,"click",this.ha);si.D.unregister.call(this)};
si.prototype.i=function(a){return!!this.g(a,"is-subscribed")};
var ti={ja:"hover-enabled",Sa:"yt-uix-button-subscribe",Ta:"yt-uix-button-subscribed",Kb:"ypc-enabled",Va:"yt-uix-button-subscription-container",Wa:"yt-subscription-button-disabled-mask-container"},ui={Lb:"channel-external-id",Xa:"subscriber-count-show-when-subscribed",Ya:"subscriber-count-tooltip",Za:"subscriber-count-title",Nb:"href",Ob:"insecure",ka:"is-subscribed",Pb:"parent-url",Qb:"clicktracking",eb:"show-unsub-confirm-dialog",Rb:"show-unsub-confirm-time-frame",fb:"style-type",la:"subscribed-timestamp",
ma:"subscription-id",Sb:"target",gb:"ypc-enabled"};l=si.prototype;
l.ha=function(a){var b=this.g(a,"href"),c=this.g(a,"insecure"),d=ri(),e=!(this.f&&d),c=c&&!this.b;if(b&&(e||c))a=this.g(a,"target")||"_self",window.open(b,a);else if(!c)if(d)if(b=this.g(a,"channel-external-id"),d=this.g(a,"clicktracking"),e=vi(this,a),c=this.g(a,"parent-url"),this.g(a,"is-subscribed")){var f=this.g(a,"subscription-id"),g=new wg(b,f,e,a,d,c);wi(this,a)?qi(a,b).then(function(){T(Eg,g)}):T(Eg,g)}else T(zg,new ug(b,e,d,c));
else xi(this,a)};
l.Ga=function(a){this.M(a.b,this.Ia,!0)};
l.Fa=function(a){this.M(a.b,this.Ia,!1)};
l.Ib=function(a){this.M(a.b,this.Ja,!0,a.f)};
l.Jb=function(a){this.M(a.b,this.Ja,!1)};
l.zb=function(a){this.M(a.b,this.kb)};
l.yb=function(a){this.M(a.b,this.jb)};
l.Ja=function(a,b,c){b?(of(a,ui.ka,"true"),c&&of(a,ui.ma,c),this.g(a,ui.eb)&&(b=new Pc,of(a,ui.la,(b.getTime()/1E3).toString()))):(nf(a,ui.ka),nf(a,ui.la),nf(a,ui.ma));yi(this,a)};
function vi(a,b){if(!a.g(b,"ypc-enabled"))return null;var c=a.g(b,"ypc-item-type"),d=a.g(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
l.Ia=function(a,b){var c=K(a,ti.Va);Xc(c,ti.Wa,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function yi(a,b){var c=a.g(b,ui.fb),d=!!a.g(b,"is-subscribed"),c="-"+c,e=ti.Ta+c;Xc(b,ti.Sa+c,!d);Xc(b,e,d);a.g(b,ui.Ya)&&!a.g(b,ui.Xa)&&(c=X(Wg.A()),Xc(b,c,!d),b.title=d?"":a.g(b,ui.Za));d?N(function(){E(b,ti.ja)},1E3):F(b,ti.ja)}
l.kb=function(a){var b=!!this.g(a,"ypc-item-type"),c=!!this.g(a,"ypc-item-id");!this.g(a,"ypc-enabled")&&b&&c&&(E(a,"ypc-enabled"),of(a,ui.gb,"true"))};
l.jb=function(a){this.g(a,"ypc-enabled")&&(F(a,"ypc-enabled"),nf(a,"ypc-enabled"))};
function zi(a,b){return Ab(od(X(a)),function(a){return b==this.g(a,"channel-external-id")},a)}
l.hb=function(a,b,c){var d=Jb(arguments,2);A(a,function(a){b.apply(this,Fb(a,d))},this)};
l.M=function(a,b,c){var d=zi(this,a);this.hb.apply(this,Fb([d],Jb(arguments,1)))};
function xi(a,b){var c=r(function(a){a.discoverable_subscriptions&&Ze("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.ha(b)},a);
dh(c)}
function wi(a,b){if(a.b||!a.g(b,"show-unsub-confirm-dialog"))return!1;var c=a.g(b,"show-unsub-confirm-time-frame");return"always"==c||"ten_minutes"==c&&(c=parseInt(a.g(b,"subscribed-timestamp"),10),(new Pc).getTime()<1E3*(c+600))?!0:!1}
;function Ai(a){this.b=a;this.G=null;M("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Bi(this),V(this.b,"mouseover",r(this.o,this)),V(this.b,"mouseout",r(this.aa,this)),V(this.b,"click",r(this.aa,this)),U(Cg,ya(this.f,!0),this),U(Hg,ya(this.f,!1),this),Ci(this))}
function Bi(a){var b={url:M("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.b,relayOpen:"-1"};a=r(a.i,a);Zf().open(b,a)}
function Ci(a){ri()||ff("LOGGED_IN",function(){this.G&&(this.aa(),this.G.close(),this.G=null,Bi(this))},a)}
Ai.prototype.i=function(a){this.G=a;a=si.A().i(this.b);this.f(a)};
Ai.prototype.o=function(){this.G&&this.G.restyle({show:!0})};
Ai.prototype.aa=function(){this.G&&this.G.restyle({show:!1})};
Ai.prototype.f=function(a){if(this.G){a={isSubscribed:a};try{var b=q("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER");this.G.send("msg-hovercard-subscription",a,void 0,b)}catch(c){}}};function Di(a){if(qa(a))return Ei(a);if(sa(a)&&!ra(a)&&!(sa(a)&&0<a.nodeType))return Fi(a);try{return m.JSON.stringify(a),a}catch(b){}}
function Fi(a){return Rb(a,function(a){return Di(a)})}
function Ei(a){return Bb(a,function(a){return Di(a)})}
;function Gi(a){this.f=null;this.b=a;a=$f();var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^za()).toString(36);a&&(bg({role:"ytsubscribe",iframe:a,data:{id:b}}),ag(r(function(a){this.f=a},this),this.b))}
Gi.prototype.register=function(a,b){if(this.f)this.f.register(a,b,this.b);else{var c=r(this.register,this,a,b,this.b);ag(c,this.b)}};
Gi.prototype.send=function(a,b){if(this.f)this.f.send(a,b,void 0,this.b);else{var c=r(this.send,this,a,b);ag(c,this.b)}};function Hi(){this.b=this.f=null}
function Ii(a,b){var c=q("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER");try{var d=c||Ji(a),e=$f();e&&e.send("onytevent",b,void 0,d)}catch(f){}}
Hi.prototype.i=function(a,b){if("pubsub2"==b.eventType){var c=b.topicString;c&&a(c,b.serializedData||null)}};
function Ji(a){if(!a.f){var b=q("gapi.iframes.makeWhiteListIframesFilter")(Og);a.f=b}return a.f}
;function Ki(){this.b=new Hi;this.i=!1;this.f={}}
function Li(a){A(Pg,function(a){if(!this.f[a.toString()]){var b=U(a,function(b){var c=b?b.Eb():null;b=this.b;b.b&&(c={eventType:"pubsub2",topicString:a.toString(),serializedData:Di(c)},b.b.send("msg-youtube-pubsub",c))},this);
b&&(this.f[a.toString()]=b)}},a)}
Ki.prototype.o=function(a,b){var c=Db(Qg,function(b){return b.toString()==a});
if(c&&(!c.U||b)){if(c.U)try{var d=pf(c.U,b)}catch(f){return}var e=this.f[c.toString()];e?wf(e,c,d):T(c,d)}};
Ki.prototype.v=function(a){Mi(this)&&Ii(this.b,{eventType:"subscribe",channelExternalId:a.b})};
Ki.prototype.w=function(a){Mi(this)&&Ii(this.b,{eventType:"unsubscribe",channelExternalId:a.b})};
function Mi(a){return a.i||!!M("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS")}
;function Ni(){Yf(function(){var a=ee(I("yt-subscribe"));a={width:a.width,height:a.height};var b=Oi;Zf().ready(a,null,b)})}
function Oi(a){if(a.length&&a[a.length-1]){var b=a[a.length-1];a=b.eurl;var b=b.notificationsPipeSupported,c=I("yt-subscribe"),d=si.A(),c=J(X(d),c);a&&c&&(si.A(),of(c,"parent-url",a));Pi()?(si.A().b=!0,b&&(si.A().f=!0)):c&&new Ai(c);a=new Ki;U(Cg,a.v,a);U(Hg,a.w,a);if(Pi()){b=a.b;b.b=new Gi(Ji(b));Li(a);b=a.b;c=r(a.o,a);if(b.b)try{b.b.register("cmd-youtube-pubsub",ya(b.i,c))}catch(e){}a.i=!0}}}
function Pi(){var a=$f().getOrigin();return Eb(Og,a)}
;function Qi(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&(M("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)?jg(c,void 0):qg(c))}}
;function Ri(a){P.call(this,1,arguments);this.b=a}
v(Ri,P);function Si(a,b){P.call(this,2,arguments);this.f=a;this.b=b}
v(Si,P);function Ti(a,b,c,d){P.call(this,1,arguments);this.b=b;this.f=c||null;this.itemId=d||null}
v(Ti,P);function Ui(a,b){P.call(this,1,arguments);this.f=a;this.b=b||null}
v(Ui,P);function Vi(a){P.call(this,1,arguments)}
v(Vi,P);var Wi=new R("ypc-core-load",Ri),Xi=new R("ypc-guide-sync-success",Si),Yi=new R("ypc-purchase-success",Ti),Zi=new R("ypc-subscription-cancel",Vi),$i=new R("ypc-subscription-cancel-success",Ui),aj=new R("ypc-init-subscription",Vi);var bj=!1,cj=[];function dj(a){a.b?bj?T(Dg,a):T(Wi,new Ri(function(){T(aj,new Vi(a.b))})):ej(a.f,a.o,a.i,a.source)}
function fj(a){a.b?bj?T(Ig,a):T(Wi,new Ri(function(){T(Zi,new Vi(a.b))})):gj(a.f,a.v,a.o,a.i,a.source)}
function hj(a){ij(Gb(a.b))}
function jj(a){kj(Gb(a.b))}
function lj(a){mj(a.i,a.f,a.b)}
function nj(a){var b=a.itemId,c=a.b.subscriptionId;b&&c&&T(Cg,new vg(b,c,a.b.channelInfo))}
function oj(a){var b=a.b;Qb(a.f,function(a,d){T(Cg,new vg(d,a,b[d]))})}
function pj(a){T(Hg,new sg(a.f.itemId));a.b&&a.b.length&&(qj(a.b,Hg),qj(a.b,Jg))}
function ej(a,b,c,d){var e=new sg(a);T(Ag,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=M("PLAYBACK_ID"))&&(c.plid=d);(d=M("EVENT_ID"))&&(c.ei=d);b&&rj(b,c);ig("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",La:f,L:c,O:function(b,c){var d=c.response;T(Cg,new vg(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&O("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Qi(d.actions)},
fa:function(){T(Bg,e)}})}
function gj(a,b,c,d,e){var f=new sg(a);T(Fg,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=M("PLAYBACK_ID"))&&(d.plid=a);(a=M("EVENT_ID"))&&(d.ei=a);c&&rj(c,d);ig("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",La:g,L:d,O:function(a,b){var c=b.response;T(Hg,f);c.actions&&Qi(c.actions)},
fa:function(){T(Gg,f)}})}
function mj(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new tg(a,b,c);ig("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",L:d,onError:function(){T(Ng,e)},
O:function(){T(Mg,e)}})}}
function ij(a){if(a.length){var b=Ib(a,0,40);T("subscription-batch-subscribe-loading");qj(b,Ag);var c={};c.a=b.join(",");var d=function(){T("subscription-batch-subscribe-loaded");qj(b,Bg)};
ig("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",L:c,O:function(c,f){d();var e=f.response,h=e.id;if("array"==pa(h)&&h.length==b.length){var k=e.channel_info_map;A(h,function(a,c){var d=b[c];T(Cg,new vg(d,a,k[d]))});
a.length?ij(a):T("subscription-batch-subscribe-finished")}},
onError:function(){d();T("subscription-batch-subscribe-failure")}})}}
function kj(a){if(a.length){var b=Ib(a,0,40);T("subscription-batch-unsubscribe-loading");qj(b,Fg);var c={};c.c=b.join(",");var d=function(){T("subscription-batch-unsubscribe-loaded");qj(b,Gg)};
ig("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",L:c,O:function(){d();qj(b,Hg);a.length&&kj(a)},
onError:function(){d()}})}}
function qj(a,b){A(a,function(a){T(b,new sg(a))})}
function rj(a,b){var c=Wf(a),d;for(d in c)b[d]=c[d]}
;t("yt.setConfig",Ze);t("yt.config.set",Ze);t("ytbin.www.subscribeembed.init",function(){bj=!0;cj.push(U(zg,dj),U(Eg,fj));bj||cj.push(U(Dg,dj),U(Ig,fj),U(xg,hj),U(yg,jj),U(Lg,lj),U(Yi,nj),U($i,pj),U(Xi,oj));var a=si.A(),b=X(a);b in Vf||(a.register(),Sf(a,"yt-uix-init-"+b,a.init),Sf(a,"yt-uix-dispose-"+b,a.dispose),Vf[b]=a);Ni()});}).call(this);
