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
				center: 'weekView,monthView',
				right: 'today prev,next',
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
				{
					title:
						'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quod obcaecati corrupti soluta in ab delectus maxime non. Vitae consequatur sapiente dolores animi consectetur deserunt, cum magni libero saepe rem!',
					date: '2020-04-01',
				},
				{ title: 'event 2', date: '2020-04-02' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
/*! purgecss start ignore */
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';

@import './custom.css';
/*! purgecss end ignore */
</style>
