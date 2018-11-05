<template>
    <VBody title="Customize widget">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :md="12">
                    <h3 class="header-id">Easy customize your widget</h3>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <div class="detail">
                <el-form @submit.prevent.native label-width="300px" size="medium">
                    <el-form-item label="Crowdsale">
                        <el-input v-model="widgetSettings.name"></el-input>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item class="input-with-button color" label="Main color">
                        <el-input class="bold" :readonly="true" v-model="widgetSettings.mainColor">
                            <el-color-picker
                                size="mini"
                                slot="append"
                                color-format="hex"
                                v-model="widgetSettings.mainColor">
                            </el-color-picker>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="input-with-button color" label="Background color">
                        <el-input class="bold" :readonly="true" v-model="widgetSettings.bgColor">
                            <el-color-picker
                                size="mini"
                                slot="append"
                                color-format="hex"
                                v-model="widgetSettings.bgColor">
                            </el-color-picker>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Width / Height">
                        <el-row type="flex" :gutter="15">
                            <el-col :xs="24" :md="12">
                                <el-form-item>
                                    <el-input v-model="widgetSettings.width"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :md="12">
                                <el-form-item>
                                    <el-input v-model="widgetSettings.width"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <div class="textarea-with-button">
                        <el-form-item class="input-with-button" label="Iframe">
                            <el-input
                                type="textarea"
                                :rows="4"
                                resize="none"
                                :readonly="true"
                                v-model="iframe">
                            </el-input>
                            <el-button
                                v-clipboard:copy="iframe"
                                v-clipboard:success="copySuccess"
                                class="input-button"
                                type="text">Copy</el-button>
                        </el-form-item>
                    </div>

                </el-form>
            </div>
        </div>

        <div class="preview-widget" v-html="iframe">
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'
import { debounceTime } from 'rxjs/operators'
import '@/plugins/vue-rx'
import '@/plugins/vue-clipboard'
import VBody from '../../components/Body'

export default {
  name: 'WidgetGenerator',
  data: function () {
    return {
      widgetSettings: {
        width: '1080px',
        height: '1080px',
        mainColor: '#5f7bf6',
        bgColor: '#12f617'
      },
      iframe: ''
    }
  },
  components: {
    VBody
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    })
  },
  mounted () {
    let self = this
    this.$watchAsObservable('widgetSettings', {
      deep: true,
      immediate: true
    }).pipe(debounceTime(500)).subscribe(
      ({ newValue, oldValue }) => {
        self.generate()
      },
      err => console.error(err),
      () => console.log('complete')
    )
  },
  methods: {
    generate: function () {
      let { width, height, mainColor, bgColor } = this.widgetSettings
      let crowdsale = this.$route.params.id
      width = parseInt(width)
      height = parseInt(height)
      mainColor = mainColor.replace(/^#/, 1)
      bgColor = bgColor.replace(/^#/, 1)
      this.iframe = `<iframe width="${width}" height="${height}" src="https://panel.airpay.network?crowdsale=${crowdsale}&bgColor=${bgColor}&color=${mainColor}"></iframe>`
    },
    copySuccess: function () {
      this.$message({
        message: 'Successfully copied',
        type: 'success'
      })
    }
  }
}
</script>

<style lang="sass">
    .color input ~ .el-input-group__append
        padding: 0 5px
    .preview-widget
        position: relative
        text-align: center
        margin-top: 20px
        min-height: 400px
        max-width: 100%
        overflow: hidden
        border: 3px solid #fff
        border-radius: 10px
        /*&:after*/
            /*color: #fff*/
            /*font-size: 60px*/
            /*font-weight: bold*/
            /*content: 'Widget preview'*/
            /*position: absolute*/
            /*z-index: 0*/
            /*left: 0*/
            /*right: 0*/
            /*top: 160px*/

</style>
