<template>
    <VBody title="Unlock tokens">
        <div slot="content">
            <el-form
                label-position="top"
                :show-message="false"
                :validateOnRuleChange="false"
                @submit.prevent.native
                ref="unlockTokenForm"
                :model="form">

                <el-form-item>
                    <div slot="label" class="label">Your tokens will be unlocked until:</div>
                    <div class="unlock-date bold">{{ '12/26/2019' | time('DD MMMM YYYY') }}</div>
                </el-form-item>

                <el-form-item class="input-with-button">
                    <el-input :disabled="true" class="amount" :value="lockedAmount | money">
                        <span slot="append">MOCO</span>
                    </el-input>
                    <el-row class="form-info" :gutter="10" justify="space-between">
                        <el-col :xs="24">
                            <span>Gas 0.001 ETH</span>&nbsp;<a href="#" title="What is gas?">What is gas?</a>
                        </el-col>
                    </el-row>
                </el-form-item>

                <div class="">
                    <el-button
                        class="button" type="primary"
                        :disabled="true"
                        @click="submit('unlockTokenForm')">
                        Unlock tokens
                    </el-button>
                </div>
            </el-form>
        </div>
    </VBody>
</template>

<script>
import TimeMixin from '@/mixins/time';
import TextMixin from '@/mixins/text';
import VBody from '../../../components/Body';
import { web3, getLockedTokenBalance } from '@/helpers/web3';

export default {
  name: 'UnlockTokens',
  data: function() {
    return {
      lockedAmount: 0,
      form: {}
    };
  },
  created() {
    this.getLockedTokenBalanceData();
  },
  methods: {
    getLockedTokenBalanceData() {
      this.loading = true;

      getLockedTokenBalance()
        .then(balance => {
          this.lockedAmount = balance;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  components: {
    VBody
  },
  mixins: [TimeMixin, TextMixin]
};
</script>

<style lang="sass" scoped>
    .unlock-date
        font-size: 25px
</style>
