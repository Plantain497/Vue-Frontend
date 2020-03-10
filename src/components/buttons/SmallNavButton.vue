<template>
	<span :class="classObject" role="button" v-on:click="itemClicked">
		{{ itemName }}
	</span>
</template>

<script>
export default {
	props: {
		itemName: {
			type: String,
			required: true,
			default: '',
		},
		currentSelected: {
			type: String,
			default: '',
		},
		classes: {
			type: String,
			default: '',
		},
		inverted: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		classObject: function() {
			const base = [
				this.classes,
				'block px-3 py-2 text-base font-medium transition duration-150 ease-in-out rounded-md',
			];
			if (this.inverted) {
				if (this.itemName === this.currentSelected) {
					base.push(
						'text-purple-500 focus:bg-gray-200 focus:text-purple-700 hover:bg-gray-200 hover:text-purple-700',
					);
				} else {
					base.push(
						'text-gray-500 focus:bg-gray-200 focus:text-purple-700 hover:bg-gray-200 hover:text-purple-700',
					);
				}
			} else {
				if (this.itemName === this.currentSelected) {
					base.push(
						'text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700',
					);
				} else {
					base.push(
						'text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700',
					);
				}
			}

			return base;
		},
	},
	methods: {
		itemClicked() {
			this.$emit('interface', this.itemName);
		},
	},
};
</script>
