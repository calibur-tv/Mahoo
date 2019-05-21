import FlowStore from 'vue-mixin-store/dist/flow.js'

const api = {}
const flow = FlowStore(api)

export const state = flow.state

export const mutations = flow.mutations

export const actions = flow.actions

export const getters = flow.getters
