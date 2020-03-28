<template>
	<div class="w-full h-full bg-gray-100 md:w-1/2">
		<todo-delete-modal
			:show-modal="showDeleteModal"
			@closeModal="handleCloseModal"
			:id="todoToDelete.id"
		/>
		<div v-if="selectedView === 'Today' || selectedView === 'Weekly'">
			<p class="pb-1 border-b border-gray-300">Today, {{ todaysDate }}</p>
			<div>
				<div v-for="(todo, id) in todoList[todaysDate]" :key="selectedView + todaysDate + id">
					<todo-item
						:id="id"
						:title="todo.title"
						:description="todo.description"
						:date="new Date()"
						@deleteTodoId="deleteTodo"
						v-on:click.native="sendClickedTodoItem(id, todo)"
					></todo-item>
				</div>
			</div>
		</div>
		<div v-if="selectedView === 'Weekly'">
			<div v-for="date in thisWeekDates" :key="selectedView + date">
				<p class="pt-6 pb-1 border-b border-gray-300">{{ longFormatDate(date) }}</p>

				<div v-for="(todo, id) in todoList[formatDate(date)]" :key="selectedView + date + id">
					<todo-item
						:id="id"
						:title="todo.title"
						:description="todo.description"
						:date="date"
						@deleteTodoId="deleteTodo"
						v-on:click.native="sendClickedTodoItem(id, todo)"
					></todo-item>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { compareAsc, format, fromUnixTime, addDays } from 'date-fns';
import TodoItem from '@/components/todo/TodoItem';
import TodoDeleteModal from '@/components/todo/TodoDeleteModal';
import { getTodosOnDate, getTodosForRange } from '@/api/todo';
import { auth } from '@/firebaseConfig';
import store from '@/store';

export default {
	name: 'TodoContainer',
	components: {
		TodoItem,
		TodoDeleteModal,
	},
	props: {
		selectedView: {
			type: String,
			default: 'Today',
		},
	},
	data: function() {
		return {
			todaysDate: this.formatDate(new Date()),
			showDeleteModal: false,
			todoToDelete: {},
			thisWeekDates: [],
		};
	},
	methods: {
		deleteTodo: function(todo) {
			this.todoToDelete = { id: todo.id, date: todo.date };
			this.showDeleteModal = true;
		},
		addTodoToStore: function(id, todo) {
			store.dispatch('addTodoToStore', { id: id, todo: todo });
		},
		handleCloseModal: function(e) {
			if (e.deleted) {
				store.dispatch('deleteTodoFromStore', {
					id: this.todoToDelete.id,
					date: this.formatDate(this.todoToDelete.date),
				});
			}
			this.showDeleteModal = false;
		},
		sendClickedTodoItem: function(id, todo) {
			store.dispatch('setCurrentSelectedTodo', { id: id, ...todo });
		},
		formatDate: function(date) {
			return format(date, 'PPP');
		},
		longFormatDate: function(date) {
			return format(date, 'PPPP');
		},
		getTodayTasks: async function() {
			const today = new Date();
			await getTodosOnDate(auth.currentUser.uid, today, this.addTodoToStore);
		},
		getWeeksTasks: async function() {
			await getTodosForRange(
				auth.currentUser.uid,
				this.thisWeekDates[0],
				this.thisWeekDates[this.thisWeekDates.length - 1],
				this.addTodoToStore,
			);
		},
	},
	created: function() {
		this.getTodayTasks();
		const today = new Date();
		for (let i = 1; i < 8; ++i) {
			this.thisWeekDates.push(addDays(today, i));
		}
	},
	computed: {
		todoList: function() {
			return store.state.todos;
		},
	},
	watch: {
		selectedView: function() {
			if (this.selectedView === 'Today') {
				this.getTodayTasks();
			} else if (this.selectedView === 'Weekly') {
				this.getWeeksTasks();
			}
		},
	},
};
</script>
