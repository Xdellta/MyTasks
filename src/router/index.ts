import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Wiadomosci',
      name: 'messages',
      component: HomeView
    },
    {
      path: '/Projekty',
      name: 'projects',
      component: HomeView
    },
    {
      path: '/Ustawienia',
      name: 'settings',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginView
    }
  ]
})

export default router
