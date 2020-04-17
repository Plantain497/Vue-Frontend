<template>
	<div>
		<transition
			name="description-transition"
			enter-class="translate-y-4 opacity-0"
			enter-active-class="duration-200 ease-out"
			enter-to-class="translate-y-0 opacity-100"
			leave-class="translate-y-0 opacity-100"
			leave-active-class="duration-100 ease-in"
			leave-to-class="translate-y-4 opacity-0"
			mode="out-in"
		>
			<div
				v-if="Object.keys(selectedTodo).length"
				class="h-64 transition-all transform rounded-lg shadow bg-gray-50"
				:key="selectedTodo.id"
			>
				<div
					class="px-4 py-5 bg-white border-b border-gray-200 rounded-t-lg sm:px-6"
				>
					<div
						class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-no-wrap"
					>
						<div class="mt-4 ml-4">
							<text-editable
								v-model="titleText"
								class="text-lg font-medium leading-6 text-gray-900"
							/>
							<date-picker
								id="todoDatePicker"
								:popover="{ placement: 'bottom', visibility: 'click' }"
								v-model="taskDate"
								:input-props="{
									readonly: true,
								}"
							>
								<p class="mt-1 text-sm leading-5 text-gray-500">
									Due {{ formatDate(taskDate) }}
								</p>
							</date-picker>
							<p
								class="text-sm leading-5 text-gray-500"
								v-if="showTimepicker === false"
								@click="showTimepicker = true"
							>
								Finish by {{ taskTimeObject.hh }}:{{ taskTimeObject.mm }}
								{{ taskTimeObject.A }}
							</p>
							<vue-timepicker
								v-if="showTimepicker === true"
								@close="showTimepicker = false"
								id="todoTimePicker"
								class="w-full"
								format="hh:mm A"
								:hide-disabled-minutes="true"
								:hide-clear-button="true"
								:auto-scroll="true"
								v-model="taskTimeObject"
							></vue-timepicker>
						</div>
						<div class="flex-shrink-0 mt-4 ml-4">
							<span class="relative z-0 inline-flex shadow-sm">
								<button
									type="button"
									class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-200 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
									@click="updateTodo"
								>
									Update
								</button>
								<button
									type="button"
									class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-red-500 border border-gray-300 rounded-r-md hover:bg-red-600 focus:z-10 focus:outline-none focus:border-red-200 focus:shadow-outline-red active:bg-red-700"
									@click="deleteTodo"
								>
									Delete
								</button>
							</span>
						</div>
					</div>
				</div>
				<div class="px-6 py-5">
					<text-editable
						v-model="descriptionText"
						class="text-base font-normal leading-5 text-gray-900"
					/>
				</div>
			</div>
		</transition>

		<todo-delete-modal
			:show-modal="showDeleteModal"
			@closeModal="handleCloseModal"
			:id="selectedTodo.id"
		/>
	</div>
</template>
<script>
import { auth } from '@/firebaseConfig';
import { format, fromUnixTime, set } from 'date-fns';
import TodoDeleteModal from '@/components/todo/TodoDeleteModal';
import TextEditable from '@/components/inputs/TextEditable';
import DatePicker from 'v-calendar/lib/components/date-picker.umd';
import VueTimepicker from 'vue2-timepicker';
import '@/components/inputs/timePicker.css';
import { updateTodo } from '@/api/todo';
import store from '@/store';

export default {
	name: 'TodoDescription',
	components: {
		TodoDeleteModal,
		TextEditable,
		DatePicker,
		'vue-timepicker': VueTimepicker,
	},
	data: function() {
		return {
			showDeleteModal: false,
			titleText: '',
			descriptionText: '',
			taskDate: new Date(),
			taskTimeObject: {
				hh: '09',
				mm: '00',
				A: 'AM',
			},
			showTimepicker: false,
		};
	},
	methods: {
		formatDate: function(dueDate) {
			if (dueDate) {
				return format(dueDate, 'PPP');
			}
			return '';
		},
		formatDateFromUnix: function(dueDate) {
			if (dueDate) {
				return format(fromUnixTime(dueDate.seconds), 'PPP');
			}
			return '';
		},
		deleteTodo: function() {
			this.showDeleteModal = true;
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
		updateTodo: function() {
			updateTodo(auth.currentUser.uid, this.selectedTodo.id, {
				title: this.titleText,
				description: this.descriptionText,
				dueDate: this.getDate(this.taskDate, this.taskTimeObject),
				isCompleted: this.selectedTodo.isCompleted,
			});
		},
		handleCloseModal: function(e) {
			if (e.deleted) {
				store.dispatch('deleteTodoFromStore', {
					id: this.selectedTodo.id,
					date: this.formatDateFromUnix(this.selectedTodo.dueDate),
				});
			}
			store.dispatch('setCurrentSelectedTodo', {});
			this.showDeleteModal = false;
		},
	},
	computed: {
		selectedTodo: {
			get: function() {
				const selectedTodo = store.state.currentSelectedTodo;
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				this.titleText = selectedTodo.title;
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				this.descriptionText = selectedTodo.description;
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				// this.taskDate = fromUnixTime(selectedTodo.dueDate.seconds);
				if (selectedTodo.dueDate) {
					const taskTime = fromUnixTime(selectedTodo.dueDate.seconds);
					// eslint-disable-next-line vue/no-side-effects-in-computed-properties
					this.taskDate = taskTime;
					// eslint-disable-next-line vue/no-side-effects-in-computed-properties
					this.taskTimeObject = {
						hh: format(taskTime, 'hh'),
						mm: format(taskTime, 'mm'),
						A: format(taskTime, 'a'),
					};
				}
				return selectedTodo;
			},
		},
	},
};
</script>
