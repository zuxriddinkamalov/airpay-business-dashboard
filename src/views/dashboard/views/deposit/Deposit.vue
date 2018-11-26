<template>
    <div>
        <div class="balance">
            <div class="title bold">Balances</div>
            <el-row type="flex" class="balance-content">
                <el-col :xs="24" class="balance-list">
                    <div :key="account.abbreviation" v-for="account in fakeBalanceData" class="account">
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
                </el-col>
            </el-row>
        </div>
        <div class="deposit-block">
            <el-container>
                <el-aside width="250px">
                    <VBody title="1. Select currency" contentBg="#F7F7F7" headerBg="#F7F7F7">
                        <div slot="content" class="currency-select">
                            <el-radio-group v-model="selectedCurrency">
                                <el-radio-button :key="currency.id" v-for="currency in fakeCurrencies" :label="currency.id">
                                    <span v-html="currency.icon"></span> {{ currency.name }}
                                </el-radio-button>
                            </el-radio-group>
                        </div>
                    </VBody>
                </el-aside>
                <el-main style="padding: 0">
                    <VBody title="2. Deposit Ethereum to your wallet">
                        <div slot="content">

                        </div>
                    </VBody>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import VBody from '../../components/Body'
import TextMixin from '@/mixins/text'
import TimeMixin from '@/mixins/time'

const FAKE_CURRENCIES_DATA = [
  {
    id: 1,
    name: 'Ehhereum',
    icon: '<i class="fab fa-ethereum"></i>',
    symbol: 'ETH'
  },
  {
    id: 2,
    name: 'Bitcoin',
    icon: '<i class="fab fa-btc"></i>',
    symbol: 'BTC'
  },
  {
    id: 3,
    name: 'Moco',
    icon: '<i class="fab fa-btc"></i>',
    symbol: 'MOCO'
  }
]

const FAKE_BALANCE_DATA = [
  {
    name: 'Ehhereum',
    icon: '<i class="fab fa-ethereum"></i>',
    balance: 1.233,
    currency: 'ETH'
  },
  {
    name: 'Bitcoin',
    icon: '<i class="fab fa-btc"></i>',
    balance: 13332.233,
    currency: 'BTC'
  },
  {
    name: 'Moco',
    icon: '<i class="fab fa-btc"></i>',
    balance: 23333,
    currency: 'MOCO'
  }
]

export default {
  name: 'Deposit',
  data: function () {
    return {
      fakeBalanceData: FAKE_BALANCE_DATA,
      fakeCurrencies: FAKE_CURRENCIES_DATA,
      selectedCurrency: 1
    }
  },
  components: {
    VBody
  },
  mixins: [TextMixin, TimeMixin]
}
</script>

<style lang="sass">
    .currency-select
        margin: 0 -20px
        text-align: left
        .el-radio-button
            width: 100%
            &.is-active .el-radio-button__inner
                background-color: var(--primary-color)
                color: #fff
            .el-radio-button__inner
                text-align: left
                font-size: 18px
                color: #000
                background: #E9E9E9
                width: 100%
                border: none
                padding: 20px 30px
                & i
                    font-size: 17px
                    vertical-align: middle
</style>
