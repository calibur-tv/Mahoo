export default ({ app }) => {
  app.router.afterEach((to, from) => {
    _hmt.push(['_trackPageview', to.fullPath])
  })
}
