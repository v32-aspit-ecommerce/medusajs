"use strict";(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[896],{97260:(e,t,r)=>{r.d(t,{c:()=>c});var n=r(17624);r(11504);var o=r(56168);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var i={siteMetadata:{title:"Admin",description:"The best ecommerce software.",author:"@medusajs"}};function l(e){var t,r=e.description,l=e.lang,c=e.meta,s=e.title,u=r||i.siteMetadata.description;return(0,n.jsx)(o.So,{htmlAttributes:{lang:l},title:s,titleTemplate:"%s ".concat(i.siteMetadata.title),meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(function(e){if(Array.isArray(e))return a(e)}(t=void 0===c?[]:c)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return a(e,void 0);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})}l.defaultProps={lang:"en",meta:[],description:""};let c=l},11852:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var n=r(17624),o=r(97260),a=r(18280);let i=function(){return(0,n.jsxs)(a.c,{children:[(0,n.jsx)(o.c,{title:"404: Not found"}),(0,n.jsx)("h1",{children:"NOT FOUND"}),(0,n.jsx)("p",{children:"You just hit a route that doesn't exist... the sadness."})]})}},84712:(e,t,r)=>{r.d(t,{I$:()=>b,Ss:()=>A,kP:()=>_,mf:()=>M});var n=r(45072),o=r(11504),a=r(3608),i=r(59016),l=r(84664),c=r(84904),s=r(40304),u=r(61480),d=r(76860),f=r(71340);let p="Collapsible",[m,b]=(0,i._)(p),[h,y]=m(p),v=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,open:a,defaultOpen:i,disabled:c,onOpenChange:s,...d}=e,[p=!1,m]=(0,l.W)({prop:a,defaultProp:i,onChange:s});return(0,o.createElement)(h,{scope:r,disabled:c,contentId:(0,f.I)(),open:p,onOpenToggle:(0,o.useCallback)(()=>m(e=>!e),[m])},(0,o.createElement)(u.K0.div,(0,n.c)({"data-state":x(p),"data-disabled":c?"":void 0},d,{ref:t})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,...i}=e,l=y("CollapsibleTrigger",r);return(0,o.createElement)(u.K0.button,(0,n.c)({type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":x(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled},i,{ref:t,onClick:(0,a.K)(e.onClick,l.onOpenToggle)}))}),g="CollapsibleContent",w=(0,o.forwardRef)((e,t)=>{let{forceMount:r,...a}=e,i=y(g,e.__scopeCollapsible);return(0,o.createElement)(d.s,{present:r||i.open},({present:e})=>(0,o.createElement)(R,(0,n.c)({},a,{ref:t,present:e})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:r,present:a,children:i,...l}=e,d=y(g,r),[f,p]=(0,o.useState)(a),m=(0,o.useRef)(null),b=(0,s.q)(t,m),h=(0,o.useRef)(0),v=h.current,C=(0,o.useRef)(0),w=C.current,R=d.open||f,A=(0,o.useRef)(R),M=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>A.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,c.w)(()=>{let e=m.current;if(e){M.current=M.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();h.current=t.height,C.current=t.width,A.current||(e.style.transitionDuration=M.current.transitionDuration,e.style.animationName=M.current.animationName),p(a)}},[d.open,a]),(0,o.createElement)(u.K0.div,(0,n.c)({"data-state":x(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!R},l,{ref:b,style:{"--radix-collapsible-content-height":v?`${v}px`:void 0,"--radix-collapsible-content-width":w?`${w}px`:void 0,...e.style}}),R&&i)});function x(e){return e?"open":"closed"}let A=v,M=C,_=w},35480:(e,t,r)=>{r.d(t,{o:()=>l});var n=r(11504),o=r(59016),a=r(40304),i=r(22896);function l(e){let t=e+"CollectionProvider",[r,l]=(0,o._)(t),[c,s]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,l=s(u,r),c=(0,a.q)(t,l.collectionRef);return n.createElement(i.k$,{ref:c},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return n.createElement(c,{scope:t,itemMap:a,collectionRef:o},r)},Slot:d,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:o,...l}=e,c=n.useRef(null),u=(0,a.q)(t,c),d=s(f,r);return n.useEffect(()=>(d.itemMap.set(c,{ref:c,...l}),()=>void d.itemMap.delete(c))),n.createElement(i.k$,{[p]:"",ref:u},o)})},function(t){let r=s(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},l]}},44072:(e,t,r)=>{r.d(t,{cz:()=>a});var n=r(11504);let o=(0,n.createContext)(void 0);function a(e){let t=(0,n.useContext)(o);return e||t||"ltr"}}}]);