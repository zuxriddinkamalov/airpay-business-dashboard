/* ============
 * Actions for the home module
 * ============
 *
 * The actions that are available on the
 * home module.
 */
import { web3, crowdsale } from '../../../../helpers/web3'
import { SET_HOME_DATA } from './mutation-types'

export default {
  async buyTokens ({ commit }, { amount }) {
    console.log('Buy:', amount)
    const etherAmount = await web3.utils.toWei(String(amount), 'ether')
    const _crowdsale = await crowdsale()
    const addr = web3.givenProvider.selectedAddress
    const tx = await _crowdsale.methods.buyTokens(addr).send({
      from: addr,
      value: etherAmount
    })
    if (tx) {
      commit(SET_HOME_DATA, {
        key: 'buyTokenTab',
        value: 'VBuyTokenStatus'
      })
      commit(SET_HOME_DATA, {
        key: 'txHash',
        value: tx.transactionHash
      })
    }
    console.log(tx)
  }
}
