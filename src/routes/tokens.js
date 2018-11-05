/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for token are defined in this file.
 */

import {
  ADD_TOKEN, ADD_TOKEN_URL,
  TOKEN_DETAIL,
  TOKEN_DETAIL_URL,
  TOKEN_EDIT,
  TOKEN_EDIT_URL,
  TOKENS, TOKENS_URL
} from '../constant/routes'

export default [
  {
    name: TOKENS,
    path: TOKENS_URL,
    component: () => import('@/views/dashboard/views/tokens/Tokens.vue'),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    name: TOKEN_DETAIL,
    path: TOKEN_DETAIL_URL,
    component: () => import('@/views/dashboard/views/tokens/TokenDetail.vue')
  },
  {
    name: TOKEN_EDIT,
    path: TOKEN_EDIT_URL,
    component: () => import('@/views/dashboard/views/tokens/TokenEdit.vue')
  },
  {
    name: ADD_TOKEN,
    path: ADD_TOKEN_URL,
    component: () => import('@/views/dashboard/views/tokens/AddToken.vue')
  }
]
