import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import Calculator from '../components/CalculatorPage.vue';
import Comments from '../components/CommentsPage.vue';
import Users from '../components/UsersPage.vue';

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator
    },
    {
        path: '/comments',
        name: 'Comments',
        component: Comments
    },
    {
        path: '/users',
        name: 'Users',
        component: Users
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
