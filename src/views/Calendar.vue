<template>
	<div class="h-full px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<calendar :events="combineEvents()" />
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
			events: [],
			calendarEvents: [],
		};
	},
	methods: {
		combineEvents: function() {
			return this.calendarEvents.concat(this.events);
		},
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
		getCalendarEvents: async function() {
			this.$gapi.getGapiClient().then(async gapi => {
				const res = await gapi.client.calendar.events.list({
					calendarId: 'primary',
					timeMin: new Date().toISOString(),
				});
				const calendarItems = res.result.items;
				const calendarEvents = [];
				for (let event of Object.values(calendarItems)) {
					calendarEvents.push({
						title: event.summary,
						start: event.start.dateTime,
						end: event.end.dateTime,
					});
				}
				this.calendarEvents = calendarEvents;
			});
		},
	},
	created: function() {
		this.getCalendarEvents();
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
