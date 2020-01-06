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
    border-radius: 4px;

    @include h5() {
      margin: -30px -10px 0;
      width: auto;
      min-width: 100%;
    }

    &.full-size {
      padding-top: $page-header-hgt;
      padding-bottom: 33.3%;
      margin-top: -30px;
      border-radius: 0;
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

        > div {
          margin-right: 20px;
        }
      }
    }
  }

  .footer {
    padding-top: 30px;

    .sss-panel {
      font-size: 14px;
      border-bottom: 1px solid #e5e9ef;
      padding-bottom: 12px;

      @include pc() {
        margin-top: 30px;
        margin-bottom: 60px;
      }

      @include h5() {
        margin-bottom: 30px;
      }

      .btn {
        max-width: 20%;
        display: inline-block;
        vertical-align: middle;
        padding-right: 30px;

        @include h5() {
          .up-vote-btn,
          .pin-reward-btn,
          .pin-mark-btn,
          .sss-btn {
            i {
              display: block;
            }
          }
        }
      }

      .pin-tool-dropdown {
        float: right;
        padding-right: 15px;
        padding-left: 15px;
      }
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
      <template v-if="!published_at">
        <ElAlert title="该文章还处于草稿阶段" type="warning" show-icon />
        <br />
      </template>
      <ContentAuthor :user="author">
        <div slot="intro" class="metas">
          <div>
            <i class="iconfont ic-time only-pc" />
            <ElTooltip effect="dark" placement="bottom" :content="'发表于：' + $utils.timeAgo(published_at)" :disabled="!published_at || published_at === last_edit_at">
              <time v-text="$utils.timeAgo(last_edit_at)" />
            </ElTooltip>
          </div>
          <div class="only-pc">
            <i class="iconfont ic-browse" />
            <span v-text="visit_count" />
          </div>
        </div>
        <div slot="tail" class="only-pc">
          <template v-if="isMine">
            <NLink :to="$alias.create(slug)">
              <ElButton round plain type="info">
                编辑
              </ElButton>
            </NLink>
          </template>
          <template v-else>
            <UserFollowBtn :slug="author.slug" />
          </template>
        </div>
      </ContentAuthor>
      <JsonContent :slug="slug" :content="content" :reward="reward_status" :vote="vote_hash" />
      <div class="footer">
        <div class="sss-panel">
          <PinVoteBtn v-model="like_count" class="btn" :pin-slug="slug" :user-slug="author.slug" />
          <PinRewardBtn v-model="reward_count" class="btn" :pin-slug="slug" :user-slug="author.slug" />
          <PinMarkBtn v-model="mark_count" class="btn" :pin-slug="slug" :user-slug="author.slug" />
          <PinShareBtn class="btn" />
          <ToolDropdown class="btn" :slug="slug" :is-mine="isMine" :topic="(topic && topic.slug) || ''" :area="(area && area.slug) || ''" />
        </div>
      </div>
      <CommentMain :slug="slug" />
      <div v-if="notebook" class="notebook only-pc">
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
import { Tooltip, Alert } from 'element-ui'
import JsonContent from '~/components/editor/JsonContent'
import ContentAuthor from '~/components/user/ContentAuthor'
import CommentMain from '~/components/comment/CommentMain'
import PinVoteBtn from '~/components/button/PinVoteBtn'
import PinRewardBtn from '~/components/button/PinRewardBtn'
import PinMarkBtn from '~/components/button/PinMarkBtn'
import PinShareBtn from '~/components/button/PinShareBtn'
import UserFollowBtn from '~/components/button/UserFollowBtn'
import ToolDropdown from '~/components/pin/ToolDropdown'

export default {
  name: 'PinShow',
  layout: 'web',
  components: {
    JsonContent,
    ContentAuthor,
    CommentMain,
    ElAlert: Alert,
    ElTooltip: Tooltip,
    PinVoteBtn,
    PinRewardBtn,
    PinMarkBtn,
    PinShareBtn,
    UserFollowBtn,
    ToolDropdown
  },
  asyncData({ app, error, params, query }) {
    return app.$axios
      .$get('v1/pin/show', {
        params: Object.assign({}, params, query)
      })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  data() {
    return {
      slug: '',
      intro: '',
      title: null,
      author: null,
      content: [],
      area: null,
      topic: null,
      notebook: null,
      visit_type: 0,
      trial_type: 0,
      comment_type: 0,
      last_top_at: 0,
      recommended_at: 0,
      published_at: '',
      created_at: '',
      last_edit_at: '',
      deleted_at: null,
      deleting: false,
      reward_status: false,
      like_count: 0,
      visit_count: 0,
      mark_count: 0,
      comment_count: 0,
      reward_count: 0,
      vote_hash: []
    }
  },
  computed: {
    share() {
      return {
        title: this.title,
        intro: this.intro,
        content: this.content
      }
    },
    isMine() {
      return this.$store.getters.isMine(this.author.slug)
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    }
  },
  beforeMount() {
    this.patchPin()
    this.patchUser()
  },
  methods: {
    patchPin() {
      this.$axios
        .$get('v1/pin/patch', {
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
          this.vote_hash = data.vote_hash
        })
        .catch(() => {})
    },
    patchUser() {
      this.$axios
        .$get('v1/user/patch', {
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
  },
  head() {
    const { title, intro } = this
    const meta = [{ hid: 'description', name: 'description', content: intro }]
    if (title.banner) {
      meta.push({
        hid: 'share-image',
        name: 'share-image',
        content: title.banner.url
      })
    }
    return {
      title: title.text,
      meta
    }
  }
}
</script>
