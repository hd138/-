import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/views/Layout';
import ArticleDerail from '@/views/ArticleDerail';
import Article from '@/views/Article';
import Like from '@/views/Like';
import User from '@/views/User';
import Collect from '@/views/Collect';
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{ path: '/', component: Layout, redirect: '/article' },
		{
			path: '/layout',
			component: Layout,
			// 通过 children配置项，可以配置嵌套子路由
			// 1. 在children配置项中，配规则
			// 2.准备二级路由出口

			children: [
				{
					path: '/article',
					component: Article,
				},
				{
					path: '/like',
					component: Like,
				},
				{
					path: '/user',
					component: User,
				},
				{
					path: '/collect',
					component: Collect,
				},
			],
		},
		{ path: '/articleDerail/:id?', component: ArticleDerail },
	],
});

export default router;
