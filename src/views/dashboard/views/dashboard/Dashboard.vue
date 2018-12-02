<template>
    <div>
        <VBalance />
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
         <VTransactions />
        </div>
    </div>
</template>

<script>
import TextMixin from '@/mixins/text'
import TimeMixin from '@/mixins/time'
import VBody from '../../components/Body'
import VBuyTokens from './components/BuyTokens'
import VUnlockTokens from './components/UnlockTokens'
import VBalance from '../../components/Balance'
import VTransactions from './components/LastTransactions'
export default {
  name: 'Dashboard',
  data: function () {
    return {
      fakeTransactionsData: FAKE_TRANSACTIONS_DATA
    }
  },
  mixins: [TextMixin, TimeMixin],
  components: {
    VBody,
    VBuyTokens,
    VUnlockTokens,
    VBalance,
    VTransactions
  }
}
</script>

<style lang="sass">
    .tokens-actions
        margin-bottom: 20px
    .transactions-list
        min-height: 400px
</style>
