<template>
    <div @keyup.enter="submit">
        <el-form @submit.prevent.native ref="loginForm" :model="form">
            <el-form-item
              class="email"
              :rules="[
                { required: true, message: 'Email required', trigger: 'blur' },
                { type: 'email', message: 'Please enter valid email', trigger: 'blur' }
               ]"
              prop="email">
                <slot name="label"><div class="uppercase label">Please enter your email</div></slot>
                <el-input
                    placeholder="Please enter email"
                    type="email"
                    v-model="form.email"
                ></el-input>
            </el-form-item>

            <div v-if="!$R.prop('hash', login)" class="">
                <el-button
                    :loading="loading"
                    class="button" type="primary"
                    @click="loginSubmit('loginForm')">
                    Login
                </el-button>
            </div>
        </el-form>
        <div v-if="$R.prop('hash', login)" class="verification">
            <el-form @submit.prevent.native ref="authorizationForm" :model="form">
                <el-form-item
                    class="code input-with-button"
                    prop="code"
                    :rules="[
                    { required: true, message: 'Please enter verification code 4 digits', trigger: 'blur' },
                ]">
                    <slot name="label">
                        <div class="uppercase label">we send code to your email</div>
                    </slot>
                    <el-input autofocus="true" pattern="\d*" type="number" placeholder="Verification code" v-model="form.code">
                        <el-button
                           @click="loginSubmit('loginForm')"
                           class="input-button"
                           slot="append"
                           type="text">Resend</el-button>
                    </el-input>
                </el-form-item>
                <el-button
                    :loading="loading"
                    class="button" type="primary"
                    @click="authorization('authorizationForm')">
                    Authentication
                </el-button>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { prop, path } from 'ramda'

import { prepareValidateErrors } from '../../../helpers/errors'
import { AUTHORIZATION_MUTATION, ENTER_MUTATION } from '../../../graphql/mutations/login'
import { SET_LOGIN_STATE } from '../../../store/modules/login/mutation-types'
import { ROOT } from '../../../constant/routes'

export default {
  name: 'LoginForm',
  data: function () {
    return {
      loading: false,
      form: {
        email: '',
        code: ''
      }
    }
  },
  methods: {
    submit () {
      if (this.loading) {
        return
      }
      if (prop('hash', this.login)) {
        this.authorization('authorizationForm')
      } else {
        this.loginSubmit('loginForm')
      }
    },
    loginSubmit (formName) {
      this.$refs[formName].validate((valid, error) => {
        if (valid) {
          this.loading = true
          this.$apollo.mutate({
            mutation: ENTER_MUTATION,
            variables: {
              email: this.form.email
            }
          }).then(response => {
            let hash = path(['data', 'accountEnter'], response)
            this.$store.commit(`login/${SET_LOGIN_STATE}`, {
              key: 'hash',
              value: hash
            })
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
    },
    authorization (formName) {
      let self = this
      let enter = new Promise(function (resolve, reject) {
        self.$refs['loginForm'].validate(
          (valid, error) => {
            if (valid) {
              resolve()
            } else {
              let message = prepareValidateErrors(error)
              self.$message({
                dangerouslyUseHTMLString: true,
                type: 'error',
                message: message
              })
            }
          }
        )
      })
      let verification = new Promise(function (resolve, reject) {
        self.$refs[formName].validate((valid, error) => {
          if (valid) {
            resolve()
          }
        })
      })
      Promise.all([enter, verification]).then(function () {
        self.loading = true
        self.$apollo.mutate({
          mutation: AUTHORIZATION_MUTATION,
          variables: {
            hash: prop('hash', self.login),
            code: prop('code', self.form)
          }
        }).then(response => {
          let accountAuth = path(['data', 'accountAuth'], response)
          let isStarted = prop('isStarted', accountAuth)
          let authorization = prop('authorization', accountAuth)
          self.$store.commit(`login/${SET_LOGIN_STATE}`, {
            key: 'accountAuth',
            value: accountAuth
          })
          sessionStorage.setItem('token', authorization)
          if (isStarted) {
            self.$store.commit(`login/${SET_LOGIN_STATE}`, {
              key: 'tab',
              value: 'VBusinessInfo'
            })
          } else {
            self.$store.commit(`login/${SET_LOGIN_STATE}`, {
              key: 'login',
              value: true
            })
            self.$router.push({
              name: ROOT
            })
          }
          self.loading = false
        }).catch(response => {
          self.loading = false
        })
      })
    }
  },
  computed: {
    ...mapState([
      'login'
    ])
  }
}
</script>

<style lang="sass">

</style>
