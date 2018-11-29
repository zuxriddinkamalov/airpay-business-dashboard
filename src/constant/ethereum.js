export const SIGN_MSG = [
  {
    type: 'string', // Any valid solidity type
    name: 'Terms and Conditions', // Any string label you want
    value: 'I read and accept all the terms and conditions' // The value to sign
  }
];

export const CROWDSALE_ADDR = '0xd6b1ec0e4dd6da08ac51c944d49220ac9339e195';
export const BTC_ADDR = '0x099';
export const TOKEN_ADDR = '0x682aa4348a60c2f9f3c80154d6d5d3badca7fc05';
export const GAS_EST = {
  buyTokens: 500000
};
export const NETWORKS = {
  '1': 'Mainnet',
  '2': 'Deprecated',
  '3': 'Ropsten',
  '4': 'Rinkeby test network',
  '42': 'Kovan test network',
  '4447': 'Truffle Develop Network',
  '5777': 'Ganache',
  '666': 'Daniel Private Blockchain' // This is a test private blockchain. You can change it to your own private blockchain if you have one.
};

export const APPROVED_NETWORK_ID = '3';
