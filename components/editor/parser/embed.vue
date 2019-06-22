<style lang="scss" module>
.embed {}
</style>

<template>
  <div :class="$style.embed" />
</template>

<script>
export default {
  name: 'JsonEmbed',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
