/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for transaction are defined in this file.
 */
import {
  DISTRIBUTIONS,
  DISTRIBUTIONS_URL,
  DISTRIBUTION_DETAIL,
  DISTRIBUTION_DETAIL_URL
} from '../constant/routes'

export default [
  {
    name: DISTRIBUTIONS,
    path: DISTRIBUTIONS_URL,
    component: () => import('@/views/dashboard/views/distributions/Distributions.vue')
  },
  {
    name: DISTRIBUTION_DETAIL,
    path: DISTRIBUTION_DETAIL_URL,
    component: () => import('@/views/dashboard/views/distributions/DistributionDetail.vue')
  }
]
