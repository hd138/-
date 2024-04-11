import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Search from '@/views/Search';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '/home', component: Home },
		{ path: '/search/:words?', component: Search },
	],
});

export default router;
