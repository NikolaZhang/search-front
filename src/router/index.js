import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/page/HomePage/home')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('@/page/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/page/Register')
    }
  ]
})
