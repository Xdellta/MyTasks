<template>
  <Navigation />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from '@/components/Navigation.vue'
</script>

<style lang="scss" scoped>
  main {
    height: 100vh;
    width: calc(100vw - 270px);
  }
</style>