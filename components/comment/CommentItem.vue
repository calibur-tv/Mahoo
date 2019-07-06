<style lang="scss">
.comment-item {
  aside {
    margin: 24px 24px 0 5px;
    float: left;
  }

  main {
    padding: 22px 0 14px;
    border-top: 1px solid #e5e9ef;
    overflow: hidden;

    .desc {
      font-size: 12px;
      margin-top: 1px;
      color: $color-text-3;
    }
  }
}
</style>

<template>
  <li class="comment-item">
    <aside>
      <UserAvatar :user="item.author" />
    </aside>
    <main>
      <header>
        <UserNickname :user="item.author" />
        <div class="desc">
          <time v-text="$utils.timeAgo(item.created_at)" />
          <template v-if="item.getter">
            <span>回复&nbsp;</span>
            <NLink :to="$alias.user(item.getter.slug)" target="_blank" class="fade-link" v-text="item.getter.nickname" />
          </template>
        </div>
      </header>
      <JsonContent :content="item.content" />
      <footer>
        footer
      </footer>
    </main>
  </li>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import JsonContent from '~/components/editor/JsonContent'

export default {
  name: 'CommentItem',
  components: {
    UserAvatar,
    UserNickname,
    JsonContent
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
