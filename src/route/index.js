
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
      path: '/home',
      component: () => import('@/page/home/home.vue'),
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
      path: '/test',
      component: () => import('@/page/test.vue'),
    },
    {
      path: '/data',component: () => import('../page/home/data/db/user.vue'),
      children: [
        {
          path: 'db',component: () => import('../page/home/data/db/user.vue'),
          children: [
            {
              path: 'user',
              component: () => import('../page/home/data/db/user.vue'),
            },
            {
              path: '/role',
              component: () => import('../page/home/data/db/role.vue'),
            },
          ]
        },
        {
          path: 'es',
          children: [
            {
              path: 'index',
              component: () => import('../page/home/data/es/index.vue'),
            },
            {
              path: 'analay',
              component: () => import('../page/home/data/es/analy.vue'),
            },
          ]
        },
      ]
    }
  ]
});
