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
    line-height: 50px;
    padding: 0 10px;
    border-bottom: 1px solid #e9eaec;
    text-align: center;
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

    .chat-message {
      p {
        padding: 0 !important;
      }
    }

    .msg-status {
      width: 14px;
      height: 14px;
      line-height: 14px;
      border-radius: 50%;
      font-family: 'iconfont' !important;
      font-size: 12px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;

      &-error {
        background-color: $color-red;
        color: #fff;

        &:before {
          content: '\e6e9';
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
      {{ name }}
    </div>
    <FlowLoader ref="loader" func="getUserMessage" type="sinceId" :query="query" :callback="handleMessageLoad" :callback-once="false" :cache-timeout="86400" :auto="0" class="room-body">
      <div ref="wrap" slot-scope="{ flow }" class="room-chats">
        <Scroll ref="scroll" :data="flow" @top="handleScrollUp">
          <ChatRoom ref="room" :avatar-component="avatarComp" :message-components="messageComps" />
        </Scroll>
      </div>
    </FlowLoader>
    <div class="room-footer">
      <textarea
        v-model="message"
        maxlength="500"
        placeholder="say it..."
        @keyup.enter.exact.prevent="handleAddBubble"
        @keyup.ctrl.exact.prevent="handleAddBubble"
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
import Scroll from '~/components/common/Scroll'

export default {
  name: 'MessageRoom',
  components: {
    Scroll,
    ChatRoom
  },
  props: {
    mailto: {
      type: String,
      required: true
    },
    name: {
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
      target: null,
      chatsHeight: 0,
      stopWatcher: null,
      noMore: false
    }
  },
  computed: {
    query() {
      return {
        channel: this.mailto,
        $axios: this.$axios
      }
    },
    avatarComp() {
      return ChatAvatar
    },
    messageComps() {
      return {
        message: Message
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
  watch: {
    $route() {
      this.initRoom()
    }
  },
  beforeMount() {
    if (!this.$store.state.messageRoom[this.mailto]) {
      this.$store.commit('INIT_MESSAGE_ROOM', this.mailto)
    }
  },
  mounted() {
    this.initRoom()
  },
  methods: {
    initRoom() {
      this.$nextTick(async () => {
        this.$refs.room && this.$refs.room.clearMessage()
        this.$refs.loader && this.$refs.loader.forceCallback()
        await this.$refs.loader.initData({ is_up: 1 })
        await this.$refs.loader.loadMore({ force: true })
        this.clearUnreadCount()
        this.watchMessageLoop()
      })
    },
    clearUnreadCount() {
      const menu = this.$store.state.messageMenu.list.filter(_ => _.channel === this.mailto)[0]
      if (!menu || menu.count <= 0) {
        return
      }
      this.$axios.$post('v1/message/clear_channel', {
        channel: this.mailto
      })
      this.$store.commit('CLEAR_NOTIFICATION', {
        channel: this.mailto,
        count: menu.count
      })
    },
    watchMessageLoop() {
      this.stopWatcher && this.stopWatcher()
      const self = this
      const roomId = self.mailto
      this.stopWatcher = this.$watch(
        function() {
          return self.$store.state.messageRoom[self.mailto].time
        },
        function() {
          if (roomId !== self.mailto) {
            this.stopWatcher()
            return
          }
          const message = self.$store.state.messageRoom[self.mailto].data
          if (self.$store.state.socket.isConnected && message) {
            self.appendMessage(message)
          } else {
            self.$refs.loader.loadMore({ force: true })
          }
          self.screenScroll()
          self.clearUnreadCount()
        }
      )
    },
    handleScrollUp() {
      if (this.noMore) {
        return
      }
      this.$refs.loader.loadBefore({ force: true })
    },
    handleMessageLoad({ data, params }) {
      if (params.is_up === 0 && !data.result.length) {
        this.noMore = true
      }
      this.$nextTick(() => {
        if (params.is_up === 1) {
          data.result
            .map(_ => _)
            .reverse()
            .map(msg => {
              this.appendMessage(msg, false)
            })
          this.screenScroll(false)
        } else {
          data.result.map(msg => {
            this.appendMessage(msg)
          })
          this.screenScroll()
        }
      })
    },
    screenScroll(forceBottom = true) {
      if (!this.$refs.scroll) {
        return
      }
      this.$refs.scroll.refresh().then(() => {
        const newChatsHeight = this.$refs.room.$el.clientHeight
        const wrapChatHeight = this.$refs.wrap.clientHeight
        if (newChatsHeight < wrapChatHeight) {
          return
        }
        if (this.lastChatsHeight && !forceBottom) {
          this.$refs.scroll.scrollTo(0, this.lastChatsHeight - newChatsHeight)
        } else {
          this.$refs.scroll.scrollTo(0, wrapChatHeight - newChatsHeight)
        }
        this.lastChatsHeight = newChatsHeight
      })
    },
    appendMessage(msg, insertToAfter = true) {
      this.$refs.room.addMessage(
        {
          id: msg.id,
          type: 'message',
          float: msg.user.slug === this.slug ? 'right' : 'left',
          color:
            msg.user.sex === 2
              ? {
                  bg: '#ff6881',
                  text: '#fff'
                }
              : {
                  bg: '#12b7f5',
                  text: '#fff'
                },
          data: msg
        },
        insertToAfter
      )
    },
    handleAddBubble() {
      if (!this.message.trim()) {
        return
      }
      const jsonContent = [
        {
          type: 'paragraph',
          data: {
            text: this.message.trim()
          }
        }
      ]
      const randomId = Math.random()
        .toString(10)
        .substring(3, 6)
      this.appendMessage({
        id: randomId,
        user: this.$store.state.user,
        content: jsonContent,
        created_at: Date.now()
      })
      this.screenScroll()
      this.message = ''
      this.$axios
        .$post('v1/message/send', {
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
