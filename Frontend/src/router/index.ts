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
  const userRole = 'getUserRoleFromToken()';

  if (to.meta.requiresAuth && !token) {
    next('/');
  } else if (to.meta.requiresRole && userRole !== to.meta.requiresRole) {
    next('/pulpit');
  } else {
    next();
  }
});

export default router