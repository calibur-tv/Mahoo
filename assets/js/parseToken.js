export default app => {
  const isClient = typeof window !== 'undefined'

  if (isClient) {
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

    return pageData.authToken
  }

  let token = ''
  const cookies = app.context.req.headers.cookie
  if (cookies) {
    cookies.split('; ').forEach(item => {
      if (item.startsWith('JWT-TOKEN=')) {
        token = item.split('JWT-TOKEN=')[1]
      }
    })
  }

  return token
}
