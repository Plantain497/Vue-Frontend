<template>
	<div class="bg-gray-100">
		<landing-nav-bar :absolute="true" />

		<div
			class="max-w-screen-xl px-4 py-4 mx-auto overflow-hidden sm:mb-8 sm:mt-8 sm:px-6 lg:px-8"
		>
			<h2
				class="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10"
			>
				Frequently asked questions
			</h2>
			<div class="pt-8 mt-8 border-t-2 border-gray-200">
				<dl>
					<div class="md:grid md:grid-cols-12 md:gap-8">
						<dt
							class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
						>
							What's the best thing about Switzerland?
						</dt>
						<dd class="mt-2 md:mt-0 md:col-span-7">
							<p class="text-base leading-6 text-gray-500">
								I don't know, but the flag is a big plus. Lorem ipsum dolor sit
								amet consectetur adipisicing elit. Quas cupiditate laboriosam
								fugiat.
							</p>
						</dd>
					</div>
					<div
						class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
					>
						<dt
							class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
						>
							How do you make holy water?
						</dt>
						<dd class="mt-2 md:mt-0 md:col-span-7">
							<p class="text-base leading-6 text-gray-500">
								You boil the hell out of it. Lorem ipsum dolor sit amet
								consectetur adipisicing elit. Magnam aut tempora vitae odio
								inventore fuga aliquam nostrum quod porro. Delectus quia facere
								id sequi expedita natus.
							</p>
						</dd>
					</div>
					<div
						class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
					>
						<dt
							class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
						>
							What do you call someone with no body and no nose?
						</dt>
						<dd class="mt-2 md:mt-0 md:col-span-7">
							<p class="text-base leading-6 text-gray-500">
								Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus
								exercitationem sapiente tempore labore voluptatem.
							</p>
						</dd>
					</div>
					<div
						class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
					>
						<dt
							class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
						>
							What is the least spoken language in the world?
						</dt>
						<dd class="mt-2 md:mt-0 md:col-span-7">
							<p class="text-base leading-6 text-gray-500">
								Sign language. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Quas cupiditate laboriosam fugiat.
							</p>
						</dd>
					</div>
					<div
						class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
					>
						<dt
							class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
						>
							Why can't you hear a pterodactyl go to the bathroom?
						</dt>
						<dd class="mt-2 md:mt-0 md:col-span-7">
							<p class="text-base leading-6 text-gray-500">
								Because the pee is silent. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Ipsam, quas voluptatibus ex culpa
								ipsum, aspernatur blanditiis fugiat ullam magnam suscipit
								deserunt illum natus facilis atque vero consequatur! Quisquam,
								debitis error.
							</p>
						</dd>
					</div>
					<div
						class="pt-6 mt-8 border-t border-gray-200 md:grid md:grid-cols-12 md:gap-8"
					>
						<dt
							class="text-base font-medium leading-6 text-gray-900 md:col-span-5"
						>
							Why did the invisible man turn down the job offer?
						</dt>
						<dd class="mt-2 md:mt-0 md:col-span-7">
							<p class="text-base leading-6 text-gray-500">
								He couldn't see himself doing it. Lorem ipsum dolor sit, amet
								consectetur adipisicing elit. Eveniet perspiciatis officiis
								corrupti tenetur. Temporibus ut voluptatibus, perferendis sed
								unde rerum deserunt eius.
							</p>
						</dd>
					</div>
				</dl>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import LandingNavBar from '@/components/landing/LandingNavBar';
import Footer from '@/components/landing/Footer';

export default {
	components: {
		LandingNavBar,
		Footer,
	},
};
</script>
