import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Wiadomości',
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
