<style lang="scss">
</style>

<template>
  <div id="create-atfield">
    atfield
    <editor />
  </div>
</template>

<script>
import Editor from '~/components/editor'

export default {
  name: 'CreateATField',
  components: {
    Editor
  },
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  computed: {},
  watch: {},
  created() {}
}
</script>
