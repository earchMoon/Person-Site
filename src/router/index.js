import Vue from 'vue'
import Router from 'vue-router'
import {Home, Tree, Main, Book, About} from './../pages'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                title: '小小鸣人'
            }
        },
        {
            path: '/home',
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
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: '小小鸣人，何许人也'
            }
        }
    ]
})
