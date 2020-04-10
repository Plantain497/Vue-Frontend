<template>
	<div
		class="flex justify-between px-6 py-4 pb-4 whitespace-no-wrap transition duration-200 ease-in-out border-b border-gray-200 rounded-sm rounded-md hover:shadow-md hover:bg-purple-50"
	>
		<div class="flex items-center truncate">
			<input :checked="isComplete" v-on:click="completeTodo" type="checkbox" class="form-checkbox" />
			<span class="truncate">
				<div class="px-6 truncate">
					<p
						class="text-sm leading-5 truncate"
						:class="{'task-complete': isComplete, 'text-gray-900': !isComplete}"
					>{{ title }}</p>
					<p
						class="text-sm leading-5 truncate"
						:class="{'task-complete': isComplete, 'text-gray-500': !isComplete}"
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
		isComplete: {
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
		completeTodo: function() {
			this.$emit('completeTodo', { id: this.id });
		},
	},
};
</script>
<style scoped>
.task-complete {
	@apply line-through;
	@apply text-gray-400;
}
</style>
