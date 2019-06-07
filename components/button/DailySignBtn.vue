<style lang="scss">
</style>

<template>
  <el-button
    :loading="signing"
    @click="handleSign"
  >
    {{ value.sign.daily_signed ? '已签到' : '签到' }}
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
      signing: false
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.value.slug)
    }
  },
  methods: {
    handleSign() {
      if (!this.isMine || this.signing) {
        return
      }
      if (this.value.sign.daily_signed) {
        return
      }
      this.signing = true
      this.$axios.$post('v1/user/daily_sign')
        .then(data => {
          this.value.sign.daily_signed = true
          this.value.sign.continuous_sign_count = data.continuous_sign_count
          this.value.sign.latest_signed_at = data.sign_at
          this.value.sign.total_sign_count++
          this.value.balance.coin += data.add_coin_count
          this.$toast.success(data.message)
          this.signing = false
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.signing = false
        })
    }
  }
}
</script>
