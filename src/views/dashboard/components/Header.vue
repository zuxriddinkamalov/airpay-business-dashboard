<template>
    <el-row type="flex" justify="space-between" align="middle" class="search-header">
        <el-col :xs="24" :md="12">
            <el-input
                class="search-keyword"
                placeholder="Search"
                v-model="keyword">
                <i slot="prefix" class="fa fa-search" aria-hidden="true"></i>
            </el-input>
        </el-col>
        <el-col :xs="24" :md="12" class="logo-container">
            <el-dropdown class="sidebar-header" trigger="click">
                <div class="el-dropdown-link">
                    <div class="logo" :style="{
                        backgroundImage: `url(${user.logo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#fff'
                    }"></div>
                </div>
                <el-dropdown-menu class="sidebar-header-items" slot="dropdown">
                    <el-dropdown-item @click.native="openSettings">
                        <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
                        Settings
                    </el-dropdown-item>
                    <el-dropdown-item divided @click.native="logout">
                        <span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
                        Logout
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
import '@/plugins/vue-rx'
import { debounceTime } from 'rxjs/operators'
import { USER_SETTINGS } from '../../../constant/routes'

export default {
  name: 'Header',
  data: function () {
    return {
      keyword: '',
      user: {
        logo: 'https://s3.us-east-2.amazonaws.com/airpay-network/logo/dappband_logo.jpg'
      }
    }
  },
  mounted () {
    this.$watchAsObservable('keyword').pipe(debounceTime(500)).subscribe(
      ({ newValue, oldValue }) => {
        let currentQuery = this.$route.query
        this.$router.push({
          query: {
            ...currentQuery,
            search: newValue
          }
        })
      },
      err => console.error(err),
      () => console.log('complete')
    )
  },
  methods: {
    openSettings: function () {
      this.$router.push({
        name: USER_SETTINGS
      })
    },
    logout: function () {
      sessionStorage.removeItem('token')
      location.reload(true)
    }
  }
}
</script>

<style lang="sass">
.logo-container
    text-align: right
.logo
    width: 50px
    height: 50px
    display: inline-block
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    box-shadow: 2px 2px 7px 0 rgba(220,220,220,0.50)
.search-keyword input
    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.06)
    padding-left: 40px!important
    border: none
.search-header
    padding: 30px 0
    i.fa.fa-search
        font-size: 16px!important
        line-height: 2.8!important
        padding: 0 10px
    .el-dropdown-link
        cursor: pointer
</style>
