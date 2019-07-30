<style lang="scss">
#search {
  margin-top: 30px;

  .search-panel {
    margin-top: 20px;
    margin-bottom: 30px;

    .search-input-wrap {
      width: 650px;
      height: 45px;
      margin: 0 auto;

      .search-input-text {
        border: 2px solid $color-gray-border;
        border-radius: 4px;

        input {
          padding: 11px 15px;
        }
      }

      .search-input-btn {
        background-color: $color-main;
        color: #fff;
        font-size: 16px;
        letter-spacing: 2px;
        line-height: 42px;
        text-align: center;
        width: 90px;
        border-radius: 4px;
        font-weight: bold;
        margin-left: 10px;

        &:hover {
          background-color: $color-main-light;
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

        li:hover,
        li.active {
          background-color: $color-gray-bg;
        }
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
            搜索
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
          <ul slot-scope="{ flow }">
            {{ flow }}
          </ul>
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
