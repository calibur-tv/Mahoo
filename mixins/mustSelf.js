export default {
  beforeMount() {
    const redirect = () => {
      if (!this.$store.getters.isMine(this.$route.params.slug)) {
        this.$router.replace({
          name: this.$route.name,
          params: {
            slug: this.$store.state.user.slug
          }
        })
      }
    }
    if (this.$store.state.isAuth) {
      redirect()
      return
    }
    const canceler = this.$watch('$store.state.isAuth', val => {
      if (val) {
        redirect()
        canceler()
      }
    })
  }
}
