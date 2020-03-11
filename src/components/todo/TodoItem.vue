<template>
	<td
		class="flex w-1/2 px-6 py-4 pb-4 whitespace-no-wrap bg-purple-200 border-b border-gray-200 rounded-sm"
	>
		<label class="flex custom-label">
			<div
				class="flex items-center justify-center w-6 h-6 p-1 mr-2 bg-white shadow"
			>
				<input
					v-on:click="isComplete = true"
					type="checkbox"
					class="hidden"
					:checked="isComplete"
				/>
				<svg
					class="w-4 h-4 text-green-600 pointer-events-none"
					viewBox="0 0 172 172"
				>
					<g
						fill="none"
						stroke-width="none"
						stroke-miterlimit="10"
						font-family="none"
						font-weight="none"
						font-size="none"
						text-anchor="none"
						style="mix-blend-mode:normal"
					>
						<path d="M0 172V0h172v172z" />
						<path
							d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
							fill="currentColor"
							stroke-width="1"
						/>
					</g>
				</svg>
			</div>
			<span class="select-none">
				<div>
					<div class="text-sm leading-5 text-gray-900">{{ title }}</div>
					<div class="text-sm leading-5 text-gray-500">{{ description }}</div>
				</div>
			</span>
		</label>
	</td>
</template>
<style scoped>
.custom-label input:checked + svg {
	display: block !important;
}
</style>
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
		},
		dueDate: {
			type: Date,
		},
		assignees: {
			type: Array,
		},
	},
};
</script>
