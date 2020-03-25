<template>
	<button
		class="block w-full px-5 py-3 font-medium text-center transition duration-150 ease-in-out focus:outline-none"
		:class="classes"
		v-on:click="authenticate"
	>
		{{ text }}
	</button>
</template>
<script>
import { auth, authProvider } from '@/firebaseConfig';
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
						const credential = authProvider.credential(idToken);
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
