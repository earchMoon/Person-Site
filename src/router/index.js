import Vue from 'vue'
import Router from 'vue-router'
import { Home,Tree,Moon,Book } from './../pages'

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
      path: '/tree',
      name: 'tree',
      component: Tree,
      meta: {
        title: 'Tree'
      }
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
      meta: {
        title: 'Book'
      }
    },
    {
      path: '/moon',
      name: 'moon',
      component: Moon,
      meta: {
        title: 'Moon'
      }
    }
  ]
})
