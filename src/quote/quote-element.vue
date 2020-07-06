<template lang="pug">
  blockquote.quote(
    :lang="quote.lang"
    :cite="quote.cite")
    .quote__main(v-html="quote.content")

    footer.quote__person(v-if="person")
      .quote__divider
      person-element(:person="person")
</template>

<script>
  import PersonElement from './../person/person-element'

  export default {
    name: 'quote-element',
    components: {
      PersonElement,
    },
    props: {
      quote: {
        type: Object,
        required: true,
      },
      person: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="less">
  @import "./index";
</style>
