import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/04B_03.ttf","images/blog/insomnia_register.png","images/blog/vercel_env_variables.png","logo-128.png","logo-192.png","logo-512.png","robots.txt","zipclick.flac"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".flac":"audio/x-flac"},
	_: {
		entry: {"file":"immutable/start-07f6ed36.js","imports":["immutable/start-07f6ed36.js","immutable/chunks/index-2dbaace3.js","immutable/chunks/index-87c96118.js","immutable/chunks/preload-helper-96c8edfa.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/6.js')
		],
		routes: [
			{
				type: 'page',
				id: "blog/content/serverless-api-tutorial",
				pattern: /^\/blog\/content\/serverless-api-tutorial\/?$/,
				names: [],
				types: [],
				path: "/blog/content/serverless-api-tutorial",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
