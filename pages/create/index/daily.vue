<style lang="scss">
</style>

<template>
  <create-talk-form :options="tags" />
</template>

<script>
import CreateTalkForm from '~/components/form/CreateTalkForm'

export default {
  name: 'CreateDaily',
  components: {
    CreateTalkForm
  },
  props: {
    tags: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
