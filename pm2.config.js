module.exports = {
  apps: [
    {
      name: 'Mahoo',
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      watch: false,
      instances: 'max',
      ignore_watch: 'node_modules',
      env: {
        NODE_ENV: 'development'
      },
      env_staging: {
        NODE_ENV: 'staging'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
