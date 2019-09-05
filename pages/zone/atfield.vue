<style lang="scss">
#atfield {
  .main-wrap {
    background-color: $color-gray-bg;
    min-height: 100vh;

    @include pc() {
      padding: 20px;
      box-shadow: 0 3px 3px rgba(26, 26, 26, 0.1) inset;
      margin-top: -$page-header-hgt;
      padding-top: $page-header-hgt + 20;
    }

    @include h5() {
      padding: 10px;
    }
  }

  .sortable {
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;

    @include h5() {
      padding: 10px;
    }

    li {
      position: relative;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      padding: 0 14px;
      cursor: pointer;

      &:before {
        content: '';
        position: absolute;
        top: 7px;
        height: 16px;
        width: 1px;
        left: 0;
        background-color: hsla(0, 0%, 59.2%, 0.2);
      }

      &:first-child {
        padding-left: 0;

        &:before {
          content: none;
        }
      }

      &.is-active {
        color: $color-main;
      }
    }

    .el-select {
      width: 100px !important;
      display: inline-block;
    }
  }

  .flows {
    li {
      background-color: #fff;
      padding: 20px;
      border-radius: 5px;
      margin-top: 20px;

      @include h5() {
        padding: 15px 10px 10px;
        margin-top: 10px;
      }

      &:first-child {
        border-radius: 0 0 5px 5px;
        border-top: 1px solid $color-gray-3;
        margin-top: 0;
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
  <div id="atfield">
    <ElRow class="container">
      <ElCol class="only-pc" :span="5">
        <br />
      </ElCol>
      <ElCol :xs="24" :span="14" class="main-wrap">
        <ul class="sortable">
          <li v-for="item in sortOpts" :key="item.value" :class="{ 'is-active': item.value === sort }" @click="changeSort(item.value)" v-text="item.label" />
        </ul>
        <FlowLoader ref="loader" func="getATField" type="page" :query="query">
          <ul slot-scope="{ flow }" class="flows">
            <TagQuestion v-for="item in flow" :key="item.slug" :show-zone="!slug" :show-control="true" :item="item" @remove="handleRemove(item.slug)" />
          </ul>
          <SkeletonArticle slot="loading" />
          <template slot="nothing">
            <img src="~assets/img/error/no-content.png" />
            <p>这里什么都没有</p>
          </template>
          <template slot="error">
            <img src="~assets/img/error/no-network.png" />
            <p>遇到错误了，点击重试</p>
          </template>
        </FlowLoader>
      </ElCol>
      <ElCol class="only-pc" :span="5">
        <br />
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import SkeletonArticle from '~/components/skeleton/SkeletonArticle'
import TagQuestion from '~/components/flow/TagQuestion'

export default {
  name: 'ATField',
  layout: 'web',
  components: {
    TagQuestion,
    SkeletonArticle
  },
  data() {
    return {
      sort: 'newest'
    }
  },
  computed: {
    sortOpts() {
      return [
        {
          label: '待入库',
          value: 'newest'
        },
        {
          label: '最多赞',
          value: 'like_desc'
        },
        {
          label: '最多踩',
          value: 'like_asc'
        }
      ]
    },
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        sort: this.sort,
        count: 10,
        changing: 'slug'
      }
    },
    slug() {
      return this.$route.query.slug
    }
  },
  methods: {
    changeSort(sort) {
      if (sort === this.sort) {
        return
      }
      this.sort = sort
      this.$nextTick(() => {
        this.$refs.loader.refresh()
      })
    },
    handleRemove(slug) {
      this.$refs.loader.delete(slug)
    }
  }
}
</script>
