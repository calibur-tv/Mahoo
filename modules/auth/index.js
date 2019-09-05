const parseAuthToken = headers => {
  if (~['Geass', 'Innocence'].indexOf(headers['x-app-name'])) {
    return headers['x-auth-token'] || ''
  }
  const { cookie } = headers
  if (!cookie) {
    return ''
  }
  let result = ''
  cookie.split('; ').forEach(item => {
    if (item.startsWith('JWT-TOKEN=')) {
      result = item.split('JWT-TOKEN=')[1]
    }
  })
  return result
}

const appendPageData = (html, data) => {
  const index = html.indexOf('</head>')

  return html.slice(0, index) + `<script type="application/json" data-name="page-data">${data}</script>` + html.slice(index)
}

export default function Auth() {
  this.nuxt.hook('render:route', (url, result, context) => {
    const { headers } = context.req
    const appName = headers['x-app-name'] || ''
    const appVersion = headers['x-app-version'] || ''
    const authToken = parseAuthToken(headers)
    const insertData = JSON.stringify({
      appName,
      appVersion,
      authToken
    })
    result.html = appendPageData(result.html, insertData)
  })
}
