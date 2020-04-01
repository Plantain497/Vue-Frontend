<template>
	<full-calendar
		:header="header"
		:buttonText="{
			today: 'Today',
			month: 'Month',
			week: 'Week',
			day: 'Day',
		}"
		height="parent"
		:views="views"
		default-view="monthView"
		contentHeight="auto"
		:editable="true"
		:selectable="true"
		:columnHeaderFormat="{
			weekday: 'short',
			month: 'numeric',
			day: 'numeric',
			omitCommas: true,
		}"
		:plugins="calendarPlugins"
		:events="events"
	/>
</template>
<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

export default {
	components: {
		FullCalendar,
	},
	data() {
		return {
			calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
			header: {
				left: 'title',
				center: '',
				right: 'today weekView,monthView prev,next',
			},
			views: {
				weekView: {
					type: 'timeGridWeek',
					slotDuration: '01:00:00',
					allDayText: 'All-Day',
					nowIndicator: true,
					buttonText: 'Week',
				},
				monthView: {
					type: 'dayGridMonth',
					buttonText: 'Month',
				},
			},
			events: [
				{ title: 'event 1', date: '2020-04-01' },
				{ title: 'event 2', date: '2020-04-02' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import './core.css';
@import './daygrid.css';
@import './timegrid.css';
</style>
