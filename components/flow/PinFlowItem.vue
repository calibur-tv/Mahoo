<template>
  <component
    :is="`type-${item.content_type}`"
    v-if="item"
    :item="item"
    :show-user="showUser"
    :show-area="showArea"
    :secret-link="secretLink"
  />
</template>

<script>
import flowProps from '~/mixins/flowProps'
import Type1 from '~/components/flow/types/PinArticle'
import Type2 from '~/components/flow/types/TagQuestion'

export default {
  name: 'PinFlowItem',
  components: {
    Type1,
    Type2
  },
  mixins: [flowProps]
}
</script>
