<template>
	<div class="px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<div
			class="flex justify-between w-full h-auto"
			v-click-outside="resetCurrentTodo"
		>
			<todo-container selected-view="Today" today-classes="text-2xl pb-3" />
			<div class="flex-1 hidden ml-8 md:block">
				<div class="w-full h-40vh">
					<calendar :events="events" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { auth } from '@/firebaseConfig';
import { getTodosForRange } from '@/api/todo';
import { formatISO, startOfDay, parse, fromUnixTime } from 'date-fns';
import store from '@/store';
import TodoContainer from '@/components/todo/TodoContainer';
import Calendar from '@/components/calendar/Today';

export default {
	name: 'Dashboard',
	components: {
		Calendar,
		TodoContainer,
	},
	data: function() {
		return {
			events: [],
			calendarEvents: [],
			combinedEvents: [],
		};
	},
	methods: {
		combineEvents: function() {
			this.combinedEvents = this.calendarEvents.concat(this.events);
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
						backgroundColor: '#1c64f2',
						borderColor: '#1c64f2',
					});
				}
				this.calendarEvents = calendarEvents;
			});
		},
		resetCurrentTodo: function() {
			store.dispatch('setCurrentSelectedTodo', {});
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
		events: function() {
			this.combineEvents();
		},
		calendarEvents: function() {
			this.combineEvents();
		},
	},
};
</script>
<style scoped>
.h-40vh {
	height: 40vh;
}
</style>
