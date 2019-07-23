<template>
  <button
    v-if="state"
    :class="{ 'is-active': state.is_marked }"
    class="join-zone-btn"
    @click="handleClick"
  >
    {{ state.is_marked ? '已加入' : '加入' }}
  </button>
</template>

<script>
export default {
  name: 'JoinZoneBtn',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    state() {
      return this.$store.getters['social/get']('tag', this.slug)
    }
  },
  methods: {
    handleClick() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.state.is_marked) {
        this.$toast.info('暂不支持退出')
        return
      }
      this.$toast.info('施工中')
    }
  }
}
</script>
