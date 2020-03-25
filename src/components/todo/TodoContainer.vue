<template>
	<div class="w-full h-full bg-gray-100 md:w-1/2">
		<div v-if="show">
			<todo-delete-modal @closeModal="handleCloseModal" :id="idToDelete" />
		</div>
		<div v-if="todayViewEnabled || weeklyViewEnabled">
			<p class="pb-1 border-b border-gray-300">
				Today, {{ formatDate(todaysDate) }}
			</p>
			<div v-click-outside="resetSelectedTodoItem">
				<div v-for="(todo, id) in todoList" :key="id">
					<todo-item
						:id="id"
						:title="todo.title"
						:description="todo.description"
						v-on:click.native="sendClickedTodoItem(todo)"
						@deleteTodoId="deleteTodo"
						v-if="compareTodoDueDate(todo.dueDate)"
					></todo-item>
				</div>
			</div>
		</div>
		<div v-if="weeklyViewEnabled">
			<div v-for="date in thisWeekDates" :key="date">
				<p class="pt-6 pb-1 border-b border-gray-300">
					{{ longFormatDate(date) }}
				</p>
				<div v-click-outside="resetSelectedTodoItem">
					<div v-for="(todo, id) in todoList" :key="id">
						<todo-item
							v-if="compareTwoDates(todo.dueDate, date)"
							@deleteTodoId="deleteTodo"
							:title="todo.title"
							:description="todo.description"
							v-on:click.native="sendClickedTodoItem(todo)"
						></todo-item>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { compareAsc, format, fromUnixTime, addDays } from 'date-fns';
import TodoItem from '@/components/todo/TodoItem';
import TodoDeleteModal from '@/components/todo/TodoDeleteModal';
// import { deleteToDo } from '@/api/todo';
export default {
	name: 'TodoContainer',
	components: {
		TodoItem,
		TodoDeleteModal,
	},
	data: function() {
		return {
			show: false,
			idToDelete: '',
		};
	},
	props: {
		todoList: {
			type: Object,
		},
		todayViewEnabled: {
			type: Boolean,
		},
		weeklyViewEnabled: {
			type: Boolean,
		},
		todaysDate: {
			type: Date,
		},
	},
	data: function() {
		return {
			thisWeekDates: [],
		};
	},
	methods: {
		deleteTodo: function(id) {
			this.idToDelete = id;
			this.show = true;
		},
		handleCloseModal: function() {
			this.show = false;
		},
		sendClickedTodoItem: function(todo) {
			this.$emit('sendTodoItemEvent', todo);
		},
		resetSelectedTodoItem: function() {
			this.$emit('sendTodoItemEvent', {});
		},
		dateFormat: function(newDate) {
			return newDate.toDateString();
		},
		dueDateConvert: function(dueDate) {
			return new Date(dueDate * 1000);
		},
		formatDate: function(date) {
			return format(date, 'PPP');
		},
		longFormatDate: function(date) {
			return format(date, 'PPPP');
		},
		fromUnixTime: fromUnixTime,
		compareTodoDueDate: function(date) {
			if (date == null) {
				return false;
			} else {
				return (
					this.formatDate(fromUnixTime(date.seconds)) ===
					this.formatDate(this.todaysDate)
				);
			}
		},
		compareTwoDates: function(d1, d2) {
			if (d1 == null || d2 == null) {
				return false;
			} else {
				console.log('date 1 ' + d1);
				console.log('date 2 ' + d2);
				return (
					this.formatDate(fromUnixTime(d1.seconds)) === this.formatDate(d2)
				);
			}
		},
	},
	created() {
		for (var i = 1; i < 8; ++i) {
			this.thisWeekDates.push(addDays(this.todaysDate, i));
		}
	},
};
</script>
