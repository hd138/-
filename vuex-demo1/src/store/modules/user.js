// user模块

const state = {
  userInfo: {
    name: 'zs',
    age: 16
  },
  score: 20
}
const mutations = {
  handleName (state, val) {
    state.userInfo.name = val
  },
  handleVal (state, num) {
    state.score = num
  }
}
const actions = {
  timeScore (context, num) {
  // 调用mutations context上下文，默认提交就i是自己模块的方法
    setTimeout(() => {
      context.commit('handleVal', num)
    }, 1000)
  }
}
const getters = {
  // 分模块后，state指代子模块的state
  UpperCaseName (state) {
    return state.userInfo.name.toUpperCase()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
