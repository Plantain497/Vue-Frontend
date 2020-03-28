<template>
	<div class="px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<button @click="showModal = true">Open Modal</button>
		<modal
			:open="showModal"
			@action="modelClose"
			@cancel="showModal = false"
			cancel-text="Cancel"
			confirm-text="Deactivate"
		>
			<template v-slot:content>
				<div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div
							class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
						>
							<svg class="w-6 h-6 text-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
						</div>
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Deactivate account</h3>
							<div class="mt-2">
								<p class="text-sm leading-5 text-gray-500">
									Are you sure you want to deactivate your account? All of your
									data will be permanantly removed. This action cannot be
									undone.
								</p>
							</div>
						</div>
					</div>
				</div>
			</template>
		</modal>
	</div>
</template>

<script>
import { auth } from '@/firebaseConfig';
import HelloWorld from '@/components/HelloWorld.vue';
import Modal from '@/components/modal';
import { getTodosOnDate } from '@/api/todo';

export default {
	name: 'Dashboard',
	components: {
		Modal,
	},
	data: function() {
		return {
			currentUser: auth.currentUser,
			showModal: false,
		};
	},
	methods: {
		modelClose: function() {
			this.showModal = false;
		},
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
	created: function() {
		const arr = [];
		const pushIntoArr = (id, todo) => {
			arr.push({ id, ...todo });
		};
		const today = new Date();
		getTodosOnDate(this.currentUser.uid, today, pushIntoArr);
		console.log(arr);
	},
};
</script>
