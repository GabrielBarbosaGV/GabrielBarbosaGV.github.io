function $(){}const K=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function nt(t){return t()}function Z(){return Object.create(null)}function S(t){t.forEach(nt)}function F(t){return typeof t=="function"}function Gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function It(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function xt(t){return Object.keys(t).length===0}function wt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t,e,n){t.$$.on_destroy.push(wt(e,n))}function Kt(t,e,n,s){if(t){const i=it(t,e,n,s);return t[0](i)}}function it(t,e,n,s){return t[1]&&s?gt(n.ctx.slice(),t[1](s(e))):n.ctx}function Qt(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],r=Math.max(e.dirty.length,i.length);for(let a=0;a<r;a+=1)o[a]=e.dirty[a]|i[a];return o}return e.dirty|i}return e.dirty}function Ut(t,e,n,s,i,o){if(i){const r=it(e,n,s,o);t.p(r,i)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}const st=typeof window<"u";let Q=st?()=>window.performance.now():()=>Date.now(),U=st?t=>requestAnimationFrame(t):$;const C=new Set;function rt(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&U(rt)}function V(t){let e;return C.size===0&&U(rt),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let W=!1;function $t(){W=!0}function bt(){W=!1}function vt(t,e,n,s){for(;t<e;){const i=t+(e-t>>1);n(i)<=s?t=i+1:e=i}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(i>0&&e[n[i]].claim_order<=l?i+1:vt(1,i,_=>e[n[_]].claim_order,l))-1;s[c]=n[f]+1;const u=f+1;n[u]=c,i=Math.max(u,i)}const o=[],r=[];let a=e.length-1;for(let c=n[i]+1;c!=0;c=s[c-1]){for(o.push(e[c-1]);a>=c;a--)r.push(e[a]);a--}for(;a>=0;a--)r.push(e[a]);o.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<o.length&&r[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(r[c],f)}}function kt(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Nt(t){const e=lt("style");return Ct(ot(t),e),e.sheet}function Ct(t,e){return kt(t.head||t,e),e.sheet}function St(t,e){if(W){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){W&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ct(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function At(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function X(t){return document.createTextNode(t)}function Yt(){return X(" ")}function Zt(){return X("")}function te(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,s,i=!1){jt(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,i||(t.claim_info.last_index=r),a}}for(let r=t.claim_info.last_index-1;r>=0;r--){const a=t[r];if(e(a)){const c=n(a);return c===void 0?t.splice(r,1):t[r]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,a}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ut(t,e,n,s){return at(t,i=>i.nodeName===e,i=>{const o=[];for(let r=0;r<i.attributes.length;r++){const a=i.attributes[r];n[a.name]||o.push(a.name)}o.forEach(r=>i.removeAttribute(r))},()=>s(e))}function ne(t,e,n){return ut(t,e,n,lt)}function ie(t,e,n){return ut(t,e,n,At)}function Rt(t,e){return at(t,n=>n.nodeType===3,n=>{const s=""+e;if(n.data.startsWith(s)){if(n.data.length!==s.length)return n.splitText(s.length)}else n.data=s},()=>X(e),!0)}function se(t){return Rt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function Dt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}function le(t,e){const n=[];let s=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(s-=1,n.push(i)):o===`HEAD_${t}_START`&&(s+=1,n.push(i))}else s>0&&n.push(i);return n}function ae(t,e){return new t(e)}const q=new Map;let L=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Bt(t,e){const n={stylesheet:Nt(e),rules:{}};return q.set(t,n),n}function Y(t,e,n,s,i,o,r,a=0){const c=16.666/s;let l=`{
`;for(let m=0;m<=1;m+=c){const y=e+(n-e)*o(m);l+=m*100+`%{${r(y,1-y)}}
`}const f=l+`100% {${r(n,1-n)}}
}`,u=`__svelte_${Tt(f)}_${a}`,_=ot(t),{stylesheet:d,rules:h}=q.get(_)||Bt(_,t);h[u]||(h[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${u} ${s}ms linear ${i}ms 1 both`,L+=1,u}function z(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-s.length;i&&(t.style.animation=s.join(", "),L-=i,L||Ot())}function Ot(){U(()=>{L||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ct(e)}),q.clear())})}function ue(t,e,n,s){if(!e)return $;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return $;const{delay:o=0,duration:r=300,easing:a=K,start:c=Q()+o,end:l=c+r,tick:f=$,css:u}=n(t,{from:e,to:i},s);let _=!0,d=!1,h;function g(){u&&(h=Y(t,0,1,r,o,a,u)),o||(d=!0)}function m(){u&&z(t,h),_=!1}return V(y=>{if(!d&&y>=c&&(d=!0),d&&y>=l&&(f(1,0),m()),!_)return!1;if(d){const E=y-c,b=0+1*a(E/r);f(b,1-b)}return!0}),g(),f(0,1),m}function fe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:s}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=s,Pt(t,i)}}function Pt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const s=getComputedStyle(t),i=s.transform==="none"?"":s.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let R;function j(t){R=t}function ft(){if(!R)throw new Error("Function called outside component initialization");return R}function _e(t){ft().$$.on_mount.push(t)}function de(t){ft().$$.after_update.push(t)}const N=[],tt=[],O=[],et=[],_t=Promise.resolve();let J=!1;function dt(){J||(J=!0,_t.then(ht))}function he(){return dt(),_t}function D(t){O.push(t)}const I=new Set;let k=0;function ht(){if(k!==0)return;const t=R;do{try{for(;k<N.length;){const e=N[k];k++,j(e),qt(e.$$)}}catch(e){throw N.length=0,k=0,e}for(j(null),N.length=0,k=0;tt.length;)tt.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];I.has(n)||(I.add(n),n())}O.length=0}while(N.length);for(;et.length;)et.pop()();J=!1,I.clear(),j(t)}function qt(t){if(t.fragment!==null){t.update(),S(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let M;function mt(){return M||(M=Promise.resolve(),M.then(()=>{M=null})),M}function H(t,e,n){t.dispatchEvent(Dt(`${e?"intro":"outro"}${n}`))}const P=new Set;let v;function me(){v={r:0,c:[],p:v}}function pe(){v.r||S(v.c),v=v.p}function pt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function Lt(t,e,n,s){if(t&&t.o){if(P.has(t))return;P.add(t),v.c.push(()=>{P.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const yt={duration:0};function ye(t,e,n){const s={direction:"in"};let i=e(t,n,s),o=!1,r,a,c=0;function l(){r&&z(t,r)}function f(){const{delay:_=0,duration:d=300,easing:h=K,tick:g=$,css:m}=i||yt;m&&(r=Y(t,0,1,d,_,h,m,c++)),g(0,1);const y=Q()+_,E=y+d;a&&a.abort(),o=!0,D(()=>H(t,!0,"start")),a=V(b=>{if(o){if(b>=E)return g(1,0),H(t,!0,"end"),l(),o=!1;if(b>=y){const A=h((b-y)/d);g(A,1-A)}}return o})}let u=!1;return{start(){u||(u=!0,z(t),F(i)?(i=i(s),mt().then(f)):f())},invalidate(){u=!1},end(){o&&(l(),o=!1)}}}function ge(t,e,n){const s={direction:"out"};let i=e(t,n,s),o=!0,r;const a=v;a.r+=1;function c(){const{delay:l=0,duration:f=300,easing:u=K,tick:_=$,css:d}=i||yt;d&&(r=Y(t,1,0,f,l,u,d));const h=Q()+l,g=h+f;D(()=>H(t,!1,"start")),V(m=>{if(o){if(m>=g)return _(0,1),H(t,!1,"end"),--a.r||S(a.c),!1;if(m>=h){const y=u((m-h)/f);_(1-y,y)}}return o})}return F(i)?mt().then(()=>{i=i(s),c()}):c(),{end(l){l&&i.tick&&i.tick(1,0),o&&(r&&z(t,r),o=!1)}}}function xe(t,e){t.d(1),e.delete(t.key)}function zt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function we(t,e){t.f(),zt(t,e)}function $e(t,e,n,s,i,o,r,a,c,l,f,u){let _=t.length,d=o.length,h=_;const g={};for(;h--;)g[t[h].key]=h;const m=[],y=new Map,E=new Map;for(h=d;h--;){const p=u(i,o,h),x=n(p);let w=r.get(x);w?s&&w.p(p,e):(w=l(x,p),w.c()),y.set(x,m[h]=w),x in g&&E.set(x,Math.abs(h-g[x]))}const b=new Set,A=new Set;function G(p){pt(p,1),p.m(a,f),r.set(p.key,p),f=p.first,d--}for(;_&&d;){const p=m[d-1],x=t[_-1],w=p.key,T=x.key;p===x?(f=p.first,_--,d--):y.has(T)?!r.has(w)||b.has(w)?G(p):A.has(T)?_--:E.get(w)>E.get(T)?(A.add(w),G(p)):(b.add(T),_--):(c(x,r),_--)}for(;_--;){const p=t[_];y.has(p.key)||c(p,r)}for(;d;)G(m[d-1]);return m}function be(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Ht(t,e,n,s){const{fragment:i,after_update:o}=t.$$;i&&i.m(e,n),s||D(()=>{const r=t.$$.on_mount.map(nt).filter(F);t.$$.on_destroy?t.$$.on_destroy.push(...r):S(r),t.$$.on_mount=[]}),o.forEach(D)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(S(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Wt(t,e){t.$$.dirty[0]===-1&&(N.push(t),dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,s,i,o,r,a=[-1]){const c=R;j(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:i,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Z(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&i(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),f&&Wt(t,u)),_}):[],l.update(),f=!0,S(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){$t();const u=Mt(e.target);l.fragment&&l.fragment.l(u),u.forEach(ct)}else l.fragment&&l.fragment.c();e.intro&&pt(t.$$.fragment),Ht(t,e.target,e.anchor,e.customElement),bt(),ht()}j(c)}class ke{$destroy(){Ft(this,1),this.$destroy=$}$on(e,n){if(!F(n))return $;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{U as $,Ht as A,Ft as B,Kt as C,Ut as D,Vt as E,Qt as F,St as G,$ as H,Jt as I,It as J,At as K,ie as L,$e as M,ce as N,te as O,S as P,xe as Q,gt as R,ke as S,F as T,fe as U,Pt as V,ue as W,D as X,ye as Y,ge as Z,we as _,Yt as a,le as a0,Xt as b,se as c,Lt as d,Zt as e,pe as f,pt as g,ct as h,Ee as i,de as j,lt as k,ne as l,Mt as m,ee as n,_e as o,oe as p,X as q,Rt as r,Gt as s,he as t,re as u,me as v,tt as w,ae as x,be as y,ve as z};
