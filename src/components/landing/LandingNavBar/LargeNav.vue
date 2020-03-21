<template>
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
					Plantain
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
</template>
<script>
import ThreeLines from '@/components/buttons/Hamburger/ThreeLines';
import GoogleSignInButton from '@/components/buttons/GoogleSignIn/GoogleSignInButton.vue';

export default {
	components: {
		ThreeLines,
		GoogleSignInButton,
	},
	data: function() {
		return {
			hamburgerOpen: false,
		};
	},
};
</script>
