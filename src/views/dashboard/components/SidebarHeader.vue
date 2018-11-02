<template>
    <el-dropdown class="sidebar-header" trigger="click">
      <div class="el-dropdown-link">
        <div class="logo" :style="{
            backgroundImage: `url(${activeBusiness.logo})`,
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
                v-for="business in businesses"
                :key="business.id"
                :value="business.id"
                @click.native="changeBusiness">
                {{ business.name }}
            </el-dropdown-item>
            <el-dropdown-item
                @click.native="changeBusiness">
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
  methods: {
    changeBusiness: function (event) {
      let businessId = event.target.getAttribute('value')
      let activeBusiness = find(propEq('id', businessId))(this.businesses)
      if (!equals(activeBusiness, this.activeBusiness)) {
        this.$store.commit(`dashboard/${SET_DASHBOARD_STATE}`, {
          key: 'activeBusiness',
          value: activeBusiness
        })
      }
    }
  },
  computed: {
    ...mapState({
      businesses: state => state.dashboard.businesses,
      activeBusiness: state => state.dashboard.activeBusiness
    })
  }
}
</script>

<style lang="sass" scoped>
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
