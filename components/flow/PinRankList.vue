<style lang="scss">
.pin-rank-list {
  .pin-ranker {
    margin-top: 20px;
  }

  .flow-loader-state {
    &-loading,
    &-nothing,
    &-error {
      font-size: 12px;
      color: $color-text-3;
      margin-top: 100px;
    }
    &-load {
      display: none;
    }
  }

  .more {
    display: block;
    height: 24px;
    line-height: 22px;
    background-color: #e5e9ef;
    text-align: center;
    border: 1px solid #e0e6ed;
    color: #222;
    border-radius: 4px;
    transition: 0.2s;
    font-size: 12px;
    margin-top: 15px;

    &:hover {
      background-color: #ccd0d7;
      border-color: #ccd0d7;
    }
  }
}
</style>

<template>
  <FlowLoader
    ref="loader"
    func="getTagFlows"
    type="seenIds"
    :auto="0"
    :query="{
      $axios: $axios,
      slug: slug,
      take: take,
      changing: 'slug',
      time: time,
      sort: 'hottest'
    }"
    :cache-timeout="3600"
    class="pin-rank-list"
  >
    <ul slot-scope="{ flow, count }" @mouseleave="defaultActive = 0">
      <PinRanker v-for="(item, index) in flow" :key="item.slug" :index="index" :item="item" :show="defaultActive === index" @mouseenter.native="handleMove(index)" />
      <NLink v-if="count" class="more" :to="$alias.tag(slug)" target="_blank">
        <span>查看更多</span>
        <i class="el-icon-arrow-right" />
      </NLink>
    </ul>
  </FlowLoader>
</template>

<script>
import PinRanker from '~/components/flow/PinRanker'

export default {
  name: 'PinRankList',
  components: {
    PinRanker
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    take: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      defaultActive: 0
    }
  },
  methods: {
    initData() {
      this.$refs.loader && this.$refs.loader.initData()
    },
    handleMove(index) {
      this.defaultActive = index
    }
  }
}
</script>
