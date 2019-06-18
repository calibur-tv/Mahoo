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

      .more {
        font-size: 12px;
        line-height: 22px;
        border: 1px solid #b8c0cc;
        border-radius: 4px;
        padding-left: 10px;
        padding-right: 5px;
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

    img {
      width: 110px;
      height: 144px;
      border-radius: 4px;
      box-shadow: 0 0 0 1px #e5e9ef;
    }

    .avatar {
      float: left;
      margin-right: 20px;
    }

    .content {
      overflow: hidden;

      .name {
        font-size: 18px;
      }

      .desc {
        margin-top: 10px;
        font-size: 12px;
        @include multi-line(20px ,3)
      }
    }
  }

  .games {
    li {
      float: left;
      width: 20%;
      margin-bottom: 28px;
      padding-right: 20px;
    }

    img {
      border: 1px solid #ccd0d7;
      border-radius: 4px;
      margin-bottom: 11px;
      width: 100%;
      height: auto;
    }

    p {
      font-size: 18px;
      line-height: 24px;
    }
  }

  .topics {
    li {
      float: left;
      width: 25%;
      padding-right: 10px;
      margin-bottom: 10px;
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      box-shadow: 0 0 0 1px #e5e9ef;
      margin-right: 12px;
      float: left;
    }

    div {
      overflow: hidden;
      line-height: 40px;
    }
  }
}
</style>

<template>
  <div v-if="tags" id="user-emotion">
    <div class="block">
      <div class="block-title">
        <nuxt-link class="text" to="bangumi" append>
          <span class="fade-link">看过的动漫</span>
          <i v-if="tags.bangumi.length" class="count" v-text="tags.bangumi.length" />
        </nuxt-link>
        <nuxt-link v-if="tags.bangumi.length > 4" class="more fade-link" to="bangumi" append>
          <span>更多</span>
          <i class="el-icon-arrow-right" />
        </nuxt-link>
        <template v-else-if="!tags.bangumi.length">
          <p class="empty">
            TA还不是一个动漫迷~
          </p>
          <span />
        </template>
      </div>
      <ul v-if="tags.bangumi" class="bangumis clearfix">
        <li
          v-for="item in tags.bangumi.slice(0, 4)"
          :key="item.slug"
        >
          <nuxt-link class="avatar" target="_blank" :to="$alias.tag(item.slug)">
            <img :src="$resize(item.avatar, { width: 110, height: 144 })" :alt="item.name">
          </nuxt-link>
          <div class="content">
            <div class="oneline">
              <nuxt-link class="name fade-link" target="_blank" :to="$alias.tag(item.slug)" v-text="item.name" />
            </div>
            <p class="desc" v-text="item.extra.intro" />
          </div>
        </li>
      </ul>
    </div>
    <div class="block">
      <div class="block-title">
        <nuxt-link class="text" to="game" append>
          <span class="fade-link">玩过的游戏</span>
          <i v-if="tags.game.length" class="count" v-text="tags.game.length" />
        </nuxt-link>
        <nuxt-link v-if="tags.game.length > 5" class="more fade-link" to="game" append>
          <span>更多</span>
          <i class="el-icon-arrow-right" />
        </nuxt-link>
        <template v-else-if="!tags.game.length">
          <p class="empty">
            TA从来不玩游戏~
          </p>
          <span />
        </template>
      </div>
      <ul v-if="tags.game" class="games clearfix">
        <li
          v-for="item in tags.game.slice(0, 5)"
          :key="item.slug"
        >
          <nuxt-link target="_blank" :to="$alias.tag(item.slug)">
            <img :src="$resize(item.avatar, { width: 150, height: 150 })" :alt="item.name">
            <p class="oneline fade-link" v-text="item.name" />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="block">
      <div class="block-title">
        <nuxt-link class="text" to="topic" append>
          <span class="fade-link">参与的话题</span>
          <i v-if="tags.topic.length" class="count" v-text="tags.topic.length" />
        </nuxt-link>
        <nuxt-link v-if="tags.topic.length > 12" class="more fade-link" to="topic" append>
          <span>更多</span>
          <i class="el-icon-arrow-right" />
        </nuxt-link>
        <template v-else-if="!tags.topic.length">
          <p class="empty">
            TA不喜欢参与任何话题~
          </p>
          <span />
        </template>
      </div>
      <ul v-if="tags.topic" class="topics clearfix">
        <li
          v-for="item in tags.topic.slice(0, 12)"
          :key="item.slug"
        >
          <nuxt-link class="avatar" target="_blank" :to="$alias.tag(item.slug)">
            <img :src="$resize(item.avatar, { width: 40, height: 40 })" :alt="item.name">
          </nuxt-link>
          <div class="name oneline">
            <nuxt-link class="fade-link" target="_blank" :to="$alias.tag(item.slug)" v-text="item.name" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { bookmarkTags } from '~/api/tagApi'

export default {
  name: 'UserEmotion',
  components: {},
  props: {},
  data() {
    return {
      tags: null
    }
  },
  computed: {},
  watch: {},
  asyncData({ app, error, params }) {
    return bookmarkTags(app, {
      slug: params.slug
    })
      .then(tags => {
        return { tags }
      })
      .catch(error)
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
