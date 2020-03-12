<template>
	<div class="h-full ml-10 mr-5 bg-gray-200 rounded-lg shadow-sm">
		<div class="px-6 py-4">
			<div class="mb-2 text-xl font-bold">The Coldest Sunset</div>
			<p class="text-base text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
				quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
				nihil.
			</p>
		</div>
	</div>
</template>
<script>
import TodoItem from '@/components/todo/TodoItem';
export default {
	name: 'TodoDescription',
	props: {
		selectedTodo: TodoItem,
	},
};
</script>
