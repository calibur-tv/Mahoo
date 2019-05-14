const buildEnv = process.env.NODE_ENV
const isDev = buildEnv === 'development'
const baseUrl = require('./.env').BASE_URL
const qiniu = require('./qiniu')
const injectScript = require('./.script')

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
    title: '咔哩吧',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,maximum-scale=1'
      },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      { name: 'force-rendering', content: 'webkit' },
      {
        hid: 'description',
        name: 'description',
        content: 'calibur，C站, 咔哩吧'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'calibur，C站, 咔哩吧'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://file.calibur.tv/favicon.ico' }
    ],
    bodyAttrs: {
      id: 'calibur'
    },
    script: [
      {
        innerHTML: injectScript.baiduStat,
        type: 'text/javascript',
        async: true
      },
      {
        innerHTML: injectScript.baiduPush,
        type: 'text/javascript',
        async: true
      },
      { innerHTML: injectScript.iPhoneXViewport, type: 'text/javascript' },
      {
        src: '//qzonestyle.gtimg.cn/qzone/qzact/common/share/share.js',
        type: 'text/javascript'
      },
      {
        src: '//res2.wx.qq.com/open/js/jweixin-1.4.0.js',
        type: 'text/javascript'
      }
    ].filter(_ => _),
    __dangerouslyDisableSanitizers: 'script'
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
    '~/plugins/components.client.js',
    '~/plugins/h5.client.js',
    '~/plugins/pc.client.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
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
    publicPath: isDev ? '/_nuxt/' : `${qiniu.host}${qiniu.key_prefix}`,
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'mint-ui',
            style: true
          },
          'mint-ui'
        ],
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': '~theme'
          }
        ]
      ]
    },
    postcss: {
      preset: {
        autoprefixer: {
          remove: false
        }
      }
    }
  }
}
