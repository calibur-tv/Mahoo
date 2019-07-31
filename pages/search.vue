<style lang="scss">
#search {
  @include pc() {
    margin-top: 30px;
  }

  .search-panel {
    position: relative;

    @include pc() {
      margin-top: 20px;
      margin-bottom: 30px;
    }

    @include h5() {
      margin: 10px;
      background-color: #fff;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      border-radius: 8px;
      overflow: hidden;
      font-size: 12px;
    }

    .search-input-wrap {
      width: 650px;
      height: 45px;
      margin: 0 auto;
      max-width: 100%;

      .search-input-text {
        @include pc() {
          border: 2px solid $color-gray-border;
          border-radius: 4px;
        }

        input {
          padding: 11px 15px;
        }
      }

      .search-input-btn {
        background-color: $color-main;
        color: #fff;
        line-height: 42px;
        text-align: center;
        font-size: 16px;

        @include pc() {
          margin-left: 10px;
          border-radius: 4px;
          font-weight: bold;
          letter-spacing: 2px;
          width: 90px;

          &:hover {
            background-color: $color-main-light;
          }
        }

        @include h5() {
          width: 45px;
        }
      }

      .search-suggestions {
        width: 549px;
        border: 1px solid $color-gray-border;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
        top: 110%;
        left: 0;
        max-width: 100%;

        li:hover,
        li.active {
          background-color: $color-gray-bg;
        }
      }
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
  }
}
</style>

<template>
  <div id="search">
    <ElRow class="container">
      <div class="search-panel">
        <VSearch
          v-model="words"
          :type="selectedType"
        >
          <template slot="submit-btn">
            <i class="iconfont ic-search" />
            <span class="only-pc">搜索</span>
          </template>
        </VSearch>
      </div>
    </ElRow>
    <ElRow>
      <ElCol class="only-pc" :span="6">
        <br>
      </ElCol>
      <ElCol :span="12" :xs="24">
        <FlowLoader
          func="getMixinSearch"
          type="page"
          :query="query"
        >
          <template slot="nothing">
            <img src="~assets/img/error/no-content.png">
            <p>这里什么都没有</p>
          </template>
          <template slot="error">
            <img src="~assets/img/error/no-network.png">
            <p>遇到错误了，点击重试</p>
          </template>
        </FlowLoader>
      </ElCol>
      <ElCol class="only-pc" :span="6">
        <br>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import VSearch from '~/components/search/Input'

export default {
  name: 'Search',
  layout: 'web',
  components: {
    VSearch
  },
  props: {},
  data() {
    return {
      selectedType: this.$route.query.type || 'all',
      words: this.$route.query.q
    }
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        type: this.selectedType,
        q: this.words
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
