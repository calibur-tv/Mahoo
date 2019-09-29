<style lang="scss">
.page-transition {
  &.fade-show {
    animation: fade-show 500ms 1;
  }

  &.fade-hide {
    animation: fade-hide 500ms 1;
  }

  @include keyframes(fade-show) {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @include keyframes(fade-hide) {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
}
</style>

<template>
  <div class="page-transition" :class="[{ [`${name}-show`]: show }, { [`${name}-hide`]: hide }]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'PageTransition',
  props: {
    name: {
      type: String,
      default: 'fade'
    }
  },
  data() {
    return {
      show: false,
      hide: false
    }
  },
  beforeMount() {
    this.show = true
  },
  beforeDestroy() {
    this.hide = true
  }
}
</script>
