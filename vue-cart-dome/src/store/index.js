import Vue from 'vue'
import Vuex from 'vuex'
import care from './modules/care.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    care
  }
})
