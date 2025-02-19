export function getPostsQuery() {
  return queryCollection('blog').order('order', 'DESC').all()
}
