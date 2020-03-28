<template>
	<div class="h-64 rounded-lg shadow bg-gray-50">
		<div class="px-4 py-5 bg-white border-b border-gray-200 rounded-t-lg sm:px-6">
			<div class="flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-no-wrap">
				<div class="mt-4 ml-4">
					<h3 class="text-lg font-medium leading-6 text-gray-900">{{ selectedTodo.title }}</h3>
					<p class="mt-1 text-sm leading-5 text-gray-500">Due {{ formatDate(selectedTodo.dueDate) }}</p>
				</div>
				<div class="flex-shrink-0 mt-4 ml-4">
					<span class="inline-flex rounded-md shadow-sm">
						<button
							type="button"
							class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-white bg-red-500 border border-transparent rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-600 active:bg-red-600 hover:bg-red-600"
						>Delete</button>
					</span>
				</div>
			</div>
		</div>
		<div
			class="px-6 py-5 text-base font-normal leading-5 text-gray-900"
		>{{ selectedTodo.description }}</div>
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
