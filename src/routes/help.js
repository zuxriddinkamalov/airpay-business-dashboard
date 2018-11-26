/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for help are defined in this file.
 */
import * as Routes from '../constant/routes'

export default [
  {
    name: Routes.HELP,
    path: Routes.HELP_URL,
    component: () => import('@/views/dashboard/views/help/Help.vue')
  },
  {
    name: Routes.WHAT_IS_GAS,
    path: Routes.WHAT_IS_GAS_URL,
    component: () => import('@/views/dashboard/views/help/WhatIsGas.vue')
  },
  {
    name: Routes.HOW_TO_BUY,
    path: Routes.HOW_TO_BUY_URL,
    component: () => import('@/views/dashboard/views/help/HowToBuy.vue')
  },
  {
    name: Routes.HOW_TO_CLAIM,
    path: Routes.HOW_TO_CLAIM_URL,
    component: () => import('@/views/dashboard/views/help/HowToClaim.vue')
  }
]
