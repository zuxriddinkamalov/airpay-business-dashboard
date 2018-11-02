/* ============
 * State of the login module
 * ============
 *
 * The initial state of the login module.
 */
const isAuth = sessionStorage.getItem('token')

export default {
  tab: null,
  login: Boolean(isAuth),
  hash: null,
  accountAuth: null
}
