export default {
  sign(redirect = '') {
    return `/sign?redirect=${encodeURIComponent(redirect || window.location.href)}`
  },

  tag(slug, path = '') {
    return `/tag/${slug}/${path}`
  },

  user(slug, path = '') {
    return `/user/${slug}/${path}`
  },

  pin(slug) {
    return `/pin/${slug}`
  }
}
