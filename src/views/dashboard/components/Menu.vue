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
                <a><span class="icon" v-html="item.icon"></span><span class="menu-title">{{ item.title }}</span></a>
                <router-link
                    v-if="!$R.isEmpty($R.prop('children', item)) && !$R.isNil($R.prop('children', item))"
                    :class="['sub-menu', { 'side-bar-menu-open': route.name === subItem.name }]"
                    v-for="subItem in item.children"
                    tag="li"
                    :key="subItem.name"
                    :to="{
                        name: subItem.name
                    }" exact>
                    <a class="sub-item-url">
                        <span class="menu-title">{{ subItem.title }}</span>
                        <span v-if="$R.prop('private', subItem)" class="owner uppercase bold">only owner</span>
                    </a>
                </router-link>
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
            color: var(--primary-color)!important
    .side-bar-menu-open > a
        color: var(--primary-color)!important
        .icon
            color: var(--primary-color)!important
    .menu-items
        line-height: 1.5
        margin-top: 30px
        i
            vertical-align: middle
        .menu-link
            padding: 10px 0
            .icon
                width: 30px
                font-size: 18px!important
                display: inline-block
        .sub-menu
            padding-left: 30px
            .sub-item-url
                font-weight: normal
                display: block
                .owner
                    line-height: 1.2
                    color: #000
                    margin-left: 5px

</style>
