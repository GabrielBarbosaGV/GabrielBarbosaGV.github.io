export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["EuRecortadoFundoBranco.png","favicon.png","flip_example.webm","prism.js","themes/prism.css"]),
	mimeTypes: {".png":"image/png",".webm":"video/webm",".js":"application/javascript",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.f8eb5278.js","app":"_app/immutable/entry/app.4a8897cc.js","imports":["_app/immutable/entry/start.f8eb5278.js","_app/immutable/chunks/index.201e1dc2.js","_app/immutable/chunks/singletons.08d0d64a.js","_app/immutable/entry/app.4a8897cc.js","_app/immutable/chunks/index.201e1dc2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/leptos-transition-flip",
				pattern: /^\/leptos-transition-flip\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
