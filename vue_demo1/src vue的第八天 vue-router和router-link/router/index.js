import Vue from 'vue';
import VueRouter from 'vue-router';
import Find from '@/views/Find';
import Friend from '@/views/Friend';
import My from '@/views/My';
Vue.use(VueRouter);

const router = new VueRouter({
	linkActiveClass: 'active', //模糊匹配的类名
	linkExactActiveClass: 'exact-active', // 精确匹配的类名
	routes: [
		{ path: '/find', component: Find },
		{ path: '/friend', component: Friend },
		{ path: '/my', component: My },
	],
});

export default router;
