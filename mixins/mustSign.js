import parseToken from '~/assets/js/parseToken'

export default {
  beforeMount() {
    if (this.$store.state.isAuth) {
      return
    }
    const token = parseToken()
    if (!token) {
      this.$toast.error('继续操作前请先登录')
        .then(() => {
          window.location.href = '/'
        })
      return
    }
    const cancer = this.$watch('$store.state.logging', val => {
      if (!val) {
        cancer()
        if (!this.$store.state.isAuth) {
          this.$cookie.remove('JWT-TOKEN')
          this.$toast.error('继续操作前请先登录')
            .then(() => {
              window.location.href = '/'
            })
        }
      }
    })
    if (!this.$store.state.logging) {
      this.$store.commit('SET_LOGGING')
      this.$channel.socketConnect()
    }
  }
}
