<template>
	<nav
		v-if="['Landing', 'FAQ', 'Login'].includes($route.name) === false"
		class="bg-gray-800"
	>
		<div class="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
			<div class="relative flex items-center justify-between h-16">
				<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
					<button
						v-on:click="hamburgerOpen = !hamburgerOpen"
						class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
					>
						<hamburger :is-open="hamburgerOpen" />
					</button>
				</div>
				<div
					class="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start"
				>
					<div class="flex-shrink-0">
						<img
							class="block w-auto h-8 lg:hidden"
							src="@/assets/shortLogo.svg"
							alt="Short Logo"
						/>
						<img
							class="hidden w-auto h-8 lg:block"
							src="@/assets/fullLogo.svg"
							alt="Full Logo"
						/>
					</div>
					<div class="hidden sm:block sm:ml-6">
						<div class="flex">
							<router-link
								to="/dashboard"
								:class="{
									'text-white bg-gray-900': $route.name === 'Dashboard',
								}"
								class="px-3 py-2 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
							>
								Dashboard
							</router-link>
							<router-link
								to="/todo"
								:class="{
									'text-white bg-gray-900': $route.name === 'Todo',
								}"
								class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
							>
								To-Do
							</router-link>
							<router-link
								to="/calendar"
								:class="{
									'text-white bg-gray-900': $route.name === 'Calendar',
								}"
								class="px-3 py-2 ml-4 text-sm font-medium leading-5 text-gray-300 transition duration-150 ease-in-out rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
							>
								Calendar
							</router-link>
						</div>
					</div>
				</div>
				<div
					class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
				>
					<button
						class="p-1 text-gray-400 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
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
								d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
							/>
						</svg>
					</button>
					<div class="relative ml-3">
						<button
							v-on:click="settingsOpen = !settingsOpen"
							class="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-white"
						>
							<div v-if="basicProfile">
								<img
									class="w-8 h-8 rounded-full"
									v-if="basicProfile.QK !== ''"
									:src="basicProfile.QK"
									loading="lazy"
									alt="Avatar"
								/>
								<span
									class="flex items-center justify-center w-8 h-8 text-base text-white bg-indigo-500 rounded-full"
									v-else
								>
									<h3>{{ basicProfile.Ad[0] }}</h3>
								</span>
							</div>
							<div
								v-else
								class="flex items-center justify-center w-8 h-8 text-base text-white bg-gray-300 rounded-full"
							></div>
						</button>
						<!--
              enter: Part A (initial state)
              to: Part B (end state)
              active: HOW we get from A to B
						-->
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
								v-if="settingsOpen"
								class="absolute right-0 w-40 mt-2 origin-top-right rounded-md shadow-lg"
							>
								<div
									class="py-1 bg-white rounded-md shadow-xs"
									v-click-outside="closeSettings"
								>
									<router-link
										to="/profile"
										class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
									>
										Your Profile
									</router-link>
									<router-link
										to="/settings"
										class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
									>
										Settings
									</router-link>
									<button
										v-on:click="logout"
										class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
									>
										Sign out
									</button>
								</div>
							</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
		<div
			:class="{ block: hamburgerOpen, hidden: !hamburgerOpen }"
			class="sm:hidden"
		>
			<div class="px-2 pt-2 pb-3">
				<router-link
					to="/dashboard"
					:class="{
						'text-white bg-gray-900': $route.name === 'Dashboard',
					}"
					class="block px-3 py-2 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
				>
					Dashboard
				</router-link>
				<router-link
					to="/todo"
					:class="{
						'text-white bg-gray-900': $route.name === 'Todo',
					}"
					class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
				>
					To-Do
				</router-link>
				<router-link
					to="/calendar"
					:class="{
						'text-white bg-gray-900': $route.name === 'Calendar',
					}"
					class="block px-3 py-2 mt-1 text-base font-medium text-gray-300 transition duration-150 ease-in-out rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
				>
					Calendar
				</router-link>
			</div>
		</div>
	</nav>
</template>
<script>
import Hamburger from '@/components/buttons/Hamburger/Hamburger';
export default {
	components: {
		Hamburger,
	},
	data() {
		return {
			hamburgerOpen: false,
			settingsOpen: false,
			basicProfile: {},
		};
	},
	methods: {
		logout: function() {
			this.$gapi.logout(() => {
				this.closeSettings();
				this.$router.push('/');
			});
		},
		closeSettings: function() {
			this.settingsOpen = false;
		},
	},
	created: function() {
		this.$gapi.getGapiClient().then(gapi => {
			this.basicProfile = gapi.auth2
				.getAuthInstance()
				.currentUser.get()
				.getBasicProfile();
		});
	},
};
</script>
