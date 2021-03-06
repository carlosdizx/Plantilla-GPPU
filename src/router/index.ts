import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('../views/About.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/Dashboard.vue'),
	},
	{
		path: '/forms',
		name: 'Forms',
		component: () => import('../views/Forms.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
