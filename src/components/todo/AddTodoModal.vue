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
						<div class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<!-- Title form -->
							<formulate-input
								class="w-full px-3 py-2 mb-4 leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
								type="text"
								name="title"
								v-model="taskTitle"
								placeholder="Title"
								validation="required"
							/>

							<!-- Due date selector -->
							<div class="flex items-center w-full">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									viewBox="0 0 24 24"
									class="w-16 h-16 px-3 py-2 text-gray-600"
								>
									<path
										d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									></path>
								</svg>
								<formulate-input
									type="date"
									class="w-full py-2 mb-4 text-sm leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
									v-model="taskDate"
								/>
							</div>

							<!-- Description form -->
							<formulate-input
								class="w-full px-3 py-2 mb-4 leading-tight text-gray-700 appearance-none focus:outline-none focus:shadow-outline"
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
							:disabled="taskTitle === ''"
							type="button"
							class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5 disabled:opacity-50 disabled:cursor-not-allowed"
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
import FormulateForm from '@braid/vue-formulate/src/FormulateForm';
import { addTodo } from '@/api/todo';
import { auth } from '@/firebaseConfig';
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
			taskDate: null,
			taskComplete: false,
			uid: '',
		};
	},
	methods: {
		sendOpenStatus: function() {
			this.$emit('changeAddModalOpenStatusEvent', false);
		},
		addTaskAndClose: function() {
			this.uid = auth.currentUser.uid;

			var date = null;
			if (this.taskDate == null) {
				addTodo(this.uid, this.taskTitle, this.taskDescription, null, false);
			}
			date = new Date(this.taskDate);
			addTodo(this.uid, this.taskTitle, this.taskDescription, date, false);
			this.sendOpenStatus();
		},
	},
};
</script>
