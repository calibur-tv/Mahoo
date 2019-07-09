<style lang="scss">
#user-draft {
  li {
    border-top: 1px solid #f0f2f7;
    padding-top: 20px;
    margin-top: 20px;

    &:first-child {
      padding-top: 0;
      margin-top: 0;
      border-top-width: 0;
    }
  }
}
</style>

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
