export const manifest = {
	appDir: "_app",
	assets: new Set([".DS_Store","favicon.png","fonts/04B_03.ttf","images/blog/insomnia_register.png","images/blog/vercel_env_variables.png","logo-128.png","logo-192.png","logo-512.png","robots.txt","zipclick.flac"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".txt":"text/plain",".flac":"audio/x-flac"},
	_: {
		entry: {"file":"immutable/start-c904fd2f.js","imports":["immutable/start-c904fd2f.js","immutable/chunks/index-2dbaace3.js","immutable/chunks/index-87c96118.js","immutable/chunks/preload-helper-96c8edfa.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/12.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: () => import('./entries/endpoints/blog/index.js'),
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "imprint",
				pattern: /^\/imprint\/?$/,
				names: [],
				types: [],
				path: "/imprint",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				id: "work",
				pattern: /^\/work\/?$/,
				names: [],
				types: [],
				path: "/work",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/post_layout",
				pattern: /^\/blog\/post_layout\/?$/,
				names: [],
				types: [],
				path: "/blog/post_layout",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/content/bevy-run-get-started",
				pattern: /^\/blog\/content\/bevy-run-get-started\/?$/,
				names: [],
				types: [],
				path: "/blog/content/bevy-run-get-started",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/content/hello-world",
				pattern: /^\/blog\/content\/hello-world\/?$/,
				names: [],
				types: [],
				path: "/blog/content/hello-world",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/content/serverless-api-tutorial",
				pattern: /^\/blog\/content\/serverless-api-tutorial\/?$/,
				names: [],
				types: [],
				path: "/blog/content/serverless-api-tutorial",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/content/serverless-auth-tutorial",
				pattern: /^\/blog\/content\/serverless-auth-tutorial\/?$/,
				names: [],
				types: [],
				path: "/blog/content/serverless-auth-tutorial",
				shadow: null,
				a: [0,11],
				b: [1]
			},
			{
				type: 'page',
				id: "blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				names: ["slug"],
				types: [null],
				path: null,
				shadow: () => import('./entries/endpoints/blog/_slug_.js'),
				a: [0,12],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
