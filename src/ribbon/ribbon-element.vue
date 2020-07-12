<template lang="pug">
  .ribbon
    .ribbon__box
      .ribbon__value {{ value }}
</template>

<script>
  export default {
    name: 'ribbon-element',
    props: {
      value: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="less">
  @import "./index";
</style>
