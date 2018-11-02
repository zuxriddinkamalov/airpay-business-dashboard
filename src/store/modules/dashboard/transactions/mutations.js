/* ============
 * Mutations for the transactions module
 * ============
 *
 * The mutations that are available on the
 * transactions module.
 */

import { SET_TRANSACTION_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_TRANSACTION_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
