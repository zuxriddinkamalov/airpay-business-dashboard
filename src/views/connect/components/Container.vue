<template>
    <div class="body">
        <el-container class="container">
            <div class="container-content">
                <v-header />
                <div class="main">
                    <component :is="VLoginForm"></component>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import VHeader from './Header'

import VLoginForm from './Connect'

export default {
  name: 'Container',
  components: {
    VHeader,
    VLoginForm
  },
  computed: {
    ...mapState([
      'connect'
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
        height: 100%
        width: 100%
        .container
            margin: auto
            max-width: 500px
            align-items: center
            display: flex
            .container-content
                margin: 15px 0
                width: 100%
                .main
                    padding: 20px
                    background: #fff
                    box-shadow: 0 4px 14px 0 rgba(0,0,0,0.06)
                    border-radius: 5px

</style>
