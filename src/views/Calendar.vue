<template>
	<div class="h-full px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<calendar :events="events" />
	</div>
</template>
<script>
import { formatISO, startOfDay, parse, fromUnixTime } from 'date-fns';
import { getTodosForRange } from '@/api/todo';
import Calendar from '@/components/calendar';
import { auth } from '@/firebaseConfig';
import store from '@/store';

export default {
	components: {
		Calendar,
	},
	data: function() {
		return {
			events: [
				// {
				// 	title: 'Event Title1',
				// 	start: '2020-04-04T13:13:55.008',
				// 	end: '2020-04-06T13:13:55.008',
				// },
				// {
				// 	title: 'Event Title2',
				// 	start: '2020-04-05T13:13:55-0400',
				// 	end: '2020-04-07T13:13:55-0400',
				// },
				// {
				// 	title: 'Now',
				// 	start: formatISO(new Date()),
				// 	end: formatISO(new Date()),
				// },
			],
		};
	},
	methods: {
		getTasksForMonth: async function(startMonth, endMonth) {
			await getTodosForRange(
				auth.currentUser.uid,
				startMonth,
				endMonth,
				this.addTodoToStore,
			);
		},
		addTodoToStore: function(id, todo) {
			store.dispatch('addTodoToStore', { id: id, todo: todo });
		},
	},
	computed: {
		currentCalendarViewDates: function() {
			return store.state.currentCalendarViewDates;
		},
		todoList: function() {
			return store.state.todos;
		},
	},
	watch: {
		currentCalendarViewDates: function() {
			this.getTasksForMonth(
				this.currentCalendarViewDates.startDate,
				this.currentCalendarViewDates.endDate,
			);
		},
		todoList: function() {
			const events = [];
			for (let [k, v] of Object.entries(this.todoList)) {
				for (let [id, eventDetails] of Object.entries(v)) {
					events.push({
						title: eventDetails.title,
						date: formatISO(fromUnixTime(eventDetails.dueDate.seconds)),
					});
				}
			}
			this.events = events;
		},
	},
};
</script>
