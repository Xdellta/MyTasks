import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import RecoveryView from '../views/RecoveryView.vue'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
      meta: { requiresAuth: false }
    },
    {
      path: '/Rejestracja',
      name: 'register',
      component: RegisterView,
      meta: { requiresAuth: false }
    },
    {
      path: '/Odzyskiwanie',
      name: 'recovery',
      component: RecoveryView,
      meta: { requiresAuth: false }
    },
    {
      path: '/Pulpit',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/Wiadomosci',
      name: 'messages',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/Projekty',
      name: 'projects',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/Ustawienia',
      name: 'settings',
      component: HomeView,
      meta: { requiresAuth: true, requiresRole: 'administrator' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole')

  if (to.meta.requiresAuth && !token) {
    next('/');
  } else if (to.meta.requiresRole && userRole !== to.meta.requiresRole) {
    next('/pulpit');
  } else {
    next();
  }
});

export default router