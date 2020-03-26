<template>
	<modal />
	<!-- <div class="px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div> -->
</template>

<script>
import { auth } from '@/firebaseConfig';
import HelloWorld from '@/components/HelloWorld.vue';
import Modal from '@/components/modal';

export default {
	name: 'Dashboard',
	components: {
		Modal,
	},
	data: function() {
		return {
			currentUser: auth.currentUser,
		};
	},
	methods: {
		getEvents: async function() {
			this.$gapi.getGapiClient().then(async gapi => {
				const res = await gapi.client.calendar.events.list({
					calendarId: 'primary',
					timeMin: new Date().toISOString(),
				});
				console.log(res.result.items);
			});
		},
	},
};
</script>
