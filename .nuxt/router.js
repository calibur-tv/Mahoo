import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _503382da = () => interopDefault(import('../pages/create/index.vue' /* webpackChunkName: "pages/create/index" */))
const _1ddbfdaa = () => interopDefault(import('../pages/create/index/atfield.vue' /* webpackChunkName: "pages/create/index/atfield" */))
const _14bc4bbf = () => interopDefault(import('../pages/create/index/cosplay.vue' /* webpackChunkName: "pages/create/index/cosplay" */))
const _a1e6bf44 = () => interopDefault(import('../pages/create/index/simple.vue' /* webpackChunkName: "pages/create/index/simple" */))
const _314f18c9 = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _5f4427ab = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _527cab04 = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _48a59587 = () => interopDefault(import('../pages/tag/tree.vue' /* webpackChunkName: "pages/tag/tree" */))
const _30aed12c = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _75622ab4 = () => interopDefault(import('../pages/tag/_slug/index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _0513205a = () => interopDefault(import('../pages/user/_slug.vue' /* webpackChunkName: "pages/user/_slug" */))
const _1ef87b5d = () => interopDefault(import('../pages/user/_slug/index.vue' /* webpackChunkName: "pages/user/_slug/index" */))
const _315d47a9 = () => interopDefault(import('../pages/user/_slug/emotion/index.vue' /* webpackChunkName: "pages/user/_slug/emotion/index" */))
const _04c5815c = () => interopDefault(import('../pages/user/_slug/message.vue' /* webpackChunkName: "pages/user/_slug/message" */))
const _4a86e2dd = () => interopDefault(import('../pages/user/_slug/notice.vue' /* webpackChunkName: "pages/user/_slug/notice" */))
const _6639e0c0 = () => interopDefault(import('../pages/user/_slug/notice/index.vue' /* webpackChunkName: "pages/user/_slug/notice/index" */))
const _3663050f = () => interopDefault(import('../pages/user/_slug/notice/social.vue' /* webpackChunkName: "pages/user/_slug/notice/social" */))
const _682fa25e = () => interopDefault(import('../pages/user/_slug/notice/system.vue' /* webpackChunkName: "pages/user/_slug/notice/system" */))
const _2a5f011b = () => interopDefault(import('../pages/user/_slug/setting.vue' /* webpackChunkName: "pages/user/_slug/setting" */))
const _356f075e = () => interopDefault(import('../pages/user/_slug/setting/index.vue' /* webpackChunkName: "pages/user/_slug/setting/index" */))
const _0049a4ba = () => interopDefault(import('../pages/user/_slug/setting/basic.vue' /* webpackChunkName: "pages/user/_slug/setting/basic" */))
const _e22709c2 = () => interopDefault(import('../pages/user/_slug/setting/oauth2.vue' /* webpackChunkName: "pages/user/_slug/setting/oauth2" */))
const _26fb10f2 = () => interopDefault(import('../pages/user/_slug/social.vue' /* webpackChunkName: "pages/user/_slug/social" */))
const _37df99f5 = () => interopDefault(import('../pages/user/_slug/social/index.vue' /* webpackChunkName: "pages/user/_slug/social/index" */))
const _1c793e38 = () => interopDefault(import('../pages/user/_slug/social/followers.vue' /* webpackChunkName: "pages/user/_slug/social/followers" */))
const _2ed4a298 = () => interopDefault(import('../pages/user/_slug/social/following.vue' /* webpackChunkName: "pages/user/_slug/social/following" */))
const _010bea78 = () => interopDefault(import('../pages/user/_slug/social/friends.vue' /* webpackChunkName: "pages/user/_slug/social/friends" */))
const _2b682689 = () => interopDefault(import('../pages/user/_slug/timeline/index.vue' /* webpackChunkName: "pages/user/_slug/timeline/index" */))
const _3b948330 = () => interopDefault(import('../pages/user/_slug/emotion/bangumi.vue' /* webpackChunkName: "pages/user/_slug/emotion/bangumi" */))
const _1dc26c6b = () => interopDefault(import('../pages/user/_slug/emotion/game.vue' /* webpackChunkName: "pages/user/_slug/emotion/game" */))
const _78a57586 = () => interopDefault(import('../pages/user/_slug/emotion/topic.vue' /* webpackChunkName: "pages/user/_slug/emotion/topic" */))
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
      path: "/create",
      component: _503382da,
      props: false,
      name: "create",
      children: [{
        path: "atfield",
        component: _1ddbfdaa,
        props: false,
        name: "create-index-atfield"
      }, {
        path: "cosplay",
        component: _14bc4bbf,
        props: false,
        name: "create-index-cosplay"
      }, {
        path: "simple",
        component: _a1e6bf44,
        props: false,
        name: "create-index-simple"
      }]
    }, {
      path: "/callback/auth-error",
      component: _314f18c9,
      props: false,
      name: "callback-auth-error"
    }, {
      path: "/callback/auth-redirect",
      component: _5f4427ab,
      props: false,
      name: "callback-auth-redirect"
    }, {
      path: "/callback/auth-success",
      component: _527cab04,
      props: false,
      name: "callback-auth-success"
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
        path: "emotion",
        component: _315d47a9,
        props: true,
        name: "user-slug-emotion"
      }, {
        path: "message",
        component: _04c5815c,
        props: true,
        name: "user-slug-message"
      }, {
        path: "notice",
        component: _4a86e2dd,
        props: true,
        children: [{
          path: "",
          component: _6639e0c0,
          name: "user-slug-notice"
        }, {
          path: "social",
          component: _3663050f,
          name: "user-slug-notice-social"
        }, {
          path: "system",
          component: _682fa25e,
          name: "user-slug-notice-system"
        }]
      }, {
        path: "setting",
        component: _2a5f011b,
        props: true,
        children: [{
          path: "",
          component: _356f075e,
          name: "user-slug-setting"
        }, {
          path: "basic",
          component: _0049a4ba,
          name: "user-slug-setting-basic"
        }, {
          path: "oauth2",
          component: _e22709c2,
          name: "user-slug-setting-oauth2"
        }]
      }, {
        path: "social",
        component: _26fb10f2,
        props: true,
        children: [{
          path: "",
          component: _37df99f5,
          name: "user-slug-social"
        }, {
          path: "followers",
          component: _1c793e38,
          name: "user-slug-social-followers"
        }, {
          path: "following",
          component: _2ed4a298,
          name: "user-slug-social-following"
        }, {
          path: "friends",
          component: _010bea78,
          name: "user-slug-social-friends"
        }]
      }, {
        path: "timeline",
        component: _2b682689,
        props: true,
        name: "user-slug-timeline"
      }, {
        path: "emotion/bangumi",
        component: _3b948330,
        props: true,
        name: "user-slug-emotion-bangumi"
      }, {
        path: "emotion/game",
        component: _1dc26c6b,
        props: true,
        name: "user-slug-emotion-game"
      }, {
        path: "emotion/topic",
        component: _78a57586,
        props: true,
        name: "user-slug-emotion-topic"
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
