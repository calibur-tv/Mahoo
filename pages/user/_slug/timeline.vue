<style lang="scss">
#user-timeline {}
</style>

<template>
  <div id="user-timeline">
    <flow-loader
      func="getUserTimeline"
      type="page"
      :query="{
        $axios: $axios,
        slug: slug,
        count: 10
      }"
    >
      <el-timeline slot-scope="{ flow }">
        <el-timeline-item
          v-for="item in flow"
          :key="`${item.type}-${item.slug}`"
          :timestamp="$utils.timeFormat(item.created_at, 'MM-DD')"
          placement="top"
        >
          <component :is="`type-${item.type}`" :item="item.data" />
        </el-timeline-item>
      </el-timeline>
    </flow-loader>
  </div>
</template>

<script>
import { Timeline, TimelineItem } from 'element-ui'
import type0 from '~/components/user/Timeline/JoinUs'
import type1 from '~/components/user/Timeline/TagBookmark'
import type2 from '~/components/user/Timeline/TagCreate'
import type3 from '~/components/user/Timeline/PinCreate'

export default {
  name: 'UserTimeline',
  components: {
    'el-timeline': Timeline,
    'el-timeline-item': TimelineItem,
    type0,
    type1,
    type2,
    type3
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
