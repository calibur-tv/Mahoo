import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _524e4528 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _1116eb59 = () => interopDefault(import('../pages/about/index/managers.vue' /* webpackChunkName: "pages/about/index/managers" */))
const _28d8da88 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _0377315e = () => interopDefault(import('../pages/sign.vue' /* webpackChunkName: "pages/sign" */))
const _4d54d59e = () => interopDefault(import('../pages/wanderer/index.vue' /* webpackChunkName: "pages/wanderer/index" */))
const _314f18c9 = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _5f4427ab = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _527cab04 = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _b3ad3950 = () => interopDefault(import('../pages/zone/atfield.vue' /* webpackChunkName: "pages/zone/atfield" */))
const _3c5ad14a = () => interopDefault(import('../pages/zone/bangumi.vue' /* webpackChunkName: "pages/zone/bangumi" */))
const _386a6491 = () => interopDefault(import('../pages/zone/game.vue' /* webpackChunkName: "pages/zone/game" */))
const _9a06fbc0 = () => interopDefault(import('../pages/zone/topic.vue' /* webpackChunkName: "pages/zone/topic" */))
const _30aed12c = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _75622ab4 = () => interopDefault(import('../pages/tag/_slug/index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _0513205a = () => interopDefault(import('../pages/user/_slug.vue' /* webpackChunkName: "pages/user/_slug" */))
const _3bf0ccac = () => interopDefault(import('../pages/user/_slug/draft.vue' /* webpackChunkName: "pages/user/_slug/draft" */))
const _315d47a9 = () => interopDefault(import('../pages/user/_slug/emotion/index.vue' /* webpackChunkName: "pages/user/_slug/emotion/index" */))
const _04c5815c = () => interopDefault(import('../pages/user/_slug/message.vue' /* webpackChunkName: "pages/user/_slug/message" */))
const _2a5f011b = () => interopDefault(import('../pages/user/_slug/setting.vue' /* webpackChunkName: "pages/user/_slug/setting" */))
const _356f075e = () => interopDefault(import('../pages/user/_slug/setting/index.vue' /* webpackChunkName: "pages/user/_slug/setting/index" */))
const _0049a4ba = () => interopDefault(import('../pages/user/_slug/setting/basic.vue' /* webpackChunkName: "pages/user/_slug/setting/basic" */))
const _e22709c2 = () => interopDefault(import('../pages/user/_slug/setting/oauth2.vue' /* webpackChunkName: "pages/user/_slug/setting/oauth2" */))
const _26fb10f2 = () => interopDefault(import('../pages/user/_slug/social.vue' /* webpackChunkName: "pages/user/_slug/social" */))
const _37df99f5 = () => interopDefault(import('../pages/user/_slug/social/index.vue' /* webpackChunkName: "pages/user/_slug/social/index" */))
const _1c793e38 = () => interopDefault(import('../pages/user/_slug/social/followers.vue' /* webpackChunkName: "pages/user/_slug/social/followers" */))
const _2ed4a298 = () => interopDefault(import('../pages/user/_slug/social/following.vue' /* webpackChunkName: "pages/user/_slug/social/following" */))
const _010bea78 = () => interopDefault(import('../pages/user/_slug/social/friends.vue' /* webpackChunkName: "pages/user/_slug/social/friends" */))
const _5cbd9c86 = () => interopDefault(import('../pages/user/_slug/timeline.vue' /* webpackChunkName: "pages/user/_slug/timeline" */))
const _c295c212 = () => interopDefault(import('../pages/user/_slug/emotion/category.vue' /* webpackChunkName: "pages/user/_slug/emotion/category" */))
const _6bedab81 = () => interopDefault(import('../pages/user/_slug/emotion/category/bangumi.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/bangumi" */))
const _dea4e48c = () => interopDefault(import('../pages/user/_slug/emotion/category/game.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/game" */))
const _3549a1ba = () => interopDefault(import('../pages/user/_slug/emotion/category/notebook.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/notebook" */))
const _631e7e17 = () => interopDefault(import('../pages/user/_slug/emotion/category/topic.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/topic" */))
const _08893cee = () => interopDefault(import('../pages/tag/_slug/atfield.vue' /* webpackChunkName: "pages/tag/_slug/atfield" */))
const _d3605bd0 = () => interopDefault(import('../pages/tag/_slug/edit.vue' /* webpackChunkName: "pages/tag/_slug/edit" */))
const _059fb6c4 = () => interopDefault(import('../pages/tag/_slug/qa.vue' /* webpackChunkName: "pages/tag/_slug/qa" */))
const _5ce5d46e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _524e4528,
      props: false,
      name: "about",
      children: [{
        path: "managers",
        component: _1116eb59,
        props: false,
        name: "about-index-managers"
      }]
    }, {
      path: "/search",
      component: _28d8da88,
      props: false,
      name: "search"
    }, {
      path: "/sign",
      component: _0377315e,
      props: false,
      name: "sign"
    }, {
      path: "/wanderer",
      component: _4d54d59e,
      props: false,
      name: "wanderer"
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
      path: "/zone/atfield",
      component: _b3ad3950,
      props: false,
      name: "zone-atfield"
    }, {
      path: "/zone/bangumi",
      component: _3c5ad14a,
      props: false,
      name: "zone-bangumi"
    }, {
      path: "/zone/game",
      component: _386a6491,
      props: false,
      name: "zone-game"
    }, {
      path: "/zone/topic",
      component: _9a06fbc0,
      props: false,
      name: "zone-topic"
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
      name: "user-slug",
      children: [{
        path: "draft",
        component: _3bf0ccac,
        props: true,
        name: "user-slug-draft"
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
        component: _5cbd9c86,
        props: true,
        name: "user-slug-timeline"
      }, {
        path: "emotion/category",
        component: _c295c212,
        props: true,
        name: "user-slug-emotion-category",
        children: [{
          path: "bangumi",
          component: _6bedab81,
          name: "user-slug-emotion-category-bangumi"
        }, {
          path: "game",
          component: _dea4e48c,
          name: "user-slug-emotion-category-game"
        }, {
          path: "notebook",
          component: _3549a1ba,
          name: "user-slug-emotion-category-notebook"
        }, {
          path: "topic",
          component: _631e7e17,
          name: "user-slug-emotion-category-topic"
        }]
      }]
    }, {
      path: "/tag/:slug?/atfield",
      component: _08893cee,
      props: true,
      name: "tag-slug-atfield"
    }, {
      path: "/tag/:slug?/edit",
      component: _d3605bd0,
      props: true,
      name: "tag-slug-edit"
    }, {
      path: "/tag/:slug?/qa",
      component: _059fb6c4,
      props: true,
      name: "tag-slug-qa"
    }, {
      path: "/",
      component: _5ce5d46e,
      props: false,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
