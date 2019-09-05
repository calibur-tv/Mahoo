<template>
  <el-button v-if="state" :loading="state.is_following_loading" class="user-fff-btn" round type="primary" :plain="btnText !== '关注'" @click="handleFollowClick">
    <span v-text="btnText" />
  </el-button>
</template>

<script>
export default {
  name: 'UserFollowBtn',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    state() {
      return this.$store.getters['social/get']('user-follow', this.slug)
    },
    isAuth() {
      return this.$store.state.isAuth
    },
    isMine() {
      return this.$store.getters.isMine(this.slug)
    },
    btnText() {
      if (!this.isAuth || !this.state) {
        return '关注'
      }
      if (this.isMine) {
        return '自己'
      }
      if (this.state.is_following && this.state.is_followed_by) {
        return '互相关注'
      } else if (this.state.is_following) {
        return '已关注'
      } else if (this.state.is_followed_by) {
        return '关注了我'
      }
      return '关注'
    }
  },
  methods: {
    handleFollowClick() {
      if (!this.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能关注自己')
        return
      }
      if (!this.state || this.state.is_following_loading) {
        return
      }
      if (this.btnText === '关注了我' || this.btnText === '关注') {
        this.submit()
        return
      }
      this.$confirm('确定要取消关注吗？', '提示')
        .then(() => this.submit())
        .catch(() => {})
    },
    async submit() {
      const data = await this.$store.dispatch('social/toggle', {
        type: 'user-follow',
        slug: this.slug,
        action: 'is_following',
        params: {
          target_slug: this.slug,
          target_type: 'user',
          method_type: 'follow'
        }
      })
      if (data.success) {
        this.$emit('change', data.result)
      }
    }
  }
}
</script>
