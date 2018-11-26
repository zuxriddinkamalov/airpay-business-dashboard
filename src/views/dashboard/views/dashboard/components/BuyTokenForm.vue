<template>
    <VBody title="Buy tokens">
        <div slot="content">
            <div class="info-tooltip tooltip-slider">
                <vue-swimlane
                    :scale="0.5"
                    :transitionDelay="2000"
                    :circular="true"
                    :words="sliderText"></vue-swimlane>
            </div>
            <el-form
                :show-message="false"
                :validateOnRuleChange="false"
                @submit.prevent.native
                :rules="rulesBuyToken"
                ref="buyTokenForm"
                :model="form">
                <el-form-item class="input-with-button" prop="amount">
                    <el-input class="amount" autofocus="true" type="number" v-model="form.amount">
                        <el-select class="currency" v-model="form.currency" slot="append">
                            <el-option label="BTC" value="btc"></el-option>
                            <el-option label="ETH" value="eth"></el-option>
                        </el-select>
                    </el-input>
                    <el-row class="form-info" :gutter="10" justify="space-between">
                        <el-col :xs="24" :sm="12">
                            <span>Min contribution: 0.1 BTC</span>
                        </el-col>
                        <el-col :xs="24" :sm="12" class="text-right">
                            <a href="#" title="Contribute entire balance" class="bold">Contribute entire balance</a>
                        </el-col>
                    </el-row>
                </el-form-item>

                <el-form-item class="input-with-button">
                    <el-input :disabled="true" class="amount" type="number" :value="20">
                        <span slot="append">MOCO</span>
                    </el-input>
                    <el-row class="form-info" :gutter="10" justify="space-between">
                        <el-col :xs="24" :sm="12">
                            <span>Gas 0.001 ETH</span>&nbsp;<a href="#" title="What is gas?">What is gas?</a>
                        </el-col>
                        <el-col :xs="24" :sm="12" class="text-right">
                            <a href="#" title="Terms and conditions" class="bold">Terms and conditions</a>
                        </el-col>
                    </el-row>
                </el-form-item>

                <div class="">
                    <el-button
                        class="button" type="primary"
                        @click="submit('buyTokenForm')">
                        Purchase token for 1.2344 ETH
                    </el-button>
                </div>
            </el-form>
        </div>
    </VBody>
</template>

<script>
import { map } from 'ramda'
import VBody from '../../../components/Body'
import { prepareValidateErrors } from '../../../../../helpers/errors'
import { SET_HOME_DATA } from '../../../../../store/modules/dashboard/home/mutation-types'

const SLIDER = [
  {
    flag: 'images/flag-usa.png',
    country: 'USA',
    sum: 3.45,
    currency: 'ETH'
  },
  {
    flag: 'images/flag-usa.png',
    country: 'England',
    sum: 2.34,
    currency: 'BTC'
  },
  {
    flag: 'images/flag-usa.png',
    country: 'Brazil',
    sum: 45.4,
    currency: 'ETH'
  },
  {
    flag: 'images/flag-usa.png',
    country: 'France',
    sum: 4.9,
    currency: 'BTC'
  }
]

export default {
  name: 'BuyTokenForm',
  data: function () {
    return {
      form: {
        amount: '',
        currency: 'btc'
      }
    }
  },
  methods: {
    submit: function (formName) {
      if (this.loading) {
        return
      }
      this.$refs[formName].validate((valid, error) => {
        if (valid) {
          this.$store.commit(`dashboard/home/${SET_HOME_DATA}`, {
            key: 'buyTokenTab',
            value: 'VBuyTokenStatus'
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
  },
  computed: {
    sliderText: function () {
      return map(
        item =>
          `<img class="flag" src="${item.flag}" alt="" />
        User from <span class="bold">${
  item.country
}</span> pledge <span class="bold">${item.sum} ${item.currency}</span>`,
        SLIDER
      )
    },
    rulesBuyToken: function () {
      let checkZero = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Amount is required'))
        } else if (value < 1) {
          callback(
            new Error(`Amount can not be less then ${1}`)
          )
        } else {
          callback()
        }
      }
      return {
        amount: [
          {
            validator: checkZero,
            trigger: ['submit', 'blur']
          }
        ]
      }
    }
  },
  components: {
    VBody
  }
}
</script>

<style lang="sass">
    a
        color: var(--primary-color)
    .form-info
        font-size: 16px
        line-height: 1.3
        margin-top: 6px
    .amount
        & *, & input
            font-size: 24px
            color: #000
            font-weight: bold
    .currency
        .el-input--suffix
            width: 90px
    .flag
        max-width: 20px
        margin-right: 10px
        vertical-align: middle
    .text-slider-root
        min-height: 23px
    .tooltip-slider
        margin-bottom: 25px
        ul li
            text-align: left

</style>
