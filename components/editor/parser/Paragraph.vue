<style lang="scss" module>
.paragraph {
  font-weight: 400;
  line-height: 1.7;
  color: #2f2f2f;
  @extend %breakWord;
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 16px;
}
</style>

<template>
  <p :class="$style.paragraph" v-html="item.data.text" />
</template>

<script>
export default {
  name: 'JsonContentTxtParser',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
