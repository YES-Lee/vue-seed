import Vue from 'vue'
import Router from 'vue-router'
import { beforeEach } from './guard'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/layout/dashboard'
    },
    {
      path: '/layout',
      meta: {
        requiredAuth: true
      },
      component: () => import('../views/layout'),
      children: [
        {
          path: '',
          redirect: 'dashboard'
        },
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('../views/pages/dashboard')
        },
        {
          path: 'consume',
          name: 'Consume',
          component: () => import('../views/pages/consume')
        },
        {
          path: 'myUrl',
          name: 'MyUrl',
          component: () => import('../views/pages/my_url')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login')
    }
  ]
})

router.beforeEach(beforeEach)

export default router
