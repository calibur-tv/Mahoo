<style lang="scss">
.img {
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  max-width: 100%;
  vertical-align: middle;

  &.is-full {
    position: relative;
    display: block;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      will-change: filter, opacify;
      animation: blur 500ms 1 cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    @keyframes blur {
      from {
        opacity: 0.32;
        filter: blur(16px);
      }

      to {
        opacity: 1;
        filter: none;
      }
    }
  }
}
</style>

<template>
  <picture v-lazyload="handle" class="img" :style="[style, extraStyle]" :class="{ 'is-full': isFull }">
    <source :srcset="source" type="image/webp">
    <img :src="show" :alt="alt">
  </picture>
</template>

<script>
export default {
  name: 'VImg',
  props: {
    src: {
      type: String,
      required: true
    },
    def: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    height: {
      type: [String, Number],
      default: ''
    },
    radius: {
      type: String,
      default: ''
    },
    stretched: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const { def, width } = this
    const src = def
      ? def.startsWith('http') ? def : `https://m1.calibur.tv/${def}`
      : 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    return {
      show: src,
      source: src,
      isFull: typeof width === 'number' && typeof this.height === 'number' && !this.radius,
      isLarge: width.toString().endsWith('%'),
      extraStyle: {}
    }
  },
  computed: {
    style() {
      const style = {}
      const { width, height, radius, isFull, isLarge } = this
      if (isFull) {
        style.paddingTop = `${(height / width) * 100}%`
        return style
      }
      if (width && !isLarge) {
        style.width = `${width}px`
      }
      if (height) {
        style.height = `${height}px`
      }
      if (radius) {
        style.borderRadius = radius
      }
      return style
    }
  },
  methods: {
    handle() {
      const { src, isFull, isLarge, $h5 } = this
      const mode = isLarge ? 2 : 1
      let { width, height } = this
      if (isFull) {
        const maxWidth = $h5 ? 420 : 660
        if (width > maxWidth) {
          height = parseInt(maxWidth / width * height, 10)
          width = maxWidth
        }
        if (height > 9999) {
          width = parseInt(9999 / height * width, 10)
          height = 9999
        }
        if (width < this.$el.clientWidth && !this.stretched) {
          this.extraStyle = {
            width: `${width}px`,
            height: `${height}px`,
            paddingTop: '0px'
          }
        }
      }
      if (isLarge) {
        width = parseInt((width.slice(0, -1) / 100) * this.$el.clientWidth, 10)
      }
      this.show = this.$resize(src, { width, height, mode, webP: false })
      this.source = this.$resize(src, { width, height, mode })
    }
  }
}
</script>
