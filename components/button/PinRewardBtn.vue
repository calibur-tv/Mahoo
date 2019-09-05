<style lang="scss">
.pin-reward-btn {
  color: $color-icon-1;

  &.is-active {
    color: $color-main;
  }

  &:hover {
    color: $color-main;
  }

  i {
    font-size: 24px;
  }

  span {
    font-size: 14px;
  }
}
</style>

<template>
  <div v-if="state">
    <button class="pin-reward-btn" :class="{ 'is-active': state.reward_status }" @click="reward">
      <i class="iconfont ic-reward_fill" />
      <span v-text="count || '投食'" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PinRewardBtn',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    pinSlug: {
      type: String,
      required: true
    },
    userSlug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      count: +this.value
    }
  },
  computed: {
    state() {
      return this.$store.getters['social/get']('pin', this.pinSlug)
    },
    isMine() {
      return this.$store.getters.isMine(this.userSlug)
    },
    user() {
      return this.$store.state.user
    }
  },
  watch: {
    value(val) {
      this.count = +val
    },
    count(val) {
      this.$emit('input', val)
    }
  },
  methods: {
    reward() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能给自己投食')
        return
      }
      if (this.state.reward_status) {
        this.$toast.info('已经投过食了')
        return
      }
      if (!this.user.wallet_coin && !this.user.wallet_money) {
        this.$toast.info('没有足够的团子')
        return
      }
      if (this.state.reward_status_loading) {
        return
      }
      const hasVirtualCoin = !!this.user.wallet_coin
      const title = hasVirtualCoin ? '向TA投食需要消耗你一个团子，是否继续?' : '向TA投食需要消耗你一个光玉，是否继续?'
      this.$confirm(title, '提示')
        .then(async () => {
          const data = await this.$store.dispatch('social/toggle', {
            type: 'pin',
            slug: this.pinSlug,
            action: 'reward_status',
            params: {
              target_type: 'pin',
              target_slug: this.pinSlug,
              method_type: 'favorite'
            }
          })
          if (data.success) {
            this.count += data.result
            if (hasVirtualCoin) {
              this.$store.commit('UPDATE_USER_INFO', {
                key: 'wallet_coin',
                value: this.$store.state.user.wallet_coin - 1
              })
            } else {
              this.$store.commit('UPDATE_USER_INFO', {
                key: 'wallet_money',
                value: this.$store.state.user.wallet_money - 1
              })
            }
          } else {
            this.$toast.error('服务器休息中')
          }
        })
        .catch(() => {})
    }
  }
}
</script>
