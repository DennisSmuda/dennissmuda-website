import { json, type RequestHandler } from '@sveltejs/kit'
import { projects } from '$lib/data/projects'

export const GET: RequestHandler = () => {
	return json({
		projects
	})
}
