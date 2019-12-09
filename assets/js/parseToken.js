const parseCookie = cookieStr => {
  if (!cookieStr) {
    return ''
  }
  let token = ''
  cookieStr.split('; ').forEach(item => {
    if (item.startsWith('JWT-TOKEN=')) {
      token = item.split('JWT-TOKEN=')[1]
    }
  })
  return token
}

export default app => {
  let token = ''

  if (typeof window !== 'undefined') {
    if (window.__AUTH_TOKEN__) {
      return window.__AUTH_TOKEN__
    }

    let pageData

    try {
      pageData = JSON.parse(document.querySelector('script[data-name="page-data"]').textContent)
    } catch (e) {
      pageData = {
        authToken: ''
      }
    }

    token = pageData.authToken

    if (!token) {
      token = parseCookie(document.cookie)
    }
  } else {
    token = parseCookie(app.context.req.headers.cookie)
  }

  if (!token && app) {
    token = app.context.query.token
  }

  token = ~['undefined', 'null'].indexOf(token) ? '' : token
  if (typeof window !== 'undefined') {
    window.__AUTH_TOKEN__ = token
  }

  return token
}
