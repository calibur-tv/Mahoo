export default err => {
  const result = {}
  if (/timeout of/.test(err.message)) {
    result.statusCode = 504
    result.message = '网络请求超时，请重试！'
    return result
  }
  if (!err.response) {
    result.statusCode = 502
    result.message = '网络错误，请重试！'
    return result
  }
  result.statusCode = err.response.status
  result.message = err.response.data.message || '发生错误了，请稍后再试！'
  if (typeof result.message !== 'string') {
    result.message = '网络错误，请重试！'
  }
  return result
}
