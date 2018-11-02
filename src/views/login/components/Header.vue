<template>
    <div class="header">
        <div class="logo" :style="{
            background: 'url(https://s3.us-east-2.amazonaws.com/airpay-network/logo/an_logo.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
        }">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="sass" scoped>
    $BASE_COLOR: #565656
    .header
        align-self: flex-start
        padding-bottom: 30px
        margin: 0 auto
        .logo
            width: 260px
            height: 125px
            margin: 20px auto
        .title
            text-align: center
            font-size: 24px
</style>
