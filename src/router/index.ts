import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/Pulpit',
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
    }
  ]
})

export default router
