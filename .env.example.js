const BASE_URL = {
  API_URL: {
    development: 'http://localhost:5200/',
    production: 'http://localhost/'
  },
  API_URL_BROWSER: {
    development: 'http://localhost:5200/',
    production: 'https://api.calibur.tv/'
  }
}

const REDIS_URL = {
  development: 'redis://localhost:6379',
  production: 'redis://localhost:6379'
}

module.exports = {
  BASE_URL,
  REDIS_URL
}
