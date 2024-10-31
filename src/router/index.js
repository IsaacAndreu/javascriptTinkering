import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../components/LandingPage.vue';
import Calculator from '../components/CalculatorPage.vue'; // Assegura't que la ruta és correcta
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
        component: Calculator // Aquí ha de ser el component de la calculadora
    },
    {
        path: '/comments',
        name: 'Comments',
        component: Comments // Comprovació per a la pàgina de comentaris
    },
    {
        path: '/users',
        name: 'Users',
        component: Users // Comprovació per a la pàgina d'usuaris
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
