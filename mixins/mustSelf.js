export default {
  beforeMount() {
    const canceler = this.$watch('isAuth', val => {
      if (val) {
        if (!this.$store.getters.isMine(this.$route.params.slug)) {
          this.$router.replace({
            name: this.$route.name,
            params: {
              slug: this.$store.state.user.slug
            }
          })
        }
        canceler()
      }
    })
  }
}
