import{S as re,i as ie,s as ce,D as je,k as p,r as _,a as T,l as m,m as y,u as b,h as i,c as x,p as h,b as w,H as u,v as de,E as Le,F as He,G as Ne,g as B,d as j,J as pe,K as at,z as N,A as F,B as G,C as O,L as me,n as ge,M as tt,N as nt,O as rt,o as it,P as st,Q as ct,R as ut}from"../chunks/index.5b3908fd.mjs";function ft(r){let t,e,n,o;return{c(){t=_("From "),e=_(r[1]),n=_(" to "),o=_(r[2])},l(l){t=b(l,"From "),e=b(l,r[1]),n=b(l," to "),o=b(l,r[2])},m(l,a){w(l,t,a),w(l,e,a),w(l,n,a),w(l,o,a)},p(l,a){a&2&&de(e,l[1]),a&4&&de(o,l[2])},d(l){l&&i(t),l&&i(e),l&&i(n),l&&i(o)}}}function ht(r){let t,e,n;return{c(){t=_("From "),e=_(r[1]),n=_(" (Current)")},l(o){t=b(o,"From "),e=b(o,r[1]),n=b(o," (Current)")},m(o,l){w(o,t,l),w(o,e,l),w(o,n,l)},p(o,l){l&2&&de(e,o[1])},d(o){o&&i(t),o&&i(e),o&&i(n)}}}function dt(r){let t,e,n,o,l,a,g,$,d,v,c,s;function f(E,S){return E[2]==="none"?ht:ft}let C=f(r),A=C(r);const V=r[4].default,I=je(V,r,r[3],null);return{c(){t=p("div"),e=p("span"),n=p("strong"),o=_(r[0]),l=_(":"),a=T(),g=p("span"),A.c(),$=T(),d=p("hr"),v=T(),c=p("p"),I&&I.c(),this.h()},l(E){t=m(E,"DIV",{class:!0});var S=y(t);e=m(S,"SPAN",{class:!0});var M=y(e);n=m(M,"STRONG",{});var P=y(n);o=b(P,r[0]),l=b(P,":"),P.forEach(i),M.forEach(i),a=x(S),g=m(S,"SPAN",{});var U=y(g);A.l(U),U.forEach(i),$=x(S),d=m(S,"HR",{class:!0}),v=x(S),c=m(S,"P",{class:!0});var X=y(c);I&&I.l(X),X.forEach(i),S.forEach(i),this.h()},h(){h(e,"class","text-md md:text-xl "),h(d,"class","my-4"),h(c,"class","text-md md:text-xl text-justify "),h(t,"class","mb-10")},m(E,S){w(E,t,S),u(t,e),u(e,n),u(n,o),u(n,l),u(t,a),u(t,g),A.m(g,null),u(t,$),u(t,d),u(t,v),u(t,c),I&&I.m(c,null),s=!0},p(E,[S]){(!s||S&1)&&de(o,E[0]),C===(C=f(E))&&A?A.p(E,S):(A.d(1),A=C(E),A&&(A.c(),A.m(g,null))),I&&I.p&&(!s||S&8)&&Le(I,V,E,E[3],s?Ne(V,E[3],S,null):He(E[3]),null)},i(E){s||(B(I,E),s=!0)},o(E){j(I,E),s=!1},d(E){E&&i(t),A.d(),I&&I.d(E)}}}function pt(r,t,e){let{$$slots:n={},$$scope:o}=t,{title:l}=t,{startDate:a}=t,{endDate:g="none"}=t;return r.$$set=$=>{"title"in $&&e(0,l=$.title),"startDate"in $&&e(1,a=$.startDate),"endDate"in $&&e(2,g=$.endDate),"$$scope"in $&&e(3,o=$.$$scope)},[l,a,g,o,n]}class Be extends re{constructor(t){super(),ie(this,t,pt,dt,ce,{title:0,startDate:1,endDate:2})}}function mt(r){let t,e;const n=r[2].default,o=je(n,r,r[1],null);return{c(){t=p("div"),o&&o.c(),this.h()},l(l){t=m(l,"DIV",{class:!0});var a=y(t);o&&o.l(a),a.forEach(i),this.h()},h(){h(t,"class","transition-all absolute py-4 w-full h-[700px] overflow-x-scroll"),pe(t,"opacity-0",r[0])},m(l,a){w(l,t,a),o&&o.m(t,null),e=!0},p(l,[a]){o&&o.p&&(!e||a&2)&&Le(o,n,l,l[1],e?Ne(n,l[1],a,null):He(l[1]),null),(!e||a&1)&&pe(t,"opacity-0",l[0])},i(l){e||(B(o,l),e=!0)},o(l){j(o,l),e=!1},d(l){l&&i(t),o&&o.d(l)}}}function gt(r,t,e){let{$$slots:n={},$$scope:o}=t,{invisible:l}=t;return r.$$set=a=>{"invisible"in a&&e(0,l=a.invisible),"$$scope"in a&&e(1,o=a.$$scope)},[l,o,n]}class he extends re{constructor(t){super(),ie(this,t,gt,mt,ce,{invisible:0})}}function vt(r){let t,e,n,o,l,a,g,$,d;const v=r[2].default,c=je(v,r,r[1],null);return{c(){t=p("link"),e=T(),n=p("pre"),o=_("  "),l=p("code"),a=_(`
    `),c&&c.c(),g=_(`
  `),$=_(`
`),this.h()},l(s){const f=at("svelte-t9apam",document.head);t=m(f,"LINK",{href:!0,rel:!0}),f.forEach(i),e=x(s),n=m(s,"PRE",{});var C=y(n);o=b(C,"  "),l=m(C,"CODE",{class:!0});var A=y(l);a=b(A,`
    `),c&&c.l(A),g=b(A,`
  `),A.forEach(i),$=b(C,`
`),C.forEach(i),this.h()},h(){h(t,"href","themes/prism.css"),h(t,"rel","stylesheet"),h(l,"class",r[0])},m(s,f){u(document.head,t),w(s,e,f),w(s,n,f),u(n,o),u(n,l),u(l,a),c&&c.m(l,null),u(l,g),u(n,$),d=!0},p(s,[f]){c&&c.p&&(!d||f&2)&&Le(c,v,s,s[1],d?Ne(v,s[1],f,null):He(s[1]),null),(!d||f&1)&&h(l,"class",s[0])},i(s){d||(B(c,s),d=!0)},o(s){j(c,s),d=!1},d(s){i(t),s&&i(e),s&&i(n),c&&c.d(s)}}}function wt(r,t,e){let{$$slots:n={},$$scope:o}=t,{lang:l}=t;return r.$$set=a=>{"lang"in a&&e(0,l=a.lang),"$$scope"in a&&e(1,o=a.$$scope)},[l,o,n]}class Fe extends re{constructor(t){super(),ie(this,t,wt,vt,ce,{lang:0})}}function $t(r){let t,e;return{c(){t=p("script"),this.h()},l(n){t=m(n,"SCRIPT",{src:!0});var o=y(t);o.forEach(i),this.h()},h(){me(t.src,e="prism.js")||h(t,"src",e)},m(n,o){w(n,t,o)},d(n){n&&i(t)}}}function _t(r){let t=`
<script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
<!-- have a button POST a click via AJAX -->
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>
        `,e;return{c(){e=_(t)},l(n){e=b(n,t)},m(n,o){w(n,e,o)},p:ge,d(n){n&&i(e)}}}function bt(r){let t,e,n,o,l,a,g,$,d,v,c;return g=new Fe({props:{lang:"language-html",$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){t=_("HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=p("br"),n=_(`
      One possible usage is the following, as shown in the technology's official page: `),o=p("br"),l=p("br"),a=T(),N(g.$$.fragment),$=T(),d=p("br"),v=_(`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},l(s){t=b(s,"HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=m(s,"BR",{}),n=b(s,`
      One possible usage is the following, as shown in the technology's official page: `),o=m(s,"BR",{}),l=m(s,"BR",{}),a=x(s),F(g.$$.fragment,s),$=x(s),d=m(s,"BR",{}),v=b(s,`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},m(s,f){w(s,t,f),w(s,e,f),w(s,n,f),w(s,o,f),w(s,l,f),w(s,a,f),G(g,s,f),w(s,$,f),w(s,d,f),w(s,v,f),c=!0},p(s,f){const C={};f&4&&(C.$$scope={dirty:f,ctx:s}),g.$set(C)},i(s){c||(B(g.$$.fragment,s),c=!0)},o(s){j(g.$$.fragment,s),c=!1},d(s){s&&i(t),s&&i(e),s&&i(n),s&&i(o),s&&i(l),s&&i(a),O(g,s),s&&i($),s&&i(d),s&&i(v)}}}function yt(r){let t=`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `,e;return{c(){e=_(t)},l(n){e=b(n,t)},m(n,o){w(n,e,o)},p:ge,d(n){n&&i(e)}}}function kt(r){let t,e,n,o,l,a,g,$,d,v;return d=new Fe({props:{lang:"language-haskell",$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){t=_(`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=p("div"),n=p("iframe"),l=T(),a=p("iframe"),$=T(),N(d.$$.fragment),this.h()},l(c){t=b(c,`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=m(c,"DIV",{class:!0});var s=y(e);n=m(s,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),y(n).forEach(i),l=x(s),a=m(s,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),y(a).forEach(i),s.forEach(i),$=x(c),F(d.$$.fragment,c),this.h()},h(){h(n,"width","560"),h(n,"height","315"),me(n.src,o="https://www.youtube.com/embed/RqvCNb7fKsg")||h(n,"src",o),h(n,"title","YouTube video player"),h(n,"frameborder","0"),h(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,h(n,"class","mx-2"),h(a,"width","560"),h(a,"height","315"),me(a.src,g="https://www.youtube.com/embed/Qa8IfEeBJqk")||h(a,"src",g),h(a,"title","YouTube video player"),h(a,"frameborder","0"),h(a,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),a.allowFullscreen=!0,h(a,"class","mx-2"),h(e,"class","flex justify-center my-6")},m(c,s){w(c,t,s),w(c,e,s),u(e,n),u(e,l),u(e,a),w(c,$,s),G(d,c,s),v=!0},p(c,s){const f={};s&4&&(f.$$scope={dirty:s,ctx:c}),d.$set(f)},i(c){v||(B(d.$$.fragment,c),v=!0)},o(c){j(d.$$.fragment,c),v=!1},d(c){c&&i(t),c&&i(e),c&&i($),O(d,c)}}}function It(r){let t=`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\`;
}

const lang = "TypeScript";
const sentiment = "awesome";

console.log(sentiment\`\${lang} is \${awesome}\`);

// output: "You appear to feel that TypeScript is awesome"
      `,e;return{c(){e=_(t)},l(n){e=b(n,t)},m(n,o){w(n,e,o)},p:ge,d(n){n&&i(e)}}}function Et(r){let t,e,n;return e=new Fe({props:{lang:"language-typescript",$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){t=_(`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),N(e.$$.fragment)},l(o){t=b(o,`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),F(e.$$.fragment,o)},m(o,l){w(o,t,l),G(e,o,l),n=!0},p(o,l){const a={};l&4&&(a.$$scope={dirty:l,ctx:o}),e.$set(a)},i(o){n||(B(e.$$.fragment,o),n=!0)},o(o){j(e.$$.fragment,o),n=!1},d(o){o&&i(t),O(e,o)}}}function Dt(r){let t,e,n,o;return{c(){t=_(`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=p("a"),n=_("here"),o=_("."),this.h()},l(l){t=b(l,`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=m(l,"A",{class:!0,href:!0});var a=y(e);n=b(a,"here"),a.forEach(i),o=b(l,"."),this.h()},h(){h(e,"class","underline text-yellow-600"),h(e,"href","https://chat.openai.com/chat")},m(l,a){w(l,t,a),w(l,e,a),u(e,n),w(l,o,a)},p:ge,d(l){l&&i(t),l&&i(e),l&&i(o)}}}function Tt(r){let t,e,n,o,l,a,g,$,d,v,c=$t();return n=new he({props:{invisible:r[0]("htmx"),$$slots:{default:[bt]},$$scope:{ctx:r}}}),l=new he({props:{invisible:r[0]("haskell"),$$slots:{default:[kt]},$$scope:{ctx:r}}}),g=new he({props:{invisible:r[0]("ts"),$$slots:{default:[Et]},$$scope:{ctx:r}}}),d=new he({props:{invisible:r[0]("chatgpt"),$$slots:{default:[Dt]},$$scope:{ctx:r}}}),{c(){c&&c.c(),t=T(),e=p("div"),N(n.$$.fragment),o=T(),N(l.$$.fragment),a=T(),N(g.$$.fragment),$=T(),N(d.$$.fragment),this.h()},l(s){c&&c.l(s),t=x(s),e=m(s,"DIV",{class:!0});var f=y(e);F(n.$$.fragment,f),o=x(f),F(l.$$.fragment,f),a=x(f),F(g.$$.fragment,f),$=x(f),F(d.$$.fragment,f),f.forEach(i),this.h()},h(){h(e,"class","relative")},m(s,f){c&&c.m(s,f),w(s,t,f),w(s,e,f),G(n,e,null),u(e,o),G(l,e,null),u(e,a),G(g,e,null),u(e,$),G(d,e,null),v=!0},p(s,[f]){const C={};f&1&&(C.invisible=s[0]("htmx")),f&4&&(C.$$scope={dirty:f,ctx:s}),n.$set(C);const A={};f&1&&(A.invisible=s[0]("haskell")),f&4&&(A.$$scope={dirty:f,ctx:s}),l.$set(A);const V={};f&1&&(V.invisible=s[0]("ts")),f&4&&(V.$$scope={dirty:f,ctx:s}),g.$set(V);const I={};f&1&&(I.invisible=s[0]("chatgpt")),f&4&&(I.$$scope={dirty:f,ctx:s}),d.$set(I)},i(s){v||(B(n.$$.fragment,s),B(l.$$.fragment,s),B(g.$$.fragment,s),B(d.$$.fragment,s),v=!0)},o(s){j(n.$$.fragment,s),j(l.$$.fragment,s),j(g.$$.fragment,s),j(d.$$.fragment,s),v=!1},d(s){c&&c.d(s),s&&i(t),s&&i(e),O(n),O(l),O(g),O(d)}}}function xt(r,t,e){let n,{selectedLabel:o}=t;return r.$$set=l=>{"selectedLabel"in l&&e(1,o=l.selectedLabel)},r.$$.update=()=>{r.$$.dirty&2&&e(0,n=l=>l!==o)},[n,o]}class Mt extends re{constructor(t){super(),ie(this,t,xt,Tt,ce,{selectedLabel:1})}}const At=r=>({seconds:()=>r*1e3});function lt(r,t,e){const n=r.slice();return n[6]=t[e].label,n[7]=t[e].name,n}function St(r){let t;return{c(){t=_(`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},l(e){t=b(e,`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},m(e,n){w(e,t,n)},d(e){e&&i(t)}}}function Ct(r){let t;return{c(){t=_(`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am extremely grateful for the
      opportunity I was given.`)},l(e){t=b(e,`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am extremely grateful for the
      opportunity I was given.`)},m(e,n){w(e,t,n)},d(e){e&&i(t)}}}function Pt(r){let t;return{c(){t=_(`My current job, through which I have been working with BNP Paribas. All of the skills I've
      mustered - be they from the other professional experiences, or own time spent learning -
      are ultimately put to the test.`)},l(e){t=b(e,`My current job, through which I have been working with BNP Paribas. All of the skills I've
      mustered - be they from the other professional experiences, or own time spent learning -
      are ultimately put to the test.`)},m(e,n){w(e,t,n)},d(e){e&&i(t)}}}function ot(r,t){let e,n=t[7]+"",o,l,a,g;function $(){return t[3](t[6])}function d(){return t[4](t[6])}return{key:r,first:null,c(){e=p("div"),o=_(n),l=T(),this.h()},l(v){e=m(v,"DIV",{class:!0,title:!0});var c=y(e);o=b(c,n),l=x(c),c.forEach(i),this.h()},h(){h(e,"class","rounded-l-xl rounded-r-xl border-green-300 border-solid border-2 text-green-300 inline-block p-1 m-1 transition-all cursor-pointer "),h(e,"title",t[7]),pe(e,"scale-110",t[0]===t[6]),this.first=e},m(v,c){w(v,e,c),u(e,o),u(e,l),a||(g=[st(e,"click",$),st(e,"keydown",d)],a=!0)},p(v,c){t=v,c&3&&pe(e,"scale-110",t[0]===t[6])},d(v){v&&i(e),a=!1,ct(g)}}}function Rt(r){let t,e,n,o,l,a,g,$,d,v,c,s,f,C,A,V,I,E,S,M,P,U,X,ve,we,$e,_e,be,ye,ke,Ie,Z,Ee,De,q,Te,Q,xe,z,Me,ee,te,le,Ae,Se,Y,H=[],Ge=new Map,Ce,J,Pe,ne,se,Re,ue;q=new Be({props:{title:"YouDigital",startDate:"26/02/2019",endDate:"28/03/2021",$$slots:{default:[St]},$$scope:{ctx:r}}}),Q=new Be({props:{title:"B2W Digital (Americanas)",startDate:"10/04/2021",endDate:"30/08/2021",$$slots:{default:[Ct]},$$scope:{ctx:r}}}),z=new Be({props:{title:"EDGE",startDate:"01/09/2021",$$slots:{default:[Pt]},$$scope:{ctx:r}}});let fe=r[1];const Oe=k=>k[6];for(let k=0;k<fe.length;k+=1){let D=lt(r,fe,k),L=Oe(D);Ge.set(L,H[k]=ot(L,D))}return J=new Mt({props:{selectedLabel:r[0]}}),{c(){t=p("div"),e=p("div"),n=p("div"),o=p("span"),l=_(`Gabriel Barbosa

        `),a=p("span"),g=_("Gaspar Veloso"),$=T(),d=p("span"),v=_("Aspiring clean coder"),c=T(),s=p("div"),f=p("img"),A=T(),V=p("div"),I=tt("svg"),E=tt("path"),S=T(),M=p("div"),P=p("p"),U=_(`About me:

      `),X=p("br"),ve=T(),we=p("br"),$e=_(`

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

      `),_e=p("br"),be=T(),ye=p("br"),ke=_(`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),Ie=T(),Z=p("div"),Ee=_("My Work Experience:"),De=T(),N(q.$$.fragment),Te=T(),N(Q.$$.fragment),xe=T(),N(z.$$.fragment),Me=T(),ee=p("div"),te=p("span"),le=p("strong"),Ae=_("My favourite technologies:"),Se=T(),Y=p("div");for(let k=0;k<H.length;k+=1)H[k].c();Ce=T(),N(J.$$.fragment),Pe=T(),ne=p("div"),se=p("span"),Re=_("More upcoming..."),this.h()},l(k){t=m(k,"DIV",{});var D=y(t);e=m(D,"DIV",{class:!0});var L=y(e);n=m(L,"DIV",{class:!0});var oe=y(n);o=m(oe,"SPAN",{class:!0});var K=y(o);l=b(K,`Gabriel Barbosa

        `),a=m(K,"SPAN",{class:!0});var ae=y(a);g=b(ae,"Gaspar Veloso"),ae.forEach(i),$=x(K),d=m(K,"SPAN",{class:!0});var We=y(d);v=b(We,"Aspiring clean coder"),We.forEach(i),K.forEach(i),oe.forEach(i),L.forEach(i),c=x(D),s=m(D,"DIV",{class:!0});var qe=y(s);f=m(qe,"IMG",{src:!0,alt:!0,class:!0}),qe.forEach(i),A=x(D),V=m(D,"DIV",{class:!0});var Qe=y(V);I=nt(Qe,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var ze=y(I);E=nt(ze,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),y(E).forEach(i),ze.forEach(i),Qe.forEach(i),S=x(D),M=m(D,"DIV",{class:!0});var R=y(M);P=m(R,"P",{class:!0});var W=y(P);U=b(W,`About me:

      `),X=m(W,"BR",{}),ve=x(W),we=m(W,"BR",{}),$e=b(W,`

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

      `),_e=m(W,"BR",{}),be=x(W),ye=m(W,"BR",{}),ke=b(W,`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),W.forEach(i),Ie=x(R),Z=m(R,"DIV",{class:!0});var Je=y(Z);Ee=b(Je,"My Work Experience:"),Je.forEach(i),De=x(R),F(q.$$.fragment,R),Te=x(R),F(Q.$$.fragment,R),xe=x(R),F(z.$$.fragment,R),Me=x(R),ee=m(R,"DIV",{class:!0});var Ke=y(ee);te=m(Ke,"SPAN",{class:!0});var Ye=y(te);le=m(Ye,"STRONG",{});var Ue=y(le);Ae=b(Ue,"My favourite technologies:"),Ue.forEach(i),Ye.forEach(i),Ke.forEach(i),Se=x(R),Y=m(R,"DIV",{class:!0});var Xe=y(Y);for(let Ve=0;Ve<H.length;Ve+=1)H[Ve].l(Xe);Xe.forEach(i),Ce=x(R),F(J.$$.fragment,R),Pe=x(R),ne=m(R,"DIV",{class:!0});var Ze=y(ne);se=m(Ze,"SPAN",{class:!0});var et=y(se);Re=b(et,"More upcoming..."),et.forEach(i),Ze.forEach(i),R.forEach(i),D.forEach(i),this.h()},h(){h(a,"class","hidden md:inline "),h(d,"class","text-yellow-400 text-sm md:text-lg "),h(o,"class","text-lg md:text-3xl text-yellow-100 p-2 "),h(n,"class","flex flex-row items-center "),h(e,"class","h-[3em] bg-gradient-to-b from-yellow-800 to-yellow-700 flex flex-row justify-start "),me(f.src,C="/EuRecortadoFundoBranco.png")||h(f,"src",C),h(f,"alt","A handsome red-headed young man"),h(f,"class","rounded-full h-24 md:h-40 hover:scale-110 transition-all "),h(s,"class","flex flex-row justify-center m-6 "),h(E,"stroke-linecap","round"),h(E,"stroke-linejoin","round"),h(E,"d","M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"),h(I,"xmlns","http://www.w3.org/2000/svg"),h(I,"fill","#CCFFCC"),h(I,"viewBox","0 0 24 24"),h(I,"stroke-width","1.5"),h(I,"stroke","#000000"),h(I,"class","w-20 h-20"),h(V,"class","flex justify-center "),h(P,"class","text-justify text-md md:text-xl "),h(Z,"class","flex justify-center m-6 text-xl md:text-2xl "),h(te,"class","text-green-300 text-xl md:text-2xl"),h(ee,"class","text-center mb-6"),h(Y,"class","flex flex-wrap justify-center space-between "),h(se,"class","text-3xl"),h(ne,"class","flex justify-center mt-[50em]"),h(M,"class","m-6 md:m-20 text-yellow-800 ")},m(k,D){w(k,t,D),u(t,e),u(e,n),u(n,o),u(o,l),u(o,a),u(a,g),u(o,$),u(o,d),u(d,v),u(t,c),u(t,s),u(s,f),u(t,A),u(t,V),u(V,I),u(I,E),u(t,S),u(t,M),u(M,P),u(P,U),u(P,X),u(P,ve),u(P,we),u(P,$e),u(P,_e),u(P,be),u(P,ye),u(P,ke),u(M,Ie),u(M,Z),u(Z,Ee),u(M,De),G(q,M,null),u(M,Te),G(Q,M,null),u(M,xe),G(z,M,null),u(M,Me),u(M,ee),u(ee,te),u(te,le),u(le,Ae),u(M,Se),u(M,Y);for(let L=0;L<H.length;L+=1)H[L].m(Y,null);u(M,Ce),G(J,M,null),u(M,Pe),u(M,ne),u(ne,se),u(se,Re),ue=!0},p(k,[D]){const L={};D&1024&&(L.$$scope={dirty:D,ctx:k}),q.$set(L);const oe={};D&1024&&(oe.$$scope={dirty:D,ctx:k}),Q.$set(oe);const K={};D&1024&&(K.$$scope={dirty:D,ctx:k}),z.$set(K),D&7&&(fe=k[1],H=rt(H,D,Oe,1,k,fe,Ge,Y,ut,ot,null,lt));const ae={};D&1&&(ae.selectedLabel=k[0]),J.$set(ae)},i(k){ue||(B(q.$$.fragment,k),B(Q.$$.fragment,k),B(z.$$.fragment,k),B(J.$$.fragment,k),ue=!0)},o(k){j(q.$$.fragment,k),j(Q.$$.fragment,k),j(z.$$.fragment,k),j(J.$$.fragment,k),ue=!1},d(k){k&&i(t),O(q),O(Q),O(z);for(let D=0;D<H.length;D+=1)H[D].d();O(J)}}}function Vt(r){const t=Math.floor(Math.random()*r.length);return r[t]}function Bt(r,t,e){let n,o=[["htmx","HTMX"],["haskell","Haskell"],["ts","TypeScript"],["chatgpt","ChatGPT"]].map(([d,v])=>({label:d,name:v})),l="none";it(()=>{n=setInterval(()=>{const d=o.filter(({label:c})=>c!==l),v=Vt(d.map(({label:c})=>c));a(v)},At(8).seconds())});function a(d){clearInterval(n),e(0,l=d)}return[l,o,a,d=>a(d),d=>a(d)]}class Lt extends re{constructor(t){super(),ie(this,t,Bt,Rt,ce,{})}}export{Lt as default};
