<template>
	<modal
		:open="open"
		@action="addTaskAndClose"
		@cancel="sendOpenStatus"
		cancel-text="Cancel"
		confirm-text="Add Task"
		:disableConfirm="taskTitleError"
		confirm-classes="text-white bg-indigo-600 hover:bg-indigo-500 focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
	>
		<template v-slot:content>
			<h2
				class="pb-2 text-base font-bold leading-7 text-gray-900 sm:text-xl sm:leading-9 sm:truncate"
			>
				New Task
			</h2>
			<div class="flex sm:flex sm:items-start" :key="modalCounter">
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
					<div class="w-full my-4">
						<div class="flex justify-between pb-1">
							<label
								for="todoTimePicker"
								class="block text-sm font-medium leading-5 text-gray-700"
							>
								Task Deadline
							</label>
							<span class="text-sm leading-5 text-gray-500">Optional</span>
						</div>
						<vue-timepicker
							id="todoTimePicker"
							class="w-full"
							format="hh:mm A"
							:hide-disabled-minutes="true"
							:hide-clear-button="true"
							:auto-scroll="true"
							v-model="taskTimeObject"
						></vue-timepicker>
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
		</template>
	</modal>
</template>
<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import TextInput from '@/components/inputs/TextInput';
import VueTimepicker from 'vue2-timepicker';
import '@/components/inputs/timePicker.css';
import { set } from 'date-fns';
import { addTodo } from '@/api/todo';
import { auth } from '@/firebaseConfig';
import { ValidateNotEmpty } from '../inputs/validation';
import Modal from '@/components/modal';

export default {
	name: 'AddTodoModal',
	components: {
		DatePicker,
		TextInput,
		Modal,
		VueTimepicker,
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
			taskTimeObject: {
				hh: '09',
				mm: '00',
				A: 'AM',
			},
			taskComplete: false,
			uid: '',
			modalCounter: 0,
		};
	},
	methods: {
		checkNotEmpty: function() {
			this.taskTitleError = ValidateNotEmpty(this.taskTitle);
		},
		sendOpenStatus: function() {
			this.modalCounter += 1;
			this.$emit('changeAddModalOpenStatusEvent', false);
		},
		getDate: function(taskDate, taskTimeObject) {
			const hourShift = taskTimeObject.A === 'AM' ? 0 : 12;
			const newDate = set(taskDate, {
				hours: parseInt(taskTimeObject.hh) + hourShift,
				minutes: parseInt(taskTimeObject.mm),
				seconds: 0,
			});
			return newDate;
		},
		addTaskAndClose: function() {
			this.uid = auth.currentUser.uid;
			if (this.taskTitleError === false) {
				const date = this.getDate(this.taskDate, this.taskTimeObject);
				addTodo(this.uid, this.taskTitle, this.taskDescription, date, false);
				this.sendOpenStatus();
			}
		},
	},
};
</script>
