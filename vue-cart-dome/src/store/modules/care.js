// const state = {}
// const getters = {}
// const actions = {}
// const mutations = {}

// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations
// }
export default {
  namespaced: true,
  state () {
    return {
      list: []
    }
  },
  getters: {
    total (state) {
      return state.list.reduce((sum, item) => sum + item.count, 0)
    },
    totalPrice (state) {
      return state.list.reduce((sum, item) => sum + item.Price * item.count, 0)
    }
  },
  actions: {
    getList (context) {
      setTimeout(() => {
        const res = [
          {
            id: 10002,
            name: '商品1',
            count: 2,
            image:
              'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
            Price: 150
          },
          {
            id: 10003,
            name: '商品2',
            count: 2,
            image:
              'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
            Price: 350
          },
          {
            id: 10004,
            name: '商品3',
            count: 2,
            image:
              'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
            Price: 140
          },
          {
            id: 10005,
            name: '商品4',
            count: 2,
            image:
              'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
            Price: 220
          }
        ]
        context.commit('updataList', res)
      }, 1000)
    },
    updateCount (context, payload) {
      context.commit('addPrice', payload)
    }
  },
  mutations: {
    updataList (state, newList) {
      state.list = newList
    },
    addPrice (state, payload) {
      const goods = state.list.find((item) => item.id === payload.id)
      goods.count = payload.newcount
    }
  }
}
