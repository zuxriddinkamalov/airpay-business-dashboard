/* ============
 * Mutations for the users module
 * ============
 *
 * The mutations that are available on the
 * users module.
 */

import { SET_USERS_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_USERS_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
