<template>
	<div class="w-full h-full bg-gray-100 md:w-1/2">
		<div v-if="todayViewEnabled || weeklyViewEnabled">
			<p class="pb-1 border-b border-gray-300">Today, {{ todaysDate }}</p>
			<div v-click-outside="resetSelectedTodoItem">
				<div v-for="todo in todoList" :key="todo.title">
					<todo-item
						:title="todo.title"
						:description="todo.description"
						v-on:click.native="sendClickedTodoItem(todo)"
						v-if="todo.dueDate == todaysDate"
					></todo-item>
				</div>
			</div>
		</div>
		<div v-if="weeklyViewEnabled">
			<p class="pt-6 border-b border-gray-300">WEEKLY VIEW ENABLED</p>
			<div v-click-outside="resetSelectedTodoItem">
				<div v-for="todo in todoList" :key="todo.title">
					<todo-item
						:title="todo.title"
						:description="todo.description"
						v-on:click.native="sendClickedTodoItem(todo)"
					></todo-item>
				</div>
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
		todayViewEnabled: {
			type: Boolean,
		},
		weeklyViewEnabled: {
			type: Boolean,
		},
		todaysDate: {
			type: String,
		},
	},
	methods: {
		sendClickedTodoItem: function(todo) {
			this.$emit('sendTodoItemEvent', todo);
		},
		resetSelectedTodoItem: function() {
			this.$emit('sendTodoItemEvent', {});
		},
	},
};
</script>
