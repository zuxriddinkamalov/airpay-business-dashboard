/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

import { LOGIN, LOGIN_URL } from '../constant/routes'
import dashboard from './dashboard'
import transactions from './transaction'
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
      ...transactions,
      ...distributions,
      ...crowdsales,
      ...tokens,
      ...users,
      ...settings
    ]
  },
  {
    name: LOGIN,
    path: LOGIN_URL,
    component: () => import('@/views/login/Index.vue')
  },
  {
    path: '/*',
    redirect: '/'
  }
]
