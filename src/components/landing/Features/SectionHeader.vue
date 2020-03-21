<template>
	<div :class="classes" class="lg:text-center">
		<p
			:class="breadcrumbClasses"
			class="text-base leading-6 tracking-wide uppercase"
		>
			{{ sectionBreadcrumb }}
		</p>
		<h3
			:class="titleClasses"
			class="mt-2 text-3xl leading-8 tracking-tight sm:text-4xl sm:leading-10"
		>
			{{ sectionTitle }}
		</h3>
		<p
			:class="subtitleClasses"
			class="max-w-2xl mt-4 text-xl leading-7 lg:mx-auto"
		>
			{{ sectionSubtitle }}
		</p>
	</div>
</template>
<script>
export default {
	props: {
		classes: {
			type: String,
		},
		sectionBreadcrumb: {
			type: String,
		},
		sectionTitle: {
			type: String,
		},
		sectionSubtitle: {
			type: String,
		},
		breadcrumbClasses: {
			type: String,
		},
		titleClasses: {
			type: String,
		},
		subtitleClasses: {
			type: String,
		},
	},
};
</script>
