<template>
    <el-row type="flex">
        <el-col :xs="24" :sm="12">
            <VBody custom-style="identity" header-bg="var(--primary-color)" content-bg="var(--primary-color)" title="Identity verification">
                <div slot="content">
                    <el-form @submit.prevent.native :model="form" ref="identityForm">
                        <el-form-item class="document-type" prop="docType">
                            <slot name="label">
                                <div class="uppercase form-item-title">
                                    Please choose document type which you prefer to use for verification process:
                                </div>
                            </slot>
                            <el-select class="document-type" v-model="form.docType">
                                <el-option
                                    label="ID Card"
                                    value="id_card">
                                </el-option>
                                <el-option
                                    label="Driver license"
                                    value="driver_license">
                                </el-option>
                                <el-option
                                    label="International passport"
                                    value="international_passport">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <div class="photos">
                            <el-row class="file-block" :gutter="15">
                                <el-col class="id-card" :xs="24" :sm="12">
                                    <el-form-item
                                        prop="selfie"
                                        :rules="[
                                            { required: true, message: 'Please select selfie file', trigger: 'change' },
                                        ]">
                                        <div class="form-detail">
                                            <h3 class="big-title bold">Selfie</h3>
                                            <p>Make an selfie with your document front pageand upload it</p>
                                        </div>
                                        <el-upload
                                            action="#"
                                            ref="selfie"
                                            :limit="1"
                                            :show-file-list="false"
                                            :on-change="(file, fileList) => selectFile(file, fileList, 'selfie')"
                                            :auto-upload="false">
                                            <el-button
                                                class="upload-button"
                                                type="primary"
                                                v-if="!form.selfie"
                                                slot="trigger"
                                                size="small" round>
                                                <span class="icon"><i class="el-icon-plus"></i></span> <span>Upload selfie</span>
                                            </el-button>
                                            <el-button
                                                class="clear-file"
                                                type="primary"
                                                @click.prevent="clearFile('selfie')"
                                                v-else slot="tip"
                                                size="small" round>
                                                <span>{{ $R.prop('name', form.selfie) }}</span>
                                                <span class="icon"><i class="el-icon-close"></i></span>
                                            </el-button>
                                        </el-upload>
                                    </el-form-item>
                                </el-col>
                                <el-col :xs="24" :sm="12">
                                    <div class="upload" :style="{
                                        backgroundImage: 'url(images/selfie.jpg)'
                                    }"></div>
                                </el-col>
                            </el-row>
                            <el-row class="file-block" :gutter="15">
                                <el-col class="id-card-detail" :xs="24" :sm="12">
                                    <el-form-item
                                        prop="front"
                                        :rules="[
                                            { required: true, message: 'Please select front file', trigger: 'change' },
                                        ]">
                                        <div class="form-detail">
                                            <h3 class="big-title bold">Front</h3>
                                            <p>Make an detail photo front page your document and upload it</p>
                                        </div>
                                        <el-upload
                                            action="#"
                                            ref="front"
                                            :limit="1"
                                            :show-file-list="false"
                                            :on-change="(file, fileList) => selectFile(file, fileList, 'front')"
                                            :auto-upload="false">
                                            <el-button
                                                class="upload-button"
                                                v-if="!form.front"
                                                slot="trigger"
                                                type="primary"
                                                size="small" round>
                                                <span class="icon"><i class="el-icon-plus"></i></span> <span>Upload front</span>
                                            </el-button>
                                            <el-button
                                                class="clear-file"
                                                type="primary"
                                                @click.prevent="clearFile('front')"
                                                v-else slot="tip"
                                                size="small" round>
                                                <span>{{ $R.prop('name', form.front) }}</span>
                                                <span class="icon"><i class="el-icon-close"></i></span>
                                            </el-button>
                                        </el-upload>
                                    </el-form-item>
                                </el-col>
                                <el-col class="id-card" :xs="24" :sm="12">
                                    <div class="upload" :style="{
                                        backgroundImage: 'url(images/front.jpg)'
                                    }"></div>
                                </el-col>
                            </el-row>
                        </div>
                        <el-form-item>
                            <div class="info-tooltip document-required">
                                <span class="uppercase bold">Requirements</span> Please upload only high quality photos for
                                quickest and lightness identity verification proccess
                            </div>
                        </el-form-item>
                    </el-form>
                </div>
            </VBody>
        </el-col>
        <el-col :xs="24" :sm="12">
            <VBody custom-style="personal-data" title="Personal information">
                <div slot="content">
                    <el-form @submit.prevent.native ref="personalForm" :model="form">
                        <el-row :gutter="15">
                            <el-col :xs="24" :md="12">
                                <el-form-item
                                    :rules="[
                                        { required: true, message: 'First name required', trigger: 'blur' },
                                    ]" prop="firstName">
                                    <slot name="label"><div class="uppercase label">First name</div></slot>
                                    <el-input placeholder="First name" v-model="form.firstName"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :md="12">
                                <el-form-item
                                    :rules="[
                                        { required: true, message: 'Last name required', trigger: 'blur' },
                                    ]" prop="lastName">
                                    <slot name="label"><div class="uppercase label">Last name</div></slot>
                                    <el-input placeholder="Last name" v-model="form.lastName"></el-input>
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item
                            prop="nationality"
                            :rules="[
                                { required: true, message: 'Please enter nationality', trigger: 'blur' },
                            ]">
                            <slot name="label"><div class="uppercase label">Nationality</div></slot>
                            <el-select placeholder="Select nationality" v-model="form.nationality">
                                <el-option
                                    v-for="country in countryList"
                                    :label="country.name"
                                    :key="country.country_code"
                                    :value="country.alpha_3">
                                </el-option>
                            </el-select>
                        </el-form-item>

                        <el-form-item
                            class="email"
                            prop="email"
                            :rules="[
                                { required: true, message: 'Please enter email', trigger: 'blur' },
                                { type: 'email', message: 'Please enter valid email', trigger: 'blur' },
                            ]">
                            <slot name="label"><div class="uppercase label">Please enter your email</div></slot>
                            <el-input placeholder="Please enter email" type="email" v-model="form.email"></el-input>
                        </el-form-item>

                        <el-form-item
                            :rules="[
                                { required: true, message: 'Phone number required', trigger: 'blur' },
                            ]" prop="phone">
                            <slot name="label"><div class="uppercase label">Phone number</div></slot>
                            <el-input
                                placeholder="Enter phone number"
                                v-model="form.phone"
                            ></el-input>
                        </el-form-item>

                        <el-row :gutter="15">
                            <el-col :xs="24" :md="12">
                                <el-form-item
                                    prop="sex"
                                    :rules="[
                                        { required: true, message: 'Please select gender', trigger: 'blur' },
                                    ]">
                                    <slot name="label"><div class="uppercase label">Sex</div></slot>
                                    <el-select placeholder="Select gender" v-model="form.sex">
                                        <el-option
                                            label="Male"
                                            value="male">
                                        </el-option>
                                        <el-option
                                            label="Female"
                                            value="female">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                            </el-col>
                            <el-col :xs="24" :md="12">
                                <el-form-item
                                    :rules="[
                                        { required: true, message: 'Birth date is required', trigger: 'blur' },
                                    ]" prop="birthDate">
                                    <slot name="label"><div class="uppercase label">Birth date</div></slot>
                                    <el-date-picker
                                        placeholder="Select date of birth"
                                        v-model="form.birthDate"
                                        type="date"
                                        :prefix-icon="null"
                                        format="dd/MM/yyyy"
                                    ></el-date-picker>
                                </el-form-item>
                            </el-col>
                        </el-row>

                        <div class="">
                            <el-button
                                :loading="loading"
                                class="button" type="primary"
                                @click="submit">
                                Submit application
                            </el-button>
                        </div>
                    </el-form>
                </div>
            </VBody>
        </el-col>
    </el-row>
