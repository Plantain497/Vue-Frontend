<template>
	<svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
		<!-- {/* 3 lines */} -->
		<path
			v-if="!isOpen"
			class="inline-flex"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		></path>
		<!-- {/* X */} -->

		<path
			v-if="isOpen"
			class="inline-flex"
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		></path>
	</svg>
</template>
<script>
export default {
	name: 'Hamburger',
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
