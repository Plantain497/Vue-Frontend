<template>
	<div>
		<landing-nav-bar />
		<hero />
	</div>
</template>

<script>
import Hero from '@/components/landing/Hero.vue';
import LandingNavBar from '@/components/landing/LandingNavBar';

export default {
	components: { Hero, LandingNavBar },
};
</script>
