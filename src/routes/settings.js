/* ============
 * Routes File
 * ============
 *
 * The routes and redirects for settings are defined in this file.
 */
import {
  BUSINESS_SETTINGS,
  BUSINESS_SETTINGS_URL
} from '../constant/routes'

export default [
  {
    name: BUSINESS_SETTINGS,
    path: BUSINESS_SETTINGS_URL,
    component: () => import('@/views/dashboard/views/business-settings/BusinessSettings.vue')
  }
]
