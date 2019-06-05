<style lang="scss">
#user-message {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 15px 20px;

  .msg-bubble {
    font-size: 14px;
    line-height: 1.6;
  }
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
import parseToken from '~/assets/js/parseToken'

export default {
  name: 'UserMessage',
  components: {
    ChatRoom
  },
  props: {},
  data() {
    return {
      message: ''
    }
  },
  computed: {
    avatarComp() {
      return Avatar
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleAddBubble() {
      if (!this.message.trim()) {
        return
      }
      const type = 'text-msg'
      const user = this.$store.state.user
      const content = this.message.trim().replace(/\r?\n/g, '<br>')
      this.$refs.room.addMessage({
        type,
        float: 'right',
        id: Math.random().toString(10).substring(3, 6),
        color: user.sex === 2 ? {
          bg: '#ff6881',
          text: '#fff'
        } : {
          bg: '#00a1d6',
          text: '#fff'
        },
        data: {
          content,
          created_at: Date.now(),
          user
        }
      })
      this.message = ''
      this.$channel.send({
        message_type: 0,
        to_user_slug: '14u',
        from_user_token: parseToken(),
        content: [
          {
            type: 'txt',
            text: content
          }
        ]
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
