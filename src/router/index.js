import Vue from 'vue'
import Router from 'vue-router'
import { Home,Nav } from './../pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav,
      meta: {
        title: 'Nav'
      }
    }
  ]
})
