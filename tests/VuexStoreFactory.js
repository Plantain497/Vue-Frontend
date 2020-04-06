import Vuex from 'vuex';
import {
	convertDateToFormattedDate,
	convertTimeStampToFormattedDate,
} from '@/utils/DateTools';

const store = new Vuex.Store({
	state: {
		// Current Todo
		currentSelectedTodo: {},

		// Date --> Todo Id --> Data
		todos: {
			'April 6th, 2020': [
				{
					title: 'Temporary testing task title',
					description: 'Temporary testing task description',
					updatedAt: new Date(),
					dueDate: new Date(),
					isCompleted: false,
				},
			],
		},

		// currentCalendarViewDates
		currentCalendarViewDates: {},
	},
	getters: {
		getTodos: state => {
			return state.todos;
		},
		getCurrentSelectedTodo: state => {
			return state.currentSelectedTodo;
		},
		getTodosOnDate: state => date => {
			const formattedDate = convertDateToFormattedDate(date);
			return state.todos[formattedDate];
		},
	},
	mutations: {
		// put sychronous functions for changing state e.g. add, edit, delete
		addTodoToStore: function(state, payload) {
			const { id, todo } = payload;
			const date = convertTimeStampToFormattedDate(todo.dueDate.seconds);

			const currentTodosForDate = state.todos[[date]];
			const newTodosForDate = { ...currentTodosForDate, [id]: todo };
			Vue.set(state.todos, [date], newTodosForDate);
		},

		deleteTodoFromStore: function(state, payload) {
			const { id, date } = payload;

			const currentTodosForDate = state.todos[[date]];
			delete currentTodosForDate[id];
			const newTodosForDate = { ...currentTodosForDate };

			Vue.set(state.todos, [date], newTodosForDate);
		},

		setCurrentSelectedTodo: function(state, payload) {
			Vue.set(state, 'currentSelectedTodo', payload);
		},

		setCurrentCalendarDateView: function(state, payload) {
			Vue.set(state, 'currentCalendarViewDates', payload);
		},
	},
	actions: {
		// put asynchronous functions that can call one or more mutation functions
		addTodoToStore: function(context, payload) {
			// Input: id, todo
			context.commit('addTodoToStore', payload);
		},
		deleteTodoFromStore: function(context, payload) {
			// Input: id, date
			context.commit('deleteTodoFromStore', payload);
		},
		setCurrentSelectedTodo: function(context, payload) {
			context.commit('setCurrentSelectedTodo', payload);
		},
		setCurrentCalendarDateView: function(context, payload) {
			context.commit('setCurrentCalendarDateView', payload);
		},
	},
});

export default store;
