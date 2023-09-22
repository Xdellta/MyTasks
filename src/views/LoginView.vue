<template>
  <main>
    <StartBanner />
    <LoginPanel />
  </main>
</template>

<script setup lang="ts">
  import StartBanner from '@/components/StartBanner.vue'
  import LoginPanel from '@/components/LoginPanel.vue'
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
    height: 100vh;
    display: flex;
  }

  @media only screen and (max-width: 1000px) {
    main {
      flex-direction: column;
    }
  }
</style>