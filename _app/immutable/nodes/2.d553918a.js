import{S as be,i as we,s as ve,C as it,k as b,q as v,a as S,l as w,m as D,r as _,h as l,c as C,n as p,b as m,G as u,u as ge,D as ut,E as ct,F as ft,g as B,d as P,e as et,v as pt,f as dt,J as $e,y as L,z as V,A as H,B as J,H as le,K as tt,L as nt,M as ht,o as mt,N as st,O as ot,P as gt,Q as $t}from"../chunks/index.201e1dc2.js";import{C as _e}from"../chunks/CodeBlock.c805c78d.js";function bt(r){let t,e,s,n;return{c(){t=v("From "),e=v(r[1]),s=v(" to "),n=v(r[2])},l(o){t=_(o,"From "),e=_(o,r[1]),s=_(o," to "),n=_(o,r[2])},m(o,a){m(o,t,a),m(o,e,a),m(o,s,a),m(o,n,a)},p(o,a){a&2&&ge(e,o[1]),a&4&&ge(n,o[2])},d(o){o&&l(t),o&&l(e),o&&l(s),o&&l(n)}}}function wt(r){let t,e,s;return{c(){t=v("From "),e=v(r[1]),s=v(" (Current)")},l(n){t=_(n,"From "),e=_(n,r[1]),s=_(n," (Current)")},m(n,o){m(n,t,o),m(n,e,o),m(n,s,o)},p(n,o){o&2&&ge(e,n[1])},d(n){n&&l(t),n&&l(e),n&&l(s)}}}function vt(r){let t,e,s,n,o,a,c,h,$,k,f,i;function E(I,R){return I[2]==="none"?wt:bt}let g=E(r),d=g(r);const N=r[4].default,M=it(N,r,r[3],null);return{c(){t=b("div"),e=b("span"),s=b("strong"),n=v(r[0]),o=v(":"),a=S(),c=b("span"),d.c(),h=S(),$=b("hr"),k=S(),f=b("p"),M&&M.c(),this.h()},l(I){t=w(I,"DIV",{class:!0});var R=D(t);e=w(R,"SPAN",{class:!0});var T=D(e);s=w(T,"STRONG",{});var A=D(s);n=_(A,r[0]),o=_(A,":"),A.forEach(l),T.forEach(l),a=C(R),c=w(R,"SPAN",{});var Z=D(c);d.l(Z),Z.forEach(l),h=C(R),$=w(R,"HR",{class:!0}),k=C(R),f=w(R,"P",{class:!0});var ee=D(f);M&&M.l(ee),ee.forEach(l),R.forEach(l),this.h()},h(){p(e,"class","text-md md:text-xl "),p($,"class","my-4"),p(f,"class","text-md md:text-xl text-justify "),p(t,"class","mb-10")},m(I,R){m(I,t,R),u(t,e),u(e,s),u(s,n),u(s,o),u(t,a),u(t,c),d.m(c,null),u(t,h),u(t,$),u(t,k),u(t,f),M&&M.m(f,null),i=!0},p(I,[R]){(!i||R&1)&&ge(n,I[0]),g===(g=E(I))&&d?d.p(I,R):(d.d(1),d=g(I),d&&(d.c(),d.m(c,null))),M&&M.p&&(!i||R&8)&&ut(M,N,I,I[3],i?ft(N,I[3],R,null):ct(I[3]),null)},i(I){i||(B(M,I),i=!0)},o(I){P(M,I),i=!1},d(I){I&&l(t),d.d(),M&&M.d(I)}}}function _t(r,t,e){let{$$slots:s={},$$scope:n}=t,{title:o}=t,{startDate:a}=t,{endDate:c="none"}=t;return r.$$set=h=>{"title"in h&&e(0,o=h.title),"startDate"in h&&e(1,a=h.startDate),"endDate"in h&&e(2,c=h.endDate),"$$scope"in h&&e(3,n=h.$$scope)},[o,a,c,n,s]}class de extends be{constructor(t){super(),we(this,t,_t,vt,ve,{title:0,startDate:1,endDate:2})}}function at(r){let t,e,s,n=yt();const o=r[2].default,a=it(o,r,r[1],null);return{c(){n&&n.c(),t=S(),e=b("div"),a&&a.c(),this.h()},l(c){n&&n.l(c),t=C(c),e=w(c,"DIV",{class:!0});var h=D(e);a&&a.l(h),h.forEach(l),this.h()},h(){p(e,"class","py-4")},m(c,h){n&&n.m(c,h),m(c,t,h),m(c,e,h),a&&a.m(e,null),s=!0},p(c,h){a&&a.p&&(!s||h&2)&&ut(a,o,c,c[1],s?ft(o,c[1],h,null):ct(c[1]),null)},i(c){s||(B(a,c),s=!0)},o(c){P(a,c),s=!1},d(c){n&&n.d(c),c&&l(t),c&&l(e),a&&a.d(c)}}}function yt(r){let t,e;return{c(){t=b("script"),this.h()},l(s){t=w(s,"SCRIPT",{src:!0});var n=D(t);n.forEach(l),this.h()},h(){$e(t.src,e="prism.js")||p(t,"src",e)},m(s,n){m(s,t,n)},d(s){s&&l(t)}}}function kt(r){let t,e,s=r[0]&&at(r);return{c(){s&&s.c(),t=et()},l(n){s&&s.l(n),t=et()},m(n,o){s&&s.m(n,o),m(n,t,o),e=!0},p(n,[o]){n[0]?s?(s.p(n,o),o&1&&B(s,1)):(s=at(n),s.c(),B(s,1),s.m(t.parentNode,t)):s&&(pt(),P(s,1,1,()=>{s=null}),dt())},i(n){e||(B(s),e=!0)},o(n){P(s),e=!1},d(n){s&&s.d(n),n&&l(t)}}}function It(r,t,e){let{$$slots:s={},$$scope:n}=t,{visible:o}=t;return r.$$set=a=>{"visible"in a&&e(0,o=a.visible),"$$scope"in a&&e(1,n=a.$$scope)},[o,n,s]}class re extends be{constructor(t){super(),we(this,t,It,kt,ve,{visible:0})}}function Tt(r){let t="    ",e,s;return{c(){e=v(t),s=v(`
        <script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
        <button hx-post="/clicked" hx-swap="outerHTML">
          Click Me
        </button>`)},l(n){e=_(n,t),s=_(n,`
        <script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
        <button hx-post="/clicked" hx-swap="outerHTML">
          Click Me
        </button>`)},m(n,o){m(n,e,o),m(n,s,o)},p:le,d(n){n&&l(e),n&&l(s)}}}function Dt(r){let t,e,s,n,o,a,c,h,$,k,f;return c=new _e({props:{lang:"language-html",$$slots:{default:[Tt]},$$scope:{ctx:r}}}),{c(){t=v("HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=b("br"),s=v(`
      One possible usage is the following, as shown in the technology's official page: `),n=b("br"),o=b("br"),a=S(),L(c.$$.fragment),h=S(),$=b("br"),k=v(`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},l(i){t=_(i,"HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. "),e=w(i,"BR",{}),s=_(i,`
      One possible usage is the following, as shown in the technology's official page: `),n=w(i,"BR",{}),o=w(i,"BR",{}),a=C(i),V(c.$$.fragment,i),h=C(i),$=w(i,"BR",{}),k=_(i,`
      This will allow the result of the POST request, to path "/clicked", to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.`)},m(i,E){m(i,t,E),m(i,e,E),m(i,s,E),m(i,n,E),m(i,o,E),m(i,a,E),H(c,i,E),m(i,h,E),m(i,$,E),m(i,k,E),f=!0},p(i,E){const g={};E&4&&(g.$$scope={dirty:E,ctx:i}),c.$set(g)},i(i){f||(B(c.$$.fragment,i),f=!0)},o(i){P(c.$$.fragment,i),f=!1},d(i){i&&l(t),i&&l(e),i&&l(s),i&&l(n),i&&l(o),i&&l(a),J(c,i),i&&l(h),i&&l($),i&&l(k)}}}function Et(r){let t=`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `,e;return{c(){e=v(t)},l(s){e=_(s,t)},m(s,n){m(s,e,n)},p:le,d(s){s&&l(e)}}}function xt(r){let t,e,s,n,o,a,c,h,$,k;return $=new _e({props:{lang:"language-haskell",$$slots:{default:[Et]},$$scope:{ctx:r}}}),{c(){t=v(`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=b("div"),s=b("iframe"),o=S(),a=b("iframe"),h=S(),L($.$$.fragment),this.h()},l(f){t=_(f,`Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It's not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    `),e=w(f,"DIV",{class:!0});var i=D(e);s=w(i,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),D(s).forEach(l),o=C(i),a=w(i,"IFRAME",{class:!0,src:!0,title:!0,frameborder:!0,allow:!0}),D(a).forEach(l),i.forEach(l),h=C(f),V($.$$.fragment,f),this.h()},h(){p(s,"class","p-6 md:h-[400px] aspect-video"),$e(s.src,n="https://www.youtube.com/embed/RqvCNb7fKsg")||p(s,"src",n),p(s,"title","YouTube video player"),p(s,"frameborder","0"),p(s,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),s.allowFullscreen=!0,p(a,"class","p-6 md:h-[400px] aspect-video"),$e(a.src,c="https://www.youtube.com/embed/Qa8IfEeBJqk")||p(a,"src",c),p(a,"title","YouTube video player"),p(a,"frameborder","0"),p(a,"allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"),a.allowFullscreen=!0,p(e,"class","flex flex-col md:flex-row justify-center")},m(f,i){m(f,t,i),m(f,e,i),u(e,s),u(e,o),u(e,a),m(f,h,i),H($,f,i),k=!0},p(f,i){const E={};i&4&&(E.$$scope={dirty:i,ctx:f}),$.$set(E)},i(f){k||(B($.$$.fragment,f),k=!0)},o(f){P($.$$.fragment,f),k=!1},d(f){f&&l(t),f&&l(e),f&&l(h),J($,f)}}}function St(r){let t=`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\` : "I do not know what you are talking about";
}

const lang = "TypeScript";
const opinion = "awesome";

console.log(sentiment\`\${lang} is \${opinion}\`);

// output: "You appear to feel that TypeScript is awesome"
      `,e;return{c(){e=v(t)},l(s){e=_(s,t)},m(s,n){m(s,e,n)},p:le,d(s){s&&l(e)}}}function Ct(r){let t,e,s;return e=new _e({props:{lang:"language-typescript",$$slots:{default:[St]},$$scope:{ctx:r}}}),{c(){t=v(`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),L(e.$$.fragment)},l(n){t=_(n,`We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    `),V(e.$$.fragment,n)},m(n,o){m(n,t,o),H(e,n,o),s=!0},p(n,o){const a={};o&4&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){s||(B(e.$$.fragment,n),s=!0)},o(n){P(e.$$.fragment,n),s=!1},d(n){n&&l(t),J(e,n)}}}function Mt(r){let t,e,s,n;return{c(){t=v(`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=b("a"),s=v("here"),n=v("."),this.h()},l(o){t=_(o,`Not much to say here, I'm pretty sure you know ChatGPT pretty well.
    If not, get your mind blown `),e=w(o,"A",{class:!0,href:!0});var a=D(e);s=_(a,"here"),a.forEach(l),n=_(o,"."),this.h()},h(){p(e,"class","underline text-yellow-600"),p(e,"href","https://chat.openai.com/chat")},m(o,a){m(o,t,a),m(o,e,a),u(e,s),m(o,n,a)},p:le,d(o){o&&l(t),o&&l(e),o&&l(n)}}}function Rt(r){let t,e,s,n;return{c(){t=v("Bun is a JavaScript/TypeScript runtime and Node.js alternative. It's pretty optimized and uses JavaScriptCore instead of V8, as well as Ziglang for much of its implementation. I aspire to contribute to it, eventually, when I feel more ready. Check out "),e=b("a"),s=v("Bun's homepage"),n=v(". (Take the provided benchmarks with a grain of salt, it's good to be a little skeptical)."),this.h()},l(o){t=_(o,"Bun is a JavaScript/TypeScript runtime and Node.js alternative. It's pretty optimized and uses JavaScriptCore instead of V8, as well as Ziglang for much of its implementation. I aspire to contribute to it, eventually, when I feel more ready. Check out "),e=w(o,"A",{class:!0,href:!0});var a=D(e);s=_(a,"Bun's homepage"),a.forEach(l),n=_(o,". (Take the provided benchmarks with a grain of salt, it's good to be a little skeptical)."),this.h()},h(){p(e,"class","text-blue-900"),p(e,"href","https://bun.sh/")},m(o,a){m(o,t,a),m(o,e,a),u(e,s),m(o,n,a)},p:le,d(o){o&&l(t),o&&l(e),o&&l(n)}}}function At(r){let t=`
use std::io;

fn main() {
    let questions = vec![
        "Do you understand proc macros?",
        "Do you understand Pin?",
        "Have you even written a bajillion lines of Rust code?"
    ];

    let stdin = io::stdin();

    for question in questions {
        match prompt_then_patronize(question, &stdin) {
            ResponseType::Lie => {
                println!("Liar!");
                break;
            },
            
            ResponseType::Expected => println!("Pathetic...")
        }
    }
}

fn yes_or_no(string: &str) -> Result<bool, ()> {
    match string {
        "Y\\n" => Ok(true),
        "n\\n" => Ok(false),
        _ => Err(())
    }
}

fn prompt_then_patronize(string: &str, stdin: &io::Stdin) -> ResponseType {
    println!("{string} (Y/n)");

    let mut input_string = String::new();

    loop {
        stdin.read_line(&mut input_string).expect("You broke me");

        match yes_or_no(&input_string) {
            Ok(true) => return ResponseType::Lie,
            Ok(_) => return ResponseType::Expected,
            Err(()) => println!("Beep boop, I'm a dumb robot. Please answer with \\"Y\\" or \\"n\\"")
        }
    }
}

enum ResponseType {
    Lie,
    Expected
}
      `,e;return{c(){e=v(t)},l(s){e=_(s,t)},m(s,n){m(s,e,n)},p:le,d(s){s&&l(e)}}}function jt(r){let t,e,s;return e=new _e({props:{lang:"language-rust",$$slots:{default:[At]},$$scope:{ctx:r}}}),{c(){t=v(`Rust is pretty awesome! When using it, however, I tend to worry about memory leaks from mistakes in using reference counters and similar constructs. But boy, is it fun to use. Here is a code snippet that turned out to be longer than I expected:

    `),L(e.$$.fragment)},l(n){t=_(n,`Rust is pretty awesome! When using it, however, I tend to worry about memory leaks from mistakes in using reference counters and similar constructs. But boy, is it fun to use. Here is a code snippet that turned out to be longer than I expected:

    `),V(e.$$.fragment,n)},m(n,o){m(n,t,o),H(e,n,o),s=!0},p(n,o){const a={};o&4&&(a.$$scope={dirty:o,ctx:n}),e.$set(a)},i(n){s||(B(e.$$.fragment,n),s=!0)},o(n){P(e.$$.fragment,n),s=!1},d(n){n&&l(t),J(e,n)}}}function Bt(r){let t,e,s,n,o,a,c,h,$,k,f,i,E;return e=new re({props:{visible:r[0]("htmx"),$$slots:{default:[Dt]},$$scope:{ctx:r}}}),n=new re({props:{visible:r[0]("haskell"),$$slots:{default:[xt]},$$scope:{ctx:r}}}),a=new re({props:{visible:r[0]("ts"),$$slots:{default:[Ct]},$$scope:{ctx:r}}}),h=new re({props:{visible:r[0]("chatgpt"),$$slots:{default:[Mt]},$$scope:{ctx:r}}}),k=new re({props:{visible:r[0]("bun"),$$slots:{default:[Rt]},$$scope:{ctx:r}}}),i=new re({props:{visible:r[0]("rust"),$$slots:{default:[jt]},$$scope:{ctx:r}}}),{c(){t=b("div"),L(e.$$.fragment),s=S(),L(n.$$.fragment),o=S(),L(a.$$.fragment),c=S(),L(h.$$.fragment),$=S(),L(k.$$.fragment),f=S(),L(i.$$.fragment)},l(g){t=w(g,"DIV",{});var d=D(t);V(e.$$.fragment,d),s=C(d),V(n.$$.fragment,d),o=C(d),V(a.$$.fragment,d),c=C(d),V(h.$$.fragment,d),$=C(d),V(k.$$.fragment,d),f=C(d),V(i.$$.fragment,d),d.forEach(l)},m(g,d){m(g,t,d),H(e,t,null),u(t,s),H(n,t,null),u(t,o),H(a,t,null),u(t,c),H(h,t,null),u(t,$),H(k,t,null),u(t,f),H(i,t,null),E=!0},p(g,[d]){const N={};d&1&&(N.visible=g[0]("htmx")),d&4&&(N.$$scope={dirty:d,ctx:g}),e.$set(N);const M={};d&1&&(M.visible=g[0]("haskell")),d&4&&(M.$$scope={dirty:d,ctx:g}),n.$set(M);const I={};d&1&&(I.visible=g[0]("ts")),d&4&&(I.$$scope={dirty:d,ctx:g}),a.$set(I);const R={};d&1&&(R.visible=g[0]("chatgpt")),d&4&&(R.$$scope={dirty:d,ctx:g}),h.$set(R);const T={};d&1&&(T.visible=g[0]("bun")),d&4&&(T.$$scope={dirty:d,ctx:g}),k.$set(T);const A={};d&1&&(A.visible=g[0]("rust")),d&4&&(A.$$scope={dirty:d,ctx:g}),i.$set(A)},i(g){E||(B(e.$$.fragment,g),B(n.$$.fragment,g),B(a.$$.fragment,g),B(h.$$.fragment,g),B(k.$$.fragment,g),B(i.$$.fragment,g),E=!0)},o(g){P(e.$$.fragment,g),P(n.$$.fragment,g),P(a.$$.fragment,g),P(h.$$.fragment,g),P(k.$$.fragment,g),P(i.$$.fragment,g),E=!1},d(g){g&&l(t),J(e),J(n),J(a),J(h),J(k),J(i)}}}function Pt(r,t,e){let s,{selectedLabel:n}=t;return r.$$set=o=>{"selectedLabel"in o&&e(1,n=o.selectedLabel)},r.$$.update=()=>{r.$$.dirty&2&&e(0,s=o=>o===n)},[s,n]}class Lt extends be{constructor(t){super(),we(this,t,Pt,Bt,ve,{selectedLabel:1})}}const Vt=r=>({seconds:()=>r*1e3});function rt(r,t,e){const s=r.slice();return s[6]=t[e].label,s[7]=t[e].name,s}function Ht(r){let t;return{c(){t=v(`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},l(e){t=_(e,`My introduction to professional programming, and where my introduction to Clean Code
      eventually happened through the recommendation of a colleague and friend. Typical
      routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
      server-side rendered pages, with a bit of jQuery mixed in.`)},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function Jt(r){let t;return{c(){t=v(`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am quite grateful for the
      experience.`)},l(e){t=_(e,`Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
      and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
      unfortunate economical, health and security conditions. I am quite grateful for the
      experience.`)},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function Nt(r){let t;return{c(){t=v(`My first job in Portugal, in which I mostly used Java and Angular. Dealt heavily with 
      stored procedures, but I don't think that part was so fun, as it was quite troublesome
      to debug what was going on inside.`)},l(e){t=_(e,`My first job in Portugal, in which I mostly used Java and Angular. Dealt heavily with 
      stored procedures, but I don't think that part was so fun, as it was quite troublesome
      to debug what was going on inside.`)},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function Ot(r){let t;return{c(){t=v(`JavaScript on the backend, TypeScript on the frontend, as I was using Angular. I know that there
      are a lot of people going on the side of JSDoc these days, but I just like TypeScript a lot. It
      doesn't guarantee that you'll get the benefits of typing everywhere if you just spam any and things
      as such, but out of what I've learned from experience, I prefer TypeScript.`)},l(e){t=_(e,`JavaScript on the backend, TypeScript on the frontend, as I was using Angular. I know that there
      are a lot of people going on the side of JSDoc these days, but I just like TypeScript a lot. It
      doesn't guarantee that you'll get the benefits of typing everywhere if you just spam any and things
      as such, but out of what I've learned from experience, I prefer TypeScript.`)},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function qt(r){let t;return{c(){t=v(`Back to Java! Having so much unit tested is a joy, for sure. I mostly work on inner-source software
      and super-secret stuff I can't talk about, but I must say I'm having a blast.`)},l(e){t=_(e,`Back to Java! Having so much unit tested is a joy, for sure. I mostly work on inner-source software
      and super-secret stuff I can't talk about, but I must say I'm having a blast.`)},m(e,s){m(e,t,s)},d(e){e&&l(t)}}}function lt(r,t){let e,s=t[7]+"",n,o,a,c;function h(){return t[3](t[6])}function $(){return t[4](t[6])}return{key:r,first:null,c(){e=b("div"),n=v(s),o=S(),this.h()},l(k){e=w(k,"DIV",{class:!0,title:!0});var f=D(e);n=_(f,s),o=C(f),f.forEach(l),this.h()},h(){p(e,"class","rounded-l-xl rounded-r-xl border-green-300 border-solid border-2 text-green-300 inline-block p-1 m-1 transition-all cursor-pointer "),p(e,"title",t[7]),st(e,"scale-110",t[0]===t[6]),this.first=e},m(k,f){m(k,e,f),u(e,n),u(e,o),a||(c=[ot(e,"click",h),ot(e,"keydown",$)],a=!0)},p(k,f){t=k,f&3&&st(e,"scale-110",t[0]===t[6])},d(k){k&&l(e),a=!1,gt(c)}}}function Ft(r){let t,e,s,n,o,a,c,h,$,k,f,i,E,g,d,N,M,I,R,T,A,Z,ee,ye,ke,Ie,Te,De,Ee,xe,Se,te,Ce,Me,G,Re,W,Ae,z,je,Y,Be,Q,Pe,ne,se,ie,Le,Ve,X,q=[],qe=new Map,He,K,Je,oe,ae,Ne,he;G=new de({props:{title:"YouDigital",startDate:"26/02/2019",endDate:"28/03/2021",$$slots:{default:[Ht]},$$scope:{ctx:r}}}),W=new de({props:{title:"B2W Digital (Americanas)",startDate:"10/04/2021",endDate:"30/08/2021",$$slots:{default:[Jt]},$$scope:{ctx:r}}}),z=new de({props:{title:"EDGE",startDate:"01/09/2021",endDate:"14/06/2023",$$slots:{default:[Nt]},$$scope:{ctx:r}}}),Y=new de({props:{title:"KnowledgeWorks",startDate:"14/06/2023",endDate:"26/10/2023",$$slots:{default:[Ot]},$$scope:{ctx:r}}}),Q=new de({props:{title:"Celfocus",startDate:"27/10/2023",$$slots:{default:[qt]},$$scope:{ctx:r}}});let me=r[1];const Fe=y=>y[6];for(let y=0;y<me.length;y+=1){let x=rt(r,me,y),O=Fe(x);qe.set(O,q[y]=lt(O,x))}return K=new Lt({props:{selectedLabel:r[0]}}),{c(){t=b("div"),e=b("div"),s=b("div"),n=b("span"),o=v(`Gabriel Barbosa

        `),a=b("span"),c=v("Gaspar Veloso"),h=S(),$=b("span"),k=v("Aspiring clean coder"),f=S(),i=b("div"),E=b("img"),d=S(),N=b("div"),M=tt("svg"),I=tt("path"),R=S(),T=b("div"),A=b("p"),Z=v(`About me:

      `),ee=b("br"),ye=S(),ke=b("br"),Ie=v(`

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

      `),Te=b("br"),De=S(),Ee=b("br"),xe=v(`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),Se=S(),te=b("div"),Ce=v("My Work Experience:"),Me=S(),L(G.$$.fragment),Re=S(),L(W.$$.fragment),Ae=S(),L(z.$$.fragment),je=S(),L(Y.$$.fragment),Be=S(),L(Q.$$.fragment),Pe=S(),ne=b("div"),se=b("span"),ie=b("strong"),Le=v("My favourite technologies:"),Ve=S(),X=b("div");for(let y=0;y<q.length;y+=1)q[y].c();He=S(),L(K.$$.fragment),Je=S(),oe=b("div"),ae=b("span"),Ne=v("More upcoming..."),this.h()},l(y){t=w(y,"DIV",{});var x=D(t);e=w(x,"DIV",{class:!0});var O=D(e);s=w(O,"DIV",{class:!0});var ue=D(s);n=w(ue,"SPAN",{class:!0});var U=D(n);o=_(U,`Gabriel Barbosa

        `),a=w(U,"SPAN",{class:!0});var ce=D(a);c=_(ce,"Gaspar Veloso"),ce.forEach(l),h=C(U),$=w(U,"SPAN",{class:!0});var fe=D($);k=_(fe,"Aspiring clean coder"),fe.forEach(l),U.forEach(l),ue.forEach(l),O.forEach(l),f=C(x),i=w(x,"DIV",{class:!0});var pe=D(i);E=w(pe,"IMG",{src:!0,alt:!0,class:!0}),pe.forEach(l),d=C(x),N=w(x,"DIV",{class:!0});var Ge=D(N);M=nt(Ge,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var We=D(M);I=nt(We,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),D(I).forEach(l),We.forEach(l),Ge.forEach(l),R=C(x),T=w(x,"DIV",{class:!0});var j=D(T);A=w(j,"P",{class:!0});var F=D(A);Z=_(F,`About me:

      `),ee=w(F,"BR",{}),ye=C(F),ke=w(F,"BR",{}),Ie=_(F,`

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

      `),Te=w(F,"BR",{}),De=C(F),Ee=w(F,"BR",{}),xe=_(F,`

      I've been having a lot of fun in this profession, ever since I started, when I
      was still an undergraduate, up until now, after graduation. I studied in the
      Center of Informatics of the Federal University of Pernambuco.`),F.forEach(l),Se=C(j),te=w(j,"DIV",{class:!0});var ze=D(te);Ce=_(ze,"My Work Experience:"),ze.forEach(l),Me=C(j),V(G.$$.fragment,j),Re=C(j),V(W.$$.fragment,j),Ae=C(j),V(z.$$.fragment,j),je=C(j),V(Y.$$.fragment,j),Be=C(j),V(Q.$$.fragment,j),Pe=C(j),ne=w(j,"DIV",{class:!0});var Ye=D(ne);se=w(Ye,"SPAN",{class:!0});var Qe=D(se);ie=w(Qe,"STRONG",{});var Ke=D(ie);Le=_(Ke,"My favourite technologies:"),Ke.forEach(l),Qe.forEach(l),Ye.forEach(l),Ve=C(j),X=w(j,"DIV",{class:!0});var Ue=D(X);for(let Oe=0;Oe<q.length;Oe+=1)q[Oe].l(Ue);Ue.forEach(l),He=C(j),V(K.$$.fragment,j),Je=C(j),oe=w(j,"DIV",{class:!0});var Xe=D(oe);ae=w(Xe,"SPAN",{class:!0});var Ze=D(ae);Ne=_(Ze,"More upcoming..."),Ze.forEach(l),Xe.forEach(l),j.forEach(l),x.forEach(l),this.h()},h(){p(a,"class","hidden md:inline "),p($,"class","text-yellow-400 text-sm md:text-lg "),p(n,"class","text-lg md:text-3xl text-yellow-100 p-2 "),p(s,"class","flex flex-row items-center "),p(e,"class","h-[3em] bg-gradient-to-b from-yellow-800 to-yellow-700 flex flex-row justify-start "),$e(E.src,g="/EuRecortadoFundoBranco.png")||p(E,"src",g),p(E,"alt","A handsome red-headed young man"),p(E,"class","rounded-full h-24 md:h-40 hover:scale-110 transition-all "),p(i,"class","flex flex-row justify-center m-6 "),p(I,"stroke-linecap","round"),p(I,"stroke-linejoin","round"),p(I,"d","M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"),p(M,"xmlns","http://www.w3.org/2000/svg"),p(M,"fill","#CCFFCC"),p(M,"viewBox","0 0 24 24"),p(M,"stroke-width","1.5"),p(M,"stroke","#000000"),p(M,"class","w-20 h-20"),p(N,"class","flex justify-center "),p(A,"class","text-justify text-md md:text-xl "),p(te,"class","flex justify-center m-6 text-xl md:text-2xl "),p(se,"class","text-green-300 text-xl md:text-2xl"),p(ne,"class","text-center mb-6"),p(X,"class","flex flex-wrap justify-center space-between "),p(ae,"class","text-3xl"),p(oe,"class","flex justify-center"),p(T,"class","m-6 md:m-20 text-yellow-800 ")},m(y,x){m(y,t,x),u(t,e),u(e,s),u(s,n),u(n,o),u(n,a),u(a,c),u(n,h),u(n,$),u($,k),u(t,f),u(t,i),u(i,E),u(t,d),u(t,N),u(N,M),u(M,I),u(t,R),u(t,T),u(T,A),u(A,Z),u(A,ee),u(A,ye),u(A,ke),u(A,Ie),u(A,Te),u(A,De),u(A,Ee),u(A,xe),u(T,Se),u(T,te),u(te,Ce),u(T,Me),H(G,T,null),u(T,Re),H(W,T,null),u(T,Ae),H(z,T,null),u(T,je),H(Y,T,null),u(T,Be),H(Q,T,null),u(T,Pe),u(T,ne),u(ne,se),u(se,ie),u(ie,Le),u(T,Ve),u(T,X);for(let O=0;O<q.length;O+=1)q[O].m(X,null);u(T,He),H(K,T,null),u(T,Je),u(T,oe),u(oe,ae),u(ae,Ne),he=!0},p(y,[x]){const O={};x&1024&&(O.$$scope={dirty:x,ctx:y}),G.$set(O);const ue={};x&1024&&(ue.$$scope={dirty:x,ctx:y}),W.$set(ue);const U={};x&1024&&(U.$$scope={dirty:x,ctx:y}),z.$set(U);const ce={};x&1024&&(ce.$$scope={dirty:x,ctx:y}),Y.$set(ce);const fe={};x&1024&&(fe.$$scope={dirty:x,ctx:y}),Q.$set(fe),x&7&&(me=y[1],q=ht(q,x,Fe,1,y,me,qe,X,$t,lt,null,rt));const pe={};x&1&&(pe.selectedLabel=y[0]),K.$set(pe)},i(y){he||(B(G.$$.fragment,y),B(W.$$.fragment,y),B(z.$$.fragment,y),B(Y.$$.fragment,y),B(Q.$$.fragment,y),B(K.$$.fragment,y),he=!0)},o(y){P(G.$$.fragment,y),P(W.$$.fragment,y),P(z.$$.fragment,y),P(Y.$$.fragment,y),P(Q.$$.fragment,y),P(K.$$.fragment,y),he=!1},d(y){y&&l(t),J(G),J(W),J(z),J(Y),J(Q);for(let x=0;x<q.length;x+=1)q[x].d();J(K)}}}function Gt(r){const t=Math.floor(Math.random()*r.length);return r[t]}function Wt(r,t,e){let s,n=[["htmx","HTMX"],["haskell","Haskell"],["ts","TypeScript"],["chatgpt","ChatGPT"],["bun","Bun"],["rust","Rust"]].map(([$,k])=>({label:$,name:k})),o="none";mt(()=>{s=setInterval(()=>{const $=n.filter(({label:f})=>f!==o),k=Gt($.map(({label:f})=>f));a(k)},Vt(8).seconds())});function a($){clearInterval(s),e(0,o=$)}return[o,n,a,$=>a($),$=>a($)]}class Qt extends be{constructor(t){super(),we(this,t,Wt,Ft,ve,{})}}export{Qt as component};
