export const state = () => ({
  contributionTags: {
    loaded: false,
    data: [
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
  }
})

export const mutations = {
  SET_USER_CONTRIBUTION_TAGS(state, data) {
    state.contributionTags.loaded = true
    Object.keys(data).forEach(value => {
      state.contributionTags.data.forEach(item => {
        if (item.value === value) {
          item.children = data[value]
        }
      })
    })
  }
}

export const actions = {
  getUserContributionTags({ state, commit }) {
    if (state.contributionTags.loaded) {
      return
    }
    this.$axios.$get('v1/tag/contribution')
      .then(data => {
        commit('SET_USER_CONTRIBUTION_TAGS', data)
      })
  }
}
