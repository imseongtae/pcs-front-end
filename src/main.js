import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';

import Cookies from 'js-cookie';

Vue.config.productionTip = false;

const init = () => {
	const savedToken = Cookies.get('accessToken');
	if (savedToken) {
		return store.dispatch('signinByToken', savedToken);
	} else {
		return Promise.resolve();
	}
};

init().then(() => {
	new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount('#app');
});
