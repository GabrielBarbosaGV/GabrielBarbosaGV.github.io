import{S as re,i as ie,s as ce,D as Be,k as g,r as w,a as D,l as v,m as y,u as b,h as c,c as T,p,b as $,H as f,v as he,E as je,F as Le,G as He,g as V,d as B,e as et,w as it,f as ct,J as pe,K as ft,z as H,A as N,B as F,C as G,n as me,L as tt,M as nt,N as ut,o as dt,O as st,P as lt,Q as ht,R as pt}from"../chunks/index.4a8c4a25.mjs";function mt(i){let e,t,n,s;return{c(){e=w("From "),t=w(i[1]),n=w(" to "),s=w(i[2])},l(l){e=b(l,"From "),t=b(l,i[1]),n=b(l," to "),s=b(l,i[2])},m(l,o){$(l,e,o),$(l,t,o),$(l,n,o),$(l,s,o)},p(l,o){o&2&&he(t,l[1]),o&4&&he(s,l[2])},d(l){l&&c(e),l&&c(t),l&&c(n),l&&c(s)}}}function gt(i){let e,t,n;return{c(){e=w("From "),t=w(i[1]),n=w(" (Current)")},l(s){e=b(s,"From "),t=b(s,i[1]),n=b(s," (Current)")},m(s,l){$(s,e,l),$(s,t,l),$(s,n,l)},p(s,l){l&2&&he(t,s[1])},d(s){s&&c(e),s&&c(t),s&&c(n)}}}function vt(i){let e,t,n,s,l,o,u,h,m,d,r,a;function _(I,S){return I[2]==="none"?gt:mt}let C=_(i),A=C(i);const O=i[4].default,x=Be(O,i,i[3],null);return{c(){e=g("div"),t=g("span"),n=g("strong"),s=w(i[0]),l=w(":"),o=D(),u=g("span"),A.c(),h=D(),m=g("hr"),d=D(),r=g("p"),x&&x.c(),this.h()},l(I){e=v(I,"DIV",{class:!0});var S=y(e);t=v(S,"SPAN",{class:!0});var M=y(t);n=v(M,"STRONG",{});var P=y(n);s=b(P,i[0]),l=b(P,":"),P.forEach(c),M.forEach(c),o=T(S),u=v(S,"SPAN",{});var U=y(u);A.l(U),U.forEach(c),h=T(S),m=v(S,"HR",{class:!0}),d=T(S),r=v(S,"P",{class:!0});var X=y(r);x&&x.l(X),X.forEach(c),S.forEach(c),this.h()},h(){p(t,"class","text-md md:text-xl "),p(m,"class","my-4"),p(r,"class","text-md md:text-xl text-justify "),p(e,"class","mb-10")},m(I,S){$(I,e,S),f(e,t),f(t,n),f(n,s),f(n,l),f(e,o),f(e,u),A.m(u,null),f(e,h),f(e,m),f(e,d),f(e,r),x&&x.m(r,null),a=!0},p(I,[S]){(!a||S&1)&&he(s,I[0]),C===(C=_(I))&&A?A.p(I,S):(A.d(1),A=C(I),A&&(A.c(),A.m(u,null))),x&&x.p&&(!a||S&8)&&je(x,O,I,I[3],a?He(O,I[3],S,null):Le(I[3]),null)},i(I){a||(V(x,I),a=!0)},o(I){B(x,I),a=!1},d(I){I&&c(e),A.d(),x&&x.d(I)}}}function _t(i,e,t){let{$$slots:n={},$$scope:s}=e,{title:l}=e,{startDate:o}=e,{endDate:u="none"}=e;return i.$$set=h=>{"title"in h&&t(0,l=h.title),"startDate"in h&&t(1,o=h.startDate),"endDate"in h&&t(2,u=h.endDate),"$$scope"in h&&t(3,s=h.$$scope)},[l,o,u,s,n]}class Ve extends re{constructor(e){super(),ie(this,e,_t,vt,ce,{title:0,startDate:1,endDate:2})}}function ot(i){let e,t,n,s=$t();const l=i[2].default,o=Be(l,i,i[1],null);return{c(){s&&s.c(),e=D(),t=g("div"),o&&o.c(),this.h()},l(u){s&&s.l(u),e=T(u),t=v(u,"DIV",{class:!0});var h=y(t);o&&o.l(h),h.forEach(c),this.h()},h(){p(t,"class","py-4")},m(u,h){s&&s.m(u,h),$(u,e,h),$(u,t,h),o&&o.m(t,null),n=!0},p(u,h){o&&o.p&&(!n||h&2)&&je(o,l,u,u[1],n?He(l,u[1],h,null):Le(u[1]),null)},i(u){n||(V(o,u),n=!0)},o(u){B(o,u),n=!1},d(u){s&&s.d(u),u&&c(e),u&&c(t),o&&o.d(u)}}}function $t(i){let e,t;return{c(){e=g("script"),this.h()},l(n){e=v(n,"SCRIPT",{src:!0});var s=y(e);s.forEach(c),this.h()},h(){pe(e.src,t="prism.js")||p(e,"src",t)},m(n,s){$(n,e,s)},d(n){n&&c(e)}}}function wt(i){let e,t,n=i[0]&&ot(i);return{c(){n&&n.c(),e=et()},l(s){n&&n.l(s),e=et()},m(s,l){n&&n.m(s,l),$(s,e,l),t=!0},p(s,[l]){s[0]?n?(n.p(s,l),l&1&&V(n,1)):(n=ot(s),n.c(),V(n,1),n.m(e.parentNode,e)):n&&(it(),B(n,1,1,()=>{n=null}),ct())},i(s){t||(V(n),t=!0)},o(s){B(n),t=!1},d(s){n&&n.d(s),s&&c(e)}}}function bt(i,e,t){let{$$slots:n={},$$scope:s}=e,{visible:l}=e;return i.$$set=o=>{"visible"in o&&t(0,l=o.visible),"$$scope"in o&&t(1,s=o.$$scope)},[l,s,n]}class de extends re{constructor(e){super(),ie(this,e,bt,wt,ce,{visible:0})}}function yt(i){let e,t,n,s,l,o,u,h,m;const d=i[2].default,r=Be(d,i,i[1],null);return{c(){e=g("link"),t=D(),n=g("pre"),s=w("  "),l=g("code"),o=w(`
    `),r&&r.c(),u=w(`
  `),h=w(`
`),this.h()},l(a){const _=ft("svelte-t9apam",document.head);e=v(_,"LINK",{href:!0,rel:!0}),_.forEach(c),t=T(a),n=v(a,"PRE",{});var C=y(n);s=b(C,"  "),l=v(C,"CODE",{class:!0});var A=y(l);o=b(A,`
    `),r&&r.l(A),u=b(A,`
  `),A.forEach(c),h=b(C,`
`),C.forEach(c),this.h()},h(){p(e,"href","themes/prism.css"),p(e,"rel","stylesheet"),p(l,"class",i[0])},m(a,_){f(document.head,e),$(a,t,_),$(a,n,_),f(n,s),f(n,l),f(l,o),r&&r.m(l,null),f(l,u),f(n,h),m=!0},p(a,[_]){r&&r.p&&(!m||_&2)&&je(r,d,a,a[1],m?He(d,a[1],_,null):Le(a[1]),null),(!m||_&1)&&p(l,"class",a[0])},i(a){m||(V(r,a),m=!0)},o(a){B(r,a),m=!1},d(a){c(e),a&&c(t),a&&c(n),r&&r.d(a)}}}function kt(i,e,t){let{$$slots:n={},$$scope:s}=e,{lang:l}=e;return i.$$set=o=>{"lang"in o&&t(0,l=o.lang),"$$scope"in o&&t(1,s=o.$$scope)},[l,s,n]}class Ne extends re{constructor(e){super(),ie(this,e,kt,yt,ce,{lang:0})}}function It(i){let e=`
<script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
<!-- have a button POST a click via AJAX -->
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>
        `,t;return{c(){t=w(e)},l(n){t=b(n,e)},m(n,s){$(n,t,s)},p:me,d(n){n&&c(t)}}}function Et(i){let e,t,n,s,l,o,u,h,m,d,r;return u=new Ne({props:{lang:"language-html",$$slots:{default:[It]},$$scope:{ctx:i}}}),{c(){e=w("HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),t=g("br"),n=w(`
      One possible usage is the following, as shown in the technology's official page: `),s=g("br"),l=g("br"),o=D(),H(u.$$.fragment),h=D(),m=g("br"),d=w(`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},l(a){e=b(a,"HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),t=v(a,"BR",{}),n=b(a,`
      One possible usage is the following, as shown in the technology's official page: `),s=v(a,"BR",{}),l=v(a,"BR",{}),o=T(a),N(u.$$.fragment,a),h=T(a),m=v(a,"BR",{}),d=b(a,`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},m(a,_){$(a,e,_),$(a,t,_),$(a,n,_),$(a,s,_),$(a,l,_),$(a,o,_),F(u,a,_),$(a,h,_),$(a,m,_),$(a,d,_),r=!0},p(a,_){const C={};_&4&&(C.$$scope={dirty:_,ctx:a}),u.$set(C)},i(a){r||(V(u.$$.fragment,a),r=!0)},o(a){B(u.$$.fragment,a),r=!1},d(a){a&&c(e),a&&c(t),a&&c(n),a&&c(s),a&&c(l),a&&c(o),G(u,a),a&&c(h),a&&c(m),a&&c(d)}}}function Dt(i){let e=`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `,t;return{c(){t=w(e)},l(n){t=b(n,e)},m(n,s){$(n,t,s)},p:me,d(n){n&&c(t)}}}function Tt(i){let e,t,n,s,l,o,u,h,m,d;return m=new Ne({props:{lang:"language-haskell",$$slots:{default:[Dt]},$$scope:{ctx:i}}}),{c(){e=w(`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),t=g("div"),n=g("iframe"),l=D(),o=g("iframe"),h=D(),H(m.$$.fragment),this.h()},l(r){e=b(r,`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),t=v(r,"DIV",{class:!0});var a=y(t);n=v(a,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),y(n).forEach(c),l=T(a),o=v(a,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),y(o).forEach(c),a.forEach(c),h=T(r),N(m.$$.fragment,r),this.h()},h(){p(n,"class","p-6 md:h-[400px] aspect-video"),pe(n.src,s="https://www.youtube.com/embed/RqvCNb7fKsg")||p(n,"src",s),p(n,"title","YouTube video player"),p(n,"frameborder","0"),p(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,p(o,"class","p-6 md:h-[400px] aspect-video"),pe(o.src,u="https://www.youtube.com/embed/Qa8IfEeBJqk")||p(o,"src",u),p(o,"title","YouTube video player"),p(o,"frameborder","0"),p(o,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),o.allowFullscreen=!0,p(t,"class","flex flex-col md:flex-row justify-center")},m(r,a){$(r,e,a),$(r,t,a),f(t,n),f(t,l),f(t,o),$(r,h,a),F(m,r,a),d=!0},p(r,a){const _={};a&4&&(_.$$scope={dirty:a,ctx:r}),m.$set(_)},i(r){d||(V(m.$$.fragment,r),d=!0)},o(r){B(m.$$.fragment,r),d=!1},d(r){r&&c(e),r&&c(t),r&&c(h),G(m,r)}}}function xt(i){let e=`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\`;
}

const lang = "TypeScript";
const sentiment = "awesome";

console.log(sentiment\`\${lang} is \${awesome}\`);

// output: "You appear to feel that TypeScript is awesome"
      `,t;return{c(){t=w(e)},l(n){t=b(n,e)},m(n,s){$(n,t,s)},p:me,d(n){n&&c(t)}}}function Mt(i){let e,t,n;return t=new Ne({props:{lang:"language-typescript",$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){e=w(`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),H(t.$$.fragment)},l(s){e=b(s,`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),N(t.$$.fragment,s)},m(s,l){$(s,e,l),F(t,s,l),n=!0},p(s,l){const o={};l&4&&(o.$$scope={dirty:l,ctx:s}),t.$set(o)},i(s){n||(V(t.$$.fragment,s),n=!0)},o(s){B(t.$$.fragment,s),n=!1},d(s){s&&c(e),G(t,s)}}}function At(i){let e,t,n,s;return{c(){e=w(`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),t=g("a"),n=w("here"),s=w("."),this.h()},l(l){e=b(l,`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),t=v(l,"A",{class:!0,href:!0});var o=y(t);n=b(o,"here"),o.forEach(c),s=b(l,"."),this.h()},h(){p(t,"class","underline text-yellow-600"),p(t,"href","https://chat.openai.com/chat")},m(l,o){$(l,e,o),$(l,t,o),f(t,n),$(l,s,o)},p:me,d(l){l&&c(e),l&&c(t),l&&c(s)}}}function St(i){let e,t,n,s,l,o,u,h,m;return t=new de({props:{visible:i[0]("htmx"),$$slots:{default:[Et]},$$scope:{ctx:i}}}),s=new de({props:{visible:i[0]("haskell"),$$slots:{default:[Tt]},$$scope:{ctx:i}}}),o=new de({props:{visible:i[0]("ts"),$$slots:{default:[Mt]},$$scope:{ctx:i}}}),h=new de({props:{visible:i[0]("chatgpt"),$$slots:{default:[At]},$$scope:{ctx:i}}}),{c(){e=g("div"),H(t.$$.fragment),n=D(),H(s.$$.fragment),l=D(),H(o.$$.fragment),u=D(),H(h.$$.fragment)},l(d){e=v(d,"DIV",{});var r=y(e);N(t.$$.fragment,r),n=T(r),N(s.$$.fragment,r),l=T(r),N(o.$$.fragment,r),u=T(r),N(h.$$.fragment,r),r.forEach(c)},m(d,r){$(d,e,r),F(t,e,null),f(e,n),F(s,e,null),f(e,l),F(o,e,null),f(e,u),F(h,e,null),m=!0},p(d,[r]){const a={};r&1&&(a.visible=d[0]("htmx")),r&4&&(a.$$scope={dirty:r,ctx:d}),t.$set(a);const _={};r&1&&(_.visible=d[0]("haskell")),r&4&&(_.$$scope={dirty:r,ctx:d}),s.$set(_);const C={};r&1&&(C.visible=d[0]("ts")),r&4&&(C.$$scope={dirty:r,ctx:d}),o.$set(C);const A={};r&1&&(A.visible=d[0]("chatgpt")),r&4&&(A.$$scope={dirty:r,ctx:d}),h.$set(A)},i(d){m||(V(t.$$.fragment,d),V(s.$$.fragment,d),V(o.$$.fragment,d),V(h.$$.fragment,d),m=!0)},o(d){B(t.$$.fragment,d),B(s.$$.fragment,d),B(o.$$.fragment,d),B(h.$$.fragment,d),m=!1},d(d){d&&c(e),G(t),G(s),G(o),G(h)}}}function Ct(i,e,t){let n,{selectedLabel:s}=e;return i.$$set=l=>{"selectedLabel"in l&&t(1,s=l.selectedLabel)},i.$$.update=()=>{i.$$.dirty&2&&t(0,n=l=>l===s)},[n,s]}class Pt extends re{constructor(e){super(),ie(this,e,Ct,St,ce,{selectedLabel:1})}}const Rt=i=>({seconds:()=>i*1e3});function at(i,e,t){const n=i.slice();return n[6]=e[t].label,n[7]=e[t].name,n}function Vt(i){let e;return{c(){e=w(`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},l(t){e=b(t,`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},m(t,n){$(t,e,n)},d(t){t&&c(e)}}}function Bt(i){let e;return{c(){e=w(`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am extremely grateful for the
      opportunity I was given.`)},l(t){e=b(t,`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am extremely grateful for the
      opportunity I was given.`)},m(t,n){$(t,e,n)},d(t){t&&c(e)}}}function jt(i){let e;return{c(){e=w(`My current job, through which I have been working with BNP Paribas. All of the skills I've
      mustered - be they from the other professional experiences, or own time spent learning -
      are ultimately put to the test.`)},l(t){e=b(t,`My current job, through which I have been working with BNP Paribas. All of the skills I've
      mustered - be they from the other professional experiences, or own time spent learning -
      are ultimately put to the test.`)},m(t,n){$(t,e,n)},d(t){t&&c(e)}}}function rt(i,e){let t,n=e[7]+"",s,l,o,u;function h(){return e[3](e[6])}function m(){return e[4](e[6])}return{key:i,first:null,c(){t=g("div"),s=w(n),l=D(),this.h()},l(d){t=v(d,"DIV",{class:!0,title:!0});var r=y(t);s=b(r,n),l=T(r),r.forEach(c),this.h()},h(){p(t,"class","rounded-l-xl rounded-r-xl border-green-300 border-solid border-2 text-green-300 inline-block p-1 m-1 transition-all cursor-pointer "),p(t,"title",e[7]),st(t,"scale-110",e[0]===e[6]),this.first=t},m(d,r){$(d,t,r),f(t,s),f(t,l),o||(u=[lt(t,"click",h),lt(t,"keydown",m)],o=!0)},p(d,r){e=d,r&3&&st(t,"scale-110",e[0]===e[6])},d(d){d&&c(t),o=!1,ht(u)}}}function Lt(i){let e,t,n,s,l,o,u,h,m,d,r,a,_,C,A,O,x,I,S,M,P,U,X,ge,ve,_e,$e,we,be,ye,ke,Z,Ie,Ee,q,De,Q,Te,z,xe,ee,te,le,Me,Ae,Y,L=[],Fe=new Map,Se,J,Ce,ne,se,Pe,fe;q=new Ve({props:{title:"YouDigital",startDate:"26/02/2019",endDate:"28/03/2021",$$slots:{default:[Vt]},$$scope:{ctx:i}}}),Q=new Ve({props:{title:"B2W Digital (Americanas)",startDate:"10/04/2021",endDate:"30/08/2021",$$slots:{default:[Bt]},$$scope:{ctx:i}}}),z=new Ve({props:{title:"EDGE",startDate:"01/09/2021",$$slots:{default:[jt]},$$scope:{ctx:i}}});let ue=i[1];const Ge=k=>k[6];for(let k=0;k<ue.length;k+=1){let E=at(i,ue,k),j=Ge(E);Fe.set(j,L[k]=rt(j,E))}return J=new Pt({props:{selectedLabel:i[0]}}),{c(){e=g("div"),t=g("div"),n=g("div"),s=g("span"),l=w(`Gabriel Barbosa

        `),o=g("span"),u=w("Gaspar Veloso"),h=D(),m=g("span"),d=w("Aspiring clean coder"),r=D(),a=g("div"),_=g("img"),A=D(),O=g("div"),x=tt("svg"),I=tt("path"),S=D(),M=g("div"),P=g("p"),U=w(`About me:

      `),X=g("br"),ge=D(),ve=g("br"),_e=w(`

      As a software engineer, I've dealt with a fair share of codebases and systems
      administration workflows, all of which possessed varying degrees of efficiency,
      when the metric is taken over all attributes of the routines, including clearness
      and testability, as opposed to merely amount of production code over time.
      That being so, I feel confident in my sense for professional, clean code, that
      does certainly value feature throughput, but especially values correctness and
      robustness. Effective testing pays more than it costs, doubling as validation and
      documentation, allowing the maintainers to be confident in what they produce,
      while also presenting an easier entry point for newcomers. Ultimately, to me,
      the pinnacle of coding beauty arrives in a well-informed usage of the functional
      style, with code and data sharing space, and random testing, such as
      QuickCheck.

      `),$e=g("br"),we=D(),be=g("br"),ye=w(`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),ke=D(),Z=g("div"),Ie=w("My Work Experience:"),Ee=D(),H(q.$$.fragment),De=D(),H(Q.$$.fragment),Te=D(),H(z.$$.fragment),xe=D(),ee=g("div"),te=g("span"),le=g("strong"),Me=w("My favourite technologies:"),Ae=D(),Y=g("div");for(let k=0;k<L.length;k+=1)L[k].c();Se=D(),H(J.$$.fragment),Ce=D(),ne=g("div"),se=g("span"),Pe=w("More upcoming..."),this.h()},l(k){e=v(k,"DIV",{});var E=y(e);t=v(E,"DIV",{class:!0});var j=y(t);n=v(j,"DIV",{class:!0});var oe=y(n);s=v(oe,"SPAN",{class:!0});var K=y(s);l=b(K,`Gabriel Barbosa

        `),o=v(K,"SPAN",{class:!0});var ae=y(o);u=b(ae,"Gaspar Veloso"),ae.forEach(c),h=T(K),m=v(K,"SPAN",{class:!0});var Oe=y(m);d=b(Oe,"Aspiring clean coder"),Oe.forEach(c),K.forEach(c),oe.forEach(c),j.forEach(c),r=T(E),a=v(E,"DIV",{class:!0});var We=y(a);_=v(We,"IMG",{src:!0,alt:!0,class:!0}),We.forEach(c),A=T(E),O=v(E,"DIV",{class:!0});var qe=y(O);x=nt(qe,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var Qe=y(x);I=nt(Qe,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),y(I).forEach(c),Qe.forEach(c),qe.forEach(c),S=T(E),M=v(E,"DIV",{class:!0});var R=y(M);P=v(R,"P",{class:!0});var W=y(P);U=b(W,`About me:

      `),X=v(W,"BR",{}),ge=T(W),ve=v(W,"BR",{}),_e=b(W,`

      As a software engineer, I've dealt with a fair share of codebases and systems
      administration workflows, all of which possessed varying degrees of efficiency,
      when the metric is taken over all attributes of the routines, including clearness
      and testability, as opposed to merely amount of production code over time.
      That being so, I feel confident in my sense for professional, clean code, that
      does certainly value feature throughput, but especially values correctness and
      robustness. Effective testing pays more than it costs, doubling as validation and
      documentation, allowing the maintainers to be confident in what they produce,
      while also presenting an easier entry point for newcomers. Ultimately, to me,
      the pinnacle of coding beauty arrives in a well-informed usage of the functional
      style, with code and data sharing space, and random testing, such as
      QuickCheck.

      `),$e=v(W,"BR",{}),we=T(W),be=v(W,"BR",{}),ye=b(W,`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),W.forEach(c),ke=T(R),Z=v(R,"DIV",{class:!0});var ze=y(Z);Ie=b(ze,"My Work Experience:"),ze.forEach(c),Ee=T(R),N(q.$$.fragment,R),De=T(R),N(Q.$$.fragment,R),Te=T(R),N(z.$$.fragment,R),xe=T(R),ee=v(R,"DIV",{class:!0});var Je=y(ee);te=v(Je,"SPAN",{class:!0});var Ke=y(te);le=v(Ke,"STRONG",{});var Ye=y(le);Me=b(Ye,"My favourite technologies:"),Ye.forEach(c),Ke.forEach(c),Je.forEach(c),Ae=T(R),Y=v(R,"DIV",{class:!0});var Ue=y(Y);for(let Re=0;Re<L.length;Re+=1)L[Re].l(Ue);Ue.forEach(c),Se=T(R),N(J.$$.fragment,R),Ce=T(R),ne=v(R,"DIV",{class:!0});var Xe=y(ne);se=v(Xe,"SPAN",{class:!0});var Ze=y(se);Pe=b(Ze,"More upcoming..."),Ze.forEach(c),Xe.forEach(c),R.forEach(c),E.forEach(c),this.h()},h(){p(o,"class","hidden md:inline "),p(m,"class","text-yellow-400 text-sm md:text-lg "),p(s,"class","text-lg md:text-3xl text-yellow-100 p-2 "),p(n,"class","flex flex-row items-center "),p(t,"class","h-[3em] bg-gradient-to-b from-yellow-800 to-yellow-700 flex flex-row justify-start "),pe(_.src,C="/EuRecortadoFundoBranco.png")||p(_,"src",C),p(_,"alt","A handsome red-headed young man"),p(_,"class","rounded-full h-24 md:h-40 hover:scale-110 transition-all "),p(a,"class","flex flex-row justify-center m-6 "),p(I,"stroke-linecap","round"),p(I,"stroke-linejoin","round"),p(I,"d","M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"),p(x,"xmlns","http://www.w3.org/2000/svg"),p(x,"fill","#CCFFCC"),p(x,"viewBox","0 0 24 24"),p(x,"stroke-width","1.5"),p(x,"stroke","#000000"),p(x,"class","w-20 h-20"),p(O,"class","flex justify-center "),p(P,"class","text-justify text-md md:text-xl "),p(Z,"class","flex justify-center m-6 text-xl md:text-2xl "),p(te,"class","text-green-300 text-xl md:text-2xl"),p(ee,"class","text-center mb-6"),p(Y,"class","flex flex-wrap justify-center space-between "),p(se,"class","text-3xl"),p(ne,"class","flex justify-center"),p(M,"class","m-6 md:m-20 text-yellow-800 ")},m(k,E){$(k,e,E),f(e,t),f(t,n),f(n,s),f(s,l),f(s,o),f(o,u),f(s,h),f(s,m),f(m,d),f(e,r),f(e,a),f(a,_),f(e,A),f(e,O),f(O,x),f(x,I),f(e,S),f(e,M),f(M,P),f(P,U),f(P,X),f(P,ge),f(P,ve),f(P,_e),f(P,$e),f(P,we),f(P,be),f(P,ye),f(M,ke),f(M,Z),f(Z,Ie),f(M,Ee),F(q,M,null),f(M,De),F(Q,M,null),f(M,Te),F(z,M,null),f(M,xe),f(M,ee),f(ee,te),f(te,le),f(le,Me),f(M,Ae),f(M,Y);for(let j=0;j<L.length;j+=1)L[j].m(Y,null);f(M,Se),F(J,M,null),f(M,Ce),f(M,ne),f(ne,se),f(se,Pe),fe=!0},p(k,[E]){const j={};E&1024&&(j.$$scope={dirty:E,ctx:k}),q.$set(j);const oe={};E&1024&&(oe.$$scope={dirty:E,ctx:k}),Q.$set(oe);const K={};E&1024&&(K.$$scope={dirty:E,ctx:k}),z.$set(K),E&7&&(ue=k[1],L=ut(L,E,Ge,1,k,ue,Fe,Y,pt,rt,null,at));const ae={};E&1&&(ae.selectedLabel=k[0]),J.$set(ae)},i(k){fe||(V(q.$$.fragment,k),V(Q.$$.fragment,k),V(z.$$.fragment,k),V(J.$$.fragment,k),fe=!0)},o(k){B(q.$$.fragment,k),B(Q.$$.fragment,k),B(z.$$.fragment,k),B(J.$$.fragment,k),fe=!1},d(k){k&&c(e),G(q),G(Q),G(z);for(let E=0;E<L.length;E+=1)L[E].d();G(J)}}}function Ht(i){const e=Math.floor(Math.random()*i.length);return i[e]}function Nt(i,e,t){let n,s=[["htmx","HTMX"],["haskell","Haskell"],["ts","TypeScript"],["chatgpt","ChatGPT"]].map(([m,d])=>({label:m,name:d})),l="none";dt(()=>{n=setInterval(()=>{const m=s.filter(({label:r})=>r!==l),d=Ht(m.map(({label:r})=>r));o(d)},Rt(8).seconds())});function o(m){clearInterval(n),t(0,l=m)}return[l,s,o,m=>o(m),m=>o(m)]}class Gt extends re{constructor(e){super(),ie(this,e,Nt,Lt,ce,{})}}export{Gt as default};
