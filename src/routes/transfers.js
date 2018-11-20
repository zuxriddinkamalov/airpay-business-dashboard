/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for transaction are defined in this file.
 */
import { TRANSFERS_URL, TRANSFERS, TRANSFER_DETAIL_URL, TRANSFER_DETAIL } from '../constant/routes'

export default [
  {
    name: TRANSFERS,
    path: TRANSFERS_URL,
    component: () => import('@/views/dashboard/views/transfers/Transfers.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    name: TRANSFER_DETAIL,
    path: TRANSFER_DETAIL_URL,
    component: () => import('@/views/dashboard/views/transfers/TransferDetail.vue')
  }
]
