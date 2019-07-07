<style lang="scss">
.pin-vote-btn {
  display: inline-block;

  .is-active {
    color: $color-main;
  }

  button {
    color: $color-icon-1;
    &:hover {
      color: $color-main;
    }
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
  <div v-if="state" class="pin-vote-btn">
    <button class="up-vote-btn" :class="{ 'is-active': state.up_vote_status }" @click="upvote">
      <i class="iconfont ic-good_fill" />
      <span v-text="count || '点赞'" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PinVoteBtn',
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
    async upvote() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能给自己点赞')
        return
      }
      if (this.state.up_vote_status_loading) {
        return
      }
      const data = await this.$store.dispatch('social/toggle', {
        type: 'pin',
        slug: this.pinSlug,
        action: 'up_vote_status',
        params: {
          target_type: 'pin',
          target_slug: this.pinSlug,
          method_type: 'up_vote'
        }
      })
      if (data.success) {
        this.count += data.result
      } else {
        this.$toast.error('服务器休息中')
      }
    }
  }
}
</script>
