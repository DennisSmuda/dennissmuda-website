export function getProjectsQuery() {
  return queryCollection('projects').where('published', '=', true).order('order', 'DESC').all()
}
