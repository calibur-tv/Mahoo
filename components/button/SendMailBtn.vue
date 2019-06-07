<style lang="scss">
</style>

<template>
  <el-button
    class="send-mail-btn"
    @click="toMessage"
  >
    发消息
  </el-button>
</template>

<script>
export default {
  name: 'SendMailBtn',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    isAuth() {
      return this.$store.state.isAuth
    },
    isMine() {
      return this.$store.getters.isMine(this.slug)
    }
  },
  methods: {
    toMessage() {
      if (!this.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能给自己发消息')
        return
      }
      window.open(this.$alias.user(this.self.slug, `message/?mailto=${this.slug}`))
    }
  }
}
</script>
