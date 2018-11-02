<template>
    <div class="menu-items">
        <ul>
            <router-link
                :class="['menu-link', { 'side-bar-menu-open': route.name === item.name }]"
                v-for="item in menu"
                tag="li"
                :key="item.name"
                :to="{
                    name: item.name
                }" exact>
                <a><span class="icon" v-html="item.icon"></span>{{ item.title }}</a>
                <div v-if="item.divider" class="divider"></div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import MENU from '@/constant/menus'

export default {
  name: 'Menu',
  data: function () {
    return {
      menu: MENU
    }
  },
  computed: {
    ...mapState(['route'])
  }
}
</script>

<style lang="sass" scoped>
    .divider
        margin: 20px 0 0
        height: 1px
        background: #D1D9E8
    .menu-link a
        font-weight: bold
        color: #464646
        &:hover
             color: #000
    .side-bar-menu-open a
        color: #377DFE!important
        &:hover
            color: #377DFE
        .icon
            color: #377DFE!important
    .menu-items
        margin-top: 30px
        .menu-link
            padding: 10px 0
            &:hover
                .icon
                   color: #667798
            .icon
                color: #93A0B9
                width: 30px
                font-size: 18px!important
                display: inline-block
                & i
                    vertical-align: middle

</style>
