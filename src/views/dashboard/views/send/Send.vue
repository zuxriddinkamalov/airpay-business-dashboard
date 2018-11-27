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
                    <VBody title="2. Send Ethereum from your wallet">
                        <div slot="content" class="address-info">
                            <div class="attention">
                                <div class="attention-content"><span class="bold uppercase">Attention</span> Be aware that you send
                                BTC to correct address with correct fees amount to quickest execution</div>
                            </div>
                            <div class="copy-address-block">
                                <el-input :disabled="true" v-model="address">
                                </el-input>
                                <el-row class="form-info" :gutter="10" justify="space-between">
                                    <el-col :xs="24" :sm="12">
                                        <a href="#" title="How to make deposit?">How to make deposit?</a>
                                    </el-col>
                                    <el-col :xs="24" :sm="12" class="text-right">
                                        <a
                                            v-clipboard:copy="address"
                                            v-clipboard:success="copySuccess"
                                            href="#"
                                            title="Copy to clipboard" class="bold copy">Copy to clipboard</a>
                                    </el-col>
                                </el-row>
                            </div>
                        </div>
                    </VBody>
                </el-main>
            </el-container>
        </div>
    </div>
</template>

<script>
import VBody from '../../components/Body';
import TextMixin from '@/mixins/text';
import TimeMixin from '@/mixins/time';

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
];

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
];

export default {
  name: 'Send',
  data: function() {
    return {
      fakeBalanceData: FAKE_BALANCE_DATA,
      fakeCurrencies: FAKE_CURRENCIES_DATA,
      selectedCurrency: 1,
      address: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2'
    };
  },
  methods: {
    copySuccess: function() {
      this.$message({
        message: 'Successfully copied',
        type: 'success'
      });
    }
  },
  components: {
    VBody
  },
  mixins: [TextMixin, TimeMixin]
};
</script>

<style lang="sass">
    .address-info
        min-height: 250px
    .copy-address-block
        margin: 20px 0
        .el-input.is-disabled .el-input__inner
            font-weight: bold
            color: #000
        .copy
            font-size: 17px
    .currency-select
        margin: 0 -20px
        text-align: left
        .el-radio-button
            width: 100%
            &.is-active .el-radio-button__inner
                background-color: var(--primary-color)
                color: #fff
            .el-radio-button__inner
                -webkit-border-radius: 0
                -moz-border-radius: 0
                border-radius: 0
                text-align: left
                font-size: 18px
                color: #000
                background: #E9E9E9
                width: 100%
                border: none
                padding: 20px 30px
                position: relative
                &:after
                    color: #C5C5C5
                    content: '\2192'
                    position: absolute
                    right: 10px
                    top: 15px
                    font-size: 25px
                & i
                    margin-right: 15px
                    vertical-align: middle
</style>
