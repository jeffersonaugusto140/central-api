!function t(e,n,i){function o(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c){return c(a,!0);}if(r){return r(a,!0);}var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u;}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n?n:t);},l,l.exports,t,e,n,i);}return n[a].exports;}for(var r="function"==typeof require&&require,a=0;a<i.length;a++){o(i[a]);}return o;}({1:[function(t,e,n){var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t;}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t;};window.GoogleAnalyticsObject="ga",window.ga=window.ga||function(){window.ga.q=window.ga.q||[],window.ga.q.push(arguments);},window.ga.l=1*new Date,function(){function t(t){k.set(t);}function e(t){if(100!=t.get(Xe)&&y(dt(t,Ue))%10000>=100*ft(t,Xe)){throw"abort";}}function n(t){if(H(dt(t,Re))){throw"abort";}}function i(){var t=F.location.protocol;if("http:"!=t&&"https:"!=t){throw"abort";}}function o(e){try{G.navigator.sendBeacon?t(42):G.XMLHttpRequest&&"withCredentials" in new G.XMLHttpRequest&&t(40);}catch(t){}e.set(pe,x(e),!0),e.set(jt,ft(e,jt)+1);var n=[];ut.map(function(t,i){if(i.F){var o=e.get(t);void 0!=o&&o!=i.defaultValue&&("boolean"==typeof o&&(o*=1),n.push(i.F+"="+D(""+o)));}}),n.push("z="+st()),e.set(Lt,n.join("&"),!0);}function r(t){var e=dt(t,Ye)||Z()+"/collect",n=dt(t,Pt);if(!n&&t.get(Mt)&&(n="beacon"),n){var i=dt(t,Lt),o=t.get(Ct),o=o||j;"image"==n?tt(e,i,o):"xhr"==n&&et(e,i,o)||"beacon"==n&&nt(e,i,o)||Q(e,i,o);}else{Q(e,dt(t,Lt),t.get(Ct));}e=t.get(Re),e=ot(e),n=e.hitcount,e.hitcount=n?n+1:1,e=t.get(Re),delete ot(e).pending_experiments,t.set(Ct,j,!0);}function a(t){(G.gaData=G.gaData||{}).expId&&t.set(se,(G.gaData=G.gaData||{}).expId),(G.gaData=G.gaData||{}).expVar&&t.set(ce,(G.gaData=G.gaData||{}).expVar);var e,n=t.get(Re);if(n=ot(n).pending_experiments){var i=[];for(e in n){n.hasOwnProperty(e)&&n[e]&&i.push(encodeURIComponent(e)+"."+encodeURIComponent(n[e]));}e=i.join("!");}else{e=void 0;}e&&t.set(ue,e,!0);}function s(){if(G.navigator&&"preview"==G.navigator.loadPurpose){throw"abort";}}function c(t){var e=G.gaDevIds;A(e)&&0!=e.length&&t.set("&did",e.join(","),!0);}function u(t){if(!t.get(Re)){throw"abort";}}function l(e){var n=ft(e,he);500<=n&&t(15);var i=dt(e,At);if("transaction"!=i&&"item"!=i){var i=ft(e,ve),o=(new Date).getTime(),r=ft(e,ge);if(0==r&&e.set(ge,o),r=Math.round(2*(o-r)/1000),0<r&&(i=Math.min(i+r,20),e.set(ge,o)),0>=i){throw"abort";}e.set(ve,--i);}e.set(he,++n);}function d(e,n,i,o){n[e]=function(){try{return o&&t(o),i.apply(this,arguments);}catch(t){throw it("exc",e,t&&t.name),t;}};}function f(){var t,e,n;if((n=(n=G.navigator)?n.plugins:null)&&n.length){for(var i=0;i<n.length&&!e;i++){var o=n[i];-1<o.name.indexOf("Shockwave Flash")&&(e=o.description);}}if(!e){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),e=t.GetVariable("$version");}catch(t){}}if(!e){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),e="WIN 6,0,21,0",t.AllowScriptAccess="always",e=t.GetVariable("$version");}catch(t){}}if(!e){try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),e=t.GetVariable("$version");}catch(t){}}return e&&(t=e.match(/[\d]+/g))&&3<=t.length&&(e=t[0]+"."+t[1]+" r"+t[2]),e||void 0;}function h(t,e,n){"none"==e&&(e="");var i=[],o=z(t);t="__utma"==t?6:2;for(var r=0;r<o.length;r++){var a=(""+o[r]).split(".");a.length>=t&&i.push({hash:a[0],R:o[r],O:a});}if(0!=i.length){return 1==i.length?i[0]:g(e,i)||g(n,i)||g(null,i)||i[0];}}function g(t,e){var n,i;null==t?n=i=1:(n=y(t),i=y(L(t,".")?t.substring(1):"."+t));for(var o=0;o<e.length;o++){if(e[o].hash==n||e[o].hash==i){return e[o];}}}function v(t){return t=t.get(Ue),"_ga=1."+D(p(t,0)+"."+t);}function p(t,e){for(var n=new Date,i=G.navigator,o=i.plugins||[],n=[t,i.userAgent,n.getTimezoneOffset(),n.getYear(),n.getDate(),n.getHours(),n.getMinutes()+e],i=0;i<o.length;++i){n.push(o[i].description);}return y(n.join("."));}function m(t,e){if(e==F.location.hostname){return !1;}for(var n=0;n<t.length;n++){if(t[n] instanceof RegExp){if(t[n].test(e)){return !0;}}else{if(0<=e.indexOf(t[n])){return !0;}}}return !1;}function w(t){return 0<=t.indexOf(".")||0<=t.indexOf(":");}function y(t){var e,n,i=1;if(t){for(i=0,n=t.length-1;0<=n;n--){e=t.charCodeAt(n),i=(i<<6&268435455)+e+(e<<14),e=266338304&i,i=0!=e?i^e>>21:i;}}return i;}var b=function(t){this.w=t||[];};b.prototype.set=function(t){this.w[t]=!0;},b.prototype.encode=function(){for(var t=[],e=0;e<this.w.length;e++){this.w[e]&&(t[Math.floor(e/6)]^=1<<e%6);}for(e=0;e<t.length;e++){t[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e]||0);}return t.join("")+"~";};var k=new b,_=function(t,e){var n=new b(O(t));n.set(e),t.set(me,n.w);},x=function(t){t=O(t),t=new b(t);for(var e=k.w.slice(),n=0;n<t.w.length;n++){e[n]=e[n]||t.w[n];}return new b(e).encode();},O=function(t){return t=t.get(me),A(t)||(t=[]),t;},S=function(t){return"function"==typeof t;},A=function(t){return"[object Array]"==Object.prototype.toString.call(Object(t));},C=function(t){return void 0!=t&&-1<(t.constructor+"").indexOf("String");},L=function(t,e){return 0==t.indexOf(e);},M=function(t){return t?t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):"";},P=function(t){var e=F.createElement("img");return e.width=1,e.height=1,e.src=t,e;},j=function(){},D=function(e){return encodeURIComponent instanceof Function?encodeURIComponent(e):(t(28),e);},I=function(e,n,i,o){try{e.addEventListener?e.addEventListener(n,i,!!o):e.attachEvent&&e.attachEvent("on"+n,i);}catch(e){t(27);}},U=/^[\w\-:\/.?=&%!]+$/,E=function(t,e,n){t&&(n?(n="",e&&U.test(e)&&(n=' id="'+e+'"'),U.test(t)&&F.write("<script"+n+' src="'+t+'"><\/script>')):(n=F.createElement("script"),n.type="text/javascript",n.async=!0,n.src=t,e&&(n.id=e),t=F.getElementsByTagName("script")[0],t.parentNode.insertBefore(n,t)));},T=function(){return"https:"==F.location.protocol;},R=function(t,e){var n=t.match("(?:&|#|\\?)"+D(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")+"=([^&#]*)");return n&&2==n.length?n[1]:"";},N=function(){var t=""+F.location.hostname;return 0==t.indexOf("www.")?t.substring(4):t;},V=function(t){var e=F.referrer;if(/^https?:\/\//i.test(e)){if(t){return e;}t="//"+F.location.hostname;var n=e.indexOf(t);if(!(5!=n&&6!=n||"/"!=(t=e.charAt(n+t.length))&&"?"!=t&&""!=t&&":"!=t)){return;}return e;}},q=function(t,e){if(1==e.length&&null!=e[0]&&"object"==typeof e[0]){return e[0];}for(var n={},i=Math.min(t.length+1,e.length),o=0;o<i;o++){if("object"==typeof e[o]){for(var r in e[o]){e[o].hasOwnProperty(r)&&(n[r]=e[o][r]);}break;}o<t.length&&(n[t[o]]=e[o]);}return n;},B=function(){this.keys=[],this.values={},this.m={};};B.prototype.set=function(t,e,n){this.keys.push(t),n?this.m[":"+t]=e:this.values[":"+t]=e;},B.prototype.get=function(t){return this.m.hasOwnProperty(":"+t)?this.m[":"+t]:this.values[":"+t];},B.prototype.map=function(t){for(var e=0;e<this.keys.length;e++){var n=this.keys[e],i=this.get(n);i&&t(n,i);}};var G=window,F=document,$=window,H=function(t){var e=$._gaUserPrefs;if(e&&e.ioo&&e.ioo()||t&&!0===$["ga-disable-"+t]){return !0;}try{var n=$.external;if(n&&n._gaUserPrefs&&"oo"==n._gaUserPrefs){return !0;}}catch(t){}return !1;},z=function(t){var e=[],n=F.cookie.split(";");t=new RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var i=0;i<n.length;i++){var o=n[i].match(t);o&&e.push(o[1]);}return e;},X=function(e,n,i,o,r,a){if(!(r=!H(r)&&!(Y.test(F.location.hostname)||"/"==i&&K.test(o)))){return !1;}if(n&&1200<n.length&&(n=n.substring(0,1200),t(24)),i=e+"="+n+"; path="+i+"; ",a&&(i+="expires="+new Date((new Date).getTime()+a).toGMTString()+"; "),o&&"none"!=o&&(i+="domain="+o+";"),o=F.cookie,F.cookie=i,!(o=o!=F.cookie)){t:{for(e=z(e),o=0;o<e.length;o++){if(n==e[o]){o=!0;break t;}}o=!1;}}return o;},W=function(t){return D(t).replace(/\(/g,"%28").replace(/\)/g,"%29");},K=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Y=/(^|\.)doubleclick\.net$/i,Z=function(){return(_t||T()?"https:":"http:")+"//www.google-analytics.com";},J=function(t){this.name="len",this.message=t+"-8192";},Q=function(t,e,n){if(n=n||j,2036>=e.length){tt(t,e,n);}else{if(!(8192>=e.length)){throw it("len",e.length),new J(e.length);}nt(t,e,n)||et(t,e,n)||tt(t,e,n);}},tt=function(t,e,n){var i=P(t+"?"+e);i.onload=i.onerror=function(){i.onload=null,i.onerror=null,n();};},et=function(t,e,n){var i=G.XMLHttpRequest;if(!i){return !1;}var o=new i;return"withCredentials" in o&&(o.open("POST",t,!0),o.withCredentials=!0,o.setRequestHeader("Content-Type","text/plain"),o.onreadystatechange=function(){4==o.readyState&&(n(),o=null);},o.send(e),!0);},nt=function(t,e,n){return !!G.navigator.sendBeacon&&(!!G.navigator.sendBeacon(t,e)&&(n(),!0));},it=function(t,e,n){1<=100*Math.random()||H("?")||(t=["t=error","_e="+t,"_v=j47","sr=1"],e&&t.push("_f="+e),n&&t.push("_m="+D(n.substring(0,100))),t.push("aip=1"),t.push("z="+at()),tt(Z()+"/collect",t.join("&"),j));},ot=function(t){var e=G.gaData=G.gaData||{};return e[t]=e[t]||{};},rt=function(){this.M=[];};rt.prototype.add=function(t){this.M.push(t);},rt.prototype.D=function(t){try{for(var e=0;e<this.M.length;e++){var n=t.get(this.M[e]);n&&S(n)&&n.call(G,t);}}catch(t){}(e=t.get(Ct))!=j&&S(e)&&(t.set(Ct,j,!0),setTimeout(e,10));};var at=function(){return Math.round(2147483647*Math.random());},st=function(){try{var t=new Uint32Array(1);return G.crypto.getRandomValues(t),2147483647&t[0];}catch(t){return at();}},ct=function(){this.data=new B;},ut=new B,lt=[];ct.prototype.get=function(t){var e=vt(t),n=this.data.get(t);return e&&void 0==n&&(n=S(e.defaultValue)?e.defaultValue():e.defaultValue),e&&e.Z?e.Z(this,t,n):n;};var dt=function(t,e){var n=t.get(e);return void 0==n?"":""+n;},ft=function(t,e){var n=t.get(e);return void 0==n||""===n?0:1*n;};ct.prototype.set=function(t,e,n){if(t){if("object"==typeof t){for(var i in t){t.hasOwnProperty(i)&&ht(this,i,t[i],n);}}else{ht(this,t,e,n);}}};var ht=function(t,e,n,i){if(void 0!=n){switch(e){case Re:Un.test(n);}}var o=vt(e);o&&o.o?o.o(t,e,n,i):t.data.set(e,n,i);},gt=function(t,e,n,i,o){this.name=t,this.F=e,this.Z=i,this.o=o,this.defaultValue=n;},vt=function(t){var e=ut.get(t);if(!e){for(var n=0;n<lt.length;n++){var i=lt[n],o=i[0].exec(t);if(o){e=i[1](o),ut.set(e.name,e);break;}}}return e;},pt=function(t){var e;return ut.map(function(n,i){i.F==t&&(e=i);}),e&&e.name;},mt=function(t,e,n,i,o){return t=new gt(t,e,n,i,o),ut.set(t.name,t),t.name;},wt=function(t,e){lt.push([new RegExp("^"+t+"$"),e]);},yt=function(t,e,n){return mt(t,e,n,void 0,bt);},bt=function(){},kt=C(window.GoogleAnalyticsObject)&&M(window.GoogleAnalyticsObject)||"ga",_t=!1,xt=yt("apiVersion","v"),Ot=yt("clientVersion","_v");mt("anonymizeIp","aip");var St=mt("adSenseId","a"),At=mt("hitType","t"),Ct=mt("hitCallback"),Lt=mt("hitPayload");mt("nonInteraction","ni"),mt("currencyCode","cu"),mt("dataSource","ds");var Mt=mt("useBeacon",void 0,!1),Pt=mt("transport");mt("sessionControl","sc",""),mt("sessionGroup","sg"),mt("queueTime","qt");var jt=mt("_s","_s");mt("screenName","cd");var Dt=mt("location","dl",""),It=mt("referrer","dr"),Ut=mt("page","dp","");mt("hostname","dh");var Et=mt("language","ul"),Tt=mt("encoding","de");mt("title","dt",function(){return F.title||void 0;}),wt("contentGroup([0-9]+)",function(t){return new gt(t[0],"cg"+t[1]);});var Rt=mt("screenColors","sd"),Nt=mt("screenResolution","sr"),Vt=mt("viewportSize","vp"),qt=mt("javaEnabled","je"),Bt=mt("flashVersion","fl");mt("campaignId","ci"),mt("campaignName","cn"),mt("campaignSource","cs"),mt("campaignMedium","cm"),mt("campaignKeyword","ck"),mt("campaignContent","cc");var Gt=mt("eventCategory","ec"),Ft=mt("eventAction","ea"),$t=mt("eventLabel","el"),Ht=mt("eventValue","ev"),zt=mt("socialNetwork","sn"),Xt=mt("socialAction","sa"),Wt=mt("socialTarget","st"),Kt=mt("l1","plt"),Yt=mt("l2","pdt"),Zt=mt("l3","dns"),Jt=mt("l4","rrt"),Qt=mt("l5","srt"),te=mt("l6","tcp"),ee=mt("l7","dit"),ne=mt("l8","clt"),ie=mt("timingCategory","utc"),oe=mt("timingVar","utv"),re=mt("timingLabel","utl"),ae=mt("timingValue","utt");mt("appName","an"),mt("appVersion","av",""),mt("appId","aid",""),mt("appInstallerId","aiid",""),mt("exDescription","exd"),mt("exFatal","exf");var se=mt("expId","xid"),ce=mt("expVar","xvar"),ue=mt("exp","exp"),le=mt("_utma","_utma"),de=mt("_utmz","_utmz"),fe=mt("_utmht","_utmht"),he=mt("_hc",void 0,0),ge=mt("_ti",void 0,0),ve=mt("_to",void 0,20);wt("dimension([0-9]+)",function(t){return new gt(t[0],"cd"+t[1]);}),wt("metric([0-9]+)",function(t){return new gt(t[0],"cm"+t[1]);}),mt("linkerParam",void 0,void 0,v,bt);var pe=mt("usage","_u"),me=mt("_um");mt("forceSSL",void 0,void 0,function(){return _t;},function(e,n,i){t(34),_t=!!i;});var we=mt("_j1","jid");wt("\\&(.*)",function(t){var e=new gt(t[0],t[1]),n=pt(t[0].substring(1));return n&&(e.Z=function(t){return t.get(n);},e.o=function(t,e,i,o){t.set(n,i,o);},e.F=void 0),e;});var ye=yt("_oot"),be=mt("previewTask"),ke=mt("checkProtocolTask"),_e=mt("validationTask"),xe=mt("checkStorageTask"),Oe=mt("historyImportTask"),Se=mt("samplerTask"),Ae=mt("_rlt"),Ce=mt("buildHitTask"),Le=mt("sendHitTask"),Me=mt("ceTask"),Pe=mt("devIdTask"),je=mt("timingTask"),De=mt("displayFeaturesTask"),Ie=yt("name"),Ue=yt("clientId","cid"),Ee=yt("clientIdTime"),Te=mt("userId","uid"),Re=yt("trackingId","tid"),Ne=yt("cookieName",void 0,"_ga"),Ve=yt("cookieDomain"),qe=yt("cookiePath",void 0,"/"),Be=yt("cookieExpires",void 0,63072000),Ge=yt("legacyCookieDomain"),Fe=yt("legacyHistoryImport",void 0,!0),$e=yt("storage",void 0,"cookie"),He=yt("allowLinker",void 0,!1),ze=yt("allowAnchor",void 0,!0),Xe=yt("sampleRate","sf",100),We=yt("siteSpeedSampleRate",void 0,1),Ke=yt("alwaysSendReferrer",void 0,!1),Ye=mt("transportUrl"),Ze=mt("_r","_r"),Je=function(t){this.V=t,this.fa=void 0,this.$=!1,this.oa=void 0,this.ea=1;},Qe=function(t,e){var n;if(t.fa&&t.$){return 0;}if(t.$=!0,e){if(t.oa&&ft(e,t.oa)){return ft(e,t.oa);}if(0==e.get(We)){return 0;}}return 0==t.V?0:(void 0===n&&(n=st()),0==n%t.V?Math.floor(n/t.V)%t.ea+1:0);},tn=function(t){var e=Math.min(ft(t,We),100);return !(y(dt(t,Ue))%100>=e);},en=function(t){var e={};if(nn(e)||on(e)){var n=e[Kt];void 0==n||1/0==n||isNaN(n)||(0<n?(rn(e,Zt),rn(e,te),rn(e,Qt),rn(e,Yt),rn(e,Jt),rn(e,ee),rn(e,ne),t(e)):I(G,"load",function(){en(t);},!1));}},nn=function(t){var e=G.performance||G.webkitPerformance,e=e&&e.timing;if(!e){return !1;}var n=e.navigationStart;return 0!=n&&(t[Kt]=e.loadEventStart-n,t[Zt]=e.domainLookupEnd-e.domainLookupStart,t[te]=e.connectEnd-e.connectStart,t[Qt]=e.responseStart-e.requestStart,t[Yt]=e.responseEnd-e.responseStart,t[Jt]=e.fetchStart-n,t[ee]=e.domInteractive-n,t[ne]=e.domContentLoadedEventStart-n,!0);},on=function(t){if(G.top!=G){return !1;}var e=G.external,n=e&&e.onloadT;return e&&!e.isValidLoadTime&&(n=void 0),2147483648<n&&(n=void 0),0<n&&e.setPageReadyTime(),void 0!=n&&(t[Kt]=n,!0);},rn=function(t,e){var n=t[e];(isNaN(n)||1/0==n||0>n)&&(t[e]=void 0);},an=function(t){return function(e){if("pageview"==e.get(At)&&!t.I){t.I=!0;var n=tn(e);e=0<R(e.get(Dt),"gclid").length,(n||e)&&en(function(e){t.send(n?"timing":"adtiming",e);});}};},sn=!1,cn=function(e){if("cookie"==dt(e,$e)){var n=dt(e,Ne),i=dn(e),o=gn(dt(e,qe)),r=hn(dt(e,Ve)),a=1000*ft(e,Be),s=dt(e,Re);if("auto"!=r){X(n,i,o,r,s,a)&&(sn=!0);}else{t(32);var c;if(i=[],r=N().split("."),4!=r.length||(c=r[r.length-1],parseInt(c,10)!=c)){for(c=r.length-2;0<=c;c--){i.push(r.slice(c).join("."));}i.push("none"),c=i;}else{c=["none"];}for(var u=0;u<c.length;u++){if(r=c[u],e.data.set(Ve,r),i=dn(e),X(n,i,o,r,s,a)){return void (sn=!0);}}e.data.set(Ve,"auto");}}},un=function(t){if("cookie"==dt(t,$e)&&!sn&&(cn(t),!sn)){throw"abort";}},ln=function(e){if(e.get(Fe)){var n=dt(e,Ve),i=dt(e,Ge)||N(),o=h("__utma",i,n);o&&(t(19),e.set(fe,(new Date).getTime(),!0),e.set(le,o.R),(n=h("__utmz",i,n))&&o.hash==n.hash&&e.set(de,n.R));}},dn=function(t){var e=W(dt(t,Ue)),n=hn(dt(t,Ve)).split(".").length;return t=vn(dt(t,qe)),1<t&&(n+="-"+t),["GA1",n,e].join(".");},fn=function(t,e,n){for(var i,o=[],r=[],a=0;a<t.length;a++){var s=t[a];s.H[n]==e?o.push(s):void 0==i||s.H[n]<i?(r=[s],i=s.H[n]):s.H[n]==i&&r.push(s);}return 0<o.length?o:r;},hn=function(t){return 0==t.indexOf(".")?t.substr(1):t;},gn=function(t){return t?(1<t.length&&t.lastIndexOf("/")==t.length-1&&(t=t.substr(0,t.length-1)),0!=t.indexOf("/")&&(t="/"+t),t):"/";},vn=function(t){return t=gn(t),"/"==t?1:t.split("/").length;},pn=new RegExp(/^https?:\/\/([^\/:]+)/),mn=/(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,wn=function(e){t(48),this.target=e,this.T=!1;};wn.prototype.ca=function(t,e){if(t.tagName){if("a"==t.tagName.toLowerCase()){return void (t.href&&(t.href=yn(this,t.href,e)));}if("form"==t.tagName.toLowerCase()){return bn(this,t);}}if("string"==typeof t){return yn(this,t,e);}};var yn=function(t,e,n){var i=mn.exec(e);i&&3<=i.length&&(e=i[1]+(i[3]?i[2]+i[3]:"")),t=t.target.get("linkerParam");var o=e.indexOf("?"),i=e.indexOf("#");return n?e+=(-1==i?"#":"&")+t:(n=-1==o?"?":"&",e=-1==i?e+(n+t):e.substring(0,i)+n+t+e.substring(i)),e=e.replace(/&+_ga=/,"&_ga=");},bn=function(t,e){if(e&&e.action){var n=t.target.get("linkerParam").split("=")[1];if("get"==e.method.toLowerCase()){for(var i=e.childNodes||[],o=0;o<i.length;o++){if("_ga"==i[o].name){return void i[o].setAttribute("value",n);}}i=F.createElement("input"),i.setAttribute("type","hidden"),i.setAttribute("name","_ga"),i.setAttribute("value",n),e.appendChild(i);}else{"post"==e.method.toLowerCase()&&(e.action=yn(t,e.action));}}};wn.prototype.S=function(e,n,i){function o(i){try{i=i||G.event;var o;t:{var a=i.target||i.srcElement;for(i=100;a&&0<i;){if(a.href&&a.nodeName.match(/^a(?:rea)?$/i)){o=a;break t;}a=a.parentNode,i--;}o={};}("http:"==o.protocol||"https:"==o.protocol)&&m(e,o.hostname||"")&&o.href&&(o.href=yn(r,o.href,n));}catch(e){t(26);}}var r=this;this.T||(this.T=!0,I(F,"mousedown",o,!1),I(F,"keyup",o,!1)),i&&I(F,"submit",function(t){if(t=t||G.event,(t=t.target||t.srcElement)&&t.action){var n=t.action.match(pn);n&&m(e,n[1])&&bn(r,t);}});};var kn,_n=/^(GTM|OPT)-[A-Z0-9]+$/,xn=function(t){function e(t,e){e&&(n+="&"+t+"="+D(e));}var n="https://www.google-analytics.com/gtm/js?id="+D(t.id);return"dataLayer"!=t.B&&e("l",t.B),e("t",t.target),e("cid",t.ja),e("cidt",t.ka),e("gac",t.la),e("aip",t.ia),t.na&&e("m","sync"),e("cycle",t.G),n;},On=function(e,n,i){this.U=we,this.aa=n,(n=i)||(n=(n=dt(e,Ie))&&"t0"!=n?Mn.test(n)?"_gat_"+W(dt(e,Re)):"_gat_"+W(n):"_gat"),this.Y=n,Qe(new Je(100),e)&&(t(30),this.pa=!0);},Sn=function(t,e){var n=e.get(Ce);e.set(Ce,function(e){An(t,e);var i=n(e);return Cn(t,e),i;});var i=e.get(Le);e.set(Le,function(e){var n=i(e);return Ln(t,e),n;});},An=function(t,e){e.get(t.U)||("1"==z(t.Y)[0]?e.set(t.U,"",!0):e.set(t.U,""+at(),!0));},Cn=function(t,e){if(e.get(t.U)){var n=600000;t.pa&&(n/=10),X(t.Y,"1",e.get(qe),e.get(Ve),e.get(Re),n);}},Ln=function(t,e){if(e.get(t.U)){var n=new B,i=function(t){vt(t).F&&n.set(vt(t).F,e.get(t));};i(xt),i(Ot),i(Re),i(Ue),i(Te),i(t.U),n.set(vt(pe).F,x(e));var o=t.aa;n.map(function(t,e){o+=D(t)+"=",o+=D(""+e)+"&";}),o+="z="+at(),P(o),e.set(t.U,"",!0);}},Mn=/^gtm\d+$/,Pn=function(t,e){var n=t.b;if(!n.get("dcLoaded")){_(n,29),e=e||{};var i;e[Ne]&&(i=W(e[Ne])),i=new On(n,"https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&",i),Sn(i,n),n.set("dcLoaded",!0);}},jn=function(t){if(!t.get("dcLoaded")&&"cookie"==t.get($e)){_(t,51);var e=new On(t);An(e,t),Cn(e,t),t.get(e.U)&&(t.set(Ze,1,!0),t.set(Ye,Z()+"/r/collect",!0));}},Dn=function(){var t=G.gaGlobal=G.gaGlobal||{};return t.hid=t.hid||at();},In=function(t,e,n){if(!kn){var i;i=F.location.hash;var o=G.name,r=/^#?gaso=([^&]*)/;(o=(i=(i=i&&i.match(r)||o&&o.match(r))?i[1]:z("GASO")[0]||"")&&i.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(X("GASO",""+i,n,e,t,0),window._udo||(window._udo=e),window._utcp||(window._utcp=n),t=o[1],E("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+at(),"_gasojs")),kn=!0;}},Un=/^(UA|YT|MO|GP)-(\d+)-(\d+)$/,En=function(t){function d(t,e){h.b.data.set(t,e);}function f(t,e){d(t,e),h.filters.add(t);}var h=this;this.b=new ct,this.filters=new rt,d(Ie,t[Ie]),d(Re,M(t[Re])),d(Ne,t[Ne]),d(Ve,t[Ve]||N()),d(qe,t[qe]),d(Be,t[Be]),d(Ge,t[Ge]),d(Fe,t[Fe]),d(He,t[He]),d(ze,t[ze]),d(Xe,t[Xe]),d(We,t[We]),d(Ke,t[Ke]),d($e,t[$e]),d(Te,t[Te]),d(Ee,t[Ee]),d(xt,1),d(Ot,"j47"),f(ye,n),f(be,s),f(ke,i),f(_e,u),f(xe,un),f(Oe,ln),f(Se,e),f(Ae,l),f(Me,a),f(Pe,c),f(De,jn),f(Ce,o),f(Le,r),f(je,an(this)),Tn(this.b,t[Ue]),Rn(this.b),this.b.set(St,Dn()),In(this.b.get(Re),this.b.get(Ve),this.b.get(qe));},Tn=function(e,n){if("cookie"==dt(e,$e)){sn=!1;var i;t:{var o=z(dt(e,Ne));if(o&&!(1>o.length)){i=[];for(var r=0;r<o.length;r++){var a;a=o[r].split(".");var s=a.shift();("GA1"==s||"1"==s)&&1<a.length?(s=a.shift().split("-"),1==s.length&&(s[1]="1"),s[0]*=1,s[1]*=1,a={H:s,s:a.join(".")}):a=void 0,a&&i.push(a);}if(1==i.length){t(13),i=i[0].s;break t;}if(0!=i.length){if(t(14),o=hn(dt(e,Ve)).split(".").length,i=fn(i,o,0),1==i.length){i=i[0].s;break t;}o=vn(dt(e,qe)),i=fn(i,o,1),i=i[0]&&i[0].s;break t;}t(12);}i=void 0;}i||(i=dt(e,Ve),o=dt(e,Ge)||N(),i=h("__utma",o,i),void 0!=i?(t(10),i=i.O[1]+"."+i.O[2]):i=void 0),i&&(e.data.set(Ue,i),sn=!0);}if(i=e.get(ze),(r=R(F.location[i?"href":"search"],"_ga"))&&(e.get(He)?(i=r.indexOf("."),-1==i?t(22):(o=r.substring(i+1),"1"!=r.substring(0,i)?t(22):(i=o.indexOf("."),-1==i?t(22):(r=o.substring(0,i),i=o.substring(i+1),r!=p(i,0)&&r!=p(i,-1)&&r!=p(i,-2)?t(23):(t(11),e.data.set(Ue,i)))))):t(21)),n&&(t(9),e.data.set(Ue,D(n))),!e.get(Ue)){if(i=(i=G.gaGlobal&&G.gaGlobal.vid)&&-1!=i.search(/^(?:utma\.)?\d+\.\d+$/)?i:void 0){t(17),e.data.set(Ue,i);}else{for(t(8),i=G.navigator.userAgent+(F.cookie?F.cookie:"")+(F.referrer?F.referrer:""),o=i.length,r=G.history.length;0<r;){i+=r--^o++;}e.data.set(Ue,[at()^2147483647&y(i),Math.round((new Date).getTime()/1000)].join("."));}}cn(e);},Rn=function(e){var n=G.navigator,i=G.screen,o=F.location;if(e.set(It,V(e.get(Ke))),o){var r=o.pathname||"";"/"!=r.charAt(0)&&(t(31),r="/"+r),e.set(Dt,o.protocol+"//"+o.hostname+r+o.search);}i&&e.set(Nt,i.width+"x"+i.height),i&&e.set(Rt,i.colorDepth+"-bit");var i=F.documentElement,a=(r=F.body)&&r.clientWidth&&r.clientHeight,s=[];if(i&&i.clientWidth&&i.clientHeight&&("CSS1Compat"===F.compatMode||!a)?s=[i.clientWidth,i.clientHeight]:a&&(s=[r.clientWidth,r.clientHeight]),i=0>=s[0]||0>=s[1]?"":s.join("x"),e.set(Vt,i),e.set(Bt,f()),e.set(Tt,F.characterSet||F.charset),e.set(qt,n&&"function"==typeof n.javaEnabled&&n.javaEnabled()||!1),e.set(Et,(n&&(n.language||n.browserLanguage)||"").toLowerCase()),o&&e.get(ze)&&(n=F.location.hash)){for(n=n.split(/[?&#]+/),o=[],i=0;i<n.length;++i){(L(n[i],"utm_id")||L(n[i],"utm_campaign")||L(n[i],"utm_source")||L(n[i],"utm_medium")||L(n[i],"utm_term")||L(n[i],"utm_content")||L(n[i],"gclid")||L(n[i],"dclid")||L(n[i],"gclsrc"))&&o.push(n[i]);}0<o.length&&(n="#"+o.join("&"),e.set(Dt,e.get(Dt)+n));}};En.prototype.get=function(t){return this.b.get(t);},En.prototype.set=function(t,e){this.b.set(t,e);};var Nn={pageview:[Ut],event:[Gt,Ft,$t,Ht],social:[zt,Xt,Wt],timing:[ie,oe,ae,re]};En.prototype.send=function(t){if(!(1>arguments.length)){var e,n;"string"==typeof arguments[0]?(e=arguments[0],n=[].slice.call(arguments,1)):(e=arguments[0]&&arguments[0][At],n=arguments),e&&(n=q(Nn[e]||[],n),n[At]=e,this.b.set(n,void 0,!0),this.filters.D(this.b),this.b.data.m={});}},En.prototype.ma=function(t,e){var n=this;Xn(t,n,e)||(Kn(t,function(){Xn(t,n,e);}),Wn(String(n.get(Ie)),t,void 0,e,!0));};var Vn,qn,Bn,Gn,Fn=function(t){return"prerender"!=F.visibilityState&&(t(),!0);},$n=function(e){if(!Fn(e)){t(16);var n=!1,i=function(){if(!n&&Fn(e)){n=!0;var t=i,o=F;o.removeEventListener?o.removeEventListener("visibilitychange",t,!1):o.detachEvent&&o.detachEvent("onvisibilitychange",t);}};I(F,"visibilitychange",i);}},Hn=/^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,zn=function(t){if(S(t[0])){this.u=t[0];}else{var e=Hn.exec(t[0]);if(null!=e&&4==e.length&&(this.c=e[1]||"t0",this.K=e[2]||"",this.C=e[3],this.a=[].slice.call(t,1),this.K||(this.A="create"==this.C,this.i="require"==this.C,this.g="provide"==this.C,this.ba="remove"==this.C),this.i&&(3<=this.a.length?(this.X=this.a[1],this.W=this.a[2]):this.a[1]&&(C(this.a[1])?this.X=this.a[1]:this.W=this.a[1]))),e=t[1],t=t[2],!this.C){throw"abort";}if(this.i&&(!C(e)||""==e)){throw"abort";}if(this.g&&(!C(e)||""==e||!S(t))){throw"abort";}if(w(this.c)||w(this.K)){throw"abort";}if(this.g&&"t0"!=this.c){throw"abort";}}};Vn=new B,Bn=new B,Gn=new B,qn={ec:45,ecommerce:46,linkid:47};var Xn=function(t,e,n){e==ti||e.get(Ie);var i=Vn.get(t);return !!S(i)&&(e.plugins_=e.plugins_||new B,!!e.plugins_.get(t)||(e.plugins_.set(t,new i(e,n||{})),!0));},Wn=function(e,n,i,o,r){if(!S(Vn.get(n))&&!Bn.get(n)){if(qn.hasOwnProperty(n)&&t(qn[n]),_n.test(n)){if(t(52),!(e=ti.j(e))){return !0;}i=o||{},o={id:n,B:i.dataLayer||"dataLayer",ia:!!e.get("anonymizeIp"),na:r,G:!1},e.get("&gtm")==n&&(o.G=!0);var a=String(e.get("name"));"t0"!=a&&(o.target=a),H(String(e.get("trackingId")))||(o.ja=String(e.get(Ue)),o.ka=Number(e.get(Ee)),e=i.palindrome?/;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g:/;_gaexp=[^;]*/g,e=(e=F.cookie.replace(/^|(; +)/g,";").match(e))?e.sort().join("").substring(1):void 0,o.la=e),e=o.B,i=(new Date).getTime(),G[e]=G[e]||[],i={"gtm.start":i},r||(i.event="gtm.js"),G[e].push(i),i=xn(o);}!i&&qn.hasOwnProperty(n)?(t(39),i=n+".js"):t(43),i&&(i&&0<=i.indexOf("/")||(i=(_t||T()?"https:":"http:")+"//www.google-analytics.com/plugins/ua/"+i),o=Jn(i),e=o.protocol,i=F.location.protocol,("https:"==e||e==i||("http:"!=e?0:"http:"==i))&&Zn(o)&&(E(o.url,void 0,r),Bn.set(n,!0)));}},Kn=function(t,e){var n=Gn.get(t)||[];n.push(e),Gn.set(t,n);},Yn=function(t,e){Vn.set(t,e);for(var n=Gn.get(t)||[],i=0;i<n.length;i++){n[i]();}Gn.set(t,[]);},Zn=function(t){var e=Jn(F.location.href);return !!L(t.url,"https://www.google-analytics.com/gtm/js?id=")||!(t.query||0<=t.url.indexOf("?")||0<=t.path.indexOf("://"))&&(t.host==e.host&&t.port==e.port||(e="http:"==t.protocol?80:443,!("www.google-analytics.com"!=t.host||(t.port||e)!=e||!L(t.path,"/plugins/"))));},Jn=function(t){function e(t){var e=(t.hostname||"").split(":")[0].toLowerCase(),n=(t.protocol||"").toLowerCase(),n=1*t.port||("http:"==n?80:"https:"==n?443:"");return t=t.pathname||"",L(t,"/")||(t="/"+t),[e,""+n,t];}var n=F.createElement("a");n.href=F.location.href;var i=(n.protocol||"").toLowerCase(),o=e(n),r=n.search||"",a=i+"//"+o[0]+(o[1]?":"+o[1]:"");return L(t,"//")?t=i+t:L(t,"/")?t=a+t:!t||L(t,"?")?t=a+o[2]+(t||r):0>t.split("/")[0].indexOf(":")&&(t=a+o[2].substring(0,o[2].lastIndexOf("/"))+"/"+t),n.href=t,i=e(n),{protocol:(n.protocol||"").toLowerCase(),host:i[0],port:i[1],path:i[2],query:n.search||"",url:t||""};},Qn={ga:function(){Qn.f=[];}};Qn.ga(),Qn.D=function(t){var e=Qn.J.apply(Qn,arguments),e=Qn.f.concat(e);for(Qn.f=[];0<e.length&&!Qn.v(e[0])&&(e.shift(),!(0<Qn.f.length));){}Qn.f=Qn.f.concat(e);},Qn.J=function(t){for(var e=[],n=0;n<arguments.length;n++){try{var i=new zn(arguments[n]);i.g?Yn(i.a[0],i.a[1]):(i.i&&(i.ha=Wn(i.c,i.a[0],i.X,i.W)),e.push(i));}catch(t){}}return e;},Qn.v=function(t){try{if(t.u){t.u.call(G,ti.j("t0"));}else{var e=t.c==kt?ti:ti.j(t.c);if(t.A){"t0"!=t.c||ti.create.apply(ti,t.a);}else{if(t.ba){ti.remove(t.c);}else{if(e){if(t.i){if(t.ha&&(t.ha=Wn(t.c,t.a[0],t.X,t.W)),!Xn(t.a[0],e,t.W)){return !0;}}else{if(t.K){var n=t.C,i=t.a,o=e.plugins_.get(t.K);o[n].apply(o,i);}else{e[t.C].apply(e,t.a);}}}}}}}catch(t){}};var ti=function(e){t(1),Qn.D.apply(Qn,[arguments]);};ti.h={},ti.P=[],ti.L=0,ti.answer=42;var ei=[Re,Ve,Ie];ti.create=function(t){var e=q(ei,[].slice.call(arguments));e[Ie]||(e[Ie]="t0");var n=""+e[Ie];return ti.h[n]?ti.h[n]:(e=new En(e),ti.h[n]=e,ti.P.push(e),e);},ti.remove=function(t){for(var e=0;e<ti.P.length;e++){if(ti.P[e].get(Ie)==t){ti.P.splice(e,1),ti.h[t]=null;break;}}},ti.j=function(t){return ti.h[t];},ti.getAll=function(){return ti.P.slice(0);},ti.N=function(){"ga"!=kt&&t(49);var e=G[kt];if(!e||42!=e.answer){ti.L=e&&e.l,ti.loaded=!0;var n=G[kt]=ti;if(d("create",n,n.create),d("remove",n,n.remove),d("getByName",n,n.j,5),d("getAll",n,n.getAll,6),n=En.prototype,d("get",n,n.get,7),d("set",n,n.set,4),d("send",n,n.send),d("requireSync",n,n.ma),n=ct.prototype,d("get",n,n.get),d("set",n,n.set),!T()&&!_t){t:{for(var n=F.getElementsByTagName("script"),i=0;i<n.length&&100>i;i++){var o=n[i].src;if(o&&0==o.indexOf("https://www.google-analytics.com/analytics")){t(33),n=!0;break t;}}n=!1;}n&&(_t=!0);}T()||_t||!Qe(new Je(10000))||(t(36),_t=!0),(G.gaplugins=G.gaplugins||{}).Linker=wn,n=wn.prototype,Yn("linker",wn),d("decorate",n,n.ca,20),d("autoLink",n,n.S,25),Yn("displayfeatures",Pn),Yn("adfeatures",Pn),e=e&&e.q,A(e)?Qn.D.apply(ti,e):t(50);}},ti.da=function(){for(var t=ti.getAll(),e=0;e<t.length;e++){t[e].get(Ie);}};var ni=ti.N,ii=G[kt];ii&&ii.r?ni():$n(ni),$n(function(){Qn.D(["provide","render",j]);});}(window);var o={isDefined:function(t){return void 0!==t&&null!==t;},isString:function(t){return void 0!==t&&"string"==typeof t&&this.stringIsNotEmpty(t);},stringIsNotEmpty:function(t){return t=t.replace(/^(\s+)|(\s+)$/gm,"").replace(/\s+/gm," "),t.length>0;},isArray:function(t){return t&&t.constructor===Array;},arrayIsNotEmpty:function(t){return this.isArray(t)&&t.length>0;},isObject:function(t){return t&&t.constructor===Object;},isFunction:function(t){return void 0!==t&&t.constructor===Function;},isNumber:function(t){return Number(t)===t;},isInt:function(t){return this.isNumber(t)&&t%1==0;},isRegExp:function(t){return void 0!==t&&t.constructor===RegExp;},isNumericString:function(t){return this.isString(t)&&!isNaN(t);},isBoolean:function(t){return void 0!==t&&t.constructor==Boolean;},isJson:function(t){try{t=JSON.parse(t);}catch(t){return !1;}return"object"===(void 0===t?"undefined":i(t))&&null!==t;},isUrl:function(t){return/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/gi.test("https://developer.mozilla.org/");},isNotMetric:function(t){return !this.isDefined(t)||!(this.isBoolean(t)||this.isNumber(t)||this.isString(t));}},r={associate:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={},i=void 0,o=void 0;for(o in e){e[o].required&&(i=this.keyValueObject(e[o],t[o]),n=this.extend(n,i));}for(o in t){e.hasOwnProperty(o)&&(i=this.keyValueObject(e[o],t[o]),n=this.extend(n,i));}return n;},keyValueObject:function(t,e){var n={},i=t.keys,r=t.required||!1,a=o.isNotMetric(t.defaultValue)?"none":t.defaultValue;if(e=t.notReplaceStress||!1?e:this.replaceStress(e),e=r&&o.isNotMetric(e)?a:e,!o.isNotMetric(e)){if(o.isArray(i)){for(;i.length;){n[i.shift()]=e;}}else{o.isString(i)&&(n[i]=e);}}return n;},replaceStress:function(t){if(o.isArray(t)||o.isString(t)){var e=void 0,n=void 0,i=void 0,r=void 0,a={a:"A|Á|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Ǎ|Â|Ấ|Ậ|Ầ|Ẩ|Ẫ|Ä|Ǟ|Ȧ|Ǡ|Ạ|Ȁ|À|Ả|Ȃ|Ā|Ą|Å|Ǻ|Ḁ|Ⱥ|Ã|Ɐ|ᴀ|Α|Ά|А|á|ă|ắ|ặ|ằ|ẳ|ẵ|ǎ|â|ấ|ậ|ầ|ẩ|ẫ|ä|ǟ|ȧ|ǡ|ạ|ȁ|à|ả|ȃ|ā|ą|ᶏ|ẚ|å|ǻ|ḁ|ⱥ|ã|ɐ|ₐ|α|ά|а|ª",b:"B|Ḃ|Ḅ|Ɓ|Ḇ|Ƀ|Ƃ|ʙ|ᴃ|Β|Б|ḃ|ḅ|ɓ|ḇ|ᵬ|ᶀ|ƀ|ƃ|β|б",c:"C|Ć|Č|Ç|Ḉ|Ĉ|Ċ|Ƈ|Ȼ|Ꜿ|ᴄ|Ц|ć|č|ç|ḉ|ĉ|ɕ|ċ|ƈ|ȼ|ↄ|ꜿ|ц",d:"D|Ď|Ḑ|Ḓ|Ḋ|Ḍ|Ɗ|Ḏ|ǲ|ǅ|Đ|Ƌ|Ꝺ|ᴅ|Ð|Δ|Д|ď|ḑ|ḓ|ȡ|ḋ|ḍ|ɗ|ᶑ|ḏ|ᵭ|ᶁ|đ|ɖ|ƌ|ꝺ|ð|δ|д|∂",e:"E|É|Ĕ|Ě|Ȩ|Ḝ|Ê|Ế|Ệ|Ề|Ể|Ễ|Ḙ|Ë|Ė|Ẹ|Ȅ|È|Ẻ|Ȇ|Ē|Ḗ|Ḕ|Ɇ|Ẽ|Ḛ|Ɛ|Ǝ|ᴇ|ⱻ|Ε|Έ|Е|Э|Ę|é|ĕ|ě|ȩ|ḝ|ê|ế|ệ|ề|ể|ễ|ḙ|ë|ė|ẹ|ȅ|è|ẻ|ȇ|ē|ḗ|ḕ|ⱸ|ę|ᶒ|ɇ|ẽ|ḛ|ɛ|ᶓ|ɘ|ǝ|ₑ|ε|έ|е|э",f:"F|Ḟ|Ƒ|Ꝼ|ꜰ|Φ|Ф|ḟ|ƒ|ᵮ|ᶂ|ꝼ|φ|ф",g:"G|Ǵ|Ğ|Ǧ|Ģ|Ĝ|Ġ|Ɠ|Ḡ|Ǥ|Ᵹ|ɢ|ʛ|Γ|Г|Ґ|ǵ|ğ|ǧ|ģ|ĝ|ġ|ɠ|ḡ|ᶃ|ǥ|ᵹ|ɡ|ᵷ|γ|г|ґ",h:"H|Ḫ|Ȟ|Ḩ|Ĥ|Ⱨ|Ḧ|Ḣ|Ḥ|Ħ|ʜ|Η|Ή|Х|ḫ|ȟ|ḩ|ĥ|ⱨ|ḧ|ḣ|ḥ|ɦ|ẖ|ħ|ɥ|ʮ|ʯ|η|ή|х",i:"I|Í|Ĭ|Ǐ|Î|Ï|Ḯ|İ|Ị|Ȉ|Ì|Ỉ|Ȋ|Į|Ɨ|Ĩ|Ḭ|ɪ|Ι|Ί|Ϊ|И|І|Ī|ı|í|ĭ|ǐ|î|ï|ḯ|ị|ȉ|ì|ỉ|ȋ|ī|į|ᶖ|ɨ|ĩ|ḭ|ᴉ|ᵢ|ι|ί|ϊ|ΐ|и|і",j:"J|Ĵ|Ɉ|ᴊ|Й|ȷ|ɟ|ʄ|ǰ|ĵ|ʝ|ɉ|ⱼ|й",k:"K|Ḱ|Ǩ|Ⱪ|Ꝃ|Ḳ|Ƙ|Ḵ|Ꝁ|Ꝅ|ᴋ|Κ|К|Ķ|ḱ|ǩ|ķ|ⱪ|ꝃ|ḳ|ƙ|ḵ|ᶄ|ꝁ|ꝅ|ʞ|κ|к",l:"L|Ĺ|Ƚ|Ľ|Ļ|Ḽ|Ḷ|Ḹ|Ⱡ|Ꝉ|Ḻ|Ŀ|Ɫ|ǈ|Ł|Ꞁ|ʟ|ᴌ|Λ|Л|ĺ|ƚ|ɬ|ľ|ļ|ḽ|ȴ|ḷ|ḹ|ⱡ|ꝉ|ḻ|ŀ|ɫ|ᶅ|ɭ|ł|ꞁ|λ|л",m:"M|Ḿ|Ṁ|Ṃ|Ɱ|Ɯ|ᴍ|Μ|М|ḿ|ṁ|ṃ|ɱ|ᵯ|ᶆ|ɯ|ɰ|μ|м",n:"N|Ń|Ň|Ņ|Ṋ|Ṅ|Ṇ|Ǹ|Ɲ|Ṉ|Ƞ|ǋ|Ñ|ɴ|ᴎ|Ν|Н|ń|ň|ņ|ṋ|ȵ|ṅ|ṇ|ǹ|ɲ|ṉ|ƞ|ᵰ|ᶇ|ɳ|ñ|ν|н",o:"O|Ó|Ŏ|Ǒ|Ô|Ố|Ộ|Ồ|Ổ|Ỗ|Ö|Ȫ|Ȯ|Ȱ|Ọ|Ő|Ȍ|Ò|Ỏ|Ơ|Ớ|Ợ|Ờ|Ở|Ỡ|Ȏ|Ꝋ|Ꝍ|Ō|Ṓ|Ṑ|Ɵ|Ǫ|Ǭ|Ø|Ǿ|Õ|Ṍ|Ṏ|Ȭ|Ɔ|ᴏ|ᴐ|Ο|Ό|О|ɵ|ó|ŏ|ǒ|ô|ố|ộ|ồ|ổ|ỗ|ö|ȫ|ȯ|ȱ|ọ|ő|ȍ|ò|ỏ|ơ|ớ|ợ|ờ|ở|ỡ|ȏ|ꝋ|ꝍ|ⱺ|ō|ṓ|ṑ|ǫ|ǭ|ø|ǿ|õ|ṍ|ṏ|ȭ|ɔ|ᶗ|ᴑ|ᴓ|ₒ|ο|ό|о|˚|º",p:"P|Ṕ|Ṗ|Ꝓ|Ƥ|Ꝕ|Ᵽ|Ꝑ|ᴘ|Π|П|ṕ|ṗ|ꝓ|ƥ|ᵱ|ᶈ|ꝕ|ᵽ|ꝑ|π|п",q:"Q|Ꝙ|Ꝗ|ꝙ|ʠ|ɋ|ꝗ",r:"R|Ꞃ|Ŕ|Ř|Ŗ|Ṙ|Ṛ|Ṝ|Ȑ|Ȓ|Ṟ|Ɍ|Ɽ|ʁ|ʀ|ᴙ|ᴚ|Ρ|Р|ꞃ|ŕ|ř|ŗ|ṙ|ṛ|ṝ|ȑ|ɾ|ᵳ|ȓ|ṟ|ɼ|ᵲ|ᶉ|ɍ|ɽ|ɿ|ɹ|ɻ|ɺ|ⱹ|ᵣ|ρ|р",s:"S|Ꞅ|Ś|Ṥ|Š|Ṧ|Ş|Ŝ|Ș|Ṡ|Ṣ|Ṩ|ꜱ|Σ|С|ꞅ|ſ|ẜ|ẛ|ẝ|ś|ṥ|š|ṧ|ş|ŝ|ș|ṡ|ṣ|ṩ|ʂ|ᵴ|ᶊ|ȿ|σ|ς|с",t:"T|Ꞇ|Ť|Ţ|Ṱ|Ț|Ⱦ|Ṫ|Ṭ|Ƭ|Ṯ|Ʈ|Ŧ|ᴛ|Τ|Т|ꞇ|ť|ţ|ṱ|ț|ȶ|ẗ|ⱦ|ṫ|ṭ|ƭ|ṯ|ᵵ|ƫ|ʈ|ŧ|ʇ|τ|т",u:"U|Ú|Ŭ|Ǔ|Û|Ṷ|Ü|Ǘ|Ǚ|Ǜ|Ǖ|Ṳ|Ụ|Ű|Ȕ|Ù|Ủ|Ư|Ứ|Ự|Ừ|Ử|Ữ|Ȗ|Ṻ|Ų|Ů|Ũ|Ṹ|Ṵ|ᴜ|У|Ъ|Ū|ᴝ|ú|ŭ|ǔ|û|ṷ|ü|ǘ|ǚ|ǜ|ǖ|ṳ|ụ|ű|ȕ|ù|ủ|ư|ứ|ự|ừ|ử|ữ|ȗ|ū|ṻ|ų|ᶙ|ů|ũ|ṹ|ṵ|ᵤ|у|ъ",v:"V|Ʌ|Ꝟ|Ṿ|Ʋ|Ṽ|ᴠ|В|ʌ|ⱴ|ꝟ|ṿ|ʋ|ᶌ|ⱱ|ṽ|ᵥ|в",x:"X|Ẍ|Ẋ|Χ|ẍ|ẋ|ᶍ|ₓ|χ",w:"W|Ẃ|Ŵ|Ẅ|Ẇ|Ẉ|Ẁ|Ⱳ|ᴡ|Ω|Ώ|ʍ|ẃ|ŵ|ẅ|ẇ|ẉ|ẁ|ⱳ|ẘ|ω|ώ",y:"Y|Ý|Ŷ|Ÿ|Ẏ|Ỵ|Ỳ|Ƴ|Ỷ|Ỿ|Ȳ|Ɏ|Ỹ|ʏ|Υ|Ύ|Ϋ|Ы|ʎ|ý|ŷ|ÿ|ẏ|ỵ|ỳ|ƴ|ỷ|ỿ|ȳ|ẙ|ɏ|ỹ|υ|ύ|ΰ|ϋ|ы",z:"Z|Ź|Ž|Ẑ|Ⱬ|Ż|Ẓ|Ȥ|Ẕ|Ƶ|ᴢ|Ζ|З|ź|ž|ẑ|ʑ|ⱬ|ż|ẓ|ȥ|ẕ|ᵶ|ᶎ|ʐ|ƶ|ɀ|ζ|з","(c)":"©","(r)":"®",tm:"™",sm:"℠","~":"˜","...":"…",'"':"“|”","'":"‘|’"};for(i in a){if(e=new RegExp(a[i],"g"),o.isArray(t)){for(r=0,n=t.length;r<n;r++){o.isString(t[r])&&(t[r]=t[r].replace(e,i).trim());}}else{o.isString(t)&&(t=t.replace(e,i).trim());}}}return t;},extend:function(t,e){var n={},i=void 0;for(i in t){n[i]=t[i];}for(i in e){n[i]=e[i];}return n;}},a={countMetrics:function(){ga("uolMain.send","pageview");},countMedia:function(t,e){o.isObject(t)&&(e=t.type,t=t.id),t&&e&&ga("uolMain.send","pageview",{dimension9:e,dimension10:t});},countClick:function(t){ga("uolMain.send","event",{eventCategory:t.category||t.component||"none",eventAction:t.action||"none",eventLabel:t.label||t.reference,eventValue:t.value,metric1:1});},countTime:function(){ga("uolMain.send","event",{eventCategory:"countTime",eventAction:"countTime"});}},s={active:!0,init:function(){function t(t,e){var n,o,r,a,s,c="comScore=",u=document,l=u.cookie,d="",f="indexOf",h="substring",g="length",v=2048,p="&ns_",m=window,w=m.encodeURIComponent||escape;if(l[f](c)+1){for(a=0,r=l.split(";"),s=r[g];a<s;a++){(o=r[a][f](c))+1&&(d="&"+unescape(r[a][h](o+c[g])));}}t+=p+"_t="+ +new Date+p+"c="+(u.characterSet||u.defaultCharset||"")+(m===m.top?"":p+"if=1")+"&cv=3.1&c8="+w(u.title)+d+"&c7="+w(u.URL)+"&c9="+w(u.referrer),t[g]>v&&t[f]("&")>0&&(n=t[h](0,v-8).lastIndexOf("&"),t=(t[h](0,n)+p+"cut="+w(t[h](n+1)))[h](0,v)),u.images?(o=new Image,m.ns_p||(i=o),"function"==typeof e&&(o.onload=o.onerror=e),o.src=t):u.write("<","p","><",'img src="',t,'" height="1" width="1" alt="*"',"><","/p",">");}if(!this.active){return !1;}var e=[];e.push({c1:2,c2:"6036356",c3:"",c4:"",c5:"",c6:"",c15:""});var n=void 0,i=void 0;n=i=void 0,void 0===e&&(e=[]),function(){var i,o="length",r=window,a=r.encodeURIComponent?encodeURIComponent:escape,s=function(e){if(e){var n,i,r,s,c=[],u=0,l="";for(var d in e){"string"!=(i=typeof e[d])&&"number"!=i||(c[c[o]]=d+"="+a(e[d]),"c2"==d?l=e[d]:"c1"==d&&(u=1));}if(c[o]<=0||""==l){return;}if(s=e.options||{},s.d=s.d||document,"string"==typeof s.url_append){r=s.url_append.replace(/&amp;/,"&").split("&");for(var f,d=0,h=r[o];d<h;d++){f=r[d].split("="),2==f[o]&&(c[c[o]]=f[0]+"="+a(f[1]));}}n=["s"==s.d.URL.charAt(4)?"//sb":"//b",".scorecardresearch.com/b?",u?"":"c1=2&",c.join("&").replace(/&$/,"")],t(n.join(""));}},c=function(t){t=t||e;for(var n=0,i=t[o];n<i;n++){s(t[n]);}t=e=[];};c(),(i=r.COMSCORE)?(i.purge=c,i.beacon=s):n={purge:c,beacon:s};}();}},c={init:function(){this.location();},location:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.location.href;ga("uolMain.set","location",t);}};ga("create","UA-88298165-10","auto","uolMain"),ga(function(){var t=ga.getByName("uolMain"),e=t.get("previewTask");t.set("previewTask",function(n){e(n),c.init(),"pageview"===t.get("hitType")&&s.init();});}),ga("uolMain.set",{dimension1:"Conteudo",dimension2:"Economia",dimension3:"none"}),window.UOLPD=window.UOLPD||{};var u=void 0;window.UOLPD.Audience2&&window.UOLPD.Audience2.Player&&(u=window.UOLPD.Audience2.Player),window.UOLPD.Audience2=a,u&&(window.UOLPD.Audience2.Player=u),window.hitOmniturePhoto=function(t){UOLPD.Audience2.countMedia(t,"fotos");},window.hitOmniture=function(t,e){UOLPD.Audience2.countMedia(t,e);};var l={dimensionIndex:"XX",storageKey:"adblocker",rollupChannel:"Economia",init:function(t){this.dimensionIndex=t;var e=localStorage.getItem(this.storageKey);"1"==e?ga("uolMain.set","dimension"+this.dimensionIndex,"blocked"):"0"==e&&ga("uolMain.set","dimension"+this.dimensionIndex,"not-blocked"),window.UOLPD.Audience2.countAdBlockerModal=this.countAdBlockerModal,window.UOLPD.Audience2.countRequestBlocked=this.countRequestBlocked,window.UOLPD.Audience2.adblockerModal=this.countAdBlockerModal,window.UOLPD.Audience2.requestBlocked=this.countRequestBlocked;},countAdBlockerModal:function(){var t={eventCategory:"adblocker-modal",eventAction:"adblocker-modal"};t["dimension"+l.dimensionIndex]="adblocker-modal",ga("uolMain.send","event",t);},countRequestBlocked:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"blocked",e=document.createElement("img");e.id="newImgSplunk",e.src="http://logger.rm.uol.com.br/v1/?prd=900&grp=rsid:"+l.rollupChannel+";prop73:"+t+";&msr=Erros:1",e.style.width=0,e.style.height=0,e.style.display="none",document.body.appendChild(e),localStorage.removeItem(l.storageKey);}},d={getValue:function(t){var e=window.universal_variable&&window.universal_variable.aud&&window.universal_variable.aud.hasOwnProperty(t)?window.universal_variable.aud[t]:void 0,n=window.universal_variable&&window.universal_variable.sc&&window.universal_variable.sc.hasOwnProperty(t)?window.universal_variable.sc[t]:void 0;return e||n;},getAll:function(){var t=window.universal_variable&&window.universal_variable.aud?window.universal_variable.aud:void 0,e=window.universal_variable&&window.universal_variable.sc?window.universal_variable.sc:void 0;return t||e;}},f={rollupSite:{keys:"dimension3",notReplaceStress:!0},central:{keys:"dimension5"},channel:{keys:"dimension6"},mediaName:{keys:"dimension10"},abTest:{keys:"dimension17",notReplaceStress:!0},Pageviews:{collection:{keys:"dimension7"},subchannel:{keys:"dimension8"},itemId:{keys:"dimension9",notReplaceStress:!0},mediaId:{keys:"dimension9",notReplaceStress:!0},mediaTitle:{keys:["dimension11","title"]},mediaInteractionView:{keys:"dimension12"},author:{keys:"dimension13"},refStation:{keys:"dimension14"},typePublication:{keys:"dimension15",required:!0,defaultValue:"uol template"},pageURL:{keys:"location",notReplaceStress:!0},referrer:{keys:"referrer",notReplaceStress:!0}},Events:{theme:{keys:"eventCategory"},component:{keys:"eventCategory"},destiny:{keys:"eventAction"},action:{keys:"eventAction"},reference:{keys:"eventLabel"},source:{keys:"location",notReplaceStress:!0},position:{keys:"dimension16"}},Scoreboard:{scoreboardChampionship:{keys:"dimensionA"},scoreboardMatch:{keys:"dimensionB"},scoreboardStadium:{keys:"dimensionC"},scoreboardPlace:{keys:"dimensionD"},scoreboardDate:{keys:"dimensionE"}}},h={override:function(){window.UOLPD.Audience2.countMetrics=this.countMetrics,window.UOLPD.Audience2.countMedia=this.countMedia,window.UOLPD.Audience2.countClick=this.countClick,window.UOLPD.Audience2.clickComponent=this.countClick,window.UOLPD.Audience2.countImpression=function(){};},countMetrics:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.getAll(),e=r.associate(t,f),n=r.associate(t,f.Pageviews);e=r.extend(e,n),ga("uolMain.send","pageview",e);},countMedia:function(t){var e=r.associate(d.getAll(),f),n=r.associate(d.getAll(),f.Pageviews),i=r.associate(t,f),o=r.associate(t,f.Pageviews);t=r.extend(i,o),e=r.extend(e,n),e=r.extend(e,t),ga("uolMain.send","pageview",e);},countClick:function(t){var e=r.associate(t,f),n=r.associate(t,f.Events);e=r.extend(e,n),e=r.extend(e,{metric1:1}),ga("uolMain.send","event",e);}};l.init("18"),h.override();},{}]},{},[1]);