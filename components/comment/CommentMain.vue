<style lang="scss">
.comment-main {
  .comment-header {
    margin-bottom: 24px;
  }
}
</style>

<template>
  <div class="comment-main">
    <FlowLoader
      ref="loader"
      func="getPinComments"
      type="lastId"
      :query="query"
    >
      <header slot="header" slot-scope="{ source }" class="comment-header">
        <h2>{{ source.total }}&nbsp;评论</h2>
        <CreateCommentForm :pin-slug="slug" @submit="createTop" />
      </header>
      <ul slot-scope="{ flow }">
        <CommentItem v-for="item in flow" :key="item.id" :item="item" />
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
    return {}
  },
  computed: {
    query() {
      return {
        $axios: this.$axios,
        slug: this.slug,
        sort: 'time_asc',
        count: 10
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    createTop(data) {
      this.$refs.loader.prepend(data)
    },
    createBottom(data) {
      this.$refs.loader.append(data)
    }
  }
}
</script>
