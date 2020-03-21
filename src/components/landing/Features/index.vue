<template>
	<div id="Features" class="py-12 bg-gray-100">
		<div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
			<section-header
				classes="lg:text-center"
				section-breadcrumb="Features"
				breadcrumb-classes="text-indigo-600 font-semibold"
				section-title="Productivity Anywhere"
				title-classes="text-gray-900 font-extrabold"
				section-subtitle="Remote work is difficult. Plantain expedites communcation and productivity
			so you never miss a beat."
				subtitle-classes="text-gray-500"
			/>
			<div class="mt-10">
				<feature-grid />
			</div>
		</div>
	</div>
</template>
<script>
import SectionHeader from '@/components/landing/Features/SectionHeader';
import FeatureGrid from '@/components/landing/Features/FeatureGrid';
export default {
	components: {
		FeatureGrid,
		SectionHeader,
	},
};
</script>
