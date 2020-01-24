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
    TAGS: injectScript.tags,
    INJECT: injectScript,
    SOCKET_HOST: ENV.SOCKET_HOST[nodeEnv]
  },
  buildDir: isDev ? '.nuxt-dev' : '.nuxt',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: val => (val ? `${val} - ${process.env.INJECT.title}` : `${process.env.INJECT.title}`),
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover'
      },
      {
        name: 'theme-color',
        content: '#ffffff'
      },
      {
        name: 'format-detection',
        content: 'telephone=no,email=no,address=no'
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
        template: val => (val ? `${val},${process.env.INJECT.description}` : `${process.env.INJECT.description}`)
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '',
        template: val => (val ? `${val},${process.env.INJECT.keywords}` : `${process.env.INJECT.keywords}`)
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
        src: 'https://polyfill.alicdn.com/polyfill.min.js',
        type: 'text/javascript'
      },
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
        src: '//qqq.gtimg.cn/miniprogram/webview_jssdk/qqjssdk-1.0.0.js',
        type: 'text/javascript'
      },
      {
        src: '//res2.wx.qq.com/open/js/jweixin-1.4.0.js',
        type: 'text/javascript',
        async: true
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f06595' },

  /*
   ** Global CSS
   */
  css: ['normalize.css', '~/assets/css/global.scss', '~/theme/index.css'],

  render: {
    csp: isDev
      ? false
      : {
          reportOnly: false,
          policies: {
            'object-src': ["'none'"],
            'style-src': ["'self'", "'unsafe-inline'", '*.calibur.tv', 'static.geetest.com'],
            'script-src': [
              "'unsafe-inline'",
              '*.calibur.tv',
              'hm.baidu.com',
              'qqq.gtimg.cn',
              '*.geetest.com',
              'zz.bdstatic.com',
              'push.zhanzhang.baidu.com',
              'res2.wx.qq.com',
              'qzonestyle.gtimg.cn',
              'polyfill.alicdn.com'
            ]
          }
        }
  },

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
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
    // '~/modules/cache',
    // '~/modules/auth'
  ],

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
    scss: ['./assets/css/var.scss', './assets/css/mixin.scss']
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
        localsConvention: 'camelCase'
      }
    },
    publicPath: isDev ? '/_nuxt/' : `${qiniu.host}${qiniu.key_prefix}`,
    babel: {
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            corejs: { version: 3 }
          }
        ]
      ],
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
