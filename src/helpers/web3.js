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

const FAKE_BALANCE_DATA = [
  {
    name: 'Bitcoin',
    icon: '<i class="fab fa-btc"></i>',
    balance: 13332.233,
    currency: 'BTC'
  },
  {
    name: 'Moco',
    icon: '<i class="fas fa-coins"></i>',
    balance: 23333,
    currency: 'MOCO'
  }
];
export const addr = _web3.givenProvider.selectedAddress;
export const getEthBalance = address => {
  const addr = _web3.givenProvider.selectedAddress;
  return new Promise(function(resolve, reject) {
    web3.eth.getBalance(addr, function(error, result) {
      if (error) {
        reject(error);
      } else {
        const eth = {
          name: 'Ethereum',
          icon: '<i class="fab fa-ethereum"></i>',
          balance: result / Math.pow(10, 18),
          currency: 'ETH'
        };

        resolve([eth, ...FAKE_BALANCE_DATA]);
      }
    });
  });
};

const FAKE_TRANSACTIONS_DATA = [
  {
    id: 1,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '12/29/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  },
  {
    id: 2,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '11/28/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  },
  {
    id: 3,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '12/28/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  },
  {
    id: 4,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '12/26/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  }
];
export const getLastTransactions = () => {
  return new Promise(function(resolve, reject) {
    resolve(FAKE_TRANSACTIONS_DATA);
  });
};
