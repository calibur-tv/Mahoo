import { getLoginUser, logout } from '~/api/userApi'

export const state = () => ({
  user: {},
  login: false,
  socket: {
    isConnected: false,
    message: '',
    reconnectError: false
  }
})

export const mutations = {
  SET_USER_INFO(state, user) {
    state.user = user
    state.login = !!(user && user.slug)
  },
  SET_USER_TOKEN(state, token) {
    state.login = !!token
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
    state.socket.message = message
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
    if (!state.login) {
      return
    }
    if (state.user.slug) {
      return
    }
    try {
      const user = await getLoginUser(this)
      commit('SET_USER_INFO', user)
      return user
    } catch (e) {
      commit('SET_USER_INFO', {})
      return null
    }
  },
  destroyAuth({ state, commit }) {
    if (!state.login) {
      return
    }
    logout(this)
    commit('SET_USER_INFO', {})
  }
}

export const getters = {
  currentUserKey: state => key => {
    return state.login ? state.user[key] || '' : ''
  }
}
