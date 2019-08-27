<style lang="scss">
#homepage {
  .only-pc {
    &.container {
      min-width: 980px;
      margin-top: 30px;
    }

    .area-wrap {
      padding-bottom: 19px;

      .area-left {
        overflow: hidden;
      }

      .area-right {
        float: right;
        width: 260px;
        margin-left: 20px;
      }
    }

    .beian {
      margin-bottom: 20px;
      text-align: center;
      color: $color-text-2;
      font-size: 12px;
    }
  }

  .only-h5 {
    .v-switcher {
      &-header {
        &-wrap {
          border-bottom: 1px solid #f4f4f4;
        }

        &-anchor {
          height: 2px;
          bottom: 1px;
          background-color: $color-main;
        }

        &-item {
          padding: 0 16px;
          font-size: 14px;
          color: #505050;

          &.is-active {
            color: $color-main;
          }
        }
      }
    }

    .v-scroller {
      width: 110%;
      padding-right: 10%;
    }

    .pin-list {
      margin: 10px 0;

      >li {
        padding: 10px;
        border-top: 1px solid $color-gray-4;
      }
    }

    .flow-loader-state {
      &-nothing,
      &-error {
        img {
          height: 175px;
          margin-top: 25px;
          margin-bottom: 10px;
        }

        p {
          font-size: 12px;
          color: $color-text-3;
        }
      }

      &-loading {
        height: 180px;
      }
    }
  }
}
</style>

<template>
  <div id="homepage">
    <div class="only-pc container">
      <component
        :is="`${item.type}-area`"
        v-for="item in tags"
        :key="item.slug"
        :name="item.name"
        :slug="item.slug"
      />
      <p class="beian">
        互联网 ICP 备案：沪 ICP 备 17050785 号 - 1
      </p>
    </div>
    <div class="only-h5">
      <div class="main-content">
        <VSwitcher
          :headers="tags"
          :anchor-padding="16"
          :fixed-top="50"
          @change="handleTabSwitch"
        >
          <FlowLoader
            v-for="(item, index) in tags"
            :key="item.slug"
            :slot="`${index}`"
            ref="loader"
            func="getTagFlows"
            type="seenIds"
            :query="{
              $axios: $axios,
              slug: item.slug,
              take: 10,
              changing: 'slug',
              time: '3-day',
              sort: 'active'
            }"
            :callback="handlePatch"
          >
            <ul slot-scope="{ flow }" class="pin-list">
              <PinArticle
                v-for="pin in flow"
                :key="pin.slug"
                :item="pin"
              />
            </ul>
            <SkeletonArticle slot="loading" />
            <template slot="nothing">
              <img src="~assets/img/error/no-content.png">
              <p>这里什么都没有</p>
            </template>
            <template slot="error">
              <img src="~assets/img/error/no-network.png">
              <p>遇到错误了，点击重试</p>
            </template>
          </FlowLoader>
        </VSwitcher>
      </div>
    </div>
  </div>
</template>

<script>
import GridArea from '~/components/area/GridArea'
import PinArticle from '~/components/flow/PinArticle'
import SkeletonArticle from '~/components/skeleton/SkeletonArticle'

export default {
  name: 'Homepage',
  layout: 'web',
  components: {
    GridArea,
    PinArticle,
    SkeletonArticle
  },
  computed: {
    tags() {
      return this.$store.state.global.hottest_tags
    }
  },
  async asyncData({ store }) {
    await store.dispatch('global/getHottestTags')
  },
  methods: {
    handleTabSwitch(index) {
      this.$refs.loader[index] && this.$refs.loader[index].initData()
    },
    handlePatch({ data }) {
      this.$axios.$get('v1/pin/batch_patch', {
        params: {
          slug: data.result.map(_ => _.slug).join(',')
        }
      })
        .then(result => {
          this.$refs.loader.patch(result)
        })
        .catch(() => {})
    }
  }
}
</script>
