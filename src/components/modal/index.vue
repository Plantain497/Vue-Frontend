<template>
	<Layout>
		<span class="inline-flex rounded-md shadow-sm">
			<button
				@click="open = !open"
				type="button"
				class="inline-flex items-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
			>
				Show Modal
			</button>
		</span>
		<div
			v-show="open"
			class="fixed inset-x-0 bottom-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
		>
			<transition
				enter-active-class="duration-300 ease-out"
				enter-class="opacity-0"
				enter-to-class="opacity-100"
				leave-active-class="duration-200 ease-in"
				leave-class="opacity-100"
				leave-to-class="opacity-0"
			>
				<div
					v-show="open"
					x-transition:enter="ease-out duration-300"
					x-transition:enter-start="opacity-0"
					x-transition:enter-end="opacity-100"
					x-transition:leave="ease-in duration-200"
					x-transition:leave-start="opacity-100"
					x-transition:leave-end="opacity-0"
					class="fixed inset-0 transition-opacity"
				>
					<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
				</div>
			</transition>
			<transition
				enter-active-class="duration-300 ease-out"
				enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
				enter-to-class="translate-y-0 opacity-100 sm:scale-100"
				leave-active-class="duration-200 ease-in"
				leave-class="translate-y-0 opacity-100 sm:scale-100"
				leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
			>
				<div
					ref="modal"
					v-show="open"
					class="px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-sm sm:w-full sm:p-6"
				>
					<div>
						<div
							class="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full"
						>
							<svg
								class="w-6 h-6 text-green-600"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
						<div class="mt-3 text-center sm:mt-5">
							<h3 class="text-lg font-medium leading-6 text-gray-900">
								Payment successful
							</h3>
							<div class="mt-2">
								<p class="text-sm leading-5 text-gray-500">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Consequatur amet labore.
								</p>
							</div>
						</div>
					</div>
					<div class="mt-5 sm:mt-6">
						<span class="flex w-full rounded-md shadow-sm">
							<button
								@click="
									open = false;
									closeTimeout();
								"
								type="button"
								class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
							>
								Go back to dashboard
							</button>
						</span>
					</div>
				</div>
			</transition>
		</div>
	</Layout>
</template>

<script>
export default {
	data: function() {
		return {
			open: false,
		};
	},
	methods: {
		closeTimeout() {
			setTimeout(() => {
				this.open;
			}, 1000);
		},
	},
};
</script>
