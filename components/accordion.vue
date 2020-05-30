<template>
  <div class="accordion" :class="{'accordion--collapsed': collapsed}">
    <p>adadadda</p>
    <p>adadadda</p>
    <p>adadadda</p>
    <p>adadadda</p>
    <p>adadadda</p>
    <p>adadadda</p>
  </div>
</template>

<script>
  export default {
    data: () => ({
      collapsed: true,
    }),
  }
</script>

<style lang="sass">
  .accordion
    position: relative
    width: 100%
    height: 100%
    max-height: 100%
    transition: .5s linear
    background: indianred
    overflow: hidden

    &--collapsed
      max-height: 0

    &__hamburger
      display: flex
      justify-content: center
      align-items: center
      width: 20px
      height: 20px
      background: #35495e
</style>

