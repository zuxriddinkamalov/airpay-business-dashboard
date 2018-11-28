<template>
  <VBody title="Last transactions">
      <div slot="content">
          <div class="transactions-list">
              <div v-for="transaction in fakeTransactionsData" :key="transaction.id" class="transaction-row">
                  <div class="transactions-list-row">
                      <div class="row-title">Tx Hash</div>
                      <div class="row-value tx-hash">{{ transaction.txHash | slice(20)}}<i class="fas fa-external-link-alt"></i></div>
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
</template>


<script>
import TextMixin from '@/mixins/text';
import TimeMixin from '@/mixins/time';
import VBody from '../../../components/Body';
import { getLastTransactions } from '../../../../../helpers/web3';

export default {
  name: 'LastTransactions',
  data: function() {
    return {
      loading: false,
      data: []
    };
  },
  mixins: [TextMixin, TimeMixin],
  created() {
    this.getLastTransactionsData;
  },
  methods: {
    getLastTransactionsData() {
      getLastTransactions()
        .then(transactions => {
          this.data = transactions;
        })
        .catch(error => console.log(error));
    }
  },
  components: {
    VBody
  }
};
</script>
