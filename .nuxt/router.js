import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b14948b4 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _2cca0870 = () => interopDefault(import('../pages/app/flow.vue' /* webpackChunkName: "pages/app/flow" */))
const _d25088be = () => interopDefault(import('../pages/app/home.vue' /* webpackChunkName: "pages/app/home" */))
const _7a5e4e7a = () => interopDefault(import('../pages/app/pin.vue' /* webpackChunkName: "pages/app/pin" */))
const _1d977788 = () => interopDefault(import('../pages/create/cosplay.vue' /* webpackChunkName: "pages/create/cosplay" */))
const _48a59587 = () => interopDefault(import('../pages/tag/tree.vue' /* webpackChunkName: "pages/tag/tree" */))
const _30aed12c = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _ca26461e = () => interopDefault(import('../pages/tag/_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))
const _5ce5d46e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
      component: _b14948b4,
      props: false,
      name: "test"
    }, {
      path: "/app/flow",
      component: _2cca0870,
      props: false,
      name: "app-flow"
    }, {
      path: "/app/home",
      component: _d25088be,
      props: false,
      name: "app-home"
    }, {
      path: "/app/pin",
      component: _7a5e4e7a,
      props: false,
      name: "app-pin"
    }, {
      path: "/create/cosplay",
      component: _1d977788,
      props: false,
      name: "create-cosplay"
    }, {
      path: "/tag/tree",
      component: _48a59587,
      props: false,
      name: "tag-tree"
    }, {
      path: "/pin/:slug?",
      component: _30aed12c,
      props: true,
      name: "pin-slug"
    }, {
      path: "/tag/:slug?",
      component: _ca26461e,
      props: true,
      name: "tag-slug"
    }, {
      path: "/",
      component: _5ce5d46e,
      props: false,
      name: "index"
    }],

    fallback: false
  })
}
