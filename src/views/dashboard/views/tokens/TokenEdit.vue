<template>
    <VBody :title="detail.name + ' ' + detail.symbol">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :md="12">
                    <h3 class="header-id">Config your crowdsale compaign</h3>
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
                        label="Symbol"
                        prop="symbol"
                        :rules="[
                            { required: true, message: 'Please enter crowdsale symbol', trigger: 'blur' },
                    ]">
                        <el-input placeholder="Symbol" v-model="crowdsaleData.symbol"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Start date"
                        prop="startDate"
                        :rules="[
                            { required: true, message: 'Please enter crowdsale start date', trigger: 'blur' },
                        ]">
                        <el-date-picker
                            placeholder="Start date"
                            format="dd/MM/yyyy"
                            :editable="false"
                            v-model="crowdsaleData.startDate"
                            type="date">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item
                        label="End date"
                        prop="endDate"
                        :rules="[
                        { required: true, message: 'Please enter crowdsale end date', trigger: 'blur' },
                    ]">
                        <el-date-picker
                            placeholder="End date"
                            format="dd/MM/yyyy"
                            :editable="false"
                            v-model="crowdsaleData.endDate"
                            type="date">
                        </el-date-picker>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item
                        label="Bonus"
                        prop="bonus"
                        :rules="[
                        { required: true, message: 'Please enter crowdsale bonus', trigger: 'blur' },
                    ]">
                        <el-input pattern="\d*" type="number" min="0" max="100" placeholder="Bonus" v-model="crowdsaleData.bonus"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Rate BTC"
                        prop="rateBTC"
                        :rules="[
                        { required: true, message: 'Please enter crowdsale rate BTC', trigger: 'blur' },
                    ]">
                        <el-input pattern="\d*" type="number" placeholder="Rate BTC" v-model="crowdsaleData.rateBTC"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Rate ETH"
                        prop="rateETH"
                        :rules="[
                        { required: true, message: 'Please enter crowdsale rate ETH', trigger: 'blur' },
                    ]">
                        <el-input pattern="\d*" type="number" placeholder="Rate ETH" v-model="crowdsaleData.rateETH"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="detail-control-buttons">
                <el-button
                    :loading="loading"
                    type="primary"
                    @click="saveChanges('crowdsaleForm')">Save changes</el-button>
            </div>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { path, find, propEq, prop } from 'ramda'

import TimeMixin from '@/mixins/time'
import VBody from '../../components/Body'
import { GET_CROWDSALE_MUTATION } from '../../../../graphql/mutations/dashboard/crowdsales'

export default {
  name: 'CrowdsaleDetail',
  data: function () {
    return {
      loading: false,
      crowdsaleData: null
    }
  },
  mixins: [TimeMixin],
  components: {
    VBody
  },
  mounted () {
    this.loadCrowdsale()
    this.crowdsaleData = Object.assign({}, this.detail)
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness,
      detail: function (state) {
        let id = path(['params', 'id'], this.$route)
        return find(propEq('id', id), state.dashboard.crowdsales.crowdsalesList)
      }
    })

  },
  methods: {
    saveChanges: function (formName) {
      this.$refs[formName].validate((valid, error) => {
        if (valid) {
          console.warn('save')
        }
      })
    },
    loadCrowdsale: function () {
      let id = path(['params', 'id'], this.$route)
      let activeBusiness = prop('id', this.activeBusiness)
      this.loading = true
      this.$apollo
        .query({
          query: GET_CROWDSALE_MUTATION,
          variables: {
            business: activeBusiness,
            id: id
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
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
