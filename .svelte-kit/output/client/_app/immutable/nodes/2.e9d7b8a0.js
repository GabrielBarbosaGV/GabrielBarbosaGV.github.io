import{S as we,i as ve,s as be,C as it,k as $,q as b,a as E,l as w,m as I,r as _,h as i,c as S,n as d,b as m,G as c,u as ge,D as ct,E as ut,F as ft,g as j,d as V,e as et,v as pt,f as dt,J as $e,y as H,z as L,A as J,B as N,H as de,K as tt,L as nt,M as ht,o as mt,N as st,O as ot,P as gt,Q as $t}from"../chunks/index.201e1dc2.js";import{C as Fe}from"../chunks/CodeBlock.c805c78d.js";function wt(r){let t,e,n,s;return{c(){t=b("From "),e=b(r[1]),n=b(" to "),s=b(r[2])},l(o){t=_(o,"From "),e=_(o,r[1]),n=_(o," to "),s=_(o,r[2])},m(o,l){m(o,t,l),m(o,e,l),m(o,n,l),m(o,s,l)},p(o,l){l&2&&ge(e,o[1]),l&4&&ge(s,o[2])},d(o){o&&i(t),o&&i(e),o&&i(n),o&&i(s)}}}function vt(r){let t,e,n;return{c(){t=b("From "),e=b(r[1]),n=b(" (Current)")},l(s){t=_(s,"From "),e=_(s,r[1]),n=_(s," (Current)")},m(s,o){m(s,t,o),m(s,e,o),m(s,n,o)},p(s,o){o&2&&ge(e,s[1])},d(s){s&&i(t),s&&i(e),s&&i(n)}}}function bt(r){let t,e,n,s,o,l,f,h,g,y,p,a;function u(k,M){return k[2]==="none"?vt:wt}let P=u(r),A=P(r);const R=r[4].default,T=it(R,r,r[3],null);return{c(){t=$("div"),e=$("span"),n=$("strong"),s=b(r[0]),o=b(":"),l=E(),f=$("span"),A.c(),h=E(),g=$("hr"),y=E(),p=$("p"),T&&T.c(),this.h()},l(k){t=w(k,"DIV",{class:!0});var M=I(t);e=w(M,"SPAN",{class:!0});var x=I(e);n=w(x,"STRONG",{});var B=I(n);s=_(B,r[0]),o=_(B,":"),B.forEach(i),x.forEach(i),l=S(M),f=w(M,"SPAN",{});var Z=I(f);A.l(Z),Z.forEach(i),h=S(M),g=w(M,"HR",{class:!0}),y=S(M),p=w(M,"P",{class:!0});var ee=I(p);T&&T.l(ee),ee.forEach(i),M.forEach(i),this.h()},h(){d(e,"class","text-md md:text-xl "),d(g,"class","my-4"),d(p,"class","text-md md:text-xl text-justify "),d(t,"class","mb-10")},m(k,M){m(k,t,M),c(t,e),c(e,n),c(n,s),c(n,o),c(t,l),c(t,f),A.m(f,null),c(t,h),c(t,g),c(t,y),c(t,p),T&&T.m(p,null),a=!0},p(k,[M]){(!a||M&1)&&ge(s,k[0]),P===(P=u(k))&&A?A.p(k,M):(A.d(1),A=P(k),A&&(A.c(),A.m(f,null))),T&&T.p&&(!a||M&8)&&ct(T,R,k,k[3],a?ft(R,k[3],M,null):ut(k[3]),null)},i(k){a||(j(T,k),a=!0)},o(k){V(T,k),a=!1},d(k){k&&i(t),A.d(),T&&T.d(k)}}}function _t(r,t,e){let{$$slots:n={},$$scope:s}=t,{title:o}=t,{startDate:l}=t,{endDate:f="none"}=t;return r.$$set=h=>{"title"in h&&e(0,o=h.title),"startDate"in h&&e(1,l=h.startDate),"endDate"in h&&e(2,f=h.endDate),"$$scope"in h&&e(3,s=h.$$scope)},[o,l,f,s,n]}class fe extends we{constructor(t){super(),ve(this,t,_t,bt,be,{title:0,startDate:1,endDate:2})}}function at(r){let t,e,n,s=yt();const o=r[2].default,l=it(o,r,r[1],null);return{c(){s&&s.c(),t=E(),e=$("div"),l&&l.c(),this.h()},l(f){s&&s.l(f),t=S(f),e=w(f,"DIV",{class:!0});var h=I(e);l&&l.l(h),h.forEach(i),this.h()},h(){d(e,"class","py-4")},m(f,h){s&&s.m(f,h),m(f,t,h),m(f,e,h),l&&l.m(e,null),n=!0},p(f,h){l&&l.p&&(!n||h&2)&&ct(l,o,f,f[1],n?ft(o,f[1],h,null):ut(f[1]),null)},i(f){n||(j(l,f),n=!0)},o(f){V(l,f),n=!1},d(f){s&&s.d(f),f&&i(t),f&&i(e),l&&l.d(f)}}}function yt(r){let t,e;return{c(){t=$("script"),this.h()},l(n){t=w(n,"SCRIPT",{src:!0});var s=I(t);s.forEach(i),this.h()},h(){$e(t.src,e="prism.js")||d(t,"src",e)},m(n,s){m(n,t,s)},d(n){n&&i(t)}}}function kt(r){let t,e,n=r[0]&&at(r);return{c(){n&&n.c(),t=et()},l(s){n&&n.l(s),t=et()},m(s,o){n&&n.m(s,o),m(s,t,o),e=!0},p(s,[o]){s[0]?n?(n.p(s,o),o&1&&j(n,1)):(n=at(s),n.c(),j(n,1),n.m(t.parentNode,t)):n&&(pt(),V(n,1,1,()=>{n=null}),dt())},i(s){e||(j(n),e=!0)},o(s){V(n),e=!1},d(s){n&&n.d(s),s&&i(t)}}}function It(r,t,e){let{$$slots:n={},$$scope:s}=t,{visible:o}=t;return r.$$set=l=>{"visible"in l&&e(0,o=l.visible),"$$scope"in l&&e(1,s=l.$$scope)},[o,s,n]}class pe extends we{constructor(t){super(),ve(this,t,It,kt,be,{visible:0})}}function Dt(r){let t="    ",e,n;return{c(){e=b(t),n=b(`
        <script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
        <button hx-post="/clicked" hx-swap="outerHTML">
          Click Me
        </button>`)},l(s){e=_(s,t),n=_(s,`
        <script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
        <button hx-post="/clicked" hx-swap="outerHTML">
          Click Me
        </button>`)},m(s,o){m(s,e,o),m(s,n,o)},p:de,d(s){s&&i(e),s&&i(n)}}}function Tt(r){let t,e,n,s,o,l,f,h,g,y,p;return f=new Fe({props:{lang:"language-html",$$slots:{default:[Dt]},$$scope:{ctx:r}}}),{c(){t=b("HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=$("br"),n=b(`
      One possible usage is the following, as shown in the technology's official page: `),s=$("br"),o=$("br"),l=E(),H(f.$$.fragment),h=E(),g=$("br"),y=b(`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},l(a){t=_(a,"HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=w(a,"BR",{}),n=_(a,`
      One possible usage is the following, as shown in the technology's official page: `),s=w(a,"BR",{}),o=w(a,"BR",{}),l=S(a),L(f.$$.fragment,a),h=S(a),g=w(a,"BR",{}),y=_(a,`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},m(a,u){m(a,t,u),m(a,e,u),m(a,n,u),m(a,s,u),m(a,o,u),m(a,l,u),J(f,a,u),m(a,h,u),m(a,g,u),m(a,y,u),p=!0},p(a,u){const P={};u&4&&(P.$$scope={dirty:u,ctx:a}),f.$set(P)},i(a){p||(j(f.$$.fragment,a),p=!0)},o(a){V(f.$$.fragment,a),p=!1},d(a){a&&i(t),a&&i(e),a&&i(n),a&&i(s),a&&i(o),a&&i(l),N(f,a),a&&i(h),a&&i(g),a&&i(y)}}}function xt(r){let t=`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `,e;return{c(){e=b(t)},l(n){e=_(n,t)},m(n,s){m(n,e,s)},p:de,d(n){n&&i(e)}}}function Et(r){let t,e,n,s,o,l,f,h,g,y;return g=new Fe({props:{lang:"language-haskell",$$slots:{default:[xt]},$$scope:{ctx:r}}}),{c(){t=b(`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=$("div"),n=$("iframe"),o=E(),l=$("iframe"),h=E(),H(g.$$.fragment),this.h()},l(p){t=_(p,`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=w(p,"DIV",{class:!0});var a=I(e);n=w(a,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),I(n).forEach(i),o=S(a),l=w(a,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),I(l).forEach(i),a.forEach(i),h=S(p),L(g.$$.fragment,p),this.h()},h(){d(n,"class","p-6 md:h-[400px] aspect-video"),$e(n.src,s="https://www.youtube.com/embed/RqvCNb7fKsg")||d(n,"src",s),d(n,"title","YouTube video player"),d(n,"frameborder","0"),d(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,d(l,"class","p-6 md:h-[400px] aspect-video"),$e(l.src,f="https://www.youtube.com/embed/Qa8IfEeBJqk")||d(l,"src",f),d(l,"title","YouTube video player"),d(l,"frameborder","0"),d(l,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),l.allowFullscreen=!0,d(e,"class","flex flex-col md:flex-row justify-center")},m(p,a){m(p,t,a),m(p,e,a),c(e,n),c(e,o),c(e,l),m(p,h,a),J(g,p,a),y=!0},p(p,a){const u={};a&4&&(u.$$scope={dirty:a,ctx:p}),g.$set(u)},i(p){y||(j(g.$$.fragment,p),y=!0)},o(p){V(g.$$.fragment,p),y=!1},d(p){p&&i(t),p&&i(e),p&&i(h),N(g,p)}}}function St(r){let t=`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\` : "I do not know what you are talking about";
}

const lang = "TypeScript";
const opinion = "awesome";

console.log(sentiment\`\${lang} is \${opinion}\`);

// output: "You appear to feel that TypeScript is awesome"
      `,e;return{c(){e=b(t)},l(n){e=_(n,t)},m(n,s){m(n,e,s)},p:de,d(n){n&&i(e)}}}function Ct(r){let t,e,n;return e=new Fe({props:{lang:"language-typescript",$$slots:{default:[St]},$$scope:{ctx:r}}}),{c(){t=b(`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),H(e.$$.fragment)},l(s){t=_(s,`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),L(e.$$.fragment,s)},m(s,o){m(s,t,o),J(e,s,o),n=!0},p(s,o){const l={};o&4&&(l.$$scope={dirty:o,ctx:s}),e.$set(l)},i(s){n||(j(e.$$.fragment,s),n=!0)},o(s){V(e.$$.fragment,s),n=!1},d(s){s&&i(t),N(e,s)}}}function Mt(r){let t,e,n,s;return{c(){t=b(`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=$("a"),n=b("here"),s=b("."),this.h()},l(o){t=_(o,`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=w(o,"A",{class:!0,href:!0});var l=I(e);n=_(l,"here"),l.forEach(i),s=_(o,"."),this.h()},h(){d(e,"class","underline text-yellow-600"),d(e,"href","https://chat.openai.com/chat")},m(o,l){m(o,t,l),m(o,e,l),c(e,n),m(o,s,l)},p:de,d(o){o&&i(t),o&&i(e),o&&i(s)}}}function At(r){let t,e,n,s;return{c(){t=b("Bun is a JavaScript/TypeScript runtime and Node.js alternative. It's pretty optimized and uses JavaScriptCore instead of V8, as well as Ziglang for much of its implementation. I aspire to contribute to it, eventually, when I feel more ready. Check out "),e=$("a"),n=b("Bun's homepage"),s=b(". (Take the provided benchmarks with a grain of salt, it's good to be a little skeptical)."),this.h()},l(o){t=_(o,"Bun is a JavaScript/TypeScript runtime and Node.js alternative. It's pretty optimized and uses JavaScriptCore instead of V8, as well as Ziglang for much of its implementation. I aspire to contribute to it, eventually, when I feel more ready. Check out "),e=w(o,"A",{class:!0,href:!0});var l=I(e);n=_(l,"Bun's homepage"),l.forEach(i),s=_(o,". (Take the provided benchmarks with a grain of salt, it's good to be a little skeptical)."),this.h()},h(){d(e,"class","text-blue-900"),d(e,"href","https://bun.sh/")},m(o,l){m(o,t,l),m(o,e,l),c(e,n),m(o,s,l)},p:de,d(o){o&&i(t),o&&i(e),o&&i(s)}}}function jt(r){let t,e,n,s,o,l,f,h,g,y,p;return e=new pe({props:{visible:r[0]("htmx"),$$slots:{default:[Tt]},$$scope:{ctx:r}}}),s=new pe({props:{visible:r[0]("haskell"),$$slots:{default:[Et]},$$scope:{ctx:r}}}),l=new pe({props:{visible:r[0]("ts"),$$slots:{default:[Ct]},$$scope:{ctx:r}}}),h=new pe({props:{visible:r[0]("chatgpt"),$$slots:{default:[Mt]},$$scope:{ctx:r}}}),y=new pe({props:{visible:r[0]("bun"),$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){t=$("div"),H(e.$$.fragment),n=E(),H(s.$$.fragment),o=E(),H(l.$$.fragment),f=E(),H(h.$$.fragment),g=E(),H(y.$$.fragment)},l(a){t=w(a,"DIV",{});var u=I(t);L(e.$$.fragment,u),n=S(u),L(s.$$.fragment,u),o=S(u),L(l.$$.fragment,u),f=S(u),L(h.$$.fragment,u),g=S(u),L(y.$$.fragment,u),u.forEach(i)},m(a,u){m(a,t,u),J(e,t,null),c(t,n),J(s,t,null),c(t,o),J(l,t,null),c(t,f),J(h,t,null),c(t,g),J(y,t,null),p=!0},p(a,[u]){const P={};u&1&&(P.visible=a[0]("htmx")),u&4&&(P.$$scope={dirty:u,ctx:a}),e.$set(P);const A={};u&1&&(A.visible=a[0]("haskell")),u&4&&(A.$$scope={dirty:u,ctx:a}),s.$set(A);const R={};u&1&&(R.visible=a[0]("ts")),u&4&&(R.$$scope={dirty:u,ctx:a}),l.$set(R);const T={};u&1&&(T.visible=a[0]("chatgpt")),u&4&&(T.$$scope={dirty:u,ctx:a}),h.$set(T);const k={};u&1&&(k.visible=a[0]("bun")),u&4&&(k.$$scope={dirty:u,ctx:a}),y.$set(k)},i(a){p||(j(e.$$.fragment,a),j(s.$$.fragment,a),j(l.$$.fragment,a),j(h.$$.fragment,a),j(y.$$.fragment,a),p=!0)},o(a){V(e.$$.fragment,a),V(s.$$.fragment,a),V(l.$$.fragment,a),V(h.$$.fragment,a),V(y.$$.fragment,a),p=!1},d(a){a&&i(t),N(e),N(s),N(l),N(h),N(y)}}}function Bt(r,t,e){let n,{selectedLabel:s}=t;return r.$$set=o=>{"selectedLabel"in o&&e(1,s=o.selectedLabel)},r.$$.update=()=>{r.$$.dirty&2&&e(0,n=o=>o===s)},[n,s]}class Vt extends we{constructor(t){super(),ve(this,t,Bt,jt,be,{selectedLabel:1})}}const Pt=r=>({seconds:()=>r*1e3});function lt(r,t,e){const n=r.slice();return n[6]=t[e].label,n[7]=t[e].name,n}function Rt(r){let t;return{c(){t=b(`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},l(e){t=_(e,`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function Ht(r){let t;return{c(){t=b(`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am quite grateful for the
      experience.`)},l(e){t=_(e,`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am quite grateful for the
      experience.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function Lt(r){let t;return{c(){t=b(`My first job in Portugal, in which I mostly used Java and Angular. Dealt heavily with 
      stored procedures, but I don't think that part was so fun, as it was quite troublesome
      to debug what was going on inside.`)},l(e){t=_(e,`My first job in Portugal, in which I mostly used Java and Angular. Dealt heavily with 
      stored procedures, but I don't think that part was so fun, as it was quite troublesome
      to debug what was going on inside.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function Jt(r){let t;return{c(){t=b(`JavaScript on the backend, TypeScript on the frontend, as I was using Angular. I know that there
      are a lot of people going on the side of JSDoc these days, but I just like TypeScript a lot. It
      doesn't guarantee that you'll get the benefits of typing everywhere if you just spam any and things
      as such, but out of what I've learned from experience, I prefer TypeScript.`)},l(e){t=_(e,`JavaScript on the backend, TypeScript on the frontend, as I was using Angular. I know that there
      are a lot of people going on the side of JSDoc these days, but I just like TypeScript a lot. It
      doesn't guarantee that you'll get the benefits of typing everywhere if you just spam any and things
      as such, but out of what I've learned from experience, I prefer TypeScript.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function Nt(r){let t;return{c(){t=b(`Back to Java! Having so much unit tested is a joy, for sure. I mostly work on inner-source software
      and super-secret stuff I can't talk about, but I must say I'm having a blast.`)},l(e){t=_(e,`Back to Java! Having so much unit tested is a joy, for sure. I mostly work on inner-source software
      and super-secret stuff I can't talk about, but I must say I'm having a blast.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function rt(r,t){let e,n=t[7]+"",s,o,l,f;function h(){return t[3](t[6])}function g(){return t[4](t[6])}return{key:r,first:null,c(){e=$("div"),s=b(n),o=E(),this.h()},l(y){e=w(y,"DIV",{class:!0,title:!0});var p=I(e);s=_(p,n),o=S(p),p.forEach(i),this.h()},h(){d(e,"class","rounded-l-xl rounded-r-xl border-green-300 border-solid border-2 text-green-300 inline-block p-1 m-1 transition-all cursor-pointer "),d(e,"title",t[7]),st(e,"scale-110",t[0]===t[6]),this.first=e},m(y,p){m(y,e,p),c(e,s),c(e,o),l||(f=[ot(e,"click",h),ot(e,"keydown",g)],l=!0)},p(y,p){t=y,p&3&&st(e,"scale-110",t[0]===t[6])},d(y){y&&i(e),l=!1,gt(f)}}}function Ft(r){let t,e,n,s,o,l,f,h,g,y,p,a,u,P,A,R,T,k,M,x,B,Z,ee,_e,ye,ke,Ie,De,Te,xe,Ee,te,Se,Ce,q,Me,W,Ae,z,je,Q,Be,K,Ve,ne,se,le,Pe,Re,X,G=[],Ge=new Map,He,Y,Le,oe,ae,Je,he;q=new fe({props:{title:"YouDigital",startDate:"26/02/2019",endDate:"28/03/2021",$$slots:{default:[Rt]},$$scope:{ctx:r}}}),W=new fe({props:{title:"B2W Digital (Americanas)",startDate:"10/04/2021",endDate:"30/08/2021",$$slots:{default:[Ht]},$$scope:{ctx:r}}}),z=new fe({props:{title:"EDGE",startDate:"01/09/2021",endDate:"14/06/2023",$$slots:{default:[Lt]},$$scope:{ctx:r}}}),Q=new fe({props:{title:"KnowledgeWorks",startDate:"14/06/2023",endDate:"26/10/2023",$$slots:{default:[Jt]},$$scope:{ctx:r}}}),K=new fe({props:{title:"Celfocus",startDate:"27/10/2023",$$slots:{default:[Nt]},$$scope:{ctx:r}}});let me=r[1];const Oe=v=>v[6];for(let v=0;v<me.length;v+=1){let D=lt(r,me,v),F=Oe(D);Ge.set(F,G[v]=rt(F,D))}return Y=new Vt({props:{selectedLabel:r[0]}}),{c(){t=$("div"),e=$("div"),n=$("div"),s=$("span"),o=b(`Gabriel Barbosa

        `),l=$("span"),f=b("Gaspar Veloso"),h=E(),g=$("span"),y=b("Aspiring clean coder"),p=E(),a=$("div"),u=$("img"),A=E(),R=$("div"),T=tt("svg"),k=tt("path"),M=E(),x=$("div"),B=$("p"),Z=b(`About me:

      `),ee=$("br"),_e=E(),ye=$("br"),ke=b(`

      As a software engineer, I've dealt with a fair share of codebases and systems
      administration workflows, all of which possessed varying degrees of efficiency,
      (when the metric is taken over all attributes, including clearness
      and testability, as opposed to merely amount of production code over time).
      That being so, I feel confident in my sense for professional, clean code, that
      does certainly value feature throughput, but especially values correctness and
      robustness. Effective testing pays more than it costs, doubling as validation and
      documentation, allowing the maintainers to be confident in what they produce,
      while also presenting an easier entry point for newcomers. Ultimately, to me,
      the pinnacle of coding beauty arrives in a well-informed usage of the functional
      style, with code and data sharing space, and random testing, such as
      QuickCheck.

      `),Ie=$("br"),De=E(),Te=$("br"),xe=b(`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),Ee=E(),te=$("div"),Se=b("My Work Experience:"),Ce=E(),H(q.$$.fragment),Me=E(),H(W.$$.fragment),Ae=E(),H(z.$$.fragment),je=E(),H(Q.$$.fragment),Be=E(),H(K.$$.fragment),Ve=E(),ne=$("div"),se=$("span"),le=$("strong"),Pe=b("My favourite technologies:"),Re=E(),X=$("div");for(let v=0;v<G.length;v+=1)G[v].c();He=E(),H(Y.$$.fragment),Le=E(),oe=$("div"),ae=$("span"),Je=b("More upcoming..."),this.h()},l(v){t=w(v,"DIV",{});var D=I(t);e=w(D,"DIV",{class:!0});var F=I(e);n=w(F,"DIV",{class:!0});var re=I(n);s=w(re,"SPAN",{class:!0});var U=I(s);o=_(U,`Gabriel Barbosa

        `),l=w(U,"SPAN",{class:!0});var ie=I(l);f=_(ie,"Gaspar Veloso"),ie.forEach(i),h=S(U),g=w(U,"SPAN",{class:!0});var ce=I(g);y=_(ce,"Aspiring clean coder"),ce.forEach(i),U.forEach(i),re.forEach(i),F.forEach(i),p=S(D),a=w(D,"DIV",{class:!0});var ue=I(a);u=w(ue,"IMG",{src:!0,alt:!0,class:!0}),ue.forEach(i),A=S(D),R=w(D,"DIV",{class:!0});var qe=I(R);T=nt(qe,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var We=I(T);k=nt(We,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),I(k).forEach(i),We.forEach(i),qe.forEach(i),M=S(D),x=w(D,"DIV",{class:!0});var C=I(x);B=w(C,"P",{class:!0});var O=I(B);Z=_(O,`About me:

      `),ee=w(O,"BR",{}),_e=S(O),ye=w(O,"BR",{}),ke=_(O,`

      As a software engineer, I've dealt with a fair share of codebases and systems
      administration workflows, all of which possessed varying degrees of efficiency,
      (when the metric is taken over all attributes, including clearness
      and testability, as opposed to merely amount of production code over time).
      That being so, I feel confident in my sense for professional, clean code, that
      does certainly value feature throughput, but especially values correctness and
      robustness. Effective testing pays more than it costs, doubling as validation and
      documentation, allowing the maintainers to be confident in what they produce,
      while also presenting an easier entry point for newcomers. Ultimately, to me,
      the pinnacle of coding beauty arrives in a well-informed usage of the functional
      style, with code and data sharing space, and random testing, such as
      QuickCheck.

      `),Ie=w(O,"BR",{}),De=S(O),Te=w(O,"BR",{}),xe=_(O,`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),O.forEach(i),Ee=S(C),te=w(C,"DIV",{class:!0});var ze=I(te);Se=_(ze,"My Work Experience:"),ze.forEach(i),Ce=S(C),L(q.$$.fragment,C),Me=S(C),L(W.$$.fragment,C),Ae=S(C),L(z.$$.fragment,C),je=S(C),L(Q.$$.fragment,C),Be=S(C),L(K.$$.fragment,C),Ve=S(C),ne=w(C,"DIV",{class:!0});var Qe=I(ne);se=w(Qe,"SPAN",{class:!0});var Ke=I(se);le=w(Ke,"STRONG",{});var Ye=I(le);Pe=_(Ye,"My favourite technologies:"),Ye.forEach(i),Ke.forEach(i),Qe.forEach(i),Re=S(C),X=w(C,"DIV",{class:!0});var Ue=I(X);for(let Ne=0;Ne<G.length;Ne+=1)G[Ne].l(Ue);Ue.forEach(i),He=S(C),L(Y.$$.fragment,C),Le=S(C),oe=w(C,"DIV",{class:!0});var Xe=I(oe);ae=w(Xe,"SPAN",{class:!0});var Ze=I(ae);Je=_(Ze,"More upcoming..."),Ze.forEach(i),Xe.forEach(i),C.forEach(i),D.forEach(i),this.h()},h(){d(l,"class","hidden md:inline "),d(g,"class","text-yellow-400 text-sm md:text-lg "),d(s,"class","text-lg md:text-3xl text-yellow-100 p-2 "),d(n,"class","flex flex-row items-center "),d(e,"class","h-[3em] bg-gradient-to-b from-yellow-800 to-yellow-700 flex flex-row justify-start "),$e(u.src,P="/EuRecortadoFundoBranco.png")||d(u,"src",P),d(u,"alt","A handsome red-headed young man"),d(u,"class","rounded-full h-24 md:h-40 hover:scale-110 transition-all "),d(a,"class","flex flex-row justify-center m-6 "),d(k,"stroke-linecap","round"),d(k,"stroke-linejoin","round"),d(k,"d","M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"),d(T,"xmlns","http://www.w3.org/2000/svg"),d(T,"fill","#CCFFCC"),d(T,"viewBox","0 0 24 24"),d(T,"stroke-width","1.5"),d(T,"stroke","#000000"),d(T,"class","w-20 h-20"),d(R,"class","flex justify-center "),d(B,"class","text-justify text-md md:text-xl "),d(te,"class","flex justify-center m-6 text-xl md:text-2xl "),d(se,"class","text-green-300 text-xl md:text-2xl"),d(ne,"class","text-center mb-6"),d(X,"class","flex flex-wrap justify-center space-between "),d(ae,"class","text-3xl"),d(oe,"class","flex justify-center"),d(x,"class","m-6 md:m-20 text-yellow-800 ")},m(v,D){m(v,t,D),c(t,e),c(e,n),c(n,s),c(s,o),c(s,l),c(l,f),c(s,h),c(s,g),c(g,y),c(t,p),c(t,a),c(a,u),c(t,A),c(t,R),c(R,T),c(T,k),c(t,M),c(t,x),c(x,B),c(B,Z),c(B,ee),c(B,_e),c(B,ye),c(B,ke),c(B,Ie),c(B,De),c(B,Te),c(B,xe),c(x,Ee),c(x,te),c(te,Se),c(x,Ce),J(q,x,null),c(x,Me),J(W,x,null),c(x,Ae),J(z,x,null),c(x,je),J(Q,x,null),c(x,Be),J(K,x,null),c(x,Ve),c(x,ne),c(ne,se),c(se,le),c(le,Pe),c(x,Re),c(x,X);for(let F=0;F<G.length;F+=1)G[F].m(X,null);c(x,He),J(Y,x,null),c(x,Le),c(x,oe),c(oe,ae),c(ae,Je),he=!0},p(v,[D]){const F={};D&1024&&(F.$$scope={dirty:D,ctx:v}),q.$set(F);const re={};D&1024&&(re.$$scope={dirty:D,ctx:v}),W.$set(re);const U={};D&1024&&(U.$$scope={dirty:D,ctx:v}),z.$set(U);const ie={};D&1024&&(ie.$$scope={dirty:D,ctx:v}),Q.$set(ie);const ce={};D&1024&&(ce.$$scope={dirty:D,ctx:v}),K.$set(ce),D&7&&(me=v[1],G=ht(G,D,Oe,1,v,me,Ge,X,$t,rt,null,lt));const ue={};D&1&&(ue.selectedLabel=v[0]),Y.$set(ue)},i(v){he||(j(q.$$.fragment,v),j(W.$$.fragment,v),j(z.$$.fragment,v),j(Q.$$.fragment,v),j(K.$$.fragment,v),j(Y.$$.fragment,v),he=!0)},o(v){V(q.$$.fragment,v),V(W.$$.fragment,v),V(z.$$.fragment,v),V(Q.$$.fragment,v),V(K.$$.fragment,v),V(Y.$$.fragment,v),he=!1},d(v){v&&i(t),N(q),N(W),N(z),N(Q),N(K);for(let D=0;D<G.length;D+=1)G[D].d();N(Y)}}}function Gt(r){const t=Math.floor(Math.random()*r.length);return r[t]}function Ot(r,t,e){let n,s=[["htmx","HTMX"],["haskell","Haskell"],["ts","TypeScript"],["chatgpt","ChatGPT"],["bun","Bun"]].map(([g,y])=>({label:g,name:y})),o="none";mt(()=>{n=setInterval(()=>{const g=s.filter(({label:p})=>p!==o),y=Gt(g.map(({label:p})=>p));l(y)},Pt(8).seconds())});function l(g){clearInterval(n),e(0,o=g)}return[o,s,l,g=>l(g),g=>l(g)]}class zt extends we{constructor(t){super(),ve(this,t,Ot,Ft,be,{})}}export{zt as component};
