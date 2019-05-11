const isDev = process.env.NODE_ENV === 'development'
const RedisUrl = require('../../.env').REDIS_URL

module.exports = {
  version: Date.now(),
  store: {
    type: 'redis',
    stores: [
      {
        type: 'memory',
        // maximum number of pages to store in memory
        // if limit is reached, least recently used page
        // is removed.
        max: 100,
        // number of seconds to store this page in cache
        ttl: 60
      },
      {
        type: 'redis',
        url: RedisUrl[process.env.NODE_ENV]
      }
    ]
  },
  pages: isDev ? ['/about/hello'] : ['/about/hello']
}
