<template>
	<div class="px-2 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div class="pt-8">
			<dropdown v-on:changeViewStatusEvent="getViewStatus"></dropdown>
		</div>
		<div class="flex h-screen py-8 max-w-7xl sm:px-6 lg:px-8">
			<todo-container
				:todo-list="todoList"
				:today-view-enabled="todayViewEnabled"
				:weekly-view-enabled="weeklyViewEnabled"
				:todays-date="todaysDate"
				v-on:sendTodoItemEvent="getTodo"
			></todo-container>
			<todo-description
				:selected-todo="selectedTodo"
				class="hidden min-w-1/2 md:block"
			></todo-description>
		</div>
		<button
			class="fixed flex justify-center bg-purple-400 rounded-full shadow-lg w-15 h-15 bottom-15 left-20 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue"
			v-on:click="addModalOpen = true"
		>
			<svg
				width="36"
				height="36"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 4V20M20 12L4 12"
					stroke="#4A5568"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
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
			todoList: [
				{
					title: 'Feed the cat',
					description:
						'Olive is hungry and needs her food RIGHT NOW ASDKJAHSKDHAKJSHDKAJSHDKASJHDAKSJDHAKSHDKAJSHDAKSJDHAKSJHDKAJSHDKJASHDAKSJHDKASJHDKJASHD',
					id: 16472,
					dueDate: new Date().toDateString(),
				},
				{
					title: 'Do laundry',
					description: 'need underwear',
					id: 82716,
					// dueDate: new Date().toDateString(),
				},
			],
			selectedTodo: TodoItem,
			todayViewEnabled: true,
			weeklyViewEnabled: false,
			todaysDate: new Date().toDateString(),
			addModalOpen: false,
		};
	},
	methods: {
		getTodo: function(todo) {
			this.selectedTodo = todo;
		},
		getViewStatus: function(curr) {
			if (curr === 'Today') {
				this.todayViewEnabled = true;
				this.weeklyViewEnabled = false;
			} else if (curr === 'This Week') {
				this.weeklyViewEnabled = true;
				this.todayViewEnabled = false;
			}
		},
		changeAddModalStatus: function(open) {
			this.addModalOpen = open;
		},
	},
};
</script>
