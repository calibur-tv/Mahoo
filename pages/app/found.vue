<style lang="scss">
#app-found {
  .v-switcher {
    &-header {
      padding-left: 2px;

      &-item {
        color: $color-text-2;
        font-weight: bold;
        padding: 0 8px;

        &.is-active {
          font-size: 20px;
          line-height: 38px !important;
          color: $color-black;
          animation: pop-up 250ms 1;
        }
      }

      &-anchor {
        height: 5px;
        bottom: 5px;
        border-radius: 5px;
        background-color: $color-main;
        opacity: 0.5;
      }

      &-after {
        i {
          display: block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: 20px;
          text-align: center;
        }
      }
    }

    @include keyframes(pop-up) {
      50% {
        transform: scale(1.2);
      }
    }
  }
}
</style>

<template>
  <div id="app-found">
    <VSwitcher :headers="['关注', '推荐', '漫友圈']" sticky swipe animated :fixed-top="0" :default-index="1" :anchor-padding="10">
      <VScroller slot="0" :throttle="-1">
        <p>start</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>关注</p>
        <p>end</p>
      </VScroller>
      <VScroller slot="1" :throttle="-1">
        <FlowLoader
          func="getFlowRecommendedIndex"
          type="seenIds"
          :query="{
            $axios,
            changing: 'slug'
          }"
        >
          <ul slot-scope="{ flow }">
            <PinRecommendedItem v-for="item in flow" :key="item.slug" :item="item" />
          </ul>
        </FlowLoader>
      </VScroller>
      <VScroller slot="2" :throttle="-1">
        <p>start</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>漫友圈</p>
        <p>end</p>
      </VScroller>
      <template slot="header-after">
        <NLink to="/app/search">
          <i class="iconfont ic-search" />
        </NLink>
      </template>
    </VSwitcher>
  </div>
</template>

<script>
import PinRecommendedItem from '~/components/flow/PinRecommendedItem'

export default {
  name: 'AppHome',
  layout: 'app',
  components: {
    PinRecommendedItem
  },
  props: {},
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
