/* ============
 * Actions for the connect module
 * ============
 *
 * The actions that are available on the
 * connect module
//  */
import web3 from '../../../helpers/web3';
// import Web3 from 'web3';
import sigUtil from 'eth-sig-util';
import { SET_CONNECT_STATE } from './mutation-types';
import { ROOT } from '../../../constant/routes';
import { SIGN_MSG } from '../../../constant/ethereum';
export default {
  async sign({ commit }) {
    if (web3) {
      try {
        await ethereum.enable();
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
              return console.error(result.error.message);
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
            } else {
              // Все ошибки должны выводиться в блоке ошибок который находится внизу
              console.log('Failed to verify signer, got: ' + result);
            }
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
    console.log(web3);
    // console.log(web3);
    // if (window.ethereum) {
    //   window.web3 = new Web3(ethereum);
    //   console.log(window.ethereum);
    //   try {
    //     // Request account access if needed
    //     await ethereum.enable();
    //     commit(SET_CONNECT_STATE, {
    //       key: 'sign',
    //       value: true
    //     });
    //
    //     const addr = window.ethereum.selectedAddress;
    //     console.log(Object.keys(web3));
    //
    //     const msg = await web3.toHex('Hello world');
    //     console.log(msg, addr);
    //     web3.eth.sign(addr, msg, function(hash) {
    //       console.log(hash);
    //     });
    //
    //     // Acccounts now exposed
    //     // web3.eth.sendTransaction({
    //     //   /* ... */
    //     // });
    //   } catch (error) {
    //     console.log(error);
    //     // User denied account access...
    //   }
    // } else if (window.web3) {
    //   window.web3 = new Web3(web3.currentProvider);
    //   commit(`connect/${SET_CONNECT_STATE}`, {
    //     key: 'sign',
    //     value: true
    //   });
    //   console.log(ROOT);
    //   console.log(Object.keys(this));
    //   this.$router.push({
    //     name: ROOT
    //   });
    //   console.log(window.web3);
    // }
  }
};
