<style lang="scss">
#user-emotion {
  .block {
    &:not(:last-child) {
      border-bottom: 1px solid #eee;
      margin-bottom: 17px;
    }

    &-title {
      padding-bottom: 15px;

      .text {
        color: #000;
        font-size: 20px;
        font-weight: 400;
        line-height: 33px;
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
  <div id="user-emotion">
    <div class="block">
      <div class="block-title">
        <nuxt-link class="text fade-link" to="bangumi" append>
          看过的动漫
        </nuxt-link>
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
        <nuxt-link class="text fade-link" to="game" append>
          玩过的游戏
        </nuxt-link>
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
        <nuxt-link class="text fade-link" to="topic" append>
          关注的话题
        </nuxt-link>
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
      tags: {}
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
