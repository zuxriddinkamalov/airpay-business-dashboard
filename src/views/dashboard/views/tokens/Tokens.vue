<template>
    <VBody title="Tokens">
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
                    <el-button class="shadow" type="primary"><i class="fa fa-plus" aria-hidden="true"></i> Add token</el-button>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <el-table
                v-loading="loading"
                class="themed-table"
                border
                empty-text="No tokens"
                :data="tokenData"
                style="width: 100%">
                <el-table-column
                    label="Network"
                    width="120">
                    <template slot-scope="scope">
                        <span>{{ scope.row.betwork }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Actions">
                    <template slot-scope="scope">
                        <el-button class="shadow" @click="detail(scope.row.id)">Details</el-button>
                        <el-button class="shadow" @click="edit(scope.row.id)">Edit</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { path } from 'ramda'

import VBody from '../../components/Body'
import { TOKEN_DETAIL, TOKEN_EDIT } from '../../../../constant/routes'
import { GET_TOKENS_MUTATION } from '../../../../graphql/mutations/dashboard/tokens'
import { SET_TOKEN_DATA } from '../../../../store/modules/dashboard/tokens/mutation-types'

export default {
  name: 'Tokens',
  data: function () {
    return {
      filters: {
        status: ''
      },
      loading: false,
      tokenData: []
    }
  },
  components: {
    VBody
  },
  mounted () {
    this.loadTokens()
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    })
  },
  watch: {
    activeBusiness (newValue, oldValue) {
      this.$router.push({
        query: {}
      })
      this.loadTokens()
    },
    $route (to, from) {
      this.loadTokens()
    }
  },
  methods: {
    exportCSV: function () {
      console.warn('Export as csv')
    },
    loadTokens: function () {
      let activeBusiness = this.activeBusiness.id
      this.loading = true
      this.$apollo
        .query({
          query: GET_TOKENS_MUTATION,
          variables: {
            business: activeBusiness
          }
        })
        .then(response => {
          this.tokenData = path(['data', 'getTokens'], response)
          this.$store.commit(`dashboard/tokens/${SET_TOKEN_DATA}`, {
            key: 'tokensList',
            value: this.tokenData
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
        name: TOKEN_DETAIL,
        params: {
          id: id
        }
      })
    },
    edit: function (id) {
      this.$router.push({
        name: TOKEN_EDIT,
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
