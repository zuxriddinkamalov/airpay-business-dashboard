<template>
    <div>
        <div class="balance">
            <div class="title bold">Balances</div>
            <el-row type="flex" class="balance-content">
                <el-col :xs="24" :sm="19" class="balance-list">
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
                <el-col class="balance-button" :xs="24" :md="5">
                    <el-button class="make-deposit">
                        <span class="bold">Make deposit</span>
                    </el-button>
                </el-col>
            </el-row>
        </div>
        <div class="tokens-actions">
            <el-row type="flex" :gutter="15">
                <el-col :xs="24" :sm="12">
                    <VBuyTokens />
                </el-col>
                <el-col :xs="24" :sm="12">
                    <VUnlockTokens />
                </el-col>
            </el-row>
        </div>
        <div class="dashboard-transactions">
            <VBody title="Last transactions">
                <div slot="content">
                    <div class="transactions-list">
                        <div v-for="transaction in fakeTransactionsData" :key="transaction.id" class="transaction-row">
                            <div class="transactions-list-row">
                                <div class="row-title">Tx Hash</div>
                                <div class="row-value tx-hash">{{ transaction.txHash | slice(20)}}<i class="far fa-edit"></i></div>
                            </div>
                            <div class="transactions-list-row">
                                <div class="row-title">Date</div>
                                <div class="row-value">{{ transaction.date | time('DD MMMM YYYY') }}</div>
                            </div>
                            <div class="transactions-list-row" style="display: flex;">
                                <div>
                                    <div class="row-title"></div>
                                    <div class="row-value send"><span>&larr;</span></div>
                                </div>
                                <div>
                                    <div class="row-title">Send</div>
                                    <div class="row-value bold"><span>{{ transaction.send.amount | money }}</span>
                                        &nbsp;<span class="uppercase">{{ transaction.send.currency }}</span></div>
                                </div>
                            </div>
                            <div class="transactions-list-row" style="display: flex;">
                                <div>
                                    <div class="row-title"></div>
                                    <div class="row-value receive"><span>&rarr;</span></div>
                                </div>
                                <div>
                                    <div class="row-title">Receive</div>
                                    <div class="row-value bold"><span>{{ transaction.receive.amount | money }}</span>
                                        &nbsp;<span class="uppercase">{{ transaction.receive.currency }}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </VBody>
        </div>
    </div>
</template>

<script>
import TextMixin from '@/mixins/text'
import TimeMixin from '@/mixins/time'
import VBody from '../../components/Body'
import VBuyTokens from './components/BuyTokens'
import VUnlockTokens from './components/UnlockTokens'

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

const FAKE_TRANSACTIONS_DATA = [
  {
    id: 1,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '12/29/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  },
  {
    id: 2,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '11/28/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  },
  {
    id: 3,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '12/28/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  },
  {
    id: 4,
    txHash: '0x0689E898Bb48A1695F79171279B7E00F5dB14DD2',
    date: '12/26/2018',
    send: {
      currency: 'ETH',
      amount: 0.345
    },
    receive: {
      currency: 'MOCO',
      amount: 14388
    }
  }
]

export default {
  name: 'Dashboard',
  data: function () {
    return {
      fakeBalanceData: FAKE_BALANCE_DATA,
      fakeTransactionsData: FAKE_TRANSACTIONS_DATA
    }
  },
  mixins: [TextMixin, TimeMixin],
  components: {
    VBody,
    VBuyTokens,
    VUnlockTokens
  }
}
</script>

<style lang="sass">
    .tokens-actions
        margin-bottom: 20px
    .transactions-list
        min-height: 400px
</style>
