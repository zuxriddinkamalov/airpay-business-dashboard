<template>
    <VBody title="Distribution">
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
                    <el-form-item label="Wallet">
                        <div class="table-tag withdraw-address">
                            <span style="margin-right: 10px">{{ detail.wallet }}</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <el-form-item label="TxHash">
                        <div class="table-tag withdraw-address">
                            <span style="margin-right: 10px">{{ detail.txHash }}</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="User">
                        <div class="table-tag email-filled" v-if="$R.equals('FILLED', detail.status)">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span style="margin: 0 10px">{{ detail.user.email | shortEmail }}</span>
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </div>
                        <div class="table-tag email-pending" v-if="$R.equals('PENDING', detail.status)">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span style="margin: 0 10px">{{ detail.user.email | shortEmail }}</span>
                            <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <el-form-item label="Meta data">
                        <div class="table-tag meta-name">
                            <span class="uppercase" style="margin-right: 10px">Moco crowdsale</span>
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
import { GET_DISTRIBUTION_MUTATION } from '../../../../graphql/mutations/dashboard/distributions'

export default {
  name: 'DistributionDetail',
  data: function () {
    return {
      loading: false,
      distributionData: null
    }
  },
  mixins: [TimeMixin],
  components: {
    VBody
  },
  mounted () {
    this.loadDistribution()
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness,
      detail: function (state) {
        let id = path(['params', 'id'], this.$route)
        return find(propEq('id', id), state.dashboard.distributions.distributionsList)
      }
    })

  },
  methods: {
    execute: function () {
      console.warn('executed')
    },
    loadDistribution: function () {
      let id = path(['params', 'id'], this.$route)
      this.loading = true
      this.$apollo
        .query({
          query: GET_DISTRIBUTION_MUTATION,
          variables: {
            id: id
          }
        })
        .then(response => {
          this.distributionData = path(['data', 'getDistribution'], response)
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
