<style lang="scss">
</style>

<template>
  <el-button
    class="daily-sign-btn"
    :loading="loading"
    @click="handleSign"
  >
    {{ value.sign.daily_signed ? '已签到' : '未签到' }}
  </el-button>
</template>

<script>
export default {
  name: 'DailySignBtn',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.value.slug)
    }
  },
  methods: {
    handleSign() {
      if (!this.isMine) {
        this.$toast.info('不能替别人签到')
        return
      }
      if (this.loading) {
        return
      }
      if (this.value.sign.daily_signed) {
        this.$toast.info('今天已签过到')
        return
      }
      this.loading = true
      this.$axios.$post('v1/user/daily_sign')
        .then(data => {
          this.value.sign.daily_signed = true
          this.value.sign.continuous_sign_count = data.continuous_sign_count
          this.value.sign.latest_signed_at = data.sign_at
          this.value.sign.total_sign_count++
          this.value.balance.coin += data.add_coin_count
          this.$toast.success(data.message)
          this.loading = false
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
