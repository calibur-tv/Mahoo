<style lang="scss">
#pin-show {
  position: relative;
  margin-top: 30px;

  .banner {
    width: 100%;
    height: auto;

    &.full-size {
      width: 100%;
      padding-top: $page-header-hgt;
      padding-bottom: 33.3%;
      background-size: cover;
      background-position: center;
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
    }
  }

  .footer {
    padding-top: 30px;

    .notebook {
      margin-bottom: 24px;

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
}
</style>

<template>
  <div id="pin-show">
    <div
      v-if="title && title.banner && title.banner.width >= 1400"
      :style="{
        backgroundImage: `url(${$resize(title.banner.url, { width: 2000 })})`
      }"
      class="banner full-size"
    />
    <div class="content">
      <template v-if="title">
        <img
          v-if="title.banner && title.banner.width < 1400"
          :src="$resize(title.banner.url, { width: 660 })"
          :alt="title.text"
          class="banner"
        >
        <h1 class="title" v-text="title.text" />
      </template>
      <content-author :user="author">
        <template v-slot:intro>
          <span><nuxt-link target="_blank" :to="$alias.tag(area.slug)" v-text="area.name" /></span>
          <span v-text="$utils.timeFormat(created_at, 'MM-DD')" />
        </template>
        <template v-slot:mine>
          <nuxt-link target="_blank" :to="$alias.create(slug)">
            <el-button round type="info">
              编辑
            </el-button>
          </nuxt-link>
        </template>
      </content-author>
      <json-content :content="content" />
      <div class="footer">
        <div class="notebook">
          <p>文章被以下专栏收录</p>
          <nuxt-link target="_blank" :to="$alias.tag(notebook.slug)">
            <v-img :src="notebook.avatar" width="32" height="32" />
            <span class="name" v-text="notebook.name" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JsonContent from '~/components/editor/JsonContent'
import ContentAuthor from '~/components/user/ContentAuthor'

export default {
  name: 'PinShow',
  layout: 'web',
  components: {
    JsonContent,
    ContentAuthor
  },
  data() {
    return {
      slug: '',
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
      deleted_at: null
    }
  },
  asyncData({ app, error, params, query }) {
    return app.$axios.$get('v1/pin/show_info', {
      params: Object.assign({}, params, query)
    })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  }
}
</script>
