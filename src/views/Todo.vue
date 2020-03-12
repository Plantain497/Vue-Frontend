<template>
	<div class="px-2 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div class="pt-8">
			<dropdown></dropdown>
		</div>
		<div class="flex h-screen py-8 sm:px-6 lg:px-8">
			<todo-container :todo-list="todoList"></todo-container>
			<todo-description class="hidden md:block"></todo-description>
		</div>
	</div>
</template>
<script>
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
				},
				{ title: 'Do laundry', description: 'need underwear' },
			],
		};
	},
};
</script>
