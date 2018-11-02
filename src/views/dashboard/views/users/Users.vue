<template>
    <VBody title="Users">
        <div slot="header">
            <el-row type="flex" align="middle" justify="space-around">
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
                empty-text="No users"
                :data="usersData"
                style="width: 100%">
                <el-table-column
                    label="User"
                    width="160">
                    <template slot-scope="scope">
                        <div class="user-row">
                            <div class="table-tag email-filled">
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span style="margin: 0 10px">{{ scope.row.email | shortEmail }}</span>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <!--<div class="table-tag email-pending" v-if="$R.equals('PENDING', scope.row.status)">-->
                                <!--<i class="fa fa-user" aria-hidden="true"></i>-->
                                <!--<span style="margin: 0 10px">{{ scope.row.email | shortEmail }}</span>-->
                                <!--<i class="fa fa-ellipsis-h" aria-hidden="true"></i>-->
                            <!--</div>-->
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Info">
                    <template slot-scope="scope">
                        <el-button class="shadow" @click="overview(scope.row.id)">Approve</el-button>
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
import { GET_USERS_MUTATION } from '../../../../graphql/mutations/dashboard/users'
import { SET_USERS_DATA } from '../../../../store/modules/dashboard/users/mutation-types'

export default {
  name: 'Users',
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
      usersData: []
    }
  },
  mixins: [TimeMixin, TextMixin],
  components: {
    VBody
  },
  mounted () {
    this.loadUsers()
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
      this.loadUsers()
    },
    $route (to, from) {
      this.loadUsers()
    }
  },
  methods: {
    exportCSV: function () {
      console.warn('Export as csv')
    },
    loadUsers: function () {
      let activeBusiness = this.activeBusiness.id
      let page = this.page
      this.loading = true
      this.$apollo
        .query({
          query: GET_USERS_MUTATION,
          variables: {
            business: activeBusiness,
            pagination: {
              page: page,
              limit: PAGINATION_LIMIT
            }
          }
        })
        .then(response => {
          this.tableConfig.total = path(['data', 'getUsers', 'pagination', 'totalDocs'], response)
          this.usersData = path(['data', 'getUsers', 'users'], response)
          this.$store.commit(`dashboard/users/${SET_USERS_DATA}`, {
            key: 'usersList',
            value: this.usersData
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
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
