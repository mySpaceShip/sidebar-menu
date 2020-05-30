<template>
  <div class="menu-header">
    <sidebar-menu/>
  </div>
</template>

<script>
  import SidebarMenu from '~/components/sidebar-menu.vue'

  export default {
    components: {
      SidebarMenu
    },
  }
</script>

<style lang="sass">
  .menu-header
    position: relative
    display: flex
    padding: 10px 20px
    width: 100%
    background: indianred

    &__hamburger
      display: flex
      justify-content: center
      align-items: center
      width: 20px
      height: 20px
      background: #35495e
</style>

