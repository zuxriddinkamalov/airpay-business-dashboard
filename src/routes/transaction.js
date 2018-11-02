/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for transaction are defined in this file.
 */
import { TRANSACTIONS_URL, TRANSACTIONS, TRANSACTION_DETAIL_URL, TRANSACTION_DETAIL } from '../constant/routes'

export default [
  {
    name: TRANSACTIONS,
    path: TRANSACTIONS_URL,
    component: () => import('@/views/dashboard/views/transactions/Transactions.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    name: TRANSACTION_DETAIL,
    path: TRANSACTION_DETAIL_URL,
    component: () => import('@/views/dashboard/views/transactions/TransactionDetail.vue')
  }
]
