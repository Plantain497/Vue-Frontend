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

export default {
	components: {
		AppNavBar,
	},
};
</script>
