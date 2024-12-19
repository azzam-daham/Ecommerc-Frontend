import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ClientList from '@/components/Client/ClientList.vue'
import ClientShow from '@/components/Client/ClientShow.vue'
import ClientAdd from '@/components/Client/ClientAdd.vue'
import ClientUpdate from '@/components/Client/ClientUpdate.vue'

const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'ClientList',
        path: '/clients',
        component: ClientList
    },
    {
        name: 'ClientShow',
        path: '/clients/:id',
        component: ClientShow
    },
    {
        name: 'ClientAdd',
        path: '/clients/add',
        component: ClientAdd
    },
    {
        name: 'ClientUpdate',
        path: '/clients/update/:id',
        component: ClientUpdate
    },
]

const router = createRouter({
    history: createWebHistory(), routes
})

export default router;