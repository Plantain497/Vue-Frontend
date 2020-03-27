<template>
	<div
		class="fixed inset-x-0 bottom-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center"
	>
		<transition
			enter-class="opacity-0"
			enter-active-class="duration-300 ease-out"
			enter-to-class="opacity-100"
			leave-class="opacity-100"
			leave-active-class="duration-200 ease-in"
			leave-to-class="opacity-0"
		>
			<div class="fixed inset-0 transition-opacity">
				<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
			</div>
		</transition>

		<transition
			enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
			enter-active-class="duration-300 ease-out"
			enter-to-class="translate-y-0 opacity-100 sm:scale-100"
			leave-class="translate-y-0 opacity-100 sm:scale-100"
			leave-active-class="duration-200 ease-in"
			leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
		>
			<div
				class="overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full"
			>
				<div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
					<div class="sm:flex sm:items-start">
						<div
							class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
						>
							<svg
								class="w-6 h-6 text-red-600"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
								/>
							</svg>
						</div>
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<h3 class="text-lg font-medium leading-6 text-gray-900">
								Delete Task
							</h3>
							<div class="mt-2">
								<p class="text-sm leading-5 text-gray-500">
									Are you sure you want to delete this task?
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
					<span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
						<button
							@click="deleteTodo"
							type="button"
							class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
						>
							Delete
						</button>
					</span>
					<span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
						<button
							v-on:click="closeModal"
							type="button"
							class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5"
						>
							Cancel
						</button>
					</span>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import { auth } from '@/firebaseConfig';
import { deleteToDo } from '@/api/todo';

export default {
	props: {
		id: {
			type: String,
			default: '',
		},
	},
	methods: {
		closeModal: function() {
			this.$emit('closeModal', {
				deleted: false,
			});
		},
		deleteTodo: function() {
			deleteToDo(auth.currentUser.uid, this.id);
			this.$emit('closeModal', { deleted: true });
		},
	},
};
</script>
