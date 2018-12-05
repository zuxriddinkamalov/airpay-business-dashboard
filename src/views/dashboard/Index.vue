<template>
  <el-container class="dashboard">
      <el-aside :class="['side-bar', {'side-bar-open': open}]" width="270px">
          <div class="side-bar-content">
              <VSidebarHeader />
              <VMenu />
          </div>
          <div class="hamburger">
              <div class="collapse">
                  <input v-model="open" type="checkbox" />
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </div>
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

import VSidebarHeader from '@/views/dashboard/components/SidebarHeader'
import VHeader from '@/views/dashboard/components/Header'
import VMenu from '@/views/dashboard/components/Menu'

export default {
  name: 'Dashboard',
  data: function () {
    return {
      open: false
    }
  },
  components: {
    VHeader,
    VMenu,
    VSidebarHeader
  }
}
</script>

<style lang="sass">
  .side-bar
      position: fixed
      padding: 30px 20px
      height: 100%
      display: flex
      z-index: 1
      justify-content: space-between
      background-color: $bg-color
      -webkit-transition: all 200ms ease
      -moz-transition: all 200ms ease
      -ms-transition: all 200ms ease
      -o-transition: all 200ms ease
      transition: all 200ms ease
      .side-bar-content
          margin-right: 15px
  .dashboard-content
      margin-left: 270px
  .hamburger
      display: none
  .collapse
      display: block
      position: relative
      top: 20px
      z-index: 1
      -webkit-user-select: none
      user-select: none
      &:hover span
          background: $--color-primary!important
      span
          display: block
          width: 25px
          height: 3px
          margin-bottom: 3px
          position: relative
          background: #565656
          border-radius: 3px
          z-index: 1
          transform-origin: 4px 0
          transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease
      span:first-child
          transform-origin: 0 0
      span:nth-last-child(2)
          transform-origin: 0 100%
      input:checked ~ span
          opacity: 1
          transform: rotate(45deg) translate(-5px, -10px)
          background: $--color-primary
      input:checked ~ span:nth-last-child(3)
          opacity: 0
          transform: rotate(0deg) scale(0.2, 0.2)
      input:checked ~ span:nth-last-child(2)
          transform: rotate(-45deg) translate(-3px, 10px)
      input
          display: block
          width: 27px
          height: 22px
          position: absolute
          top: -7px
          left: -5px
          cursor: pointer
          opacity: 0
          z-index: 2
          -webkit-touch-callout: none
</style>
