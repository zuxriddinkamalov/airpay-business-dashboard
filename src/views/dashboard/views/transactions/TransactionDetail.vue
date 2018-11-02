<template>
    <VBody title="Transaction">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :md="12">
                    <h3 class="header-id"><span>TXID:</span> {{ detail.id }}</h3>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <div class="detail">
                <el-form label-width="300px" size="medium">
                    <el-form-item label="Status">
                        <div class="table-tag pending" v-if="$R.equals('PENDING', detail.status)">
                            <i class="fa fa-genderless" aria-hidden="true"></i>
                            <span style="margin-left: 5px">{{ detail.status }}</span>
                        </div>
                        <div class="table-tag filled" v-if="$R.equals('FILLED', detail.status)">
                            <i class="fa fa-genderless" aria-hidden="true"></i>
                            <span style="margin-left: 5px">{{ detail.status }}</span>
                        </div>
                    </el-form-item>
                    <el-form-item label="Date">
                        <span>{{ detail.created | relativeTime }}</span>
                    </el-form-item>
                    <el-form-item label="Amount">
                        <span class="currency bold uppercase">{{ detail.amount }}&nbsp;{{ detail.currency }}</span>
                    </el-form-item>
                    <el-form-item label="Payment address">
                        <div class="table-tag withdraw-address">
                            <span style="margin-right: 10px">{{ detail.paymentAddress }}</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Meta data">
                        <div class="table-tag meta-name">
                            <span class="uppercase" style="margin-right: 10px">Moco crowdsale</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                        <br />
                        <div class="table-tag withdraw-address">
                            <span class="uppercase">Withdraw: </span>
                            <span class="bold">
                                {{ detail.metadata.withdrawAddress }}
                            </span>
                        </div>
                    </el-form-item>
                    <el-form-item label="TxHash">
                        <div class="table-tag meta-name">
                            <span class="uppercase" style="margin-right: 10px">{{ detail.txHash }}</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="detail-control-buttons">
                <el-button type="primary" @click="execute">Execute</el-button>
            </div>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { path, find, propEq } from 'ramda'

import TimeMixin from '@/mixins/time'
import VBody from '../../components/Body'
import {
  GET_TRANSACTION_MUTATION
} from '../../../../graphql/mutations/dashboard/transactions'

export default {
  name: 'TransactionDetail',
  data: function () {
    return {
      loading: false,
      transactionData: null
    }
  },
  mixins: [TimeMixin],
  components: {
    VBody
  },
  mounted () {
    this.loadTransaction()
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness,
      detail: function (state) {
        let id = path(['params', 'id'], this.$route)
        return find(propEq('id', id), state.dashboard.transactions.transactionsList)
      }
    })
  },
  watch: {
    activeBusiness (newValue, oldValue) {
      this.loadTransaction()
    }
  },
  methods: {
    execute: function () {
      console.warn('executed')
    },
    loadTransaction: function () {
      let id = path(['params', 'id'], this.$route)
      this.loading = true
      this.$apollo
        .query({
          query: GET_TRANSACTION_MUTATION,
          variables: {
            id: id
          }
        })
        .then(response => {
          this.transactionData = path(['data', 'getTransaction'], response)
          this.loading = false
        })
        .catch(response => {
          this.$message.error(response)
          this.loading = false
        })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
