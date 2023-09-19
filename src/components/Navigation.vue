<template>
  <nav>
    <div class="top">
      <div class="logo">
        <img src="../../logo.png" alt="Logo MyTask" class="logoImage">MyTasks
      </div>

      <IconArray class="top__btn IconArray-left" />
    </div>

    <div class="navigation">
      <router-link to="/" class="link">
        <IconHome class="link__icon" />Pulpit
      </router-link>

      <router-link to="/Ustawienia" class="link">
        <IconMessage class="link__icon" />Wiadomości
      </router-link>

      <router-link to="/Ustawienia" class="link">
        <IconProject class="link__icon" />Projekty
      </router-link>

      <router-link to="/Ustawienia" class="link">
        <IconCog class="link__icon" />Ustawienia
      </router-link>

      <div class="link colorMode">
        <IconSun class="link__icon" />Jasny tryb
      </div>
    </div>

    <span class="link logout">
      <IconLogout class="link__icon" />Wyloguj
    </span>
  </nav>
</template>

<script setup lang="ts">
  import IconArray from "@/assets/icons/IconArray.vue"
  import IconHome from "@/assets/icons/IconHome.vue"
  import IconProject from "@/assets/icons/IconProject.vue"
  import IconMessage from "@/assets/icons/IconMessage.vue"
  import IconCog from "@/assets/icons/IconCog.vue"
  import IconMoon from "@/assets/icons/IconMoon.vue"
  import IconSun from "@/assets/icons/IconSun.vue"
  import IconLogout from "@/assets/icons/IconLogout.vue"
</script>

<style lang="scss" scoped>
  nav {
    height: 100vh;
    width: 270px;
    display: flex;
    flex-direction: column;
    padding: 25px 30px;
    background: var(--color-main2);
    border-right: 2px solid var(--color-margin);
    gap: 10vh;
  }

  /* Section: top */
  .top {
    width: 114%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -7%;
  }

  .logo {
    font-size: 125%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    color: var(--color-blue);
  }

  .logoImage {
    width: 50px;
  }

  .top__btn {
    width: 45px;
    height: max-content;
    fill: var(--color-contrast);
  }

  .IconArray-left {
    transform: rotate(-180deg);
  }

  .top__btn:hover {
    cursor: pointer;
    fill: var(--color-blue);
  }

  /* Section: navigation */
  .navigation {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 100%;
    text-decoration: none;
    color: var(--color-contrast);
  }

  .link__icon {
    width: 30px;
    height: max-content;
    fill: var(--color-blue);
  }

  .link:hover {
    cursor: pointer;
    letter-spacing: 1px;
  }

  .link.router-link-active .link__icon {
    width: 28px;
    fill: #FFFFFF;
    box-sizing: content-box;
    background: var(--color-blue);
    padding: 4px;
    border-radius: 8px;
    margin: -3px 0 -3px -3px;
  }

  .colorMode {
    padding: 30px 0;
    border-top: 2px solid var(--color-margin);
  }

  /* Section: logout */
  .logout {
    position: absolute;
    bottom: 25px;
  }

  .logout .link__icon {
    fill: red;
  }
</style>