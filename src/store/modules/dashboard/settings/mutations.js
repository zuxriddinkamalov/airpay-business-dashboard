/* ============
 * Mutations for the settings module
 * ============
 *
 * The mutations that are available on the
 * settings module.
 */

import { SET_SETTINGS_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_SETTINGS_DATA] (state, { key, value = null }) {
    state[key] = value
  }
}
