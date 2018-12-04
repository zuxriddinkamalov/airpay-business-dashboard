<template>

    <div class="balance">
        <div class="title bold">Balances</div>
        <div v-if="loading">Loading...</div>
        <el-row type="flex" class="flex-row balance-content" v-if="!loading">
            <el-col :xs="24" :sm="19" class="balance-list">
                <div class="accounts">
                    <div :key="account.abbreviation" v-for="account in data" class="account">
                        <div class="account-header">
                            <div class="account-header-title">
                                {{ account.name }}
                            </div>
                            <div class="account-header-icon" v-html="account.icon"></div>
                        </div>
                        <div class="balance-value">
                            <span class="value">{{ account.balance | money }}</span>
                            <span class="currency uppercase">{{ account.currency }}</span>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col class="balance-button" :xs="24" :sm="5">
                   <el-button class="make-deposit">
                       <span class="bold">Make deposit</span>
                   </el-button>
               </el-col>
        </el-row>

  </div>
</template>
<script>
import {
  web3,
  addr,
  getEthBalance,
  getTokenBalance,
  getBTCBalance
} from '../../../helpers/web3'
import TextMixin from '@/mixins/text'

export default {
  name: 'VBalance',
  data: function () {
    return {
      loading: false,
      data: []
    }
  },
  created () {
    this.getBalanceEthData()
    this.getBalanceTokenData()
    this.getBalanceBTCData()
  },
  methods: {
    getBalanceEthData () {
      this.loading = true
      getEthBalance()
        .then(balance => {
          const asset = this.data
          asset[0] = balance
          this.data = [...asset]
        })
        .catch(error => {
          console.log(error)
        }).finally(() => {
          this.loading = false
        })
    },
    getBalanceTokenData () {
      this.loading = true

      getTokenBalance()
        .then(balance => {
          const asset = this.data
          asset[2] = balance
          this.data = [...asset]
        })
        .catch(error => {
          console.log(error)
        }).finally(() => this.loading = false)
    },
    getBalanceBTCData () {
      this.loading = true

      getBTCBalance()
        .then(balance => {
          const asset = this.data
          asset[1] = balance
          this.data = [...asset]
          this.loading = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mixins: [TextMixin]
}
</script>
