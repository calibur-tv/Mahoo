<style lang="scss" module>
.delimiter {
  background-image: url(~assets/img/divider.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  height: 100px;
}
</style>

<template>
  <div :class="$style.delimiter" />
</template>

<script>
export default {
  name: 'JsonDelimiter',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
