// 文件核心作用：导入App.vue,基于App.vue创建结构渲染index.html
// 1.导入核心包
import Vue from 'vue';
// 导入app.vue
import App from './App.vue';

// 提示当前处于什么环境（生产/开发）
Vue.config.productionTip = false;

// 全局注册组件
// vue 实例化，提供render方法>基于app.vue创建结构渲染index.html
new Vue({
	// el:'#app', 作用：和$mount('#app');作用一致，用于指定vue所管理容器
	// render: h => h(App),
	render: createElement => {
		return createElement(App);
	},
}).$mount('#app');
