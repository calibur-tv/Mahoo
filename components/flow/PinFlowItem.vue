<template>
  <component
    :is="`type-${item.badge}`"
    v-if="item"
    :item="item"
    :show-user="showUser"
    :show-area="showArea"
    :secret-link="secretLink"
  />
</template>

<script>
import flowProps from '~/mixins/flowProps'
import TypeArticle from '~/components/flow/types/PinArticle'

export default {
  name: 'PinFlowItem',
  components: {
    TypeArticle
  },
  mixins: [flowProps]
}
</script>
