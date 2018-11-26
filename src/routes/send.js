/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for send are defined in this file.
 */
import * as Routes from '../constant/routes'

export default [
  {
    name: Routes.SEND,
    path: Routes.SEND_URL,
    component: () => import('@/views/dashboard/views/send/Send.vue')
  }
]
