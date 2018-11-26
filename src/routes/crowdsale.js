/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for crowdsale are defined in this file.
 */
import * as Routes from '../constant/routes'

export default [
  {
    name: Routes.CROWDSALE,
    path: Routes.CROWDSALE_URL,
    component: () => import('@/views/dashboard/views/crowdsale/Crowdsale.vue')
  },
  {
    name: Routes.TRANSACTIONS,
    path: Routes.TRANSACTIONS_URL,
    component: () => import('@/views/dashboard/views/crowdsale/Transactions.vue')
  },
  {
    name: Routes.INTERACTIONS,
    path: Routes.INTERACTIONS_URL,
    component: () => import('@/views/dashboard/views/crowdsale/Interactions.vue')
  }
]
