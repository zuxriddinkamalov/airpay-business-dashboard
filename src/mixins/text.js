/* ============
 * Mixins for working with text
 * ============
 *
 */

export default {
  filters: {
    shortEmail: function (email) {
      let re = /^([a-zA-Z0-9]{1,2})(.+?)@/
      return email.replace(re, '$1...@')
    },
    slice: function (text, length) {
      if (text.length >= length) {
        return text.slice(0, length) + '...'
      }
      return text
    },
    money: function (price) {
      if (price) {
        let val = parseInt(price)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return '0'
    }
  }
}
