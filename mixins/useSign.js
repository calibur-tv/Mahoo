import parseToken from '~/assets/js/parseToken'

export default {
  beforeMount() {
    const token = parseToken()
    this.$store.commit('SET_USER_TOKEN', token)
    this.$store.dispatch('initAuth')
  }
}
