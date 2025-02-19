export function getLatestPostsQuery() {
  return queryCollection('blog').order('order', 'DESC').limit(3).all()
}
