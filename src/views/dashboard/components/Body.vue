<template>
    <div>
        <div class="body shadow">
            <div class="header">
                <h4 v-if="title" class="title bold">{{ title }}</h4>
                <slot name="header"></slot>
            </div>
            <div class="content">
                <slot name="content"></slot>
            </div>
        </div>
        <div class="custom-slot">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Body',
  props: {
    title: {
      required: false,
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
    .body
        background: #fff
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        margin-top: 10px
    .header
        padding: 30px 25px 25px
        .title
            font-size: 22px
            margin-bottom: 10px
            color: #404040
</style>
