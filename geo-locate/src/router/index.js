import Vue from 'vue'
import Router from 'vue-router'
import Gmap from '@/components/home/Gmap'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Gmap',
      component: Gmap
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    

  ]
})
