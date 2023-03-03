import{S as re,i as ie,s as ce,D as Be,k as v,r as y,a as T,l as w,m as I,u as k,h as i,c as x,p as d,b as m,H as u,v as he,E as Ve,F as Le,G as He,g as j,d as B,J as pe,K as lt,z as H,A as N,B as F,C as G,L as me,n as ge,M as Ze,N as et,O as ot,o as at,P as tt,Q as rt,R as it}from"../chunks/index.5b3908fd.mjs";function ct(r){let t,e,n,o;return{c(){t=y("From "),e=y(r[1]),n=y(" to "),o=y(r[2])},l(s){t=k(s,"From "),e=k(s,r[1]),n=k(s," to "),o=k(s,r[2])},m(s,a){m(s,t,a),m(s,e,a),m(s,n,a),m(s,o,a)},p(s,a){a&2&&he(e,s[1]),a&4&&he(o,s[2])},d(s){s&&i(t),s&&i(e),s&&i(n),s&&i(o)}}}function ut(r){let t,e,n;return{c(){t=y("From "),e=y(r[1]),n=y(" (Current)")},l(o){t=k(o,"From "),e=k(o,r[1]),n=k(o," (Current)")},m(o,s){m(o,t,s),m(o,e,s),m(o,n,s)},p(o,s){s&2&&he(e,o[1])},d(o){o&&i(t),o&&i(e),o&&i(n)}}}function ft(r){let t,e,n,o,s,a,g,$,h,b,c,l;function f(M,_){return M[2]==="none"?ut:ct}let S=f(r),E=S(r);const C=r[4].default,A=Be(C,r,r[3],null);return{c(){t=v("div"),e=v("span"),n=v("strong"),o=y(r[0]),s=y(":"),a=T(),g=v("span"),E.c(),$=T(),h=v("hr"),b=T(),c=v("p"),A&&A.c(),this.h()},l(M){t=w(M,"DIV",{class:!0});var _=I(t);e=w(_,"SPAN",{class:!0});var R=I(e);n=w(R,"STRONG",{});var K=I(n);o=k(K,r[0]),s=k(K,":"),K.forEach(i),R.forEach(i),a=x(_),g=w(_,"SPAN",{});var U=I(g);E.l(U),U.forEach(i),$=x(_),h=w(_,"HR",{class:!0}),b=x(_),c=w(_,"P",{class:!0});var X=I(c);A&&A.l(X),X.forEach(i),_.forEach(i),this.h()},h(){d(e,"class","text-md md:text-xl "),d(h,"class","my-4"),d(c,"class","text-md md:text-xl text-justify "),d(t,"class","mb-10")},m(M,_){m(M,t,_),u(t,e),u(e,n),u(n,o),u(n,s),u(t,a),u(t,g),E.m(g,null),u(t,$),u(t,h),u(t,b),u(t,c),A&&A.m(c,null),l=!0},p(M,[_]){(!l||_&1)&&he(o,M[0]),S===(S=f(M))&&E?E.p(M,_):(E.d(1),E=S(M),E&&(E.c(),E.m(g,null))),A&&A.p&&(!l||_&8)&&Ve(A,C,M,M[3],l?He(C,M[3],_,null):Le(M[3]),null)},i(M){l||(j(A,M),l=!0)},o(M){B(A,M),l=!1},d(M){M&&i(t),E.d(),A&&A.d(M)}}}function dt(r,t,e){let{$$slots:n={},$$scope:o}=t,{title:s}=t,{startDate:a}=t,{endDate:g="none"}=t;return r.$$set=$=>{"title"in $&&e(0,s=$.title),"startDate"in $&&e(1,a=$.startDate),"endDate"in $&&e(2,g=$.endDate),"$$scope"in $&&e(3,o=$.$$scope)},[s,a,g,o,n]}class je extends re{constructor(t){super(),ie(this,t,dt,ft,ce,{title:0,startDate:1,endDate:2})}}function ht(r){let t,e;const n=r[2].default,o=Be(n,r,r[1],null);return{c(){t=v("div"),o&&o.c(),this.h()},l(s){t=w(s,"DIV",{class:!0});var a=I(t);o&&o.l(a),a.forEach(i),this.h()},h(){d(t,"class","transition-all absolute py-4"),pe(t,"opacity-0",r[0])},m(s,a){m(s,t,a),o&&o.m(t,null),e=!0},p(s,[a]){o&&o.p&&(!e||a&2)&&Ve(o,n,s,s[1],e?He(n,s[1],a,null):Le(s[1]),null),(!e||a&1)&&pe(t,"opacity-0",s[0])},i(s){e||(j(o,s),e=!0)},o(s){B(o,s),e=!1},d(s){s&&i(t),o&&o.d(s)}}}function pt(r,t,e){let{$$slots:n={},$$scope:o}=t,{invisible:s}=t;return r.$$set=a=>{"invisible"in a&&e(0,s=a.invisible),"$$scope"in a&&e(1,o=a.$$scope)},[s,o,n]}class de extends re{constructor(t){super(),ie(this,t,pt,ht,ce,{invisible:0})}}function mt(r){let t,e,n,o,s,a,g,$,h;const b=r[2].default,c=Be(b,r,r[1],null);return{c(){t=v("link"),e=T(),n=v("pre"),o=y("  "),s=v("code"),a=y(`
    `),c&&c.c(),g=y(`
  `),$=y(`
`),this.h()},l(l){const f=lt("svelte-t9apam",document.head);t=w(f,"LINK",{href:!0,rel:!0}),f.forEach(i),e=x(l),n=w(l,"PRE",{});var S=I(n);o=k(S,"  "),s=w(S,"CODE",{class:!0});var E=I(s);a=k(E,`
    `),c&&c.l(E),g=k(E,`
  `),E.forEach(i),$=k(S,`
`),S.forEach(i),this.h()},h(){d(t,"href","themes/prism.css"),d(t,"rel","stylesheet"),d(s,"class",r[0])},m(l,f){u(document.head,t),m(l,e,f),m(l,n,f),u(n,o),u(n,s),u(s,a),c&&c.m(s,null),u(s,g),u(n,$),h=!0},p(l,[f]){c&&c.p&&(!h||f&2)&&Ve(c,b,l,l[1],h?He(b,l[1],f,null):Le(l[1]),null),(!h||f&1)&&d(s,"class",l[0])},i(l){h||(j(c,l),h=!0)},o(l){B(c,l),h=!1},d(l){i(t),l&&i(e),l&&i(n),c&&c.d(l)}}}function gt(r,t,e){let{$$slots:n={},$$scope:o}=t,{lang:s}=t;return r.$$set=a=>{"lang"in a&&e(0,s=a.lang),"$$scope"in a&&e(1,o=a.$$scope)},[s,o,n]}class Ne extends re{constructor(t){super(),ie(this,t,gt,mt,ce,{lang:0})}}function vt(r){let t,e;return{c(){t=v("script"),this.h()},l(n){t=w(n,"SCRIPT",{src:!0});var o=I(t);o.forEach(i),this.h()},h(){me(t.src,e="prism.js")||d(t,"src",e)},m(n,o){m(n,t,o)},d(n){n&&i(t)}}}function wt(r){let t=`
<script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
<!-- have a button POST a click via AJAX -->
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>
        `,e;return{c(){e=y(t)},l(n){e=k(n,t)},m(n,o){m(n,e,o)},p:ge,d(n){n&&i(e)}}}function $t(r){let t,e,n,o,s,a,g,$,h,b,c;return g=new Ne({props:{lang:"language-html",$$slots:{default:[wt]},$$scope:{ctx:r}}}),{c(){t=y("HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=v("br"),n=y(`
      One possible usage is the following, as shown in the technology's official page: `),o=v("br"),s=v("br"),a=T(),H(g.$$.fragment),$=T(),h=v("br"),b=y(`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},l(l){t=k(l,"HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=w(l,"BR",{}),n=k(l,`
      One possible usage is the following, as shown in the technology's official page: `),o=w(l,"BR",{}),s=w(l,"BR",{}),a=x(l),N(g.$$.fragment,l),$=x(l),h=w(l,"BR",{}),b=k(l,`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},m(l,f){m(l,t,f),m(l,e,f),m(l,n,f),m(l,o,f),m(l,s,f),m(l,a,f),F(g,l,f),m(l,$,f),m(l,h,f),m(l,b,f),c=!0},p(l,f){const S={};f&4&&(S.$$scope={dirty:f,ctx:l}),g.$set(S)},i(l){c||(j(g.$$.fragment,l),c=!0)},o(l){B(g.$$.fragment,l),c=!1},d(l){l&&i(t),l&&i(e),l&&i(n),l&&i(o),l&&i(s),l&&i(a),G(g,l),l&&i($),l&&i(h),l&&i(b)}}}function _t(r){let t=`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `,e;return{c(){e=y(t)},l(n){e=k(n,t)},m(n,o){m(n,e,o)},p:ge,d(n){n&&i(e)}}}function bt(r){let t,e,n,o,s,a,g,$,h,b;return h=new Ne({props:{lang:"language-haskell",$$slots:{default:[_t]},$$scope:{ctx:r}}}),{c(){t=y(`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=v("div"),n=v("iframe"),s=T(),a=v("iframe"),$=T(),H(h.$$.fragment),this.h()},l(c){t=k(c,`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=w(c,"DIV",{class:!0});var l=I(e);n=w(l,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),I(n).forEach(i),s=x(l),a=w(l,"IFRAME",{width:!0,height:!0,src:!0,title:!0,frameborder:!0,allow:!0,class:!0}),I(a).forEach(i),l.forEach(i),$=x(c),N(h.$$.fragment,c),this.h()},h(){d(n,"width","560"),d(n,"height","315"),me(n.src,o="https://www.youtube.com/embed/RqvCNb7fKsg")||d(n,"src",o),d(n,"title","YouTube video player"),d(n,"frameborder","0"),d(n,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),n.allowFullscreen=!0,d(n,"class","mx-2"),d(a,"width","560"),d(a,"height","315"),me(a.src,g="https://www.youtube.com/embed/Qa8IfEeBJqk")||d(a,"src",g),d(a,"title","YouTube video player"),d(a,"frameborder","0"),d(a,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),a.allowFullscreen=!0,d(a,"class","mx-2"),d(e,"class","flex justify-center align-center my-6")},m(c,l){m(c,t,l),m(c,e,l),u(e,n),u(e,s),u(e,a),m(c,$,l),F(h,c,l),b=!0},p(c,l){const f={};l&4&&(f.$$scope={dirty:l,ctx:c}),h.$set(f)},i(c){b||(j(h.$$.fragment,c),b=!0)},o(c){B(h.$$.fragment,c),b=!1},d(c){c&&i(t),c&&i(e),c&&i($),G(h,c)}}}function yt(r){let t=`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\`;
}

const lang = "TypeScript";
const sentiment = "awesome";

console.log(sentiment\`\${lang} is \${awesome}\`);

// output: "You appear to feel that TypeScript is awesome"
      `,e;return{c(){e=y(t)},l(n){e=k(n,t)},m(n,o){m(n,e,o)},p:ge,d(n){n&&i(e)}}}function kt(r){let t,e,n;return e=new Ne({props:{lang:"language-typescript",$$slots:{default:[yt]},$$scope:{ctx:r}}}),{c(){t=y(`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),H(e.$$.fragment)},l(o){t=k(o,`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),N(e.$$.fragment,o)},m(o,s){m(o,t,s),F(e,o,s),n=!0},p(o,s){const a={};s&4&&(a.$$scope={dirty:s,ctx:o}),e.$set(a)},i(o){n||(j(e.$$.fragment,o),n=!0)},o(o){B(e.$$.fragment,o),n=!1},d(o){o&&i(t),G(e,o)}}}function It(r){let t,e,n,o;return{c(){t=y(`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=v("a"),n=y("here"),o=y("."),this.h()},l(s){t=k(s,`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=w(s,"A",{class:!0,href:!0});var a=I(e);n=k(a,"here"),a.forEach(i),o=k(s,"."),this.h()},h(){d(e,"class","underline text-yellow-600"),d(e,"href","https://chat.openai.com/chat")},m(s,a){m(s,t,a),m(s,e,a),u(e,n),m(s,o,a)},p:ge,d(s){s&&i(t),s&&i(e),s&&i(o)}}}function Et(r){let t,e,n,o,s,a,g,$,h,b,c=vt();return n=new de({props:{invisible:r[0]("htmx"),$$slots:{default:[$t]},$$scope:{ctx:r}}}),s=new de({props:{invisible:r[0]("haskell"),$$slots:{default:[bt]},$$scope:{ctx:r}}}),g=new de({props:{invisible:r[0]("ts"),$$slots:{default:[kt]},$$scope:{ctx:r}}}),h=new de({props:{invisible:r[0]("chatgpt"),$$slots:{default:[It]},$$scope:{ctx:r}}}),{c(){c&&c.c(),t=T(),e=v("div"),H(n.$$.fragment),o=T(),H(s.$$.fragment),a=T(),H(g.$$.fragment),$=T(),H(h.$$.fragment),this.h()},l(l){c&&c.l(l),t=x(l),e=w(l,"DIV",{class:!0});var f=I(e);N(n.$$.fragment,f),o=x(f),N(s.$$.fragment,f),a=x(f),N(g.$$.fragment,f),$=x(f),N(h.$$.fragment,f),f.forEach(i),this.h()},h(){d(e,"class","relative flex align-center justify-center")},m(l,f){c&&c.m(l,f),m(l,t,f),m(l,e,f),F(n,e,null),u(e,o),F(s,e,null),u(e,a),F(g,e,null),u(e,$),F(h,e,null),b=!0},p(l,[f]){const S={};f&1&&(S.invisible=l[0]("htmx")),f&4&&(S.$$scope={dirty:f,ctx:l}),n.$set(S);const E={};f&1&&(E.invisible=l[0]("haskell")),f&4&&(E.$$scope={dirty:f,ctx:l}),s.$set(E);const C={};f&1&&(C.invisible=l[0]("ts")),f&4&&(C.$$scope={dirty:f,ctx:l}),g.$set(C);const A={};f&1&&(A.invisible=l[0]("chatgpt")),f&4&&(A.$$scope={dirty:f,ctx:l}),h.$set(A)},i(l){b||(j(n.$$.fragment,l),j(s.$$.fragment,l),j(g.$$.fragment,l),j(h.$$.fragment,l),b=!0)},o(l){B(n.$$.fragment,l),B(s.$$.fragment,l),B(g.$$.fragment,l),B(h.$$.fragment,l),b=!1},d(l){c&&c.d(l),l&&i(t),l&&i(e),G(n),G(s),G(g),G(h)}}}function Dt(r,t,e){let n,{selectedLabel:o}=t;return r.$$set=s=>{"selectedLabel"in s&&e(1,o=s.selectedLabel)},r.$$.update=()=>{r.$$.dirty&2&&e(0,n=s=>s!==o)},[n,o]}class Tt extends re{constructor(t){super(),ie(this,t,Dt,Et,ce,{selectedLabel:1})}}const xt=r=>({seconds:()=>r*1e3});function nt(r,t,e){const n=r.slice();return n[6]=t[e].label,n[7]=t[e].name,n}function Mt(r){let t;return{c(){t=y(`My introduction to professional programming, and where my introduction to Clean Code
    eventually happened through the recommendation of a colleague and friend. Typical
    routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
    server-side rendered pages, with a bit of jQuery mixed in.`)},l(e){t=k(e,`My introduction to professional programming, and where my introduction to Clean Code
    eventually happened through the recommendation of a colleague and friend. Typical
    routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
    server-side rendered pages, with a bit of jQuery mixed in.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function At(r){let t;return{c(){t=y(`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
    and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
    unfortunate economical, health and security conditions. I am extremely grateful for the
    opportunity I was given.`)},l(e){t=k(e,`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
    and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
    unfortunate economical, health and security conditions. I am extremely grateful for the
    opportunity I was given.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function St(r){let t;return{c(){t=y(`My current job, through which I have been working with BNP Paribas. All of the skills I've
    mustered - be they from the other professional experiences, or own time spent learning -
    are ultimately put to the test.`)},l(e){t=k(e,`My current job, through which I have been working with BNP Paribas. All of the skills I've
    mustered - be they from the other professional experiences, or own time spent learning -
    are ultimately put to the test.`)},m(e,n){m(e,t,n)},d(e){e&&i(t)}}}function st(r,t){let e,n=t[7]+"",o,s,a,g;function $(){return t[3](t[6])}function h(){return t[4](t[6])}return{key:r,first:null,c(){e=v("div"),o=y(n),s=T(),this.h()},l(b){e=w(b,"DIV",{class:!0,title:!0});var c=I(e);o=k(c,n),s=x(c),c.forEach(i),this.h()},h(){d(e,"class","rounded-l-xl rounded-r-xl border-green-300 border-solid border-2 text-green-300 inline-block p-1 m-1 transition-all cursor-pointer "),d(e,"title",t[7]),pe(e,"scale-110",t[0]===t[6]),this.first=e},m(b,c){m(b,e,c),u(e,o),u(e,s),a||(g=[tt(e,"click",$),tt(e,"keydown",h)],a=!0)},p(b,c){t=b,c&3&&pe(e,"scale-110",t[0]===t[6])},d(b){b&&i(e),a=!1,rt(g)}}}function Ct(r){let t,e,n,o,s,a,g,$,h,b,c,l,f,S,E,C,A,M,_,R,K,U,X,ve,we,$e,_e,be,ye,ke,Z,Ie,Ee,W,De,q,Te,Q,xe,ee,te,le,Me,Ae,Y,L=[],Fe=new Map,Se,z,Ce,ne,se,Pe,ue;W=new je({props:{title:"YouDigital",startDate:"26/02/2019",endDate:"28/03/2021",$$slots:{default:[Mt]},$$scope:{ctx:r}}}),q=new je({props:{title:"B2W Digital (Americanas)",startDate:"10/04/2021",endDate:"30/08/2021",$$slots:{default:[At]},$$scope:{ctx:r}}}),Q=new je({props:{title:"EDGE",startDate:"01/09/2021",$$slots:{default:[St]},$$scope:{ctx:r}}});let fe=r[1];const Ge=p=>p[6];for(let p=0;p<fe.length;p+=1){let D=nt(r,fe,p),V=Ge(D);Fe.set(V,L[p]=st(V,D))}return z=new Tt({props:{selectedLabel:r[0]}}),{c(){t=v("div"),e=v("div"),n=v("span"),o=y(`Gabriel Barbosa

      `),s=v("span"),a=y("Gaspar Veloso"),g=T(),$=v("span"),h=y("Aspiring clean coder"),b=T(),c=v("div"),l=v("img"),S=T(),E=v("div"),C=Ze("svg"),A=Ze("path"),M=T(),_=v("div"),R=v("p"),K=y(`About me:

    `),U=v("br"),X=T(),ve=v("br"),we=y(`

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

    `),$e=v("br"),_e=T(),be=v("br"),ye=y(`

    I've been having a lot of fun in this profession, ever since I started, when I
    was still an undergraduate, up until now, after graduation. I studied in the
    Center of Informatics of the Federal University of Pernambuco.`),ke=T(),Z=v("div"),Ie=y("My Work Experience:"),Ee=T(),H(W.$$.fragment),De=T(),H(q.$$.fragment),Te=T(),H(Q.$$.fragment),xe=T(),ee=v("div"),te=v("span"),le=v("strong"),Me=y("My favourite technologies:"),Ae=T(),Y=v("div");for(let p=0;p<L.length;p+=1)L[p].c();Se=T(),H(z.$$.fragment),Ce=T(),ne=v("div"),se=v("span"),Pe=y("More upcoming..."),this.h()},l(p){t=w(p,"DIV",{class:!0});var D=I(t);e=w(D,"DIV",{class:!0});var V=I(e);n=w(V,"SPAN",{class:!0});var J=I(n);o=k(J,`Gabriel Barbosa

      `),s=w(J,"SPAN",{class:!0});var oe=I(s);a=k(oe,"Gaspar Veloso"),oe.forEach(i),g=x(J),$=w(J,"SPAN",{class:!0});var ae=I($);h=k(ae,"Aspiring clean coder"),ae.forEach(i),J.forEach(i),V.forEach(i),D.forEach(i),b=x(p),c=w(p,"DIV",{class:!0});var Oe=I(c);l=w(Oe,"IMG",{src:!0,alt:!0,class:!0}),Oe.forEach(i),S=x(p),E=w(p,"DIV",{class:!0});var We=I(E);C=et(We,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var qe=I(C);A=et(qe,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),I(A).forEach(i),qe.forEach(i),We.forEach(i),M=x(p),_=w(p,"DIV",{class:!0});var P=I(_);R=w(P,"P",{class:!0});var O=I(R);K=k(O,`About me:

    `),U=w(O,"BR",{}),X=x(O),ve=w(O,"BR",{}),we=k(O,`

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

    `),$e=w(O,"BR",{}),_e=x(O),be=w(O,"BR",{}),ye=k(O,`

    I've been having a lot of fun in this profession, ever since I started, when I
    was still an undergraduate, up until now, after graduation. I studied in the
    Center of Informatics of the Federal University of Pernambuco.`),O.forEach(i),ke=x(P),Z=w(P,"DIV",{class:!0});var Qe=I(Z);Ie=k(Qe,"My Work Experience:"),Qe.forEach(i),Ee=x(P),N(W.$$.fragment,P),De=x(P),N(q.$$.fragment,P),Te=x(P),N(Q.$$.fragment,P),xe=x(P),ee=w(P,"DIV",{class:!0});var ze=I(ee);te=w(ze,"SPAN",{class:!0});var Je=I(te);le=w(Je,"STRONG",{});var Ke=I(le);Me=k(Ke,"My favourite technologies:"),Ke.forEach(i),Je.forEach(i),ze.forEach(i),Ae=x(P),Y=w(P,"DIV",{class:!0});var Ye=I(Y);for(let Re=0;Re<L.length;Re+=1)L[Re].l(Ye);Ye.forEach(i),Se=x(P),N(z.$$.fragment,P),Ce=x(P),ne=w(P,"DIV",{class:!0});var Ue=I(ne);se=w(Ue,"SPAN",{class:!0});var Xe=I(se);Pe=k(Xe,"More upcoming..."),Xe.forEach(i),Ue.forEach(i),P.forEach(i),this.h()},h(){d(s,"class","hidden md:inline "),d($,"class","text-yellow-400 text-sm md:text-lg "),d(n,"class","text-lg md:text-3xl text-yellow-100 p-2 "),d(e,"class","flex flex-row items-center "),d(t,"class","h-[3em] bg-gradient-to-b from-yellow-800 to-yellow-700 flex flex-row align-bottom justify-start "),me(l.src,f="/EuRecortadoFundoBranco.png")||d(l,"src",f),d(l,"alt","A handsome red-headed young man"),d(l,"class","rounded-full h-24 md:h-40 hover:scale-110 transition-all "),d(c,"class","flex flex-row justify-center m-6 "),d(A,"stroke-linecap","round"),d(A,"stroke-linejoin","round"),d(A,"d","M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"),d(C,"xmlns","http://www.w3.org/2000/svg"),d(C,"fill","#CCFFCC"),d(C,"viewBox","0 0 24 24"),d(C,"stroke-width","1.5"),d(C,"stroke","#000000"),d(C,"class","w-20 h-20"),d(E,"class","flex justify-center align-middle "),d(R,"class","text-justify text-md md:text-xl "),d(Z,"class","flex justify-center align-middle m-6 text-xl md:text-2xl "),d(te,"class","text-green-300 text-xl md:text-2xl"),d(ee,"class","text-center mb-6"),d(Y,"class","flex flex-wrap justify-center align-middle space-between "),d(se,"class","text-3xl"),d(ne,"class","flex justify-center align-center mt-[50em]"),d(_,"class","m-6 md:m-20 text-yellow-800 ")},m(p,D){m(p,t,D),u(t,e),u(e,n),u(n,o),u(n,s),u(s,a),u(n,g),u(n,$),u($,h),m(p,b,D),m(p,c,D),u(c,l),m(p,S,D),m(p,E,D),u(E,C),u(C,A),m(p,M,D),m(p,_,D),u(_,R),u(R,K),u(R,U),u(R,X),u(R,ve),u(R,we),u(R,$e),u(R,_e),u(R,be),u(R,ye),u(_,ke),u(_,Z),u(Z,Ie),u(_,Ee),F(W,_,null),u(_,De),F(q,_,null),u(_,Te),F(Q,_,null),u(_,xe),u(_,ee),u(ee,te),u(te,le),u(le,Me),u(_,Ae),u(_,Y);for(let V=0;V<L.length;V+=1)L[V].m(Y,null);u(_,Se),F(z,_,null),u(_,Ce),u(_,ne),u(ne,se),u(se,Pe),ue=!0},p(p,[D]){const V={};D&1024&&(V.$$scope={dirty:D,ctx:p}),W.$set(V);const J={};D&1024&&(J.$$scope={dirty:D,ctx:p}),q.$set(J);const oe={};D&1024&&(oe.$$scope={dirty:D,ctx:p}),Q.$set(oe),D&7&&(fe=p[1],L=ot(L,D,Ge,1,p,fe,Fe,Y,it,st,null,nt));const ae={};D&1&&(ae.selectedLabel=p[0]),z.$set(ae)},i(p){ue||(j(W.$$.fragment,p),j(q.$$.fragment,p),j(Q.$$.fragment,p),j(z.$$.fragment,p),ue=!0)},o(p){B(W.$$.fragment,p),B(q.$$.fragment,p),B(Q.$$.fragment,p),B(z.$$.fragment,p),ue=!1},d(p){p&&i(t),p&&i(b),p&&i(c),p&&i(S),p&&i(E),p&&i(M),p&&i(_),G(W),G(q),G(Q);for(let D=0;D<L.length;D+=1)L[D].d();G(z)}}}function Pt(r){const t=Math.floor(Math.random()*r.length);return r[t]}function Rt(r,t,e){let n,o=[["htmx","HTMX"],["haskell","Haskell"],["ts","TypeScript"],["chatgpt","ChatGPT"]].map(([h,b])=>({label:h,name:b})),s="none";at(()=>{n=setInterval(()=>{const h=o.filter(({label:c})=>c!==s),b=Pt(h.map(({label:c})=>c));a(b)},xt(8).seconds())});function a(h){clearInterval(n),e(0,s=h)}return[s,o,a,h=>a(h),h=>a(h)]}class Bt extends re{constructor(t){super(),ie(this,t,Rt,Ct,ce,{})}}export{Bt as default};
