<template>
  <div id="app">
    <AppHeader :key="Math.random()" />
    <AppBody>
      <router-view />
    </AppBody>
  </div>
</template>
<script>
export default {
  components: {
    AppHeader: () =>
      import(
        /* webpackChunkName: 'AppHeader' */ "@/components/AppHeader.vue"
      ),
    AppBody: () =>
      import(
        /* webpackChunkName: 'AppBody' */ "@/components/AppBody.vue"
      ),
  },
};
</script>
<style lang="sass">
a
  @apply cursor-pointer text-blue-500
a:hover
    @apply text-blue-800
</style>
