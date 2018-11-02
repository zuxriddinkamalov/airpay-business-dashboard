/* ============
 * Mixins for working with time
 * ============
 *
 */

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  filters: {
    relativeTime: function (date) {
      if (!date) return ''
      return dayjs(date).fromNow()
    },
    time: function (date, format) {
      if (!date) return ''
      return dayjs(date).format(format)
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
