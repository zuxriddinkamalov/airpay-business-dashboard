/* ============
 * Mutations for the general state
 * ============
 *
 * The mutations that are available on the
 * general state.
 */

import { SET_NETWORK_ERROR_DATA, SET_GRAPHQL_ERROR_DATA } from './mutation-types'

/* eslint-disable no-param-reassign */
export default {
  [SET_NETWORK_ERROR_DATA] (state, error) {
    state.networkError = error
  },
  [SET_GRAPHQL_ERROR_DATA] (state, error) {
    state.graphQLError = error
  }
}
