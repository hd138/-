import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home';
import Search from '@/views/Search';
import NotFind from '@/views/NotFind';

Vue.use(VueRouter);

const router = new VueRouter({
	// 注意一旦使用了history模式，地址栏就没有# 需要后台配置访问规则
	routes: [
		{ path: '/', redirect: '/home ' },
		{ path: '/home', component: Home },
		{ name: 'search', path: '/search/:words?', component: Search },
		{ path: '*', component: NotFind },
	],
	mode: 'history',
});
 
export default router;
