export default {
  methods: {
    onUserSign(callback) {
      if (this.$store.state.isAuth) {
        callback && callback(this.$store.state.user)
        return
      }
      if (this.$store.state.logging) {
        const canceler = this.$watch('$store.state.logging', () => {
          if (this.$store.state.isAuth) {
            callback && callback(this.$store.state.user)
          } else {
            callback && callback(null)
          }
          canceler()
        })
        return
      }
      callback && callback(null)
    }
  }
}
