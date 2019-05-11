const buildEnv = process.env.NODE_ENV
const isDev = buildEnv === 'development'
const pkg = require('./package')
const baseUrl = require('./.env').BASE_URL

module.exports = {
  mode: 'universal',
  env: {
    API_URL: baseUrl.API_URL[buildEnv],
    API_URL_BROWSER: baseUrl.API_URL_BROWSER[buildEnv]
  },
  buildDir: isDev ? '.nuxt-dev' : '.nuxt',
  /*
  ** Headers of the page
  */
  head: {
    title: 'ShojoClub 烧酒俱乐部',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    bodyAttrs: {
      id: 'shojo'
    }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/global.scss',
    'normalize.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios.all.js',
    '~/plugins/components.all.js',
    '~/plugins/components.client.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '~/modules/cache',
    '~/modules/auth'
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  router: {
    extendRoutes(routes) {
      for (const route of routes) {
        const props = /:/.test(route.path)
        route.props = props
        if (route.children) {
          for (const item of route.children) {
            item.props = props
          }
        }
      }
      /*
      routes.push({
        name: 'error-fallback',
        path: '*',
        component: resolve('pages/error/404.vue')
      })
      */
    },
    scrollBehavior: function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      let position = { x: 0, y: 0 }
      if (to.hash) {
        position = { selector: to.hash }
      }
      return position
    }
  },

  styleResources: {
    sass: [
      './assets/css/var.scss',
      './assets/css/mixin.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    loaders: {
      cssModules: {
        camelCase: true
      }
    },
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': '~theme'
          }
        ]
      ]
    }
  }
}
