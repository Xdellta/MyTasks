<template>
  <div class="container">
    <div class="registerPanel">
      <h1 class="title">MyTasks</h1>
      <p class="descript">Podaj swojego e-maila i oczekuj na wiadomość do zresetowania hasła.</p>

      <form autocomplete="off">
        <div class="inputField">
          <input type="email" class="inputField__input" placeholder="" required>
          <label class="inputField__label">E-mail</label>
          <IconMail class="inputField__icon" />
        </div>

        <button class="btn-register">Resetuj hasło</button>
      </form>
    </div>

    <footer>
      Masz już swoje konto?
      <RouterLink to="/" class="register-link">Zaloguj się</RouterLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import IconMail from '@/assets/icons/IconMail.vue'
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    height: 100vh;
    min-height: 700px;
    width: 50%;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 1000px) {
    .container {
      width: 100%;
      min-width: auto;
      min-height: 620px;
    }
  }

  /* register panel */
  .registerPanel {
    height: max-content;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin: auto;
  }

  @media only screen and (max-width: 384px) {
    .registerPanel {
      width: 95%;
    }
  }

  .title {
    font-size: 170%;
    margin-top: -50px;
  }

  .descript {
    font-size: 90%;
    margin-top: -10px;
    text-align: center;
    color: #5F6368;
  }

  /* form */
  form {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 35px;
    margin-top: 15px;
  }

  .inputField {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }

  .inputField__input {
    height: 50px;
    width: 100%;
    outline: none;
    border: 1px solid #DADCE0;
    border-radius: 4px;
    padding: 0 50px 0 20px;
    background: #00000000;
    color: var(--color-contrast);
  }

  .inputField__label {
    position: absolute;
    left: 20px;
    color: #5F6368;
    transition: .5s;
    pointer-events: none;
  }

  .inputField__icon {
    position: absolute;
    height: 26px;
    width: max-content;
    right: 20px;
    fill: #5F6368;
    pointer-events: none;
  }

  .inputField__input:focus, .inputField__input:valid {
    border: 2px solid var(--color-main);
  }

  .inputField .inputField__input:focus + .inputField__label, .inputField .inputField__input:valid + .inputField__label {
    transform: translateY(-137%);
    font-size: 87%;
    padding: 0 10px;
    color: var(--color-main);
    background-color: var(--color-background1);
  }

  .inputField__input:not(:focus):not(:placeholder-shown):invalid {
    border: 2px solid red;
  }

  .inputField .inputField__input:not(:focus):not(:placeholder-shown):invalid + .inputField__label {
    transform: translateY(-137%);
    font-size: 87%;
    padding: 0 10px;
    color: red;
    background-color: var(--color-background1);
  }

  .btn-register {
    height: 47px;
    width: 100%;
    font-size: 90%;
    margin-top: 10px;
    border: none;
    outline: none;
    border-radius: 4px;
    background: var(--color-main);
    color: #FFFFFF;
  }

  .btn-register:hover {
    cursor: pointer;
    letter-spacing: 1px;
    transform: scale(1.02);
  }

  /* footer */
  footer {
    position: absolute;
    bottom: 20px;
    font-size: 95%;
    color: #5F6368;
    padding: 0 15px;
    text-align: center;
  }

  .register-link {
    font-size: 95%;
    text-decoration: none;
    margin-left: 5px;
    color: var(--color-main);
  }

  .register-link:hover {
    letter-spacing: 1px;
    cursor: pointer;
  }
</style>