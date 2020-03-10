<template>
	<button
		class="flex items-center justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out border border-transparent rounded focus:outline-none focus:shadow-outline"
		:class="classes"
	>
		{{ text }}
	</button>
</template>
<script>
// Todo: Add Auth
export default {
	props: {
		text: {
			type: String,
			default: 'Sign In',
		},
		classes: {
			type: String,
		},
	},
};
</script>
