import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('./views/Home.vue')
		},
		{
			path: '/faq',
			name: 'Faq',
			component: () => import('./views/Faq.vue')
		}
	]
});
