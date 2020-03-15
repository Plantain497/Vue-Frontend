<template>
	<div class="h-full ml-10 mr-5 bg-gray-200 rounded-lg shadow-sm">
		<div class="px-6 py-4">
			<p class="text-xl font-bold break-words">{{ selectedTodo.title }}</p>
			<p class="pb-4 text-gray-600 text-md">{{ selectedTodo.dueDate }}</p>
			<p class="text-base text-gray-700 break-words">{{ selectedTodo.description }}</p>
		</div>
	</div>
</template>
<script>
import TodoItem from '@/components/todo/TodoItem';
export default {
	name: 'TodoDescription',
	props: {
		selectedTodo: {
			type: TodoItem,
		},
	},
};
</script>
