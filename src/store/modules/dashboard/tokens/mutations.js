/* ============
 * Mutations for the tokens module
 * ============
 *
 * The mutations that are available on the
 * tokens module.
 */

import { SET_TOKEN_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_TOKEN_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
