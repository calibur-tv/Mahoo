import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/global.scss'

import '../node_modules/normalize.css/normalize.css'

const _6f6c098b = () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)
const _78187f67 = () => import('../layouts/trend.vue'  /* webpackChunkName: "layouts/trend" */).then(m => m.default || m)
const _1a3b339e = () => import('../layouts/web.vue'  /* webpackChunkName: "layouts/web" */).then(m => m.default || m)

const layouts = { "_default": _6f6c098b,"_trend": _78187f67,"_web": _1a3b339e }

let resolvedLayouts = {}

export default {
  head: {"title":"咔哩吧","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"My dandy Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"bodyAttrs":{"id":"calibur"},"style":[],"script":[]},

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
