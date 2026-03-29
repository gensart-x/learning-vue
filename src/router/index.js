import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '@components/HelloWorld.vue'
import About from '@components/About.vue'
import User from '@components/User.vue'
import UserDetail from '@components/UserDetail.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:name',
        name: 'user',
        component: User,
        children: [
            {
                path: 'details',
                name: 'details',
                component: UserDetail
            }
        ]
    }
]

export default createRouter({
    routes,
    history: createWebHistory()
})