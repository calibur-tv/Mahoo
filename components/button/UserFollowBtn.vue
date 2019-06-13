<template>
  <el-button
    :loading="loading"
    class="user-fff-btn"
    @click="handleFollowClick"
  >
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
    },
    value: {
      type: String,
      default: 'unknown',
      validator: val => ~['unknown', 'self', 'friend', 'follower', 'following', 'stranger'].indexOf(val)
    }
  },
  data() {
    return {
      loading: false,
      action: this.value
    }
  },
  computed: {
    btnText() {
      switch (this.action) {
        case 'unknown':
          return '关注'
        case 'self':
          return '关注'
        case 'friend':
          return '互相关注'
        case 'follower':
          return '关注了我'
        case 'following':
          return '已关注'
        case 'stranger':
          return '关注'
        default:
          return '关注'
      }
    }
  },
  watch: {
    value(val) {
      this.action = val
    }
  },
  mounted() {
    this.$channel.$on(`user-follow-${this.slug}`, result => {
      this.action = result
    })
  },
  methods: {
    handleFollowClick() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.action === 'unknown' || this.loading) {
        return
      }
      if (this.action === 'self') {
        this.$toast.info('不能关注自己')
        return
      }
      if (this.action === 'follower' || this.action === 'stranger') {
        this.submit()
        return
      }
      this.$confirm('确定要取消关注吗？', '提示')
        .then(() => this.submit())
        .catch(() => {})
    },
    submit() {
      this.loading = true
      this.$axios.$post('v1/user/toggle_follow', {
        slug: this.slug
      })
        .then(relation => {
          this.$channel.$emit(`user-follow-${this.slug}`, relation)
          this.$emit('change', {
            relation,
            change: (relation === 'friend' || relation === 'following') ? 1 : -1
          })
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
