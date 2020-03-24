<template>
	<button
		class="block w-full px-5 py-3 font-medium text-center transition duration-150 ease-in-out focus:outline-none"
		:class="classes"
		v-on:click="authenticate"
	>{{ text }}</button>
</template>
<script>
import firebase from 'firebase/auth';
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
						return await firebase.auth().signInWithCredential(credential);
					})
					.then(() => {
						this.$router.push('Dashboard');
					});
			});
		},
	},
};
</script>
