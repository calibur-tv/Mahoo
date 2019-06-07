import Vue from 'vue'
import { getLoginUser } from '~/api/userApi'

export const state = () => ({
  user: {},
  haveAuthToken: false,
  isAuth: false,
  logging: false,
  mailbox: {
    unread_message_total: 0,
    unread_notice_total: 0
  },
  socket: {
    isConnected: false,
    message: null,
    lastGetAt: 0,
    reconnectError: false
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
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false
  },
  SOCKET_ONERROR(state, event) {
    // console.error(state, event)
  },
  SOCKET_ONMESSAGE(state, message) {
    if (message.channel === 0) {
      state.mailbox = message
    } else {
      state.socket.message = message
      state.socket.lastGetAt = `${Date.now()}-${Math.random().toString(36).substring(3, 6)}`
    }
  },
  SOCKET_RECONNECT(state, count) {
    // console.info(state, count)
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true
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
  }
}

export const getters = {
  isMine: state => slug => {
    return state.isAuth ? state.user.slug === slug : false
  }
}
