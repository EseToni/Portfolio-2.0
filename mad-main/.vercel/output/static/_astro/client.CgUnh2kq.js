import{y as m,B as g,E as y}from"./preact.module.5IcniKGG.js";const p="modulepreload",w=function(e){return"/"+e},v={},S=function(u,s,o){let f=Promise.resolve();if(s&&s.length>0){const r=document.getElementsByTagName("link");f=Promise.all(s.map(t=>{if(t=w(t),t in v)return;v[t]=!0;const l=t.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!o)for(let a=r.length-1;a>=0;a--){const c=r[a];if(c.href===t&&(!l||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":p,l||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),l)return new Promise((a,c)=>{n.addEventListener("load",a),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${t}`)))})}))}return f.then(()=>u()).catch(r=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=r,window.dispatchEvent(t),!t.defaultPrevented)throw r})},_=({value:e,name:u,hydrate:s=!0})=>e?m(s?"astro-slot":"astro-static-slot",{name:u,dangerouslySetInnerHTML:{__html:e}}):null;_.shouldComponentUpdate=()=>!1;var E=_;const h=new Map;var k=e=>async(u,s,{default:o,...f},{client:r})=>{if(!e.hasAttribute("ssr"))return;for(const[i,d]of Object.entries(f))s[i]=m(E,{value:d,name:i});if(e.dataset.preactSignals){const{signal:i}=await S(()=>import("./signals.module.B_exu38U.js"),__vite__mapDeps([0,1,2]));let d=JSON.parse(e.dataset.preactSignals);for(const[n,a]of Object.entries(d)){if(!h.has(a)){const c=i(s[n]);h.set(a,c)}s[n]=h.get(a)}}(r!=="only"?y:g)(m(u,s,o!=null?m(E,{value:o}):o),e),e.addEventListener("astro:unmount",()=>g(null,e),{once:!0})};export{k as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["_astro/signals.module.B_exu38U.js","_astro/preact.module.5IcniKGG.js","_astro/hooks.module.D9Sbrd7S.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
