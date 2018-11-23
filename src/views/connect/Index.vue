<template>
  <div class="main-container">
    <v-container />
  </div>
</template>

<script>
// @ is an alias to /src

import VContainer from './components/Container'

export default {
  name: 'Connect',
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
