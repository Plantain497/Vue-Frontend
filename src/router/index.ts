import Landing from '@/views/Landing.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import TokenService from '@/services/TokenService';

Vue.use(VueRouter);

const routes = [
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

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		const time = TokenService.getToken('gapi.expires_at');
		let loggedIn = false;
		if (time !== '') {
			const diff = (new Date().getTime() - JSON.parse(time)) / 1000;
			loggedIn = diff < 600;
		}

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
