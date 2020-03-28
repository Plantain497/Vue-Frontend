<template>
	<div class="px-2 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div class="flex justify-between pt-8 sm:px-6 lg:px-8">
			<dropdown v-on:changeViewStatusEvent="getViewStatus"></dropdown>
			<button
				class="flex items-center w-32 h-auto px-4 py-2 text-sm font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-500 rounded-md shadow-sm focus:outline-none focus:border-purple-300 hover:bg-purple-600 focus:shadow-outline-purple"
				v-on:click="addModalOpen = true"
			>
				<svg fill="currentColor" viewBox="0 0 20 20" class="w-5 h-5 mr-3 -ml-1">
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
						clip-rule="evenodd"
					/>
				</svg>
				Add Task
			</button>
		</div>
		<div
			class="flex justify-between w-full h-screen py-8 max-w-7xl sm:px-6 lg:px-8"
			v-click-outside="resetCurrentTodo"
		>
			<todo-container :selected-view="selectedView"></todo-container>

			<todo-description
				v-if="Object.keys(selectedTodo).length"
				:selected-todo="selectedTodo"
				class="flex-1 hidden ml-8 md:block"
			></todo-description>
		</div>
		<add-todo-modal v-on:changeAddModalOpenStatusEvent="changeAddModalStatus" :open="addModalOpen"></add-todo-modal>
	</div>
</template>
<script>
import TodoItem from '@/components/todo/TodoItem';
import TodoDescription from '@/components/todo/TodoDescription';
import Dropdown from '@/components/dropdowns/Dropdown';
import TodoContainer from '@/components/todo/TodoContainer';
import AddTodoModal from '@/components/todo/AddTodoModal';
import store from '@/store';

export default {
	name: 'Todo',
	components: {
		Dropdown,
		TodoContainer,
		TodoDescription,
		AddTodoModal,
	},
	data: function() {
		return {
			selectedView: 'Today',
			thisWeekDates: [],
			addModalOpen: false,
		};
	},
	methods: {
		getViewStatus: function(curr) {
			if (curr === 'Today') {
				this.selectedView = 'Today';
			} else if (curr === 'This Week') {
				this.selectedView = 'Weekly';
			}
		},
		changeAddModalStatus: function(open) {
			this.addModalOpen = open;
		},
		resetCurrentTodo: function() {
			store.dispatch('setCurrentSelectedTodo', {});
		},
	},
	computed: {
		selectedTodo: function() {
			return store.state.currentSelectedTodo;
		},
	},
};
</script>
