<style lang="scss">
.message-room {
  .message-header {
    height: 58px;
    padding-bottom: 17px;
    border-bottom: 1px solid #e9eaec;

    .user-avatar {
      float: left;
      margin-right: 5px;
    }

    .nickname-wrap {
      overflow: hidden;
      line-height: 40px;
    }
  }

  .room-wrap {
    height: 500px;
  }
}
</style>

<template>
  <div class="message-room">
    <div class="message-header">
      <user-avatar v-if="target" :user="target" />
      <user-nickname v-if="target" :user="target" class="nickname-wrap" />
    </div>
    <div class="room-wrap">
      <no-ssr>
        <flow-loader
          func="getUserMessage"
          type="sinceId"
          :query="query"
        >
          <ChatRoom
            ref="room"
            :avatar-component="avatarComp"
            :message-components="messageComps"
          />
        </flow-loader>
      </no-ssr>
    </div>
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
    query() {
      return {
        message_type: 1,
        getter_slug: this.mailto,
        axios: this.$axios
      }
    },
    avatarComp() {
      return ChatAvatar
    },
    messageComps() {
      return {
        'message': Message
      }
    }
  },
  mounted() {
    this.getMailtoUser()
    this.$watch('$route', () => {
      this.getMailtoUser()
    })
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
      this.$axios.$post('v1/message/send', {
        message_type: 1,
        getter_slug: this.mailto,
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
