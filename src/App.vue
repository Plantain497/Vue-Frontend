<template>
	<div id="app" class="h-screen font-sans antialiased text-gray-900 bg-gray-100">
		<app-nav-bar />
		<router-view />
	</div>
</template>
<script>
import AppNavBar from '@/components/general/AppNavBar';

export default {
	components: {
		AppNavBar,
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
