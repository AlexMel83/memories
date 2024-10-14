import{a as B,b as G,t as E,u as Y,d as J,i as Q,n as z,e as Z,f as k,g as P,h as ee}from"./C07I_0q2.js";import{K as O,M as H,r as S,I as X,j as te,a1 as ne,ah as oe,ai as se}from"./t96BDbEU.js";function A(e){var i;const u=E(e);return(i=u==null?void 0:u.$el)!=null?i:u}const y=Q?window:void 0;function W(...e){let i,u,v,f;if(typeof e[0]=="string"||Array.isArray(e[0])?([u,v,f]=e,i=y):[i,u,v,f]=e,!i)return z;Array.isArray(u)||(u=[u]),Array.isArray(v)||(v=[v]);const o=[],a=()=>{o.forEach(r=>r()),o.length=0},n=(r,t,c,m)=>(r.addEventListener(t,c,m),()=>r.removeEventListener(t,c,m)),l=H(()=>[A(i),E(f)],([r,t])=>{if(a(),!r)return;const c=Z(t)?{...t}:t;o.push(...u.flatMap(m=>v.map(p=>n(r,m,p,c))))},{immediate:!0,flush:"post"}),s=()=>{l(),a()};return B(s),s}function re(){const e=S(!1),i=ne();return i&&te(()=>{e.value=!0},i),e}function K(e){const i=re();return O(()=>(i.value,!!e()))}function le(e,i,u={}){const{window:v=y,...f}=u;let o;const a=K(()=>v&&"MutationObserver"in v),n=()=>{o&&(o.disconnect(),o=void 0)},l=O(()=>{const c=E(e),m=(Array.isArray(c)?c:[c]).map(A).filter(k);return new Set(m)}),s=H(()=>l.value,c=>{n(),a.value&&c.size&&(o=new MutationObserver(i),c.forEach(m=>o.observe(m,f)))},{immediate:!0,flush:"post"}),r=()=>o==null?void 0:o.takeRecords(),t=()=>{n(),s()};return B(t),{isSupported:a,stop:t,takeRecords:r}}function fe(e={}){var i;const{window:u=y,deep:v=!0,triggerOnRemoval:f=!1}=e,o=(i=e.document)!=null?i:u==null?void 0:u.document,a=()=>{var s;let r=o==null?void 0:o.activeElement;if(v)for(;r!=null&&r.shadowRoot;)r=(s=r==null?void 0:r.shadowRoot)==null?void 0:s.activeElement;return r},n=S(),l=()=>{n.value=a()};return u&&(W(u,"blur",s=>{s.relatedTarget===null&&l()},!0),W(u,"focus",l,!0)),f&&le(o,s=>{s.filter(r=>r.removedNodes.length).map(r=>Array.from(r.removedNodes)).flat().forEach(r=>{r===n.value&&l()})},{childList:!0,subtree:!0}),l(),n}function ie(e,i={}){const{immediate:u=!0,fpsLimit:v=void 0,window:f=y}=i,o=S(!1),a=v?1e3/v:null;let n=0,l=null;function s(c){if(!o.value||!f)return;n||(n=c);const m=c-n;if(a&&m<a){l=f.requestAnimationFrame(s);return}n=c,e({delta:m,timestamp:c}),l=f.requestAnimationFrame(s)}function r(){!o.value&&f&&(o.value=!0,n=0,l=f.requestAnimationFrame(s))}function t(){o.value=!1,l!=null&&f&&(f.cancelAnimationFrame(l),l=null)}return u&&r(),B(t),{isActive:se(o),pause:t,resume:r}}function ue(e,i,u={}){const{window:v=y,...f}=u;let o;const a=K(()=>v&&"ResizeObserver"in v),n=()=>{o&&(o.disconnect(),o=void 0)},l=O(()=>Array.isArray(e)?e.map(t=>A(t)):[A(e)]),s=H(l,t=>{if(n(),a.value&&v){o=new ResizeObserver(i);for(const c of t)c&&o.observe(c,f)}},{immediate:!0,flush:"post"}),r=()=>{n(),s()};return B(r),{isSupported:a,stop:r}}function de(e,i={width:0,height:0},u={}){const{window:v=y,box:f="content-box"}=u,o=O(()=>{var t,c;return(c=(t=A(e))==null?void 0:t.namespaceURI)==null?void 0:c.includes("svg")}),a=S(i.width),n=S(i.height),{stop:l}=ue(e,([t])=>{const c=f==="border-box"?t.borderBoxSize:f==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(v&&o.value){const m=A(e);if(m){const p=m.getBoundingClientRect();a.value=p.width,n.value=p.height}}else if(c){const m=Array.isArray(c)?c:[c];a.value=m.reduce((p,{inlineSize:M})=>p+M,0),n.value=m.reduce((p,{blockSize:M})=>p+M,0)}else a.value=t.contentRect.width,n.value=t.contentRect.height},u);G(()=>{const t=A(e);t&&(a.value="offsetWidth"in t?t.offsetWidth:i.width,n.value="offsetHeight"in t?t.offsetHeight:i.height)});const s=H(()=>A(e),t=>{a.value=t?i.width:0,n.value=t?i.height:0});function r(){l(),s()}return{width:a,height:n,stop:r}}const C=new Map;function ve(e){const i=oe();function u(n){var l;const s=C.get(e)||new Set;s.add(n),C.set(e,s);const r=()=>f(n);return(l=i==null?void 0:i.cleanups)==null||l.push(r),r}function v(n){function l(...s){f(l),n(...s)}return u(l)}function f(n){const l=C.get(e);l&&(l.delete(n),l.size||o())}function o(){C.delete(e)}function a(n,l){var s;(s=C.get(e))==null||s.forEach(r=>r(n,l))}return{on:u,once:v,off:f,emit:a,reset:o}}const $=1;function me(e,i={}){const{throttle:u=0,idle:v=200,onStop:f=z,onScroll:o=z,offset:a={left:0,right:0,top:0,bottom:0},eventListenerOptions:n={capture:!1,passive:!0},behavior:l="auto",window:s=y,onError:r=d=>{console.error(d)}}=i,t=S(0),c=S(0),m=O({get(){return t.value},set(d){M(d,void 0)}}),p=O({get(){return c.value},set(d){M(void 0,d)}});function M(d,x){var h,T,L,_;if(!s)return;const b=E(e);if(!b)return;(L=b instanceof Document?s.document.body:b)==null||L.scrollTo({top:(h=E(x))!=null?h:p.value,left:(T=E(d))!=null?T:m.value,behavior:E(l)});const F=((_=b==null?void 0:b.document)==null?void 0:_.documentElement)||(b==null?void 0:b.documentElement)||b;m!=null&&(t.value=F.scrollLeft),p!=null&&(c.value=F.scrollTop)}const D=S(!1),w=X({left:!0,right:!1,top:!0,bottom:!1}),g=X({left:!1,right:!1,top:!1,bottom:!1}),q=d=>{D.value&&(D.value=!1,g.left=!1,g.right=!1,g.top=!1,g.bottom=!1,f(d))},U=Y(q,u+v),I=d=>{var x;if(!s)return;const h=((x=d==null?void 0:d.document)==null?void 0:x.documentElement)||(d==null?void 0:d.documentElement)||A(d),{display:T,flexDirection:L}=getComputedStyle(h),_=h.scrollLeft;g.left=_<t.value,g.right=_>t.value;const b=Math.abs(_)<=(a.left||0),F=Math.abs(_)+h.clientWidth>=h.scrollWidth-(a.right||0)-$;T==="flex"&&L==="row-reverse"?(w.left=F,w.right=b):(w.left=b,w.right=F),t.value=_;let R=h.scrollTop;d===s.document&&!R&&(R=s.document.body.scrollTop),g.top=R<c.value,g.bottom=R>c.value;const V=Math.abs(R)<=(a.top||0),j=Math.abs(R)+h.clientHeight>=h.scrollHeight-(a.bottom||0)-$;T==="flex"&&L==="column-reverse"?(w.top=j,w.bottom=V):(w.top=V,w.bottom=j),c.value=R},N=d=>{var x;if(!s)return;const h=(x=d.target.documentElement)!=null?x:d.target;I(h),D.value=!0,U(d),o(d)};return W(e,"scroll",u?J(N,u,!0,!1):N,n),G(()=>{try{const d=E(e);if(!d)return;I(d)}catch(d){r(d)}}),W(e,"scrollend",q,n),{x:m,y:p,isScrolling:D,arrivedState:w,directions:g,measure(){const d=E(e);s&&d&&I(d)}}}function pe(e={}){const{controls:i=!1,offset:u=0,immediate:v=!0,interval:f="requestAnimationFrame",callback:o}=e,a=S(P()+u),n=()=>a.value=P()+u,l=o?()=>{n(),o(a.value)}:n,s=f==="requestAnimationFrame"?ie(l,{immediate:v}):ee(l,f,{immediate:v});return i?{timestamp:a,...s}:a}export{de as a,ue as b,pe as c,ve as d,fe as e,W as f,me as u};
