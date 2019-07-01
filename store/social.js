import Vue from 'vue'
import * as API from '~/api/toggleApi'

export const state = () => ({})

const generateField = (type, id) => `${type}-${id}`

export const mutations = {
  SET_STATE(state, { type, data, id }) {
    if (Array.isArray(data)) {
      data.forEach(item => {
        Object.keys(item).forEach(key => {
          item[`${key}_loading`] = false
        })
        const namespace = generateField(type, item.id)
        Vue.set(state, namespace, item)
      })
    } else {
      const checkIsListObj = data => {
        return typeof data === 'object'
      }
      Object.keys(data).forEach(key => {
        if (checkIsListObj(data[key])) {
          data[key] = Object.assign(data[key], {
            loading: false,
            error: false,
            nothing: !data[key].total
          })
        } else {
          data[`${key}_loading`] = false
        }
      })
      Vue.set(state, `${type}-${id || data.id}`, data)
    }
  },
  PUSH_STATE(state, { type, id, key, data }) {
    const namespace = generateField(type, id)
    const prefix = `${key}_users`
    const oldList = state[namespace][prefix].list
    const newIds = data.list.map(_ => _.id)
    state[namespace][prefix].list = oldList
      .filter(_ => newIds.indexOf(_.id) === -1)
      .concat(data.list)
    state[namespace][prefix].total = data.total
    state[namespace][prefix].noMore = data.noMore
    state[namespace][prefix].loading = false
  },
  TOGGLE_STATE(state, { type, id, key, result, user }) {
    const namespace = generateField(type, id)
    const prefix = `${key}_users`
    state[namespace][key] = result
    state[namespace][`${key}_loading`] = false
    if (!state[namespace][prefix]) {
      return
    }
    if (result) {
      state[namespace][prefix].total++
      state[namespace][prefix].noMore = false
      state[namespace][prefix].list.unshift(user)
    } else {
      state[namespace][prefix].total--
      state[namespace][prefix].list.forEach((item, index) => {
        if (item.id === user.id) {
          state[namespace][prefix].list.splice(index, 1)
        }
      })
    }
  },
  SET_PUSH_RUNNING(state, { type, id, key, value }) {
    const namespace = generateField(type, id)
    const prefix = `${key}_users`
    state[namespace][prefix][value] = true
  },
  SET_TOGGLE_LOADING(state, { type, id, action, result }) {
    const namespace = generateField(type, id)
    state[namespace][`${action}_loading`] = result
  }
}

export const actions = {
  async getUsers({ state, commit }, { type, id, key }) {
    const namespace = generateField(type, id)
    const store = state[namespace][`${key}_users`]
    if (store.loading || store.noMore) {
      return
    }
    commit('SET_PUSH_RUNNING', {
      type,
      key,
      id,
      value: 'loading'
    })
    try {
      const listObj = await API.users({
        ctx: this,
        type: key,
        id,
        last_id: store.list.length ? store.list[store.list.length - 1].id : 0,
        model: type,
        take: 15
      })
      commit('PUSH_STATE', {
        type,
        id,
        key,
        data: listObj
      })
    } catch (e) {
      commit('SET_PUSH_RUNNING', {
        type,
        key,
        id,
        value: 'error'
      })
    }
  },
  async toggleAction({ state, commit, rootState }, { type, id, action }) {
    const namespace = generateField(type, id)
    const store = state[namespace]
    if (store[`${action}_loading`]) {
      return
    }
    commit('SET_TOGGLE_LOADING', {
      action,
      type,
      id,
      result: true
    })
    try {
      const result = await API[action]({
        ctx: this,
        id,
        type
      })
      const { user } = rootState
      commit('TOGGLE_STATE', {
        type,
        key: action,
        id,
        result,
        user: {
          id: user.id,
          nickname: user.nickname,
          avatar: user.avatar,
          created_at: parseInt(Date.now() / 1000)
        }
      })
      return {
        success: true,
        result
      }
    } catch (e) {
      commit('SET_TOGGLE_LOADING', {
        action,
        type,
        id,
        result: false
      })
      return {
        success: false
      }
    }
  }
}

export const getters = {
  getState: state => (type, id) => {
    const namespace = generateField(type, id)
    return state[namespace]
  }
}
