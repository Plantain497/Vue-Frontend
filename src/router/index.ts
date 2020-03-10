import Landing from '@/views/Landing.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Landing',
		component: Landing,
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('@/views/Dashboard.vue'),
	},
	{
		path: '/todo',
		name: 'Todo',
	},
	{
		path: '/calendar',
		name: 'Calendar',
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('@/views/About.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
