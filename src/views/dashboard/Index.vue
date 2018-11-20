<template>
  <el-container
      class="dashboard"
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
import { mapState } from 'vuex'
import Helper from '@/mixins/helpers'
import { GET_ME_MUTATION } from '../../graphql/mutations/dashboard/dashboard'

import VSidebarHeader from '@/views/dashboard/components/SidebarHeader'
import VHeader from '@/views/dashboard/components/Header'
import VMenu from '@/views/dashboard/components/Menu'
import { SET_DASHBOARD_STATE } from '../../store/modules/dashboard/mutation-types'
import { ROOT } from '../../constant/routes'

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
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    })
  },
  watch: {
    activeBusiness: {
      deep: true,
      handler: function () {
        this.$router.push({
          query: {},
          name: ROOT
          // query: {
          //   hash: this.guid()
          // }
        })
      }
    }
  },
  mounted () {
    this.$apollo
      .query({
        query: GET_ME_MUTATION
      })
      .then(response => {
        let organizations = path(['data', 'me', 'organizations'], response)
        let account = path(['data', 'me', 'account'], response)
        let activeBusiness = defaultTo(null, nth(0, organizations))
        this.$store.commit(`dashboard/${SET_DASHBOARD_STATE}`, {
          key: 'organizations',
          value: organizations
        })
        this.$store.commit(`dashboard/${SET_DASHBOARD_STATE}`, {
          key: 'account',
          value: account
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
  },
  mixins: [Helper]
}
</script>

<style lang="sass" scoped>
  .side-bar
    padding: 30px
</style>
