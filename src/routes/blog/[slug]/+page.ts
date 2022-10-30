// /** @type {import('./__types/[slug]').RequestHandler} */
// export async function get({ params }) {
// 	// `params.id` comes from [id].js
// 	const { slug } = params
// 	// const data = await import(`../blog/content/${slug}.md`)
// 	const data = await import(`../blog/content/${slug}.md`)
// 	const { default: body, metadata } = await import(`../blog/content/${slug}.md`)

// 	console.log('post', data)
// 	// console.log(data)
// 	console.log(body)

// 	// if (data.body === undefined) {
// 	// 	return {
// 	// 		status: 404
// 	// 	}
// 	// }

// 	return {
// 		body: {
// 			post: {
// 				body: data,
// 				metadata: data.metadata
// 			}
// 		}
// 	}
// }
