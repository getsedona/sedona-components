<template lang="pug">
  .person(:class="{ 'person--gravity': person.isGravity }")
    .person__avatar(
      v-if="person.avatar"
      :style="`width: ${person.avatar.size}px; height: ${person.avatar.size}px;`")
      img.person__image(
        :src="person.avatar.src"
        :width="person.avatar.size"
        :height="person.avatar.size"
        alt="")

    .person__content(v-if="person.name || person.note")
      .person__name(v-if="person.name") {{ person.name }}
      .person__note(v-if="person.note") {{ person.note }}
</template>

<script>
  export default {
    name: 'person-element',
    props: {
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
