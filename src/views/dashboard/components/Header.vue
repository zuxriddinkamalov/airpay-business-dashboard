<template>
    <el-row type="flex" justify="space-between" align="middle" class="board-header">
        <el-col>
            <el-button class="verification-button">
                <span class="bold">Participation in ICO requires you to complete verification process</span>
            </el-button>
        </el-col>
        <el-col class="logo-container">
            <el-button class="settings-button" type="text"><i class="fa fa-cog" aria-hidden="true"></i></el-button>
            <el-dropdown class="sidebar-header" trigger="click">
                <div class="el-dropdown-link">
                    <div class="logo" :style="{
                        backgroundImage: `url(${user.logo})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#fff'
                    }"></div>
                    <div class="user-name bold">{{ user.name }}</div>
                    <div class="owner uppercase bold">owner</div>
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
import { USER_SETTINGS } from '../../../constant/routes'

export default {
  name: 'Header',
  data: function () {
    return {
      user: {
        logo: 'https://s3.us-east-2.amazonaws.com/airpay-network/logo/dappband_logo.jpg',
        name: 'Rob Johnson'
      }
    }
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
.verification-button
    position: relative
    padding: 12px 50px 12px 30px
    &:after
        color: #C5C5C5
        content: '\2192'
        position: absolute
        right: 10px
        top: 5px
        font-size: 25px
    &:before
        color: #FD9739
        content: '\2022'
        position: absolute
        left: 12px
        top: 3px
        font-size: 30px
.logo-container
    text-align: right
    display: flex
    justify-content: flex-end
.owner
    font-size: 9px
    -webkit-border-radius: 10px
    -moz-border-radius: 10px
    border-radius: 10px
    background: #EDFEE3
    padding: 2px 5px 2px 13px
    position: relative

.logo
    width: 50px
    height: 50px
    display: inline-block
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    box-shadow: 2px 2px 7px 0 rgba(220,220,220,0.50)
.board-header
    padding: 30px 0
    i.fa.fa-search
        font-size: 16px!important
        line-height: 2.8!important
        padding: 0 10px
    .el-dropdown-link
        display: flex
        align-items: center
        cursor: pointer
        .user-name
            padding: 0 10px 0 15px
.settings-button
    color: #9CAAC5
    font-size: 23px
    margin-right: 15px
</style>
