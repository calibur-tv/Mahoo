<style lang="scss" module>
.image {
  padding: 0.7em 0;
  text-align: center;

  picture {
    margin: 0 auto;
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

  .border {
    border: 1px solid $color-gray-border;
  }

  .bg {
    padding: 15px;
    background-color: $color-gray-bg;

    > div {
      width: 60%;
      margin: 0 auto;
    }
  }
}
</style>

<template>
  <div :class="$style.image">
    <div :class="[{ [$style.border]: item.data.withBorder }, { [$style.bg]: item.data.withBackground }]">
      <div>
        <VImg :src="item.data.file.url" :stretched="item.data.stretched" :width="item.data.file.width" :height="item.data.file.height" />
      </div>
    </div>
    <p v-if="item.data.caption" v-text="item.data.caption" />
  </div>
</template>

<script>
export default {
  name: 'JsonImage',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
