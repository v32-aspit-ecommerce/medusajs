"use strict";(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[538],{42552:(r,a,e)=>{function s(r,a){return Object.keys(a).reduce(function(e,s){return s.startsWith(r)&&(e[s.substr(r.length)]=a[s]),e},{})}e.r(a),e.d(a,{queryString:()=>u});var t=e(15770),i=e(62321);function u(r,a){var e=document.createElement("a");e.href=a;var u=e.search.slice(1).split("&").reduce(function(r,a){var e=a.split("="),s=e[0],i=e[1];return r[s]=(0,t.p)(i),r},{}),n=[],d=u.ajs_uid,_=u.ajs_event,c=u.ajs_aid,j=(0,i.Qd)(r.options.useQueryString)?r.options.useQueryString:{},o=j.aid,f=j.uid;if(c){var v=Array.isArray(u.ajs_aid)?u.ajs_aid[0]:u.ajs_aid;(void 0===o?/.+/:o).test(v)&&r.setAnonymousId(v)}if(d){var p=Array.isArray(u.ajs_uid)?u.ajs_uid[0]:u.ajs_uid;if((void 0===f?/.+/:f).test(p)){var y=s("ajs_trait_",u);n.push(r.identify(p,y))}}if(_){var l=Array.isArray(u.ajs_event)?u.ajs_event[0]:u.ajs_event,h=s("ajs_prop_",u);n.push(r.track(l,h))}return Promise.all(n)}}}]);