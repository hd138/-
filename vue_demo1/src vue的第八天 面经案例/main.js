// 文件核心作用：导入App.vue,基于App.vue创建结构渲染index.html
// 1.导入核心包
import Vue from 'vue';
// 导入app.vue
import App from './App.vue';

Vue.config.productionTip = false;

import router from '@/router/index';

// 5.注入到new Vue中建立关联
new Vue({
	render: h => h(App),
	router,
}).$mount('#app');

// 俩个核心步骤
// 1. 建组件 配规则
// 2. 准备导航链接，配置路由出口
