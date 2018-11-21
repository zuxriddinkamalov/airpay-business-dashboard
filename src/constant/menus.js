import * as ROUTES from './routes'

export default [
  {
    name: ROUTES.ROOT,
    to: ROUTES.ROOT_URL,
    title: 'Dashboard',
    icon: '<i class="fa fa-home" aria-hidden="true"></i>'
  },
  {
    name: ROUTES.TRANSFERS,
    to: ROUTES.TRANSFERS_URL,
    title: 'Transfers',
    icon: '<i class="fa fa-exchange-alt" aria-hidden="true"></i>'
  },
  {
    name: ROUTES.CROWDSALES,
    to: ROUTES.CROWDSALES_URL,
    title: 'Crowdsales',
    icon: '<i class="fa fa-piggy-bank" aria-hidden="true"></i>'
  },
  {
    name: ROUTES.TOKENS,
    to: ROUTES.TOKENS_URL,
    title: 'Tokens',
    icon: '<i class="fa fa-coins" aria-hidden="true"></i>'
  },
  {
    name: ROUTES.USERS,
    to: ROUTES.USERS_URL,
    title: 'Users',
    icon: '<i class="fa fa-users" aria-hidden="true"></i>',
    divider: true
  },
  {
    name: ROUTES.DISTRIBUTIONS,
    to: ROUTES.DISTRIBUTIONS_URL,
    title: 'Wallets',
    icon: '<i class="fas fa-wallet" aria-hidden="true"></i>'
  },
  {
    name: ROUTES.BUSINESS_SETTINGS,
    to: ROUTES.BUSINESS_SETTINGS_URL,
    title: 'Business settings',
    icon: '<i class="fa fa-cog" aria-hidden="true"></i>'
  }
]
