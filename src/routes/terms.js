/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for terms are defined in this file.
 */
import * as Routes from '../constant/routes'

export default [
  {
    name: Routes.TERMS,
    path: Routes.TERMS_URL,
    component: () => import('@/views/dashboard/views/terms/Terms.vue')
  }
]
