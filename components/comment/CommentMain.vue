<style lang="scss">
.comment-main {
  .comment-header {
    margin-bottom: 24px;

    .total {
      font-size: 18px;
      line-height: 24px;
      color: #222;
      margin-bottom: 20px;
    }

    .sort-jump {
      border-bottom: 1px solid #e5e9ef;
      margin-bottom: 24px;

      .sortable {
        li {
          position: relative;
          display: inline-block;
          margin: 0 16px;
          height: 37px;
          line-height: 37px;
          font-size: 14px;
          font-weight: 700;
          color: #222;
          cursor: pointer;

          &:first-child {
            margin-left: 0;
          }

          &:hover {
            color: $color-main;
          }

          &.is-selected {
            color: $color-main;

            &:before {
              content: '';
              position: absolute;
              left: 0;
              bottom: -1px;
              width: 100%;
              height: 1px;
              background-color: $color-main;
            }

            &:after {
              content: '';
              position: absolute;
              left: 50%;
              margin-left: -3px;
              bottom: 0;
              width: 0;
              height: 0;
              border-bottom: 3px solid $color-main;
              border-top: 0;
              border-left: 3px dashed transparent;
              border-right: 3px dashed transparent;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="comment-main">
    <FlowLoader
      ref="loader"
      func="getPinComments"
      :type="sort === 'hottest' ? 'seenIds' : 'lastId'"
      :query="query"
    >
      <header slot="header" slot-scope="{ source }" class="comment-header">
        <h2 class="total">
          {{ source.total }}&nbsp;评论
        </h2>
        <div class="sort-jump">
          <ul class="sortable">
            <li v-for="(item, index) in sorts" :key="index" :class="{ 'is-selected': item.value === sort }" @click="changeCommentSort(item.value)" v-text="item.label" />
          </ul>
        </div>
        <CreateCommentForm :pin-slug="slug" @submit="createTop" />
      </header>
      <ul slot-scope="{ flow }">
        <CommentItem
          v-for="item in flow"
          :key="item.id"
          :item="item"
          @create="createInner"
          @delete="handleDelete"
        />
      </ul>
      <footer slot="footer" slot-scope="{ source }" class="footer-create-comment">
        <CreateCommentForm v-if="source.total" :pin-slug="slug" @submit="createBottom" />
      </footer>
    </FlowLoader>
  </div>
</template>

<script>
import CreateCommentForm from '~/components/form/CreateCommentForm'
import CommentItem from '~/components/comment/CommentItem'

export default {
  name: 'CommentMain',
  components: {
    CreateCommentForm,
    CommentItem
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sort: 'time_asc'
    }
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        sort: this.sort,
        count: 10
      }
    },
    sorts() {
      return [
        {
          label: '按热度排序',
          value: 'hottest'
        },
        {
          label: '按时间升序',
          value: 'time_asc'
        },
        {
          label: '按时间降序',
          value: 'time_desc'
        }
      ]
    }
  },
  methods: {
    createTop(data) {
      this.$refs.loader.prepend(data)
    },
    createBottom(data) {
      this.$refs.loader.append(data)
    },
    createInner(data) {
      this.$refs.loader.insertAfter(data)
    },
    changeCommentSort(sort) {
      this.sort = sort
    },
    handleDelete(id) {
      this.$refs.loader.delete(id)
    }
  }
}
</script>
