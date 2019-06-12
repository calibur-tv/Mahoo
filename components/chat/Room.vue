<style lang="scss">
.room {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-header {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #e9eaec;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-shrink: 0;

    .user-avatar {
      float: left;
      margin-right: 5px;
    }

    .nickname-wrap {
      overflow: hidden;
    }
  }

  &-body {
    width: 100%;
    flex-grow: 1;
    overflow: hidden;
  }

  &-chats {
    position: relative;
    height: 100%;
    margin-right: -15px;
    padding-right: 15px;
    overflow: hidden;

    .chat-room {
      padding: 10px;
    }

    .msg-status {
      width: 14px;
      height: 14px;
      line-height: 14px;
      border-radius: 50%;
      font-family: "iconfont" !important;
      font-size: 12px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;

      &-error {
        background-color: $color-red;
        color: #fff;

        &:before {
          content: "\e6e9";
        }
      }
    }
  }

  &-footer {
    width: 100%;
    border-top: 1px solid #e9eaec;
    flex-shrink: 0;

    textarea {
      height: 90px;
      width: 100%;
      resize: none;
      background-color: transparent;
      outline-width: 0;
      border-width: 0;
      padding: 5px 20px;
      font-size: 14px;
      line-height: 1.6;
    }

    .helper {
      text-align: right;
      padding-bottom: 10px;

      span {
        color: #888;
        font-size: 12px;
        margin-left: 10px;
        margin-right: 7px;
      }

      button {
        height: 30px;
        background-color: #f4f4f4;
        color: #222;
        padding: 3px 30px;
        font-size: 14px;
        line-height: 24px;
        border: 1px solid #c1c1c1;
        border-radius: 4px;
        margin-right: 10px;

        &:hover {
          background-color: #f8f8f8;
        }
      }
    }
  }
}
</style>

<template>
  <div class="room">
    <div class="room-header">
      <user-avatar v-if="target" :user="target" :size="36" />
      <user-nickname v-if="target" :user="target" class="nickname-wrap" />
    </div>
    <no-ssr>
      <flow-loader
        ref="loader"
        func="getUserMessage"
        type="sinceId"
        sort="asc"
        :query="query"
        :callback="handleMessageLoad"
        :cache-timeout="86400000"
        :auto="0"
        class="room-body"
      >
        <div ref="wrap" slot-scope="{ flow }" class="room-chats">
          <scroll ref="scroll" :data="flow">
            <chat-room
              ref="room"
              :avatar-component="avatarComp"
              :message-components="messageComps"
            />
          </scroll>
        </div>
      </flow-loader>
    </no-ssr>
    <div class="room-footer">
      <textarea
        v-model="message"
        maxlength="500"
        placeholder="say it..."
        @keydown.enter.exact.prevent="handleAddBubble"
        @keydown.ctrl.exact.prevent="handleAddBubble"
        @keydown.meta.enter.prevent="handleNewLine"
      />
      <div class="helper">
        <span v-text="computeHelperTxt" />
        <button @click="handleAddBubble">
          发送
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ChatRoom from 'oh-my-chat'
import 'oh-my-chat/dist/oh-my-chat.css'
import ChatAvatar from '~/components/chat/Avatar'
import Message from '~/components/chat/Message'
import UserAvatar from '~/components/user/UserAvatar'
import UserNickname from '~/components/user/UserNickname'
import Scroll from '~/components/common/Scroll'

export default {
  name: 'MessageRoom',
  components: {
    Scroll,
    ChatRoom,
    UserAvatar,
    UserNickname
  },
  props: {
    mailto: {
      type: String,
      required: true
    },
    slug: {
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
        channel: this.mailto,
        $axios: this.$axios
      }
    },
    count() {
      return parseInt(this.$route.query.count || -1)
    },
    avatarComp() {
      return ChatAvatar
    },
    messageComps() {
      return {
        'message': Message
      }
    },
    computeHelperTxt() {
      if (typeof window === 'undefined') {
        return ''
      }
      if (/windows/.test(window.navigator.userAgent.toLocaleLowerCase())) {
        return '按下Ctrl+Enter换行'
      }
      return '按下Cmd+Enter换行'
    }
  },
  beforeMount() {
    if (!this.$store.state.messageRoom[this.mailto]) {
      this.$store.commit('INIT_MESSAGE_ROOM', this.mailto)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.loader.initData()
    })
  },
  methods: {
    handleMessageLoad({ data, args }) {
      this.$nextTick(() => {
        if (args.is_up === 1) {
          data.result.map(msg => {
            this.appendMessage(msg)
          })
          this.$nextTick(() => {
            this.$refs.scroll.scrollTo(0, this.$refs.wrap.clientHeight - this.$refs.room.$el.clientHeight)
          })
        }
      })
    },
    appendMessage(msg, insertToAfter = true) {
      this.$refs.room.addMessage({
        id: msg.id,
        type: 'message',
        float: msg.user.slug === this.slug ? 'right' : 'left',
        color: msg.user.sex === 2 ? {
          bg: '#ff6881',
          text: '#fff'
        } : {
          bg: '#12b7f5',
          text: '#fff'
        },
        data: msg
      }, insertToAfter)
    },
    handleAddBubble() {
      if (!this.message.trim()) {
        return
      }
      const jsonContent = [
        {
          type: 'txt',
          content: this.message.trim()
        }
      ]
      const randomId = Math.random().toString(10).substring(3, 6)
      this.appendMessage({
        id: randomId,
        user: this.$store.state.user,
        content: jsonContent,
        created_at: Date.now()
      })
      this.message = ''
      this.$axios.$post('v1/message/send', {
        channel: this.mailto,
        content: jsonContent
      })
        .then(msg => {
          this.$refs.room.updateMessage(randomId, {
            id: msg.id
          })
          this.$refs.loader.append(msg)
        })
        .catch(() => {
          this.$refs.room.updateMessage(randomId, {
            status: 'error'
          })
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
