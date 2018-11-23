<template>
    <VBody title="Add token">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :md="12">
                    <h3 class="header-id">Add token information</h3>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <div class="detail">
                <el-form @submit.prevent.native ref="tokenForm" label-width="300px" size="medium" :model="tokenData">
                    <el-form-item
                        label="Symbol"
                        prop="symbol"
                        :rules="[
                            { required: true, message: 'Please enter token symbol', trigger: 'blur' },
                        ]">
                        <el-input placeholder="Symbol" v-model="tokenData.symbol"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Decimal"
                        prop="decimal"
                        :rules="[
                            { required: true, message: 'Please enter token decimal', trigger: 'blur' },
                        ]">
                        <el-input placeholder="Decimal" v-model="tokenData.decimal"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Contract address"
                        prop="contractAddress"
                        :rules="[
                            { required: true, message: 'Please enter contract address', trigger: 'blur' },
                        ]">
                        <el-input placeholder="Contract address" v-model="tokenData.contractAddress"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="detail-control-buttons">
                <el-button
                    :loading="loading"
                    type="primary"
                    @click="addToken('tokenForm')">Save</el-button>
            </div>
        </div>
    </VBody>
</template>

<script>

import TimeMixin from '@/mixins/time'
import VBody from '../../components/Body'
import { prepareValidateErrors } from '../../../../helpers/errors'

export default {
  name: 'AddToken',
  data: function () {
    return {
      loading: false,
      tokenData: {
        symbol: '',
        decimal: '',
        contractAddress: ''
      }
    }
  },
  mixins: [TimeMixin],
  components: {
    VBody
  },
  methods: {
    addToken: function (formName) {
      this.$refs[formName].validate((valid, error) => {
        if (valid) {
          this.loading = true
        } else {
          let message = prepareValidateErrors(error)
          this.$message({
            dangerouslyUseHTMLString: true,
            type: 'error',
            message: message
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
