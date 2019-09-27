<style lang="scss"></style>

<template>
  <ElButton class="daily-sign-btn" :loading="loading" @click="handleSign">
    {{ value.daily_signed ? '已签到' : '未签到' }}
  </ElButton>
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
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (!this.isMine) {
        this.$toast.info('不能替别人签到')
        return
      }
      if (this.loading) {
        return
      }
      if (this.value.daily_signed) {
        this.$toast.info('今天已签过到')
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/user/daily_sign')
        .then(data => {
          this.value.daily_signed = true
          this.$toast.success(data.message)
          this.loading = false
          try {
            this.value.sign.continuous_sign_count = data.continuous_sign_count
            this.value.sign.latest_signed_at = data.sign_at
            this.value.sign.total_sign_count++
            this.$store.commit('UPDATE_USER_INFO', {
              key: 'wallet_coin',
              value: this.$store.state.user.wallet_coin + 1
            })
          } catch (e) {
            // do nothing
          }
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    }
  }
}
</script>
