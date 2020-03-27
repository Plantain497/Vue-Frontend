<template>
	<div class="px-2 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div class="pt-8 ml-8 mr-8">
			<dropdown v-on:changeViewStatusEvent="getViewStatus"></dropdown>
			<button
				class="flex items-center float-right w-32 h-auto px-4 py-2 text-sm font-medium leading-5 text-white bg-purple-500 rounded-md shadow-sm bottom-15 right-20 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
				v-on:click="addModalOpen = true"
			>
				<svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6 pr-2">
					<path
						fill-rule="evenodd"
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
						clip-rule="evenodd"
					></path>
				</svg>

				Add Task
			</button>
		</div>
		<div class="flex h-screen py-8 max-w-7xl sm:px-6 lg:px-8">
			<todo-container :selected-view="selectedView"></todo-container>
			<todo-description
				v-if="Object.keys(selectedTodo).length"
				:selected-todo="selectedTodo"
				class="hidden min-w-1/2 md:block"
			></todo-description>
		</div>
		<add-todo-modal
			v-on:changeAddModalOpenStatusEvent="changeAddModalStatus"
			:open="addModalOpen"
		></add-todo-modal>
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
	},
	computed: {
		selectedTodo: function() {
			return store.state.currentSelectedTodo;
		},
	},
};
</script>
