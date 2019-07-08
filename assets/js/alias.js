export default {
  sign(redirect = '') {
    return `/sign?redirect=${encodeURIComponent(redirect || window.location.href)}`
  },

  tag(slug, path = '') {
    return `/tag/${slug}/${path}`
  },

  user(slug, path = 'timeline') {
    return `/user/${slug}/${path}`
  },

  pin(slug) {
    return `/pin/${slug}`
  },

  create(slug) {
    return slug ? `/wander?slug=${slug}` : '/wander'
  }
}
