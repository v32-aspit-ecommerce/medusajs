"use strict";(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[624],{78868:(t,e,n)=>{n.r(e),n.d(e,{form:()=>i,link:()=>o});var r=n(83784);function o(t,e,n,o){var i=this,a=[];return t&&(t instanceof Element?a=[t]:a="toArray"in t?t.toArray():t,a.forEach(function(t){t.addEventListener("click",function(a){var u,c,s=e instanceof Function?e(t):e,l=n instanceof Function?n(t):n,f=t.getAttribute("href")||t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("xlink:href")||(null===(u=t.getElementsByTagName("a")[0])||void 0===u?void 0:u.getAttribute("href")),h=(0,r.i0)(i.track(s,l,null!=o?o:{}),null!==(c=i.settings.timeout)&&void 0!==c?c:500);"_blank"===t.target&&f||a.ctrlKey||a.shiftKey||a.metaKey||a.button&&1==a.button||!f||(a.preventDefault?a.preventDefault():a.returnValue=!1,h.catch(console.error).then(function(){window.location.href=f}).catch(console.error))},!1)})),this}function i(t,e,n,o){var i=this;return t&&(t instanceof HTMLFormElement&&(t=[t]),t.forEach(function(t){if(!(t instanceof Element))throw TypeError("Must pass HTMLElement to trackForm/trackSubmit.");var a=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var u,c=e instanceof Function?e(t):e,s=n instanceof Function?n(t):n;(0,r.i0)(i.track(c,s,null!=o?o:{}),null!==(u=i.settings.timeout)&&void 0!==u?u:500).catch(console.error).then(function(){t.submit()}).catch(console.error)},u=window.jQuery||window.Zepto;u?u(t).submit(a):t.addEventListener("submit",a,!1)})),this}}}]);