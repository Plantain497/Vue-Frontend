<template>
	<div
		id="app"
		class="h-screen font-sans antialiased text-gray-900 bg-gray-100"
	>
		<app-nav-bar />
		<router-view />
	</div>
</template>
<script>
import AppNavBar from '@/components/general/AppNavBar';
import store from '@/store';
import { format } from 'date-fns';

export default {
	components: {
		AppNavBar,
	},
	data: function() {
		return { timeout: {} };
	},
	computed: {
		todayTasks: function() {
			const todayDate = format(new Date(), 'PPP');
			const todayTasks = store.state.todos[todayDate];
			return todayTasks;
		},
	},
	watch: {
		todayTasks: function() {
			const now = new Date().getTime();
			const keys = Object.keys(this.todayTasks);
			for (let key of keys) {
				const secondsDiff = this.todayTasks[key].dueDate.seconds - now;
				if (secondsDiff > 0) {
					const title = this.todayTasks[key].title;
					const description = this.todayTasks[key].description;
					this.timeout[key] = setTimeout(() => {
						this.$notification.show(
							title,
							{
								body: description,
							},
							{},
						);
					}, secondsDiff);
				}
			}
		},
	},
	created() {
		try {
			// NOTE: 45min refresh policy is what google recommends
			window.setInterval(this.$gapi.refreshToken(), 2.7e6);
		} catch (e) {
			/* eslint-disable no-console */
			console.error(e);
		}
	},
};
</script>
