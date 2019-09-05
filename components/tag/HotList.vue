<style lang="scss">
.tag-hot-list {
  @include h5() {
    height: 85px;
    overflow: hidden;
    background-color: $color-gray-bg;
  }

  .title {
    margin: 0 5px 10px 10px;

    i {
      font-weight: bold;
    }
  }

  .child-node {
    @include h5() {
      white-space: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      height: 110%;
      padding-bottom: 10%;
      box-sizing: content-box;
    }

    li {
      border-radius: 5px;

      @include pc() {
        cursor: pointer;
        padding: 10px;

        &:hover {
          background-color: #f6f6f6;
        }
      }

      @include h5() {
        margin: 10px;
        display: inline-block;
        white-space: nowrap;
        width: 50px;

        &:not(:first-child) {
          margin-left: 0;
        }
      }
    }

    img {
      border-radius: 5px;

      @include pc() {
        margin-right: 8px;
        width: 32px !important;
        height: 32px !important;
        float: left;
      }
    }

    span {
      @include pc() {
        font-size: 14px;
        line-height: 32px;
        display: block;
      }

      @include h5() {
        display: block;
        font-size: 12px;
        text-align: center;
        margin-top: 2px;
      }
    }

    a {
      display: block;
    }
  }

  .roll-list {
    position: relative;

    &-btn {
      position: absolute;
      right: 5px;
      top: -31px;

      @include h5() {
        display: none;
      }
    }
  }
}
</style>

<template>
  <div class="tag-hot-list">
    <h3 class="title only-pc">
      <span v-text="title" />
      <CreateTagBtn v-if="isAdmin" :parent="slug" @create="handleCreate">
        <i class="el-icon-plus fade-link" />
      </CreateTagBtn>
    </h3>
    <RollList v-if="allChildren.length" :list="allChildren" :fetch="getData" :count="10">
      <i slot="icon" class="el-icon-refresh" />
      <template slot="text">
        &nbsp;换一换
      </template>
      <ul slot-scope="{ list }" class="child-node">
        <li v-for="item in list" :key="item.slug" class="node clearfix">
          <NLink :to="`/tag/${item.slug}`">
            <img :src="$resize(item.avatar, { width: 50 })" width="50" height="50" :alt="item.name" />
            <span class="oneline" v-html="item.name" />
          </NLink>
        </li>
      </ul>
    </RollList>
  </div>
</template>

<script>
import CreateTagBtn from '~/components/button/CreateTagBtn'
import RollList from 'vue-roll-list'
import { tagChildren } from '~/api/tagApi'

export default {
  name: 'TagHotList',
  components: {
    RollList,
    CreateTagBtn
  },
  props: {
    slug: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: '热门分区'
    },
    children: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      allChildren: this.children.result,
      page: 1
    }
  },
  computed: {
    isAdmin() {
      return this.$store.getters.isAdmin
    }
  },
  methods: {
    handleCreate(data) {
      this.allChildren.unshift(data)
      this.$toast.success('创建成功')
    },
    getData() {
      return tagChildren(this, {
        page: this.page,
        slug: this.slug
      })
        .then(data => {
          this.allChildren = this.allChildren.concat(data.result)
          this.page++
        })
        .catch(() => {})
    }
  }
}
</script>
