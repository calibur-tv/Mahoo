<template>
  <div id="user-draft">
    <flow-loader
      func="getUserDrafts"
      type="page"
      :query="{
        count: 10,
        $axios: $axios
      }"
    >
      <ul slot-scope="{ flow, extra }">
        <pin-flow-item
          v-for="(item, index) in flow"
          :key="item.slug"
          :item="item"
          :secret-link="extra[index]"
        />
      </ul>
    </flow-loader>
  </div>
</template>

<script>
import mustSelf from '~/mixins/mustSelf'
import mustSign from '~/mixins/mustSign'
import PinFlowItem from '~/components/flow/PinFlowItem'

export default {
  name: 'UserDraft',
  components: {
    PinFlowItem
  },
  mixins: [mustSign, mustSelf],
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>
