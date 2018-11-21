<template>
    <div @keyup.enter="submit('businessForm')">
        <el-form @submit.prevent.native ref="businessForm" :model="form">
            <el-row :gutter="15">
                <el-col :xs="24" :md="12">
                    <el-form-item
                      :rules="[
                        { required: true, message: 'First name required', trigger: 'blur' },
                       ]" prop="firstName">
                        <slot name="label"><div class="uppercase label">First name</div></slot>
                        <el-input
                            v-model="form.firstName"
                        ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :md="12">
                    <el-form-item
                        :rules="[
                        { required: true, message: 'Last name required', trigger: 'blur' },
                       ]" prop="lastName">
                        <slot name="label"><div class="uppercase label">Last name</div></slot>
                        <el-input
                            v-model="form.lastName"
                        ></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item
                :rules="[
                    { required: true, message: 'Phone number required', trigger: 'blur' },
                ]" prop="phone">
                <slot name="label"><div class="uppercase label">Phone number</div></slot>
                <el-input
                    v-model="form.phone"
                ></el-input>
            </el-form-item>

            <el-form-item
                :rules="[
                { required: true, message: 'Business name is required', trigger: 'blur' },
            ]" prop="name">
                <slot name="label"><div class="uppercase label">Business name</div></slot>
                <el-input
                    v-model="form.name"
                ></el-input>
            </el-form-item>

            <el-form-item
                :rules="[
                    { required: true, message: 'Website is required', trigger: 'blur' },
                ]" prop="website">
                <slot name="label"><div class="uppercase label">Website</div></slot>
                <el-input v-model="form.website"></el-input>
            </el-form-item>

            <el-form-item
                :rules="[
                { required: true, message: 'Fundraising method required', trigger: 'blur' },
            ]" prop="fundMethod">
                <slot name="label"><div class="uppercase label">Fundraising method</div></slot>
                <el-input
                    v-model="form.fundMethod"
                ></el-input>
            </el-form-item>

            <el-row :gutter="15">
                <el-col :xs="24" :md="12">
                    <el-form-item
                        :rules="[
                        { required: true, message: 'Fundraise start date required', trigger: 'blur' },
                    ]" prop="fundDate">
                        <slot name="label"><div class="uppercase label">Fundraise start date</div></slot>
                        <el-date-picker
                            v-model="form.fundDate"
                            type="date"
                            :prefix-icon="null"
                            format="dd/MM/yyyy"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :xs="24" :md="12">
                    <el-form-item
                        :rules="[
                        { required: true, message: 'Fundraise goal required', trigger: 'blur' },
                    ]" prop="fundGoal">
                        <slot name="label"><div class="uppercase label">Fundraise goal</div></slot>
                        <el-input
                            type="number"
                            pattern="*\d"
                            v-model="form.fundGoal"
                        ><i slot="prefix" class="fas fa-dollar-sign"></i></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <div class="">
                <el-button
                    :loading="loading"
                    class="button" type="primary"
                    @click="submit('businessForm')">
                    Get started
                </el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import { path } from 'ramda'

import { prepareValidateErrors } from '../../../helpers/errors'
import { GET_STARTED_MUTATION } from '../../../graphql/mutations/login'
import { SET_LOGIN_STATE } from '../../../store/modules/login/mutation-types'
import { ROOT } from '../../../constant/routes'

export default {
  name: 'BusinessInfo',
  data: function () {
    return {
      loading: false,
      form: {
        firstName: '',
        lastName: '',
        phone: '',
        name: '',
        webSite: '',
        fundMethod: '',
        fundDate: '',
        fundGoal: ''
      }
    }
  },
  methods: {
    submit (formName) {
      this.$refs[formName].validate((valid, error) => {
        if (valid) {
          this.loading = true
          this.$apollo.mutate({
            mutation: GET_STARTED_MUTATION,
            variables: {
              personalInput: {
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                phone: this.form.phone
              },
              organizationInput: {
                name: this.form.name,
                website: this.form.website,
                fundMethod: this.form.fundMethod,
                fundGoal: parseFloat(this.form.fundGoal),
                fundDate: this.form.fundDate
              }
            }
          }).then(response => {
            let getStarted = path(['data', 'getStarted'], response)
            if (getStarted) {
              this.$store.commit(`login/${SET_LOGIN_STATE}`, {
                key: 'login',
                value: true
              })
              this.$router.push({
                name: ROOT
              })
            }
            this.loading = false
          }).catch(response => {
            this.loading = false
          })
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
