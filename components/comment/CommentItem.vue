<style lang="scss">
.comment-item {
  @include h5() {
    border-top: 1px solid $color-gray-3;
  }

  aside {
    float: left;

    @include pc() {
      margin: 24px 24px 0 5px;
    }

    @include h5() {
      margin-right: 10px;
      margin-top: 10px;
    }
  }

  main {
    overflow: hidden;
    @include pc() {
      padding: 22px 0 14px;
      border-top: 1px solid $color-gray-3;
    }

    @include h5() {
      padding: 10px 0;
    }

    .desc {
      font-size: 12px;
      margin-top: 1px;
      color: $color-text-3;

      .cc {
        margin-right: 5px;
      }
    }

    footer {
      button {
        margin-right: 18px;

        &:hover {
          color: $color-main;
        }
      }

      .ic-good_fill {
        color: $color-main;
      }
    }

    .create-comment-form {
      margin-top: 14px;
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
            <span class="cc">回复</span>
            <NLink :to="$alias.user(item.getter.slug)" target="_blank" class="fade-link" v-html="item.getter.nickname" />
          </template>
        </div>
      </header>
      <JsonContent :content="item.content" />
      <footer>
        <button @click="showCreate = !showCreate">
          <i class="iconfont ic-message" />
        </button>
        <button v-if="isMine || isAdmin" @click="deleteComment">
          <i class="iconfont ic-trash" />
        </button>
        <button @click="clickAgree">
          <i class="iconfont" :class="[item.up_vote_status ? 'ic-good_fill' : 'ic-good']" />
          <span v-if="item.like_count" v-text="item.like_count" />
        </button>
      </footer>
      <CreateCommentForm
        v-if="showCreate"
        :show-avatar="false"
        :pin-slug="item.pin_slug"
        :comment-id="item.id"
        :autofocus="true"
        :placeholder="`回复 @${item.author.nickname}：`"
        @submit="handleCreate"
      />
    </main>
  </li>
</template>

<script>
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import JsonContent from '~/components/editor/JsonContent'
import CreateCommentForm from '~/components/form/CreateCommentForm'

export default {
  name: 'CommentItem',
  components: {
    UserAvatar,
    UserNickname,
    JsonContent,
    CreateCommentForm
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showCreate: false,
      deleting: false,
      loading: false
    }
  },
  computed: {
    isMine() {
      return this.$store.getters.isMine(this.item.author.slug)
    },
    isAdmin() {
      return this.$store.getters.isAdmin
    }
  },
  methods: {
    handleCreate(value) {
      this.$emit('create', {
        id: this.item.id,
        value
      })
      this.showCreate = false
    },
    clickAgree() {
      if (!this.$store.state.isAuth) {
        this.$channel.$emit('sign-in')
        return
      }
      if (this.isMine) {
        this.$toast.info('不能给自己点赞')
        return
      }
      if (this.loading) {
        return
      }
      this.loading = true
      this.$axios
        .$post('v1/social/toggle', {
          target_slug: this.item.id.toString(),
          target_type: 'comment',
          action_slug: this.$store.state.user.slug,
          method_type: 'up_vote'
        })
        .then(result => {
          this.loading = false
          this.$emit('agree', {
            id: this.item.id,
            count: result ? this.item.like_count - -1 : this.item.like_count - 1,
            result
          })
        })
        .catch(err => {
          this.$toast.error(err.message)
          this.loading = false
        })
    },
    deleteComment() {
      this.$confirm('删除后不可恢复，确认要删除吗？', '提示')
        .then(() => {
          if (this.deleting) {
            return
          }
          this.deleting = true
          this.$axios
            .$post('v1/comment/delete', {
              comment_id: this.item.id
            })
            .then(() => {
              this.$toast.success('删除成功')
              this.$emit('delete', this.item.id)
            })
            .catch(err => {
              this.$toast.error(err.message)
              this.deleting = false
            })
        })
        .catch(() => {})
    }
  }
}
</script>
