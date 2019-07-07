<style lang="scss">
.pin-vote-btn {
  .is-active {
    color: $color-main;
  }

  button:hover {
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
  <div v-if="state" class="pin-vote-btn">
    <button class="up-vote-btn" :class="{ 'is-active': state.up_vote_status }" @click="upvote">
      <i class="iconfont ic-good_fill" />
      <span v-text="count" />
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
          action_type: 'user',
          action_slug: this.$store.state.user.slug,
          method_type: 'up_vote'
        }
      })
      if (data.success) {
        data.result ? this.count++ : this.count--
      }
    }
  }
}
</script>
