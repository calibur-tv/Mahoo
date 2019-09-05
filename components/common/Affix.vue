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
    if (window.screen.width < 789) {
      return
    }
    const target = this._getScrollTarget()
    this.$utils.on(target, 'scroll', this.handleScroll)
    this.$utils.on(target, 'resize', this.handleScroll)
    this.$nextTick(() => {
      this.handleScroll({ type: 'scroll' })
    })
  },
  beforeDestroy() {
    const target = this._getScrollTarget()
    this.$utils.off(target, 'scroll', this.handleScroll)
    this.$utils.off(target, 'resize', this.handleScroll)
  },
  methods: {
    _getScrollTarget() {
      let el = this.$el
      if (!el) {
        return null
      }
      while (el && el.tagName !== 'HTML' && el.tagName !== 'BOYD' && el.nodeType === 1) {
        const overflowY = window.getComputedStyle(el).overflowY
        if (overflowY === 'scroll' || overflowY === 'auto') {
          if (el.tagName === 'HTML' || el.tagName === 'BODY') {
            return document
          }
          return el
        }
        el = el.parentNode
      }
      return document
    },
    handleScroll(evt) {
      const affix = this.affix
      const scrollTop = getScroll(window, true)
      const elOffset = getOffset(this.$el)
      const windowHeight = window.innerHeight
      const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight
      const condition = !affix || evt.type === 'resize'
      // Fixed Top
      if (elOffset.top - this.top < scrollTop && this.offsetType === 'top' && condition) {
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
      } else if (elOffset.top - this.top > scrollTop && this.offsetType === 'top' && affix) {
        this.slot = false
        this.slotStyle = {}
        this.affix = false
        this.styles = null

        this.$emit('on-change', false)
      }

      // Fixed Bottom
      if (elOffset.top + this.bottom + elHeight > scrollTop + windowHeight && this.offsetType === 'bottom' && condition) {
        this.affix = true
        this.styles = {
          bottom: `${this.bottom}px`,
          left: `${elOffset.left}px`,
          width: `${this.$el.offsetWidth}px`
        }

        this.$emit('on-change', true)
      } else if (elOffset.top + this.bottom + elHeight < scrollTop + windowHeight && this.offsetType === 'bottom' && affix) {
        this.affix = false
        this.styles = null

        this.$emit('on-change', false)
      }
    }
  }
}
</script>
