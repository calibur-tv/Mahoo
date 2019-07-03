<style lang="scss" module>
.video {
  padding: 0.7em 0;
  text-align: center;

  .wrap {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 52%;

    iframe {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
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
  <div :class="$style.video">
    <div :class="$style.wrap">
      <iframe
        :src="item.data.embed"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowtransparency="true"
        allowfullscreen="true"
      />
    </div>
    <p v-if="item.data.caption" v-text="item.data.caption" />
  </div>
</template>

<script>
export default {
  name: 'JsonVideo',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
