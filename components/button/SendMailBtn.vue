<style lang="scss"></style>

<template>
  <el-button class="send-mail-btn" type="info" round plain @click="toMessage">
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
    },
    nickname: {
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
      const redirectWindow = window.open()
      this.$axios
        .$get('v1/message/get_channel', {
          params: {
            type: 1,
            slug: this.slug
          }
        })
        .then(channel => {
          redirectWindow.location = this.$alias.user(this.$store.state.user.slug, `message?mailto=${channel}&name=${this.nickname}`)
        })
        .catch(err => {
          this.$toast.error(err.message)
          redirectWindow.close()
        })
    }
  }
}
</script>
