<template>
	<div ref="modal" class="z-20">
		<transition name="main" leave-active-class="duration-200">
			<div
				v-show="open"
				class="fixed inset-x-0 z-20 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
			>
				<transition
					name="backdrop"
					enter-class="opacity-0"
					enter-active-class="duration-200 ease-out"
					enter-to-class="opacity-100"
					leave-class="opacity-100"
					leave-active-class="duration-300"
					leave-to-class="opacity-0"
				>
					<div v-show="open" class="fixed inset-0 transition-opacity">
						<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>
				</transition>
				<transition
					name="modal"
					enter-class="translate-y-4 opacity-0"
					enter-active-class="duration-200 ease-out"
					enter-to-class="translate-y-0 opacity-100"
					leave-class="translate-y-0 opacity-100"
					leave-active-class="duration-200 ease-in"
					leave-to-class="translate-y-4 opacity-0"
				>
					<div
						v-show="open"
						class="overflow-hidden transition-all transform rounded-lg shadow-xl sm:max-w-lg sm:w-full"
					>
						<slot name="content"></slot>
						<div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
							<span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
								<button
									data-test="modalButtonOkay"
									:disabled="disableOk"
									@click="closeAction"
									class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red sm:text-sm sm:leading-5"
								>{{ okayText }}</button>
							</span>
							<span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
								<button
									@click="cancel()"
									class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5"
								>{{ cancelText }}</button>
							</span>
						</div>
					</div>
				</transition>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	props: {
		open: Boolean,
		okayText: {
			type: String,
			default: 'Confirm',
		},
		cancelText: {
			type: String,
			default: 'Cancel',
		},
		disableOk: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		closeAction() {
			this.$emit('action', false);
		},
		cancel() {
			this.$emit('cancel');
		},
	},
};
</script>