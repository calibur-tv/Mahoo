<style lang="scss">
#auth-error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: $color-main;
    margin-bottom: 10px;
    font-size: 20px;
  }
}
</style>

<template>
  <div id="auth-error">
    <p v-text="message" />
    <a href="/">点击返回首页</a>
  </div>
</template>

<script>
export default {
  name: 'AuthError',
  computed: {
    message() {
      return this.$route.query.message || '登录失败'
    }
  }
}
</script>
