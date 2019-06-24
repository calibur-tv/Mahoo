<style lang="scss">
#pin-show {
  margin-top: 30px;

  .title {
    font-size: 28px;
    color: $color-text-1;
    margin-bottom: 14px;
    font-weight: 700;
    line-height: 1.4;
  }

  .content {
    max-width: 660px;
    margin: 0 auto;
  }
}
</style>

<template>
  <div id="pin-show">
    <div class="content">
      <h1 class="title" v-text="title" />
      <content-author :user="author">
        <template v-slot:intro>
          <span v-text="$utils.time.from(created_at)" />
        </template>
        <template v-slot:mine>
          <el-button round type="info">
            编辑
          </el-button>
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
