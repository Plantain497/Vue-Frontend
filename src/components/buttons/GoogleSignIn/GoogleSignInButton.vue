<template>
	<button
		class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 transition duration-150 ease-in-out border border-transparent focus:outline-none focus:shadow-outline"
		:class="classes"
		v-on:click="authenticate"
	>{{ text }}</button>
</template>
<script>
import { auth } from '@/firebaseConfig';
export default {
	props: {
		text: {
			type: String,
			default: 'Sign In',
		},
		classes: {
			type: String,
		},
	},
	methods: {
		authenticate: function() {
			// this.$gapi.login(() => this.$router.push('Dashboard'));
			this.$gapi.login(() => {
				this.$gapi
					.getGapiClient()
					.then(async gapi => {
						const idToken = gapi.auth2
							.getAuthInstance()
							.currentUser.get()
							.getAuthResponse().id_token;
						const credential = firebase.auth.GoogleAuthProvider.credential(
							idToken,
						);
						return await auth.signInWithCredential(credential);
					})
					.then(() => {
						this.$router.push('Dashboard');
					});
			});
		},
	},
};
</script>
