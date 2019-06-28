import { bookmarkTags } from '~/api/tagApi'

export const state = () => ({
  myTagsFetched: false,
  myTags: [
    {
      name: '动漫',
      slug: 'bangumi',
      children: []
    },
    {
      name: '游戏',
      slug: 'game',
      children: []
    },
    {
      name: '话题',
      slug: 'topic',
      children: []
    },
    {
      name: '专栏',
      slug: 'notebook',
      children: []
    }
  ]
})

export const mutations = {
  SET_MY_TAGS_STATE(state) {
    state.myTagsFetched = true
  },
  SET_MY_TAGS(state, data) {
    Object.keys(data).forEach(type => {
      state.myTags.forEach(item => {
        if (item.slug === type) {
          item.children = data[type]
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
    commit('SET_MY_TAGS_STATE')
    bookmarkTags(this, {
      slug: rootState.user.slug
    })
      .then(data => {
        commit('SET_MY_TAGS', data)
      })
      .catch(() => {})
  }
}
