const parseAuthToken = headers => {
  const appName = headers['x-app-name'] || ''
  const inApp = ['Geass', 'Innocence'].indexOf(appName) !== -1
  return inApp ? headers['x-auth-token'] : parseCookie(headers, 'JWT-TOKEN')
}

const parseCookie = (headers, key) => {
  if (!headers || !headers.cookie) {
    return ''
  }
  let result = ''
  headers.cookie.split('; ').forEach(item => {
    const temp = item.split('=')
    if (temp[0] === key) {
      result = temp[1]
    }
  })
  return result
}

const appendPageData = (html, data) => {
  const index = html.indexOf('</head>')

  return (
    html.slice(0, index) +
    `<script type="application/json" data-name="page-data">${data}</script>` +
    html.slice(index)
  )
}

export default function Auth() {
  this.nuxt.hook('render:route', (url, result, context) => {
    const headers = context.req.headers
    const appName = parseCookie(headers, 'x-app-name') || ''
    const appVersion = parseCookie(headers, 'x-app-version') || ''
    const authToken = parseAuthToken(headers) || ''
    const insertData = JSON.stringify({
      appName,
      appVersion,
      authToken
    })
    result.html = appendPageData(result.html, insertData)
  })
}
