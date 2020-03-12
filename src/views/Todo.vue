<template>
	<div
		class="flex w-screen h-screen px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8"
	>
		<div class="w-1/2">
			<h1 class="pb-4">To-Do Page</h1>
			<div v-for="todo in todoList" :key="todo.title">
				<todo-item
					:title="todo.title"
					:description="todo.description"
					:is-complete="false"
				></todo-item>
			</div>
		</div>
		<todo-description></todo-description>
		<div class="hidden w-1/2" v-for="desc in descriptions" :key="desc.title">
			<todo-description
				:title="desc.title"
				:description="desc.description"
			></todo-description>
		</div>
	</div>
</template>
<script>
import TodoItem from '@/components/todo/TodoItem';
import TodoDescription from '@/components/todo/TodoDescription';
export default {
	name: 'Todo',
	components: {
		TodoItem,
		TodoDescription,
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
			descriptions: [
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
