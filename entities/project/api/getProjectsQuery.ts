export function getProjectsQuery() {
  return queryCollection('projects').order('order', 'DESC').all()
}
