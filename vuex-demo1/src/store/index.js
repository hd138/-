import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  // 严格模式 (有利于初学者 检测不规范的代码 上线需要关闭)
  strict: true,
  // 通过stare可以提供数据（所有的组件共享的数据）
  state: {
    title: '大标题',
    count: 100,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  getters: {
    // 类似于计算属性
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  },
  // 通过mutation可以提供修改数据的方法
  // 注意点：mutations参数有且只能有一个，如果需要多个参数，包装成一个对象或者数组
  mutations: {
    addCount (state, obj) {
      state.count += obj.val
    },
    subCount (state, val) {
      state.count -= val
    },
    handleVal (state, val) {
      state.count = val
    },
    // addFive (state) {
    //   state.count += 5
    // },
    changeTitle (state, newTitle) {
      state.title = newTitle
    }
  },
  // actions处理异步 注意不能直接操作state，操作state 还是需要commit mutation
  actions: {
    // context上下文 （此处未分模块，可以当成store仓库）
    // context.commit('mutations名字',额外参数)
    changeCountAction (context, num) {
      // 这里是setTimeout模拟异步，以后大部分场景是发送请求
      setTimeout(() => {
        context.commit('handleVal', num)
      }, 1000)
    }
  },
  modules: {
    user,
    setting
  }
})
