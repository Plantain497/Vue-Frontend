<template>
	<div class="w-1/2 overflow-hidden rounded shadow-lg">
		<img
			class="w-full"
			src="@/assets/card-top.jpg"
			alt="Sunset in the mountains"
		/>
		<div class="px-6 py-4">
			<div class="mb-2 text-xl font-bold">The Coldest Sunset</div>
			<p class="text-base text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
				quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
				nihil.
			</p>
		</div>
		<div class="px-6 py-4">
			<span
				class="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
			>
				#photography
			</span>
			<span
				class="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
			>
				#travel
			</span>
			<span
				class="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full"
			>
				#winter
			</span>
		</div>
	</div>
</template>
<script>
export default {
	name: 'TodoDescription',
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
