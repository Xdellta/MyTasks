<template>
  <div class="container">
    <div class="loginPanel">
      <h1 class="title">MyTasks</h1>
      <p class="descript">Zaloguj się aby uzyskać dostęp do naszych zasobów.</p>

      <form>
        <div class="inputField">
          <input type="text" id="username" required>
          <label for="username" class="labelUser">E-mail</label>
          <IconMail class="inputField__icon" />
        </div>

        <div class="inputField">
          <input type="password" id="password" required>
          <label for="password" class="labelPass">Hasło</label>
          <IconLock class="inputField__icon" />
        </div>

        <div class="otherOptions">
          <label class="rememberMe">
            <input type="checkbox">
            Zapamiętaj mnie
          </label>

          <RouterLink to="/Login" class="forgetPass">Zapomniałem hasła</RouterLink>
        </div>

        <button class="btn-login">Zaloguj</button>
      </form>

      <button class="btn-loginGoogle">
        <IconGoogle class="IconGoogle" /> Zaloguj przez Google
      </button>
    </div>

    <footer>
      Nie masz jeszcze konta?
      <RouterLink to="/" class="register-link">Zarejestruj się</RouterLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import IconMail from '@/assets/icons/IconMail.vue'
  import IconLock from '@/assets/icons/IconLock.vue'
  import IconGoogle from '@/assets/icons/IconGoogle.vue'
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
    }
  }

  /* login panel */
  .loginPanel {
    height: max-content;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
    margin: auto;
  }

  @media only screen and (max-width: 384px) {
    .loginPanel {
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

  #username, #password {
    height: 50px;
    width: 100%;
    outline: none;
    border: 1px solid #DADCE0;
    border-radius: 4px;
    padding: 0 50px 0 20px;
    background: #00000000;
    color: var(--color-contrast);
  }

  .labelUser, .labelPass {
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

  #username:focus, #username:valid,
  #password:focus, #password:valid {
    border: 2px solid var(--color-main);
  }

  .inputField #username:focus + .labelUser, .inputField #username:valid + .labelUser,
  .inputField #password:focus + .labelPass, .inputField #password:valid + .labelPass {
    transform: translateY(-137%);
    font-size: 87%;
    padding: 0 10px;
    color: var(--color-main);
    background-color: var(--color-background1);
  }

  .otherOptions {
    width: 100%;
    margin-top: -22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rememberMe {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 82%;
    cursor: pointer;
  }

  .rememberMe input[type="checkbox"] {
    height: 16px;
    width: 16px;
    cursor: pointer;
  }

  .forgetPass {
    font-size: 82%;
    text-decoration: none;
    color: var(--color-main);
  }

  .forgetPass:hover {
    cursor: pointer;
    transform: scale(1.02);
  }

  .btn-login {
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

  .btn-loginGoogle {
    height: 47px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    font-size: 90%;
    border: 1px solid #DADCE0;
    outline: none;
    border-radius: 4px;
    background: #00000000;
    color: var(--color-contrast);
  }

  .btn-login:hover, .btn-loginGoogle:hover {
    cursor: pointer;
    letter-spacing: 1px;
    transform: scale(1.02);
  }

  .IconGoogle {
    height: 57%;
    width: max-content;
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