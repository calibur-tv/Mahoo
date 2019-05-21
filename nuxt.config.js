const nodeEnv = process.env.NODE_ENV
const isDev = nodeEnv === 'development'
const baseUrl = require('./.env').BASE_URL
const qiniu = require('./qiniu')
const injectScript = require('./.script')

module.exports = {
  mode: 'universal',
  env: {
    API_URL: baseUrl.API_URL[nodeEnv],
    API_URL_BROWSER: baseUrl.API_URL_BROWSER[nodeEnv],
    META_KEYS: injectScript.keywords
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
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'
      },
      {
        name: 'theme-color',
        content: '#f06595'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'applicable-device',
        content: 'pc,mobile'
      },
      { name: 'renderer', content: 'webkit|ie-comp|ie-stand' },
      { name: 'force-rendering', content: 'webkit' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      {
        hid: 'description',
        name: 'description',
        content: '咔哩吧是一个二次元社区'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: injectScript.keywords
      }
    ],
    link: [
      { rel: 'dns-prefetch', href: 'https://file.calibur.tv' },
      { rel: 'dns-prefetch', href: 'https://m1.calibur.tv' },
      { rel: 'preconnect', href: 'https://www.calibur.tv' },
      { rel: 'preconnect', href: 'https://api.calibur.tv' },
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
        type: 'text/javascript',
        async: true
      },
      {
        src: '//res2.wx.qq.com/open/js/jweixin-1.4.0.js',
        type: 'text/javascript',
        async: true
      }
    ],
    __dangerouslyDisableSanitizers: 'script'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#f06595' },

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
    '~/plugins/prototypes.all.js',
    '~/plugins/prototypes.client.js',
    '~/plugins/h5.client.js',
    '~/plugins/pc.client.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: (() => {
    const result = [
      '@nuxtjs/style-resources',
      '@nuxtjs/axios',
      '~/modules/cache',
      '~/modules/auth'
    ]

    if (!isDev) {
      result.push(['@nuxtjs/pwa', {
        meta: {
          mobileApp: false,
          lang: 'zh-CN',
          name: '咔哩吧',
          author: '冰淤',
          description: '咔哩吧是一个二次元社区'
        },
        icon: false
      }])
    }

    return result
  })(),

  manifest: {
    name: '咔哩吧',
    short_name: '咔哩吧',
    description: '咔哩吧是一个二次元社区',
    start_url: 'https://www.calibur.tv/?utm_source=pwa',
    lang: 'zh-CN'
  },

  workbox: {
    offlineStrategy: 'NetworkOnly'
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
    transpile: [
      /^v-switcher/,
      /^vue-mixin-store/
    ],
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
