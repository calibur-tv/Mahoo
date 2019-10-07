<style lang="scss">
.refresher {
  overflow: hidden;
  text-align: center;

  &.refreshing {
    background-image: url(~assets/img/loading.gif);
    background-size: 80px;
    background-position: center 10px;
    background-repeat: no-repeat;
  }

  &.translate {
    transition: height 200ms ease-in;
  }

  i {
    transition: 200ms ease-in;

    &.rotate {
      transform: rotate(180deg);
    }
  }
}
</style>

<template>
  <div class="refresher" :class="{ translate, refreshing }" :style="style">
    <template v-if="!refreshing">
      <br />
      <i class="el-icon-bottom" :class="{ rotate: height >= 100 }" />
      <p v-text="height < 100 ? '下拉刷新' : '松开刷新'" />
    </template>
  </div>
</template>

<script>
export default {
  name: 'Refresher',
  data() {
    return {
      height: 0,
      translate: false,
      refreshing: false
    }
  },
  computed: {
    style() {
      if (this.refreshing) {
        return {
          height: '100px'
        }
      }
      return {
        height: `${this.height / 2 + Math.sqrt(this.height)}px`
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
      if (this.height < 100) {
        this.height = 0
        return
      }
      this.height = 100
      this.refreshing = true
      this.$emit('refresh')
    },
    end() {
      this.height = 0
      setTimeout(() => {
        this.refreshing = false
      }, 500)
    },
    refresh() {
      if (this.refreshing) {
        return
      }
      this.refreshing = true
      this.translate = true
      this.height = 100
      this.$emit('refresh')
    }
  }
}
</script>
