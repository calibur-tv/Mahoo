import generateRequestError from '~/assets/js/generateRequestError'
import parseToken from '~/assets/js/parseToken'

export default ({ $axios, app }) => {
  const isClient = typeof window !== 'undefined'

  $axios.setToken(parseToken(app), 'Bearer')

  $axios.onRequest(config => {
    config.baseURL = isClient ? process.env.API_URL_BROWSER : process.env.API_URL
    config.timeout = 10000

    if (isClient) {
      // M.sentry.setRequestStack({
      //   url: config.url,
      //   params: method === 'GET' ? config.params : config.data,
      //   method: config.method.toLocaleUpperCase()
      // })
    }
  })

  $axios.onResponse(resp => {
    if (isClient) {
      // M.sentry.setResponseStack({
      //   url: resp.request.responseURL,
      //   requestId: resp.headers['x-request-id'],
      //   viaId: resp.headers['x-via'] || 'none',
      //   code: 200
      // })
    }
    return resp.data
  })

  $axios.onError(error => {
    const err = generateRequestError(error)
    if (isClient) {
      // M.sentry.setResponseStack({
      //   url: err.request ? err.request.responseURL || 'unknown' : 'unknown',
      //   code: err.statusCode,
      //   message: err.message
      // })
      // const search = window.location.search
      // const source = /from=/.test(search)
      //   ? search.split('from=')[1].split('&')[0]
      //   : ''
      // const showToast = ['wxapp'].indexOf(source) === -1
      // if (/\/door\/refresh/.test(err.config.url)) {
      //   Cookies.remove('JWT-TOKEN')
      //   showToast &&
      //     setTimeout(() => {
      //       window.location = window.location.pathname
      //     }, 1000)
      // }
      // showToast && M.toast.error(err.message)
    }
    return Promise.reject(err)
  })
}
