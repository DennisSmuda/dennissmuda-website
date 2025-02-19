export function getLatestProjectsQuery() {
  return queryCollection('projects').order('order', 'DESC').limit(3).all()
}
