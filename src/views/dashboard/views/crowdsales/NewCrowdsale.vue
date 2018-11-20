<template>
    <VBody title="New crowdsale">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :md="12">
                    <h3 class="header-id">Quick start crowdsale compaign</h3>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <div class="detail" v-if="crowdsaleData">
                <el-form @submit.prevent.native ref="crowdsaleForm" label-width="300px" size="medium" :model="crowdsaleData">
                    <el-form-item
                        label="Name"
                        prop="name"
                        :rules="[
                            { required: true, message: 'Please enter crowdsale name', trigger: 'blur' },
                        ]">
                        <el-input placeholder="Name" v-model="crowdsaleData.name"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Hardcap"
                        prop="hardcap"
                        :rules="[
                            { required: true, message: 'Please enter crowdsale hardcap', trigger: 'blur' },
                        ]">
                        <el-input placeholder="Hardcap" v-model="crowdsaleData.hardcap">
                            <i slot="prefix" class="fas fa-dollar-sign"></i>
                        </el-input>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item
                        label="Start date"
                        prop="startDate"
                        :rules="[
                            { required: true, message: 'Please enter crowdsale start date', trigger: 'blur' },
                        ]">
                        <el-date-picker
                            placeholder="Date start"
                            format="dd/MM/yyyy"
                            :editable="false"
                            v-model="crowdsaleData.startDate"
                            type="date">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item
                        label="Date end"
                        prop="endDate"
                        :rules="[
                        { required: true, message: 'Please enter crowdsale end date', trigger: 'blur' },
                    ]">
                        <el-date-picker
                            placeholder="Date end"
                            format="dd/MM/yyyy"
                            :editable="false"
                            v-model="crowdsaleData.endDate"
                            type="date">
                        </el-date-picker>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item
                        label="Token"
                        prop="token"
                        :rules="[
                            { required: true, message: 'Please select token', trigger: 'blur' },
                        ]">
                        <el-select
                            v-model="crowdsaleData.token"
                            default-first-option>
                            <el-option label="Moco ERC-20 Token" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item
                        label="Distribution wallet"
                        prop="distWallet"
                        :rules="[
                            { required: true, message: 'Please select distribution wallet', trigger: 'blur' },
                        ]">
                        <el-select
                            v-model="crowdsaleData.distWallet"
                            default-first-option>
                            <el-option label="Moco ETH active wallet" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item
                        label="Whitelist"
                        prop="whiteList"
                        :rules="[
                            { required: true, message: 'Please select whitelist', trigger: 'blur' },
                        ]">
                        <el-select
                            v-model="crowdsaleData.whiteList"
                            default-first-option>
                            <el-option label="Moco whitelist" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Rate">
                        <div class="detail-table-root">
                            <el-table
                                class="detail-table"
                                :data="crowdsaleData.rate">
                                <el-table-column
                                    label="Currency"
                                    width="80">
                                    <template slot-scope="scope">
                                        <span class="bold">{{ scope.row.currency }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Fund wallet"
                                    width="155">
                                    <template slot-scope="scope">
                                        <el-form-item
                                            :show-message="false"
                                            :prop="'rate.'+scope.$index+'.fundWallet'"
                                            :rules="[
                                                { required: true, message: `Please select fund wallet(${scope.$index+1})`, trigger: 'blur' },
                                            ]">
                                            <el-select
                                                v-model="scope.row.fundWallet"
                                                default-first-option>
                                                <el-option label="Moco BTC gold wallet" value="1"></el-option>
                                                <el-option label="Moco ETH gold wallet" value="2"></el-option>
                                            </el-select>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Rate"
                                    width="130">
                                    <template slot-scope="scope">
                                        <el-form-item
                                            :show-message="false"
                                            :prop="'rate.'+scope.$index+'.rate'"
                                            :rules="[
                                                { required: true, message: `Please enter rate(${scope.$index + 1})`, trigger: 'blur' },
                                            ]">
                                            <el-input v-model="scope.row.rate"></el-input>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Min. amount"
                                    width="110">
                                    <template slot-scope="scope">
                                        <el-form-item
                                            :show-message="false"
                                            :prop="'rate.'+scope.$index+'.minAmount'"
                                            :rules="[
                                                { required: true, message: `Please enter min. amount(${scope.$index + 1})`, trigger: 'blur' },
                                            ]">
                                            <el-input v-model="scope.row.minAmount"></el-input>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Timeline bonuses">
                        <div class="bonus-switch">
                            <el-switch
                                v-model="crowdsaleData.enabled"
                                active-color="#EBF0F6"
                                inactive-color="#EBF0F6"
                                :active-value="true"
                                :inactive-value="false">
                            </el-switch>
                        </div>

                        <div class="detail-table-root">
                            <el-table
                                class="detail-table"
                                :data="crowdsaleData.timelineBonuses.bonuses">
                                <el-table-column
                                    label="Milestone"
                                    width="100">
                                    <template slot-scope="scope">
                                        <span class="bold">Milestone {{ scope.$index + 1 }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="To date"
                                    width="175">
                                    <template slot-scope="scope">
                                        <el-form-item
                                            :show-message="false"
                                            :prop="'timelineBonuses.bonuses.'+scope.$index+'.toDate'"
                                            :rules="[
                                                { required: true, message: `Please choose bonus date(${scope.$index + 1})`, trigger: 'blur' },
                                            ]">
                                            <el-date-picker
                                                format="dd/MM/yyyy"
                                                :editable="false"
                                                v-model="scope.row.toDate"
                                                type="date">
                                            </el-date-picker>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    label="Bonus, %"
                                    width="130">
                                    <template slot-scope="scope">
                                        <el-form-item
                                            :show-message="false"
                                            :prop="'timelineBonuses.bonuses.'+scope.$index+'.bonus'"
                                            :rules="[
                                                { required: true, message: `Please enter bonus(${scope.$index + 1})`, trigger: 'blur' },
                                            ]">
                                            <el-input v-model="scope.row.bonus"></el-input>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column>
                                    <template slot-scope="scope">
                                        <el-button class="remove-bonus" @click.native="removeBonus(scope.$index)" type="text" icon="el-icon-circle-close"></el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-button @click.native="cloneMilestone" class="shadow clone-button" size="mini">+ Add milestone</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="detail-control-buttons">
                <el-button
                    :loading="loading"
                    type="primary"
                    @click="createCrwdsale('crowdsaleForm')">Create crowdsale</el-button>
            </div>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { prop } from 'ramda'

