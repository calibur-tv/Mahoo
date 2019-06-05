<style lang="scss">
#user-message {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 15px 20px;
}
</style>

<template>
  <div id="user-message" class="container">
    <el-row>
      <el-col :span="6">
&nbsp;
      </el-col>
      <el-col :span="12">
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
      </el-col>
      <el-col :span="6">
&nbsp;
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ChatRoom from 'oh-my-chat'
import 'oh-my-chat/dist/oh-my-chat.css'
import Avatar from '~/components/chat/Avatar'
import Message from '~/components/chat/Message'
import parseToken from '~/assets/js/parseToken'
import { getUserInfo } from '~/api/userApi'

export default {
  name: 'UserMessage',
  components: {
    ChatRoom
  },
  props: {},
  data() {
    return {
      message: '',
      target: null
    }
  },
  computed: {
    avatarComp() {
      return Avatar
    },
    messageComps() {
      return {
        'message': Message
      }
    },
    mailto() {
      return this.$route.query.mailto
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
      if (!this.$store.state.socket.isConnected) {
        this.$toast.error('正在连接服务器')
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
