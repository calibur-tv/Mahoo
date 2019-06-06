import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _2d669611 = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _01f9faa9 = () => interopDefault(import('../pages/create/index/atfield.vue' /* webpackChunkName: "pages/create/index/atfield" */))
const _25a4453d = () => interopDefault(import('../pages/create/index/cosplay.vue' /* webpackChunkName: "pages/create/index/cosplay" */))
const _5ebf01c0 = () => interopDefault(import('../pages/create/index/simple.vue' /* webpackChunkName: "pages/create/index/simple" */))
const _52e2f78b = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _53d88cae = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _5e93e146 = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _5a895c05 = () => interopDefault(import('../pages/tag/tree.vue' /* webpackChunkName: "pages/tag/tree" */))
const _5b43da6e = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _57a7ba76 = () => interopDefault(import('../pages/tag/_slug/index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _2d1f3f58 = () => interopDefault(import('../pages/user/_slug.vue' /* webpackChunkName: "pages/user/_slug" */))
const _f536384a = () => interopDefault(import('../pages/user/_slug/index.vue' /* webpackChunkName: "pages/user/_slug/index" */))
const _41de56a4 = () => interopDefault(import('../pages/user/_slug/emotion.vue' /* webpackChunkName: "pages/user/_slug/emotion" */))
const _7a918050 = () => interopDefault(import('../pages/user/_slug/message.vue' /* webpackChunkName: "pages/user/_slug/message" */))
const _9cb0ebc2 = () => interopDefault(import('../pages/user/_slug/notice.vue' /* webpackChunkName: "pages/user/_slug/notice" */))
const _b1597bce = () => interopDefault(import('../pages/user/_slug/setting.vue' /* webpackChunkName: "pages/user/_slug/setting" */))
const _e5cf7bd4 = () => interopDefault(import('../pages/tag/_slug/edit.vue' /* webpackChunkName: "pages/tag/_slug/edit" */))
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
      path: "/create",
      component: _2d669611,
      props: false,
      name: "create",
      children: [{
        path: "atfield",
        component: _01f9faa9,
        props: false,
        name: "create-index-atfield"
      }, {
        path: "cosplay",
        component: _25a4453d,
        props: false,
        name: "create-index-cosplay"
      }, {
        path: "simple",
        component: _5ebf01c0,
        props: false,
        name: "create-index-simple"
      }]
    }, {
      path: "/callback/auth-error",
      component: _52e2f78b,
      props: false,
      name: "callback-auth-error"
    }, {
      path: "/callback/auth-redirect",
      component: _53d88cae,
      props: false,
      name: "callback-auth-redirect"
    }, {
      path: "/callback/auth-success",
      component: _5e93e146,
      props: false,
      name: "callback-auth-success"
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
      component: _57a7ba76,
      props: true,
      name: "tag-slug"
    }, {
      path: "/user/:slug?",
      component: _2d1f3f58,
      props: true,
      children: [{
        path: "",
        component: _f536384a,
        props: true,
        name: "user-slug"
      }, {
        path: "emotion",
        component: _41de56a4,
        props: true,
        name: "user-slug-emotion"
      }, {
        path: "message",
        component: _7a918050,
        props: true,
        name: "user-slug-message"
      }, {
        path: "notice",
        component: _9cb0ebc2,
        props: true,
        name: "user-slug-notice"
      }, {
        path: "setting",
        component: _b1597bce,
        props: true,
        name: "user-slug-setting"
      }]
    }, {
      path: "/tag/:slug?/edit",
      component: _e5cf7bd4,
      props: true,
      name: "tag-slug-edit"
    }, {
      path: "/",
      component: _cf3462a0,
      props: false,
      name: "index"
    }],

    fallback: false
  })
}
