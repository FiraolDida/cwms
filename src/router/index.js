import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import User from '../views/User.vue';
import Organization from '../views/Organization.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import store from "../store";

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '/dashboard',
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
        ]
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

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' })
    } else if (store.state.user.token && (to.meta.isGuest)) {
        next({ name: 'Dashboard'});
    } else {
        next()
    }
})

export default router;