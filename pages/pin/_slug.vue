<style lang="scss">
#pin-show {
  margin-top: 30px;

  .banner {
    &.full-size {
      width: 100%;
      padding-bottom: 33.3%;
      background-size: cover;
      background-position: center;
      margin-top: -30px;
      margin-bottom: 24px;
    }

    &.normal-size {
      margin-bottom: 24px;
    }
  }

  .content {
    max-width: 680px;
    margin: 0 auto 50px auto;
    padding: 0 10px;

    .title {
      font-size: 28px;
      color: $color-text-1;
      margin-bottom: 14px;
      font-weight: 700;
      line-height: 1.4;
    }

    .content-author {
      margin-bottom: 10px;
    }
  }
}
</style>

<template>
  <div id="pin-show">
    <div
      v-if="title.banner"
      :style="{
        backgroundImage: `url(${$resize(title.banner.url, { width: 2000 })})`
      }"
      :class="{ 'full-size': title.banner.width > 1400 }"
      class="banner"
    />
    <div class="content">
      <h1 class="title" v-text="title.text" />
      <content-author :user="author">
        <template v-slot:intro>
          <span v-text="$utils.time.from(created_at)" />
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
      title: '',
      author: null,
      content: [],
      tags: [],
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
  computed: {},
  watch: {},
  asyncData({ app, error, params }) {
    return app.$axios.$get('v1/pin/show_info', { params })
      .then(data => {
        return { ...data }
      })
      .catch(error)
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>
