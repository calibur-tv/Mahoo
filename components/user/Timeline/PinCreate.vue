<style lang="scss">
</style>

<template>
  <div class="user-timeline-3">
    <p>发表文章</p>
    <pin-flow-item :item="item" :show-user="false" />
  </div>
</template>

<script>
import PinFlowItem from '~/components/flow/PinFlowItem'

export default {
  name: 'PinCreate',
  components: {
    PinFlowItem
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
