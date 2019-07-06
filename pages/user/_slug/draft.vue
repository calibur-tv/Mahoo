<template>
  <div id="user-draft">
    <FlowLoader
      func="getUserDrafts"
      type="page"
      :query="{
        count: 10,
        $axios: $axios
      }"
    >
      <ul slot-scope="{ flow, extra }">
        <PinFlowItem
          v-for="(item, index) in flow"
          :key="item.slug"
          :item="item"
          :show-user="false"
          :secret-link="extra[index]"
        />
      </ul>
    </FlowLoader>
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
