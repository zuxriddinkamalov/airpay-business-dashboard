/* ============
 * Vuex Store
 * ============
 *
 * The store of the application.
 *
 * http://vuex.vuejs.org/en/index.html
 */

import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// Modules
import login from './modules/login'
import general from './modules/general'
import dashboard from './modules/dashboard'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  ...general,
  /**
   * Assign the modules to the store.
   */

  modules: {
    login,
    dashboard
  },

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger()] : []
})
