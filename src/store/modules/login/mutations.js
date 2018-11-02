/* ============
 * Mutations for the login module
 * ============
 *
 * The mutations that are available on the
 * login module.
 */

import { SET_LOGIN_STATE } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_LOGIN_STATE] (state, { key, value = null }) {
    state[key] = value
  }
}
