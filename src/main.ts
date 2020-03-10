// import vco from 'v-click-outside';
import Vue from 'vue';
import App from './App.vue';
import './assets/tailwind.css';
import router from './router';
import vco from 'v-click-outside';

Vue.use(vco);

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
