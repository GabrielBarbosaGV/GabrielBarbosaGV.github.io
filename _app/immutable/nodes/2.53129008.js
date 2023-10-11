import{S as me,i as ge,s as $e,C as at,k as g,q as _,a as E,l as $,m as y,r as b,h as i,c as T,n as h,b as w,G as u,u as pe,D as rt,E as it,F as ct,g as j,d as R,e as Xe,v as ut,f as ft,J as he,y as B,z as H,A as F,B as G,H as we,K as Ze,L as et,M as dt,o as pt,N as tt,O as nt,P as ht,Q as mt}from"../chunks/index.201e1dc2.js";import{C as He}from"../chunks/CodeBlock.c805c78d.js";function gt(a){let e,t,n,s;return{c(){e=_("From "),t=_(a[1]),n=_(" to "),s=_(a[2])},l(o){e=b(o,"From "),t=b(o,a[1]),n=b(o," to "),s=b(o,a[2])},m(o,l){w(o,e,l),w(o,t,l),w(o,n,l),w(o,s,l)},p(o,l){l&2&&pe(t,o[1]),l&4&&pe(s,o[2])},d(o){o&&i(e),o&&i(t),o&&i(n),o&&i(s)}}}function $t(a){let e,t,n;return{c(){e=_("From "),t=_(a[1]),n=_(" (Current)")},l(s){e=b(s,"From "),t=b(s,a[1]),n=b(s," (Current)")},m(s,o){w(s,e,o),w(s,t,o),w(s,n,o)},p(s,o){o&2&&pe(t,s[1])},d(s){s&&i(e),s&&i(t),s&&i(n)}}}function wt(a){let e,t,n,s,o,l,f,p,m,d,r,c;function k(I,M){return I[2]==="none"?$t:gt}let V=k(a),C=V(a);const O=a[4].default,S=at(O,a,a[3],null);return{c(){e=g("div"),t=g("span"),n=g("strong"),s=_(a[0]),o=_(":"),l=E(),f=g("span"),C.c(),p=E(),m=g("hr"),d=E(),r=g("p"),S&&S.c(),this.h()},l(I){e=$(I,"DIV",{class:!0});var M=y(e);t=$(M,"SPAN",{class:!0});var x=y(t);n=$(x,"STRONG",{});var P=y(n);s=b(P,a[0]),o=b(P,":"),P.forEach(i),x.forEach(i),l=T(M),f=$(M,"SPAN",{});var X=y(f);C.l(X),X.forEach(i),p=T(M),m=$(M,"HR",{class:!0}),d=T(M),r=$(M,"P",{class:!0});var Z=y(r);S&&S.l(Z),Z.forEach(i),M.forEach(i),this.h()},h(){h(t,"class","text-md md:text-xl "),h(m,"class","my-4"),h(r,"class","text-md md:text-xl text-justify "),h(e,"class","mb-10")},m(I,M){w(I,e,M),u(e,t),u(t,n),u(n,s),u(n,o),u(e,l),u(e,f),C.m(f,null),u(e,p),u(e,m),u(e,d),u(e,r),S&&S.m(r,null),c=!0},p(I,[M]){(!c||M&1)&&pe(s,I[0]),V===(V=k(I))&&C?C.p(I,M):(C.d(1),C=V(I),C&&(C.c(),C.m(f,null))),S&&S.p&&(!c||M&8)&&rt(S,O,I,I[3],c?ct(O,I[3],M,null):it(I[3]),null)},i(I){c||(j(S,I),c=!0)},o(I){R(S,I),c=!1},d(I){I&&i(e),C.d(),S&&S.d(I)}}}function vt(a,e,t){let{$$slots:n={},$$scope:s}=e,{title:o}=e,{startDate:l}=e,{endDate:f="none"}=e;return a.$$set=p=>{"title"in p&&t(0,o=p.title),"startDate"in p&&t(1,l=p.startDate),"endDate"in p&&t(2,f=p.endDate),"$$scope"in p&&t(3,s=p.$$scope)},[o,l,f,s,n]}class fe extends me{constructor(e){super(),ge(this,e,vt,wt,$e,{title:0,startDate:1,endDate:2})}}function st(a){let e,t,n,s=_t();const o=a[2].default,l=at(o,a,a[1],null);return{c(){s&&s.c(),e=E(),t=g("div"),l&&l.c(),this.h()},l(f){s&&s.l(f),e=T(f),t=$(f,"DIV",{class:!0});var p=y(t);l&&l.l(p),p.forEach(i),this.h()},h(){h(t,"class","py-4")},m(f,p){s&&s.m(f,p),w(f,e,p),w(f,t,p),l&&l.m(t,null),n=!0},p(f,p){l&&l.p&&(!n||p&2)&&rt(l,o,f,f[1],n?ct(o,f[1],p,null):it(f[1]),null)},i(f){n||(j(l,f),n=!0)},o(f){R(l,f),n=!1},d(f){s&&s.d(f),f&&i(e),f&&i(t),l&&l.d(f)}}}function _t(a){let e,t;return{c(){e=g("script"),this.h()},l(n){e=$(n,"SCRIPT",{src:!0});var s=y(e);s.forEach(i),this.h()},h(){he(e.src,t="prism.js")||h(e,"src",t)},m(n,s){w(n,e,s)},d(n){n&&i(e)}}}function bt(a){let e,t,n=a[0]&&st(a);return{c(){n&&n.c(),e=Xe()},l(s){n&&n.l(s),e=Xe()},m(s,o){n&&n.m(s,o),w(s,e,o),t=!0},p(s,[o]){s[0]?n?(n.p(s,o),o&1&&j(n,1)):(n=st(s),n.c(),j(n,1),n.m(e.parentNode,e)):n&&(ut(),R(n,1,1,()=>{n=null}),ft())},i(s){t||(j(n),t=!0)},o(s){R(n),t=!1},d(s){n&&n.d(s),s&&i(e)}}}function yt(a,e,t){let{$$slots:n={},$$scope:s}=e,{visible:o}=e;return a.$$set=l=>{"visible"in l&&t(0,o=l.visible),"$$scope"in l&&t(1,s=l.$$scope)},[o,s,n]}class de extends me{constructor(e){super(),ge(this,e,yt,bt,$e,{visible:0})}}function kt(a){let e="    ",t,n;return{c(){t=_(e),n=_(`
        <script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
        <button hx-post="/clicked" hx-swap="outerHTML">
          Click Me
        </button>`)},l(s){t=b(s,e),n=b(s,`
        <script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
        <button hx-post="/clicked" hx-swap="outerHTML">
          Click Me
        </button>`)},m(s,o){w(s,t,o),w(s,n,o)},p:we,d(s){s&&i(t),s&&i(n)}}}function It(a){let e,t,n,s,o,l,f,p,m,d,r;return f=new He({props:{lang:"language-html",$$slots:{default:[kt]},$$scope:{ctx:a}}}),{c(){e=_("HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),t=g("br"),n=_(`
      One possible usage is the following, as shown in the technology's official page: `),s=g("br"),o=g("br"),l=E(),B(f.$$.fragment),p=E(),m=g("br"),d=_(`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},l(c){e=b(c,"HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),t=$(c,"BR",{}),n=b(c,`
      One possible usage is the following, as shown in the technology's official page: `),s=$(c,"BR",{}),o=$(c,"BR",{}),l=T(c),H(f.$$.fragment,c),p=T(c),m=$(c,"BR",{}),d=b(c,`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},m(c,k){w(c,e,k),w(c,t,k),w(c,n,k),w(c,s,k),w(c,o,k),w(c,l,k),F(f,c,k),w(c,p,k),w(c,m,k),w(c,d,k),r=!0},p(c,k){const V={};k&4&&(V.$$scope={dirty:k,ctx:c}),f.$set(V)},i(c){r||(j(f.$$.fragment,c),r=!0)},o(c){R(f.$$.fragment,c),r=!1},d(c){c&&i(e),c&&i(t),c&&i(n),c&&i(s),c&&i(o),c&&i(l),G(f,c),c&&i(p),c&&i(m),c&&i(d)}}}function Dt(a){let e=`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `,t;return{c(){t=_(e)},l(n){t=b(n,e)},m(n,s){w(n,t,s)},p:we,d(n){n&&i(t)}}}function xt(a){let e,t,n,s,o,l,f,p,m,d;return m=new He({props:{lang:"language-haskell",$$slots:{default:[Dt]},$$scope:{ctx:a}}}),{c(){e=_(`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),t=g("div"),n=g("iframe"),o=E(),l=g("iframe"),p=E(),B(m.$$.fragment),this.h()},l(r){e=b(r,`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),t=$(r,"DIV",{class:!0});var c=y(t);n=$(c,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),y(n).forEach(i),o=T(c),l=$(c,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),y(l).forEach(i),c.forEach(i),p=T(r),H(m.$$.fragment,r),this.h()},h(){h(n,"class","p-6 md:h-[400px] aspect-video"),he(n.src,s="https://www.youtube.com/embed/RqvCNb7fKsg")||h(n,"src",s),h(n,"title","YouTube video player"),h(n,"frameborder","0"),h(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,h(l,"class","p-6 md:h-[400px] aspect-video"),he(l.src,f="https://www.youtube.com/embed/Qa8IfEeBJqk")||h(l,"src",f),h(l,"title","YouTube video player"),h(l,"frameborder","0"),h(l,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),l.allowFullscreen=!0,h(t,"class","flex flex-col md:flex-row justify-center")},m(r,c){w(r,e,c),w(r,t,c),u(t,n),u(t,o),u(t,l),w(r,p,c),F(m,r,c),d=!0},p(r,c){const k={};c&4&&(k.$$scope={dirty:c,ctx:r}),m.$set(k)},i(r){d||(j(m.$$.fragment,r),d=!0)},o(r){R(m.$$.fragment,r),d=!1},d(r){r&&i(e),r&&i(t),r&&i(p),G(m,r)}}}function Et(a){let e=`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\` : "I do not know what you are talking about";
}

const lang = "TypeScript";
const opinion = "awesome";

console.log(sentiment\`\${lang} is \${opinion}\`);

// output: "You appear to feel that TypeScript is awesome"
      `,t;return{c(){t=_(e)},l(n){t=b(n,e)},m(n,s){w(n,t,s)},p:we,d(n){n&&i(t)}}}function Tt(a){let e,t,n;return t=new He({props:{lang:"language-typescript",$$slots:{default:[Et]},$$scope:{ctx:a}}}),{c(){e=_(`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),B(t.$$.fragment)},l(s){e=b(s,`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),H(t.$$.fragment,s)},m(s,o){w(s,e,o),F(t,s,o),n=!0},p(s,o){const l={};o&4&&(l.$$scope={dirty:o,ctx:s}),t.$set(l)},i(s){n||(j(t.$$.fragment,s),n=!0)},o(s){R(t.$$.fragment,s),n=!1},d(s){s&&i(e),G(t,s)}}}function St(a){let e,t,n,s;return{c(){e=_(`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),t=g("a"),n=_("here"),s=_("."),this.h()},l(o){e=b(o,`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),t=$(o,"A",{class:!0,href:!0});var l=y(t);n=b(l,"here"),l.forEach(i),s=b(o,"."),this.h()},h(){h(t,"class","underline text-yellow-600"),h(t,"href","https://chat.openai.com/chat")},m(o,l){w(o,e,l),w(o,t,l),u(t,n),w(o,s,l)},p:we,d(o){o&&i(e),o&&i(t),o&&i(s)}}}function Mt(a){let e,t,n,s,o,l,f,p,m;return t=new de({props:{visible:a[0]("htmx"),$$slots:{default:[It]},$$scope:{ctx:a}}}),s=new de({props:{visible:a[0]("haskell"),$$slots:{default:[xt]},$$scope:{ctx:a}}}),l=new de({props:{visible:a[0]("ts"),$$slots:{default:[Tt]},$$scope:{ctx:a}}}),p=new de({props:{visible:a[0]("chatgpt"),$$slots:{default:[St]},$$scope:{ctx:a}}}),{c(){e=g("div"),B(t.$$.fragment),n=E(),B(s.$$.fragment),o=E(),B(l.$$.fragment),f=E(),B(p.$$.fragment)},l(d){e=$(d,"DIV",{});var r=y(e);H(t.$$.fragment,r),n=T(r),H(s.$$.fragment,r),o=T(r),H(l.$$.fragment,r),f=T(r),H(p.$$.fragment,r),r.forEach(i)},m(d,r){w(d,e,r),F(t,e,null),u(e,n),F(s,e,null),u(e,o),F(l,e,null),u(e,f),F(p,e,null),m=!0},p(d,[r]){const c={};r&1&&(c.visible=d[0]("htmx")),r&4&&(c.$$scope={dirty:r,ctx:d}),t.$set(c);const k={};r&1&&(k.visible=d[0]("haskell")),r&4&&(k.$$scope={dirty:r,ctx:d}),s.$set(k);const V={};r&1&&(V.visible=d[0]("ts")),r&4&&(V.$$scope={dirty:r,ctx:d}),l.$set(V);const C={};r&1&&(C.visible=d[0]("chatgpt")),r&4&&(C.$$scope={dirty:r,ctx:d}),p.$set(C)},i(d){m||(j(t.$$.fragment,d),j(s.$$.fragment,d),j(l.$$.fragment,d),j(p.$$.fragment,d),m=!0)},o(d){R(t.$$.fragment,d),R(s.$$.fragment,d),R(l.$$.fragment,d),R(p.$$.fragment,d),m=!1},d(d){d&&i(e),G(t),G(s),G(l),G(p)}}}function At(a,e,t){let n,{selectedLabel:s}=e;return a.$$set=o=>{"selectedLabel"in o&&t(1,s=o.selectedLabel)},a.$$.update=()=>{a.$$.dirty&2&&t(0,n=o=>o===s)},[n,s]}class Ct extends me{constructor(e){super(),ge(this,e,At,Mt,$e,{selectedLabel:1})}}const Pt=a=>({seconds:()=>a*1e3});function ot(a,e,t){const n=a.slice();return n[6]=e[t].label,n[7]=e[t].name,n}function jt(a){let e;return{c(){e=_(`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},l(t){e=b(t,`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},m(t,n){w(t,e,n)},d(t){t&&i(e)}}}function Rt(a){let e;return{c(){e=_(`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am quite grateful for the
      experience.`)},l(t){e=b(t,`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am quite grateful for the
      experience.`)},m(t,n){w(t,e,n)},d(t){t&&i(e)}}}function Vt(a){let e;return{c(){e=_(`My first job in Portugal, in which I mostly used Java and Angular. Dealt heavily with 
      stored procedures, but I don't think that part was so fun, as it was quite troublesome
      to debug what was going on inside.`)},l(t){e=b(t,`My first job in Portugal, in which I mostly used Java and Angular. Dealt heavily with 
      stored procedures, but I don't think that part was so fun, as it was quite troublesome
      to debug what was going on inside.`)},m(t,n){w(t,e,n)},d(t){t&&i(e)}}}function Lt(a){let e;return{c(){e=_(`My current job! JavaScript/TypeScript everywhere, though I wish we leaned a little more
      towards TypeScript. JSDoc helps, though.`)},l(t){e=b(t,`My current job! JavaScript/TypeScript everywhere, though I wish we leaned a little more
      towards TypeScript. JSDoc helps, though.`)},m(t,n){w(t,e,n)},d(t){t&&i(e)}}}function lt(a,e){let t,n=e[7]+"",s,o,l,f;function p(){return e[3](e[6])}function m(){return e[4](e[6])}return{key:a,first:null,c(){t=g("div"),s=_(n),o=E(),this.h()},l(d){t=$(d,"DIV",{class:!0,title:!0});var r=y(t);s=b(r,n),o=T(r),r.forEach(i),this.h()},h(){h(t,"class","rounded-l-xl rounded-r-xl border-green-300 border-solid border-2 text-green-300 inline-block p-1 m-1 transition-all cursor-pointer "),h(t,"title",e[7]),tt(t,"scale-110",e[0]===e[6]),this.first=t},m(d,r){w(d,t,r),u(t,s),u(t,o),l||(f=[nt(t,"click",p),nt(t,"keydown",m)],l=!0)},p(d,r){e=d,r&3&&tt(t,"scale-110",e[0]===e[6])},d(d){d&&i(t),l=!1,ht(f)}}}function Bt(a){let e,t,n,s,o,l,f,p,m,d,r,c,k,V,C,O,S,I,M,x,P,X,Z,ve,_e,be,ye,ke,Ie,De,xe,ee,Ee,Te,J,Se,W,Me,Q,Ae,z,Ce,te,ne,le,Pe,je,U,N=[],Fe=new Map,Re,K,Ve,se,oe,Le,ce;J=new fe({props:{title:"YouDigital",startDate:"26/02/2019",endDate:"28/03/2021",$$slots:{default:[jt]},$$scope:{ctx:a}}}),W=new fe({props:{title:"B2W Digital (Americanas)",startDate:"10/04/2021",endDate:"30/08/2021",$$slots:{default:[Rt]},$$scope:{ctx:a}}}),Q=new fe({props:{title:"EDGE",startDate:"01/09/2021",endDate:"14/06/2023",$$slots:{default:[Vt]},$$scope:{ctx:a}}}),z=new fe({props:{title:"KnowledgeWorks",startDate:"14/06/2023",$$slots:{default:[Lt]},$$scope:{ctx:a}}});let ue=a[1];const Ge=v=>v[6];for(let v=0;v<ue.length;v+=1){let D=ot(a,ue,v),L=Ge(D);Fe.set(L,N[v]=lt(L,D))}return K=new Ct({props:{selectedLabel:a[0]}}),{c(){e=g("div"),t=g("div"),n=g("div"),s=g("span"),o=_(`Gabriel Barbosa

        `),l=g("span"),f=_("Gaspar Veloso"),p=E(),m=g("span"),d=_("Aspiring clean coder"),r=E(),c=g("div"),k=g("img"),C=E(),O=g("div"),S=Ze("svg"),I=Ze("path"),M=E(),x=g("div"),P=g("p"),X=_(`About me:

      `),Z=g("br"),ve=E(),_e=g("br"),be=_(`

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

      `),ye=g("br"),ke=E(),Ie=g("br"),De=_(`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),xe=E(),ee=g("div"),Ee=_("My Work Experience:"),Te=E(),B(J.$$.fragment),Se=E(),B(W.$$.fragment),Me=E(),B(Q.$$.fragment),Ae=E(),B(z.$$.fragment),Ce=E(),te=g("div"),ne=g("span"),le=g("strong"),Pe=_("My favourite technologies:"),je=E(),U=g("div");for(let v=0;v<N.length;v+=1)N[v].c();Re=E(),B(K.$$.fragment),Ve=E(),se=g("div"),oe=g("span"),Le=_("More upcoming..."),this.h()},l(v){e=$(v,"DIV",{});var D=y(e);t=$(D,"DIV",{class:!0});var L=y(t);n=$(L,"DIV",{class:!0});var ae=y(n);s=$(ae,"SPAN",{class:!0});var Y=y(s);o=b(Y,`Gabriel Barbosa

        `),l=$(Y,"SPAN",{class:!0});var re=y(l);f=b(re,"Gaspar Veloso"),re.forEach(i),p=T(Y),m=$(Y,"SPAN",{class:!0});var ie=y(m);d=b(ie,"Aspiring clean coder"),ie.forEach(i),Y.forEach(i),ae.forEach(i),L.forEach(i),r=T(D),c=$(D,"DIV",{class:!0});var Ne=y(c);k=$(Ne,"IMG",{src:!0,alt:!0,class:!0}),Ne.forEach(i),C=T(D),O=$(D,"DIV",{class:!0});var Oe=y(O);S=et(Oe,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var qe=y(S);I=et(qe,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),y(I).forEach(i),qe.forEach(i),Oe.forEach(i),M=T(D),x=$(D,"DIV",{class:!0});var A=y(x);P=$(A,"P",{class:!0});var q=y(P);X=b(q,`About me:

      `),Z=$(q,"BR",{}),ve=T(q),_e=$(q,"BR",{}),be=b(q,`

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

      `),ye=$(q,"BR",{}),ke=T(q),Ie=$(q,"BR",{}),De=b(q,`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),q.forEach(i),xe=T(A),ee=$(A,"DIV",{class:!0});var Je=y(ee);Ee=b(Je,"My Work Experience:"),Je.forEach(i),Te=T(A),H(J.$$.fragment,A),Se=T(A),H(W.$$.fragment,A),Me=T(A),H(Q.$$.fragment,A),Ae=T(A),H(z.$$.fragment,A),Ce=T(A),te=$(A,"DIV",{class:!0});var We=y(te);ne=$(We,"SPAN",{class:!0});var Qe=y(ne);le=$(Qe,"STRONG",{});var ze=y(le);Pe=b(ze,"My favourite technologies:"),ze.forEach(i),Qe.forEach(i),We.forEach(i),je=T(A),U=$(A,"DIV",{class:!0});var Ke=y(U);for(let Be=0;Be<N.length;Be+=1)N[Be].l(Ke);Ke.forEach(i),Re=T(A),H(K.$$.fragment,A),Ve=T(A),se=$(A,"DIV",{class:!0});var Ye=y(se);oe=$(Ye,"SPAN",{class:!0});var Ue=y(oe);Le=b(Ue,"More upcoming..."),Ue.forEach(i),Ye.forEach(i),A.forEach(i),D.forEach(i),this.h()},h(){h(l,"class","hidden md:inline "),h(m,"class","text-yellow-400 text-sm md:text-lg "),h(s,"class","text-lg md:text-3xl text-yellow-100 p-2 "),h(n,"class","flex flex-row items-center "),h(t,"class","h-[3em] bg-gradient-to-b from-yellow-800 to-yellow-700 flex flex-row justify-start "),he(k.src,V="/EuRecortadoFundoBranco.png")||h(k,"src",V),h(k,"alt","A handsome red-headed young man"),h(k,"class","rounded-full h-24 md:h-40 hover:scale-110 transition-all "),h(c,"class","flex flex-row justify-center m-6 "),h(I,"stroke-linecap","round"),h(I,"stroke-linejoin","round"),h(I,"d","M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"),h(S,"xmlns","http://www.w3.org/2000/svg"),h(S,"fill","#CCFFCC"),h(S,"viewBox","0 0 24 24"),h(S,"stroke-width","1.5"),h(S,"stroke","#000000"),h(S,"class","w-20 h-20"),h(O,"class","flex justify-center "),h(P,"class","text-justify text-md md:text-xl "),h(ee,"class","flex justify-center m-6 text-xl md:text-2xl "),h(ne,"class","text-green-300 text-xl md:text-2xl"),h(te,"class","text-center mb-6"),h(U,"class","flex flex-wrap justify-center space-between "),h(oe,"class","text-3xl"),h(se,"class","flex justify-center"),h(x,"class","m-6 md:m-20 text-yellow-800 ")},m(v,D){w(v,e,D),u(e,t),u(t,n),u(n,s),u(s,o),u(s,l),u(l,f),u(s,p),u(s,m),u(m,d),u(e,r),u(e,c),u(c,k),u(e,C),u(e,O),u(O,S),u(S,I),u(e,M),u(e,x),u(x,P),u(P,X),u(P,Z),u(P,ve),u(P,_e),u(P,be),u(P,ye),u(P,ke),u(P,Ie),u(P,De),u(x,xe),u(x,ee),u(ee,Ee),u(x,Te),F(J,x,null),u(x,Se),F(W,x,null),u(x,Me),F(Q,x,null),u(x,Ae),F(z,x,null),u(x,Ce),u(x,te),u(te,ne),u(ne,le),u(le,Pe),u(x,je),u(x,U);for(let L=0;L<N.length;L+=1)N[L].m(U,null);u(x,Re),F(K,x,null),u(x,Ve),u(x,se),u(se,oe),u(oe,Le),ce=!0},p(v,[D]){const L={};D&1024&&(L.$$scope={dirty:D,ctx:v}),J.$set(L);const ae={};D&1024&&(ae.$$scope={dirty:D,ctx:v}),W.$set(ae);const Y={};D&1024&&(Y.$$scope={dirty:D,ctx:v}),Q.$set(Y);const re={};D&1024&&(re.$$scope={dirty:D,ctx:v}),z.$set(re),D&7&&(ue=v[1],N=dt(N,D,Ge,1,v,ue,Fe,U,mt,lt,null,ot));const ie={};D&1&&(ie.selectedLabel=v[0]),K.$set(ie)},i(v){ce||(j(J.$$.fragment,v),j(W.$$.fragment,v),j(Q.$$.fragment,v),j(z.$$.fragment,v),j(K.$$.fragment,v),ce=!0)},o(v){R(J.$$.fragment,v),R(W.$$.fragment,v),R(Q.$$.fragment,v),R(z.$$.fragment,v),R(K.$$.fragment,v),ce=!1},d(v){v&&i(e),G(J),G(W),G(Q),G(z);for(let D=0;D<N.length;D+=1)N[D].d();G(K)}}}function Ht(a){const e=Math.floor(Math.random()*a.length);return a[e]}function Ft(a,e,t){let n,s=[["htmx","HTMX"],["haskell","Haskell"],["ts","TypeScript"],["chatgpt","ChatGPT"]].map(([m,d])=>({label:m,name:d})),o="none";pt(()=>{n=setInterval(()=>{const m=s.filter(({label:r})=>r!==o),d=Ht(m.map(({label:r})=>r));l(d)},Pt(8).seconds())});function l(m){clearInterval(n),t(0,o=m)}return[o,s,l,m=>l(m),m=>l(m)]}class Ot extends me{constructor(e){super(),ge(this,e,Ft,Bt,$e,{})}}export{Ot as component};
