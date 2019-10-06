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
    <VSwitcher :headers="['关注', '推荐', '漫友圈']" sticky swipe animated :fixed-top="0" :default-index="activeIndex" :anchor-padding="10" @change="handleSwitch">
      <VScroller slot="0">
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
      <VScroller ref="scroller" slot="1" @refresh="refreshMove" @refresh-end="refreshEnd">
        <Refresher ref="refresher" @refresh="handleRefresh" />
        <FlowLoader
          ref="recommended"
          func="getFlowRecommendedIndex"
          type="seenIds"
          :query="{
            $axios,
            changing: 'slug',
            rand_id: randId
          }"
          :callback="handleCallback"
        >
          <ul slot-scope="{ flow }">
            <PinRecommendedItem v-for="item in flow" :key="item.slug" :item="item" />
          </ul>
        </FlowLoader>
      </VScroller>
      <VScroller slot="2">
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
import Refresher from '~/components/app/Refresher'
import scrollToY from '~/assets/js/scrollToY'

const makeRandomId = (curId = '') => {
  const str = '0123456789'.replace(curId, '')
  return str[Math.floor(Math.random() * str.length)]
}

export default {
  name: 'AppHome',
  layout: 'app',
  components: {
    PinRecommendedItem,
    Refresher
  },
  data() {
    return {
      activeIndex: 1,
      randId: makeRandomId(),
      newRandId: ''
    }
  },
  mounted() {
    this.watchRefresh()
  },
  methods: {
    handleSwitch(index) {
      this.activeIndex = index
    },
    watchRefresh() {
      this.$channel.$on('main-tab-refresh', index => {
        if (index !== 0) {
          return
        }
        if (this.activeIndex !== 1) {
          return
        }
        this.$refs.refresher && this.$refs.refresher.refresh()
        this.$refs.scroller && scrollToY(0, 100, this.$refs.scroller.$el)
      })
    },
    refreshMove({ offset }) {
      this.$refs.refresher.start(offset)
    },
    refreshEnd() {
      this.$refs.refresher.next()
    },
    handleRefresh() {
      this.newRandId = makeRandomId(this.randId)
      this.$store.dispatch('flow/initData', {
        func: 'getFlowRecommendedIndex',
        type: 'seenIds',
        query: {
          __refresh__: true,
          $axios: this.$axios,
          changing: 'slug',
          rand_id: this.newRandId
        },
        callback: this.handleCallback
      })
    },
    handleCallback({ refresh, data }) {
      if (refresh) {
        this.randId = this.newRandId
        setTimeout(() => {
          this.$toast.info(`${data.result.length} 条新内容`)
          this.$refs.refresher && this.$refs.refresher.end()
        }, 1000)
      }
    }
  }
}
</script>
