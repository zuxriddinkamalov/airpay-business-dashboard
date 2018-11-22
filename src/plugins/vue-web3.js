/* ============
 * Vue-web3
 * ============
 *
 * Vue.js bindings for Web3 1.0
 *
 * https://github.com/morrislaptop/vue-web3
 */

import Vue from 'vue'
import Web3 from 'web3'
import VueWeb3 from 'vue-web3'

Vue.use(VueWeb3, { web3: new Web3(Web3.currentProvider) })
