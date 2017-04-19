import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import Main from '@/pages/Main'

Vue.use(Router)
Vue.use(Vuex)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
