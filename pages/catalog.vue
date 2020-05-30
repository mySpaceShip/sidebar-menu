<template>
  <section class="container-panel">
    <menu-header />
    <div>
      <h1 class="title">
        g2test
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
    </div>
  </section>
</template>

<script>
import MenuHeader from '~/components/header.vue'

export default {
  components: {
    MenuHeader
  },
  data: () => ({
  }),
  created() {
  },
}
</script>

<style>
.container-panel {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

