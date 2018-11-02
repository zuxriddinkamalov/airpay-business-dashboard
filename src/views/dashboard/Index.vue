<template>
  <el-container
      element-loading-spinner="el-icon-loading"
      element-loading-background="#ebeef4"
      v-loading.fullscreen="loading"
  >
      <el-container v-if="!loading">
          <el-aside class="side-bar" width="260px">
              <VSidebarHeader />
              <VMenu />
          </el-aside>
          <el-container>
              <el-header height="auto">
                  <VHeader />
              </el-header>
              <el-main>
                  <router-view></router-view>
              </el-main>
          </el-container>
      </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { path, nth, defaultTo } from 'ramda'
import { GET_ME_MUTATION } from '../../graphql/mutations/dashboard/dashboard'

import VSidebarHeader from '@/views/dashboard/components/SidebarHeader'
import VHeader from '@/views/dashboard/components/Header'
import VMenu from '@/views/dashboard/components/Menu'
import { SET_DASHBOARD_STATE } from '../../store/modules/dashboard/mutation-types'

export default {
  name: 'Dashboard',
  data: function () {
    return {
      loading: true
    }
  },
  components: {
    VHeader,
    VMenu,
    VSidebarHeader
  },
  mounted () {
    this.$apollo
      .query({
        query: GET_ME_MUTATION
      })
      .then(response => {
        let businesses = path(['data', 'me', 'owner'], response)
        let activeBusiness = defaultTo(null, nth(0, businesses))
        this.$store.commit(`dashboard/${SET_DASHBOARD_STATE}`, {
          key: 'businesses',
          value: businesses
        })
        this.$store.commit(`dashboard/${SET_DASHBOARD_STATE}`, {
          key: 'activeBusiness',
          value: activeBusiness
        })
        this.loading = false
      })
      .catch(response => {
        this.$message.error(response)
        this.loading = false
      })
  }
}
</script>

<style lang="sass" scoped>
  .side-bar
    padding: 30px
</style>
