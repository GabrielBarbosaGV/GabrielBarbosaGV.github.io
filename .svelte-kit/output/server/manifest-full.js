export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["EuRecortadoFundoBranco.png","favicon.png","prism.js","themes/prism.css"]),
	mimeTypes: {".png":"image/png",".js":"application/javascript",".css":"text/css"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e5dc4f30.mjs","imports":["_app/immutable/entry/start.e5dc4f30.mjs","_app/immutable/chunks/index.5b3908fd.mjs","_app/immutable/chunks/singletons.0f4c225a.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.08d693cb.mjs","imports":["_app/immutable/entry/app.08d693cb.mjs","_app/immutable/chunks/index.5b3908fd.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
