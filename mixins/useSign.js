import parseToken from '~/assets/js/parseToken'

export default {
  async beforeMount() {
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
