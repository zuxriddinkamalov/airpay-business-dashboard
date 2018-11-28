<template>

    <div class="balance">
        <div class="title bold">Balances</div>
        <div v-if="loading">Loading...</div>
        <el-row type="flex" class="balance-content" v-if="!loading">
            <el-col :xs="24" class="balance-list">
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
            </el-col>
            <el-col class="balance-button" :xs="24" :md="5">
                   <el-button class="make-deposit">
                       <span class="bold">Make deposit</span>
                   </el-button>
               </el-col>
        </el-row>

  </div>
</template>
<script>
import { web3, addr, getEthBalance } from '../../../helpers/web3';

export default {
  name: 'VBalance',
  data: function() {
    return {
      loading: false,
      data: []
    };
  },
  created() {
    this.getBalanceData();
  },
  methods: {
    getBalanceData() {
      this.loading = true;
      getEthBalance()
        .then(balance => {
          this.data = balance;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
