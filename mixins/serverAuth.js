export default {
  async fetch({ store, error }) {
    const result = await store.dispatch('initAuth')
    if (!result) {
      error({
        statusCode: 401,
        message: '继续操作前请先登录'
      })
    }
  }
}
