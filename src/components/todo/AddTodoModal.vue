<template>
	<div
		class="fixed inset-0 flex items-center justify-center h-auto px-4 pb-4"
		v-if="open"
	>
		<transition
			name="custom-background-transition"
			enter-class="opacity-0"
			enter-active-class="duration-300 ease-out"
			enter-to-class="opacity-100"
			leave-class="opacity-100"
			leave-active-class="duration-200 ease-in"
			leave-to-class="opacity-0"
		>
			<div class="fixed inset-0 transition-opacity">
				<div class="absolute inset-0 bg-gray-400 opacity-75"></div>
			</div>
		</transition>

		<transition
			name="custom-modal-transition"
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
					<div class="flex sm:flex sm:items-start">
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<!-- Title form -->

							<formulate-input
								id="title"
								class="block w-full sm:text-sm sm:leading-5"
								type="text"
								name="title"
								v-model="taskTitle"
								placeholder="Title"
								validate="required|title"
							/>

							<formulate-input
								id="title"
								class="block w-full sm:text-sm sm:leading-5"
								type="date"
								name="date"
								v-model="taskDate"
							/>

							<!-- Description form -->
							<formulate-input
								class="block w-full sm:text-sm sm:leading-5"
								id="taskDescription"
								type="text"
								placeholder="Description"
								v-model="taskDescription"
							/>
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
					<span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
						<button
							v-on:click="addTaskAndClose"
							type="button"
							class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
						>
							Add Task
						</button>
					</span>
					<span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
						<button
							v-on:click="sendOpenStatus"
							type="button"
							class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-200 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5"
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
import FormulateInput from '@braid/vue-formulate/src/FormulateInput.vue';
export default {
	name: 'AddTodoModal',
	components: {
		FormulateInput,
	},
	props: {
		open: {
			type: Boolean,
			default: false,
		},
	},
	data: function() {
		return {
			taskTitle: '',
			taskDescription: '',
			taskDate: {},
			taskComplete: false,
		};
	},
	methods: {
		sendOpenStatus: function() {
			this.$emit('changeAddModalOpenStatusEvent', false);
		},
		addTaskAndClose: function() {
			uid = 'ashdjakshdakjshd';
			addTodo(uid, this.taskTitle, this.taskDescription, this.taskDate, false);
			sendOpenStatus();
		},
	},
};
</script>
