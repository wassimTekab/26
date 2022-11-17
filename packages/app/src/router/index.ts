import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/ProfilePage.vue'),
    },
    {
        path: '/todos',
        name: 'Todos',
        component: () => import('@/views/TodosPage.vue'),
    },
    {
        path: '/calender',
        name: 'Calender',
        component: () => import('@/views/CalenderPage.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router
