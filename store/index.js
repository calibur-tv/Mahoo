export const state = () => ({
  user: {
    slug: '1dc',
    nickname: '冰淤'
  },
  login: false
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
    state.login = !!user.id
  }
}

export const actions = {}

export const getters = {
  currentUserKey: state => key => {
    return state.login ? state.user[key] || '' : ''
  }
}
