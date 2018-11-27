<template>
    <div :class="['root', 'shadow', customStyle]">
        <div class="body">
            <div class="header" :style="{background: headerBg}">
                <h4 v-if="title" class="title bold">{{ title }}</h4>
                <slot name="header"></slot>
            </div>
            <div class="content" :style="{background: contentBg}">
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
    contentBg: {
      type: String,
      default: '#fff'
    },
    headerBg: {
      type: String,
      default: '#fff'
    },
    title: {
      type: String
    },
    customStyle: {
      type: String
    }
  }
};
</script>

<style lang="sass" scoped>
    .root
        background: #fff
        -webkit-border-radius: 5px
        -moz-border-radius: 5px
        border-radius: 5px
        overflow: hidden
        height: 100%
        margin-bottom: 20px
        &:last-child
            margin-bottom: 0
    .body
        height: 100%
        display: flex
        flex-direction: column
        .content
            flex-grow: 2
            padding: 0 20px 20px
    .header
        padding: 30px 20px
        .title
            font-size: 23px
            color: inherit
</style>
