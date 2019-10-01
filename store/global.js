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
  ],
  hottest_tags: [],
  tags: []
})

export const mutations = {
  SET_MY_TAGS_STATE(state) {
    state.myTagsFetched = true
  },
  SET_HOTTEST_TAGS(state, tags) {
    state.hottest_tags = tags.result
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
  async getMyTags({ rootState, state, commit }) {
    if (state.myTagsFetched || !rootState.isAuth) {
      return
    }
    commit('SET_MY_TAGS_STATE')
    const data = await bookmarkTags(this, {
      slug: rootState.user.slug
    })
    commit('SET_MY_TAGS', data)
  },
  getHottestTags({ state, commit }) {
    if (state.hottest_tags.length) {
      return
    }
    return this.$axios
      .$get('v1/tag/hottest')
      .then(tags => {
        commit('SET_HOTTEST_TAGS', tags)
      })
      .catch(() => {})
  }
}
