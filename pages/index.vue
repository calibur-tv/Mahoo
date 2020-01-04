<style lang="scss">
#homepage {
  .pin-list {
    > li {
      margin: 24px 16px;

      &:first-child {
        margin-top: 10px;
      }
    }
  }

  .beian {
    margin: 20px auto;
    text-align: center;
    font-size: 12px;
    color: $color-text-3;
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
  }
}
</style>

<template>
  <div id="homepage">
    <div class="container">
      <FlowLoader
        ref="loader"
        func="getFlowRecommendedIndex"
        type="seenIds"
        :query="{
          $axios: $axios,
          changing: 'slug'
        }"
        :callback="handlePatch"
      >
        <ul slot-scope="{ flow }" class="pin-list">
          <PinArticle v-for="pin in flow" :key="pin.slug" :item="pin" />
        </ul>
        <template slot="nothing">
          <img src="~assets/img/error/no-content.png" />
          <p>这里什么都没有</p>
        </template>
        <template slot="error">
          <img src="~assets/img/error/no-network.png" />
          <p>遇到错误了，点击重试</p>
        </template>
      </FlowLoader>
    </div>
    <p class="beian">
      <a href="http://www.beian.miit.gov.cn/" target="_blank">互联网 ICP 备案：沪 ICP 备 17050785 号 - 1</a>
    </p>
  </div>
</template>

<script>
import PinArticle from '~/components/flow/PinArticle'

export default {
  name: 'Homepage',
  layout: 'web',
  components: {
    PinArticle
  },
  async asyncData({ store, app }) {
    await store.dispatch('flow/initData', {
      func: 'getFlowRecommendedIndex',
      type: 'seenIds',
      query: {
        $axios: app.$axios,
        changing: 'slug'
      }
    })
  },
  methods: {
    handlePatch({ data }) {
      this.$axios
        .$get('v1/pin/batch_patch', {
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
