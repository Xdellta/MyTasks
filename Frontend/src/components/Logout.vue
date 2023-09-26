<template>
  <IconLogout class="iconLogout" @click="handleLogout" />
</template>

<script setup lang="ts">
  import IconLogout from "@/assets/icons/IconLogout.vue"
  import { useRouter } from 'vue-router';
  import axios from 'axios';

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
      }

      const response = await axios.post('/logout');

      if (response.status === 200) {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        router.push('/');
      }
    } catch (error) {
      console.error('Błąd podczas wylogowywania:', error);
    }
  };
</script>

<style scoped lang="scss">
  .iconLogout {
    height: 32px;
    width: max-content;
    fill: #F7F9FB;
  }

  .iconLogout:hover {
    cursor: pointer;
    transition: transform 0.2s ease;
    transform: scale(1.1);
  }
</style>