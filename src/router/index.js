import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      alias: ['/home-page', '/about', '/values', '/services'],
      name: 'HomePage',
      component: HomePage
    }
  ]
})
