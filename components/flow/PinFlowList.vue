<style lang="scss">
.pin-flow-list {
  .sortable {
    background-color: #fff;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;

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
        background-color: hsla(0,0%,59.2%,.2);
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
      padding: 15px 20px 20px;
      border-radius: 5px;
      margin-top: 20px;

      &:first-child {
        border-radius: 0 0 5px 5px;
        border-top: 1px solid $color-gray-3;
        margin-top: 0;
      }
    }
  }
}
</style>

<template>
  <div class="pin-flow-list">
    <ul class="sortable">
      <li
        v-for="item in sortOpts"
        :key="item.value"
        :class="{ 'is-active': item.value === sort }"
        @click="changeSort(item.value)"
        v-text="item.label"
      />
      <ElSelect v-if="sort === 'hottest'" v-model="time" size="mini" @change="changeTime">
        <ElOption
          v-for="item in timeOpts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </ElSelect>
    </ul>
    <FlowLoader
      ref="loader"
      func="getTagFlows"
      :type="sort === 'newest' ? 'lastId' : 'seenIds'"
      :query="query"
      :callback="patchPin"
    >
      <ul slot-scope="{ flow }" class="flows">
        <PinFlowItem
          v-for="item in flow"
          :key="item.slug"
          :show-area="showArea"
          :item="item"
        />
      </ul>
      <SkeletonArticle slot="loading" />
    </FlowLoader>
  </div>
</template>

<script>
import { Select, Option } from 'element-ui'
import PinFlowItem from '~/components/flow/PinFlowItem'
import SkeletonArticle from '~/components/skeleton/SkeletonArticle'

export default {
  name: 'PinFlowList',
  components: {
    ElSelect: Select,
    ElOption: Option,
    PinFlowItem,
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
