

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.88e4e817.js","_app/immutable/chunks/index.201e1dc2.js","_app/immutable/chunks/singletons.08d0d64a.js"];
export const stylesheets = [];
export const fonts = [];
