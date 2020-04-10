import Vue from 'vue';
import Vuex from 'vuex';
import {
	convertDateToFormattedDate,
	convertTimeStampToFormattedDate,
} from '@/utils/DateTools';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		// Current Todo
		currentSelectedTodo: {},

		// Date --> Todo Id --> Data
		todos: {},

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

		updateTodoInStore: function(state, payload) {
			const { id, date, todo } = payload;
			const formattedDate = convertDateToFormattedDate(date);
			const currentTodosForDate = state.todos[[formattedDate]];
			currentTodosForDate[id] = todo;
			Vue.set(state.todos, [formattedDate], currentTodosForDate);
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
		updateTodoInStore: function(context, payload) {
			// Input: id, date, todo
			context.commit('updateTodoInStore', payload);
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
