/* ============
 * Mixins for working with time
 * ============
 *
 */

import moment from 'moment'

export default {
  filters: {
    relativeTime: function (date, sourceFormat = 'DD/MM/YYYY') {
      if (!date) return ''
      return moment(date, sourceFormat).fromNow()
    },
    time: function (date, format, sourceFormat = format) {
      if (!date) return ''
      return moment(date, sourceFormat).format(format)
    }
  }
}
