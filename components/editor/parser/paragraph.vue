<style lang="scss" module>
.paragraph {
  text-indent: 2em;
  font-weight: 400;
  line-height: 1.6;
  padding: .7em 0;
  color: $color-text-1;
  font-size: 14px;
  @extend %breakWord;
}
</style>

<template>
  <p :class="$style.paragraph" v-html="item.data.text" />
</template>

<script>
export default {
  name: 'JsonParagraph',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
