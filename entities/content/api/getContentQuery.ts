export function getContentQuery(title: string) {
  return queryCollection('copy').where('title', '=', title).first()
}
