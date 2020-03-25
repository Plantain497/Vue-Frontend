<template>
	<div>
		<div class="flex justify-between pb-1" v-if="label">
			<label :for="inputId" class="block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
			<span class="text-sm leading-5 text-gray-500">{{ hint }}</span>
		</div>
		<div class="relative">
			<input
				:aria-label="inputId"
				:id="inputId"
				class="block w-full px-3 py-3 text-base leading-6 placeholder-gray-500 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 sm:flex-1"
				:class="{
					heightClass: true,
					'border-red-300 text-red-900 placeholder-red-500 focus:border-red-300 focus:shadow-outline-red': error,
					'border-gray-300 placeholder-gray-500 focus:border-blue-300 focus:shadow-outline': !error
				}"
				:placeholder="placeholder"
				v-model="content"
				v-on:input="updateValue"
			/>

			<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none" v-if="error">
				<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data: function() {
		return {
			content: '',
		};
	},
	props: {
		heightClass: {
			type: String,
			default: 'py-3',
		},
		inputId: {
			type: String,
			required: true,
		},
		hint: {
			type: String,
		},
		placeholder: {
			type: String,
		},
		label: {
			type: String,
		},
		error: {
			type: Boolean,
		},
	},
	methods: {
		updateValue: function() {
			this.$emit('input', this.content);
		},
	},
};
</script>