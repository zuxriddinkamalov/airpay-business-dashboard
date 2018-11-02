/* ============
 * Mutations for the login forms module
 * ============
 *
 * The mutations that are available on the
 * login forms module.
 */

import { SET_AIRPAY_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_AIRPAY_DATA] (state, settings) {
    state.settings = settings
  }
}
