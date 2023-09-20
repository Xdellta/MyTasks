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
    background: var(--color-background2);
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    -webkit-box-shadow: 0px 0px 15px 0px var(--color-contrast1);
    -moz-box-shadow: 0px 0px 15px 0px var(--color-contrast1);
    box-shadow: 0px 0px 15px 0px var(--color-contrast1);
  }
</style>