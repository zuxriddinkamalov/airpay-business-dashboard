/* ============
 * Login Modules
 * ============
 */
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

import forms from './forms'

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
  modules: {
    forms
  }
}
