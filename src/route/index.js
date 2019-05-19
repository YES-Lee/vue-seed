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
      redirect: '/login'
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
