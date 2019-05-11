export default err => {
  const result = {}
  if (/timeout of/.test(err.message)) {
    result.statusCode = 504
    result.message = '网络请求超时，请稍候再试！'
    return result
  }
  if (!err.response) {
    result.statusCode = 502
    result.message = '网络错误，请刷新网页重试！'
    return result
  }
  result.statusCode = err.response.status
  result.message = err.response.data.message
  return result
}
