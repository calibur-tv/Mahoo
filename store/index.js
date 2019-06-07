import Vue from 'vue'

export const state = () => ({
  user: {},
  isAuth: false,
  logging: false,
  socket: {
    isConnected: false,
    message: null,
    lastGetAt: 0,
    reconnectError: false
  }
})

export const mutations = {
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
      const signed = !!message.slug
      delete message.channel
      state.user = message
      state.isAuth = signed
      state.logging = false
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

export const getters = {
  isMine: state => slug => {
    return state.isAuth ? state.user.slug === slug : false
  }
}
