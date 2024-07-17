import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import HomePrincipal from '../components/HomePrincipal.vue';
import HomeSecundario from '../components/HomeSecundario.vue';

const routes = [
  {
    path: '/',
    redirect: '/login'  // Redireciona '/' para '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home-principal',
    name: 'HomePrincipal',
    component: HomePrincipal,
    meta: { requiresAuth: true } // Rota protegida que requer autenticação
  },
  {
    path: '/home-secundario',
    name: 'HomeSecundario',
    component: HomeSecundario,
    meta: { requiresAuth: true } // Rota protegida que requer autenticação
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
