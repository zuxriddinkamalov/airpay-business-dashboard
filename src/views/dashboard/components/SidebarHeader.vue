<template>
    <div class="sidebar-header">
      <div class="el-dropdown-link">
        <div class="logo" :style="{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#fff'
        }"></div>
      </div>
    </div>
</template>

<script>
import { propEq, find, equals } from 'ramda'
import { mapState } from 'vuex'
import { SET_DASHBOARD_STATE } from '../../../store/modules/dashboard/mutation-types'
import { LOGO, NAME } from '../../../constant/general'
export default {
  name: 'SidebarHeader',
  methods: {
    changeOrganization: function (businessId) {
      let activeBusiness = find(propEq('id', businessId))(this.organizations)
      if (!equals(activeBusiness, this.activeBusiness)) {
        this.$store.commit(`dashboard/${SET_DASHBOARD_STATE}`, {
          key: 'activeBusiness',
          value: activeBusiness
        })
      }
    }
  },
  data: function () {
    return {
      logo: LOGO,
      name: NAME
    }
  },
  computed: {
    ...mapState({
      organizations: state => state.dashboard.organizations,
      activeBusiness: state => state.dashboard.activeBusiness
    })
  }
}
</script>

<style lang="sass" scoped>
    .sidebar-header
        display: flex
        margin-bottom: 20px
        .el-dropdown-link
            display: flex
            cursor: pointer
        .el-dropdown-item
            font-size: 18px
    .title
        display: inline-block
        align-self: center
        color: #565656
        font-size: 20px
        & span, & i
            vertical-align: middle
        & i
            margin-left: 10px
            font-size: 16px
    .logo
        margin-right: 15px
        width: 50px
        height: 50px
        display: inline-block
        -webkit-border-radius: 50%
        -moz-border-radius: 50%
        border-radius: 50%
        box-shadow: 2px 2px 7px 0 rgba(220,220,220,0.50)
    .sidebar-header-items i
        margin-right: 10px
        font-size: 16px
</style>
