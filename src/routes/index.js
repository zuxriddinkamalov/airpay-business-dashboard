/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import { CONNECT, CONNECT_URL } from '../constant/routes'
import dashboard from './dashboard'
import crowdsale from './crowdsale'
import deposit from './deposit'
import send from './send'
import verification from './verification'
import help from './help'
import terms from './terms'

export default [
  {
    path: '/',
    component: () => import('@/views/dashboard/Index.vue'),
    meta: {
      auth: true
    },
    children: [
      ...dashboard,
      ...deposit,
      ...send,
      ...verification,
      ...crowdsale,
      ...help,
      ...terms
    ]
  },
  {
    name: CONNECT,
    path: CONNECT_URL,
    component: () => import('@/views/connect/Index.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }
]
