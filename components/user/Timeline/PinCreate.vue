<template>
  <div class="user-timeline-3">
    <p v-text="title" />
    <PinFlowItem :item="item" :show-user="false" />
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
  },
  computed: {
    title() {
      return '发表文章'
    }
  }
}
</script>
