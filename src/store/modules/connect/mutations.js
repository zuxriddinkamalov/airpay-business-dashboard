/* ============
 * Mutations for the connect module
 * ============
 *
 * The mutations that are available on the
 * connect module.
 */

import { SET_CONNECT_STATE } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_CONNECT_STATE] (state, { key, value = null }) {
    state[key] = value
  }
}
