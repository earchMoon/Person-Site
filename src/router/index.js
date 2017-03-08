import Vue from 'vue'
import Router from 'vue-router'
import {Home, Tree, Moon, Book, Main} from './../pages'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                title: '浮萍'
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
            path: '/moon',
            name: 'moon',
            component: Moon,
            meta: {
                title: 'Moon'
            }
        }
    ]
})
