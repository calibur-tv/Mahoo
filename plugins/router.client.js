import Share from '~/assets/js/share'

export default ({ app }) => {
  app.router.afterEach((to, from) => {
    if (from && from.name) {
      window._hmt && _hmt.push(['_trackPageview', to.fullPath])
      Share(window.location.origin + to.fullPath)
    }
  })
}
