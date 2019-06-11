import Vue from 'vue'
import { getLoginUser, getMailboxTotal } from '~/api/userApi'
import { getUserFromSessionStore } from '~/assets/js/cache'
import { randomStr } from '~/assets/js/utils'

export const state = () => ({
  user: {},
  haveAuthToken: false,
  isAuth: false,
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
    reconnectErr: false
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
    state.haveAuthToken = !!token
  },
  SET_LOGGING(state) {
    state.logging = true
  },
  UPDATE_USER_INFO(state, { key, value }) {
    Vue.set(state.user, key, value)
  },
  SOCKET_ONOPEN(state, event) {
    state.socket.isConnected = true
    state.socket.reconnectErr = false
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false
  },
  SOCKET_ONERROR(state, event) {
    // console.error(state, event)
    state.socket.reconnectErr = true
  },
  SOCKET_ONMESSAGE(state, message) {
    if (message.channel === 0) {
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
        result.push(Object.assign(item, {
          user: {}
        }))
      })
      state.messageMenu.list = result
      state.messageMenu.time = randomStr()
    } else {
      state.messageRoom[message.channel].data = message
      state.messageRoom[message.channel].time = randomStr()
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
      if (!state.messageRoom[item.channel]) {
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
  }
}

export const getters = {
  isMine: state => slug => {
    return state.isAuth ? state.user.slug === slug : false
  }
}
