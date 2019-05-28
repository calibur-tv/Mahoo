import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b14948b4 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _1d977788 = () => interopDefault(import('../pages/create/cosplay.vue' /* webpackChunkName: "pages/create/cosplay" */))
const _48a59587 = () => interopDefault(import('../pages/tag/tree.vue' /* webpackChunkName: "pages/tag/tree" */))
const _30aed12c = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _75622ab4 = () => interopDefault(import('../pages/tag/_slug/index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _0513205a = () => interopDefault(import('../pages/user/_slug.vue' /* webpackChunkName: "pages/user/_slug" */))
const _1ef87b5d = () => interopDefault(import('../pages/user/_slug/index.vue' /* webpackChunkName: "pages/user/_slug/index" */))
const _2a5f011b = () => interopDefault(import('../pages/user/_slug/setting.vue' /* webpackChunkName: "pages/user/_slug/setting" */))
const _d3605bd0 = () => interopDefault(import('../pages/tag/_slug/edit.vue' /* webpackChunkName: "pages/tag/_slug/edit" */))
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
      component: _75622ab4,
      props: true,
      name: "tag-slug"
    }, {
      path: "/user/:slug?",
      component: _0513205a,
      props: true,
      children: [{
        path: "",
        component: _1ef87b5d,
        props: true,
        name: "user-slug"
      }, {
        path: "setting",
        component: _2a5f011b,
        props: true,
        name: "user-slug-setting"
      }]
    }, {
      path: "/tag/:slug?/edit",
      component: _d3605bd0,
      props: true,
      name: "tag-slug-edit"
    }, {
      path: "/",
      component: _5ce5d46e,
      props: false,
      name: "index"
    }],

    fallback: false
  })
}
