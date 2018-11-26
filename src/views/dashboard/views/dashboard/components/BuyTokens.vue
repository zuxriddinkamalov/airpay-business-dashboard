<template>
    <component :is="step"></component>
</template>

<script>
import { mapState } from 'vuex'
import '@/plugins/vue-swimline'

import VBuyTokenForm from './BuyTokenForm'
import VBuyTokenStatus from './BuyTokenStatus'
import { SET_HOME_DATA } from '../../../../../store/modules/dashboard/home/mutation-types'

export default {
  name: 'BuyTokens',
  mounted () {
    this.$store.commit(`dashboard/home/${SET_HOME_DATA}`, {
      key: 'buyTokenTab',
      value: 'VBuyTokenForm'
    })
  },
  components: {
    VBuyTokenForm,
    VBuyTokenStatus
  },
  computed: {
    ...mapState('dashboard/home', {
      step: state => state.buyTokenTab
    })
  }
}
</script>

<style lang="sass" scoped>
    .tooltip-slider ul li
        text-align: left
    .info-tooltip
        line-height: 1.4
        color: #777777
        background-color: #F3F5F7
        padding: 10px
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        margin-bottom: 5px

</style>
