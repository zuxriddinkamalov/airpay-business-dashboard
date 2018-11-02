<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">

</style>

<script>
import { mapGetters } from 'vuex'
import { prepareGraphQLErrors, prepareNetworkErrors } from './helpers/errors'

export default {
  name: 'App',
  computed: {
    ...mapGetters(['networkError', 'graphQLError'])
  },
  watch: {
    networkError (newValue, oldValue) {
      let message = prepareNetworkErrors(newValue)
      this.$message({
        dangerouslyUseHTMLString: true,
        type: 'error',
        message: message
      })
    },
    graphQLError (newValue, oldValue) {
      let message = prepareGraphQLErrors(newValue)
      this.$message({
        dangerouslyUseHTMLString: true,
        type: 'error',
        message: message
      })
    }
  }
}
</script>

<style>
  html, body, #app {
    width: 100%;
    height: 100%;
  }
</style>
