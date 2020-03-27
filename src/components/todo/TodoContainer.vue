<template>
	<div class="w-full h-full bg-gray-100 md:w-1/2">
		<div v-if="showDeleteModal">
			<todo-delete-modal @closeModal="handleCloseModal" :id="idToDelete" />
		</div>
		<div v-if="todayViewEnabled || weeklyViewEnabled">
			<p class="pb-1 border-b border-gray-300">Today, {{ formatDate(todaysDate) }}</p>
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
				<p class="pt-6 pb-1 border-b border-gray-300">{{ longFormatDate(date) }}</p>
				<div v-click-outside="resetSelectedTodoItem">
					<div v-for="(todo, id) in todoList" :key="id">
						<todo-item
							:id="id"
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
export default {
	name: 'TodoContainer',
	components: {
		TodoItem,
		TodoDeleteModal,
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
			showDeleteModal: false,
			idToDelete: '',
			thisWeekDates: [],
		};
	},
	methods: {
		deleteTodo: function(id) {
			this.idToDelete = id;
			this.showDeleteModal = true;
		},
		handleCloseModal: function(e) {
			if (e.deleted) {
				this.$emit('deleteTodoItem', e.id);
			}
			this.showDeleteModal = false;
		},
		sendClickedTodoItem: function(todo) {
			this.$emit('sendTodoItemEvent', todo);
		},
		resetSelectedTodoItem: function() {
			this.$emit('sendTodoItemEvent', {});
		},
		formatDate: function(date, isDueDate) {
			if (isDueDate) {
				return format(fromUnixTime(date), 'PPP');
			}
			return format(date, 'PPP');
		},
		longFormatDate: function(date) {
			return format(date, 'PPPP');
		},
		compareTodoDueDate: function(date) {
			if (date == null) {
				return false;
			} else {
				return (
					this.formatDate(date.seconds, true) ===
					this.formatDate(this.todaysDate, false)
				);
			}
		},
		compareTwoDates: function(d1, d2) {
			if (d1 == null || d2 == null) {
				return false;
			} else {
				return this.formatDate(d1.seconds, true) === this.formatDate(d2, false);
			}
		},
	},
	created() {
		for (let i = 1; i < 8; ++i) {
			this.thisWeekDates.push(addDays(this.todaysDate, i));
		}
	},
};
</script>
