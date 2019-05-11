import MixinStore from 'vue-mixin-store'

const api = {}
const flow = MixinStore.FlowStore(api)

export const state = flow.state

export const mutations = flow.mutations

export const actions = flow.actions

export const getters = flow.getters
