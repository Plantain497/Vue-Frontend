<template>
	<div class="px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<h1 class="pb-4">To-Do Page</h1>
		<div v-for="todo in todoList" :key="todo.title">
			<todo-item
				:title="todo.title"
				:description="todo.description"
				:is-complete="false"
			></todo-item>
		</div>
	</div>
</template>
<script>
import TodoItem from '@/components/todo/TodoItem';
export default {
	name: 'Todo',
	components: {
		TodoItem,
	},
	data: function() {
		return {
			todoList: [
				{
					title: 'Feed the cat',
					description:
						'Olive is hungry and needs her food RIGHT NOW ASDKJAHSKDHAKJSHDKAJSHDKASJHDAKSJDHAKSHDKAJSHDAKSJDHAKSJHDKAJSHDKJASHDAKSJHDKASJHDKJASHD',
				},
				{ title: 'Do laundry', description: 'need underwear' },
			],
		};
	},
};
</script>
