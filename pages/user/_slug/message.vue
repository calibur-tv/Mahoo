<style lang="scss">
#user-message {
  .message-menu {
    max-height: 638px;
  }

  .room-adjust {
    padding-left: 0;
    margin: -15px -20px;
    height: 684px;

    .need-pick {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        font-size: 14px;
        margin-top: 10px;
        color: $color-text-1;
      }
    }
  }
}
</style>

<template>
  <div id="user-message">
    <ElRow class="column-wrap">
      <ElCol :span="6">
        <MessageMenu :slug="slug" @open="handleOpen" />
        &nbsp;
      </ElCol>
      <ElCol :span="18">
        <div class="room-adjust">
          <MessageRoom v-if="mailto" :mailto="mailto" :name="name" :slug="slug" />
          <div v-else class="need-pick">
            <img src="~assets/img/error/no-comment.png" />
            <p>未选择聊天</p>
          </div>
        </div>
      </ElCol>
    </ElRow>
  </div>
</template>

<script>
import MessageMenu from '~/components/chat/Menu'
import MessageRoom from '~/components/chat/Room'
import mustSelf from '~/mixins/mustSelf'
import mustSign from '~/mixins/mustSign'

export default {
  name: 'UserMessage',
  components: {
    MessageMenu,
    MessageRoom
  },
  mixins: [mustSign, mustSelf],
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    mailto() {
      return this.$route.query.mailto
    },
    name() {
      return this.$route.query.name
    }
  },
  methods: {
    handleOpen(item) {
      this.$router.push(this.$alias.user(this.slug, `message/?mailto=${item.channel}&name=${item.user.nickname}`))
    }
  }
}
</script>
