import{_ as I,H as x,v as B,J as D,j as J}from"./core.min-NKaoUBCu.js";((o,m)=>{const c="__q_context__",s=window,d=new Set,w=e=>o.querySelectorAll(e),q=(e,t,n=t.type)=>{w("[on"+e+"\\:"+n+"]").forEach(i=>p(i,e,t,n))},f=(e,t)=>e.getAttribute(t),k=e=>{if(e._qwikjson_===void 0){let t=(e===o.documentElement?o.body:e).lastElementChild;for(;t;){if(t.tagName==="SCRIPT"&&f(t,"type")==="qwik/json"){e._qwikjson_=JSON.parse(t.textContent.replace(/\\x3C(\/?script)/g,"<$1"));break}t=t.previousElementSibling}}},y=(e,t)=>new CustomEvent(e,{detail:t}),p=async(e,t,n,i=n.type)=>{const r="on"+t+":"+i;e.hasAttribute("preventdefault:"+i)&&n.preventDefault();const a=e._qc_,v=a==null?void 0:a.li.filter(l=>l[0]===r);if(v&&v.length>0){for(const l of v)await l[1].getFn([e,n],()=>e.isConnected)(n,e);return}const A=f(e,r);if(A){const l=e.closest("[q\\:container]"),S=new URL(f(l,"q:base"),o.baseURI);for(const T of A.split(`
`)){const _=new URL(T,S),C=_.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",j=performance.now(),N=I(()=>import(_.href.split("#")[0]),__vite__mapDeps([]));k(l);const O=(await N)[C],P=o[c];if(e.isConnected)try{o[c]=[e,n,_],u("qsymbol",{symbol:C,element:e,reqTime:j}),await O(n,e)}finally{o[c]=P}}}},u=(e,t)=>{o.dispatchEvent(y(e,t))},g=e=>e.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),R=async e=>{let t=g(e.type),n=e.target;for(q("-document",e,t);n&&n.getAttribute;)await p(n,"",e,t),n=e.bubbles&&e.cancelBubble!==!0?n.parentElement:null},L=e=>{q("-window",e,g(e.type))},E=()=>{var e;const t=o.readyState;if(!m&&(t=="interactive"||t=="complete")&&(m=1,u("qinit"),((e=s.requestIdleCallback)!=null?e:s.setTimeout).bind(s)(()=>u("qidle")),d.has("qvisible"))){const n=w("[on\\:qvisible]"),i=new IntersectionObserver(r=>{for(const a of r)a.isIntersecting&&(i.unobserve(a.target),p(a.target,"",y("qvisible",a)))});n.forEach(r=>i.observe(r))}},b=(e,t,n,i=!1)=>e.addEventListener(t,n,{capture:i,passive:!1}),h=e=>{for(const t of e)d.has(t)||(b(o,t,R,!0),b(s,t,L),d.add(t))};if(!o.qR){const e=s.qwikevents;Array.isArray(e)&&h(e),s.qwikevents={push:(...t)=>h(t)},b(o,"readystatechange",E),E()}})(document);const U=x(B(()=>I(()=>import("./entry_App-8eqv3jOV.js"),__vite__mapDeps([0,1])),"s_vBdtONNNfT0"));D(document.getElementById("app"),J(U,null,3,"85_0"));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/entry_App-8eqv3jOV.js","assets/core.min-NKaoUBCu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}