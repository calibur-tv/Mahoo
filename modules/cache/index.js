const { serialize, deserialize } = require('./serializer')
const makeCache = require('./builder')
const config = require('./config')

const getCacheExpiredAt = (expired = 'd') => {
  if (expired === 'd') {
    return parseInt(
      (new Date(new Date().setHours(26, 0, 0, 0)).getTime() - Date.now()) /
        1000 +
        Math.random() * 10800
    )
  }
  if (expired === 'h') {
    return 3600
  }
  return 300
}

module.exports = function cacheRenderer(nuxt) {
  if (arguments.length < 2 && this.nuxt) {
    nuxt = this.nuxt
  }

  if (!config.pages.length) {
    return
  }

  function isCacheFriendly(route, prefix, suffix) {
    const path = route.split('?')[0]
    let result
    if (path === '/') {
      result = '/'
    } else {
      result = config.pages.some(pat => path.startsWith(pat)) ? path : ''
    }
    if (!result) {
      return ''
    }
    return `${prefix}-${result}-${suffix}`
  }

  const currentVersion = config.version
  const cache = makeCache(config.store)

  const renderer = nuxt.renderer
  const renderRoute = renderer.renderRoute.bind(renderer)
  renderer.renderRoute = function(route, context) {
    const cacheKey = isCacheFriendly(route, 'page-', currentVersion)
    if (!cacheKey) {
      return renderRoute(route, context)
    }

    function renderSetCache() {
      return renderRoute(route, context).then(function(result) {
        if (!result.error) {
          cache.set(cacheKey, serialize(result), { ttl: getCacheExpiredAt() })
        }
        return result
      })
    }

    return cache
      .get(cacheKey)
      .then(function(cachedResult) {
        if (cachedResult) {
          return deserialize(cachedResult)
        }
        return renderSetCache()
      })
      .catch(renderSetCache)
  }

  return cache
}
