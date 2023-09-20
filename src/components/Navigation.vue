<template>
  <nav :class="{ active: menuActive }">
    <div class="top">
      <div class="logo">
        <Logo class="LogoSVG" />
        <span class="logo__text">MyTasks</span>
      </div>

      <IconArray class="top__btn" @click="menuSwitch" />
    </div>

    <div class="navigation">
      <router-link to="/" class="link">
        <IconHome class="link__icon" />
        <span class="link__text">Pulpit</span>
      </router-link>

      <router-link to="/Wiadomosci" class="link">
        <IconMessage class="link__icon" />
        <span class="link__text">Wiadomości</span>
      </router-link>

      <router-link to="/Projekty" class="link">
        <IconProject class="link__icon" />
        <span class="link__text">Projekty</span>
      </router-link>

      <router-link to="/Ustawienia" class="link">
        <IconCog class="link__icon" />
        <span class="link__text">Ustawienia</span>
      </router-link>

      <div class="link colorMode">
        <IconSun class="link__icon" />
        <span class="link__text">Jasny tryb</span>
      </div>
    </div>

    <div class="link logout">
      <IconLogout class="link__icon" />
      <span class="link__text">Wyloguj</span>
    </div>
  </nav>
</template>

<script setup lang="ts">
  import Logo from "@/assets/svg/logo.vue"
  import IconArray from "@/assets/icons/IconArray.vue"
  import IconHome from "@/assets/icons/IconHome.vue"
  import IconProject from "@/assets/icons/IconProject.vue"
  import IconMessage from "@/assets/icons/IconMessage.vue"
  import IconCog from "@/assets/icons/IconCog.vue"
  import IconMoon from "@/assets/icons/IconMoon.vue"
  import IconSun from "@/assets/icons/IconSun.vue"
  import IconLogout from "@/assets/icons/IconLogout.vue"

  import { ref } from "vue";

  let menuActive = ref(false);

  const menuSwitch = () => {
    menuActive.value = !menuActive.value;
  };
</script>

<style lang="scss" scoped>
  nav {
    position: relative;
    height: 100vh;
    width: 290px;
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    gap: 10vh;
  }

  .active {
    width: 84px;
    gap: 3.8vh;
  }

  /* Section: top */
  .top {
    width: 100%;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
  }

  .active .top {
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .LogoSVG {
    width: 35px;
    height: max-content;
  }

  .logo__text {
    font-size: 125%;
    font-weight: bold;
    color: var(--color-contrast2);
  }

  .active .logo__text {
    display: none;
  }

  .top__btn {
    width: 45px;
    height: max-content;
    fill: var(--color-contrast2);
    transform: rotate(-180deg);
  }

  .active .top__btn {
    transform: rotate(0deg);
  }

  .top__btn:hover {
    cursor: pointer;
    fill: var(--color-main);
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
    width: max-content;
    display: flex;
    align-items: center;
    gap: 14px;
    padding-left: 25px;
    text-decoration: none;
    font-size: 100%;
    color: var(--color-contrast2);
  }

  .active .link {
    width: 100%;
    padding: 0;
    justify-content: center;
  }

  .active .link__text {
    display: none;
  }

  .link__icon {
    width: 30px;
    height: max-content;
    fill: var(--color-main);
    transition: transform 0.2s ease;
  }

  .link:hover {
    cursor: pointer;
    letter-spacing: 1px;
  }

  .link:hover .link__icon {
    transform: scale(1.05);
  }

  .link.router-link-active {
    color: var(--color-main);
    border-left: 3.5px solid var(--color-main);
  }

  .colorMode {
    margin-top: 20px;
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