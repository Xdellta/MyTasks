<template>
  <nav>
    <Logo class="logo" />

    <div class="navigation">
      <router-link to="/" class="link">
        <IconHome class="link__icon" />
      </router-link>

      <router-link to="/Wiadomosci" class="link">
        <IconMessage class="link__icon" />
      </router-link>

      <router-link to="/Projekty" class="link">
        <IconProject class="link__icon" />
      </router-link>

      <router-link to="/Ustawienia" class="link">
        <IconCog class="link__icon" />
      </router-link>
    </div>

    <div class="logout">
      <IconLogout class="logout__icon" />
    </div>
  </nav>
</template>

<script setup lang="ts">
  import Logo from "@/assets/svg/logo.vue"
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
    position: relative;
    height: 100vh;
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: var(--color-main);
  }

  /* Section: logo */
  .logo {
    max-height: 75px;
    width: 100%;
    padding: 7px;
  }

  /* Section: navigation */
  .navigation {
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
  }

  .link {
    width: 47px;
    height: 47px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
  }

  .link__icon, .logout__icon {
    height: 32px;
    width: max-content;
    fill: #F7F9FB;
  }

  .link:hover .link__icon, .logout__icon:hover {
    cursor: pointer;
    transition: transform 0.2s ease;
    transform: scale(1.1);
  }

  .router-link-active {
    background: #23314B;
  }
  
  .router-link-active .link__icon {
    height: 30px;
  }

  .router-link-active:hover .link__icon {
    transform: scale(0.92);
  }

  /* Section: logout */
  .logout {
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>