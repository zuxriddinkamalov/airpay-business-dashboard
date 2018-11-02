/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for dashboard are defined in this file.
 */
import {
  ROOT,
  ROOT_URL,
  USER_SETTINGS,
  USER_SETTINGS_URL
} from '../constant/routes'

export default [
  {
    name: ROOT,
    path: ROOT_URL,
    component: () => import('@/views/dashboard/views/dashboard/Dashboard.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    name: USER_SETTINGS,
    path: USER_SETTINGS_URL,
    component: () => import('@/views/dashboard/views/dashboard/UserSettings.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  }
]
