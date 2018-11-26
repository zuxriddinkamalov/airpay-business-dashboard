<template>
    <div class="verification-status">
        <VBody custom-style="identity-process" title="Identity verification in process">
            <div slot="content">
                <el-row>
                    <el-col :xs="24" :sm="18">
                        <div class="info-tooltip">
                            <div class="attention-content"><span class="bold uppercase">Attention</span>
                                Be aware that you send
                                BTC to correct address with correct fees amount to quickest execution</div>
                        </div>
                        <div class="bold">
                            Thank you for waiting, we will do our best to make it process more quickest as
                            possible. We will notify you when verification be done using your email address.
                        </div>
                    </el-col>
                </el-row>
            </div>
        </VBody>
        <VBody custom-style="identity-success" title="Identity verification successfully completed">
            <div slot="content">
                <el-row>
                    <el-col :xs="24" :sm="18">
                        <span class="bold">Thank you for waiting your!</span>
                    </el-col>
                </el-row>
            </div>
        </VBody>
        <VBody custom-style="identity-failed" title="Identity verification failed">
            <div slot="content">
                <el-row>
                    <el-col :xs="24" :sm="18">
                        <span class="bold">We are sorry but your document is not verified.</span>
                    </el-col>
                </el-row>
            </div>
        </VBody>
    </div>
</template>

<script>
import VBody from '../../../components/Body'

export default {
  name: 'VerificationStatus',
  data: function () {
    return {
      status: 'PENDING'
    }
  },
  components: {
    VBody
  }
}
</script>

<style lang="sass">
    .verification-status
        .root
            padding: 0 40px 20px
            .content
                line-height: 1.4
            .header
                position: relative
                &:before
                    content: '\2022'
                    position: absolute
                    left: -20px
                    top: 7px
                    font-size: 60px
            .content
                color: #7F7F7F
        .identity-process
            .info-tooltip
                margin-bottom: 30px
                color: #7F7F7F
            .header
                &:before
                    color: #FD9739
        .identity-success
            .header
                &:before
                    color: #59ED72
        .identity-failed
            .header
                &:before
                    color: #FE2121
</style>
