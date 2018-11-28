<template>
    <VBody title="Buy token in process">
        <div slot="content">
            <div class="buy-status pending" v-if="status == 'PENDING' || status == 'SUCCESS'">
                <div class="buy-status-header">
                    <div class="title bold">Transaction pending</div>
                    <div class="currency">Etherscan</div>
                </div>
                <div class="buy-status-content">
                    Your transaction was pending and get tx hash, you can track it using Etherscan.
                </div>
            </div>
            <div class="buy-status success" v-if="status == 'SUCCESS'">
                <div class="buy-status-header">
                    <div class="title bold">Transaction success</div>
                    <div class="currency">Etherscan</div>
                </div>
                <div class="buy-status-content">
                    Your transaction was pending and get tx hash, you can track it using Etherscan.
                </div>
            </div>
            <div class="buy-status failed" v-if="status == 'FAILED'">
                <div class="buy-status-header">
                    <div class="title bold">Transaction failed</div>
                    <div class="currency">Etherscan</div>
                </div>
                <div class="buy-status-content">
                    Your transaction was pending and get tx hash, you can track it using Etherscan.
                </div>
            </div>
            <div class="center">
                <el-button @click="gotoMain" class="goto-main bold" type="text"><i class="el-icon-refresh"></i> Return to main</el-button>
            </div>
        </div>
    </VBody>
</template>

<script>
import VBody from '../../../components/Body';
import { SET_HOME_DATA } from '../../../../../store/modules/dashboard/home/mutation-types';

export default {
  name: 'BuyTokenStatus',
  data: function() {
    return {
      status: 'PENDING'
    };
  },
  mounted() {
    let self = this;
    setTimeout(() => {
      self.status = 'SUCCESS';
    }, 3000);
  },
  methods: {
    gotoMain() {
      this.$store.commit(`dashboard/home/${SET_HOME_DATA}`, {
        key: 'buyTokenTab',
        value: 'VBuyTokenForm'
      });
    }
  },
  components: {
    VBody
  }
};
</script>

<style lang="sass">
    .goto-main
        font-size: 17px
        & i
            vertical-align: middle
            font-size: 28px
    a
        color: var(--primary-color)
    .form-info
        font-size: 16px
        line-height: 1.3
        margin-top: 6px
    .amount
        & *, & input
            font-size: 24px
            color: #000
            font-weight: bold
    .currency
        .el-input--suffix
            width: 90px
    .flag
        max-width: 20px
        margin-right: 10px
        vertical-align: middle
    .text-slider-root
        min-height: 23px
    .tooltip-slider
        margin-bottom: 25px
        ul li
            text-align: left

</style>
