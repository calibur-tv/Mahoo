<template>
  <component
    :is="`type-${item.content_type}`"
    :item="item"
  />
</template>

<script>
import flowProps from '~/mixins/flowProps'
import Type1 from '~/components/flow/types/PinArticle'

export default {
  name: 'PinFlowItem',
  components: {
    Type1
  },
  mixins: [flowProps],
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
