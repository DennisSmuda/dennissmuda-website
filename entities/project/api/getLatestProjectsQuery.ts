export function getLatestProjectsQuery() {
  return queryCollection('projects').where('published', '=', true).order('order', 'DESC').limit(4).all()
}
