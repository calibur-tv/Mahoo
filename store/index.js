import Vue from 'vue'
import { getLoginUser, getMailboxTotal } from '~/api/userApi'
import { getUserFromSessionStore, set as setCache } from '~/assets/js/cache'
import { randomStr } from '~/assets/js/utils'

export const state = () => ({
  user: {},
  haveAuthToken: false,
  roles: null,
  isAuth: false,
  isLogout: false,
  logging: false,
  mailbox: {
    unread_message_total: 0,
    unread_notice_total: 0
  },
  messageMenu: {
    list: [],
    time: ''
  },
  messageRoom: {},
  socket: {
    isConnected: false,
    reconnectErr: false,
    isMaster: false
  }
})

export const mutations = {
  SET_USER_INFO(state, user) {
    const signed = !!(user && user.slug)
    state.user = user
    state.haveAuthToken = signed
    state.isAuth = signed
    state.logging = false
  },
  SET_USER_TOKEN(state, token) {
    if (state.isLogout) {
      return
    }
    state.haveAuthToken = !!token
  },
  SET_LOGGING(state) {
    state.logging = true
  },
  USER_LOGOUT(state) {
    state.haveAuthToken = false
    state.isAuth = false
    state.logging = false
    state.isLogout = true
    state.user = {}
  },
  UPDATE_USER_INFO(state, { key, value }) {
    Vue.set(state.user, key, value)
  },
  SOCKET_AUTO_CONNECT(state) {
    state.socket.isConnected = true
    state.socket.reconnectErr = false
    state.socket.isMaster = false
  },
  SOCKET_ONOPEN(state, event) {
    state.socket.isConnected = true
    state.socket.reconnectErr = false
    state.socket.isMaster = true
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false
  },
  SOCKET_ONERROR(state, event) {
    // console.error(state, event)
    state.socket.reconnectErr = true
  },
  SOCKET_ONMESSAGE(state, message) {
    if (message.channel === 'unread_total') {
      state.mailbox = message
    } else if (message.channel === 'message-menu') {
      const result = []
      message.data.forEach(item => {
        if (!state.messageRoom[item.channel]) {
          Vue.set(state.messageRoom, item.channel, {
            time: '',
            data: null
          })
        }
        result.push(
          Object.assign(item, {
            user: {}
          })
        )
      })
      state.messageMenu.list = result
      state.messageMenu.time = randomStr()
    } else {
      state.messageRoom[message.channel].data = message
      state.messageRoom[message.channel].time = randomStr()
    }
    if (state.socket.isMaster) {
      setCache('socket-on-message-data', message)
      setCache('socket-on-message-time', Date.now())
    }
  },
  SOCKET_RECONNECT(state, count) {
    // console.info(state, count)
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectErr = true
  },
  SET_MESSAGE_MENU(state, menu) {
    const result = []
    menu.forEach(item => {
      if (state.messageRoom[item.channel]) {
        Vue.set(state.messageRoom, item.channel, {
          time: randomStr(),
          data: null
        })
      } else {
        Vue.set(state.messageRoom, item.channel, {
          time: '',
          data: null
        })
      }
      item.user = {}
      result.push(item)
    })
    state.messageMenu.list = result
    state.messageMenu.time = randomStr()
  },
  UPDATE_MESSAGE_MENU_USER(state, { channel, user }) {
    state.messageMenu.list.forEach(item => {
      if (item.channel === channel) {
        item.user = user
      }
    })
  },
  DELETE_MESSAGE_MENU(state, channel) {
    state.messageMenu.list.forEach((item, index) => {
      if (item.channel === channel) {
        state.messageMenu.list.splice(index, 1)
      }
    })
  },
  INIT_MESSAGE_ROOM(state, channel) {
    Vue.set(state.messageRoom, channel, {
      time: '',
      data: null
    })
  },
  CLEAR_NOTIFICATION(state, { channel, count }) {
    state.messageMenu.list.forEach((item, index) => {
      if (item.channel === channel) {
        state.messageMenu.list[index].count -= count
        state.mailbox.unread_message_total -= count
      }
    })
  },
  SET_USER_ROLE(state, data) {
    state.roles = data
  }
}

export const actions = {
  async initAuth({ state, commit }) {
    if (!state.haveAuthToken || state.logging) {
      return null
    }
    if (state.user.slug) {
      return state.user
    }
    try {
      commit('SET_LOGGING')
      const user = await getLoginUser(this)
      commit('SET_USER_INFO', user)
      return user
    } catch (e) {
      commit('SET_USER_INFO', {})
      return null
    }
  },
  async refreshMailbox({ state, commit }) {
    if (state.socket.isConnected) {
      return
    }
    const data = await getMailboxTotal(this, {
      slug: state.user.slug
    })
    commit('SOCKET_ONMESSAGE', data)
  },
  async getMessageMenu({ commit }) {
    const menu = await this.$axios.$get('v1/message/menu')
    commit('SET_MESSAGE_MENU', menu)
  },
  updateMessageMenu({ state, commit }) {
    const self = state.user.slug
    state.messageMenu.list.forEach(async item => {
      const arr = item.channel.split('@')
      let slug = arr[2]
      if (slug === self) {
        slug = arr[3]
      }
      const user = await getUserFromSessionStore(this, slug)
      commit('UPDATE_MESSAGE_MENU_USER', { channel: item.channel, user })
    })
  },
  getUserRoles({ state, commit }) {
    if (state.roles || !state.user || !state.user.title.length) {
      return
    }
    this.$axios
      .$get('v1/user/roles')
      .then(data => {
        commit('SET_USER_ROLE', data)
      })
      .catch(() => {})
  }
}

export const getters = {
  isMine: state => slug => (state.isAuth ? state.user.slug === slug : false),
  isAdmin: state => (state.isAuth ? state.user.is_admin : false),
  hasRole: state => role => (state.user.is_admin ? true : state.roles ? ~state.roles.indexOf(role) : false)
}
