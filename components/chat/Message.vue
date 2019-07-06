<style lang="scss">
.chat-message {
  p {
    margin-top: inherit;
    margin-bottom: inherit;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
  }
}
</style>

<template>
  <div class="chat-message">
    <JsonContent :content="item.content" />
  </div>
</template>

<script>
import JsonContent from '~/components/editor/JsonContent'

export default {
  name: 'ChatMessage',
  components: {
    JsonContent
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
