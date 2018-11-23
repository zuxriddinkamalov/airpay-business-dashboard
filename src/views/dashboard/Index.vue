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
import Helper from '@/mixins/helpers'

import VSidebarHeader from '@/views/dashboard/components/SidebarHeader'
import VHeader from '@/views/dashboard/components/Header'
import VMenu from '@/views/dashboard/components/Menu'

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
  mixins: [Helper]
}
</script>

<style lang="sass" scoped>
  .side-bar
    padding: 30px
</style>
