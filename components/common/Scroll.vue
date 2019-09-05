<template>
  <div ref="wrapper" class="scroll-warp">
    <slot />
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'

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
    scrollX: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    data() {
      this.refresh()
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
      BScroll.use(MouseWheel)
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        fade: true,
        scrollX: this.scrollX,
        scrollY: !this.scrollX,
        mouseWheel: {
          invert: false,
          speed: 30,
          easeTime: 300
        }
      })
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y > -50) {
          this.$emit('top')
        }
        if (this.scroll.y <= this.scroll.maxScrollY + 50) {
          this.$emit('bottom')
        }
      })
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    refresh() {
      return new Promise(resolve => {
        this.$nextTick(() => {
          setTimeout(() => {
            this.scroll && this.scroll.refresh()
            this.$nextTick(() => {
              resolve()
            })
          }, 20)
        })
      })
    },
    scrollTo() {
      // 滚动到相应位置
      setTimeout(() => {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      }, 0)
    },
    scrollToElement() {
      setTimeout(() => {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      }, 0)
    }
  }
}
</script>

<style>
.scroll-warp {
  height: 100%;
  overflow: hidden;
}
</style>
