import Web3 from 'web3';
import { CROWDSALE_ADDR } from '../constant/ethereum';
import CROWD from './contracts/crowdsale.json';

let _web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  _web3 = new Web3(window.web3.currentProvider);
}

export const crowdsale = async () => {
  try {
    const instance = await new _web3.eth.Contract(CROWD.abi, CROWDSALE_ADDR);
    console.log(instance);
    return instance;
  } catch (error) {
    console.log(error);
  }
};
export const web3 = _web3;

export const addr = _web3.givenProvider.selectedAddress;
