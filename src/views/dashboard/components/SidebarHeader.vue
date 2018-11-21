<template>
    <el-dropdown class="sidebar-header" trigger="click">
      <div class="el-dropdown-link">
        <div class="logo" :style="{
            backgroundImage: `url(${activeBusiness.logo || 'images/no-logo.png'})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#fff'
        }"></div>
          <div class="title bold">
              <span>{{ activeBusiness.name }}</span><i class="el-icon-arrow-down el-icon--right"></i>
          </div>
      </div>
        <el-dropdown-menu class="sidebar-header-items" slot="dropdown">
            <el-dropdown-item
                v-for="organization in organizations"
                @click.native="changeOrganization(organization.id)"
                :key="organization.id">
                <div class="businesses-item">
                    <div class="logo" :style="{
                        backgroundImage: `url(${organization.logo || 'images/no-logo.png'})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }"></div>
                    <div class="business-name">
                        {{ organization.name }}
                    </div>
                </div>
            </el-dropdown-item>
            <el-dropdown-item
                divided
                @click.native="createBusiness">
                Create business
            </el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script>
import { propEq, find, equals } from 'ramda'
import { mapState } from 'vuex'
import { SET_DASHBOARD_STATE } from '../../../store/modules/dashboard/mutation-types'

export default {
  name: 'SidebarHeader',
  mounted () {
    console.warn(this.$store.state)
  },
  methods: {
    changeOrganization: function (businessId) {
      let activeBusiness = find(propEq('id', businessId))(this.organizations)
      if (!equals(activeBusiness, this.activeBusiness)) {
        this.$store.commit(`dashboard/${SET_DASHBOARD_STATE}`, {
          key: 'activeBusiness',
          value: activeBusiness
        })
      }
    },
    createBusiness: function () {
      console.warn('Create business')
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
    .businesses-item
        display: flex
        justify-items: center
        align-items: center
        .logo
            width: 20px
            height: 20px
            overflow: hidden
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%
    .sidebar-header
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
