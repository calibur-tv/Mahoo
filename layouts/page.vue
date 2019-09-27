<style lang="scss">
.slide-left-enter,
.slide-right-leave-active {
  transform: translate(30px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-30px, 0);
}

.page-view {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
</style>

<template>
  <transition :name="transitionName">
    <nuxt class="page-view" />
  </transition>
</template>

<script>
export default {
  name: 'PageLayout',
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
