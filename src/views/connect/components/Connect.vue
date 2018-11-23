<template>
    <div @keyup.enter="submit">
        <el-form @submit.prevent.native ref="connectFormRef" :model="form">
            <el-form-item
                prop="method">
                <slot name="label"><div class="big-title bold">Enter using Ethereum wallet:</div></slot>
                <el-select v-model="form.method">
                    <el-option
                        label="Metamask"
                        value="metamask">
                    </el-option>
                    <el-option
                        label="Trezer"
                        value="trezer">
                    </el-option>
                </el-select>
            </el-form-item>

            <div class="">
                <el-button
                    :loading="loading"
                    class="button" type="primary"
                    @click="connectSubmit('connectFormRef')">
                    Login
                </el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import { prepareValidateErrors } from '../../../helpers/errors'

export default {
  name: 'ConnectForm',
  data: function () {
    return {
      loading: false,
      form: {
        method: 'metamask'
      }
    }
  },
  methods: {
    connectSubmit (formName) {
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

<style lang="sass">

</style>
