<template>
	<div class="w-full h-full bg-gray-100 md:w-1/2">
		<div>
			<div v-for="todo in todoList" :key="todo.title">
				<todo-item
					:title="todo.title"
					:description="todo.description"
					v-on:click.native="sendClickedTodoItem(todo)"
				></todo-item>
			</div>
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
	methods: {
		sendClickedTodoItem: function(todo) {
			this.$emit('sendTodoItemEvent', todo);
		},
	},
};
</script>
