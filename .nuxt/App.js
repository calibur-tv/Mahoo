import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/normalize.css/normalize.css'

import '../assets/css/global.scss'

import '../theme/index.css'

const _6f6c098b = () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)
const _1a3b339e = () => import('../layouts/web.vue'  /* webpackChunkName: "layouts/web" */).then(m => m.default || m)

const layouts = { "_default": _6f6c098b,"_web": _1a3b339e }

let resolvedLayouts = {}

export default {
  head: {"titleTemplate":function anonymous(val
) {
return val ? `${val} - ${process.env.INJECT.title}` : `${process.env.INJECT.title}`
},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"},{"name":"theme-color","content":"#f06595"},{"name":"format-detection","content":"telephone=no"},{"name":"applicable-device","content":"pc,mobile"},{"name":"renderer","content":"webkit|ie-comp|ie-stand"},{"name":"force-rendering","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=edge,chrome=1"},{"hid":"description","name":"description","content":"","template":val => val ? `${val},${process.env.INJECT.description}` : `${process.env.INJECT.description}`},{"hid":"keywords","name":"keywords","content":"","template":val => val ? `${val},${process.env.INJECT.keywords}` : `${process.env.INJECT.keywords}`},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"咔哩吧 (｡･∀･)ﾉﾞ 你开心就好~~calibur"},{"hid":"author","name":"author","content":"冰淤"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"咔哩吧 (｡･∀･)ﾉﾞ 你开心就好~~calibur"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"咔哩吧 (｡･∀･)ﾉﾞ 你开心就好~~calibur"},{"hid":"og:description","name":"og:description","property":"og:description","content":{"@better-scroll\u002Fcore":"^2.0.0-alpha.15","@better-scroll\u002Fmouse-wheel":"^2.0.0-alpha.15","@editorjs\u002Fchecklist":"^1.1.0","@editorjs\u002Fdelimiter":"^1.1.0","@editorjs\u002Feditorjs":"^2.14.0","@editorjs\u002Fembed":"^2.2.1","@editorjs\u002Fheader":"^2.2.4","@editorjs\u002Fimage":"^2.3.1","@editorjs\u002Flink":"^2.1.3","@editorjs\u002Flist":"^1.3.4","@nuxtjs\u002Faxios":"^5.5.4","@nuxtjs\u002Fpwa":"^3.0.0-beta.16","cache-manager":"^2.9.1","cache-manager-redis":"^0.6.0","cross-env":"^5.2.0","dayjs":"^1.8.14","element-ui":"^2.10.0","geetest-captcha":"^1.1.1","js-cookie":"^2.2.0","koa":"^2.6.2","mint-ui":"^2.2.13","normalize.css":"^8.0.1","nuxt":"2.8.1","oh-my-chat":"^1.0.10","redis":"^2.8.0","throttle-debounce":"^2.1.0","v-switcher":"^1.0.31","vue-mixin-store":"1.1.21","vue-native-websocket":"^2.0.13"}}],"link":[{"rel":"dns-prefetch","href":"https:\u002F\u002Ffile.calibur.tv"},{"rel":"dns-prefetch","href":"https:\u002F\u002Fm1.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fwww.calibur.tv"},{"rel":"preconnect","href":"https:\u002F\u002Fapi.calibur.tv"},{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Ffile.calibur.tv\u002Ffavicon.ico"},{"rel":"manifest","href":"https:\u002F\u002Ffile.calibur.tv\u002Fweb\u002Fmanifest.49fe38be.json"}],"bodyAttrs":{"id":"calibur"},"script":[{"innerHTML":"var _hmt=_hmt||[];(function (){var hm=document.createElement(\"script\");hm.src=\"https:\u002F\u002Fhm.baidu.com\u002Fhm.js?c10304a2f70ee2ddf8d2818551d37a4b\";var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(hm,s)})();","type":"text\u002Fjavascript","async":true},{"innerHTML":"(function(){var bp=document.createElement('script');var curProtocol=window.location.protocol.split(':')[0];if(curProtocol==='https'){bp.src='https:\u002F\u002Fzz.bdstatic.com\u002Flinksubmit\u002Fpush.js'}else{bp.src='http:\u002F\u002Fpush.zhanzhang.baidu.com\u002Fpush.js'}var s=document.getElementsByTagName(\"script\")[0];s.parentNode.insertBefore(bp,s)})();","type":"text\u002Fjavascript","async":true},{"src":"\u002F\u002Fqzonestyle.gtimg.cn\u002Fqzone\u002Fqzact\u002Fcommon\u002Fshare\u002Fshare.js","type":"text\u002Fjavascript","async":true},{"src":"\u002F\u002Fres2.wx.qq.com\u002Fopen\u002Fjs\u002Fjweixin-1.4.0.js","type":"text\u002Fjavascript","async":true}],"__dangerouslyDisableSanitizers":"script","style":[],"htmlAttrs":{"lang":"zh-CN"}},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
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
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
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

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout(layout) {
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
