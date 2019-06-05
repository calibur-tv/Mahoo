export default app => {
  let token = ''

  if (typeof window !== 'undefined') {
    if (window.__AUTH_TOKEN__) {
      return window.__AUTH_TOKEN__
    }

    let pageData

    try {
      pageData = JSON.parse(
        document.querySelector('script[data-name="page-data"]').textContent
      )
    } catch (e) {
      pageData = {
        authToken: ''
      }
    }

    token = pageData.authToken
  } else {
    const cookies = app.context.req.headers.cookie
    if (cookies) {
      cookies.split('; ').forEach(item => {
        if (item.startsWith('JWT-TOKEN=')) {
          token = item.split('JWT-TOKEN=')[1]
        }
      })
    }
  }

  token = ~['undefined', 'null'].indexOf(token) ? '' : token
  if (typeof window !== 'undefined') {
    window.__AUTH_TOKEN__ = token
  }

  return token
}
