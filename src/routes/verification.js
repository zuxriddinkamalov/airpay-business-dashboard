/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for verification are defined in this file.
 */
import * as Routes from '../constant/routes'

export default [
  {
    name: Routes.VERIFICATION,
    path: Routes.VERIFICATION_URL,
    component: () => import('@/views/dashboard/views/verification/Verification.vue')
  }
]
