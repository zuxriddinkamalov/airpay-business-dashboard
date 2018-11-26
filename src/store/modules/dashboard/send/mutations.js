/* ============
 * Mutations for the send module
 * ============
 *
 * The mutations that are available on the
 * send module.
 */

import { SET_SEND_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_SEND_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
