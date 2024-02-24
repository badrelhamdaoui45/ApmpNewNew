import{r as m,R as P,i as y,b as A,S as I,T as M,h as O,G as j,U as L,H as R}from"./entry.e63a48cf.js";function b(e){return I()?(M(e),!0):!1}function _(e){return typeof e=="function"?e():A(e)}const $=typeof window<"u",B=()=>{};function C(e,r){var t;if(typeof e=="number")return e+r;const o=((t=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",a=e.slice(o.length),u=Number.parseFloat(o)+r;return Number.isNaN(u)?e:u+a}function N(e,r=1e3,t={}){const{immediate:o=!0,immediateCallback:a=!1}=t;let u=null;const i=m(!1);function n(){u&&(clearInterval(u),u=null)}function s(){i.value=!1,n()}function c(){const l=_(r);l<=0||(i.value=!0,a&&e(),n(),u=setInterval(e,l))}if(o&&$&&c(),P(r)||typeof r=="function"){const l=y(r,()=>{i.value&&$&&c()});b(l)}return b(s),{isActive:i,pause:s,resume:c}}var W=Object.defineProperty,x=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,E=(e,r,t)=>r in e?W(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,q=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&E(e,t,r[t]);if(x)for(var t of x(r))V.call(r,t)&&E(e,t,r[t]);return e};function H(e=1e3,r={}){const{controls:t=!1,immediate:o=!0,callback:a}=r,u=m(0),i=()=>u.value+=1,n=()=>{u.value=0},s=N(a?()=>{i(),a(u.value)}:i,e,{immediate:o});return t?q({counter:u,reset:n},s):u}function p(e){var r;const t=_(e);return(r=t==null?void 0:t.$el)!=null?r:t}const h=$?window:void 0;function F(...e){let r,t,o,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,o,a]=e,r=h):[r,t,o,a]=e,!r)return B;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const u=[],i=()=>{u.forEach(l=>l()),u.length=0},n=(l,f,d,v)=>(l.addEventListener(f,d,v),()=>l.removeEventListener(f,d,v)),s=y(()=>[p(r),_(a)],([l,f])=>{i(),l&&u.push(...t.flatMap(d=>o.map(v=>n(l,d,v,f))))},{immediate:!0,flush:"post"}),c=()=>{s(),i()};return b(c),c}function G(){const e=m(!1);return L()&&R(()=>{e.value=!0}),e}function g(e){const r=G();return O(()=>(r.value,!!e()))}function w(e,r={}){const{window:t=h}=r,o=g(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let a;const u=m(!1),i=c=>{u.value=c.matches},n=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},s=j(()=>{o.value&&(n(),a=t.matchMedia(_(e)),"addEventListener"in a?a.addEventListener("change",i):a.addListener(i),u.value=a.matches)});return b(()=>{s(),n(),a=void 0}),u}function T(e,r={}){function t(n,s){let c=e[n];return s!=null&&(c=C(c,s)),typeof c=="number"&&(c=`${c}px`),c}const{window:o=h}=r;function a(n){return o?o.matchMedia(n).matches:!1}const u=n=>w(`(min-width: ${t(n)})`,r),i=Object.keys(e).reduce((n,s)=>(Object.defineProperty(n,s,{get:()=>u(s),enumerable:!0,configurable:!0}),n),{});return Object.assign(i,{greater(n){return w(`(min-width: ${t(n,.1)})`,r)},greaterOrEqual:u,smaller(n){return w(`(max-width: ${t(n,-.1)})`,r)},smallerOrEqual(n){return w(`(max-width: ${t(n)})`,r)},between(n,s){return w(`(min-width: ${t(n)}) and (max-width: ${t(s,-.1)})`,r)},isGreater(n){return a(`(min-width: ${t(n,.1)})`)},isGreaterOrEqual(n){return a(`(min-width: ${t(n)})`)},isSmaller(n){return a(`(max-width: ${t(n,-.1)})`)},isSmallerOrEqual(n){return a(`(max-width: ${t(n)})`)},isInBetween(n,s){return a(`(min-width: ${t(n)}) and (max-width: ${t(s,-.1)})`)},current(){const n=Object.keys(e).map(s=>[s,u(s)]);return O(()=>n.filter(([,s])=>s.value).map(([s])=>s))}})}var S=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,Q=(e,r)=>{var t={};for(var o in e)U.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&S)for(var o of S(e))r.indexOf(o)<0&&D.call(e,o)&&(t[o]=e[o]);return t};function X(e,r,t={}){const o=t,{window:a=h}=o,u=Q(o,["window"]);let i;const n=g(()=>a&&"ResizeObserver"in a),s=()=>{i&&(i.disconnect(),i=void 0)},c=O(()=>Array.isArray(e)?e.map(d=>p(d)):[p(e)]),l=y(c,d=>{if(s(),n.value&&a){i=new ResizeObserver(r);for(const v of d)v&&i.observe(v,u)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{s(),l()};return b(f),{isSupported:n,stop:f}}function k(e,r={width:0,height:0},t={}){const{window:o=h,box:a="content-box"}=t,u=O(()=>{var s,c;return(c=(s=p(e))==null?void 0:s.namespaceURI)==null?void 0:c.includes("svg")}),i=m(r.width),n=m(r.height);return X(e,([s])=>{const c=a==="border-box"?s.borderBoxSize:a==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(o&&u.value){const l=p(e);if(l){const f=o.getComputedStyle(l);i.value=Number.parseFloat(f.width),n.value=Number.parseFloat(f.height)}}else if(c){const l=Array.isArray(c)?c:[c];i.value=l.reduce((f,{inlineSize:d})=>f+d,0),n.value=l.reduce((f,{blockSize:d})=>f+d,0)}else i.value=s.contentRect.width,n.value=s.contentRect.height},t),y(()=>p(e),s=>{i.value=s?r.width:0,n.value=s?r.height:0}),{width:i,height:n}}function J({window:e=h}={}){if(!e)return{x:m(0),y:m(0)};const r=m(e.scrollX),t=m(e.scrollY);return F(e,"scroll",()=>{r.value=e.scrollX,t.value=e.scrollY},{capture:!1,passive:!0}),{x:r,y:t}}export{T as a,k as b,J as c,H as u};