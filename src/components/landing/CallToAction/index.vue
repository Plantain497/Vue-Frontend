<template>
	<div class="bg-gray-100" id="GettingStarted">
		<div
			class="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
		>
			<h2
				class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
			>
				Ready to dive in?
				<br />
				<span class="text-indigo-600">Sign in with Google now</span>
			</h2>
			<div class="flex mt-8 lg:flex-shrink-0 lg:mt-0">
				<div class="inline-flex rounded-md shadow">
					<google-sign-in-button
						classes="inline-flex items-center justify-center bg-indigo-600 text-white hover:bg-indigo-500 border border-transparent rounded-md px-5 py-3 text-base font-medium leading-6"
					/>
				</div>
				<div class="inline-flex ml-3 rounded-md shadow">
					<router-link
						to="/faq"
						class="inline-flex items-center justify-center px-5 py-3 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-indigo-500 focus:outline-none focus:shadow-outline"
					>
						Learn more
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import GoogleSignInButton from '@/components/buttons/GoogleSignIn/GoogleSignInButton';

export default {
	components: {
		GoogleSignInButton,
	},
};
</script>
