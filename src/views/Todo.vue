<template>
	<div class="px-2 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div class="pt-8">
			<dropdown></dropdown>
		</div>
		<div class="flex h-screen py-8 max-w-7xl sm:px-6 lg:px-8">
			<div class="w-full md:w-1/2">
				<div v-for="todo in todoList" :key="todo.title">
					<todo-item
						:title="todo.title"
						:description="todo.description"
						:is-complete="false"
					></todo-item>
				</div>
			</div>
			<todo-description class="hidden md:block"></todo-description>
		</div>
	</div>
</template>
<script>
import TodoItem from '@/components/todo/TodoItem';
import TodoDescription from '@/components/todo/TodoDescription';
import Dropdown from '@/components/dropdowns/Dropdown';
export default {
	name: 'Todo',
	components: {
		Dropdown,
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
