<template>
    <div>
        <VBalance />
        <div class="tokens-actions">
            <el-row class="flex-row" type="flex" :gutter="15" wrap>
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
import VBody from '../../components/Body'
import VBuyTokens from './components/BuyTokens'
import VUnlockTokens from './components/UnlockTokens'
import VBalance from '../../components/Balance'
import VTransactions from './components/LastTransactions'
export default {
  name: 'Dashboard',
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
