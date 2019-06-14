<style>
.v-affix {
  position: fixed;
  z-index: 10;
}
</style>

<template>
  <div>
    <div ref="point" :class="classes" :style="styles">
      <slot />
    </div>
    <div v-show="slot" :style="slotStyle" />
  </div>
</template>

<script>
function getScroll(target, top) {
  const prop = top ? 'pageYOffset' : 'pageXOffset'
  const method = top ? 'scrollTop' : 'scrollLeft'

  let ret = target[prop]

  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method]
  }

  return ret
}

function getOffset(element) {
  const rect = element.getBoundingClientRect()

  const scrollTop = getScroll(window, true)
  const scrollLeft = getScroll(window)

  const docEl = window.document.body
  const clientTop = docEl.clientTop || 0
  const clientLeft = docEl.clientLeft || 0

  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  }
}

export default {
  name: 'Affix',
  props: {
    top: {
      type: Number,
      default: 0
    },
    bottom: {
      type: Number,
      default: undefined
    }
  },
  data() {
    return {
      affix: false,
      styles: {},
      slot: false,
      slotStyle: {}
    }
  },
  computed: {
    offsetType() {
      let type = 'top'
      if (this.bottom >= 0) {
        type = 'bottom'
      }
      return type
    },
    classes() {
      return [
        {
          'v-affix': this.affix
        }
      ]
    }
  },
  mounted() {
    this.$utils.on(window, 'scroll', this.handleScroll)
    this.$utils.on(window, 'resize', this.handleScroll)
    this.$nextTick(() => {
      this.handleScroll()
    })
  },
  beforeDestroy() {
    this.$utils.off(window, 'scroll', this.handleScroll)
    this.$utils.off(window, 'resize', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const affix = this.affix
      const scrollTop = getScroll(window, true)
      const elOffset = getOffset(this.$el)
      const windowHeight = window.innerHeight
      const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight

      // Fixed Top
      if ((elOffset.top - this.top) < scrollTop && this.offsetType === 'top' && !affix) {
        this.affix = true
        this.slotStyle = {
          width: this.$refs.point.clientWidth + 'px',
          height: this.$refs.point.clientHeight + 'px'
        }
        this.slot = true
        this.styles = {
          top: `${this.top}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }

        this.$emit('on-change', true)
      } else if ((elOffset.top - this.top) > scrollTop && this.offsetType === 'top' && affix) {
        this.slot = false
        this.slotStyle = {}
        this.affix = false
        this.styles = null

        this.$emit('on-change', false)
      }

      // Fixed Bottom
      if ((elOffset.top + this.bottom + elHeight) > (scrollTop + windowHeight) && this.offsetType === 'bottom' && !affix) {
        this.affix = true
        this.styles = {
          bottom: `${this.bottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }

        this.$emit('on-change', true)
      } else if ((elOffset.top + this.bottom + elHeight) < (scrollTop + windowHeight) && this.offsetType === 'bottom' && affix) {
        this.affix = false
        this.styles = null

        this.$emit('on-change', false)
      }
    }
  }
}
</script>
