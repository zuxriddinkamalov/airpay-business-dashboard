<template>
    <div class="body">
        <v-header />
        <div class="container">
            <div class="main">
                <component :is="login.tab"></component>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import VHeader from './Header'

import VLoginForm from './Login'
import VBusinessInfo from './BusinessInfo'

export default {
  name: 'Container',
  components: {
    VHeader,
    VLoginForm,
    VBusinessInfo
  },
  computed: {
    ...mapState([
      'login'
    ])
  }
}
</script>

<style lang="sass" scoped>
    .body
        display: flex
        align-items: center
        align-content: center
        justify-content: center
        flex-direction: column
        height: 100%
        width: 100%
        .container
            max-width: 100%
            width: 400px
            padding: 20px
            background: #fff
            box-shadow: 0 4px 14px 0 rgba(0,0,0,0.06)
            border-radius: 5px

</style>
