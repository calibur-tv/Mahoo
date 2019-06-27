/* eslint-disable nuxt/no-cjs-in-config */
const nodeEnv = process.env.NODE_ENV
const isDev = nodeEnv === 'development'
const ENV = require('./.env')
const qiniu = require('./qiniu')
const injectScript = require('./.script')

module.exports = {
  mode: 'universal',
  env: {
    API_URL: ENV.BASE_URL.API_URL[nodeEnv],
    API_URL_BROWSER: ENV.BASE_URL.API_URL_BROWSER[nodeEnv],
    TAGS: ENV.TAGS,
    INJECT: injectScript,
    SOCKET_HOST: ENV.SOCKET_HOST[nodeEnv]
  },
  buildDir: isDev ? '.nuxt-dev' : '.nuxt',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: val => val ? `${val} - ${process.env.INJECT.title}` : `${process.env.INJECT.title}`,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
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
        content: '',
        template: val => val ? `${val},${process.env.INJECT.description}` : `${process.env.INJECT.description}`
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '',
        template: val => val ? `${val},${process.env.INJECT.keywords}` : `${process.env.INJECT.keywords}`
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
  loading: { color: '#ff6881' },

  /*
  ** Global CSS
  */
  css: [
    'normalize.css',
    '~/assets/css/global.scss',
    '~/theme/index.css'
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
    '~/plugins/pc.client.js',
    '~/plugins/socket.client.js',
    '~/plugins/router.client.js'
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
          author: injectScript.author,
          name: injectScript.title,
          description: injectScript.description
        },
        icon: false
      }])
    }

    return result
  })(),

  manifest: {
    name: injectScript.name,
    short_name: injectScript.title,
    description: injectScript.description,
    start_url: 'https://www.calibur.tv/?utm_source=pwa',
    lang: 'zh-CN'
  },

  workbox: {
    offlineStrategy: 'NetworkOnly',
    workboxVersion: '4.3.1',
    workboxURL: 'https://file.calibur.tv/static/workbox/4.3.1/workbox-sw.js'
  },

  axios: {
    progress: false
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
            libraryName: 'element-ui',
            style: false
          }
        ]
      ]
    }
  }
}
