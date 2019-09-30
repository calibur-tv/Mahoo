import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9f5ec3a4 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _21fee4d7 = () => interopDefault(import('../pages/about/index/managers.vue' /* webpackChunkName: "pages/about/index/managers" */))
const _2012e0ba = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _a4c9c662 = () => interopDefault(import('../pages/sign.vue' /* webpackChunkName: "pages/sign" */))
const _5fc3f5a2 = () => interopDefault(import('../pages/wanderer/index.vue' /* webpackChunkName: "pages/wanderer/index" */))
const _0ad0cebe = () => interopDefault(import('../pages/app/category.vue' /* webpackChunkName: "pages/app/category" */))
const _00dcc81c = () => interopDefault(import('../pages/app/found.vue' /* webpackChunkName: "pages/app/found" */))
const _ae88fbc2 = () => interopDefault(import('../pages/app/home.vue' /* webpackChunkName: "pages/app/home" */))
const _25be9598 = () => interopDefault(import('../pages/app/notice.vue' /* webpackChunkName: "pages/app/notice" */))
const _470d7c68 = () => interopDefault(import('../pages/app/search.vue' /* webpackChunkName: "pages/app/search" */))
const _4f766806 = () => interopDefault(import('../pages/app/sign.vue' /* webpackChunkName: "pages/app/sign" */))
const _c17e3462 = () => interopDefault(import('../pages/app/write.vue' /* webpackChunkName: "pages/app/write" */))
const _52e2f78b = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _53d88cae = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _5e93e146 = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _08ac8a54 = () => interopDefault(import('../pages/zone/atfield.vue' /* webpackChunkName: "pages/zone/atfield" */))
const _dc49ae70 = () => interopDefault(import('../pages/zone/bangumi.vue' /* webpackChunkName: "pages/zone/bangumi" */))
const _62ff6dd3 = () => interopDefault(import('../pages/zone/game.vue' /* webpackChunkName: "pages/zone/game" */))
const _49eebdc4 = () => interopDefault(import('../pages/zone/topic.vue' /* webpackChunkName: "pages/zone/topic" */))
const _5b43da6e = () => interopDefault(import('../pages/pin/_slug.vue' /* webpackChunkName: "pages/pin/_slug" */))
const _57a7ba76 = () => interopDefault(import('../pages/tag/_slug/index.vue' /* webpackChunkName: "pages/tag/_slug/index" */))
const _2d1f3f58 = () => interopDefault(import('../pages/user/_slug.vue' /* webpackChunkName: "pages/user/_slug" */))
const _bb4595ac = () => interopDefault(import('../pages/user/_slug/draft.vue' /* webpackChunkName: "pages/user/_slug/draft" */))
const _32905227 = () => interopDefault(import('../pages/user/_slug/emotion/index.vue' /* webpackChunkName: "pages/user/_slug/emotion/index" */))
const _7a918050 = () => interopDefault(import('../pages/user/_slug/message.vue' /* webpackChunkName: "pages/user/_slug/message" */))
const _b1597bce = () => interopDefault(import('../pages/user/_slug/setting.vue' /* webpackChunkName: "pages/user/_slug/setting" */))
const _36a211dc = () => interopDefault(import('../pages/user/_slug/setting/index.vue' /* webpackChunkName: "pages/user/_slug/setting/index" */))
const _017caf38 = () => interopDefault(import('../pages/user/_slug/setting/basic.vue' /* webpackChunkName: "pages/user/_slug/setting/basic" */))
const _97ca7f3e = () => interopDefault(import('../pages/user/_slug/setting/oauth2.vue' /* webpackChunkName: "pages/user/_slug/setting/oauth2" */))
const _e3c88f98 = () => interopDefault(import('../pages/user/_slug/social.vue' /* webpackChunkName: "pages/user/_slug/social" */))
const _c9fb7092 = () => interopDefault(import('../pages/user/_slug/social/index.vue' /* webpackChunkName: "pages/user/_slug/social/index" */))
const _a1a98a0c = () => interopDefault(import('../pages/user/_slug/social/followers.vue' /* webpackChunkName: "pages/user/_slug/social/followers" */))
const _7b47ab76 = () => interopDefault(import('../pages/user/_slug/social/following.vue' /* webpackChunkName: "pages/user/_slug/social/following" */))
const _263a2fba = () => interopDefault(import('../pages/user/_slug/social/friends.vue' /* webpackChunkName: "pages/user/_slug/social/friends" */))
const _7e517b48 = () => interopDefault(import('../pages/user/_slug/timeline.vue' /* webpackChunkName: "pages/user/_slug/timeline" */))
const _31671bb9 = () => interopDefault(import('../pages/user/_slug/emotion/category.vue' /* webpackChunkName: "pages/user/_slug/emotion/category" */))
const _76bfc643 = () => interopDefault(import('../pages/user/_slug/emotion/category/bangumi.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/bangumi" */))
const _54e53a38 = () => interopDefault(import('../pages/user/_slug/emotion/category/game.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/game" */))
const _34cc6ca1 = () => interopDefault(import('../pages/user/_slug/emotion/category/notebook.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/notebook" */))
const _25dc6159 = () => interopDefault(import('../pages/user/_slug/emotion/category/topic.vue' /* webpackChunkName: "pages/user/_slug/emotion/category/topic" */))
const _62dc08cb = () => interopDefault(import('../pages/tag/_slug/atfield.vue' /* webpackChunkName: "pages/tag/_slug/atfield" */))
const _e5cf7bd4 = () => interopDefault(import('../pages/tag/_slug/edit.vue' /* webpackChunkName: "pages/tag/_slug/edit" */))
const _52b07c1c = () => interopDefault(import('../pages/tag/_slug/qa.vue' /* webpackChunkName: "pages/tag/_slug/qa" */))
const _cf3462a0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _9f5ec3a4,
      props: false,
      name: "about",
      children: [{
        path: "managers",
        component: _21fee4d7,
        props: false,
        name: "about-index-managers"
      }]
    }, {
      path: "/search",
      component: _2012e0ba,
      props: false,
      name: "search"
    }, {
      path: "/sign",
      component: _a4c9c662,
      props: false,
      name: "sign"
    }, {
      path: "/wanderer",
      component: _5fc3f5a2,
      props: false,
      name: "wanderer"
    }, {
      path: "/app/category",
      component: _0ad0cebe,
      props: false,
      name: "app-category"
    }, {
      path: "/app/found",
      component: _00dcc81c,
      props: false,
      name: "app-found"
    }, {
      path: "/app/home",
      component: _ae88fbc2,
      props: false,
      name: "app-home"
    }, {
      path: "/app/notice",
      component: _25be9598,
      props: false,
      name: "app-notice"
    }, {
      path: "/app/search",
      component: _470d7c68,
      props: false,
      name: "app-search"
    }, {
      path: "/app/sign",
      component: _4f766806,
      props: false,
      name: "app-sign"
    }, {
      path: "/app/write",
      component: _c17e3462,
      props: false,
      name: "app-write"
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
      path: "/zone/atfield",
      component: _08ac8a54,
      props: false,
      name: "zone-atfield"
    }, {
      path: "/zone/bangumi",
      component: _dc49ae70,
      props: false,
      name: "zone-bangumi"
    }, {
      path: "/zone/game",
      component: _62ff6dd3,
      props: false,
      name: "zone-game"
    }, {
      path: "/zone/topic",
      component: _49eebdc4,
      props: false,
      name: "zone-topic"
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
      name: "user-slug",
      children: [{
        path: "draft",
        component: _bb4595ac,
        props: true,
        name: "user-slug-draft"
      }, {
        path: "emotion",
        component: _32905227,
        props: true,
        name: "user-slug-emotion"
      }, {
        path: "message",
        component: _7a918050,
        props: true,
        name: "user-slug-message"
      }, {
        path: "setting",
        component: _b1597bce,
        props: true,
        children: [{
          path: "",
          component: _36a211dc,
          name: "user-slug-setting"
        }, {
          path: "basic",
          component: _017caf38,
          name: "user-slug-setting-basic"
        }, {
          path: "oauth2",
          component: _97ca7f3e,
          name: "user-slug-setting-oauth2"
        }]
      }, {
        path: "social",
        component: _e3c88f98,
        props: true,
        children: [{
          path: "",
          component: _c9fb7092,
          name: "user-slug-social"
        }, {
          path: "followers",
          component: _a1a98a0c,
          name: "user-slug-social-followers"
        }, {
          path: "following",
          component: _7b47ab76,
          name: "user-slug-social-following"
        }, {
          path: "friends",
          component: _263a2fba,
          name: "user-slug-social-friends"
        }]
      }, {
        path: "timeline",
        component: _7e517b48,
        props: true,
        name: "user-slug-timeline"
      }, {
        path: "emotion/category",
        component: _31671bb9,
        props: true,
        name: "user-slug-emotion-category",
        children: [{
          path: "bangumi",
          component: _76bfc643,
          name: "user-slug-emotion-category-bangumi"
        }, {
          path: "game",
          component: _54e53a38,
          name: "user-slug-emotion-category-game"
        }, {
          path: "notebook",
          component: _34cc6ca1,
          name: "user-slug-emotion-category-notebook"
        }, {
          path: "topic",
          component: _25dc6159,
          name: "user-slug-emotion-category-topic"
        }]
      }]
    }, {
      path: "/tag/:slug?/atfield",
      component: _62dc08cb,
      props: true,
      name: "tag-slug-atfield"
    }, {
      path: "/tag/:slug?/edit",
      component: _e5cf7bd4,
      props: true,
      name: "tag-slug-edit"
    }, {
      path: "/tag/:slug?/qa",
      component: _52b07c1c,
      props: true,
      name: "tag-slug-qa"
    }, {
      path: "/",
      component: _cf3462a0,
      props: false,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
