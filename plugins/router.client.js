import Share from '~/assets/js/share'

export default ({ app }) => {
  app.router.afterEach((to, from) => {
    if (from && from.name) {
      _hmt.push(['_trackPageview', to.fullPath])
      Share(window.location.origin + to.fullPath)
    }
  })
}
