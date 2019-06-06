import parseToken from '~/assets/js/parseToken'

export default {
  beforeMount() {
    if (this.$store.state.isAuth) {
      return
    }
    const token = parseToken()
    if (!token) {
      return
    }
    if (!this.$store.state.logging) {
      this.$store.commit('SET_LOGGING')
      const cancer = this.$watch('$store.state.logging', val => {
        if (!val && !this.$store.state.isAuth) {
          cancer()
          this.$cookie.remove('JWT-TOKEN')
        }
      })
      this.$channel.socketConnect()
    }
  }
}
