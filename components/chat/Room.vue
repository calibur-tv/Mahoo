<style lang="scss">
.message-room {
  .message-header {
    height: 40px;

    .user-avatar {
      float: left;
      margin-right: 5px;
    }

    .nickname-wrap {
      overflow: hidden;
      line-height: 40px;
    }

    .status {
      margin-top: 14px;
      margin-left: 14px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      float: right;

      &-ok {
        background-color: $color-green;
      }

      &-error {
        background-color: $color-red;
      }

      &-warn {
        background-color: $color-yellow;
      }
    }
  }
}
</style>

<template>
  <div class="message-room">
    <div class="message-header">
      <user-avatar v-if="target" :user="target" />
      <div class="status" :class="`status-${status}`" />
      <user-nickname v-if="target" :user="target" class="nickname-wrap" />
    </div>
    <ChatRoom
      ref="room"
      :avatar-component="avatarComp"
      :message-components="messageComps"
    />
    <div>
      <el-input
        v-model="message"
        type="textarea"
        :rows="5"
        resize="none"
        maxlength="500"
        placeholder="say it..."
        @keydown.enter.exact.native.prevent="handleAddBubble"
        @keydown.meta.enter.native.prevent="handleNewLine"
      />
    </div>
  </div>
</template>

<script>
import ChatRoom from 'oh-my-chat'
import 'oh-my-chat/dist/oh-my-chat.css'
import { getUserInfo } from '~/api/userApi'
import ChatAvatar from '~/components/chat/Avatar'
import Message from '~/components/chat/Message'
import parseToken from '~/assets/js/parseToken'
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'

export default {
  name: 'MessageRoom',
  components: {
    ChatRoom,
    UserAvatar,
    UserNickname
  },
  props: {
    mailto: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: '',
      target: null
    }
  },
  computed: {
    avatarComp() {
      return ChatAvatar
    },
    messageComps() {
      return {
        'message': Message
      }
    },
    status() {
      if (this.$store.state.socket.reconnectError) {
        return 'error'
      }
      if (this.$store.state.socket.isConnected) {
        return 'ok'
      }
      return 'warn'
    }
  },
  watch: {
    '$store.state.socket.lastGetAt'() {
      this.appendMessage(this.$store.state.socket.message)
    }
  },
  created() {},
  mounted() {
    this.getMailtoUser()
  },
  methods: {
    getMailtoUser() {
      if (!this.mailto) {
        return
      }
      getUserInfo(this, {
        slug: this.mailto
      })
        .then(target => {
          this.target = target
        })
        .catch(err => {
          this.$toast.error(err.message)
        })
    },
    appendMessage(message) {
      this.$refs.room.addMessage({
        type: 'message',
        float: 'left',
        id: Math.random().toString(10).substring(3, 6),
        color: message.from_user.sex === 2 ? {
          bg: '#ff6881',
          text: '#fff'
        } : {
          bg: '#12b7f5',
          text: '#fff'
        },
        data: {
          content: message.content,
          created_at: message.created_at,
          user: message.from_user
        }
      })
    },
    handleAddBubble() {
      if (this.status === 'warn') {
        this.$toast.info('正在连接服务器')
        return
      }
      if (this.status === 'error') {
        this.$toast.error('请稍候再试')
        return
      }
      if (!this.message.trim()) {
        return
      }
      const type = 'message'
      const user = this.$store.state.user
      const jsonContent = [
        {
          type: 'txt',
          content: this.message.trim().replace(/\r?\n/g, '<br>')
        }
      ]
      this.$refs.room.addMessage({
        type,
        float: 'right',
        id: Math.random().toString(10).substring(3, 6),
        color: user.sex === 2 ? {
          bg: '#ff6881',
          text: '#fff'
        } : {
          bg: '#12b7f5',
          text: '#fff'
        },
        data: {
          content: jsonContent,
          created_at: Date.now(),
          user
        }
      })
      this.message = ''
      this.$channel.send({
        message_type: 1,
        to_user_slug: this.mailto,
        from_user_token: parseToken(),
        content: jsonContent
      })
    },
    handleNewLine() {
      if (!this.message) {
        return
      }
      this.message += '\n'
    }
  }
}
</script>
