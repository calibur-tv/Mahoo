export default {
  sign(redirect = '') {
    return `/sign?redirect=${encodeURIComponent(redirect || (typeof window === 'undefined' ? '/' : window.location.href))}`
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
    return slug ? `/write?slug=${slug}` : '/write'
  }
}
