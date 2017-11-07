import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/container/Login'
import Home from '@/container/Home'
import Landing from '@/container/Home/Landing';
import Dashboard from '@/container/Home/Dashboard';
import Sidebar from '@/components/Sidebar';
import ResumeTemplate1 from '@/resume-templates/ResumeTemplate1';
import ResumeTemplate2 from '@/resume-templates/ResumeTemplate2';

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
        {
          path: '/resumetemplate1',
          name: 'ResumeTemplate1',
          component: ResumeTemplate1
        },
        {
          path: '/resumetemplate2',
          name: 'ResumeTemplate2',
          component: ResumeTemplate2
        },
      ]
    },
  ]
})
