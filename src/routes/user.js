/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for user are defined in this file.
 */

import { USERS, USERS_URL } from '../constant/routes'

export default [
  {
    name: USERS,
    path: USERS_URL,
    component: () => import('@/views/dashboard/views/users/Users.vue')
  }
]
