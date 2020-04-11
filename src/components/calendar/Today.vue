<template>
	<full-calendar
		ref="todayCalendar"
		:header="header"
		:buttonText="{
			today: 'Today',
		}"
		height="parent"
		:views="views"
		default-view="todayView"
		contentHeight="18rem"
		:editable="true"
		:selectable="true"
		:columnHeaderFormat="{
			weekday: 'short',
			omitCommas: true,
		}"
		:plugins="calendarPlugins"
		:events="events"
		@datesRender="changeCalendarViewDates"
	/>
</template>
<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { format } from 'date-fns';
import store from '@/store';

export default {
	components: {
		FullCalendar,
	},
	props: {
		events: Array,
	},
	data() {
		return {
			calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
			header: {
				left: 'today',
				right: 'prev,next',
			},
			views: {
				todayView: {
					type: 'timeGrid',
					slotDuration: '01:00:00',
					allDayText: 'All-Day',
					nowIndicator: true,
					buttonText: 'Week',
				},
			},
		};
	},
	methods: {
		changeCalendarViewDates: function(args) {
			const currentStart = args.view.currentStart;
			const currentEnd = args.view.currentEnd;
			store.dispatch('setCurrentCalendarDateView', {
				startDate: currentStart,
				endDate: currentEnd,
			});
		},
	},
};
</script>

<style lang="css" scoped>
@import './core.css';
@import './daygrid.css';
@import './timegrid.css';

@import './custom.css';
</style>
