<template>
	<div class="h-full px-2 py-8 mx-auto bg-gray-100 max-w-7xl sm:px-6 lg:px-8">
		<calendar />
	</div>
</template>
<script>
import Calendar from '@/components/calendar';

export default {
	components: {
		Calendar,
	},
};
</script>
