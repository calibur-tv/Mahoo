<style lang="scss">
.pin-flow-list {
  .flows {
    li {
      background-color: #fff;
      padding: 15px 20px 20px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
  }
}
</style>

<template>
  <div class="pin-flow-list">
    <FlowLoader
      func="getTagFlows"
      :type="sort === 'newest' ? 'lastId' : 'seenIds'"
      :query="query"
    >
      <ul slot-scope="{ flow }" class="flows">
        <PinFlowItem
          v-for="item in flow"
          :key="item.slug"
          :show-area="!!loop"
          :item="item"
        />
      </ul>
    </FlowLoader>
  </div>
</template>

<script>
import PinFlowItem from '~/components/flow/PinFlowItem'

export default {
  name: 'PinFlowList',
  components: {
    PinFlowItem
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    loop: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      time: 'all',
      sort: 'hottest'
    }
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        sort: this.sort,
        loop: this.loop,
        time: this.time,
        take: 10,
        changing: 'slug'
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
