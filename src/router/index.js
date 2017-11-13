import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/Login'
import Home from '@/container/Home'
import Landing from '@/container/Home/Landing';
import Dashboard from '@/container/Home/Dashboard';
import Page404 from '@/container/Page404';
import Sidebar from '@/components/Sidebar';

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
        {
          path: '/sidebar',
          name: 'Sidebar',
          component: Sidebar
        },
      ]
    },
    {
      path: '/page404',
      name: 'Page404',
      component: Page404
    },
  ]
})
