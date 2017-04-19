import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/pages/Main'
import Login from '@/pages/Login'
import Registration from '@/pages/Registration'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
