<template>
    <div>
        <div class="line-chart">
            <div class="chart-info">
                <div class="chart-info-item">
                    <div class="title">Today raised</div>
                    <div class="amount">
                        <span class="icon"><i class="fas fa-dollar-sign" aria-hidden="true"></i></span>
                        <span class="bold">{{ 15343 | money }}</span>
                    </div>
                    <div class="chart-indicator on"></div>
                </div>
                <div class="chart-info-item">
                    <div class="title">Today raised</div>
                    <div class="amount">
                        <span class="icon"><i class="fas fa-dollar-sign" aria-hidden="true"></i></span>
                        <span class="bold">{{ 763988 | money }}</span>
                    </div>
                    <div class="chart-indicator"></div>
                </div>
                <div class="chart-info-item">
                    <div class="title">New users ({{ currentData.date }})</div>
                    <div class="amount">
                        <span class="bold">{{ currentData.value }}</span>
                    </div>
                    <div class="chart-indicator"></div>
                </div>

            </div>
            <Analytics :chartData="analyticData" :options="options" />
        </div>
        <div class="dashboard-analytics">
            <VBody title="Analytics">
                <div slot="header">
                    <el-row>
                        <el-col :xs="24" :md="12">
                            <h3 class="header-id">Get detailed analytics info</h3>
                        </el-col>
                    </el-row>
                    <div class="filter">
                        <div>
                            <el-select
                                :clearable="true"
                                class="filter-select"
                                v-model="filter.filter"
                                default-first-option>
                                <template slot="prefix"><div class="filter-select-prefix">Filter:</div> </template>
                                <el-option label="Transactions" value="transactions"></el-option>
                                <el-option label="Distributions" value="distributions"></el-option>
                                <el-option label="Tokens" value="tokens"></el-option>
                            </el-select>
                        </div>
                        <div>
                            <el-date-picker
                                v-model="filter.date"
                                range-separator="→"
                                type="daterange"
                                format="dd/MM/yyyy"
                                value-format="dd-MM-yyyy"
                                start-placeholder="Start date"
                                end-placeholder="End date">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
                <div slot="content">
                    <div class="detail">
                        <el-form label-width="200px" size="medium">
                            <el-form-item label="Total transactions">
                                <span class="bold">{{ 2677 | money }}</span>
                            </el-form-item>
                            <el-form-item label="Total sum">
                                <div class="bold">
                                    <span class="icon"><i class="fa fa-usd" aria-hidden="true"></i></span>
                                    {{ 3433233 | money }}
                                </div>
                            </el-form-item>
                            <el-form-item label="Avarage $/user">
                                <div class="bold">
                                    <span class="icon"><i class="fa fa-usd" aria-hidden="true"></i></span>
                                    {{ 3455 | money }}
                                </div>
                            </el-form-item>
                            <el-form-item label="Avarage $/transaction">
                                <div class="bold">
                                    <span class="icon"><i class="fa fa-usd" aria-hidden="true"></i></span>
                                    {{ 8344 | money }}
                                </div>
                            </el-form-item>
                            <el-form-item label="Rejected transactions">
                                <span class="bold">{{ 123 }}</span>
                            </el-form-item>
                            <el-form-item label="Rejected sum">
                                <div class="bold">
                                    <span class="icon"><i class="fa fa-usd" aria-hidden="true"></i></span>
                                    {{ 230439 | money }}
                                </div>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </VBody>
        </div>
    </div>
</template>

<script>
import { nth, prop } from 'ramda'
import TextMixin from '@/mixins/text'

import VBody from '../../components/Body'
import Analytics from './components/AnalyticsChart'

const TEST_DATA = {
  labels: ['01/08/2018', '02/08/2018', '03/08/2018', '04/08/2018', '05/08/2018', '06/08/2018'],
  datasets: [
    {
      backgroundColor: 'transparent',
      data: [6000, 7366, 9840, 12340, 10000, 15400]
    }
  ]
}

const OPTIONS = {
  responsive: true,
  elements: {
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 20
      }
    },
    line: {
      borderColor: 'rgba(255,255,255,0.5)'
    },
    point: {
      radius: 4,
      borderWidth: 5,
      hoverRadius: 5,
      hoverBorderWidth: 6,
      borderColor: 'rgba(255,255,255,1)'
    }
  },
  legend: {
    display: false
  },
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        display: false,
        stacked: true,
        gridLines: {
          display: false
        }
      }
    ],
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false
        }
      }
    ]
  }
}

export default {
  name: 'Dashboard',
  data: function () {
    return {
      filter: {
        filter: '',
        date: []
      },
      currentData: '',
      analyticData: TEST_DATA
    }
  },
  computed: {
    query: function () {
      let filter = this.filter.filter
      let startDate = nth(0, this.filter.date)
      let endDate = nth(1, this.filter.date)
      return {
        filter,
        startDate,
        endDate
      }
    },
    options: function () {
      let self = this
      return {
        ...OPTIONS,
        tooltips: {
          mode: 'point',
          enabled: true,
          callbacks: {
            label: function (tooltipItem, data) {
              self.currentData = {
                date: prop('xLabel', tooltipItem),
                value: prop('yLabel', tooltipItem)
              }
            }
          }
        }
      }
    }
  },
  watch: {
    query: function (newValue, oldValue) {
      let oldQuery = this.$route.query
      this.$router.push({
        query: {
          ...oldQuery,
          ...newValue
        }
      })
    }
  },
  mixins: [TextMixin],
  components: {
    Analytics,
    VBody
  }
}
</script>

<style lang="sass">
    .dashboard-analytics
        .el-form-item
            border-bottom: 1px solid #EDF3FB
    .content
        .el-form-item__label
            padding: 0 30px 0 0
    .el-form-item__content
        font-size: 18px
        color: #424242
        i
            font-size: 14px
    .dashboard-analytics
        margin-top: 35px
    .line-chart
        position: relative
        max-height: 400px
        background: #377DFE
        padding: 20px
        box-sizing: border-box
        overflow: hidden
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        -webkit-box-shadow: 0 0 12px -1px rgba(3,120,223,1)
        -moz-box-shadow: 0 0 12px -1px rgba(3,120,223,1)
        box-shadow: 0 5px 20px 0 rgba(3,120,223,0.6)
    .chart-info
        color: #fff
        display: flex
        flex-wrap: wrap
        align-items: center
        align-content: center
        justify-content: flex-start
        margin-bottom: 15px
        .chart-indicator
            max-width: 30px
            height: 5px
            background: rgba(255, 255, 255, 0.4)
            border-radius: 5px
            margin: 5px
            margin-left: 0px
        .on
            background: #fff
        .icon
            font-size: 18px
            margin-right: 6px
        .amount
            font-size: 22px
            letter-spacing: 1px
        .title
            letter-spacing: 0.3px
        .chart-info-item
            line-height: 1.4
            margin-right: 60px
</style>
