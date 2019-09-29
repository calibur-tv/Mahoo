<style lang="scss">
.message-menu {
  height: 100%;
  position: relative;
  overflow-y: auto;

  .searcher {
    height: 40px;
    padding: 0 10px 10px;

    input {
      width: 100%;
      height: 100%;
      outline-width: 0;
      border-width: 0;
      background-color: #f4f4f4;
      font-size: 12px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  li {
    position: relative;
    overflow: hidden;

    &:hover {
      background-color: #f4f4f4;

      .close {
        left: 0;
      }
    }
  }

  .room-item {
    display: block;
    padding: 10px 10px 10px 24px;
    border-bottom: 1px solid #fff;

    &.nuxt-link-exact-active {
      background-color: #f4f4f4;
    }

    .avatar {
      float: left;
      margin-right: 8px;
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }

    .content {
      height: 40px;
      overflow: hidden;

      .nickname {
        color: #333;
        font-size: 14px;
        line-height: 1;
      }

      .footer {
        color: #999;
        padding: 8px 0;

        .read-badge {
          float: right;
          background-color: $color-red;
          border-radius: 10px;
          color: #fff;
          display: inline-block;
          font-size: 12px;
          height: 18px;
          line-height: 18px;
          padding: 0 6px;
          text-align: center;
          white-space: nowrap;
          border: 1px solid #fff;
        }
      }
    }
  }

  .close {
    position: absolute;
    left: -24px;
    top: 0;
    width: 24px;
    height: 100%;
    line-height: 62px;
    text-align: center;
    transition: left 0.3s;
    color: #999;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
  }
}
</style>

<template>
  <ul class="message-menu">
    <li v-for="item in menu" :key="item.channel">
      <div class="room-item clearfix" @click="emitClick(item)">
        <img v-if="item.user.avatar" class="avatar" :src="$resize(item.user.avatar, { width: 42 })" :alt="item.user.nickname" />
        <div class="content">
          <p class="nickname oneline" v-html="item.user.nickname" />
          <div class="footer">
            <div v-if="item.count" class="read-badge" v-text="item.count" />
          </div>
        </div>
      </div>
      <div class="close" @click="deleteChannel(item)">
        &times;
      </div>
    </li>
  </ul>
</template>

<script>
import { Loading } from 'element-ui'
import { getUserRelation } from '~/api/flowApi'

export default {
  name: 'MessageMenu',
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      menuWatcher: null,
      timeWatcher: null,
      friends: []
    }
  },
  computed: {
    menu() {
      return this.$store.state.messageMenu.list
    }
  },
  mounted() {
    this.menuWatcher = this.$watch('$store.state.mailbox.unread_message_total', (newVal, oldVal) => {
      if (newVal > oldVal && !this.$store.state.socket.isConnected) {
        this.$store.dispatch('getMessageMenu')
      }
    })
    this.timeWatcher = this.$watch('$store.state.messageMenu.time', () => {
      this.$store.dispatch('updateMessageMenu')
    })
    this.$store.dispatch('updateMessageMenu')
    if (this.menu.length && this.$store.state.socket.isConnected) {
      return
    }
    this.initChatRoom()
  },
  beforeDestroy() {
    this.menuWatcher && this.menuWatcher()
    this.timeWatcher && this.timeWatcher()
  },
  methods: {
    async initChatRoom() {
      const loading = Loading.service({
        target: this.$el
      })
      await this.getUserFriends()
      await this.$store.dispatch('getMessageMenu')
      loading.close()
    },
    async getUserFriends() {
      const getData = () => {
        getUserRelation({
          $axios: this.$axios,
          slug: this.slug,
          relation: 'friend'
        }).then(data => {
          data.result.forEach(user => this.$cache.setUserSessionStore(user))
          this.friends = data.result
          sessionStorage.setItem('user-friends-list', JSON.stringify(data.result))
        })
      }
      try {
        const cache = sessionStorage.getItem('user-friends-list')
        if (!cache) {
          await getData()
          return
        }
        const result = JSON.parse(cache)
        result.forEach(user => this.$cache.setUserSessionStore(user))
        this.friends = result
      } catch (e) {
        await getData()
      }
    },
    deleteChannel(item) {
      this.$axios
        .$post('v1/message/delete_channel', {
          channel: item.channel
        })
        .then(() => {
          this.$store.commit('DELETE_MESSAGE_MENU', item.channel)
        })
        .catch(() => {})
    },
    emitClick(item) {
      this.$emit('open', item)
    }
  }
}
</script>
