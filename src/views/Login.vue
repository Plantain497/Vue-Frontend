<template>
	<modal
		:open="true"
		@action="authenticate"
		@cancel="logout"
		cancel-text="Cancel"
		confirm-text="Login"
		confirm-classes="text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
	>
		<template v-slot:content>
			<div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div
						class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-indigo-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
					>
						<lock-icon class="text-indigo-600" height-class="w-6" width-class="w-6" />
					</div>
					<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3 class="text-lg font-medium leading-6 text-gray-900">Please Login</h3>
						<div class="mt-2">
							<p class="text-sm leading-5 text-gray-500">
								To access Plantain, please login with Google or head back to
								our landing page!
							</p>
						</div>
					</div>
				</div>
			</div>
		</template>
	</modal>
</template>
<script>
import { auth, authProvider } from '@/firebaseConfig';
import Modal from '@/components/modal';
import LockIcon from '@/assets/Icons/LockIcon';

export default {
	components: { Modal, LockIcon },
	methods: {
		authenticate: function() {
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
						if (this.$route.query.redirect) {
							this.$router.push(this.$route.query.redirect);
						} else {
							this.$router.push('/Dashboard');
						}
					});
			});
		},
		logout: function() {
			this.$gapi.logout(() => this.$router.push('/'));
		},
	},
};
</script>
