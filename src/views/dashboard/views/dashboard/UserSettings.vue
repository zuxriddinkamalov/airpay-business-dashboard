<template>
    <VBody title="User settings">
        <div slot="header">
            <el-row>
                <el-col :xs="24" :sm="12">
                    <h3 class="header-id">Edit your profile info</h3>
                </el-col>
            </el-row>
        </div>
        <div slot="content">
            <div class="detail" v-if="settingsData">
                <el-form @submit.prevent.native
                     ref="settingsForm"
                     label-width="300px"
                     size="medium"
                     :model="settingsData">
                    <el-form-item
                        label="Business name"
                        prop="name"
                        :rules="[
                            { required: true, message: 'Please enter business name', trigger: 'blur' },
                        ]">
                        <el-input placeholder="Business name" v-model="settingsData.name"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Phone number"
                        prop="phone"
                        :rules="[
                            { required: true, message: 'Please enter phone number', trigger: 'blur' },
                    ]">
                        <el-input placeholder="Phone number" v-model="settingsData.phone"></el-input>
                    </el-form-item>
                    <el-form-item
                        label="Web site"
                        prop="website"
                        :rules="[
                        { required: true, message: 'Please enter web site', trigger: 'blur' },
                    ]">
                        <el-input placeholder="Web site" v-model="settingsData.website"></el-input>
                    </el-form-item>
                    <div class="detail-divider"></div>
                    <el-form-item label="Logotype">
                        <div class="upload-block">
                            <div class="logo-uploader">
                                <el-upload
                                    action="#"
                                    :show-file-list="false"
                                    :on-change="selectLogo"
                                    :auto-upload="false">
                                    <div slot="trigger"
                                        :style="{
                                            backgroundImage: `url(${logoType})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundColor: '#fff'
                                        }"
                                        class="upload-trigger"></div>
                                </el-upload>
                            </div>
                            <el-button class="shadow" @click="uploadLogo">Upload</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
            <div class="detail-control-buttons">
                <el-button
                    :loading="loading"
                    type="primary"
                    @click="saveChanges('settingsForm')">Save changes</el-button>
                <el-button
                    class="shadow"
                    @click="cancel">Cancel</el-button>
            </div>
        </div>
    </VBody>
</template>

<script>
import { mapState } from 'vuex'

import VBody from '../../components/Body'
import { ROOT } from '../../../../constant/routes'

export default {
  name: 'UserSettings',
  data: function () {
    return {
      loading: false,
      logo: null,
      settingsData: {
        name: 'Anthony',
        logo: 'https://s3.us-east-2.amazonaws.com/airpay-network/logo/dappband_logo.jpg',
        website: 'www.google.com',
        phone: '+7638843223'
      }
    }
  },
  components: {
    VBody
  },
  mounted () {
  },
  computed: {
    ...mapState({
      activeBusiness: state => state.dashboard.activeBusiness
    }),
    logoType: function () {
      let objectURL = this.logo ? URL.createObjectURL(this.logo) : null
      return objectURL || this.settingsData.logo
    }
  },
  methods: {
    saveChanges: function (formName) {
      this.$refs[formName].validate((valid, error) => {
        if (valid) {
          console.warn('save')
        }
      })
    },
    uploadLogo: function () {
      // upload code here
    },
    selectLogo: function (file, fileList) {
      this.logo = file.raw
    },
    cancel: function () {
      this.$router.push({
        name: ROOT
      })
    }
  }
}
</script>

<style lang="sass" scoped>
    .upload-block
        display: flex
        justify-items: center
        align-items: center
        align-content: center
    .logo-uploader
        margin-right: 30px
        -webkit-box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.06)
        box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.3)
        width: 80px
        height: 80px
        overflow: hidden
        background: #fff
        border-radius: 50%
        position: relative
        .upload-trigger
            position: absolute
            top: 0
            left: 0
            cursor: pointer
            width: 100%
            height: 100%

</style>
