<template>
  <main>
    <RouterView />
    <Toast position="bottom-left" group="bottom-left" />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toast from 'primevue/toast'
</script>

<style lang="scss">
body {
  height: 100vh;
  margin: 0;

  main,
  #app {
    height: 100%;
  }
}
</style>
