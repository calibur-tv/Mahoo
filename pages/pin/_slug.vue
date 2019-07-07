<style lang="scss">
#pin-show {
  position: relative;
  margin-top: 30px;

  .banner {
    width: 100%;
    height: 0;
    padding-top: 56%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &.full-size {
      padding-top: $page-header-hgt;
      padding-bottom: 33.3%;
      margin-top: -30px;
    }
  }

  .content {
    max-width: 680px;
    margin: 0 auto 50px auto;
    padding: 0 10px;

    .title {
      color: $color-text-1;
      font-weight: 600;
      font-synthesis: style;
      font-size: 24px;
      line-height: 1.22;
      margin: 24px 0;
      @extend %breakWord;
    }

    .content-author {
      margin-bottom: 10px;

      .metas {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: -3px;

        >div {
          margin-right: 20px;
        }
      }
    }
  }

  .footer {
    padding-top: 30px;

    .social-panel {
      font-size: 14px;
      color: #505050;
      border-bottom: 1px solid #e5e9ef;
      padding-bottom: 12px;
      margin-top: 30px;
      margin-bottom: 60px;
    }
  }

  .notebook {
    margin-top: 24px;

    p {
      font-weight: 600;
      font-synthesis: style;
      line-height: 1.375;
      font-size: 16px;
      color: #1a1a1a;
      border-bottom: 1px solid #ebebeb;
      padding-bottom: 12px;
      margin-bottom: 24px;
    }

    a {
      display: inline-block;
      height: 34px;
      background-color: #f7f7f7;
      border: 1px solid #dcdcdc;
      font-size: 0;
      border-radius: 4px;
      margin: 0 18px 18px 0;
      vertical-align: middle;
    }

    .img {
      display: inline-block;
    }

    .name {
      font-size: 14px;
      margin: 0 10px;
    }
  }
}
</style>

<template>
  <div id="pin-show">
    <div
      v-if="title && title.banner && title.banner.width >= 2000"
      :style="{
        backgroundImage: `url(${$resize(title.banner.url, { width: 2000 })})`
      }"
      class="banner full-size"
    />
    <div class="content">
      <template v-if="title">
        <div
          v-if="title.banner && title.banner.width < 2000"
          :style="{
            backgroundImage: `url(${$resize(title.banner.url, { width: 660 })})`
          }"
          class="banner"
        />
        <h1 class="title" v-text="title.text" />
      </template>
      <ContentAuthor :user="author">
        <div slot="intro" class="metas">
          <div v-if="area">
            <i class="iconfont ic-coordinates" />
            <NLink target="_blank" :to="$alias.tag(area.slug)" v-text="area.name" />
          </div>
          <div>
            <i class="iconfont ic-time" />
            <ElTooltip
              effect="dark"
              placement="bottom"
              :content="'发表于：' + $utils.timeAgo(created_at)"
              :disabled="created_at === last_edit_at"
            >
              <time v-text="$utils.timeAgo(last_edit_at)" />
            </ElTooltip>
          </div>
          <div>
            <i class="iconfont ic-browse" />
            <span v-text="visit_count" />
          </div>
        </div>
        <template v-slot:mine>
          <ElButton round plain type="danger" @click="deletePin">
            删除
          </ElButton>
          &nbsp;
          <NLink :to="$alias.create(slug)">
            <ElButton round plain type="info">
              编辑
            </ElButton>
          </NLink>
        </template>
      </ContentAuthor>
      <JsonContent :content="content" />
      <div class="footer">
        <div class="social-panel">
          <PinVoteBtn v-model="like_count" :pin-slug="slug" :user-slug="author.slug" />
        </div>
      </div>
      <CommentMain :slug="slug" />
      <div v-if="notebook" class="notebook">
        <p>文章被以下专栏收录</p>
        <NLink target="_blank" :to="$alias.tag(notebook.slug)">
          <VImg :src="notebook.avatar" width="32" height="32" />
          <span class="name" v-text="notebook.name" />
        </NLink>
      </div>
    </div>
  </div>
</template>

<script>
import { tooltip } from 'element-ui'
import JsonContent from '~/components/editor/JsonContent'
import ContentAuthor from '~/components/user/ContentAuthor'
import CommentMain from '~/components/comment/CommentMain'
import PinVoteBtn from '~/components/button/PinVoteBtn'

export default {
  name: 'PinShow',
  layout: 'web',
  components: {
    JsonContent,
    ContentAuthor,
    CommentMain,
    ElTooltip: tooltip,
    PinVoteBtn
  },
  head() {
    return {
      title: this.title.text,
      meta: [
        { hid: 'description', name: 'description', content: this.intro }
      ]
    }
  },
  data() {
    return {
      slug: '',
      intro: '',
      title: null,
      author: null,
      content: [],
      area: null,
      notebook: null,
      visit_type: 0,
      trial_type: 0,
      content_type: 0,
      comment_type: 0,
      last_top_at: 0,
      recommended_at: 0,
      created_at: '',
      updated_at: '',
      last_edit_at: '',
      deleted_at: null,
      deleting: false,
      like_count: 0,
      visit_count: 0,
      mark_count: 0,
      comment_count: 0,
      reward_count: 0
    }
  },
  asyncData({ app, error, params, query }) {
    return app.$axios.$get('v1/pin/show', {
      params: Object.assign({}, params, query)
    })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  beforeMount() {
    this.patchPin()
    this.patchUser()
  },
  methods: {
    deletePin() {
      this.$confirm('删除后不可恢复，确认要删除吗？', '提示')
        .then(() => {
          if (this.deleting) {
            return
          }
          this.deleting = true
          this.$axios.$post('v1/pin/delete', {
            slug: this.slug
          })
            .then(() => {
              this.$toast.success('删除成功').then(() => {
                window.location = '/'
              })
            })
            .catch(err => {
              this.$toast.error(err.message)
              this.deleting = false
            })
        })
        .catch(() => {})
    },
    patchPin() {
      this.$axios.$get('v1/pin/patch', {
        params: {
          slug: this.slug
        }
      })
        .then(data => {
          Object.keys(data).forEach(key => {
            this[key] = data[key]
          })
          this.$store.commit('social/set', {
            type: 'pin',
            slug: this.slug,
            data: {
              down_vote_status: data.down_vote_status,
              up_vote_status: data.up_vote_status,
              mark_status: data.mark_status,
              reward_status: data.reward_status
            }
          })
        })
        .catch(() => {})
    },
    patchUser() {
      this.$axios.$get('v1/user/patch', {
        params: {
          slug: this.author.slug
        }
      })
        .then(data => {
          this.$set(this, 'author', Object.assign(this.author, data))
          this.$store.commit('social/set', {
            type: 'user-follow',
            slug: this.author.slug,
            data: {
              is_following: data.is_following,
              is_followed_by: data.is_followed_by
            }
          })
        })
        .catch(() => {})
    }
  }
}
</script>
