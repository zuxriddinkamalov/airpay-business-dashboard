<template>
    <VBody title="Distributions">
        <div slot="header">
            <el-row class="filter" type="flex" align="middle" justify="space-around">
                <el-col :xs="24" :md="12">
                    <el-select
                        class="filter-select"
                        v-model="filters.status"
                        default-first-option>
                        <template slot="prefix"><div class="filter-select-prefix">Status:</div> </template>
                        <el-option label="All" value=""></el-option>
                        <el-option label="Filled" value="filled"></el-option>
                        <el-option label="Pending" value="pending"></el-option>
                    </el-select>
                </el-col>
                <el-col :xs="24" :md="12" class="text-right">
                    <el-button class="shadow" @click="exportCSV">Export .CSV</el-button>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <el-table
                v-loading="loading"
                class="themed-table"
                border
                empty-text="No distributions"
                :data="distributionData"
                style="width: 100%">
                <el-table-column
                    prop="status"
                    label="Status"
                    sortable
                    width="130">
                    <template slot-scope="scope">
                        <div class="status-row">
                            <div class="table-tag pending" v-if="$R.equals('PENDING', scope.row.status)">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                <span style="margin-left: 5px">{{ scope.row.status }}</span>
                            </div>
                            <div class="table-tag filled" v-if="$R.equals('FILLED', scope.row.status)">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                <span style="margin-left: 5px">{{ scope.row.status }}</span>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="amount"
                    label="Amount"
                    width="130">
                    <template slot-scope="scope">
                        <span class="currency bold uppercase">{{ scope.row.amount }}&nbsp;{{ scope.row.currency }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="user"
                    label="User"
                    width="160">
                    <template slot-scope="scope">
                        <div class="user-row">
                            <div class="table-tag email-filled" v-if="$R.equals('FILLED', scope.row.status)">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span style="margin: 0 10px">{{ scope.row.user.email | shortEmail }}</span>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="table-tag email-pending" v-if="$R.equals('PENDING', scope.row.status)">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span style="margin: 0 10px">{{ scope.row.user.email | shortEmail }}</span>
                                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="date"
                    label="Date"
                    width="120">
                    <template slot-scope="scope">
                        <span>{{ scope.row.created | relativeTime }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="wallet"
                    label="Wallet"
                    width="120">
                    <template slot-scope="scope">
                        <div class="table-tag email-pending wallet">
                            <span>{{ scope.row.wallet }}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="metaData"
                    label="Metadata">
                    <template slot-scope="scope">
                        <div style="margin-right: 10px" class="table-tag meta-name">
                            <span class="uppercase" style="margin-right: 10px">Moco crowdsale</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Actions">
                    <template slot-scope="scope">
                        <el-button class="shadow" @click="overview(scope.row.id)">Overview</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="table-pagination">
                <el-pagination
                    background
                    prev-text="Previous"
                    next-text="Next"
                    popper-class="table-pagination-inner"
                    layout="prev, pager, next"
                    @current-change="pageChange"
                    :current-page="page"
                    :page-size="tableConfig.perPage"
                    :total="tableConfig.total">
                </el-pagination>
            </div>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { path } from 'ramda'

import { PAGINATION_LIMIT } from '@/constant/dashboard'
import TimeMixin from '@/mixins/time'
import TextMixin from '@/mixins/text'
import VBody from '../../components/Body'

import { DISTRIBUTION_DETAIL } from '../../../../constant/routes'
import { GET_DISTRIBUTIONS_MUTATION } from '../../../../graphql/mutations/dashboard/distributions'
import { SET_DISTRIBUTION_DATA } from '../../../../store/modules/dashboard/distributions/mutation-types'

export default {
  name: 'Distributions',
  data: function () {
    return {
      filters: {
        status: ''
      },
      tableConfig: {
        perPage: PAGINATION_LIMIT,
        total: 0
      },
      loading: false,
      distributionData: []
    }
  },
  mixins: [TimeMixin, TextMixin],
  components: {
    VBody
  },
  mounted () {
    this.loadDistributions()
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    }),
    page: {
      get () {
        return parseInt(path(['query', 'page'], this.$route)) || 1
      },
      set (value) {
      }
    }
  },
  watch: {
    activeBusiness (newValue, oldValue) {
      this.$router.push({
        query: {}
      })
      this.loadDistributions()
    },
    $route (to, from) {
      this.loadDistributions()
    }
  },
  methods: {
    exportCSV: function () {
      console.warn('Export as csv')
    },
    loadDistributions: function () {
      let activeBusiness = this.activeBusiness.id
      let page = this.page
      this.loading = true
      this.$apollo
        .query({
          query: GET_DISTRIBUTIONS_MUTATION,
          variables: {
            business: activeBusiness,
            pagination: {
              page: page,
              limit: PAGINATION_LIMIT
            }
          }
        })
        .then(response => {
          this.tableConfig.total = path(['data', 'getDistributions', 'pagination', 'totalDocs'], response)
          this.distributionData = path(['data', 'getDistributions', 'transactions'], response)
          this.$store.commit(`dashboard/distributions/${SET_DISTRIBUTION_DATA}`, {
            key: 'distributionsList',
            value: this.distributionData
          })
          this.loading = false
        })
        .catch(response => {
          this.$message.error(response)
          this.loading = false
        })
    },
    pageChange: function (page) {
      this.$router.push({
        query: {
          page: page
        }
      })
    },
    overview: function (id) {
      this.$router.push({
        name: DISTRIBUTION_DETAIL,
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>
    .filter
        padding: 20px 0 0
</style>
