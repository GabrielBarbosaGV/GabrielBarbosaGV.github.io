import { h as assign, i as is_function, c as create_ssr_component, d as each, f as add_attribute, v as validate_component, e as escape } from "../../../chunks/index.js";
import { C as CodeBlock } from "../../../chunks/CodeBlock.js";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function crossfade(_a) {
  var { fallback } = _a, defaults = __rest(_a, ["fallback"]);
  const to_receive = /* @__PURE__ */ new Map();
  const to_send = /* @__PURE__ */ new Map();
  function crossfade2(from, node, params) {
    const { delay = 0, duration = (d2) => Math.sqrt(d2) * 30, easing = cubicOut } = assign(assign({}, defaults), params);
    const to = node.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    const dw = from.width / to.width;
    const dh = from.height / to.height;
    const d = Math.sqrt(dx * dx + dy * dy);
    const style = getComputedStyle(node);
    const transform = style.transform === "none" ? "" : style.transform;
    const opacity = +style.opacity;
    return {
      delay,
      duration: is_function(duration) ? duration(d) : duration,
      easing,
      css: (t, u) => `
				opacity: ${t * opacity};
				transform-origin: top left;
				transform: ${transform} translate(${u * dx}px,${u * dy}px) scale(${t + (1 - t) * dw}, ${t + (1 - t) * dh});
			`
    };
  }
  function transition(items, counterparts, intro) {
    return (node, params) => {
      items.set(params.key, {
        rect: node.getBoundingClientRect()
      });
      return () => {
        if (counterparts.has(params.key)) {
          const { rect } = counterparts.get(params.key);
          counterparts.delete(params.key);
          return crossfade2(rect, node, params);
        }
        items.delete(params.key);
        return fallback && fallback(node, params, intro);
      };
    };
  }
  return [
    transition(to_send, to_receive, false),
    transition(to_receive, to_send, true)
  ];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  crossfade({});
  let leftItems = ["One", "Two", "Three"];
  let rightItems = [];
  let time = 0;
  return `<div class="${"flex flex-row justify-center items-center my-6"}"><h1 class="${"text-3xl"}">The leptos_transition_flip Crate</h1></div>

<div class="${"flex flex-col justify-center items-center my-6 mx-20"}">Svelte trivializes the creation of element transitions among lists
  with the crossfade function. The resulting effect is this:

  <div class="${"flex flex-row justify-around items-center my-6 mx-10"}"><div class="${"w-[50vw] flex flex-col justify-center items-center"}">${each(leftItems, (item) => {
    return `<div class="${"bg-green-200 w-[10vw] my-2 rounded-md flex justify-center items-center cursor-pointer"}">${escape(item)}
        </div>`;
  })}</div>

    <div class="${"w-[50vw] flex flex-col justify-center items-center"}">${each(rightItems, (item) => {
    return `<div class="${"bg-green-200 w-[10vw] my-2 rounded-md flex justify-center items-center cursor-pointer"}">${escape(item)}
        </div>`;
  })}</div></div>

  <p>As I wanted the same effect with the also great Leptos Rust crate, I wrote a small crate,
    <a href="${"https://github.com/GabrielBarbosaGV/leptos-transition-flip"}" class="${"text-green-700 bg-orange-200"}">leptos_transition_flip.
    </a>
    It results in the same effect (click to play video):
  </p>

  <video class="${"rounded-md my-6"}" src="${"flip_example.webm"}"${add_attribute("currentTime", time, 0)}>Your browser does not support video tags

    <track kind="${"captions"}"></video>

  <p>${``}</p>

  <p>Here is a simple usage example:
  </p>

  ${validate_component(CodeBlock, "CodeBlock").$$render($$result, { lang: "language-rust" }, {}, {
    default: () => {
      return `${escape(`
// Call before changing NodeRefs' positions
let (flip, clear) = prepare_flip(
    ids_to_node_refs,
    container_div_node_ref,
    "transform 0.6s"
).map_err(|err| format!("FLIP preparation failed with error: {err}"))?;

// Perform action that will change the NodeRefs' positions in page, such as setting signals
// ...

// Perform FLIP animation
flip().map_err(|err| format!("FLIP failed with error: {err}"))?;

// Await end, and then clear transition style
set_timeout(|| {
    if let Err(err) = clear() {
      console_log("Error occurred when trying to clear FLIP transition style: {err}");
    }
}, Duration::from_millis(600));
  `)}`;
    }
  })}

    <p>A full code example can be found

      <a href="${"https://github.com/GabrielBarbosaGV/leptos-transition-flip/tree/main/example-project"}" class="${"text-green-700 bg-orange-200"}">here.
      </a></p></div>`;
});
export {
  Page as default
};
