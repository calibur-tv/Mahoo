import { getLoginUser, logout } from '~/api/userApi'

export const state = () => ({
  user: {},
  login: false
})

export const mutations = {
  SET_USER_INFO(state, user) {
    state.user = user
    state.login = !!(user && user.slug)
  },
  SET_USER_TOKEN(state, token) {
    state.login = !!token
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
    } catch (e) {
      commit('SET_USER_INFO', {})
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
