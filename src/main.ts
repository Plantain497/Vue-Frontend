// import vco from 'v-click-outside';
import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import vco from 'v-click-outside';
import GAuth from 'vue-google-oauth2';

Vue.use(vco);

const gAuthOption = {
	clientId: process.env.VUE_APP_GAPI,
	scope: 'https://www.googleapis.com/auth/calendar',
	prompt: 'select_account',
};

Vue.use(GAuth, gAuthOption);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
