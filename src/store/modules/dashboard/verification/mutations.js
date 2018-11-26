/* ============
 * Mutations for the verification module
 * ============
 *
 * The mutations that are available on the
 * verification module.
 */

import { SET_VERIFICATION_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_VERIFICATION_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