import TimeMixin from '@/mixins/time'
import VBody from '../../components/Body'
import { prepareValidateErrors } from '../../../../helpers/errors'
import { CREATE_CROWDSALE } from '../../../../graphql/mutations/dashboard/crowdsales'

export default {
  name: 'CrowdsaleDetail',
  data: function () {
    return {
      loading: false,
      crowdsaleData: {
        name: '',
        hardcap: '',
        startDate: '',
        endDate: '',
        token: '1',
        distWallet: '1',
        whiteList: '1',
        rate: [
          {
            currency: 'BTC',
            fundWallet: '1',
            rate: '',
            minAmount: ''
          },
          {
            currency: 'ETH',
            fundWallet: '2',
            rate: '',
            minAmount: ''
          }
        ],
        timelineBonuses: {
          enabled: true,
          bonuses: []
        }
      }
    }
  },
  mixins: [TimeMixin],
  components: {
    VBody
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    })

  },
  methods: {
    cloneMilestone: function () {
      return this.crowdsaleData.timelineBonuses.bonuses.push({
        bonus: '',
        toDate: ''
      })
    },
    removeBonus: function (index) {
      return this.crowdsaleData.timelineBonuses.bonuses.splice(index, 1)
    },
    createCrwdsale: function (formName) {
      let activeBusiness = prop('id', this.activeBusiness)
      this.$refs[formName].validate((valid, error) => {
        if (valid) {
          this.$apollo
            .mutate({
              mutation: CREATE_CROWDSALE,
              variables: {
                business: activeBusiness,
                input: {
                  hardcap: this.crowdsaleData.hardcap,
                  startDate: this.crowdsaleData.startDate,
                  endDate: this.crowdsaleData.endDate,
                  name: this.crowdsaleData.name,
                  whitelist: this.crowdsaleData.whitelist,
                  assetAccept: {

                  },
                  asset: {

                  },
                  assetHotWallet: this.crowdsaleData.assetHotWallet
                }
              }
            })
            .then(response => {
              // this.crowdsaleData = path(['data', 'getCrowdsale'], response)
              this.loading = false
            })
            .catch(response => {
              this.$message.error(response)
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
    .clone-button
        background: #FEFEFE
        margin: 10px
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
    .remove-bonus
        color: #B3C0CF
        &:hover
            color: #949496
    .bonus-switch
        margin-bottom: 15px
        .el-switch .el-switch__core:after
            background-color: #a0a0a0
        .el-switch.is-checked .el-switch__core:after
            background-color: #3A7DFC
</style>
