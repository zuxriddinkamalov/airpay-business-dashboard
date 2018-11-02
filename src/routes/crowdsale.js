/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for crowdsale are defined in this file.
 */
import {
  CROWDSALES,
  CROWDSALES_URL,
  CROWDSALE_DETAIL,
  CROWDSALE_DETAIL_URL } from '../constant/routes'

export default [
  {
    name: CROWDSALES,
    path: CROWDSALES_URL,
    component: () => import('@/views/dashboard/views/crowdsales/Crowdsales.vue')
  },
  {
    name: CROWDSALE_DETAIL,
    path: CROWDSALE_DETAIL_URL,
    component: () => import('@/views/dashboard/views/crowdsales/CrowdsaleDetail.vue')
  }
]
