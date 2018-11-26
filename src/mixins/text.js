/* ============
 * Mixins for working with text
 * ============
 *
 */

const isFloat = n => {
  return Number(n) === n && n % 1 !== 0
}

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
    money: function (price, fixed = 3) {
      if (price) {
        let val
        if (isFloat(price)) {
          val = parseFloat(price).toFixed(fixed)
        } else {
          val = parseInt(price)
        }
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return '0'
    },
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
