<style lang="scss">
#user-emotion {
  .block {
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
      margin-bottom: 17px;
    }

    &-title {
      padding-bottom: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .text {
        span {
          color: #000;
          font-size: 20px;
          font-weight: 400;
          line-height: 33px;
        }

        i {
          position: relative;
          font-style: normal;
          display: inline-block;
          background-color: #f7f7f7;
          border: 1px solid #ddd;
          border-radius: 3px;
          color: #777;
          font-size: 12px;
          line-height: 18px;
          height: 20px;
          margin-left: 10px;
          padding: 0 5px;

          &:before,
          &:after {
            content: '';
            position: absolute;
            display: block;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
          }

          &:before {
            border-width: 5px;
            top: 3px;
            left: -5px;
            border-right-color: #ddd;
            border-left-width: 0;
          }

          &:after {
            border-width: 4px;
            top: 4px;
            left: -4px;
            border-right-color: #f7f7f7;
            border-left-width: 0;
          }
        }
      }

      .empty {
        line-height: 14px;
        font-size: 12px;
        color: #6d757a;
      }

      .more,
      .create-btn {
        display: inline-block;
        font-size: 12px;
        line-height: 22px;
        border: 1px solid #b8c0cc;
        border-radius: 4px;
        padding-left: 10px;
        padding-right: 5px;
        margin-left: 5px;
      }
    }
  }

  .bangumis {
    li {
      width: 50%;
      margin-bottom: 20px;
      padding-right: 20px;
      float: left;
    }
  }

  .games {
    li {
      float: left;
      width: 20%;
      margin-bottom: 25px;
      padding-right: 20px;
    }
  }

  .topics {
    li {
      float: left;
      width: 25%;
      padding-right: 10px;
      margin-bottom: 25px;
    }
  }
}
</style>

<template>
  <div v-if="tags" id="user-emotion">
    <div class="block">
      <div class="block-title">
        <NLink class="text" to="category/bangumi" append>
          <span class="fade-link">看过的动漫</span>
          <i v-if="tags.bangumi.length" class="count" v-text="tags.bangumi.length" />
        </NLink>
        <NLink v-if="tags.bangumi.length > 4" class="more fade-link" to="category/bangumi" append>
          <span>更多</span>
          <i class="el-icon-arrow-right" />
        </NLink>
        <template v-else-if="!tags.bangumi.length">
          <p class="empty">{{ TA }}还不是一个动漫迷~</p>
          <span />
        </template>
      </div>
      <ul v-if="tags.bangumi.length" class="bangumis clearfix">
        <BangumiItem v-for="item in tags.bangumi.slice(0, 4)" ref="bangumi" :key="item.slug" :item="item" />
      </ul>
    </div>
    <div class="block">
      <div class="block-title">
        <NLink class="text" to="category/game" append>
          <span class="fade-link">玩过的游戏</span>
          <i v-if="tags.game.length" class="count" v-text="tags.game.length" />
        </NLink>
        <NLink v-if="tags.game.length > 5" class="more fade-link" to="category/game" append>
          <span>更多</span>
          <i class="el-icon-arrow-right" />
        </NLink>
        <template v-else-if="!tags.game.length">
          <p class="empty">{{ TA }}从来不玩游戏~</p>
          <span />
        </template>
      </div>
      <ul v-if="tags.game.length" class="games clearfix">
        <GameItem v-for="item in tags.game.slice(0, 5)" ref="game" :key="item.slug" :item="item" />
      </ul>
    </div>
    <div class="block">
      <div class="block-title">
        <NLink class="text" to="category/topic" append>
          <span class="fade-link">参与的话题</span>
          <i v-if="tags.topic.length" class="count" v-text="tags.topic.length" />
        </NLink>
        <NLink v-if="tags.topic.length > 12" class="more fade-link" to="category/topic" append>
          <span>更多</span>
          <i class="el-icon-arrow-right" />
        </NLink>
        <template v-else-if="!tags.topic.length">
          <p class="empty">{{ TA }}不喜欢参与任何话题~</p>
          <span />
        </template>
      </div>
      <ul v-if="tags.topic.length" class="topics clearfix">
        <TopicItem v-for="item in tags.topic.slice(0, 12)" ref="topic" :key="item.slug" :item="item" />
      </ul>
    </div>
    <div class="block">
      <div class="block-title">
        <NLink class="text" to="category/notebook" append>
          <span class="fade-link">发表的专栏</span>
          <i v-if="tags.notebook.length" class="count" v-text="tags.notebook.length" />
        </NLink>
        <div v-if="tags.notebook.length">
          <CreateTagBtn v-if="isMine" class="create-btn fade-link" title="新建专栏" parent="uh4f" @create="handleCreateNotebook" />
          <span v-else />
          <NLink v-if="tags.notebook.length > 4" class="more fade-link" to="category/notebook" append>
            <span>更多</span>
            <i class="el-icon-arrow-right" />
          </NLink>
        </div>
        <template v-else>
          <p class="empty">{{ TA }}还没写过文章~</p>
          <CreateTagBtn v-if="isMine" class="create-btn fade-link" title="新建专栏" parent="uh4f" @create="handleCreateNotebook" />
          <span v-else />
        </template>
      </div>
      <ul v-if="tags.notebook.length" class="notebooks">
        <NotebookItem v-for="item in tags.notebook.slice(0, 4)" ref="notebook" :key="item.slug" :item="item" />
      </ul>
    </div>
  </div>
</template>

<script>
import { bookmarkTags } from '~/api/tagApi'
import CreateTagBtn from '~/components/button/CreateTagBtn'
import NotebookItem from '~/components/flow/NotebookItem'
import BangumiItem from '~/components/flow/BangumiItem'
import GameItem from '~/components/flow/GameItem'
import TopicItem from '~/components/flow/TopicItem'

export default {
  name: 'UserEmotion',
  components: {
    CreateTagBtn,
    NotebookItem,
    BangumiItem,
    GameItem,
    TopicItem
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  asyncData({ app, error, params }) {
    return bookmarkTags(app, params)
      .then(tags => {
        return { tags }
      })
      .catch(error)
  },
  data() {
    return {
      tags: null
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.user.slug)
    },
    TA() {
      return this.$utils.convertTA(this.user.sex, this.isMine)
    }
  },
  beforeMount() {
    this.batchPatch()
  },
  methods: {
    handleCreateNotebook(data) {
      this.tags.notebook.unshift(data)
    },
    batchPatch() {
      let slug = []
      const lengths = [4, 5, 12, 4]
      Object.keys(this.tags).forEach((category, index) => {
        slug = slug.concat(this.tags[category].map(_ => _.slug).slice(0, lengths[index]))
      })
      this.$axios
        .$get('v1/tag/batch_patch', {
          params: {
            slug: slug.join(',')
          }
        })
        .then(data => {
          Object.keys(this.tags).forEach(category => {
            this.tags[category].forEach((tag, index) => {
              Object.keys(data).forEach(slug => {
                if (tag.slug === slug) {
                  this.$set(this.tags[category], index, Object.assign(tag, data[slug]))
                  this.$refs[category][index].$forceUpdate()
                }
              })
            })
          })
        })
        .catch(() => {})
    }
  }
}
</script>
