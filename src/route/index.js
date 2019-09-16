
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/page/Login.vue'),
    },
    {
      path: '/register',
      component: () => import('@/page/Register.vue'),
    },
    {
      path: '/home',
      component: () => import('@/page/home/home.vue'),
      children: [
        { path: '', component: () => import('@/page/home/data/db/user.vue'), },
        {
          path: 'db-user',
          component: () => import('@/page/home/data/db/user.vue'),
        },
        {
          path: 'db-role',
          component: () => import('@/page/home/data/db/role.vue'),
        },
        {
          path: 'es-index',
          component: () => import('@/page/home/data/es/index.vue'),
        },
        {
          path: 'es-analy',
          component: () => import('@/page/home/data/es/analy.vue'),
        },
      ]
    },
  ]
});
