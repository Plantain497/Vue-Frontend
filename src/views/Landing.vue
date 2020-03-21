<template>
	<div>
		<landing-nav-bar />
		<hero />
		<features />
	</div>
</template>

<script>
import Hero from '@/components/landing/Hero.vue';
import LandingNavBar from '@/components/landing/LandingNavBar';
import Features from '@/components/landing/Features';

export default {
	components: { Hero, LandingNavBar, Features },
};
</script>
