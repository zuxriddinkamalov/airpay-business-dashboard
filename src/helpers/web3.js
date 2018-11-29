import Web3 from 'web3';
import { CROWDSALE_ADDR, TOKEN_ADDR, NETWORKS } from '../constant/ethereum';
import CROWD from './contracts/crowdsale.json';
import TKN from './contracts/token.json';
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
export const addr = () => {
  return _web3.givenProvider.selectedAddress;
};
export const getNetwork = () => {
  console.log(_web3.givenProvider);
  return NETWORKS[_web3.givenProvider.networkVersion];
};

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

        resolve(eth);
      }
    });
  });
};

export const getBTCBalance = address => {
  const addr = _web3.givenProvider.selectedAddress;
  return new Promise(function(resolve, reject) {
    web3.eth.getBalance(addr, function(error, result) {
      if (error) {
        reject(error);
      } else {
        const token = {
          name: 'Bitcoin',
          icon: '<i class="fab fa-btc"></i>',
          balance: result / Math.pow(10, 18),
          currency: 'BTC'
        };
        resolve(token);
      }
    });
  });
};
export const getTokenBalance = address => {
  const addr = _web3.givenProvider.selectedAddress;
  return new Promise(function(resolve, reject) {
    const token = new _web3.eth.Contract(TKN.abi, TOKEN_ADDR);
    token.methods.balanceOf(addr).call({ from: addr }, function(error, result) {
      if (error) {
        reject(error);
      } else {
        const token = {
          name: 'Moco',
          icon: '<i class="fas fa-coins"></i>',
          balance: result / Math.pow(10, 18),
          currency: 'MOCO'
        };
        resolve(token);
      }
    });
  });
};
export const getLockedTokenBalance = address => {
  const addr = _web3.givenProvider.selectedAddress;
  return new Promise(function(resolve, reject) {
    const crowdsale = new _web3.eth.Contract(CROWD.abi, CROWDSALE_ADDR);
    crowdsale.methods
      .balanceOf(addr)
      .call({ from: addr }, function(error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result / Math.pow(10, 18));
        }
      });
  });
};

export const getLastTransactions = () => {
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
  return new Promise(function(resolve, reject) {
    console.log('DONE');
    resolve(FAKE_TRANSACTIONS_DATA);
  });
};
