export default req => {
  const isClient = typeof window !== 'undefined'
  if (isClient && window.__JWT_TOKEN__) {
    return window.__JWT_TOKEN__
  }
  let token = ''
  const cookies = isClient ? document.cookie : req ? req.headers.cookie : ''
  if (cookies) {
    cookies.split('; ').forEach(item => {
      if (item.startsWith('JWT-TOKEN=')) {
        token = item.split('JWT-TOKEN=')[1]
      }
    })
  }

  if (token) {
    if (isClient) {
      window.__JWT_TOKEN__ = token
    }
    return token
  }

  const authHeader = req ? req.headers.authorization : ''
  if (authHeader) {
    token = authHeader.split('Bearer ')[1]
  }

  if (token) {
    if (isClient) {
      window.__JWT_TOKEN__ = token
    }
    return token
  }

  if (isClient) {
    let pageData = ''
    try {
      pageData = JSON.parse(
        document.querySelector('script[data-name="page-data"]').textContent
      )
    } catch (e) {
      pageData = {}
    }
    token = pageData.authToken

    window.__JWT_TOKEN__ = token
  }

  return token
}
