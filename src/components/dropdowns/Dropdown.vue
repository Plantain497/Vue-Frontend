<template>
	<div class="relative inline-block text-left">
		<div>
			<span class="rounded-md shadow-sm">
				<button
					v-on:click="open = !open"
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
				>
					{{ currentOption }}
					<svg
						class="w-5 h-5 ml-2 -mr-1"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			</span>
		</div>
		<transition
			name="custom-classes-transition"
			enter-class="transform scale-95 opacity-0"
			enter-active-class="transition duration-100 ease-out"
			enter-to-class="transform scale-100 opacity-100"
			leave-class="transform scale-100 opacity-100"
			leave-active-class="transition duration-75 ease-in"
			leave-to-class="transform scale-95 opacity-0"
		>
			<div
				v-if="open"
				class="absolute left-0 w-32 mt-2 origin-top-right rounded-md shadow-lg"
				v-click-outside="closeSettings"
			>
				<div class="bg-white rounded-md shadow-xs">
					<div>
						<button
							v-on:click="changeCurrentOption"
							class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
						>
							Today
						</button>
						<button
							v-on:click="changeCurrentOption"
							class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
						>
							Weekly View
						</button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'Dropdown',
	data: function() {
		return {
			open: false,
			currentOption: 'Today',
		};
	},
	methods: {
		changeCurrentOption: function(e) {
			this.currentOption = e.target.innerText;
			this.open = false;
		},
		closeSettings: function() {
			this.open = false;
		},
	},
};
</script>
