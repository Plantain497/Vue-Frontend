<template>
	<div
		class="flex items-center px-6 py-4 pb-4 whitespace-no-wrap transition duration-150 ease-in-out border-b border-gray-300 rounded-sm hover:bg-purple-200"
	>
		<input
			:checked="isComplete"
			v-on:click="isComplete = !isComplete"
			type="checkbox"
			class="form-checkbox"
		/>
		<span class="w-full ">
			<div class="pl-6">
				<p class="w-11/12 text-sm leading-5 text-gray-900 truncate">
					{{ title }}
				</p>
				<p class="w-11/12 text-sm leading-5 text-gray-500 truncate">
					{{ description }}
				</p>
			</div>
		</span>

		<div v-on:click="deletePrompt">
			<delete
				heightClass="h-8"
				widthClass="w-8"
				class="text-gray-500 hover:text-gray-700 focus:text-gray-700"
			/>
		</div>
	</div>
</template>
<script>
import Delete from '@/assets/Icons/Delete';

export default {
	name: 'TodoItem',
	components: {
		Delete,
	},
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
	},
};
</script>
