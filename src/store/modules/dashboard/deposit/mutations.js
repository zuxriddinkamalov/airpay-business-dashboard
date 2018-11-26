/* ============
 * Mutations for the deposit module
 * ============
 *
 * The mutations that are available on the
 * deposit module.
 */

import { SET_DEPOSIT_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_DEPOSIT_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
