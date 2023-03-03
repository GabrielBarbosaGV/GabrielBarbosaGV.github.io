import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, f as each } from "../../chunks/index.js";
const WorkExperience = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { startDate } = $$props;
  let { endDate = "none" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.startDate === void 0 && $$bindings.startDate && startDate !== void 0)
    $$bindings.startDate(startDate);
  if ($$props.endDate === void 0 && $$bindings.endDate && endDate !== void 0)
    $$bindings.endDate(endDate);
  return `<div class="${"mb-10"}"><span class="${"text-md md:text-xl "}"><strong>${escape(title)}:</strong></span>

  <span>${endDate === "none" ? `From ${escape(startDate)} (Current)` : `From ${escape(startDate)} to ${escape(endDate)}`}</span>

  <hr class="${"my-4"}">

  <p class="${"text-md md:text-xl text-justify "}">${slots.default ? slots.default({}) : ``}</p></div>`;
});
const TechnologyDescription = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { invisible } = $$props;
  if ($$props.invisible === void 0 && $$bindings.invisible && invisible !== void 0)
    $$bindings.invisible(invisible);
  return `<div class="${["transition-all absolute py-4", invisible ? "opacity-0" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `${$$result.head += `<!-- HEAD_svelte-t9apam_START --><link href="${"themes/prism.css"}" rel="${"stylesheet"}"><!-- HEAD_svelte-t9apam_END -->`, ""}

<pre>  <code${add_attribute("class", lang, 0)}>
    ${slots.default ? slots.default({}) : ``}
  </code>
</pre>`;
});
const TechnologyDescriptions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isNotSelected;
  let { selectedLabel } = $$props;
  if ($$props.selectedLabel === void 0 && $$bindings.selectedLabel && selectedLabel !== void 0)
    $$bindings.selectedLabel(selectedLabel);
  isNotSelected = (label) => label !== selectedLabel;
  return `${``}

