<style lang="scss" module>
.music {
  padding: 0.7em 0;
  text-align: center;

  iframe {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }

  p {
    min-width: 115px;
    max-width: 80%;
    min-height: 22px;
    padding: 10px;
    border-bottom: 1px solid $color-gray-line;
    font-size: 14px;
    color: #969696;
    line-height: 1.7;
    text-align: center;
    display: inline-block;
    @extend %breakWord;
  }
}
</style>

<template>
  <div :class="$style.music">
    <iframe
      :src="item.data.embed"
      scrolling="no"
      border="0"
      frameborder="no"
      framespacing="0"
      allowtransparency="true"
      allowfullscreen="true"
      width="330"
      height="86"
    />
    <p v-if="item.data.caption" v-text="item.data.caption" />
  </div>
</template>

<script>
export default {
  name: 'JsonMusic',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
