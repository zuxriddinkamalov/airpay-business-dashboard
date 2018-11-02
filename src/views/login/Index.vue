<template>
  <div class="main-container">
    <v-container />
  </div>
</template>

<script>
// @ is an alias to /src

import VContainer from './components/Container'
import { SET_LOGIN_STATE } from '../../store/modules/login/mutation-types'

export default {
  name: 'login',
  mounted () {
    this.$store.commit(`login/${SET_LOGIN_STATE}`, {
      key: 'tab',
      value: 'VLoginForm'
    })
  },
  components: {
    VContainer
  }
}
</script>

<style scoped>
  .main-container {
    height: 100%;
    width: 100%;
  }
</style>
