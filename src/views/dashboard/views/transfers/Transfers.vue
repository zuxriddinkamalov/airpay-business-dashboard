<template>
    <VBody title="Transfers">
        <div slot="header">
            <div class="filter">
                <div>
                    <el-select
                        class="filter-select"
                        :clearable="true"
                        v-model="filter.type"
                        default-first-option>
                        <template slot="prefix"><div class="filter-select-prefix">Type:</div> </template>
                        <el-option label="Income" value="income"></el-option>
                    </el-select>
                </div>
                <div>
                    <el-select
                        class="filter-select"
                        :clearable="true"
                        v-model="filter.status"
                        default-first-option>
                        <template slot="prefix"><div class="filter-select-prefix">Status:</div> </template>
                        <el-option label="Pre pending" value="PRE_PENDING"></el-option>
                        <el-option label="Pending" value="PENDING"></el-option>
                        <el-option label="Process" value="PROCESS"></el-option>
                        <el-option label="Executed" value="EXECUTED"></el-option>
                        <el-option label="Failed" value="FAILED"></el-option>
                    </el-select>
                </div>
                <div>
                    <el-date-picker
                        v-model="filter.date"
                        range-separator="→"
                        type="daterange"
                        format="dd/MM/yyyy"
                        value-format="dd-MM-yyyy"
                        start-placeholder="Start date"
                        end-placeholder="End date">
                    </el-date-picker>
                </div>
            </div>
        </div>
        <div slot="content">
            <el-table
                v-loading="loading"
                class="themed-table"
                border
                empty-text="No transfers"
                :data="transferData"
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
                            <div class="table-tag pre-pending" v-if="$R.equals('PRE_PENDING', scope.row.status)">
                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                <span style="margin-left: 5px">{{ scope.row.status }}</span>
                            </div>
                            <div class="table-tag executed" v-if="$R.equals('EXECUTED', scope.row.status)">
                                <i class="fas fa-check"></i>
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
                    label="From"
                    width="300">
                    <template slot-scope="scope">
                        <div class="table-tag from-tag">
                            <i class="fas fa-book"></i>
                            <span style="margin-left: 5px" class=" bold uppercase">
                                {{ scope.row.from.name }}&nbsp;{{ scope.row.from.symbol }}
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="To"
                        width="300">
                    <template slot-scope="scope"> 
                        <div class="table-tag to-tag">
                            <i class="fas fa-book"></i>
                            <span style="margin-left: 10px" class="bold uppercase">
                                {{ scope.row.to.name }}&nbsp;{{ scope.row.to.symbol }}
                            </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    prop="amount"
                    label="Amount"
                    width="130">
                    <template slot-scope="scope">
                        <span class="currency bold uppercase">{{ scope.row.amount }}&nbsp;{{ scope.row.asset.symbol }}</span>
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
                    :current-page.sync="page"
                    :page-size="tableConfig.perPage"
                    :total="tableConfig.total">
                </el-pagination>
            </div>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex';
import { path, nth, prop, omit } from 'ramda';

import { PAGINATION_LIMIT } from '@/constant/dashboard';
import TimeMixin from '@/mixins/time';
import TextMixin from '@/mixins/text';
import Helper from '@/mixins/helpers';
import VBody from '../../components/Body';
import { GET_TRANSFERS_MUTATION } from '../../../../graphql/mutations/dashboard/transfers';
import { TRANSFER_DETAIL } from '../../../../constant/routes';
import { SET_TRANSFER_DATA } from '../../../../store/modules/dashboard/transfers/mutation-types';

export default {
  name: 'transfers',
  data: function() {
    return {
      filter: {
        type: null,
        status: null,
        date: []
      },
      tableConfig: {
        perPage: PAGINATION_LIMIT,
        total: 0
      },
      loading: false,
      transferData: []
    };
  },
  mixins: [TimeMixin, TextMixin, Helper],
  components: {
    VBody
  },
  mounted() {
    this.loadTransfers();
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    }),
    query: function() {
      let type = this.filter.type;
      let status = this.filter.status;
      let startDate = this.filter.date && nth(0, this.filter.date);
      let endDate = this.filter.date && nth(1, this.filter.date);
      return {
        type,
        status,
        startDate,
        endDate
      };
    },
    page: {
      get() {
        return parseInt(path(['query', 'page'], this.$route)) || 1;
      },
      set(value) {
        this.$router.push({
          query: {
            page: value
          }
        });
      }
    }
  },
  watch: {
    query: function(newValue) {
      let oldQuery = omit(['page'], this.$route.query);
      this.$router.push({
        query: {
          ...oldQuery,
          ...newValue
        }
      });
    },
    $route(to, from) {
      this.loadTransfers();
    }
  },
  methods: {
    loadTransfers: function() {
      let activeBusiness = this.activeBusiness.id;
      let filter = this.omitEmpty({
        type: prop('type', this.$route.query),
        status: prop('status', this.$route.query),
        startDate: prop('startDate', this.$route.query),
        endDate: prop('endDate', this.$route.query)
      });
      let page = this.page;
      this.loading = true;
      this.$apollo
        .query({
          query: GET_TRANSFERS_MUTATION,
          variables: {
            organization: activeBusiness,
            pagination: {
              page: page,
              limit: PAGINATION_LIMIT
            },
            filter: {
              ...filter
            }
          }
        })
        .then(response => {
          this.tableConfig.total = path(
            ['data', 'getTransfers', 'pagination', 'totalDocs'],
            response
          );
          this.transferData = path(
            ['data', 'getTransfers', 'transfers'],
            response
          );
          this.$store.commit(`dashboard/transfers/${SET_TRANSFER_DATA}`, {
            key: 'transfersList',
            value: this.transferData
          });
          this.loading = false;
        })
        .catch(response => {
          this.$message.error(response);
          this.loading = false;
        });
    },
    pageChange: function(page) {
      this.$router.push({
        query: {
          page: page
        }
      });
    },
    overview: function(id) {
      this.$router.push({
        name: TRANSFER_DETAIL,
        params: {
          id: id
        }
      });
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
