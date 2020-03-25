<template>
	<div class="h-full px-4 rounded-lg lg:px-12">
		<div class="px-6 py-4">
			<p class="text-xl font-bold break-words">{{ selectedTodo.title }}</p>
			<p class="pb-4 text-gray-600 text-md">
				{{ formatDate(selectedTodo.dueDate) }}
			</p>
			<p class="text-base text-gray-700 break-words">
				{{ selectedTodo.description }}
			</p>
		</div>
	</div>
</template>
<script>
import { format, fromUnixTime } from 'date-fns';
export default {
	name: 'TodoDescription',
	props: {
		selectedTodo: {
			type: Object,
		},
	},
	methods: {
		formatDate: function(dueDate) {
			if (dueDate) {
				return format(fromUnixTime(dueDate.seconds), 'PPP');
			}
			return '';
		},
	},
};
</script>
