/* ============
 * Dashboard Modules
 * ============
 */
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import transactions from './transactions'
import distributions from './distributions'
import crowdsales from './crowdsales'
import tokens from './tokens'
import users from './users'
import settings from './settings'

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
  modules: {
    transactions,
    distributions,
    crowdsales,
    tokens,
    users,
    settings
  }
}
