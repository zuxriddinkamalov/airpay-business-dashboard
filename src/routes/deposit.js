/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for deposit are defined in this file.
 */
import * as Routes from '../constant/routes'

export default [
  {
    name: Routes.DEPOSIT,
    path: Routes.DEPOSIT_URL,
    component: () => import('@/views/dashboard/views/deposit/Deposit.vue')
  }
]
