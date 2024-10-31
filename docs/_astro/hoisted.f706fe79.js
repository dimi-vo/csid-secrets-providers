class w extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=n.currentTarget.value)})}}customElements.define("starlight-lang-select",w);const b="modulepreload",L=function(d){return"/csid-secrets-providers/"+d},v={},k=function(e,n,o){if(!n||n.length===0)return e();const c=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=L(r),r in v)return;v[r]=!0;const i=r.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(!!o)for(let a=c.length-1;a>=0;a--){const m=c[a];if(m.href===r&&(!i||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${u}`))return;const t=document.createElement("link");if(t.rel=i?"stylesheet":b,i||(t.as="script",t.crossOrigin=""),t.href=r,document.head.appendChild(t),i)return new Promise((a,m)=>{t.addEventListener("load",a),t.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=r,window.dispatchEvent(i),!i.defaultPrevented)throw r})};class T extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),n=this.querySelector("button[data-close-modal]"),o=this.querySelector("dialog"),c=this.querySelector(".dialog-frame"),r=t=>{document.body.contains(t.target)&&!c.contains(t.target)&&u()},i=t=>{o.showModal(),this.querySelector("input")?.focus(),t?.stopPropagation(),window.addEventListener("click",r)},u=()=>{o.close(),window.removeEventListener("click",r)};e.addEventListener("click",i),e.disabled=!1,n.addEventListener("click",u),window.addEventListener("keydown",t=>{const a=document.activeElement&&["input","select","textarea"].includes(document.activeElement.tagName.toLowerCase());t.metaKey===!0&&t.key==="k"?(o.open?u():i(),t.preventDefault()):t.key==="/"&&!o.open&&!a&&(i(),t.preventDefault())});let f={};try{f=JSON.parse(this.dataset.translations||"{}")}catch{}window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(a=>setTimeout(a,1)))(async()=>{const{PagefindUI:a}=await k(()=>import("./ui-core.8acb7444.js"),[]);new a({element:"#starlight__search",baseUrl:"/csid-secrets-providers/",bundlePath:"/csid-secrets-providers/".replace(/\/$/,"")+"/_pagefind/",showImages:!1,translations:f})})})}}customElements.define("site-search",T);class x extends HTMLElement{#e="starlight-theme";constructor(){super(),this.#n(this.#i());const e=this.querySelector("select");e&&e.addEventListener("change",n=>{n.currentTarget instanceof HTMLSelectElement&&this.#n(this.#t(n.currentTarget.value))})}#t(e){return e==="auto"||e==="dark"||e==="light"?e:"auto"}#s(){return matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}#n(e){StarlightThemeProvider.updatePickers(e),document.documentElement.dataset.theme=e==="auto"?this.#s():e,this.#r(e)}#r(e){typeof localStorage<"u"&&(e==="light"||e==="dark"?localStorage.setItem(this.#e,e):localStorage.removeItem(this.#e))}#i(){const e=typeof localStorage<"u"&&localStorage.getItem(this.#e);return this.#t(e)}}customElements.define("starlight-theme-select",x);class S extends HTMLElement{_current=this.querySelector('a[aria-current="true"]');minH=parseInt(this.dataset.minH||"2",10);maxH=parseInt(this.dataset.maxH||"3",10);set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}constructor({smallViewport:e=!1}={}){super();const n=[...this.querySelectorAll("a")],o=s=>{if(s instanceof HTMLHeadingElement){if("pageTitle"in s.dataset)return!0;const h=s.tagName[1];if(h){const l=parseInt(h,10);if(l>=this.minH&&l<=this.maxH)return!0}}return!1},c=s=>{if(!s)return null;const h=s;for(;s;){if(o(s))return s;for(s=s.previousElementSibling;s?.lastElementChild;)s=s.lastElementChild;const l=c(s);if(l)return l}return c(h.parentElement)},r=s=>{for(const{isIntersecting:h,target:l}of s){if(!h)continue;const p=c(l);if(!p)continue;const E=n.find(y=>y.hash==="#"+encodeURIComponent(p.id));if(E){this.current=E;break}}},i=document.querySelectorAll("main [id], main [id] ~ *, main .content > *"),u=(e?104:64)+32,f=u+24;let t;function a(){t&&t.disconnect();const s=document.documentElement.clientHeight,h=`-${u}px 0% ${f-s}px`;t=new IntersectionObserver(r,{rootMargin:h}),i.forEach(l=>t.observe(l))}a();const m=window.requestIdleCallback||(s=>setTimeout(s,1));let g;window.addEventListener("resize",()=>{t&&t.disconnect(),clearTimeout(g),g=setTimeout(()=>m(a),200)})}}customElements.define("starlight-toc",S);class C extends S{set current(e){super.current=e;const n=this.querySelector(".display-current");n&&(n.textContent=e.textContent)}constructor(){super({smallViewport:!0});const e=this.querySelector("details");if(!e)return;const n=()=>{e.open=!1};e.querySelectorAll("a").forEach(o=>{o.addEventListener("click",n)}),window.addEventListener("click",o=>{e.contains(o.target)||n()}),window.addEventListener("keydown",o=>{if(o.key==="Escape"&&e.open){const c=e.contains(document.activeElement);if(n(),c){const r=e.querySelector("summary");r&&r.focus()}}})}}customElements.define("mobile-starlight-toc",C);class q extends HTMLElement{btn=this.querySelector("button");constructor(){super(),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",n=>this.closeOnEscape(n))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",q);export{k as _};
