<template>

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
</template>
<script>
const FAKE_BALANCE_DATA = [
  {
    name: 'Ethereum',
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
    icon: '<i class="fas fa-coins"></i>',
    balance: 23333,
    currency: 'MOCO'
  }
];

export default {
  name: 'VBalance',
  data: function() {
    return {
      fakeBalanceData: FAKE_BALANCE_DATA
    };
  }
};
</script>
