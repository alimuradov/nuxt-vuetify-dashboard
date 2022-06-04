import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1bae1d78 = () => interopDefault(import('../pages/dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _03f592aa = () => interopDefault(import('../pages/Icons.vue' /* webpackChunkName: "pages/Icons" */))
const _215f210e = () => interopDefault(import('../pages/Login.vue' /* webpackChunkName: "pages/Login" */))
const _2731ccb7 = () => interopDefault(import('../pages/Maps.vue' /* webpackChunkName: "pages/Maps" */))
const _84927510 = () => interopDefault(import('../pages/Notifications.vue' /* webpackChunkName: "pages/Notifications" */))
const _c690cf86 = () => interopDefault(import('../pages/table-list.vue' /* webpackChunkName: "pages/table-list" */))
const _3170dfea = () => interopDefault(import('../pages/tpgrade.vue' /* webpackChunkName: "pages/tpgrade" */))
const _a05e6d62 = () => interopDefault(import('../pages/Typography.vue' /* webpackChunkName: "pages/Typography" */))
const _15984fa7 = () => interopDefault(import('../pages/user-profile.vue' /* webpackChunkName: "pages/user-profile" */))
const _a392a6fc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/dashboard",
    component: _1bae1d78,
    name: "dashboard"
  }, {
    path: "/Icons",
    component: _03f592aa,
    name: "Icons"
  }, {
    path: "/Login",
    component: _215f210e,
    name: "Login"
  }, {
    path: "/Maps",
    component: _2731ccb7,
    name: "Maps"
  }, {
    path: "/Notifications",
    component: _84927510,
    name: "Notifications"
  }, {
    path: "/table-list",
    component: _c690cf86,
    name: "table-list"
  }, {
    path: "/tpgrade",
    component: _3170dfea,
    name: "tpgrade"
  }, {
    path: "/Typography",
    component: _a05e6d62,
    name: "Typography"
  }, {
    path: "/user-profile",
    component: _15984fa7,
    name: "user-profile"
  }, {
    path: "/",
    component: _a392a6fc,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
