<style lang="scss" module>
.paragraph {
  font-weight: 400;
  line-height: 1.6;
  padding: 0.7em 0;
  color: $color-text-1;
  font-size: 14px;
  @extend %breakWord;
}
</style>

<template>
  <p :class="$style.paragraph" v-html="item.data.text.replace(/\n/g, '<br>')" />
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
