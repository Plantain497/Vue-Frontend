<template>
	<div class="relative pt-6 pb-4 lg:pb-6">
		<nav
			class="relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6"
		>
			<div class="flex items-center flex-1">
				<div class="flex items-center justify-between w-full md:w-auto">
					<a href="/">
						<img
							class="w-auto h-8 sm:h-10"
							src="@/assets/shortLogo.svg"
							alt="Logo"
						/>
					</a>
					<div class="flex items-center -mr-2 md:hidden">
						<button
							v-on:click="hamburgerOpen = !hamburgerOpen"
							type="button"
							class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
						>
							<three-lines />
						</button>
					</div>
				</div>
				<div class="hidden md:block md:ml-10">
					<a
						href="#"
						class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
					>
						Product
					</a>
					<a
						href="#"
						class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
					>
						Features
					</a>
					<a
						href="#"
						class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
					>
						Getting Started
					</a>
				</div>
			</div>
			<div class="hidden text-right md:block">
				<span class="inline-flex rounded-md shadow-md">
					<google-sign-in-button
						classes="bg-purple-600 text-white rounded-md shadow-xs hover:text-gray-100 hover:bg-purple-700"
					/>
				</span>
			</div>
		</nav>

		<transition
			name="custom-landing-nav-transition"
			enter-active-class="duration-150 ease-out"
			enter-class="scale-95 opacity-0"
			enter-to-class="scale-100 opacity-100"
			leave-active-class="duration-100 ease-in"
			leave-class="scale-100 opacity-100"
			leave-to-class="scale-95 opacity-0"
		>
			<div class="absolute inset-x-0 top-0 p-2 md:hidden" v-if="hamburgerOpen">
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
									<svg
										class="w-6 h-6"
										stroke="currentColor"
										fill="none"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
						</div>
						<div class="px-2 pt-2 pb-3">
							<a
								href="#"
								class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
							>
								Product
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
						<div>
							<a
								href="#"
								class="block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700"
							>
								Log in
							</a>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import ThreeLines from '@/components/buttons/Hamburger/ThreeLines';
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
		ThreeLines,
		// 	LargeNavButton,
		GoogleSignInButton,
		// 	SmallNavButton,
	},
	methods: {
		handleClick(newSelected) {
			this.currentSelected = newSelected;
		},
	},
};
</script>
