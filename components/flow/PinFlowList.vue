<style lang="scss">
.pin-flow-list {
  .sortable {
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    @include h5() {
      padding: 5px 10px;
    }

    li {
      position: relative;
      height: 30px;
      line-height: 30px;
      display: inline-block;
      padding: 0 14px;
      cursor: pointer;
      @include h5() {
        padding: 0 10px;
      }

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
      @include pc() {
        background-color: #fff;
        padding: 15px 20px 20px;
        border-radius: 5px;
        margin-bottom: 20px;

        &:first-child {
          border-radius: 0 0 5px 5px;
          border-top: 1px solid $color-gray-4;
        }
      }

      @include h5() {
        margin: 24px 16px;

        &:first-child {
          margin-top: 5px;
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
  <div class="pin-flow-list">
    <ul class="sortable">
      <li v-for="item in sortOpts" :key="item.value" :class="{ 'is-active': item.value === sort }" @click="changeSort(item.value)" v-text="item.label" />
      <ElSelect v-if="sort === 'hottest'" v-model="time" size="mini" @change="changeTime">
        <ElOption v-for="item in timeOpts" :key="item.value" :label="item.label" :value="item.value" />
      </ElSelect>
    </ul>
    <FlowLoader ref="loader" func="getTagFlows" :type="sort === 'newest' ? 'lastId' : 'seenIds'" :query="query" :callback="patchPin">
      <ul slot-scope="{ flow }" class="flows">
        <PinArticle v-for="item in flow" :key="item.slug" :show-zone="showArea" :item="item" />
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
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'
import SkeletonArticle from '~/components/skeleton/SkeletonArticle'
import PinArticle from '~/components/flow/PinArticle'

export default {
  name: 'PinFlowList',
  components: {
    ElSelect: Select,
    ElOption: Option,
    PinArticle,
    SkeletonArticle
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    showArea: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      time: '3-day',
      sort: 'active'
    }
  },
  computed: {
    sortOpts() {
      return [
        {
          label: '热门',
          value: 'active'
        },
        {
          label: '最新',
          value: 'newest'
        },
        {
          label: '热榜',
          value: 'hottest'
        }
      ]
    },
    timeOpts() {
      return [
        {
          label: '3天内',
          value: '3-day'
        },
        {
          label: '7天内',
          value: '7-day'
        },
        {
          label: '30天内',
          value: '30-day'
        },
        {
          label: '全部',
          value: 'all'
        }
      ]
    },
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        sort: this.sort,
        time: this.time,
        take: 10,
        changing: 'slug'
      }
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
    changeTime() {
      this.$nextTick(() => {
        this.$refs.loader.refresh()
      })
    },
    patchPin({ data }) {
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
