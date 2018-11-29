<template>
    <el-row type="flex" justify="space-between" align="middle" class="board-header">
        <el-col>
            <el-button class="verification-button">
                <span class="bold">Participation in ICO requires you to complete verification process</span>
            </el-button>
        </el-col>
        <el-col class="logo-container">

                <div class="el-dropdown-link">
                    <div class="logo" :style="{
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#fff'
                    }"></div>
                    <div class="user-name bold">{{ user.name }}</div>
                    <div class="owner uppercase bold">{{ user.network }}</div>
                </div>
                <el-button class="settings-button" type="text"><i class="fa fa-cog" aria-hidden="true"></i></el-button>
                <el-button class="settings-button" type="text" @click.native="logout"><i class="fas fa-sign-out-alt"></i></el-button>
        </el-col>
    </el-row>
</template>

<script>
import { USER_SETTINGS } from '../../../constant/routes';
import { generateBlockies } from '../../../helpers/blockies';
import { addr, getNetwork } from '../../../helpers/web3';
export default {
  name: 'Header',
  data: function() {
    const select = addr();
    const icon = generateBlockies();
    console.log(icon);
    const network = getNetwork();
    console.log('aDD', select);
    return {
      user: {
        logo: icon,
        name: select,
        network: network
      }
    };
  },
  methods: {
    openSettings: function() {
      this.$router.push({
        name: USER_SETTINGS
      });
    },
    logout: function() {
      sessionStorage.removeItem('token');
      location.reload(true);
    }
  }
};
</script>

<style lang="sass">
.verification-button
    position: relative
    background: #FFFFFF
    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.06)
    border: 0
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
    font-size: 12px
    -webkit-border-radius: 10px
    -moz-border-radius: 10px
    border-radius: 10px
    background: #EDFEE3
    color: #777777
    letter-spacing: 0.5px
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
            font-size: 18px
            padding: 0 10px 0 15px
.settings-button
    color: #888888
    font-size: 23px
    margin-left: 25px
</style>
