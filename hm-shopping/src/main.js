import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/common.css'
// import Vant from 'vant'
// import 'vant/lib/index.css'

// 插件安装初始化：内部会将所有的vant所有的组件进行导入注册
// Vue.use(Vant)

import '@/utils/vant-ui.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
