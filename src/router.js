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
			path: '/contact',
			name: 'Contact',
			component: () => import('./views/Contact.vue')
		},
		{
			path: '/faq',
			name: 'Faq',
			component: () => import('./views/Faq.vue')
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('./views/About.vue')
		}
	]
});