</template>

<script>
import { prop } from 'ramda'
import VBody from '../../../components/Body'
import { prepareValidateErrors } from '../../../../../helpers/errors'
import { SET_VERIFICATION_DATA } from '../../../../../store/modules/dashboard/verification/mutation-types'

export default {
  name: 'VerificationForm',
  data: function () {
    return {
      loading: false,
      countryList: require('@/constant/country-list.json'),
      form: {
        docType: 'id_card',
        selfie: null,
        front: null,
        firstName: '',
        lastName: '',
        nationality: '',
        sex: '',
        email: '',
        phone: '',
        birthDate: ''
      }
    }
  },
  methods: {
    submit () {
      let self = this
      let identity = new Promise(function (resolve, reject) {
        self.$refs['identityForm'].validate((valid, error) => {
          if (valid) {
            resolve()
          } else {
            let message = prepareValidateErrors(error)
            self.$message({
              dangerouslyUseHTMLString: true,
              type: 'error',
              message: message
            })
            reject(new Error(''))
          }
        })
      })
      let personal = new Promise(function (resolve, reject) {
        self.$refs['personalForm'].validate((valid, error) => {
          if (valid) {
            resolve()
          } else {
            let message = prepareValidateErrors(error)
            self.$message({
              dangerouslyUseHTMLString: true,
              type: 'error',
              message: message
            })
            reject(new Error(''))
          }
        })
      })

      Promise.all([identity, personal]).then(function () {
        self.$store.commit(`dashboard/verification/${SET_VERIFICATION_DATA}`, {
          key: 'verificationTab',
          value: 'VVerificationStatus'
        })
      })
    },
    clearFile: function (ref) {
      this.form[ref] = null
      this.$refs[ref].clearFiles()
    },
    selectFile: function (file, fileList, key) {
      this.form[key] = prop('raw', file)
    }
  },
  components: {
    VBody
  }
}
</script>

<style lang="sass">
    .document-type
        .el-input--suffix .el-input__inner
            font-weight: bold
    .form-detail
        & p
            line-height: 1.4
        & .big-title
            font-size: 27px
    .document-required
        background: rgba(255, 255, 255, 0.3)
        color: #fff
        letter-spacing: 1.3px
        padding: 10px
        line-height: 1.3
        font-size: 15px
    .identity
        color: #fff
        border-radius: 5px 0 0 5px!important
    .personal-data
        border-radius: 0 5px 5px 0!important
    .photos
        .file-block
            margin-bottom: 40px
        .upload
            -webkit-background-size: 100% auto
            background-size: 100% auto
            background-position: center top
            background-repeat: no-repeat
            height: 160px
            padding: 10px
            border-radius: 5px
            overflow: hidden
        .upload-button
            border: 1px solid
            padding: 5px 15px
            color: #fff
            font-size: 15px
        .icon
            font-size: 17px
            i
                vertical-align: middle
        .el-upload
            height: 45px
            text-align: left
            width: 100%
        button
            text-align: left
            margin: 15px auto
        .clear-file
            & > span
                display: flex
                justify-content: space-between
                align-items: center
            width: 100%
            font-size: 13px
            color: var(--primary-color)
            background: #fff
            position: absolute
            left: 0
            .icon
                vertical-align: middle
            .icon:first-child
                margin-right: 10px
                float: left
            .icon:last-child
                margin-left: 10px
                float: right

</style>
