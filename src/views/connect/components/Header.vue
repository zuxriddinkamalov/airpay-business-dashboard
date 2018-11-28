<template>
    <div class="connect-header">
      <div class="connect-logo" :style="{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#fff'
      }"></div>

        </div>
    </div>
</template>

<script>
import { LOGO } from '../../../constant/general';
export default {
  name: 'Header',
  data: function() {
    return {
      logo: LOGO
    };
  }
};
</script>

<style lang="sass" scoped>
    $BASE_COLOR: #565656
    .connect-header
        text-align: center
        padding-bottom: 10px
        margin: 0 auto
        margin-bottom: 30px
        .connect-logo
            width: 120px
            height: 120px
            display: inline-block
            -webkit-border-radius: 50%
            -moz-border-radius: 50%
            border-radius: 50%
            box-shadow: 2px 2px 7px 0 rgba(220,220,220,0.50)
        .title
            text-align: center
            font-size: 24px
</style>
