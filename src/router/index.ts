import Landing from '@/views/Landing.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
	{
		path: '*',
		redirect: '/landing',
	},
	{
		path: '/',
		name: 'Landing',
		component: Landing,
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('@/views/Dashboard.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/todo',
		name: 'Todo',
		component: () => import('@/views/Todo.vue'),
		meta: {
			requiresAuth: true,
		},
	},
	{
		path: '/calendar',
		name: 'Calendar',
		component: () => import('@/views/Calendar.vue'),
		meta: {
			requiresAuth: true,
		},
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

router.beforeEach(async (to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		await Vue.nextTick();
		const loggedIn = await router.app.$gapi.isAuthenticated();
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		if (!loggedIn) {
			next({
				path: '/login',
				query: { redirect: to.fullPath },
			});
		} else {
			next();
		}
	} else {
		next(); // make sure to always call next()!
	}
});

export default router;
