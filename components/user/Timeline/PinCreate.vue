<template>
  <div class="user-timeline-3">
    <p v-text="title" />
    <PinArticle :item="item" :show-user="false" />
  </div>
</template>

<script>
import PinArticle from '~/components/flow/PinArticle'

export default {
  name: 'PinCreate',
  components: {
    PinArticle
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
