<template>
	<transition
		name="custom-landing-nav-transition"
		enter-active-class="duration-150 ease-out"
		enter-class="scale-95 opacity-0"
		enter-to-class="scale-100 opacity-100"
		leave-active-class="duration-100 ease-in"
		leave-class="scale-100 opacity-100"
		leave-to-class="scale-95 opacity-0"
	>
		<div
			class="absolute inset-x-0 top-0 p-2 md:hidden"
			v-if="hamburgerOpen"
			v-click-outside="closeHamburger"
		>
			<div class="transition origin-top-right transform rounded-lg shadow-md">
				<div class="overflow-hidden bg-white rounded-lg shadow-xs">
					<div class="flex items-center justify-between px-5 pt-4">
						<div>
							<img class="w-auto h-8" src="@/assets/shortLogo.svg" alt="" />
						</div>
						<div class="-mr-2">
							<button
								v-on:click="hamburgerOpen = false"
								type="button"
								class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
							>
								<hamburger-close />
							</button>
						</div>
					</div>
					<div class="px-2 pt-2 pb-3">
						<a
							href="#"
							class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
						>
							Plantain
						</a>
						<a
							href="#"
							class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
						>
							Features
						</a>
						<a
							href="#"
							class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
						>
							Getting Started
						</a>
					</div>
					<landing-mini-button
						classes="text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:bg-gray-100 focus:text-indigo-700"
					/>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
import LandingMiniButton from '@/components/buttons/GoogleSignIn/LandingMiniButton.vue';
import HamburgerClose from '@/components/buttons/Hamburger/HamburgerClose';

export default {
	components: {
		HamburgerClose,
		LandingMiniButton,
	},
	data: function() {
		return {
			hamburgerOpen: false,
		};
	},
	methods: {
		closeHamburger: function() {
			this.hamburgerOpen = false;
		},
	},
};
</script>
