export const SIGN_MSG = [
  {
    type: 'string', // Any valid solidity type
    name: 'Terms and Conditions', // Any string label you want
    value: 'I read and accept all the terms and conditions' // The value to sign
  }
]

export const CROWDSALE_ADDR = '0x5b3b4b605c12c0c397937d75861e99838a971317'
export const BTC_ADDR = '0x099'
export const TOKEN_ADDR = '0xac2c438734c9e1aa48b78dd69d760beba1fac47b'
export const GAS_EST = {
  buyTokens: 500000
}
export const NETWORKS = {
  '1': 'Mainnet',
  '2': 'Deprecated',
  '3': 'Ropsten',
  '4': 'Rinkeby test network',
  '42': 'Kovan test network',
  '4447': 'Truffle Develop Network',
  '5777': 'Ganache',
  '666': 'Daniel Private Blockchain' // This is a test private blockchain. You can change it to your own private blockchain if you have one.
}

export const APPROVED_NETWORK_ID = '3'
