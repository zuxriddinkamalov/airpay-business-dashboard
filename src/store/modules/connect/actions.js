/* ============
 * Actions for the connect module
 * ============
 *
 * The actions that are available on the
 * connect module
//  */
import { web3 } from '../../../helpers/web3';
// import Web3 from 'web3';
import sigUtil from 'eth-sig-util';
import { SET_CONNECT_STATE } from './mutation-types';
import { ROOT } from '../../../constant/routes';
import { SIGN_MSG } from '../../../constant/ethereum';
export default {
  sign({ commit }) {
    return new Promise(function(resolve, reject) {
      const addr = web3.givenProvider.selectedAddress;

      //
      web3.currentProvider.sendAsync(
        {
          method: 'eth_signTypedData',
          params: [SIGN_MSG, addr],
          from: addr
        },
        function(err, result) {
          if (err) return console.error(err);
          if (result.error) {
            reject(result.error);
          }

          const recovered = sigUtil.recoverTypedSignature({
            data: SIGN_MSG,
            sig: result.result
          });
          if (recovered === addr) {
            // SIGN = result.result – Этот хеш нужно добавить в стор и сделать редирект на dashboard сейчас в Connect я сделал таймером редирект
            console.log('Recovered signer: ' + addr);

            commit(SET_CONNECT_STATE, {
              key: 'sign',
              value: true
            });
            resolve(result.result);
          } else {
            // Все ошибки должны выводиться в блоке ошибок который находится внизу
            console.log('Failed to verify signer, got: ' + result);
          }
        }
      );
    });
  }
};
