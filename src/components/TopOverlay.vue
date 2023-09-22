<template>
  <header id="TopOverlay">
    <div class="headerText">
      <h1 class="headerText__logo">MyTasks</h1>
      <p class="headerText__descript">Zaplanuj swoje zadania</p>
    </div>

    <div class="personalData">
      <div class="personalData__notify">
        <IconBell class="personalData__notify__bell" />
        <div class="personalData__notify__dot"></div>
      </div>

      <img src="/portret.png" alt="Patryk" class="personalData__avatar">
      <span class="personalData__name">Patryk</span>
    </div>
  </header>
</template>

<script setup lang="ts">
  import IconBell from '@/assets/icons/IconBell.vue'
</script>

<style lang="scss" scoped>
  #TopOverlay {
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2%;
    background: var(--color-background2);
  }

  /* Section: header text */
  .headerText {
    display: flex;
    flex-direction: column;
  }

  .headerText__logo {
    font-size: 140%;
    font-weight: bold;
    color: var(--color-main);
  }

  .headerText__descript {
    font-size: 77%;
    color: var(--color-contrast);
  }

  /* Section: personal data */
  .personalData {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  /* notify */
  .personalData__notify {
    position: relative;
    cursor: pointer;
    border-right: 2px solid var(--color-background1);
    padding-right: 30px;
    margin-right: 10px;
  }

  .personalData__notify__bell {
    height: 36px;
    width: max-content;
    fill: var(--color-main);
    transition: transform 0.2s ease;
  }

  .personalData__notify:hover .personalData__notify__bell {
    transform: scale(1.05);
    animation: notifyRotateAnim 0.8s linear infinite;
  }

  @keyframes notifyRotateAnim {
    0%, 100% {
      transform: scale(1.05) rotate(0deg);
    }
    25% {
      transform: scale(1.05) rotate(10deg);
    }
    75% {
      transform: scale(1.05) rotate(-10deg);
    }
  }

  .personalData__notify__dot {
    position: absolute;
    width: 13px;
    height: 13px;
    bottom: 5px;
    right: 27px;
    border-radius: 50%;
    border: 3.5px solid red;
    background-color: #F2F3F8;
    transition: opacity 0.2s ease;
  }

  .personalData__notify:hover .personalData__notify__dot {
    opacity: 0;
  }

  /* avatar */
  .personalData__avatar {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    background-color: var(--color-background2);
    background-size: cover;
    background-position: center;
    -webkit-box-shadow: 0px 0px 3px 0px var(--color-contrast);
    -moz-box-shadow: 0px 0px 3px 0px var(--color-contrast);
    box-shadow: 0px 0px 3px 0px var(--color-contrast);
  }

  /* name */
  .personalData__name {
    font-size: 108%;
    color: var(--color-contrast);
  }
</style>