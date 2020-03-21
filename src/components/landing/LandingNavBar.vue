<template>
	<nav
		class="max-w-screen-xl px-2 pt-2 mx-auto mt-2 font-sans antialiased bg-gray-100 sm:px-6 lg:px-8"
	>
		<div class="relative flex items-center justify-between h-16">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button
					v-on:click="hamburgerOpen = !hamburgerOpen"
					class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
				>
					<hamburger :is-open="hamburgerOpen" />
				</button>
			</div>
			<div class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0">
					<img src="@/assets/shortLogo.svg" class="block w-auto h-10 lg:hidden" alt="Logo" />
					<img src="@/assets/shortLogo.svg" class="hidden w-auto h-10 lg:block" alt="Logo" />
				</div>

				<!-- {/* Large Menu */} -->

				<div class="hidden sm:block sm:ml-6">
					<div class="flex">
						<large-nav-button
							item-name="Plantain"
							:inverted="true"
							:current-selected="currentSelected"
							@interface="handleClick"
						/>
						<large-nav-button
							item-name="Features"
							classes="ml-4"
							:inverted="true"
							:current-selected="currentSelected"
							@interface="handleClick"
						/>
						<large-nav-button
							item-name="Getting Started"
							classes="ml-4"
							:inverted="true"
							:current-selected="currentSelected"
							@interface="handleClick"
						/>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pb-1 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<span class="inline-flex rounded-md shadow-md">
					<google-sign-in-button
						classes="bg-purple-600 text-white rounded-md shadow-xs hover:text-gray-100 hover:bg-purple-700"
					/>
				</span>
			</div>
		</div>

		<!-- Small Menu -->

		<div class="sm:hidden" v-if="hamburgerOpen">
			<div class="px-2 pt-2 pb-3">
				<small-nav-button
					item-name="Plantain"
					:inverted="true"
					:current-selected="currentSelected"
					@interface="handleClick"
				/>
				<small-nav-button
					item-name="Features"
					classes="mt-1"
					:inverted="true"
					:current-selected="currentSelected"
					@interface="handleClick"
				/>
				<small-nav-button
					item-name="Getting Started"
					classes="mt-1"
					:inverted="true"
					:current-selected="currentSelected"
					@interface="handleClick"
				/>
			</div>
		</div>
	</nav>
</template>

<script>
import Hamburger from '@/components/buttons/Hamburger.vue';
import LargeNavButton from '@/components/buttons/LargeNavButton.vue';
import GoogleSignInButton from '@/components/buttons/GoogleSignInButton.vue';
import SmallNavButton from '@/components/buttons/SmallNavButton';

export default {
	data() {
		return {
			hamburgerOpen: false,
			currentSelected: 'Plantain',
		};
	},
	components: {
		Hamburger,
		LargeNavButton,
		GoogleSignInButton,
		SmallNavButton,
	},
	methods: {
		handleClick(newSelected) {
			this.currentSelected = newSelected;
		},
	},
};
</script>
