import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import vco from 'v-click-outside';
import VueGAPI from 'vue-gapi';

Vue.use(vco);

const apiConfig = {
	apiKey: process.env.VUE_APP_APIKEY,
	clientId: process.env.VUE_APP_CLIENTID,
	scope: 'https://www.googleapis.com/auth/calendar',
	discoveryDocs: [
		'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
	],
};

Vue.use(VueGAPI, apiConfig);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
