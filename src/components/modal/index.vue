<template>
	<div ref="modal" class="z-20">
		<transition name="main">
			<div
				v-show="open"
				class="fixed inset-x-0 bottom-0 z-20 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
			>
				<transition name="backdrop">
					<div v-show="open" class="fixed inset-0 transition-opacity">
						<div class="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>
				</transition>
				<transition name="modal">
					<div
						v-show="open"
						class="px-4 pt-5 pb-4 overflow-hidden transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full sm:p-6"
					>
						<div>
							<div class="mt-3 text-center sm:mt-5">
								<slot name="title"></slot>
							</div>
						</div>
						<div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
							<span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
								<button
									data-test="modalButtonOkay"
									:disabled="disableOk"
									@click="$emit('ok')"
									type="button"
									class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
								>{{ okayText }}</button>
							</span>
							<span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
								<button
									@click="cancel()"
									type="button"
									class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md hover:bg-gray-50 focus:outline-none focus:border-gray-300 focus:shadow-outline-gray active:bg-gray-200"
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
			default: 'Okay',
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
		close() {
			this.$emit('input', false);
		},
		cancel() {
			this.$emit('cancel');
			this.close();
		},
	},
};
</script>


<style lang="scss" scoped>
.modal-enter-active {
	@apply ease-out duration-300;
}

.backdrop-enter-active {
	@apply ease-out duration-300;
}

.modal-leave-active {
	@apply ease-in duration-200;
}

.main-leave-active {
	@apply duration-300;
}

.backdrop-leave-active {
	@apply ease-in duration-200;
}

.modal-enter {
	@apply opacity-0 translate-y-4;

	@screen sm {
		@apply translate-y-0 scale-95;
	}
}

.modal-enter-to {
	@apply opacity-100 translate-y-0;

	@screen sm {
		@apply scale-100;
	}
}

.modal-leave {
	@apply opacity-100 translate-y-0;

	@screen sm {
		@applyscale-100;
	}
}
.modal-leave-to {
	@apply opacity-0 translate-y-4;

	@screen sm {
		@apply translate-y-0 scale-95;
	}
}

.backdrop-enter {
	@apply opacity-0;
}

.backdrop-enter-to {
	@apply opacity-100;
}

.backdrop-leave {
	@apply opacity-100;
}

.backdrop-leave-to {
	@apply opacity-0;
}
</style>
