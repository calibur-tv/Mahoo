<style lang="scss">
#search {
  @include pc() {
    margin-top: 30px;
  }

  .search-panel {
    position: relative;
    max-width: 100%;
    width: 650px;
    height: 45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @include pc() {
      margin: 20px auto 30px;
    }

    @include h5() {
      width: auto;
      margin: 10px;
      background-color: #fff;
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      border-radius: 8px;
      overflow: hidden;
      font-size: 12px;
    }

    .before {
      float: left;
      margin-right: 20px;

      img {
        width: 85px;
        height: auto;
      }

      span {
        color: $color-main;
        font-size: 14px;
        font-weight: bold;
      }
    }

    .v-search {
      height: 45px;
      overflow: hidden;
      flex-grow: 1;

      .search-input-wrap {
        height: 100%;

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
  }

  .flow-list {
    @include h5() {
      padding: 0 10px;
    }

    @include pc() {
      border-top: 1px solid #ccd0d7;
      padding-top: 20px;
    }

    > li {
      margin-bottom: 10px;

      @include pc() {
        padding-bottom: 20px;
      }

      @include h5() {
        padding-bottom: 13px;
      }

      &:not(:last-child) {
        border-bottom: 1px solid $color-gray-3;
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

  .el-pagination {
    margin: 20px 0;
    padding: 0;

    .btn-prev,
    .btn-next {
      padding: 0 10px;
    }

    &__jump {
      float: right;
    }
  }
}
</style>

<template>
  <div id="search">
    <ElRow class="container">
      <div class="search-panel">
        <div class="before only-pc">
          <img src="https://file.calibur.tv/logo.png" alt="logo" />
          <span>搜索</span>
        </div>
        <div class="v-search">
          <VSearch v-model="words" :type="selectedType">
            <template slot="submit-btn">
              <i class="iconfont ic-search" />
              <span class="only-pc">搜索</span>
            </template>
          </VSearch>
        </div>
      </div>
    </ElRow>
    <ElRow>
      <ElCol class="only-pc" :span="6">
        <br />
      </ElCol>
      <ElCol :span="12" :xs="24">
        <FlowLoader ref="loader" func="getMixinSearch" type="page" :query="query">
          <ul slot-scope="{ flow }" class="flow-list">
            <component :is="`${item.type}-item`" v-for="item in flow" :key="item.data.slug" :item="item.data" />
          </ul>
          <template slot="nothing">
            <img src="~assets/img/error/no-content.png" />
            <p>这里什么都没有</p>
          </template>
          <template slot="error">
            <img src="~assets/img/error/no-network.png" />
            <p>遇到错误了，点击重试</p>
          </template>
          <footer slot="footer" slot-scope="{ source }">
            <ElPagination
              layout="prev, pager, next, jumper"
              :total="source.total"
              :page-size="10"
              :background="true"
              :current-page="source.page"
              :hide-on-single-page="true"
              prev-text="上一页"
              next-text="下一页"
              @current-change="handleJump"
            />
          </footer>
        </FlowLoader>
      </ElCol>
      <ElCol class="only-pc" :span="6">
        <br />
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import VSearch from '~/components/search/Input'
import PinItem from '~/components/flow/PinArticle'
import TagItem from '~/components/flow/TagSearchItem'
import UserItem from '~/components/flow/UserSearchItem'
import { Pagination } from 'element-ui'

export default {
  name: 'Search',
  layout: 'web',
  components: {
    ElPagination: Pagination,
    VSearch,
    PinItem,
    TagItem,
    UserItem
  },
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
  watch: {
    $route() {
      this.$refs.loader && this.$refs.loader.initData()
    }
  },
  methods: {
    handleJump(page) {
      this.$refs.loader.jump(page)
    }
  }
}
</script>
