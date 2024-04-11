// 文件核心作用：导入App.vue,基于App.vue创建结构渲染index.html
// 1.导入核心包
import Vue from 'vue';
// 导入app.vue
import App from './App.vue';

import Find from './views/Find';
import My from './views/My';
import Friend from './views/Friend';
Vue.config.productionTip = false;

// 路由的使用步骤 5+2
// 1. 下载vue-router3.6.5
// 2. 引入
import VueRouter from 'vue-router';

// 3.安装注册Vue.use
Vue.use(VueRouter); // VueRouter插件初始化
// 4.创建路由对象
const router = new VueRouter({
	routes: [
		{ path: '/find', component: Find },
		{ path: '/my', component: My },
		{ path: '/friend', component: Friend },
	],
});
// 5.注入到new Vue中建立关联
new Vue({
	router, // Inject the router object into the Vue instance
	render: h => h(App),
}).$mount('#app');

// 俩个核心步骤
// 1. 建组件 配规则
// 2. 准备导航链接，配置路由出口
