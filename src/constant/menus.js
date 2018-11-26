import * as ROUTES from './routes'

export default [
  {
    name: ROUTES.ROOT,
    to: ROUTES.ROOT_URL,
    title: 'Dashboard',
    icon: '<i class="fa fa-home" aria-hidden="true"></i>'
  },
  {
    name: ROUTES.DEPOSIT,
    to: ROUTES.DEPOSIT_URL,
    title: 'Deposit',
    icon: '<i class="far fa-plus-square"></i>'
  },
  {
    name: ROUTES.SEND,
    to: ROUTES.SEND_URL,
    title: 'Send',
    icon: '<i class="fa fa-piggy-bank" aria-hidden="true"></i>'
  },
  {
    name: ROUTES.VERIFICATION,
    to: ROUTES.VERIFICATION_URL,
    title: 'Verification',
    icon: '<i class="far fa-address-card"></i>'
  },
  {
    name: ROUTES.CROWDSALE,
    to: ROUTES.CROWDSALE_URL,
    title: 'Crowdsale',
    icon: '<i class="fa fa-users" aria-hidden="true"></i>',
    divider: true,
    children: [
      {
        name: ROUTES.TRANSACTIONS,
        to: ROUTES.TRANSACTIONS_URL,
        title: 'Transactions'
      },
      {
        name: ROUTES.INTERACTIONS,
        to: ROUTES.INTERACTIONS_URL,
        title: 'Interactions',
        private: true
      }
    ]
  },
  {
    name: ROUTES.HELP,
    to: ROUTES.HELP_URL,
    title: 'Quick help',
    icon: '<i class="fas fa-wallet" aria-hidden="true"></i>',
    children: [
      {
        name: ROUTES.WHAT_IS_GAS,
        to: ROUTES.WHAT_IS_GAS_URL,
        title: 'What is gas?'
      },
      {
        name: ROUTES.HOW_TO_BUY,
        to: ROUTES.HOW_TO_BUY_URL,
        title: 'How to buy tokens?'
      },
      {
        name: ROUTES.HOW_TO_CLAIM,
        to: ROUTES.HOW_TO_CLAIM_URL,
        title: 'How to claim tokens?'
      }
    ]
  },
  {
    name: ROUTES.TERMS,
    to: ROUTES.TERMS_URL,
    title: 'Terms and conditions',
    icon: '<i class="fa fa-cog" aria-hidden="true"></i>'
  }
]
