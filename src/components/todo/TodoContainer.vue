<template>
	<div class="w-full h-auto bg-gray-100 md:w-1/2">
		<todo-delete-modal
			:show-modal="showDeleteModal"
			@closeModal="handleCloseModal"
			:id="todoToDelete.id"
		/>
		<div v-if="selectedView === 'Today' || selectedView === 'Weekly'">
			<p
				class="pb-1 text-gray-400 border-b border-gray-200"
				:class="{
					'text-gray-700': todoList[todaysDate],
				}"
			>Today, {{ todaysDate }}</p>

			<transition-group name="item-group" tag="div" mode="out-in">
				<div v-for="(todo, id) in todoList[todaysDate]" :key="todaysDate + id">
					<todo-item
						:key="id"
						:id="id"
						:title="todo.title"
						:description="todo.description"
						:date="new Date()"
						@completeTodo="handleCompleteTodo"
						@deleteTodoId="deleteTodo"
						v-on:click.native="sendClickedTodoItem(id, todo)"
					></todo-item>
				</div>
			</transition-group>
		</div>
		<div v-if="selectedView === 'Weekly'">
			<div v-for="date in thisWeekDates" :key="selectedView + date">
				<p
					class="pt-6 pb-1 text-gray-400 border-b border-gray-200"
					:class="{
						'text-gray-700': todoList[formatDate(date)],
					}"
				>{{ longFormatDate(date) }}</p>

				<transition-group name="item-group" tag="div" mode="out-in">
					<div v-for="(todo, id) in todoList[formatDate(date)]" :key="date + id">
						<todo-item
							:key="id"
							:id="id"
							:title="todo.title"
							:description="todo.description"
							:date="date"
							@completeTodo="handleCompleteTodo"
							@deleteTodoId="deleteTodo"
							v-on:click.native="sendClickedTodoItem(id, todo)"
						></todo-item>
					</div>
				</transition-group>
			</div>
		</div>
		<div v-if="selectedView === 'All Tasks'">
			<p
				class="pb-1 text-gray-400 border-b border-gray-200"
				:class="{
					'text-gray-700': todoList,
				}"
			>All Tasks</p>

			<transition-group name="item-group" tag="div" mode="out-in">
				<div v-for="(todo, id) in todoList" :key="id">
					<todo-item
						:key="id"
						:id="id"
						:title="todo.title"
						:description="todo.description"
						:date="None"
						@completeTodo="handleCompleteTodo"
						@deleteTodoId="deleteTodo"
						v-on:click.native="sendClickedTodoItem(id, todo)"
					></todo-item>
				</div>
			</transition-group>
		</div>
	</div>
</template>
<script>
import { compareAsc, format, fromUnixTime, addDays } from 'date-fns';
import TodoItem from '@/components/todo/TodoItem';
import TodoDeleteModal from '@/components/todo/TodoDeleteModal';
import { getTodosOnDate, getTodosForRange, getAllTodos } from '@/api/todo';
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
		handleCompleteTodo: function(todo) {
			const { id, date, ...todoData } = todo;
			store.dispatch('updateTodoInStore', {
				id: id,
				date: date,
				todo: todoData,
			});
		},
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
		getAllTasks: async function() {
			console.log(this.todoList);
			await getAllTodos(auth.currentUser.uid, this.addTodoToStore);
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
			} else if (this.selectedView === 'All Tasks') {
				this.getAllTasks();
			}
		},
	},
};
</script>
<style scoped>
.item-group-enter-active,
.item-group-leave-active {
	transition: all 200ms ease-in-out;
}
.item-group-enter,
.item-group-leave-to {
	opacity: 0;
	transform: scale(0.9);
}
</style>
