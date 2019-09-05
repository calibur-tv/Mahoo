<style lang="scss" module>
.h1,
.h2 {
  border-bottom: 1px solid $color-gray-line;
  padding-bottom: 10px;
  padding-top: 1.5em;
  margin-bottom: 1px;
}

.h3 {
  padding-top: 1.5em;
}

.h4,
.h5,
.h6 {
  padding: 1em 0;
  margin: 0;
  margin-bottom: -0.9em;
  line-height: 1.5em;
}
</style>

<script>
export default {
  name: 'JsonHeader',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  render(h) {
    const level = this.item.data.level
    return h('h' + this.item.data.level, {
      class: this.$style[`h${level}`],
      domProps: {
        innerHTML: this.item.data.text
      }
    })
  }
}
</script>
