import Vue from 'vue'
import * as API from '~/api/toggleApi'

export const state = () => ({})

const generateField = (type, slug) => `${type}-${slug}`

export const mutations = {
  set(state, { type, data, slug }) {
    if (Array.isArray(data)) {
      data.forEach(item => {
        Object.keys(item).forEach(key => {
          item[`${key}_loading`] = false
        })
        Vue.set(state, generateField(type, item.slug), item)
      })
    } else {
      Object.keys(data).forEach(key => {
        if (typeof data[key] === 'object') {
          data[key] = Object.assign(data[key], {
            loading: false,
            error: false,
            nothing: !data[key].total
          })
        } else {
          data[`${key}_loading`] = false
        }
      })
      Vue.set(state, `${type}-${slug || data.slug}`, data)
    }
  },
  PUSH_USERS(state, { type, slug, key, data }) {
    const namespace = generateField(type, slug)
    const prefix = `${key}_users`
    const oldList = state[namespace][prefix].list
    const newIds = data.list.map(_ => _.slug)
    state[namespace][prefix].list = oldList
      .filter(_ => newIds.indexOf(_.slug) === -1)
      .concat(data.list)
    state[namespace][prefix].total = data.total
    state[namespace][prefix].no_more = data.no_more
    state[namespace][prefix].loading = false
  },
  SET_STATE(state, { type, slug, key, result, user }) {
    const namespace = generateField(type, slug)
    const prefix = `${key}_users`
    state[namespace][key] = result
    state[namespace][`${key}_loading`] = false
    if (!state[namespace][prefix]) {
      return
    }
    if (result) {
      state[namespace][prefix].total++
      state[namespace][prefix].no_more = false
      state[namespace][prefix].list.unshift(user)
    } else {
      state[namespace][prefix].total--
      state[namespace][prefix].list.forEach((item, index) => {
        if (item.slug === user.slug) {
          state[namespace][prefix].list.splice(index, 1)
        }
      })
    }
  },
  SET_STATUS(state, { type, slug, key, value }) {
    state[generateField(type, slug)][`${key}_users`][value] = true
  },
  SET_LOADING(state, { type, slug, action, result }) {
    state[generateField(type, slug)][`${action}_loading`] = result
  }
}

export const actions = {
  async users({ state, commit }, { type, slug, key }) {
    const store = state[generateField(type, slug)][`${key}_users`]
    if (store.loading || store.no_more) {
      return
    }
    commit('SET_STATUS', {
      type,
      key,
      slug,
      value: 'loading'
    })
    try {
      const listObj = await API.users({
        ctx: this,
        type: key,
        slug,
        last_slug: store.list.length ? store.list[store.list.length - 1].slug : 0,
        model: type,
        take: 15
      })
      commit('PUSH_USERS', {
        type,
        slug,
        key,
        data: listObj
      })
    } catch (e) {
      commit('SET_STATUS', {
        type,
        key,
        slug,
        value: 'error'
      })
    }
  },
  async toggle({ state, commit, rootState }, { type, slug, action, params }) {
    const store = state[generateField(type, slug)]
    if (store[`${action}_loading`]) {
      return
    }
    commit('SET_LOADING', {
      action,
      type,
      slug,
      result: true
    })
    try {
      const result = await this.$axios.$post('v1/social/toggle', params)
      const { user } = rootState
      commit('SET_STATE', {
        type,
        key: action,
        slug,
        result,
        user: {
          slug: user.slug,
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
      commit('SET_LOADING', {
        action,
        type,
        slug,
        result: false
      })
      return {
        success: false
      }
    }
  }
}

export const getters = {
  get: state => (type, slug) => {
    return state[generateField(type, slug)]
  }
}
