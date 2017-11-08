import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/Login'
import Home from '@/container/Home'
import Landing from '@/container/Home/Landing';
import Dashboard from '@/container/Home/Dashboard';
import ViewTemplates from '@/container/Home/ViewTemplates';
import Auth from '@/packages/auth/Auth.js';

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: { requiresAuth: false },
    },
    {
      path: '/home',
      component: Home,
      meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'Landing',
          component: Landing,
          meta: { requiresAuth: true },
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard,
          meta: { requiresAuth: true },
        },
        {
          path: '/select-templates',
          name: 'ViewTemplates',
          component: ViewTemplates,
          meta: { requiresAuth: true },
        },
      ]
    },
  ]
});

router.beforeEach((to, from, next) => {
  // console.log('Router.beforeEach', to);
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(!Auth.isAuthenticated()) {
      next({
        name: 'Login'
      })
    }
    else {
      next();  // make sure to always call next()!
    }
  }
  // else if (to.matched.some(record => record.meta.requiresAuth)) {
  //   if(Auth.isAuthenticated()) {
  //     next({
  //       name: 'Landing'
  //     })
  //   }
  //   else {
  //     next();  // make sure to always call next()!
  //   }
  // }
  else {
    next();  // make sure to always call next()!
  }
});

export default router;
