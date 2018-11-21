<template>
    <VBody title="Crowdsales">
        <div slot="header">
            <div class="filter">
                <div style="flex-grow: 1">
                    <el-select
                        class="filter-select"
                        :clearable="true"
                        v-model="filter.status"
                        default-first-option>
                        <template slot="prefix"><div class="filter-select-prefix">Status:</div> </template>
                        <el-option label="All" value=""></el-option>
                        <el-option label="Pre pending" value="PRE_PENDING"></el-option>
                        <el-option label="Pending" value="PENDING"></el-option>
                        <el-option label="Process" value="PROCESS"></el-option>
                        <el-option label="Executed" value="EXECUTED"></el-option>
                        <el-option label="Failed" value="FAILED"></el-option>
                    </el-select>
                </div>
                <div class="align-self: center;">
                    <el-button @click="createCrowdsale" class="shadow" type="primary"><i class="fa fa-plus" aria-hidden="true"></i> Crowdsale campaign</el-button>
                </div>
            </div>
        </div>
        <div slot="content">
            <el-table
                v-loading="loading"
                class="themed-table"
                border
                empty-text="No crowdsales"
                :data="crowdsaleData"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="Name"
                    width="120">
                    <template slot-scope="scope">
                        <span class="bold">{{ scope.row.name }} {{ scope.row.symbol }}</span>
                    </template>
                </el-table-column>
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
                            <div class="table-tag pre-pending" v-if="$R.equals('PRE_PENDING', scope.row.status)">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                <span style="margin-left: 5px">{{ scope.row.status }}</span>
                            </div>
                            <div class="table-tag executed" v-if="$R.equals('EXECUTED', scope.row.status)">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                <span style="margin-left: 5px">{{ scope.row.status }}</span>
                            </div>
                            <div class="table-tag process" v-if="$R.equals('PROCESS', scope.row.status)">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                <span style="margin-left: 5px">{{ scope.row.status }}</span>
                            </div>
                            <div class="table-tag failed" v-if="$R.equals('FAILED', scope.row.status)">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                <span style="margin-left: 5px">{{ scope.row.status }}</span>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Period"
                    width="160">
                    <template slot-scope="scope">
                        <span>{{ scope.row.startDate | time('DD/MM/YYYY') }}</span>
                        -<span>{{ scope.row.endDate | time('DD/MM/YYYY') }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Raised"
                    width="130">
                    <template slot-scope="scope">
                        <span class="currency bold uppercase">{{ scope.row.amount }}&nbsp;{{ scope.row.currency }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Hardcap"
                    width="130">
                    <template slot-scope="scope">
                        <span><i slot="prefix" class="fas fa-dollar-sign"></i></span>&nbsp;
                        <span class="currency bold uppercase">{{ scope.row.hardcap | money }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="Actions">
                    <template slot-scope="scope">
                        <el-button class="shadow" @click="detail(scope.row.id)">Edit</el-button>
                        <el-button type="primary" class="shadow" @click="widget(scope.row.id)">Widget</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { path } from 'ramda'

import TimeMixin from '@/mixins/time'
import TextMixin from '@/mixins/text'
import VBody from '../../components/Body'
import { GET_CROWDSALES_MUTATION } from '../../../../graphql/mutations/dashboard/crowdsales'
import { SET_CROWDSALE_DATA } from '../../../../store/modules/dashboard/crowdsales/mutation-types'
import { CROWDSALE_DETAIL, NEW_CROWDSALE, WIDGET } from '../../../../constant/routes'

export default {
  name: 'Crowdsales',
  data: function () {
    return {
      filter: {
        status: ''
      },
      loading: false,
      crowdsaleData: []
    }
  },
  mixins: [TimeMixin, TextMixin],
  components: {
    VBody
  },
  mounted () {
    this.loadCrowdsales()
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    }),
    query: function () {
      let status = this.filter.status
      return {
        status
      }
    }
  },
  watch: {
    query: function (newValue, oldValue) {
      let oldQuery = this.$route.query
      this.$router.push({
        query: {
          ...oldQuery,
          ...newValue
        }
      })
    },
    $route (to, from) {
      this.loadCrowdsales()
    }
  },
  methods: {
    createCrowdsale: function () {
      this.$router.push({
        name: NEW_CROWDSALE
      })
    },
    loadCrowdsales: function () {
      let activeBusiness = this.activeBusiness.id
      this.loading = true
      this.$apollo
        .query({
          query: GET_CROWDSALES_MUTATION,
          variables: {
            organization: activeBusiness
          }
        })
        .then(response => {
          this.crowdsaleData = path(['data', 'getCrowdsales'], response)
          this.$store.commit(`dashboard/crowdsales/${SET_CROWDSALE_DATA}`, {
            key: 'crowdsalesList',
            value: this.crowdsaleData
          })
          this.loading = false
        })
        .catch(response => {
          this.$message.error(response)
          this.loading = false
        })
    },
    detail: function (id) {
      this.$router.push({
        name: CROWDSALE_DETAIL,
        params: {
          id: id
        }
      })
    },
    widget: function (id) {
      this.$router.push({
        name: WIDGET,
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
