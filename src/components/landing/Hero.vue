<template>
	<div
		id="Plantain"
		class="max-w-screen-xl px-4 mx-auto mt-4 overflow-hidden sm:mb-8 sm:mt-8 sm:px-6 lg:px-8"
	>
		<div class="lg:grid lg:grid-cols-12 lg:gap-8">
			<div class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
				<simple-notification
					title="Sucessfully subscribed!"
					subtitle="Check your email to see future updates!"
					:show="showNotification"
					@closeNotification="showNotification = false"
				/>
				<div
					class="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base"
				>Coming soon</div>
				<h2
					class="mt-2 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
				>
					Beautiful tools to
					<br class="hidden md:inline" />
					<span class="text-indigo-600">supercharge planning</span>
				</h2>
				<p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
					Getting deliverables completed remotely has never been easier. With
					Plantain, you'll be able to plan faster, move quicker, and focus on
					what really matters.
				</p>
				<div class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
					<p class="text-base font-medium text-gray-900">Sign up to get notified when it’s ready.</p>
					<div class="mt-3 sm:mt-4 sm:flex">
						<div class="relative w-full">
							<input
								aria-label="Email"
								class="block w-full px-3 py-3 text-base leading-6 placeholder-gray-500 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 sm:flex-1"
								:class="{'border-red-300 text-red-900 placeholder-red-500 focus:border-red-300 focus:shadow-outline-red': error}"
								placeholder="Enter your email"
								v-model="email"
							/>
							<div
								class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
								v-if="error"
							>
								<svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>
						</div>

						<button
							v-on:click="subscribeUser"
							class="w-full px-6 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
						>Notify me</button>
					</div>
					<p class="pb-2 mt-6 text-sm leading-5 text-gray-500 sm:mt-4">
						We care about the protection of your data. Read our
						<a
							href="#"
							class="font-medium text-gray-900 underline"
						>Privacy Policy</a>
					</p>
				</div>
			</div>
			<div
				class="relative pb-16 mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
			>
				<svg
					class="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 md:-translate-y-0"
					width="640"
					height="784"
					fill="none"
					viewBox="0 0 640 784"
				>
					<defs>
						<pattern
							id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
							x="118"
							y="0"
							width="20"
							height="20"
							patternUnits="userSpaceOnUse"
						>
							<rect x="0" y="0" width="4" height="4" class="text-gray-300" fill="currentColor" />
						</pattern>
					</defs>

					<rect x="102" width="480" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
				</svg>
				<div class="w-full mx-auto rounded-lg shadow-lg lg:max-w-md">
					<button
						class="relative block w-full overflow-hidden border-2 rounded-lg focus:outline-none focus:shadow-outline"
					>
						<img class="w-full" :src="image" alt="Plantain Demo" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import image from '@/assets/LandingDemo.png';
import SimpleNotification from '@/components/notifications/SimpleNotification';
export default {
	name: 'Hero',
	data: function() {
		return {
			image: image,
			email: '',
			error: false,
			showNotification: false,
		};
	},
	components: {
		SimpleNotification,
	},
	methods: {
		emailValidation: function(testEmail) {
			const re = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
			return !re.test(testEmail);
		},
		subscribeUser: function() {
			if (this.emailValidation(this.email)) {
				this.error = true;
			} else {
				this.showNotification = true;
				this.error = false;
				setTimeout(() => {
					this.showNotification = false;
				}, 2000);
			}
		},
	},
};
</script>
