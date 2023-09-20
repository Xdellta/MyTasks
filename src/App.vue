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
    width: 100%;
    background: var(--color-background2);
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
  }
</style>