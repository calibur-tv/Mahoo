<template>
  <div
    ref="wrapper"
    class="scroll-warp"
  >
    <slot />
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'VScroll',
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    // 是否开启上拉刷新
    pullup: {
      type: Boolean,
      default: true
    },
    // 是否开启下拉刷新
    pulldown: {
      type: Boolean,
      default: false
    },
    // 是否监听开始滚动
    beforeScroll: {
      type: Boolean,
      default: false
    },
    scrollX: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  },
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  beforeDestroy() {
    if (this.scroll) {
      this.scroll.destroy()
    }
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        fade: true,
        scrollX: this.scrollX,
        scrollY: !this.scrollX
      })
      if (this.listenScroll) {
        this.scroll.on('scroll', pos => {
          // 发送滚动的位置事件
          this.$emit('scroll', pos)
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit('scrollToBottom', this.scroll)
          }
        })
      }
      // 上拉加载抛出事件
      if (this.pullup) {
        this.scroll.on('scrollEnd', () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit('scrollToEnd', this.scroll)
          }
        })
      }
      // 下拉刷新抛出事件
      if (this.pulldown) {
        this.scroll.on('touchend', pos => {
          if (pos.y > 50) {
            this.$emit('scrollToTop')
          }
        })
      }
      // 滚动结束抛出事件
      this.scroll.on('touchend', pos => {
        this.$emit('touchend', pos)
      })
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    refresh() {
      this.$nextTick(() => {
        this.scroll && this.scroll.refresh()
      })
    },
    scrollTo() {
      // 滚动到相应位置
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  }
}
</script>

<style lang="less">
.scroll-warp {
  height: 100%;
  overflow: hidden;
}
</style>
