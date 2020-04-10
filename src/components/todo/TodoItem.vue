<template>
	<div
		class="flex justify-between px-6 py-4 pb-4 whitespace-no-wrap transition duration-200 ease-in-out border-b border-gray-200 rounded-sm rounded-md hover:shadow-md hover:bg-purple-50"
	>
		<div class="flex items-center truncate">
			<input
				:checked="isCompleted"
				@change="completeTodo"
				type="checkbox"
				class="text-gray-400 form-checkbox"
			/>
			<span class="truncate">
				<div class="px-6 truncate">
					<p
						class="text-sm leading-5 truncate"
						:class="{'task-complete': isCompleted, 'text-gray-900': !isCompleted}"
					>{{ title }}</p>
					<p
						class="text-sm leading-5 truncate"
						:class="{'task-complete': isCompleted, 'text-gray-500': !isCompleted}"
					>{{ description }}</p>
				</div>
			</span>
		</div>
	</div>
</template>
<script>
// import Delete from '@/assets/Icons/Delete';

export default {
	name: 'TodoItem',
	props: {
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
		id: {
			type: String,
		},
		date: {
			type: Date,
		},
	},
	methods: {
		deletePrompt: function() {
			this.$emit('deleteTodoId', { id: this.id, date: this.date });
		},
		completeTodo: function(e) {
			this.$emit('completeTodo', {
				id: this.id,
				title: this.title,
				description: this.description,
				isCompleted: e.target.checked,
				date: this.date,
			});
		},
	},
};
</script>
<style scoped>
.task-complete {
	/* @apply line-through; */
	@apply text-gray-400;
	@apply transition;
	@apply duration-150;
	@apply ease-in-out;
}
</style>
