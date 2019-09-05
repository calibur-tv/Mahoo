<style lang="scss">
.comment-main {
  .comment-header {
    margin-bottom: 24px;

    .total {
      font-size: 18px;
      line-height: 24px;
      color: #222;
      margin-bottom: 20px;
      font-weight: normal;
    }

    .sort-jump {
      border-bottom: 1px solid #e5e9ef;
      margin-bottom: 24px;

      .sortable {
        display: inline-block;

        li {
          position: relative;
          display: inline-block;
          color: #222;

          @include pc() {
            margin: 0 16px;
            height: 37px;
            line-height: 37px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
          }

          @include h5() {
            margin: 0 10px;
            font-size: 13px;
            line-height: 30px;
            height: 30px;
          }

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

      .el-pagination {
        float: right;
        padding: 0;
        margin-top: 8px;
      }
    }
  }

  .comment-footer {
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

  .flow-loader-state {
    &-nothing {
      p {
        font-size: 12px;
        margin-top: 10px;
        color: $color-text-3;
      }
    }
  }
}
</style>

<template>
  <div class="comment-main">
    <FlowLoader ref="loader" func="getPinComments" type="jump" :query="query" :callback="handlePatch">
      <header slot="header" slot-scope="{ source }" class="comment-header">
        <h2 class="total">{{ source.total }}&nbsp;评论</h2>
        <div class="sort-jump">
          <ul class="sortable">
            <li v-for="(item, index) in sorts" :key="index" :class="{ 'is-selected': item.value === sort }" @click="changeCommentSort(item.value)" v-text="item.label" />
          </ul>
          <ElPagination
            layout="prev, pager, next"
            :total="source.total"
            :page-size="10"
            :small="true"
            :hide-on-single-page="true"
            :current-page="currentPage"
            prev-text="上一页"
            next-text="下一页"
            class="only-pc"
            @current-change="handleJump"
          />
        </div>
        <CreateCommentForm :pin-slug="slug" @submit="createTop" />
      </header>
      <ul slot-scope="{ flow }">
        <CommentItem v-for="item in flow" :key="item.id" :item="item" @create="createInner" @delete="handleDelete" @agree="handleAgree" />
      </ul>
      <template slot="nothing">
        <img src="~assets/img/error/no-comment.png" />
        <p>还没有评论，快来抢沙发吧！</p>
      </template>
      <footer v-if="source.total >= 10" slot="footer" slot-scope="{ source }" class="comment-footer">
        <ElPagination
          layout="prev, pager, next, jumper"
          :total="source.total"
          :page-size="10"
          :background="true"
          :hide-on-single-page="true"
          :current-page="currentPage"
          prev-text="上一页"
          next-text="下一页"
          @current-change="handleJump"
        />
        <CreateCommentForm class="only-pc" :pin-slug="slug" @submit="createBottom" />
      </footer>
    </FlowLoader>
  </div>
</template>

<script>
import { Pagination } from 'element-ui'
import CreateCommentForm from '~/components/form/CreateCommentForm'
import CommentItem from '~/components/comment/CommentItem'

export default {
  name: 'CommentMain',
  components: {
    CreateCommentForm,
    CommentItem,
    ElPagination: Pagination
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sort: 'time_asc',
      currentPage: 1
    }
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        sort: this.sort,
        count: 10,
        mode: 'jump'
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
    handleAgree({ id, result, count }) {
      this.$refs.loader.update({
        id,
        value: result,
        key: 'up_vote_status'
      })
      this.$refs.loader.update({
        id,
        value: count,
        key: 'like_count'
      })
    },
    changeCommentSort(sort) {
      this.sort = sort
      this.currentPage = 1
      this.$nextTick(() => {
        this.$refs.loader.refresh()
      })
    },
    handleDelete(id) {
      this.$refs.loader.delete(id)
    },
    handleJump(page) {
      this.$refs.loader.jump(page)
      this.currentPage = page
    },
    handlePatch({ data }) {
      const { result } = data
      if (!result.length) {
        return
      }
      this.$axios
        .$get('v1/comment/patch', {
          params: {
            comment_ids: result.map(_ => _.id).join(',')
          }
        })
        .then(data => {
          this.$refs.loader.patch(data)
        })
        .catch(() => {})
    }
  }
}
</script>
