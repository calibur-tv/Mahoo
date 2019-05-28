export default {
  tag(slug, path = '') {
    return `/tag/${slug}/${path}`
  },

  user(slug, path = '') {
    return `/user/${slug}/${path}`
  }
}
