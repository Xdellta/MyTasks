<template>
  <Navigation />
  <main>
    <TopOverlay />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import Navigation from '@/components/Navigation.vue'
  import TopOverlay from '@/components/TopOverlay.vue'
</script>

<style lang="scss" scoped>
  main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>