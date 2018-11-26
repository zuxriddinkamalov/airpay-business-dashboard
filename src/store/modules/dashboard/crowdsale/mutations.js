/* ============
 * Mutations for the crowdsale module
 * ============
 *
 * The mutations that are available on the
 * crowdsale module.
 */

import { SET_CROWDSALE_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_CROWDSALE_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
