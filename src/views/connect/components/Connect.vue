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
                </el-select>
                <div class="help-url bold">
                    <a href="#" @click.prevent="helpDialog=true" title="How to get ethereum wallet?">How to get ethereum wallet?</a>
                </div>
            </el-form-item>

            <div class="">
                <el-button
                    :loading="loading"
                    class="button" type="primary"
                    @click="connectSubmit('connectFormRef')">
                    Connect using {{ form.method | capitalize }}
                </el-button>
            </div>
            <el-dialog
                :show-close="false"
                custom-class="help-dialog"
                :visible.sync="helpDialog"
                width="40%">
                <div class="dialog-header">
                    <div class="dialog-title bold">
                        How to get ethereum wallet?
                    </div>
                    <div class="dialog-exit" @click.prevent="helpDialog=false">
                        Return to enter
                    </div>
                </div>
                <div>
                    <el-tabs>
                        <el-tab-pane>
                            <div slot="label"><span class="tab-title bold uppercase">For desktop</span></div>
                            <div class="help-block">
                                <h4 class="bold">Metamask browser extension</h4>
                                <div class="help-text bold">Browser extension most quickest and easiest way to create
                                    your own Ethereum wallet and secure use it with Moco Wallet</div>
                                <ul class="help-links">
                                    <li><a href="#" title="" target="_blank">Get Chrome extension</a></li>
                                    <li><a href="#" title="" target="_blank">Get Firefox Opera</a></li>
                                    <li><a href="#" title="" target="_blank">Get Brave</a></li>
                                </ul>
                            </div>
                            <div class="help-block">
                                <h4 class="bold">Hardware wallets</h4>
                                <div class="help-text bold">Browser extension most quickest and easiest way to create
                                    your own Ethereum wallet and secure use it with Moco Wallet</div>
                                <ul class="help-links">
                                    <li><a href="#" title="" target="_blank">Trezor</a></li>
                                    <li><a href="#" title="" target="_blank">Ledger</a></li>
                                </ul>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane>
                            <div slot="label"><span class="tab-title bold uppercase">For mobile</span></div>
                            <div class="">

                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </el-dialog>
        </el-form>
    </div>
</template>

<script>
import TextMixin from '@/mixins/text'
import { prepareValidateErrors } from '../../../helpers/errors'
import { SET_CONNECT_STATE } from '../../../store/modules/connect/mutation-types'
import { ROOT } from '../../../constant/routes'

export default {
  name: 'ConnectForm',
  data: function () {
    return {
      loading: false,
      form: {
        method: 'metamask'
      },
      helpDialog: false
    }
  },
  methods: {
    async connectSubmit (formName) {
      this.$refs[formName].validate(async (valid, error) => {
        if (valid) {
          let self = this
          this.loading = true
          try {
            await ethereum.enable()
            self.$store
              .dispatch('connect/sign')
              .then(done => {
                self.$router.push({
                  name: ROOT
                })
                self.$store.commit(`connect/${SET_CONNECT_STATE}`, {
                  key: 'sign',
                  value: done
                })
              })
              .catch(error => {
                this.$message({
                  dangerouslyUseHTMLString: true,
                  type: 'error',
                  message: error
                })
                return false
                console.log('ERROR', error)
              })
          } catch (error) {
            this.$message({
              dangerouslyUseHTMLString: true,
              type: 'error',
              message: error
            })
            return false
          }
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
  },
  mixins: [TextMixin]
}
</script>

<style lang="sass">
    .help-dialog
        .dialog-header
            display: flex
            justify-content: space-between
            align-items: center
            margin-bottom: 20px
            .dialog-title
                font-size: 18px
            .dialog-exit
                color: $--color-primary
                cursor: pointer
                padding-left: 15px
                position: relative
                &:after
                    font-family: 'Font Awesome 5 Free', sans-serif
                    content: '\f00d'
                    position: absolute
                    font-style: normal
                    font-weight: 900
                    left: 0
                    top: 1px
                &:hover
                    color: rgba($--color-primary, 0.8)
        .help-block
            margin-bottom: 20px
            h4
                font-size: 19px
            .help-text
                font-size: 14px
                width: 60%
                margin: 15px 0
                line-height: 1.3
            .help-links
                flex-wrap: wrap
                display: flex
                & li
                    margin-right: 15px
                    margin-bottom: 5px
                    a
                        color: $--color-primary
                        padding-right: 25px
                        position: relative
                        &:after
                            content: '\2192'
                            position: absolute
                            right: 0
                            font-size: 17px
                            top: 1px
        .el-dialog__header
            display: none
        .el-dialog__body
            padding: 20px 15px 30px
        .el-tabs__active-bar
            height: 4px
        .el-tabs__header
            margin-bottom: 35px
        .el-tabs__nav-scroll
            display: flex
            .el-tabs__nav, .el-tabs__item
                flex-grow: 1
                width: 50%
</style>
