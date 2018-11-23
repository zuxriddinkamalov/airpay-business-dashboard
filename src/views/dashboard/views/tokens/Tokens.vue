<template>
    <VBody title="Tokens">
        <div slot="header">
            <el-row type="flex" align="middle" justify="space-around">
                <el-col class="text-right">
                    <el-button @click.native="addToken" class="shadow" type="primary"><i class="fa fa-plus" aria-hidden="true"></i> Add token</el-button>
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
                    label="Name"
                    width="130">
                    <template slot-scope="scope">
                        <span class="bold">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Type"
                    width="130">
                    <template slot-scope="scope">
                        <span class="bold">{{ scope.row.type }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Network"
                    width="130">
                    <template slot-scope="scope">
                        <span class="bold">{{ scope.row.network }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    label="Symbol"
                    width="130">
                    <template slot-scope="scope">
                        <span class="bold">{{ scope.row.symbol }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="Contract address">
                    <template slot-scope="scope">
                        <div class="table-tag meta-name contract-address">
                            <span class="uppercase bold" style="margin-right: 10px">{{ scope.row.contractAddress }}</span>
                            <i class="fas fa-external-link-alt" aria-hidden="true"></i>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'

import VBody from '../../components/Body'
import { ADD_TOKEN } from '../../../../constant/routes'

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
    $route (to, from) {
      this.loadTokens()
    }
  },
  methods: {
    addToken: function () {
      this.$router.push({
        name: ADD_TOKEN
      })
    },
    loadTokens: function () {
      let activeBusiness = this.activeBusiness.id
      this.loading = true
    }
  }
}
</script>

<style lang="sass" scoped>
    .contract-address
        width: 100%
</style>
