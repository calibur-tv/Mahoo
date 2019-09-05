<style lang="scss">
.timeline-drawer {
  &-btn {
    color: $color-icon-1;

    &.is-active {
      color: $color-main;
    }

    &:hover {
      color: $color-main;
    }

    i {
      font-size: 24px;
    }

    span {
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="timeline-drawer">
    <button class="timeline-drawer-btn" @click="handleClick">
      <i class="iconfont ic-time_fill" />
      <span>时间轴</span>
    </button>
    <ElDrawer title="时间轴" :visible.sync="showDrawer">
      <FlowLoader
        func="getTimeline"
        type="page"
        :query="{
          $axios: $axios,
          type: type,
          slug: slug
        }"
      >
        <ElTimeline slot-scope="{ flow }">
          <ElTimelineItem v-for="(item, index) in flow" :key="index" :timestamp="$utils.timeAgo(item.time)" placement="top">
            <p>操作：{{ item.type }}</p>
            <p>
              用户：<NLink :to="$alias.user(item.data.user.slug)" class="fade-link" target="_blank">
                {{ item.data.user.nickname }}
              </NLink>
            </p>
          </ElTimelineItem>
        </ElTimeline>
      </FlowLoader>
    </ElDrawer>
  </div>
</template>

<script>
import { Drawer, Timeline, TimelineItem } from 'element-ui'

export default {
  name: 'TimelineDrawerBtn',
  components: {
    ElTimeline: Timeline,
    ElTimelineItem: TimelineItem,
    ElDrawer: Drawer
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: val => ~['pin'].indexOf(val)
    }
  },
  data() {
    return {
      showDrawer: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleClick() {
      this.showDrawer = true
    }
  }
}
</script>
