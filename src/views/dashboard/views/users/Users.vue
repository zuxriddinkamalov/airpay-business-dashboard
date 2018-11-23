<template>
    <VBody title="Users">
        <div slot="header">
            <el-row type="flex" align="middle" justify="space-around">
                <el-col :xs="24" :md="12">
                    <el-select
                        class="filter-select"
                        v-model="filters.whitelist"
                        default-first-option>
                        <template slot="prefix"><div class="filter-select-prefix">Whitelist:</div> </template>
                        <el-option label="Moco whitelist" value=""></el-option>
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

export default {
  name: 'Users',
  data: function () {
    return {
      filters: {
        whitelist: ''
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
