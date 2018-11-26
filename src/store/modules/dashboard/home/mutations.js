/* ============
 * Mutations for the home module
 * ============
 *
 * The mutations that are available on the
 * home module.
 */

import { SET_HOME_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_HOME_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
