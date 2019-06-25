import { bookmarkTags } from '~/api/tagApi'

export const state = () => ({
  myTagsFetched: false,
  myTags: [
    {
      label: '动漫',
      value: 'bangumi',
      children: []
    },
    {
      label: '游戏',
      value: 'game',
      children: []
    },
    {
      label: '话题',
      value: 'topic',
      children: []
    }
  ]
})

export const mutations = {
  SET_MY_TAGS(state, data) {
    state.myTagsFetched = true
    Object.keys(data).forEach(type => {
      state.myTags.forEach(item => {
        if (item.value === type) {
          item.children = data[type].map(_ => Object.assign(_, {
            value: _.slug,
            label: _.name
          }))
        }
      })
    })
  }
}

export const actions = {
  getMyTags({ rootState, state, commit }) {
    if (state.myTagsFetched || !rootState.isAuth) {
      return
    }
    bookmarkTags(this, {
      slug: rootState.user.slug
    })
      .then(data => {
        commit('SET_MY_TAGS', data)
      })
      .catch(() => {})
  }
}
