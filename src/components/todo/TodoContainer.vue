<template>
	<div class="w-full h-full bg-gray-100 md:w-1/2">
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
	name: 'TodoContainer',
	components: {
		TodoItem,
	},
	props: {
		todoList: {
			type: Array,
		},
	},
};
</script>
