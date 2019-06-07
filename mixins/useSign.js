import parseToken from '~/assets/js/parseToken'

export default {
  async beforeMount() {
    if (this.$store.state.logging) {
      const canceler = this.$watch('$store.state.logging', () => {
        if (this.$store.state.isAuth) {
          this.$channel.socketConnect()
          canceler()
        } else {
          this.$cookie.remove('JWT-TOKEN')
        }
      })
    } else {
      const token = parseToken()
      this.$store.commit('SET_USER_TOKEN', token)
      const user = await this.$store.dispatch('initAuth')
      if (user) {
        this.$channel.socketConnect()
      } else {
        this.$cookie.remove('JWT-TOKEN')
      }
    }
  }
}
