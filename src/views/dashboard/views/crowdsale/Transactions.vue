<template>
    <div>
        <div class="line-chart">

        </div>
        <div class="dashboard-analytics">
            <VBody title="Analytics">
                <div slot="header">

                </div>
                <div slot="content">

                </div>
            </VBody>
        </div>
    </div>
</template>

<script>
import VBody from '../../components/Body'

export default {
  name: 'Transactions',
  data: function () {
    return {
    }
  },
  components: {
    VBody
  }
}
</script>

<style lang="sass">

</style>
