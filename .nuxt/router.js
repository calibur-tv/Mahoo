import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _037a8180 = () => interopDefault(import('../pages/homepage.vue' /* webpackChunkName: "pages/homepage" */))
const _a4c9c662 = () => interopDefault(import('../pages/sign.vue' /* webpackChunkName: "pages/sign" */))
const _5fc3f5a2 = () => interopDefault(import('../pages/wanderer/index.vue' /* webpackChunkName: "pages/wanderer/index" */))
const _52e2f78b = () => interopDefault(import('../pages/callback/auth-error.vue' /* webpackChunkName: "pages/callback/auth-error" */))
const _53d88cae = () => interopDefault(import('../pages/callback/auth-redirect.vue' /* webpackChunkName: "pages/callback/auth-redirect" */))
const _5e93e146 = () => interopDefault(import('../pages/callback/auth-success.vue' /* webpackChunkName: "pages/callback/auth-success" */))
const _8ad65850 = () => interopDefault(import('../pages/wanderer/cosplay.vue' /* webpackChunkName: "pages/wanderer/cosplay" */))
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

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/homepage",
      component: _037a8180,
      props: false,
      name: "homepage"
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
      path: "/wanderer/cosplay",
      component: _8ad65850,
      props: false,
      name: "wanderer-cosplay"
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
  })
}
