

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e9d7b8a0.js","_app/immutable/chunks/index.201e1dc2.js","_app/immutable/chunks/CodeBlock.c805c78d.js"];
export const stylesheets = [];
export const fonts = [];
