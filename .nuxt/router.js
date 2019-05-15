import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _56b21124 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _3eadceee = () => interopDefault(import('../pages/app/flow.vue' /* webpackChunkName: "pages/app/flow" */))
const _ae88fbc2 = () => interopDefault(import('../pages/app/home.vue' /* webpackChunkName: "pages/app/home" */))
const _1e3b4a85 = () => interopDefault(import('../pages/app/pin.vue' /* webpackChunkName: "pages/app/pin" */))
const _3006978c = () => interopDefault(import('../pages/create/cosplay.vue' /* webpackChunkName: "pages/create/cosplay" */))
const _5a895c05 = () => interopDefault(import('../pages/tag/tree.vue' /* webpackChunkName: "pages/tag/tree" */))
const _5b43da6e = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _74fc339a = () => interopDefault(import('../pages/tag/_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))
const _cf3462a0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

const scrollBehavior = function (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      let position = { x: 0, y: 0 }
      if (to.hash) {
        position = { selector: to.hash }
      }
      return position
    }

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/test",
      component: _56b21124,
      props: false,
      name: "test"
    }, {
      path: "/app/flow",
      component: _3eadceee,
      props: false,
      name: "app-flow"
    }, {
      path: "/app/home",
      component: _ae88fbc2,
      props: false,
      name: "app-home"
    }, {
      path: "/app/pin",
      component: _1e3b4a85,
      props: false,
      name: "app-pin"
    }, {
      path: "/create/cosplay",
      component: _3006978c,
      props: false,
      name: "create-cosplay"
    }, {
      path: "/tag/tree",
      component: _5a895c05,
      props: false,
      name: "tag-tree"
    }, {
      path: "/pin/:slug?",
      component: _5b43da6e,
      props: true,
      name: "pin-slug"
    }, {
      path: "/tag/:slug?",
      component: _74fc339a,
      props: true,
      name: "tag-slug"
    }, {
      path: "/",
      component: _cf3462a0,
      props: false,
      name: "index"
    }],

    fallback: false
  })
}
