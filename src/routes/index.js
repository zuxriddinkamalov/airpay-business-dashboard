/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import { CONNECT, CONNECT_URL } from '../constant/routes'
import dashboard from './dashboard'
import transfers from './transfers'
import distributions from './distribution'
import crowdsales from './crowdsale'
import tokens from './tokens'
import users from './user'
import settings from './settings'

export default [
  {
    path: '/',
    component: () => import('@/views/dashboard/Index.vue'),
    meta: {
      auth: true
    },
    children: [
      ...dashboard,
      ...transfers,
      ...distributions,
      ...crowdsales,
      ...tokens,
      ...users,
      ...settings
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
