<template>
  <div class="container">
    <div class="logo">
      <LogoMyTasks class="LogoMyTasks" />MyTasks
    </div>

    <Image1 class="image" />

    <div class="text">
      <h1 class="text__title">Wybierz MyTasks i zrób to łatwiej.</h1>
      <p class="text__descript">Dzięki MyTasks możesz rozplanować wszystkie zadania nad swoim projektem i je nadzorować w jednym miejscu.</p>
    </div>

    <footer>
      <span class="copyright">© 2023 websidev.pl</span>

      <a href="https://storyset.com/business" target="_blank" class="storyset">
        Business illustrations by <span>Storyset</span>
      </a>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import LogoMyTasks from '@/assets/svg/logo.vue'

  import Image1 from '@/assets/svg/dashboardSVG1.vue'
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    height: 100vh;
    min-height: 700px;
    width: 50%;
    min-width: 750px;
    background-color: var(--color-main);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    gap: 36px;
  }

  @media only screen and (max-width: 1200px) {
    .container {
      min-width: 55%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .container {
      width: 100%;
      height: 100vh;
      min-height: 580px;
    }
  }

  /* logo */
  .logo {
    font-size: 190%;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
    margin-top: -90px;
  }

  .LogoMyTasks {
    height: max-content;
    width: 64px;
  }

  /* image */
  .image {
    width: 70%;
    height: max-content;
  }

  @media only screen and (max-width: 1000px) {
    .image {
      max-width: 400px;
    }
  }

  /* text */
  .text {
    width: 500px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    gap: 17px;
  }

  .text__title {
    font-size: 100%;
    color: #FFFFFF;
    font-weight: bold;
    text-align: center;
  }

  .text__descript {
    font-size: 90%;
    color: #DADCE0;
    text-align: center;
  }

  /* footer */
  footer {
    position: absolute;
    bottom: 15px;
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3px;
  }

  @media only screen and (max-width: 500px) {
    footer {
      flex-direction: column;
    }
  }

  .copyright, .storyset {
    font-size: 85%;
    color: #DADCE0;
    text-decoration: none;
    text-align: center;
  }

  .storyset:hover span {
    color: var(--color-background1);
    font-weight: bold;
    text-align: center;
  }
</style>