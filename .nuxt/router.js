import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _524e4528 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _1116eb59 = () => interopDefault(import('../pages/about/index/managers.vue' /* webpackChunkName: "pages/about/index/managers" */))
const _28d8da88 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _0377315e = () => interopDefault(import('../pages/sign.vue' /* webpackChunkName: "pages/sign" */))
const _5566533e = () => interopDefault(import('../pages/write/index.vue' /* webpackChunkName: "pages/write/index" */))
const _af2bb680 = () => interopDefault(import('../pages/app/admin/index.vue' /* webpackChunkName: "pages/app/admin/index" */))
const _314f18c9 = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _5f4427ab = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _527cab04 = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _b3ad3950 = () => interopDefault(import('../pages/zone/atfield.vue' /* webpackChunkName: "pages/zone/atfield" */))
const _3c5ad14a = () => interopDefault(import('../pages/zone/bangumi.vue' /* webpackChunkName: "pages/zone/bangumi" */))
const _386a6491 = () => interopDefault(import('../pages/zone/game.vue' /* webpackChunkName: "pages/zone/game" */))
const _9a06fbc0 = () => interopDefault(import('../pages/zone/topic.vue' /* webpackChunkName: "pages/zone/topic" */))
const _1f97ee6c = () => interopDefault(import('../pages/app/admin/create-bangumi.vue' /* webpackChunkName: "pages/app/admin/create-bangumi" */))
const _0aa9be57 = () => interopDefault(import('../pages/app/admin/create-idol.vue' /* webpackChunkName: "pages/app/admin/create-idol" */))
const _b03b6df8 = () => interopDefault(import('../pages/app/admin/trial.vue' /* webpackChunkName: "pages/app/admin/trial" */))
const _23354702 = () => interopDefault(import('../pages/app/bangumi/edit.vue' /* webpackChunkName: "pages/app/bangumi/edit" */))
const _702b2622 = () => interopDefault(import('../pages/app/bangumi/join.vue' /* webpackChunkName: "pages/app/bangumi/join" */))
const _3dca6f3e = () => interopDefault(import('../pages/app/bangumi/profile.vue' /* webpackChunkName: "pages/app/bangumi/profile" */))
const _277c4c18 = () => interopDefault(import('../pages/app/bangumi/relation.vue' /* webpackChunkName: "pages/app/bangumi/relation" */))
const _1d8cb218 = () => interopDefault(import('../pages/app/bangumi/rule.vue' /* webpackChunkName: "pages/app/bangumi/rule" */))
const _7f5d998a = () => interopDefault(import('../pages/app/bangumi/test.vue' /* webpackChunkName: "pages/app/bangumi/test" */))
const _f6b91164 = () => interopDefault(import('../pages/app/bangumi/trial.vue' /* webpackChunkName: "pages/app/bangumi/trial" */))
const _22fdeba2 = () => interopDefault(import('../pages/app/idol/edit.vue' /* webpackChunkName: "pages/app/idol/edit" */))
const _35bcc1e7 = () => interopDefault(import('../pages/app/public/news.vue' /* webpackChunkName: "pages/app/public/news" */))
const _1c47a280 = () => interopDefault(import('../pages/app/public/rank.vue' /* webpackChunkName: "pages/app/public/rank" */))
const _101a9190 = () => interopDefault(import('../pages/app/public/rule.vue' /* webpackChunkName: "pages/app/public/rule" */))
const _78d7b3fc = () => interopDefault(import('../pages/app/user/edit.vue' /* webpackChunkName: "pages/app/user/edit" */))
const _698f8c90 = () => interopDefault(import('../pages/app/user/list.vue' /* webpackChunkName: "pages/app/user/list" */))
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

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

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
    path: "/write",
    component: _5566533e,
    props: false,
    name: "write"
  }, {
    path: "/app/admin",
    component: _af2bb680,
    props: false,
    name: "app-admin"
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
    path: "/app/admin/create-bangumi",
    component: _1f97ee6c,
    props: false,
    name: "app-admin-create-bangumi"
  }, {
    path: "/app/admin/create-idol",
    component: _0aa9be57,
    props: false,
    name: "app-admin-create-idol"
  }, {
    path: "/app/admin/trial",
    component: _b03b6df8,
    props: false,
    name: "app-admin-trial"
  }, {
    path: "/app/bangumi/edit",
    component: _23354702,
    props: false,
    name: "app-bangumi-edit"
  }, {
    path: "/app/bangumi/join",
    component: _702b2622,
    props: false,
    name: "app-bangumi-join"
  }, {
    path: "/app/bangumi/profile",
    component: _3dca6f3e,
    props: false,
    name: "app-bangumi-profile"
  }, {
    path: "/app/bangumi/relation",
    component: _277c4c18,
    props: false,
    name: "app-bangumi-relation"
  }, {
    path: "/app/bangumi/rule",
    component: _1d8cb218,
    props: false,
    name: "app-bangumi-rule"
  }, {
    path: "/app/bangumi/test",
    component: _7f5d998a,
    props: false,
    name: "app-bangumi-test"
  }, {
    path: "/app/bangumi/trial",
    component: _f6b91164,
    props: false,
    name: "app-bangumi-trial"
  }, {
    path: "/app/idol/edit",
    component: _22fdeba2,
    props: false,
    name: "app-idol-edit"
  }, {
    path: "/app/public/news",
    component: _35bcc1e7,
    props: false,
    name: "app-public-news"
  }, {
    path: "/app/public/rank",
    component: _1c47a280,
    props: false,
    name: "app-public-rank"
  }, {
    path: "/app/public/rule",
    component: _101a9190,
    props: false,
    name: "app-public-rule"
  }, {
    path: "/app/user/edit",
    component: _78d7b3fc,
    props: false,
    name: "app-user-edit"
  }, {
    path: "/app/user/list",
    component: _698f8c90,
    props: false,
    name: "app-user-list"
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

export function createRouter () {
  return new Router(routerOptions)
}
