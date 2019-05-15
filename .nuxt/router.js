import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b14948b4 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _69ec1df5 = () => interopDefault(import('../pages/app/launch.vue' /* webpackChunkName: "pages/app/launch" */))
const _11c598b8 = () => interopDefault(import('../pages/app/launch/index.vue' /* webpackChunkName: "pages/app/launch/index" */))
const _4ea1c906 = () => interopDefault(import('../pages/app/launch/create.vue' /* webpackChunkName: "pages/app/launch/create" */))
const _77e6b02e = () => interopDefault(import('../pages/app/launch/home.vue' /* webpackChunkName: "pages/app/launch/home" */))
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
      path: "/app/launch",
      component: _69ec1df5,
      props: false,
      children: [{
        path: "",
        component: _11c598b8,
        props: false,
        name: "app-launch"
      }, {
        path: "create",
        component: _4ea1c906,
        props: false,
        name: "app-launch-create"
      }, {
        path: "home",
        component: _77e6b02e,
        props: false,
        name: "app-launch-home"
      }]
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
