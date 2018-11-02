/* ============
 * Mutations for the dashboard module
 * ============
 *
 * The mutations that are available on the
 * login module.
 */

import { SET_DASHBOARD_STATE } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_DASHBOARD_STATE] (state, { key, value = null }) {
    state[key] = value
  }
}
