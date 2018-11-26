/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue'
import { equals } from 'ramda'
import VueRouter from 'vue-router'
import routes from '@/routes'
import store from '@/store'
import { CONNECT, ROOT } from '../constant/routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'side-bar-menu-open',
  scrollBehavior: function (to, from, savedPosition) {
    if (from && to.name === from.name && equals(to.params, from.params)) {
      return
    }
    return savedPosition || { x: 0, y: 0 }
  },
  routes
})
router.beforeEach((to, from, next) => {
  const isSign = store.state.connect.sign
  if (to.matched.some(m => m.meta.auth) && !isSign) {
    /*
     * If the user is not authenticated and visits
     * a page that requires authentication, redirect to the connect page
     */
    return next({
      name: CONNECT
    })
  } else {
    if (to.name === CONNECT && isSign) {
      return next({ name: ROOT })
    }
    return next()
  }
})

Vue.router = router

export default {
  router
}
