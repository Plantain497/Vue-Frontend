<template>
	<div class="px-2 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div class="pt-8">
			<dropdown></dropdown>
		</div>
		<div class="flex h-screen py-8 max-w-7xl sm:px-6 lg:px-8">
			<todo-container
				:todo-list="todoList"
				v-on:sendTodoItemEvent="getTodo"
			></todo-container>
			<todo-description
				:selected-todo="selectedTodo"
				class="hidden md:block"
			></todo-description>
		</div>
	</div>
</template>
<script>
import TodoItem from '@/components/todo/TodoItem';
import TodoDescription from '@/components/todo/TodoDescription';
import Dropdown from '@/components/dropdowns/Dropdown';
import TodoContainer from '@/components/todo/TodoContainer';
export default {
	name: 'Todo',
	components: {
		Dropdown,
		TodoContainer,
		TodoDescription,
	},
	data: function() {
		return {
			todoList: [
				{
					title: 'Feed the cat',
					description:
						'Olive is hungry and needs her food RIGHT NOW ASDKJAHSKDHAKJSHDKAJSHDKASJHDAKSJDHAKSHDKAJSHDAKSJDHAKSJHDKAJSHDKJASHDAKSJHDKASJHDKJASHD',
					id: 16472,
				},
				{ title: 'Do laundry', description: 'need underwear', id: 82716 },
			],
			selectedTodo: TodoItem,
		};
	},
	methods: {
		getTodo: function(todo) {
			this.selectedTodo = todo;
		},
	},
};
</script>
