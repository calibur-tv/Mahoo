<style lang="scss">
#app-launch {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $color-main;
  color: #fff;
}
</style>

<template>
  <div id="app-launch">开屏，倒计时（{{ time + 1 }}s）</div>
</template>

<script>
export default {
  name: 'AppLaunch',
  components: {},
  props: {},
  data() {
    return {
      time: 2
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    // https://developer.mozilla.org/en-US/docs/Web/Manifest/screenshots
    this.redirect()
  },
  methods: {
    redirect() {
      const timer = setInterval(() => {
        if (!this.time) {
          clearInterval(timer)
          this.$router.replace('/app/found')
          return
        }
        this.time--
      }, 1000)
    }
  }
}
</script>
