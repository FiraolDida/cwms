import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import User from '../views/User.vue';
import Organization from '../views/Organization.vue';

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/user',
        name: 'User',
        component: User
    },
    {
        path: '/organization',
        name: 'Organization',
        component: Organization
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;