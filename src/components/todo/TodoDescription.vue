<template>
	<div class="h-full ml-10 mr-5 rounded-lg">
		<div class="px-6 py-4">
			<p class="text-xl font-bold break-words">{{ selectedTodo.title }}</p>
			<p class="pb-4 text-gray-600 text-md">{{ selectedTodo.dueDate }}</p>
			<p class="text-base text-gray-700 break-words">
				{{ selectedTodo.description }}
			</p>
		</div>
	</div>
</template>
<script>
export default {
	name: 'TodoDescription',
	props: {
		selectedTodo: {
			type: Object,
		},
	},
};
</script>
