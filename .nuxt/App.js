import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtError from '../layouts/error.vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/normalize.css/normalize.css'

import '../assets/css/global.scss'

import '../theme/index.css'

const _1a3ae26b = () => import('../layouts/app.vue'  /* webpackChunkName: "layouts/app" */).then(m => m.default || m)
const _6f6c098b = () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)
const _1a3b339e = () => import('../layouts/web.vue'  /* webpackChunkName: "layouts/web" */).then(m => m.default || m)

const layouts = { "_app": _1a3ae26b,"_default": _6f6c098b,"_web": _1a3b339e }

let resolvedLayouts = {}

export default {
  head: {"titleTemplate":function anonymous(val
) {
return (val ? `${val} - ${process.env.INJECT.title}` : `${process.env.INJECT.title}`)
},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"},{"name":"theme-color","content":"#ffffff"},{"name":"format-detection","content":"telephone=no,email=no,address=no"},{"name":"applicable-device","content":"pc,mobile"},{"name":"renderer","content":"webkit|ie-comp|ie-stand"},{"name":"force-rendering","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=edge,chrome=1"},{"hid":"description","name":"description","content":"","template":val => (val ? `${val},${process.env.INJECT.description}` : `${process.env.INJECT.description}`)},{"hid":"keywords","name":"keywords","content":"","template":val => (val ? `${val},${process.env.INJECT.keywords}` : `${process.env.INJECT.keywords}`)}],"link":[{"rel":"dns-prefetch","href":"https:\u002F\u002Ffile.calibur.tv"},{"rel":"dns-prefetch","href":"https:\u002F\u002Fm1.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fapi.calibur.tv"},{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Ffile.calibur.tv\u002Ffavicon.ico"}],"bodyAttrs":{"id":"calibur"},"script":[{"src":"https:\u002F\u002Fpolyfill.alicdn.com\u002Fpolyfill.min.js","type":"text\u002Fjavascript"},{"innerHTML":"var _hmt=_hmt||[];(function (){var hm=document.createElement(\"script\");hm.src=\"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","type":"text\u002Fjavascript","async":true},{"innerHTML":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https:\u002F\u002Fzz.bdstatic.com\u002Flinksubmit\u002Fpush.js'}else{bp.src='http:\u002F\u002Fpush.zhanzhang.baidu.com\u002Fpush.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();","type":"text\u002Fjavascript","async":true},{"src":"\u002F\u002Fqzonestyle.gtimg.cn\u002Fqzone\u002Fqzact\u002Fcommon\u002Fshare\u002Fshare.js","type":"text\u002Fjavascript","async":true},{"src":"\u002F\u002Fqqq.gtimg.cn\u002Fminiprogram\u002Fwebview_jssdk\u002Fqqjssdk-1.0.0.js","type":"text\u002Fjavascript"},{"src":"\u002F\u002Fres2.wx.qq.com\u002Fopen\u002Fjs\u002Fjweixin-1.4.0.js","type":"text\u002Fjavascript","async":true}],"__dangerouslyDisableSanitizers":["script"],"style":[]},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    if (this.nuxt.err && NuxtError) {
      const errorLayout = (NuxtError.options || NuxtError).layout
      if (errorLayout) {
        this.setLayout(
          typeof errorLayout === 'function'
            ? errorLayout.call(NuxtError, this.context)
            : errorLayout
        )
      }
    }

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,

      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      const undef = !layout
      const nonexistent = !(layouts['_' + layout] || resolvedLayouts['_' + layout])
      let _layout = '_' + ((undef || nonexistent) ? 'default' : layout)
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
        .then((Component) => {
          resolvedLayouts[_layout] = Component
          delete layouts[_layout]
          return resolvedLayouts[_layout]
        })
        .catch((e) => {
          if (this.$nuxt) {
            return this.$nuxt.error({ statusCode: 500, message: e.message })
          }
        })
    }
  },

  components: {
    NuxtLoading
  }
}
