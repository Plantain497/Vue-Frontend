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
				class="transition-all transform bg-white rounded-lg shadow-xl sm:max-w-lg sm:w-full"
			>
				<div class="px-4 py-4 bg-white sm:p-6 sm:pb-4">
					<h2
						class="pb-2 text-base font-bold leading-7 text-gray-900 sm:text-xl sm:leading-9 sm:truncate"
					>
						New Task
					</h2>
					<div class="flex sm:flex sm:items-start">
						<div class="w-full mt-3 text-center sm:mt-0 sm:text-left">
							<!-- Title form -->
							<text-input
								input-id="title"
								label="Title"
								v-model="taskTitle"
								placeholder="Enter a Task Title"
								:error="taskTitleError"
								v-click-outside="checkNotEmpty"
								hint="Required"
							/>

							<!-- Due date selector -->
							<div class="my-4">
								<div class="flex justify-between pb-1">
									<label
										for="todoDatePicker"
										class="block text-sm font-medium leading-5 text-gray-700"
									>
										Due Date
									</label>
									<span class="text-sm leading-5 text-gray-500">Optional</span>
								</div>
								<date-picker
									id="todoDatePicker"
									v-model="taskDate"
									:input-props="{
										readonly: true,
									}"
								/>
							</div>

							<!-- Description form -->
							<text-input
								input-id="description"
								label="Description"
								v-model="taskDescription"
								placeholder="Enter a Task Description"
								hint="Optional"
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
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import TextInput from '@/components/inputs/TextInput';
import { addTodo } from '@/api/todo';
import { auth } from '@/firebaseConfig';
import { ValidateNotEmpty } from '../inputs/validation';
export default {
	name: 'AddTodoModal',
	components: {
		DatePicker,
		TextInput,
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
			taskTitleError: false,
			taskDate: new Date(),
			taskComplete: false,
			uid: '',
		};
	},
	methods: {
		checkNotEmpty: function() {
			this.taskTitleError = ValidateNotEmpty(this.taskTitle);
		},
		sendOpenStatus: function() {
			this.$emit('changeAddModalOpenStatusEvent', false);
		},
		dateShift: function(date) {
			return new Date(date.getTime() - date.getTimezoneOffset() * -60000);
		},
		addTaskAndClose: function() {
			this.uid = auth.currentUser.uid;

			let date = null;
			if (this.taskDate == null) {
				const dateTemp = new Date();
				date = this.dateShift(dateTemp);
				addTodo(this.uid, this.taskTitle, this.taskDescription, null, false);
			} else {
				const dateTemp = new Date(this.taskDate);
				date = this.dateShift(dateTemp);
				addTodo(this.uid, this.taskTitle, this.taskDescription, date, false);
			}
			this.sendOpenStatus();
		},
	},
};
</script>
