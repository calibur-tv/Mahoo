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
      if (this.item.content_type === 2) {
        return '出了一道题'
      }
      return '发表文章'
    }
  }
}
</script>
