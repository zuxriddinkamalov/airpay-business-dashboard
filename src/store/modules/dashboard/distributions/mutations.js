/* ============
 * Mutations for the distributions module
 * ============
 *
 * The mutations that are available on the
 * distributions module.
 */

import { SET_DISTRIBUTION_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_DISTRIBUTION_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
