import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  {
    path: '/test',
    name: 'TestView',
    component: () => import('../views/TestView.vue'),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
