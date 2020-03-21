<template>
	<div>
		<landing-nav-bar />
		<hero />
		<features />
		<!-- <testimonial /> -->
		<!-- <logo-cloud /> -->
		<call-to-action />
		<Footer />
	</div>
</template>

<script>
import Hero from '@/components/landing/Hero.vue';
import LandingNavBar from '@/components/landing/LandingNavBar';
import Features from '@/components/landing/Features';
// import Testimonial from '@/components/landing/Testimonial';
// import LogoCloud from '@/components/landing/LogoCloud';
import CallToAction from '@/components/landing/CallToAction';
import Footer from '@/components/landing/Footer';

export default {
	components: { Hero, LandingNavBar, Features, CallToAction, Footer },
};
</script>
