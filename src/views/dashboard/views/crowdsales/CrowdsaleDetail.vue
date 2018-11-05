<template>
    <VBody title="Crowdsale details">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :md="12">
                    <h3 class="header-id">ID: {{ detail.id }}</h3>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <div class="detail" v-if="crowdsaleData">
                <el-form @submit.prevent.native label-width="300px" size="medium">
                    <el-form-item label="Name">
                        <el-input :readonly="true" v-model="crowdsaleData.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Hardcap">
                        <el-input :readonly="true" :value="10000000 | money">
                            <i slot="prefix" class="fas fa-dollar-sign"></i>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Status">
                        <div class="table-tag pending" v-if="$R.equals('PENDING', crowdsaleData.status)">
                            <i class="fa fa-genderless" aria-hidden="true"></i>
                            <span style="margin-left: 5px">{{ crowdsaleData.status }}</span>
                        </div>
                        <div class="table-tag pre-pending" v-if="$R.equals('PRE_PENDING', crowdsaleData.status)">
                            <i class="fa fa-genderless" aria-hidden="true"></i>
                            <span style="margin-left: 5px">{{ crowdsaleData.status }}</span>
                        </div>
                        <div class="table-tag executed" v-if="$R.equals('EXECUTED', crowdsaleData.status)">
                            <i class="fa fa-genderless" aria-hidden="true"></i>
                            <span style="margin-left: 5px">{{ crowdsaleData.status }}</span>
                        </div>
                        <div class="table-tag process" v-if="$R.equals('PROCESS', crowdsaleData.status)">
                            <i class="fa fa-genderless" aria-hidden="true"></i>
                            <span style="margin-left: 5px">{{ crowdsaleData.status }}</span>
                        </div>
                        <div class="table-tag failed" v-if="$R.equals('FAILED', crowdsaleData.status)">
                            <i class="fa fa-genderless" aria-hidden="true"></i>
                            <span style="margin-left: 5px">{{ crowdsaleData.status }}</span>
                        </div>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Start date">
                        <el-date-picker
                            :readonly="true"
                            format="dd/MM/yyyy"
                            :value="crowdsaleData.startDate"
                            type="date">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item
                        label="Date end">
                        <el-date-picker
                            format="dd/MM/yyyy"
                            :readonly="true"
                            :value="crowdsaleData.endDate"
                            type="date">
                        </el-date-picker>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Token">
                        <div class="table-tag meta-name">
                            <span class="uppercase bold" style="margin-right: 10px">Moco token</span>
                            <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <el-form-item label="Token">
                        <div class="table-tag from-tag">
                            <i class="fas fa-book"></i>
                            <span style="margin-left: 10px">Moco ETH wallet</span>
                        </div>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Whitelist">
                        <el-select value="whitelist" :readonly="true">
                            <el-option label="Moco Whitelist" value="whitelist"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Rate">
                        <div class="detail-table-root">
                            <el-table
                                class="detail-table"
                                :data="Array(2)">
                                <el-table-column
                                    label="Currency"
                                    width="80">
                                    <template slot-scope="scope">
                                        <span class="bold">BTC</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Fund wallet"
                                    width="155">
                                    <template slot-scope="scope">
                                        <div class="table-tag from-tag">
                                            <i class="fas fa-book"></i>
                                            <span style="margin-left: 10px">Moco ETH wallet</span>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Rate"
                                    width="130">
                                    <template slot-scope="scope">
                                        <span class="bold">1 BTC</span>/<span>1000 MOCO</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Min. amount"
                                    width="110">
                                    <template slot-scope="scope">
                                        <span class="bold">0.01 BTC</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Rate">
                        <div class="detail-table-root">
                            <el-table
                                class="detail-table"
                                :data="Array(2)">
                                <el-table-column
                                    label="Milestone"
                                    width="80">
                                    <template slot-scope="scope">
                                        <span class="bold">BTC</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="To date"
                                    width="100">
                                    <template slot-scope="scope">
                                        <span>{{ '10-15-2018' | time('DD/MM/YYYY', 'MM-DD-YYYY') }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Bonus, %"
                                    width="100">
                                    <template slot-scope="scope">
                                        <span>30%</span>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { path, find, propEq, prop } from 'ramda'

import TimeMixin from '@/mixins/time'
import TextMixin from '@/mixins/text'
import VBody from '../../components/Body'
import { GET_CROWDSALE_MUTATION } from '../../../../graphql/mutations/dashboard/crowdsales'

export default {
  name: 'CrowdsaleDetail',
  data: function () {
    return {
      loading: false,
      crowdsaleData: null
    }
  },
  mixins: [TimeMixin, TextMixin],
  components: {
    VBody
  },
  mounted () {
    this.loadCrowdsale()
    this.crowdsaleData = Object.assign({}, this.detail)
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness,
      detail: function (state) {
        let id = path(['params', 'id'], this.$route)
        return find(propEq('id', id), state.dashboard.crowdsales.crowdsalesList)
      }
    })

  },
  watch: {
    activeBusiness (newValue, oldValue) {
      this.loadCrowdsale()
    }
  },
  methods: {
    loadCrowdsale: function () {
      let id = path(['params', 'id'], this.$route)
      let activeBusiness = prop('id', this.activeBusiness)
      this.loading = true
      this.$apollo
        .query({
          query: GET_CROWDSALE_MUTATION,
          variables: {
            business: activeBusiness,
            id: id
          }
        })
        .then(response => {
          // this.crowdsaleData = path(['data', 'getCrowdsale'], response)
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
    .table-tag
        margin-bottom: 0

</style>
