import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import vco from 'v-click-outside';
import VueGAPI from 'vue-gapi';
import firebase from 'firebase';
import { firestorePlugin } from 'vuefire';

const firebaseConfig = {
	apiKey: process.env.VUE_APP_APIKEY,
	authDomain: `${process.env.VUE_APP_PROJECTID}.firebaseapp.com`,
	databaseURL: `https://${process.env.VUE_APP_PROJECTID}.firebaseio.com`,
	projectId: process.env.VUE_APP_PROJECTID,
	storageBucket: `${process.env.VUE_APP_PROJECTID}.appspot.com`,
	messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
	appId: process.env.VUE_APP_APPID,
	measurementId: process.env.VUE_APP_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);

Vue.use(firestorePlugin);

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
