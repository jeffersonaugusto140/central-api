(function(){var k=this;function l(a){return"string"==typeof a}
function ba(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
var ca=Date.now||function(){return+new Date};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var p=window,q=document,da=p.location;function ea(){}
var fa=/\[native code\]/;function t(a,b,c){return a[b]=a[b]||c}
function ga(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function u(){var a;if((a=Object.create)&&fa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var x=t(p,"gapi",{});var y;y=t(p,"___jsl",u());t(y,"I",0);t(y,"hel",10);function ha(){var a=da.href;if(y.dpo)var b=y.h;else{b=y.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function ia(a){var b=t(y,"PQ",[]);y.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function z(a){return t(t(y,"H",u()),a,u())}
;var A=t(y,"perf",u());t(A,"g",u());var ja=t(A,"i",u());t(A,"r",[]);u();u();function B(a,b,c){b&&0<b.length&&(b=ka(b),c&&0<c.length&&(b+="___"+ka(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=t(ja,"_p",u()),t(b,c,u())[a]=(new Date).getTime(),b=A.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ka(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")}
;var la=u(),F=[];function G(a){throw Error("Bad hint"+(a?": "+a:""));}
F.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?y[b]=t(y,b,[]).concat(c):t(y,b,c)}if(b=a.u)a=t(y,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var ma=/^(\/[a-zA-Z0-9_\-]+)+$/,na=[/\/amp\//,/\/amp$/,/^\/amp$/],oa=/^[a-zA-Z0-9\-_\.,!]+$/,pa=/^gapi\.loaded_[0-9]+$/,qa=/^[a-zA-Z0-9,._-]+$/;function ra(a,b,c,d){var e=a.split(";"),f=e.shift(),g=la[f],h=null;g?h=g(e,b,c,d):G("no hint processor for: "+f);h||G("failed to generate load url");b=h;c=b.match(sa);(d=b.match(ta))&&1===d.length&&ua.test(b)&&c&&1===c.length||G("failed sanity: "+a);return h}
function va(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}
a=wa(a);pa.test(c)||G("invalid_callback");b=xa(b);d=d&&d.length?xa(d):null;return[encodeURIComponent(a.g).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.c?"/rs="+e(a.c):"",a.f?"/t="+e(a.f):"","/cb=",e(c)].join("")}
function wa(a){"/"!==a.charAt(0)&&G("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))G("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");ma.test(b)||G("invalid_prefix");c=0;for(d=na.length;c<d;++c)na[c].test(b)&&G("invalid_prefix");c=H(a,"k",
!0);d=H(a,"am");e=H(a,"rs");a=H(a,"t");return{g:b,version:c,a:d,c:e,f:a}}
function xa(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");qa.test(e)&&b.push(e)}return b.join(",")}
function H(a,b,c){a=a[b];!a&&c&&G("missing: "+b);if(a){if(oa.test(a))return a;G("invalid: "+b)}return null}
var ua=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,ta=/\/cb=/g,sa=/\/\//g;function ya(){var a=ha();if(!a)throw Error("Bad hint");return a}
la.m=function(a,b,c,d){(a=a[0])||G("missing_hint");return"https://apis.google.com"+va(a,b,c,d)};
var I=decodeURI("%73cript"),za=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Aa(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Ba(){var a=y.nonce;if(void 0!==a)return a&&a===String(a)&&a.match(za)?a:y.nonce=null;var b=t(y,"us",[]);if(!b||!b.length)return y.nonce=null;for(var c=q.getElementsByTagName(I),d=0,e=c.length;d<e;++d){var f=c[d];if(f.src&&(a=String(f.nonce||f.getAttribute("nonce")||"")||null)){for(var g=0,h=b.length;g<h&&b[g]!==f.src;++g);if(g!==h&&a&&a===String(a)&&a.match(za))return y.nonce=a}}return null}
function Ca(a){if("loading"!=q.readyState)Da(a);else{var b=Ba(),c="";null!==b&&(c=' nonce="'+b+'"');q.write("<"+I+' src="'+encodeURI(a)+'"'+c+"></"+I+">")}}
function Da(a){var b=q.createElement(I);b.setAttribute("src",a);a=Ba();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=q.getElementsByTagName(I)[0])?a.parentNode.insertBefore(b,a):(q.head||q.body||q.documentElement).appendChild(b)}
function Ea(a,b){var c=b&&b._c;if(c)for(var d=0;d<F.length;d++){var e=F[d][0],f=F[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Fa(a,b,c){Ga(function(){var c=b===ha()?t(x,"_",u()):u();c=t(z(b),"_",c);a(c)},c)}
function J(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ea(a,c);var d=a?a.split(":"):[],e=c.h||ya(),f=t(y,"ah",u());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var m=h.split("."),m=f[h]||f[m[1]&&"ns:"+m[0]||""]||e,C=g.length&&g[g.length-1]||null,D=C;C&&C.hint==m||(D={hint:m,b:[]},g.push(D));D.b.push(h)}var K=g.length;if(1<K){var E=c.callback;E&&(c.callback=function(){0==--K&&E()})}for(;d=g.shift();)Ha(d.b,c,d.hint)}else Ha(d||[],c,e)}
function Ha(a,b,c){function d(a,b){if(K)return 0;p.clearTimeout(D);E.push.apply(E,r);var d=((x||{}).config||{}).update;d?d(f):f&&t(y,"cu",[]).push(f);if(b){B("me0",a,T);try{Fa(b,c,C)}finally{B("me1",a,T)}}return 1}
a=ga(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,m=b.onerror,C=void 0;"function"==typeof m&&(C=m);var D=null,K=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=t(z(c),"r",[]).sort(),E=t(z(c),"L",[]).sort(),T=[].concat(m);0<g&&(D=p.setTimeout(function(){K=!0;h()},g));
var r=Aa(a,E);if(r.length){var r=Aa(a,m),v=t(y,"CP",[]),w=v.length;v[w]=function(a){function b(){var a=v[w+1];a&&a()}
function c(b){v[w]=null;d(r,a)&&ia(function(){e&&e();b()})}
if(!a)return 0;B("ml1",r,T);0<w&&v[w-1]?v[w]=function(){c(b)}:c(b)};
if(r.length){var aa="loaded_"+y.I++;x[aa]=function(a){v[w](a);x[aa]=null};
a=ra(c,r,"gapi."+aa,m);m.push.apply(m,r);B("ml0",r,T);b.sync||p.___gapisync?Ca(a):Da(a)}else v[w](ea)}else d(r)&&e&&e()}
function Ga(a,b){if(y.hee&&0<y.hel)try{return a()}catch(c){b&&b(c),y.hel--,J("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
x.load=function(a,b){return Ga(function(){return J(a,b)})};var Ia=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function Ja(a,b){return a<b?-1:a>b?1:0}
;var Ka=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},La=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=l(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var m=g[h];
b.call(c,m,h,a)&&(e[f++]=m)}return e};
function Ma(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=n(d);if("array"==e||"object"==e&&"number"==typeof d.length){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var L;a:{var Na=k.navigator;if(Na){var Oa=Na.userAgent;if(Oa){L=Oa;break a}}L=""};var Pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Pa.length;f++)c=Pa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ra(a,b){var c=Sa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))}
;var Ta=-1!=L.indexOf("Opera"),M=-1!=L.indexOf("Trident")||-1!=L.indexOf("MSIE"),Ua=-1!=L.indexOf("Edge"),Va=-1!=L.indexOf("Gecko")&&!(-1!=L.toLowerCase().indexOf("webkit")&&-1==L.indexOf("Edge"))&&!(-1!=L.indexOf("Trident")||-1!=L.indexOf("MSIE"))&&-1==L.indexOf("Edge"),Wa=-1!=L.toLowerCase().indexOf("webkit")&&-1==L.indexOf("Edge");function Xa(){var a=k.document;return a?a.documentMode:void 0}
var Ya;a:{var Za="",$a=function(){var a=L;if(Va)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ua)return/Edge\/([\d\.]+)/.exec(a);if(M)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Wa)return/WebKit\/(\S+)/.exec(a);if(Ta)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
$a&&(Za=$a?$a[1]:"");if(M){var ab=Xa();if(null!=ab&&ab>parseFloat(Za)){Ya=String(ab);break a}}Ya=Za}var bb=Ya,Sa={};
function cb(a){Ra(a,function(){for(var b=0,c=Ia(String(bb)).split("."),d=Ia(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=Ja(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||Ja(0==g[2].length,0==h[2].length)||Ja(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}
var db;var eb=k.document;db=eb&&M?Xa()||("CSS1Compat"==eb.compatMode?parseInt(bb,10):5):void 0;var fb;if(!(fb=!Va&&!M)){var gb;if(gb=M)gb=9<=Number(db);fb=gb}fb||Va&&cb("1.9.1");M&&cb("9");function hb(a){if(a.classList)return a.classList;a=a.className;return l(a)&&a.match(/\S+/g)||[]}
function ib(a,b){if(a.classList)var c=a.classList.contains(b);else c=hb(a),c=0<=Ka(c,b);return c}
function jb(a,b){a.classList?a.classList.add(b):ib(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function kb(a,b){a.classList?a.classList.remove(b):ib(a,b)&&(a.className=La(hb(a),function(a){return a!=b}).join(" "))}
;function N(a,b){this.width=a;this.height=b}
N.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
N.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
N.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function lb(){var a=document;return l("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"}
;function mb(a){var b=a.offsetWidth,c=a.offsetHeight,d=Wa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){a:{try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}M&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new N(e.right-e.left,e.bottom-e.top)}return new N(b,c)}
;var O=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{},P=["yt","config_"],Q=k;P[0]in Q||!Q.execScript||Q.execScript("var "+P[0]);for(var R;P.length&&(R=P.shift());)P.length||void 0===O?Q[R]&&Q[R]!==Object.prototype[R]?Q=Q[R]:Q=Q[R]={}:Q[R]=O;function nb(){return ba("gapi.iframes.getContext")()}
function ob(){return ba("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;ca();function pb(a){try{var b=ob();a.register("msg-hovercard-subscription",qb,b)}catch(c){}}
function qb(a){if(a){a=!!a.isSubscribed;var b=lb();a?kb(b,"subscribe"):jb(b,"subscribe");a?jb(b,"subscribed"):kb(b,"subscribed")}}
;function S(){var a=lb();b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=mb(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=mb(a);b.display=c;b.position=e;b.visibility=d}a={width:a.width,
height:a.height};nb().ready(a,null,void 0);a=ob();nb().addOnOpenerHandler(pb,null,a)}
var U=S,U=void 0===U?{}:U;"function"==n(U)&&(U={callback:U});var S=U,rb;(rb=S.gapiHintOverride)||(rb="GAPI_HINT_OVERRIDE"in O?O.GAPI_HINT_OVERRIDE:void 0);
if(rb){var sb;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],tb=V.split("?",2),W=1<tb.length?tb[1]:tb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var ub=W.split("&"),X={},vb=0,wb=ub.length;vb<wb;vb++){var Y=ub[vb].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),xb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==n(X[Z])?Ma(X[Z],xb):X[Z]=[X[Z],xb]:X[Z]=xb}}sb=X}else sb={};var yb=sb.gapi_jsh;yb&&Qa(S,
{_c:{jsl:{h:yb}}})}J("gapi.iframes:gapi.iframes.style.common",S);}).call(this);
