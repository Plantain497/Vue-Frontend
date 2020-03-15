<template>
	<div
		class="flex items-center px-6 py-4 pb-4 whitespace-no-wrap border-b border-gray-300 rounded-sm hover:bg-purple-200"
	>
		<input
			:checked="isComplete"
			v-on:click="isComplete = !isComplete"
			type="checkbox"
			class="form-checkbox"
		/>
		<span class="w-full">
			<div class="pl-6">
				<p class="w-11/12 text-sm leading-5 text-gray-900 truncate">{{ title }}</p>
				<p class="w-11/12 text-sm leading-5 text-gray-500 truncate">{{ description }}</p>
			</div>
		</span>
	</div>
</template>
<script>
export default {
	name: 'TodoItem',
	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		isComplete: {
			type: Boolean,
			default: false,
		},
		dueDate: {
			type: String,
		},
		assignees: {
			type: Array,
		},
		id: {
			type: Number,
		},
	},
};
</script>
