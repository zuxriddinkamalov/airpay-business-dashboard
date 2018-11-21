/* ============
 * Mutations for the transfers module
 * ============
 *
 * The mutations that are available on the
 * transfers module.
 */

import { SET_TRANSFER_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_TRANSFER_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
