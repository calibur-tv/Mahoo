module.exports = {
  apps: [
    {
      name: 'Mahoo',
      script: './server/index.js',
      watch: false,
      instances: 'max',
      ignore_watch: 'node_modules',
      env: {
        RELEASE: 'local',
        NODE_ENV: 'development'
      },
      env_staging: {
        RELEASE: 'stage',
        NODE_ENV: 'staging'
      },
      env_production: {
        RELEASE: 'prod',
        NODE_ENV: 'production'
      }
    }
  ]
}
