export default app => {
  let token = ''

  if (typeof window !== 'undefined') {
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

  return ~['undefined', 'null'].indexOf(token) ? '' : token
}
