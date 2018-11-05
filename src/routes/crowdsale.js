/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for crowdsale are defined in this file.
 */
import {
  CROWDSALES,
  CROWDSALES_URL,
  CROWDSALE_DETAIL,
  CROWDSALE_DETAIL_URL, NEW_CROWDSALE, NEW_CROWDSALE_URL, WIDGET, WIDGET_URL
} from '../constant/routes'

export default [
  {
    name: CROWDSALES,
    path: CROWDSALES_URL,
    component: () => import('@/views/dashboard/views/crowdsales/Crowdsales.vue')
  },
  {
    name: CROWDSALE_DETAIL,
    path: CROWDSALE_DETAIL_URL,
    component: () => import('@/views/dashboard/views/crowdsales/CrowdsaleDetail.vue')
  },
  {
    name: NEW_CROWDSALE,
    path: NEW_CROWDSALE_URL,
    component: () => import('@/views/dashboard/views/crowdsales/NewCrowdsale.vue')
  },
  {
    name: WIDGET,
    path: WIDGET_URL,
    component: () => import('@/views/dashboard/views/crowdsales/WidgetGenerator.vue')
  }
]
