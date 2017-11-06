import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/Login'
import Home from '@/container/Home'
import Landing from '@/container/Home/Landing';
import Dashboard from '@/container/Home/Dashboard';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Landing',
          component: Landing
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
      ]
    },
  ]
})
