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
							<p class="mt-1 text-sm leading-5 text-gray-500">
								Due {{ formatDate(selectedTodo.dueDate) }}
							</p>
						</div>
						<div class="flex-shrink-0 mt-4 ml-4">
							<!-- <span class="inline-flex rounded-md shadow-sm">
								<button
									type="button"
									class="inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-red-500 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-600 active:bg-red-600 hover:bg-red-600"
									@click="deleteTodo"
								>Delete</button>
							</span>-->
							<span class="relative z-0 inline-flex shadow-sm">
								<button
									type="button"
									class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-200 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
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
import { format, fromUnixTime } from 'date-fns';
import TodoDeleteModal from '@/components/todo/TodoDeleteModal';
import TextEditable from '@/components/inputs/TextEditable';
import store from '@/store';

export default {
	name: 'TodoDescription',
	components: {
		TodoDeleteModal,
		TextEditable,
	},
	data: function() {
		return {
			showDeleteModal: false,
			titleText: '',
		};
	},
	methods: {
		formatDate: function(dueDate) {
			if (dueDate) {
				return format(fromUnixTime(dueDate.seconds), 'PPPp');
			}
			return '';
		},
		deleteTodo: function() {
			this.showDeleteModal = true;
		},
		handleCloseModal: function(e) {
			if (e.deleted) {
				store.dispatch('deleteTodoFromStore', {
					id: this.selectedTodo.id,
					date: this.formatDate(this.selectedTodo.dueDate),
				});
			}
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
				return selectedTodo;
			},
		},
	},
};
</script>
