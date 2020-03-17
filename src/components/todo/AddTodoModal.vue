<template>
	<div class="fixed inset-0 flex items-center justify-center px-4 pb-4" v-if="open">
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
					<div class="sm:flex sm:items-start">
						<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
							<!-- Title form -->
							<input
								class="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="taskTitle"
								type="text"
								placeholder="Title"
							/>

							<!-- Due date selector here!! -->
							<!-- <input
								class="w-full px-3 py-2 mb-4 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								id="dateSelector"
								type="text"
							>-->
							<date-pick
								v-model="date"
								:format="format"
								:parseDate="parseDate"
								:formatDate="formatDate"
								:inputAttributes="{ size: 32 }"
							></date-pick>

							<!-- <div class="mt-2">
								<p class="text-sm leading-5 text-gray-500">
									Details about your task go here!
								</p>
							</div>-->

							<!-- Description form here! -->
						</div>
					</div>
				</div>
				<div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
					<span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
						<button
							v-on:click="sendOpenStatus"
							type="button"
							class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo sm:text-sm sm:leading-5"
						>Add Task</button>
					</span>
					<span class="flex w-full mt-3 rounded-md shadow-sm sm:mt-0 sm:w-auto">
						<button
							v-on:click="sendOpenStatus"
							type="button"
							class="inline-flex justify-center w-full px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-200 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline sm:text-sm sm:leading-5"
						>Cancel</button>
					</span>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import DatePick from 'vue-date-pick';
import fecha from 'fecha';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
	name: 'AddTodoModal',
	components: { DatePick },
	props: {
		open: {
			type: Boolean,
			default: false,
		},
	},
	data: function() {
		return {
			format: 'dddd MMMM Do, YYYY',
			date: fecha.format(new Date(), 'dddd MMMM Do, YYYY'),
		};
	},
	methods: {
		sendOpenStatus: function() {
			this.$emit('changeAddModalOpenStatusEvent', false);
		},
		parseDate(dateString, format) {
			return fecha.parse(dateString, format);
		},
		formatDate(dateObj, format) {
			return fecha.format(dateObj, format);
		},
	},
};
</script>
