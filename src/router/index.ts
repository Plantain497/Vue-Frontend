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
		component: () => import('@/views/Todo.vue'),
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: () => import('@/views/Calendar.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
