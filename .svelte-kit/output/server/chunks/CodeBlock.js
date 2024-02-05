import { c as create_ssr_component, f as add_attribute } from "./index.js";
const CodeBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lang } = $$props;
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  return `${$$result.head += `<!-- HEAD_svelte-1vhthgi_START --><link href="${"/themes/prism.css"}" rel="${"stylesheet"}"><script src="${"/prism.js"}"><\/script><!-- HEAD_svelte-1vhthgi_END -->`, ""}

<pre>  <code${add_attribute("class", lang, 0)}>
    ${slots.default ? slots.default({}) : ``}
  </code>
</pre>`;
});
export {
  CodeBlock as C
};
