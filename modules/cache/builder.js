const cacheManager = require('cache-manager')

function memoryCache(config) {
  return cacheManager.caching({
    store: 'memory',
    ...config
  })
}

function redisCache(config) {
  const redis = require('redis')
  const client = redis.createClient({
    url: config.url
  })
  client.quit()
  return cacheManager.caching({
    store: require('cache-manager-redis'),
    retry_strategy(options) {
      if (options.attempt > 10) {
        // Stop retrying afer 10 attempts.
        return undefined
      }
      // Increase reconnect delay by 150ms.
      return options.attempt * 1000 * 60
    },
    ...config
  })
}

function execConfig(config) {
  const { type, stores } = config
  let result
  stores.forEach(cfg => {
    if (cfg.type === type) {
      result = cfg
    }
  })
  return result
}

function makeCache(config = { store: 'memory' }) {
  const cfg = execConfig(config)

  if (config.type === 'redis') {
    return redisCache(cfg)
  }

  if (config.type === 'memory') {
    return memoryCache(cfg)
  }
}

module.exports = makeCache
