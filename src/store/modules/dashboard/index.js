/* ============
 * Dashboard Modules
 * ============
 */
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import verification from './verification'
import deposit from './deposit'
import home from './home'
import send from './send'
import crowdsale from './crowdsale'
import settings from './settings'

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
  modules: {
    home,
    deposit,
    send,
    verification,
    crowdsale,
    settings
  }
}
