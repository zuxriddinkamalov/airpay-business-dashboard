<template>
    <component :is="step"></component>
</template>

<script>
import { mapState } from 'vuex'
import VBody from '../../components/Body'
import { SET_VERIFICATION_DATA } from '../../../../store/modules/dashboard/verification/mutation-types'
import VVerificationStatus from './components/VerificationStatus'
import VVerificationForm from './components/VerificationForm'

export default {
  name: 'Verification',
  mounted () {
    this.$store.commit(`dashboard/verification/${SET_VERIFICATION_DATA}`, {
      key: 'verificationTab',
      value: 'VVerificationForm'
    })
  },
  computed: {
    ...mapState('dashboard/verification', {
      step: state => state.verificationTab
    })
  },
  components: {
    VBody,
    VVerificationStatus,
    VVerificationForm
  }
}
</script>

<style lang="sass">

</style>
