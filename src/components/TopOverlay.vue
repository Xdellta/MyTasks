<template>
  <div id="TopOverlay">
    <h1 class="welcome">
      Witaj ponownie Patryk!
    </h1>

    <div class="personalData">
      <div class="personalData__notify">
        <IconBell class="personalData__notify__bell" />
        <div class="personalData__notify__dot"></div>
      </div>

      <span class="personalData__name">Patryk</span>
      <img src="../../public/portret.png" alt="Patryk" class="personalData__avatar">
    </div>
  </div>
</template>

<script setup lang="ts">
  import IconBell from '@/assets/icons/IconBell.vue'
</script>

<style lang="scss" scoped>
  #TopOverlay {
    width: 96%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 2%;
  }

  /* Section: welcome */
  .welcome {
    font-size: 105%;
    background-color: var(--color-background1);
    color: var(--color-contrast2);
    border-radius: 12px;
    padding: 10px 22px;
    -webkit-box-shadow: 0px 0px 4px 0px var(--color-contrast1);
    -moz-box-shadow: 0px 0px 4px 0px var(--color-contrast1);
    box-shadow: 0px 0px 4px 0px var(--color-contrast1);
  }

  /* Section: personal data */
  .personalData {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .personalData__notify {
    position: relative;
    cursor: pointer;
  }

  .personalData__notify__bell {
    height: 36px;
    width: max-content;
    margin-right: 10px;
    fill: var(--color-background1);
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
    bottom: 8px;
    right: 8px;
    border-radius: 50%;
    border: 3.5px solid red;
    background-color: var(--color-background2);
    transition: opacity 0.2s ease;
  }

  .personalData__notify:hover .personalData__notify__dot {
    opacity: 0;
  }

  .personalData__avatar {
    height: 48px;
    width: 48px;
    border-radius: 50%;
    background-color: var(--color-background1);
    background-size: cover;
    background-position: center;
    -webkit-box-shadow: 0px 0px 4px 0px var(--color-contrast1);
    -moz-box-shadow: 0px 0px 4px 0px var(--color-contrast1);
    box-shadow: 0px 0px 4px 0px var(--color-contrast1);
  }

  .personalData__name {
    font-size: 108%;
    color: var(--color-contrast1);
  }
</style>