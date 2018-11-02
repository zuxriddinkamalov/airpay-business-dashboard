<template>
    <VBody title="Token">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :md="12">
                    <h3 class="header-id">Config your token</h3>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <div class="detail">
                <el-form label-width="300px" size="medium">
                    <el-form-item label="Distribution address">
                        <div class="table-tag withdraw-address">
                            <span style="margin-right: 10px">{{ detail.distributionAddress }}</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <el-form-item label="Token holder address">
                        <div class="table-tag withdraw-address">
                            <span style="margin-right: 10px">{{ detail.tokenHolderAddress }}</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <el-form-item label="Token address">
                        <div class="table-tag withdraw-address">
                            <span style="margin-right: 10px">{{ detail.tokenAddress }}</span>
                            <i class="fa fa-external-link" aria-hidden="true"></i>
                        </div>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Network">
                        <span>{{ detail.network }}</span>
                    </el-form-item>
                    <el-form-item label="Blockchain">
                        <span>{{ detail.blockchain }}</span>
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

import VBody from '../../components/Body'
import { GET_TOKEN_MUTATION } from '../../../../graphql/mutations/dashboard/tokens'

export default {
  name: 'TokenDetail',
  data: function () {
    return {
      loading: false,
      transactionData: null
    }
  },
  components: {
    VBody
  },
  mounted () {
    this.loadToken()
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness,
      detail: function (state) {
        let id = path(['params', 'id'], this.$route)
        return find(propEq('id', id), state.dashboard.tokens.tokensList)
      }
    })
  },
  watch: {
    activeBusiness (newValue, oldValue) {
      this.loadToken()
    }
  },
  methods: {
    execute: function () {
      console.warn('executed')
    },
    loadToken: function () {
      let id = path(['params', 'id'], this.$route)
      this.loading = true
      this.$apollo
        .query({
          query: GET_TOKEN_MUTATION,
          variables: {
            id: id
          }
        })
        .then(response => {
          this.transactionData = path(['data', 'getToken'], response)
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
