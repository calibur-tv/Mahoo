<style lang="scss">
.pin-grid-list {
  height: 336px;
  overflow: hidden;

  %layout {
    float: left;
    margin: 0 20px 20px 0;

    &:nth-child(4n) {
      margin-right: 0;
    }

    @media (min-width: 1200px) {
      &:nth-child(5n) {
        margin-right: 0;
      }

      &:nth-child(4n) {
        margin-right: 20px;
      }
    }
  }

  .pin-poster {
    @extend %layout;
  }

  .flow-loader-state {
    &-nothing,
    &-error {
      img {
        height: 175px;
        margin-top: 50px;
        margin-bottom: 10px;
      }

      p {
        font-size: 12px;
        color: $color-text-3;
      }
    }

    &-load {
      display: none;
    }

    &-loading {
      font-size: 12px;
      color: $color-text-3;
      line-height: 300px;
    }
  }
}
</style>

<template>
  <FlowLoader
    ref="loader"
    func="getTagFlows"
    :type="sort === 'newest' ? 'lastId' : 'seenIds'"
    :auto="0"
    :query="{
      $axios: $axios,
      slug: slug,
      take: 10,
      changing: 'slug',
      time: '3-day',
      sort: sort
    }"
    :callback="handlePatch"
    class="pin-grid-list"
  >
    <ul slot-scope="{ flow }">
      <PinPoster v-for="item in flow" :key="item.slug" :item="item" />
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
</template>

<script>
import PinPoster from '~/components/flow/PinPoster'

export default {
  name: 'PinGridList',
  components: {
    PinPoster
  },
  props: {
    sort: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  methods: {
    initData() {
      this.$refs.loader && this.$refs.loader.initData()
    },
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
