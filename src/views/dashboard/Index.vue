<template>
  <el-container class="dashboard">
      <el-aside class="side-bar" width="260px">
          <VSidebarHeader />
          <VMenu />
      </el-aside>
      <el-container class="dashboard-content">
          <el-header height="auto">
              <VHeader />
          </el-header>
          <el-main>
              <router-view></router-view>
          </el-main>
      </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import Helper from '@/mixins/helpers'

import VSidebarHeader from '@/views/dashboard/components/SidebarHeader'
import VHeader from '@/views/dashboard/components/Header'
import VMenu from '@/views/dashboard/components/Menu'

export default {
  name: 'Dashboard',
  components: {
    VHeader,
    VMenu,
    VSidebarHeader
  },
  mixins: [Helper]
}
</script>

<style lang="sass" scoped>
  .side-bar
    position: fixed
    padding: 30px
  .dashboard-content
      margin-left: 260px
</style>
