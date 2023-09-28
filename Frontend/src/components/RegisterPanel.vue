<template>
  <div class="container">
    <div class="registerPanel">
      <h1 class="title">MyTasks</h1>
      <p class="descript">Zarejestruj się za darmo i korzystaj z możliwości MyTasks.</p>

      <form @submit.prevent="register" autocomplete="off">
        <div class="inputField">
          <input type="text" class="inputField__input" v-model="formData.username" placeholder="" minlength="3" maxlength="24" required>
          <label class="inputField__label">Nazwa użytkownika</label>
          <IconUser class="inputField__icon" />
        </div>

        <div class="inputField">
          <input type="email" class="inputField__input" v-model="formData.email" placeholder="" required>
          <label class="inputField__label">E-mail</label>
          <IconMail class="inputField__icon" />
        </div>

        <div class="inputField">
          <input type="password" class="inputField__input" v-model="formData.password" placeholder="" minlength="6" required>
          <label class="inputField__label">Hasło</label>
          <IconLock class="inputField__icon" />
        </div>

        <div class="inputField">
          <input type="password" class="inputField__input" v-model="formData.repeatPassword" placeholder="" minlength="6" required>
          <label class="inputField__label">Powtórz hasło</label>
          <IconLock class="inputField__icon" />
        </div>

        <span class="registerError" v-if="registerError">Błąd przy rejestracji</span>

        <button class="btn-register">Zarejestruj</button>
      </form>
    </div>

    <footer>
      Masz już swoje konto?
      <RouterLink to="/" class="register-link">Zaloguj się</RouterLink>
    </footer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import IconUser from '@/assets/icons/IconUser.vue'
  import IconMail from '@/assets/icons/IconMail.vue'
  import IconLock from '@/assets/icons/IconLock.vue'
  import axios from 'axios';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const formData = {
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  // Komunikat błędu logowania
  let registerError = ref(false);

  // System rejestracji
  const register = async () => {
    try {
      const response = await axios.post('/register', formData);
      const { token, userRole } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('userRole', userRole);
      axios.defaults.headers.common['Authorization'] = `${token}`;

      router.push('/Pulpit');
    } catch (error) {
      registerError.value = true;
    }
  };
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

  .registerError {
    height: 47px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -15px;
    font-size: 90%;
    text-align: center;
    border-radius: 4px;
    border: 1px solid red;
    color: red;
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