<div class="${"relative flex align-center justify-center"}">${validate_component(TechnologyDescription, "TechnologyDescription").$$render($$result, { invisible: isNotSelected("htmx") }, {}, {
    default: () => {
      return `HTMX is a HTML extension library that allows for asynchronous operations to alter the DOM. <br>
      One possible usage is the following, as shown in the technology&#39;s official page: <br><br>

      ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { lang: "language-html" }, {}, {
        default: () => {
          return `${escape(`
<script src="https://unpkg.com/htmx.org@1.8.6"><\/script>
<!-- have a button POST a click via AJAX -->
<button hx-post="/clicked" hx-swap="outerHTML">
  Click Me
</button>
        `)}`;
        }
      })}

      <br>
      This will allow the result of the POST request, to path &quot;/clicked&quot;, to swap the content of the button.

      This HTML extension is great for not overengineering simple web-pages. To be fair, this very page
      might be overengineered, but I just love SvelteKit that much.
  `;
    }
  })}

  ${validate_component(TechnologyDescription, "TechnologyDescription").$$render($$result, { invisible: isNotSelected("haskell") }, {}, {
    default: () => {
      return `Haskell is an amazing and underrated functional programming language. Its type inference and concise syntax
    would make it very powerful, were it not left in the sidelines a good portion of time due to the mistification
    of monads and their usage.

    It&#39;s not possible to portray all of the good aspects of the language solely through a small code block, so I
    recommend taking a look at these videos:

    <div class="${"flex justify-center align-center my-6"}"><iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/RqvCNb7fKsg"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen class="${"mx-2"}"></iframe>

      <iframe width="${"560"}" height="${"315"}" src="${"https://www.youtube.com/embed/Qa8IfEeBJqk"}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}" allowfullscreen class="${"mx-2"}"></iframe></div>


    ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { lang: "language-haskell" }, {}, {
        default: () => {
          return `${escape(`
module Main
import Data.Char

main :: IO ()
main = do
    putStrLn "Do you like Haskell?"
    answer <- getLine
    putStrLn $ if map toLower answer == "yes" then "One of fine tastes ;)" else "Wrong answer!"
      `)}`;
        }
      })}`;
    }
  })}

  ${validate_component(TechnologyDescription, "TechnologyDescription").$$render($$result, { invisible: isNotSelected("ts") }, {}, {
    default: () => {
      return `We all know and love TypeScript. Dynamically typed languages should not bring problems on their own, if proper testing is done,
    but proramming just becomes a whole lot faster when the compiler is holding your hand through the process. Whilst not as powerful
    as Rust in its type system, it is possible to do a lot with TypeScript, and, for the purposes of the web, definitely more than enough.

    ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { lang: "language-typescript" }, {}, {
        default: () => {
          return `${escape(`
function sentiment([s, ...strings]: string[], language, sentiment) {
  return s && s === "is" ? \`You appear to feel that \${language} is \${sentiment}\`;
}

const lang = "TypeScript";
const sentiment = "awesome";

console.log(sentiment\`\${lang} is \${awesome}\`);

// output: "You appear to feel that TypeScript is awesome"
      `)}`;
        }
      })}`;
    }
  })}

  ${validate_component(TechnologyDescription, "TechnologyDescription").$$render($$result, { invisible: isNotSelected("chatgpt") }, {}, {
    default: () => {
      return `Not much to say here, I&#39;m pretty sure you know ChatGPT pretty well.
    If not, get your mind blown <a class="${"underline text-yellow-600"}" href="${"https://chat.openai.com/chat"}">here</a>.
  `;
    }
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let likedTechnologies = [
    ["htmx", "HTMX"],
    ["haskell", "Haskell"],
    ["ts", "TypeScript"],
    ["chatgpt", "ChatGPT"]
  ].map(([label, name]) => ({ label, name }));
  let selectedLabel = "none";
  return `<div class="${"h-[3em] bg-gradient-to-b from-yellow-800 to-yellow-700 flex flex-row align-bottom justify-start "}"><div class="${"flex flex-row items-center "}"><span class="${"text-lg md:text-3xl text-yellow-100 p-2 "}">Gabriel Barbosa

      <span class="${"hidden md:inline "}">Gaspar Veloso
        
      </span>

      <span class="${"text-yellow-400 text-sm md:text-lg "}">Aspiring clean coder

      </span></span></div></div>

<div class="${"flex flex-row justify-center m-6 "}"><img src="${"/EuRecortadoFundoBranco.png"}" alt="${"A handsome red-headed young man"}" class="${"rounded-full h-24 md:h-40 hover:scale-110 transition-all "}"></div>

<div class="${"flex justify-center align-middle "}">
  <svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"#CCFFCC"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"#000000"}" class="${"w-20 h-20"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"}"></path></svg></div>

<div class="${"m-6 md:m-20 text-yellow-800 "}"><p class="${"text-justify text-md md:text-xl "}">About me:

    <br>
    <br>

    As a software engineer, I&#39;ve dealt with a fair share of codebases and systems
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

    <br>
    <br>

    I&#39;ve been having a lot of fun in this profession, ever since I started, when I
    was still an undergraduate, up until now, after graduation. I studied in the
    Center of Informatics of the Federal University of Pernambuco.

  </p>

  <div class="${"flex justify-center align-middle m-6 text-xl md:text-2xl "}">My Work Experience:

  </div>

  ${validate_component(WorkExperience, "WorkExperience").$$render(
    $$result,
    {
      title: "YouDigital",
      startDate: "26/02/2019",
      endDate: "28/03/2021"
    },
    {},
    {
      default: () => {
        return `My introduction to professional programming, and where my introduction to Clean Code
    eventually happened through the recommendation of a colleague and friend. Typical
    routine of a CI pipeline, using Jenkins, the Docker-in-Docker image, as well as
    server-side rendered pages, with a bit of jQuery mixed in.
  `;
      }
    }
  )}

  ${validate_component(WorkExperience, "WorkExperience").$$render(
    $$result,
    {
      title: "B2W Digital (Americanas)",
      startDate: "10/04/2021",
      endDate: "30/08/2021"
    },
    {},
    {
      default: () => {
        return `Great opportunity to work with Elixir + Phoenix, as well as Ruby on Rails. A lot of fun,
    and the line in the sand that marks my seeking of opportunity outside of Brazil, due to
    unfortunate economical, health and security conditions. I am extremely grateful for the
    opportunity I was given.
  `;
      }
    }
  )}

  ${validate_component(WorkExperience, "WorkExperience").$$render($$result, { title: "EDGE", startDate: "01/09/2021" }, {}, {
    default: () => {
      return `My current job, through which I have been working with BNP Paribas. All of the skills I&#39;ve
    mustered - be they from the other professional experiences, or own time spent learning -
    are ultimately put to the test.
  `;
    }
  })}

  <div class="${"text-center mb-6"}"><span class="${"text-green-300 text-xl md:text-2xl"}"><strong>My favourite technologies:</strong></span></div>

  <div class="${"flex flex-wrap justify-center align-middle space-between "}">${each(likedTechnologies, ({ label, name }) => {
    return `<div class="${[
      "rounded-l-xl rounded-r-xl border-green-300 border-solid border-2 text-green-300 inline-block p-1 m-1 transition-all cursor-pointer ",
      selectedLabel === label ? "scale-110" : ""
    ].join(" ").trim()}"${add_attribute("title", name, 0)}>${escape(name)}

      </div>`;
  })}</div>

  ${validate_component(TechnologyDescriptions, "TechnologyDescriptions").$$render($$result, { selectedLabel }, {}, {})}

  <div class="${"flex justify-center align-center mt-[50em]"}"><span class="${"text-3xl"}">More upcoming...</span></div></div>`;
});
export {
  Page as default
};
