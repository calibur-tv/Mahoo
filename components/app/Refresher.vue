<style lang="scss">
.refresher {
  background-image: url(~assets/img/loading.gif);
  background-size: 80px;
  background-position: center 10px;
  background-repeat: no-repeat;

  &.translate {
    transition: height 200ms ease-in;
  }
}
</style>

<template>
  <div class="refresher" :class="{ translate }" :style="style" />
</template>

<script>
export default {
  name: 'Refresher',
  data() {
    return {
      height: 0,
      translate: false
    }
  },
  computed: {
    style() {
      return {
        height: `${Math.min(this.height, 200)}px`
      }
    }
  },
  methods: {
    start(offset) {
      this.translate = false
      this.height = offset
    },
    next() {
      this.translate = true
      if (this.height < 80) {
        this.height = 0
        return
      }
      this.height = 100
      this.$emit('refresh')
    },
    end() {
      this.height = 0
    }
  }
}
</script>
