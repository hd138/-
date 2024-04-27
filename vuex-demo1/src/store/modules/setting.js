// setting模块
const state = {
  theme: 'lighr',
  desc: '码农烧烤'
}
const mutations = {
  handleTheme (state, val) {
    state.theme = val
  }
}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
