<style lang="scss">
.message-menu {
  height: 100%;
  position: relative;

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
      width: 42px;
      height: 42px;
      border-radius: 50%;
      float: left;
      margin-right: 8px;
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
    transition: left .3s;
    color: #999;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
  }
}
</style>

<template>
  <ul class="message-menu">
    <div class="searcher">
      <input v-model="filter" type="text" placeholder="搜索好友">
    </div>
    <li
      v-for="item in filterMenu"
      :key="item.channel"
    >
      <nuxt-link
        :to="$alias.user($route.params.slug, `message/?mailto=${item.channel}`)"
        class="room-item clearfix"
      >
        <img class="avatar" :src="$resize(item.user.avatar, { width: 42 })" :alt="item.user.nickname">
        <div class="content">
          <p class="nickname oneline" v-text="item.user.nickname" />
          <div class="footer">
            <div v-if="item.count" class="read-badge" v-text="item.count" />
          </div>
        </div>
      </nuxt-link>
      <div class="close" @click="deleteChannel(item)">
        &times;
      </div>
    </li>
  </ul>
</template>

<script>
import { getUserRelation } from '~/api/flowApi'
import { setUserSessionStore } from '~/assets/js/cache'
import { Loading } from 'element-ui'

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
      filter: '',
      menuWatcher: null,
      timeWatcher: null,
      friends: []
    }
  },
  computed: {
    menu() {
      return this.$store.state.messageMenu.list
    },
    filterMenu() {
      if (!this.filter) {
        return this.menu
      }
      // TODO 这里应该搜的是朋友列表，但是搜到之后需要获取 channel。。
      return this.menu.filter(_ => _.user.nickname.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) === 0)
    }
  },
  mounted() {
    this.menuWatcher = this.$watch('$store.state.mailbox.unread_message_total', (newVal, oldVal) => {
      if (newVal > oldVal && !this.$store.state.socket.isConnected) {
        this.getMessageMenu()
      }
    })
    this.timeWatcher = this.$watch('$store.state.messageMenu.time', () => {
      this.$store.dispatch('updateMessageMenu')
    })
    if (this.menu.length && this.$store.state.socket.isConnected) {
      return
    }
    const loading = Loading.service({
      target: this.$el
    })
    this.getUserFriends()
    this.getMessageMenu(loading)
  },
  beforeDestroy() {
    this.menuWatcher && this.menuWatcher()
    this.timeWatcher && this.timeWatcher()
  },
  methods: {
    getUserFriends() {
      const getData = () => {
        getUserRelation({
          $axios: this.$axios,
          slug: this.slug,
          relation: 'friends'
        })
          .then(data => {
            data.result.forEach(user => setUserSessionStore(user))
            this.friends = data.result
            sessionStorage.setItem('user-friends-list', JSON.stringify(data.result))
          })
      }
      try {
        const cache = sessionStorage.getItem('user-friends-list')
        if (!cache) {
          getData()
          return
        }
        const result = JSON.parse(cache)
        result.forEach(user => setUserSessionStore(user))
        this.friends = result
      } catch (e) {
        getData()
      }
    },
    async getMessageMenu(loading) {
      await this.$store.dispatch('getMessageMenu')
      loading.close()
    },
    deleteChannel(item) {
      this.$axios.$post('v1/message/delete_channel', {
        channel: item.channel
      })
        .then(() => {
          this.$store.commit('DELETE_MESSAGE_MENU', item.channel)
        })
        .catch(() => {})
    }
  }
}
</script>
