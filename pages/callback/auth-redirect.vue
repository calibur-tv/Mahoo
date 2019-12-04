<style lang="scss">
#auth-redirect {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: $color-blue;
    margin-bottom: 10px;
    font-size: 20px;
  }
}
</style>

<template>
  <div id="auth-redirect">
    <p>{{ message }},（{{ timer }}s后自动跳转）</p>
    <a href="/">点击返回首页</a>
  </div>
</template>

<script>
export default {
  name: 'AuthRedirect',
  data() {
    return {
      timer: 5
    }
  },
  computed: {
    message() {
      return this.$route.query.message
    },
    redirect() {
      return this.$route.query.redirect
    }
  },
  mounted() {
    this.$cookie.set('JWT-TOKEN', this.$route.query.token, {
      expires: 365
    })
    setInterval(() => {
      if (this.timer === 1) {
        window.location = '/'
      } else {
        this.timer--
      }
    }, 1000)
  }
}
</script>
